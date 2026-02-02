import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner1" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_background_color" varchar;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_background_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_text_color" varchar;
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner1" ADD COLUMN "heading" varchar DEFAULT 'Medium length banner heading goes here';
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "heading" varchar DEFAULT 'Medium length banner heading goes here';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "content";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_background_color";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_text_color";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "content";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_background_color";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_text_color";`)
}
