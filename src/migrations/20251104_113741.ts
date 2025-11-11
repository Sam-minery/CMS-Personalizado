import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Primero convertir el enum a text, actualizar valores, y luego recrear el enum
  await db.execute(sql`
    ALTER TABLE "pages_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DATA TYPE text;
    UPDATE "pages_blocks_layout_grid_cards" 
    SET "class_name" = 'md:col-span-2' 
    WHERE "class_name" = 'md:col-span-3';
    
    ALTER TABLE "_pages_v_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DATA TYPE text;
    UPDATE "_pages_v_blocks_layout_grid_cards" 
    SET "class_name" = 'md:col-span-2' 
    WHERE "class_name" = 'md:col-span-3';
  `)

  // Ahora cambiar el tipo del enum
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DEFAULT 'md:col-span-1'::text;
  DROP TYPE IF EXISTS "public"."enum_pages_blocks_layout_grid_cards_class_name";
  CREATE TYPE "public"."enum_pages_blocks_layout_grid_cards_class_name" AS ENUM('md:col-span-1', 'md:col-span-2');
  ALTER TABLE "pages_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DEFAULT 'md:col-span-1'::"public"."enum_pages_blocks_layout_grid_cards_class_name";
  ALTER TABLE "pages_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DATA TYPE "public"."enum_pages_blocks_layout_grid_cards_class_name" USING "class_name"::"public"."enum_pages_blocks_layout_grid_cards_class_name";
  ALTER TABLE "_pages_v_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DEFAULT 'md:col-span-1'::text;
  DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_layout_grid_cards_class_name";
  CREATE TYPE "public"."enum__pages_v_blocks_layout_grid_cards_class_name" AS ENUM('md:col-span-1', 'md:col-span-2');
  ALTER TABLE "_pages_v_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DEFAULT 'md:col-span-1'::"public"."enum__pages_v_blocks_layout_grid_cards_class_name";
  ALTER TABLE "_pages_v_blocks_layout_grid_cards" ALTER COLUMN "class_name" SET DATA TYPE "public"."enum__pages_v_blocks_layout_grid_cards_class_name" USING "class_name"::"public"."enum__pages_v_blocks_layout_grid_cards_class_name";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_layout_grid_cards_class_name" ADD VALUE 'md:col-span-3';
  ALTER TYPE "public"."enum__pages_v_blocks_layout_grid_cards_class_name" ADD VALUE 'md:col-span-3';`)
}
