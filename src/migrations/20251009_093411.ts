import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_form_custom_2_submissions_source" ADD VALUE 'banner1';
  ALTER TABLE "pages_blocks_banner1" ALTER COLUMN "logo_url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_banner1" ALTER COLUMN "logo_url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "logo_id" integer;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "logo_id" integer;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner1_logo_idx" ON "pages_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner1_logo_idx" ON "_pages_v_blocks_banner1" USING btree ("logo_id");
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "logo_src";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "logo_alt";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "logo_src";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "logo_alt";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner1" DROP CONSTRAINT "pages_blocks_banner1_logo_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_banner1" DROP CONSTRAINT "_pages_v_blocks_banner1_logo_id_media_id_fk";
  
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE text;
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2'::text;
  DROP TYPE "public"."enum_form_custom_2_submissions_source";
  CREATE TYPE "public"."enum_form_custom_2_submissions_source" AS ENUM('form-custom-2', 'multi-form-2');
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2'::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE "public"."enum_form_custom_2_submissions_source" USING "source"::"public"."enum_form_custom_2_submissions_source";
  DROP INDEX "pages_blocks_banner1_logo_idx";
  DROP INDEX "_pages_v_blocks_banner1_logo_idx";
  ALTER TABLE "pages_blocks_banner1" ALTER COLUMN "logo_url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_banner1" ALTER COLUMN "logo_url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg';
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "logo_alt" varchar DEFAULT 'Relume logo';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "logo_alt" varchar DEFAULT 'Relume logo';
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "logo_id";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "logo_id";`)
}
