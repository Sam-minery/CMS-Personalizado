import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_height" AS ENUM('screen', '30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_ripple_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_grid_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_height" AS ENUM('screen', '30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_ripple_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_grid_size" AS ENUM('small', 'medium', 'large');
  CREATE TABLE "pages_blocks_background_ripple_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Background cell animation with framer motion',
  	"subtitle" varchar DEFAULT '',
  	"background_color" "enum_pages_blocks_background_ripple_effect_background_color" DEFAULT 'slate-950',
  	"height" "enum_pages_blocks_background_ripple_effect_height" DEFAULT 'screen',
  	"ripple_color" "enum_pages_blocks_background_ripple_effect_ripple_color" DEFAULT 'blue',
  	"grid_size" "enum_pages_blocks_background_ripple_effect_grid_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_background_ripple_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Background cell animation with framer motion',
  	"subtitle" varchar DEFAULT '',
  	"background_color" "enum__pages_v_blocks_background_ripple_effect_background_color" DEFAULT 'slate-950',
  	"height" "enum__pages_v_blocks_background_ripple_effect_height" DEFAULT 'screen',
  	"ripple_color" "enum__pages_v_blocks_background_ripple_effect_ripple_color" DEFAULT 'blue',
  	"grid_size" "enum__pages_v_blocks_background_ripple_effect_grid_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_background_ripple_effect" ADD CONSTRAINT "pages_blocks_background_ripple_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_background_ripple_effect" ADD CONSTRAINT "_pages_v_blocks_background_ripple_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_background_ripple_effect_order_idx" ON "pages_blocks_background_ripple_effect" USING btree ("_order");
  CREATE INDEX "pages_blocks_background_ripple_effect_parent_id_idx" ON "pages_blocks_background_ripple_effect" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_background_ripple_effect_path_idx" ON "pages_blocks_background_ripple_effect" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_background_ripple_effect_order_idx" ON "_pages_v_blocks_background_ripple_effect" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_background_ripple_effect_parent_id_idx" ON "_pages_v_blocks_background_ripple_effect" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_background_ripple_effect_path_idx" ON "_pages_v_blocks_background_ripple_effect" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_background_ripple_effect" CASCADE;
  DROP TABLE "_pages_v_blocks_background_ripple_effect" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_background_color";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_height";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_ripple_color";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_grid_size";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_height";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_ripple_color";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_grid_size";`)
}
