import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_pulse_beams_button_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_button_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  ALTER TABLE "pages_blocks_pulse_beams" ADD COLUMN "button_size" "enum_pages_blocks_pulse_beams_button_size" DEFAULT 'medium';
  ALTER TABLE "_pages_v_blocks_pulse_beams" ADD COLUMN "button_size" "enum__pages_v_blocks_pulse_beams_button_size" DEFAULT 'medium';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_pulse_beams" DROP COLUMN "button_size";
  ALTER TABLE "_pages_v_blocks_pulse_beams" DROP COLUMN "button_size";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_button_size";`)
}
