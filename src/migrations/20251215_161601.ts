import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'header138' BEFORE 'heroTemplate';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'header138' BEFORE 'heroTemplate';
  ALTER TABLE "pages" ADD COLUMN "hero_header138_heading" varchar DEFAULT 'Medium length hero heading goes here';
  ALTER TABLE "pages" ADD COLUMN "hero_header138_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.';
  ALTER TABLE "pages" ADD COLUMN "hero_header138_first_image_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_header138_first_image_media_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_header138_first_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "pages" ADD COLUMN "hero_header138_first_image_alt" varchar DEFAULT 'Relume placeholder image 1';
  ALTER TABLE "pages" ADD COLUMN "hero_header138_second_image_use_media" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_header138_second_image_media_image_id" integer;
  ALTER TABLE "pages" ADD COLUMN "hero_header138_second_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png';
  ALTER TABLE "pages" ADD COLUMN "hero_header138_second_image_alt" varchar DEFAULT 'Relume placeholder image 2';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_heading" varchar DEFAULT 'Medium length hero heading goes here';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_first_image_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_first_image_media_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_first_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_first_image_alt" varchar DEFAULT 'Relume placeholder image 1';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_second_image_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_second_image_media_image_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_second_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_header138_second_image_alt" varchar DEFAULT 'Relume placeholder image 2';
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_header138_first_image_media_image_id_media_id_fk" FOREIGN KEY ("hero_header138_first_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_header138_second_image_media_image_id_media_id_fk" FOREIGN KEY ("hero_header138_second_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_header138_first_image_media_image_id_media_id_fk" FOREIGN KEY ("version_hero_header138_first_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_header138_second_image_media_image_id_media_id_fk" FOREIGN KEY ("version_hero_header138_second_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_header138_first_image_hero_header138_first_image_media_image_idx" ON "pages" USING btree ("hero_header138_first_image_media_image_id");
  CREATE INDEX "pages_hero_header138_second_image_hero_header138_second_image_media_image_idx" ON "pages" USING btree ("hero_header138_second_image_media_image_id");
  CREATE INDEX "_pages_v_version_hero_header138_first_image_version_hero_header138_first_image_media_image_idx" ON "_pages_v" USING btree ("version_hero_header138_first_image_media_image_id");
  CREATE INDEX "_pages_v_version_hero_header138_second_image_version_hero_header138_second_image_media_image_idx" ON "_pages_v" USING btree ("version_hero_header138_second_image_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_header138_first_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_header138_second_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_header138_first_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_header138_second_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'heroTemplate');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'heroTemplate');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  DROP INDEX "pages_hero_header138_first_image_hero_header138_first_image_media_image_idx";
  DROP INDEX "pages_hero_header138_second_image_hero_header138_second_image_media_image_idx";
  DROP INDEX "_pages_v_version_hero_header138_first_image_version_hero_header138_first_image_media_image_idx";
  DROP INDEX "_pages_v_version_hero_header138_second_image_version_hero_header138_second_image_media_image_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_heading";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_description";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_first_image_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_first_image_media_image_id";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_first_image_src";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_first_image_alt";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_second_image_use_media";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_second_image_media_image_id";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_second_image_src";
  ALTER TABLE "pages" DROP COLUMN "hero_header138_second_image_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_heading";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_description";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_first_image_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_first_image_media_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_first_image_src";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_first_image_alt";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_second_image_use_media";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_second_image_media_image_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_second_image_src";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_header138_second_image_alt";`)
}
