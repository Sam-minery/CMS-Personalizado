import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_header_navbar_template_config_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_login_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_signup_button_link_type" AS ENUM('reference', 'custom');
  ALTER TYPE "public"."enum_header_navbar_type" ADD VALUE 'navbarTemplate';
  CREATE TABLE "header_navbar_template_config_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Link',
  	"link_type" "enum_header_navbar_template_config_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_logo_image_id" integer;
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_logo_text" varchar DEFAULT 'Logo';
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_logo_link_type" "enum_header_navbar_template_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_logo_link_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_logo_link_url" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_login_button_title" varchar DEFAULT 'Login';
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_login_button_link_type" "enum_header_navbar_template_config_login_button_link_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_login_button_link_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_login_button_link_url" varchar;
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_signup_button_title" varchar DEFAULT 'Signup';
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_signup_button_link_type" "enum_header_navbar_template_config_signup_button_link_type" DEFAULT 'reference';
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_signup_button_link_new_tab" boolean;
  ALTER TABLE "header" ADD COLUMN "navbar_template_config_signup_button_link_url" varchar;
  ALTER TABLE "header_navbar_template_config_nav_links" ADD CONSTRAINT "header_navbar_template_config_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_navbar_template_config_nav_links_order_idx" ON "header_navbar_template_config_nav_links" USING btree ("_order");
  CREATE INDEX "header_navbar_template_config_nav_links_parent_id_idx" ON "header_navbar_template_config_nav_links" USING btree ("_parent_id");
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar_template_config_logo_navbar_template_config_logo_image_idx" ON "header" USING btree ("navbar_template_config_logo_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_navbar_template_config_nav_links" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "header_navbar_template_config_nav_links" CASCADE;
  ALTER TABLE "header" DROP CONSTRAINT "header_navbar_template_config_logo_image_id_media_id_fk";
  
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE text;
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_header_navbar_type";
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar5', 'navbar11');
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DEFAULT 'default'::"public"."enum_header_navbar_type";
  ALTER TABLE "header" ALTER COLUMN "navbar_type" SET DATA TYPE "public"."enum_header_navbar_type" USING "navbar_type"::"public"."enum_header_navbar_type";
  DROP INDEX "header_navbar_template_config_logo_navbar_template_config_logo_image_idx";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_logo_image_id";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_logo_text";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_logo_link_type";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_logo_link_new_tab";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_logo_link_url";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_login_button_title";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_login_button_link_type";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_login_button_link_new_tab";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_login_button_link_url";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_signup_button_title";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_signup_button_link_type";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_signup_button_link_new_tab";
  ALTER TABLE "header" DROP COLUMN "navbar_template_config_signup_button_link_url";
  DROP TYPE "public"."enum_header_navbar_template_config_nav_links_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_login_button_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_signup_button_link_type";`)
}
