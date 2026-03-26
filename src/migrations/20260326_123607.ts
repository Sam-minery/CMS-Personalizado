import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_final_test_senda_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_final_test_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_final_test_senda_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_final_test_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "pages_blocks_final_test_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"component_background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"content" jsonb,
  	"main_image_use_media" boolean DEFAULT true,
  	"main_image_media_image_id" integer,
  	"main_image_src" varchar,
  	"main_image_alt" varchar,
  	"button_title" varchar DEFAULT 'Más información',
  	"button_link_type" "enum_pages_blocks_final_test_senda_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_icon_s_v_g" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pages_blocks_final_test_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_final_test_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"background_image_use_media" boolean DEFAULT true,
  	"background_image_media_image_id" integer,
  	"background_image_src" varchar,
  	"background_color" varchar,
  	"component_background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"content" jsonb,
  	"main_image_use_media" boolean DEFAULT true,
  	"main_image_media_image_id" integer,
  	"main_image_src" varchar,
  	"main_image_alt" varchar,
  	"button_title" varchar DEFAULT 'Más información',
  	"button_link_type" "enum__pages_v_blocks_final_test_senda_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"button_icon_s_v_g" varchar,
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pages_v_blocks_final_test_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_main_image_media_image_id_media_id_fk" FOREIGN KEY ("main_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_final_test_senda" ADD CONSTRAINT "pages_blocks_final_test_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_main_image_media_image_id_media_id_fk" FOREIGN KEY ("main_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_final_test_senda" ADD CONSTRAINT "_pages_v_blocks_final_test_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_final_test_senda_order_idx" ON "pages_blocks_final_test_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_final_test_senda_parent_id_idx" ON "pages_blocks_final_test_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_final_test_senda_path_idx" ON "pages_blocks_final_test_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_final_test_senda_background_image_backgroun_idx" ON "pages_blocks_final_test_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_final_test_senda_main_image_main_image_medi_idx" ON "pages_blocks_final_test_senda" USING btree ("main_image_media_image_id");
  CREATE INDEX "pages_blocks_final_test_senda_font_group_idx" ON "pages_blocks_final_test_senda" USING btree ("font_group_id");
  CREATE INDEX "pages_blocks_final_test_senda_custom_font_file_idx" ON "pages_blocks_final_test_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_order_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_final_test_senda_parent_id_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_path_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_final_test_senda_background_image_backgr_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_main_image_main_image_m_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("main_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_font_group_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_final_test_senda_custom_font_file_idx" ON "_pages_v_blocks_final_test_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_final_test_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_final_test_senda" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_final_test_senda_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_final_test_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_final_test_senda_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_final_test_senda_font_family";`)
}
