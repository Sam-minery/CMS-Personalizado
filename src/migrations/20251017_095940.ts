import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_navbar1_config_nav_links_sub_menu_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar1_config_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar1_config_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar1_config_buttons_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_header_navbar1_config_buttons_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  ALTER TYPE "public"."enum_header_navbar_type" ADD VALUE 'navbar1' BEFORE 'navbar11';
  CREATE TABLE "header_navbar1_config_nav_links_sub_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_header_navbar1_config_nav_links_sub_menu_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "header_navbar1_config_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_header_navbar1_config_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "header_navbar1_config_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_header_navbar1_config_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"size" "enum_header_navbar1_config_buttons_size" DEFAULT 'lg',
  	"variant" "enum_header_navbar1_config_buttons_variant" DEFAULT 'default'
  );
  
  ALTER TABLE "header" ADD COLUMN "navbar1_config_logo_use_media" boolean DEFAULT true;
  ALTER TABLE "header" ADD COLUMN "navbar1_config_logo_media_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar1_config_logo_url" varchar DEFAULT '#';
  ALTER TABLE "header" ADD COLUMN "navbar1_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "header" ADD COLUMN "navbar1_config_logo_alt" varchar DEFAULT 'Logo image';
  ALTER TABLE "header_navbar1_config_nav_links_sub_menu_links" ADD CONSTRAINT "header_navbar1_config_nav_links_sub_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_navbar1_config_nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar1_config_nav_links" ADD CONSTRAINT "header_navbar1_config_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar1_config_buttons" ADD CONSTRAINT "header_navbar1_config_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_navbar1_config_nav_links_sub_menu_links_order_idx" ON "header_navbar1_config_nav_links_sub_menu_links" USING btree ("_order");
  CREATE INDEX "header_navbar1_config_nav_links_sub_menu_links_parent_id_idx" ON "header_navbar1_config_nav_links_sub_menu_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar1_config_nav_links_order_idx" ON "header_navbar1_config_nav_links" USING btree ("_order");
  CREATE INDEX "header_navbar1_config_nav_links_parent_id_idx" ON "header_navbar1_config_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar1_config_buttons_order_idx" ON "header_navbar1_config_buttons" USING btree ("_order");
  CREATE INDEX "header_navbar1_config_buttons_parent_id_idx" ON "header_navbar1_config_buttons" USING btree ("_parent_id");
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar1_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar1_config_logo_navbar1_config_logo_media_idx" ON "header" USING btree ("navbar1_config_logo_media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_navbar1_config_nav_links_sub_menu_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_navbar1_config_nav_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "header_navbar1_config_buttons" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "header_navbar1_config_nav_links_sub_menu_links" CASCADE;
  DROP TABLE "header_navbar1_config_nav_links" CASCADE;
  DROP TABLE "header_navbar1_config_buttons" CASCADE;
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar1_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE text;
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_header_navbar_type";
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar11');
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::"public"."enum_header_navbar_type";
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE "public"."enum_header_navbar_type" USING "navbar_type"::"public"."enum_header_navbar_type";
  DROP INDEX "header_navbar1_config_logo_navbar1_config_logo_media_idx";
  ALTER TABLE "header" DROP COLUMN "navbar1_config_logo_use_media";
  ALTER TABLE "header" DROP COLUMN "navbar1_config_logo_media_id";
  ALTER TABLE "header" DROP COLUMN "navbar1_config_logo_url";
  ALTER TABLE "header" DROP COLUMN "navbar1_config_logo_src";
  ALTER TABLE "header" DROP COLUMN "navbar1_config_logo_alt";
  DROP TYPE "public"."enum_header_navbar1_config_nav_links_sub_menu_links_link_type";
  DROP TYPE "public"."enum_header_navbar1_config_nav_links_link_type";
  DROP TYPE "public"."enum_header_navbar1_config_buttons_link_type";
  DROP TYPE "public"."enum_header_navbar1_config_buttons_size";
  DROP TYPE "public"."enum_header_navbar1_config_buttons_variant";`)
}
