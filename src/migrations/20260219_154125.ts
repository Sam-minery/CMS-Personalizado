import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_hs_left_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."app" AS ENUM('default', 'secondary');
  CREATE TYPE "public"."sz" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_pages_hero_hero_senda_image_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_hero_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__hs_left_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_hero_senda_image_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_hero_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'heroSenda';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'heroSenda';
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
  
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_use_media" boolean DEFAULT true;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_media_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_url" varchar;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_alt" varchar;
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
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_font_family" "enum_pages_hero_hero_senda_font_family" DEFAULT 'default';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_font_file_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_custom_font_name" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_media_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_url" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_alt" varchar;
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
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_font_family" "enum__pages_v_version_hero_hero_senda_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_font_file_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_custom_font_name" varchar;
  ALTER TABLE "hs_left_btns" ADD CONSTRAINT "hs_left_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hs_left_btns_v" ADD CONSTRAINT "_hs_left_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "hs_left_btns_order_idx" ON "hs_left_btns" USING btree ("_order");
  CREATE INDEX "hs_left_btns_parent_id_idx" ON "hs_left_btns" USING btree ("_parent_id");
  CREATE INDEX "_hs_left_btns_v_order_idx" ON "_hs_left_btns_v" USING btree ("_order");
  CREATE INDEX "_hs_left_btns_v_parent_id_idx" ON "_hs_left_btns_v" USING btree ("_parent_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_image_media_id_media_id_fk" FOREIGN KEY ("hero_hero_senda_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_media_id_fk" FOREIGN KEY ("hero_hero_senda_custom_font_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_image_media_id_media_id_fk" FOREIGN KEY ("version_hero_hero_senda_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_media_id_fk" FOREIGN KEY ("version_hero_hero_senda_custom_font_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_senda_image_hero_hero_senda_image_media_idx" ON "pages" USING btree ("hero_hero_senda_image_media_id");
  CREATE INDEX "pages_hero_hero_hero_senda_custom_font_file_idx" ON "pages" USING btree ("hero_hero_senda_custom_font_file_id");
  CREATE INDEX "_pages_v_version_hero_hero_senda_image_version_hero_hero_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_image_media_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_hero_senda_custom_fon_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hs_left_btns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_hs_left_btns_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "hs_left_btns" CASCADE;
  DROP TABLE "_hs_left_btns_v" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_image_media_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_image_media_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_media_id_fk";
  
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
  DROP INDEX "pages_hero_hero_senda_image_hero_hero_senda_image_media_idx";
  DROP INDEX "pages_hero_hero_hero_senda_custom_font_file_idx";
  DROP INDEX "_pages_v_version_hero_hero_senda_image_version_hero_hero_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_hero_senda_custom_fon_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_media_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_alt";
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
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_font_family";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_use_custom_font";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_font_file_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_custom_font_name";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_media_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_alt";
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
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_font_family";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_use_custom_font";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_font_file_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_custom_font_name";
  DROP TYPE "public"."enum_hs_left_btns_link_type";
  DROP TYPE "public"."app";
  DROP TYPE "public"."sz";
  DROP TYPE "public"."enum_pages_hero_hero_senda_image_button_link_type";
  DROP TYPE "public"."enum_pages_hero_hero_senda_font_family";
  DROP TYPE "public"."enum__hs_left_btns_v_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_hero_senda_image_button_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_hero_senda_font_family";`)
}
