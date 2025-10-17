import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner3_buttons" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ADD COLUMN "url" varchar DEFAULT '#';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner3_buttons" DROP COLUMN "url";
  ALTER TABLE "_pages_v_blocks_banner3_buttons" DROP COLUMN "url";`)
}
