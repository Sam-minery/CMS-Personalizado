import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_spotlight_text_color" AS ENUM('white', 'black');
  CREATE TYPE "public"."enum__pages_v_blocks_spotlight_text_color" AS ENUM('white', 'black');
  ALTER TABLE "pages_blocks_spotlight" ADD COLUMN "text_color" "enum_pages_blocks_spotlight_text_color" DEFAULT 'white';
  ALTER TABLE "_pages_v_blocks_spotlight" ADD COLUMN "text_color" "enum__pages_v_blocks_spotlight_text_color" DEFAULT 'white';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_spotlight" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_spotlight" DROP COLUMN "text_color";
  DROP TYPE "public"."enum_pages_blocks_spotlight_text_color";
  DROP TYPE "public"."enum__pages_v_blocks_spotlight_text_color";`)
}
