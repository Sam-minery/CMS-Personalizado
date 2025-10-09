import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_glowing_star_card_grid_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__glowing_star_card_v_grid_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  ALTER TABLE "glowing_star_card" ADD COLUMN "grid_size" "enum_glowing_star_card_grid_size" DEFAULT 'medium';
  ALTER TABLE "_glowing_star_card_v" ADD COLUMN "grid_size" "enum__glowing_star_card_v_grid_size" DEFAULT 'medium';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "glowing_star_card" DROP COLUMN "grid_size";
  ALTER TABLE "_glowing_star_card_v" DROP COLUMN "grid_size";
  DROP TYPE "public"."enum_glowing_star_card_grid_size";
  DROP TYPE "public"."enum__glowing_star_card_v_grid_size";`)
}
