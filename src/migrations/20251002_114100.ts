import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_spotlight_spotlight_color" AS ENUM('white', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'cyan', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_spotlight_background_color" AS ENUM('black', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_spotlight_spotlight_color" AS ENUM('white', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'cyan', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_spotlight_background_color" AS ENUM('black', 'white');
  CREATE TABLE "pages_blocks_spotlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Spotlight is the new trend.',
  	"description" jsonb,
  	"spotlight_color" "enum_pages_blocks_spotlight_spotlight_color" DEFAULT 'white',
  	"background_color" "enum_pages_blocks_spotlight_background_color" DEFAULT 'black',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spotlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Spotlight is the new trend.',
  	"description" jsonb,
  	"spotlight_color" "enum__pages_v_blocks_spotlight_spotlight_color" DEFAULT 'white',
  	"background_color" "enum__pages_v_blocks_spotlight_background_color" DEFAULT 'black',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_spotlight" ADD CONSTRAINT "pages_blocks_spotlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spotlight" ADD CONSTRAINT "_pages_v_blocks_spotlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_spotlight_order_idx" ON "pages_blocks_spotlight" USING btree ("_order");
  CREATE INDEX "pages_blocks_spotlight_parent_id_idx" ON "pages_blocks_spotlight" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spotlight_path_idx" ON "pages_blocks_spotlight" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_spotlight_order_idx" ON "_pages_v_blocks_spotlight" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spotlight_parent_id_idx" ON "_pages_v_blocks_spotlight" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spotlight_path_idx" ON "_pages_v_blocks_spotlight" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_spotlight" CASCADE;
  DROP TABLE "_pages_v_blocks_spotlight" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_spotlight_spotlight_color";
  DROP TYPE "public"."enum_pages_blocks_spotlight_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_spotlight_spotlight_color";
  DROP TYPE "public"."enum__pages_v_blocks_spotlight_background_color";`)
}
