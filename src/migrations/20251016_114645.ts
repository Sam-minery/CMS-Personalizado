import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header" ADD COLUMN "navbar11_config_logo_image_id" integer;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar11_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar11_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar11_config_logo_navbar11_config_logo_image_idx" ON "header" USING btree ("navbar11_config_logo_image_id");
  ALTER TABLE "header" DROP COLUMN "navbar11_config_logo_src";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header" DROP CONSTRAINT "header_navbar11_config_logo_image_id_media_id_fk";
  
  DROP INDEX "header_navbar11_config_logo_navbar11_config_logo_image_idx";
  ALTER TABLE "header" ADD COLUMN "navbar11_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg';
  ALTER TABLE "header" DROP COLUMN "navbar11_config_logo_image_id";`)
}
