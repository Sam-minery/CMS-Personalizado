import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_feature1_template_cards_skeleton" AS ENUM('first', 'second', 'third');
  CREATE TYPE "public"."enum__pages_v_blocks_feature1_template_cards_skeleton" AS ENUM('first', 'second', 'third');
  CREATE TABLE "pages_blocks_feature1_template_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"skeleton" "enum_pages_blocks_feature1_template_cards_skeleton" DEFAULT 'first'
  );
  
  CREATE TABLE "pages_blocks_feature1_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature1_template_heading" varchar DEFAULT 'Built for Fast Moving <br /> Teams That Need Control.',
  	"feature1_template_subheading" varchar DEFAULT 'Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature1_template_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"skeleton" "enum__pages_v_blocks_feature1_template_cards_skeleton" DEFAULT 'first',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature1_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature1_template_heading" varchar DEFAULT 'Built for Fast Moving <br /> Teams That Need Control.',
  	"feature1_template_subheading" varchar DEFAULT 'Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_feature1_template_cards" ADD CONSTRAINT "pages_blocks_feature1_template_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature1_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature1_template" ADD CONSTRAINT "pages_blocks_feature1_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" ADD CONSTRAINT "_pages_v_blocks_feature1_template_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature1_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature1_template" ADD CONSTRAINT "_pages_v_blocks_feature1_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_feature1_template_cards_order_idx" ON "pages_blocks_feature1_template_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature1_template_cards_parent_id_idx" ON "pages_blocks_feature1_template_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature1_template_order_idx" ON "pages_blocks_feature1_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature1_template_parent_id_idx" ON "pages_blocks_feature1_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature1_template_path_idx" ON "pages_blocks_feature1_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature1_template_cards_order_idx" ON "_pages_v_blocks_feature1_template_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature1_template_cards_parent_id_idx" ON "_pages_v_blocks_feature1_template_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature1_template_order_idx" ON "_pages_v_blocks_feature1_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature1_template_parent_id_idx" ON "_pages_v_blocks_feature1_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature1_template_path_idx" ON "_pages_v_blocks_feature1_template" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_feature1_template_cards" CASCADE;
  DROP TABLE "pages_blocks_feature1_template" CASCADE;
  DROP TABLE "_pages_v_blocks_feature1_template_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_feature1_template" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_feature1_template_cards_skeleton";
  DROP TYPE "public"."enum__pages_v_blocks_feature1_template_cards_skeleton";`)
}
