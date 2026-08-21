import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_drop" ADD COLUMN "button_background_color_secondary" varchar;
  ALTER TABLE "imc_drop" ADD COLUMN "open_button_background_color_secondary" varchar;
  ALTER TABLE "imc_drop" ADD COLUMN "calculate_button_color_secondary" varchar;
  ALTER TABLE "imc_drop" ADD COLUMN "eligible_contact_form_continue_button_color_secondary" varchar;
  ALTER TABLE "imc_drop" ADD COLUMN "eligible_button_color_secondary" varchar;
  ALTER TABLE "imc_drop" ADD COLUMN "not_eligible_button_color_secondary" varchar;
  ALTER TABLE "lcta_drop" ADD COLUMN "button_background_color_secondary" varchar;
  ALTER TABLE "l2d" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "l2d" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "l2d" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pd" ADD COLUMN "product_purchase_button_background_color_secondary" varchar;
  ALTER TABLE "pd" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pd" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pd" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "fqd" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "fqd" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "fqd" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_btn_bg2" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_cont_bg2" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_elig_bg2" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_no_elig_bg2" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_p_btn_bg2" varchar;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD COLUMN "button_background_color_secondary" varchar;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "open_button_background_color_secondary" varchar;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "calculate_button_color_secondary" varchar;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "eligible_contact_form_continue_button_color_secondary" varchar;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "eligible_button_color_secondary" varchar;
  ALTER TABLE "_imc_drop_v" ADD COLUMN "not_eligible_button_color_secondary" varchar;
  ALTER TABLE "_lcta_drop_v" ADD COLUMN "button_background_color_secondary" varchar;
  ALTER TABLE "_l2d_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_l2d_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_l2d_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pd_v" ADD COLUMN "product_purchase_button_background_color_secondary" varchar;
  ALTER TABLE "_pd_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pd_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pd_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_fqd_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_fqd_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_fqd_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_btn_bg2" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_cont_bg2" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_elig_bg2" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_no_elig_bg2" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_p_btn_bg2" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_button_background_color_secondary" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_drop" DROP COLUMN "button_background_color_secondary";
  ALTER TABLE "imc_drop" DROP COLUMN "open_button_background_color_secondary";
  ALTER TABLE "imc_drop" DROP COLUMN "calculate_button_color_secondary";
  ALTER TABLE "imc_drop" DROP COLUMN "eligible_contact_form_continue_button_color_secondary";
  ALTER TABLE "imc_drop" DROP COLUMN "eligible_button_color_secondary";
  ALTER TABLE "imc_drop" DROP COLUMN "not_eligible_button_color_secondary";
  ALTER TABLE "lcta_drop" DROP COLUMN "button_background_color_secondary";
  ALTER TABLE "l2d" DROP COLUMN "apply_custom_width";
  ALTER TABLE "l2d" DROP COLUMN "custom_width_percent";
  ALTER TABLE "l2d" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pd" DROP COLUMN "product_purchase_button_background_color_secondary";
  ALTER TABLE "pd" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pd" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pd" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "fqd" DROP COLUMN "apply_custom_width";
  ALTER TABLE "fqd" DROP COLUMN "custom_width_percent";
  ALTER TABLE "fqd" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_btn_bg2";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_cont_bg2";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_elig_bg2";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_no_elig_bg2";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_p_btn_bg2";
  ALTER TABLE "_pages_v_blocks_layout_drop" DROP COLUMN "button_background_color_secondary";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "open_button_background_color_secondary";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "calculate_button_color_secondary";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "eligible_contact_form_continue_button_color_secondary";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "eligible_button_color_secondary";
  ALTER TABLE "_imc_drop_v" DROP COLUMN "not_eligible_button_color_secondary";
  ALTER TABLE "_lcta_drop_v" DROP COLUMN "button_background_color_secondary";
  ALTER TABLE "_l2d_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_l2d_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_l2d_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pd_v" DROP COLUMN "product_purchase_button_background_color_secondary";
  ALTER TABLE "_pd_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pd_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pd_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_fqd_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_fqd_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_fqd_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_btn_bg2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_cont_bg2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_elig_bg2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_no_elig_bg2";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_p_btn_bg2";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_button_background_color_secondary";`)
}
