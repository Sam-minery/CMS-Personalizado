import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TABLE "fonts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "font_family" "enum_pages_blocks_banner1_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_banner1" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "font_family" "enum__pages_v_blocks_banner1_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_banner1" ADD COLUMN "custom_font_name" varchar;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "fonts_id" integer;
  CREATE INDEX "fonts_updated_at_idx" ON "fonts" USING btree ("updated_at");
  CREATE INDEX "fonts_created_at_idx" ON "fonts" USING btree ("created_at");
  CREATE UNIQUE INDEX "fonts_filename_idx" ON "fonts" USING btree ("filename");
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_fonts_fk" FOREIGN KEY ("fonts_id") REFERENCES "public"."fonts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner1_custom_font_file_idx" ON "pages_blocks_banner1" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_banner1_custom_font_file_idx" ON "_pages_v_blocks_banner1" USING btree ("custom_font_file_id");
  CREATE INDEX "payload_locked_documents_rels_fonts_id_idx" ON "payload_locked_documents_rels" USING btree ("fonts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "fonts" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "fonts" CASCADE;
  ALTER TABLE "pages_blocks_banner1" DROP CONSTRAINT "pages_blocks_banner1_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_banner1" DROP CONSTRAINT "_pages_v_blocks_banner1_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_fonts_fk";
  
  DROP INDEX "pages_blocks_banner1_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_banner1_custom_font_file_idx";
  DROP INDEX "payload_locked_documents_rels_fonts_id_idx";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_banner1" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_banner1" DROP COLUMN "custom_font_name";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "fonts_id";
  DROP TYPE "public"."enum_pages_blocks_banner1_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_font_family";`)
}
