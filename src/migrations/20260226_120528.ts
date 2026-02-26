import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_cta2_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta2_senda_buttons_appearance" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum_cta2_senda_buttons_size" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum_pages_blocks_cta2_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_appearance" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_size" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum__pages_v_blocks_cta2_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "cta2_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cta2_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "enum_cta2_senda_buttons_appearance" DEFAULT 'default',
  	"size" "enum_cta2_senda_buttons_size" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_cta2_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_id" integer,
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_cta2_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta2_senda_buttons_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cta2_senda_buttons_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "enum__cta2_senda_buttons_v_appearance" DEFAULT 'default',
  	"size" "enum__cta2_senda_buttons_v_size" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta2_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_id" integer,
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_cta2_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "cta2_senda_buttons" ADD CONSTRAINT "cta2_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta2_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta2_senda_buttons_v" ADD CONSTRAINT "_cta2_senda_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta2_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cta2_senda_buttons_order_idx" ON "cta2_senda_buttons" USING btree ("_order");
  CREATE INDEX "cta2_senda_buttons_parent_id_idx" ON "cta2_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta2_senda_order_idx" ON "pages_blocks_cta2_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta2_senda_parent_id_idx" ON "pages_blocks_cta2_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta2_senda_path_idx" ON "pages_blocks_cta2_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta2_senda_image_idx" ON "pages_blocks_cta2_senda" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cta2_senda_custom_font_file_idx" ON "pages_blocks_cta2_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_cta2_senda_buttons_v_order_idx" ON "_cta2_senda_buttons_v" USING btree ("_order");
  CREATE INDEX "_cta2_senda_buttons_v_parent_id_idx" ON "_cta2_senda_buttons_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_order_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta2_senda_parent_id_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_path_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta2_senda_image_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_custom_font_file_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "cta2_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta2_senda" CASCADE;
  DROP TABLE "_cta2_senda_buttons_v" CASCADE;
  DROP TABLE "_pages_v_blocks_cta2_senda" CASCADE;
  DROP TYPE "public"."enum_cta2_senda_buttons_link_type";
  DROP TYPE "public"."enum_cta2_senda_buttons_appearance";
  DROP TYPE "public"."enum_cta2_senda_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_cta2_senda_font_family";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_link_type";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_appearance";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta2_senda_font_family";`)
}
