import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hover_effect_color_scheme" AS ENUM('slate', 'blue', 'red', 'green', 'purple', 'pink', 'orange', 'emerald', 'amber', 'indigo');
  CREATE TYPE "public"."enum__pages_v_blocks_hover_effect_color_scheme" AS ENUM('slate', 'blue', 'red', 'green', 'purple', 'pink', 'orange', 'emerald', 'amber', 'indigo');
  CREATE TABLE "pages_blocks_hover_effect_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "pages_blocks_hover_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"color_scheme" "enum_pages_blocks_hover_effect_color_scheme" DEFAULT 'slate',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hover_effect_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hover_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"color_scheme" "enum__pages_v_blocks_hover_effect_color_scheme" DEFAULT 'slate',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_hover_effect_projects" ADD CONSTRAINT "pages_blocks_hover_effect_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hover_effect"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hover_effect" ADD CONSTRAINT "pages_blocks_hover_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hover_effect_projects" ADD CONSTRAINT "_pages_v_blocks_hover_effect_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hover_effect"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hover_effect" ADD CONSTRAINT "_pages_v_blocks_hover_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hover_effect_projects_order_idx" ON "pages_blocks_hover_effect_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_hover_effect_projects_parent_id_idx" ON "pages_blocks_hover_effect_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hover_effect_order_idx" ON "pages_blocks_hover_effect" USING btree ("_order");
  CREATE INDEX "pages_blocks_hover_effect_parent_id_idx" ON "pages_blocks_hover_effect" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hover_effect_path_idx" ON "pages_blocks_hover_effect" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hover_effect_projects_order_idx" ON "_pages_v_blocks_hover_effect_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hover_effect_projects_parent_id_idx" ON "_pages_v_blocks_hover_effect_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hover_effect_order_idx" ON "_pages_v_blocks_hover_effect" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hover_effect_parent_id_idx" ON "_pages_v_blocks_hover_effect" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hover_effect_path_idx" ON "_pages_v_blocks_hover_effect" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_hover_effect_projects" CASCADE;
  DROP TABLE "pages_blocks_hover_effect" CASCADE;
  DROP TABLE "_pages_v_blocks_hover_effect_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_hover_effect" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_hover_effect_color_scheme";
  DROP TYPE "public"."enum__pages_v_blocks_hover_effect_color_scheme";`)
}
