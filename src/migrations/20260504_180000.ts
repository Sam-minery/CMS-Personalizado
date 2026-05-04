import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Añade los campos de auditoría de sincronización con Google Sheets a la
 * collection `leads-formulario`:
 *   - last_sync_at:    timestamp del último append exitoso a Sheets.
 *   - last_sync_error: mensaje del último intento fallido (vacío si todo OK).
 *
 * Ambos son opcionales (no NOT NULL) porque solo se rellenan tras la primera
 * sincronización (los registros previos a esta migración pueden estar a NULL
 * y los rescatará el endpoint /api/sync/leads-formulario-reconcile).
 */
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads_formulario" ADD COLUMN "last_sync_at" timestamp(3) with time zone;
  ALTER TABLE "leads_formulario" ADD COLUMN "last_sync_error" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads_formulario" DROP COLUMN "last_sync_at";
  ALTER TABLE "leads_formulario" DROP COLUMN "last_sync_error";`)
}
