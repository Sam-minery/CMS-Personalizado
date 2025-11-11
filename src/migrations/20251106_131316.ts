import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_glare_card_cards" DROP COLUMN "class_name";
  ALTER TABLE "_pages_v_blocks_glare_card_cards" DROP COLUMN "class_name";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_glare_card_cards" ADD COLUMN "class_name" varchar;
  ALTER TABLE "_pages_v_blocks_glare_card_cards" ADD COLUMN "class_name" varchar;`)
}
