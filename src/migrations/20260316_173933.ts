import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_font_groups_fonts_variant" AS ENUM('regular', 'regularItalic', 'medium', 'mediumItalic', 'semibold', 'semiboldItalic', 'bold', 'boldItalic', 'light', 'lightItalic', 'heavy', 'heavyItalic');
  CREATE TABLE "font_groups_fonts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"font_id" integer NOT NULL,
  	"variant" "enum_font_groups_fonts_variant" NOT NULL
  );
  
  CREATE TABLE "font_groups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"font_family_name" varchar NOT NULL,
  	"typography_h1" varchar,
  	"typography_h2" varchar,
  	"typography_h3" varchar,
  	"typography_h4" varchar,
  	"typography_h5" varchar,
  	"typography_h6" varchar,
  	"typography_body" varchar,
  	"typography_caption" varchar,
  	"preload_fonts" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "pages_blocks_pricing_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_pricing_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD COLUMN "use_font_group" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD COLUMN "font_group_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "font_groups_id" integer;
  ALTER TABLE "font_groups_fonts" ADD CONSTRAINT "font_groups_fonts_font_id_fonts_id_fk" FOREIGN KEY ("font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "font_groups_fonts" ADD CONSTRAINT "font_groups_fonts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."font_groups"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "font_groups_fonts_order_idx" ON "font_groups_fonts" USING btree ("_order");
  CREATE INDEX "font_groups_fonts_parent_id_idx" ON "font_groups_fonts" USING btree ("_parent_id");
  CREATE INDEX "font_groups_fonts_font_idx" ON "font_groups_fonts" USING btree ("font_id");
  CREATE INDEX "font_groups_updated_at_idx" ON "font_groups" USING btree ("updated_at");
  CREATE INDEX "font_groups_created_at_idx" ON "font_groups" USING btree ("created_at");
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_font_groups_fk" FOREIGN KEY ("font_groups_id") REFERENCES "public"."font_groups"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pricing_senda_font_group_idx" ON "pages_blocks_pricing_senda" USING btree ("font_group_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_font_group_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("font_group_id");
  CREATE INDEX "payload_locked_documents_rels_font_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("font_groups_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "font_groups_fonts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "font_groups" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "font_groups_fonts" CASCADE;
  DROP TABLE "font_groups" CASCADE;
  ALTER TABLE "pages_blocks_pricing_senda" DROP CONSTRAINT "pages_blocks_pricing_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "_pages_v_blocks_pricing_senda" DROP CONSTRAINT "_pages_v_blocks_pricing_senda_font_group_id_font_groups_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_font_groups_fk";
  
  DROP INDEX "pages_blocks_pricing_senda_font_group_idx";
  DROP INDEX "_pages_v_blocks_pricing_senda_font_group_idx";
  DROP INDEX "payload_locked_documents_rels_font_groups_id_idx";
  ALTER TABLE "pages_blocks_pricing_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "pages_blocks_pricing_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "_pages_v_blocks_pricing_senda" DROP COLUMN "use_font_group";
  ALTER TABLE "_pages_v_blocks_pricing_senda" DROP COLUMN "font_group_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "font_groups_id";
  DROP TYPE "public"."enum_font_groups_fonts_variant";`)
}
