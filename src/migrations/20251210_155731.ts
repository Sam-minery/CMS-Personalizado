import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_layout42" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Long heading is what you see here in this feature section',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_layout90" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Long heading is what you see here in this feature section',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout42" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Long heading is what you see here in this feature section',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout90" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Long heading is what you see here in this feature section',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_layout42" ADD CONSTRAINT "pages_blocks_layout42_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout90" ADD CONSTRAINT "pages_blocks_layout90_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout90" ADD CONSTRAINT "pages_blocks_layout90_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout42" ADD CONSTRAINT "_pages_v_blocks_layout42_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout90" ADD CONSTRAINT "_pages_v_blocks_layout90_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout90" ADD CONSTRAINT "_pages_v_blocks_layout90_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_layout42_order_idx" ON "pages_blocks_layout42" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout42_parent_id_idx" ON "pages_blocks_layout42" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout42_path_idx" ON "pages_blocks_layout42" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout90_order_idx" ON "pages_blocks_layout90" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout90_parent_id_idx" ON "pages_blocks_layout90" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout90_path_idx" ON "pages_blocks_layout90" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout90_image_image_media_image_idx" ON "pages_blocks_layout90" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout42_order_idx" ON "_pages_v_blocks_layout42" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout42_parent_id_idx" ON "_pages_v_blocks_layout42" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout42_path_idx" ON "_pages_v_blocks_layout42" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout90_order_idx" ON "_pages_v_blocks_layout90" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout90_parent_id_idx" ON "_pages_v_blocks_layout90" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout90_path_idx" ON "_pages_v_blocks_layout90" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout90_image_image_media_image_idx" ON "_pages_v_blocks_layout90" USING btree ("image_media_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_layout42" CASCADE;
  DROP TABLE "pages_blocks_layout90" CASCADE;
  DROP TABLE "_pages_v_blocks_layout42" CASCADE;
  DROP TABLE "_pages_v_blocks_layout90" CASCADE;`)
}
