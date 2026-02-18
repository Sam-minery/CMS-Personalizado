import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "comparison_1" ADD COLUMN "content" jsonb;
  ALTER TABLE "comparison_1" ADD COLUMN "background_color" varchar;
  ALTER TABLE "comparison_1" ADD COLUMN "text_color" varchar;
  ALTER TABLE "comparison_1" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "comparison_1" ADD COLUMN "button_background_color" varchar;
  ALTER TABLE "comparison_1" ADD COLUMN "button_text_color" varchar;
  ALTER TABLE "_comparison_1_v" ADD COLUMN "content" jsonb;
  ALTER TABLE "_comparison_1_v" ADD COLUMN "background_color" varchar;
  ALTER TABLE "_comparison_1_v" ADD COLUMN "text_color" varchar;
  ALTER TABLE "_comparison_1_v" ADD COLUMN "bold_text_color" varchar;
  ALTER TABLE "_comparison_1_v" ADD COLUMN "button_background_color" varchar;
  ALTER TABLE "_comparison_1_v" ADD COLUMN "button_text_color" varchar;
  ALTER TABLE "comparison_1_comparison_products" DROP COLUMN "title";
  ALTER TABLE "comparison_1" DROP COLUMN "tagline";
  ALTER TABLE "comparison_1" DROP COLUMN "heading";
  ALTER TABLE "comparison_1" DROP COLUMN "description";
  ALTER TABLE "_comparison_1_v_comparison_products" DROP COLUMN "title";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "tagline";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "heading";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "comparison_1_comparison_products" ADD COLUMN "title" varchar DEFAULT 'Product comparison';
  ALTER TABLE "comparison_1" ADD COLUMN "tagline" varchar DEFAULT 'Tagline';
  ALTER TABLE "comparison_1" ADD COLUMN "heading" varchar DEFAULT 'Short heading goes here';
  ALTER TABLE "comparison_1" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "_comparison_1_v_comparison_products" ADD COLUMN "title" varchar DEFAULT 'Product comparison';
  ALTER TABLE "_comparison_1_v" ADD COLUMN "tagline" varchar DEFAULT 'Tagline';
  ALTER TABLE "_comparison_1_v" ADD COLUMN "heading" varchar DEFAULT 'Short heading goes here';
  ALTER TABLE "_comparison_1_v" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  ALTER TABLE "comparison_1" DROP COLUMN "content";
  ALTER TABLE "comparison_1" DROP COLUMN "background_color";
  ALTER TABLE "comparison_1" DROP COLUMN "text_color";
  ALTER TABLE "comparison_1" DROP COLUMN "bold_text_color";
  ALTER TABLE "comparison_1" DROP COLUMN "button_background_color";
  ALTER TABLE "comparison_1" DROP COLUMN "button_text_color";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "content";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "background_color";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "text_color";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "bold_text_color";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "button_background_color";
  ALTER TABLE "_comparison_1_v" DROP COLUMN "button_text_color";`)
}
