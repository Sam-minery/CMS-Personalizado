import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_team_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_team_drop_secondary_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_team_drop_members_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta_app_btn_store" AS ENUM('appStore', 'googlePlay');
  CREATE TYPE "public"."enum_cta_app_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta_app_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta_app_subtitle_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta_app_features_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__team_drop_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__team_drop_v_secondary_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__team_drop_v_members_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta_app_btn_v_store" AS ENUM('appStore', 'googlePlay');
  CREATE TYPE "public"."enum__cta_app_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta_app_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta_app_v_subtitle_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta_app_v_features_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb
  );
  
  CREATE TABLE "team_drop" (
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
  	"header_style_font_family" "enum_team_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"divider_icon_use_media" boolean DEFAULT false,
  	"divider_icon_media_image_id" integer,
  	"divider_icon_icon_s_v_g" varchar,
  	"divider_icon_alt" varchar DEFAULT 'Icono',
  	"secondary_content" jsonb,
  	"secondary_style_text_color" varchar,
  	"secondary_style_bold_text_color" varchar,
  	"secondary_style_use_font_group" boolean DEFAULT false,
  	"secondary_style_font_group_id" integer,
  	"secondary_style_font_family" "enum_team_drop_secondary_style_font_family" DEFAULT 'default',
  	"secondary_style_use_custom_font" boolean DEFAULT false,
  	"secondary_style_custom_font_file_id" integer,
  	"secondary_style_custom_font_name" varchar,
  	"members_style_text_color" varchar,
  	"members_style_bold_text_color" varchar,
  	"members_style_use_font_group" boolean DEFAULT false,
  	"members_style_font_group_id" integer,
  	"members_style_font_family" "enum_team_drop_members_style_font_family" DEFAULT 'default',
  	"members_style_use_custom_font" boolean DEFAULT false,
  	"members_style_custom_font_file_id" integer,
  	"members_style_custom_font_name" varchar,
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "cta_app_ft" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "cta_app_qr" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Código QR'
  );
  
  CREATE TABLE "cta_app_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"store" "enum_cta_app_btn_store" DEFAULT 'appStore',
  	"link_type" "enum_cta_app_btn_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "cta_app" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar DEFAULT '#101835',
  	"header_style_bold_text_color" varchar DEFAULT '#C2005F',
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_cta_app_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"subtitle_content" jsonb,
  	"subtitle_style_text_color" varchar DEFAULT '#666666',
  	"subtitle_style_bold_text_color" varchar,
  	"subtitle_style_use_font_group" boolean DEFAULT false,
  	"subtitle_style_font_group_id" integer,
  	"subtitle_style_font_family" "enum_cta_app_subtitle_style_font_family" DEFAULT 'default',
  	"subtitle_style_use_custom_font" boolean DEFAULT false,
  	"subtitle_style_custom_font_file_id" integer,
  	"subtitle_style_custom_font_name" varchar,
  	"mockup_image_id" integer,
  	"features_style_text_color" varchar DEFAULT '#101835',
  	"features_style_bold_text_color" varchar,
  	"features_style_use_font_group" boolean DEFAULT false,
  	"features_style_font_group_id" integer,
  	"features_style_font_family" "enum_cta_app_features_style_font_family" DEFAULT 'default',
  	"features_style_use_custom_font" boolean DEFAULT false,
  	"features_style_custom_font_file_id" integer,
  	"features_style_custom_font_name" varchar,
  	"features_style_check_color" varchar DEFAULT '#4CAF50',
  	"features_style_icon_use_media" boolean DEFAULT false,
  	"features_style_icon_media_image_id" integer,
  	"features_style_icon_icon_s_v_g" varchar,
  	"features_style_icon_alt" varchar DEFAULT 'Icono',
  	"download_card_desktop_scan_text" varchar DEFAULT 'Escanea el código QR para descargar la app',
  	"download_card_mobile_download_text" varchar DEFAULT 'Descarga la app y lleva tu bienestar siempre contigo',
  	"download_card_phone_icon_use_media" boolean DEFAULT false,
  	"download_card_phone_icon_media_image_id" integer,
  	"download_card_phone_icon_icon_s_v_g" varchar,
  	"download_card_phone_icon_alt" varchar DEFAULT 'Icono',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"enable_mockup_scroll_animation" boolean DEFAULT true,
  	"mockup_scroll_show_percent" numeric DEFAULT 100,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "_team_members_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_team_drop_v" (
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
  	"header_style_font_family" "enum__team_drop_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"divider_icon_use_media" boolean DEFAULT false,
  	"divider_icon_media_image_id" integer,
  	"divider_icon_icon_s_v_g" varchar,
  	"divider_icon_alt" varchar DEFAULT 'Icono',
  	"secondary_content" jsonb,
  	"secondary_style_text_color" varchar,
  	"secondary_style_bold_text_color" varchar,
  	"secondary_style_use_font_group" boolean DEFAULT false,
  	"secondary_style_font_group_id" integer,
  	"secondary_style_font_family" "enum__team_drop_v_secondary_style_font_family" DEFAULT 'default',
  	"secondary_style_use_custom_font" boolean DEFAULT false,
  	"secondary_style_custom_font_file_id" integer,
  	"secondary_style_custom_font_name" varchar,
  	"members_style_text_color" varchar,
  	"members_style_bold_text_color" varchar,
  	"members_style_use_font_group" boolean DEFAULT false,
  	"members_style_font_group_id" integer,
  	"members_style_font_family" "enum__team_drop_v_members_style_font_family" DEFAULT 'default',
  	"members_style_use_custom_font" boolean DEFAULT false,
  	"members_style_custom_font_file_id" integer,
  	"members_style_custom_font_name" varchar,
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta_app_ft_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_app_qr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Código QR',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_app_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"store" "enum__cta_app_btn_v_store" DEFAULT 'appStore',
  	"link_type" "enum__cta_app_btn_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_app_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar DEFAULT '#101835',
  	"header_style_bold_text_color" varchar DEFAULT '#C2005F',
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__cta_app_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"subtitle_content" jsonb,
  	"subtitle_style_text_color" varchar DEFAULT '#666666',
  	"subtitle_style_bold_text_color" varchar,
  	"subtitle_style_use_font_group" boolean DEFAULT false,
  	"subtitle_style_font_group_id" integer,
  	"subtitle_style_font_family" "enum__cta_app_v_subtitle_style_font_family" DEFAULT 'default',
  	"subtitle_style_use_custom_font" boolean DEFAULT false,
  	"subtitle_style_custom_font_file_id" integer,
  	"subtitle_style_custom_font_name" varchar,
  	"mockup_image_id" integer,
  	"features_style_text_color" varchar DEFAULT '#101835',
  	"features_style_bold_text_color" varchar,
  	"features_style_use_font_group" boolean DEFAULT false,
  	"features_style_font_group_id" integer,
  	"features_style_font_family" "enum__cta_app_v_features_style_font_family" DEFAULT 'default',
  	"features_style_use_custom_font" boolean DEFAULT false,
  	"features_style_custom_font_file_id" integer,
  	"features_style_custom_font_name" varchar,
  	"features_style_check_color" varchar DEFAULT '#4CAF50',
  	"features_style_icon_use_media" boolean DEFAULT false,
  	"features_style_icon_media_image_id" integer,
  	"features_style_icon_icon_s_v_g" varchar,
  	"features_style_icon_alt" varchar DEFAULT 'Icono',
  	"download_card_desktop_scan_text" varchar DEFAULT 'Escanea el código QR para descargar la app',
  	"download_card_mobile_download_text" varchar DEFAULT 'Descarga la app y lleva tu bienestar siempre contigo',
  	"download_card_phone_icon_use_media" boolean DEFAULT false,
  	"download_card_phone_icon_media_image_id" integer,
  	"download_card_phone_icon_icon_s_v_g" varchar,
  	"download_card_phone_icon_alt" varchar DEFAULT 'Icono',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"enable_mockup_scroll_animation" boolean DEFAULT true,
  	"mockup_scroll_show_percent" numeric DEFAULT 100,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_divider_icon_media_image_id_media_id_fk" FOREIGN KEY ("divider_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_secondary_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("secondary_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_secondary_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("secondary_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_members_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("members_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_members_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("members_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app_ft" ADD CONSTRAINT "cta_app_ft_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_app"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app_qr" ADD CONSTRAINT "cta_app_qr_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app_qr" ADD CONSTRAINT "cta_app_qr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_app"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app_btn" ADD CONSTRAINT "cta_app_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_app"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_subtitle_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("subtitle_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_subtitle_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("subtitle_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_mockup_image_id_media_id_fk" FOREIGN KEY ("mockup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_features_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("features_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_features_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("features_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_features_style_icon_media_image_id_media_id_fk" FOREIGN KEY ("features_style_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_download_card_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("download_card_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_divider_icon_media_image_id_media_id_fk" FOREIGN KEY ("divider_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_secondary_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("secondary_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_secondary_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("secondary_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_members_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("members_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_members_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("members_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_ft_v" ADD CONSTRAINT "_cta_app_ft_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_app_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_qr_v" ADD CONSTRAINT "_cta_app_qr_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_qr_v" ADD CONSTRAINT "_cta_app_qr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_app_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_btn_v" ADD CONSTRAINT "_cta_app_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_app_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_subtitle_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("subtitle_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_subtitle_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("subtitle_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_mockup_image_id_media_id_fk" FOREIGN KEY ("mockup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_features_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("features_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_features_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("features_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_features_style_icon_media_image_id_media_id_fk" FOREIGN KEY ("features_style_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_download_card_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("download_card_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "team_members_order_idx" ON "team_members" USING btree ("_order");
  CREATE INDEX "team_members_parent_id_idx" ON "team_members" USING btree ("_parent_id");
  CREATE INDEX "team_members_image_idx" ON "team_members" USING btree ("image_id");
  CREATE INDEX "team_drop_order_idx" ON "team_drop" USING btree ("_order");
  CREATE INDEX "team_drop_parent_id_idx" ON "team_drop" USING btree ("_parent_id");
  CREATE INDEX "team_drop_path_idx" ON "team_drop" USING btree ("_path");
  CREATE INDEX "team_drop_header_style_header_style_font_group_idx" ON "team_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "team_drop_header_style_header_style_custom_font_file_idx" ON "team_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "team_drop_divider_icon_divider_icon_media_image_idx" ON "team_drop" USING btree ("divider_icon_media_image_id");
  CREATE INDEX "team_drop_secondary_style_secondary_style_font_group_idx" ON "team_drop" USING btree ("secondary_style_font_group_id");
  CREATE INDEX "team_drop_secondary_style_secondary_style_custom_font_fi_idx" ON "team_drop" USING btree ("secondary_style_custom_font_file_id");
  CREATE INDEX "team_drop_members_style_members_style_font_group_idx" ON "team_drop" USING btree ("members_style_font_group_id");
  CREATE INDEX "team_drop_members_style_members_style_custom_font_file_idx" ON "team_drop" USING btree ("members_style_custom_font_file_id");
  CREATE INDEX "cta_app_ft_order_idx" ON "cta_app_ft" USING btree ("_order");
  CREATE INDEX "cta_app_ft_parent_id_idx" ON "cta_app_ft" USING btree ("_parent_id");
  CREATE INDEX "cta_app_qr_order_idx" ON "cta_app_qr" USING btree ("_order");
  CREATE INDEX "cta_app_qr_parent_id_idx" ON "cta_app_qr" USING btree ("_parent_id");
  CREATE INDEX "cta_app_qr_image_idx" ON "cta_app_qr" USING btree ("image_id");
  CREATE INDEX "cta_app_btn_order_idx" ON "cta_app_btn" USING btree ("_order");
  CREATE INDEX "cta_app_btn_parent_id_idx" ON "cta_app_btn" USING btree ("_parent_id");
  CREATE INDEX "cta_app_order_idx" ON "cta_app" USING btree ("_order");
  CREATE INDEX "cta_app_parent_id_idx" ON "cta_app" USING btree ("_parent_id");
  CREATE INDEX "cta_app_path_idx" ON "cta_app" USING btree ("_path");
  CREATE INDEX "cta_app_header_style_header_style_font_group_idx" ON "cta_app" USING btree ("header_style_font_group_id");
  CREATE INDEX "cta_app_header_style_header_style_custom_font_file_idx" ON "cta_app" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "cta_app_subtitle_style_subtitle_style_font_group_idx" ON "cta_app" USING btree ("subtitle_style_font_group_id");
  CREATE INDEX "cta_app_subtitle_style_subtitle_style_custom_font_file_idx" ON "cta_app" USING btree ("subtitle_style_custom_font_file_id");
  CREATE INDEX "cta_app_mockup_image_idx" ON "cta_app" USING btree ("mockup_image_id");
  CREATE INDEX "cta_app_features_style_features_style_font_group_idx" ON "cta_app" USING btree ("features_style_font_group_id");
  CREATE INDEX "cta_app_features_style_features_style_custom_font_file_idx" ON "cta_app" USING btree ("features_style_custom_font_file_id");
  CREATE INDEX "cta_app_features_style_icon_features_style_icon_media_im_idx" ON "cta_app" USING btree ("features_style_icon_media_image_id");
  CREATE INDEX "cta_app_download_card_phone_icon_download_card_phone_ico_idx" ON "cta_app" USING btree ("download_card_phone_icon_media_image_id");
  CREATE INDEX "_team_members_v_order_idx" ON "_team_members_v" USING btree ("_order");
  CREATE INDEX "_team_members_v_parent_id_idx" ON "_team_members_v" USING btree ("_parent_id");
  CREATE INDEX "_team_members_v_image_idx" ON "_team_members_v" USING btree ("image_id");
  CREATE INDEX "_team_drop_v_order_idx" ON "_team_drop_v" USING btree ("_order");
  CREATE INDEX "_team_drop_v_parent_id_idx" ON "_team_drop_v" USING btree ("_parent_id");
  CREATE INDEX "_team_drop_v_path_idx" ON "_team_drop_v" USING btree ("_path");
  CREATE INDEX "_team_drop_v_header_style_header_style_font_group_idx" ON "_team_drop_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_team_drop_v_header_style_header_style_custom_font_file_idx" ON "_team_drop_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_team_drop_v_divider_icon_divider_icon_media_image_idx" ON "_team_drop_v" USING btree ("divider_icon_media_image_id");
  CREATE INDEX "_team_drop_v_secondary_style_secondary_style_font_group_idx" ON "_team_drop_v" USING btree ("secondary_style_font_group_id");
  CREATE INDEX "_team_drop_v_secondary_style_secondary_style_custom_font_idx" ON "_team_drop_v" USING btree ("secondary_style_custom_font_file_id");
  CREATE INDEX "_team_drop_v_members_style_members_style_font_group_idx" ON "_team_drop_v" USING btree ("members_style_font_group_id");
  CREATE INDEX "_team_drop_v_members_style_members_style_custom_font_fil_idx" ON "_team_drop_v" USING btree ("members_style_custom_font_file_id");
  CREATE INDEX "_cta_app_ft_v_order_idx" ON "_cta_app_ft_v" USING btree ("_order");
  CREATE INDEX "_cta_app_ft_v_parent_id_idx" ON "_cta_app_ft_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_qr_v_order_idx" ON "_cta_app_qr_v" USING btree ("_order");
  CREATE INDEX "_cta_app_qr_v_parent_id_idx" ON "_cta_app_qr_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_qr_v_image_idx" ON "_cta_app_qr_v" USING btree ("image_id");
  CREATE INDEX "_cta_app_btn_v_order_idx" ON "_cta_app_btn_v" USING btree ("_order");
  CREATE INDEX "_cta_app_btn_v_parent_id_idx" ON "_cta_app_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_v_order_idx" ON "_cta_app_v" USING btree ("_order");
  CREATE INDEX "_cta_app_v_parent_id_idx" ON "_cta_app_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_v_path_idx" ON "_cta_app_v" USING btree ("_path");
  CREATE INDEX "_cta_app_v_header_style_header_style_font_group_idx" ON "_cta_app_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_cta_app_v_header_style_header_style_custom_font_file_idx" ON "_cta_app_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_cta_app_v_subtitle_style_subtitle_style_font_group_idx" ON "_cta_app_v" USING btree ("subtitle_style_font_group_id");
  CREATE INDEX "_cta_app_v_subtitle_style_subtitle_style_custom_font_fil_idx" ON "_cta_app_v" USING btree ("subtitle_style_custom_font_file_id");
  CREATE INDEX "_cta_app_v_mockup_image_idx" ON "_cta_app_v" USING btree ("mockup_image_id");
  CREATE INDEX "_cta_app_v_features_style_features_style_font_group_idx" ON "_cta_app_v" USING btree ("features_style_font_group_id");
  CREATE INDEX "_cta_app_v_features_style_features_style_custom_font_fil_idx" ON "_cta_app_v" USING btree ("features_style_custom_font_file_id");
  CREATE INDEX "_cta_app_v_features_style_icon_features_style_icon_media_idx" ON "_cta_app_v" USING btree ("features_style_icon_media_image_id");
  CREATE INDEX "_cta_app_v_download_card_phone_icon_download_card_phone__idx" ON "_cta_app_v" USING btree ("download_card_phone_icon_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "team_members" CASCADE;
  DROP TABLE "team_drop" CASCADE;
  DROP TABLE "cta_app_ft" CASCADE;
  DROP TABLE "cta_app_qr" CASCADE;
  DROP TABLE "cta_app_btn" CASCADE;
  DROP TABLE "cta_app" CASCADE;
  DROP TABLE "_team_members_v" CASCADE;
  DROP TABLE "_team_drop_v" CASCADE;
  DROP TABLE "_cta_app_ft_v" CASCADE;
  DROP TABLE "_cta_app_qr_v" CASCADE;
  DROP TABLE "_cta_app_btn_v" CASCADE;
  DROP TABLE "_cta_app_v" CASCADE;
  DROP TYPE "public"."enum_team_drop_header_style_font_family";
  DROP TYPE "public"."enum_team_drop_secondary_style_font_family";
  DROP TYPE "public"."enum_team_drop_members_style_font_family";
  DROP TYPE "public"."enum_cta_app_btn_store";
  DROP TYPE "public"."enum_cta_app_btn_link_type";
  DROP TYPE "public"."enum_cta_app_header_style_font_family";
  DROP TYPE "public"."enum_cta_app_subtitle_style_font_family";
  DROP TYPE "public"."enum_cta_app_features_style_font_family";
  DROP TYPE "public"."enum__team_drop_v_header_style_font_family";
  DROP TYPE "public"."enum__team_drop_v_secondary_style_font_family";
  DROP TYPE "public"."enum__team_drop_v_members_style_font_family";
  DROP TYPE "public"."enum__cta_app_btn_v_store";
  DROP TYPE "public"."enum__cta_app_btn_v_link_type";
  DROP TYPE "public"."enum__cta_app_v_header_style_font_family";
  DROP TYPE "public"."enum__cta_app_v_subtitle_style_font_family";
  DROP TYPE "public"."enum__cta_app_v_features_style_font_family";`)
}
