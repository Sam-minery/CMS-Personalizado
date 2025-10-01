import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_evt_4_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_4_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__evt_4_v_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_4_v_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TABLE "evt_4_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_variant" "enum_evt_4_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_evt_4_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "evt_4_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all'
  );
  
  CREATE TABLE "evt_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_6_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Webinar title heading',
  	"duration" varchar DEFAULT '45',
  	"status" varchar,
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"video_url" varchar
  );
  
  CREATE TABLE "evt_6_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all'
  );
  
  CREATE TABLE "evt_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Webinars',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_6_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Events'
  );
  
  CREATE TABLE "evt_hdr_6_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" varchar DEFAULT 'primary',
  	"size" varchar DEFAULT 'md'
  );
  
  CREATE TABLE "evt_hdr_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_7_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" varchar DEFAULT 'primary',
  	"size" varchar DEFAULT 'md'
  );
  
  CREATE TABLE "evt_hdr_7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_4_v_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_variant" "enum__evt_4_v_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__evt_4_v_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_4_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_4_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_6_v_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Webinar title heading',
  	"duration" varchar DEFAULT '45',
  	"status" varchar,
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"video_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_6_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_6_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Webinars',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_6_v_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Events',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_6_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" varchar DEFAULT 'primary',
  	"size" varchar DEFAULT 'md',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_6_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_7_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" varchar DEFAULT 'primary',
  	"size" varchar DEFAULT 'md',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_7_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "evt_4_tabs_content" ADD CONSTRAINT "evt_4_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_4_tabs_content" ADD CONSTRAINT "evt_4_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_4_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_4_tabs" ADD CONSTRAINT "evt_4_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_4" ADD CONSTRAINT "evt_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_6_tabs_content" ADD CONSTRAINT "evt_6_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_6_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_6_tabs" ADD CONSTRAINT "evt_6_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_6" ADD CONSTRAINT "evt_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_6_breadcrumbs" ADD CONSTRAINT "evt_hdr_6_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_6_buttons" ADD CONSTRAINT "evt_hdr_6_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_6" ADD CONSTRAINT "evt_hdr_6_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_6" ADD CONSTRAINT "evt_hdr_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_7_buttons" ADD CONSTRAINT "evt_hdr_7_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_7" ADD CONSTRAINT "evt_hdr_7_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_7" ADD CONSTRAINT "evt_hdr_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_4_v_tabs_content" ADD CONSTRAINT "_evt_4_v_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_4_v_tabs_content" ADD CONSTRAINT "_evt_4_v_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_4_v_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_4_v_tabs" ADD CONSTRAINT "_evt_4_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_4_v" ADD CONSTRAINT "_evt_4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_6_v_tabs_content" ADD CONSTRAINT "_evt_6_v_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_6_v_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_6_v_tabs" ADD CONSTRAINT "_evt_6_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_6_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_6_v" ADD CONSTRAINT "_evt_6_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" ADD CONSTRAINT "_evt_hdr_6_v_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_6_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v_buttons" ADD CONSTRAINT "_evt_hdr_6_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_6_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v" ADD CONSTRAINT "_evt_hdr_6_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v" ADD CONSTRAINT "_evt_hdr_6_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_7_v_buttons" ADD CONSTRAINT "_evt_hdr_7_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_7_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_7_v" ADD CONSTRAINT "_evt_hdr_7_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_7_v" ADD CONSTRAINT "_evt_hdr_7_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "evt_4_tabs_content_order_idx" ON "evt_4_tabs_content" USING btree ("_order");
  CREATE INDEX "evt_4_tabs_content_parent_id_idx" ON "evt_4_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "evt_4_tabs_content_image_idx" ON "evt_4_tabs_content" USING btree ("image_id");
  CREATE INDEX "evt_4_tabs_order_idx" ON "evt_4_tabs" USING btree ("_order");
  CREATE INDEX "evt_4_tabs_parent_id_idx" ON "evt_4_tabs" USING btree ("_parent_id");
  CREATE INDEX "evt_4_order_idx" ON "evt_4" USING btree ("_order");
  CREATE INDEX "evt_4_parent_id_idx" ON "evt_4" USING btree ("_parent_id");
  CREATE INDEX "evt_4_path_idx" ON "evt_4" USING btree ("_path");
  CREATE INDEX "evt_6_tabs_content_order_idx" ON "evt_6_tabs_content" USING btree ("_order");
  CREATE INDEX "evt_6_tabs_content_parent_id_idx" ON "evt_6_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "evt_6_tabs_order_idx" ON "evt_6_tabs" USING btree ("_order");
  CREATE INDEX "evt_6_tabs_parent_id_idx" ON "evt_6_tabs" USING btree ("_parent_id");
  CREATE INDEX "evt_6_order_idx" ON "evt_6" USING btree ("_order");
  CREATE INDEX "evt_6_parent_id_idx" ON "evt_6" USING btree ("_parent_id");
  CREATE INDEX "evt_6_path_idx" ON "evt_6" USING btree ("_path");
  CREATE INDEX "evt_hdr_6_breadcrumbs_order_idx" ON "evt_hdr_6_breadcrumbs" USING btree ("_order");
  CREATE INDEX "evt_hdr_6_breadcrumbs_parent_id_idx" ON "evt_hdr_6_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_6_buttons_order_idx" ON "evt_hdr_6_buttons" USING btree ("_order");
  CREATE INDEX "evt_hdr_6_buttons_parent_id_idx" ON "evt_hdr_6_buttons" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_6_order_idx" ON "evt_hdr_6" USING btree ("_order");
  CREATE INDEX "evt_hdr_6_parent_id_idx" ON "evt_hdr_6" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_6_path_idx" ON "evt_hdr_6" USING btree ("_path");
  CREATE INDEX "evt_hdr_6_image_idx" ON "evt_hdr_6" USING btree ("image_id");
  CREATE INDEX "evt_hdr_7_buttons_order_idx" ON "evt_hdr_7_buttons" USING btree ("_order");
  CREATE INDEX "evt_hdr_7_buttons_parent_id_idx" ON "evt_hdr_7_buttons" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_7_order_idx" ON "evt_hdr_7" USING btree ("_order");
  CREATE INDEX "evt_hdr_7_parent_id_idx" ON "evt_hdr_7" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_7_path_idx" ON "evt_hdr_7" USING btree ("_path");
  CREATE INDEX "evt_hdr_7_image_idx" ON "evt_hdr_7" USING btree ("image_id");
  CREATE INDEX "_evt_4_v_tabs_content_order_idx" ON "_evt_4_v_tabs_content" USING btree ("_order");
  CREATE INDEX "_evt_4_v_tabs_content_parent_id_idx" ON "_evt_4_v_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_evt_4_v_tabs_content_image_idx" ON "_evt_4_v_tabs_content" USING btree ("image_id");
  CREATE INDEX "_evt_4_v_tabs_order_idx" ON "_evt_4_v_tabs" USING btree ("_order");
  CREATE INDEX "_evt_4_v_tabs_parent_id_idx" ON "_evt_4_v_tabs" USING btree ("_parent_id");
  CREATE INDEX "_evt_4_v_order_idx" ON "_evt_4_v" USING btree ("_order");
  CREATE INDEX "_evt_4_v_parent_id_idx" ON "_evt_4_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_4_v_path_idx" ON "_evt_4_v" USING btree ("_path");
  CREATE INDEX "_evt_6_v_tabs_content_order_idx" ON "_evt_6_v_tabs_content" USING btree ("_order");
  CREATE INDEX "_evt_6_v_tabs_content_parent_id_idx" ON "_evt_6_v_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_evt_6_v_tabs_order_idx" ON "_evt_6_v_tabs" USING btree ("_order");
  CREATE INDEX "_evt_6_v_tabs_parent_id_idx" ON "_evt_6_v_tabs" USING btree ("_parent_id");
  CREATE INDEX "_evt_6_v_order_idx" ON "_evt_6_v" USING btree ("_order");
  CREATE INDEX "_evt_6_v_parent_id_idx" ON "_evt_6_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_6_v_path_idx" ON "_evt_6_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_6_v_breadcrumbs_order_idx" ON "_evt_hdr_6_v_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_evt_hdr_6_v_breadcrumbs_parent_id_idx" ON "_evt_hdr_6_v_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_6_v_buttons_order_idx" ON "_evt_hdr_6_v_buttons" USING btree ("_order");
  CREATE INDEX "_evt_hdr_6_v_buttons_parent_id_idx" ON "_evt_hdr_6_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_6_v_order_idx" ON "_evt_hdr_6_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_6_v_parent_id_idx" ON "_evt_hdr_6_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_6_v_path_idx" ON "_evt_hdr_6_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_6_v_image_idx" ON "_evt_hdr_6_v" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_7_v_buttons_order_idx" ON "_evt_hdr_7_v_buttons" USING btree ("_order");
  CREATE INDEX "_evt_hdr_7_v_buttons_parent_id_idx" ON "_evt_hdr_7_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_7_v_order_idx" ON "_evt_hdr_7_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_7_v_parent_id_idx" ON "_evt_hdr_7_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_7_v_path_idx" ON "_evt_hdr_7_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_7_v_image_idx" ON "_evt_hdr_7_v" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "evt_4_tabs_content" CASCADE;
  DROP TABLE "evt_4_tabs" CASCADE;
  DROP TABLE "evt_4" CASCADE;
  DROP TABLE "evt_6_tabs_content" CASCADE;
  DROP TABLE "evt_6_tabs" CASCADE;
  DROP TABLE "evt_6" CASCADE;
  DROP TABLE "evt_hdr_6_breadcrumbs" CASCADE;
  DROP TABLE "evt_hdr_6_buttons" CASCADE;
  DROP TABLE "evt_hdr_6" CASCADE;
  DROP TABLE "evt_hdr_7_buttons" CASCADE;
  DROP TABLE "evt_hdr_7" CASCADE;
  DROP TABLE "_evt_4_v_tabs_content" CASCADE;
  DROP TABLE "_evt_4_v_tabs" CASCADE;
  DROP TABLE "_evt_4_v" CASCADE;
  DROP TABLE "_evt_6_v_tabs_content" CASCADE;
  DROP TABLE "_evt_6_v_tabs" CASCADE;
  DROP TABLE "_evt_6_v" CASCADE;
  DROP TABLE "_evt_hdr_6_v_breadcrumbs" CASCADE;
  DROP TABLE "_evt_hdr_6_v_buttons" CASCADE;
  DROP TABLE "_evt_hdr_6_v" CASCADE;
  DROP TABLE "_evt_hdr_7_v_buttons" CASCADE;
  DROP TABLE "_evt_hdr_7_v" CASCADE;
  DROP TYPE "public"."enum_evt_4_tabs_content_button_variant";
  DROP TYPE "public"."enum_evt_4_tabs_content_button_size";
  DROP TYPE "public"."enum__evt_4_v_tabs_content_button_variant";
  DROP TYPE "public"."enum__evt_4_v_tabs_content_button_size";`)
}
