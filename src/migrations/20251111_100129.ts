import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_animated_testimonials" DROP COLUMN "image_size";
  ALTER TABLE "_pages_v_blocks_animated_testimonials" DROP COLUMN "image_size";
  DROP TYPE "public"."enum_pages_blocks_animated_testimonials_image_size";
  DROP TYPE "public"."enum__pages_v_blocks_animated_testimonials_image_size";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_animated_testimonials_image_size" AS ENUM('small', 'medium', 'large', 'xlarge', 'xxlarge');
  CREATE TYPE "public"."enum__pages_v_blocks_animated_testimonials_image_size" AS ENUM('small', 'medium', 'large', 'xlarge', 'xxlarge');
  ALTER TABLE "pages_blocks_animated_testimonials" ADD COLUMN "image_size" "enum_pages_blocks_animated_testimonials_image_size" DEFAULT 'medium';
  ALTER TABLE "_pages_v_blocks_animated_testimonials" ADD COLUMN "image_size" "enum__pages_v_blocks_animated_testimonials_image_size" DEFAULT 'medium';`)
}
