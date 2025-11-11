import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_background_beams_background_color" AS ENUM('neutral-950', 'slate-950', 'zinc-950', 'gray-950');
  CREATE TYPE "public"."enum_pages_blocks_background_beams_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_background_beams_background_color" AS ENUM('neutral-950', 'slate-950', 'zinc-950', 'gray-950');
  CREATE TYPE "public"."enum__pages_v_blocks_background_beams_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TABLE "pages_blocks_background_beams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Join the waitlist',
  	"description" varchar DEFAULT 'Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business. Whether you''re sending order confirmations, password reset emails, or promotional campaigns, MailJet has got you covered.',
  	"placeholder" varchar DEFAULT 'hi@manuarora.in',
  	"background_color" "enum_pages_blocks_background_beams_background_color" DEFAULT 'neutral-950',
  	"height" "enum_pages_blocks_background_beams_height" DEFAULT '40rem',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_background_beams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Join the waitlist',
  	"description" varchar DEFAULT 'Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business. Whether you''re sending order confirmations, password reset emails, or promotional campaigns, MailJet has got you covered.',
  	"placeholder" varchar DEFAULT 'hi@manuarora.in',
  	"background_color" "enum__pages_v_blocks_background_beams_background_color" DEFAULT 'neutral-950',
  	"height" "enum__pages_v_blocks_background_beams_height" DEFAULT '40rem',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_background_beams" ADD CONSTRAINT "pages_blocks_background_beams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_background_beams" ADD CONSTRAINT "_pages_v_blocks_background_beams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_background_beams_order_idx" ON "pages_blocks_background_beams" USING btree ("_order");
  CREATE INDEX "pages_blocks_background_beams_parent_id_idx" ON "pages_blocks_background_beams" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_background_beams_path_idx" ON "pages_blocks_background_beams" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_background_beams_order_idx" ON "_pages_v_blocks_background_beams" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_background_beams_parent_id_idx" ON "_pages_v_blocks_background_beams" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_background_beams_path_idx" ON "_pages_v_blocks_background_beams" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_background_beams" CASCADE;
  DROP TABLE "_pages_v_blocks_background_beams" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_background_beams_background_color";
  DROP TYPE "public"."enum_pages_blocks_background_beams_height";
  DROP TYPE "public"."enum__pages_v_blocks_background_beams_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_background_beams_height";`)
}
