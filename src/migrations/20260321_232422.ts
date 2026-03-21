import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header" ADD COLUMN "navbar_senda_config_use_font_group" boolean DEFAULT false;
  ALTER TABLE "header" ADD COLUMN "navbar_senda_config_font_group_id" integer;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_font_group_id_font_groups_id_fk" FOREIGN KEY ("navbar_senda_config_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "header_navbar_senda_config_navbar_senda_config_font_grou_idx" ON "header" USING btree ("navbar_senda_config_font_group_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header" DROP CONSTRAINT "header_navbar_senda_config_font_group_id_font_groups_id_fk";
  
  DROP INDEX "header_navbar_senda_config_navbar_senda_config_font_grou_idx";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_use_font_group";
  ALTER TABLE "header" DROP COLUMN "navbar_senda_config_font_group_id";`)
}
