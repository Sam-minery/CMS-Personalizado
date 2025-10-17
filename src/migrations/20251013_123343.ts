import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_evt_hdr_1_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_1_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_1_events_button_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_1_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_1_v_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_1_v_events_button_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_1_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  -- Verificar si los valores ya existen antes de agregarlos
  DO $$ 
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'contact1' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'enum_form_custom_2_submissions_source')) THEN
      ALTER TYPE "public"."enum_form_custom_2_submissions_source" ADD VALUE 'contact1';
    END IF;
  END $$;
  
  DO $$ 
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_enum WHERE enumlabel = 'contact5' AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'enum_form_custom_2_submissions_source')) THEN
      ALTER TYPE "public"."enum_form_custom_2_submissions_source" ADD VALUE 'contact5';
    END IF;
  END $$;
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'solid'::text;
  DROP TYPE "public"."enum_pages_blocks_cta9_buttons_variant";
  CREATE TYPE "public"."enum_pages_blocks_cta9_buttons_variant" AS ENUM('solid', 'outline');
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'solid'::"public"."enum_pages_blocks_cta9_buttons_variant";
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_pages_blocks_cta9_buttons_variant" USING "variant"::"public"."enum_pages_blocks_cta9_buttons_variant";
  ALTER TABLE "pages_blocks_cta5_buttons" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_cta5_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::text;
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_variant";
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary');
  ALTER TABLE "pages_blocks_cta5_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum_pages_blocks_cta5_buttons_variant";
  ALTER TABLE "pages_blocks_cta5_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_pages_blocks_cta5_buttons_variant" USING "variant"::"public"."enum_pages_blocks_cta5_buttons_variant";
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'solid'::text;
  DROP TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant";
  CREATE TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant" AS ENUM('solid', 'outline');
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'solid'::"public"."enum__pages_v_blocks_cta9_buttons_variant";
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant" USING "variant"::"public"."enum__pages_v_blocks_cta9_buttons_variant";
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::text;
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant";
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary');
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum__pages_v_blocks_cta5_buttons_variant";
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" USING "variant"::"public"."enum__pages_v_blocks_cta5_buttons_variant";
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_variant" SET DEFAULT 'secondary'::"public"."enum_evt_hdr_1_events_button_variant";
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_variant" SET DATA TYPE "public"."enum_evt_hdr_1_events_button_variant" USING "button_variant"::"public"."enum_evt_hdr_1_events_button_variant";
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_size" SET DEFAULT 'sm'::"public"."enum_evt_hdr_1_events_button_size";
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_size" SET DATA TYPE "public"."enum_evt_hdr_1_events_button_size" USING "button_size"::"public"."enum_evt_hdr_1_events_button_size";
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_variant" SET DEFAULT 'secondary'::"public"."enum_evt_hdr_1_event_button_variant";
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_variant" SET DATA TYPE "public"."enum_evt_hdr_1_event_button_variant" USING "event_button_variant"::"public"."enum_evt_hdr_1_event_button_variant";
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_size" SET DEFAULT 'primary'::"public"."enum_evt_hdr_1_event_button_size";
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_size" SET DATA TYPE "public"."enum_evt_hdr_1_event_button_size" USING "event_button_size"::"public"."enum_evt_hdr_1_event_button_size";
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_variant" SET DEFAULT 'secondary'::"public"."enum__evt_hdr_1_v_events_button_variant";
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_variant" SET DATA TYPE "public"."enum__evt_hdr_1_v_events_button_variant" USING "button_variant"::"public"."enum__evt_hdr_1_v_events_button_variant";
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_size" SET DEFAULT 'sm'::"public"."enum__evt_hdr_1_v_events_button_size";
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_size" SET DATA TYPE "public"."enum__evt_hdr_1_v_events_button_size" USING "button_size"::"public"."enum__evt_hdr_1_v_events_button_size";
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_variant" SET DEFAULT 'secondary'::"public"."enum__evt_hdr_1_v_event_button_variant";
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_variant" SET DATA TYPE "public"."enum__evt_hdr_1_v_event_button_variant" USING "event_button_variant"::"public"."enum__evt_hdr_1_v_event_button_variant";
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_size" SET DEFAULT 'primary'::"public"."enum__evt_hdr_1_v_event_button_size";
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_size" SET DATA TYPE "public"."enum__evt_hdr_1_v_event_button_size" USING "event_button_size"::"public"."enum__evt_hdr_1_v_event_button_size";
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "title" varchar DEFAULT 'View all';
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "variant" "enum_evt_hdr_1_filters_variant" DEFAULT 'secondary';
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "size" "enum_evt_hdr_1_filters_size" DEFAULT 'sm';
  ALTER TABLE "evt_hdr_1_events" ADD COLUMN "button_url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_1" ADD COLUMN "event_button_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "title" varchar DEFAULT 'View all';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "variant" "enum__evt_hdr_1_v_filters_variant" DEFAULT 'secondary';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "size" "enum__evt_hdr_1_v_filters_size" DEFAULT 'sm';
  ALTER TABLE "_evt_hdr_1_v_events" ADD COLUMN "button_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_1_v" ADD COLUMN "event_button_url" varchar DEFAULT '#';
  ALTER TABLE "pages_blocks_cta9_buttons" DROP COLUMN "size";
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "button_title";
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "button_variant";
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "button_size";
  ALTER TABLE "_pages_v_blocks_cta9_buttons" DROP COLUMN "size";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "button_title";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "button_variant";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "button_size";
  DROP TYPE "public"."enum_pages_blocks_cta9_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta9_buttons_size";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_cta9_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_cta9_buttons_size" AS ENUM('sm', 'default', 'lg');
  ALTER TYPE "public"."enum_pages_blocks_cta5_buttons_variant" ADD VALUE 'secondary-alt';
  ALTER TYPE "public"."enum_pages_blocks_cta5_buttons_variant" ADD VALUE 'ghost';
  ALTER TYPE "public"."enum_pages_blocks_cta5_buttons_variant" ADD VALUE 'link';
  ALTER TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" ADD VALUE 'secondary-alt';
  ALTER TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" ADD VALUE 'ghost';
  ALTER TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" ADD VALUE 'link';
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::text;
  DROP TYPE "public"."enum_pages_blocks_cta9_buttons_variant";
  CREATE TYPE "public"."enum_pages_blocks_cta9_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum_pages_blocks_cta9_buttons_variant";
  ALTER TABLE "pages_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum_pages_blocks_cta9_buttons_variant" USING "variant"::"public"."enum_pages_blocks_cta9_buttons_variant";
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::text;
  DROP TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant";
  CREATE TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DEFAULT 'primary'::"public"."enum__pages_v_blocks_cta9_buttons_variant";
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ALTER COLUMN "variant" SET DATA TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant" USING "variant"::"public"."enum__pages_v_blocks_cta9_buttons_variant";
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE text;
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2'::text;
  DROP TYPE "public"."enum_form_custom_2_submissions_source";
  CREATE TYPE "public"."enum_form_custom_2_submissions_source" AS ENUM('form-custom-2', 'multi-form-2', 'banner1');
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2'::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE "public"."enum_form_custom_2_submissions_source" USING "source"::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_variant" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_variant" SET DEFAULT 'secondary';
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_size" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_1_events" ALTER COLUMN "button_size" SET DEFAULT 'sm';
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_variant" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_variant" SET DEFAULT 'secondary';
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_size" SET DATA TYPE varchar;
  ALTER TABLE "evt_hdr_1" ALTER COLUMN "event_button_size" SET DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_variant" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_variant" SET DEFAULT 'secondary';
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_size" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_1_v_events" ALTER COLUMN "button_size" SET DEFAULT 'sm';
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_variant" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_variant" SET DEFAULT 'secondary';
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_size" SET DATA TYPE varchar;
  ALTER TABLE "_evt_hdr_1_v" ALTER COLUMN "event_button_size" SET DEFAULT 'primary';
  ALTER TABLE "pages_blocks_cta9_buttons" ADD COLUMN "size" "enum_pages_blocks_cta9_buttons_size" DEFAULT 'default';
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "button_title" varchar DEFAULT 'View all';
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "button_variant" varchar DEFAULT 'secondary';
  ALTER TABLE "evt_hdr_1_filters" ADD COLUMN "button_size" varchar DEFAULT 'sm';
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ADD COLUMN "size" "enum__pages_v_blocks_cta9_buttons_size" DEFAULT 'default';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "button_title" varchar DEFAULT 'View all';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "button_variant" varchar DEFAULT 'secondary';
  ALTER TABLE "_evt_hdr_1_v_filters" ADD COLUMN "button_size" varchar DEFAULT 'sm';
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "title";
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "url";
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "variant";
  ALTER TABLE "evt_hdr_1_filters" DROP COLUMN "size";
  ALTER TABLE "evt_hdr_1_events" DROP COLUMN "button_url";
  ALTER TABLE "evt_hdr_1" DROP COLUMN "event_button_url";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "title";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "url";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "variant";
  ALTER TABLE "_evt_hdr_1_v_filters" DROP COLUMN "size";
  ALTER TABLE "_evt_hdr_1_v_events" DROP COLUMN "button_url";
  ALTER TABLE "_evt_hdr_1_v" DROP COLUMN "event_button_url";
  DROP TYPE "public"."enum_evt_hdr_1_filters_variant";
  DROP TYPE "public"."enum_evt_hdr_1_filters_size";
  DROP TYPE "public"."enum_evt_hdr_1_events_button_variant";
  DROP TYPE "public"."enum_evt_hdr_1_events_button_size";
  DROP TYPE "public"."enum_evt_hdr_1_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_1_event_button_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_filters_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_filters_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_events_button_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_events_button_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_event_button_size";`)
}
