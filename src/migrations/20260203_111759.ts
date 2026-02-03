import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Migración idempotente: si el push de run dev ya creó columnas/tipos,
 * no falla y aplica solo lo que falta (IF NOT EXISTS / IF EXISTS / DO con excepción).
 */
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // CREATE TYPE: idempotente con DO + excepción duplicate_object
  await db.execute(sql`
   DO $$ BEGIN CREATE TYPE "public"."enum_pages_blocks_career3_depts3_jobs_type" AS ENUM('reference', 'custom'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum_pages_blocks_career3_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum__pages_v_blocks_career3_depts3_jobs_type" AS ENUM('reference', 'custom'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum__pages_v_blocks_career3_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;`)
  // ALTER COLUMN: pueden fallar si push ya los aplicó → DO con excepción
  await db.execute(sql`
   DO $$ BEGIN ALTER TABLE "pages_blocks_career3_depts3_jobs" ALTER COLUMN "url" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
   DO $$ BEGIN ALTER TABLE "pages_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE jsonb; ALTER TABLE "pages_blocks_career3_depts3" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
   DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ALTER COLUMN "url" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
   DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE jsonb; ALTER TABLE "_pages_v_blocks_career3_depts3" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;`)
  // ADD COLUMN: idempotente con IF NOT EXISTS
  await db.execute(sql`
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "job_content" jsonb;
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "type" "enum_pages_blocks_career3_depts3_jobs_type" DEFAULT 'reference';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "new_tab" boolean;
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "variant" "var" DEFAULT 'secondary';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "size" "sz" DEFAULT 'sm';
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "content" jsonb;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "background_color" varchar;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "text_color" varchar;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "font_family" "enum_pages_blocks_career3_font_family" DEFAULT 'default';
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
   ALTER TABLE "pages_blocks_career3" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;`)
  await db.execute(sql`
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "job_content" jsonb;
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "type" "enum__pages_v_blocks_career3_depts3_jobs_type" DEFAULT 'reference';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "new_tab" boolean;
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "variant" "var" DEFAULT 'secondary';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN IF NOT EXISTS "size" "sz" DEFAULT 'sm';
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "content" jsonb;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "background_color" varchar;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "text_color" varchar;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "font_family" "enum__pages_v_blocks_career3_font_family" DEFAULT 'default';
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;`)
  // ADD CONSTRAINT: idempotente con DO + excepción duplicate_object
  await db.execute(sql`
   DO $$ BEGIN ALTER TABLE "pages_blocks_career3" ADD CONSTRAINT "pages_blocks_career3_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career3" ADD CONSTRAINT "_pages_v_blocks_career3_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;`)
  // CREATE INDEX: idempotente con IF NOT EXISTS
  await db.execute(sql`
   CREATE INDEX IF NOT EXISTS "pages_blocks_career3_custom_font_file_idx" ON "pages_blocks_career3" USING btree ("custom_font_file_id");
   CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_custom_font_file_idx" ON "_pages_v_blocks_career3" USING btree ("custom_font_file_id");`)
  // DROP COLUMN: idempotente con IF EXISTS
  await db.execute(sql`
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "title";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "location";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "description";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "button_variant";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "button_size";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN IF EXISTS "heading";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN IF EXISTS "description";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "title";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "location";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "description";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "button_variant";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN IF EXISTS "button_size";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN IF EXISTS "heading";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN IF EXISTS "description";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_career3" DROP CONSTRAINT IF EXISTS "pages_blocks_career3_custom_font_file_id_fonts_id_fk";
   ALTER TABLE "_pages_v_blocks_career3" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_career3_custom_font_file_id_fonts_id_fk";
   DROP INDEX IF EXISTS "pages_blocks_career3_custom_font_file_idx";
   DROP INDEX IF EXISTS "_pages_v_blocks_career3_custom_font_file_idx";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ALTER COLUMN "url" SET DEFAULT '#';
   ALTER TABLE "pages_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE varchar;
   ALTER TABLE "pages_blocks_career3_depts3" ALTER COLUMN "title" SET DEFAULT 'Job Department';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ALTER COLUMN "url" SET DEFAULT '#';
   ALTER TABLE "_pages_v_blocks_career3_depts3" ALTER COLUMN "title" SET DATA TYPE varchar;
   ALTER TABLE "_pages_v_blocks_career3_depts3" ALTER COLUMN "title" SET DEFAULT 'Job Department';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN "title" varchar DEFAULT 'Job Title';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN "location" varchar DEFAULT 'Location';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN "button_variant" "var" DEFAULT 'secondary';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD COLUMN "button_size" "sz" DEFAULT 'sm';
   ALTER TABLE "pages_blocks_career3" ADD COLUMN "heading" varchar DEFAULT 'Job Openings';
   ALTER TABLE "pages_blocks_career3" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN "title" varchar DEFAULT 'Job Title';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN "location" varchar DEFAULT 'Location';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN "button_variant" "var" DEFAULT 'secondary';
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD COLUMN "button_size" "sz" DEFAULT 'sm';
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN "heading" varchar DEFAULT 'Job Openings';
   ALTER TABLE "_pages_v_blocks_career3" ADD COLUMN "description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.';
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN "job_content";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN "type";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN "new_tab";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN "variant";
   ALTER TABLE "pages_blocks_career3_depts3_jobs" DROP COLUMN "size";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "content";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "background_color";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "text_color";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "bold_text_color";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "button_background_color";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "button_text_color";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "font_family";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "use_custom_font";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "custom_font_file_id";
   ALTER TABLE "pages_blocks_career3" DROP COLUMN "custom_font_name";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN "job_content";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN "type";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN "new_tab";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN "variant";
   ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DROP COLUMN "size";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "content";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "background_color";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "text_color";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "bold_text_color";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "button_background_color";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "button_text_color";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "font_family";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "use_custom_font";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "custom_font_file_id";
   ALTER TABLE "_pages_v_blocks_career3" DROP COLUMN "custom_font_name";
   DROP TYPE IF EXISTS "public"."enum_pages_blocks_career3_depts3_jobs_type";
   DROP TYPE IF EXISTS "public"."enum_pages_blocks_career3_font_family";
   DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_career3_depts3_jobs_type";
   DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_career3_font_family";`)
}
