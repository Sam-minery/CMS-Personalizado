import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_senda_sub_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_senda_nav_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_senda_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_senda_btns_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_senda_btns_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_header_navbar_senda_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."enum_header_navbar_type" ADD VALUE 'navbar_senda';
  CREATE TABLE "senda_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_senda_sub_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "senda_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_senda_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "senda_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_senda_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"size" "enum_senda_btns_size" DEFAULT 'lg',
  	"variant" "enum_senda_btns_variant" DEFAULT 'default',
  	"icon_s_v_g" varchar
  );
  
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_media_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_url" varchar DEFAULT '#';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_logo_alt" varchar DEFAULT 'Logo image';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_bold_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_button_background_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_button_text_color" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_font_family" "enum_header_navbar_senda_config_font_family" DEFAULT 'default';
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_custom_font_file_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_custom_font_name" varchar;
  ALTER TABLE "senda_sub" ADD CONSTRAINT "senda_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."senda_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_nav" ADD CONSTRAINT "senda_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_btns" ADD CONSTRAINT "senda_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "senda_sub_order_idx" ON "senda_sub" USING btree ("_order");
  CREATE INDEX "senda_sub_parent_id_idx" ON "senda_sub" USING btree ("_parent_id");
  CREATE INDEX "senda_nav_order_idx" ON "senda_nav" USING btree ("_order");
  CREATE INDEX "senda_nav_parent_id_idx" ON "senda_nav" USING btree ("_parent_id");
  CREATE INDEX "senda_btns_order_idx" ON "senda_btns" USING btree ("_order");
  CREATE INDEX "senda_btns_parent_id_idx" ON "senda_btns" USING btree ("_parent_id");
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar_senda_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("navbar_senda_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar_senda_config_logo_navbar_senda_config_logo_idx" ON "header" USING btree ("navbar_senda_config_logo_media_id");
  CREATE INDEX "header_navbar_senda_config_navbar_senda_config_custom_fo_idx" ON "header" USING btree ("navbar_senda_config_custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "senda_sub" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "senda_nav" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "senda_btns" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "senda_sub" CASCADE;
  DROP TABLE "senda_nav" CASCADE;
  DROP TABLE "senda_btns" CASCADE;
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_senda_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_senda_config_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE text;
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_header_navbar_type";
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar5', 'navbar11', 'navbarTemplate');
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::"public"."enum_header_navbar_type";
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE "public"."enum_header_navbar_type" USING "navbar_type"::"public"."enum_header_navbar_type";
  DROP INDEX "header_navbar_senda_config_logo_navbar_senda_config_logo_idx";
  DROP INDEX "header_navbar_senda_config_navbar_senda_config_custom_fo_idx";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_use_media";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_media_id";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_url";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_src";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_logo_alt";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_bold_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_button_background_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_button_text_color";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_font_family";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_use_custom_font";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_custom_font_file_id";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_custom_font_name";
  DROP TYPE "public"."enum_senda_sub_link_type";
  DROP TYPE "public"."enum_senda_nav_link_type";
  DROP TYPE "public"."enum_senda_btns_link_type";
  DROP TYPE "public"."enum_senda_btns_size";
  DROP TYPE "public"."enum_senda_btns_variant";
  DROP TYPE "public"."enum_header_navbar_senda_config_font_family";`)
}
