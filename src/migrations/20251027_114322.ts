import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_features_tertiary_style_four_items_color" AS ENUM('blue', 'green', 'indigo', 'neutral', 'purple');
  CREATE TYPE "public"."enum__pages_v_blocks_features_tertiary_style_four_items_color" AS ENUM('blue', 'green', 'indigo', 'neutral', 'purple');
  CREATE TABLE "pages_blocks_features_tertiary_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_features_tertiary_style_one_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"badge_text" varchar
  );
  
  CREATE TABLE "pages_blocks_features_tertiary_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_features_tertiary_style_three_pills" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_features_tertiary_style_four_items_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "pages_blocks_features_tertiary_style_four_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"color" "enum_pages_blocks_features_tertiary_style_four_items_color" DEFAULT 'neutral'
  );
  
  CREATE TABLE "pages_blocks_features_tertiary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_style_one" boolean DEFAULT true,
  	"show_style_two" boolean DEFAULT true,
  	"show_style_three" boolean DEFAULT true,
  	"show_style_four" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary_style_one_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"badge_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary_style_three_pills" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary_style_four_items_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary_style_four_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"color" "enum__pages_v_blocks_features_tertiary_style_four_items_color" DEFAULT 'neutral',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_features_tertiary" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_style_one" boolean DEFAULT true,
  	"show_style_two" boolean DEFAULT true,
  	"show_style_three" boolean DEFAULT true,
  	"show_style_four" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_features_tertiary_features" ADD CONSTRAINT "pages_blocks_features_tertiary_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_style_one_items" ADD CONSTRAINT "pages_blocks_features_tertiary_style_one_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_style_one_items" ADD CONSTRAINT "pages_blocks_features_tertiary_style_one_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_gallery_images" ADD CONSTRAINT "pages_blocks_features_tertiary_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_gallery_images" ADD CONSTRAINT "pages_blocks_features_tertiary_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_style_three_pills" ADD CONSTRAINT "pages_blocks_features_tertiary_style_three_pills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_style_four_items_tags" ADD CONSTRAINT "pages_blocks_features_tertiary_style_four_items_tags_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_style_four_items_tags" ADD CONSTRAINT "pages_blocks_features_tertiary_style_four_items_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features_tertiary_style_four_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary_style_four_items" ADD CONSTRAINT "pages_blocks_features_tertiary_style_four_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_features_tertiary" ADD CONSTRAINT "pages_blocks_features_tertiary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_features" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_style_one_items" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_style_one_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_style_one_items" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_style_one_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_gallery_images" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_gallery_images" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_style_three_pills" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_style_three_pills_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_style_four_items_tags" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_style_four_items_tags_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_style_four_items_tags" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_style_four_items_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features_tertiary_style_four_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary_style_four_items" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_style_four_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_features_tertiary"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_features_tertiary" ADD CONSTRAINT "_pages_v_blocks_features_tertiary_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_features_tertiary_features_order_idx" ON "pages_blocks_features_tertiary_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_features_parent_id_idx" ON "pages_blocks_features_tertiary_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_style_one_items_order_idx" ON "pages_blocks_features_tertiary_style_one_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_style_one_items_parent_id_idx" ON "pages_blocks_features_tertiary_style_one_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_style_one_items_icon_idx" ON "pages_blocks_features_tertiary_style_one_items" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_features_tertiary_gallery_images_order_idx" ON "pages_blocks_features_tertiary_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_gallery_images_parent_id_idx" ON "pages_blocks_features_tertiary_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_gallery_images_image_idx" ON "pages_blocks_features_tertiary_gallery_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_features_tertiary_style_three_pills_order_idx" ON "pages_blocks_features_tertiary_style_three_pills" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_style_three_pills_parent_id_idx" ON "pages_blocks_features_tertiary_style_three_pills" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_style_four_items_tags_order_idx" ON "pages_blocks_features_tertiary_style_four_items_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_style_four_items_tags_parent_id_idx" ON "pages_blocks_features_tertiary_style_four_items_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_style_four_items_tags_icon_idx" ON "pages_blocks_features_tertiary_style_four_items_tags" USING btree ("icon_id");
  CREATE INDEX "pages_blocks_features_tertiary_style_four_items_order_idx" ON "pages_blocks_features_tertiary_style_four_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_style_four_items_parent_id_idx" ON "pages_blocks_features_tertiary_style_four_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_order_idx" ON "pages_blocks_features_tertiary" USING btree ("_order");
  CREATE INDEX "pages_blocks_features_tertiary_parent_id_idx" ON "pages_blocks_features_tertiary" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_features_tertiary_path_idx" ON "pages_blocks_features_tertiary" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_features_tertiary_features_order_idx" ON "_pages_v_blocks_features_tertiary_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_features_parent_id_idx" ON "_pages_v_blocks_features_tertiary_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_one_items_order_idx" ON "_pages_v_blocks_features_tertiary_style_one_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_one_items_parent_id_idx" ON "_pages_v_blocks_features_tertiary_style_one_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_one_items_icon_idx" ON "_pages_v_blocks_features_tertiary_style_one_items" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_gallery_images_order_idx" ON "_pages_v_blocks_features_tertiary_gallery_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_gallery_images_parent_id_idx" ON "_pages_v_blocks_features_tertiary_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_gallery_images_image_idx" ON "_pages_v_blocks_features_tertiary_gallery_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_three_pills_order_idx" ON "_pages_v_blocks_features_tertiary_style_three_pills" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_three_pills_parent_id_idx" ON "_pages_v_blocks_features_tertiary_style_three_pills" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_four_items_tags_order_idx" ON "_pages_v_blocks_features_tertiary_style_four_items_tags" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_four_items_tags_parent_id_idx" ON "_pages_v_blocks_features_tertiary_style_four_items_tags" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_four_items_tags_icon_idx" ON "_pages_v_blocks_features_tertiary_style_four_items_tags" USING btree ("icon_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_four_items_order_idx" ON "_pages_v_blocks_features_tertiary_style_four_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_style_four_items_parent_id_idx" ON "_pages_v_blocks_features_tertiary_style_four_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_order_idx" ON "_pages_v_blocks_features_tertiary" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_features_tertiary_parent_id_idx" ON "_pages_v_blocks_features_tertiary" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_features_tertiary_path_idx" ON "_pages_v_blocks_features_tertiary" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_features_tertiary_features" CASCADE;
  DROP TABLE "pages_blocks_features_tertiary_style_one_items" CASCADE;
  DROP TABLE "pages_blocks_features_tertiary_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_features_tertiary_style_three_pills" CASCADE;
  DROP TABLE "pages_blocks_features_tertiary_style_four_items_tags" CASCADE;
  DROP TABLE "pages_blocks_features_tertiary_style_four_items" CASCADE;
  DROP TABLE "pages_blocks_features_tertiary" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary_features" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary_style_one_items" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary_style_three_pills" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary_style_four_items_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary_style_four_items" CASCADE;
  DROP TABLE "_pages_v_blocks_features_tertiary" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_features_tertiary_style_four_items_color";
  DROP TYPE "public"."enum__pages_v_blocks_features_tertiary_style_four_items_color";`)
}
