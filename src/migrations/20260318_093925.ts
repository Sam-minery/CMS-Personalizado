import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_button_use_vidiv_agent" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_button_use_vidiv_agent" boolean DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_button_use_vidiv_agent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_button_use_vidiv_agent";`)
}
