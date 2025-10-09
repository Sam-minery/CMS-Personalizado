import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "glowing_star_card" DROP COLUMN "star_color";
  ALTER TABLE "glowing_star_card" DROP COLUMN "grid_size";
  ALTER TABLE "_glowing_star_card_v" DROP COLUMN "star_color";
  ALTER TABLE "_glowing_star_card_v" DROP COLUMN "grid_size";
  DROP TYPE "public"."enum_glowing_star_card_star_color";
  DROP TYPE "public"."enum_glowing_star_card_grid_size";
  DROP TYPE "public"."enum__glowing_star_card_v_star_color";
  DROP TYPE "public"."enum__glowing_star_card_v_grid_size";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_glowing_star_card_star_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum_glowing_star_card_grid_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__glowing_star_card_v_star_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum__glowing_star_card_v_grid_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  ALTER TABLE "glowing_star_card" ADD COLUMN "star_color" "enum_glowing_star_card_star_color" DEFAULT 'blue';
  ALTER TABLE "glowing_star_card" ADD COLUMN "grid_size" "enum_glowing_star_card_grid_size" DEFAULT 'medium';
  ALTER TABLE "_glowing_star_card_v" ADD COLUMN "star_color" "enum__glowing_star_card_v_star_color" DEFAULT 'blue';
  ALTER TABLE "_glowing_star_card_v" ADD COLUMN "grid_size" "enum__glowing_star_card_v_grid_size" DEFAULT 'medium';`)
}
