import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_feature1_template_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_feature1_template_cards_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "pages_blocks_feature1_template_cards" ADD COLUMN "link_type" "enum_pages_blocks_feature1_template_cards_link_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_feature1_template_cards" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "pages_blocks_feature1_template_cards" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" ADD COLUMN "link_type" "enum__pages_v_blocks_feature1_template_cards_link_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" ADD COLUMN "link_url" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_feature1_template_cards" DROP COLUMN "link_type";
  ALTER TABLE "pages_blocks_feature1_template_cards" DROP COLUMN "link_new_tab";
  ALTER TABLE "pages_blocks_feature1_template_cards" DROP COLUMN "link_url";
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" DROP COLUMN "link_type";
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" DROP COLUMN "link_new_tab";
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" DROP COLUMN "link_url";
  DROP TYPE "public"."enum_pages_blocks_feature1_template_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_feature1_template_cards_link_type";`)
}
