import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DO $$ BEGIN
   CREATE TYPE "public"."enum_pages_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;
  DO $$ BEGIN
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;
  CREATE TYPE "public"."enum_pages_blocks_banner2_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner3_buttons_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner3_buttons_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_button_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_jobs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_contact1_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact1_button_size" AS ENUM('default', 'sm', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact5_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact5_button_size" AS ENUM('sm', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta1_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq1_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq1_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq1_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq5_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq5_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq5_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer1_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer1_column_links_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_pages_blocks_footer1_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer1_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_footer1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_footer1_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer5_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer5_social_media_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_pages_blocks_footer5_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer5_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer5_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_footer5_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_footer5_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_multi_form2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_multi_form2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_header44_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header44_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_header48_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_header48_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_layout1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout5_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_links_4_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_links_4_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_links_4_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_sub_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_btns_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_btns_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_cat_link_items_5_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cat_link_items_5_button_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_cat_link_items_5_button_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_featured_links_5_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_featured_links_5_button_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_featured_links_5_button_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_nav_links_5_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_nav_links_5_mega_menu_button_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_nav_links_5_mega_menu_button_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_nav_links_5_mega_menu_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_btns_5_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_btns_5_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_btns_5_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner2_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner3_buttons_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner3_buttons_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__jobs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_button_size" AS ENUM('default', 'sm', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact5_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact5_button_size" AS ENUM('sm', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq1_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq1_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq1_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq5_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq5_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq5_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_column_links_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_footer1_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_social_media_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_footer5_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_header44_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header44_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_header48_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_header48_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_layout1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__links_4_v_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__links_4_v_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__links_4_v_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__sub_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__nav_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__btns_v_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__btns_v_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__cat_link_items_5_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cat_link_items_5_v_button_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__cat_link_items_5_v_button_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__featured_links_5_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__featured_links_5_v_button_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__featured_links_5_v_button_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__nav_links_5_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__nav_links_5_v_mega_menu_button_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__nav_links_5_v_mega_menu_button_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__nav_links_5_v_mega_menu_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__btns_5_v_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__btns_5_v_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__btns_5_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_form_custom_2_submissions_source" AS ENUM('form-custom-2', 'multi-form-2');
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'header1';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'header5';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'header1';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'header5';
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"logo_alt" varchar DEFAULT 'Relume logo',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_size" "enum_pages_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_banner1_button_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_use_media" boolean DEFAULT false,
  	"logo_media_image_id" integer,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"logo_alt" varchar DEFAULT 'Relume logo',
  	"button_title" varchar DEFAULT 'Button',
  	"button_size" "enum_pages_blocks_banner2_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_banner2_button_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"size" "enum_pages_blocks_banner3_buttons_size" DEFAULT 'sm',
  	"variant" "enum_pages_blocks_banner3_buttons_variant" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_use_media" boolean DEFAULT false,
  	"logo_media_image_id" integer,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"logo_alt" varchar DEFAULT 'Relume logo',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum_pages_blocks_banner4_social_media_links_platform"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner4" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner9_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum_pages_blocks_banner9_social_media_links_platform"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_banner9" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_post_header2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_title" varchar DEFAULT 'All Posts',
  	"button_variant" "enum_pages_blocks_blog_post_header2_button_variant" DEFAULT 'link',
  	"button_size" "enum_pages_blocks_blog_post_header2_button_size" DEFAULT 'link',
  	"button_link_type" "enum_pages_blocks_blog_post_header2_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"category" varchar DEFAULT 'Category',
  	"read_time" varchar DEFAULT '5 min read',
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"author_name" varchar DEFAULT 'Full Name',
  	"published_date" varchar DEFAULT '22 January 2021',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_post_header3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"author_avatar_use_media" boolean DEFAULT false,
  	"author_avatar_media_image_id" integer,
  	"author_avatar_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"author_avatar_alt" varchar DEFAULT 'Relume placeholder avatar',
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career3_depts3_jobs" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career3_depts3" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career4_depts4_jobs" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career4_depts4" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"section_title" varchar DEFAULT 'Job Department',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_career6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"button_title" varchar DEFAULT 'Submit',
  	"button_variant" "enum_pages_blocks_contact1_button_variant" DEFAULT 'primary',
  	"button_size" "enum_pages_blocks_contact1_button_size" DEFAULT 'default',
  	"terms" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"contact_info_email" varchar DEFAULT 'test@test.com',
  	"contact_info_phone" varchar DEFAULT '0000000000',
  	"contact_info_address" varchar DEFAULT 'test',
  	"button_title" varchar DEFAULT 'Submit',
  	"button_variant" "enum_pages_blocks_contact5_button_variant" DEFAULT 'primary',
  	"button_size" "enum_pages_blocks_contact5_button_size" DEFAULT 'sm',
  	"terms" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum_pages_blocks_cta1_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum_pages_blocks_cta1_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_media_id" integer,
  	"image_alt" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum_pages_blocks_cta5_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum_pages_blocks_cta5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"video_youtube_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq1_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"footer_content" jsonb,
  	"button_title" varchar DEFAULT 'Contact',
  	"button_variant" "enum_pages_blocks_faq1_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_faq1_button_size" DEFAULT 'sm',
  	"button_link_type" "enum_pages_blocks_faq1_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq5_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"footer_content" jsonb,
  	"button_title" varchar DEFAULT 'Contact',
  	"button_variant" "enum_pages_blocks_faq5_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_faq5_button_size" DEFAULT 'sm',
  	"button_link_type" "enum_pages_blocks_faq5_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer1_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer1_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum_pages_blocks_footer1_column_links_links_icon"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer1_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer1_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer1_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_media_id" integer,
  	"logo_link_type" "enum_pages_blocks_footer1_logo_link_type" DEFAULT 'reference',
  	"logo_link_new_tab" boolean,
  	"logo_link_url" varchar,
  	"newsletter_description" varchar DEFAULT 'Join our newsletter to stay up to date on features and releases.',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Subscribe',
  	"button_size" "enum_pages_blocks_footer1_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_footer1_button_variant" DEFAULT 'secondary',
  	"terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our',
  	"terms_and_conditions_link_type" "enum_pages_blocks_footer1_terms_and_conditions_link_type" DEFAULT 'reference',
  	"terms_and_conditions_link_new_tab" boolean,
  	"terms_and_conditions_link_url" varchar,
  	"terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.',
  	"footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer5_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer5_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer5_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon" "enum_pages_blocks_footer5_social_media_links_icon"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer5_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer5_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_footer5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_media_id" integer,
  	"logo_link_type" "enum_pages_blocks_footer5_logo_link_type" DEFAULT 'reference',
  	"logo_link_new_tab" boolean,
  	"logo_link_url" varchar,
  	"newsletter_heading" varchar DEFAULT 'Join our newsletter',
  	"newsletter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Subscribe',
  	"button_size" "enum_pages_blocks_footer5_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_footer5_button_variant" DEFAULT 'secondary',
  	"terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our',
  	"terms_and_conditions_link_type" "enum_pages_blocks_footer5_terms_and_conditions_link_type" DEFAULT 'reference',
  	"terms_and_conditions_link_new_tab" boolean,
  	"terms_and_conditions_link_url" varchar,
  	"terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.',
  	"footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form2_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form2_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form2_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form2_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" numeric PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form2" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form7_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form7_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form7_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form7_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" numeric PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_multi_form7" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header44_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_header44_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_header44_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header44" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header48" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_size" "enum_pages_blocks_header48_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_header48_button_variant" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout1_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout5_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout5_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"video" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "links_4_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum_links_4_categories_links_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE IF NOT EXISTS "links_4_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "links_4_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum_links_4_social_links_platform" DEFAULT 'facebook'
  );
  
  CREATE TABLE IF NOT EXISTS "links_4" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_long_content2" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_long_content3" (
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
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_long_content4" (
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
  
  CREATE TABLE IF NOT EXISTS "sub_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_sub_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"size" "enum_btns_size" DEFAULT 'lg',
  	"variant" "enum_btns_variant" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_navbar1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_use_media" boolean DEFAULT true,
  	"logo_media_id" integer,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"logo_alt" varchar DEFAULT 'Logo image',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cat_link_items_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cat_link_items_5_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum_cat_link_items_5_button_size" DEFAULT 'sm',
  	"button_variant" "enum_cat_link_items_5_button_variant" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "cat_links_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "featured_links_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_featured_links_5_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum_featured_links_5_button_size" DEFAULT 'sm',
  	"button_variant" "enum_featured_links_5_button_variant" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "nav_links_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_nav_links_5_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"mega_menu_featured_sections_title" varchar,
  	"mega_menu_button_title" varchar,
  	"mega_menu_button_size" "enum_nav_links_5_mega_menu_button_size" DEFAULT 'sm',
  	"mega_menu_button_variant" "enum_nav_links_5_mega_menu_button_variant" DEFAULT 'default',
  	"mega_menu_button_link_type" "enum_nav_links_5_mega_menu_button_link_type" DEFAULT 'reference',
  	"mega_menu_button_link_new_tab" boolean,
  	"mega_menu_button_link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "btns_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"size" "enum_btns_5_size" DEFAULT 'sm',
  	"variant" "enum_btns_5_variant" DEFAULT 'default',
  	"link_type" "enum_btns_5_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_navbar5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_use_media" boolean DEFAULT true,
  	"logo_media_id" integer,
  	"logo_url" varchar,
  	"logo_src" varchar,
  	"logo_alt" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_pricing1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"pricing_plan_plan" jsonb,
  	"pricing_plan_features" jsonb,
  	"pricing_plan_button_title" varchar DEFAULT 'Get started',
  	"pricing_plan_button_variant" "enum_pages_blocks_pricing1_pricing_plan_button_variant" DEFAULT 'primary',
  	"pricing_plan_button_size" "enum_pages_blocks_pricing1_pricing_plan_button_size" DEFAULT 'sm',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_testimonial1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" jsonb,
  	"logo_media_id" integer,
  	"logo_alt" varchar,
  	"avatar_media_id" integer,
  	"avatar_alt" varchar,
  	"name" varchar DEFAULT 'John Doe',
  	"position" varchar DEFAULT 'CEO',
  	"company_name" varchar DEFAULT 'Company Name',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_testimonial5_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number_of_stars" numeric DEFAULT 5,
  	"quote" jsonb,
  	"avatar_media_id" integer,
  	"avatar_alt" varchar,
  	"name" varchar DEFAULT 'John Doe',
  	"position" varchar DEFAULT 'CEO at Company',
  	"logo_media_id" integer,
  	"logo_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_testimonial5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline3_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline3_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline3_timelines_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline3_timelines_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline3_timelines_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline3_timelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline7_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline7_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline7_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline7_timeline_items_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline7_timeline_items_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline7_timeline_items_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline7_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_timeline7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"logo_alt" varchar DEFAULT 'Relume logo',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_size" "enum__pages_v_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_banner1_button_variant" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_use_media" boolean DEFAULT false,
  	"logo_media_image_id" integer,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"logo_alt" varchar DEFAULT 'Relume logo',
  	"button_title" varchar DEFAULT 'Button',
  	"button_size" "enum__pages_v_blocks_banner2_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_banner2_button_variant" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"size" "enum__pages_v_blocks_banner3_buttons_size" DEFAULT 'sm',
  	"variant" "enum__pages_v_blocks_banner3_buttons_variant" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_use_media" boolean DEFAULT false,
  	"logo_media_image_id" integer,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"logo_alt" varchar DEFAULT 'Relume logo',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum__pages_v_blocks_banner4_social_media_links_platform",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner4" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner9_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum__pages_v_blocks_banner9_social_media_links_platform",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_banner9" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_post_header2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"button_title" varchar DEFAULT 'All Posts',
  	"button_variant" "enum__pages_v_blocks_blog_post_header2_button_variant" DEFAULT 'link',
  	"button_size" "enum__pages_v_blocks_blog_post_header2_button_size" DEFAULT 'link',
  	"button_link_type" "enum__pages_v_blocks_blog_post_header2_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"category" varchar DEFAULT 'Category',
  	"read_time" varchar DEFAULT '5 min read',
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"author_name" varchar DEFAULT 'Full Name',
  	"published_date" varchar DEFAULT '22 January 2021',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_blog_post_header3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
  	"author_avatar_use_media" boolean DEFAULT false,
  	"author_avatar_media_image_id" integer,
  	"author_avatar_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"author_avatar_alt" varchar DEFAULT 'Relume placeholder avatar',
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career3_depts3_jobs" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career3_depts3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career3" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career4_depts4_jobs" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career4_depts4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career4" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"section_title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_career6" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"button_title" varchar DEFAULT 'Submit',
  	"button_variant" "enum__pages_v_blocks_contact1_button_variant" DEFAULT 'primary',
  	"button_size" "enum__pages_v_blocks_contact1_button_size" DEFAULT 'default',
  	"terms" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"contact_info_email" varchar DEFAULT 'test@test.com',
  	"contact_info_phone" varchar DEFAULT '0000000000',
  	"contact_info_address" varchar DEFAULT 'test',
  	"button_title" varchar DEFAULT 'Submit',
  	"button_variant" "enum__pages_v_blocks_contact5_button_variant" DEFAULT 'primary',
  	"button_size" "enum__pages_v_blocks_contact5_button_size" DEFAULT 'sm',
  	"terms" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum__pages_v_blocks_cta1_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum__pages_v_blocks_cta1_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_media_id" integer,
  	"image_alt" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum__pages_v_blocks_cta5_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum__pages_v_blocks_cta5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"video_youtube_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq1_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"footer_content" jsonb,
  	"button_title" varchar DEFAULT 'Contact',
  	"button_variant" "enum__pages_v_blocks_faq1_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_faq1_button_size" DEFAULT 'sm',
  	"button_link_type" "enum__pages_v_blocks_faq1_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq5_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"footer_content" jsonb,
  	"button_title" varchar DEFAULT 'Contact',
  	"button_variant" "enum__pages_v_blocks_faq5_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_faq5_button_size" DEFAULT 'sm',
  	"button_link_type" "enum__pages_v_blocks_faq5_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer1_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer1_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum__pages_v_blocks_footer1_column_links_links_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer1_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer1_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer1_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_media_id" integer,
  	"logo_link_type" "enum__pages_v_blocks_footer1_logo_link_type" DEFAULT 'reference',
  	"logo_link_new_tab" boolean,
  	"logo_link_url" varchar,
  	"newsletter_description" varchar DEFAULT 'Join our newsletter to stay up to date on features and releases.',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Subscribe',
  	"button_size" "enum__pages_v_blocks_footer1_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_footer1_button_variant" DEFAULT 'secondary',
  	"terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our',
  	"terms_and_conditions_link_type" "enum__pages_v_blocks_footer1_terms_and_conditions_link_type" DEFAULT 'reference',
  	"terms_and_conditions_link_new_tab" boolean,
  	"terms_and_conditions_link_url" varchar,
  	"terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.',
  	"footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer5_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer5_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer5_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon" "enum__pages_v_blocks_footer5_social_media_links_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer5_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer5_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_footer5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_media_id" integer,
  	"logo_link_type" "enum__pages_v_blocks_footer5_logo_link_type" DEFAULT 'reference',
  	"logo_link_new_tab" boolean,
  	"logo_link_url" varchar,
  	"newsletter_heading" varchar DEFAULT 'Join our newsletter',
  	"newsletter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Subscribe',
  	"button_size" "enum__pages_v_blocks_footer5_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_footer5_button_variant" DEFAULT 'secondary',
  	"terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our',
  	"terms_and_conditions_link_type" "enum__pages_v_blocks_footer5_terms_and_conditions_link_type" DEFAULT 'reference',
  	"terms_and_conditions_link_new_tab" boolean,
  	"terms_and_conditions_link_url" varchar,
  	"terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.',
  	"footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form2_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form2_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form2_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form2_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" numeric,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form2" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form7_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form7_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form7_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form7_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" numeric,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_multi_form7" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header44_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_header44_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_header44_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header44" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header48" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_size" "enum__pages_v_blocks_header48_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_header48_button_variant" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout1_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout5_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout5_buttons_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"video" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_links_4_v_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum__links_4_v_categories_links_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_links_4_v_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_links_4_v_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum__links_4_v_social_links_platform" DEFAULT 'facebook',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_links_4_v" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_long_content2" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_long_content3" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_long_content4" (
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
  
  CREATE TABLE IF NOT EXISTS "_sub_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum__sub_links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_nav_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum__nav_links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum__btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"size" "enum__btns_v_size" DEFAULT 'lg',
  	"variant" "enum__btns_v_variant" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_navbar1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_use_media" boolean DEFAULT true,
  	"logo_media_id" integer,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"logo_alt" varchar DEFAULT 'Logo image',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cat_link_items_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cat_link_items_5_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum__cat_link_items_5_v_button_size" DEFAULT 'sm',
  	"button_variant" "enum__cat_link_items_5_v_button_variant" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cat_links_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featured_links_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__featured_links_5_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum__featured_links_5_v_button_size" DEFAULT 'sm',
  	"button_variant" "enum__featured_links_5_v_button_variant" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_nav_links_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__nav_links_5_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"mega_menu_featured_sections_title" varchar,
  	"mega_menu_button_title" varchar,
  	"mega_menu_button_size" "enum__nav_links_5_v_mega_menu_button_size" DEFAULT 'sm',
  	"mega_menu_button_variant" "enum__nav_links_5_v_mega_menu_button_variant" DEFAULT 'default',
  	"mega_menu_button_link_type" "enum__nav_links_5_v_mega_menu_button_link_type" DEFAULT 'reference',
  	"mega_menu_button_link_new_tab" boolean,
  	"mega_menu_button_link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_btns_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"size" "enum__btns_5_v_size" DEFAULT 'sm',
  	"variant" "enum__btns_5_v_variant" DEFAULT 'default',
  	"link_type" "enum__btns_5_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_navbar5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_use_media" boolean DEFAULT true,
  	"logo_media_id" integer,
  	"logo_url" varchar,
  	"logo_src" varchar,
  	"logo_alt" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_pricing1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"pricing_plan_plan" jsonb,
  	"pricing_plan_features" jsonb,
  	"pricing_plan_button_title" varchar DEFAULT 'Get started',
  	"pricing_plan_button_variant" "enum__pages_v_blocks_pricing1_pricing_plan_button_variant" DEFAULT 'primary',
  	"pricing_plan_button_size" "enum__pages_v_blocks_pricing1_pricing_plan_button_size" DEFAULT 'sm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_testimonial1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" jsonb,
  	"logo_media_id" integer,
  	"logo_alt" varchar,
  	"avatar_media_id" integer,
  	"avatar_alt" varchar,
  	"name" varchar DEFAULT 'John Doe',
  	"position" varchar DEFAULT 'CEO',
  	"company_name" varchar DEFAULT 'Company Name',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_testimonial5_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number_of_stars" numeric DEFAULT 5,
  	"quote" jsonb,
  	"avatar_media_id" integer,
  	"avatar_alt" varchar,
  	"name" varchar DEFAULT 'John Doe',
  	"position" varchar DEFAULT 'CEO at Company',
  	"logo_media_id" integer,
  	"logo_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_testimonial5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline3_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline3_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline3_timelines_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline3_timelines_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline3_timelines_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline3_timelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline3" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline7_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline7_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline7_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline7_timeline_items_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline7_timeline_items_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_timeline7" (
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
  
  ALTER TABLE "breadcrumbs" DROP CONSTRAINT "breadcrumbs_parent_id_fk";
  
  ALTER TABLE "social_links" DROP CONSTRAINT "social_links_parent_id_fk";
  
  ALTER TABLE "depts" DROP CONSTRAINT "depts_parent_id_fk";
  
  ALTER TABLE "_breadcrumbs_v" DROP CONSTRAINT "_breadcrumbs_v_parent_id_fk";
  
  ALTER TABLE "_social_links_v" DROP CONSTRAINT "_social_links_v_parent_id_fk";
  
  ALTER TABLE "_depts_v" DROP CONSTRAINT "_depts_v_parent_id_fk";
  
  ALTER TABLE "breadcrumbs" ALTER COLUMN "title" SET DEFAULT 'Blog';
  ALTER TABLE "social_links" ALTER COLUMN "url" SET DEFAULT '#';
  ALTER TABLE "_breadcrumbs_v" ALTER COLUMN "title" SET DEFAULT 'Blog';
  ALTER TABLE "_social_links_v" ALTER COLUMN "url" SET DEFAULT '#';
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2'::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE "public"."enum_form_custom_2_submissions_source" USING "source"::"public"."enum_form_custom_2_submissions_source";
  ALTER TABLE "breadcrumbs" ADD COLUMN "link_type" "enum_breadcrumbs_link_type" DEFAULT 'reference';
  ALTER TABLE "breadcrumbs" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "breadcrumbs" ADD COLUMN "link_url" varchar;
  ALTER TABLE "social_links" ADD COLUMN "platform" "enum_social_links_platform" DEFAULT 'link';
  ALTER TABLE "jobs" ADD COLUMN "link_type" "enum_jobs_link_type" DEFAULT 'reference';
  ALTER TABLE "jobs" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "jobs" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_breadcrumbs_v" ADD COLUMN "link_type" "enum__breadcrumbs_v_link_type" DEFAULT 'reference';
  ALTER TABLE "_breadcrumbs_v" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_breadcrumbs_v" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_social_links_v" ADD COLUMN "platform" "enum__social_links_v_platform" DEFAULT 'link';
  ALTER TABLE "_jobs_v" ADD COLUMN "link_type" "enum__jobs_v_link_type" DEFAULT 'reference';
  ALTER TABLE "_jobs_v" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_jobs_v" ADD COLUMN "link_url" varchar;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner2" ADD CONSTRAINT "pages_blocks_banner2_logo_media_image_id_media_id_fk" FOREIGN KEY ("logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner2" ADD CONSTRAINT "pages_blocks_banner2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner3_buttons" ADD CONSTRAINT "pages_blocks_banner3_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner3" ADD CONSTRAINT "pages_blocks_banner3_logo_media_image_id_media_id_fk" FOREIGN KEY ("logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner3" ADD CONSTRAINT "pages_blocks_banner3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD CONSTRAINT "pages_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9_social_media_links" ADD CONSTRAINT "pages_blocks_banner9_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9" ADD CONSTRAINT "pages_blocks_banner9_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9" ADD CONSTRAINT "pages_blocks_banner9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_author_avatar_media_image_id_media_id_fk" FOREIGN KEY ("author_avatar_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD CONSTRAINT "pages_blocks_career3_depts3_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career3_depts3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3_depts3" ADD CONSTRAINT "pages_blocks_career3_depts3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3" ADD CONSTRAINT "pages_blocks_career3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4_depts4_jobs" ADD CONSTRAINT "pages_blocks_career4_depts4_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career4_depts4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4_depts4" ADD CONSTRAINT "pages_blocks_career4_depts4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4" ADD CONSTRAINT "pages_blocks_career4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career5" ADD CONSTRAINT "pages_blocks_career5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career6" ADD CONSTRAINT "pages_blocks_career6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact1" ADD CONSTRAINT "pages_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact5" ADD CONSTRAINT "pages_blocks_contact5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_buttons" ADD CONSTRAINT "pages_blocks_cta1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta5_buttons" ADD CONSTRAINT "pages_blocks_cta5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta5" ADD CONSTRAINT "pages_blocks_cta5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq1_questions" ADD CONSTRAINT "pages_blocks_faq1_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq1" ADD CONSTRAINT "pages_blocks_faq1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq5_questions" ADD CONSTRAINT "pages_blocks_faq5_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq5" ADD CONSTRAINT "pages_blocks_faq5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer1_column_links_links" ADD CONSTRAINT "pages_blocks_footer1_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer1_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer1_column_links" ADD CONSTRAINT "pages_blocks_footer1_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer1_footer_links" ADD CONSTRAINT "pages_blocks_footer1_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer1" ADD CONSTRAINT "pages_blocks_footer1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer1" ADD CONSTRAINT "pages_blocks_footer1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer5_column_links_links" ADD CONSTRAINT "pages_blocks_footer5_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer5_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer5_column_links" ADD CONSTRAINT "pages_blocks_footer5_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer5_social_media_links" ADD CONSTRAINT "pages_blocks_footer5_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer5_footer_links" ADD CONSTRAINT "pages_blocks_footer5_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer5" ADD CONSTRAINT "pages_blocks_footer5_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer5" ADD CONSTRAINT "pages_blocks_footer5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "pages_blocks_header44_links" ADD CONSTRAINT "pages_blocks_header44_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_header44"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_header44" ADD CONSTRAINT "pages_blocks_header44_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_header48" ADD CONSTRAINT "pages_blocks_header48_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout1_links" ADD CONSTRAINT "pages_blocks_layout1_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout1" ADD CONSTRAINT "pages_blocks_layout1_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout1" ADD CONSTRAINT "pages_blocks_layout1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout5_sub_headings" ADD CONSTRAINT "pages_blocks_layout5_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout5_buttons" ADD CONSTRAINT "pages_blocks_layout5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout5" ADD CONSTRAINT "pages_blocks_layout5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout5" ADD CONSTRAINT "pages_blocks_layout5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "sub_links" ADD CONSTRAINT "sub_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_links" ADD CONSTRAINT "nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_navbar1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btns" ADD CONSTRAINT "btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_navbar1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar1" ADD CONSTRAINT "pages_blocks_navbar1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar1" ADD CONSTRAINT "pages_blocks_navbar1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cat_link_items_5" ADD CONSTRAINT "cat_link_items_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cat_links_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cat_links_5" ADD CONSTRAINT "cat_links_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_links_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "featured_links_5" ADD CONSTRAINT "featured_links_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_links_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_links_5" ADD CONSTRAINT "nav_links_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_navbar5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "btns_5" ADD CONSTRAINT "btns_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_navbar5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar5" ADD CONSTRAINT "pages_blocks_navbar5_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_navbar5" ADD CONSTRAINT "pages_blocks_navbar5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing1" ADD CONSTRAINT "pages_blocks_pricing1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" ADD CONSTRAINT "pages_blocks_testimonial5_testimonials_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" ADD CONSTRAINT "pages_blocks_testimonial5_testimonials_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" ADD CONSTRAINT "pages_blocks_testimonial5_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5" ADD CONSTRAINT "pages_blocks_testimonial5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner2" ADD CONSTRAINT "_pages_v_blocks_banner2_logo_media_image_id_media_id_fk" FOREIGN KEY ("logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner2" ADD CONSTRAINT "_pages_v_blocks_banner2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner3_buttons" ADD CONSTRAINT "_pages_v_blocks_banner3_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner3" ADD CONSTRAINT "_pages_v_blocks_banner3_logo_media_image_id_media_id_fk" FOREIGN KEY ("logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner3" ADD CONSTRAINT "_pages_v_blocks_banner3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner9_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9" ADD CONSTRAINT "_pages_v_blocks_banner9_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9" ADD CONSTRAINT "_pages_v_blocks_banner9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_author_avatar_media_image_id_media_id_fk" FOREIGN KEY ("author_avatar_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD CONSTRAINT "_pages_v_blocks_career3_depts3_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career3_depts3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3_depts3" ADD CONSTRAINT "_pages_v_blocks_career3_depts3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3" ADD CONSTRAINT "_pages_v_blocks_career3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4_depts4_jobs" ADD CONSTRAINT "_pages_v_blocks_career4_depts4_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career4_depts4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4_depts4" ADD CONSTRAINT "_pages_v_blocks_career4_depts4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4" ADD CONSTRAINT "_pages_v_blocks_career4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career5" ADD CONSTRAINT "_pages_v_blocks_career5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career6" ADD CONSTRAINT "_pages_v_blocks_career6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact1" ADD CONSTRAINT "_pages_v_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact5" ADD CONSTRAINT "_pages_v_blocks_contact5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_buttons" ADD CONSTRAINT "_pages_v_blocks_cta1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ADD CONSTRAINT "_pages_v_blocks_cta5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta5" ADD CONSTRAINT "_pages_v_blocks_cta5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq1_questions" ADD CONSTRAINT "_pages_v_blocks_faq1_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq1" ADD CONSTRAINT "_pages_v_blocks_faq1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq5_questions" ADD CONSTRAINT "_pages_v_blocks_faq5_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq5" ADD CONSTRAINT "_pages_v_blocks_faq5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer1_column_links_links" ADD CONSTRAINT "_pages_v_blocks_footer1_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer1_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer1_column_links" ADD CONSTRAINT "_pages_v_blocks_footer1_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer1_footer_links" ADD CONSTRAINT "_pages_v_blocks_footer1_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer1" ADD CONSTRAINT "_pages_v_blocks_footer1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer1" ADD CONSTRAINT "_pages_v_blocks_footer1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer5_column_links_links" ADD CONSTRAINT "_pages_v_blocks_footer5_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer5_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer5_column_links" ADD CONSTRAINT "_pages_v_blocks_footer5_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer5_social_media_links" ADD CONSTRAINT "_pages_v_blocks_footer5_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer5_footer_links" ADD CONSTRAINT "_pages_v_blocks_footer5_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer5" ADD CONSTRAINT "_pages_v_blocks_footer5_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer5" ADD CONSTRAINT "_pages_v_blocks_footer5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_header44_links" ADD CONSTRAINT "_pages_v_blocks_header44_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_header44"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header44" ADD CONSTRAINT "_pages_v_blocks_header44_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_header48" ADD CONSTRAINT "_pages_v_blocks_header48_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout1_links" ADD CONSTRAINT "_pages_v_blocks_layout1_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout1" ADD CONSTRAINT "_pages_v_blocks_layout1_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout1" ADD CONSTRAINT "_pages_v_blocks_layout1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout5_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout5_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout5_buttons" ADD CONSTRAINT "_pages_v_blocks_layout5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout5" ADD CONSTRAINT "_pages_v_blocks_layout5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout5" ADD CONSTRAINT "_pages_v_blocks_layout5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_sub_links_v" ADD CONSTRAINT "_sub_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_nav_links_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_nav_links_v" ADD CONSTRAINT "_nav_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_navbar1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_btns_v" ADD CONSTRAINT "_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_navbar1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_navbar1" ADD CONSTRAINT "_pages_v_blocks_navbar1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_navbar1" ADD CONSTRAINT "_pages_v_blocks_navbar1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cat_link_items_5_v" ADD CONSTRAINT "_cat_link_items_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cat_links_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cat_links_5_v" ADD CONSTRAINT "_cat_links_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_nav_links_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_featured_links_5_v" ADD CONSTRAINT "_featured_links_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_nav_links_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_nav_links_5_v" ADD CONSTRAINT "_nav_links_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_navbar5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_btns_5_v" ADD CONSTRAINT "_btns_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_navbar5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_navbar5" ADD CONSTRAINT "_pages_v_blocks_navbar5_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_navbar5" ADD CONSTRAINT "_pages_v_blocks_navbar5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing1" ADD CONSTRAINT "_pages_v_blocks_pricing1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial5_testimonials_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial5_testimonials_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial5_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5" ADD CONSTRAINT "_pages_v_blocks_testimonial5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner1_order_idx" ON "pages_blocks_banner1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner1_parent_id_idx" ON "pages_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner1_path_idx" ON "pages_blocks_banner1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner2_order_idx" ON "pages_blocks_banner2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner2_parent_id_idx" ON "pages_blocks_banner2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner2_path_idx" ON "pages_blocks_banner2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner2_logo_logo_media_image_idx" ON "pages_blocks_banner2" USING btree ("logo_media_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner3_buttons_order_idx" ON "pages_blocks_banner3_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner3_buttons_parent_id_idx" ON "pages_blocks_banner3_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner3_order_idx" ON "pages_blocks_banner3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner3_parent_id_idx" ON "pages_blocks_banner3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner3_path_idx" ON "pages_blocks_banner3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner3_logo_logo_media_image_idx" ON "pages_blocks_banner3" USING btree ("logo_media_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner4_social_media_links_order_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner4_social_media_links_parent_id_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner4_order_idx" ON "pages_blocks_banner4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner4_parent_id_idx" ON "pages_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner4_path_idx" ON "pages_blocks_banner4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner4_logo_idx" ON "pages_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner9_social_media_links_order_idx" ON "pages_blocks_banner9_social_media_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner9_social_media_links_parent_id_idx" ON "pages_blocks_banner9_social_media_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner9_order_idx" ON "pages_blocks_banner9" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner9_parent_id_idx" ON "pages_blocks_banner9" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner9_path_idx" ON "pages_blocks_banner9" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_banner9_logo_idx" ON "pages_blocks_banner9" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header2_order_idx" ON "pages_blocks_blog_post_header2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header2_parent_id_idx" ON "pages_blocks_blog_post_header2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header2_path_idx" ON "pages_blocks_blog_post_header2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header2_image_image_media_image_idx" ON "pages_blocks_blog_post_header2" USING btree ("image_media_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header3_order_idx" ON "pages_blocks_blog_post_header3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header3_parent_id_idx" ON "pages_blocks_blog_post_header3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header3_path_idx" ON "pages_blocks_blog_post_header3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header3_image_image_media_image_idx" ON "pages_blocks_blog_post_header3" USING btree ("image_media_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_post_header3_author_avatar_author_avatar_media_image_idx" ON "pages_blocks_blog_post_header3" USING btree ("author_avatar_media_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_depts3_jobs_order_idx" ON "pages_blocks_career3_depts3_jobs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_depts3_jobs_parent_id_idx" ON "pages_blocks_career3_depts3_jobs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_depts3_order_idx" ON "pages_blocks_career3_depts3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_depts3_parent_id_idx" ON "pages_blocks_career3_depts3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_order_idx" ON "pages_blocks_career3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_parent_id_idx" ON "pages_blocks_career3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career3_path_idx" ON "pages_blocks_career3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_depts4_jobs_order_idx" ON "pages_blocks_career4_depts4_jobs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_depts4_jobs_parent_id_idx" ON "pages_blocks_career4_depts4_jobs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_depts4_order_idx" ON "pages_blocks_career4_depts4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_depts4_parent_id_idx" ON "pages_blocks_career4_depts4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_order_idx" ON "pages_blocks_career4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_parent_id_idx" ON "pages_blocks_career4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career4_path_idx" ON "pages_blocks_career4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career5_order_idx" ON "pages_blocks_career5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career5_parent_id_idx" ON "pages_blocks_career5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career5_path_idx" ON "pages_blocks_career5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career6_order_idx" ON "pages_blocks_career6" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career6_parent_id_idx" ON "pages_blocks_career6" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_career6_path_idx" ON "pages_blocks_career6" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_order_idx" ON "pages_blocks_contact1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_parent_id_idx" ON "pages_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_path_idx" ON "pages_blocks_contact1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact5_order_idx" ON "pages_blocks_contact5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact5_parent_id_idx" ON "pages_blocks_contact5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact5_path_idx" ON "pages_blocks_contact5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_buttons_order_idx" ON "pages_blocks_cta1_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_buttons_parent_id_idx" ON "pages_blocks_cta1_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_order_idx" ON "pages_blocks_cta1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_parent_id_idx" ON "pages_blocks_cta1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_path_idx" ON "pages_blocks_cta1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_image_image_media_idx" ON "pages_blocks_cta1" USING btree ("image_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta5_buttons_order_idx" ON "pages_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta5_buttons_parent_id_idx" ON "pages_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta5_order_idx" ON "pages_blocks_cta5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta5_parent_id_idx" ON "pages_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta5_path_idx" ON "pages_blocks_cta5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq1_questions_order_idx" ON "pages_blocks_faq1_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq1_questions_parent_id_idx" ON "pages_blocks_faq1_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq1_order_idx" ON "pages_blocks_faq1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq1_parent_id_idx" ON "pages_blocks_faq1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq1_path_idx" ON "pages_blocks_faq1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq5_questions_order_idx" ON "pages_blocks_faq5_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq5_questions_parent_id_idx" ON "pages_blocks_faq5_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq5_order_idx" ON "pages_blocks_faq5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq5_parent_id_idx" ON "pages_blocks_faq5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq5_path_idx" ON "pages_blocks_faq5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_column_links_links_order_idx" ON "pages_blocks_footer1_column_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_column_links_links_parent_id_idx" ON "pages_blocks_footer1_column_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_column_links_order_idx" ON "pages_blocks_footer1_column_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_column_links_parent_id_idx" ON "pages_blocks_footer1_column_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_footer_links_order_idx" ON "pages_blocks_footer1_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_footer_links_parent_id_idx" ON "pages_blocks_footer1_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_order_idx" ON "pages_blocks_footer1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_parent_id_idx" ON "pages_blocks_footer1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_path_idx" ON "pages_blocks_footer1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer1_logo_logo_media_idx" ON "pages_blocks_footer1" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_column_links_links_order_idx" ON "pages_blocks_footer5_column_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_column_links_links_parent_id_idx" ON "pages_blocks_footer5_column_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_column_links_order_idx" ON "pages_blocks_footer5_column_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_column_links_parent_id_idx" ON "pages_blocks_footer5_column_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_social_media_links_order_idx" ON "pages_blocks_footer5_social_media_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_social_media_links_parent_id_idx" ON "pages_blocks_footer5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_footer_links_order_idx" ON "pages_blocks_footer5_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_footer_links_parent_id_idx" ON "pages_blocks_footer5_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_order_idx" ON "pages_blocks_footer5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_parent_id_idx" ON "pages_blocks_footer5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_path_idx" ON "pages_blocks_footer5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_footer5_logo_logo_media_idx" ON "pages_blocks_footer5" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_service_type_options_order_idx" ON "pages_blocks_multi_form2_service_type_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_service_type_options_parent_id_idx" ON "pages_blocks_multi_form2_service_type_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_budget_options_order_idx" ON "pages_blocks_multi_form2_budget_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_budget_options_parent_id_idx" ON "pages_blocks_multi_form2_budget_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_employees_options_order_idx" ON "pages_blocks_multi_form2_employees_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_employees_options_parent_id_idx" ON "pages_blocks_multi_form2_employees_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_countries_options_order_idx" ON "pages_blocks_multi_form2_countries_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_countries_options_parent_id_idx" ON "pages_blocks_multi_form2_countries_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_order_idx" ON "pages_blocks_multi_form2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_parent_id_idx" ON "pages_blocks_multi_form2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_path_idx" ON "pages_blocks_multi_form2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form2_logo_idx" ON "pages_blocks_multi_form2" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_service_type_options_order_idx" ON "pages_blocks_multi_form7_service_type_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_service_type_options_parent_id_idx" ON "pages_blocks_multi_form7_service_type_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_budget_options_order_idx" ON "pages_blocks_multi_form7_budget_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_budget_options_parent_id_idx" ON "pages_blocks_multi_form7_budget_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_employees_options_order_idx" ON "pages_blocks_multi_form7_employees_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_employees_options_parent_id_idx" ON "pages_blocks_multi_form7_employees_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_countries_options_order_idx" ON "pages_blocks_multi_form7_countries_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_countries_options_parent_id_idx" ON "pages_blocks_multi_form7_countries_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_order_idx" ON "pages_blocks_multi_form7" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_parent_id_idx" ON "pages_blocks_multi_form7" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_path_idx" ON "pages_blocks_multi_form7" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_logo_idx" ON "pages_blocks_multi_form7" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_multi_form7_image_idx" ON "pages_blocks_multi_form7" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header44_links_order_idx" ON "pages_blocks_header44_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header44_links_parent_id_idx" ON "pages_blocks_header44_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header44_order_idx" ON "pages_blocks_header44" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header44_parent_id_idx" ON "pages_blocks_header44" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header44_path_idx" ON "pages_blocks_header44" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header48_order_idx" ON "pages_blocks_header48" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header48_parent_id_idx" ON "pages_blocks_header48" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header48_path_idx" ON "pages_blocks_header48" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout1_links_order_idx" ON "pages_blocks_layout1_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout1_links_parent_id_idx" ON "pages_blocks_layout1_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout1_order_idx" ON "pages_blocks_layout1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout1_parent_id_idx" ON "pages_blocks_layout1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout1_path_idx" ON "pages_blocks_layout1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout1_media_idx" ON "pages_blocks_layout1" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_sub_headings_order_idx" ON "pages_blocks_layout5_sub_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_sub_headings_parent_id_idx" ON "pages_blocks_layout5_sub_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_buttons_order_idx" ON "pages_blocks_layout5_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_buttons_parent_id_idx" ON "pages_blocks_layout5_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_order_idx" ON "pages_blocks_layout5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_parent_id_idx" ON "pages_blocks_layout5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_path_idx" ON "pages_blocks_layout5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout5_image_idx" ON "pages_blocks_layout5" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "links_4_categories_links_order_idx" ON "links_4_categories_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "links_4_categories_links_parent_id_idx" ON "links_4_categories_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "links_4_categories_order_idx" ON "links_4_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "links_4_categories_parent_id_idx" ON "links_4_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "links_4_social_links_order_idx" ON "links_4_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "links_4_social_links_parent_id_idx" ON "links_4_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "links_4_order_idx" ON "links_4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "links_4_parent_id_idx" ON "links_4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "links_4_path_idx" ON "links_4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "links_4_image_idx" ON "links_4" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content2_order_idx" ON "pages_blocks_long_content2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content2_parent_id_idx" ON "pages_blocks_long_content2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content2_path_idx" ON "pages_blocks_long_content2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content2_image_image_src_idx" ON "pages_blocks_long_content2" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content3_order_idx" ON "pages_blocks_long_content3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content3_parent_id_idx" ON "pages_blocks_long_content3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content3_path_idx" ON "pages_blocks_long_content3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content3_image_image_src_idx" ON "pages_blocks_long_content3" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content4_order_idx" ON "pages_blocks_long_content4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content4_parent_id_idx" ON "pages_blocks_long_content4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content4_path_idx" ON "pages_blocks_long_content4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_long_content4_image_image_src_idx" ON "pages_blocks_long_content4" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "sub_links_order_idx" ON "sub_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sub_links_parent_id_idx" ON "sub_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_links_order_idx" ON "nav_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_links_parent_id_idx" ON "nav_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "btns_order_idx" ON "btns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "btns_parent_id_idx" ON "btns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar1_order_idx" ON "pages_blocks_navbar1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar1_parent_id_idx" ON "pages_blocks_navbar1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar1_path_idx" ON "pages_blocks_navbar1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar1_logo_logo_media_idx" ON "pages_blocks_navbar1" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "cat_link_items_5_order_idx" ON "cat_link_items_5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cat_link_items_5_parent_id_idx" ON "cat_link_items_5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cat_links_5_order_idx" ON "cat_links_5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cat_links_5_parent_id_idx" ON "cat_links_5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "featured_links_5_order_idx" ON "featured_links_5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featured_links_5_parent_id_idx" ON "featured_links_5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nav_links_5_order_idx" ON "nav_links_5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nav_links_5_parent_id_idx" ON "nav_links_5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "btns_5_order_idx" ON "btns_5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "btns_5_parent_id_idx" ON "btns_5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar5_order_idx" ON "pages_blocks_navbar5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar5_parent_id_idx" ON "pages_blocks_navbar5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar5_path_idx" ON "pages_blocks_navbar5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_navbar5_logo_logo_media_idx" ON "pages_blocks_navbar5" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing1_order_idx" ON "pages_blocks_pricing1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing1_parent_id_idx" ON "pages_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_pricing1_path_idx" ON "pages_blocks_pricing1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial1_order_idx" ON "pages_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial1_parent_id_idx" ON "pages_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial1_path_idx" ON "pages_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial1_logo_logo_media_idx" ON "pages_blocks_testimonial1" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial1_avatar_avatar_media_idx" ON "pages_blocks_testimonial1" USING btree ("avatar_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_testimonials_order_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_testimonials_parent_id_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_testimonials_avatar_avatar_media_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("avatar_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_testimonials_logo_logo_media_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_order_idx" ON "pages_blocks_testimonial5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_parent_id_idx" ON "pages_blocks_testimonial5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_testimonial5_path_idx" ON "pages_blocks_testimonial5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_buttons_order_idx" ON "pages_blocks_timeline3_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_buttons_parent_id_idx" ON "pages_blocks_timeline3_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_timelines_buttons_order_idx" ON "pages_blocks_timeline3_timelines_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_timelines_buttons_parent_id_idx" ON "pages_blocks_timeline3_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_timelines_order_idx" ON "pages_blocks_timeline3_timelines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_timelines_parent_id_idx" ON "pages_blocks_timeline3_timelines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_timelines_image_idx" ON "pages_blocks_timeline3_timelines" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_order_idx" ON "pages_blocks_timeline3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_parent_id_idx" ON "pages_blocks_timeline3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline3_path_idx" ON "pages_blocks_timeline3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_buttons_order_idx" ON "pages_blocks_timeline7_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_buttons_parent_id_idx" ON "pages_blocks_timeline7_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_timeline_items_buttons_order_idx" ON "pages_blocks_timeline7_timeline_items_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_timeline_items_buttons_parent_id_idx" ON "pages_blocks_timeline7_timeline_items_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_timeline_items_order_idx" ON "pages_blocks_timeline7_timeline_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_timeline_items_parent_id_idx" ON "pages_blocks_timeline7_timeline_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_timeline_items_image_idx" ON "pages_blocks_timeline7_timeline_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_order_idx" ON "pages_blocks_timeline7" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_parent_id_idx" ON "pages_blocks_timeline7" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_timeline7_path_idx" ON "pages_blocks_timeline7" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner1_order_idx" ON "_pages_v_blocks_banner1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner1_parent_id_idx" ON "_pages_v_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner1_path_idx" ON "_pages_v_blocks_banner1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner2_order_idx" ON "_pages_v_blocks_banner2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner2_parent_id_idx" ON "_pages_v_blocks_banner2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner2_path_idx" ON "_pages_v_blocks_banner2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner2_logo_logo_media_image_idx" ON "_pages_v_blocks_banner2" USING btree ("logo_media_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner3_buttons_order_idx" ON "_pages_v_blocks_banner3_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner3_buttons_parent_id_idx" ON "_pages_v_blocks_banner3_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner3_order_idx" ON "_pages_v_blocks_banner3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner3_parent_id_idx" ON "_pages_v_blocks_banner3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner3_path_idx" ON "_pages_v_blocks_banner3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner3_logo_logo_media_image_idx" ON "_pages_v_blocks_banner3" USING btree ("logo_media_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner4_social_media_links_order_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner4_social_media_links_parent_id_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner4_order_idx" ON "_pages_v_blocks_banner4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner4_parent_id_idx" ON "_pages_v_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner4_path_idx" ON "_pages_v_blocks_banner4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner4_logo_idx" ON "_pages_v_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner9_social_media_links_order_idx" ON "_pages_v_blocks_banner9_social_media_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner9_social_media_links_parent_id_idx" ON "_pages_v_blocks_banner9_social_media_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner9_order_idx" ON "_pages_v_blocks_banner9" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner9_parent_id_idx" ON "_pages_v_blocks_banner9" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner9_path_idx" ON "_pages_v_blocks_banner9" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_banner9_logo_idx" ON "_pages_v_blocks_banner9" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header2_order_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header2_parent_id_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header2_path_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header2_image_image_media_image_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("image_media_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header3_order_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header3_parent_id_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header3_path_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header3_image_image_media_image_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("image_media_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_blog_post_header3_author_avatar_author_avatar_media_image_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("author_avatar_media_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_depts3_jobs_order_idx" ON "_pages_v_blocks_career3_depts3_jobs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_depts3_jobs_parent_id_idx" ON "_pages_v_blocks_career3_depts3_jobs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_depts3_order_idx" ON "_pages_v_blocks_career3_depts3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_depts3_parent_id_idx" ON "_pages_v_blocks_career3_depts3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_order_idx" ON "_pages_v_blocks_career3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_parent_id_idx" ON "_pages_v_blocks_career3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career3_path_idx" ON "_pages_v_blocks_career3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_depts4_jobs_order_idx" ON "_pages_v_blocks_career4_depts4_jobs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_depts4_jobs_parent_id_idx" ON "_pages_v_blocks_career4_depts4_jobs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_depts4_order_idx" ON "_pages_v_blocks_career4_depts4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_depts4_parent_id_idx" ON "_pages_v_blocks_career4_depts4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_order_idx" ON "_pages_v_blocks_career4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_parent_id_idx" ON "_pages_v_blocks_career4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career4_path_idx" ON "_pages_v_blocks_career4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career5_order_idx" ON "_pages_v_blocks_career5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career5_parent_id_idx" ON "_pages_v_blocks_career5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career5_path_idx" ON "_pages_v_blocks_career5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career6_order_idx" ON "_pages_v_blocks_career6" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career6_parent_id_idx" ON "_pages_v_blocks_career6" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_career6_path_idx" ON "_pages_v_blocks_career6" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_order_idx" ON "_pages_v_blocks_contact1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_parent_id_idx" ON "_pages_v_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_path_idx" ON "_pages_v_blocks_contact1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact5_order_idx" ON "_pages_v_blocks_contact5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact5_parent_id_idx" ON "_pages_v_blocks_contact5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact5_path_idx" ON "_pages_v_blocks_contact5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_buttons_order_idx" ON "_pages_v_blocks_cta1_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_buttons_parent_id_idx" ON "_pages_v_blocks_cta1_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_order_idx" ON "_pages_v_blocks_cta1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_parent_id_idx" ON "_pages_v_blocks_cta1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_path_idx" ON "_pages_v_blocks_cta1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_image_image_media_idx" ON "_pages_v_blocks_cta1" USING btree ("image_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta5_buttons_order_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta5_buttons_parent_id_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta5_order_idx" ON "_pages_v_blocks_cta5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta5_parent_id_idx" ON "_pages_v_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta5_path_idx" ON "_pages_v_blocks_cta5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq1_questions_order_idx" ON "_pages_v_blocks_faq1_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq1_questions_parent_id_idx" ON "_pages_v_blocks_faq1_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq1_order_idx" ON "_pages_v_blocks_faq1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq1_parent_id_idx" ON "_pages_v_blocks_faq1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq1_path_idx" ON "_pages_v_blocks_faq1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq5_questions_order_idx" ON "_pages_v_blocks_faq5_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq5_questions_parent_id_idx" ON "_pages_v_blocks_faq5_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq5_order_idx" ON "_pages_v_blocks_faq5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq5_parent_id_idx" ON "_pages_v_blocks_faq5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq5_path_idx" ON "_pages_v_blocks_faq5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_column_links_links_order_idx" ON "_pages_v_blocks_footer1_column_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_column_links_links_parent_id_idx" ON "_pages_v_blocks_footer1_column_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_column_links_order_idx" ON "_pages_v_blocks_footer1_column_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_column_links_parent_id_idx" ON "_pages_v_blocks_footer1_column_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_footer_links_order_idx" ON "_pages_v_blocks_footer1_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_footer_links_parent_id_idx" ON "_pages_v_blocks_footer1_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_order_idx" ON "_pages_v_blocks_footer1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_parent_id_idx" ON "_pages_v_blocks_footer1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_path_idx" ON "_pages_v_blocks_footer1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer1_logo_logo_media_idx" ON "_pages_v_blocks_footer1" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_column_links_links_order_idx" ON "_pages_v_blocks_footer5_column_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_column_links_links_parent_id_idx" ON "_pages_v_blocks_footer5_column_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_column_links_order_idx" ON "_pages_v_blocks_footer5_column_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_column_links_parent_id_idx" ON "_pages_v_blocks_footer5_column_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_social_media_links_order_idx" ON "_pages_v_blocks_footer5_social_media_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_social_media_links_parent_id_idx" ON "_pages_v_blocks_footer5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_footer_links_order_idx" ON "_pages_v_blocks_footer5_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_footer_links_parent_id_idx" ON "_pages_v_blocks_footer5_footer_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_order_idx" ON "_pages_v_blocks_footer5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_parent_id_idx" ON "_pages_v_blocks_footer5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_path_idx" ON "_pages_v_blocks_footer5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_footer5_logo_logo_media_idx" ON "_pages_v_blocks_footer5" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_service_type_options_order_idx" ON "_pages_v_blocks_multi_form2_service_type_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_service_type_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_service_type_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_budget_options_order_idx" ON "_pages_v_blocks_multi_form2_budget_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_budget_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_budget_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_employees_options_order_idx" ON "_pages_v_blocks_multi_form2_employees_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_employees_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_employees_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_countries_options_order_idx" ON "_pages_v_blocks_multi_form2_countries_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_countries_options_parent_id_idx" ON "_pages_v_blocks_multi_form2_countries_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_order_idx" ON "_pages_v_blocks_multi_form2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_parent_id_idx" ON "_pages_v_blocks_multi_form2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_path_idx" ON "_pages_v_blocks_multi_form2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form2_logo_idx" ON "_pages_v_blocks_multi_form2" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_service_type_options_order_idx" ON "_pages_v_blocks_multi_form7_service_type_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_service_type_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_service_type_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_budget_options_order_idx" ON "_pages_v_blocks_multi_form7_budget_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_budget_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_budget_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_employees_options_order_idx" ON "_pages_v_blocks_multi_form7_employees_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_employees_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_employees_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_countries_options_order_idx" ON "_pages_v_blocks_multi_form7_countries_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_countries_options_parent_id_idx" ON "_pages_v_blocks_multi_form7_countries_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_order_idx" ON "_pages_v_blocks_multi_form7" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_parent_id_idx" ON "_pages_v_blocks_multi_form7" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_path_idx" ON "_pages_v_blocks_multi_form7" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_logo_idx" ON "_pages_v_blocks_multi_form7" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_multi_form7_image_idx" ON "_pages_v_blocks_multi_form7" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header44_links_order_idx" ON "_pages_v_blocks_header44_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header44_links_parent_id_idx" ON "_pages_v_blocks_header44_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header44_order_idx" ON "_pages_v_blocks_header44" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header44_parent_id_idx" ON "_pages_v_blocks_header44" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header44_path_idx" ON "_pages_v_blocks_header44" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header48_order_idx" ON "_pages_v_blocks_header48" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header48_parent_id_idx" ON "_pages_v_blocks_header48" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header48_path_idx" ON "_pages_v_blocks_header48" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout1_links_order_idx" ON "_pages_v_blocks_layout1_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout1_links_parent_id_idx" ON "_pages_v_blocks_layout1_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout1_order_idx" ON "_pages_v_blocks_layout1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout1_parent_id_idx" ON "_pages_v_blocks_layout1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout1_path_idx" ON "_pages_v_blocks_layout1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout1_media_idx" ON "_pages_v_blocks_layout1" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_sub_headings_order_idx" ON "_pages_v_blocks_layout5_sub_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_sub_headings_parent_id_idx" ON "_pages_v_blocks_layout5_sub_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_buttons_order_idx" ON "_pages_v_blocks_layout5_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_buttons_parent_id_idx" ON "_pages_v_blocks_layout5_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_order_idx" ON "_pages_v_blocks_layout5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_parent_id_idx" ON "_pages_v_blocks_layout5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_path_idx" ON "_pages_v_blocks_layout5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout5_image_idx" ON "_pages_v_blocks_layout5" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_links_4_v_categories_links_order_idx" ON "_links_4_v_categories_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_links_4_v_categories_links_parent_id_idx" ON "_links_4_v_categories_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_links_4_v_categories_order_idx" ON "_links_4_v_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_links_4_v_categories_parent_id_idx" ON "_links_4_v_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_links_4_v_social_links_order_idx" ON "_links_4_v_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_links_4_v_social_links_parent_id_idx" ON "_links_4_v_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_links_4_v_order_idx" ON "_links_4_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_links_4_v_parent_id_idx" ON "_links_4_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_links_4_v_path_idx" ON "_links_4_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_links_4_v_image_idx" ON "_links_4_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content2_order_idx" ON "_pages_v_blocks_long_content2" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content2_parent_id_idx" ON "_pages_v_blocks_long_content2" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content2_path_idx" ON "_pages_v_blocks_long_content2" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content2_image_image_src_idx" ON "_pages_v_blocks_long_content2" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content3_order_idx" ON "_pages_v_blocks_long_content3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content3_parent_id_idx" ON "_pages_v_blocks_long_content3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content3_path_idx" ON "_pages_v_blocks_long_content3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content3_image_image_src_idx" ON "_pages_v_blocks_long_content3" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content4_order_idx" ON "_pages_v_blocks_long_content4" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content4_parent_id_idx" ON "_pages_v_blocks_long_content4" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content4_path_idx" ON "_pages_v_blocks_long_content4" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_long_content4_image_image_src_idx" ON "_pages_v_blocks_long_content4" USING btree ("image_src_id");
  CREATE INDEX IF NOT EXISTS "_sub_links_v_order_idx" ON "_sub_links_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_sub_links_v_parent_id_idx" ON "_sub_links_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_nav_links_v_order_idx" ON "_nav_links_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_nav_links_v_parent_id_idx" ON "_nav_links_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_btns_v_order_idx" ON "_btns_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_btns_v_parent_id_idx" ON "_btns_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar1_order_idx" ON "_pages_v_blocks_navbar1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar1_parent_id_idx" ON "_pages_v_blocks_navbar1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar1_path_idx" ON "_pages_v_blocks_navbar1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar1_logo_logo_media_idx" ON "_pages_v_blocks_navbar1" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "_cat_link_items_5_v_order_idx" ON "_cat_link_items_5_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cat_link_items_5_v_parent_id_idx" ON "_cat_link_items_5_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cat_links_5_v_order_idx" ON "_cat_links_5_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cat_links_5_v_parent_id_idx" ON "_cat_links_5_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_featured_links_5_v_order_idx" ON "_featured_links_5_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featured_links_5_v_parent_id_idx" ON "_featured_links_5_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_nav_links_5_v_order_idx" ON "_nav_links_5_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_nav_links_5_v_parent_id_idx" ON "_nav_links_5_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_btns_5_v_order_idx" ON "_btns_5_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_btns_5_v_parent_id_idx" ON "_btns_5_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar5_order_idx" ON "_pages_v_blocks_navbar5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar5_parent_id_idx" ON "_pages_v_blocks_navbar5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar5_path_idx" ON "_pages_v_blocks_navbar5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_navbar5_logo_logo_media_idx" ON "_pages_v_blocks_navbar5" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing1_order_idx" ON "_pages_v_blocks_pricing1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing1_parent_id_idx" ON "_pages_v_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_pricing1_path_idx" ON "_pages_v_blocks_pricing1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial1_order_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial1_parent_id_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial1_path_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial1_logo_logo_media_idx" ON "_pages_v_blocks_testimonial1" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial1_avatar_avatar_media_idx" ON "_pages_v_blocks_testimonial1" USING btree ("avatar_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_testimonials_order_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_testimonials_avatar_avatar_media_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("avatar_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_testimonials_logo_logo_media_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("logo_media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_order_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_parent_id_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_testimonial5_path_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_buttons_order_idx" ON "_pages_v_blocks_timeline3_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_buttons_parent_id_idx" ON "_pages_v_blocks_timeline3_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_timelines_buttons_order_idx" ON "_pages_v_blocks_timeline3_timelines_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_timelines_buttons_parent_id_idx" ON "_pages_v_blocks_timeline3_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_timelines_order_idx" ON "_pages_v_blocks_timeline3_timelines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_timelines_parent_id_idx" ON "_pages_v_blocks_timeline3_timelines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_timelines_image_idx" ON "_pages_v_blocks_timeline3_timelines" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_order_idx" ON "_pages_v_blocks_timeline3" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_parent_id_idx" ON "_pages_v_blocks_timeline3" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline3_path_idx" ON "_pages_v_blocks_timeline3" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_buttons_order_idx" ON "_pages_v_blocks_timeline7_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_buttons_parent_id_idx" ON "_pages_v_blocks_timeline7_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items_buttons_order_idx" ON "_pages_v_blocks_timeline7_timeline_items_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items_buttons_parent_id_idx" ON "_pages_v_blocks_timeline7_timeline_items_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items_order_idx" ON "_pages_v_blocks_timeline7_timeline_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items_parent_id_idx" ON "_pages_v_blocks_timeline7_timeline_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_timeline_items_image_idx" ON "_pages_v_blocks_timeline7_timeline_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_order_idx" ON "_pages_v_blocks_timeline7" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_parent_id_idx" ON "_pages_v_blocks_timeline7" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_timeline7_path_idx" ON "_pages_v_blocks_timeline7" USING btree ("_path");
  ALTER TABLE "breadcrumbs" ADD CONSTRAINT "breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "social_links" ADD CONSTRAINT "social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "depts" ADD CONSTRAINT "depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_breadcrumbs_v" ADD CONSTRAINT "_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_social_links_v" ADD CONSTRAINT "_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_depts_v" ADD CONSTRAINT "_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "breadcrumbs" DROP COLUMN "url";
  ALTER TABLE "social_links" DROP COLUMN "icon_type";
  ALTER TABLE "jobs" DROP COLUMN "url";
  ALTER TABLE "_breadcrumbs_v" DROP COLUMN "url";
  ALTER TABLE "_social_links_v" DROP COLUMN "icon_type";
  ALTER TABLE "_jobs_v" DROP COLUMN "url";
  DROP TYPE "public"."icon_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  ALTER TABLE "pages_blocks_banner1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner3_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner4_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner9_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_banner9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog_post_header2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog_post_header3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career3_depts3_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career3_depts3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career4_depts4_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career4_depts4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_career6" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_contact1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_contact5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta1_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq1_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq5_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer1_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer1_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer1_footer_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer5_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer5_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer5_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer5_footer_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_footer5" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "pages_blocks_header44_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_header44" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_header48" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout1_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout5_sub_headings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4_categories_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "links_4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_long_content2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_long_content3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_long_content4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "sub_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "nav_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "btns" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_navbar1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cat_link_items_5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cat_links_5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "featured_links_5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "nav_links_5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "btns_5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_navbar5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_pricing1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonial1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_testimonial5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3_timelines_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3_timelines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7_timeline_items_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_timeline7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner3_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner9_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_banner9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career3_depts3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career4_depts4_jobs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career4_depts4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_career6" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta1_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq1_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq5_questions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer1_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer1_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer1_footer_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer5_column_links_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer5_column_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer5_social_media_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer5_footer_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_footer5" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "_pages_v_blocks_header44_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_header44" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_header48" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout1_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout5_sub_headings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v_categories_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_links_4_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_long_content2" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_long_content3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_long_content4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_sub_links_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_nav_links_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_btns_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_navbar1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_cat_link_items_5_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_cat_links_5_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_featured_links_5_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_nav_links_5_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_btns_5_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_navbar5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_pricing1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonial1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_testimonial5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3_timelines" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline3" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7_timeline_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_timeline7" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_banner1" CASCADE;
  DROP TABLE "pages_blocks_banner2" CASCADE;
  DROP TABLE "pages_blocks_banner3_buttons" CASCADE;
  DROP TABLE "pages_blocks_banner3" CASCADE;
  DROP TABLE "pages_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner4" CASCADE;
  DROP TABLE "pages_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner9" CASCADE;
  DROP TABLE "pages_blocks_blog_post_header2" CASCADE;
  DROP TABLE "pages_blocks_blog_post_header3" CASCADE;
  DROP TABLE "pages_blocks_career3_depts3_jobs" CASCADE;
  DROP TABLE "pages_blocks_career3_depts3" CASCADE;
  DROP TABLE "pages_blocks_career3" CASCADE;
  DROP TABLE "pages_blocks_career4_depts4_jobs" CASCADE;
  DROP TABLE "pages_blocks_career4_depts4" CASCADE;
  DROP TABLE "pages_blocks_career4" CASCADE;
  DROP TABLE "pages_blocks_career5" CASCADE;
  DROP TABLE "pages_blocks_career6" CASCADE;
  DROP TABLE "pages_blocks_contact1" CASCADE;
  DROP TABLE "pages_blocks_contact5" CASCADE;
  DROP TABLE "pages_blocks_cta1_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta1" CASCADE;
  DROP TABLE "pages_blocks_cta5_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta5" CASCADE;
  DROP TABLE "pages_blocks_faq1_questions" CASCADE;
  DROP TABLE "pages_blocks_faq1" CASCADE;
  DROP TABLE "pages_blocks_faq5_questions" CASCADE;
  DROP TABLE "pages_blocks_faq5" CASCADE;
  DROP TABLE "pages_blocks_footer1_column_links_links" CASCADE;
  DROP TABLE "pages_blocks_footer1_column_links" CASCADE;
  DROP TABLE "pages_blocks_footer1_footer_links" CASCADE;
  DROP TABLE "pages_blocks_footer1" CASCADE;
  DROP TABLE "pages_blocks_footer5_column_links_links" CASCADE;
  DROP TABLE "pages_blocks_footer5_column_links" CASCADE;
  DROP TABLE "pages_blocks_footer5_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_footer5_footer_links" CASCADE;
  DROP TABLE "pages_blocks_footer5" CASCADE;
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
  DROP TABLE "pages_blocks_header44_links" CASCADE;
  DROP TABLE "pages_blocks_header44" CASCADE;
  DROP TABLE "pages_blocks_header48" CASCADE;
  DROP TABLE "pages_blocks_layout1_links" CASCADE;
  DROP TABLE "pages_blocks_layout1" CASCADE;
  DROP TABLE "pages_blocks_layout5_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout5_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout5" CASCADE;
  DROP TABLE "links_4_categories_links" CASCADE;
  DROP TABLE "links_4_categories" CASCADE;
  DROP TABLE "links_4_social_links" CASCADE;
  DROP TABLE "links_4" CASCADE;
  DROP TABLE "pages_blocks_long_content2" CASCADE;
  DROP TABLE "pages_blocks_long_content3" CASCADE;
  DROP TABLE "pages_blocks_long_content4" CASCADE;
  DROP TABLE "sub_links" CASCADE;
  DROP TABLE "nav_links" CASCADE;
  DROP TABLE "btns" CASCADE;
  DROP TABLE "pages_blocks_navbar1" CASCADE;
  DROP TABLE "cat_link_items_5" CASCADE;
  DROP TABLE "cat_links_5" CASCADE;
  DROP TABLE "featured_links_5" CASCADE;
  DROP TABLE "nav_links_5" CASCADE;
  DROP TABLE "btns_5" CASCADE;
  DROP TABLE "pages_blocks_navbar5" CASCADE;
  DROP TABLE "pages_blocks_pricing1" CASCADE;
  DROP TABLE "pages_blocks_testimonial1" CASCADE;
  DROP TABLE "pages_blocks_testimonial5_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial5" CASCADE;
  DROP TABLE "pages_blocks_timeline3_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline3_timelines_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline3_timelines" CASCADE;
  DROP TABLE "pages_blocks_timeline3" CASCADE;
  DROP TABLE "pages_blocks_timeline7_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline7_timeline_items_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline7_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline7" CASCADE;
  DROP TABLE "_pages_v_blocks_banner1" CASCADE;
  DROP TABLE "_pages_v_blocks_banner2" CASCADE;
  DROP TABLE "_pages_v_blocks_banner3_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_banner3" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_post_header2" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_post_header3" CASCADE;
  DROP TABLE "_pages_v_blocks_career3_depts3_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_career3_depts3" CASCADE;
  DROP TABLE "_pages_v_blocks_career3" CASCADE;
  DROP TABLE "_pages_v_blocks_career4_depts4_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_career4_depts4" CASCADE;
  DROP TABLE "_pages_v_blocks_career4" CASCADE;
  DROP TABLE "_pages_v_blocks_career5" CASCADE;
  DROP TABLE "_pages_v_blocks_career6" CASCADE;
  DROP TABLE "_pages_v_blocks_contact1" CASCADE;
  DROP TABLE "_pages_v_blocks_contact5" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1" CASCADE;
  DROP TABLE "_pages_v_blocks_cta5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta5" CASCADE;
  DROP TABLE "_pages_v_blocks_faq1_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq1" CASCADE;
  DROP TABLE "_pages_v_blocks_faq5_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq5" CASCADE;
  DROP TABLE "_pages_v_blocks_footer1_column_links_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer1_column_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer1_footer_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer1" CASCADE;
  DROP TABLE "_pages_v_blocks_footer5_column_links_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer5_column_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer5_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer5_footer_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer5" CASCADE;
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
  DROP TABLE "_pages_v_blocks_header44_links" CASCADE;
  DROP TABLE "_pages_v_blocks_header44" CASCADE;
  DROP TABLE "_pages_v_blocks_header48" CASCADE;
  DROP TABLE "_pages_v_blocks_layout1_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout1" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5" CASCADE;
  DROP TABLE "_links_4_v_categories_links" CASCADE;
  DROP TABLE "_links_4_v_categories" CASCADE;
  DROP TABLE "_links_4_v_social_links" CASCADE;
  DROP TABLE "_links_4_v" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content2" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content3" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content4" CASCADE;
  DROP TABLE "_sub_links_v" CASCADE;
  DROP TABLE "_nav_links_v" CASCADE;
  DROP TABLE "_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_navbar1" CASCADE;
  DROP TABLE "_cat_link_items_5_v" CASCADE;
  DROP TABLE "_cat_links_5_v" CASCADE;
  DROP TABLE "_featured_links_5_v" CASCADE;
  DROP TABLE "_nav_links_5_v" CASCADE;
  DROP TABLE "_btns_5_v" CASCADE;
  DROP TABLE "_pages_v_blocks_navbar5" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing1" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial1" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial5_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial5" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_timelines_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_timelines" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7" CASCADE;
  ALTER TABLE "breadcrumbs" DROP CONSTRAINT "breadcrumbs_parent_id_fk";
  
  ALTER TABLE "social_links" DROP CONSTRAINT "social_links_parent_id_fk";
  
  ALTER TABLE "depts" DROP CONSTRAINT "depts_parent_id_fk";
  
  ALTER TABLE "_breadcrumbs_v" DROP CONSTRAINT "_breadcrumbs_v_parent_id_fk";
  
  ALTER TABLE "_social_links_v" DROP CONSTRAINT "_social_links_v_parent_id_fk";
  
  ALTER TABLE "_depts_v" DROP CONSTRAINT "_depts_v_parent_id_fk";
  
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2');
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact'::"public"."enum_pages_hero_type";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2');
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact'::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "breadcrumbs" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "social_links" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "_breadcrumbs_v" ALTER COLUMN "title" DROP DEFAULT;
  ALTER TABLE "_social_links_v" ALTER COLUMN "url" DROP DEFAULT;
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DATA TYPE varchar;
  ALTER TABLE "form_custom_2_submissions" ALTER COLUMN "source" SET DEFAULT 'form-custom-2';
  ALTER TABLE "breadcrumbs" ADD COLUMN "url" varchar;
  ALTER TABLE "social_links" ADD COLUMN "icon_type" "icon_type" DEFAULT 'link';
  ALTER TABLE "jobs" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "_breadcrumbs_v" ADD COLUMN "url" varchar;
  ALTER TABLE "_social_links_v" ADD COLUMN "icon_type" "icon_type" DEFAULT 'link';
  ALTER TABLE "_jobs_v" ADD COLUMN "url" varchar DEFAULT '#';
  ALTER TABLE "breadcrumbs" ADD CONSTRAINT "breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "social_links" ADD CONSTRAINT "social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "depts" ADD CONSTRAINT "depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_breadcrumbs_v" ADD CONSTRAINT "_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_social_links_v" ADD CONSTRAINT "_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_depts_v" ADD CONSTRAINT "_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "breadcrumbs" DROP COLUMN "link_type";
  ALTER TABLE "breadcrumbs" DROP COLUMN "link_new_tab";
  ALTER TABLE "breadcrumbs" DROP COLUMN "link_url";
  ALTER TABLE "social_links" DROP COLUMN "platform";
  ALTER TABLE "jobs" DROP COLUMN "link_type";
  ALTER TABLE "jobs" DROP COLUMN "link_new_tab";
  ALTER TABLE "jobs" DROP COLUMN "link_url";
  ALTER TABLE "_breadcrumbs_v" DROP COLUMN "link_type";
  ALTER TABLE "_breadcrumbs_v" DROP COLUMN "link_new_tab";
  ALTER TABLE "_breadcrumbs_v" DROP COLUMN "link_url";
  ALTER TABLE "_social_links_v" DROP COLUMN "platform";
  ALTER TABLE "_jobs_v" DROP COLUMN "link_type";
  ALTER TABLE "_jobs_v" DROP COLUMN "link_new_tab";
  ALTER TABLE "_jobs_v" DROP COLUMN "link_url";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner2_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner2_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_banner3_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform";
  DROP TYPE "public"."enum_breadcrumbs_link_type";
  DROP TYPE "public"."enum_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_button_variant";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_button_size";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_button_link_type";
  DROP TYPE "public"."enum_jobs_link_type";
  DROP TYPE "public"."enum_pages_blocks_contact1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact1_button_size";
  DROP TYPE "public"."enum_pages_blocks_contact5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact5_button_size";
  DROP TYPE "public"."enum_pages_blocks_cta1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta1_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq1_button_size";
  DROP TYPE "public"."enum_pages_blocks_faq1_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq5_button_size";
  DROP TYPE "public"."enum_pages_blocks_faq5_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer1_column_links_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer1_column_links_links_icon";
  DROP TYPE "public"."enum_pages_blocks_footer1_footer_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer1_logo_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer1_button_size";
  DROP TYPE "public"."enum_pages_blocks_footer1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_footer1_terms_and_conditions_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer5_column_links_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer5_social_media_links_icon";
  DROP TYPE "public"."enum_pages_blocks_footer5_footer_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer5_logo_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer5_button_size";
  DROP TYPE "public"."enum_pages_blocks_footer5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_footer5_terms_and_conditions_link_type";
  DROP TYPE "public"."enum_pages_blocks_multi_form2_nav_button_variant";
  DROP TYPE "public"."enum_pages_blocks_multi_form2_nav_button_size";
  DROP TYPE "public"."enum_pages_blocks_header44_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_header44_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_header48_button_size";
  DROP TYPE "public"."enum_pages_blocks_header48_button_variant";
  DROP TYPE "public"."enum_pages_blocks_layout1_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout1_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout5_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout5_buttons_link_appearance";
  DROP TYPE "public"."enum_links_4_categories_links_variant";
  DROP TYPE "public"."enum_links_4_social_links_platform";
  DROP TYPE "public"."enum_links_4_button_variant";
  DROP TYPE "public"."enum_sub_links_link_type";
  DROP TYPE "public"."enum_nav_links_link_type";
  DROP TYPE "public"."enum_btns_link_type";
  DROP TYPE "public"."enum_btns_size";
  DROP TYPE "public"."enum_btns_variant";
  DROP TYPE "public"."enum_cat_link_items_5_link_type";
  DROP TYPE "public"."enum_cat_link_items_5_button_size";
  DROP TYPE "public"."enum_cat_link_items_5_button_variant";
  DROP TYPE "public"."enum_featured_links_5_link_type";
  DROP TYPE "public"."enum_featured_links_5_button_size";
  DROP TYPE "public"."enum_featured_links_5_button_variant";
  DROP TYPE "public"."enum_nav_links_5_link_type";
  DROP TYPE "public"."enum_nav_links_5_mega_menu_button_size";
  DROP TYPE "public"."enum_nav_links_5_mega_menu_button_variant";
  DROP TYPE "public"."enum_nav_links_5_mega_menu_button_link_type";
  DROP TYPE "public"."enum_btns_5_size";
  DROP TYPE "public"."enum_btns_5_variant";
  DROP TYPE "public"."enum_btns_5_link_type";
  DROP TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_variant";
  DROP TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_size";
  DROP TYPE "public"."enum_pages_blocks_timeline3_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline7_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline7_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner2_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner2_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner3_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner3_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform";
  DROP TYPE "public"."enum__breadcrumbs_v_link_type";
  DROP TYPE "public"."enum__social_links_v_platform";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_link_type";
  DROP TYPE "public"."enum__jobs_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_contact5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_faq1_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_faq5_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_column_links_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_column_links_links_icon";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_footer_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_logo_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_footer1_terms_and_conditions_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_column_links_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_social_media_links_icon";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_footer_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_logo_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_footer5_terms_and_conditions_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_header44_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_header44_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_header48_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_header48_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout1_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout1_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_appearance";
  DROP TYPE "public"."enum__links_4_v_categories_links_variant";
  DROP TYPE "public"."enum__links_4_v_social_links_platform";
  DROP TYPE "public"."enum__links_4_v_button_variant";
  DROP TYPE "public"."enum__sub_links_v_link_type";
  DROP TYPE "public"."enum__nav_links_v_link_type";
  DROP TYPE "public"."enum__btns_v_link_type";
  DROP TYPE "public"."enum__btns_v_size";
  DROP TYPE "public"."enum__btns_v_variant";
  DROP TYPE "public"."enum__cat_link_items_5_v_link_type";
  DROP TYPE "public"."enum__cat_link_items_5_v_button_size";
  DROP TYPE "public"."enum__cat_link_items_5_v_button_variant";
  DROP TYPE "public"."enum__featured_links_5_v_link_type";
  DROP TYPE "public"."enum__featured_links_5_v_button_size";
  DROP TYPE "public"."enum__featured_links_5_v_button_variant";
  DROP TYPE "public"."enum__nav_links_5_v_link_type";
  DROP TYPE "public"."enum__nav_links_5_v_mega_menu_button_size";
  DROP TYPE "public"."enum__nav_links_5_v_mega_menu_button_variant";
  DROP TYPE "public"."enum__nav_links_5_v_mega_menu_button_link_type";
  DROP TYPE "public"."enum__btns_5_v_size";
  DROP TYPE "public"."enum__btns_5_v_variant";
  DROP TYPE "public"."enum__btns_5_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_size";
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
