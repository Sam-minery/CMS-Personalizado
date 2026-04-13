import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_cta2_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_faq_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "imc_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages_blocks_final_test_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_width_percent_mobile" numeric;
  ALTER TABLE "_cta1_alt_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD COLUMN "custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_width_percent_mobile" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_cta2_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_layout_senda_sections" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_pricing_senda_alter" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_faq_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_testimonials_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "imc_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages_blocks_final_test_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_width_percent_mobile";
  ALTER TABLE "_cta1_alt_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_cta2_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_faq_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_testimonials_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v_blocks_final_test_senda" DROP COLUMN "custom_width_percent_mobile";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_width_percent_mobile";`)
}
