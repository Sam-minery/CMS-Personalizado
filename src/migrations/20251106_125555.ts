import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_glare_card_cards_card_type" AS ENUM('icon', 'image', 'text');
  CREATE TYPE "public"."enum_pages_blocks_glare_card_grid_cols" AS ENUM('grid-cols-1', 'grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-1 md:grid-cols-4', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4');
  CREATE TYPE "public"."enum_pages_blocks_glare_card_padding" AS ENUM('py-0', 'py-10', 'py-20', 'py-40');
  CREATE TYPE "public"."enum_pages_blocks_glare_card_background_color" AS ENUM('bg-white dark:bg-black', 'bg-white', 'bg-black', 'bg-transparent');
  CREATE TYPE "public"."enum__pages_v_blocks_glare_card_cards_card_type" AS ENUM('icon', 'image', 'text');
  CREATE TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols" AS ENUM('grid-cols-1', 'grid-cols-1 md:grid-cols-2', 'grid-cols-1 md:grid-cols-3', 'grid-cols-1 md:grid-cols-4', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4');
  CREATE TYPE "public"."enum__pages_v_blocks_glare_card_padding" AS ENUM('py-0', 'py-10', 'py-20', 'py-40');
  CREATE TYPE "public"."enum__pages_v_blocks_glare_card_background_color" AS ENUM('bg-white dark:bg-black', 'bg-white', 'bg-black', 'bg-transparent');
  CREATE TABLE "pages_blocks_glare_card_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_type" "enum_pages_blocks_glare_card_cards_card_type" DEFAULT 'icon',
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"class_name" varchar
  );
  
  CREATE TABLE "pages_blocks_glare_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"grid_cols" "enum_pages_blocks_glare_card_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-3',
  	"padding" "enum_pages_blocks_glare_card_padding" DEFAULT 'py-20',
  	"background_color" "enum_pages_blocks_glare_card_background_color" DEFAULT 'bg-white dark:bg-black',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_glare_card_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_type" "enum__pages_v_blocks_glare_card_cards_card_type" DEFAULT 'icon',
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"class_name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_glare_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"grid_cols" "enum__pages_v_blocks_glare_card_grid_cols" DEFAULT 'grid-cols-1 md:grid-cols-3',
  	"padding" "enum__pages_v_blocks_glare_card_padding" DEFAULT 'py-20',
  	"background_color" "enum__pages_v_blocks_glare_card_background_color" DEFAULT 'bg-white dark:bg-black',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_glare_card_cards" ADD CONSTRAINT "pages_blocks_glare_card_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_glare_card_cards" ADD CONSTRAINT "pages_blocks_glare_card_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_glare_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_glare_card" ADD CONSTRAINT "pages_blocks_glare_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_glare_card_cards" ADD CONSTRAINT "_pages_v_blocks_glare_card_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_glare_card_cards" ADD CONSTRAINT "_pages_v_blocks_glare_card_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_glare_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_glare_card" ADD CONSTRAINT "_pages_v_blocks_glare_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_glare_card_cards_order_idx" ON "pages_blocks_glare_card_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_glare_card_cards_parent_id_idx" ON "pages_blocks_glare_card_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_glare_card_cards_image_idx" ON "pages_blocks_glare_card_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_glare_card_order_idx" ON "pages_blocks_glare_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_glare_card_parent_id_idx" ON "pages_blocks_glare_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_glare_card_path_idx" ON "pages_blocks_glare_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_glare_card_cards_order_idx" ON "_pages_v_blocks_glare_card_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_glare_card_cards_parent_id_idx" ON "_pages_v_blocks_glare_card_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_glare_card_cards_image_idx" ON "_pages_v_blocks_glare_card_cards" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_glare_card_order_idx" ON "_pages_v_blocks_glare_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_glare_card_parent_id_idx" ON "_pages_v_blocks_glare_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_glare_card_path_idx" ON "_pages_v_blocks_glare_card" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_glare_card_cards" CASCADE;
  DROP TABLE "pages_blocks_glare_card" CASCADE;
  DROP TABLE "_pages_v_blocks_glare_card_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_glare_card" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_glare_card_cards_card_type";
  DROP TYPE "public"."enum_pages_blocks_glare_card_grid_cols";
  DROP TYPE "public"."enum_pages_blocks_glare_card_padding";
  DROP TYPE "public"."enum_pages_blocks_glare_card_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_glare_card_cards_card_type";
  DROP TYPE "public"."enum__pages_v_blocks_glare_card_grid_cols";
  DROP TYPE "public"."enum__pages_v_blocks_glare_card_padding";
  DROP TYPE "public"."enum__pages_v_blocks_glare_card_background_color";`)
}
