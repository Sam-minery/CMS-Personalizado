import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_comparison_1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "_comparison_1_buttons_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__comparison_1_buttons_v_variant" DEFAULT 'secondary',
  	"size" "enum__comparison_1_buttons_v_size" DEFAULT 'md',
  	"link_type" "enum__comparison_1_buttons_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  DROP TABLE "_comparison_1_v_buttons" CASCADE;
  ALTER TABLE "comparison_1_buttons" ADD COLUMN "link_type" "enum_comparison_1_buttons_link_type" DEFAULT 'reference';
  ALTER TABLE "comparison_1_buttons" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "comparison_1_buttons" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_comparison_1_buttons_v" ADD CONSTRAINT "_comparison_1_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "_comparison_1_buttons_v_order_idx" ON "_comparison_1_buttons_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_buttons_v_parent_id_idx" ON "_comparison_1_buttons_v" USING btree ("_parent_id");
  ALTER TABLE "comparison_1_buttons" DROP COLUMN "url";
  DROP TYPE "public"."enum__comparison_1_v_buttons_variant";
  DROP TYPE "public"."enum__comparison_1_v_buttons_size";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum__comparison_1_v_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__comparison_1_v_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TABLE "_comparison_1_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__comparison_1_v_buttons_variant" DEFAULT 'secondary',
  	"size" "enum__comparison_1_v_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  DROP TABLE "_comparison_1_buttons_v" CASCADE;
  ALTER TABLE "comparison_1_buttons" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_comparison_1_v_buttons" ADD CONSTRAINT "_comparison_1_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "_comparison_1_v_buttons_order_idx" ON "_comparison_1_v_buttons" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_buttons_parent_id_idx" ON "_comparison_1_v_buttons" USING btree ("_parent_id");
  ALTER TABLE "comparison_1_buttons" DROP COLUMN "link_type";
  ALTER TABLE "comparison_1_buttons" DROP COLUMN "link_new_tab";
  ALTER TABLE "comparison_1_buttons" DROP COLUMN "link_url";
  DROP TYPE "public"."enum_comparison_1_buttons_link_type";
  DROP TYPE "public"."enum__comparison_1_buttons_v_variant";
  DROP TYPE "public"."enum__comparison_1_buttons_v_size";
  DROP TYPE "public"."enum__comparison_1_buttons_v_link_type";`)
}
