import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "cta1_alt" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_cta2_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_cta2_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_faq_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_faq_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "imc_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "imc_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages_blocks_final_test_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_final_test_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_cta1_alt_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_cta1_alt_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD COLUMN "apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD COLUMN "custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_width_percent" numeric DEFAULT 100;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" DROP COLUMN "apply_custom_width";
  ALTER TABLE "cta1_alt" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_cta2_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_cta2_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_layout_senda_sections" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_layout_senda_sections" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_pricing_senda_alter" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_pricing_senda_alter" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_faq_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_faq_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_testimonials_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_testimonials_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "imc_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "imc_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages_blocks_final_test_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "pages_blocks_final_test_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_apply_custom_width";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_width_percent";
  ALTER TABLE "_cta1_alt_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_cta1_alt_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_cta2_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_cta2_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_faq_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_faq_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_testimonials_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_testimonials_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v_blocks_final_test_senda" DROP COLUMN "apply_custom_width";
  ALTER TABLE "_pages_v_blocks_final_test_senda" DROP COLUMN "custom_width_percent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_apply_custom_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_width_percent";`)
}
