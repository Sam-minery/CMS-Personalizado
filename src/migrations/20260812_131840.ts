import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pd_product_purchase_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pd_v_product_purchase_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_drop_sub_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_drop_nav_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_drop_btns_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_drop_btns_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_drop_btns_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_header_navbar_drop_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."enum_header_navbar_type" ADD VALUE 'navbar_drop';
  CREATE TABLE "pd_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#fce4ec',
  	"text_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "pd_num" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"icon_background_color" varchar DEFAULT '#f8bbd0',
  	"text_color" varchar,
  	"bold_text_color" varchar
  );
  
  CREATE TABLE "pd_ci" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"product" jsonb,
  	"price" jsonb,
  	"tag" jsonb,
  	"tag_background_color" varchar DEFAULT '#c8e6c9',
  	"tag_text_color" varchar DEFAULT '#2e7d32',
  	"price_text_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "pd_cols" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"title" jsonb,
  	"total_label" jsonb,
  	"total_price" jsonb,
  	"total_price_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "pd_pfi" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "pd_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#ffffff',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"highlight" jsonb,
  	"content" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar
  );
  
  CREATE TABLE "pd" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"main_style_text_color" varchar,
  	"main_style_bold_text_color" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"product_background_color" varchar DEFAULT '#ffffff',
  	"product_purchase_previous_price" jsonb,
  	"product_purchase_current_price" jsonb,
  	"product_purchase_description" jsonb,
  	"product_purchase_background_color" varchar DEFAULT '#faf7f8',
  	"product_purchase_button_label" varchar DEFAULT 'Empezar ahora',
  	"product_purchase_button_icon_s_v_g" varchar,
  	"product_purchase_button_background_color" varchar DEFAULT '#a1004a',
  	"product_purchase_button_text_color" varchar DEFAULT '#ffffff',
  	"product_purchase_button_link_type" "enum_pd_product_purchase_button_link_type" DEFAULT 'reference',
  	"product_purchase_button_link_new_tab" boolean,
  	"product_purchase_button_link_url" varchar,
  	"fine_print" jsonb,
  	"fine_print_color" varchar DEFAULT '#101835',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pd_tags_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#fce4ec',
  	"text_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_num_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"icon_background_color" varchar DEFAULT '#f8bbd0',
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_ci_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"product" jsonb,
  	"price" jsonb,
  	"tag" jsonb,
  	"tag_background_color" varchar DEFAULT '#c8e6c9',
  	"tag_text_color" varchar DEFAULT '#2e7d32',
  	"price_text_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_cols_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"title" jsonb,
  	"total_label" jsonb,
  	"total_price" jsonb,
  	"total_price_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_pfi_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_stats_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#ffffff',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"highlight" jsonb,
  	"content" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"main_style_text_color" varchar,
  	"main_style_bold_text_color" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"product_background_color" varchar DEFAULT '#ffffff',
  	"product_purchase_previous_price" jsonb,
  	"product_purchase_current_price" jsonb,
  	"product_purchase_description" jsonb,
  	"product_purchase_background_color" varchar DEFAULT '#faf7f8',
  	"product_purchase_button_label" varchar DEFAULT 'Empezar ahora',
  	"product_purchase_button_icon_s_v_g" varchar,
  	"product_purchase_button_background_color" varchar DEFAULT '#a1004a',
  	"product_purchase_button_text_color" varchar DEFAULT '#ffffff',
  	"product_purchase_button_link_type" "enum__pd_v_product_purchase_button_link_type" DEFAULT 'reference',
  	"product_purchase_button_link_new_tab" boolean,
  	"product_purchase_button_link_url" varchar,
  	"fine_print" jsonb,
  	"fine_print_color" varchar DEFAULT '#101835',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "drop_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_drop_sub_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "drop_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_drop_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "drop_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_drop_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"size" "enum_drop_btns_size" DEFAULT 'lg',
  	"variant" "enum_drop_btns_variant" DEFAULT 'default',
  	"icon_s_v_g" varchar
  );
  
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_logo_media_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_logo_alt" varchar DEFAULT 'Logo image';
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_mobile_menu_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_bold_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_button_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_button_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_use_font_group" boolean DEFAULT false;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_font_group_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_font_family" "enum_header_navbar_drop_config_font_family" DEFAULT 'default';
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_custom_font_file_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_drop_config_custom_font_name" varchar;
  ALTER TABLE "pd_tags" ADD CONSTRAINT "pd_tags_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_tags" ADD CONSTRAINT "pd_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_num" ADD CONSTRAINT "pd_num_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_num" ADD CONSTRAINT "pd_num_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_ci" ADD CONSTRAINT "pd_ci_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd_cols"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_cols" ADD CONSTRAINT "pd_cols_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_cols" ADD CONSTRAINT "pd_cols_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_pfi" ADD CONSTRAINT "pd_pfi_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_pfi" ADD CONSTRAINT "pd_pfi_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_stats" ADD CONSTRAINT "pd_stats_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_stats" ADD CONSTRAINT "pd_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_tags_v" ADD CONSTRAINT "_pd_tags_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_tags_v" ADD CONSTRAINT "_pd_tags_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_num_v" ADD CONSTRAINT "_pd_num_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_num_v" ADD CONSTRAINT "_pd_num_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_ci_v" ADD CONSTRAINT "_pd_ci_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_cols_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_cols_v" ADD CONSTRAINT "_pd_cols_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_cols_v" ADD CONSTRAINT "_pd_cols_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_pfi_v" ADD CONSTRAINT "_pd_pfi_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_pfi_v" ADD CONSTRAINT "_pd_pfi_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_stats_v" ADD CONSTRAINT "_pd_stats_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_stats_v" ADD CONSTRAINT "_pd_stats_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "drop_sub" ADD CONSTRAINT "drop_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."drop_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "drop_nav" ADD CONSTRAINT "drop_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "drop_btns" ADD CONSTRAINT "drop_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pd_tags_order_idx" ON "pd_tags" USING btree ("_order");
  CREATE INDEX "pd_tags_parent_id_idx" ON "pd_tags" USING btree ("_parent_id");
  CREATE INDEX "pd_tags_icon_icon_media_image_idx" ON "pd_tags" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_num_order_idx" ON "pd_num" USING btree ("_order");
  CREATE INDEX "pd_num_parent_id_idx" ON "pd_num" USING btree ("_parent_id");
  CREATE INDEX "pd_num_icon_icon_media_image_idx" ON "pd_num" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_ci_order_idx" ON "pd_ci" USING btree ("_order");
  CREATE INDEX "pd_ci_parent_id_idx" ON "pd_ci" USING btree ("_parent_id");
  CREATE INDEX "pd_cols_order_idx" ON "pd_cols" USING btree ("_order");
  CREATE INDEX "pd_cols_parent_id_idx" ON "pd_cols" USING btree ("_parent_id");
  CREATE INDEX "pd_cols_icon_icon_media_image_idx" ON "pd_cols" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_pfi_order_idx" ON "pd_pfi" USING btree ("_order");
  CREATE INDEX "pd_pfi_parent_id_idx" ON "pd_pfi" USING btree ("_parent_id");
  CREATE INDEX "pd_pfi_icon_icon_media_image_idx" ON "pd_pfi" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_stats_order_idx" ON "pd_stats" USING btree ("_order");
  CREATE INDEX "pd_stats_parent_id_idx" ON "pd_stats" USING btree ("_parent_id");
  CREATE INDEX "pd_stats_icon_icon_media_image_idx" ON "pd_stats" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_order_idx" ON "pd" USING btree ("_order");
  CREATE INDEX "pd_parent_id_idx" ON "pd" USING btree ("_parent_id");
  CREATE INDEX "pd_path_idx" ON "pd" USING btree ("_path");
  CREATE INDEX "pd_background_image_idx" ON "pd" USING btree ("background_image_id");
  CREATE INDEX "_pd_tags_v_order_idx" ON "_pd_tags_v" USING btree ("_order");
  CREATE INDEX "_pd_tags_v_parent_id_idx" ON "_pd_tags_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_tags_v_icon_icon_media_image_idx" ON "_pd_tags_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_num_v_order_idx" ON "_pd_num_v" USING btree ("_order");
  CREATE INDEX "_pd_num_v_parent_id_idx" ON "_pd_num_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_num_v_icon_icon_media_image_idx" ON "_pd_num_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_ci_v_order_idx" ON "_pd_ci_v" USING btree ("_order");
  CREATE INDEX "_pd_ci_v_parent_id_idx" ON "_pd_ci_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_cols_v_order_idx" ON "_pd_cols_v" USING btree ("_order");
  CREATE INDEX "_pd_cols_v_parent_id_idx" ON "_pd_cols_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_cols_v_icon_icon_media_image_idx" ON "_pd_cols_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_pfi_v_order_idx" ON "_pd_pfi_v" USING btree ("_order");
  CREATE INDEX "_pd_pfi_v_parent_id_idx" ON "_pd_pfi_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_pfi_v_icon_icon_media_image_idx" ON "_pd_pfi_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_stats_v_order_idx" ON "_pd_stats_v" USING btree ("_order");
  CREATE INDEX "_pd_stats_v_parent_id_idx" ON "_pd_stats_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_stats_v_icon_icon_media_image_idx" ON "_pd_stats_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_v_order_idx" ON "_pd_v" USING btree ("_order");
  CREATE INDEX "_pd_v_parent_id_idx" ON "_pd_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_v_path_idx" ON "_pd_v" USING btree ("_path");
  CREATE INDEX "_pd_v_background_image_idx" ON "_pd_v" USING btree ("background_image_id");
  CREATE INDEX "drop_sub_order_idx" ON "drop_sub" USING btree ("_order");
  CREATE INDEX "drop_sub_parent_id_idx" ON "drop_sub" USING btree ("_parent_id");
  CREATE INDEX "drop_nav_order_idx" ON "drop_nav" USING btree ("_order");
  CREATE INDEX "drop_nav_parent_id_idx" ON "drop_nav" USING btree ("_parent_id");
  CREATE INDEX "drop_btns_order_idx" ON "drop_btns" USING btree ("_order");
  CREATE INDEX "drop_btns_parent_id_idx" ON "drop_btns" USING btree ("_parent_id");
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_drop_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar_drop_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_drop_config_font_group_id_font_groups_id_fk" FOREIGN KEY ("navbar_drop_config_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_drop_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("navbar_drop_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar_drop_config_logo_navbar_drop_config_logo_m_idx" ON "header" USING btree ("navbar_drop_config_logo_media_id");
  CREATE INDEX "header_navbar_drop_config_navbar_drop_config_font_group_idx" ON "header" USING btree ("navbar_drop_config_font_group_id");
  CREATE INDEX "header_navbar_drop_config_navbar_drop_config_custom_font_idx" ON "header" USING btree ("navbar_drop_config_custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pd_tags" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pd_num" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pd_ci" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pd_cols" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pd_pfi" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pd_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pd" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_tags_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_num_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_ci_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_cols_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_pfi_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_stats_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pd_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "drop_sub" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "drop_nav" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "drop_btns" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pd_tags" CASCADE;
  DROP TABLE "pd_num" CASCADE;
  DROP TABLE "pd_ci" CASCADE;
  DROP TABLE "pd_cols" CASCADE;
  DROP TABLE "pd_pfi" CASCADE;
  DROP TABLE "pd_stats" CASCADE;
  DROP TABLE "pd" CASCADE;
  DROP TABLE "_pd_tags_v" CASCADE;
  DROP TABLE "_pd_num_v" CASCADE;
  DROP TABLE "_pd_ci_v" CASCADE;
  DROP TABLE "_pd_cols_v" CASCADE;
  DROP TABLE "_pd_pfi_v" CASCADE;
  DROP TABLE "_pd_stats_v" CASCADE;
  DROP TABLE "_pd_v" CASCADE;
  DROP TABLE "drop_sub" CASCADE;
  DROP TABLE "drop_nav" CASCADE;
  DROP TABLE "drop_btns" CASCADE;
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_drop_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_drop_config_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_drop_config_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE text;
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_header_navbar_type";
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar5', 'navbar11', 'navbarTemplate');
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::"public"."enum_header_navbar_type";
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE "public"."enum_header_navbar_type" USING "navbar_type"::"public"."enum_header_navbar_type";
  DROP INDEX "header_navbar_drop_config_logo_navbar_drop_config_logo_m_idx";
  DROP INDEX "header_navbar_drop_config_navbar_drop_config_font_group_idx";
  DROP INDEX "header_navbar_drop_config_navbar_drop_config_custom_font_idx";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_logo_use_media";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_logo_media_id";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_logo_src";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_logo_alt";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_mobile_menu_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_bold_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_button_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_button_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_use_font_group";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_font_group_id";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_font_family";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_use_custom_font";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_custom_font_file_id";
  ALTER TABLE "header" DROP COLUMN "navbar_drop_config_custom_font_name";
  DROP TYPE "public"."enum_pd_product_purchase_button_link_type";
  DROP TYPE "public"."enum__pd_v_product_purchase_button_link_type";
  DROP TYPE "public"."enum_drop_sub_link_type";
  DROP TYPE "public"."enum_drop_nav_link_type";
  DROP TYPE "public"."enum_drop_btns_link_type";
  DROP TYPE "public"."enum_drop_btns_size";
  DROP TYPE "public"."enum_drop_btns_variant";
  DROP TYPE "public"."enum_header_navbar_drop_config_font_family";`)
}
