/**
 * Genera src/blocks/enabledBlocks.generated.ts a partir de projectConfig.enabledBlockSlugs.
 * Solo editas la lista en projectConfig; al ejecutar este script se actualiza el archivo generado.
 *
 * Ejecutar: npm run generate:enabled-blocks
 * (Se ejecuta antes de dev para que el layout tenga los bloques correctos.)
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

async function main() {
  const projectConfigPath = path.join(root, 'src', 'projectConfig.ts')
  const manifestPath = path.join(root, 'src', 'blocks', 'blockLoaderManifest.ts')

  const { enabledBlockSlugs } = await import(pathToFileURL(projectConfigPath).href)
  const { BLOCK_LOADER_MANIFEST } = await import(pathToFileURL(manifestPath).href)

  const slugs: string[] = enabledBlockSlugs ?? []

  const header = `/**
 * GENERADO por scripts/generate-enabled-blocks.ts
 * No editar a mano. La lista de bloques se define en src/projectConfig.ts → enabledBlockSlugs.
 * Después de cambiar projectConfig, ejecuta: npm run generate:enabled-blocks
 */
import type { Block } from 'payload'

`

  const imports: string[] = []
  const entries: string[] = []

  for (const slug of slugs) {
    const m = BLOCK_LOADER_MANIFEST[slug]
    if (!m) {
      console.warn(`[generate-enabled-blocks] Slug "${slug}" no está en blockLoaderManifest, se omite.`)
      continue
    }
    imports.push(`import { ${m.exportName} } from '${m.path}'`)
    entries.push(`  ${JSON.stringify(slug)}: ${m.exportName},`)
  }

  const content =
    header +
    imports.join('\n') +
    '\n\n' +
    'export const ENABLED_BLOCKS_BY_SLUG: Record<string, Block> = {\n' +
    entries.join('\n') +
    '\n}\n'

  const outPath = path.join(root, 'src', 'blocks', 'enabledBlocks.generated.ts')
  fs.writeFileSync(outPath, content, 'utf-8')
  console.log(`[generate-enabled-blocks] Escrito ${path.relative(root, outPath)} (${slugs.length} bloques)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
