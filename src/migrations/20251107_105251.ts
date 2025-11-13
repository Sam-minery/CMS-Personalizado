import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_feature2_template_main_cards_skeleton" AS ENUM('first', 'second');
  CREATE TYPE "public"."enum_pages_blocks_feature2_template_features_icon" AS ENUM('workflow', 'integration', 'human');
  CREATE TYPE "public"."enum__pages_v_blocks_feature2_template_main_cards_skeleton" AS ENUM('first', 'second');
  CREATE TYPE "public"."enum__pages_v_blocks_feature2_template_features_icon" AS ENUM('workflow', 'integration', 'human');
  CREATE TABLE "pages_blocks_feature2_template_main_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"description" varchar DEFAULT 'Card description',
  	"skeleton" "enum_pages_blocks_feature2_template_main_cards_skeleton" DEFAULT 'first',
  	"logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_feature2_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_feature2_template_features_icon" DEFAULT 'workflow',
  	"title" varchar DEFAULT 'Feature Title',
  	"description" varchar DEFAULT 'Feature description'
  );
  
  CREATE TABLE "pages_blocks_feature2_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature2_template_main_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"description" varchar DEFAULT 'Card description',
  	"skeleton" "enum__pages_v_blocks_feature2_template_main_cards_skeleton" DEFAULT 'first',
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature2_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_feature2_template_features_icon" DEFAULT 'workflow',
  	"title" varchar DEFAULT 'Feature Title',
  	"description" varchar DEFAULT 'Feature description',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature2_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_feature2_template_main_cards" ADD CONSTRAINT "pages_blocks_feature2_template_main_cards_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template_main_cards" ADD CONSTRAINT "pages_blocks_feature2_template_main_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template_features" ADD CONSTRAINT "pages_blocks_feature2_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template" ADD CONSTRAINT "pages_blocks_feature2_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template_main_cards" ADD CONSTRAINT "_pages_v_blocks_feature2_template_main_cards_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template_main_cards" ADD CONSTRAINT "_pages_v_blocks_feature2_template_main_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template_features" ADD CONSTRAINT "_pages_v_blocks_feature2_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template" ADD CONSTRAINT "_pages_v_blocks_feature2_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_feature2_template_main_cards_order_idx" ON "pages_blocks_feature2_template_main_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature2_template_main_cards_parent_id_idx" ON "pages_blocks_feature2_template_main_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature2_template_main_cards_logo_idx" ON "pages_blocks_feature2_template_main_cards" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_feature2_template_features_order_idx" ON "pages_blocks_feature2_template_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature2_template_features_parent_id_idx" ON "pages_blocks_feature2_template_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature2_template_order_idx" ON "pages_blocks_feature2_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature2_template_parent_id_idx" ON "pages_blocks_feature2_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature2_template_path_idx" ON "pages_blocks_feature2_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature2_template_main_cards_order_idx" ON "_pages_v_blocks_feature2_template_main_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature2_template_main_cards_parent_id_idx" ON "_pages_v_blocks_feature2_template_main_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_main_cards_logo_idx" ON "_pages_v_blocks_feature2_template_main_cards" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_features_order_idx" ON "_pages_v_blocks_feature2_template_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature2_template_features_parent_id_idx" ON "_pages_v_blocks_feature2_template_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_order_idx" ON "_pages_v_blocks_feature2_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature2_template_parent_id_idx" ON "_pages_v_blocks_feature2_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_path_idx" ON "_pages_v_blocks_feature2_template" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_feature2_template_main_cards" CASCADE;
  DROP TABLE "pages_blocks_feature2_template_features" CASCADE;
  DROP TABLE "pages_blocks_feature2_template" CASCADE;
  DROP TABLE "_pages_v_blocks_feature2_template_main_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_feature2_template_features" CASCADE;
  DROP TABLE "_pages_v_blocks_feature2_template" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_feature2_template_main_cards_skeleton";
  DROP TYPE "public"."enum_pages_blocks_feature2_template_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_feature2_template_main_cards_skeleton";
  DROP TYPE "public"."enum__pages_v_blocks_feature2_template_features_icon";`)
}
