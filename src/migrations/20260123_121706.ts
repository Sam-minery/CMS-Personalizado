import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner1" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "background_color" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner1" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "background_color";`)
}
