import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."hs_cu_wu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."hs_cu_hu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."hs_cu_mwu" AS ENUM('px', 'rem');
  CREATE TYPE "public"."hs_cu_mhu" AS ENUM('px', 'rem');
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "image_use_viewport_size" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "image_media_width_vw" numeric;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "image_media_height_vh" numeric;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "image_media_width_vw_mobile" numeric;
  ALTER TABLE "pages_blocks_layout_senda" ADD COLUMN "image_media_height_vh_mobile" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_use_cu_img_dims" boolean DEFAULT false;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_width" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_width_unit" "hs_cu_wu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_height" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_height_unit" "hs_cu_hu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_w" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_wu" "hs_cu_mwu" DEFAULT 'px';
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_h" numeric;
  ALTER TABLE "pages" ADD COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_hu" "hs_cu_mhu" DEFAULT 'px';
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "image_use_viewport_size" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "image_media_width_vw" numeric;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "image_media_height_vh" numeric;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "image_media_width_vw_mobile" numeric;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD COLUMN "image_media_height_vh_mobile" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_use_cu_img_dims" boolean DEFAULT false;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width_unit" "hs_cu_wu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height_unit" "hs_cu_hu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_w" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_wu" "hs_cu_mwu" DEFAULT 'px';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_h" numeric;
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_hu" "hs_cu_mhu" DEFAULT 'px';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "image_use_viewport_size";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "image_media_width_vw";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "image_media_height_vh";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "image_media_width_vw_mobile";
  ALTER TABLE "pages_blocks_layout_senda" DROP COLUMN "image_media_height_vh_mobile";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_use_cu_img_dims";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_width";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_width_unit";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_height";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_height_unit";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_w";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_wu";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_h";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_senda_image_custom_uploaded_image_mob_hu";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "image_use_viewport_size";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "image_media_width_vw";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "image_media_height_vh";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "image_media_width_vw_mobile";
  ALTER TABLE "_pages_v_blocks_layout_senda" DROP COLUMN "image_media_height_vh_mobile";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_use_cu_img_dims";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_width_unit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_height_unit";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_w";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_wu";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_h";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_senda_image_custom_uploaded_image_mob_hu";
  DROP TYPE "public"."hs_cu_wu";
  DROP TYPE "public"."hs_cu_hu";
  DROP TYPE "public"."hs_cu_mwu";
  DROP TYPE "public"."hs_cu_mhu";`)
}
