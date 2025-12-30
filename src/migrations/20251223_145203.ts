import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_infinite_moving_cards_color_scheme" AS ENUM('slate', 'blue', 'red', 'green', 'purple', 'pink', 'orange', 'emerald', 'amber', 'indigo');
  CREATE TYPE "public"."enum_pages_blocks_infinite_moving_cards_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum_pages_blocks_infinite_moving_cards_direction" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_infinite_moving_cards_speed" AS ENUM('fast', 'normal', 'slow');
  CREATE TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_color_scheme" AS ENUM('slate', 'blue', 'red', 'green', 'purple', 'pink', 'orange', 'emerald', 'amber', 'indigo');
  CREATE TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_direction" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_speed" AS ENUM('fast', 'normal', 'slow');
  CREATE TABLE "pages_blocks_infinite_moving_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"quote" varchar,
  	"name" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_infinite_moving_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_pages_blocks_infinite_moving_cards_color_scheme" DEFAULT 'slate',
  	"height" "enum_pages_blocks_infinite_moving_cards_height" DEFAULT '40rem',
  	"direction" "enum_pages_blocks_infinite_moving_cards_direction" DEFAULT 'left',
  	"speed" "enum_pages_blocks_infinite_moving_cards_speed" DEFAULT 'normal',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_infinite_moving_cards_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"quote" varchar,
  	"name" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_infinite_moving_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__pages_v_blocks_infinite_moving_cards_color_scheme" DEFAULT 'slate',
  	"height" "enum__pages_v_blocks_infinite_moving_cards_height" DEFAULT '40rem',
  	"direction" "enum__pages_v_blocks_infinite_moving_cards_direction" DEFAULT 'left',
  	"speed" "enum__pages_v_blocks_infinite_moving_cards_speed" DEFAULT 'normal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_infinite_moving_cards_items" ADD CONSTRAINT "pages_blocks_infinite_moving_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_infinite_moving_cards_items" ADD CONSTRAINT "pages_blocks_infinite_moving_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_infinite_moving_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_infinite_moving_cards" ADD CONSTRAINT "pages_blocks_infinite_moving_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_infinite_moving_cards_items" ADD CONSTRAINT "_pages_v_blocks_infinite_moving_cards_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_infinite_moving_cards_items" ADD CONSTRAINT "_pages_v_blocks_infinite_moving_cards_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_infinite_moving_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_infinite_moving_cards" ADD CONSTRAINT "_pages_v_blocks_infinite_moving_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_infinite_moving_cards_items_order_idx" ON "pages_blocks_infinite_moving_cards_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_infinite_moving_cards_items_parent_id_idx" ON "pages_blocks_infinite_moving_cards_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_infinite_moving_cards_items_image_idx" ON "pages_blocks_infinite_moving_cards_items" USING btree ("image_id");
  CREATE INDEX "pages_blocks_infinite_moving_cards_order_idx" ON "pages_blocks_infinite_moving_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_infinite_moving_cards_parent_id_idx" ON "pages_blocks_infinite_moving_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_infinite_moving_cards_path_idx" ON "pages_blocks_infinite_moving_cards" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_infinite_moving_cards_items_order_idx" ON "_pages_v_blocks_infinite_moving_cards_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_infinite_moving_cards_items_parent_id_idx" ON "_pages_v_blocks_infinite_moving_cards_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_infinite_moving_cards_items_image_idx" ON "_pages_v_blocks_infinite_moving_cards_items" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_infinite_moving_cards_order_idx" ON "_pages_v_blocks_infinite_moving_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_infinite_moving_cards_parent_id_idx" ON "_pages_v_blocks_infinite_moving_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_infinite_moving_cards_path_idx" ON "_pages_v_blocks_infinite_moving_cards" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_infinite_moving_cards_items" CASCADE;
  DROP TABLE "pages_blocks_infinite_moving_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_infinite_moving_cards_items" CASCADE;
  DROP TABLE "_pages_v_blocks_infinite_moving_cards" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_infinite_moving_cards_color_scheme";
  DROP TYPE "public"."enum_pages_blocks_infinite_moving_cards_height";
  DROP TYPE "public"."enum_pages_blocks_infinite_moving_cards_direction";
  DROP TYPE "public"."enum_pages_blocks_infinite_moving_cards_speed";
  DROP TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_height";
  DROP TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_direction";
  DROP TYPE "public"."enum__pages_v_blocks_infinite_moving_cards_speed";`)
}
