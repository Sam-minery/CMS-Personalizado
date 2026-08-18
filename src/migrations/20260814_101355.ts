import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pd_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pd_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "l2d_pre" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#101835',
  	"icon_background_color" varchar DEFAULT '#fce4ec'
  );
  
  CREATE TABLE "l2d" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"secondary_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color_primary" varchar DEFAULT '#101835',
  	"text_color_secondary" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"block_name" varchar
  );
  
  CREATE TABLE "_l2d_pre_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#101835',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_l2d_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"secondary_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color_primary" varchar DEFAULT '#101835',
  	"text_color_secondary" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pd" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pd" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "pd" ADD COLUMN "font_family" "enum_pd_font_family" DEFAULT 'default';
  ALTER TABLE "pd" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pd" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "pd" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_pd_v" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pd_v" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pd_v" ADD COLUMN "font_family" "enum__pd_v_font_family" DEFAULT 'default';
  ALTER TABLE "_pd_v" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pd_v" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_pd_v" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "l2d_pre" ADD CONSTRAINT "l2d_pre_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "l2d_pre" ADD CONSTRAINT "l2d_pre_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."l2d"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "l2d" ADD CONSTRAINT "l2d_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_l2d_pre_v" ADD CONSTRAINT "_l2d_pre_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_l2d_pre_v" ADD CONSTRAINT "_l2d_pre_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_l2d_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_l2d_v" ADD CONSTRAINT "_l2d_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "l2d_pre_order_idx" ON "l2d_pre" USING btree ("_order");
  CREATE INDEX "l2d_pre_parent_id_idx" ON "l2d_pre" USING btree ("_parent_id");
  CREATE INDEX "l2d_pre_icon_icon_media_image_idx" ON "l2d_pre" USING btree ("icon_media_image_id");
  CREATE INDEX "l2d_order_idx" ON "l2d" USING btree ("_order");
  CREATE INDEX "l2d_parent_id_idx" ON "l2d" USING btree ("_parent_id");
  CREATE INDEX "l2d_path_idx" ON "l2d" USING btree ("_path");
  CREATE INDEX "_l2d_pre_v_order_idx" ON "_l2d_pre_v" USING btree ("_order");
  CREATE INDEX "_l2d_pre_v_parent_id_idx" ON "_l2d_pre_v" USING btree ("_parent_id");
  CREATE INDEX "_l2d_pre_v_icon_icon_media_image_idx" ON "_l2d_pre_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_l2d_v_order_idx" ON "_l2d_v" USING btree ("_order");
  CREATE INDEX "_l2d_v_parent_id_idx" ON "_l2d_v" USING btree ("_parent_id");
  CREATE INDEX "_l2d_v_path_idx" ON "_l2d_v" USING btree ("_path");
  ALTER TABLE "pd" ADD CONSTRAINT "pd_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pd_font_group_idx" ON "pd" USING btree ("font_group_id");
  CREATE INDEX "pd_custom_font_file_idx" ON "pd" USING btree ("custom_font_file_id");
  CREATE INDEX "_pd_v_font_group_idx" ON "_pd_v" USING btree ("font_group_id");
  CREATE INDEX "_pd_v_custom_font_file_idx" ON "_pd_v" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "l2d_pre" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "l2d" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_l2d_pre_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_l2d_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "l2d_pre" CASCADE;
  DROP TABLE "l2d" CASCADE;
  DROP TABLE "_l2d_pre_v" CASCADE;
  DROP TABLE "_l2d_v" CASCADE;
  ALTER TABLE "pd" DROP CONSTRAINT "pd_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "pd" DROP CONSTRAINT "pd_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pd_v" DROP CONSTRAINT "_pd_v_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pd_v" DROP CONSTRAINT "_pd_v_custom_font_file_id_fonts_id_fk";
  
  DROP INDEX "pd_font_group_idx";
  DROP INDEX "pd_custom_font_file_idx";
  DROP INDEX "_pd_v_font_group_idx";
  DROP INDEX "_pd_v_custom_font_file_idx";
  ALTER TABLE "pd" DROP COLUMN "use_font_group";
  ALTER TABLE "pd" DROP COLUMN "font_group_id";
  ALTER TABLE "pd" DROP COLUMN "font_family";
  ALTER TABLE "pd" DROP COLUMN "use_custom_font";
  ALTER TABLE "pd" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pd" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pd_v" DROP COLUMN "use_font_group";
  ALTER TABLE "_pd_v" DROP COLUMN "font_group_id";
  ALTER TABLE "_pd_v" DROP COLUMN "font_family";
  ALTER TABLE "_pd_v" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pd_v" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pd_v" DROP COLUMN "custom_font_name";
  DROP TYPE "public"."enum_pd_font_family";
  DROP TYPE "public"."enum__pd_v_font_family";`)
}
