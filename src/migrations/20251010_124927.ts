import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "comparison_1" ADD COLUMN "comparison_title" varchar DEFAULT 'Product comparison';
  ALTER TABLE "_comparison_1_v" ADD COLUMN "comparison_title" varchar DEFAULT 'Product comparison';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "comparison_1" DROP COLUMN "comparison_title";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "comparison_title";`)
}
