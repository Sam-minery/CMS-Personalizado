import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-auto'::text;
  DROP TYPE "public"."enum_pages_blocks_layout_grid_height";
  CREATE TYPE "public"."enum_pages_blocks_layout_grid_height" AS ENUM('h-auto', 'h-screen', 'h-[50vh]', 'h-[75vh]');
  ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-auto'::"public"."enum_pages_blocks_layout_grid_height";
  ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE "public"."enum_pages_blocks_layout_grid_height" USING "height"::"public"."enum_pages_blocks_layout_grid_height";
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-auto'::text;
  DROP TYPE "public"."enum__pages_v_blocks_layout_grid_height";
  CREATE TYPE "public"."enum__pages_v_blocks_layout_grid_height" AS ENUM('h-auto', 'h-screen', 'h-[50vh]', 'h-[75vh]');
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-auto'::"public"."enum__pages_v_blocks_layout_grid_height";
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE "public"."enum__pages_v_blocks_layout_grid_height" USING "height"::"public"."enum__pages_v_blocks_layout_grid_height";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-screen'::text;
  DROP TYPE "public"."enum_pages_blocks_layout_grid_height";
  CREATE TYPE "public"."enum_pages_blocks_layout_grid_height" AS ENUM('h-screen', 'h-auto', 'h-[50vh]', 'h-[75vh]');
  ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-screen'::"public"."enum_pages_blocks_layout_grid_height";
  ALTER TABLE "pages_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE "public"."enum_pages_blocks_layout_grid_height" USING "height"::"public"."enum_pages_blocks_layout_grid_height";
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-screen'::text;
  DROP TYPE "public"."enum__pages_v_blocks_layout_grid_height";
  CREATE TYPE "public"."enum__pages_v_blocks_layout_grid_height" AS ENUM('h-screen', 'h-auto', 'h-[50vh]', 'h-[75vh]');
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DEFAULT 'h-screen'::"public"."enum__pages_v_blocks_layout_grid_height";
  ALTER TABLE "_pages_v_blocks_layout_grid" ALTER COLUMN "height" SET DATA TYPE "public"."enum__pages_v_blocks_layout_grid_height" USING "height"::"public"."enum__pages_v_blocks_layout_grid_height";`)
}
