import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_nb_simple_senda_icon_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_nb_simple_senda_icon_link_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__nb_simple_senda_v_icon_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__nb_simple_senda_v_icon_link_link_appearance" AS ENUM('default', 'outline');
  CREATE TABLE "nb_simple_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Navbar image',
  	"icon_link_link_type" "enum_nb_simple_senda_icon_link_link_type" DEFAULT 'reference',
  	"icon_link_link_new_tab" boolean,
  	"icon_link_link_url" varchar,
  	"icon_link_link_appearance" "enum_nb_simple_senda_icon_link_link_appearance" DEFAULT 'default',
  	"icon_link_icon_s_v_g" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_nb_simple_senda_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Navbar image',
  	"icon_link_link_type" "enum__nb_simple_senda_v_icon_link_link_type" DEFAULT 'reference',
  	"icon_link_link_new_tab" boolean,
  	"icon_link_link_url" varchar,
  	"icon_link_link_appearance" "enum__nb_simple_senda_v_icon_link_link_appearance" DEFAULT 'default',
  	"icon_link_icon_s_v_g" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "nb_simple_senda" ADD CONSTRAINT "nb_simple_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "nb_simple_senda" ADD CONSTRAINT "nb_simple_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_nb_simple_senda_v" ADD CONSTRAINT "_nb_simple_senda_v_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_nb_simple_senda_v" ADD CONSTRAINT "_nb_simple_senda_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "nb_simple_senda_order_idx" ON "nb_simple_senda" USING btree ("_order");
  CREATE INDEX "nb_simple_senda_parent_id_idx" ON "nb_simple_senda" USING btree ("_parent_id");
  CREATE INDEX "nb_simple_senda_path_idx" ON "nb_simple_senda" USING btree ("_path");
  CREATE INDEX "nb_simple_senda_image_image_media_image_idx" ON "nb_simple_senda" USING btree ("image_media_image_id");
  CREATE INDEX "_nb_simple_senda_v_order_idx" ON "_nb_simple_senda_v" USING btree ("_order");
  CREATE INDEX "_nb_simple_senda_v_parent_id_idx" ON "_nb_simple_senda_v" USING btree ("_parent_id");
  CREATE INDEX "_nb_simple_senda_v_path_idx" ON "_nb_simple_senda_v" USING btree ("_path");
  CREATE INDEX "_nb_simple_senda_v_image_image_media_image_idx" ON "_nb_simple_senda_v" USING btree ("image_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "nb_simple_senda" CASCADE;
  DROP TABLE "_nb_simple_senda_v" CASCADE;
  DROP TYPE "public"."enum_nb_simple_senda_icon_link_link_type";
  DROP TYPE "public"."enum_nb_simple_senda_icon_link_link_appearance";
  DROP TYPE "public"."enum__nb_simple_senda_v_icon_link_link_type";
  DROP TYPE "public"."enum__nb_simple_senda_v_icon_link_link_appearance";`)
}
