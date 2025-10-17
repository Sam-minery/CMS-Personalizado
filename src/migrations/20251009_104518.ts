import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_blog1_tabs_content" (
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
  
  CREATE TABLE "pages_blocks_blog1_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_tabs_content" (
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
  
  CREATE TABLE "pages_blocks_blog5_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog1_tabs_content" (
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
  
  CREATE TABLE "_pages_v_blocks_blog1_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs_content" (
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
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar,
  	"_uuid" varchar
  );
  
  DROP TABLE "pages_blocks_blog1_buttons" CASCADE;
  DROP TABLE "pages_blocks_blog5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_buttons" CASCADE;
  ALTER TABLE "pages_blocks_blog1" ADD COLUMN "default_value" varchar DEFAULT 'view-all';
  ALTER TABLE "pages_blocks_blog5" ADD COLUMN "default_value" varchar DEFAULT 'view-all';
  ALTER TABLE "_pages_v_blocks_blog1" ADD COLUMN "default_value" varchar DEFAULT 'view-all';
  ALTER TABLE "_pages_v_blocks_blog5" ADD COLUMN "default_value" varchar DEFAULT 'view-all';
  ALTER TABLE "pages_blocks_blog1_tabs_content" ADD CONSTRAINT "pages_blocks_blog1_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_tabs_content" ADD CONSTRAINT "pages_blocks_blog1_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_tabs_content" ADD CONSTRAINT "pages_blocks_blog1_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_tabs" ADD CONSTRAINT "pages_blocks_blog1_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs" ADD CONSTRAINT "pages_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_blog1_tabs_content_order_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_tabs_content_parent_id_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_tabs_content_image_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog1_tabs_content_avatar_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog1_tabs_order_idx" ON "pages_blocks_blog1_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_tabs_parent_id_idx" ON "pages_blocks_blog1_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_order_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_content_parent_id_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_image_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_avatar_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog5_tabs_order_idx" ON "pages_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_parent_id_idx" ON "pages_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_order_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_image_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_avatar_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_order_idx" ON "_pages_v_blocks_blog1_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_parent_id_idx" ON "_pages_v_blocks_blog1_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_order_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_image_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_avatar_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_order_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_parent_id_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_parent_id");
  DROP TYPE "public"."enum_pages_blocks_blog1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_blog5_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_blog1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_buttons_variant";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_blog1_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_blog5_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog1_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TABLE "pages_blocks_blog1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_blog1_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "pages_blocks_blog5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_blog5_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "_pages_v_blocks_blog1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_blog1_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_blog5_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  DROP TABLE "pages_blocks_blog1_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog1_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs" CASCADE;
  ALTER TABLE "pages_blocks_blog1_buttons" ADD CONSTRAINT "pages_blocks_blog1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_buttons" ADD CONSTRAINT "pages_blocks_blog5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_buttons" ADD CONSTRAINT "_pages_v_blocks_blog1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_buttons" ADD CONSTRAINT "_pages_v_blocks_blog5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_blog1_buttons_order_idx" ON "pages_blocks_blog1_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_buttons_parent_id_idx" ON "pages_blocks_blog1_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_buttons_order_idx" ON "pages_blocks_blog5_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_buttons_parent_id_idx" ON "pages_blocks_blog5_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_buttons_order_idx" ON "_pages_v_blocks_blog1_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_buttons_parent_id_idx" ON "_pages_v_blocks_blog1_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_buttons_order_idx" ON "_pages_v_blocks_blog5_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_buttons_parent_id_idx" ON "_pages_v_blocks_blog5_buttons" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_blog1" DROP COLUMN "default_value";
  ALTER TABLE "pages_blocks_blog5" DROP COLUMN "default_value";
  ALTER TABLE "_pages_v_blocks_blog1" DROP COLUMN "default_value";
  ALTER TABLE "_pages_v_blocks_blog5" DROP COLUMN "default_value";`)
}
