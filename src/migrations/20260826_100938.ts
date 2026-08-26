import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pd" ADD COLUMN "center_mobile_image" boolean DEFAULT false;
  ALTER TABLE "pd" ADD COLUMN "hide_numbering" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "pages" ADD COLUMN "hero_hd_custom_width_percent_mobile" numeric;
  ALTER TABLE "_pd_v" ADD COLUMN "center_mobile_image" boolean DEFAULT false;
  ALTER TABLE "_pd_v" ADD COLUMN "hide_numbering" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_apply_custom_width" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_custom_width_percent" numeric DEFAULT 100;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hd_custom_width_percent_mobile" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pd" DROP COLUMN "center_mobile_image";
  ALTER TABLE "pd" DROP COLUMN "hide_numbering";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_apply_custom_width";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_custom_width_percent";
  ALTER TABLE "pages" DROP COLUMN "hero_hd_custom_width_percent_mobile";
  ALTER TABLE "_pd_v" DROP COLUMN "center_mobile_image";
  ALTER TABLE "_pd_v" DROP COLUMN "hide_numbering";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_apply_custom_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_custom_width_percent";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hd_custom_width_percent_mobile";`)
}
