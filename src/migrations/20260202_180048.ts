import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_post_header1_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_blog_post_header2_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_blog_post_header3_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header3_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_blog_post_header5_social_media_links_icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header5_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_social_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__blog_post_header2_social_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__blog_post_header3_social_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header3_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__blog_post_header5_v_social_media_links_icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__blog_post_header5_v_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "blog_post_header5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_type" "enum_blog_post_header5_social_media_links_icon_type" DEFAULT 'link',
  	"link_type" "enum_blog_post_header5_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "_blog_post_header5_v_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_type" "enum__blog_post_header5_v_social_media_links_icon_type" DEFAULT 'link',
  	"link_type" "enum__blog_post_header5_v_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_blocks_blog_post_header2" DROP CONSTRAINT "pages_blocks_blog_post_header2_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_blog_post_header3" DROP CONSTRAINT "pages_blocks_blog_post_header3_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP CONSTRAINT "_pages_v_blocks_blog_post_header2_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP CONSTRAINT "_pages_v_blocks_blog_post_header3_image_media_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_blog_post_header2_image_image_media_image_idx";
  DROP INDEX "pages_blocks_blog_post_header3_image_image_media_image_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header2_image_image_media_imag_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header3_image_image_media_imag_idx";
  ALTER TABLE "blog_post_header1_social_links" ADD COLUMN "link_type" "enum_blog_post_header1_social_links_link_type" DEFAULT 'reference';
  ALTER TABLE "blog_post_header1_social_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "blog_post_header1_social_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "blog_post_header1" ADD COLUMN "content" jsonb;
  ALTER TABLE "blog_post_header1" ADD COLUMN "background_color" varchar;
  ALTER TABLE "blog_post_header1" ADD COLUMN "text_color" varchar;
  ALTER TABLE "blog_post_header1" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "blog_post_header1" ADD COLUMN "font_family" "enum_blog_post_header1_font_family" DEFAULT 'default';
  ALTER TABLE "blog_post_header1" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "blog_post_header1" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "blog_post_header1" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "blog_post_header2_social_links" ADD COLUMN "link_type" "enum_blog_post_header2_social_links_link_type" DEFAULT 'reference';
  ALTER TABLE "blog_post_header2_social_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "blog_post_header2_social_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "image_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "background_color" varchar;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "text_color" varchar;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "font_family" "enum_pages_blocks_blog_post_header2_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "blog_post_header3_social_links" ADD COLUMN "link_type" "enum_blog_post_header3_social_links_link_type" DEFAULT 'reference';
  ALTER TABLE "blog_post_header3_social_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "blog_post_header3_social_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "image_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "share_label" jsonb;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "background_color" varchar;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "text_color" varchar;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "font_family" "enum_pages_blocks_blog_post_header3_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "blog_post_header5" ADD COLUMN "content" jsonb;
  ALTER TABLE "blog_post_header5" ADD COLUMN "background_color" varchar;
  ALTER TABLE "blog_post_header5" ADD COLUMN "text_color" varchar;
  ALTER TABLE "blog_post_header5" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_blog_post_header1_social_links_v" ADD COLUMN "link_type" "enum__blog_post_header1_social_links_v_link_type" DEFAULT 'reference';
  ALTER TABLE "_blog_post_header1_social_links_v" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_blog_post_header1_social_links_v" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "content" jsonb;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "font_family" "enum__blog_post_header1_v_font_family" DEFAULT 'default';
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_blog_post_header2_social_links_v" ADD COLUMN "link_type" "enum__blog_post_header2_social_links_v_link_type" DEFAULT 'reference';
  ALTER TABLE "_blog_post_header2_social_links_v" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_blog_post_header2_social_links_v" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "image_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "font_family" "enum__pages_v_blocks_blog_post_header2_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_blog_post_header3_social_links_v" ADD COLUMN "link_type" "enum__blog_post_header3_social_links_v_link_type" DEFAULT 'reference';
  ALTER TABLE "_blog_post_header3_social_links_v" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_blog_post_header3_social_links_v" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "image_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "share_label" jsonb;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "font_family" "enum__pages_v_blocks_blog_post_header3_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_blog_post_header5_v" ADD COLUMN "content" jsonb;
  ALTER TABLE "_blog_post_header5_v" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_blog_post_header5_v" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_blog_post_header5_v" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "blog_post_header5_social_media_links" ADD CONSTRAINT "blog_post_header5_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v_social_media_links" ADD CONSTRAINT "_blog_post_header5_v_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header5_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blog_post_header5_social_media_links_order_idx" ON "blog_post_header5_social_media_links" USING btree ("_order");
  CREATE INDEX "blog_post_header5_social_media_links_parent_id_idx" ON "blog_post_header5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header5_v_social_media_links_order_idx" ON "_blog_post_header5_v_social_media_links" USING btree ("_order");
  CREATE INDEX "_blog_post_header5_v_social_media_links_parent_id_idx" ON "_blog_post_header5_v_social_media_links" USING btree ("_parent_id");
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "blog_post_header1_custom_font_file_idx" ON "blog_post_header1" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_blog_post_header2_image_idx" ON "pages_blocks_blog_post_header2" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog_post_header2_custom_font_file_idx" ON "pages_blocks_blog_post_header2" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_blog_post_header3_image_idx" ON "pages_blocks_blog_post_header3" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog_post_header3_custom_font_file_idx" ON "pages_blocks_blog_post_header3" USING btree ("custom_font_file_id");
  CREATE INDEX "_blog_post_header1_v_custom_font_file_idx" ON "_blog_post_header1_v" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_image_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_custom_font_file_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_image_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_custom_font_file_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("custom_font_file_id");
  ALTER TABLE "blog_post_header1_social_links" DROP COLUMN "url";
  ALTER TABLE "blog_post_header1" DROP COLUMN "heading";
  ALTER TABLE "blog_post_header2_social_links" DROP COLUMN "url";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "image_use_media";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "image_media_image_id";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "image_src";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "image_alt";
  ALTER TABLE "blog_post_header3_social_links" DROP COLUMN "url";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "image_use_media";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "image_media_image_id";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "image_src";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "image_alt";
  ALTER TABLE "blog_post_header5" DROP COLUMN "heading";
  ALTER TABLE "_blog_post_header1_social_links_v" DROP COLUMN "url";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "heading";
  ALTER TABLE "_blog_post_header2_social_links_v" DROP COLUMN "url";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "image_use_media";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "image_media_image_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "image_src";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "image_alt";
  ALTER TABLE "_blog_post_header3_social_links_v" DROP COLUMN "url";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "image_use_media";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "image_media_image_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "image_src";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "image_alt";
  ALTER TABLE "_blog_post_header5_v" DROP COLUMN "heading";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blog_post_header5_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_blog_post_header5_v_social_media_links" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "blog_post_header5_social_media_links" CASCADE;
  DROP TABLE "_blog_post_header5_v_social_media_links" CASCADE;
  ALTER TABLE "blog_post_header1" DROP CONSTRAINT "blog_post_header1_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "pages_blocks_blog_post_header2" DROP CONSTRAINT "pages_blocks_blog_post_header2_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_blog_post_header2" DROP CONSTRAINT "pages_blocks_blog_post_header2_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "pages_blocks_blog_post_header3" DROP CONSTRAINT "pages_blocks_blog_post_header3_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_blog_post_header3" DROP CONSTRAINT "pages_blocks_blog_post_header3_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_blog_post_header1_v" DROP CONSTRAINT "_blog_post_header1_v_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP CONSTRAINT "_pages_v_blocks_blog_post_header2_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP CONSTRAINT "_pages_v_blocks_blog_post_header2_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP CONSTRAINT "_pages_v_blocks_blog_post_header3_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP CONSTRAINT "_pages_v_blocks_blog_post_header3_custom_font_file_id_fonts_id_fk";
  
  DROP INDEX "blog_post_header1_custom_font_file_idx";
  DROP INDEX "pages_blocks_blog_post_header2_image_idx";
  DROP INDEX "pages_blocks_blog_post_header2_custom_font_file_idx";
  DROP INDEX "pages_blocks_blog_post_header3_image_idx";
  DROP INDEX "pages_blocks_blog_post_header3_custom_font_file_idx";
  DROP INDEX "_blog_post_header1_v_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header2_image_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header2_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header3_image_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header3_custom_font_file_idx";
  ALTER TABLE "blog_post_header1_social_links" ADD COLUMN "url" varchar;
  ALTER TABLE "blog_post_header1" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "blog_post_header2_social_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "image_use_media" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "image_media_image_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "pages_blocks_blog_post_header2" ADD COLUMN "image_alt" varchar DEFAULT 'Relume placeholder image';
  ALTER TABLE "blog_post_header3_social_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "image_use_media" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "image_media_image_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "image_alt" varchar DEFAULT 'Relume placeholder image';
  ALTER TABLE "blog_post_header5" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "_blog_post_header1_social_links_v" ADD COLUMN "url" varchar;
  ALTER TABLE "_blog_post_header1_v" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "_blog_post_header2_social_links_v" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "image_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "image_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD COLUMN "image_alt" varchar DEFAULT 'Relume placeholder image';
  ALTER TABLE "_blog_post_header3_social_links_v" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "image_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "image_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "image_alt" varchar DEFAULT 'Relume placeholder image';
  ALTER TABLE "_blog_post_header5_v" ADD COLUMN "heading" varchar DEFAULT 'Blog title heading will go here';
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_blog_post_header2_image_image_media_image_idx" ON "pages_blocks_blog_post_header2" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_blog_post_header3_image_image_media_image_idx" ON "pages_blocks_blog_post_header3" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_image_image_media_imag_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_image_image_media_imag_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("image_media_image_id");
  ALTER TABLE "blog_post_header1_social_links" DROP COLUMN "link_type";
  ALTER TABLE "blog_post_header1_social_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "blog_post_header1_social_links" DROP COLUMN "link_url";
  ALTER TABLE "blog_post_header1" DROP COLUMN "content";
  ALTER TABLE "blog_post_header1" DROP COLUMN "background_color";
  ALTER TABLE "blog_post_header1" DROP COLUMN "text_color";
  ALTER TABLE "blog_post_header1" DROP COLUMN "bold_text_color";
  ALTER TABLE "blog_post_header1" DROP COLUMN "font_family";
  ALTER TABLE "blog_post_header1" DROP COLUMN "use_custom_font";
  ALTER TABLE "blog_post_header1" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "blog_post_header1" DROP COLUMN "custom_font_name";
  ALTER TABLE "blog_post_header2_social_links" DROP COLUMN "link_type";
  ALTER TABLE "blog_post_header2_social_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "blog_post_header2_social_links" DROP COLUMN "link_url";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "content";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "image_id";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_blog_post_header2" DROP COLUMN "custom_font_name";
  ALTER TABLE "blog_post_header3_social_links" DROP COLUMN "link_type";
  ALTER TABLE "blog_post_header3_social_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "blog_post_header3_social_links" DROP COLUMN "link_url";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "content";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "image_id";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "share_label";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "custom_font_name";
  ALTER TABLE "blog_post_header5" DROP COLUMN "content";
  ALTER TABLE "blog_post_header5" DROP COLUMN "background_color";
  ALTER TABLE "blog_post_header5" DROP COLUMN "text_color";
  ALTER TABLE "blog_post_header5" DROP COLUMN "bold_text_color";
  ALTER TABLE "_blog_post_header1_social_links_v" DROP COLUMN "link_type";
  ALTER TABLE "_blog_post_header1_social_links_v" DROP COLUMN "link_new_tab";
  ALTER TABLE "_blog_post_header1_social_links_v" DROP COLUMN "link_url";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "content";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "background_color";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "text_color";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "bold_text_color";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "font_family";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "use_custom_font";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_blog_post_header1_v" DROP COLUMN "custom_font_name";
  ALTER TABLE "_blog_post_header2_social_links_v" DROP COLUMN "link_type";
  ALTER TABLE "_blog_post_header2_social_links_v" DROP COLUMN "link_new_tab";
  ALTER TABLE "_blog_post_header2_social_links_v" DROP COLUMN "link_url";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "content";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "image_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DROP COLUMN "custom_font_name";
  ALTER TABLE "_blog_post_header3_social_links_v" DROP COLUMN "link_type";
  ALTER TABLE "_blog_post_header3_social_links_v" DROP COLUMN "link_new_tab";
  ALTER TABLE "_blog_post_header3_social_links_v" DROP COLUMN "link_url";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "content";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "image_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "share_label";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "custom_font_name";
  ALTER TABLE "_blog_post_header5_v" DROP COLUMN "content";
  ALTER TABLE "_blog_post_header5_v" DROP COLUMN "background_color";
  ALTER TABLE "_blog_post_header5_v" DROP COLUMN "text_color";
  ALTER TABLE "_blog_post_header5_v" DROP COLUMN "bold_text_color";
  DROP TYPE "public"."enum_blog_post_header1_social_links_link_type";
  DROP TYPE "public"."enum_blog_post_header1_font_family";
  DROP TYPE "public"."enum_blog_post_header2_social_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_font_family";
  DROP TYPE "public"."enum_blog_post_header3_social_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header3_font_family";
  DROP TYPE "public"."enum_blog_post_header5_social_media_links_icon_type";
  DROP TYPE "public"."enum_blog_post_header5_social_media_links_link_type";
  DROP TYPE "public"."enum__blog_post_header1_social_links_v_link_type";
  DROP TYPE "public"."enum__blog_post_header1_v_font_family";
  DROP TYPE "public"."enum__blog_post_header2_social_links_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_font_family";
  DROP TYPE "public"."enum__blog_post_header3_social_links_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header3_font_family";
  DROP TYPE "public"."enum__blog_post_header5_v_social_media_links_icon_type";
  DROP TYPE "public"."enum__blog_post_header5_v_social_media_links_link_type";`)
}
