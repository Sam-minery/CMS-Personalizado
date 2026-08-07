import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hs_left_btns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hs_left_btns_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "senda_sub" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "senda_nav" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "senda_btns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_footer_links" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "hs_left_btns" CASCADE;
  DROP TABLE "_hs_left_btns_v" CASCADE;
  DROP TABLE "senda_sub" CASCADE;
  DROP TABLE "senda_nav" CASCADE;
  DROP TABLE "senda_btns" CASCADE;
  DROP TABLE "footer_footer_senda_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_column_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_footer_links" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_image_media_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_image_media_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_senda_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_senda_config_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_senda_config_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_senda_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_senda_config_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_senda_config_custom_font_file_id_fonts_id_fk";
  
  DROP INDEX "pages_hero_hero_senda_image_hero_hero_senda_image_media_idx";
  DROP INDEX "pages_hero_hero_hero_senda_font_group_idx";
  DROP INDEX "pages_hero_hero_hero_senda_custom_font_file_idx";
  DROP INDEX "_pages_v_version_hero_hero_senda_image_version_hero_hero_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_hero_senda_font_group_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_hero_senda_custom_fon_idx";
  DROP INDEX "header_navbar_senda_config_logo_navbar_senda_config_logo_idx";
  DROP INDEX "header_navbar_senda_config_navbar_senda_config_font_grou_idx";
  DROP INDEX "header_navbar_senda_config_navbar_senda_config_custom_fo_idx";
  DROP INDEX "footer_footer_senda_config_logo_footer_senda_config_logo_idx";
  DROP INDEX "footer_footer_senda_config_footer_senda_config_font_grou_idx";
  DROP INDEX "footer_footer_senda_config_footer_senda_config_custom_fo_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_media_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_use_cu_img_dims";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_width";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_width_unit";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_height";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_height_unit";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_w";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_wu";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_h";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_hu";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_apply_custom_width";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_width_percent";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_width_percent_mobile";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_use_vidiv_agent";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_link_type";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_link_new_tab";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_link_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_link_label";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_icon_s_v_g";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_background_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_text_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_bold_text_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_button_background_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_button_text_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_button2_background_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_button2_text_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_button3_background_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_button3_text_color";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_use_font_group";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_font_group_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_font_family";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_use_custom_font";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_font_file_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_font_name";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_media_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_use_cu_img_dims";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width_unit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height_unit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_w";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_wu";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_h";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_hu";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_apply_custom_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_width_percent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_width_percent_mobile";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_use_vidiv_agent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_link_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_link_new_tab";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_link_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_link_label";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_icon_s_v_g";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_background_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_bold_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_button_background_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_button_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_button2_background_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_button2_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_button3_background_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_button3_text_color";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_use_font_group";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_font_group_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_font_family";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_use_custom_font";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_font_file_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_font_name";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_use_media";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_media_id";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_src";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_alt";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_bold_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_button_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_button_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_use_font_group";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_font_group_id";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_font_family";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_use_custom_font";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_custom_font_file_id";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_custom_font_name";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_media_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_anchor_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_footer_text";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_background_color";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_text_color";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_bold_text_color";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_use_font_group";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_font_group_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_font_family";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_use_custom_font";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_custom_font_file_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_custom_font_name";
  DROP TYPE "public"."enum_hs_left_btns_link_type";
  DROP TYPE "public"."app";
  DROP TYPE "public"."sz";
  DROP TYPE "public"."hs_cu_wu";
  DROP TYPE "public"."hs_cu_hu";
  DROP TYPE "public"."hs_cu_mwu";
  DROP TYPE "public"."hs_cu_mhu";
  DROP TYPE "public"."enum_pages_hero_hero_senda_image_button_link_type";
  DROP TYPE "public"."enum_pages_hero_hero_senda_font_family";
  DROP TYPE "public"."enum__hs_left_btns_v_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_hero_senda_image_button_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_hero_senda_font_family";
  DROP TYPE "public"."enum_senda_sub_link_type";
  DROP TYPE "public"."enum_senda_nav_link_type";
  DROP TYPE "public"."enum_senda_btns_link_type";
  DROP TYPE "public"."enum_senda_btns_size";
  DROP TYPE "public"."enum_senda_btns_variant";
  DROP TYPE "public"."enum_header_navbar_senda_config_font_family";
  DROP TYPE "public"."enum_footer_footer_senda_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_social_media_links_platform";
  DROP TYPE "public"."enum_footer_footer_senda_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_font_family";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_hs_left_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."app" AS ENUM('default', 'secondary');
  CREATE TYPE "public"."sz" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."hs_cu_wu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."hs_cu_hu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."hs_cu_mwu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."hs_cu_mhu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."enum_pages_hero_hero_senda_image_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_hero_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__hs_left_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_hero_senda_image_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_hero_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_senda_sub_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_senda_nav_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_senda_btns_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_senda_btns_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_senda_btns_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_header_navbar_senda_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_footer_footer_senda_config_column_links_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_social_media_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer_senda_config_footer_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "hs_left_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_hs_left_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'default',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "_hs_left_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__hs_left_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'default',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "senda_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_senda_sub_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "senda_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_senda_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "senda_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_senda_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"size" "enum_senda_btns_size" DEFAULT 'lg',
  	"variant" "enum_senda_btns_variant" DEFAULT 'default',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_footer_senda_config_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"platform" "enum_footer_footer_senda_config_social_media_links_platform",
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_use_media" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_media_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_url" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_alt" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_use_cu_img_dims" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_width" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_width_unit" "hs_cu_wu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_height" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_height_unit" "hs_cu_hu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_w" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_wu" "hs_cu_mwu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_h" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_hu" "hs_cu_mhu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_width_percent_mobile" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_use_vidiv_agent" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_link_type" "enum_pages_hero_hero_senda_image_button_link_type" DEFAULT 'reference';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_link_new_tab" boolean;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_link_url" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_link_label" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_icon_s_v_g" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_background_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_text_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_bold_text_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_button_background_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_button_text_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_button2_background_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_button2_text_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_button3_background_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_button3_text_color" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_font_group_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_font_family" "enum_pages_hero_hero_senda_font_family" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_font_file_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_font_name" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_media_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_url" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_alt" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_use_cu_img_dims" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width_unit" "hs_cu_wu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height_unit" "hs_cu_hu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_w" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_wu" "hs_cu_mwu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_h" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_hu" "hs_cu_mhu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_width_percent_mobile" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_use_vidiv_agent" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_link_type" "enum__pages_v_version_hero_hero_senda_image_button_link_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_link_new_tab" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_link_url" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_link_label" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_icon_s_v_g" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_background_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_text_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_bold_text_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_button_background_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_button_text_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_button2_background_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_button2_text_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_button3_background_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_button3_text_color" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_font_group_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_font_family" "enum__pages_v_version_hero_hero_senda_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_font_file_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_font_name" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_media_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_alt" varchar DEFAULT 'Logo image';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_bold_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_button_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_button_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_use_font_group" boolean DEFAULT false;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_font_group_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_font_family" "enum_header_navbar_senda_config_font_family" DEFAULT 'default';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_custom_font_file_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_custom_font_name" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_media_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_type" "enum_footer_footer_senda_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_anchor_id" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_footer_text" jsonb;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_background_color" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_text_color" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_bold_text_color" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_use_font_group" boolean DEFAULT false;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_font_group_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_font_family" "enum_footer_footer_senda_config_font_family" DEFAULT 'default';
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_custom_font_file_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_custom_font_name" varchar;
  ALTER TABLE "hs_left_btns" ADD CONSTRAINT "hs_left_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hs_left_btns_v" ADD CONSTRAINT "_hs_left_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_sub" ADD CONSTRAINT "senda_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."senda_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_nav" ADD CONSTRAINT "senda_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_btns" ADD CONSTRAINT "senda_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_column_links_links" ADD CONSTRAINT "footer_footer_senda_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer_senda_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_column_links" ADD CONSTRAINT "footer_footer_senda_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_social_media_links" ADD CONSTRAINT "footer_footer_senda_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_footer_links" ADD CONSTRAINT "footer_footer_senda_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "hs_left_btns_order_idx" ON "hs_left_btns" USING btree ("_order");
  CREATE INDEX "hs_left_btns_parent_id_idx" ON "hs_left_btns" USING btree ("_parent_id");
  CREATE INDEX "_hs_left_btns_v_order_idx" ON "_hs_left_btns_v" USING btree ("_order");
  CREATE INDEX "_hs_left_btns_v_parent_id_idx" ON "_hs_left_btns_v" USING btree ("_parent_id");
  CREATE INDEX "senda_sub_order_idx" ON "senda_sub" USING btree ("_order");
  CREATE INDEX "senda_sub_parent_id_idx" ON "senda_sub" USING btree ("_parent_id");
  CREATE INDEX "senda_nav_order_idx" ON "senda_nav" USING btree ("_order");
  CREATE INDEX "senda_nav_parent_id_idx" ON "senda_nav" USING btree ("_parent_id");
  CREATE INDEX "senda_btns_order_idx" ON "senda_btns" USING btree ("_order");
  CREATE INDEX "senda_btns_parent_id_idx" ON "senda_btns" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_column_links_links_order_idx" ON "footer_footer_senda_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_column_links_links_parent_id_idx" ON "footer_footer_senda_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_column_links_order_idx" ON "footer_footer_senda_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_column_links_parent_id_idx" ON "footer_footer_senda_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_social_media_links_order_idx" ON "footer_footer_senda_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_social_media_links_parent_id_idx" ON "footer_footer_senda_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_footer_links_order_idx" ON "footer_footer_senda_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_footer_links_parent_id_idx" ON "footer_footer_senda_config_footer_links" USING btree ("_parent_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_image_media_id_media_id_fk" FOREIGN KEY ("hero_hero_senda_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("hero_hero_senda_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("hero_hero_senda_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_image_media_id_media_id_fk" FOREIGN KEY ("version_hero_hero_senda_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hero_senda_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("version_hero_hero_senda_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar_senda_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_font_group_id_font_groups_id_fk" FOREIGN KEY ("navbar_senda_config_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("navbar_senda_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer_senda_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_font_group_id_font_groups_id_fk" FOREIGN KEY ("footer_senda_config_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_senda_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_senda_image_hero_hero_senda_image_media_idx" ON "pages" USING btree ("hero_hero_senda_image_media_id");
  CREATE INDEX "pages_hero_hero_hero_senda_font_group_idx" ON "pages" USING btree ("hero_hero_senda_font_group_id");
  CREATE INDEX "pages_hero_hero_hero_senda_custom_font_file_idx" ON "pages" USING btree ("hero_hero_senda_custom_font_file_id");
  CREATE INDEX "_pages_v_version_hero_hero_senda_image_version_hero_hero_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_image_media_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_hero_senda_font_group_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_font_group_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_hero_senda_custom_fon_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_custom_font_file_id");
  CREATE INDEX "header_navbar_senda_config_logo_navbar_senda_config_logo_idx" ON "header" USING btree ("navbar_senda_config_logo_media_id");
  CREATE INDEX "header_navbar_senda_config_navbar_senda_config_font_grou_idx" ON "header" USING btree ("navbar_senda_config_font_group_id");
  CREATE INDEX "header_navbar_senda_config_navbar_senda_config_custom_fo_idx" ON "header" USING btree ("navbar_senda_config_custom_font_file_id");
  CREATE INDEX "footer_footer_senda_config_logo_footer_senda_config_logo_idx" ON "footer" USING btree ("footer_senda_config_logo_media_id");
  CREATE INDEX "footer_footer_senda_config_footer_senda_config_font_grou_idx" ON "footer" USING btree ("footer_senda_config_font_group_id");
  CREATE INDEX "footer_footer_senda_config_footer_senda_config_custom_fo_idx" ON "footer" USING btree ("footer_senda_config_custom_font_file_id");`)
}
