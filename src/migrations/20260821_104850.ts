import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_drop" ADD COLUMN "elements_style_hover_color" varchar DEFAULT '#E91E63';
  ALTER TABLE "imc_drop" ADD COLUMN "category_background_color" varchar DEFAULT '#FDF2F7';
  ALTER TABLE "imc_drop" ADD COLUMN "show_decorative_svg" boolean DEFAULT true;
  ALTER TABLE "imc_drop" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "imc_drop" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "imc_drop" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "lcta_drop" ADD COLUMN "decorative_svg_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "lcta_drop" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "lcta_drop" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "lcta_drop" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "team_drop" ADD COLUMN "accent_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "team_drop" ADD COLUMN "decorative_svg_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "team_drop" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "team_drop" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "team_drop" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "cta_app" ADD COLUMN "decorative_svg_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD COLUMN "elements_style_hover_color" varchar DEFAULT '#E91E63';
  ALTER TABLE "_imc_drop_v" ADD COLUMN "category_background_color" varchar DEFAULT '#FDF2F7';
  ALTER TABLE "_imc_drop_v" ADD COLUMN "show_decorative_svg" boolean DEFAULT true;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_lcta_drop_v" ADD COLUMN "decorative_svg_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "_lcta_drop_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_lcta_drop_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_lcta_drop_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_team_drop_v" ADD COLUMN "accent_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "_team_drop_v" ADD COLUMN "decorative_svg_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "_team_drop_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_team_drop_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_team_drop_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_cta_app_v" ADD COLUMN "decorative_svg_color" varchar DEFAULT '#C2005F';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_drop" DROP COLUMN "elements_style_hover_color";
  ALTER TABLE "imc_drop" DROP COLUMN "category_background_color";
  ALTER TABLE "imc_drop" DROP COLUMN "show_decorative_svg";
  ALTER TABLE "imc_drop" DROP COLUMN "apply_custom_width";
  ALTER TABLE "imc_drop" DROP COLUMN "custom_width_percent";
  ALTER TABLE "imc_drop" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "lcta_drop" DROP COLUMN "decorative_svg_color";
  ALTER TABLE "lcta_drop" DROP COLUMN "apply_custom_width";
  ALTER TABLE "lcta_drop" DROP COLUMN "custom_width_percent";
  ALTER TABLE "lcta_drop" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "team_drop" DROP COLUMN "accent_color";
  ALTER TABLE "team_drop" DROP COLUMN "decorative_svg_color";
  ALTER TABLE "team_drop" DROP COLUMN "apply_custom_width";
  ALTER TABLE "team_drop" DROP COLUMN "custom_width_percent";
  ALTER TABLE "team_drop" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "cta_app" DROP COLUMN "decorative_svg_color";
  ALTER TABLE "_pages_v_blocks_layout_drop" DROP COLUMN "elements_style_hover_color";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "category_background_color";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "show_decorative_svg";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_lcta_drop_v" DROP COLUMN "decorative_svg_color";
  ALTER TABLE "_lcta_drop_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_lcta_drop_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_lcta_drop_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_team_drop_v" DROP COLUMN "accent_color";
  ALTER TABLE "_team_drop_v" DROP COLUMN "decorative_svg_color";
  ALTER TABLE "_team_drop_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_team_drop_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_team_drop_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_cta_app_v" DROP COLUMN "decorative_svg_color";`)
}
