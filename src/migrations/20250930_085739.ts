import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DATA TYPE text;
  ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DEFAULT 'link'::text;
  DROP TYPE "public"."enum_evt_hdr_5_filters_size";
  CREATE TYPE "public"."enum_evt_hdr_5_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DEFAULT 'link'::"public"."enum_evt_hdr_5_filters_size";
  ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DATA TYPE "public"."enum_evt_hdr_5_filters_size" USING "size"::"public"."enum_evt_hdr_5_filters_size";
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DATA TYPE text;
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DEFAULT 'link'::text;
  DROP TYPE "public"."enum__evt_hdr_5_v_filters_size";
  CREATE TYPE "public"."enum__evt_hdr_5_v_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DEFAULT 'link'::"public"."enum__evt_hdr_5_v_filters_size";
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DATA TYPE "public"."enum__evt_hdr_5_v_filters_size" USING "size"::"public"."enum__evt_hdr_5_v_filters_size";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DATA TYPE text;
  ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DEFAULT 'sm'::text;
  DROP TYPE "public"."enum_evt_hdr_5_filters_size";
  CREATE TYPE "public"."enum_evt_hdr_5_filters_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DEFAULT 'sm'::"public"."enum_evt_hdr_5_filters_size";
  ALTER TABLE "evt_hdr_5_filters" ALTER COLUMN "size" SET DATA TYPE "public"."enum_evt_hdr_5_filters_size" USING "size"::"public"."enum_evt_hdr_5_filters_size";
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DATA TYPE text;
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DEFAULT 'sm'::text;
  DROP TYPE "public"."enum__evt_hdr_5_v_filters_size";
  CREATE TYPE "public"."enum__evt_hdr_5_v_filters_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DEFAULT 'sm'::"public"."enum__evt_hdr_5_v_filters_size";
  ALTER TABLE "_evt_hdr_5_v_filters" ALTER COLUMN "size" SET DATA TYPE "public"."enum__evt_hdr_5_v_filters_size" USING "size"::"public"."enum__evt_hdr_5_v_filters_size";`)
}
