import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_multi_form2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_multi_form2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum_links_4_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_links_4_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_links_4_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum__links_4_v_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__links_4_v_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__links_4_v_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_form_custom_2_submissions_source" AS ENUM('form-custom-2', 'multi-form-2');
  CREATE TABLE "pages_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum_pages_blocks_banner4_social_media_links_platform"
  );
  
  CREATE TABLE "pages_blocks_banner4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_id" integer,
  	"logo_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner9_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum_pages_blocks_banner9_social_media_links_platform"
  );
  
  CREATE TABLE "pages_blocks_banner9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_id" integer,
  	"logo_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_career3_depts3_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm'
  );
  
  CREATE TABLE "pages_blocks_career3_depts3" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "pages_blocks_career3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_career4_depts4_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm'
  );
  
  CREATE TABLE "pages_blocks_career4_depts4" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "pages_blocks_career4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form2_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form2_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form2_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form2_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" numeric PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"nav_text" varchar DEFAULT 'Already have an account?',
  	"nav_button_title" varchar DEFAULT 'Log In',
  	"nav_button_variant" "enum_pages_blocks_multi_form2_nav_button_variant" DEFAULT 'link',
  	"nav_button_size" "enum_pages_blocks_multi_form2_nav_button_size" DEFAULT 'link',
  	"footer_text" varchar DEFAULT '© 2024 Relume',
  	"step1_title" varchar DEFAULT 'Let''s start with your name & email',
  	"step1_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step2_title" varchar DEFAULT 'What can we help you with?',
  	"step2_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step3_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step3_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step4_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step4_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form7_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form7_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form7_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form7_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" numeric PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"image_id" integer,
  	"image_url" varchar,
  	"footer_text" varchar DEFAULT '© 2024 Relume',
  	"step1_title" varchar DEFAULT 'Let''s start with your name & email',
  	"step1_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step2_title" varchar DEFAULT 'What can we help you with?',
  	"step2_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step3_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step3_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step4_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step4_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"block_name" varchar
  );
  
  CREATE TABLE "links_4_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum_links_4_categories_links_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "links_4_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE "links_4_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum_links_4_social_links_platform" DEFAULT 'facebook'
  );
  
  CREATE TABLE "links_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"author_full_name" varchar DEFAULT 'Name Surname',
  	"author_position" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"author_location" varchar DEFAULT 'Location',
  	"button_variant" "enum_links_4_button_variant" DEFAULT 'secondary',
  	"button_title" varchar DEFAULT 'Join our newsletter',
  	"button_subtitle" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"news_letter_heading" varchar DEFAULT 'Join our newsletter',
  	"news_letter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"news_letter_input_placeholder" varchar DEFAULT 'Enter your email',
  	"news_letter_submit_button_title" varchar DEFAULT 'Subscribe',
  	"news_letter_terms_and_conditions" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_long_content2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"content" jsonb,
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Image description',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_long_content3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"content" jsonb,
  	"video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Video thumbnail',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_long_content4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"content" jsonb,
  	"video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Video thumbnail',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline3_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline3_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline3_timelines_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline3_timelines_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline3_timelines_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline3_timelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_timeline3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline7_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline7_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline7_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline7_timeline_items_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline7_timeline_items_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline7_timeline_items_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline7_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "pages_blocks_timeline7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum__pages_v_blocks_banner4_social_media_links_platform",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_id" integer,
  	"logo_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner9_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum__pages_v_blocks_banner9_social_media_links_platform",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_id" integer,
  	"logo_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career3_depts3_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career3_depts3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career4_depts4_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career4_depts4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form2_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form2_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form2_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form2_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" numeric,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"nav_text" varchar DEFAULT 'Already have an account?',
  	"nav_button_title" varchar DEFAULT 'Log In',
  	"nav_button_variant" "enum__pages_v_blocks_multi_form2_nav_button_variant" DEFAULT 'link',
  	"nav_button_size" "enum__pages_v_blocks_multi_form2_nav_button_size" DEFAULT 'link',
  	"footer_text" varchar DEFAULT '© 2024 Relume',
  	"step1_title" varchar DEFAULT 'Let''s start with your name & email',
  	"step1_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step2_title" varchar DEFAULT 'What can we help you with?',
  	"step2_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step3_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step3_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step4_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step4_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form7_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form7_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form7_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form7_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" numeric,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"image_id" integer,
  	"image_url" varchar,
  	"footer_text" varchar DEFAULT '© 2024 Relume',
  	"step1_title" varchar DEFAULT 'Let''s start with your name & email',
  	"step1_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step2_title" varchar DEFAULT 'What can we help you with?',
  	"step2_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step3_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step3_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"step4_title" varchar DEFAULT 'Let''s confirm your company info',
  	"step4_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_links_4_v_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum__links_4_v_categories_links_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_links_4_v_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_links_4_v_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum__links_4_v_social_links_platform" DEFAULT 'facebook',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_links_4_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"author_full_name" varchar DEFAULT 'Name Surname',
  	"author_position" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"author_location" varchar DEFAULT 'Location',
  	"button_variant" "enum__links_4_v_button_variant" DEFAULT 'secondary',
  	"button_title" varchar DEFAULT 'Join our newsletter',
  	"button_subtitle" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"news_letter_heading" varchar DEFAULT 'Join our newsletter',
  	"news_letter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"news_letter_input_placeholder" varchar DEFAULT 'Enter your email',
  	"news_letter_submit_button_title" varchar DEFAULT 'Subscribe',
  	"news_letter_terms_and_conditions" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_long_content2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"content" jsonb,
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Image description',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_long_content3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"content" jsonb,
  	"video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Video thumbnail',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_long_content4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"content" jsonb,
  	"video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Video thumbnail',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline3_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline3_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline3_timelines_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline3_timelines_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline3_timelines_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline3_timelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline7_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline7_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline7_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline7_timeline_items_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline7_timeline_items_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline7_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2'::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE "public"."enum_form_custom_2_submissions_source" USING "source"::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD CONSTRAINT "pages_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9_social_media_links" ADD CONSTRAINT "pages_blocks_banner9_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9" ADD CONSTRAINT "pages_blocks_banner9_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9" ADD CONSTRAINT "pages_blocks_banner9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD CONSTRAINT "pages_blocks_career3_depts3_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career3_depts3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3_depts3" ADD CONSTRAINT "pages_blocks_career3_depts3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3" ADD CONSTRAINT "pages_blocks_career3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4_depts4_jobs" ADD CONSTRAINT "pages_blocks_career4_depts4_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career4_depts4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4_depts4" ADD CONSTRAINT "pages_blocks_career4_depts4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4" ADD CONSTRAINT "pages_blocks_career4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form2_service_type_options" ADD CONSTRAINT "pages_blocks_multi_form2_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form2_budget_options" ADD CONSTRAINT "pages_blocks_multi_form2_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form2_employees_options" ADD CONSTRAINT "pages_blocks_multi_form2_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form2_countries_options" ADD CONSTRAINT "pages_blocks_multi_form2_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form2" ADD CONSTRAINT "pages_blocks_multi_form2_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form2" ADD CONSTRAINT "pages_blocks_multi_form2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7_service_type_options" ADD CONSTRAINT "pages_blocks_multi_form7_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7_budget_options" ADD CONSTRAINT "pages_blocks_multi_form7_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7_employees_options" ADD CONSTRAINT "pages_blocks_multi_form7_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7_countries_options" ADD CONSTRAINT "pages_blocks_multi_form7_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7" ADD CONSTRAINT "pages_blocks_multi_form7_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7" ADD CONSTRAINT "pages_blocks_multi_form7_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form7" ADD CONSTRAINT "pages_blocks_multi_form7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4_categories_links" ADD CONSTRAINT "links_4_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_4_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4_categories" ADD CONSTRAINT "links_4_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4_social_links" ADD CONSTRAINT "links_4_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4" ADD CONSTRAINT "links_4_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "links_4" ADD CONSTRAINT "links_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content2" ADD CONSTRAINT "pages_blocks_long_content2_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content2" ADD CONSTRAINT "pages_blocks_long_content2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content3" ADD CONSTRAINT "pages_blocks_long_content3_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content3" ADD CONSTRAINT "pages_blocks_long_content3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content4" ADD CONSTRAINT "pages_blocks_long_content4_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content4" ADD CONSTRAINT "pages_blocks_long_content4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline3_buttons" ADD CONSTRAINT "pages_blocks_timeline3_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline3_timelines_buttons" ADD CONSTRAINT "pages_blocks_timeline3_timelines_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline3_timelines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline3_timelines" ADD CONSTRAINT "pages_blocks_timeline3_timelines_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline3_timelines" ADD CONSTRAINT "pages_blocks_timeline3_timelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline3" ADD CONSTRAINT "pages_blocks_timeline3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline7_buttons" ADD CONSTRAINT "pages_blocks_timeline7_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline7_timeline_items_buttons" ADD CONSTRAINT "pages_blocks_timeline7_timeline_items_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline7_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline7_timeline_items" ADD CONSTRAINT "pages_blocks_timeline7_timeline_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline7_timeline_items" ADD CONSTRAINT "pages_blocks_timeline7_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline7" ADD CONSTRAINT "pages_blocks_timeline7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner9_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9" ADD CONSTRAINT "_pages_v_blocks_banner9_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9" ADD CONSTRAINT "_pages_v_blocks_banner9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD CONSTRAINT "_pages_v_blocks_career3_depts3_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career3_depts3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3_depts3" ADD CONSTRAINT "_pages_v_blocks_career3_depts3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3" ADD CONSTRAINT "_pages_v_blocks_career3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4_depts4_jobs" ADD CONSTRAINT "_pages_v_blocks_career4_depts4_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career4_depts4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4_depts4" ADD CONSTRAINT "_pages_v_blocks_career4_depts4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4" ADD CONSTRAINT "_pages_v_blocks_career4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form2_service_type_options" ADD CONSTRAINT "_pages_v_blocks_multi_form2_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form2_budget_options" ADD CONSTRAINT "_pages_v_blocks_multi_form2_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form2_employees_options" ADD CONSTRAINT "_pages_v_blocks_multi_form2_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form2_countries_options" ADD CONSTRAINT "_pages_v_blocks_multi_form2_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form2" ADD CONSTRAINT "_pages_v_blocks_multi_form2_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form2" ADD CONSTRAINT "_pages_v_blocks_multi_form2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7_service_type_options" ADD CONSTRAINT "_pages_v_blocks_multi_form7_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7_budget_options" ADD CONSTRAINT "_pages_v_blocks_multi_form7_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7_employees_options" ADD CONSTRAINT "_pages_v_blocks_multi_form7_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7_countries_options" ADD CONSTRAINT "_pages_v_blocks_multi_form7_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7" ADD CONSTRAINT "_pages_v_blocks_multi_form7_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7" ADD CONSTRAINT "_pages_v_blocks_multi_form7_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form7" ADD CONSTRAINT "_pages_v_blocks_multi_form7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v_categories_links" ADD CONSTRAINT "_links_4_v_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_4_v_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v_categories" ADD CONSTRAINT "_links_4_v_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v_social_links" ADD CONSTRAINT "_links_4_v_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v" ADD CONSTRAINT "_links_4_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_links_4_v" ADD CONSTRAINT "_links_4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content2" ADD CONSTRAINT "_pages_v_blocks_long_content2_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content2" ADD CONSTRAINT "_pages_v_blocks_long_content2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content3" ADD CONSTRAINT "_pages_v_blocks_long_content3_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content3" ADD CONSTRAINT "_pages_v_blocks_long_content3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content4" ADD CONSTRAINT "_pages_v_blocks_long_content4_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content4" ADD CONSTRAINT "_pages_v_blocks_long_content4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline3_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline3_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline3_timelines_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline3_timelines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines" ADD CONSTRAINT "_pages_v_blocks_timeline3_timelines_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines" ADD CONSTRAINT "_pages_v_blocks_timeline3_timelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline3" ADD CONSTRAINT "_pages_v_blocks_timeline3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline7_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline7_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline7_timeline_items_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline7_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline7_timeline_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline7_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline7" ADD CONSTRAINT "_pages_v_blocks_timeline7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_banner4_social_media_links_order_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner4_social_media_links_parent_id_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_order_idx" ON "pages_blocks_banner4" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner4_parent_id_idx" ON "pages_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_path_idx" ON "pages_blocks_banner4" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner4_logo_idx" ON "pages_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner9_social_media_links_order_idx" ON "pages_blocks_banner9_social_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner9_social_media_links_parent_id_idx" ON "pages_blocks_banner9_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner9_order_idx" ON "pages_blocks_banner9" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner9_parent_id_idx" ON "pages_blocks_banner9" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner9_path_idx" ON "pages_blocks_banner9" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner9_logo_idx" ON "pages_blocks_banner9" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_career3_depts3_jobs_order_idx" ON "pages_blocks_career3_depts3_jobs" USING btree ("_order");
  CREATE INDEX "pages_blocks_career3_depts3_jobs_parent_id_idx" ON "pages_blocks_career3_depts3_jobs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career3_depts3_order_idx" ON "pages_blocks_career3_depts3" USING btree ("_order");
  CREATE INDEX "pages_blocks_career3_depts3_parent_id_idx" ON "pages_blocks_career3_depts3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career3_order_idx" ON "pages_blocks_career3" USING btree ("_order");
  CREATE INDEX "pages_blocks_career3_parent_id_idx" ON "pages_blocks_career3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career3_path_idx" ON "pages_blocks_career3" USING btree ("_path");
  CREATE INDEX "pages_blocks_career4_depts4_jobs_order_idx" ON "pages_blocks_career4_depts4_jobs" USING btree ("_order");
  CREATE INDEX "pages_blocks_career4_depts4_jobs_parent_id_idx" ON "pages_blocks_career4_depts4_jobs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career4_depts4_order_idx" ON "pages_blocks_career4_depts4" USING btree ("_order");
  CREATE INDEX "pages_blocks_career4_depts4_parent_id_idx" ON "pages_blocks_career4_depts4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career4_order_idx" ON "pages_blocks_career4" USING btree ("_order");
  CREATE INDEX "pages_blocks_career4_parent_id_idx" ON "pages_blocks_career4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career4_path_idx" ON "pages_blocks_career4" USING btree ("_path");
  CREATE INDEX "pages_blocks_multi_form2_service_type_options_order_idx" ON "pages_blocks_multi_form2_service_type_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form2_service_type_options_parent_id_idx" ON "pages_blocks_multi_form2_service_type_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form2_budget_options_order_idx" ON "pages_blocks_multi_form2_budget_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form2_budget_options_parent_id_idx" ON "pages_blocks_multi_form2_budget_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form2_employees_options_order_idx" ON "pages_blocks_multi_form2_employees_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form2_employees_options_parent_id_idx" ON "pages_blocks_multi_form2_employees_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form2_countries_options_order_idx" ON "pages_blocks_multi_form2_countries_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form2_countries_options_parent_id_idx" ON "pages_blocks_multi_form2_countries_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form2_order_idx" ON "pages_blocks_multi_form2" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form2_parent_id_idx" ON "pages_blocks_multi_form2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form2_path_idx" ON "pages_blocks_multi_form2" USING btree ("_path");
  CREATE INDEX "pages_blocks_multi_form2_logo_idx" ON "pages_blocks_multi_form2" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_multi_form7_service_type_options_order_idx" ON "pages_blocks_multi_form7_service_type_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form7_service_type_options_parent_id_idx" ON "pages_blocks_multi_form7_service_type_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form7_budget_options_order_idx" ON "pages_blocks_multi_form7_budget_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form7_budget_options_parent_id_idx" ON "pages_blocks_multi_form7_budget_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form7_employees_options_order_idx" ON "pages_blocks_multi_form7_employees_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form7_employees_options_parent_id_idx" ON "pages_blocks_multi_form7_employees_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form7_countries_options_order_idx" ON "pages_blocks_multi_form7_countries_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form7_countries_options_parent_id_idx" ON "pages_blocks_multi_form7_countries_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form7_order_idx" ON "pages_blocks_multi_form7" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form7_parent_id_idx" ON "pages_blocks_multi_form7" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form7_path_idx" ON "pages_blocks_multi_form7" USING btree ("_path");
  CREATE INDEX "pages_blocks_multi_form7_logo_idx" ON "pages_blocks_multi_form7" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_multi_form7_image_idx" ON "pages_blocks_multi_form7" USING btree ("image_id");
  CREATE INDEX "links_4_categories_links_order_idx" ON "links_4_categories_links" USING btree ("_order");
  CREATE INDEX "links_4_categories_links_parent_id_idx" ON "links_4_categories_links" USING btree ("_parent_id");
  CREATE INDEX "links_4_categories_order_idx" ON "links_4_categories" USING btree ("_order");
  CREATE INDEX "links_4_categories_parent_id_idx" ON "links_4_categories" USING btree ("_parent_id");
  CREATE INDEX "links_4_social_links_order_idx" ON "links_4_social_links" USING btree ("_order");
  CREATE INDEX "links_4_social_links_parent_id_idx" ON "links_4_social_links" USING btree ("_parent_id");
  CREATE INDEX "links_4_order_idx" ON "links_4" USING btree ("_order");
  CREATE INDEX "links_4_parent_id_idx" ON "links_4" USING btree ("_parent_id");
  CREATE INDEX "links_4_path_idx" ON "links_4" USING btree ("_path");
  CREATE INDEX "links_4_image_idx" ON "links_4" USING btree ("image_id");
  CREATE INDEX "pages_blocks_long_content2_order_idx" ON "pages_blocks_long_content2" USING btree ("_order");
  CREATE INDEX "pages_blocks_long_content2_parent_id_idx" ON "pages_blocks_long_content2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_long_content2_path_idx" ON "pages_blocks_long_content2" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content2_image_image_src_idx" ON "pages_blocks_long_content2" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_long_content3_order_idx" ON "pages_blocks_long_content3" USING btree ("_order");
  CREATE INDEX "pages_blocks_long_content3_parent_id_idx" ON "pages_blocks_long_content3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_long_content3_path_idx" ON "pages_blocks_long_content3" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content3_image_image_src_idx" ON "pages_blocks_long_content3" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_long_content4_order_idx" ON "pages_blocks_long_content4" USING btree ("_order");
  CREATE INDEX "pages_blocks_long_content4_parent_id_idx" ON "pages_blocks_long_content4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_long_content4_path_idx" ON "pages_blocks_long_content4" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content4_image_image_src_idx" ON "pages_blocks_long_content4" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_timeline3_buttons_order_idx" ON "pages_blocks_timeline3_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline3_buttons_parent_id_idx" ON "pages_blocks_timeline3_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline3_timelines_buttons_order_idx" ON "pages_blocks_timeline3_timelines_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline3_timelines_buttons_parent_id_idx" ON "pages_blocks_timeline3_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline3_timelines_order_idx" ON "pages_blocks_timeline3_timelines" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline3_timelines_parent_id_idx" ON "pages_blocks_timeline3_timelines" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline3_timelines_image_idx" ON "pages_blocks_timeline3_timelines" USING btree ("image_id");
  CREATE INDEX "pages_blocks_timeline3_order_idx" ON "pages_blocks_timeline3" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline3_parent_id_idx" ON "pages_blocks_timeline3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline3_path_idx" ON "pages_blocks_timeline3" USING btree ("_path");
  CREATE INDEX "pages_blocks_timeline7_buttons_order_idx" ON "pages_blocks_timeline7_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline7_buttons_parent_id_idx" ON "pages_blocks_timeline7_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline7_timeline_items_buttons_order_idx" ON "pages_blocks_timeline7_timeline_items_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline7_timeline_items_buttons_parent_id_idx" ON "pages_blocks_timeline7_timeline_items_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline7_timeline_items_order_idx" ON "pages_blocks_timeline7_timeline_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline7_timeline_items_parent_id_idx" ON "pages_blocks_timeline7_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline7_timeline_items_image_idx" ON "pages_blocks_timeline7_timeline_items" USING btree ("image_id");
  CREATE INDEX "pages_blocks_timeline7_order_idx" ON "pages_blocks_timeline7" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline7_parent_id_idx" ON "pages_blocks_timeline7" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline7_path_idx" ON "pages_blocks_timeline7" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner4_social_media_links_order_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner4_social_media_links_parent_id_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_order_idx" ON "_pages_v_blocks_banner4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner4_parent_id_idx" ON "_pages_v_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_path_idx" ON "_pages_v_blocks_banner4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner4_logo_idx" ON "_pages_v_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner9_social_media_links_order_idx" ON "_pages_v_blocks_banner9_social_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner9_social_media_links_parent_id_idx" ON "_pages_v_blocks_banner9_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner9_order_idx" ON "_pages_v_blocks_banner9" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner9_parent_id_idx" ON "_pages_v_blocks_banner9" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner9_path_idx" ON "_pages_v_blocks_banner9" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner9_logo_idx" ON "_pages_v_blocks_banner9" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_career3_depts3_jobs_order_idx" ON "_pages_v_blocks_career3_depts3_jobs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career3_depts3_jobs_parent_id_idx" ON "_pages_v_blocks_career3_depts3_jobs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career3_depts3_order_idx" ON "_pages_v_blocks_career3_depts3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career3_depts3_parent_id_idx" ON "_pages_v_blocks_career3_depts3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career3_order_idx" ON "_pages_v_blocks_career3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career3_parent_id_idx" ON "_pages_v_blocks_career3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career3_path_idx" ON "_pages_v_blocks_career3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_career4_depts4_jobs_order_idx" ON "_pages_v_blocks_career4_depts4_jobs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career4_depts4_jobs_parent_id_idx" ON "_pages_v_blocks_career4_depts4_jobs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career4_depts4_order_idx" ON "_pages_v_blocks_career4_depts4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career4_depts4_parent_id_idx" ON "_pages_v_blocks_career4_depts4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career4_order_idx" ON "_pages_v_blocks_career4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career4_parent_id_idx" ON "_pages_v_blocks_career4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career4_path_idx" ON "_pages_v_blocks_career4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_multi_form2_service_type_options_order_idx" ON "_pages_v_blocks_multi_form2_service_type_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form2_service_type_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_service_type_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form2_budget_options_order_idx" ON "_pages_v_blocks_multi_form2_budget_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form2_budget_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_budget_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form2_employees_options_order_idx" ON "_pages_v_blocks_multi_form2_employees_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form2_employees_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_employees_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form2_countries_options_order_idx" ON "_pages_v_blocks_multi_form2_countries_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form2_countries_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_countries_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form2_order_idx" ON "_pages_v_blocks_multi_form2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form2_parent_id_idx" ON "_pages_v_blocks_multi_form2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form2_path_idx" ON "_pages_v_blocks_multi_form2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_multi_form2_logo_idx" ON "_pages_v_blocks_multi_form2" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_service_type_options_order_idx" ON "_pages_v_blocks_multi_form7_service_type_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form7_service_type_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_service_type_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_budget_options_order_idx" ON "_pages_v_blocks_multi_form7_budget_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form7_budget_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_budget_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_employees_options_order_idx" ON "_pages_v_blocks_multi_form7_employees_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form7_employees_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_employees_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_countries_options_order_idx" ON "_pages_v_blocks_multi_form7_countries_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form7_countries_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_countries_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_order_idx" ON "_pages_v_blocks_multi_form7" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form7_parent_id_idx" ON "_pages_v_blocks_multi_form7" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_path_idx" ON "_pages_v_blocks_multi_form7" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_multi_form7_logo_idx" ON "_pages_v_blocks_multi_form7" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_multi_form7_image_idx" ON "_pages_v_blocks_multi_form7" USING btree ("image_id");
  CREATE INDEX "_links_4_v_categories_links_order_idx" ON "_links_4_v_categories_links" USING btree ("_order");
  CREATE INDEX "_links_4_v_categories_links_parent_id_idx" ON "_links_4_v_categories_links" USING btree ("_parent_id");
  CREATE INDEX "_links_4_v_categories_order_idx" ON "_links_4_v_categories" USING btree ("_order");
  CREATE INDEX "_links_4_v_categories_parent_id_idx" ON "_links_4_v_categories" USING btree ("_parent_id");
  CREATE INDEX "_links_4_v_social_links_order_idx" ON "_links_4_v_social_links" USING btree ("_order");
  CREATE INDEX "_links_4_v_social_links_parent_id_idx" ON "_links_4_v_social_links" USING btree ("_parent_id");
  CREATE INDEX "_links_4_v_order_idx" ON "_links_4_v" USING btree ("_order");
  CREATE INDEX "_links_4_v_parent_id_idx" ON "_links_4_v" USING btree ("_parent_id");
  CREATE INDEX "_links_4_v_path_idx" ON "_links_4_v" USING btree ("_path");
  CREATE INDEX "_links_4_v_image_idx" ON "_links_4_v" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_long_content2_order_idx" ON "_pages_v_blocks_long_content2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_long_content2_parent_id_idx" ON "_pages_v_blocks_long_content2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_long_content2_path_idx" ON "_pages_v_blocks_long_content2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content2_image_image_src_idx" ON "_pages_v_blocks_long_content2" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_long_content3_order_idx" ON "_pages_v_blocks_long_content3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_long_content3_parent_id_idx" ON "_pages_v_blocks_long_content3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_long_content3_path_idx" ON "_pages_v_blocks_long_content3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content3_image_image_src_idx" ON "_pages_v_blocks_long_content3" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_long_content4_order_idx" ON "_pages_v_blocks_long_content4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_long_content4_parent_id_idx" ON "_pages_v_blocks_long_content4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_long_content4_path_idx" ON "_pages_v_blocks_long_content4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content4_image_image_src_idx" ON "_pages_v_blocks_long_content4" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_timeline3_buttons_order_idx" ON "_pages_v_blocks_timeline3_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline3_buttons_parent_id_idx" ON "_pages_v_blocks_timeline3_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline3_timelines_buttons_order_idx" ON "_pages_v_blocks_timeline3_timelines_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline3_timelines_buttons_parent_id_idx" ON "_pages_v_blocks_timeline3_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline3_timelines_order_idx" ON "_pages_v_blocks_timeline3_timelines" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline3_timelines_parent_id_idx" ON "_pages_v_blocks_timeline3_timelines" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline3_timelines_image_idx" ON "_pages_v_blocks_timeline3_timelines" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_timeline3_order_idx" ON "_pages_v_blocks_timeline3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline3_parent_id_idx" ON "_pages_v_blocks_timeline3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline3_path_idx" ON "_pages_v_blocks_timeline3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_timeline7_buttons_order_idx" ON "_pages_v_blocks_timeline7_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline7_buttons_parent_id_idx" ON "_pages_v_blocks_timeline7_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline7_timeline_items_buttons_order_idx" ON "_pages_v_blocks_timeline7_timeline_items_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline7_timeline_items_buttons_parent_id_idx" ON "_pages_v_blocks_timeline7_timeline_items_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline7_timeline_items_order_idx" ON "_pages_v_blocks_timeline7_timeline_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline7_timeline_items_parent_id_idx" ON "_pages_v_blocks_timeline7_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline7_timeline_items_image_idx" ON "_pages_v_blocks_timeline7_timeline_items" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_timeline7_order_idx" ON "_pages_v_blocks_timeline7" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline7_parent_id_idx" ON "_pages_v_blocks_timeline7" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline7_path_idx" ON "_pages_v_blocks_timeline7" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner4_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner9_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career3_depts3_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career3_depts3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career4_depts4_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career4_depts4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form2_service_type_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form2_budget_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form2_employees_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form2_countries_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form7_service_type_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form7_budget_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form7_employees_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form7_countries_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_multi_form7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4_categories_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_long_content2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_long_content3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_long_content4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3_timelines_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3_timelines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7_timeline_items_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner9_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career3_depts3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career4_depts4_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career4_depts4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form2_service_type_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form2_budget_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form2_employees_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form2_countries_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form7_service_type_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form7_budget_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form7_employees_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form7_countries_options" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_multi_form7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v_categories_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_long_content2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_long_content3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_long_content4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner4" CASCADE;
  DROP TABLE "pages_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner9" CASCADE;
  DROP TABLE "pages_blocks_career3_depts3_jobs" CASCADE;
  DROP TABLE "pages_blocks_career3_depts3" CASCADE;
  DROP TABLE "pages_blocks_career3" CASCADE;
  DROP TABLE "pages_blocks_career4_depts4_jobs" CASCADE;
  DROP TABLE "pages_blocks_career4_depts4" CASCADE;
  DROP TABLE "pages_blocks_career4" CASCADE;
  DROP TABLE "pages_blocks_multi_form2_service_type_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form2_budget_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form2_employees_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form2_countries_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form2" CASCADE;
  DROP TABLE "pages_blocks_multi_form7_service_type_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form7_budget_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form7_employees_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form7_countries_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form7" CASCADE;
  DROP TABLE "links_4_categories_links" CASCADE;
  DROP TABLE "links_4_categories" CASCADE;
  DROP TABLE "links_4_social_links" CASCADE;
  DROP TABLE "links_4" CASCADE;
  DROP TABLE "pages_blocks_long_content2" CASCADE;
  DROP TABLE "pages_blocks_long_content3" CASCADE;
  DROP TABLE "pages_blocks_long_content4" CASCADE;
  DROP TABLE "pages_blocks_timeline3_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline3_timelines_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline3_timelines" CASCADE;
  DROP TABLE "pages_blocks_timeline3" CASCADE;
  DROP TABLE "pages_blocks_timeline7_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline7_timeline_items_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline7_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline7" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9" CASCADE;
  DROP TABLE "_pages_v_blocks_career3_depts3_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_career3_depts3" CASCADE;
  DROP TABLE "_pages_v_blocks_career3" CASCADE;
  DROP TABLE "_pages_v_blocks_career4_depts4_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_career4_depts4" CASCADE;
  DROP TABLE "_pages_v_blocks_career4" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form2_service_type_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form2_budget_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form2_employees_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form2_countries_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form2" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form7_service_type_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form7_budget_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form7_employees_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form7_countries_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form7" CASCADE;
  DROP TABLE "_links_4_v_categories_links" CASCADE;
  DROP TABLE "_links_4_v_categories" CASCADE;
  DROP TABLE "_links_4_v_social_links" CASCADE;
  DROP TABLE "_links_4_v" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content2" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content3" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content4" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_timelines_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_timelines" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7" CASCADE;
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE varchar;
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2';
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_multi_form2_nav_button_variant";
  DROP TYPE "public"."enum_pages_blocks_multi_form2_nav_button_size";
  DROP TYPE "public"."enum_links_4_categories_links_variant";
  DROP TYPE "public"."enum_links_4_social_links_platform";
  DROP TYPE "public"."enum_links_4_button_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline7_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline7_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_size";
  DROP TYPE "public"."enum__links_4_v_categories_links_variant";
  DROP TYPE "public"."enum__links_4_v_social_links_platform";
  DROP TYPE "public"."enum__links_4_v_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_size";
  DROP TYPE "public"."enum_form_custom_2_submissions_source";`)
}
