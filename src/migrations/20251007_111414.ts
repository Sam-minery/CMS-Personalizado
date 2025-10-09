import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_glowing_star_card_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glowing_star_card_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_glowing_star_card_star_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum_glowing_star_card_height" AS ENUM('auto', 'screen', '30rem', '40rem', '50rem');
  CREATE TYPE "public"."enum__glowing_star_card_v_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glowing_star_card_v_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__glowing_star_card_v_star_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum__glowing_star_card_v_height" AS ENUM('auto', 'screen', '30rem', '40rem', '50rem');
  CREATE TABLE "glowing_star_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Next.js 14',
  	"description" varchar DEFAULT 'The power of full-stack to the frontend. Read the release notes.',
  	"button_text" varchar DEFAULT 'Ver más',
  	"button_link_type" "enum_glowing_star_card_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum_glowing_star_card_background_color" DEFAULT 'slate-950',
  	"star_color" "enum_glowing_star_card_star_color" DEFAULT 'blue',
  	"height" "enum_glowing_star_card_height" DEFAULT 'auto',
  	"block_name" varchar
  );
  
  CREATE TABLE "_glowing_star_card_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Next.js 14',
  	"description" varchar DEFAULT 'The power of full-stack to the frontend. Read the release notes.',
  	"button_text" varchar DEFAULT 'Ver más',
  	"button_link_type" "enum__glowing_star_card_v_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum__glowing_star_card_v_background_color" DEFAULT 'slate-950',
  	"star_color" "enum__glowing_star_card_v_star_color" DEFAULT 'blue',
  	"height" "enum__glowing_star_card_v_height" DEFAULT 'auto',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "glowing_star_card" ADD CONSTRAINT "glowing_star_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glowing_star_card_v" ADD CONSTRAINT "_glowing_star_card_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "glowing_star_card_order_idx" ON "glowing_star_card" USING btree ("_order");
  CREATE INDEX "glowing_star_card_parent_id_idx" ON "glowing_star_card" USING btree ("_parent_id");
  CREATE INDEX "glowing_star_card_path_idx" ON "glowing_star_card" USING btree ("_path");
  CREATE INDEX "_glowing_star_card_v_order_idx" ON "_glowing_star_card_v" USING btree ("_order");
  CREATE INDEX "_glowing_star_card_v_parent_id_idx" ON "_glowing_star_card_v" USING btree ("_parent_id");
  CREATE INDEX "_glowing_star_card_v_path_idx" ON "_glowing_star_card_v" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "glowing_star_card" CASCADE;
  DROP TABLE "_glowing_star_card_v" CASCADE;
  DROP TYPE "public"."enum_glowing_star_card_button_link_type";
  DROP TYPE "public"."enum_glowing_star_card_background_color";
  DROP TYPE "public"."enum_glowing_star_card_star_color";
  DROP TYPE "public"."enum_glowing_star_card_height";
  DROP TYPE "public"."enum__glowing_star_card_v_button_link_type";
  DROP TYPE "public"."enum__glowing_star_card_v_background_color";
  DROP TYPE "public"."enum__glowing_star_card_v_star_color";
  DROP TYPE "public"."enum__glowing_star_card_v_height";`)
}
