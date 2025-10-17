import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_form_custom_2" ADD COLUMN "logo_image_id" integer;
  ALTER TABLE "_pages_v_blocks_form_custom_2" ADD COLUMN "logo_image_id" integer;
  ALTER TABLE "pages_blocks_form_custom_2" ADD CONSTRAINT "pages_blocks_form_custom_2_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_form_custom_2_logo_logo_image_idx" ON "pages_blocks_form_custom_2" USING btree ("logo_image_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_logo_logo_image_idx" ON "_pages_v_blocks_form_custom_2" USING btree ("logo_image_id");
  ALTER TABLE "pages_blocks_form_custom_2" DROP COLUMN "logo_src";
  ALTER TABLE "_pages_v_blocks_form_custom_2" DROP COLUMN "logo_src";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_form_custom_2" DROP CONSTRAINT "pages_blocks_form_custom_2_logo_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_form_custom_2" DROP CONSTRAINT "_pages_v_blocks_form_custom_2_logo_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_form_custom_2_logo_logo_image_idx";
  DROP INDEX "_pages_v_blocks_form_custom_2_logo_logo_image_idx";
  ALTER TABLE "pages_blocks_form_custom_2" ADD COLUMN "logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "_pages_v_blocks_form_custom_2" ADD COLUMN "logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "pages_blocks_form_custom_2" DROP COLUMN "logo_image_id";
  ALTER TABLE "_pages_v_blocks_form_custom_2" DROP COLUMN "logo_image_id";`)
}
