import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "header_content_max_width" varchar;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "header_content_max_width" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "header_content_max_width";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "header_content_max_width";`)
}
