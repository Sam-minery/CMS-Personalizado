import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_fc_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."app" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_t_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_bc_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__fc_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__t_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__bc_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "fc_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_fc_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "app" DEFAULT 'default'
  );
  
  CREATE TABLE "t_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_t_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "app" DEFAULT 'default'
  );
  
  CREATE TABLE "l352_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar DEFAULT 'Date',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image'
  );
  
  CREATE TABLE "bc_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_bc_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "app" DEFAULT 'default'
  );
  
  CREATE TABLE "l352" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_content_tagline" varchar DEFAULT 'Tagline',
  	"feature_content_heading" varchar DEFAULT 'Medium length section heading goes here',
  	"feature_content_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"bottom_content_tagline" varchar DEFAULT 'Tagline',
  	"bottom_content_heading" varchar DEFAULT 'Medium length section heading goes here',
  	"bottom_content_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"block_name" varchar
  );
  
  CREATE TABLE "_fc_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__fc_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "app" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_t_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__t_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "app" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_l352_v_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" varchar DEFAULT 'Date',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_bc_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__bc_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "app" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_l352_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_content_tagline" varchar DEFAULT 'Tagline',
  	"feature_content_heading" varchar DEFAULT 'Medium length section heading goes here',
  	"feature_content_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"bottom_content_tagline" varchar DEFAULT 'Tagline',
  	"bottom_content_heading" varchar DEFAULT 'Medium length section heading goes here',
  	"bottom_content_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "fc_btns" ADD CONSTRAINT "fc_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."l352"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "t_btns" ADD CONSTRAINT "t_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."l352_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "l352_timeline_items" ADD CONSTRAINT "l352_timeline_items_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "l352_timeline_items" ADD CONSTRAINT "l352_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."l352"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "bc_btns" ADD CONSTRAINT "bc_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."l352"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "l352" ADD CONSTRAINT "l352_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fc_btns_v" ADD CONSTRAINT "_fc_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_l352_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_t_btns_v" ADD CONSTRAINT "_t_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_l352_v_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_l352_v_timeline_items" ADD CONSTRAINT "_l352_v_timeline_items_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_l352_v_timeline_items" ADD CONSTRAINT "_l352_v_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_l352_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_bc_btns_v" ADD CONSTRAINT "_bc_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_l352_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_l352_v" ADD CONSTRAINT "_l352_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "fc_btns_order_idx" ON "fc_btns" USING btree ("_order");
  CREATE INDEX "fc_btns_parent_id_idx" ON "fc_btns" USING btree ("_parent_id");
  CREATE INDEX "t_btns_order_idx" ON "t_btns" USING btree ("_order");
  CREATE INDEX "t_btns_parent_id_idx" ON "t_btns" USING btree ("_parent_id");
  CREATE INDEX "l352_timeline_items_order_idx" ON "l352_timeline_items" USING btree ("_order");
  CREATE INDEX "l352_timeline_items_parent_id_idx" ON "l352_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "l352_timeline_items_image_image_media_image_idx" ON "l352_timeline_items" USING btree ("image_media_image_id");
  CREATE INDEX "bc_btns_order_idx" ON "bc_btns" USING btree ("_order");
  CREATE INDEX "bc_btns_parent_id_idx" ON "bc_btns" USING btree ("_parent_id");
  CREATE INDEX "l352_order_idx" ON "l352" USING btree ("_order");
  CREATE INDEX "l352_parent_id_idx" ON "l352" USING btree ("_parent_id");
  CREATE INDEX "l352_path_idx" ON "l352" USING btree ("_path");
  CREATE INDEX "_fc_btns_v_order_idx" ON "_fc_btns_v" USING btree ("_order");
  CREATE INDEX "_fc_btns_v_parent_id_idx" ON "_fc_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_t_btns_v_order_idx" ON "_t_btns_v" USING btree ("_order");
  CREATE INDEX "_t_btns_v_parent_id_idx" ON "_t_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_l352_v_timeline_items_order_idx" ON "_l352_v_timeline_items" USING btree ("_order");
  CREATE INDEX "_l352_v_timeline_items_parent_id_idx" ON "_l352_v_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_l352_v_timeline_items_image_image_media_image_idx" ON "_l352_v_timeline_items" USING btree ("image_media_image_id");
  CREATE INDEX "_bc_btns_v_order_idx" ON "_bc_btns_v" USING btree ("_order");
  CREATE INDEX "_bc_btns_v_parent_id_idx" ON "_bc_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_l352_v_order_idx" ON "_l352_v" USING btree ("_order");
  CREATE INDEX "_l352_v_parent_id_idx" ON "_l352_v" USING btree ("_parent_id");
  CREATE INDEX "_l352_v_path_idx" ON "_l352_v" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "fc_btns" CASCADE;
  DROP TABLE "t_btns" CASCADE;
  DROP TABLE "l352_timeline_items" CASCADE;
  DROP TABLE "bc_btns" CASCADE;
  DROP TABLE "l352" CASCADE;
  DROP TABLE "_fc_btns_v" CASCADE;
  DROP TABLE "_t_btns_v" CASCADE;
  DROP TABLE "_l352_v_timeline_items" CASCADE;
  DROP TABLE "_bc_btns_v" CASCADE;
  DROP TABLE "_l352_v" CASCADE;
  DROP TYPE "public"."enum_fc_btns_link_type";
  DROP TYPE "public"."app";
  DROP TYPE "public"."enum_t_btns_link_type";
  DROP TYPE "public"."enum_bc_btns_link_type";
  DROP TYPE "public"."enum__fc_btns_v_link_type";
  DROP TYPE "public"."enum__t_btns_v_link_type";
  DROP TYPE "public"."enum__bc_btns_v_link_type";`)
}
