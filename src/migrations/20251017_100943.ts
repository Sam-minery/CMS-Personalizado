import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "evt_1_tabs_content" ADD COLUMN "button_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_1_v_tabs_content" ADD COLUMN "button_url" varchar DEFAULT '#';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "evt_1_tabs_content" DROP COLUMN "button_url";
  ALTER TABLE "_evt_1_v_tabs_content" DROP COLUMN "button_url";`)
}
