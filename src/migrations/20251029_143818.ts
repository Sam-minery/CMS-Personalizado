import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Crear tipos ENUM solo si no existen
  await db.execute(sql`
   DO $$ BEGIN
    CREATE TYPE "public"."t" AS ENUM('reference', 'custom');
   EXCEPTION WHEN duplicate_object THEN null;
   END $$;
  `);
  
  await db.execute(sql`
   DO $$ BEGIN
    CREATE TYPE "public"."img1_type" AS ENUM('upload', 'url');
   EXCEPTION WHEN duplicate_object THEN null;
   END $$;
  `);
  
  await db.execute(sql`
   DO $$ BEGIN
    CREATE TYPE "public"."img2_type" AS ENUM('upload', 'url');
   EXCEPTION WHEN duplicate_object THEN null;
   END $$;
  `);
  
  // Agregar 'heroTemplate' al enum solo si no existe
  await db.execute(sql`
   DO $$ BEGIN
    ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'heroTemplate';
   EXCEPTION WHEN duplicate_object THEN null;
   END $$;
  `);
  
  await db.execute(sql`
   DO $$ BEGIN
    ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'heroTemplate';
   EXCEPTION WHEN duplicate_object THEN null;
   END $$;
  `);
  
  await db.execute(sql`
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_template_heading" varchar DEFAULT 'Agents that do the work <br /> Approvals that keep you safe.';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_prim_btn_text" varchar DEFAULT 'Start your free trial';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_prim_btn_link_type" "t" DEFAULT 'custom';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_prim_btn_link_new_tab" boolean;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_prim_btn_link_url" varchar DEFAULT '#';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_sec_btn_text" varchar DEFAULT 'View role based demos';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_sec_btn_link_type" "t" DEFAULT 'custom';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_sec_btn_link_new_tab" boolean;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_sec_btn_link_url" varchar DEFAULT '#';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_first_image_type" "img1_type" DEFAULT 'url';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_first_image_upload_id" integer;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_second_image_type" "img2_type" DEFAULT 'url';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_second_image_upload_id" integer;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD COLUMN "hero_hero_imgs_show_gradient" boolean DEFAULT true;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_template_heading" varchar DEFAULT 'Agents that do the work <br /> Approvals that keep you safe.';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_prim_btn_text" varchar DEFAULT 'Start your free trial';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_prim_btn_link_type" "t" DEFAULT 'custom';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_prim_btn_link_new_tab" boolean;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_prim_btn_link_url" varchar DEFAULT '#';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_sec_btn_text" varchar DEFAULT 'View role based demos';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_sec_btn_link_type" "t" DEFAULT 'custom';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_sec_btn_link_new_tab" boolean;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_sec_btn_link_url" varchar DEFAULT '#';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_first_image_type" "img1_type" DEFAULT 'url';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_first_image_upload_id" integer;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_second_image_type" "img2_type" DEFAULT 'url';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_second_image_upload_id" integer;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg';
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD COLUMN "version_hero_hero_imgs_show_gradient" boolean DEFAULT true;
  EXCEPTION WHEN duplicate_column THEN null;
  END $$;
  `);
  
  await db.execute(sql`
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE INDEX IF NOT EXISTS "pages_hero_hero_imgs_hero_hero_imgs_first_image_upload_idx" ON "pages" USING btree ("hero_hero_imgs_first_image_upload_id");
  EXCEPTION WHEN duplicate_table THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE INDEX IF NOT EXISTS "pages_hero_hero_imgs_hero_hero_imgs_second_image_upload_idx" ON "pages" USING btree ("hero_hero_imgs_second_image_upload_id");
  EXCEPTION WHEN duplicate_table THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_first_image_upload_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_first_image_upload_id");
  EXCEPTION WHEN duplicate_table THEN null;
  END $$;
  
  DO $$ BEGIN
   CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_second_image_upload_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_second_image_upload_id");
  EXCEPTION WHEN duplicate_table THEN null;
  END $$;
  `);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_imgs_first_image_upload_id_media_id_fk";
  
  ALTER TABLE "pages" DROP CONSTRAINT "pages_hero_hero_imgs_second_image_upload_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_imgs_first_image_upload_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_hero_hero_imgs_second_image_upload_id_media_id_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  DROP INDEX "pages_hero_hero_imgs_hero_hero_imgs_first_image_upload_idx";
  DROP INDEX "pages_hero_hero_imgs_hero_hero_imgs_second_image_upload_idx";
  DROP INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_first_image_upload_idx";
  DROP INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_second_image_upload_idx";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_template_heading";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_template_subheading";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_prim_btn_text";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_prim_btn_link_type";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_prim_btn_link_new_tab";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_prim_btn_link_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_sec_btn_text";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_sec_btn_link_type";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_sec_btn_link_new_tab";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_sec_btn_link_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_first_image_type";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_first_image_upload_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_first_image_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_second_image_type";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_second_image_upload_id";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_second_image_url";
  ALTER TABLE "pages" DROP COLUMN "hero_hero_imgs_show_gradient";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_template_heading";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_template_subheading";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_prim_btn_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_prim_btn_link_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_prim_btn_link_new_tab";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_prim_btn_link_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_sec_btn_text";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_sec_btn_link_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_sec_btn_link_new_tab";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_sec_btn_link_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_first_image_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_first_image_upload_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_first_image_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_second_image_type";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_second_image_upload_id";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_second_image_url";
  ALTER TABLE "_pages_v" DROP COLUMN "version_hero_hero_imgs_show_gradient";
  DROP TYPE "public"."t";
  DROP TYPE "public"."img1_type";
  DROP TYPE "public"."img2_type";`)
}
