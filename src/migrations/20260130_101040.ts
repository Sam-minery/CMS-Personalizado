import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner2_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_banner2_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  ALTER TABLE "pages_blocks_banner2" DROP CONSTRAINT "pages_blocks_banner2_logo_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_banner2" DROP CONSTRAINT "_pages_v_blocks_banner2_logo_media_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_banner2_logo_logo_media_image_idx";
  DROP INDEX "_pages_v_blocks_banner2_logo_logo_media_image_idx";
  ALTER TABLE "pages_blocks_banner2" ALTER COLUMN "logo_url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_banner2" ALTER COLUMN "logo_url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "content" jsonb;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "logo_id" integer;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "background_color" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "text_color" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_background_color" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_text_color" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "font_family" "enum_pages_blocks_banner2_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "content" jsonb;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "logo_id" integer;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_background_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "font_family" "enum__pages_v_blocks_banner2_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD CONSTRAINT "pages_blocks_banner2_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner2" ADD CONSTRAINT "pages_blocks_banner2_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner2" ADD CONSTRAINT "_pages_v_blocks_banner2_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner2" ADD CONSTRAINT "_pages_v_blocks_banner2_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner2_logo_idx" ON "pages_blocks_banner2" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner2_custom_font_file_idx" ON "pages_blocks_banner2" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_banner2_logo_idx" ON "_pages_v_blocks_banner2" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner2_custom_font_file_idx" ON "_pages_v_blocks_banner2" USING btree ("custom_font_file_id");
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "heading";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "logo_use_media";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "logo_media_image_id";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "logo_src";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "logo_alt";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "heading";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "description";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "logo_use_media";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "logo_media_image_id";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "logo_src";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "logo_alt";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner2" DROP CONSTRAINT "pages_blocks_banner2_logo_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_banner2" DROP CONSTRAINT "pages_blocks_banner2_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_banner2" DROP CONSTRAINT "_pages_v_blocks_banner2_logo_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_banner2" DROP CONSTRAINT "_pages_v_blocks_banner2_custom_font_file_id_fonts_id_fk";
  
  DROP INDEX "pages_blocks_banner2_logo_idx";
  DROP INDEX "pages_blocks_banner2_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_banner2_logo_idx";
  DROP INDEX "_pages_v_blocks_banner2_custom_font_file_idx";
  ALTER TABLE "pages_blocks_banner2" ALTER COLUMN "logo_url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_banner2" ALTER COLUMN "logo_url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "heading" varchar DEFAULT 'Medium length banner heading goes here';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "logo_use_media" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "logo_media_image_id" integer;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "logo_alt" varchar DEFAULT 'Relume logo';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "heading" varchar DEFAULT 'Medium length banner heading goes here';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "logo_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "logo_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "logo_alt" varchar DEFAULT 'Relume logo';
  ALTER TABLE "pages_blocks_banner2" ADD CONSTRAINT "pages_blocks_banner2_logo_media_image_id_media_id_fk" FOREIGN KEY ("logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner2" ADD CONSTRAINT "_pages_v_blocks_banner2_logo_media_image_id_media_id_fk" FOREIGN KEY ("logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner2_logo_logo_media_image_idx" ON "pages_blocks_banner2" USING btree ("logo_media_image_id");
  CREATE INDEX "_pages_v_blocks_banner2_logo_logo_media_image_idx" ON "_pages_v_blocks_banner2" USING btree ("logo_media_image_id");
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "content";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "logo_id";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_background_color";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_text_color";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "content";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "logo_id";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_background_color";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_text_color";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "custom_font_name";
  DROP TYPE "public"."enum_pages_blocks_banner2_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_banner2_font_family";`)
}
