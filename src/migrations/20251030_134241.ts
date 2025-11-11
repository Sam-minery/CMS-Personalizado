import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_lamp_section_header_background_color" AS ENUM('slate-950', 'zinc-950', 'neutral-950', 'gray-950');
  CREATE TYPE "public"."enum_pages_blocks_lamp_section_header_hue" AS ENUM('cyan', 'emerald', 'violet', 'fuchsia', 'sky', 'indigo', 'amber', 'rose');
  CREATE TYPE "public"."enum__pages_v_blocks_lamp_section_header_background_color" AS ENUM('slate-950', 'zinc-950', 'neutral-950', 'gray-950');
  CREATE TYPE "public"."enum__pages_v_blocks_lamp_section_header_hue" AS ENUM('cyan', 'emerald', 'violet', 'fuchsia', 'sky', 'indigo', 'amber', 'rose');
  CREATE TABLE "pages_blocks_lamp_section_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_top" varchar DEFAULT 'Build lamps',
  	"title_bottom" varchar DEFAULT 'the right way',
  	"background_color" "enum_pages_blocks_lamp_section_header_background_color" DEFAULT 'slate-950',
  	"hue" "enum_pages_blocks_lamp_section_header_hue" DEFAULT 'cyan',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_lamp_section_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title_top" varchar DEFAULT 'Build lamps',
  	"title_bottom" varchar DEFAULT 'the right way',
  	"background_color" "enum__pages_v_blocks_lamp_section_header_background_color" DEFAULT 'slate-950',
  	"hue" "enum__pages_v_blocks_lamp_section_header_hue" DEFAULT 'cyan',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_lamp_section_header" ADD CONSTRAINT "pages_blocks_lamp_section_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_lamp_section_header" ADD CONSTRAINT "_pages_v_blocks_lamp_section_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_lamp_section_header_order_idx" ON "pages_blocks_lamp_section_header" USING btree ("_order");
  CREATE INDEX "pages_blocks_lamp_section_header_parent_id_idx" ON "pages_blocks_lamp_section_header" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_lamp_section_header_path_idx" ON "pages_blocks_lamp_section_header" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_lamp_section_header_order_idx" ON "_pages_v_blocks_lamp_section_header" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_lamp_section_header_parent_id_idx" ON "_pages_v_blocks_lamp_section_header" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_lamp_section_header_path_idx" ON "_pages_v_blocks_lamp_section_header" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_lamp_section_header" CASCADE;
  DROP TABLE "_pages_v_blocks_lamp_section_header" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_lamp_section_header_background_color";
  DROP TYPE "public"."enum_pages_blocks_lamp_section_header_hue";
  DROP TYPE "public"."enum__pages_v_blocks_lamp_section_header_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_lamp_section_header_hue";`)
}
