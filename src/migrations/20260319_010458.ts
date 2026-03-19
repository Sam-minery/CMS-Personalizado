import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_font_group_id" integer;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_font_group_id" integer;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("hero_hero_senda_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hero_senda_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_hero_hero_senda_font_group_idx" ON "pages" USING btree ("hero_hero_senda_font_group_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_hero_senda_font_group_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_font_group_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_senda_font_group_id_font_groups_id_fk";
  
  DROP INDEX "pages_hero_hero_hero_senda_font_group_idx";
  DROP INDEX "_pages_v_version_hero_version_hero_hero_senda_font_group_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_use_font_group";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_font_group_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_use_font_group";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_font_group_id";`)
}
