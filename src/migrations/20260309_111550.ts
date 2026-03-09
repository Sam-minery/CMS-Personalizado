import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_app_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_app_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "pages_blocks_app_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum_pages_blocks_app_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_app_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_color" varchar,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_id" integer,
  	"image2_id" integer,
  	"content_below_images" jsonb,
  	"font_family" "enum_pages_blocks_app_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum__pages_v_blocks_app_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_color" varchar,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_id" integer,
  	"image2_id" integer,
  	"content_below_images" jsonb,
  	"font_family" "enum__pages_v_blocks_app_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_app_senda_buttons" ADD CONSTRAINT "pages_blocks_app_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_app_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_buttons" ADD CONSTRAINT "_pages_v_blocks_app_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_app_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_app_senda_buttons_order_idx" ON "pages_blocks_app_senda_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_buttons_parent_id_idx" ON "pages_blocks_app_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_order_idx" ON "pages_blocks_app_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_parent_id_idx" ON "pages_blocks_app_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_path_idx" ON "pages_blocks_app_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_app_senda_image1_idx" ON "pages_blocks_app_senda" USING btree ("image1_id");
  CREATE INDEX "pages_blocks_app_senda_image2_idx" ON "pages_blocks_app_senda" USING btree ("image2_id");
  CREATE INDEX "pages_blocks_app_senda_custom_font_file_idx" ON "pages_blocks_app_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_app_senda_buttons_order_idx" ON "_pages_v_blocks_app_senda_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_buttons_parent_id_idx" ON "_pages_v_blocks_app_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_order_idx" ON "_pages_v_blocks_app_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_parent_id_idx" ON "_pages_v_blocks_app_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_path_idx" ON "_pages_v_blocks_app_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_app_senda_image1_idx" ON "_pages_v_blocks_app_senda" USING btree ("image1_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image2_idx" ON "_pages_v_blocks_app_senda" USING btree ("image2_id");
  CREATE INDEX "_pages_v_blocks_app_senda_custom_font_file_idx" ON "_pages_v_blocks_app_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_app_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_app_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_app_senda_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_app_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_font_family";`)
}
