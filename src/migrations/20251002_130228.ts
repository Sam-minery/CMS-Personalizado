import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_spotlight" ALTER COLUMN "description" SET DATA TYPE varchar;
  ALTER TABLE "_pages_v_blocks_spotlight" ALTER COLUMN "description" SET DATA TYPE varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_spotlight" ALTER COLUMN "description" SET DATA TYPE jsonb;
  ALTER TABLE "_pages_v_blocks_spotlight" ALTER COLUMN "description" SET DATA TYPE jsonb;`)
}
