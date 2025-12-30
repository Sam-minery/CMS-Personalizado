import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_sticky_banner_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_sticky_banner_banner_color" AS ENUM('blue', 'red', 'green', 'yellow');
  CREATE TYPE "public"."enum__pages_v_blocks_sticky_banner_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_sticky_banner_banner_color" AS ENUM('blue', 'red', 'green', 'yellow');
  CREATE TABLE "pages_blocks_sticky_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" varchar DEFAULT 'Announcing $10M seed funding from project mayhem ventures.',
  	"link_text" varchar,
  	"link_type" "enum_pages_blocks_sticky_banner_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"banner_color" "enum_pages_blocks_sticky_banner_banner_color" DEFAULT 'blue',
  	"hide_on_scroll" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_sticky_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" varchar DEFAULT 'Announcing $10M seed funding from project mayhem ventures.',
  	"link_text" varchar,
  	"link_type" "enum__pages_v_blocks_sticky_banner_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"banner_color" "enum__pages_v_blocks_sticky_banner_banner_color" DEFAULT 'blue',
  	"hide_on_scroll" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_sticky_banner" ADD CONSTRAINT "pages_blocks_sticky_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_sticky_banner" ADD CONSTRAINT "_pages_v_blocks_sticky_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_sticky_banner_order_idx" ON "pages_blocks_sticky_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_sticky_banner_parent_id_idx" ON "pages_blocks_sticky_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_sticky_banner_path_idx" ON "pages_blocks_sticky_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_sticky_banner_order_idx" ON "_pages_v_blocks_sticky_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_sticky_banner_parent_id_idx" ON "_pages_v_blocks_sticky_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_sticky_banner_path_idx" ON "_pages_v_blocks_sticky_banner" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_sticky_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_sticky_banner" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_sticky_banner_link_type";
  DROP TYPE "public"."enum_pages_blocks_sticky_banner_banner_color";
  DROP TYPE "public"."enum__pages_v_blocks_sticky_banner_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_sticky_banner_banner_color";`)
}
