import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_footer_footer_senda_config_column_links_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_social_media_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer_senda_config_footer_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TYPE "public"."enum_footer_footer_type" ADD VALUE 'footerSenda';
  CREATE TABLE "footer_footer_senda_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_footer_senda_config_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"platform" "enum_footer_footer_senda_config_social_media_links_platform",
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_media_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_type" "enum_footer_footer_senda_config_logo_link_type" DEFAULT 'reference';
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_new_tab" boolean;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_url" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_logo_link_anchor_id" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_footer_text" jsonb;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_background_color" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_text_color" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_bold_text_color" varchar;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_font_family" "enum_footer_footer_senda_config_font_family" DEFAULT 'default';
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_use_custom_font" boolean DEFAULT false;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_custom_font_file_id" integer;
  ALTER TABLE "footer" ADD COLUMN "footer_senda_config_custom_font_name" varchar;
  ALTER TABLE "footer_footer_senda_config_column_links_links" ADD CONSTRAINT "footer_footer_senda_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer_senda_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_column_links" ADD CONSTRAINT "footer_footer_senda_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_social_media_links" ADD CONSTRAINT "footer_footer_senda_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_footer_links" ADD CONSTRAINT "footer_footer_senda_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "footer_footer_senda_config_column_links_links_order_idx" ON "footer_footer_senda_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_column_links_links_parent_id_idx" ON "footer_footer_senda_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_column_links_order_idx" ON "footer_footer_senda_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_column_links_parent_id_idx" ON "footer_footer_senda_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_social_media_links_order_idx" ON "footer_footer_senda_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_social_media_links_parent_id_idx" ON "footer_footer_senda_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_footer_links_order_idx" ON "footer_footer_senda_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_footer_links_parent_id_idx" ON "footer_footer_senda_config_footer_links" USING btree ("_parent_id");
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer_senda_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_senda_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "footer_footer_senda_config_logo_footer_senda_config_logo_idx" ON "footer" USING btree ("footer_senda_config_logo_media_id");
  CREATE INDEX "footer_footer_senda_config_footer_senda_config_custom_fo_idx" ON "footer" USING btree ("footer_senda_config_custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "footer_footer_senda_config_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "footer_footer_senda_config_footer_links" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "footer_footer_senda_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_column_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_footer_links" CASCADE;
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_senda_config_logo_media_id_media_id_fk";
  
  ALTER TABLE "footer" DROP CONSTRAINT "footer_footer_senda_config_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE text;
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::text;
  DROP TYPE "public"."enum_footer_footer_type";
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer1', 'footer4', 'footer5', 'footerTemplate');
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DEFAULT 'default'::"public"."enum_footer_footer_type";
  ALTER TABLE "footer" ALTER COLUMN "footer_type" SET DATA TYPE "public"."enum_footer_footer_type" USING "footer_type"::"public"."enum_footer_footer_type";
  DROP INDEX "footer_footer_senda_config_logo_footer_senda_config_logo_idx";
  DROP INDEX "footer_footer_senda_config_footer_senda_config_custom_fo_idx";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_media_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_type";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_new_tab";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_url";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_logo_link_anchor_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_footer_text";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_background_color";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_text_color";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_bold_text_color";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_font_family";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_use_custom_font";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_custom_font_file_id";
  ALTER TABLE "footer" DROP COLUMN "footer_senda_config_custom_font_name";
  DROP TYPE "public"."enum_footer_footer_senda_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_social_media_links_platform";
  DROP TYPE "public"."enum_footer_footer_senda_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_font_family";`)
}
