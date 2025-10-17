import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_navbar1_config_nav_links_sub_menu_links" DROP COLUMN "link_label";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "header_navbar1_config_nav_links_sub_menu_links" ADD COLUMN "link_label" varchar;`)
}
