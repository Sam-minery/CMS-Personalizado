import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_layout222_features_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout222_features_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout222_features_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout222_features_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TABLE "pages_blocks_layout222_features_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout222_features_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout222_features_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout222_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"icon_alt" varchar DEFAULT 'Relume logo',
  	"heading" varchar DEFAULT 'Short heading here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
  );
  
  CREATE TABLE "pages_blocks_layout222" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout222_features_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout222_features_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout222_features_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout222_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"icon_alt" varchar DEFAULT 'Relume logo',
  	"heading" varchar DEFAULT 'Short heading here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout222" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_layout222_features_buttons" ADD CONSTRAINT "pages_blocks_layout222_features_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout222_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout222_features" ADD CONSTRAINT "pages_blocks_layout222_features_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout222_features" ADD CONSTRAINT "pages_blocks_layout222_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout222"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout222" ADD CONSTRAINT "pages_blocks_layout222_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout222" ADD CONSTRAINT "pages_blocks_layout222_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout222_features_buttons" ADD CONSTRAINT "_pages_v_blocks_layout222_features_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout222_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout222_features" ADD CONSTRAINT "_pages_v_blocks_layout222_features_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout222_features" ADD CONSTRAINT "_pages_v_blocks_layout222_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout222"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout222" ADD CONSTRAINT "_pages_v_blocks_layout222_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout222" ADD CONSTRAINT "_pages_v_blocks_layout222_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_layout222_features_buttons_order_idx" ON "pages_blocks_layout222_features_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout222_features_buttons_parent_id_idx" ON "pages_blocks_layout222_features_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout222_features_order_idx" ON "pages_blocks_layout222_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout222_features_parent_id_idx" ON "pages_blocks_layout222_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout222_features_icon_icon_media_image_idx" ON "pages_blocks_layout222_features" USING btree ("icon_media_image_id");
  CREATE INDEX "pages_blocks_layout222_order_idx" ON "pages_blocks_layout222" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout222_parent_id_idx" ON "pages_blocks_layout222" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout222_path_idx" ON "pages_blocks_layout222" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout222_image_image_media_image_idx" ON "pages_blocks_layout222" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout222_features_buttons_order_idx" ON "_pages_v_blocks_layout222_features_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout222_features_buttons_parent_id_idx" ON "_pages_v_blocks_layout222_features_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout222_features_order_idx" ON "_pages_v_blocks_layout222_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout222_features_parent_id_idx" ON "_pages_v_blocks_layout222_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout222_features_icon_icon_media_image_idx" ON "_pages_v_blocks_layout222_features" USING btree ("icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout222_order_idx" ON "_pages_v_blocks_layout222" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout222_parent_id_idx" ON "_pages_v_blocks_layout222" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout222_path_idx" ON "_pages_v_blocks_layout222" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout222_image_image_media_image_idx" ON "_pages_v_blocks_layout222" USING btree ("image_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_layout222_features_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout222_features" CASCADE;
  DROP TABLE "pages_blocks_layout222" CASCADE;
  DROP TABLE "_pages_v_blocks_layout222_features_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout222_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout222" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_layout222_features_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout222_features_buttons_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout222_features_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout222_features_buttons_link_appearance";`)
}
