import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_pulse_beams_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_pulse_beams_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_pages_blocks_pulse_beams_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TABLE "pages_blocks_pulse_beams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_text" varchar DEFAULT 'Connect',
  	"button_link_type" "enum_pages_blocks_pulse_beams_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum_pages_blocks_pulse_beams_background_color" DEFAULT 'slate-950',
  	"height" "enum_pages_blocks_pulse_beams_height" DEFAULT '40rem',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pulse_beams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"button_text" varchar DEFAULT 'Connect',
  	"button_link_type" "enum__pages_v_blocks_pulse_beams_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum__pages_v_blocks_pulse_beams_background_color" DEFAULT 'slate-950',
  	"height" "enum__pages_v_blocks_pulse_beams_height" DEFAULT '40rem',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_pulse_beams" ADD CONSTRAINT "pages_blocks_pulse_beams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pulse_beams" ADD CONSTRAINT "_pages_v_blocks_pulse_beams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pulse_beams_order_idx" ON "pages_blocks_pulse_beams" USING btree ("_order");
  CREATE INDEX "pages_blocks_pulse_beams_parent_id_idx" ON "pages_blocks_pulse_beams" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pulse_beams_path_idx" ON "pages_blocks_pulse_beams" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pulse_beams_order_idx" ON "_pages_v_blocks_pulse_beams" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pulse_beams_parent_id_idx" ON "_pages_v_blocks_pulse_beams" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pulse_beams_path_idx" ON "_pages_v_blocks_pulse_beams" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_pulse_beams" CASCADE;
  DROP TABLE "_pages_v_blocks_pulse_beams" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_background_color";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_height";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_height";`)
}
