import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_high_b_m_i_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image1_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image2_id_media_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_high_b_m_i_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image1_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image2_id_media_id_fk";
  
  DROP INDEX "imc_senda_high_b_m_i_image_idx";
  DROP INDEX "pages_blocks_app_senda_image1_idx";
  DROP INDEX "pages_blocks_app_senda_image2_idx";
  DROP INDEX "_imc_senda_v_high_b_m_i_image_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image1_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image2_idx";
  ALTER TABLE "imc_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "imc_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_use_media" boolean DEFAULT true;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_media_image_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_src" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_alt" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_name_and_description" jsonb;
  ALTER TABLE "imc_senda" ADD COLUMN "result_text_color" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_media_image_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_src" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_alt" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_use_media" boolean DEFAULT true;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_media_image_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_src" varchar;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_alt" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_media_image_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_src" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_alt" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_name_and_description" jsonb;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "result_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "background_image_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "background_image_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "background_image_src" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_src" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_alt" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_use_media" boolean DEFAULT true;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_media_image_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_src" varchar;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_alt" varchar;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_high_b_m_i_image_media_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image2_media_image_id_media_id_fk" FOREIGN KEY ("image2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_high_b_m_i_image_media_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_background_image_media_image_id_media_id_fk" FOREIGN KEY ("background_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image1_media_image_id_media_id_fk" FOREIGN KEY ("image1_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image2_media_image_id_media_id_fk" FOREIGN KEY ("image2_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "imc_senda_background_image_background_image_media_image_idx" ON "imc_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "imc_senda_high_b_m_i_image_high_b_m_i_image_media_image_idx" ON "imc_senda" USING btree ("high_b_m_i_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_background_image_background_image_idx" ON "pages_blocks_app_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_image1_image1_media_image_idx" ON "pages_blocks_app_senda" USING btree ("image1_media_image_id");
  CREATE INDEX "pages_blocks_app_senda_image2_image2_media_image_idx" ON "pages_blocks_app_senda" USING btree ("image2_media_image_id");
  CREATE INDEX "_imc_senda_v_background_image_background_image_media_ima_idx" ON "_imc_senda_v" USING btree ("background_image_media_image_id");
  CREATE INDEX "_imc_senda_v_high_b_m_i_image_high_b_m_i_image_media_ima_idx" ON "_imc_senda_v" USING btree ("high_b_m_i_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_background_image_background_im_idx" ON "_pages_v_blocks_app_senda" USING btree ("background_image_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image1_image1_media_image_idx" ON "_pages_v_blocks_app_senda" USING btree ("image1_media_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image2_image2_media_image_idx" ON "_pages_v_blocks_app_senda" USING btree ("image2_media_image_id");
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_id";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_name";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_description";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_name";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_description";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "imc_senda" DROP CONSTRAINT "imc_senda_high_b_m_i_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image1_media_image_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_app_senda" DROP CONSTRAINT "pages_blocks_app_senda_image2_media_image_id_media_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_imc_senda_v" DROP CONSTRAINT "_imc_senda_v_high_b_m_i_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_background_image_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image1_media_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_app_senda" DROP CONSTRAINT "_pages_v_blocks_app_senda_image2_media_image_id_media_id_fk";
  
  DROP INDEX "imc_senda_background_image_background_image_media_image_idx";
  DROP INDEX "imc_senda_high_b_m_i_image_high_b_m_i_image_media_image_idx";
  DROP INDEX "pages_blocks_app_senda_background_image_background_image_idx";
  DROP INDEX "pages_blocks_app_senda_image1_image1_media_image_idx";
  DROP INDEX "pages_blocks_app_senda_image2_image2_media_image_idx";
  DROP INDEX "_imc_senda_v_background_image_background_image_media_ima_idx";
  DROP INDEX "_imc_senda_v_high_b_m_i_image_high_b_m_i_image_media_ima_idx";
  DROP INDEX "_pages_v_blocks_app_senda_background_image_background_im_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image1_image1_media_image_idx";
  DROP INDEX "_pages_v_blocks_app_senda_image2_image2_media_image_idx";
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_image_id" integer;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_name" varchar;
  ALTER TABLE "imc_senda" ADD COLUMN "high_b_m_i_description" jsonb;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image1_id" integer;
  ALTER TABLE "pages_blocks_app_senda" ADD COLUMN "image2_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_image_id" integer;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_name" varchar;
  ALTER TABLE "_imc_senda_v" ADD COLUMN "high_b_m_i_description" jsonb;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image1_id" integer;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD COLUMN "image2_id" integer;
  ALTER TABLE "imc_senda" ADD CONSTRAINT "imc_senda_high_b_m_i_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_app_senda" ADD CONSTRAINT "pages_blocks_app_senda_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_senda_v" ADD CONSTRAINT "_imc_senda_v_high_b_m_i_image_id_media_id_fk" FOREIGN KEY ("high_b_m_i_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_app_senda" ADD CONSTRAINT "_pages_v_blocks_app_senda_image2_id_media_id_fk" FOREIGN KEY ("image2_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "imc_senda_high_b_m_i_image_idx" ON "imc_senda" USING btree ("high_b_m_i_image_id");
  CREATE INDEX "pages_blocks_app_senda_image1_idx" ON "pages_blocks_app_senda" USING btree ("image1_id");
  CREATE INDEX "pages_blocks_app_senda_image2_idx" ON "pages_blocks_app_senda" USING btree ("image2_id");
  CREATE INDEX "_imc_senda_v_high_b_m_i_image_idx" ON "_imc_senda_v" USING btree ("high_b_m_i_image_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image1_idx" ON "_pages_v_blocks_app_senda" USING btree ("image1_id");
  CREATE INDEX "_pages_v_blocks_app_senda_image2_idx" ON "_pages_v_blocks_app_senda" USING btree ("image2_id");
  ALTER TABLE "imc_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "imc_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "imc_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_use_media";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_media_image_id";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_src";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_image_alt";
  ALTER TABLE "imc_senda" DROP COLUMN "high_b_m_i_name_and_description";
  ALTER TABLE "imc_senda" DROP COLUMN "result_text_color";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_use_media";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_media_image_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_src";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image1_alt";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_use_media";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_media_image_id";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_src";
  ALTER TABLE "pages_blocks_app_senda" DROP COLUMN "image2_alt";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "background_image_use_media";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "background_image_src";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_use_media";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_media_image_id";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_src";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_image_alt";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "high_b_m_i_name_and_description";
  ALTER TABLE "_imc_senda_v" DROP COLUMN "result_text_color";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "background_image_use_media";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "background_image_media_image_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "background_image_src";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_use_media";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_media_image_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_src";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image1_alt";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_use_media";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_media_image_id";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_src";
  ALTER TABLE "_pages_v_blocks_app_senda" DROP COLUMN "image2_alt";`)
}
