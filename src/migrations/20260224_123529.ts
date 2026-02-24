import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_faq_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "faq_senda_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"questions_section_background_color" varchar,
  	"questions_section_border_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_faq_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_faq_senda_questions_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"questions_section_background_color" varchar,
  	"questions_section_border_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_faq_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "faq_senda_questions" ADD CONSTRAINT "faq_senda_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_senda_questions_v" ADD CONSTRAINT "_faq_senda_questions_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "faq_senda_questions_order_idx" ON "faq_senda_questions" USING btree ("_order");
  CREATE INDEX "faq_senda_questions_parent_id_idx" ON "faq_senda_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_senda_order_idx" ON "pages_blocks_faq_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_senda_parent_id_idx" ON "pages_blocks_faq_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_senda_path_idx" ON "pages_blocks_faq_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_senda_custom_font_file_idx" ON "pages_blocks_faq_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_faq_senda_questions_v_order_idx" ON "_faq_senda_questions_v" USING btree ("_order");
  CREATE INDEX "_faq_senda_questions_v_parent_id_idx" ON "_faq_senda_questions_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_order_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_senda_parent_id_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_path_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_senda_custom_font_file_idx" ON "_pages_v_blocks_faq_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "faq_senda_questions" CASCADE;
  DROP TABLE "pages_blocks_faq_senda" CASCADE;
  DROP TABLE "_faq_senda_questions_v" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_senda" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_faq_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_faq_senda_font_family";`)
}
