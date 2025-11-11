import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_pixelated_canvas_shape" AS ENUM('circle', 'square');
  CREATE TYPE "public"."enum_pages_blocks_pixelated_canvas_distortion_mode" AS ENUM('repel', 'attract', 'swirl');
  CREATE TYPE "public"."enum__pages_v_blocks_pixelated_canvas_shape" AS ENUM('circle', 'square');
  CREATE TYPE "public"."enum__pages_v_blocks_pixelated_canvas_distortion_mode" AS ENUM('repel', 'attract', 'swirl');
  CREATE TABLE "pages_blocks_pixelated_canvas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"width" numeric DEFAULT 400,
  	"height" numeric DEFAULT 500,
  	"cell_size" numeric DEFAULT 3,
  	"dot_scale" numeric DEFAULT 0.9,
  	"shape" "enum_pages_blocks_pixelated_canvas_shape" DEFAULT 'square',
  	"background_color" varchar DEFAULT '#000000',
  	"dropout_strength" numeric DEFAULT 0.4,
  	"interactive" boolean DEFAULT true,
  	"distortion_strength" numeric DEFAULT 3,
  	"distortion_radius" numeric DEFAULT 80,
  	"distortion_mode" "enum_pages_blocks_pixelated_canvas_distortion_mode" DEFAULT 'swirl',
  	"follow_speed" numeric DEFAULT 0.2,
  	"jitter_strength" numeric DEFAULT 4,
  	"jitter_speed" numeric DEFAULT 4,
  	"sample_average" boolean DEFAULT true,
  	"tint_color" varchar DEFAULT '#FFFFFF',
  	"tint_strength" numeric DEFAULT 0.2,
  	"class_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pixelated_canvas" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"width" numeric DEFAULT 400,
  	"height" numeric DEFAULT 500,
  	"cell_size" numeric DEFAULT 3,
  	"dot_scale" numeric DEFAULT 0.9,
  	"shape" "enum__pages_v_blocks_pixelated_canvas_shape" DEFAULT 'square',
  	"background_color" varchar DEFAULT '#000000',
  	"dropout_strength" numeric DEFAULT 0.4,
  	"interactive" boolean DEFAULT true,
  	"distortion_strength" numeric DEFAULT 3,
  	"distortion_radius" numeric DEFAULT 80,
  	"distortion_mode" "enum__pages_v_blocks_pixelated_canvas_distortion_mode" DEFAULT 'swirl',
  	"follow_speed" numeric DEFAULT 0.2,
  	"jitter_strength" numeric DEFAULT 4,
  	"jitter_speed" numeric DEFAULT 4,
  	"sample_average" boolean DEFAULT true,
  	"tint_color" varchar DEFAULT '#FFFFFF',
  	"tint_strength" numeric DEFAULT 0.2,
  	"class_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_pixelated_canvas" ADD CONSTRAINT "pages_blocks_pixelated_canvas_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pixelated_canvas" ADD CONSTRAINT "pages_blocks_pixelated_canvas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pixelated_canvas" ADD CONSTRAINT "_pages_v_blocks_pixelated_canvas_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pixelated_canvas" ADD CONSTRAINT "_pages_v_blocks_pixelated_canvas_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_pixelated_canvas_order_idx" ON "pages_blocks_pixelated_canvas" USING btree ("_order");
  CREATE INDEX "pages_blocks_pixelated_canvas_parent_id_idx" ON "pages_blocks_pixelated_canvas" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pixelated_canvas_path_idx" ON "pages_blocks_pixelated_canvas" USING btree ("_path");
  CREATE INDEX "pages_blocks_pixelated_canvas_media_idx" ON "pages_blocks_pixelated_canvas" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_pixelated_canvas_order_idx" ON "_pages_v_blocks_pixelated_canvas" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pixelated_canvas_parent_id_idx" ON "_pages_v_blocks_pixelated_canvas" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pixelated_canvas_path_idx" ON "_pages_v_blocks_pixelated_canvas" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pixelated_canvas_media_idx" ON "_pages_v_blocks_pixelated_canvas" USING btree ("media_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_pixelated_canvas" CASCADE;
  DROP TABLE "_pages_v_blocks_pixelated_canvas" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_pixelated_canvas_shape";
  DROP TYPE "public"."enum_pages_blocks_pixelated_canvas_distortion_mode";
  DROP TYPE "public"."enum__pages_v_blocks_pixelated_canvas_shape";
  DROP TYPE "public"."enum__pages_v_blocks_pixelated_canvas_distortion_mode";`)
}
