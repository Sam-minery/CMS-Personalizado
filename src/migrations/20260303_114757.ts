import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_multi_form_senda_end_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_multi_form_senda_font_family" AS ENUM('default', 'Arial, sans-serif', 'Georgia, serif', '"Inter", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form_senda_end_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form_senda_font_family" AS ENUM('default', 'Arial, sans-serif', 'Georgia, serif', '"Inter", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "pages_blocks_multi_form_senda_steps_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_multi_form_senda_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_multi_form_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"intro_rich_text" jsonb,
  	"start_button_label" varchar DEFAULT 'Comenzar',
  	"start_button_icon_s_v_g" varchar,
  	"end_rich_text" jsonb,
  	"end_button_link_type" "enum_pages_blocks_multi_form_senda_end_button_link_type" DEFAULT 'reference',
  	"end_button_link_new_tab" boolean,
  	"end_button_link_url" varchar,
  	"end_button_link_label" varchar,
  	"end_button_label" varchar,
  	"end_button_icon_s_v_g" varchar,
  	"options_background_color" varchar,
  	"background_color" varchar,
  	"form_background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_multi_form_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda_steps_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"intro_rich_text" jsonb,
  	"start_button_label" varchar DEFAULT 'Comenzar',
  	"start_button_icon_s_v_g" varchar,
  	"end_rich_text" jsonb,
  	"end_button_link_type" "enum__pages_v_blocks_multi_form_senda_end_button_link_type" DEFAULT 'reference',
  	"end_button_link_new_tab" boolean,
  	"end_button_link_url" varchar,
  	"end_button_link_label" varchar,
  	"end_button_label" varchar,
  	"end_button_icon_s_v_g" varchar,
  	"options_background_color" varchar,
  	"background_color" varchar,
  	"form_background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_multi_form_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_multi_form_senda_steps_options" ADD CONSTRAINT "pages_blocks_multi_form_senda_steps_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda_steps" ADD CONSTRAINT "pages_blocks_multi_form_senda_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD CONSTRAINT "pages_blocks_multi_form_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD CONSTRAINT "pages_blocks_multi_form_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps_options" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_steps_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_multi_form_senda_steps_options_order_idx" ON "pages_blocks_multi_form_senda_steps_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_options_parent_id_idx" ON "pages_blocks_multi_form_senda_steps_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_order_idx" ON "pages_blocks_multi_form_senda_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_parent_id_idx" ON "pages_blocks_multi_form_senda_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_order_idx" ON "pages_blocks_multi_form_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_parent_id_idx" ON "pages_blocks_multi_form_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_path_idx" ON "pages_blocks_multi_form_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_multi_form_senda_custom_font_file_idx" ON "pages_blocks_multi_form_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_options_order_idx" ON "_pages_v_blocks_multi_form_senda_steps_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_options_parent_id_idx" ON "_pages_v_blocks_multi_form_senda_steps_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_order_idx" ON "_pages_v_blocks_multi_form_senda_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_parent_id_idx" ON "_pages_v_blocks_multi_form_senda_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_order_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_parent_id_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_path_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_custom_font_file_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_multi_form_senda_steps_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form_senda_steps" CASCADE;
  DROP TABLE "pages_blocks_multi_form_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda_steps_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_multi_form_senda_end_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_multi_form_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form_senda_end_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form_senda_font_family";`)
}
