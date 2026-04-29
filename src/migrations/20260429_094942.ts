import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_leads_formulario_status" AS ENUM('new', 'synced', 'error');
  CREATE TABLE "leads_formulario" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead_ref" varchar,
  	"page_path" varchar NOT NULL,
  	"campaign_name" varchar,
  	"campaign_id" varchar,
  	"utm_content" varchar,
  	"utm_source" varchar,
  	"gclid" varchar,
  	"fbclid" varchar,
  	"status" "enum_leads_formulario_status" DEFAULT 'new' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "leads_formulario_id" integer;
  CREATE UNIQUE INDEX "leads_formulario_lead_ref_idx" ON "leads_formulario" USING btree ("lead_ref");
  CREATE INDEX "leads_formulario_updated_at_idx" ON "leads_formulario" USING btree ("updated_at");
  CREATE INDEX "leads_formulario_created_at_idx" ON "leads_formulario" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_formulario_fk" FOREIGN KEY ("leads_formulario_id") REFERENCES "public"."leads_formulario"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_leads_formulario_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_formulario_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads_formulario" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "leads_formulario" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_leads_formulario_fk";
  
  DROP INDEX "payload_locked_documents_rels_leads_formulario_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "leads_formulario_id";
  DROP TYPE "public"."enum_leads_formulario_status";`)
}
