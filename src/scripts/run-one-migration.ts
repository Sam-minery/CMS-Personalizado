/**
 * Helper para aplicar una sola migración por nombre.
 *
 * Uso (desde la raíz del proyecto):
 *   pnpm run migrate:one 20260203_111759
 *   npm run migrate:one 20260203_111759
 *
 * Requiere: pnpm add -D tsx (o usar node con --experimental-strip-types si usas Node 22+).
 */
import 'dotenv/config'
import { createLocalReq, getPayload } from 'payload'
import config from '../payload.config'
import { migrations } from '../migrations'

const migrationName = process.argv[2]

if (!migrationName) {
  console.error('Uso: pnpm run migrate:one <nombre_migración>')
  console.error('Ejemplo: pnpm run migrate:one 20260203_111759')
  process.exit(1)
}

const migration = migrations.find((m) => m.name === migrationName)
if (!migration) {
  console.error(`Migración no encontrada: ${migrationName}`)
  console.error('Nombres válidos:', migrations.map((m) => m.name).join(', '))
  process.exit(1)
}

async function main() {
  const payload = await getPayload({ config })
  const req = await createLocalReq({}, payload)

  const { docs: existing } = await payload.find({
    collection: 'payload-migrations',
    where: { name: { equals: migrationName } },
    limit: 1,
  })
  if (existing.length > 0) {
    console.log(`La migración ${migrationName} ya está aplicada.`)
    process.exit(0)
  }

  const { docs: latestBatchDocs } = await payload.find({
    collection: 'payload-migrations',
    limit: 1,
    sort: '-batch',
  })
  const latestBatch = Number(latestBatchDocs[0]?.batch ?? 0)
  const newBatch = latestBatch + 1

  // La migración espera el cliente Drizzle (con .execute()), no el adapter
  const db = (payload.db as { drizzle?: { execute: (q: unknown) => Promise<unknown> } }).drizzle
  if (!db?.execute) {
    console.error('No se pudo obtener el cliente Drizzle del adapter (payload.db.drizzle).')
    process.exit(1)
  }

  console.log(`Aplicando migración: ${migrationName} (batch ${newBatch})...`)
  try {
    await migration!.up({
      db: db as any,
      payload,
      req,
    })
  } catch (err) {
    console.error('Error al ejecutar la migración:', err)
    process.exit(1)
  }

  await payload.create({
    collection: 'payload-migrations',
    data: { name: migrationName, batch: newBatch },
    req,
  })
  console.log(`Migración ${migrationName} aplicada y registrada.`)
}

main().then(() => process.exit(0)).catch((e) => {
  console.error(e)
  process.exit(1)
})
