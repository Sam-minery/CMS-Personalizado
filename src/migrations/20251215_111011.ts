import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_stats24_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'tab-1',
  	"percentage" varchar DEFAULT '50%',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"use_video" boolean DEFAULT false,
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"video_image_use_media" boolean DEFAULT false,
  	"video_image_media_image_id" integer,
  	"video_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg',
  	"video_image_alt" varchar DEFAULT 'Relume placeholder image',
  	"video_url" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW'
  );
  
  CREATE TABLE "pages_blocks_stats24" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Medium length section heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"default_tab_value" varchar DEFAULT 'tab-1',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats24_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'tab-1',
  	"percentage" varchar DEFAULT '50%',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"use_video" boolean DEFAULT false,
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"video_image_use_media" boolean DEFAULT false,
  	"video_image_media_image_id" integer,
  	"video_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg',
  	"video_image_alt" varchar DEFAULT 'Relume placeholder image',
  	"video_url" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats24" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Medium length section heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"default_tab_value" varchar DEFAULT 'tab-1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_stats24_tabs" ADD CONSTRAINT "pages_blocks_stats24_tabs_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats24_tabs" ADD CONSTRAINT "pages_blocks_stats24_tabs_video_image_media_image_id_media_id_fk" FOREIGN KEY ("video_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats24_tabs" ADD CONSTRAINT "pages_blocks_stats24_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats24"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats24" ADD CONSTRAINT "pages_blocks_stats24_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats24_tabs" ADD CONSTRAINT "_pages_v_blocks_stats24_tabs_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats24_tabs" ADD CONSTRAINT "_pages_v_blocks_stats24_tabs_video_image_media_image_id_media_id_fk" FOREIGN KEY ("video_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats24_tabs" ADD CONSTRAINT "_pages_v_blocks_stats24_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats24"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats24" ADD CONSTRAINT "_pages_v_blocks_stats24_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_stats24_tabs_order_idx" ON "pages_blocks_stats24_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats24_tabs_parent_id_idx" ON "pages_blocks_stats24_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats24_tabs_image_image_media_image_idx" ON "pages_blocks_stats24_tabs" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_stats24_tabs_video_image_video_image_media_image_idx" ON "pages_blocks_stats24_tabs" USING btree ("video_image_media_image_id");
  CREATE INDEX "pages_blocks_stats24_order_idx" ON "pages_blocks_stats24" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats24_parent_id_idx" ON "pages_blocks_stats24" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats24_path_idx" ON "pages_blocks_stats24" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats24_tabs_order_idx" ON "_pages_v_blocks_stats24_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats24_tabs_parent_id_idx" ON "_pages_v_blocks_stats24_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats24_tabs_image_image_media_image_idx" ON "_pages_v_blocks_stats24_tabs" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_stats24_tabs_video_image_video_image_media_image_idx" ON "_pages_v_blocks_stats24_tabs" USING btree ("video_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_stats24_order_idx" ON "_pages_v_blocks_stats24" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats24_parent_id_idx" ON "_pages_v_blocks_stats24" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats24_path_idx" ON "_pages_v_blocks_stats24" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_stats24_tabs" CASCADE;
  DROP TABLE "pages_blocks_stats24" CASCADE;
  DROP TABLE "_pages_v_blocks_stats24_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_stats24" CASCADE;`)
}
