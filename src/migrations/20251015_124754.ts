import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_footer1_config_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer1_config_column_links_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer1_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_social_media_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer5_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer1_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer1_config_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_footer_footer1_config_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_footer_footer1_config_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_footer_footer5_config_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_footer_footer5_config_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  ALTER TYPE "public"."enum_footer_footer_type" ADD VALUE 'footer1' BEFORE 'footer4';
  ALTER TYPE "public"."enum_footer_footer_type" ADD VALUE 'footer5';
  CREATE TABLE "footer_footer1_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer1_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum_footer_footer1_config_column_links_links_icon"
  );
  
  CREATE TABLE "footer_footer1_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "footer_footer1_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer1_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer5_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer5_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer5_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "footer_footer5_config_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_footer5_config_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum_footer_footer5_config_social_media_links_icon"
  );
  
  CREATE TABLE "footer_footer5_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer5_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  ALTER TABLE "footer_footer4_config_column_links_links" ADD COLUMN "link_type" "enum_footer_footer4_config_column_links_links_link_type" DEFAULT 'reference';
  ALTER TABLE "footer_footer4_config_column_links_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "footer_footer4_config_column_links_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "footer_footer4_config_social_media_links" ADD COLUMN "link_type" "enum_footer_footer4_config_social_media_links_link_type" DEFAULT 'reference';
  ALTER TABLE "footer_footer4_config_social_media_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "footer_footer4_config_social_media_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "footer_footer4_config_footer_links" ADD COLUMN "link_type" "enum_footer_footer4_config_footer_links_link_type" DEFAULT 'reference';
  ALTER TABLE "footer_footer4_config_footer_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "footer_footer4_config_footer_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer1_config_logo_media_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer1_config_logo_link_type" "enum_footer_footer1_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer1_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer1_config_newsletter_description" varchar DEFAULT 'Join our newsletter to stay up to date on features and releases.';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_input_placeholder" varchar DEFAULT 'Enter your email';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_button_title" varchar DEFAULT 'Subscribe';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_button_size" "enum_footer_footer1_config_button_size" DEFAULT 'sm';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_button_variant" "enum_footer_footer1_config_button_variant" DEFAULT 'secondary';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_terms_and_conditions_link_type" "enum_footer_footer1_config_terms_and_conditions_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_terms_and_conditions_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer1_config_terms_and_conditions_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer1_config_terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.';
  ALTER TABLE "footer" ADD COLUMN "footer1_config_footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.';
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_media_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_link_type" "enum_footer_footer4_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer5_config_logo_media_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer5_config_logo_link_type" "enum_footer_footer5_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer5_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer5_config_newsletter_heading" varchar DEFAULT 'Join our newsletter';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_newsletter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_input_placeholder" varchar DEFAULT 'Enter your email';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_button_title" varchar DEFAULT 'Subscribe';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_button_size" "enum_footer_footer5_config_button_size" DEFAULT 'sm';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_button_variant" "enum_footer_footer5_config_button_variant" DEFAULT 'secondary';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_terms_and_conditions_link_type" "enum_footer_footer5_config_terms_and_conditions_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_terms_and_conditions_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer5_config_terms_and_conditions_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer5_config_terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.';
  ALTER TABLE "footer" ADD COLUMN "footer5_config_footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.';
  ALTER TABLE "footer_footer1_config_column_links_links" ADD CONSTRAINT "footer_footer1_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer1_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer1_config_column_links" ADD CONSTRAINT "footer_footer1_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer1_config_footer_links" ADD CONSTRAINT "footer_footer1_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_column_links_links" ADD CONSTRAINT "footer_footer5_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer5_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_column_links" ADD CONSTRAINT "footer_footer5_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_social_media_links" ADD CONSTRAINT "footer_footer5_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_footer_links" ADD CONSTRAINT "footer_footer5_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_footer1_config_column_links_links_order_idx" ON "footer_footer1_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer1_config_column_links_links_parent_id_idx" ON "footer_footer1_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_column_links_order_idx" ON "footer_footer1_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer1_config_column_links_parent_id_idx" ON "footer_footer1_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_footer_links_order_idx" ON "footer_footer1_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer1_config_footer_links_parent_id_idx" ON "footer_footer1_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_column_links_links_order_idx" ON "footer_footer5_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_column_links_links_parent_id_idx" ON "footer_footer5_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_column_links_order_idx" ON "footer_footer5_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_column_links_parent_id_idx" ON "footer_footer5_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_social_media_links_order_idx" ON "footer_footer5_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_social_media_links_parent_id_idx" ON "footer_footer5_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_footer_links_order_idx" ON "footer_footer5_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_footer_links_parent_id_idx" ON "footer_footer5_config_footer_links" USING btree ("_parent_id");
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer1_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer4_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer4_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer5_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "footer_footer1_config_logo_footer1_config_logo_media_idx" ON "footer" USING btree ("footer1_config_logo_media_id");
  CREATE INDEX "footer_footer4_config_logo_footer4_config_logo_media_idx" ON "footer" USING btree ("footer4_config_logo_media_id");
  CREATE INDEX "footer_footer5_config_logo_footer5_config_logo_media_idx" ON "footer" USING btree ("footer5_config_logo_media_id");
  ALTER TABLE "footer_footer4_config_column_links_links" DROP COLUMN "url";
  ALTER TABLE "footer_footer4_config_social_media_links" DROP COLUMN "url";
  ALTER TABLE "footer_footer4_config_footer_links" DROP COLUMN "url";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_url";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_src";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_alt";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer_footer1_config_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer1_config_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer1_config_footer_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer5_config_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer5_config_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer5_config_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer5_config_footer_links" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_footer1_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer1_config_column_links" CASCADE;
  DROP TABLE "footer_footer1_config_footer_links" CASCADE;
  DROP TABLE "footer_footer5_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer5_config_column_links" CASCADE;
  DROP TABLE "footer_footer5_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer5_config_footer_links" CASCADE;
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer1_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer4_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer5_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE text;
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_footer_footer_type";
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer4');
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::"public"."enum_footer_footer_type";
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE "public"."enum_footer_footer_type" USING "footer_type"::"public"."enum_footer_footer_type";
  DROP INDEX "footer_footer1_config_logo_footer1_config_logo_media_idx";
  DROP INDEX "footer_footer4_config_logo_footer4_config_logo_media_idx";
  DROP INDEX "footer_footer5_config_logo_footer5_config_logo_media_idx";
  ALTER TABLE "footer_footer4_config_column_links_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "footer_footer4_config_social_media_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "footer_footer4_config_footer_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_url" varchar DEFAULT '#';
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "footer" ADD COLUMN "footer4_config_logo_alt" varchar DEFAULT 'Logo image';
  ALTER TABLE "footer_footer4_config_column_links_links" DROP COLUMN "link_type";
  ALTER TABLE "footer_footer4_config_column_links_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "footer_footer4_config_column_links_links" DROP COLUMN "link_url";
  ALTER TABLE "footer_footer4_config_social_media_links" DROP COLUMN "link_type";
  ALTER TABLE "footer_footer4_config_social_media_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "footer_footer4_config_social_media_links" DROP COLUMN "link_url";
  ALTER TABLE "footer_footer4_config_footer_links" DROP COLUMN "link_type";
  ALTER TABLE "footer_footer4_config_footer_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "footer_footer4_config_footer_links" DROP COLUMN "link_url";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_logo_media_id";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_newsletter_description";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_input_placeholder";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_button_title";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_button_size";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_button_variant";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_terms_and_conditions_text";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_terms_and_conditions_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_terms_and_conditions_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_terms_and_conditions_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_terms_and_conditions_suffix";
  ALTER TABLE "footer" DROP COLUMN "footer1_config_footer_text";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_media_id";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer4_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_logo_media_id";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_newsletter_heading";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_newsletter_description";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_input_placeholder";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_button_title";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_button_size";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_button_variant";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_terms_and_conditions_text";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_terms_and_conditions_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_terms_and_conditions_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_terms_and_conditions_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_terms_and_conditions_suffix";
  ALTER TABLE "footer" DROP COLUMN "footer5_config_footer_text";
  DROP TYPE "public"."enum_footer_footer1_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer1_config_column_links_links_icon";
  DROP TYPE "public"."enum_footer_footer1_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_social_media_links_icon";
  DROP TYPE "public"."enum_footer_footer5_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer1_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer1_config_button_size";
  DROP TYPE "public"."enum_footer_footer1_config_button_variant";
  DROP TYPE "public"."enum_footer_footer1_config_terms_and_conditions_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_button_size";
  DROP TYPE "public"."enum_footer_footer5_config_button_variant";
  DROP TYPE "public"."enum_footer_footer5_config_terms_and_conditions_link_type";`)
}
