import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_layout132_sections_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout132_sections_button_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout132_sections_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout132_sections_button_appearance" AS ENUM('default', 'outline');
  CREATE TABLE "pages_blocks_layout132_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"heading" varchar DEFAULT 'Long heading is what you see here in this feature section',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"button_type" "enum_pages_blocks_layout132_sections_button_type" DEFAULT 'reference',
  	"button_new_tab" boolean,
  	"button_url" varchar,
  	"button_label" varchar,
  	"button_appearance" "enum_pages_blocks_layout132_sections_button_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout132" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout132_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"heading" varchar DEFAULT 'Long heading is what you see here in this feature section',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"button_type" "enum__pages_v_blocks_layout132_sections_button_type" DEFAULT 'reference',
  	"button_new_tab" boolean,
  	"button_url" varchar,
  	"button_label" varchar,
  	"button_appearance" "enum__pages_v_blocks_layout132_sections_button_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout132" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_layout132_sections" ADD CONSTRAINT "pages_blocks_layout132_sections_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout132_sections" ADD CONSTRAINT "pages_blocks_layout132_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout132"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout132" ADD CONSTRAINT "pages_blocks_layout132_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout132_sections" ADD CONSTRAINT "_pages_v_blocks_layout132_sections_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout132_sections" ADD CONSTRAINT "_pages_v_blocks_layout132_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout132"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout132" ADD CONSTRAINT "_pages_v_blocks_layout132_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_layout132_sections_order_idx" ON "pages_blocks_layout132_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout132_sections_parent_id_idx" ON "pages_blocks_layout132_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout132_sections_image_image_media_image_idx" ON "pages_blocks_layout132_sections" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_layout132_order_idx" ON "pages_blocks_layout132" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout132_parent_id_idx" ON "pages_blocks_layout132" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout132_path_idx" ON "pages_blocks_layout132" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout132_sections_order_idx" ON "_pages_v_blocks_layout132_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout132_sections_parent_id_idx" ON "_pages_v_blocks_layout132_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout132_sections_image_image_media_image_idx" ON "_pages_v_blocks_layout132_sections" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout132_order_idx" ON "_pages_v_blocks_layout132" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout132_parent_id_idx" ON "_pages_v_blocks_layout132" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout132_path_idx" ON "_pages_v_blocks_layout132" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_layout132_sections" CASCADE;
  DROP TABLE "pages_blocks_layout132" CASCADE;
  DROP TABLE "_pages_v_blocks_layout132_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_layout132" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_layout132_sections_button_type";
  DROP TYPE "public"."enum_pages_blocks_layout132_sections_button_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout132_sections_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout132_sections_button_appearance";`)
}
