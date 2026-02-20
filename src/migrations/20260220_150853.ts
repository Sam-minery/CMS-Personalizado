import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_ls_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__ls_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."app" ADD VALUE 'outline';
  ALTER TYPE "public"."app" ADD VALUE 'link';
  ALTER TYPE "public"."sz" ADD VALUE 'clear';
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
  	"rich_text" jsonb,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Layout SENDA image',
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_layout_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
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
  	"rich_text" jsonb,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Layout SENDA image',
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_layout_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_media_id_fk";
  
  ALTER TABLE "ls_sub" ADD CONSTRAINT "ls_sub_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ls_sub" ADD CONSTRAINT "ls_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ls_btns" ADD CONSTRAINT "ls_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ls_sub_v" ADD CONSTRAINT "_ls_sub_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ls_sub_v" ADD CONSTRAINT "_ls_sub_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ls_btns_v" ADD CONSTRAINT "_ls_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ls_sub_order_idx" ON "ls_sub" USING btree ("_order");
  CREATE INDEX "ls_sub_parent_id_idx" ON "ls_sub" USING btree ("_parent_id");
  CREATE INDEX "ls_sub_icon_icon_media_image_idx" ON "ls_sub" USING btree ("icon_media_image_id");
  CREATE INDEX "ls_btns_order_idx" ON "ls_btns" USING btree ("_order");
  CREATE INDEX "ls_btns_parent_id_idx" ON "ls_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_order_idx" ON "pages_blocks_layout_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_senda_parent_id_idx" ON "pages_blocks_layout_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_path_idx" ON "pages_blocks_layout_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_senda_image_image_media_image_idx" ON "pages_blocks_layout_senda" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_layout_senda_custom_font_file_idx" ON "pages_blocks_layout_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_ls_sub_v_order_idx" ON "_ls_sub_v" USING btree ("_order");
  CREATE INDEX "_ls_sub_v_parent_id_idx" ON "_ls_sub_v" USING btree ("_parent_id");
  CREATE INDEX "_ls_sub_v_icon_icon_media_image_idx" ON "_ls_sub_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_ls_btns_v_order_idx" ON "_ls_btns_v" USING btree ("_order");
  CREATE INDEX "_ls_btns_v_parent_id_idx" ON "_ls_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_order_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_senda_parent_id_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_path_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_senda_image_image_media_image_idx" ON "_pages_v_blocks_layout_senda" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_custom_font_file_idx" ON "_pages_v_blocks_layout_senda" USING btree ("custom_font_file_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("hero_hero_senda_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("version_hero_hero_senda_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "ls_sub" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "ls_btns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout_senda" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ls_sub_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_ls_btns_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout_senda" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "ls_sub" CASCADE;
  DROP TABLE "ls_btns" CASCADE;
  DROP TABLE "pages_blocks_layout_senda" CASCADE;
  DROP TABLE "_ls_sub_v" CASCADE;
  DROP TABLE "_ls_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_senda" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_fonts_id_fk";
  
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
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_media_id_fk" FOREIGN KEY ("hero_hero_senda_custom_font_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_media_id_fk" FOREIGN KEY ("version_hero_hero_senda_custom_font_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  DROP TYPE "public"."enum_ls_btns_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout_senda_font_family";
  DROP TYPE "public"."enum__ls_btns_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout_senda_font_family";`)
}
