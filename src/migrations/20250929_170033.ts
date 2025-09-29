import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_career5_jobs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_career6_jobs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__career5_jobs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__career6_jobs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "career5_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum_career5_jobs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "career5_depts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "career6_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum_career6_jobs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "career6_depts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "_career5_jobs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum__career5_jobs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_career5_depts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_career6_jobs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum__career6_jobs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_career6_depts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  ALTER TABLE "depts" DROP CONSTRAINT "depts_parent_id_fk";
  
  ALTER TABLE "_depts_v" DROP CONSTRAINT "_depts_v_parent_id_fk";
  
  ALTER TABLE "jobs" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_jobs_v" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "career5_jobs" ADD CONSTRAINT "career5_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."career5_depts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career5_depts" ADD CONSTRAINT "career5_depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career6_jobs" ADD CONSTRAINT "career6_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."career6_depts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career6_depts" ADD CONSTRAINT "career6_depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career5_jobs_v" ADD CONSTRAINT "_career5_jobs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_career5_depts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career5_depts_v" ADD CONSTRAINT "_career5_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career6_jobs_v" ADD CONSTRAINT "_career6_jobs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_career6_depts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career6_depts_v" ADD CONSTRAINT "_career6_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "career5_jobs_order_idx" ON "career5_jobs" USING btree ("_order");
  CREATE INDEX "career5_jobs_parent_id_idx" ON "career5_jobs" USING btree ("_parent_id");
  CREATE INDEX "career5_depts_order_idx" ON "career5_depts" USING btree ("_order");
  CREATE INDEX "career5_depts_parent_id_idx" ON "career5_depts" USING btree ("_parent_id");
  CREATE INDEX "career6_jobs_order_idx" ON "career6_jobs" USING btree ("_order");
  CREATE INDEX "career6_jobs_parent_id_idx" ON "career6_jobs" USING btree ("_parent_id");
  CREATE INDEX "career6_depts_order_idx" ON "career6_depts" USING btree ("_order");
  CREATE INDEX "career6_depts_parent_id_idx" ON "career6_depts" USING btree ("_parent_id");
  CREATE INDEX "_career5_jobs_v_order_idx" ON "_career5_jobs_v" USING btree ("_order");
  CREATE INDEX "_career5_jobs_v_parent_id_idx" ON "_career5_jobs_v" USING btree ("_parent_id");
  CREATE INDEX "_career5_depts_v_order_idx" ON "_career5_depts_v" USING btree ("_order");
  CREATE INDEX "_career5_depts_v_parent_id_idx" ON "_career5_depts_v" USING btree ("_parent_id");
  CREATE INDEX "_career6_jobs_v_order_idx" ON "_career6_jobs_v" USING btree ("_order");
  CREATE INDEX "_career6_jobs_v_parent_id_idx" ON "_career6_jobs_v" USING btree ("_parent_id");
  CREATE INDEX "_career6_depts_v_order_idx" ON "_career6_depts_v" USING btree ("_order");
  CREATE INDEX "_career6_depts_v_parent_id_idx" ON "_career6_depts_v" USING btree ("_parent_id");
  ALTER TABLE "depts" ADD CONSTRAINT "depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_depts_v" ADD CONSTRAINT "_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs" DROP COLUMN "link_type";
  ALTER TABLE "jobs" DROP COLUMN "link_new_tab";
  ALTER TABLE "jobs" DROP COLUMN "link_url";
  ALTER TABLE "_jobs_v" DROP COLUMN "link_type";
  ALTER TABLE "_jobs_v" DROP COLUMN "link_new_tab";
  ALTER TABLE "_jobs_v" DROP COLUMN "link_url";
  DROP TYPE "public"."enum_jobs_link_type";
  DROP TYPE "public"."enum__jobs_v_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_jobs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__jobs_v_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "career5_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "career5_depts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "career6_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "career6_depts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_career5_jobs_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_career5_depts_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_career6_jobs_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_career6_depts_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "career5_jobs" CASCADE;
  DROP TABLE "career5_depts" CASCADE;
  DROP TABLE "career6_jobs" CASCADE;
  DROP TABLE "career6_depts" CASCADE;
  DROP TABLE "_career5_jobs_v" CASCADE;
  DROP TABLE "_career5_depts_v" CASCADE;
  DROP TABLE "_career6_jobs_v" CASCADE;
  DROP TABLE "_career6_depts_v" CASCADE;
  ALTER TABLE "depts" DROP CONSTRAINT "depts_parent_id_fk";
  
  ALTER TABLE "_depts_v" DROP CONSTRAINT "_depts_v_parent_id_fk";
  
  ALTER TABLE "jobs" ADD COLUMN "link_type" "enum_jobs_link_type" DEFAULT 'reference';
  ALTER TABLE "jobs" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "jobs" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_jobs_v" ADD COLUMN "link_type" "enum__jobs_v_link_type" DEFAULT 'reference';
  ALTER TABLE "_jobs_v" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_jobs_v" ADD COLUMN "link_url" varchar;
  ALTER TABLE "depts" ADD CONSTRAINT "depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_depts_v" ADD CONSTRAINT "_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs" DROP COLUMN "url";
  ALTER TABLE "_jobs_v" DROP COLUMN "url";
  DROP TYPE "public"."enum_career5_jobs_link_type";
  DROP TYPE "public"."enum_career6_jobs_link_type";
  DROP TYPE "public"."enum__career5_jobs_v_link_type";
  DROP TYPE "public"."enum__career6_jobs_v_link_type";`)
}
