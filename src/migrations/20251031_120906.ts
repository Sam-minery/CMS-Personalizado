import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_logo_cloud_template_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Logo',
  	"use_media" boolean DEFAULT false,
  	"media_id" integer,
  	"src" varchar DEFAULT '',
  	"alt" varchar
  );
  
  CREATE TABLE "pages_blocks_logo_cloud_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Trusted by modern operators across industries. From pilot to scale without chaos.',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_cloud_template_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Logo',
  	"use_media" boolean DEFAULT false,
  	"media_id" integer,
  	"src" varchar DEFAULT '',
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_cloud_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Trusted by modern operators across industries. From pilot to scale without chaos.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages" ALTER COLUMN "hero_hero_imgs_second_image_url" SET DEFAULT 'https://assets.aceternity.com/screenshots/1.jpg';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_hero_imgs_second_image_url" SET DEFAULT 'https://assets.aceternity.com/screenshots/1.jpg';
  ALTER TABLE "pages_blocks_logo_cloud_template_logos" ADD CONSTRAINT "pages_blocks_logo_cloud_template_logos_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_cloud_template_logos" ADD CONSTRAINT "pages_blocks_logo_cloud_template_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo_cloud_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_cloud_template" ADD CONSTRAINT "pages_blocks_logo_cloud_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template_logos" ADD CONSTRAINT "_pages_v_blocks_logo_cloud_template_logos_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template_logos" ADD CONSTRAINT "_pages_v_blocks_logo_cloud_template_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo_cloud_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template" ADD CONSTRAINT "_pages_v_blocks_logo_cloud_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_logo_cloud_template_logos_order_idx" ON "pages_blocks_logo_cloud_template_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_cloud_template_logos_parent_id_idx" ON "pages_blocks_logo_cloud_template_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_cloud_template_logos_media_idx" ON "pages_blocks_logo_cloud_template_logos" USING btree ("media_id");
  CREATE INDEX "pages_blocks_logo_cloud_template_order_idx" ON "pages_blocks_logo_cloud_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_cloud_template_parent_id_idx" ON "pages_blocks_logo_cloud_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_cloud_template_path_idx" ON "pages_blocks_logo_cloud_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_logos_order_idx" ON "_pages_v_blocks_logo_cloud_template_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_logos_parent_id_idx" ON "_pages_v_blocks_logo_cloud_template_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_logos_media_idx" ON "_pages_v_blocks_logo_cloud_template_logos" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_order_idx" ON "_pages_v_blocks_logo_cloud_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_parent_id_idx" ON "_pages_v_blocks_logo_cloud_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_path_idx" ON "_pages_v_blocks_logo_cloud_template" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_logo_cloud_template_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_logo_cloud_template" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_logo_cloud_template_logos" CASCADE;
  DROP TABLE "pages_blocks_logo_cloud_template" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_cloud_template_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_cloud_template" CASCADE;
  ALTER TABLE "pages" ALTER COLUMN "hero_hero_imgs_second_image_url" SET DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_hero_imgs_second_image_url" SET DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg';`)
}
