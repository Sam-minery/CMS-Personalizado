import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_footer_template_config_product_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_company_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_social_links_platform" AS ENUM('twitter', 'instagram', 'linkedin');
  CREATE TYPE "public"."enum_footer_footer_template_config_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_cta_button_link_type" AS ENUM('reference', 'custom');
  ALTER TYPE "public"."enum_footer_footer_type" ADD VALUE 'footerTemplate';
  CREATE TABLE "footer_footer_template_config_product_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer_template_config_product_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_company_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer_template_config_company_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer_template_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_footer_template_config_social_links_platform" DEFAULT 'twitter',
  	"link_type" "enum_footer_footer_template_config_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_logo_image_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_logo_text" varchar DEFAULT 'Logo';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_logo_link_type" "enum_footer_footer_template_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_subheading" varchar DEFAULT 'Safe, observable, outcome-driven AI';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_cta_button_title" varchar DEFAULT 'Start a 30-day trial';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_cta_button_link_type" "enum_footer_footer_template_config_cta_button_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_cta_button_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_cta_button_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_newsletter_description" varchar DEFAULT 'Get the latest product news and behind the scenes updates.';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_newsletter_placeholder" varchar DEFAULT 'Your email';
  ALTER TABLE "footer" ADD COLUMN "footer_template_config_footer_text" varchar DEFAULT '© 2025 Agenforce AI. All rights reserved.';
  ALTER TABLE "footer_footer_template_config_product_links" ADD CONSTRAINT "footer_footer_template_config_product_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_company_links" ADD CONSTRAINT "footer_footer_template_config_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_footer_links" ADD CONSTRAINT "footer_footer_template_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_social_links" ADD CONSTRAINT "footer_footer_template_config_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_footer_template_config_product_links_order_idx" ON "footer_footer_template_config_product_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_product_links_parent_id_idx" ON "footer_footer_template_config_product_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_company_links_order_idx" ON "footer_footer_template_config_company_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_company_links_parent_id_idx" ON "footer_footer_template_config_company_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_footer_links_order_idx" ON "footer_footer_template_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_footer_links_parent_id_idx" ON "footer_footer_template_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_social_links_order_idx" ON "footer_footer_template_config_social_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_social_links_parent_id_idx" ON "footer_footer_template_config_social_links" USING btree ("_parent_id");
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("footer_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "footer_footer_template_config_logo_footer_template_config_logo_image_idx" ON "footer" USING btree ("footer_template_config_logo_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer_footer_template_config_product_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_template_config_company_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_template_config_footer_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_template_config_social_links" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_footer_template_config_product_links" CASCADE;
  DROP TABLE "footer_footer_template_config_company_links" CASCADE;
  DROP TABLE "footer_footer_template_config_footer_links" CASCADE;
  DROP TABLE "footer_footer_template_config_social_links" CASCADE;
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_template_config_logo_image_id_media_id_fk";
  
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE text;
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_footer_footer_type";
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer1', 'footer4', 'footer5');
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::"public"."enum_footer_footer_type";
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE "public"."enum_footer_footer_type" USING "footer_type"::"public"."enum_footer_footer_type";
  DROP INDEX "footer_footer_template_config_logo_footer_template_config_logo_image_idx";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_logo_image_id";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_logo_text";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_subheading";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_cta_button_title";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_cta_button_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_cta_button_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_cta_button_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_newsletter_description";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_newsletter_placeholder";
  ALTER TABLE "footer" DROP COLUMN "footer_template_config_footer_text";
  DROP TYPE "public"."enum_footer_footer_template_config_product_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_company_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_social_links_platform";
  DROP TYPE "public"."enum_footer_footer_template_config_social_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_cta_button_link_type";`)
}
