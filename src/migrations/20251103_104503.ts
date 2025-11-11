import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_evervault_card_cards_height" AS ENUM('h-[25rem]', 'h-[30rem]', 'h-[35rem]', 'h-[40rem]');
  CREATE TYPE "public"."enum_pages_blocks_evervault_card_cards_max_width" AS ENUM('max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl');
  CREATE TYPE "public"."enum_pages_blocks_evervault_card_layout" AS ENUM('grid', 'flex-horizontal', 'flex-vertical');
  CREATE TYPE "public"."enum_pages_blocks_evervault_card_grid_columns" AS ENUM('1', '2', '3', '4');
  CREATE TYPE "public"."enum__pages_v_blocks_evervault_card_cards_height" AS ENUM('h-[25rem]', 'h-[30rem]', 'h-[35rem]', 'h-[40rem]');
  CREATE TYPE "public"."enum__pages_v_blocks_evervault_card_cards_max_width" AS ENUM('max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl');
  CREATE TYPE "public"."enum__pages_v_blocks_evervault_card_layout" AS ENUM('grid', 'flex-horizontal', 'flex-vertical');
  CREATE TYPE "public"."enum__pages_v_blocks_evervault_card_grid_columns" AS ENUM('1', '2', '3', '4');
  CREATE TABLE "pages_blocks_evervault_card_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'hover',
  	"title" varchar,
  	"badge_text" varchar DEFAULT 'Watch me hover',
  	"height" "enum_pages_blocks_evervault_card_cards_height" DEFAULT 'h-[30rem]',
  	"max_width" "enum_pages_blocks_evervault_card_cards_max_width" DEFAULT 'max-w-sm'
  );
  
  CREATE TABLE "pages_blocks_evervault_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"layout" "enum_pages_blocks_evervault_card_layout" DEFAULT 'grid',
  	"grid_columns" "enum_pages_blocks_evervault_card_grid_columns" DEFAULT '3',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_evervault_card_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'hover',
  	"title" varchar,
  	"badge_text" varchar DEFAULT 'Watch me hover',
  	"height" "enum__pages_v_blocks_evervault_card_cards_height" DEFAULT 'h-[30rem]',
  	"max_width" "enum__pages_v_blocks_evervault_card_cards_max_width" DEFAULT 'max-w-sm',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_evervault_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"layout" "enum__pages_v_blocks_evervault_card_layout" DEFAULT 'grid',
  	"grid_columns" "enum__pages_v_blocks_evervault_card_grid_columns" DEFAULT '3',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_evervault_card_cards" ADD CONSTRAINT "pages_blocks_evervault_card_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_evervault_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_evervault_card" ADD CONSTRAINT "pages_blocks_evervault_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_evervault_card_cards" ADD CONSTRAINT "_pages_v_blocks_evervault_card_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_evervault_card"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_evervault_card" ADD CONSTRAINT "_pages_v_blocks_evervault_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_evervault_card_cards_order_idx" ON "pages_blocks_evervault_card_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_evervault_card_cards_parent_id_idx" ON "pages_blocks_evervault_card_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_evervault_card_order_idx" ON "pages_blocks_evervault_card" USING btree ("_order");
  CREATE INDEX "pages_blocks_evervault_card_parent_id_idx" ON "pages_blocks_evervault_card" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_evervault_card_path_idx" ON "pages_blocks_evervault_card" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_evervault_card_cards_order_idx" ON "_pages_v_blocks_evervault_card_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_evervault_card_cards_parent_id_idx" ON "_pages_v_blocks_evervault_card_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_evervault_card_order_idx" ON "_pages_v_blocks_evervault_card" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_evervault_card_parent_id_idx" ON "_pages_v_blocks_evervault_card" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_evervault_card_path_idx" ON "_pages_v_blocks_evervault_card" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_evervault_card_cards" CASCADE;
  DROP TABLE "pages_blocks_evervault_card" CASCADE;
  DROP TABLE "_pages_v_blocks_evervault_card_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_evervault_card" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_evervault_card_cards_height";
  DROP TYPE "public"."enum_pages_blocks_evervault_card_cards_max_width";
  DROP TYPE "public"."enum_pages_blocks_evervault_card_layout";
  DROP TYPE "public"."enum_pages_blocks_evervault_card_grid_columns";
  DROP TYPE "public"."enum__pages_v_blocks_evervault_card_cards_height";
  DROP TYPE "public"."enum__pages_v_blocks_evervault_card_cards_max_width";
  DROP TYPE "public"."enum__pages_v_blocks_evervault_card_layout";
  DROP TYPE "public"."enum__pages_v_blocks_evervault_card_grid_columns";`)
}
