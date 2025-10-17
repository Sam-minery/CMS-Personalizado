import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_evt_hdr_5_2_back_link_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_2_back_link_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_5_2_back_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_5_2_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_2_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_back_link_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_back_link_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_back_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_button_size" AS ENUM('sm', 'default', 'lg');
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_variant" SET DEFAULT 'primary'::"public"."enum_evt_hdr_5_2_button_variant";
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_variant" SET DATA TYPE "public"."enum_evt_hdr_5_2_button_variant" USING "button_variant"::"public"."enum_evt_hdr_5_2_button_variant";
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_size" SET DEFAULT 'default'::"public"."enum_evt_hdr_5_2_button_size";
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_size" SET DATA TYPE "public"."enum_evt_hdr_5_2_button_size" USING "button_size"::"public"."enum_evt_hdr_5_2_button_size";
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_variant" SET DEFAULT 'primary'::"public"."enum__evt_hdr_5_v_2_button_variant";
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_variant" SET DATA TYPE "public"."enum__evt_hdr_5_v_2_button_variant" USING "button_variant"::"public"."enum__evt_hdr_5_v_2_button_variant";
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_size" SET DEFAULT 'default'::"public"."enum__evt_hdr_5_v_2_button_size";
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_size" SET DATA TYPE "public"."enum__evt_hdr_5_v_2_button_size" USING "button_size"::"public"."enum__evt_hdr_5_v_2_button_size";
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_title" varchar DEFAULT 'All events';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_variant" "enum_evt_hdr_5_2_back_link_variant" DEFAULT 'primary';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_size" "enum_evt_hdr_5_2_back_link_size" DEFAULT 'default';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_link_type" "enum_evt_hdr_5_2_back_link_link_type" DEFAULT 'reference';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_link_new_tab" boolean;
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_link_url" varchar;
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "countdown_date" timestamp(3) with time zone;
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "countdown_time" varchar DEFAULT '19:00';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "countdown_timezone" varchar DEFAULT 'Europe/Madrid';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_title" varchar DEFAULT 'All events';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_variant" "enum__evt_hdr_5_v_2_back_link_variant" DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_size" "enum__evt_hdr_5_v_2_back_link_size" DEFAULT 'default';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_link_type" "enum__evt_hdr_5_v_2_back_link_link_type" DEFAULT 'reference';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_link_new_tab" boolean;
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_link_url" varchar;
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "countdown_date" timestamp(3) with time zone;
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "countdown_time" varchar DEFAULT '19:00';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "countdown_timezone" varchar DEFAULT 'Europe/Madrid';
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_url";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_button_title";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_button_variant";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_button_size";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "countdown_iso_date";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_url";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_button_title";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_button_variant";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_button_size";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "countdown_iso_date";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_variant" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_variant" SET DEFAULT 'primary';
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_size" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_5_2" ALTER COLUMN "button_size" SET DEFAULT 'md';
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_variant" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_variant" SET DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_size" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_5_v_2" ALTER COLUMN "button_size" SET DEFAULT 'md';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_button_title" varchar DEFAULT 'All events';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_button_variant" varchar DEFAULT 'link';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "back_link_button_size" varchar DEFAULT 'link';
  ALTER TABLE "evt_hdr_5_2" ADD COLUMN "countdown_iso_date" varchar DEFAULT '2024-11-14T01:23:29.000+01:00';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_button_title" varchar DEFAULT 'All events';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_button_variant" varchar DEFAULT 'link';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "back_link_button_size" varchar DEFAULT 'link';
  ALTER TABLE "_evt_hdr_5_v_2" ADD COLUMN "countdown_iso_date" varchar DEFAULT '2024-11-14T01:23:29.000+01:00';
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_title";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_variant";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_size";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_link_type";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_link_new_tab";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "back_link_link_url";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "countdown_date";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "countdown_time";
  ALTER TABLE "evt_hdr_5_2" DROP COLUMN "countdown_timezone";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_title";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_variant";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_size";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_link_type";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_link_new_tab";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "back_link_link_url";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "countdown_date";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "countdown_time";
  ALTER TABLE "_evt_hdr_5_v_2" DROP COLUMN "countdown_timezone";
  DROP TYPE "public"."enum_evt_hdr_5_2_back_link_variant";
  DROP TYPE "public"."enum_evt_hdr_5_2_back_link_size";
  DROP TYPE "public"."enum_evt_hdr_5_2_back_link_link_type";
  DROP TYPE "public"."enum_evt_hdr_5_2_button_variant";
  DROP TYPE "public"."enum_evt_hdr_5_2_button_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_back_link_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_back_link_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_back_link_link_type";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_button_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_button_size";`)
}
