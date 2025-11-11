import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_sparkles_background_color" AS ENUM('black', 'slate-950', 'zinc-950', 'neutral-950', 'gray-950');
  CREATE TYPE "public"."enum_pages_blocks_sparkles_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_sparkles_background_color" AS ENUM('black', 'slate-950', 'zinc-950', 'neutral-950', 'gray-950');
  CREATE TYPE "public"."enum__pages_v_blocks_sparkles_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TABLE "pages_blocks_sparkles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Aceternity',
  	"background_color" "enum_pages_blocks_sparkles_background_color" DEFAULT 'black',
  	"height" "enum_pages_blocks_sparkles_height" DEFAULT '40rem',
  	"min_size" numeric DEFAULT 0.4,
  	"max_size" numeric DEFAULT 1,
  	"particle_density" numeric DEFAULT 1200,
  	"particle_color" varchar DEFAULT '#FFFFFF',
  	"show_gradients" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sparkles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Aceternity',
  	"background_color" "enum__pages_v_blocks_sparkles_background_color" DEFAULT 'black',
  	"height" "enum__pages_v_blocks_sparkles_height" DEFAULT '40rem',
  	"min_size" numeric DEFAULT 0.4,
  	"max_size" numeric DEFAULT 1,
  	"particle_density" numeric DEFAULT 1200,
  	"particle_color" varchar DEFAULT '#FFFFFF',
  	"show_gradients" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_sparkles" ADD CONSTRAINT "pages_blocks_sparkles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sparkles" ADD CONSTRAINT "_pages_v_blocks_sparkles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_sparkles_order_idx" ON "pages_blocks_sparkles" USING btree ("_order");
  CREATE INDEX "pages_blocks_sparkles_parent_id_idx" ON "pages_blocks_sparkles" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sparkles_path_idx" ON "pages_blocks_sparkles" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_sparkles_order_idx" ON "_pages_v_blocks_sparkles" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sparkles_parent_id_idx" ON "_pages_v_blocks_sparkles" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sparkles_path_idx" ON "_pages_v_blocks_sparkles" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_sparkles" CASCADE;
  DROP TABLE "_pages_v_blocks_sparkles" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_sparkles_background_color";
  DROP TYPE "public"."enum_pages_blocks_sparkles_height";
  DROP TYPE "public"."enum__pages_v_blocks_sparkles_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_sparkles_height";`)
}
