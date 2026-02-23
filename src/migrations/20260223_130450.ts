import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_lss_sections_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lss_sections_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_lss_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lss_btns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout_senda_sections_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lss_sections_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lss_sections_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__lss_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lss_btns_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_senda_sections_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."enum_senda_sub_link_type" ADD VALUE 'anchor';
  ALTER TYPE "public"."enum_senda_nav_link_type" ADD VALUE 'anchor';
  ALTER TYPE "public"."enum_senda_btns_link_type" ADD VALUE 'anchor';
  CREATE TABLE "lss_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Section icon',
  	"rich_text" jsonb,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_lss_sections_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_lss_sections_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "lss_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_lss_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_lss_btns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout_senda_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_layout_senda_sections_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_lss_sections_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Section icon',
  	"rich_text" jsonb,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__lss_sections_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__lss_sections_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lss_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__lss_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__lss_btns_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_senda_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_layout_senda_sections_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "anchor_id" varchar;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "anchor_id" varchar;
  ALTER TABLE "senda_sub" ADD COLUMN "link_anchor_id" varchar;
  ALTER TABLE "senda_nav" ADD COLUMN "link_anchor_id" varchar;
  ALTER TABLE "senda_btns" ADD COLUMN "link_anchor_id" varchar;
  ALTER TABLE "lss_sections" ADD CONSTRAINT "lss_sections_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lss_sections" ADD CONSTRAINT "lss_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lss_btns" ADD CONSTRAINT "lss_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lss_sections_v" ADD CONSTRAINT "_lss_sections_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lss_sections_v" ADD CONSTRAINT "_lss_sections_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lss_btns_v" ADD CONSTRAINT "_lss_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "lss_sections_order_idx" ON "lss_sections" USING btree ("_order");
  CREATE INDEX "lss_sections_parent_id_idx" ON "lss_sections" USING btree ("_parent_id");
  CREATE INDEX "lss_sections_icon_icon_media_image_idx" ON "lss_sections" USING btree ("icon_media_image_id");
  CREATE INDEX "lss_btns_order_idx" ON "lss_btns" USING btree ("_order");
  CREATE INDEX "lss_btns_parent_id_idx" ON "lss_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_order_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_senda_sections_parent_id_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_path_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_senda_sections_custom_font_file_idx" ON "pages_blocks_layout_senda_sections" USING btree ("custom_font_file_id");
  CREATE INDEX "_lss_sections_v_order_idx" ON "_lss_sections_v" USING btree ("_order");
  CREATE INDEX "_lss_sections_v_parent_id_idx" ON "_lss_sections_v" USING btree ("_parent_id");
  CREATE INDEX "_lss_sections_v_icon_icon_media_image_idx" ON "_lss_sections_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_lss_btns_v_order_idx" ON "_lss_btns_v" USING btree ("_order");
  CREATE INDEX "_lss_btns_v_parent_id_idx" ON "_lss_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_order_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_parent_id_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_path_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_custom_font_file_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "lss_sections" CASCADE;
  DROP TABLE "lss_btns" CASCADE;
  DROP TABLE "pages_blocks_layout_senda_sections" CASCADE;
  DROP TABLE "_lss_sections_v" CASCADE;
  DROP TABLE "_lss_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_senda_sections" CASCADE;
  ALTER TABLE "senda_sub" ALTER COLUMN "link_type" SET DATA TYPE text;
  ALTER TABLE "senda_sub" ALTER COLUMN "link_type" SET DEFAULT 'reference'::text;
  DROP TYPE "public"."enum_senda_sub_link_type";
  CREATE TYPE "public"."enum_senda_sub_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "senda_sub" ALTER COLUMN "link_type" SET DEFAULT 'reference'::"public"."enum_senda_sub_link_type";
  ALTER TABLE "senda_sub" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_senda_sub_link_type" USING "link_type"::"public"."enum_senda_sub_link_type";
  ALTER TABLE "senda_nav" ALTER COLUMN "link_type" SET DATA TYPE text;
  ALTER TABLE "senda_nav" ALTER COLUMN "link_type" SET DEFAULT 'reference'::text;
  DROP TYPE "public"."enum_senda_nav_link_type";
  CREATE TYPE "public"."enum_senda_nav_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "senda_nav" ALTER COLUMN "link_type" SET DEFAULT 'reference'::"public"."enum_senda_nav_link_type";
  ALTER TABLE "senda_nav" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_senda_nav_link_type" USING "link_type"::"public"."enum_senda_nav_link_type";
  ALTER TABLE "senda_btns" ALTER COLUMN "link_type" SET DATA TYPE text;
  ALTER TABLE "senda_btns" ALTER COLUMN "link_type" SET DEFAULT 'reference'::text;
  DROP TYPE "public"."enum_senda_btns_link_type";
  CREATE TYPE "public"."enum_senda_btns_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "senda_btns" ALTER COLUMN "link_type" SET DEFAULT 'reference'::"public"."enum_senda_btns_link_type";
  ALTER TABLE "senda_btns" ALTER COLUMN "link_type" SET DATA TYPE "public"."enum_senda_btns_link_type" USING "link_type"::"public"."enum_senda_btns_link_type";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "anchor_id";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "anchor_id";
  ALTER TABLE "senda_sub" DROP COLUMN "link_anchor_id";
  ALTER TABLE "senda_nav" DROP COLUMN "link_anchor_id";
  ALTER TABLE "senda_btns" DROP COLUMN "link_anchor_id";
  DROP TYPE "public"."enum_lss_sections_link_type";
  DROP TYPE "public"."enum_lss_sections_link_appearance";
  DROP TYPE "public"."enum_lss_btns_link_type";
  DROP TYPE "public"."enum_lss_btns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout_senda_sections_font_family";
  DROP TYPE "public"."enum__lss_sections_v_link_type";
  DROP TYPE "public"."enum__lss_sections_v_link_appearance";
  DROP TYPE "public"."enum__lss_btns_v_link_type";
  DROP TYPE "public"."enum__lss_btns_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout_senda_sections_font_family";`)
}
