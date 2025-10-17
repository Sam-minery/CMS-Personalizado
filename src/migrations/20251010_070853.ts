import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_blog1_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog5_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_blog_posts" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_blog1_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog1_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_blocks_blog1_blog_posts" ADD CONSTRAINT "pages_blocks_blog1_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_blog_posts" ADD CONSTRAINT "pages_blocks_blog1_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_blog_posts" ADD CONSTRAINT "pages_blocks_blog1_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_blog_posts" ADD CONSTRAINT "pages_blocks_blog5_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_blog_posts" ADD CONSTRAINT "pages_blocks_blog5_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_blog_posts" ADD CONSTRAINT "pages_blocks_blog5_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog1_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog1_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog1_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog5_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog5_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog5_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_blog1_blog_posts_order_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_blog_posts_parent_id_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_blog_posts_image_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog1_blog_posts_avatar_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog5_blog_posts_order_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_blog_posts_parent_id_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_blog_posts_image_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog5_blog_posts_avatar_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_order_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_image_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_avatar_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_order_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_image_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_avatar_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("avatar_id");`)
}
