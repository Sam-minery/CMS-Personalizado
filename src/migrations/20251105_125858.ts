import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_pricing_template_features_icon" AS ENUM('lock', 'users', 'loop');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_template_features_icon" AS ENUM('lock', 'users', 'loop');
  CREATE TABLE "pages_blocks_pricing_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_pricing_template_features_icon" DEFAULT 'lock',
  	"text" varchar DEFAULT 'Feature'
  );
  
  CREATE TABLE "pages_blocks_pricing_template_pricing_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_template_pricing_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"price" varchar DEFAULT '10',
  	"description" varchar DEFAULT 'Description',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_link_type" "t" DEFAULT 'custom',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar DEFAULT '/'
  );
  
  CREATE TABLE "pages_blocks_pricing_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pricing_template_top_text" varchar DEFAULT 'Trusted by 500+ enterprise companies',
  	"pricing_template_heading" varchar DEFAULT 'Affordable pricing. <br /> Easy scaling.',
  	"pricing_template_subheading" varchar DEFAULT 'Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you''re ready',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_pricing_template_features_icon" DEFAULT 'lock',
  	"text" varchar DEFAULT 'Feature',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template_pricing_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template_pricing_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"price" varchar DEFAULT '10',
  	"description" varchar DEFAULT 'Description',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_link_type" "t" DEFAULT 'custom',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar DEFAULT '/',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pricing_template_top_text" varchar DEFAULT 'Trusted by 500+ enterprise companies',
  	"pricing_template_heading" varchar DEFAULT 'Affordable pricing. <br /> Easy scaling.',
  	"pricing_template_subheading" varchar DEFAULT 'Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you''re ready',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_pricing_template_features" ADD CONSTRAINT "pages_blocks_pricing_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template_pricing_cards_steps" ADD CONSTRAINT "pages_blocks_pricing_template_pricing_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_template_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template_pricing_cards" ADD CONSTRAINT "pages_blocks_pricing_template_pricing_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template" ADD CONSTRAINT "pages_blocks_pricing_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template_features" ADD CONSTRAINT "_pages_v_blocks_pricing_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template_pricing_cards_steps" ADD CONSTRAINT "_pages_v_blocks_pricing_template_pricing_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_template_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template_pricing_cards" ADD CONSTRAINT "_pages_v_blocks_pricing_template_pricing_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template" ADD CONSTRAINT "_pages_v_blocks_pricing_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pricing_template_features_order_idx" ON "pages_blocks_pricing_template_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_features_parent_id_idx" ON "pages_blocks_pricing_template_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_steps_order_idx" ON "pages_blocks_pricing_template_pricing_cards_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_steps_parent_id_idx" ON "pages_blocks_pricing_template_pricing_cards_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_order_idx" ON "pages_blocks_pricing_template_pricing_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_parent_id_idx" ON "pages_blocks_pricing_template_pricing_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_order_idx" ON "pages_blocks_pricing_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_parent_id_idx" ON "pages_blocks_pricing_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_path_idx" ON "pages_blocks_pricing_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_template_features_order_idx" ON "_pages_v_blocks_pricing_template_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_features_parent_id_idx" ON "_pages_v_blocks_pricing_template_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_steps_order_idx" ON "_pages_v_blocks_pricing_template_pricing_cards_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_steps_parent_id_idx" ON "_pages_v_blocks_pricing_template_pricing_cards_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_order_idx" ON "_pages_v_blocks_pricing_template_pricing_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_parent_id_idx" ON "_pages_v_blocks_pricing_template_pricing_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_order_idx" ON "_pages_v_blocks_pricing_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_parent_id_idx" ON "_pages_v_blocks_pricing_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_path_idx" ON "_pages_v_blocks_pricing_template" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_pricing_template_features" CASCADE;
  DROP TABLE "pages_blocks_pricing_template_pricing_cards_steps" CASCADE;
  DROP TABLE "pages_blocks_pricing_template_pricing_cards" CASCADE;
  DROP TABLE "pages_blocks_pricing_template" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template_pricing_cards_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template_pricing_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_pricing_template_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_template_features_icon";`)
}
