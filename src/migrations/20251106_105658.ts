import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_faq_template_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar DEFAULT 'Question?',
  	"answer" varchar DEFAULT 'Answer'
  );
  
  CREATE TABLE "pages_blocks_faq_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faq_template_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_template_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar DEFAULT 'Question?',
  	"answer" varchar DEFAULT 'Answer',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"faq_template_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_faq_template_questions" ADD CONSTRAINT "pages_blocks_faq_template_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_template" ADD CONSTRAINT "pages_blocks_faq_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_template_questions" ADD CONSTRAINT "_pages_v_blocks_faq_template_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_template" ADD CONSTRAINT "_pages_v_blocks_faq_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_faq_template_questions_order_idx" ON "pages_blocks_faq_template_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_template_questions_parent_id_idx" ON "pages_blocks_faq_template_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_template_order_idx" ON "pages_blocks_faq_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_template_parent_id_idx" ON "pages_blocks_faq_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_template_path_idx" ON "pages_blocks_faq_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_order_idx" ON "_pages_v_blocks_faq_template_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_parent_id_idx" ON "_pages_v_blocks_faq_template_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_template_order_idx" ON "_pages_v_blocks_faq_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_template_parent_id_idx" ON "_pages_v_blocks_faq_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_template_path_idx" ON "_pages_v_blocks_faq_template" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_faq_template_questions" CASCADE;
  DROP TABLE "pages_blocks_faq_template" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_template_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_template" CASCADE;`)
}
