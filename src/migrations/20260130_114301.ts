import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TABLE "pages_blocks_banner4_social_media_links" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD COLUMN "type" "enum_pages_blocks_banner4_social_media_links_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "background_color" varchar;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "text_color" varchar;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "font_family" "enum_pages_blocks_banner4_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD COLUMN "type" "enum__pages_v_blocks_banner4_social_media_links_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "font_family" "enum__pages_v_blocks_banner4_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner4_custom_font_file_idx" ON "pages_blocks_banner4" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_banner4_custom_font_file_idx" ON "_pages_v_blocks_banner4" USING btree ("custom_font_file_id");
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner4" DROP CONSTRAINT "pages_blocks_banner4_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_banner4" DROP CONSTRAINT "_pages_v_blocks_banner4_custom_font_file_id_fonts_id_fk";
  
  DROP INDEX "pages_blocks_banner4_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_banner4_custom_font_file_idx";
  ALTER TABLE "pages_blocks_banner4_social_media_links" ALTER COLUMN "url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ALTER COLUMN "url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "heading" varchar DEFAULT 'Medium length banner heading goes here';
  ALTER TABLE "pages_blocks_banner4" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "heading" varchar DEFAULT 'Medium length banner heading goes here';
  ALTER TABLE "_pages_v_blocks_banner4" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "pages_blocks_banner4_social_media_links" DROP COLUMN "type";
  ALTER TABLE "pages_blocks_banner4_social_media_links" DROP COLUMN "new_tab";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "content";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_banner4" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" DROP COLUMN "type";
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" DROP COLUMN "new_tab";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "content";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_banner4" DROP COLUMN "custom_font_name";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_type";
  DROP TYPE "public"."enum_pages_blocks_banner4_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_font_family";`)
}
