import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "font_groups" ADD COLUMN "quote_text_desktop_font_size" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_desktop_line_height" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_desktop_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_desktop_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_mobile_font_size" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_mobile_line_height" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_mobile_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "quote_text_mobile_margin_bottom" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "font_groups" DROP COLUMN "quote_text_desktop_font_size";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_desktop_line_height";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_desktop_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_desktop_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_mobile_font_size";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_mobile_line_height";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_mobile_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "quote_text_mobile_margin_bottom";`)
}
