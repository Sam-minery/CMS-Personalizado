import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_speed_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"speed_template_heading" varchar DEFAULT 'Built for Speed <br /> Designed for Scale',
  	"speed_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
  	"speed_imgs_first_image_type" "img1_type" DEFAULT 'url',
  	"speed_imgs_first_image_upload_id" integer,
  	"speed_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg',
  	"speed_imgs_second_image_type" "img2_type" DEFAULT 'url',
  	"speed_imgs_second_image_upload_id" integer,
  	"speed_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg',
  	"speed_imgs_show_gradient" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_speed_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"speed_template_heading" varchar DEFAULT 'Built for Speed <br /> Designed for Scale',
  	"speed_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
  	"speed_imgs_first_image_type" "img1_type" DEFAULT 'url',
  	"speed_imgs_first_image_upload_id" integer,
  	"speed_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg',
  	"speed_imgs_second_image_type" "img2_type" DEFAULT 'url',
  	"speed_imgs_second_image_upload_id" integer,
  	"speed_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg',
  	"speed_imgs_show_gradient" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_speed_template" ADD CONSTRAINT "pages_blocks_speed_template_speed_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_speed_template" ADD CONSTRAINT "pages_blocks_speed_template_speed_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_speed_template" ADD CONSTRAINT "pages_blocks_speed_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_speed_template" ADD CONSTRAINT "_pages_v_blocks_speed_template_speed_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_speed_template" ADD CONSTRAINT "_pages_v_blocks_speed_template_speed_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_speed_template" ADD CONSTRAINT "_pages_v_blocks_speed_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_speed_template_order_idx" ON "pages_blocks_speed_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_speed_template_parent_id_idx" ON "pages_blocks_speed_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_speed_template_path_idx" ON "pages_blocks_speed_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_speed_template_speed_imgs_speed_imgs_first_image_upload_idx" ON "pages_blocks_speed_template" USING btree ("speed_imgs_first_image_upload_id");
  CREATE INDEX "pages_blocks_speed_template_speed_imgs_speed_imgs_second_image_upload_idx" ON "pages_blocks_speed_template" USING btree ("speed_imgs_second_image_upload_id");
  CREATE INDEX "_pages_v_blocks_speed_template_order_idx" ON "_pages_v_blocks_speed_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_speed_template_parent_id_idx" ON "_pages_v_blocks_speed_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_speed_template_path_idx" ON "_pages_v_blocks_speed_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_speed_template_speed_imgs_speed_imgs_first_image_upload_idx" ON "_pages_v_blocks_speed_template" USING btree ("speed_imgs_first_image_upload_id");
  CREATE INDEX "_pages_v_blocks_speed_template_speed_imgs_speed_imgs_second_image_upload_idx" ON "_pages_v_blocks_speed_template" USING btree ("speed_imgs_second_image_upload_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_speed_template" CASCADE;
  DROP TABLE "_pages_v_blocks_speed_template" CASCADE;`)
}
