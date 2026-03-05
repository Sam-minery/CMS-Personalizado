import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
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
  CREATE TYPE "public"."enum_pages_blocks_testimonials_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum_imc_res_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_high_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_background_type" AS ENUM('video', 'image', 'color');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum__imc_res_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_high_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_senda_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
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
  	"title" jsonb,
  	"description" jsonb,
  	"height_label" varchar DEFAULT 'Estatura (en cm)',
  	"weight_label" varchar DEFAULT 'Peso (en kg)',
  	"calculate_button_text" varchar DEFAULT 'Calcular IMC',
  	"calculate_button_icon_s_v_g" varchar,
  	"result_content" jsonb,
  	"high_b_m_i_content" jsonb,
  	"high_b_m_i_image_id" integer,
  	"high_b_m_i_name" varchar,
  	"high_b_m_i_description" jsonb,
  	"font_family" "enum_imc_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"background_color" varchar,
  	"card_background_color" varchar,
  	"result_card_background_color" varchar,
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
  	"title" jsonb,
  	"description" jsonb,
  	"height_label" varchar DEFAULT 'Estatura (en cm)',
  	"weight_label" varchar DEFAULT 'Peso (en kg)',
  	"calculate_button_text" varchar DEFAULT 'Calcular IMC',
  	"calculate_button_icon_s_v_g" varchar,
  	"result_content" jsonb,
  	"high_b_m_i_content" jsonb,
  	"high_b_m_i_image_id" integer,
  	"high_b_m_i_name" varchar,
  	"high_b_m_i_description" jsonb,
  	"font_family" "enum__imc_senda_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"background_color" varchar,
  	"card_background_color" varchar,
  	"result_card_background_color" varchar,
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
  
  DROP TABLE "pages_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner4" CASCADE;
  DROP TABLE "pages_blocks_banner1" CASCADE;
  DROP TABLE "pages_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio1" CASCADE;
  DROP TABLE "comparison_1_comparison_products_products" CASCADE;
  DROP TABLE "comparison_1_comparison_products" CASCADE;
  DROP TABLE "comparison_1_features_items" CASCADE;
  DROP TABLE "comparison_1_features" CASCADE;
  DROP TABLE "comparison_1_buttons" CASCADE;
  DROP TABLE "comparison_1" CASCADE;
  DROP TABLE "blog_post_header1_breadcrumbs" CASCADE;
  DROP TABLE "blog_post_header1_social_links" CASCADE;
  DROP TABLE "blog_post_header1" CASCADE;
  DROP TABLE "blog_post_header5_social_media_links" CASCADE;
  DROP TABLE "blog_post_header5" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog5" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4" CASCADE;
  DROP TABLE "_pages_v_blocks_banner1" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products_products" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products" CASCADE;
  DROP TABLE "_comparison_1_v_features_items" CASCADE;
  DROP TABLE "_comparison_1_v_features" CASCADE;
  DROP TABLE "_comparison_1_buttons_v" CASCADE;
  DROP TABLE "_comparison_1_v" CASCADE;
  DROP TABLE "_blog_post_header1_breadcrumbs_v" CASCADE;
  DROP TABLE "_blog_post_header1_social_links_v" CASCADE;
  DROP TABLE "_blog_post_header1_v" CASCADE;
  DROP TABLE "_blog_post_header5_v_social_media_links" CASCADE;
  DROP TABLE "_blog_post_header5_v" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5" CASCADE;
  ALTER TABLE "pages_blocks_cta1_senda_buttons" ADD CONSTRAINT "pages_blocks_cta1_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta1_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_senda" ADD CONSTRAINT "pages_blocks_cta1_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_senda_testimonials_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "pages_blocks_testimonials_senda_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonials_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD CONSTRAINT "pages_blocks_testimonials_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonials_senda" ADD CONSTRAINT "pages_blocks_testimonials_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_res_btn" ADD CONSTRAINT "imc_res_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_high_btn" ADD CONSTRAINT "imc_high_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_high_b_m_i_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda_buttons" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta1_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_senda" ADD CONSTRAINT "_pages_v_blocks_cta1_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_testimonials_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonials_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonials_senda" ADD CONSTRAINT "_pages_v_blocks_testimonials_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_res_btn_v" ADD CONSTRAINT "_imc_res_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_senda_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_high_btn_v" ADD CONSTRAINT "_imc_high_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_senda_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_high_b_m_i_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_cta1_senda_buttons_order_idx" ON "pages_blocks_cta1_senda_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta1_senda_buttons_parent_id_idx" ON "pages_blocks_cta1_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta1_senda_order_idx" ON "pages_blocks_cta1_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta1_senda_parent_id_idx" ON "pages_blocks_cta1_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta1_senda_path_idx" ON "pages_blocks_cta1_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta1_senda_icon_icon_media_image_idx" ON "pages_blocks_cta1_senda" USING btree ("icon_media_image_id");
  CREATE INDEX "pages_blocks_cta1_senda_background_image_idx" ON "pages_blocks_cta1_senda" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_cta1_senda_custom_font_file_idx" ON "pages_blocks_cta1_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_testimonials_senda_testimonials_order_idx" ON "pages_blocks_testimonials_senda_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_senda_testimonials_parent_id_idx" ON "pages_blocks_testimonials_senda_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_senda_testimonials_image_image_idx" ON "pages_blocks_testimonials_senda_testimonials" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_testimonials_senda_order_idx" ON "pages_blocks_testimonials_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonials_senda_parent_id_idx" ON "pages_blocks_testimonials_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonials_senda_path_idx" ON "pages_blocks_testimonials_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonials_senda_custom_font_file_idx" ON "pages_blocks_testimonials_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "imc_res_btn_order_idx" ON "imc_res_btn" USING btree ("_order");
  CREATE INDEX "imc_res_btn_parent_id_idx" ON "imc_res_btn" USING btree ("_parent_id");
  CREATE INDEX "imc_high_btn_order_idx" ON "imc_high_btn" USING btree ("_order");
  CREATE INDEX "imc_high_btn_parent_id_idx" ON "imc_high_btn" USING btree ("_parent_id");
  CREATE INDEX "imc_senda_order_idx" ON "imc_senda" USING btree ("_order");
  CREATE INDEX "imc_senda_parent_id_idx" ON "imc_senda" USING btree ("_parent_id");
  CREATE INDEX "imc_senda_path_idx" ON "imc_senda" USING btree ("_path");
  CREATE INDEX "imc_senda_high_b_m_i_image_idx" ON "imc_senda" USING btree ("high_b_m_i_image_id");
  CREATE INDEX "imc_senda_custom_font_file_idx" ON "imc_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_buttons_order_idx" ON "_pages_v_blocks_cta1_senda_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta1_senda_buttons_parent_id_idx" ON "_pages_v_blocks_cta1_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_order_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta1_senda_parent_id_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_path_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta1_senda_icon_icon_media_image_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_background_image_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_cta1_senda_custom_font_file_idx" ON "_pages_v_blocks_cta1_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_testimonials_order_idx" ON "_pages_v_blocks_testimonials_senda_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonials_senda_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_testimonials_image_im_idx" ON "_pages_v_blocks_testimonials_senda_testimonials" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_order_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_parent_id_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_path_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonials_senda_custom_font_file_idx" ON "_pages_v_blocks_testimonials_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_imc_res_btn_v_order_idx" ON "_imc_res_btn_v" USING btree ("_order");
  CREATE INDEX "_imc_res_btn_v_parent_id_idx" ON "_imc_res_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_high_btn_v_order_idx" ON "_imc_high_btn_v" USING btree ("_order");
  CREATE INDEX "_imc_high_btn_v_parent_id_idx" ON "_imc_high_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_senda_v_order_idx" ON "_imc_senda_v" USING btree ("_order");
  CREATE INDEX "_imc_senda_v_parent_id_idx" ON "_imc_senda_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_senda_v_path_idx" ON "_imc_senda_v" USING btree ("_path");
  CREATE INDEX "_imc_senda_v_high_b_m_i_image_idx" ON "_imc_senda_v" USING btree ("high_b_m_i_image_id");
  CREATE INDEX "_imc_senda_v_custom_font_file_idx" ON "_imc_senda_v" USING btree ("custom_font_file_id");
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_url";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_type";
  DROP TYPE "public"."enum_pages_blocks_banner4_font_family";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_type";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner1_font_family";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum_comparison_1_features_items_type";
  DROP TYPE "public"."enum_comparison_1_buttons_variant";
  DROP TYPE "public"."enum_comparison_1_buttons_size";
  DROP TYPE "public"."enum_comparison_1_buttons_link_type";
  DROP TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type";
  DROP TYPE "public"."icon_type";
  DROP TYPE "public"."enum_blog_post_header1_social_links_link_type";
  DROP TYPE "public"."enum_blog_post_header1_font_family";
  DROP TYPE "public"."enum_blog_post_header5_social_media_links_icon_type";
  DROP TYPE "public"."enum_blog_post_header5_social_media_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_blog5_tabs_content_type";
  DROP TYPE "public"."enum_pages_blocks_blog5_featured_blog_post_type";
  DROP TYPE "public"."enum_pages_blocks_blog5_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum__comparison_1_v_features_items_type";
  DROP TYPE "public"."enum__comparison_1_buttons_v_variant";
  DROP TYPE "public"."enum__comparison_1_buttons_v_size";
  DROP TYPE "public"."enum__comparison_1_buttons_v_link_type";
  DROP TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type";
  DROP TYPE "public"."enum__blog_post_header1_social_links_v_link_type";
  DROP TYPE "public"."enum__blog_post_header1_v_font_family";
  DROP TYPE "public"."enum__blog_post_header5_v_social_media_links_icon_type";
  DROP TYPE "public"."enum__blog_post_header5_v_social_media_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_tabs_content_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_featured_blog_post_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_font_family";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_comparison_1_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_comparison_1_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header1_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_blog_post_header5_social_media_links_icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header5_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog5_tabs_content_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog5_featured_blog_post_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog5_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__comparison_1_v_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_social_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__blog_post_header5_v_social_media_links_icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__blog_post_header5_v_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_tabs_content_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_featured_blog_post_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "pages_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_pages_blocks_banner4_social_media_links_platform",
  	"type" "enum_pages_blocks_banner4_social_media_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_banner4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_banner4_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_type" "enum_pages_blocks_banner1_button_type" DEFAULT 'reference',
  	"button_new_tab" boolean,
  	"button_url" varchar,
  	"button_label" varchar,
  	"button_size" "enum_pages_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_banner1_button_variant" DEFAULT 'default',
  	"button_button_submits_form" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_banner1_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio1_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'View project',
  	"button_variant" "enum_pages_blocks_portfolio1_projects_button_variant" DEFAULT 'link',
  	"button_size" "enum_pages_blocks_portfolio1_projects_button_size" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_portfolio1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Portfolio',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" "enum_pages_blocks_portfolio1_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_portfolio1_button_size" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "comparison_1_comparison_products_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"product_name" varchar DEFAULT 'Product name',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet'
  );
  
  CREATE TABLE "comparison_1_comparison_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "comparison_1_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_comparison_1_features_items_type" DEFAULT 'text',
  	"text_value" varchar
  );
  
  CREATE TABLE "comparison_1_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here'
  );
  
  CREATE TABLE "comparison_1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum_comparison_1_buttons_variant" DEFAULT 'secondary',
  	"size" "enum_comparison_1_buttons_size" DEFAULT 'md',
  	"link_type" "enum_comparison_1_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_right" boolean DEFAULT false
  );
  
  CREATE TABLE "comparison_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"comparison_title" varchar DEFAULT 'Product comparison',
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_post_header1_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum_blog_post_header1_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header1_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_type" "icon_type" DEFAULT 'link',
  	"link_type" "enum_blog_post_header1_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_blog_post_header1_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_post_header5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_type" "enum_blog_post_header5_social_media_links_icon_type" DEFAULT 'link',
  	"link_type" "enum_blog_post_header5_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar DEFAULT 'Category',
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_blog5_tabs_content_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"post_content" jsonb,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"content" jsonb,
  	"default_value" varchar DEFAULT 'view-all',
  	"featured_blog_post_type" "enum_pages_blocks_blog5_featured_blog_post_type" DEFAULT 'reference',
  	"featured_blog_post_new_tab" boolean,
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_post_content" jsonb,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_blog5_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__pages_v_blocks_banner4_social_media_links_platform",
  	"type" "enum__pages_v_blocks_banner4_social_media_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_banner4_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_type" "enum__pages_v_blocks_banner1_button_type" DEFAULT 'reference',
  	"button_new_tab" boolean,
  	"button_url" varchar,
  	"button_label" varchar,
  	"button_size" "enum__pages_v_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_banner1_button_variant" DEFAULT 'default',
  	"button_button_submits_form" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_banner1_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio1_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'View project',
  	"button_variant" "enum__pages_v_blocks_portfolio1_projects_button_variant" DEFAULT 'link',
  	"button_size" "enum__pages_v_blocks_portfolio1_projects_button_size" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Portfolio',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" "enum__pages_v_blocks_portfolio1_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_portfolio1_button_size" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_comparison_1_v_comparison_products_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"product_name" varchar DEFAULT 'Product name',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_comparison_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__comparison_1_v_features_items_type" DEFAULT 'text',
  	"text_value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_buttons_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__comparison_1_buttons_v_variant" DEFAULT 'secondary',
  	"size" "enum__comparison_1_buttons_v_size" DEFAULT 'md',
  	"link_type" "enum__comparison_1_buttons_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"comparison_title" varchar DEFAULT 'Product comparison',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blog_post_header1_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum__blog_post_header1_breadcrumbs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header1_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_type" "icon_type" DEFAULT 'link',
  	"link_type" "enum__blog_post_header1_social_links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__blog_post_header1_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blog_post_header5_v_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_type" "enum__blog_post_header5_v_social_media_links_icon_type" DEFAULT 'link',
  	"link_type" "enum__blog_post_header5_v_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar DEFAULT 'Category',
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_blog5_tabs_content_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"post_content" jsonb,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"content" jsonb,
  	"default_value" varchar DEFAULT 'view-all',
  	"featured_blog_post_type" "enum__pages_v_blocks_blog5_featured_blog_post_type" DEFAULT 'reference',
  	"featured_blog_post_new_tab" boolean,
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_post_content" jsonb,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_blog5_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "pages_blocks_cta1_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta1_senda" CASCADE;
  DROP TABLE "pages_blocks_testimonials_senda_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonials_senda" CASCADE;
  DROP TABLE "imc_res_btn" CASCADE;
  DROP TABLE "imc_high_btn" CASCADE;
  DROP TABLE "imc_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_senda_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_senda_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonials_senda" CASCADE;
  DROP TABLE "_imc_res_btn_v" CASCADE;
  DROP TABLE "_imc_high_btn_v" CASCADE;
  DROP TABLE "_imc_senda_v" CASCADE;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_url" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD CONSTRAINT "pages_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1_projects" ADD CONSTRAINT "pages_blocks_portfolio1_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1_projects" ADD CONSTRAINT "pages_blocks_portfolio1_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1" ADD CONSTRAINT "pages_blocks_portfolio1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products_products" ADD CONSTRAINT "comparison_1_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products_products" ADD CONSTRAINT "comparison_1_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products" ADD CONSTRAINT "comparison_1_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_features_items" ADD CONSTRAINT "comparison_1_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_features" ADD CONSTRAINT "comparison_1_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_buttons" ADD CONSTRAINT "comparison_1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1" ADD CONSTRAINT "comparison_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1_breadcrumbs" ADD CONSTRAINT "blog_post_header1_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1_social_links" ADD CONSTRAINT "blog_post_header1_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header5_social_media_links" ADD CONSTRAINT "blog_post_header5_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs" ADD CONSTRAINT "pages_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio1_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio1_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1" ADD CONSTRAINT "_pages_v_blocks_portfolio1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features_items" ADD CONSTRAINT "_comparison_1_v_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features" ADD CONSTRAINT "_comparison_1_v_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_buttons_v" ADD CONSTRAINT "_comparison_1_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v" ADD CONSTRAINT "_comparison_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_breadcrumbs_v" ADD CONSTRAINT "_blog_post_header1_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_social_links_v" ADD CONSTRAINT "_blog_post_header1_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v_social_media_links" ADD CONSTRAINT "_blog_post_header5_v_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner4_social_media_links_order_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner4_social_media_links_parent_id_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_order_idx" ON "pages_blocks_banner4" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner4_parent_id_idx" ON "pages_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_path_idx" ON "pages_blocks_banner4" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner4_logo_idx" ON "pages_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner4_custom_font_file_idx" ON "pages_blocks_banner4" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_banner1_order_idx" ON "pages_blocks_banner1" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner1_parent_id_idx" ON "pages_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner1_path_idx" ON "pages_blocks_banner1" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner1_logo_idx" ON "pages_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner1_custom_font_file_idx" ON "pages_blocks_banner1" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_portfolio1_projects_order_idx" ON "pages_blocks_portfolio1_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio1_projects_parent_id_idx" ON "pages_blocks_portfolio1_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio1_projects_image_idx" ON "pages_blocks_portfolio1_projects" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portfolio1_order_idx" ON "pages_blocks_portfolio1" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio1_parent_id_idx" ON "pages_blocks_portfolio1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio1_path_idx" ON "pages_blocks_portfolio1" USING btree ("_path");
  CREATE INDEX "comparison_1_comparison_products_products_order_idx" ON "comparison_1_comparison_products_products" USING btree ("_order");
  CREATE INDEX "comparison_1_comparison_products_products_parent_id_idx" ON "comparison_1_comparison_products_products" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_comparison_products_products_icon_idx" ON "comparison_1_comparison_products_products" USING btree ("icon_id");
  CREATE INDEX "comparison_1_comparison_products_order_idx" ON "comparison_1_comparison_products" USING btree ("_order");
  CREATE INDEX "comparison_1_comparison_products_parent_id_idx" ON "comparison_1_comparison_products" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_features_items_order_idx" ON "comparison_1_features_items" USING btree ("_order");
  CREATE INDEX "comparison_1_features_items_parent_id_idx" ON "comparison_1_features_items" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_features_order_idx" ON "comparison_1_features" USING btree ("_order");
  CREATE INDEX "comparison_1_features_parent_id_idx" ON "comparison_1_features" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_buttons_order_idx" ON "comparison_1_buttons" USING btree ("_order");
  CREATE INDEX "comparison_1_buttons_parent_id_idx" ON "comparison_1_buttons" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_order_idx" ON "comparison_1" USING btree ("_order");
  CREATE INDEX "comparison_1_parent_id_idx" ON "comparison_1" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_path_idx" ON "comparison_1" USING btree ("_path");
  CREATE INDEX "blog_post_header1_breadcrumbs_order_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_order");
  CREATE INDEX "blog_post_header1_breadcrumbs_parent_id_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_social_links_order_idx" ON "blog_post_header1_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header1_social_links_parent_id_idx" ON "blog_post_header1_social_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_order_idx" ON "blog_post_header1" USING btree ("_order");
  CREATE INDEX "blog_post_header1_parent_id_idx" ON "blog_post_header1" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_path_idx" ON "blog_post_header1" USING btree ("_path");
  CREATE INDEX "blog_post_header1_image_idx" ON "blog_post_header1" USING btree ("image_id");
  CREATE INDEX "blog_post_header1_author_author_avatar_idx" ON "blog_post_header1" USING btree ("author_avatar_id");
  CREATE INDEX "blog_post_header1_custom_font_file_idx" ON "blog_post_header1" USING btree ("custom_font_file_id");
  CREATE INDEX "blog_post_header5_social_media_links_order_idx" ON "blog_post_header5_social_media_links" USING btree ("_order");
  CREATE INDEX "blog_post_header5_social_media_links_parent_id_idx" ON "blog_post_header5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header5_order_idx" ON "blog_post_header5" USING btree ("_order");
  CREATE INDEX "blog_post_header5_parent_id_idx" ON "blog_post_header5" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header5_path_idx" ON "blog_post_header5" USING btree ("_path");
  CREATE INDEX "blog_post_header5_image_idx" ON "blog_post_header5" USING btree ("image_id");
  CREATE INDEX "blog_post_header5_author_author_avatar_idx" ON "blog_post_header5" USING btree ("author_avatar_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_order_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_content_parent_id_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_image_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_avatar_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog5_tabs_order_idx" ON "pages_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_parent_id_idx" ON "pages_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_order_idx" ON "pages_blocks_blog5" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_parent_id_idx" ON "pages_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_path_idx" ON "pages_blocks_blog5" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_post_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_po_1_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "pages_blocks_blog5_custom_font_file_idx" ON "pages_blocks_blog5" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_banner4_social_media_links_order_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner4_social_media_links_parent_id_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_order_idx" ON "_pages_v_blocks_banner4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner4_parent_id_idx" ON "_pages_v_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_path_idx" ON "_pages_v_blocks_banner4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner4_logo_idx" ON "_pages_v_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner4_custom_font_file_idx" ON "_pages_v_blocks_banner4" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_banner1_order_idx" ON "_pages_v_blocks_banner1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner1_parent_id_idx" ON "_pages_v_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner1_path_idx" ON "_pages_v_blocks_banner1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner1_logo_idx" ON "_pages_v_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner1_custom_font_file_idx" ON "_pages_v_blocks_banner1" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_order_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_parent_id_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_image_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_order_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio1_parent_id_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_path_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_path");
  CREATE INDEX "_comparison_1_v_comparison_products_products_order_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_comparison_products_products_parent_id_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_comparison_products_products_icon_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("icon_id");
  CREATE INDEX "_comparison_1_v_comparison_products_order_idx" ON "_comparison_1_v_comparison_products" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_comparison_products_parent_id_idx" ON "_comparison_1_v_comparison_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_features_items_order_idx" ON "_comparison_1_v_features_items" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_features_items_parent_id_idx" ON "_comparison_1_v_features_items" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_features_order_idx" ON "_comparison_1_v_features" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_features_parent_id_idx" ON "_comparison_1_v_features" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_buttons_v_order_idx" ON "_comparison_1_buttons_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_buttons_v_parent_id_idx" ON "_comparison_1_buttons_v" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_order_idx" ON "_comparison_1_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_parent_id_idx" ON "_comparison_1_v" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_path_idx" ON "_comparison_1_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_order_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_parent_id_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_social_links_v_order_idx" ON "_blog_post_header1_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_social_links_v_parent_id_idx" ON "_blog_post_header1_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_order_idx" ON "_blog_post_header1_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_v_parent_id_idx" ON "_blog_post_header1_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_path_idx" ON "_blog_post_header1_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header1_v_image_idx" ON "_blog_post_header1_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header1_v_author_author_avatar_idx" ON "_blog_post_header1_v" USING btree ("author_avatar_id");
  CREATE INDEX "_blog_post_header1_v_custom_font_file_idx" ON "_blog_post_header1_v" USING btree ("custom_font_file_id");
  CREATE INDEX "_blog_post_header5_v_social_media_links_order_idx" ON "_blog_post_header5_v_social_media_links" USING btree ("_order");
  CREATE INDEX "_blog_post_header5_v_social_media_links_parent_id_idx" ON "_blog_post_header5_v_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header5_v_order_idx" ON "_blog_post_header5_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header5_v_parent_id_idx" ON "_blog_post_header5_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header5_v_path_idx" ON "_blog_post_header5_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header5_v_image_idx" ON "_blog_post_header5_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header5_v_author_author_avatar_idx" ON "_blog_post_header5_v" USING btree ("author_avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_order_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_image_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_avatar_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_order_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_parent_id_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_order_idx" ON "_pages_v_blocks_blog5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_parent_id_idx" ON "_pages_v_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_path_idx" ON "_pages_v_blocks_blog5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_p_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_1_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_custom_font_file_idx" ON "_pages_v_blocks_blog5" USING btree ("custom_font_file_id");
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_block_height_mode";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_background_type";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_buttons_alignment";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_background_color_mode";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_gradient_direction";
  DROP TYPE "public"."enum_pages_blocks_cta1_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_testimonials_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_testimonials_senda_cards_gap";
  DROP TYPE "public"."enum_pages_blocks_testimonials_senda_card_size";
  DROP TYPE "public"."enum_imc_res_btn_link_type";
  DROP TYPE "public"."enum_imc_high_btn_link_type";
  DROP TYPE "public"."enum_imc_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_block_height_mode";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_background_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_buttons_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_background_color_mode";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_gradient_direction";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_senda_cards_gap";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_senda_card_size";
  DROP TYPE "public"."enum__imc_res_btn_v_link_type";
  DROP TYPE "public"."enum__imc_high_btn_v_link_type";
  DROP TYPE "public"."enum__imc_senda_v_font_family";`)
}
