import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_ps_plans_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_ps_plans_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__ps_plans_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__ps_plans_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "ps_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "ps_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_ps_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_ps_plans_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_pricing_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_pricing_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ps_elements_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ps_plans_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__ps_plans_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__ps_plans_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_pricing_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "ps_elements" ADD CONSTRAINT "ps_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ps_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ps_plans" ADD CONSTRAINT "ps_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ps_elements_v" ADD CONSTRAINT "_ps_elements_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ps_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ps_plans_v" ADD CONSTRAINT "_ps_plans_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "ps_elements_order_idx" ON "ps_elements" USING btree ("_order");
  CREATE INDEX "ps_elements_parent_id_idx" ON "ps_elements" USING btree ("_parent_id");
  CREATE INDEX "ps_plans_order_idx" ON "ps_plans" USING btree ("_order");
  CREATE INDEX "ps_plans_parent_id_idx" ON "ps_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_order_idx" ON "pages_blocks_pricing_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_senda_parent_id_idx" ON "pages_blocks_pricing_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_path_idx" ON "pages_blocks_pricing_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_senda_custom_font_file_idx" ON "pages_blocks_pricing_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_ps_elements_v_order_idx" ON "_ps_elements_v" USING btree ("_order");
  CREATE INDEX "_ps_elements_v_parent_id_idx" ON "_ps_elements_v" USING btree ("_parent_id");
  CREATE INDEX "_ps_plans_v_order_idx" ON "_ps_plans_v" USING btree ("_order");
  CREATE INDEX "_ps_plans_v_parent_id_idx" ON "_ps_plans_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_order_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_senda_parent_id_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_path_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_senda_custom_font_file_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "ps_elements" CASCADE;
  DROP TABLE "ps_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_senda" CASCADE;
  DROP TABLE "_ps_elements_v" CASCADE;
  DROP TABLE "_ps_plans_v" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_senda" CASCADE;
  DROP TYPE "public"."enum_ps_plans_link_type";
  DROP TYPE "public"."enum_ps_plans_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_pricing_senda_font_family";
  DROP TYPE "public"."enum__ps_plans_v_link_type";
  DROP TYPE "public"."enum__ps_plans_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_senda_font_family";`)
}
