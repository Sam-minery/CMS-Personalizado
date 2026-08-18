import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_fondo_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#f8f4ff',
  	"accent_color" varchar,
  	"enable_parallax" boolean DEFAULT true,
  	"parallax_intensity" numeric DEFAULT 0.35,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_fondo_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#f8f4ff',
  	"accent_color" varchar,
  	"enable_parallax" boolean DEFAULT true,
  	"parallax_intensity" numeric DEFAULT 0.35,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_fondo_drop" ADD CONSTRAINT "pages_blocks_fondo_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fondo_drop" ADD CONSTRAINT "_pages_v_blocks_fondo_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_fondo_drop_order_idx" ON "pages_blocks_fondo_drop" USING btree ("_order");
  CREATE INDEX "pages_blocks_fondo_drop_parent_id_idx" ON "pages_blocks_fondo_drop" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_fondo_drop_path_idx" ON "pages_blocks_fondo_drop" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_fondo_drop_order_idx" ON "_pages_v_blocks_fondo_drop" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_fondo_drop_parent_id_idx" ON "_pages_v_blocks_fondo_drop" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_fondo_drop_path_idx" ON "_pages_v_blocks_fondo_drop" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_fondo_drop" CASCADE;
  DROP TABLE "_pages_v_blocks_fondo_drop" CASCADE;`)
}
