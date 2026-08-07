import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_layout_drop_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_button_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "ld_el" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT true,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "pages_blocks_layout_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"contact_form_icon_use_media" boolean DEFAULT false,
  	"contact_form_icon_media_image_id" integer,
  	"contact_form_icon_icon_s_v_g" varchar,
  	"contact_form_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_content" jsonb,
  	"contact_form_name_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_name_field_icon_media_image_id" integer,
  	"contact_form_name_field_icon_icon_s_v_g" varchar,
  	"contact_form_name_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_name_field_value" varchar DEFAULT 'Nombre',
  	"contact_form_phone_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_phone_field_icon_media_image_id" integer,
  	"contact_form_phone_field_icon_icon_s_v_g" varchar,
  	"contact_form_phone_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_phone_field_value" varchar DEFAULT 'Teléfono',
  	"contact_form_email_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_email_field_icon_media_image_id" integer,
  	"contact_form_email_field_icon_icon_s_v_g" varchar,
  	"contact_form_email_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_email_field_value" varchar DEFAULT 'Email',
  	"privacy_policy_required" boolean DEFAULT true,
  	"privacy_policy_content" jsonb,
  	"button_label" varchar DEFAULT 'Continuar',
  	"button_icon_s_v_g" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar DEFAULT '#ffffff',
  	"button_link_type" "enum_pages_blocks_layout_drop_button_link_type" DEFAULT 'custom',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" varchar DEFAULT '#ffffff',
  	"block_name" varchar
  );
  
  CREATE TABLE "_ld_el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT true,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"contact_form_icon_use_media" boolean DEFAULT false,
  	"contact_form_icon_media_image_id" integer,
  	"contact_form_icon_icon_s_v_g" varchar,
  	"contact_form_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_content" jsonb,
  	"contact_form_name_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_name_field_icon_media_image_id" integer,
  	"contact_form_name_field_icon_icon_s_v_g" varchar,
  	"contact_form_name_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_name_field_value" varchar DEFAULT 'Nombre',
  	"contact_form_phone_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_phone_field_icon_media_image_id" integer,
  	"contact_form_phone_field_icon_icon_s_v_g" varchar,
  	"contact_form_phone_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_phone_field_value" varchar DEFAULT 'Teléfono',
  	"contact_form_email_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_email_field_icon_media_image_id" integer,
  	"contact_form_email_field_icon_icon_s_v_g" varchar,
  	"contact_form_email_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_email_field_value" varchar DEFAULT 'Email',
  	"privacy_policy_required" boolean DEFAULT true,
  	"privacy_policy_content" jsonb,
  	"button_label" varchar DEFAULT 'Continuar',
  	"button_icon_s_v_g" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar DEFAULT '#ffffff',
  	"button_link_type" "enum__pages_v_blocks_layout_drop_button_link_type" DEFAULT 'custom',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" varchar DEFAULT '#ffffff',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "pages_blocks_cta1_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta1_senda" CASCADE;
  DROP TABLE "cta2_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta2_senda" CASCADE;
  DROP TABLE "pages_blocks_cards_senda_cards" CASCADE;
  DROP TABLE "pages_blocks_cards_senda" CASCADE;
  DROP TABLE "ls_sub" CASCADE;
  DROP TABLE "ls_btns" CASCADE;
  DROP TABLE "pages_blocks_layout_senda" CASCADE;
  DROP TABLE "lss_sections" CASCADE;
  DROP TABLE "lss_btns" CASCADE;
  DROP TABLE "pages_blocks_layout_senda_sections" CASCADE;
  DROP TABLE "nb_simple_senda" CASCADE;
  DROP TABLE "ps_elements" CASCADE;
  DROP TABLE "ps_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_senda" CASCADE;
  DROP TABLE "psa_elements" CASCADE;
  DROP TABLE "psa_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_senda_alter" CASCADE;
  DROP TABLE "faq_senda_questions" CASCADE;
  DROP TABLE "pages_blocks_faq_senda" CASCADE;
  DROP TABLE "pages_blocks_testimonials_senda_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials_senda" CASCADE;
  DROP TABLE "imc_res_btn" CASCADE;
  DROP TABLE "imc_high_btn" CASCADE;
  DROP TABLE "imc_senda" CASCADE;
  DROP TABLE "pages_blocks_app_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_app_senda" CASCADE;
  DROP TABLE "pages_blocks_app_senda_alter_buttons" CASCADE;
  DROP TABLE "pages_blocks_app_senda_alter" CASCADE;
  DROP TABLE "pages_blocks_final_test_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_senda_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_senda" CASCADE;
  DROP TABLE "_cta2_senda_buttons_v" CASCADE;
  DROP TABLE "_pages_v_blocks_cta2_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_senda_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_senda" CASCADE;
  DROP TABLE "_ls_sub_v" CASCADE;
  DROP TABLE "_ls_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_senda" CASCADE;
  DROP TABLE "_lss_sections_v" CASCADE;
  DROP TABLE "_lss_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_senda_sections" CASCADE;
  DROP TABLE "_nb_simple_senda_v" CASCADE;
  DROP TABLE "_ps_elements_v" CASCADE;
  DROP TABLE "_ps_plans_v" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_senda" CASCADE;
  DROP TABLE "_psa_elements_v" CASCADE;
  DROP TABLE "_psa_plans_v" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_senda_alter" CASCADE;
  DROP TABLE "_faq_senda_questions_v" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_senda_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_senda" CASCADE;
  DROP TABLE "_imc_res_btn_v" CASCADE;
  DROP TABLE "_imc_high_btn_v" CASCADE;
  DROP TABLE "_imc_senda_v" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda_alter_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda_alter" CASCADE;
  DROP TABLE "_pages_v_blocks_final_test_senda" CASCADE;
  ALTER TABLE "hs_left_btns" ALTER COLUMN "appearance" SET DATA TYPE text;
  ALTER TABLE "hs_left_btns" ALTER COLUMN "appearance" SET DEFAULT 'default'::text;
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "appearance" SET DATA TYPE text;
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "appearance" SET DEFAULT 'default'::text;
  DROP TYPE "public"."app";
  CREATE TYPE "public"."app" AS ENUM('default', 'secondary');
  ALTER TABLE "hs_left_btns" ALTER COLUMN "appearance" SET DEFAULT 'default'::"public"."app";
  ALTER TABLE "hs_left_btns" ALTER COLUMN "appearance" SET DATA TYPE "public"."app" USING "appearance"::"public"."app";
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "appearance" SET DEFAULT 'default'::"public"."app";
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "appearance" SET DATA TYPE "public"."app" USING "appearance"::"public"."app";
  ALTER TABLE "hs_left_btns" ALTER COLUMN "size" SET DATA TYPE text;
  ALTER TABLE "hs_left_btns" ALTER COLUMN "size" SET DEFAULT 'sm'::text;
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "size" SET DATA TYPE text;
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "size" SET DEFAULT 'sm'::text;
  DROP TYPE "public"."sz";
  CREATE TYPE "public"."sz" AS ENUM('sm', 'lg');
  ALTER TABLE "hs_left_btns" ALTER COLUMN "size" SET DEFAULT 'sm'::"public"."sz";
  ALTER TABLE "hs_left_btns" ALTER COLUMN "size" SET DATA TYPE "public"."sz" USING "size"::"public"."sz";
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "size" SET DEFAULT 'sm'::"public"."sz";
  ALTER TABLE "_hs_left_btns_v" ALTER COLUMN "size" SET DATA TYPE "public"."sz" USING "size"::"public"."sz";
  ALTER TABLE "ld_el" ADD CONSTRAINT "ld_el_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ld_el" ADD CONSTRAINT "ld_el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_name_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_name_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_phone_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_phone_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_email_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_email_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ld_el_v" ADD CONSTRAINT "_ld_el_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ld_el_v" ADD CONSTRAINT "_ld_el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_name_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_name_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_phone_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_phone_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_email_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_email_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ld_el_order_idx" ON "ld_el" USING btree ("_order");
  CREATE INDEX "ld_el_parent_id_idx" ON "ld_el" USING btree ("_parent_id");
  CREATE INDEX "ld_el_icon_icon_media_image_idx" ON "ld_el" USING btree ("icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_order_idx" ON "pages_blocks_layout_drop" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_drop_parent_id_idx" ON "pages_blocks_layout_drop" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_drop_path_idx" ON "pages_blocks_layout_drop" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_icon_contact_form__idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_name_field_icon_co_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_name_field_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_phone_field_icon_c_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_phone_field_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_email_field_icon_c_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_email_field_icon_media_image_id");
  CREATE INDEX "_ld_el_v_order_idx" ON "_ld_el_v" USING btree ("_order");
  CREATE INDEX "_ld_el_v_parent_id_idx" ON "_ld_el_v" USING btree ("_parent_id");
  CREATE INDEX "_ld_el_v_icon_icon_media_image_idx" ON "_ld_el_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_order_idx" ON "_pages_v_blocks_layout_drop" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_drop_parent_id_idx" ON "_pages_v_blocks_layout_drop" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_path_idx" ON "_pages_v_blocks_layout_drop" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_icon_contact_fo_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_name_field_icon_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_name_field_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_phone_field_ico_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_phone_field_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_email_field_ico_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_email_field_icon_media_image_id");
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_block_height_mode";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_background_type";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_alignment";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_background_color_mode";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_gradient_direction";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_font_family";
  DROP TYPE "public"."enum_cta2_senda_buttons_link_type";
  DROP TYPE "public"."enum_cta2_senda_buttons_appearance";
  DROP TYPE "public"."enum_cta2_senda_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_cta2_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_cards_gap";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_card_size";
  DROP TYPE "public"."enum_ls_btns_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout_senda_font_family";
  DROP TYPE "public"."enum_lss_sections_link_type";
  DROP TYPE "public"."enum_lss_sections_link_appearance";
  DROP TYPE "public"."enum_lss_btns_link_type";
  DROP TYPE "public"."enum_lss_btns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout_senda_sections_font_family";
  DROP TYPE "public"."enum_nb_simple_senda_icon_link_link_type";
  DROP TYPE "public"."enum_nb_simple_senda_icon_link_link_appearance";
  DROP TYPE "public"."enum_ps_plans_link_type";
  DROP TYPE "public"."enum_ps_plans_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_pricing_senda_font_family";
  DROP TYPE "public"."enum_psa_plans_link_type";
  DROP TYPE "public"."enum_psa_plans_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_pricing_senda_alter_font_family";
  DROP TYPE "public"."enum_pages_blocks_faq_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_testimonials_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_testimonials_senda_cards_gap";
  DROP TYPE "public"."enum_pages_blocks_testimonials_senda_card_size";
  DROP TYPE "public"."enum_imc_res_btn_link_type";
  DROP TYPE "public"."enum_imc_high_btn_link_type";
  DROP TYPE "public"."enum_imc_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_app_senda_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_app_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_app_senda_alter_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_app_senda_alter_font_family";
  DROP TYPE "public"."enum_pages_blocks_final_test_senda_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_final_test_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_block_height_mode";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_background_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_background_color_mode";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_gradient_direction";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_font_family";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_link_type";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_appearance";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta2_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_cards_gap";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_card_size";
  DROP TYPE "public"."enum__ls_btns_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout_senda_font_family";
  DROP TYPE "public"."enum__lss_sections_v_link_type";
  DROP TYPE "public"."enum__lss_sections_v_link_appearance";
  DROP TYPE "public"."enum__lss_btns_v_link_type";
  DROP TYPE "public"."enum__lss_btns_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout_senda_sections_font_family";
  DROP TYPE "public"."enum__nb_simple_senda_v_icon_link_link_type";
  DROP TYPE "public"."enum__nb_simple_senda_v_icon_link_link_appearance";
  DROP TYPE "public"."enum__ps_plans_v_link_type";
  DROP TYPE "public"."enum__ps_plans_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_senda_font_family";
  DROP TYPE "public"."enum__psa_plans_v_link_type";
  DROP TYPE "public"."enum__psa_plans_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_senda_alter_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_faq_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_senda_cards_gap";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_senda_card_size";
  DROP TYPE "public"."enum__imc_res_btn_v_link_type";
  DROP TYPE "public"."enum__imc_high_btn_v_link_type";
  DROP TYPE "public"."enum__imc_senda_v_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_alter_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_alter_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_final_test_senda_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_final_test_senda_font_family";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta1_senda_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_background_type" AS ENUM('video', 'image', 'color');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_buttons_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum_pages_blocks_cta1_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta2_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta2_senda_buttons_appearance" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum_cta2_senda_buttons_size" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum_pages_blocks_cta2_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum_ls_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_lss_sections_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lss_sections_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_lss_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lss_btns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout_senda_sections_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_nb_simple_senda_icon_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_nb_simple_senda_icon_link_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_ps_plans_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_ps_plans_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_psa_plans_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_psa_plans_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_faq_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum_imc_res_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_high_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_app_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_app_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_app_senda_alter_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_app_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_final_test_senda_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_final_test_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_background_type" AS ENUM('video', 'image', 'color');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_appearance" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_size" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum__pages_v_blocks_cta2_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum__ls_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lss_sections_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lss_sections_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__lss_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lss_btns_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_senda_sections_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__nb_simple_senda_v_icon_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__nb_simple_senda_v_icon_link_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__ps_plans_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__ps_plans_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__psa_plans_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__psa_plans_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum__imc_res_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_high_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_senda_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_alter_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_final_test_senda_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_final_test_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."app" ADD VALUE 'outline';
  ALTER TYPE "public"."app" ADD VALUE 'link';
  ALTER TYPE "public"."sz" ADD VALUE 'clear';
  CREATE TABLE "pages_blocks_cta1_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum_pages_blocks_cta1_senda_buttons_variant" DEFAULT 'primary',
  	"background_color" varchar,
  	"text_color" varchar,
  	"icon_s_v_g" varchar,
  	"link_type" "enum_pages_blocks_cta1_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta1_senda_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta1_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"icon_use_media" boolean DEFAULT true,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"content" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"block_height_mode" "enum_pages_blocks_cta1_senda_block_height_mode" DEFAULT 'viewport',
  	"custom_block_height_px" numeric,
  	"background_type" "enum_pages_blocks_cta1_senda_background_type" DEFAULT 'video',
  	"buttons_alignment" "enum_pages_blocks_cta1_senda_buttons_alignment" DEFAULT 'left',
  	"video_youtube_url" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"background_color_mode" "enum_pages_blocks_cta1_senda_background_color_mode" DEFAULT 'solid',
  	"gradient_start_color" varchar,
  	"gradient_end_color" varchar,
  	"gradient_direction" "enum_pages_blocks_cta1_senda_gradient_direction" DEFAULT 'to-right',
  	"font_family" "enum_pages_blocks_cta1_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "cta2_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cta2_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "enum_cta2_senda_buttons_appearance" DEFAULT 'default',
  	"size" "enum_cta2_senda_buttons_size" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_cta2_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_id" integer,
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_cta2_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_senda_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"title_color" varchar,
  	"image_id" integer,
  	"expanded_content" jsonb,
  	"expanded_content_color" varchar,
  	"back_content" jsonb,
  	"back_background_color" varchar,
  	"back_content_color" varchar,
  	"avatar_image_id" integer,
  	"user_name" varchar,
  	"user_name_color" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_content_color" varchar,
  	"header_content_max_width" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_cards_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum_pages_blocks_cards_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum_pages_blocks_cards_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ls_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Subheading icon',
  	"content" jsonb
  );
  
  CREATE TABLE "ls_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_ls_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'secondary',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_layout_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_use_viewport_size" boolean DEFAULT false,
  	"image_media_width_vw" numeric,
  	"image_media_height_vh" numeric,
  	"image_media_width_vw_mobile" numeric,
  	"image_media_height_vh_mobile" numeric,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Layout SENDA image',
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_layout_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "lss_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Section icon',
  	"rich_text" jsonb,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_lss_sections_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_lss_sections_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "lss_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_lss_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_lss_btns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout_senda_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_layout_senda_sections_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "nb_simple_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Navbar image',
  	"icon_link_link_type" "enum_nb_simple_senda_icon_link_link_type" DEFAULT 'reference',
  	"icon_link_link_new_tab" boolean,
  	"icon_link_link_url" varchar,
  	"icon_link_link_appearance" "enum_nb_simple_senda_icon_link_link_appearance" DEFAULT 'default',
  	"icon_link_icon_s_v_g" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ps_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "ps_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable3_d_gradient" boolean DEFAULT false,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_ps_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_ps_plans_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_pricing_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_pricing_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "psa_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "psa_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable3_d_gradient" boolean DEFAULT false,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_psa_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_psa_plans_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_pricing_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"plan_gradient_color" varchar,
  	"plan_drop_shadow_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_pricing_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "faq_senda_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"questions_section_background_color" varchar,
  	"questions_section_border_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_faq_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_senda_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title_and_description" jsonb,
  	"title_and_description_color" varchar,
  	"name_and_profession" jsonb,
  	"name_and_profession_color" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonials_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"title" jsonb,
  	"title_color" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_testimonials_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum_pages_blocks_testimonials_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum_pages_blocks_testimonials_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "imc_res_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_imc_res_btn_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_high_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_imc_high_btn_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"height_label" varchar DEFAULT 'Estatura (en cm)',
  	"weight_label" varchar DEFAULT 'Peso (en kg)',
  	"calculate_button_text" varchar DEFAULT 'Calcular IMC',
  	"calculate_button_icon_s_v_g" varchar,
  	"result_content" jsonb,
  	"high_b_m_i_content" jsonb,
  	"high_b_m_i_image_use_media" boolean DEFAULT true,
  	"high_b_m_i_image_media_image_id" integer,
  	"high_b_m_i_image_src" varchar,
  	"high_b_m_i_image_alt" varchar,
  	"high_b_m_i_name_and_description" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_imc_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"result_card_background_color" varchar,
  	"result_text_color" varchar,
  	"text_color" varchar,
  	"label_color" varchar,
  	"calculate_button_color" varchar,
  	"calculate_button_text_color" varchar,
  	"result_button_color" varchar,
  	"result_button_text_color" varchar,
  	"high_b_m_i_card_background_color" varchar,
  	"high_b_m_i_text_color" varchar,
  	"high_b_m_i_button_color" varchar,
  	"high_b_m_i_button_text_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_app_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum_pages_blocks_app_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_app_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_use_media" boolean DEFAULT true,
  	"image1_media_image_id" integer,
  	"image1_src" varchar,
  	"image1_alt" varchar,
  	"image2_use_media" boolean DEFAULT true,
  	"image2_media_image_id" integer,
  	"image2_src" varchar,
  	"image2_alt" varchar,
  	"content_below_images" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_app_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_app_senda_alter_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum_pages_blocks_app_senda_alter_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_app_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_use_media" boolean DEFAULT true,
  	"image1_media_image_id" integer,
  	"image1_src" varchar,
  	"image1_alt" varchar,
  	"image_mobile1_use_media" boolean DEFAULT true,
  	"image_mobile1_media_image_id" integer,
  	"image_mobile1_src" varchar,
  	"image_mobile1_alt" varchar,
  	"image_mobile2_use_media" boolean DEFAULT true,
  	"image_mobile2_media_image_id" integer,
  	"image_mobile2_src" varchar,
  	"image_mobile2_alt" varchar,
  	"image_mobile3_use_media" boolean DEFAULT true,
  	"image_mobile3_media_image_id" integer,
  	"image_mobile3_src" varchar,
  	"image_mobile3_alt" varchar,
  	"content_desktop" jsonb,
  	"content_mobile1" jsonb,
  	"content_mobile2" jsonb,
  	"content_mobile3" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_app_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_final_test_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"component_background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"content" jsonb,
  	"main_image_use_media" boolean DEFAULT true,
  	"main_image_media_image_id" integer,
  	"main_image_src" varchar,
  	"main_image_alt" varchar,
  	"button_title" varchar DEFAULT 'Más información',
  	"button_link_type" "enum_pages_blocks_final_test_senda_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_icon_s_v_g" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_final_test_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta1_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum__pages_v_blocks_cta1_senda_buttons_variant" DEFAULT 'primary',
  	"background_color" varchar,
  	"text_color" varchar,
  	"icon_s_v_g" varchar,
  	"link_type" "enum__pages_v_blocks_cta1_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta1_senda_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta1_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"icon_use_media" boolean DEFAULT true,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"content" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"block_height_mode" "enum__pages_v_blocks_cta1_senda_block_height_mode" DEFAULT 'viewport',
  	"custom_block_height_px" numeric,
  	"background_type" "enum__pages_v_blocks_cta1_senda_background_type" DEFAULT 'video',
  	"buttons_alignment" "enum__pages_v_blocks_cta1_senda_buttons_alignment" DEFAULT 'left',
  	"video_youtube_url" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"background_color_mode" "enum__pages_v_blocks_cta1_senda_background_color_mode" DEFAULT 'solid',
  	"gradient_start_color" varchar,
  	"gradient_end_color" varchar,
  	"gradient_direction" "enum__pages_v_blocks_cta1_senda_gradient_direction" DEFAULT 'to-right',
  	"font_family" "enum__pages_v_blocks_cta1_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta2_senda_buttons_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cta2_senda_buttons_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "enum__cta2_senda_buttons_v_appearance" DEFAULT 'default',
  	"size" "enum__cta2_senda_buttons_v_size" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta2_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_id" integer,
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_cta2_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_senda_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"title_color" varchar,
  	"image_id" integer,
  	"expanded_content" jsonb,
  	"expanded_content_color" varchar,
  	"back_content" jsonb,
  	"back_background_color" varchar,
  	"back_content_color" varchar,
  	"avatar_image_id" integer,
  	"user_name" varchar,
  	"user_name_color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_content_color" varchar,
  	"header_content_max_width" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_cards_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum__pages_v_blocks_cards_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum__pages_v_blocks_cards_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ls_sub_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Subheading icon',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ls_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__ls_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'secondary',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_use_viewport_size" boolean DEFAULT false,
  	"image_media_width_vw" numeric,
  	"image_media_height_vh" numeric,
  	"image_media_width_vw_mobile" numeric,
  	"image_media_height_vh_mobile" numeric,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Layout SENDA image',
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_layout_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_lss_sections_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Section icon',
  	"rich_text" jsonb,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__lss_sections_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__lss_sections_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lss_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__lss_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__lss_btns_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_senda_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_layout_senda_sections_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_nb_simple_senda_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Navbar image',
  	"icon_link_link_type" "enum__nb_simple_senda_v_icon_link_link_type" DEFAULT 'reference',
  	"icon_link_link_new_tab" boolean,
  	"icon_link_link_url" varchar,
  	"icon_link_link_appearance" "enum__nb_simple_senda_v_icon_link_link_appearance" DEFAULT 'default',
  	"icon_link_icon_s_v_g" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ps_elements_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ps_plans_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable3_d_gradient" boolean DEFAULT false,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__ps_plans_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__ps_plans_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_pricing_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_psa_elements_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_psa_plans_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable3_d_gradient" boolean DEFAULT false,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__psa_plans_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__psa_plans_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"plan_gradient_color" varchar,
  	"plan_drop_shadow_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_pricing_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_faq_senda_questions_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"questions_section_background_color" varchar,
  	"questions_section_border_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_faq_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_senda_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title_and_description" jsonb,
  	"title_and_description_color" varchar,
  	"name_and_profession" jsonb,
  	"name_and_profession_color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonials_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"title" jsonb,
  	"title_color" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_testimonials_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum__pages_v_blocks_testimonials_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum__pages_v_blocks_testimonials_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_imc_res_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__imc_res_btn_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_high_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__imc_high_btn_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_senda_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"title" jsonb,
  	"description" jsonb,
  	"height_label" varchar DEFAULT 'Estatura (en cm)',
  	"weight_label" varchar DEFAULT 'Peso (en kg)',
  	"calculate_button_text" varchar DEFAULT 'Calcular IMC',
  	"calculate_button_icon_s_v_g" varchar,
  	"result_content" jsonb,
  	"high_b_m_i_content" jsonb,
  	"high_b_m_i_image_use_media" boolean DEFAULT true,
  	"high_b_m_i_image_media_image_id" integer,
  	"high_b_m_i_image_src" varchar,
  	"high_b_m_i_image_alt" varchar,
  	"high_b_m_i_name_and_description" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__imc_senda_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"result_card_background_color" varchar,
  	"result_text_color" varchar,
  	"text_color" varchar,
  	"label_color" varchar,
  	"calculate_button_color" varchar,
  	"calculate_button_text_color" varchar,
  	"result_button_color" varchar,
  	"result_button_text_color" varchar,
  	"high_b_m_i_card_background_color" varchar,
  	"high_b_m_i_text_color" varchar,
  	"high_b_m_i_button_color" varchar,
  	"high_b_m_i_button_text_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum__pages_v_blocks_app_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_use_media" boolean DEFAULT true,
  	"image1_media_image_id" integer,
  	"image1_src" varchar,
  	"image1_alt" varchar,
  	"image2_use_media" boolean DEFAULT true,
  	"image2_media_image_id" integer,
  	"image2_src" varchar,
  	"image2_alt" varchar,
  	"content_below_images" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_app_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda_alter_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum__pages_v_blocks_app_senda_alter_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_use_media" boolean DEFAULT true,
  	"image1_media_image_id" integer,
  	"image1_src" varchar,
  	"image1_alt" varchar,
  	"image_mobile1_use_media" boolean DEFAULT true,
  	"image_mobile1_media_image_id" integer,
  	"image_mobile1_src" varchar,
  	"image_mobile1_alt" varchar,
  	"image_mobile2_use_media" boolean DEFAULT true,
  	"image_mobile2_media_image_id" integer,
  	"image_mobile2_src" varchar,
  	"image_mobile2_alt" varchar,
  	"image_mobile3_use_media" boolean DEFAULT true,
  	"image_mobile3_media_image_id" integer,
  	"image_mobile3_src" varchar,
  	"image_mobile3_alt" varchar,
  	"content_desktop" jsonb,
  	"content_mobile1" jsonb,
  	"content_mobile2" jsonb,
  	"content_mobile3" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_app_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_final_test_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"component_background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"content" jsonb,
  	"main_image_use_media" boolean DEFAULT true,
  	"main_image_media_image_id" integer,
  	"main_image_src" varchar,
  	"main_image_alt" varchar,
  	"button_title" varchar DEFAULT 'Más información',
  	"button_link_type" "enum__pages_v_blocks_final_test_senda_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_icon_s_v_g" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_final_test_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "ld_el" CASCADE;
  DROP TABLE "pages_blocks_layout_drop" CASCADE;
  DROP TABLE "_ld_el_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_drop" CASCADE;
  ALTER TABLE "pages_blocks_cta1_senda_buttons" ADD CONSTRAINT "pages_blocks_cta1_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta1_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta2_senda_buttons" ADD CONSTRAINT "cta2_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta2_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ls_sub" ADD CONSTRAINT "ls_sub_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ls_sub" ADD CONSTRAINT "ls_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ls_btns" ADD CONSTRAINT "ls_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lss_sections" ADD CONSTRAINT "lss_sections_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lss_sections" ADD CONSTRAINT "lss_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lss_btns" ADD CONSTRAINT "lss_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nb_simple_senda" ADD CONSTRAINT "nb_simple_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "nb_simple_senda" ADD CONSTRAINT "nb_simple_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ps_elements" ADD CONSTRAINT "ps_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ps_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ps_plans" ADD CONSTRAINT "ps_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "psa_elements" ADD CONSTRAINT "psa_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."psa_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "psa_plans" ADD CONSTRAINT "psa_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD CONSTRAINT "pages_blocks_pricing_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD CONSTRAINT "pages_blocks_pricing_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD CONSTRAINT "pages_blocks_pricing_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_senda_questions" ADD CONSTRAINT "faq_senda_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_senda_testimonials_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_senda_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD CONSTRAINT "pages_blocks_testimonials_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD CONSTRAINT "pages_blocks_testimonials_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD CONSTRAINT "pages_blocks_testimonials_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_res_btn" ADD CONSTRAINT "imc_res_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_high_btn" ADD CONSTRAINT "imc_high_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_high_b_m_i_image_media_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_buttons" ADD CONSTRAINT "pages_blocks_app_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_app_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image2_media_image_id_media_id_fk" FOREIGN KEY ("image2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter_buttons" ADD CONSTRAINT "pages_blocks_app_senda_alter_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_app_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image_mobile1_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image_mobile2_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image_mobile3_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile3_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_main_image_media_image_id_media_id_fk" FOREIGN KEY ("main_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda_buttons" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta1_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta2_senda_buttons_v" ADD CONSTRAINT "_cta2_senda_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta2_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ls_sub_v" ADD CONSTRAINT "_ls_sub_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ls_sub_v" ADD CONSTRAINT "_ls_sub_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ls_btns_v" ADD CONSTRAINT "_ls_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lss_sections_v" ADD CONSTRAINT "_lss_sections_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lss_sections_v" ADD CONSTRAINT "_lss_sections_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lss_btns_v" ADD CONSTRAINT "_lss_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_nb_simple_senda_v" ADD CONSTRAINT "_nb_simple_senda_v_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_nb_simple_senda_v" ADD CONSTRAINT "_nb_simple_senda_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ps_elements_v" ADD CONSTRAINT "_ps_elements_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ps_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ps_plans_v" ADD CONSTRAINT "_ps_plans_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_psa_elements_v" ADD CONSTRAINT "_psa_elements_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_psa_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_psa_plans_v" ADD CONSTRAINT "_psa_plans_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_senda_questions_v" ADD CONSTRAINT "_faq_senda_questions_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_testimonials_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_res_btn_v" ADD CONSTRAINT "_imc_res_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_senda_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_high_btn_v" ADD CONSTRAINT "_imc_high_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_senda_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_high_b_m_i_image_media_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_buttons" ADD CONSTRAINT "_pages_v_blocks_app_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_app_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image2_media_image_id_media_id_fk" FOREIGN KEY ("image2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter_buttons" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_app_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image_mobile1_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image_mobile2_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image_mobile3_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile3_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_main_image_media_image_id_media_id_fk" FOREIGN KEY ("main_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_cta1_senda_buttons_order_idx" ON "pages_blocks_cta1_senda_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta1_senda_buttons_parent_id_idx" ON "pages_blocks_cta1_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta1_senda_order_idx" ON "pages_blocks_cta1_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta1_senda_parent_id_idx" ON "pages_blocks_cta1_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta1_senda_path_idx" ON "pages_blocks_cta1_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta1_senda_icon_icon_media_image_idx" ON "pages_blocks_cta1_senda" USING btree ("icon_media_image_id");
  CREATE INDEX "pages_blocks_cta1_senda_background_image_idx" ON "pages_blocks_cta1_senda" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_cta1_senda_custom_font_file_idx" ON "pages_blocks_cta1_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "cta2_senda_buttons_order_idx" ON "cta2_senda_buttons" USING btree ("_order");
  CREATE INDEX "cta2_senda_buttons_parent_id_idx" ON "cta2_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta2_senda_order_idx" ON "pages_blocks_cta2_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta2_senda_parent_id_idx" ON "pages_blocks_cta2_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta2_senda_path_idx" ON "pages_blocks_cta2_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta2_senda_image_idx" ON "pages_blocks_cta2_senda" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cta2_senda_font_group_idx" ON "pages_blocks_cta2_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_cta2_senda_custom_font_file_idx" ON "pages_blocks_cta2_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_order_idx" ON "pages_blocks_cards_senda_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_senda_cards_parent_id_idx" ON "pages_blocks_cards_senda_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_image_idx" ON "pages_blocks_cards_senda_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_avatar_image_idx" ON "pages_blocks_cards_senda_cards" USING btree ("avatar_image_id");
  CREATE INDEX "pages_blocks_cards_senda_order_idx" ON "pages_blocks_cards_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_senda_parent_id_idx" ON "pages_blocks_cards_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_senda_path_idx" ON "pages_blocks_cards_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_senda_font_group_idx" ON "pages_blocks_cards_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_cards_senda_custom_font_file_idx" ON "pages_blocks_cards_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "ls_sub_order_idx" ON "ls_sub" USING btree ("_order");
  CREATE INDEX "ls_sub_parent_id_idx" ON "ls_sub" USING btree ("_parent_id");
  CREATE INDEX "ls_sub_icon_icon_media_image_idx" ON "ls_sub" USING btree ("icon_media_image_id");
  CREATE INDEX "ls_btns_order_idx" ON "ls_btns" USING btree ("_order");
  CREATE INDEX "ls_btns_parent_id_idx" ON "ls_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_order_idx" ON "pages_blocks_layout_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_senda_parent_id_idx" ON "pages_blocks_layout_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_path_idx" ON "pages_blocks_layout_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_senda_image_image_media_image_idx" ON "pages_blocks_layout_senda" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_layout_senda_font_group_idx" ON "pages_blocks_layout_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_layout_senda_custom_font_file_idx" ON "pages_blocks_layout_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "lss_sections_order_idx" ON "lss_sections" USING btree ("_order");
  CREATE INDEX "lss_sections_parent_id_idx" ON "lss_sections" USING btree ("_parent_id");
  CREATE INDEX "lss_sections_icon_icon_media_image_idx" ON "lss_sections" USING btree ("icon_media_image_id");
  CREATE INDEX "lss_btns_order_idx" ON "lss_btns" USING btree ("_order");
  CREATE INDEX "lss_btns_parent_id_idx" ON "lss_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_order_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_senda_sections_parent_id_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_path_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_senda_sections_font_group_idx" ON "pages_blocks_layout_senda_sections" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_custom_font_file_idx" ON "pages_blocks_layout_senda_sections" USING btree ("custom_font_file_id");
  CREATE INDEX "nb_simple_senda_order_idx" ON "nb_simple_senda" USING btree ("_order");
  CREATE INDEX "nb_simple_senda_parent_id_idx" ON "nb_simple_senda" USING btree ("_parent_id");
  CREATE INDEX "nb_simple_senda_path_idx" ON "nb_simple_senda" USING btree ("_path");
  CREATE INDEX "nb_simple_senda_image_image_media_image_idx" ON "nb_simple_senda" USING btree ("image_media_image_id");
  CREATE INDEX "ps_elements_order_idx" ON "ps_elements" USING btree ("_order");
  CREATE INDEX "ps_elements_parent_id_idx" ON "ps_elements" USING btree ("_parent_id");
  CREATE INDEX "ps_plans_order_idx" ON "ps_plans" USING btree ("_order");
  CREATE INDEX "ps_plans_parent_id_idx" ON "ps_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_order_idx" ON "pages_blocks_pricing_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_senda_parent_id_idx" ON "pages_blocks_pricing_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_path_idx" ON "pages_blocks_pricing_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_senda_font_group_idx" ON "pages_blocks_pricing_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_pricing_senda_custom_font_file_idx" ON "pages_blocks_pricing_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "psa_elements_order_idx" ON "psa_elements" USING btree ("_order");
  CREATE INDEX "psa_elements_parent_id_idx" ON "psa_elements" USING btree ("_parent_id");
  CREATE INDEX "psa_plans_order_idx" ON "psa_plans" USING btree ("_order");
  CREATE INDEX "psa_plans_parent_id_idx" ON "psa_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_alter_order_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_senda_alter_parent_id_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_alter_path_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_senda_alter_font_group_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_pricing_senda_alter_custom_font_file_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("custom_font_file_id");
  CREATE INDEX "faq_senda_questions_order_idx" ON "faq_senda_questions" USING btree ("_order");
  CREATE INDEX "faq_senda_questions_parent_id_idx" ON "faq_senda_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_senda_order_idx" ON "pages_blocks_faq_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_senda_parent_id_idx" ON "pages_blocks_faq_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_senda_path_idx" ON "pages_blocks_faq_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_senda_font_group_idx" ON "pages_blocks_faq_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_faq_senda_custom_font_file_idx" ON "pages_blocks_faq_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_testimonials_senda_testimonials_order_idx" ON "pages_blocks_testimonials_senda_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_senda_testimonials_parent_id_idx" ON "pages_blocks_testimonials_senda_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_senda_testimonials_image_image_idx" ON "pages_blocks_testimonials_senda_testimonials" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_testimonials_senda_order_idx" ON "pages_blocks_testimonials_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_senda_parent_id_idx" ON "pages_blocks_testimonials_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_senda_path_idx" ON "pages_blocks_testimonials_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_senda_font_group_idx" ON "pages_blocks_testimonials_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_testimonials_senda_custom_font_file_idx" ON "pages_blocks_testimonials_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "imc_res_btn_order_idx" ON "imc_res_btn" USING btree ("_order");
  CREATE INDEX "imc_res_btn_parent_id_idx" ON "imc_res_btn" USING btree ("_parent_id");
  CREATE INDEX "imc_high_btn_order_idx" ON "imc_high_btn" USING btree ("_order");
  CREATE INDEX "imc_high_btn_parent_id_idx" ON "imc_high_btn" USING btree ("_parent_id");
  CREATE INDEX "imc_senda_order_idx" ON "imc_senda" USING btree ("_order");
  CREATE INDEX "imc_senda_parent_id_idx" ON "imc_senda" USING btree ("_parent_id");
  CREATE INDEX "imc_senda_path_idx" ON "imc_senda" USING btree ("_path");
  CREATE INDEX "imc_senda_background_image_background_image_media_image_idx" ON "imc_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "imc_senda_high_b_m_i_image_high_b_m_i_image_media_image_idx" ON "imc_senda" USING btree ("high_b_m_i_image_media_image_id");
  CREATE INDEX "imc_senda_font_group_idx" ON "imc_senda" USING btree ("font_group_id");
  CREATE INDEX "imc_senda_custom_font_file_idx" ON "imc_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_app_senda_buttons_order_idx" ON "pages_blocks_app_senda_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_buttons_parent_id_idx" ON "pages_blocks_app_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_order_idx" ON "pages_blocks_app_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_parent_id_idx" ON "pages_blocks_app_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_path_idx" ON "pages_blocks_app_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_app_senda_background_image_background_image_idx" ON "pages_blocks_app_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_image1_image1_media_image_idx" ON "pages_blocks_app_senda" USING btree ("image1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_image2_image2_media_image_idx" ON "pages_blocks_app_senda" USING btree ("image2_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_font_group_idx" ON "pages_blocks_app_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_app_senda_custom_font_file_idx" ON "pages_blocks_app_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_app_senda_alter_buttons_order_idx" ON "pages_blocks_app_senda_alter_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_alter_buttons_parent_id_idx" ON "pages_blocks_app_senda_alter_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_alter_order_idx" ON "pages_blocks_app_senda_alter" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_alter_parent_id_idx" ON "pages_blocks_app_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_alter_path_idx" ON "pages_blocks_app_senda_alter" USING btree ("_path");
  CREATE INDEX "pages_blocks_app_senda_alter_background_image_background_idx" ON "pages_blocks_app_senda_alter" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image1_image1_media_image_idx" ON "pages_blocks_app_senda_alter" USING btree ("image1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image_mobile1_image_mobile1_idx" ON "pages_blocks_app_senda_alter" USING btree ("image_mobile1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image_mobile2_image_mobile2_idx" ON "pages_blocks_app_senda_alter" USING btree ("image_mobile2_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image_mobile3_image_mobile3_idx" ON "pages_blocks_app_senda_alter" USING btree ("image_mobile3_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_font_group_idx" ON "pages_blocks_app_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_app_senda_alter_custom_font_file_idx" ON "pages_blocks_app_senda_alter" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_final_test_senda_order_idx" ON "pages_blocks_final_test_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_final_test_senda_parent_id_idx" ON "pages_blocks_final_test_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_final_test_senda_path_idx" ON "pages_blocks_final_test_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_final_test_senda_background_image_backgroun_idx" ON "pages_blocks_final_test_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_final_test_senda_main_image_main_image_medi_idx" ON "pages_blocks_final_test_senda" USING btree ("main_image_media_image_id");
  CREATE INDEX "pages_blocks_final_test_senda_font_group_idx" ON "pages_blocks_final_test_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_final_test_senda_custom_font_file_idx" ON "pages_blocks_final_test_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_buttons_order_idx" ON "_pages_v_blocks_cta1_senda_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta1_senda_buttons_parent_id_idx" ON "_pages_v_blocks_cta1_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_order_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta1_senda_parent_id_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_path_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta1_senda_icon_icon_media_image_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_background_image_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_custom_font_file_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_cta2_senda_buttons_v_order_idx" ON "_cta2_senda_buttons_v" USING btree ("_order");
  CREATE INDEX "_cta2_senda_buttons_v_parent_id_idx" ON "_cta2_senda_buttons_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_order_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta2_senda_parent_id_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_path_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta2_senda_image_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_font_group_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_custom_font_file_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_order_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_parent_id_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_image_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_avatar_image_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("avatar_image_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_order_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_senda_parent_id_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_path_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_senda_font_group_idx" ON "_pages_v_blocks_cards_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_custom_font_file_idx" ON "_pages_v_blocks_cards_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_ls_sub_v_order_idx" ON "_ls_sub_v" USING btree ("_order");
  CREATE INDEX "_ls_sub_v_parent_id_idx" ON "_ls_sub_v" USING btree ("_parent_id");
  CREATE INDEX "_ls_sub_v_icon_icon_media_image_idx" ON "_ls_sub_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_ls_btns_v_order_idx" ON "_ls_btns_v" USING btree ("_order");
  CREATE INDEX "_ls_btns_v_parent_id_idx" ON "_ls_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_order_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_senda_parent_id_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_path_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_senda_image_image_media_image_idx" ON "_pages_v_blocks_layout_senda" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_font_group_idx" ON "_pages_v_blocks_layout_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_custom_font_file_idx" ON "_pages_v_blocks_layout_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_lss_sections_v_order_idx" ON "_lss_sections_v" USING btree ("_order");
  CREATE INDEX "_lss_sections_v_parent_id_idx" ON "_lss_sections_v" USING btree ("_parent_id");
  CREATE INDEX "_lss_sections_v_icon_icon_media_image_idx" ON "_lss_sections_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_lss_btns_v_order_idx" ON "_lss_btns_v" USING btree ("_order");
  CREATE INDEX "_lss_btns_v_parent_id_idx" ON "_lss_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_order_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_parent_id_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_path_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_font_group_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_custom_font_file_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("custom_font_file_id");
  CREATE INDEX "_nb_simple_senda_v_order_idx" ON "_nb_simple_senda_v" USING btree ("_order");
  CREATE INDEX "_nb_simple_senda_v_parent_id_idx" ON "_nb_simple_senda_v" USING btree ("_parent_id");
  CREATE INDEX "_nb_simple_senda_v_path_idx" ON "_nb_simple_senda_v" USING btree ("_path");
  CREATE INDEX "_nb_simple_senda_v_image_image_media_image_idx" ON "_nb_simple_senda_v" USING btree ("image_media_image_id");
  CREATE INDEX "_ps_elements_v_order_idx" ON "_ps_elements_v" USING btree ("_order");
  CREATE INDEX "_ps_elements_v_parent_id_idx" ON "_ps_elements_v" USING btree ("_parent_id");
  CREATE INDEX "_ps_plans_v_order_idx" ON "_ps_plans_v" USING btree ("_order");
  CREATE INDEX "_ps_plans_v_parent_id_idx" ON "_ps_plans_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_order_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_senda_parent_id_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_path_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_senda_font_group_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_custom_font_file_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_psa_elements_v_order_idx" ON "_psa_elements_v" USING btree ("_order");
  CREATE INDEX "_psa_elements_v_parent_id_idx" ON "_psa_elements_v" USING btree ("_parent_id");
  CREATE INDEX "_psa_plans_v_order_idx" ON "_psa_plans_v" USING btree ("_order");
  CREATE INDEX "_psa_plans_v_parent_id_idx" ON "_psa_plans_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_order_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_parent_id_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_path_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_font_group_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_custom_font_file_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("custom_font_file_id");
  CREATE INDEX "_faq_senda_questions_v_order_idx" ON "_faq_senda_questions_v" USING btree ("_order");
  CREATE INDEX "_faq_senda_questions_v_parent_id_idx" ON "_faq_senda_questions_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_order_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_senda_parent_id_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_path_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_senda_font_group_idx" ON "_pages_v_blocks_faq_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_custom_font_file_idx" ON "_pages_v_blocks_faq_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_testimonials_order_idx" ON "_pages_v_blocks_testimonials_senda_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials_senda_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_testimonials_image_im_idx" ON "_pages_v_blocks_testimonials_senda_testimonials" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_order_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_parent_id_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_path_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_font_group_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_custom_font_file_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_imc_res_btn_v_order_idx" ON "_imc_res_btn_v" USING btree ("_order");
  CREATE INDEX "_imc_res_btn_v_parent_id_idx" ON "_imc_res_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_high_btn_v_order_idx" ON "_imc_high_btn_v" USING btree ("_order");
  CREATE INDEX "_imc_high_btn_v_parent_id_idx" ON "_imc_high_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_senda_v_order_idx" ON "_imc_senda_v" USING btree ("_order");
  CREATE INDEX "_imc_senda_v_parent_id_idx" ON "_imc_senda_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_senda_v_path_idx" ON "_imc_senda_v" USING btree ("_path");
  CREATE INDEX "_imc_senda_v_background_image_background_image_media_ima_idx" ON "_imc_senda_v" USING btree ("background_image_media_image_id");
  CREATE INDEX "_imc_senda_v_high_b_m_i_image_high_b_m_i_image_media_ima_idx" ON "_imc_senda_v" USING btree ("high_b_m_i_image_media_image_id");
  CREATE INDEX "_imc_senda_v_font_group_idx" ON "_imc_senda_v" USING btree ("font_group_id");
  CREATE INDEX "_imc_senda_v_custom_font_file_idx" ON "_imc_senda_v" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_app_senda_buttons_order_idx" ON "_pages_v_blocks_app_senda_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_buttons_parent_id_idx" ON "_pages_v_blocks_app_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_order_idx" ON "_pages_v_blocks_app_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_parent_id_idx" ON "_pages_v_blocks_app_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_path_idx" ON "_pages_v_blocks_app_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_app_senda_background_image_background_im_idx" ON "_pages_v_blocks_app_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image1_image1_media_image_idx" ON "_pages_v_blocks_app_senda" USING btree ("image1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image2_image2_media_image_idx" ON "_pages_v_blocks_app_senda" USING btree ("image2_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_font_group_idx" ON "_pages_v_blocks_app_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_app_senda_custom_font_file_idx" ON "_pages_v_blocks_app_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_buttons_order_idx" ON "_pages_v_blocks_app_senda_alter_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_buttons_parent_id_idx" ON "_pages_v_blocks_app_senda_alter_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_order_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_parent_id_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_path_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_background_image_backgro_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image1_image1_media_imag_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image_mobile1_image_mobi_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image_mobile1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image_mobile2_image_mobi_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image_mobile2_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image_mobile3_image_mobi_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image_mobile3_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_font_group_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_custom_font_file_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_order_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_final_test_senda_parent_id_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_path_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_final_test_senda_background_image_backgr_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_main_image_main_image_m_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("main_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_font_group_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_custom_font_file_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("custom_font_file_id");
  DROP TYPE "public"."enum_pages_blocks_layout_drop_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_button_link_type";`)
}
