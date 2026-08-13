import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."elt" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."nlt" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_d_el_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_d_nel_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_imc_drop_footer_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."h_ff" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."f_ff" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."o_ff" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__imc_d_el_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_d_nel_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_drop_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__imc_drop_v_footer_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'heroDrop';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'heroDrop';
  CREATE TABLE "hd_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "t" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "hd_feat" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "hd_cat" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"cat_lbl" varchar,
  	"imc_lbl" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"eligible" boolean DEFAULT false
  );
  
  CREATE TABLE "hd_el" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "elt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar
  );
  
  CREATE TABLE "hd_nel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "nlt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar
  );
  
  CREATE TABLE "hd_foot" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "imc_d_cat" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"category_label" varchar,
  	"imc_label" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"is_eligible" boolean DEFAULT false,
  	"show_tag" boolean DEFAULT false,
  	"tag_label" varchar DEFAULT 'Apto',
  	"tag_icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_d_el" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_imc_d_el_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_d_nel" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_imc_d_nel_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_imc_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"category_header_label" varchar DEFAULT 'Categoría',
  	"imc_header_label" varchar DEFAULT 'IMC',
  	"category_header_icon_use_media" boolean DEFAULT false,
  	"category_header_icon_media_image_id" integer,
  	"category_header_icon_icon_s_v_g" varchar,
  	"category_header_icon_alt" varchar DEFAULT 'Icono',
  	"imc_header_icon_use_media" boolean DEFAULT false,
  	"imc_header_icon_media_image_id" integer,
  	"imc_header_icon_icon_s_v_g" varchar,
  	"imc_header_icon_alt" varchar DEFAULT 'Icono',
  	"image_media_image_id" integer,
  	"image_alt" varchar DEFAULT 'Imagen',
  	"image_circle_color" varchar DEFAULT '#F8D4E0',
  	"open_button_label" varchar DEFAULT 'Calcula tu IMC',
  	"open_button_icon_s_v_g" varchar,
  	"open_button_background_color" varchar DEFAULT '#C2005F',
  	"open_button_text_color" varchar DEFAULT '#FFFFFF',
  	"footer_content" jsonb,
  	"footer_style_text_color" varchar,
  	"footer_style_bold_text_color" varchar,
  	"footer_style_use_font_group" boolean DEFAULT false,
  	"footer_style_font_group_id" integer,
  	"footer_style_font_family" "enum_imc_drop_footer_style_font_family" DEFAULT 'default',
  	"footer_style_use_custom_font" boolean DEFAULT false,
  	"footer_style_custom_font_file_id" integer,
  	"footer_style_custom_font_name" varchar,
  	"modal_title" varchar DEFAULT 'Calcula tu IMC',
  	"height_label" varchar DEFAULT 'Altura (cm)',
  	"weight_label" varchar DEFAULT 'Peso (kg)',
  	"height_placeholder" varchar DEFAULT 'ej: 165',
  	"weight_placeholder" varchar DEFAULT 'ej: 92',
  	"calculate_button_text" varchar DEFAULT 'Calcular',
  	"calculate_button_icon_s_v_g" varchar,
  	"recalculate_button_text" varchar DEFAULT 'Volver a calcular',
  	"calculate_button_color" varchar DEFAULT '#C2005F',
  	"calculate_button_text_color" varchar DEFAULT '#FFFFFF',
  	"modal_card_background_color" varchar DEFAULT '#FFFFFF',
  	"enable_eligible_contact_form" boolean DEFAULT false,
  	"eligible_contact_form_title" jsonb,
  	"eligible_contact_form_description" jsonb,
  	"eligible_contact_form_name_placeholder" varchar DEFAULT 'Nombre',
  	"eligible_contact_form_phone_placeholder" varchar DEFAULT 'Teléfono',
  	"eligible_contact_form_email_placeholder" varchar DEFAULT 'Email',
  	"eligible_contact_form_name_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_name_icon_media_image_id" integer,
  	"eligible_contact_form_name_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_name_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_phone_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_phone_icon_media_image_id" integer,
  	"eligible_contact_form_phone_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_phone_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_email_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_email_icon_media_image_id" integer,
  	"eligible_contact_form_email_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_email_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_privacy_content" jsonb,
  	"eligible_contact_form_privacy_required" boolean DEFAULT true,
  	"eligible_contact_form_continue_button_text" jsonb,
  	"eligible_contact_form_continue_button_color" varchar DEFAULT '#C2005F',
  	"eligible_contact_form_continue_button_text_color" varchar DEFAULT '#FFFFFF',
  	"eligible_content" jsonb,
  	"eligible_button_color" varchar DEFAULT '#C2005F',
  	"eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"not_eligible_content" jsonb,
  	"not_eligible_button_color" varchar DEFAULT '#C2005F',
  	"not_eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"table_header_background_color" varchar DEFAULT '#FDF2F7',
  	"table_card_background_color" varchar DEFAULT '#FFFFFF',
  	"tag_background_color" varchar DEFAULT '#E8F5E9',
  	"tag_text_color" varchar DEFAULT '#2E7D32',
  	"accent_color" varchar DEFAULT '#C2005F',
  	"block_name" varchar
  );
  
  CREATE TABLE "_hd_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "t" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_feat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_cat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"cat_lbl" varchar,
  	"imc_lbl" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"eligible" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "elt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_nel_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "nlt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_foot_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_d_cat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"category_label" varchar,
  	"imc_label" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"is_eligible" boolean DEFAULT false,
  	"show_tag" boolean DEFAULT false,
  	"tag_label" varchar DEFAULT 'Apto',
  	"tag_icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_d_el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__imc_d_el_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_d_nel_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__imc_d_nel_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_drop_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__imc_drop_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"category_header_label" varchar DEFAULT 'Categoría',
  	"imc_header_label" varchar DEFAULT 'IMC',
  	"category_header_icon_use_media" boolean DEFAULT false,
  	"category_header_icon_media_image_id" integer,
  	"category_header_icon_icon_s_v_g" varchar,
  	"category_header_icon_alt" varchar DEFAULT 'Icono',
  	"imc_header_icon_use_media" boolean DEFAULT false,
  	"imc_header_icon_media_image_id" integer,
  	"imc_header_icon_icon_s_v_g" varchar,
  	"imc_header_icon_alt" varchar DEFAULT 'Icono',
  	"image_media_image_id" integer,
  	"image_alt" varchar DEFAULT 'Imagen',
  	"image_circle_color" varchar DEFAULT '#F8D4E0',
  	"open_button_label" varchar DEFAULT 'Calcula tu IMC',
  	"open_button_icon_s_v_g" varchar,
  	"open_button_background_color" varchar DEFAULT '#C2005F',
  	"open_button_text_color" varchar DEFAULT '#FFFFFF',
  	"footer_content" jsonb,
  	"footer_style_text_color" varchar,
  	"footer_style_bold_text_color" varchar,
  	"footer_style_use_font_group" boolean DEFAULT false,
  	"footer_style_font_group_id" integer,
  	"footer_style_font_family" "enum__imc_drop_v_footer_style_font_family" DEFAULT 'default',
  	"footer_style_use_custom_font" boolean DEFAULT false,
  	"footer_style_custom_font_file_id" integer,
  	"footer_style_custom_font_name" varchar,
  	"modal_title" varchar DEFAULT 'Calcula tu IMC',
  	"height_label" varchar DEFAULT 'Altura (cm)',
  	"weight_label" varchar DEFAULT 'Peso (kg)',
  	"height_placeholder" varchar DEFAULT 'ej: 165',
  	"weight_placeholder" varchar DEFAULT 'ej: 92',
  	"calculate_button_text" varchar DEFAULT 'Calcular',
  	"calculate_button_icon_s_v_g" varchar,
  	"recalculate_button_text" varchar DEFAULT 'Volver a calcular',
  	"calculate_button_color" varchar DEFAULT '#C2005F',
  	"calculate_button_text_color" varchar DEFAULT '#FFFFFF',
  	"modal_card_background_color" varchar DEFAULT '#FFFFFF',
  	"enable_eligible_contact_form" boolean DEFAULT false,
  	"eligible_contact_form_title" jsonb,
  	"eligible_contact_form_description" jsonb,
  	"eligible_contact_form_name_placeholder" varchar DEFAULT 'Nombre',
  	"eligible_contact_form_phone_placeholder" varchar DEFAULT 'Teléfono',
  	"eligible_contact_form_email_placeholder" varchar DEFAULT 'Email',
  	"eligible_contact_form_name_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_name_icon_media_image_id" integer,
  	"eligible_contact_form_name_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_name_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_phone_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_phone_icon_media_image_id" integer,
  	"eligible_contact_form_phone_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_phone_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_email_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_email_icon_media_image_id" integer,
  	"eligible_contact_form_email_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_email_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_privacy_content" jsonb,
  	"eligible_contact_form_privacy_required" boolean DEFAULT true,
  	"eligible_contact_form_continue_button_text" jsonb,
  	"eligible_contact_form_continue_button_color" varchar DEFAULT '#C2005F',
  	"eligible_contact_form_continue_button_text_color" varchar DEFAULT '#FFFFFF',
  	"eligible_content" jsonb,
  	"eligible_button_color" varchar DEFAULT '#C2005F',
  	"eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"not_eligible_content" jsonb,
  	"not_eligible_button_color" varchar DEFAULT '#C2005F',
  	"not_eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"table_header_background_color" varchar DEFAULT '#FDF2F7',
  	"table_card_background_color" varchar DEFAULT '#FFFFFF',
  	"tag_background_color" varchar DEFAULT '#E8F5E9',
  	"tag_text_color" varchar DEFAULT '#2E7D32',
  	"accent_color" varchar DEFAULT '#C2005F',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_icon_img_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_icon_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_label" varchar DEFAULT 'Clínica digital de pérdida de peso';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_background_color" varchar DEFAULT '#FCE4EC';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_tag_text_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hdr" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_bold" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_use_f_g" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_fg_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_ff" "h_ff" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_use_c_f" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_c_font_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_hsty_c_font_nm" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_bold" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_use_f_g" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_fg_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_ff" "f_ff" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_use_c_f" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_c_font_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_fsty_c_font_nm" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_media_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_img_alt" varchar DEFAULT 'Hero';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_icon_img_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_icon_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_h_label" varchar DEFAULT 'Estatura';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_h_ph" varchar DEFAULT 'Ej. 170';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_h_unit" varchar DEFAULT 'cm';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_w_label" varchar DEFAULT 'Peso';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_w_ph" varchar DEFAULT 'Ej. 70';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_w_unit" varchar DEFAULT 'kg';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_btn_label" varchar DEFAULT 'Calcular mi IMC';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_btn_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_ptag_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_ptag_icon_img_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_ptag_icon_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_ptag_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_ptag_label" varchar DEFAULT 'Tus datos están protegidos';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_float_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_btn_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_btn_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_card_bg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_modal_title" varchar DEFAULT 'Calcula tu IMC';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_modal_bg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_recalc_txt" varchar DEFAULT 'Volver a calcular';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_enable_contact" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_title" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_desc" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_n_ph" varchar DEFAULT 'Nombre';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_p_ph" varchar DEFAULT 'Teléfono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_e_ph" varchar DEFAULT 'Email';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_n_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_n_icon_img_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_n_icon_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_n_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_p_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_p_icon_img_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_p_icon_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_p_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_e_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_e_icon_img_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_e_icon_svg" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_e_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_privacy" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_priv_req" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_cont_btn" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_cont_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_contact_cont_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_elig_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_elig_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_elig_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_no_elig_content" jsonb;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_no_elig_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_no_elig_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_tag_bg" varchar DEFAULT '#E8F5E9';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_calc_tag_fg" varchar DEFAULT '#2E7D32';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_bold" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_use_f_g" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_fg_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_ff" "o_ff" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_use_c_f" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_c_font_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_osty_c_font_nm" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_curves" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_accent" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_bg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_bg_grad" varchar DEFAULT 'linear-gradient(180deg, #FFF5F8 0%, #FFFFFF 55%)';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_p_btn_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_p_btn_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "pages" ADD COLUMN "hero_hd_s_btn_fg" varchar DEFAULT '#101835';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_icon_img_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_icon_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_label" varchar DEFAULT 'Clínica digital de pérdida de peso';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_background_color" varchar DEFAULT '#FCE4EC';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_tag_text_color" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hdr" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_bold" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_use_f_g" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_fg_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_ff" "h_ff" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_use_c_f" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_c_font_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_hsty_c_font_nm" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_bold" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_use_f_g" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_fg_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_ff" "f_ff" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_use_c_f" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_c_font_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_fsty_c_font_nm" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_media_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_img_alt" varchar DEFAULT 'Hero';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_icon_img_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_icon_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_h_label" varchar DEFAULT 'Estatura';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_h_ph" varchar DEFAULT 'Ej. 170';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_h_unit" varchar DEFAULT 'cm';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_w_label" varchar DEFAULT 'Peso';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_w_ph" varchar DEFAULT 'Ej. 70';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_w_unit" varchar DEFAULT 'kg';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_btn_label" varchar DEFAULT 'Calcular mi IMC';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_btn_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_ptag_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_ptag_icon_img_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_ptag_icon_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_ptag_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_ptag_label" varchar DEFAULT 'Tus datos están protegidos';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_float_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_btn_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_btn_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_card_bg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_modal_title" varchar DEFAULT 'Calcula tu IMC';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_modal_bg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_recalc_txt" varchar DEFAULT 'Volver a calcular';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_enable_contact" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_title" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_desc" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_n_ph" varchar DEFAULT 'Nombre';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_p_ph" varchar DEFAULT 'Teléfono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_e_ph" varchar DEFAULT 'Email';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_n_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_n_icon_img_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_n_icon_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_n_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_p_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_p_icon_img_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_p_icon_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_p_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_e_icon_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_e_icon_img_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_e_icon_svg" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_e_icon_alt" varchar DEFAULT 'Icono';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_privacy" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_priv_req" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_cont_btn" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_cont_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_contact_cont_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_elig_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_elig_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_elig_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_no_elig_content" jsonb;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_no_elig_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_no_elig_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_tag_bg" varchar DEFAULT '#E8F5E9';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_calc_tag_fg" varchar DEFAULT '#2E7D32';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_bold" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_use_f_g" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_fg_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_ff" "o_ff" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_use_c_f" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_c_font_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_osty_c_font_nm" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_curves" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_accent" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_bg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_bg_grad" varchar DEFAULT 'linear-gradient(180deg, #FFF5F8 0%, #FFFFFF 55%)';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_p_btn_bg" varchar DEFAULT '#C2005F';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_p_btn_fg" varchar DEFAULT '#FFFFFF';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_s_btn_fg" varchar DEFAULT '#101835';
  ALTER TABLE "hd_btn" ADD CONSTRAINT "hd_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_feat" ADD CONSTRAINT "hd_feat_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hd_feat" ADD CONSTRAINT "hd_feat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_cat" ADD CONSTRAINT "hd_cat_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hd_cat" ADD CONSTRAINT "hd_cat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_el" ADD CONSTRAINT "hd_el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_nel" ADD CONSTRAINT "hd_nel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_foot" ADD CONSTRAINT "hd_foot_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hd_foot" ADD CONSTRAINT "hd_foot_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_d_cat" ADD CONSTRAINT "imc_d_cat_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_d_cat" ADD CONSTRAINT "imc_d_cat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_d_el" ADD CONSTRAINT "imc_d_el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_d_nel" ADD CONSTRAINT "imc_d_nel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_category_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("category_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_imc_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("imc_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_footer_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("footer_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_footer_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_eligible_contact_form_name_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_name_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_eligible_contact_form_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_eligible_contact_form_email_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_email_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_btn_v" ADD CONSTRAINT "_hd_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_feat_v" ADD CONSTRAINT "_hd_feat_v_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hd_feat_v" ADD CONSTRAINT "_hd_feat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_cat_v" ADD CONSTRAINT "_hd_cat_v_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hd_cat_v" ADD CONSTRAINT "_hd_cat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_el_v" ADD CONSTRAINT "_hd_el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_nel_v" ADD CONSTRAINT "_hd_nel_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_foot_v" ADD CONSTRAINT "_hd_foot_v_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hd_foot_v" ADD CONSTRAINT "_hd_foot_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_d_cat_v" ADD CONSTRAINT "_imc_d_cat_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_d_cat_v" ADD CONSTRAINT "_imc_d_cat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_d_el_v" ADD CONSTRAINT "_imc_d_el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_d_nel_v" ADD CONSTRAINT "_imc_d_nel_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_category_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("category_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_imc_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("imc_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_footer_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("footer_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_footer_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_eligible_contact_form_name_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_name_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_eligible_contact_form_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_eligible_contact_form_email_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_email_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "hd_btn_order_idx" ON "hd_btn" USING btree ("_order");
  CREATE INDEX "hd_btn_parent_id_idx" ON "hd_btn" USING btree ("_parent_id");
  CREATE INDEX "hd_feat_order_idx" ON "hd_feat" USING btree ("_order");
  CREATE INDEX "hd_feat_parent_id_idx" ON "hd_feat" USING btree ("_parent_id");
  CREATE INDEX "hd_feat_icon_icon_img_idx" ON "hd_feat" USING btree ("icon_img_id");
  CREATE INDEX "hd_cat_order_idx" ON "hd_cat" USING btree ("_order");
  CREATE INDEX "hd_cat_parent_id_idx" ON "hd_cat" USING btree ("_parent_id");
  CREATE INDEX "hd_cat_icon_icon_img_idx" ON "hd_cat" USING btree ("icon_img_id");
  CREATE INDEX "hd_el_order_idx" ON "hd_el" USING btree ("_order");
  CREATE INDEX "hd_el_parent_id_idx" ON "hd_el" USING btree ("_parent_id");
  CREATE INDEX "hd_nel_order_idx" ON "hd_nel" USING btree ("_order");
  CREATE INDEX "hd_nel_parent_id_idx" ON "hd_nel" USING btree ("_parent_id");
  CREATE INDEX "hd_foot_order_idx" ON "hd_foot" USING btree ("_order");
  CREATE INDEX "hd_foot_parent_id_idx" ON "hd_foot" USING btree ("_parent_id");
  CREATE INDEX "hd_foot_icon_icon_img_idx" ON "hd_foot" USING btree ("icon_img_id");
  CREATE INDEX "imc_d_cat_order_idx" ON "imc_d_cat" USING btree ("_order");
  CREATE INDEX "imc_d_cat_parent_id_idx" ON "imc_d_cat" USING btree ("_parent_id");
  CREATE INDEX "imc_d_cat_icon_icon_media_image_idx" ON "imc_d_cat" USING btree ("icon_media_image_id");
  CREATE INDEX "imc_d_el_order_idx" ON "imc_d_el" USING btree ("_order");
  CREATE INDEX "imc_d_el_parent_id_idx" ON "imc_d_el" USING btree ("_parent_id");
  CREATE INDEX "imc_d_nel_order_idx" ON "imc_d_nel" USING btree ("_order");
  CREATE INDEX "imc_d_nel_parent_id_idx" ON "imc_d_nel" USING btree ("_parent_id");
  CREATE INDEX "imc_drop_order_idx" ON "imc_drop" USING btree ("_order");
  CREATE INDEX "imc_drop_parent_id_idx" ON "imc_drop" USING btree ("_parent_id");
  CREATE INDEX "imc_drop_path_idx" ON "imc_drop" USING btree ("_path");
  CREATE INDEX "imc_drop_header_style_header_style_font_group_idx" ON "imc_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "imc_drop_header_style_header_style_custom_font_file_idx" ON "imc_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "imc_drop_category_header_icon_category_header_icon_media_idx" ON "imc_drop" USING btree ("category_header_icon_media_image_id");
  CREATE INDEX "imc_drop_imc_header_icon_imc_header_icon_media_image_idx" ON "imc_drop" USING btree ("imc_header_icon_media_image_id");
  CREATE INDEX "imc_drop_image_image_media_image_idx" ON "imc_drop" USING btree ("image_media_image_id");
  CREATE INDEX "imc_drop_footer_style_footer_style_font_group_idx" ON "imc_drop" USING btree ("footer_style_font_group_id");
  CREATE INDEX "imc_drop_footer_style_footer_style_custom_font_file_idx" ON "imc_drop" USING btree ("footer_style_custom_font_file_id");
  CREATE INDEX "imc_drop_eligible_contact_form_name_icon_eligible_contac_idx" ON "imc_drop" USING btree ("eligible_contact_form_name_icon_media_image_id");
  CREATE INDEX "imc_drop_eligible_contact_form_phone_icon_eligible_conta_idx" ON "imc_drop" USING btree ("eligible_contact_form_phone_icon_media_image_id");
  CREATE INDEX "imc_drop_eligible_contact_form_email_icon_eligible_conta_idx" ON "imc_drop" USING btree ("eligible_contact_form_email_icon_media_image_id");
  CREATE INDEX "_hd_btn_v_order_idx" ON "_hd_btn_v" USING btree ("_order");
  CREATE INDEX "_hd_btn_v_parent_id_idx" ON "_hd_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_feat_v_order_idx" ON "_hd_feat_v" USING btree ("_order");
  CREATE INDEX "_hd_feat_v_parent_id_idx" ON "_hd_feat_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_feat_v_icon_icon_img_idx" ON "_hd_feat_v" USING btree ("icon_img_id");
  CREATE INDEX "_hd_cat_v_order_idx" ON "_hd_cat_v" USING btree ("_order");
  CREATE INDEX "_hd_cat_v_parent_id_idx" ON "_hd_cat_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_cat_v_icon_icon_img_idx" ON "_hd_cat_v" USING btree ("icon_img_id");
  CREATE INDEX "_hd_el_v_order_idx" ON "_hd_el_v" USING btree ("_order");
  CREATE INDEX "_hd_el_v_parent_id_idx" ON "_hd_el_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_nel_v_order_idx" ON "_hd_nel_v" USING btree ("_order");
  CREATE INDEX "_hd_nel_v_parent_id_idx" ON "_hd_nel_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_foot_v_order_idx" ON "_hd_foot_v" USING btree ("_order");
  CREATE INDEX "_hd_foot_v_parent_id_idx" ON "_hd_foot_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_foot_v_icon_icon_img_idx" ON "_hd_foot_v" USING btree ("icon_img_id");
  CREATE INDEX "_imc_d_cat_v_order_idx" ON "_imc_d_cat_v" USING btree ("_order");
  CREATE INDEX "_imc_d_cat_v_parent_id_idx" ON "_imc_d_cat_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_d_cat_v_icon_icon_media_image_idx" ON "_imc_d_cat_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_imc_d_el_v_order_idx" ON "_imc_d_el_v" USING btree ("_order");
  CREATE INDEX "_imc_d_el_v_parent_id_idx" ON "_imc_d_el_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_d_nel_v_order_idx" ON "_imc_d_nel_v" USING btree ("_order");
  CREATE INDEX "_imc_d_nel_v_parent_id_idx" ON "_imc_d_nel_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_drop_v_order_idx" ON "_imc_drop_v" USING btree ("_order");
  CREATE INDEX "_imc_drop_v_parent_id_idx" ON "_imc_drop_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_drop_v_path_idx" ON "_imc_drop_v" USING btree ("_path");
  CREATE INDEX "_imc_drop_v_header_style_header_style_font_group_idx" ON "_imc_drop_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_imc_drop_v_header_style_header_style_custom_font_file_idx" ON "_imc_drop_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_imc_drop_v_category_header_icon_category_header_icon_me_idx" ON "_imc_drop_v" USING btree ("category_header_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_imc_header_icon_imc_header_icon_media_image_idx" ON "_imc_drop_v" USING btree ("imc_header_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_image_image_media_image_idx" ON "_imc_drop_v" USING btree ("image_media_image_id");
  CREATE INDEX "_imc_drop_v_footer_style_footer_style_font_group_idx" ON "_imc_drop_v" USING btree ("footer_style_font_group_id");
  CREATE INDEX "_imc_drop_v_footer_style_footer_style_custom_font_file_idx" ON "_imc_drop_v" USING btree ("footer_style_custom_font_file_id");
  CREATE INDEX "_imc_drop_v_eligible_contact_form_name_icon_eligible_con_idx" ON "_imc_drop_v" USING btree ("eligible_contact_form_name_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_eligible_contact_form_phone_icon_eligible_co_idx" ON "_imc_drop_v" USING btree ("eligible_contact_form_phone_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_eligible_contact_form_email_icon_eligible_co_idx" ON "_imc_drop_v" USING btree ("eligible_contact_form_email_icon_media_image_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_tag_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_tag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_hsty_fg_id_font_groups_id_fk" FOREIGN KEY ("hero_hd_hsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_hsty_c_font_id_fonts_id_fk" FOREIGN KEY ("hero_hd_hsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_fsty_fg_id_font_groups_id_fk" FOREIGN KEY ("hero_hd_fsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_fsty_c_font_id_fonts_id_fk" FOREIGN KEY ("hero_hd_fsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_media_id_media_id_fk" FOREIGN KEY ("hero_hd_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_ptag_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_ptag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_contact_n_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_contact_n_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_contact_p_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_contact_p_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_contact_e_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_contact_e_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_osty_fg_id_font_groups_id_fk" FOREIGN KEY ("hero_hd_osty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_osty_c_font_id_fonts_id_fk" FOREIGN KEY ("hero_hd_osty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_tag_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_tag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_hsty_fg_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hd_hsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_hsty_c_font_id_fonts_id_fk" FOREIGN KEY ("version_hero_hd_hsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_fsty_fg_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hd_fsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_fsty_c_font_id_fonts_id_fk" FOREIGN KEY ("version_hero_hd_fsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_media_id_media_id_fk" FOREIGN KEY ("version_hero_hd_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_ptag_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_ptag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_contact_n_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_contact_n_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_contact_p_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_contact_p_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_contact_e_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_contact_e_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_osty_fg_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hd_osty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_osty_c_font_id_fonts_id_fk" FOREIGN KEY ("version_hero_hd_osty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_hd_tag_icon_hero_hd_tag_icon_img_idx" ON "pages" USING btree ("hero_hd_tag_icon_img_id");
  CREATE INDEX "pages_hero_hd_hsty_hero_hd_hsty_fg_idx" ON "pages" USING btree ("hero_hd_hsty_fg_id");
  CREATE INDEX "pages_hero_hd_hsty_hero_hd_hsty_c_font_idx" ON "pages" USING btree ("hero_hd_hsty_c_font_id");
  CREATE INDEX "pages_hero_hd_fsty_hero_hd_fsty_fg_idx" ON "pages" USING btree ("hero_hd_fsty_fg_id");
  CREATE INDEX "pages_hero_hd_fsty_hero_hd_fsty_c_font_idx" ON "pages" USING btree ("hero_hd_fsty_c_font_id");
  CREATE INDEX "pages_hero_hd_hero_hd_media_idx" ON "pages" USING btree ("hero_hd_media_id");
  CREATE INDEX "pages_hero_hd_calc_icon_hero_hd_calc_icon_img_idx" ON "pages" USING btree ("hero_hd_calc_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_ptag_icon_hero_hd_calc_ptag_icon_img_idx" ON "pages" USING btree ("hero_hd_calc_ptag_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_contact_n_icon_hero_hd_calc_contact_n_idx" ON "pages" USING btree ("hero_hd_calc_contact_n_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_contact_p_icon_hero_hd_calc_contact_p_idx" ON "pages" USING btree ("hero_hd_calc_contact_p_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_contact_e_icon_hero_hd_calc_contact_e_idx" ON "pages" USING btree ("hero_hd_calc_contact_e_icon_img_id");
  CREATE INDEX "pages_hero_hd_osty_hero_hd_osty_fg_idx" ON "pages" USING btree ("hero_hd_osty_fg_id");
  CREATE INDEX "pages_hero_hd_osty_hero_hd_osty_c_font_idx" ON "pages" USING btree ("hero_hd_osty_c_font_id");
  CREATE INDEX "_pages_v_version_hero_hd_tag_icon_version_hero_hd_tag_ic_idx" ON "_pages_v" USING btree ("version_hero_hd_tag_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_hsty_version_hero_hd_hsty_fg_idx" ON "_pages_v" USING btree ("version_hero_hd_hsty_fg_id");
  CREATE INDEX "_pages_v_version_hero_hd_hsty_version_hero_hd_hsty_c_fon_idx" ON "_pages_v" USING btree ("version_hero_hd_hsty_c_font_id");
  CREATE INDEX "_pages_v_version_hero_hd_fsty_version_hero_hd_fsty_fg_idx" ON "_pages_v" USING btree ("version_hero_hd_fsty_fg_id");
  CREATE INDEX "_pages_v_version_hero_hd_fsty_version_hero_hd_fsty_c_fon_idx" ON "_pages_v" USING btree ("version_hero_hd_fsty_c_font_id");
  CREATE INDEX "_pages_v_version_hero_hd_version_hero_hd_media_idx" ON "_pages_v" USING btree ("version_hero_hd_media_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_icon_version_hero_hd_calc__idx" ON "_pages_v" USING btree ("version_hero_hd_calc_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_ptag_icon_version_hero_hd__idx" ON "_pages_v" USING btree ("version_hero_hd_calc_ptag_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_contact_n_icon_version_her_idx" ON "_pages_v" USING btree ("version_hero_hd_calc_contact_n_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_contact_p_icon_version_her_idx" ON "_pages_v" USING btree ("version_hero_hd_calc_contact_p_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_contact_e_icon_version_her_idx" ON "_pages_v" USING btree ("version_hero_hd_calc_contact_e_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_osty_version_hero_hd_osty_fg_idx" ON "_pages_v" USING btree ("version_hero_hd_osty_fg_id");
  CREATE INDEX "_pages_v_version_hero_hd_osty_version_hero_hd_osty_c_fon_idx" ON "_pages_v" USING btree ("version_hero_hd_osty_c_font_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hd_btn" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hd_feat" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hd_cat" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hd_el" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hd_nel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "hd_foot" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "imc_d_cat" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "imc_d_el" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "imc_d_nel" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "imc_drop" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hd_btn_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hd_feat_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hd_cat_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hd_el_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hd_nel_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hd_foot_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imc_d_cat_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imc_d_el_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imc_d_nel_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_imc_drop_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "hd_btn" CASCADE;
  DROP TABLE "hd_feat" CASCADE;
  DROP TABLE "hd_cat" CASCADE;
  DROP TABLE "hd_el" CASCADE;
  DROP TABLE "hd_nel" CASCADE;
  DROP TABLE "hd_foot" CASCADE;
  DROP TABLE "imc_d_cat" CASCADE;
  DROP TABLE "imc_d_el" CASCADE;
  DROP TABLE "imc_d_nel" CASCADE;
  DROP TABLE "imc_drop" CASCADE;
  DROP TABLE "_hd_btn_v" CASCADE;
  DROP TABLE "_hd_feat_v" CASCADE;
  DROP TABLE "_hd_cat_v" CASCADE;
  DROP TABLE "_hd_el_v" CASCADE;
  DROP TABLE "_hd_nel_v" CASCADE;
  DROP TABLE "_hd_foot_v" CASCADE;
  DROP TABLE "_imc_d_cat_v" CASCADE;
  DROP TABLE "_imc_d_el_v" CASCADE;
  DROP TABLE "_imc_d_nel_v" CASCADE;
  DROP TABLE "_imc_drop_v" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_tag_icon_img_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_hsty_fg_id_font_groups_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_hsty_c_font_id_fonts_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_fsty_fg_id_font_groups_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_fsty_c_font_id_fonts_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_media_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_calc_icon_img_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_calc_ptag_icon_img_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_calc_contact_n_icon_img_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_calc_contact_p_icon_img_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_calc_contact_e_icon_img_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_osty_fg_id_font_groups_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hd_osty_c_font_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_tag_icon_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_hsty_fg_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_hsty_c_font_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_fsty_fg_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_fsty_c_font_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_media_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_calc_icon_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_calc_ptag_icon_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_calc_contact_n_icon_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_calc_contact_p_icon_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_calc_contact_e_icon_img_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_osty_fg_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hd_osty_c_font_id_fonts_id_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'header138', 'heroTemplate');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'header138', 'heroTemplate');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  DROP INDEX "pages_hero_hd_tag_icon_hero_hd_tag_icon_img_idx";
  DROP INDEX "pages_hero_hd_hsty_hero_hd_hsty_fg_idx";
  DROP INDEX "pages_hero_hd_hsty_hero_hd_hsty_c_font_idx";
  DROP INDEX "pages_hero_hd_fsty_hero_hd_fsty_fg_idx";
  DROP INDEX "pages_hero_hd_fsty_hero_hd_fsty_c_font_idx";
  DROP INDEX "pages_hero_hd_hero_hd_media_idx";
  DROP INDEX "pages_hero_hd_calc_icon_hero_hd_calc_icon_img_idx";
  DROP INDEX "pages_hero_hd_calc_ptag_icon_hero_hd_calc_ptag_icon_img_idx";
  DROP INDEX "pages_hero_hd_calc_contact_n_icon_hero_hd_calc_contact_n_idx";
  DROP INDEX "pages_hero_hd_calc_contact_p_icon_hero_hd_calc_contact_p_idx";
  DROP INDEX "pages_hero_hd_calc_contact_e_icon_hero_hd_calc_contact_e_idx";
  DROP INDEX "pages_hero_hd_osty_hero_hd_osty_fg_idx";
  DROP INDEX "pages_hero_hd_osty_hero_hd_osty_c_font_idx";
  DROP INDEX "_pages_v_version_hero_hd_tag_icon_version_hero_hd_tag_ic_idx";
  DROP INDEX "_pages_v_version_hero_hd_hsty_version_hero_hd_hsty_fg_idx";
  DROP INDEX "_pages_v_version_hero_hd_hsty_version_hero_hd_hsty_c_fon_idx";
  DROP INDEX "_pages_v_version_hero_hd_fsty_version_hero_hd_fsty_fg_idx";
  DROP INDEX "_pages_v_version_hero_hd_fsty_version_hero_hd_fsty_c_fon_idx";
  DROP INDEX "_pages_v_version_hero_hd_version_hero_hd_media_idx";
  DROP INDEX "_pages_v_version_hero_hd_calc_icon_version_hero_hd_calc__idx";
  DROP INDEX "_pages_v_version_hero_hd_calc_ptag_icon_version_hero_hd__idx";
  DROP INDEX "_pages_v_version_hero_hd_calc_contact_n_icon_version_her_idx";
  DROP INDEX "_pages_v_version_hero_hd_calc_contact_p_icon_version_her_idx";
  DROP INDEX "_pages_v_version_hero_hd_calc_contact_e_icon_version_her_idx";
  DROP INDEX "_pages_v_version_hero_hd_osty_version_hero_hd_osty_fg_idx";
  DROP INDEX "_pages_v_version_hero_hd_osty_version_hero_hd_osty_c_fon_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_icon_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_icon_img_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_icon_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_icon_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_label";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_background_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_tag_text_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hdr";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_bold";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_use_f_g";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_fg_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_ff";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_use_c_f";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_c_font_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_hsty_c_font_nm";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_bold";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_use_f_g";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_fg_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_ff";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_use_c_f";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_c_font_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_fsty_c_font_nm";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_media_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_img_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_icon_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_icon_img_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_icon_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_icon_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_content";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_h_label";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_h_ph";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_h_unit";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_w_label";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_w_ph";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_w_unit";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_btn_label";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_btn_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_ptag_icon_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_ptag_icon_img_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_ptag_icon_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_ptag_icon_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_ptag_label";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_float_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_btn_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_btn_fg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_card_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_modal_title";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_modal_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_recalc_txt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_enable_contact";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_title";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_desc";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_n_ph";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_p_ph";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_e_ph";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_n_icon_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_n_icon_img_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_n_icon_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_n_icon_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_p_icon_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_p_icon_img_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_p_icon_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_p_icon_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_e_icon_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_e_icon_img_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_e_icon_svg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_e_icon_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_privacy";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_priv_req";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_cont_btn";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_cont_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_contact_cont_fg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_elig_content";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_elig_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_elig_fg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_no_elig_content";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_no_elig_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_no_elig_fg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_tag_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_calc_tag_fg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_bold";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_use_f_g";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_fg_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_ff";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_use_c_f";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_c_font_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_osty_c_font_nm";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_curves";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_accent";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_bg_grad";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_p_btn_bg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_p_btn_fg";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_s_btn_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_icon_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_icon_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_icon_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_icon_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_background_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_tag_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hdr";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_bold";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_use_f_g";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_fg_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_ff";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_use_c_f";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_c_font_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_hsty_c_font_nm";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_bold";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_use_f_g";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_fg_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_ff";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_use_c_f";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_c_font_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_fsty_c_font_nm";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_media_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_img_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_icon_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_icon_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_icon_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_icon_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_h_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_h_ph";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_h_unit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_w_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_w_ph";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_w_unit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_btn_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_btn_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_ptag_icon_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_ptag_icon_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_ptag_icon_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_ptag_icon_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_ptag_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_float_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_btn_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_btn_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_card_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_modal_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_modal_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_recalc_txt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_enable_contact";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_title";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_desc";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_n_ph";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_p_ph";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_e_ph";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_n_icon_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_n_icon_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_n_icon_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_n_icon_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_p_icon_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_p_icon_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_p_icon_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_p_icon_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_e_icon_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_e_icon_img_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_e_icon_svg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_e_icon_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_privacy";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_priv_req";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_cont_btn";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_cont_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_contact_cont_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_elig_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_elig_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_elig_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_no_elig_content";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_no_elig_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_no_elig_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_tag_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_calc_tag_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_bold";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_use_f_g";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_fg_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_ff";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_use_c_f";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_c_font_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_osty_c_font_nm";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_curves";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_accent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_bg_grad";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_p_btn_bg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_p_btn_fg";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_s_btn_fg";
  DROP TYPE "public"."elt";
  DROP TYPE "public"."nlt";
  DROP TYPE "public"."enum_imc_d_el_link_type";
  DROP TYPE "public"."enum_imc_d_nel_link_type";
  DROP TYPE "public"."enum_imc_drop_header_style_font_family";
  DROP TYPE "public"."enum_imc_drop_footer_style_font_family";
  DROP TYPE "public"."h_ff";
  DROP TYPE "public"."f_ff";
  DROP TYPE "public"."o_ff";
  DROP TYPE "public"."enum__imc_d_el_v_link_type";
  DROP TYPE "public"."enum__imc_d_nel_v_link_type";
  DROP TYPE "public"."enum__imc_drop_v_header_style_font_family";
  DROP TYPE "public"."enum__imc_drop_v_footer_style_font_family";`)
}
