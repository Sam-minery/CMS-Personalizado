import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Convierte la columna title (varchar) a jsonb con USING en career3_depts3.
 * Necesario porque PostgreSQL no permite ALTER varchar → jsonb sin USING.
 * Idempotente: si ya es jsonb, el DO captura el error.
 */
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DO $$ BEGIN
     ALTER TABLE "pages_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text);
   EXCEPTION WHEN others THEN NULL; END $$;
   DO $$ BEGIN
     ALTER TABLE "_pages_v_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text);
   EXCEPTION WHEN others THEN NULL; END $$;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE varchar USING title::text;
   ALTER TABLE "_pages_v_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE varchar USING title::text;`)
}
