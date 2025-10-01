import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_animated_pin3_d_background_color" AS ENUM('violet-purple-blue', 'green-blue-cyan', 'pink-red-orange', 'yellow-orange-red');
  CREATE TYPE "public"."enum__pages_v_blocks_animated_pin3_d_background_color" AS ENUM('violet-purple-blue', 'green-blue-cyan', 'pink-red-orange', 'yellow-orange-red');
  CREATE TABLE "pages_blocks_animated_pin3_d" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Aceternity UI',
  	"description" varchar DEFAULT 'Customizable Tailwind CSS and Framer Motion Components.',
  	"media_id" integer,
  	"pin_title" varchar DEFAULT '/ui.aceternity.com',
  	"href" varchar,
  	"background_color" "enum_pages_blocks_animated_pin3_d_background_color" DEFAULT 'violet-purple-blue',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_animated_pin3_d" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Aceternity UI',
  	"description" varchar DEFAULT 'Customizable Tailwind CSS and Framer Motion Components.',
  	"media_id" integer,
  	"pin_title" varchar DEFAULT '/ui.aceternity.com',
  	"href" varchar,
  	"background_color" "enum__pages_v_blocks_animated_pin3_d_background_color" DEFAULT 'violet-purple-blue',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_animated_pin3_d" ADD CONSTRAINT "pages_blocks_animated_pin3_d_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_animated_pin3_d" ADD CONSTRAINT "pages_blocks_animated_pin3_d_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_animated_pin3_d" ADD CONSTRAINT "_pages_v_blocks_animated_pin3_d_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_animated_pin3_d" ADD CONSTRAINT "_pages_v_blocks_animated_pin3_d_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_animated_pin3_d_order_idx" ON "pages_blocks_animated_pin3_d" USING btree ("_order");
  CREATE INDEX "pages_blocks_animated_pin3_d_parent_id_idx" ON "pages_blocks_animated_pin3_d" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_animated_pin3_d_path_idx" ON "pages_blocks_animated_pin3_d" USING btree ("_path");
  CREATE INDEX "pages_blocks_animated_pin3_d_media_idx" ON "pages_blocks_animated_pin3_d" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_order_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_parent_id_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_path_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_media_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_animated_pin3_d" CASCADE;
  DROP TABLE "_pages_v_blocks_animated_pin3_d" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_animated_pin3_d_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_animated_pin3_d_background_color";`)
}
