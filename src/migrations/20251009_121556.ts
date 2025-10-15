import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "blog_post_header1_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum_blog_post_header1_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "_blog_post_header1_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum__blog_post_header1_breadcrumbs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "blog_post_header1_breadcrumbs" ADD CONSTRAINT "blog_post_header1_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_breadcrumbs_v" ADD CONSTRAINT "_blog_post_header1_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blog_post_header1_breadcrumbs_order_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_order");
  CREATE INDEX "blog_post_header1_breadcrumbs_parent_id_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_order_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_parent_id_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "blog_post_header1_breadcrumbs" CASCADE;
  DROP TABLE "_blog_post_header1_breadcrumbs_v" CASCADE;
  DROP TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type";
  DROP TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type";`)
}
