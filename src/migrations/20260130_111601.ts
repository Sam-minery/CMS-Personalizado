import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner1_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner2_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner3_buttons_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner2_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner3_buttons_type" AS ENUM('reference', 'custom');
  ALTER TABLE "pages_blocks_banner3_buttons" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_type" "enum_pages_blocks_banner1_button_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_new_tab" boolean;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_url" varchar;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_label" varchar;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_button_submits_form" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_type" "enum_pages_blocks_banner2_button_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_new_tab" boolean;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_url" varchar;
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_label" varchar;
  ALTER TABLE "pages_blocks_banner3_buttons" ADD COLUMN "type" "enum_pages_blocks_banner3_buttons_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_banner3_buttons" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "pages_blocks_banner3_buttons" ADD COLUMN "label" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_type" "enum__pages_v_blocks_banner1_button_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_url" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_label" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_button_submits_form" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_type" "enum__pages_v_blocks_banner2_button_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_url" varchar;
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_label" varchar;
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ADD COLUMN "type" "enum__pages_v_blocks_banner3_buttons_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ADD COLUMN "new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ADD COLUMN "label" varchar;
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_title";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_title";
  ALTER TABLE "pages_blocks_banner3_buttons" DROP COLUMN "title";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_title";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_title";
  ALTER TABLE "_pages_v_blocks_banner3_buttons" DROP COLUMN "title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner3_buttons" ALTER COLUMN "url" SET DEFAULT '#';
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ALTER COLUMN "url" SET DEFAULT '#';
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "button_title" varchar DEFAULT 'Sign up';
  ALTER TABLE "pages_blocks_banner2" ADD COLUMN "button_title" varchar DEFAULT 'Button';
  ALTER TABLE "pages_blocks_banner3_buttons" ADD COLUMN "title" varchar DEFAULT 'Button';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "button_title" varchar DEFAULT 'Sign up';
  ALTER TABLE "_pages_v_blocks_banner2" ADD COLUMN "button_title" varchar DEFAULT 'Button';
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ADD COLUMN "title" varchar DEFAULT 'Button';
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_type";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_new_tab";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_url";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_label";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "button_button_submits_form";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_type";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_new_tab";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_url";
  ALTER TABLE "pages_blocks_banner2" DROP COLUMN "button_label";
  ALTER TABLE "pages_blocks_banner3_buttons" DROP COLUMN "type";
  ALTER TABLE "pages_blocks_banner3_buttons" DROP COLUMN "new_tab";
  ALTER TABLE "pages_blocks_banner3_buttons" DROP COLUMN "label";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_type";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_new_tab";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_url";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_label";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "button_button_submits_form";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_type";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_new_tab";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_url";
  ALTER TABLE "_pages_v_blocks_banner2" DROP COLUMN "button_label";
  ALTER TABLE "_pages_v_blocks_banner3_buttons" DROP COLUMN "type";
  ALTER TABLE "_pages_v_blocks_banner3_buttons" DROP COLUMN "new_tab";
  ALTER TABLE "_pages_v_blocks_banner3_buttons" DROP COLUMN "label";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_type";
  DROP TYPE "public"."enum_pages_blocks_banner2_button_type";
  DROP TYPE "public"."enum_pages_blocks_banner3_buttons_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner2_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner3_buttons_type";`)
}
