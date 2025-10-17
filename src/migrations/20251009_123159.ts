import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TABLE "blog_post_header1_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon_type" "icon_type" DEFAULT 'link'
  );
  
  CREATE TABLE "_blog_post_header1_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon_type" "icon_type" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  ALTER TABLE "blog_post_header1_social_links" ADD CONSTRAINT "blog_post_header1_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_social_links_v" ADD CONSTRAINT "_blog_post_header1_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blog_post_header1_social_links_order_idx" ON "blog_post_header1_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header1_social_links_parent_id_idx" ON "blog_post_header1_social_links" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_social_links_v_order_idx" ON "_blog_post_header1_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_social_links_v_parent_id_idx" ON "_blog_post_header1_social_links_v" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "blog_post_header1_social_links" CASCADE;
  DROP TABLE "_blog_post_header1_social_links_v" CASCADE;
  DROP TYPE "public"."icon_type";`)
}
