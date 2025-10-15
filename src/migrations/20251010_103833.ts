import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_blog_post_header2_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header3_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header3_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__blog_post_header2_social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__blog_post_header3_breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header3_social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TABLE "blog_post_header2_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_blog_post_header2_social_links_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "blog_post_header3_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum_blog_post_header3_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header3_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_blog_post_header3_social_links_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "_blog_post_header2_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__blog_post_header2_social_links_v_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header3_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum__blog_post_header3_breadcrumbs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header3_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__blog_post_header3_social_links_v_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  DROP TABLE "social_links" CASCADE;
  DROP TABLE "breadcrumbs" CASCADE;
  DROP TABLE "_social_links_v" CASCADE;
  DROP TABLE "_breadcrumbs_v" CASCADE;
  ALTER TABLE "blog_post_header2_social_links" ADD CONSTRAINT "blog_post_header2_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header3_breadcrumbs" ADD CONSTRAINT "blog_post_header3_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header3_social_links" ADD CONSTRAINT "blog_post_header3_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header2_social_links_v" ADD CONSTRAINT "_blog_post_header2_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header3_breadcrumbs_v" ADD CONSTRAINT "_blog_post_header3_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header3_social_links_v" ADD CONSTRAINT "_blog_post_header3_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "blog_post_header2_social_links_order_idx" ON "blog_post_header2_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header2_social_links_parent_id_idx" ON "blog_post_header2_social_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header3_breadcrumbs_order_idx" ON "blog_post_header3_breadcrumbs" USING btree ("_order");
  CREATE INDEX "blog_post_header3_breadcrumbs_parent_id_idx" ON "blog_post_header3_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header3_social_links_order_idx" ON "blog_post_header3_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header3_social_links_parent_id_idx" ON "blog_post_header3_social_links" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header2_social_links_v_order_idx" ON "_blog_post_header2_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header2_social_links_v_parent_id_idx" ON "_blog_post_header2_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header3_breadcrumbs_v_order_idx" ON "_blog_post_header3_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header3_breadcrumbs_v_parent_id_idx" ON "_blog_post_header3_breadcrumbs_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header3_social_links_v_order_idx" ON "_blog_post_header3_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header3_social_links_v_parent_id_idx" ON "_blog_post_header3_social_links_v" USING btree ("_parent_id");
  DROP TYPE "public"."enum_social_links_platform";
  DROP TYPE "public"."enum_breadcrumbs_link_type";
  DROP TYPE "public"."enum__social_links_v_platform";
  DROP TYPE "public"."enum__breadcrumbs_v_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_social_links_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__social_links_v_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum__breadcrumbs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  DROP TABLE "blog_post_header2_social_links" CASCADE;
  DROP TABLE "blog_post_header3_breadcrumbs" CASCADE;
  DROP TABLE "blog_post_header3_social_links" CASCADE;
  DROP TABLE "_blog_post_header2_social_links_v" CASCADE;
  DROP TABLE "_blog_post_header3_breadcrumbs_v" CASCADE;
  DROP TABLE "_blog_post_header3_social_links_v" CASCADE;
  ALTER TABLE "social_links" ADD CONSTRAINT "social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "breadcrumbs" ADD CONSTRAINT "breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_social_links_v" ADD CONSTRAINT "_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_breadcrumbs_v" ADD CONSTRAINT "_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "social_links_order_idx" ON "social_links" USING btree ("_order");
  CREATE INDEX "social_links_parent_id_idx" ON "social_links" USING btree ("_parent_id");
  CREATE INDEX "breadcrumbs_order_idx" ON "breadcrumbs" USING btree ("_order");
  CREATE INDEX "breadcrumbs_parent_id_idx" ON "breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_social_links_v_order_idx" ON "_social_links_v" USING btree ("_order");
  CREATE INDEX "_social_links_v_parent_id_idx" ON "_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_breadcrumbs_v_order_idx" ON "_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_breadcrumbs_v_parent_id_idx" ON "_breadcrumbs_v" USING btree ("_parent_id");
  DROP TYPE "public"."enum_blog_post_header2_social_links_platform";
  DROP TYPE "public"."enum_blog_post_header3_breadcrumbs_link_type";
  DROP TYPE "public"."enum_blog_post_header3_social_links_platform";
  DROP TYPE "public"."enum__blog_post_header2_social_links_v_platform";
  DROP TYPE "public"."enum__blog_post_header3_breadcrumbs_v_link_type";
  DROP TYPE "public"."enum__blog_post_header3_social_links_v_platform";`)
}
