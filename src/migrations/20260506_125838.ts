import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_leads_cta_status" AS ENUM('new', 'emailed', 'error');
  CREATE TABLE "leads_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead_ref" varchar,
  	"full_name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"status" "enum_leads_cta_status" DEFAULT 'new' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "notificacion_leads_cta_recipients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL
  );
  
  CREATE TABLE "notificacion_leads_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT true,
  	"from_email" varchar,
  	"subject_prefix" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "leads_cta_id" integer;
  ALTER TABLE "notificacion_leads_cta_recipients" ADD CONSTRAINT "notificacion_leads_cta_recipients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."notificacion_leads_cta"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "leads_cta_lead_ref_idx" ON "leads_cta" USING btree ("lead_ref");
  CREATE INDEX "leads_cta_updated_at_idx" ON "leads_cta" USING btree ("updated_at");
  CREATE INDEX "leads_cta_created_at_idx" ON "leads_cta" USING btree ("created_at");
  CREATE INDEX "notificacion_leads_cta_recipients_order_idx" ON "notificacion_leads_cta_recipients" USING btree ("_order");
  CREATE INDEX "notificacion_leads_cta_recipients_parent_id_idx" ON "notificacion_leads_cta_recipients" USING btree ("_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_cta_fk" FOREIGN KEY ("leads_cta_id") REFERENCES "public"."leads_cta"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_leads_cta_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_cta_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "notificacion_leads_cta_recipients" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "notificacion_leads_cta" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "leads_cta" CASCADE;
  DROP TABLE "notificacion_leads_cta_recipients" CASCADE;
  DROP TABLE "notificacion_leads_cta" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_leads_cta_fk";
  
  DROP INDEX "payload_locked_documents_rels_leads_cta_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "leads_cta_id";
  DROP TYPE "public"."enum_leads_cta_status";`)
}
