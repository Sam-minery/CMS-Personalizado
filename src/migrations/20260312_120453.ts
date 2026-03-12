import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_mf_st_step_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__mf_st_v_step_button_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "mf_st_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb
  );
  
  CREATE TABLE "mf_st" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb,
  	"step_button_background_color" varchar,
  	"step_button_text_color" varchar,
  	"step_button_icon_s_v_g" varchar,
  	"step_button_label" varchar,
  	"convert_step_button_to_link" boolean DEFAULT false,
  	"step_button_link_type" "enum_mf_st_step_button_link_type" DEFAULT 'reference',
  	"step_button_link_new_tab" boolean,
  	"step_button_link_url" varchar,
  	"step_button_link_label" varchar
  );
  
  CREATE TABLE "_mf_st_v_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_mf_st_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb,
  	"step_button_background_color" varchar,
  	"step_button_text_color" varchar,
  	"step_button_icon_s_v_g" varchar,
  	"step_button_label" varchar,
  	"convert_step_button_to_link" boolean DEFAULT false,
  	"step_button_link_type" "enum__mf_st_v_step_button_link_type" DEFAULT 'reference',
  	"step_button_link_new_tab" boolean,
  	"step_button_link_url" varchar,
  	"step_button_link_label" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_blocks_multi_form_senda_steps_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form_senda_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_multi_form_senda_steps_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form_senda_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda_steps_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda_steps" CASCADE;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "ps_plans" ADD COLUMN "enable3_d_gradient" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "_ps_plans_v" ADD COLUMN "enable3_d_gradient" boolean DEFAULT false;
  ALTER TABLE "mf_st_options" ADD CONSTRAINT "mf_st_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mf_st"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "mf_st" ADD CONSTRAINT "mf_st_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_mf_st_v_options" ADD CONSTRAINT "_mf_st_v_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_mf_st_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_mf_st_v" ADD CONSTRAINT "_mf_st_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "mf_st_options_order_idx" ON "mf_st_options" USING btree ("_order");
  CREATE INDEX "mf_st_options_parent_id_idx" ON "mf_st_options" USING btree ("_parent_id");
  CREATE INDEX "mf_st_order_idx" ON "mf_st" USING btree ("_order");
  CREATE INDEX "mf_st_parent_id_idx" ON "mf_st" USING btree ("_parent_id");
  CREATE INDEX "_mf_st_v_options_order_idx" ON "_mf_st_v_options" USING btree ("_order");
  CREATE INDEX "_mf_st_v_options_parent_id_idx" ON "_mf_st_v_options" USING btree ("_parent_id");
  CREATE INDEX "_mf_st_v_order_idx" ON "_mf_st_v" USING btree ("_order");
  CREATE INDEX "_mf_st_v_parent_id_idx" ON "_mf_st_v" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_multi_form_senda" ADD CONSTRAINT "pages_blocks_multi_form_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_multi_form_senda_background_image_backgroun_idx" ON "pages_blocks_multi_form_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_background_image_backgr_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("background_image_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_multi_form_senda_steps_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_multi_form_senda_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda_steps_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  ALTER TABLE "mf_st_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "mf_st" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_mf_st_v_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_mf_st_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "mf_st_options" CASCADE;
  DROP TABLE "mf_st" CASCADE;
  DROP TABLE "_mf_st_v_options" CASCADE;
  DROP TABLE "_mf_st_v" CASCADE;
  ALTER TABLE "pages_blocks_multi_form_senda" DROP CONSTRAINT "pages_blocks_multi_form_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP CONSTRAINT "_pages_v_blocks_multi_form_senda_background_image_media_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_multi_form_senda_background_image_backgroun_idx";
  DROP INDEX "_pages_v_blocks_multi_form_senda_background_image_backgr_idx";
  ALTER TABLE "pages_blocks_multi_form_senda_steps_options" ADD CONSTRAINT "pages_blocks_multi_form_senda_steps_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda_steps" ADD CONSTRAINT "pages_blocks_multi_form_senda_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps_options" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_steps_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_multi_form_senda_steps_options_order_idx" ON "pages_blocks_multi_form_senda_steps_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_options_parent_id_idx" ON "pages_blocks_multi_form_senda_steps_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_order_idx" ON "pages_blocks_multi_form_senda_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_parent_id_idx" ON "pages_blocks_multi_form_senda_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_options_order_idx" ON "_pages_v_blocks_multi_form_senda_steps_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_options_parent_id_idx" ON "_pages_v_blocks_multi_form_senda_steps_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_order_idx" ON "_pages_v_blocks_multi_form_senda_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_parent_id_idx" ON "_pages_v_blocks_multi_form_senda_steps" USING btree ("_parent_id");
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "pages_blocks_multi_form_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "ps_plans" DROP COLUMN "enable3_d_gradient";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "_pages_v_blocks_multi_form_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "_ps_plans_v" DROP COLUMN "enable3_d_gradient";
  DROP TYPE "public"."enum_mf_st_step_button_link_type";
  DROP TYPE "public"."enum__mf_st_v_step_button_link_type";`)
}
