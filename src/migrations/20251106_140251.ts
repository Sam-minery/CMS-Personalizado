import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Paso 1: Eliminar los DEFAULT que usan el enum antiguo
  await db.execute(sql`
    ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" DROP DEFAULT;
    ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" DROP DEFAULT;
  `)

  // Paso 2: Convertir a text primero
  await db.execute(sql`
    ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE text USING "grid_cols"::text;
    ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE text USING "grid_cols"::text;
  `)

  // Paso 3: Convertir los valores antiguos a los nuevos valores numéricos
  await db.execute(sql`
    UPDATE "pages_blocks_glare_card" 
    SET "grid_cols" = CASE
      WHEN "grid_cols" = 'grid-cols-1' THEN '1'
      WHEN "grid_cols" = 'grid-cols-1 md:grid-cols-2' THEN '2'
      WHEN "grid_cols" = 'grid-cols-1 md:grid-cols-3' THEN '3'
      WHEN "grid_cols" = 'grid-cols-1 md:grid-cols-4' THEN '4'
      WHEN "grid_cols" = 'grid-cols-2' THEN '2'
      WHEN "grid_cols" = 'grid-cols-3' THEN '3'
      WHEN "grid_cols" = 'grid-cols-4' THEN '4'
      ELSE '3'
    END
    WHERE "grid_cols" IS NOT NULL;

    UPDATE "_pages_v_blocks_glare_card" 
    SET "grid_cols" = CASE
      WHEN "grid_cols" = 'grid-cols-1' THEN '1'
      WHEN "grid_cols" = 'grid-cols-1 md:grid-cols-2' THEN '2'
      WHEN "grid_cols" = 'grid-cols-1 md:grid-cols-3' THEN '3'
      WHEN "grid_cols" = 'grid-cols-1 md:grid-cols-4' THEN '4'
      WHEN "grid_cols" = 'grid-cols-2' THEN '2'
      WHEN "grid_cols" = 'grid-cols-3' THEN '3'
      WHEN "grid_cols" = 'grid-cols-4' THEN '4'
      ELSE '3'
    END
    WHERE "grid_cols" IS NOT NULL;
  `)

  // Paso 4: Ahora podemos eliminar los tipos enum antiguos
  await db.execute(sql`
    DROP TYPE IF EXISTS "public"."enum_pages_blocks_glare_card_grid_cols";
    DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_glare_card_grid_cols";
  `)

  // Paso 5: Crear el nuevo enum y convertir el tipo
  await db.execute(sql`
    CREATE TYPE "public"."enum_pages_blocks_glare_card_grid_cols" AS ENUM('1', '2', '3', '4');
    CREATE TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols" AS ENUM('1', '2', '3', '4');
    
    ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE "public"."enum_pages_blocks_glare_card_grid_cols" USING "grid_cols"::"public"."enum_pages_blocks_glare_card_grid_cols";
    ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DEFAULT '3'::"public"."enum_pages_blocks_glare_card_grid_cols";
    
    ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols" USING "grid_cols"::"public"."enum__pages_v_blocks_glare_card_grid_cols";
    ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DEFAULT '3'::"public"."enum__pages_v_blocks_glare_card_grid_cols";
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DEFAULT 'grid-cols-1 md:grid-cols-3'::text;
  DROP TYPE "public"."enum_pages_blocks_glare_card_grid_cols";
  CREATE TYPE "public"."enum_pages_blocks_glare_card_grid_cols" AS ENUM('grid-cols-1', 'grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-1 md:grid-cols-4', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4');
  ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DEFAULT 'grid-cols-1 md:grid-cols-3'::"public"."enum_pages_blocks_glare_card_grid_cols";
  ALTER TABLE "pages_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE "public"."enum_pages_blocks_glare_card_grid_cols" USING "grid_cols"::"public"."enum_pages_blocks_glare_card_grid_cols";
  ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DEFAULT 'grid-cols-1 md:grid-cols-3'::text;
  DROP TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols";
  CREATE TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols" AS ENUM('grid-cols-1', 'grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-1 md:grid-cols-4', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4');
  ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DEFAULT 'grid-cols-1 md:grid-cols-3'::"public"."enum__pages_v_blocks_glare_card_grid_cols";
  ALTER TABLE "_pages_v_blocks_glare_card" ALTER COLUMN "grid_cols" SET DATA TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols" USING "grid_cols"::"public"."enum__pages_v_blocks_glare_card_grid_cols";`)
}
