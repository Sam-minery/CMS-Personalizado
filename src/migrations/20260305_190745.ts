import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cards_senda_cards" ADD COLUMN "back_content_color" varchar;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD COLUMN "user_name_color" varchar;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD COLUMN "back_content_color" varchar;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD COLUMN "user_name_color" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_cards_senda_cards" DROP COLUMN "back_content_color";
  ALTER TABLE "pages_blocks_cards_senda_cards" DROP COLUMN "user_name_color";
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" DROP COLUMN "back_content_color";
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" DROP COLUMN "user_name_color";`)
}
