import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_links_4_categories_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_links_4_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_4_v_categories_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_4_v_social_links_link_type" AS ENUM('reference', 'custom');
  ALTER TYPE "public"."enum_links_4_categories_links_variant" ADD VALUE 'default' BEFORE 'secondary';
  ALTER TYPE "public"."enum_links_4_categories_links_variant" ADD VALUE 'destructive';
  ALTER TYPE "public"."enum_links_4_button_variant" ADD VALUE 'default' BEFORE 'secondary';
  ALTER TYPE "public"."enum_links_4_button_variant" ADD VALUE 'destructive';
  ALTER TYPE "public"."enum__links_4_v_categories_links_variant" ADD VALUE 'default' BEFORE 'secondary';
  ALTER TYPE "public"."enum__links_4_v_categories_links_variant" ADD VALUE 'destructive';
  ALTER TYPE "public"."enum__links_4_v_button_variant" ADD VALUE 'default' BEFORE 'secondary';
  ALTER TYPE "public"."enum__links_4_v_button_variant" ADD VALUE 'destructive';
  ALTER TABLE "links_4_categories_links" ADD COLUMN "link_type" "enum_links_4_categories_links_link_type" DEFAULT 'reference';
  ALTER TABLE "links_4_categories_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "links_4_categories_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "links_4_social_links" ADD COLUMN "link_type" "enum_links_4_social_links_link_type" DEFAULT 'reference';
  ALTER TABLE "links_4_social_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "links_4_social_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_links_4_v_categories_links" ADD COLUMN "link_type" "enum__links_4_v_categories_links_link_type" DEFAULT 'reference';
  ALTER TABLE "_links_4_v_categories_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_links_4_v_categories_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_links_4_v_social_links" ADD COLUMN "link_type" "enum__links_4_v_social_links_link_type" DEFAULT 'reference';
  ALTER TABLE "_links_4_v_social_links" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_links_4_v_social_links" ADD COLUMN "link_url" varchar;
  ALTER TABLE "links_4_categories_links" DROP COLUMN "url";
  ALTER TABLE "links_4_social_links" DROP COLUMN "href";
  ALTER TABLE "_links_4_v_categories_links" DROP COLUMN "url";
  ALTER TABLE "_links_4_v_social_links" DROP COLUMN "href";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "links_4_categories_links" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "links_4_categories_links" ALTER COLUMN "variant" SET DEFAULT 'secondary'::text;
  DROP TYPE "public"."enum_links_4_categories_links_variant";
  CREATE TYPE "public"."enum_links_4_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  ALTER TABLE "links_4_categories_links" ALTER COLUMN "variant" SET DEFAULT 'secondary'::"public"."enum_links_4_categories_links_variant";
  ALTER TABLE "links_4_categories_links" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_links_4_categories_links_variant" USING "variant"::"public"."enum_links_4_categories_links_variant";
  ALTER TABLE "links_4" ALTER COLUMN "button_variant" SET DATA TYPE text;
  ALTER TABLE "links_4" ALTER COLUMN "button_variant" SET DEFAULT 'secondary'::text;
  DROP TYPE "public"."enum_links_4_button_variant";
  CREATE TYPE "public"."enum_links_4_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  ALTER TABLE "links_4" ALTER COLUMN "button_variant" SET DEFAULT 'secondary'::"public"."enum_links_4_button_variant";
  ALTER TABLE "links_4" ALTER COLUMN "button_variant" SET DATA TYPE "public"."enum_links_4_button_variant" USING "button_variant"::"public"."enum_links_4_button_variant";
  ALTER TABLE "_links_4_v_categories_links" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "_links_4_v_categories_links" ALTER COLUMN "variant" SET DEFAULT 'secondary'::text;
  DROP TYPE "public"."enum__links_4_v_categories_links_variant";
  CREATE TYPE "public"."enum__links_4_v_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  ALTER TABLE "_links_4_v_categories_links" ALTER COLUMN "variant" SET DEFAULT 'secondary'::"public"."enum__links_4_v_categories_links_variant";
  ALTER TABLE "_links_4_v_categories_links" ALTER COLUMN "variant" SET DATA TYPE "public"."enum__links_4_v_categories_links_variant" USING "variant"::"public"."enum__links_4_v_categories_links_variant";
  ALTER TABLE "_links_4_v" ALTER COLUMN "button_variant" SET DATA TYPE text;
  ALTER TABLE "_links_4_v" ALTER COLUMN "button_variant" SET DEFAULT 'secondary'::text;
  DROP TYPE "public"."enum__links_4_v_button_variant";
  CREATE TYPE "public"."enum__links_4_v_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  ALTER TABLE "_links_4_v" ALTER COLUMN "button_variant" SET DEFAULT 'secondary'::"public"."enum__links_4_v_button_variant";
  ALTER TABLE "_links_4_v" ALTER COLUMN "button_variant" SET DATA TYPE "public"."enum__links_4_v_button_variant" USING "button_variant"::"public"."enum__links_4_v_button_variant";
  ALTER TABLE "links_4_categories_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "links_4_social_links" ADD COLUMN "href" varchar DEFAULT '#';
  ALTER TABLE "_links_4_v_categories_links" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_links_4_v_social_links" ADD COLUMN "href" varchar DEFAULT '#';
  ALTER TABLE "links_4_categories_links" DROP COLUMN "link_type";
  ALTER TABLE "links_4_categories_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "links_4_categories_links" DROP COLUMN "link_url";
  ALTER TABLE "links_4_social_links" DROP COLUMN "link_type";
  ALTER TABLE "links_4_social_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "links_4_social_links" DROP COLUMN "link_url";
  ALTER TABLE "_links_4_v_categories_links" DROP COLUMN "link_type";
  ALTER TABLE "_links_4_v_categories_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "_links_4_v_categories_links" DROP COLUMN "link_url";
  ALTER TABLE "_links_4_v_social_links" DROP COLUMN "link_type";
  ALTER TABLE "_links_4_v_social_links" DROP COLUMN "link_new_tab";
  ALTER TABLE "_links_4_v_social_links" DROP COLUMN "link_url";
  DROP TYPE "public"."enum_links_4_categories_links_link_type";
  DROP TYPE "public"."enum_links_4_social_links_link_type";
  DROP TYPE "public"."enum__links_4_v_categories_links_link_type";
  DROP TYPE "public"."enum__links_4_v_social_links_link_type";`)
}
