import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Convierte la columna title (varchar) a jsonb con USING en career3_depts3.
 * Primero se quita el DEFAULT de la columna (PostgreSQL no puede convertir un default varchar a jsonb).
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  // pages_blocks_career3_depts3: quitar default y luego cambiar tipo
  await db.execute(sql`
    ALTER TABLE "pages_blocks_career3_depts3"
    ALTER COLUMN "title" DROP DEFAULT;
  `)
  await db.execute(sql`
    ALTER TABLE "pages_blocks_career3_depts3"
    ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text);
  `)
  // _pages_v_blocks_career3_depts3: quitar default y luego cambiar tipo
  await db.execute(sql`
    ALTER TABLE "_pages_v_blocks_career3_depts3"
    ALTER COLUMN "title" DROP DEFAULT;
  `)
  await db.execute(sql`
    ALTER TABLE "_pages_v_blocks_career3_depts3"
    ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text);
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_blocks_career3_depts3"
    ALTER COLUMN "title" SET DATA TYPE varchar USING title::text;
  `)
  await db.execute(sql`
    ALTER TABLE "_pages_v_blocks_career3_depts3"
    ALTER COLUMN "title" SET DATA TYPE varchar USING title::text;
  `)
}
