import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h1_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h1_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h2_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h2_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h3_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h3_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h4_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h4_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h5_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h5_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h6_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_h6_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_body_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_body_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_lists_margin_top" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "heading_margins_mobile_lists_margin_bottom" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_h1" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_h2" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_h3" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_h4" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_h5" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_h6" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_body" varchar;
  ALTER TABLE "font_groups" ADD COLUMN "line_heights_mobile_lists" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h1_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h1_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h2_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h2_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h3_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h3_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h4_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h4_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h5_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h5_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h6_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_h6_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_body_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_body_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_lists_margin_top";
  ALTER TABLE "font_groups" DROP COLUMN "heading_margins_mobile_lists_margin_bottom";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_h1";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_h2";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_h3";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_h4";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_h5";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_h6";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_body";
  ALTER TABLE "font_groups" DROP COLUMN "line_heights_mobile_lists";`)
}
