import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cards_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TABLE "pages_blocks_cards_senda_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"title_color" varchar,
  	"image_id" integer,
  	"expanded_content" jsonb,
  	"expanded_content_color" varchar,
  	"back_content" jsonb,
  	"back_background_color" varchar,
  	"avatar_image_id" integer,
  	"user_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_content_color" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_cards_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum_pages_blocks_cards_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum_pages_blocks_cards_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_senda_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"title_color" varchar,
  	"image_id" integer,
  	"expanded_content" jsonb,
  	"expanded_content_color" varchar,
  	"back_content" jsonb,
  	"back_background_color" varchar,
  	"avatar_image_id" integer,
  	"user_name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_content_color" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_cards_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum__pages_v_blocks_cards_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum__pages_v_blocks_cards_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_cards_senda_cards_order_idx" ON "pages_blocks_cards_senda_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_senda_cards_parent_id_idx" ON "pages_blocks_cards_senda_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_image_idx" ON "pages_blocks_cards_senda_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_avatar_image_idx" ON "pages_blocks_cards_senda_cards" USING btree ("avatar_image_id");
  CREATE INDEX "pages_blocks_cards_senda_order_idx" ON "pages_blocks_cards_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_senda_parent_id_idx" ON "pages_blocks_cards_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_senda_path_idx" ON "pages_blocks_cards_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_senda_custom_font_file_idx" ON "pages_blocks_cards_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_order_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_parent_id_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_image_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_avatar_image_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("avatar_image_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_order_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_senda_parent_id_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_path_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_senda_custom_font_file_idx" ON "_pages_v_blocks_cards_senda" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_cards_senda_cards" CASCADE;
  DROP TABLE "pages_blocks_cards_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_senda_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_senda" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_cards_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_cards_gap";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_card_size";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_cards_gap";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_card_size";`)
}
