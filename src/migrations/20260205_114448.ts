import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // CREATE TYPE: idempotente por si push ya creó los enums
  await db.execute(sql`
   DO $$ BEGIN CREATE TYPE "public"."enum_pages_blocks_career4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum_pages_blocks_career5_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum_pages_blocks_career6_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum_pages_blocks_career_section1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum__pages_v_blocks_career4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum__pages_v_blocks_career5_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum__pages_v_blocks_career6_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
   DO $$ BEGIN CREATE TYPE "public"."enum__pages_v_blocks_career_section1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  `)
  // title varchar → jsonb: idempotente por si push ya convirtió
  await db.execute(sql`
  DO $$ BEGIN ALTER TABLE "pages_blocks_career4_depts4" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "pages_blocks_career4_depts4" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "career5_depts" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "career5_depts" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "career6_depts" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "career6_depts" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "depts" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "depts" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career4_depts4" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career4_depts4" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_career5_depts_v" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_career5_depts_v" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_career6_depts_v" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_career6_depts_v" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_depts_v" ALTER COLUMN "title" DROP DEFAULT; EXCEPTION WHEN others THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_depts_v" ALTER COLUMN "title" SET DATA TYPE jsonb USING to_jsonb(title::text); EXCEPTION WHEN others THEN NULL; END $$;
  `)
  await db.execute(sql`
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "font_family" "enum_pages_blocks_career4_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_career4" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "font_family" "enum_pages_blocks_career5_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_career5" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "font_family" "enum_pages_blocks_career6_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_career6" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "font_family" "enum_pages_blocks_career_section1_font_family" DEFAULT 'default';
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "pages_blocks_career_section1" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "font_family" "enum__pages_v_blocks_career4_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_career4" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "font_family" "enum__pages_v_blocks_career5_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_career5" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "font_family" "enum__pages_v_blocks_career6_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_career6" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "bold_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "button_background_color" varchar;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "button_text_color" varchar;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "font_family" "enum__pages_v_blocks_career_section1_font_family" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "use_custom_font" boolean DEFAULT false;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "custom_font_file_id" integer;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD COLUMN IF NOT EXISTS "custom_font_name" varchar;
  DO $$ BEGIN ALTER TABLE "pages_blocks_career4" ADD CONSTRAINT "pages_blocks_career4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "pages_blocks_career5" ADD CONSTRAINT "pages_blocks_career5_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "pages_blocks_career6" ADD CONSTRAINT "pages_blocks_career6_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "pages_blocks_career_section1" ADD CONSTRAINT "pages_blocks_career_section1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career4" ADD CONSTRAINT "_pages_v_blocks_career4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career5" ADD CONSTRAINT "_pages_v_blocks_career5_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career6" ADD CONSTRAINT "_pages_v_blocks_career6_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN ALTER TABLE "_pages_v_blocks_career_section1" ADD CONSTRAINT "_pages_v_blocks_career_section1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action; EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_custom_font_file_idx" ON "pages_blocks_career4" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career5_custom_font_file_idx" ON "pages_blocks_career5" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career6_custom_font_file_idx" ON "pages_blocks_career6" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career_section1_custom_font_file_idx" ON "pages_blocks_career_section1" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_custom_font_file_idx" ON "_pages_v_blocks_career4" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career5_custom_font_file_idx" ON "_pages_v_blocks_career5" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career6_custom_font_file_idx" ON "_pages_v_blocks_career6" USING btree ("custom_font_file_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career_section1_custom_font_file_idx" ON "_pages_v_blocks_career_section1" USING btree ("custom_font_file_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_career4" DROP CONSTRAINT "pages_blocks_career4_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "pages_blocks_career5" DROP CONSTRAINT "pages_blocks_career5_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "pages_blocks_career6" DROP CONSTRAINT "pages_blocks_career6_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "pages_blocks_career_section1" DROP CONSTRAINT "pages_blocks_career_section1_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_career4" DROP CONSTRAINT "_pages_v_blocks_career4_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_career5" DROP CONSTRAINT "_pages_v_blocks_career5_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_career6" DROP CONSTRAINT "_pages_v_blocks_career6_custom_font_file_id_fonts_id_fk";
  
  ALTER TABLE "_pages_v_blocks_career_section1" DROP CONSTRAINT "_pages_v_blocks_career_section1_custom_font_file_id_fonts_id_fk";
  
  DROP INDEX "pages_blocks_career4_custom_font_file_idx";
  DROP INDEX "pages_blocks_career5_custom_font_file_idx";
  DROP INDEX "pages_blocks_career6_custom_font_file_idx";
  DROP INDEX "pages_blocks_career_section1_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_career4_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_career5_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_career6_custom_font_file_idx";
  DROP INDEX "_pages_v_blocks_career_section1_custom_font_file_idx";
  ALTER TABLE "pages_blocks_career4_depts4" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "pages_blocks_career4_depts4" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "career5_depts" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "career5_depts" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "career6_depts" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "career6_depts" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "depts" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "depts" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "_pages_v_blocks_career4_depts4" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "_pages_v_blocks_career4_depts4" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "_career5_depts_v" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "_career5_depts_v" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "_career6_depts_v" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "_career6_depts_v" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "_depts_v" ALTER COLUMN "title" SET DATA TYPE varchar USING (title::text);
  ALTER TABLE "_depts_v" ALTER COLUMN "title" SET DEFAULT 'Job Department';
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "button_background_color";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "button_text_color";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_career4" DROP COLUMN "custom_font_name";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "button_background_color";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "button_text_color";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_career5" DROP COLUMN "custom_font_name";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "button_background_color";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "button_text_color";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_career6" DROP COLUMN "custom_font_name";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "background_color";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "text_color";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "bold_text_color";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "button_background_color";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "button_text_color";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "font_family";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "use_custom_font";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "pages_blocks_career_section1" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "button_background_color";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "button_text_color";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_career4" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "button_background_color";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "button_text_color";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_career5" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "button_background_color";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "button_text_color";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_career6" DROP COLUMN "custom_font_name";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "background_color";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "text_color";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "bold_text_color";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "button_background_color";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "button_text_color";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "font_family";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "use_custom_font";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "custom_font_file_id";
  ALTER TABLE "_pages_v_blocks_career_section1" DROP COLUMN "custom_font_name";
  DROP TYPE "public"."enum_pages_blocks_career4_font_family";
  DROP TYPE "public"."enum_pages_blocks_career5_font_family";
  DROP TYPE "public"."enum_pages_blocks_career6_font_family";
  DROP TYPE "public"."enum_pages_blocks_career_section1_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_career4_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_career5_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_career6_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_career_section1_font_family";`)
}
