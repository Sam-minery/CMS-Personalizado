import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_world_map_padding" AS ENUM('py-0', 'py-20', 'py-40', 'py-60');
  CREATE TYPE "public"."enum__pages_v_blocks_world_map_padding" AS ENUM('py-0', 'py-20', 'py-40', 'py-60');
  CREATE TABLE "pages_blocks_world_map_dots" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"start_lat" numeric,
  	"start_lng" numeric,
  	"start_label" varchar,
  	"end_lat" numeric,
  	"end_lng" numeric,
  	"end_label" varchar
  );
  
  CREATE TABLE "pages_blocks_world_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Remote',
  	"title_highlight" varchar DEFAULT 'Connectivity',
  	"description" varchar DEFAULT 'Break free from traditional boundaries. Work from anywhere, at the comfort of your own studio apartment. Perfect for Nomads and Travellers.',
  	"line_color" varchar DEFAULT '#0ea5e9',
  	"padding" "enum_pages_blocks_world_map_padding" DEFAULT 'py-40',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_world_map_dots" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"start_lat" numeric,
  	"start_lng" numeric,
  	"start_label" varchar,
  	"end_lat" numeric,
  	"end_lng" numeric,
  	"end_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_world_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Remote',
  	"title_highlight" varchar DEFAULT 'Connectivity',
  	"description" varchar DEFAULT 'Break free from traditional boundaries. Work from anywhere, at the comfort of your own studio apartment. Perfect for Nomads and Travellers.',
  	"line_color" varchar DEFAULT '#0ea5e9',
  	"padding" "enum__pages_v_blocks_world_map_padding" DEFAULT 'py-40',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_world_map_dots" ADD CONSTRAINT "pages_blocks_world_map_dots_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_world_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_world_map" ADD CONSTRAINT "pages_blocks_world_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_world_map_dots" ADD CONSTRAINT "_pages_v_blocks_world_map_dots_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_world_map"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_world_map" ADD CONSTRAINT "_pages_v_blocks_world_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_world_map_dots_order_idx" ON "pages_blocks_world_map_dots" USING btree ("_order");
  CREATE INDEX "pages_blocks_world_map_dots_parent_id_idx" ON "pages_blocks_world_map_dots" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_world_map_order_idx" ON "pages_blocks_world_map" USING btree ("_order");
  CREATE INDEX "pages_blocks_world_map_parent_id_idx" ON "pages_blocks_world_map" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_world_map_path_idx" ON "pages_blocks_world_map" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_world_map_dots_order_idx" ON "_pages_v_blocks_world_map_dots" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_world_map_dots_parent_id_idx" ON "_pages_v_blocks_world_map_dots" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_world_map_order_idx" ON "_pages_v_blocks_world_map" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_world_map_parent_id_idx" ON "_pages_v_blocks_world_map" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_world_map_path_idx" ON "_pages_v_blocks_world_map" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_world_map_dots" CASCADE;
  DROP TABLE "pages_blocks_world_map" CASCADE;
  DROP TABLE "_pages_v_blocks_world_map_dots" CASCADE;
  DROP TABLE "_pages_v_blocks_world_map" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_world_map_padding";
  DROP TYPE "public"."enum__pages_v_blocks_world_map_padding";`)
}
