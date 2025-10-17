import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_evt_hdr_6_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_6_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_6_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_6_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_7_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_7_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_7_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_6_v_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_6_v_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_6_v_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_6_v_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_7_v_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_7_v_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_7_v_buttons_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum_evt_hdr_6_buttons_variant";
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_evt_hdr_6_buttons_variant" USING "variant"::"public"."enum_evt_hdr_6_buttons_variant";
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "size" SET DEFAULT 'default'::"public"."enum_evt_hdr_6_buttons_size";
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "size" SET DATA TYPE "public"."enum_evt_hdr_6_buttons_size" USING "size"::"public"."enum_evt_hdr_6_buttons_size";
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum_evt_hdr_7_buttons_variant";
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_evt_hdr_7_buttons_variant" USING "variant"::"public"."enum_evt_hdr_7_buttons_variant";
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "size" SET DEFAULT 'default'::"public"."enum_evt_hdr_7_buttons_size";
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "size" SET DATA TYPE "public"."enum_evt_hdr_7_buttons_size" USING "size"::"public"."enum_evt_hdr_7_buttons_size";
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum__evt_hdr_6_v_buttons_variant";
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum__evt_hdr_6_v_buttons_variant" USING "variant"::"public"."enum__evt_hdr_6_v_buttons_variant";
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "size" SET DEFAULT 'default'::"public"."enum__evt_hdr_6_v_buttons_size";
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "size" SET DATA TYPE "public"."enum__evt_hdr_6_v_buttons_size" USING "size"::"public"."enum__evt_hdr_6_v_buttons_size";
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum__evt_hdr_7_v_buttons_variant";
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum__evt_hdr_7_v_buttons_variant" USING "variant"::"public"."enum__evt_hdr_7_v_buttons_variant";
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "size" SET DEFAULT 'default'::"public"."enum__evt_hdr_7_v_buttons_size";
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "size" SET DATA TYPE "public"."enum__evt_hdr_7_v_buttons_size" USING "size"::"public"."enum__evt_hdr_7_v_buttons_size";
  ALTER TABLE "evt_hdr_6_breadcrumbs" ADD COLUMN "link_type" "enum_evt_hdr_6_breadcrumbs_link_type" DEFAULT 'reference';
  ALTER TABLE "evt_hdr_6_breadcrumbs" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "evt_hdr_6_breadcrumbs" ADD COLUMN "link_url" varchar;
  ALTER TABLE "evt_hdr_6_buttons" ADD COLUMN "link_type" "enum_evt_hdr_6_buttons_link_type" DEFAULT 'reference';
  ALTER TABLE "evt_hdr_6_buttons" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "evt_hdr_6_buttons" ADD COLUMN "link_url" varchar;
  ALTER TABLE "evt_hdr_7_buttons" ADD COLUMN "link_type" "enum_evt_hdr_7_buttons_link_type" DEFAULT 'reference';
  ALTER TABLE "evt_hdr_7_buttons" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "evt_hdr_7_buttons" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" ADD COLUMN "link_type" "enum__evt_hdr_6_v_breadcrumbs_link_type" DEFAULT 'reference';
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_evt_hdr_6_v_buttons" ADD COLUMN "link_type" "enum__evt_hdr_6_v_buttons_link_type" DEFAULT 'reference';
  ALTER TABLE "_evt_hdr_6_v_buttons" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_evt_hdr_6_v_buttons" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_evt_hdr_7_v_buttons" ADD COLUMN "link_type" "enum__evt_hdr_7_v_buttons_link_type" DEFAULT 'reference';
  ALTER TABLE "_evt_hdr_7_v_buttons" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_evt_hdr_7_v_buttons" ADD COLUMN "link_url" varchar;
  ALTER TABLE "evt_hdr_6_breadcrumbs" DROP COLUMN "url";
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" DROP COLUMN "url";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary';
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "size" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_6_buttons" ALTER COLUMN "size" SET DEFAULT 'md';
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary';
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "size" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_7_buttons" ALTER COLUMN "size" SET DEFAULT 'md';
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "size" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_6_v_buttons" ALTER COLUMN "size" SET DEFAULT 'md';
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "variant" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "size" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_7_v_buttons" ALTER COLUMN "size" SET DEFAULT 'md';
  ALTER TABLE "evt_hdr_6_breadcrumbs" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_6_breadcrumbs" DROP COLUMN "link_type";
  ALTER TABLE "evt_hdr_6_breadcrumbs" DROP COLUMN "link_new_tab";
  ALTER TABLE "evt_hdr_6_breadcrumbs" DROP COLUMN "link_url";
  ALTER TABLE "evt_hdr_6_buttons" DROP COLUMN "link_type";
  ALTER TABLE "evt_hdr_6_buttons" DROP COLUMN "link_new_tab";
  ALTER TABLE "evt_hdr_6_buttons" DROP COLUMN "link_url";
  ALTER TABLE "evt_hdr_7_buttons" DROP COLUMN "link_type";
  ALTER TABLE "evt_hdr_7_buttons" DROP COLUMN "link_new_tab";
  ALTER TABLE "evt_hdr_7_buttons" DROP COLUMN "link_url";
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" DROP COLUMN "link_type";
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" DROP COLUMN "link_new_tab";
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" DROP COLUMN "link_url";
  ALTER TABLE "_evt_hdr_6_v_buttons" DROP COLUMN "link_type";
  ALTER TABLE "_evt_hdr_6_v_buttons" DROP COLUMN "link_new_tab";
  ALTER TABLE "_evt_hdr_6_v_buttons" DROP COLUMN "link_url";
  ALTER TABLE "_evt_hdr_7_v_buttons" DROP COLUMN "link_type";
  ALTER TABLE "_evt_hdr_7_v_buttons" DROP COLUMN "link_new_tab";
  ALTER TABLE "_evt_hdr_7_v_buttons" DROP COLUMN "link_url";
  DROP TYPE "public"."enum_evt_hdr_6_breadcrumbs_link_type";
  DROP TYPE "public"."enum_evt_hdr_6_buttons_variant";
  DROP TYPE "public"."enum_evt_hdr_6_buttons_size";
  DROP TYPE "public"."enum_evt_hdr_6_buttons_link_type";
  DROP TYPE "public"."enum_evt_hdr_7_buttons_variant";
  DROP TYPE "public"."enum_evt_hdr_7_buttons_size";
  DROP TYPE "public"."enum_evt_hdr_7_buttons_link_type";
  DROP TYPE "public"."enum__evt_hdr_6_v_breadcrumbs_link_type";
  DROP TYPE "public"."enum__evt_hdr_6_v_buttons_variant";
  DROP TYPE "public"."enum__evt_hdr_6_v_buttons_size";
  DROP TYPE "public"."enum__evt_hdr_6_v_buttons_link_type";
  DROP TYPE "public"."enum__evt_hdr_7_v_buttons_variant";
  DROP TYPE "public"."enum__evt_hdr_7_v_buttons_size";
  DROP TYPE "public"."enum__evt_hdr_7_v_buttons_link_type";`)
}
