import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_cta1_alt_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum_cta1_alt_background_type" AS ENUM('video', 'image', 'color');
  CREATE TYPE "public"."enum_cta1_alt_videocall_section_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta1_alt_phone_section_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta1_alt_phone_section_phone_popup_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."grad_dir" AS ENUM('to-br', 'to-tr', 'to-right', 'to-bottom');
  CREATE TYPE "public"."enum_cta1_alt_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum_cta1_alt_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum_cta1_alt_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta1_alt_v_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum__cta1_alt_v_background_type" AS ENUM('video', 'image', 'color');
  CREATE TYPE "public"."enum__cta1_alt_v_videocall_section_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta1_alt_v_phone_section_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta1_alt_v_phone_section_phone_popup_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta1_alt_v_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum__cta1_alt_v_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum__cta1_alt_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "cta1_alt" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"title" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"block_height_mode" "enum_cta1_alt_block_height_mode" DEFAULT 'viewport',
  	"custom_block_height_px" numeric,
  	"background_type" "enum_cta1_alt_background_type" DEFAULT 'video',
  	"videocall_section_icon_use_media" boolean DEFAULT true,
  	"videocall_section_icon_media_image_id" integer,
  	"videocall_section_icon_icon_s_v_g" varchar,
  	"videocall_section_label_rich_text" jsonb,
  	"videocall_section_label_text_color" varchar,
  	"videocall_section_button_background_color" varchar,
  	"videocall_section_button_text_color" varchar,
  	"videocall_section_icon_s_v_g" varchar,
  	"videocall_section_link_type" "enum_cta1_alt_videocall_section_link_type" DEFAULT 'reference',
  	"videocall_section_link_new_tab" boolean,
  	"videocall_section_link_url" varchar,
  	"videocall_section_link_label" varchar,
  	"phone_section_icon_use_media" boolean DEFAULT true,
  	"phone_section_icon_media_image_id" integer,
  	"phone_section_icon_icon_s_v_g" varchar,
  	"phone_section_label_rich_text" jsonb,
  	"phone_section_label_text_color" varchar,
  	"phone_section_button_background_color" varchar,
  	"phone_section_button_text_color" varchar,
  	"phone_section_icon_s_v_g" varchar,
  	"phone_section_link_type" "enum_cta1_alt_phone_section_link_type" DEFAULT 'reference',
  	"phone_section_link_new_tab" boolean,
  	"phone_section_link_url" varchar,
  	"phone_section_link_label" varchar,
  	"phone_section_phone_popup_use_popup" boolean DEFAULT false,
  	"phone_section_phone_popup_close_button_s_v_g" varchar,
  	"phone_section_phone_popup_title" jsonb,
  	"phone_section_phone_popup_title_text_color" varchar,
  	"phone_section_phone_popup_title_bold_text_color" varchar,
  	"phone_section_phone_popup_name_label" varchar DEFAULT 'Nombre y apellidos *',
  	"phone_section_phone_popup_phone_label" varchar DEFAULT 'Número de teléfono *',
  	"phone_section_phone_popup_button_link_type" "enum_cta1_alt_phone_section_phone_popup_button_link_type" DEFAULT 'reference',
  	"phone_section_phone_popup_button_link_new_tab" boolean,
  	"phone_section_phone_popup_button_link_url" varchar,
  	"phone_section_phone_popup_button_link_label" varchar,
  	"phone_section_phone_popup_button_background_color" varchar,
  	"phone_section_phone_popup_button_text_color" varchar,
  	"phone_section_phone_popup_terms_rich_text" jsonb,
  	"phone_section_phone_popup_terms_text_color" varchar,
  	"phone_section_phone_popup_data_protection_rich_text" jsonb,
  	"phone_section_phone_popup_data_protection_text_color" varchar,
  	"phone_section_phone_popup_gradient_start_color" varchar,
  	"phone_section_phone_popup_gradient_end_color" varchar,
  	"phone_section_phone_popup_gradient_direction" "grad_dir" DEFAULT 'to-br',
  	"video_youtube_url" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"background_color_mode" "enum_cta1_alt_background_color_mode" DEFAULT 'solid',
  	"gradient_start_color" varchar,
  	"gradient_end_color" varchar,
  	"gradient_direction" "enum_cta1_alt_gradient_direction" DEFAULT 'to-right',
  	"font_family" "enum_cta1_alt_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta1_alt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"title" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"block_height_mode" "enum__cta1_alt_v_block_height_mode" DEFAULT 'viewport',
  	"custom_block_height_px" numeric,
  	"background_type" "enum__cta1_alt_v_background_type" DEFAULT 'video',
  	"videocall_section_icon_use_media" boolean DEFAULT true,
  	"videocall_section_icon_media_image_id" integer,
  	"videocall_section_icon_icon_s_v_g" varchar,
  	"videocall_section_label_rich_text" jsonb,
  	"videocall_section_label_text_color" varchar,
  	"videocall_section_button_background_color" varchar,
  	"videocall_section_button_text_color" varchar,
  	"videocall_section_icon_s_v_g" varchar,
  	"videocall_section_link_type" "enum__cta1_alt_v_videocall_section_link_type" DEFAULT 'reference',
  	"videocall_section_link_new_tab" boolean,
  	"videocall_section_link_url" varchar,
  	"videocall_section_link_label" varchar,
  	"phone_section_icon_use_media" boolean DEFAULT true,
  	"phone_section_icon_media_image_id" integer,
  	"phone_section_icon_icon_s_v_g" varchar,
  	"phone_section_label_rich_text" jsonb,
  	"phone_section_label_text_color" varchar,
  	"phone_section_button_background_color" varchar,
  	"phone_section_button_text_color" varchar,
  	"phone_section_icon_s_v_g" varchar,
  	"phone_section_link_type" "enum__cta1_alt_v_phone_section_link_type" DEFAULT 'reference',
  	"phone_section_link_new_tab" boolean,
  	"phone_section_link_url" varchar,
  	"phone_section_link_label" varchar,
  	"phone_section_phone_popup_use_popup" boolean DEFAULT false,
  	"phone_section_phone_popup_close_button_s_v_g" varchar,
  	"phone_section_phone_popup_title" jsonb,
  	"phone_section_phone_popup_title_text_color" varchar,
  	"phone_section_phone_popup_title_bold_text_color" varchar,
  	"phone_section_phone_popup_name_label" varchar DEFAULT 'Nombre y apellidos *',
  	"phone_section_phone_popup_phone_label" varchar DEFAULT 'Número de teléfono *',
  	"phone_section_phone_popup_button_link_type" "enum__cta1_alt_v_phone_section_phone_popup_button_link_type" DEFAULT 'reference',
  	"phone_section_phone_popup_button_link_new_tab" boolean,
  	"phone_section_phone_popup_button_link_url" varchar,
  	"phone_section_phone_popup_button_link_label" varchar,
  	"phone_section_phone_popup_button_background_color" varchar,
  	"phone_section_phone_popup_button_text_color" varchar,
  	"phone_section_phone_popup_terms_rich_text" jsonb,
  	"phone_section_phone_popup_terms_text_color" varchar,
  	"phone_section_phone_popup_data_protection_rich_text" jsonb,
  	"phone_section_phone_popup_data_protection_text_color" varchar,
  	"phone_section_phone_popup_gradient_start_color" varchar,
  	"phone_section_phone_popup_gradient_end_color" varchar,
  	"phone_section_phone_popup_gradient_direction" "grad_dir" DEFAULT 'to-br',
  	"video_youtube_url" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"background_color_mode" "enum__cta1_alt_v_background_color_mode" DEFAULT 'solid',
  	"gradient_start_color" varchar,
  	"gradient_end_color" varchar,
  	"gradient_direction" "enum__cta1_alt_v_gradient_direction" DEFAULT 'to-right',
  	"font_family" "enum__cta1_alt_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_high_b_m_i_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image1_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image2_id_media_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_high_b_m_i_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image1_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image2_id_media_id_fk";
  
  DROP INDEX "imc_senda_high_b_m_i_image_idx";
  DROP INDEX "pages_blocks_app_senda_image1_idx";
  DROP INDEX "pages_blocks_app_senda_image2_idx";
  DROP INDEX "_imc_senda_v_high_b_m_i_image_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image1_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image2_idx";
  ALTER TABLE "pages_blocks_cards_senda" ADD COLUMN "header_content_max_width" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "imc_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_use_media" boolean DEFAULT true;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_media_image_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_src" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_alt" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_name_and_description" jsonb;
  ALTER TABLE "imc_senda" ADD COLUMN "result_text_color" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_media_image_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_src" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_alt" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_media_image_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_src" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_alt" varchar;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD COLUMN "header_content_max_width" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_media_image_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_src" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_alt" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_name_and_description" jsonb;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "result_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_src" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_alt" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_src" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_alt" varchar;
  ALTER TABLE "cta1_alt" ADD CONSTRAINT "cta1_alt_videocall_section_icon_media_image_id_media_id_fk" FOREIGN KEY ("videocall_section_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta1_alt" ADD CONSTRAINT "cta1_alt_phone_section_icon_media_image_id_media_id_fk" FOREIGN KEY ("phone_section_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta1_alt" ADD CONSTRAINT "cta1_alt_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta1_alt" ADD CONSTRAINT "cta1_alt_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta1_alt" ADD CONSTRAINT "cta1_alt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta1_alt_v" ADD CONSTRAINT "_cta1_alt_v_videocall_section_icon_media_image_id_media_id_fk" FOREIGN KEY ("videocall_section_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta1_alt_v" ADD CONSTRAINT "_cta1_alt_v_phone_section_icon_media_image_id_media_id_fk" FOREIGN KEY ("phone_section_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta1_alt_v" ADD CONSTRAINT "_cta1_alt_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta1_alt_v" ADD CONSTRAINT "_cta1_alt_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta1_alt_v" ADD CONSTRAINT "_cta1_alt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cta1_alt_order_idx" ON "cta1_alt" USING btree ("_order");
  CREATE INDEX "cta1_alt_parent_id_idx" ON "cta1_alt" USING btree ("_parent_id");
  CREATE INDEX "cta1_alt_path_idx" ON "cta1_alt" USING btree ("_path");
  CREATE INDEX "cta1_alt_videocall_section_icon_videocall_section_icon_m_idx" ON "cta1_alt" USING btree ("videocall_section_icon_media_image_id");
  CREATE INDEX "cta1_alt_phone_section_icon_phone_section_icon_media_ima_idx" ON "cta1_alt" USING btree ("phone_section_icon_media_image_id");
  CREATE INDEX "cta1_alt_background_image_idx" ON "cta1_alt" USING btree ("background_image_id");
  CREATE INDEX "cta1_alt_custom_font_file_idx" ON "cta1_alt" USING btree ("custom_font_file_id");
  CREATE INDEX "_cta1_alt_v_order_idx" ON "_cta1_alt_v" USING btree ("_order");
  CREATE INDEX "_cta1_alt_v_parent_id_idx" ON "_cta1_alt_v" USING btree ("_parent_id");
  CREATE INDEX "_cta1_alt_v_path_idx" ON "_cta1_alt_v" USING btree ("_path");
  CREATE INDEX "_cta1_alt_v_videocall_section_icon_videocall_section_ico_idx" ON "_cta1_alt_v" USING btree ("videocall_section_icon_media_image_id");
  CREATE INDEX "_cta1_alt_v_phone_section_icon_phone_section_icon_media__idx" ON "_cta1_alt_v" USING btree ("phone_section_icon_media_image_id");
  CREATE INDEX "_cta1_alt_v_background_image_idx" ON "_cta1_alt_v" USING btree ("background_image_id");
  CREATE INDEX "_cta1_alt_v_custom_font_file_idx" ON "_cta1_alt_v" USING btree ("custom_font_file_id");
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_high_b_m_i_image_media_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image2_media_image_id_media_id_fk" FOREIGN KEY ("image2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_high_b_m_i_image_media_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image2_media_image_id_media_id_fk" FOREIGN KEY ("image2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "imc_senda_background_image_background_image_media_image_idx" ON "imc_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "imc_senda_high_b_m_i_image_high_b_m_i_image_media_image_idx" ON "imc_senda" USING btree ("high_b_m_i_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_background_image_background_image_idx" ON "pages_blocks_app_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_image1_image1_media_image_idx" ON "pages_blocks_app_senda" USING btree ("image1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_image2_image2_media_image_idx" ON "pages_blocks_app_senda" USING btree ("image2_media_image_id");
  CREATE INDEX "_imc_senda_v_background_image_background_image_media_ima_idx" ON "_imc_senda_v" USING btree ("background_image_media_image_id");
  CREATE INDEX "_imc_senda_v_high_b_m_i_image_high_b_m_i_image_media_ima_idx" ON "_imc_senda_v" USING btree ("high_b_m_i_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_background_image_background_im_idx" ON "_pages_v_blocks_app_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image1_image1_media_image_idx" ON "_pages_v_blocks_app_senda" USING btree ("image1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image2_image2_media_image_idx" ON "_pages_v_blocks_app_senda" USING btree ("image2_media_image_id");
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_id";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_name";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_description";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_name";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_description";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cta1_alt" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_cta1_alt_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cta1_alt" CASCADE;
  DROP TABLE "_cta1_alt_v" CASCADE;
  ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_high_b_m_i_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image1_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image2_media_image_id_media_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_high_b_m_i_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image1_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image2_media_image_id_media_id_fk";
  
  DROP INDEX "imc_senda_background_image_background_image_media_image_idx";
  DROP INDEX "imc_senda_high_b_m_i_image_high_b_m_i_image_media_image_idx";
  DROP INDEX "pages_blocks_app_senda_background_image_background_image_idx";
  DROP INDEX "pages_blocks_app_senda_image1_image1_media_image_idx";
  DROP INDEX "pages_blocks_app_senda_image2_image2_media_image_idx";
  DROP INDEX "_imc_senda_v_background_image_background_image_media_ima_idx";
  DROP INDEX "_imc_senda_v_high_b_m_i_image_high_b_m_i_image_media_ima_idx";
  DROP INDEX "_pages_v_blocks_app_senda_background_image_background_im_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image1_image1_media_image_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image2_image2_media_image_idx";
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_name" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_description" jsonb;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_name" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_description" jsonb;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_id" integer;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_high_b_m_i_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_high_b_m_i_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "imc_senda_high_b_m_i_image_idx" ON "imc_senda" USING btree ("high_b_m_i_image_id");
  CREATE INDEX "pages_blocks_app_senda_image1_idx" ON "pages_blocks_app_senda" USING btree ("image1_id");
  CREATE INDEX "pages_blocks_app_senda_image2_idx" ON "pages_blocks_app_senda" USING btree ("image2_id");
  CREATE INDEX "_imc_senda_v_high_b_m_i_image_idx" ON "_imc_senda_v" USING btree ("high_b_m_i_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image1_idx" ON "_pages_v_blocks_app_senda" USING btree ("image1_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image2_idx" ON "_pages_v_blocks_app_senda" USING btree ("image2_id");
  ALTER TABLE "pages_blocks_cards_senda" DROP COLUMN "header_content_max_width";
  ALTER TABLE "imc_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "imc_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "imc_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_use_media";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_media_image_id";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_src";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_alt";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_name_and_description";
  ALTER TABLE "imc_senda" DROP COLUMN "result_text_color";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_use_media";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_media_image_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_src";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_alt";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_use_media";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_media_image_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_src";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_alt";
  ALTER TABLE "_pages_v_blocks_cards_senda" DROP COLUMN "header_content_max_width";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "background_image_use_media";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "background_image_src";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_use_media";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_media_image_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_src";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_alt";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_name_and_description";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "result_text_color";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_use_media";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_media_image_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_src";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_alt";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_use_media";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_media_image_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_src";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_alt";
  DROP TYPE "public"."enum_cta1_alt_block_height_mode";
  DROP TYPE "public"."enum_cta1_alt_background_type";
  DROP TYPE "public"."enum_cta1_alt_videocall_section_link_type";
  DROP TYPE "public"."enum_cta1_alt_phone_section_link_type";
  DROP TYPE "public"."enum_cta1_alt_phone_section_phone_popup_button_link_type";
  DROP TYPE "public"."grad_dir";
  DROP TYPE "public"."enum_cta1_alt_background_color_mode";
  DROP TYPE "public"."enum_cta1_alt_gradient_direction";
  DROP TYPE "public"."enum_cta1_alt_font_family";
  DROP TYPE "public"."enum__cta1_alt_v_block_height_mode";
  DROP TYPE "public"."enum__cta1_alt_v_background_type";
  DROP TYPE "public"."enum__cta1_alt_v_videocall_section_link_type";
  DROP TYPE "public"."enum__cta1_alt_v_phone_section_link_type";
  DROP TYPE "public"."enum__cta1_alt_v_phone_section_phone_popup_button_link_type";
  DROP TYPE "public"."enum__cta1_alt_v_background_color_mode";
  DROP TYPE "public"."enum__cta1_alt_v_gradient_direction";
  DROP TYPE "public"."enum__cta1_alt_v_font_family";`)
}
