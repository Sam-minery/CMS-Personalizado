import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_svg_mask_effect_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum_pages_blocks_svg_mask_effect_text_size" AS ENUM('2xl', '3xl', '4xl', '5xl', '6xl');
  CREATE TYPE "public"."enum__pages_v_blocks_svg_mask_effect_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_svg_mask_effect_text_size" AS ENUM('2xl', '3xl', '4xl', '5xl', '6xl');
  CREATE TABLE "pages_blocks_svg_mask_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Discover the power of Tailwind CSS v4',
  	"highlighted_text1" varchar DEFAULT 'Tailwind CSS v4',
  	"highlighted_text2" varchar DEFAULT 'advanced animations',
  	"reveal_text" varchar DEFAULT 'The first rule of MRR Club is you do not talk about MRR Club. The second rule of MRR Club is you DO NOT talk about MRR Club.',
  	"height" "enum_pages_blocks_svg_mask_effect_height" DEFAULT '40rem',
  	"text_size" "enum_pages_blocks_svg_mask_effect_text_size" DEFAULT '4xl',
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_svg_mask_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Discover the power of Tailwind CSS v4',
  	"highlighted_text1" varchar DEFAULT 'Tailwind CSS v4',
  	"highlighted_text2" varchar DEFAULT 'advanced animations',
  	"reveal_text" varchar DEFAULT 'The first rule of MRR Club is you do not talk about MRR Club. The second rule of MRR Club is you DO NOT talk about MRR Club.',
  	"height" "enum__pages_v_blocks_svg_mask_effect_height" DEFAULT '40rem',
  	"text_size" "enum__pages_v_blocks_svg_mask_effect_text_size" DEFAULT '4xl',
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_svg_mask_effect" ADD CONSTRAINT "pages_blocks_svg_mask_effect_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_svg_mask_effect" ADD CONSTRAINT "pages_blocks_svg_mask_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_svg_mask_effect" ADD CONSTRAINT "_pages_v_blocks_svg_mask_effect_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_svg_mask_effect" ADD CONSTRAINT "_pages_v_blocks_svg_mask_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_svg_mask_effect_order_idx" ON "pages_blocks_svg_mask_effect" USING btree ("_order");
  CREATE INDEX "pages_blocks_svg_mask_effect_parent_id_idx" ON "pages_blocks_svg_mask_effect" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_svg_mask_effect_path_idx" ON "pages_blocks_svg_mask_effect" USING btree ("_path");
  CREATE INDEX "pages_blocks_svg_mask_effect_background_image_idx" ON "pages_blocks_svg_mask_effect" USING btree ("background_image_id");
  CREATE INDEX "_pages_v_blocks_svg_mask_effect_order_idx" ON "_pages_v_blocks_svg_mask_effect" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_svg_mask_effect_parent_id_idx" ON "_pages_v_blocks_svg_mask_effect" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_svg_mask_effect_path_idx" ON "_pages_v_blocks_svg_mask_effect" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_svg_mask_effect_background_image_idx" ON "_pages_v_blocks_svg_mask_effect" USING btree ("background_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_svg_mask_effect" CASCADE;
  DROP TABLE "_pages_v_blocks_svg_mask_effect" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_svg_mask_effect_height";
  DROP TYPE "public"."enum_pages_blocks_svg_mask_effect_text_size";
  DROP TYPE "public"."enum__pages_v_blocks_svg_mask_effect_height";
  DROP TYPE "public"."enum__pages_v_blocks_svg_mask_effect_text_size";`)
}
