import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_faq_template_questions_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Answer'
  );
  
  CREATE TABLE "_pages_v_blocks_faq_template_questions_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Answer',
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_blocks_faq_template_questions_answers" ADD CONSTRAINT "pages_blocks_faq_template_questions_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_template_questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_template_questions_answers" ADD CONSTRAINT "_pages_v_blocks_faq_template_questions_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_template_questions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_faq_template_questions_answers_order_idx" ON "pages_blocks_faq_template_questions_answers" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_template_questions_answers_parent_id_idx" ON "pages_blocks_faq_template_questions_answers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_answers_order_idx" ON "_pages_v_blocks_faq_template_questions_answers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_answers_parent_id_idx" ON "_pages_v_blocks_faq_template_questions_answers" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_faq_template_questions" DROP COLUMN "answer";
  ALTER TABLE "_pages_v_blocks_faq_template_questions" DROP COLUMN "answer";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_faq_template_questions_answers" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_template_questions_answers" CASCADE;
  ALTER TABLE "pages_blocks_faq_template_questions" ADD COLUMN "answer" varchar DEFAULT 'Answer';
  ALTER TABLE "_pages_v_blocks_faq_template_questions" ADD COLUMN "answer" varchar DEFAULT 'Answer';`)
}
