import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_psa_plans_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_psa_plans_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__psa_plans_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__psa_plans_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_senda_alter_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "psa_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"rich_text" jsonb
  );
  
  CREATE TABLE "psa_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable3_d_gradient" boolean DEFAULT false,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_psa_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_psa_plans_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_pricing_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"plan_gradient_color" varchar,
  	"plan_drop_shadow_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_pricing_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_psa_elements_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_psa_plans_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable3_d_gradient" boolean DEFAULT false,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__psa_plans_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__psa_plans_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_senda_alter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"plan_gradient_color" varchar,
  	"plan_drop_shadow_color" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_pricing_senda_alter_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "psa_elements" ADD CONSTRAINT "psa_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."psa_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "psa_plans" ADD CONSTRAINT "psa_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD CONSTRAINT "pages_blocks_pricing_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD CONSTRAINT "pages_blocks_pricing_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda_alter" ADD CONSTRAINT "pages_blocks_pricing_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_psa_elements_v" ADD CONSTRAINT "_psa_elements_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_psa_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_psa_plans_v" ADD CONSTRAINT "_psa_plans_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_senda_alter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_alter_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_alter_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda_alter" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_alter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "psa_elements_order_idx" ON "psa_elements" USING btree ("_order");
  CREATE INDEX "psa_elements_parent_id_idx" ON "psa_elements" USING btree ("_parent_id");
  CREATE INDEX "psa_plans_order_idx" ON "psa_plans" USING btree ("_order");
  CREATE INDEX "psa_plans_parent_id_idx" ON "psa_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_alter_order_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_senda_alter_parent_id_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_alter_path_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_senda_alter_font_group_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_pricing_senda_alter_custom_font_file_idx" ON "pages_blocks_pricing_senda_alter" USING btree ("custom_font_file_id");
  CREATE INDEX "_psa_elements_v_order_idx" ON "_psa_elements_v" USING btree ("_order");
  CREATE INDEX "_psa_elements_v_parent_id_idx" ON "_psa_elements_v" USING btree ("_parent_id");
  CREATE INDEX "_psa_plans_v_order_idx" ON "_psa_plans_v" USING btree ("_order");
  CREATE INDEX "_psa_plans_v_parent_id_idx" ON "_psa_plans_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_order_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_parent_id_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_path_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_font_group_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_alter_custom_font_file_idx" ON "_pages_v_blocks_pricing_senda_alter" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "psa_elements" CASCADE;
  DROP TABLE "psa_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_senda_alter" CASCADE;
  DROP TABLE "_psa_elements_v" CASCADE;
  DROP TABLE "_psa_plans_v" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_senda_alter" CASCADE;
  DROP TYPE "public"."enum_psa_plans_link_type";
  DROP TYPE "public"."enum_psa_plans_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_pricing_senda_alter_font_family";
  DROP TYPE "public"."enum__psa_plans_v_link_type";
  DROP TYPE "public"."enum__psa_plans_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_senda_alter_font_family";`)
}
