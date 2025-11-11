import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_canvas_reveal_effect_padding" AS ENUM('py-0', 'py-10', 'py-20', 'py-40');
  CREATE TYPE "public"."enum_pages_blocks_canvas_reveal_effect_background_color" AS ENUM('bg-white dark:bg-black', 'bg-white', 'bg-black', 'bg-transparent');
  CREATE TYPE "public"."enum__pages_v_blocks_canvas_reveal_effect_padding" AS ENUM('py-0', 'py-10', 'py-20', 'py-40');
  CREATE TYPE "public"."enum__pages_v_blocks_canvas_reveal_effect_background_color" AS ENUM('bg-white dark:bg-black', 'bg-white', 'bg-black', 'bg-transparent');
  CREATE TABLE "pages_blocks_canvas_reveal_effect_cards_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"r" numeric DEFAULT 0,
  	"g" numeric DEFAULT 255,
  	"b" numeric DEFAULT 255
  );
  
  CREATE TABLE "pages_blocks_canvas_reveal_effect_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"animation_speed" numeric DEFAULT 5.1,
  	"container_class_name" varchar DEFAULT 'bg-emerald-900',
  	"dot_size" numeric,
  	"show_radial_gradient" boolean DEFAULT true
  );
  
  CREATE TABLE "pages_blocks_canvas_reveal_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"padding" "enum_pages_blocks_canvas_reveal_effect_padding" DEFAULT 'py-20',
  	"background_color" "enum_pages_blocks_canvas_reveal_effect_background_color" DEFAULT 'bg-white dark:bg-black',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_canvas_reveal_effect_cards_colors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"r" numeric DEFAULT 0,
  	"g" numeric DEFAULT 255,
  	"b" numeric DEFAULT 255,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_canvas_reveal_effect_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"animation_speed" numeric DEFAULT 5.1,
  	"container_class_name" varchar DEFAULT 'bg-emerald-900',
  	"dot_size" numeric,
  	"show_radial_gradient" boolean DEFAULT true,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_canvas_reveal_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"padding" "enum__pages_v_blocks_canvas_reveal_effect_padding" DEFAULT 'py-20',
  	"background_color" "enum__pages_v_blocks_canvas_reveal_effect_background_color" DEFAULT 'bg-white dark:bg-black',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_canvas_reveal_effect_cards_colors" ADD CONSTRAINT "pages_blocks_canvas_reveal_effect_cards_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_canvas_reveal_effect_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_canvas_reveal_effect_cards" ADD CONSTRAINT "pages_blocks_canvas_reveal_effect_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_canvas_reveal_effect"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_canvas_reveal_effect" ADD CONSTRAINT "pages_blocks_canvas_reveal_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_canvas_reveal_effect_cards_colors" ADD CONSTRAINT "_pages_v_blocks_canvas_reveal_effect_cards_colors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_canvas_reveal_effect_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_canvas_reveal_effect_cards" ADD CONSTRAINT "_pages_v_blocks_canvas_reveal_effect_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_canvas_reveal_effect"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_canvas_reveal_effect" ADD CONSTRAINT "_pages_v_blocks_canvas_reveal_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_canvas_reveal_effect_cards_colors_order_idx" ON "pages_blocks_canvas_reveal_effect_cards_colors" USING btree ("_order");
  CREATE INDEX "pages_blocks_canvas_reveal_effect_cards_colors_parent_id_idx" ON "pages_blocks_canvas_reveal_effect_cards_colors" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_canvas_reveal_effect_cards_order_idx" ON "pages_blocks_canvas_reveal_effect_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_canvas_reveal_effect_cards_parent_id_idx" ON "pages_blocks_canvas_reveal_effect_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_canvas_reveal_effect_order_idx" ON "pages_blocks_canvas_reveal_effect" USING btree ("_order");
  CREATE INDEX "pages_blocks_canvas_reveal_effect_parent_id_idx" ON "pages_blocks_canvas_reveal_effect" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_canvas_reveal_effect_path_idx" ON "pages_blocks_canvas_reveal_effect" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_cards_colors_order_idx" ON "_pages_v_blocks_canvas_reveal_effect_cards_colors" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_cards_colors_parent_id_idx" ON "_pages_v_blocks_canvas_reveal_effect_cards_colors" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_cards_order_idx" ON "_pages_v_blocks_canvas_reveal_effect_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_cards_parent_id_idx" ON "_pages_v_blocks_canvas_reveal_effect_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_order_idx" ON "_pages_v_blocks_canvas_reveal_effect" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_parent_id_idx" ON "_pages_v_blocks_canvas_reveal_effect" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_canvas_reveal_effect_path_idx" ON "_pages_v_blocks_canvas_reveal_effect" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_canvas_reveal_effect_cards_colors" CASCADE;
  DROP TABLE "pages_blocks_canvas_reveal_effect_cards" CASCADE;
  DROP TABLE "pages_blocks_canvas_reveal_effect" CASCADE;
  DROP TABLE "_pages_v_blocks_canvas_reveal_effect_cards_colors" CASCADE;
  DROP TABLE "_pages_v_blocks_canvas_reveal_effect_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_canvas_reveal_effect" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_canvas_reveal_effect_padding";
  DROP TYPE "public"."enum_pages_blocks_canvas_reveal_effect_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_canvas_reveal_effect_padding";
  DROP TYPE "public"."enum__pages_v_blocks_canvas_reveal_effect_background_color";`)
}
