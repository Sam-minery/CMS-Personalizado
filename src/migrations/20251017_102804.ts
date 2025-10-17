import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_navbar5_cat_link_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_cat_link_items_button_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_cat_link_items_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_featured_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_featured_links_button_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_featured_links_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_links_mega_menu_button_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_links_mega_menu_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_links_mega_menu_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_buttons_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar5_config_logo_link_type" AS ENUM('reference', 'custom');
  ALTER TYPE "public"."enum_header_navbar_type" ADD VALUE 'navbar5' BEFORE 'navbar11';
  CREATE TABLE "navbar5_cat_link_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navbar5_cat_link_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum_navbar5_cat_link_items_button_size" DEFAULT 'sm',
  	"button_variant" "enum_navbar5_cat_link_items_button_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "navbar5_cat_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "navbar5_featured_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navbar5_featured_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum_navbar5_featured_links_button_size" DEFAULT 'sm',
  	"button_variant" "enum_navbar5_featured_links_button_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "navbar5_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_navbar5_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"mega_menu_featured_sections_title" varchar,
  	"mega_menu_button_title" varchar,
  	"mega_menu_button_size" "enum_navbar5_links_mega_menu_button_size" DEFAULT 'sm',
  	"mega_menu_button_variant" "enum_navbar5_links_mega_menu_button_variant" DEFAULT 'primary',
  	"mega_menu_button_link_type" "enum_navbar5_links_mega_menu_button_link_type" DEFAULT 'reference',
  	"mega_menu_button_link_new_tab" boolean,
  	"mega_menu_button_link_url" varchar
  );
  
  CREATE TABLE "navbar5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"size" "enum_navbar5_buttons_size" DEFAULT 'sm',
  	"variant" "enum_navbar5_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum_navbar5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_media_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_url" varchar DEFAULT '#';
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_alt" varchar DEFAULT 'Logo image';
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_link_type" "enum_header_navbar5_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_link_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "navbar5_config_logo_link_url" varchar;
  ALTER TABLE "navbar5_cat_link_items" ADD CONSTRAINT "navbar5_cat_link_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar5_cat_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_cat_links" ADD CONSTRAINT "navbar5_cat_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar5_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_featured_links" ADD CONSTRAINT "navbar5_featured_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar5_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_links" ADD CONSTRAINT "navbar5_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_buttons" ADD CONSTRAINT "navbar5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "navbar5_cat_link_items_order_idx" ON "navbar5_cat_link_items" USING btree ("_order");
  CREATE INDEX "navbar5_cat_link_items_parent_id_idx" ON "navbar5_cat_link_items" USING btree ("_parent_id");
  CREATE INDEX "navbar5_cat_links_order_idx" ON "navbar5_cat_links" USING btree ("_order");
  CREATE INDEX "navbar5_cat_links_parent_id_idx" ON "navbar5_cat_links" USING btree ("_parent_id");
  CREATE INDEX "navbar5_featured_links_order_idx" ON "navbar5_featured_links" USING btree ("_order");
  CREATE INDEX "navbar5_featured_links_parent_id_idx" ON "navbar5_featured_links" USING btree ("_parent_id");
  CREATE INDEX "navbar5_links_order_idx" ON "navbar5_links" USING btree ("_order");
  CREATE INDEX "navbar5_links_parent_id_idx" ON "navbar5_links" USING btree ("_parent_id");
  CREATE INDEX "navbar5_buttons_order_idx" ON "navbar5_buttons" USING btree ("_order");
  CREATE INDEX "navbar5_buttons_parent_id_idx" ON "navbar5_buttons" USING btree ("_parent_id");
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar5_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar5_config_logo_navbar5_config_logo_media_idx" ON "header" USING btree ("navbar5_config_logo_media_id");
  ALTER TABLE "header_navbar1_config_nav_links" DROP COLUMN "link_label";
  ALTER TABLE "header_navbar1_config_buttons" DROP COLUMN "link_label";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "navbar5_cat_link_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navbar5_cat_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navbar5_featured_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navbar5_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "navbar5_buttons" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "navbar5_cat_link_items" CASCADE;
  DROP TABLE "navbar5_cat_links" CASCADE;
  DROP TABLE "navbar5_featured_links" CASCADE;
  DROP TABLE "navbar5_links" CASCADE;
  DROP TABLE "navbar5_buttons" CASCADE;
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar5_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE text;
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_header_navbar_type";
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar11');
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::"public"."enum_header_navbar_type";
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE "public"."enum_header_navbar_type" USING "navbar_type"::"public"."enum_header_navbar_type";
  DROP INDEX "header_navbar5_config_logo_navbar5_config_logo_media_idx";
  ALTER TABLE "header_navbar1_config_nav_links" ADD COLUMN "link_label" varchar;
  ALTER TABLE "header_navbar1_config_buttons" ADD COLUMN "link_label" varchar;
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_use_media";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_media_id";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_url";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_src";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_alt";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_link_type";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_link_new_tab";
  ALTER TABLE "header" DROP COLUMN "navbar5_config_logo_link_url";
  DROP TYPE "public"."enum_navbar5_cat_link_items_link_type";
  DROP TYPE "public"."enum_navbar5_cat_link_items_button_size";
  DROP TYPE "public"."enum_navbar5_cat_link_items_button_variant";
  DROP TYPE "public"."enum_navbar5_featured_links_link_type";
  DROP TYPE "public"."enum_navbar5_featured_links_button_size";
  DROP TYPE "public"."enum_navbar5_featured_links_button_variant";
  DROP TYPE "public"."enum_navbar5_links_link_type";
  DROP TYPE "public"."enum_navbar5_links_mega_menu_button_size";
  DROP TYPE "public"."enum_navbar5_links_mega_menu_button_variant";
  DROP TYPE "public"."enum_navbar5_links_mega_menu_button_link_type";
  DROP TYPE "public"."enum_navbar5_buttons_size";
  DROP TYPE "public"."enum_navbar5_buttons_variant";
  DROP TYPE "public"."enum_navbar5_buttons_link_type";
  DROP TYPE "public"."enum_header_navbar5_config_logo_link_type";`)
}
