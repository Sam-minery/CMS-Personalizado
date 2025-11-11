import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_container_scroll_animation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Unleash the power of',
  	"highlight" varchar DEFAULT 'Scroll Animations',
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_container_scroll_animation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Unleash the power of',
  	"highlight" varchar DEFAULT 'Scroll Animations',
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_container_scroll_animation" ADD CONSTRAINT "pages_blocks_container_scroll_animation_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_container_scroll_animation" ADD CONSTRAINT "pages_blocks_container_scroll_animation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_container_scroll_animation" ADD CONSTRAINT "_pages_v_blocks_container_scroll_animation_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_container_scroll_animation" ADD CONSTRAINT "_pages_v_blocks_container_scroll_animation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_container_scroll_animation_order_idx" ON "pages_blocks_container_scroll_animation" USING btree ("_order");
  CREATE INDEX "pages_blocks_container_scroll_animation_parent_id_idx" ON "pages_blocks_container_scroll_animation" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_container_scroll_animation_path_idx" ON "pages_blocks_container_scroll_animation" USING btree ("_path");
  CREATE INDEX "pages_blocks_container_scroll_animation_media_idx" ON "pages_blocks_container_scroll_animation" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_container_scroll_animation_order_idx" ON "_pages_v_blocks_container_scroll_animation" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_container_scroll_animation_parent_id_idx" ON "_pages_v_blocks_container_scroll_animation" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_container_scroll_animation_path_idx" ON "_pages_v_blocks_container_scroll_animation" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_container_scroll_animation_media_idx" ON "_pages_v_blocks_container_scroll_animation" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_container_scroll_animation" CASCADE;
  DROP TABLE "_pages_v_blocks_container_scroll_animation" CASCADE;`)
}
