import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_lcta_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lcta_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_lcta_drop_steps_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lcta_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lcta_drop_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lcta_drop_v_steps_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "lcta_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag_label" varchar DEFAULT 'Paso 01',
  	"tag_background_color" varchar DEFAULT '#FCE4EC',
  	"tag_text_color" varchar DEFAULT '#C2005F',
  	"image_id" integer,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "lcta_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_lcta_btn_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "lcta_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_lcta_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"steps_style_text_color" varchar,
  	"steps_style_bold_text_color" varchar,
  	"steps_style_use_font_group" boolean DEFAULT false,
  	"steps_style_font_group_id" integer,
  	"steps_style_font_family" "enum_lcta_drop_steps_style_font_family" DEFAULT 'default',
  	"steps_style_use_custom_font" boolean DEFAULT false,
  	"steps_style_custom_font_file_id" integer,
  	"steps_style_custom_font_name" varchar,
  	"button_background_color" varchar DEFAULT '#C2005F',
  	"button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "_lcta_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag_label" varchar DEFAULT 'Paso 01',
  	"tag_background_color" varchar DEFAULT '#FCE4EC',
  	"tag_text_color" varchar DEFAULT '#C2005F',
  	"image_id" integer,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lcta_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__lcta_btn_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lcta_drop_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__lcta_drop_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"steps_style_text_color" varchar,
  	"steps_style_bold_text_color" varchar,
  	"steps_style_use_font_group" boolean DEFAULT false,
  	"steps_style_font_group_id" integer,
  	"steps_style_font_family" "enum__lcta_drop_v_steps_style_font_family" DEFAULT 'default',
  	"steps_style_use_custom_font" boolean DEFAULT false,
  	"steps_style_custom_font_file_id" integer,
  	"steps_style_custom_font_name" varchar,
  	"button_background_color" varchar DEFAULT '#C2005F',
  	"button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "lcta_steps" ADD CONSTRAINT "lcta_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_steps" ADD CONSTRAINT "lcta_steps_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_steps" ADD CONSTRAINT "lcta_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lcta_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lcta_btn" ADD CONSTRAINT "lcta_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lcta_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_steps_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("steps_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_steps_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("steps_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lcta_steps_v" ADD CONSTRAINT "_lcta_steps_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_steps_v" ADD CONSTRAINT "_lcta_steps_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_steps_v" ADD CONSTRAINT "_lcta_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_lcta_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lcta_btn_v" ADD CONSTRAINT "_lcta_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_lcta_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_steps_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("steps_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_steps_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("steps_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "lcta_steps_order_idx" ON "lcta_steps" USING btree ("_order");
  CREATE INDEX "lcta_steps_parent_id_idx" ON "lcta_steps" USING btree ("_parent_id");
  CREATE INDEX "lcta_steps_image_idx" ON "lcta_steps" USING btree ("image_id");
  CREATE INDEX "lcta_steps_icon_icon_media_image_idx" ON "lcta_steps" USING btree ("icon_media_image_id");
  CREATE INDEX "lcta_btn_order_idx" ON "lcta_btn" USING btree ("_order");
  CREATE INDEX "lcta_btn_parent_id_idx" ON "lcta_btn" USING btree ("_parent_id");
  CREATE INDEX "lcta_drop_order_idx" ON "lcta_drop" USING btree ("_order");
  CREATE INDEX "lcta_drop_parent_id_idx" ON "lcta_drop" USING btree ("_parent_id");
  CREATE INDEX "lcta_drop_path_idx" ON "lcta_drop" USING btree ("_path");
  CREATE INDEX "lcta_drop_header_style_header_style_font_group_idx" ON "lcta_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "lcta_drop_header_style_header_style_custom_font_file_idx" ON "lcta_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "lcta_drop_steps_style_steps_style_font_group_idx" ON "lcta_drop" USING btree ("steps_style_font_group_id");
  CREATE INDEX "lcta_drop_steps_style_steps_style_custom_font_file_idx" ON "lcta_drop" USING btree ("steps_style_custom_font_file_id");
  CREATE INDEX "_lcta_steps_v_order_idx" ON "_lcta_steps_v" USING btree ("_order");
  CREATE INDEX "_lcta_steps_v_parent_id_idx" ON "_lcta_steps_v" USING btree ("_parent_id");
  CREATE INDEX "_lcta_steps_v_image_idx" ON "_lcta_steps_v" USING btree ("image_id");
  CREATE INDEX "_lcta_steps_v_icon_icon_media_image_idx" ON "_lcta_steps_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_lcta_btn_v_order_idx" ON "_lcta_btn_v" USING btree ("_order");
  CREATE INDEX "_lcta_btn_v_parent_id_idx" ON "_lcta_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_lcta_drop_v_order_idx" ON "_lcta_drop_v" USING btree ("_order");
  CREATE INDEX "_lcta_drop_v_parent_id_idx" ON "_lcta_drop_v" USING btree ("_parent_id");
  CREATE INDEX "_lcta_drop_v_path_idx" ON "_lcta_drop_v" USING btree ("_path");
  CREATE INDEX "_lcta_drop_v_header_style_header_style_font_group_idx" ON "_lcta_drop_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_lcta_drop_v_header_style_header_style_custom_font_file_idx" ON "_lcta_drop_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_lcta_drop_v_steps_style_steps_style_font_group_idx" ON "_lcta_drop_v" USING btree ("steps_style_font_group_id");
  CREATE INDEX "_lcta_drop_v_steps_style_steps_style_custom_font_file_idx" ON "_lcta_drop_v" USING btree ("steps_style_custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "lcta_steps" CASCADE;
  DROP TABLE "lcta_btn" CASCADE;
  DROP TABLE "lcta_drop" CASCADE;
  DROP TABLE "_lcta_steps_v" CASCADE;
  DROP TABLE "_lcta_btn_v" CASCADE;
  DROP TABLE "_lcta_drop_v" CASCADE;
  DROP TYPE "public"."enum_lcta_btn_link_type";
  DROP TYPE "public"."enum_lcta_drop_header_style_font_family";
  DROP TYPE "public"."enum_lcta_drop_steps_style_font_family";
  DROP TYPE "public"."enum__lcta_btn_v_link_type";
  DROP TYPE "public"."enum__lcta_drop_v_header_style_font_family";
  DROP TYPE "public"."enum__lcta_drop_v_steps_style_font_family";`)
}
