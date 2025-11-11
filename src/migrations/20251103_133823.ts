import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_layout_grid_cards_class_name" AS ENUM('md:col-span-1', 'md:col-span-2', 'md:col-span-3');
  CREATE TYPE "public"."enum_pages_blocks_layout_grid_height" AS ENUM('h-screen', 'h-auto', 'h-[50vh]', 'h-[75vh]');
  CREATE TYPE "public"."enum_pages_blocks_layout_grid_padding" AS ENUM('py-0', 'py-10', 'py-20', 'py-32');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_grid_cards_class_name" AS ENUM('md:col-span-1', 'md:col-span-2', 'md:col-span-3');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_grid_height" AS ENUM('h-screen', 'h-auto', 'h-[50vh]', 'h-[75vh]');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_grid_padding" AS ENUM('py-0', 'py-10', 'py-20', 'py-32');
  CREATE TABLE "pages_blocks_layout_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"thumbnail_id" integer,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"class_name" "enum_pages_blocks_layout_grid_cards_class_name" DEFAULT 'md:col-span-1'
  );
  
  CREATE TABLE "pages_blocks_layout_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"height" "enum_pages_blocks_layout_grid_height" DEFAULT 'h-screen',
  	"padding" "enum_pages_blocks_layout_grid_padding" DEFAULT 'py-20',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"thumbnail_id" integer,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"class_name" "enum__pages_v_blocks_layout_grid_cards_class_name" DEFAULT 'md:col-span-1',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"height" "enum__pages_v_blocks_layout_grid_height" DEFAULT 'h-screen',
  	"padding" "enum__pages_v_blocks_layout_grid_padding" DEFAULT 'py-20',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_layout_grid_cards" ADD CONSTRAINT "pages_blocks_layout_grid_cards_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_grid_cards" ADD CONSTRAINT "pages_blocks_layout_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_grid" ADD CONSTRAINT "pages_blocks_layout_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_grid_cards" ADD CONSTRAINT "_pages_v_blocks_layout_grid_cards_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_grid_cards" ADD CONSTRAINT "_pages_v_blocks_layout_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_grid" ADD CONSTRAINT "_pages_v_blocks_layout_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_layout_grid_cards_order_idx" ON "pages_blocks_layout_grid_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_grid_cards_parent_id_idx" ON "pages_blocks_layout_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_grid_cards_thumbnail_idx" ON "pages_blocks_layout_grid_cards" USING btree ("thumbnail_id");
  CREATE INDEX "pages_blocks_layout_grid_order_idx" ON "pages_blocks_layout_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_grid_parent_id_idx" ON "pages_blocks_layout_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_grid_path_idx" ON "pages_blocks_layout_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_grid_cards_order_idx" ON "_pages_v_blocks_layout_grid_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_grid_cards_parent_id_idx" ON "_pages_v_blocks_layout_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_grid_cards_thumbnail_idx" ON "_pages_v_blocks_layout_grid_cards" USING btree ("thumbnail_id");
  CREATE INDEX "_pages_v_blocks_layout_grid_order_idx" ON "_pages_v_blocks_layout_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_grid_parent_id_idx" ON "_pages_v_blocks_layout_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_grid_path_idx" ON "_pages_v_blocks_layout_grid" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_layout_grid_cards" CASCADE;
  DROP TABLE "pages_blocks_layout_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_grid_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_grid" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_layout_grid_cards_class_name";
  DROP TYPE "public"."enum_pages_blocks_layout_grid_height";
  DROP TYPE "public"."enum_pages_blocks_layout_grid_padding";
  DROP TYPE "public"."enum__pages_v_blocks_layout_grid_cards_class_name";
  DROP TYPE "public"."enum__pages_v_blocks_layout_grid_height";
  DROP TYPE "public"."enum__pages_v_blocks_layout_grid_padding";`)
}
