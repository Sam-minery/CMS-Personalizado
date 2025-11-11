import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_wavy_background_height" AS ENUM('h-screen', 'h-auto', 'h-[50vh]', 'h-[75vh]', 'h-[90vh]');
  CREATE TYPE "public"."enum_pages_blocks_wavy_background_padding" AS ENUM('pb-0', 'pb-20', 'pb-40', 'pb-60');
  CREATE TYPE "public"."enum_pages_blocks_wavy_background_max_width" AS ENUM('max-w-2xl', 'max-w-4xl', 'max-w-6xl', 'max-w-7xl', 'max-w-full');
  CREATE TYPE "public"."enum_pages_blocks_wavy_background_speed" AS ENUM('slow', 'fast');
  CREATE TYPE "public"."enum__pages_v_blocks_wavy_background_height" AS ENUM('h-screen', 'h-auto', 'h-[50vh]', 'h-[75vh]', 'h-[90vh]');
  CREATE TYPE "public"."enum__pages_v_blocks_wavy_background_padding" AS ENUM('pb-0', 'pb-20', 'pb-40', 'pb-60');
  CREATE TYPE "public"."enum__pages_v_blocks_wavy_background_max_width" AS ENUM('max-w-2xl', 'max-w-4xl', 'max-w-6xl', 'max-w-7xl', 'max-w-full');
  CREATE TYPE "public"."enum__pages_v_blocks_wavy_background_speed" AS ENUM('slow', 'fast');
  CREATE TABLE "pages_blocks_wavy_background" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Hero waves are cool',
  	"description" varchar DEFAULT 'Leverage the power of canvas to create a beautiful hero section',
  	"height" "enum_pages_blocks_wavy_background_height" DEFAULT 'h-screen',
  	"padding" "enum_pages_blocks_wavy_background_padding" DEFAULT 'pb-40',
  	"max_width" "enum_pages_blocks_wavy_background_max_width" DEFAULT 'max-w-4xl',
  	"speed" "enum_pages_blocks_wavy_background_speed" DEFAULT 'fast',
  	"wave_opacity" numeric DEFAULT 0.5,
  	"blur" numeric DEFAULT 10,
  	"wave_width" numeric DEFAULT 50,
  	"background_fill" varchar DEFAULT 'black',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_wavy_background" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Hero waves are cool',
  	"description" varchar DEFAULT 'Leverage the power of canvas to create a beautiful hero section',
  	"height" "enum__pages_v_blocks_wavy_background_height" DEFAULT 'h-screen',
  	"padding" "enum__pages_v_blocks_wavy_background_padding" DEFAULT 'pb-40',
  	"max_width" "enum__pages_v_blocks_wavy_background_max_width" DEFAULT 'max-w-4xl',
  	"speed" "enum__pages_v_blocks_wavy_background_speed" DEFAULT 'fast',
  	"wave_opacity" numeric DEFAULT 0.5,
  	"blur" numeric DEFAULT 10,
  	"wave_width" numeric DEFAULT 50,
  	"background_fill" varchar DEFAULT 'black',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_wavy_background" ADD CONSTRAINT "pages_blocks_wavy_background_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_wavy_background" ADD CONSTRAINT "_pages_v_blocks_wavy_background_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_wavy_background_order_idx" ON "pages_blocks_wavy_background" USING btree ("_order");
  CREATE INDEX "pages_blocks_wavy_background_parent_id_idx" ON "pages_blocks_wavy_background" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_wavy_background_path_idx" ON "pages_blocks_wavy_background" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_wavy_background_order_idx" ON "_pages_v_blocks_wavy_background" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_wavy_background_parent_id_idx" ON "_pages_v_blocks_wavy_background" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_wavy_background_path_idx" ON "_pages_v_blocks_wavy_background" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_wavy_background" CASCADE;
  DROP TABLE "_pages_v_blocks_wavy_background" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_wavy_background_height";
  DROP TYPE "public"."enum_pages_blocks_wavy_background_padding";
  DROP TYPE "public"."enum_pages_blocks_wavy_background_max_width";
  DROP TYPE "public"."enum_pages_blocks_wavy_background_speed";
  DROP TYPE "public"."enum__pages_v_blocks_wavy_background_height";
  DROP TYPE "public"."enum__pages_v_blocks_wavy_background_padding";
  DROP TYPE "public"."enum__pages_v_blocks_wavy_background_max_width";
  DROP TYPE "public"."enum__pages_v_blocks_wavy_background_speed";`)
}
