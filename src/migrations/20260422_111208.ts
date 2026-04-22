import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_app_senda_alter_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_app_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_alter_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_app_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "pages_blocks_app_senda_alter_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum_pages_blocks_app_senda_alter_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_app_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_use_media" boolean DEFAULT true,
  	"image1_media_image_id" integer,
  	"image1_src" varchar,
  	"image1_alt" varchar,
  	"image_mobile1_use_media" boolean DEFAULT true,
  	"image_mobile1_media_image_id" integer,
  	"image_mobile1_src" varchar,
  	"image_mobile1_alt" varchar,
  	"image_mobile2_use_media" boolean DEFAULT true,
  	"image_mobile2_media_image_id" integer,
  	"image_mobile2_src" varchar,
  	"image_mobile2_alt" varchar,
  	"image_mobile3_use_media" boolean DEFAULT true,
  	"image_mobile3_media_image_id" integer,
  	"image_mobile3_src" varchar,
  	"image_mobile3_alt" varchar,
  	"content_desktop" jsonb,
  	"content_mobile1" jsonb,
  	"content_mobile2" jsonb,
  	"content_mobile3" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_app_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda_alter_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'App Store',
  	"link_type" "enum__pages_v_blocks_app_senda_alter_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_app_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"card_background_color" varchar,
  	"content_color" varchar,
  	"bold_text_color" varchar,
  	"content_below_images_color" varchar,
  	"buttons_background_color" varchar,
  	"buttons_text_color" varchar,
  	"content" jsonb,
  	"image1_use_media" boolean DEFAULT true,
  	"image1_media_image_id" integer,
  	"image1_src" varchar,
  	"image1_alt" varchar,
  	"image_mobile1_use_media" boolean DEFAULT true,
  	"image_mobile1_media_image_id" integer,
  	"image_mobile1_src" varchar,
  	"image_mobile1_alt" varchar,
  	"image_mobile2_use_media" boolean DEFAULT true,
  	"image_mobile2_media_image_id" integer,
  	"image_mobile2_src" varchar,
  	"image_mobile2_alt" varchar,
  	"image_mobile3_use_media" boolean DEFAULT true,
  	"image_mobile3_media_image_id" integer,
  	"image_mobile3_src" varchar,
  	"image_mobile3_alt" varchar,
  	"content_desktop" jsonb,
  	"content_mobile1" jsonb,
  	"content_mobile2" jsonb,
  	"content_mobile3" jsonb,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_app_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_app_senda_alter_buttons" ADD CONSTRAINT "pages_blocks_app_senda_alter_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_app_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image_mobile1_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image_mobile2_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_image_mobile3_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile3_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda_alter" ADD CONSTRAINT "pages_blocks_app_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter_buttons" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_app_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image_mobile1_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image_mobile2_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_image_mobile3_media_image_id_media_id_fk" FOREIGN KEY ("image_mobile3_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda_alter" ADD CONSTRAINT "_pages_v_blocks_app_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_app_senda_alter_buttons_order_idx" ON "pages_blocks_app_senda_alter_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_alter_buttons_parent_id_idx" ON "pages_blocks_app_senda_alter_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_alter_order_idx" ON "pages_blocks_app_senda_alter" USING btree ("_order");
  CREATE INDEX "pages_blocks_app_senda_alter_parent_id_idx" ON "pages_blocks_app_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_app_senda_alter_path_idx" ON "pages_blocks_app_senda_alter" USING btree ("_path");
  CREATE INDEX "pages_blocks_app_senda_alter_background_image_background_idx" ON "pages_blocks_app_senda_alter" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image1_image1_media_image_idx" ON "pages_blocks_app_senda_alter" USING btree ("image1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image_mobile1_image_mobile1_idx" ON "pages_blocks_app_senda_alter" USING btree ("image_mobile1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image_mobile2_image_mobile2_idx" ON "pages_blocks_app_senda_alter" USING btree ("image_mobile2_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_image_mobile3_image_mobile3_idx" ON "pages_blocks_app_senda_alter" USING btree ("image_mobile3_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_alter_font_group_idx" ON "pages_blocks_app_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_app_senda_alter_custom_font_file_idx" ON "pages_blocks_app_senda_alter" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_buttons_order_idx" ON "_pages_v_blocks_app_senda_alter_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_buttons_parent_id_idx" ON "_pages_v_blocks_app_senda_alter_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_order_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_parent_id_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_path_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_background_image_backgro_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image1_image1_media_imag_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image_mobile1_image_mobi_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image_mobile1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image_mobile2_image_mobi_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image_mobile2_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_image_mobile3_image_mobi_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("image_mobile3_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_font_group_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_app_senda_alter_custom_font_file_idx" ON "_pages_v_blocks_app_senda_alter" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_app_senda_alter_buttons" CASCADE;
  DROP TABLE "pages_blocks_app_senda_alter" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda_alter_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_app_senda_alter" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_app_senda_alter_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_app_senda_alter_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_alter_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_app_senda_alter_font_family";`)
}
