import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_container_scroll_animation_size" AS ENUM('auto', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_container_scroll_animation_size" AS ENUM('auto', 'sm', 'md', 'lg', 'xl');
  ALTER TABLE "pages_blocks_container_scroll_animation" ADD COLUMN "size" "enum_pages_blocks_container_scroll_animation_size" DEFAULT 'auto';
  ALTER TABLE "_pages_v_blocks_container_scroll_animation" ADD COLUMN "size" "enum__pages_v_blocks_container_scroll_animation_size" DEFAULT 'auto';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_container_scroll_animation" DROP COLUMN "size";
  ALTER TABLE "_pages_v_blocks_container_scroll_animation" DROP COLUMN "size";
  DROP TYPE "public"."enum_pages_blocks_container_scroll_animation_size";
  DROP TYPE "public"."enum__pages_v_blocks_container_scroll_animation_size";`)
}
