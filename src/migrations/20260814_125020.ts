import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_fqd_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__fqd_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_ftd_nav_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_ftd_soc_icon" AS ENUM('none', 'instagram', 'facebook', 'youtube');
  CREATE TYPE "public"."enum_ftd_soc_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_ftd_pol_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_drop_config_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_drop_config_secondary_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
  ALTER TYPE "public"."enum_footer_footer_type" ADD VALUE 'footer_drop';
  CREATE TABLE "fqd_q" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"accent_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "fqd" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#101835',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"questions_section_background_color" varchar DEFAULT '#ffffff',
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_fqd_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_fqd_q_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"accent_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fqd_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#101835',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"questions_section_background_color" varchar DEFAULT '#ffffff',
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__fqd_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ftd_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'INICIO',
  	"link_type" "enum_ftd_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec'
  );
  
  CREATE TABLE "ftd_soc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_ftd_soc_icon" DEFAULT 'none',
  	"title" varchar,
  	"link_type" "enum_ftd_soc_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "ftd_pol" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"link_type" "enum_ftd_pol_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_media_image_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_icon_s_v_g" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_alt" varchar DEFAULT 'Logo';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_link_type" "enum_footer_footer_drop_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_logo_link_anchor_id" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_enabled" boolean DEFAULT false;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_media_image_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_icon_s_v_g" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_alt" varchar DEFAULT 'Logo secundario';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_link_type" "enum_footer_footer_drop_config_secondary_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_secondary_logo_link_anchor_id" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_footer_text" jsonb;
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_background_color" varchar DEFAULT '#ffffff';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_text_color" varchar DEFAULT '#101835';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_text_color_secondary" varchar DEFAULT '#a1004a';
  ALTER TABLE "footer" ADD COLUMN "footer_drop_config_hide_mobile_icons" boolean DEFAULT false;
  ALTER TABLE "fqd_q" ADD CONSTRAINT "fqd_q_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fqd_q" ADD CONSTRAINT "fqd_q_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fqd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fqd" ADD CONSTRAINT "fqd_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fqd" ADD CONSTRAINT "fqd_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fqd" ADD CONSTRAINT "fqd_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fqd_q_v" ADD CONSTRAINT "_fqd_q_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fqd_q_v" ADD CONSTRAINT "_fqd_q_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fqd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fqd_v" ADD CONSTRAINT "_fqd_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fqd_v" ADD CONSTRAINT "_fqd_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fqd_v" ADD CONSTRAINT "_fqd_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ftd_nav" ADD CONSTRAINT "ftd_nav_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ftd_nav" ADD CONSTRAINT "ftd_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ftd_soc" ADD CONSTRAINT "ftd_soc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ftd_pol" ADD CONSTRAINT "ftd_pol_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "fqd_q_order_idx" ON "fqd_q" USING btree ("_order");
  CREATE INDEX "fqd_q_parent_id_idx" ON "fqd_q" USING btree ("_parent_id");
  CREATE INDEX "fqd_q_icon_icon_media_image_idx" ON "fqd_q" USING btree ("icon_media_image_id");
  CREATE INDEX "fqd_order_idx" ON "fqd" USING btree ("_order");
  CREATE INDEX "fqd_parent_id_idx" ON "fqd" USING btree ("_parent_id");
  CREATE INDEX "fqd_path_idx" ON "fqd" USING btree ("_path");
  CREATE INDEX "fqd_font_group_idx" ON "fqd" USING btree ("font_group_id");
  CREATE INDEX "fqd_custom_font_file_idx" ON "fqd" USING btree ("custom_font_file_id");
  CREATE INDEX "_fqd_q_v_order_idx" ON "_fqd_q_v" USING btree ("_order");
  CREATE INDEX "_fqd_q_v_parent_id_idx" ON "_fqd_q_v" USING btree ("_parent_id");
  CREATE INDEX "_fqd_q_v_icon_icon_media_image_idx" ON "_fqd_q_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_fqd_v_order_idx" ON "_fqd_v" USING btree ("_order");
  CREATE INDEX "_fqd_v_parent_id_idx" ON "_fqd_v" USING btree ("_parent_id");
  CREATE INDEX "_fqd_v_path_idx" ON "_fqd_v" USING btree ("_path");
  CREATE INDEX "_fqd_v_font_group_idx" ON "_fqd_v" USING btree ("font_group_id");
  CREATE INDEX "_fqd_v_custom_font_file_idx" ON "_fqd_v" USING btree ("custom_font_file_id");
  CREATE INDEX "ftd_nav_order_idx" ON "ftd_nav" USING btree ("_order");
  CREATE INDEX "ftd_nav_parent_id_idx" ON "ftd_nav" USING btree ("_parent_id");
  CREATE INDEX "ftd_nav_icon_icon_media_image_idx" ON "ftd_nav" USING btree ("icon_media_image_id");
  CREATE INDEX "ftd_soc_order_idx" ON "ftd_soc" USING btree ("_order");
  CREATE INDEX "ftd_soc_parent_id_idx" ON "ftd_soc" USING btree ("_parent_id");
  CREATE INDEX "ftd_pol_order_idx" ON "ftd_pol" USING btree ("_order");
  CREATE INDEX "ftd_pol_parent_id_idx" ON "ftd_pol" USING btree ("_parent_id");
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_drop_config_logo_media_image_id_media_id_fk" FOREIGN KEY ("footer_drop_config_logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_drop_config_secondary_logo_media_image_id_media_id_fk" FOREIGN KEY ("footer_drop_config_secondary_logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "footer_footer_drop_config_logo_footer_drop_config_logo_m_idx" ON "footer" USING btree ("footer_drop_config_logo_media_image_id");
  CREATE INDEX "footer_footer_drop_config_secondary_logo_footer_drop_con_idx" ON "footer" USING btree ("footer_drop_config_secondary_logo_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "fqd_q" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "fqd" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_fqd_q_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_fqd_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ftd_nav" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ftd_soc" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ftd_pol" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "fqd_q" CASCADE;
  DROP TABLE "fqd" CASCADE;
  DROP TABLE "_fqd_q_v" CASCADE;
  DROP TABLE "_fqd_v" CASCADE;
  DROP TABLE "ftd_nav" CASCADE;
  DROP TABLE "ftd_soc" CASCADE;
  DROP TABLE "ftd_pol" CASCADE;
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_drop_config_logo_media_image_id_media_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_drop_config_secondary_logo_media_image_id_media_id_fk";
  
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE text;
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_footer_footer_type";
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer1', 'footer4', 'footer5', 'footerTemplate');
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::"public"."enum_footer_footer_type";
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE "public"."enum_footer_footer_type" USING "footer_type"::"public"."enum_footer_footer_type";
  DROP INDEX "footer_footer_drop_config_logo_footer_drop_config_logo_m_idx";
  DROP INDEX "footer_footer_drop_config_secondary_logo_footer_drop_con_idx";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_use_media";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_media_image_id";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_icon_s_v_g";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_alt";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_logo_link_anchor_id";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_enabled";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_use_media";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_media_image_id";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_icon_s_v_g";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_alt";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_secondary_logo_link_anchor_id";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_footer_text";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_background_color";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_text_color";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_text_color_secondary";
  ALTER TABLE "footer" DROP COLUMN "footer_drop_config_hide_mobile_icons";
  DROP TYPE "public"."enum_fqd_font_family";
  DROP TYPE "public"."enum__fqd_v_font_family";
  DROP TYPE "public"."enum_ftd_nav_link_type";
  DROP TYPE "public"."enum_ftd_soc_icon";
  DROP TYPE "public"."enum_ftd_soc_link_type";
  DROP TYPE "public"."enum_ftd_pol_link_type";
  DROP TYPE "public"."enum_footer_footer_drop_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_drop_config_secondary_logo_link_type";`)
}
