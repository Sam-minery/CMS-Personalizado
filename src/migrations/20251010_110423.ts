import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_blog_post_header3" DROP CONSTRAINT "pages_blocks_blog_post_header3_author_avatar_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP CONSTRAINT "_pages_v_blocks_blog_post_header3_author_avatar_media_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_blog_post_header3_author_avatar_author_avatar_media_image_idx";
  DROP INDEX "_pages_v_blocks_blog_post_header3_author_avatar_author_avatar_media_image_idx";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "author_avatar_use_media";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "author_avatar_media_image_id";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "author_avatar_src";
  ALTER TABLE "pages_blocks_blog_post_header3" DROP COLUMN "author_avatar_alt";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "author_avatar_use_media";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "author_avatar_media_image_id";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "author_avatar_src";
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DROP COLUMN "author_avatar_alt";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "author_avatar_use_media" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "author_avatar_media_image_id" integer;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "author_avatar_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "pages_blocks_blog_post_header3" ADD COLUMN "author_avatar_alt" varchar DEFAULT 'Relume placeholder avatar';
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "author_avatar_use_media" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "author_avatar_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "author_avatar_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg';
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD COLUMN "author_avatar_alt" varchar DEFAULT 'Relume placeholder avatar';
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_author_avatar_media_image_id_media_id_fk" FOREIGN KEY ("author_avatar_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_author_avatar_media_image_id_media_id_fk" FOREIGN KEY ("author_avatar_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_blog_post_header3_author_avatar_author_avatar_media_image_idx" ON "pages_blocks_blog_post_header3" USING btree ("author_avatar_media_image_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_author_avatar_author_avatar_media_image_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("author_avatar_media_image_id");`)
}
