import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact1_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact1_button_size" AS ENUM('default', 'sm', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact5_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact5_button_size" AS ENUM('sm', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta1_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta4_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_pages_blocks_cta4_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_cta9_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta9_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_4_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_4_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_4_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_4_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_5_filters_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_5_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
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
  CREATE TYPE "public"."enum_pages_blocks_header44_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header44_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_header48_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_header48_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_layout1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout5_buttons_link_appearance" AS ENUM('default', 'outline');
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
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_button_size" AS ENUM('default', 'sm', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact5_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact5_button_size" AS ENUM('sm', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta4_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__pages_v_blocks_cta4_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta9_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_4_v_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_4_v_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_4_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_4_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_5_v_filters_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_5_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
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
  CREATE TYPE "public"."enum__pages_v_blocks_header44_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header44_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_header48_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_header48_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_layout1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_appearance" AS ENUM('default', 'outline');
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
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'header1';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'header5';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'header1';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'header5';
  CREATE TABLE "pages_blocks_banner1" (
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
  
  CREATE TABLE "pages_blocks_blog7_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "pages_blocks_blog7_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar
  );
  
  CREATE TABLE "pages_blocks_blog7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_title" varchar,
  	"featured_blog_post_description" varchar,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"default_value" varchar DEFAULT 'view-all',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog9_small_featured_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "pages_blocks_blog9_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "pages_blocks_blog9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"featured_blog_iitle" varchar DEFAULT 'Featured blog posts',
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_title" varchar,
  	"featured_blog_post_description" varchar,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"latest_blog_title" varchar DEFAULT 'Latest blog posts',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_contact1" (
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
  
  CREATE TABLE "pages_blocks_contact5" (
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
  
  CREATE TABLE "pages_blocks_cta1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum_pages_blocks_cta1_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum_pages_blocks_cta1_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_cta1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_media_id" integer,
  	"image_alt" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_variant" "enum_pages_blocks_cta4_button_variant" DEFAULT 'default',
  	"button_size" "enum_pages_blocks_cta4_button_size" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta9_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum_pages_blocks_cta9_buttons_variant" DEFAULT 'primary',
  	"size" "enum_pages_blocks_cta9_buttons_size" DEFAULT 'default',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_cta9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Call to Action',
  	"variant" "enum_pages_blocks_cta5_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum_pages_blocks_cta5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_cta5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"video_youtube_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_4_featured_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"status" varchar,
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"title" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_title" varchar DEFAULT 'View event',
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum_evt_hdr_4_featured_events_button_variant" DEFAULT 'link',
  	"button_size" "enum_evt_hdr_4_featured_events_button_size" DEFAULT 'link'
  );
  
  CREATE TABLE "evt_hdr_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"event_url" varchar DEFAULT '#',
  	"event_image_id" integer,
  	"event_category" varchar DEFAULT 'Category',
  	"event_status" varchar,
  	"event_title" varchar DEFAULT 'Event title heading',
  	"event_date_weekday" varchar DEFAULT 'Wed',
  	"event_date_day" varchar DEFAULT '07',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_location" varchar DEFAULT 'Location',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"event_button_title" varchar DEFAULT 'View event',
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum_evt_hdr_4_event_button_variant" DEFAULT 'link',
  	"event_button_size" "enum_evt_hdr_4_event_button_size" DEFAULT 'link',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_5_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'View all',
  	"url" varchar DEFAULT '#',
  	"variant" "enum_evt_hdr_5_filters_variant" DEFAULT 'secondary',
  	"size" "enum_evt_hdr_5_filters_size" DEFAULT 'sm'
  );
  
  CREATE TABLE "evt_hdr_5_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"status" varchar,
  	"title" varchar DEFAULT 'Webinar title heading',
  	"duration" varchar DEFAULT '45',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  );
  
  CREATE TABLE "evt_hdr_5_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"back_link_url" varchar DEFAULT '#',
  	"back_link_button_title" varchar DEFAULT 'All events',
  	"back_link_button_variant" varchar DEFAULT 'link',
  	"back_link_button_size" varchar DEFAULT 'link',
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" varchar DEFAULT 'primary',
  	"button_size" varchar DEFAULT 'md',
  	"terms_and_conditions" jsonb,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar,
  	"countdown_iso_date" varchar DEFAULT '2024-11-14T01:23:29.000+01:00',
  	"amount_left" varchar DEFAULT '10',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq1_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb
  );
  
  CREATE TABLE "pages_blocks_faq1" (
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
  
  CREATE TABLE "pages_blocks_faq5_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb
  );
  
  CREATE TABLE "pages_blocks_faq5" (
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
  
  CREATE TABLE "pages_blocks_footer1_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer1_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum_pages_blocks_footer1_column_links_links_icon"
  );
  
  CREATE TABLE "pages_blocks_footer1_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_footer1_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer1_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_footer1" (
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
  
  CREATE TABLE "pages_blocks_footer5_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer5_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_footer5_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "pages_blocks_footer5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon" "enum_pages_blocks_footer5_social_media_links_icon"
  );
  
  CREATE TABLE "pages_blocks_footer5_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_pages_blocks_footer5_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_footer5" (
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
  
  CREATE TABLE "pages_blocks_header44_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_header44_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_header44_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_header44" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" jsonb,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_header48" (
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
  
  CREATE TABLE "pages_blocks_layout1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout1_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout1" (
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
  
  CREATE TABLE "pages_blocks_layout5_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_layout5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout5_buttons_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout5" (
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
  
  CREATE TABLE "sub_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_sub_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "btns" (
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
  
  CREATE TABLE "pages_blocks_navbar1" (
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
  
  CREATE TABLE "cat_link_items_5" (
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
  
  CREATE TABLE "cat_links_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "featured_links_5" (
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
  
  CREATE TABLE "nav_links_5" (
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
  
  CREATE TABLE "btns_5" (
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
  
  CREATE TABLE "pages_blocks_navbar5" (
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
  
  CREATE TABLE "pages_blocks_pricing1" (
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
  
  CREATE TABLE "pages_blocks_testimonial1" (
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
  
  CREATE TABLE "pages_blocks_testimonial5_testimonials" (
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
  
  CREATE TABLE "pages_blocks_testimonial5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner1" (
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
  
  CREATE TABLE "_pages_v_blocks_blog7_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog7_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_title" varchar,
  	"featured_blog_post_description" varchar,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"default_value" varchar DEFAULT 'view-all',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog9_blog_posts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"title" varchar,
  	"description" varchar,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"featured_blog_iitle" varchar DEFAULT 'Featured blog posts',
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_title" varchar,
  	"featured_blog_post_description" varchar,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"latest_blog_title" varchar DEFAULT 'Latest blog posts',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_contact1" (
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
  
  CREATE TABLE "_pages_v_blocks_contact5" (
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
  
  CREATE TABLE "_pages_v_blocks_cta1_buttons" (
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
  
  CREATE TABLE "_pages_v_blocks_cta1" (
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
  
  CREATE TABLE "_pages_v_blocks_cta4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_variant" "enum__pages_v_blocks_cta4_button_variant" DEFAULT 'default',
  	"button_size" "enum__pages_v_blocks_cta4_button_size" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta9_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__pages_v_blocks_cta9_buttons_variant" DEFAULT 'primary',
  	"size" "enum__pages_v_blocks_cta9_buttons_size" DEFAULT 'default',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta9" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta5_buttons" (
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
  
  CREATE TABLE "_pages_v_blocks_cta5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"video_youtube_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_4_v_featured_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"status" varchar,
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"title" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_title" varchar DEFAULT 'View event',
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum__evt_hdr_4_v_featured_events_button_variant" DEFAULT 'link',
  	"button_size" "enum__evt_hdr_4_v_featured_events_button_size" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_4_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"event_url" varchar DEFAULT '#',
  	"event_image_id" integer,
  	"event_category" varchar DEFAULT 'Category',
  	"event_status" varchar,
  	"event_title" varchar DEFAULT 'Event title heading',
  	"event_date_weekday" varchar DEFAULT 'Wed',
  	"event_date_day" varchar DEFAULT '07',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_location" varchar DEFAULT 'Location',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"event_button_title" varchar DEFAULT 'View event',
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum__evt_hdr_4_v_event_button_variant" DEFAULT 'link',
  	"event_button_size" "enum__evt_hdr_4_v_event_button_size" DEFAULT 'link',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_5_v_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'View all',
  	"url" varchar DEFAULT '#',
  	"variant" "enum__evt_hdr_5_v_filters_variant" DEFAULT 'secondary',
  	"size" "enum__evt_hdr_5_v_filters_size" DEFAULT 'sm',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_5_v_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"status" varchar,
  	"title" varchar DEFAULT 'Webinar title heading',
  	"duration" varchar DEFAULT '45',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_5_v_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"back_link_url" varchar DEFAULT '#',
  	"back_link_button_title" varchar DEFAULT 'All events',
  	"back_link_button_variant" varchar DEFAULT 'link',
  	"back_link_button_size" varchar DEFAULT 'link',
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" varchar DEFAULT 'primary',
  	"button_size" varchar DEFAULT 'md',
  	"terms_and_conditions" jsonb,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar,
  	"countdown_iso_date" varchar DEFAULT '2024-11-14T01:23:29.000+01:00',
  	"amount_left" varchar DEFAULT '10',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq1_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq1" (
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
  
  CREATE TABLE "_pages_v_blocks_faq5_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Frequently asked question',
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq5" (
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
  
  CREATE TABLE "_pages_v_blocks_footer1_column_links_links" (
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
  
  CREATE TABLE "_pages_v_blocks_footer1_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer1_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer1_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer1" (
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
  
  CREATE TABLE "_pages_v_blocks_footer5_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer5_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer5_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon" "enum__pages_v_blocks_footer5_social_media_links_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer5_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum__pages_v_blocks_footer5_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer5" (
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
  
  CREATE TABLE "_pages_v_blocks_header44_links" (
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
  
  CREATE TABLE "_pages_v_blocks_header44" (
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
  
  CREATE TABLE "_pages_v_blocks_header48" (
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
  
  CREATE TABLE "_pages_v_blocks_layout1_links" (
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
  
  CREATE TABLE "_pages_v_blocks_layout1" (
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
  
  CREATE TABLE "_pages_v_blocks_layout5_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout5_buttons" (
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
  
  CREATE TABLE "_pages_v_blocks_layout5" (
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
  
  CREATE TABLE "_sub_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum__sub_links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_nav_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum__nav_links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_btns_v" (
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
  
  CREATE TABLE "_pages_v_blocks_navbar1" (
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
  
  CREATE TABLE "_cat_link_items_5_v" (
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
  
  CREATE TABLE "_cat_links_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_featured_links_5_v" (
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
  
  CREATE TABLE "_nav_links_5_v" (
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
  
  CREATE TABLE "_btns_5_v" (
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
  
  CREATE TABLE "_pages_v_blocks_navbar5" (
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
  
  CREATE TABLE "_pages_v_blocks_pricing1" (
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
  
  CREATE TABLE "_pages_v_blocks_testimonial1" (
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
  
  CREATE TABLE "_pages_v_blocks_testimonial5_testimonials" (
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
  
  CREATE TABLE "_pages_v_blocks_testimonial5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "evt_hdr_5" DROP CONSTRAINT "evt_hdr_5_image_id_media_id_fk";
  
  ALTER TABLE "_evt_hdr_5_v" DROP CONSTRAINT "_evt_hdr_5_v_image_id_media_id_fk";
  
  DROP INDEX "evt_hdr_5_image_idx";
  DROP INDEX "_evt_hdr_5_v_image_idx";
  ALTER TABLE "evt_hdr_5" ALTER COLUMN "heading" SET DEFAULT 'Webinars';
  ALTER TABLE "_evt_hdr_5_v" ALTER COLUMN "heading" SET DEFAULT 'Webinars';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "tagline" varchar DEFAULT 'Tagline';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_image_id" integer;
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_category" varchar DEFAULT 'Category';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_status" varchar;
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_title" varchar DEFAULT 'Webinar title heading';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_date_weekday" varchar DEFAULT 'Sat';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_date_day" varchar DEFAULT '10';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_date_month" varchar DEFAULT 'Feb';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_date_year" varchar DEFAULT '2024';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_button_title" varchar DEFAULT 'Save my spot';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_button_url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_button_variant" "enum_evt_hdr_5_event_button_variant" DEFAULT 'secondary';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "event_button_size" "enum_evt_hdr_5_event_button_size" DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "tagline" varchar DEFAULT 'Tagline';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_image_id" integer;
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_category" varchar DEFAULT 'Category';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_status" varchar;
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_title" varchar DEFAULT 'Webinar title heading';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_date_weekday" varchar DEFAULT 'Sat';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_date_day" varchar DEFAULT '10';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_date_month" varchar DEFAULT 'Feb';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_date_year" varchar DEFAULT '2024';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_button_title" varchar DEFAULT 'Save my spot';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_button_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_button_variant" "enum__evt_hdr_5_v_event_button_variant" DEFAULT 'secondary';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "event_button_size" "enum__evt_hdr_5_v_event_button_size" DEFAULT 'primary';
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7_tabs_content" ADD CONSTRAINT "pages_blocks_blog7_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7_tabs_content" ADD CONSTRAINT "pages_blocks_blog7_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7_tabs_content" ADD CONSTRAINT "pages_blocks_blog7_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog7_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7_tabs" ADD CONSTRAINT "pages_blocks_blog7_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7" ADD CONSTRAINT "pages_blocks_blog7_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7" ADD CONSTRAINT "pages_blocks_blog7_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog7" ADD CONSTRAINT "pages_blocks_blog7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9_small_featured_blog_posts" ADD CONSTRAINT "pages_blocks_blog9_small_featured_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9_small_featured_blog_posts" ADD CONSTRAINT "pages_blocks_blog9_small_featured_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9_small_featured_blog_posts" ADD CONSTRAINT "pages_blocks_blog9_small_featured_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9_blog_posts" ADD CONSTRAINT "pages_blocks_blog9_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9_blog_posts" ADD CONSTRAINT "pages_blocks_blog9_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9_blog_posts" ADD CONSTRAINT "pages_blocks_blog9_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9" ADD CONSTRAINT "pages_blocks_blog9_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9" ADD CONSTRAINT "pages_blocks_blog9_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog9" ADD CONSTRAINT "pages_blocks_blog9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact1" ADD CONSTRAINT "pages_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact5" ADD CONSTRAINT "pages_blocks_contact5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_buttons" ADD CONSTRAINT "pages_blocks_cta1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta4" ADD CONSTRAINT "pages_blocks_cta4_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta4" ADD CONSTRAINT "pages_blocks_cta4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta9_buttons" ADD CONSTRAINT "pages_blocks_cta9_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta9" ADD CONSTRAINT "pages_blocks_cta9_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta9" ADD CONSTRAINT "pages_blocks_cta9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta5_buttons" ADD CONSTRAINT "pages_blocks_cta5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta5" ADD CONSTRAINT "pages_blocks_cta5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_4_featured_events" ADD CONSTRAINT "evt_hdr_4_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_4" ADD CONSTRAINT "evt_hdr_4_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_4" ADD CONSTRAINT "evt_hdr_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_filters" ADD CONSTRAINT "evt_hdr_5_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_events" ADD CONSTRAINT "evt_hdr_5_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_2" ADD CONSTRAINT "evt_hdr_5_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_2" ADD CONSTRAINT "evt_hdr_5_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog7_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog7_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog7_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog7_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7_tabs" ADD CONSTRAINT "_pages_v_blocks_blog7_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7" ADD CONSTRAINT "_pages_v_blocks_blog7_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7" ADD CONSTRAINT "_pages_v_blocks_blog7_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog7" ADD CONSTRAINT "_pages_v_blocks_blog7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog9_small_featured_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog9_small_featured_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog9_small_featured_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog9_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog9_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog9_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9" ADD CONSTRAINT "_pages_v_blocks_blog9_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9" ADD CONSTRAINT "_pages_v_blocks_blog9_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog9" ADD CONSTRAINT "_pages_v_blocks_blog9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact1" ADD CONSTRAINT "_pages_v_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact5" ADD CONSTRAINT "_pages_v_blocks_contact5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_buttons" ADD CONSTRAINT "_pages_v_blocks_cta1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta4" ADD CONSTRAINT "_pages_v_blocks_cta4_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta4" ADD CONSTRAINT "_pages_v_blocks_cta4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ADD CONSTRAINT "_pages_v_blocks_cta9_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta9" ADD CONSTRAINT "_pages_v_blocks_cta9_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta9" ADD CONSTRAINT "_pages_v_blocks_cta9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ADD CONSTRAINT "_pages_v_blocks_cta5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta5" ADD CONSTRAINT "_pages_v_blocks_cta5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_4_v_featured_events" ADD CONSTRAINT "_evt_hdr_4_v_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_4_v" ADD CONSTRAINT "_evt_hdr_4_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_4_v" ADD CONSTRAINT "_evt_hdr_4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_filters" ADD CONSTRAINT "_evt_hdr_5_v_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_events" ADD CONSTRAINT "_evt_hdr_5_v_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_2" ADD CONSTRAINT "_evt_hdr_5_v_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_2" ADD CONSTRAINT "_evt_hdr_5_v_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX "pages_blocks_banner1_order_idx" ON "pages_blocks_banner1" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner1_parent_id_idx" ON "pages_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner1_path_idx" ON "pages_blocks_banner1" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog7_tabs_content_order_idx" ON "pages_blocks_blog7_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog7_tabs_content_parent_id_idx" ON "pages_blocks_blog7_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog7_tabs_content_image_idx" ON "pages_blocks_blog7_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog7_tabs_content_avatar_idx" ON "pages_blocks_blog7_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog7_tabs_order_idx" ON "pages_blocks_blog7_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog7_tabs_parent_id_idx" ON "pages_blocks_blog7_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog7_order_idx" ON "pages_blocks_blog7" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog7_parent_id_idx" ON "pages_blocks_blog7" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog7_path_idx" ON "pages_blocks_blog7" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog7_featured_blog_post_featured_blog_post_image_idx" ON "pages_blocks_blog7" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "pages_blocks_blog7_featured_blog_post_featured_blog_post_avatar_idx" ON "pages_blocks_blog7" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "pages_blocks_blog9_small_featured_blog_posts_order_idx" ON "pages_blocks_blog9_small_featured_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog9_small_featured_blog_posts_parent_id_idx" ON "pages_blocks_blog9_small_featured_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog9_small_featured_blog_posts_image_idx" ON "pages_blocks_blog9_small_featured_blog_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog9_small_featured_blog_posts_avatar_idx" ON "pages_blocks_blog9_small_featured_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog9_blog_posts_order_idx" ON "pages_blocks_blog9_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog9_blog_posts_parent_id_idx" ON "pages_blocks_blog9_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog9_blog_posts_image_idx" ON "pages_blocks_blog9_blog_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog9_blog_posts_avatar_idx" ON "pages_blocks_blog9_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog9_order_idx" ON "pages_blocks_blog9" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog9_parent_id_idx" ON "pages_blocks_blog9" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog9_path_idx" ON "pages_blocks_blog9" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog9_featured_blog_post_featured_blog_post_image_idx" ON "pages_blocks_blog9" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "pages_blocks_blog9_featured_blog_post_featured_blog_post_avatar_idx" ON "pages_blocks_blog9" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "pages_blocks_contact1_order_idx" ON "pages_blocks_contact1" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact1_parent_id_idx" ON "pages_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact1_path_idx" ON "pages_blocks_contact1" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact5_order_idx" ON "pages_blocks_contact5" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact5_parent_id_idx" ON "pages_blocks_contact5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact5_path_idx" ON "pages_blocks_contact5" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta1_buttons_order_idx" ON "pages_blocks_cta1_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta1_buttons_parent_id_idx" ON "pages_blocks_cta1_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta1_order_idx" ON "pages_blocks_cta1" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta1_parent_id_idx" ON "pages_blocks_cta1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta1_path_idx" ON "pages_blocks_cta1" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta1_image_image_media_idx" ON "pages_blocks_cta1" USING btree ("image_media_id");
  CREATE INDEX "pages_blocks_cta4_order_idx" ON "pages_blocks_cta4" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta4_parent_id_idx" ON "pages_blocks_cta4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta4_path_idx" ON "pages_blocks_cta4" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta4_image_idx" ON "pages_blocks_cta4" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cta9_buttons_order_idx" ON "pages_blocks_cta9_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta9_buttons_parent_id_idx" ON "pages_blocks_cta9_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta9_order_idx" ON "pages_blocks_cta9" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta9_parent_id_idx" ON "pages_blocks_cta9" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta9_path_idx" ON "pages_blocks_cta9" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta9_image_idx" ON "pages_blocks_cta9" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cta5_buttons_order_idx" ON "pages_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta5_buttons_parent_id_idx" ON "pages_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta5_order_idx" ON "pages_blocks_cta5" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta5_parent_id_idx" ON "pages_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta5_path_idx" ON "pages_blocks_cta5" USING btree ("_path");
  CREATE INDEX "evt_hdr_4_featured_events_order_idx" ON "evt_hdr_4_featured_events" USING btree ("_order");
  CREATE INDEX "evt_hdr_4_featured_events_parent_id_idx" ON "evt_hdr_4_featured_events" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_4_order_idx" ON "evt_hdr_4" USING btree ("_order");
  CREATE INDEX "evt_hdr_4_parent_id_idx" ON "evt_hdr_4" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_4_path_idx" ON "evt_hdr_4" USING btree ("_path");
  CREATE INDEX "evt_hdr_4_event_event_image_idx" ON "evt_hdr_4" USING btree ("event_image_id");
  CREATE INDEX "evt_hdr_5_filters_order_idx" ON "evt_hdr_5_filters" USING btree ("_order");
  CREATE INDEX "evt_hdr_5_filters_parent_id_idx" ON "evt_hdr_5_filters" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_5_events_order_idx" ON "evt_hdr_5_events" USING btree ("_order");
  CREATE INDEX "evt_hdr_5_events_parent_id_idx" ON "evt_hdr_5_events" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_5_2_order_idx" ON "evt_hdr_5_2" USING btree ("_order");
  CREATE INDEX "evt_hdr_5_2_parent_id_idx" ON "evt_hdr_5_2" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_5_2_path_idx" ON "evt_hdr_5_2" USING btree ("_path");
  CREATE INDEX "evt_hdr_5_2_image_idx" ON "evt_hdr_5_2" USING btree ("image_id");
  CREATE INDEX "pages_blocks_faq1_questions_order_idx" ON "pages_blocks_faq1_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq1_questions_parent_id_idx" ON "pages_blocks_faq1_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq1_order_idx" ON "pages_blocks_faq1" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq1_parent_id_idx" ON "pages_blocks_faq1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq1_path_idx" ON "pages_blocks_faq1" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq5_questions_order_idx" ON "pages_blocks_faq5_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq5_questions_parent_id_idx" ON "pages_blocks_faq5_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq5_order_idx" ON "pages_blocks_faq5" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq5_parent_id_idx" ON "pages_blocks_faq5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq5_path_idx" ON "pages_blocks_faq5" USING btree ("_path");
  CREATE INDEX "pages_blocks_footer1_column_links_links_order_idx" ON "pages_blocks_footer1_column_links_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer1_column_links_links_parent_id_idx" ON "pages_blocks_footer1_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer1_column_links_order_idx" ON "pages_blocks_footer1_column_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer1_column_links_parent_id_idx" ON "pages_blocks_footer1_column_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer1_footer_links_order_idx" ON "pages_blocks_footer1_footer_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer1_footer_links_parent_id_idx" ON "pages_blocks_footer1_footer_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer1_order_idx" ON "pages_blocks_footer1" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer1_parent_id_idx" ON "pages_blocks_footer1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer1_path_idx" ON "pages_blocks_footer1" USING btree ("_path");
  CREATE INDEX "pages_blocks_footer1_logo_logo_media_idx" ON "pages_blocks_footer1" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_footer5_column_links_links_order_idx" ON "pages_blocks_footer5_column_links_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer5_column_links_links_parent_id_idx" ON "pages_blocks_footer5_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer5_column_links_order_idx" ON "pages_blocks_footer5_column_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer5_column_links_parent_id_idx" ON "pages_blocks_footer5_column_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer5_social_media_links_order_idx" ON "pages_blocks_footer5_social_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer5_social_media_links_parent_id_idx" ON "pages_blocks_footer5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer5_footer_links_order_idx" ON "pages_blocks_footer5_footer_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer5_footer_links_parent_id_idx" ON "pages_blocks_footer5_footer_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer5_order_idx" ON "pages_blocks_footer5" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer5_parent_id_idx" ON "pages_blocks_footer5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer5_path_idx" ON "pages_blocks_footer5" USING btree ("_path");
  CREATE INDEX "pages_blocks_footer5_logo_logo_media_idx" ON "pages_blocks_footer5" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_header44_links_order_idx" ON "pages_blocks_header44_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_header44_links_parent_id_idx" ON "pages_blocks_header44_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_header44_order_idx" ON "pages_blocks_header44" USING btree ("_order");
  CREATE INDEX "pages_blocks_header44_parent_id_idx" ON "pages_blocks_header44" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_header44_path_idx" ON "pages_blocks_header44" USING btree ("_path");
  CREATE INDEX "pages_blocks_header48_order_idx" ON "pages_blocks_header48" USING btree ("_order");
  CREATE INDEX "pages_blocks_header48_parent_id_idx" ON "pages_blocks_header48" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_header48_path_idx" ON "pages_blocks_header48" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout1_links_order_idx" ON "pages_blocks_layout1_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout1_links_parent_id_idx" ON "pages_blocks_layout1_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout1_order_idx" ON "pages_blocks_layout1" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout1_parent_id_idx" ON "pages_blocks_layout1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout1_path_idx" ON "pages_blocks_layout1" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout1_media_idx" ON "pages_blocks_layout1" USING btree ("media_id");
  CREATE INDEX "pages_blocks_layout5_sub_headings_order_idx" ON "pages_blocks_layout5_sub_headings" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout5_sub_headings_parent_id_idx" ON "pages_blocks_layout5_sub_headings" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout5_buttons_order_idx" ON "pages_blocks_layout5_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout5_buttons_parent_id_idx" ON "pages_blocks_layout5_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout5_order_idx" ON "pages_blocks_layout5" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout5_parent_id_idx" ON "pages_blocks_layout5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout5_path_idx" ON "pages_blocks_layout5" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout5_image_idx" ON "pages_blocks_layout5" USING btree ("image_id");
  CREATE INDEX "sub_links_order_idx" ON "sub_links" USING btree ("_order");
  CREATE INDEX "sub_links_parent_id_idx" ON "sub_links" USING btree ("_parent_id");
  CREATE INDEX "nav_links_order_idx" ON "nav_links" USING btree ("_order");
  CREATE INDEX "nav_links_parent_id_idx" ON "nav_links" USING btree ("_parent_id");
  CREATE INDEX "btns_order_idx" ON "btns" USING btree ("_order");
  CREATE INDEX "btns_parent_id_idx" ON "btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_navbar1_order_idx" ON "pages_blocks_navbar1" USING btree ("_order");
  CREATE INDEX "pages_blocks_navbar1_parent_id_idx" ON "pages_blocks_navbar1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_navbar1_path_idx" ON "pages_blocks_navbar1" USING btree ("_path");
  CREATE INDEX "pages_blocks_navbar1_logo_logo_media_idx" ON "pages_blocks_navbar1" USING btree ("logo_media_id");
  CREATE INDEX "cat_link_items_5_order_idx" ON "cat_link_items_5" USING btree ("_order");
  CREATE INDEX "cat_link_items_5_parent_id_idx" ON "cat_link_items_5" USING btree ("_parent_id");
  CREATE INDEX "cat_links_5_order_idx" ON "cat_links_5" USING btree ("_order");
  CREATE INDEX "cat_links_5_parent_id_idx" ON "cat_links_5" USING btree ("_parent_id");
  CREATE INDEX "featured_links_5_order_idx" ON "featured_links_5" USING btree ("_order");
  CREATE INDEX "featured_links_5_parent_id_idx" ON "featured_links_5" USING btree ("_parent_id");
  CREATE INDEX "nav_links_5_order_idx" ON "nav_links_5" USING btree ("_order");
  CREATE INDEX "nav_links_5_parent_id_idx" ON "nav_links_5" USING btree ("_parent_id");
  CREATE INDEX "btns_5_order_idx" ON "btns_5" USING btree ("_order");
  CREATE INDEX "btns_5_parent_id_idx" ON "btns_5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_navbar5_order_idx" ON "pages_blocks_navbar5" USING btree ("_order");
  CREATE INDEX "pages_blocks_navbar5_parent_id_idx" ON "pages_blocks_navbar5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_navbar5_path_idx" ON "pages_blocks_navbar5" USING btree ("_path");
  CREATE INDEX "pages_blocks_navbar5_logo_logo_media_idx" ON "pages_blocks_navbar5" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_pricing1_order_idx" ON "pages_blocks_pricing1" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing1_parent_id_idx" ON "pages_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing1_path_idx" ON "pages_blocks_pricing1" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial1_order_idx" ON "pages_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial1_parent_id_idx" ON "pages_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial1_path_idx" ON "pages_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial1_logo_logo_media_idx" ON "pages_blocks_testimonial1" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_testimonial1_avatar_avatar_media_idx" ON "pages_blocks_testimonial1" USING btree ("avatar_media_id");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_order_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_parent_id_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_avatar_avatar_media_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("avatar_media_id");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_logo_logo_media_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_testimonial5_order_idx" ON "pages_blocks_testimonial5" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial5_parent_id_idx" ON "pages_blocks_testimonial5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial5_path_idx" ON "pages_blocks_testimonial5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner1_order_idx" ON "_pages_v_blocks_banner1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner1_parent_id_idx" ON "_pages_v_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner1_path_idx" ON "_pages_v_blocks_banner1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog7_tabs_content_order_idx" ON "_pages_v_blocks_blog7_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog7_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog7_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog7_tabs_content_image_idx" ON "_pages_v_blocks_blog7_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog7_tabs_content_avatar_idx" ON "_pages_v_blocks_blog7_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog7_tabs_order_idx" ON "_pages_v_blocks_blog7_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog7_tabs_parent_id_idx" ON "_pages_v_blocks_blog7_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog7_order_idx" ON "_pages_v_blocks_blog7" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog7_parent_id_idx" ON "_pages_v_blocks_blog7" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog7_path_idx" ON "_pages_v_blocks_blog7" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog7_featured_blog_post_featured_blog_post_image_idx" ON "_pages_v_blocks_blog7" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "_pages_v_blocks_blog7_featured_blog_post_featured_blog_post_avatar_idx" ON "_pages_v_blocks_blog7" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "_pages_v_blocks_blog9_small_featured_blog_posts_order_idx" ON "_pages_v_blocks_blog9_small_featured_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog9_small_featured_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog9_small_featured_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog9_small_featured_blog_posts_image_idx" ON "_pages_v_blocks_blog9_small_featured_blog_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog9_small_featured_blog_posts_avatar_idx" ON "_pages_v_blocks_blog9_small_featured_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog9_blog_posts_order_idx" ON "_pages_v_blocks_blog9_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog9_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog9_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog9_blog_posts_image_idx" ON "_pages_v_blocks_blog9_blog_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog9_blog_posts_avatar_idx" ON "_pages_v_blocks_blog9_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog9_order_idx" ON "_pages_v_blocks_blog9" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog9_parent_id_idx" ON "_pages_v_blocks_blog9" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog9_path_idx" ON "_pages_v_blocks_blog9" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog9_featured_blog_post_featured_blog_post_image_idx" ON "_pages_v_blocks_blog9" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "_pages_v_blocks_blog9_featured_blog_post_featured_blog_post_avatar_idx" ON "_pages_v_blocks_blog9" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "_pages_v_blocks_contact1_order_idx" ON "_pages_v_blocks_contact1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact1_parent_id_idx" ON "_pages_v_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact1_path_idx" ON "_pages_v_blocks_contact1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact5_order_idx" ON "_pages_v_blocks_contact5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact5_parent_id_idx" ON "_pages_v_blocks_contact5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact5_path_idx" ON "_pages_v_blocks_contact5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta1_buttons_order_idx" ON "_pages_v_blocks_cta1_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta1_buttons_parent_id_idx" ON "_pages_v_blocks_cta1_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta1_order_idx" ON "_pages_v_blocks_cta1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta1_parent_id_idx" ON "_pages_v_blocks_cta1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta1_path_idx" ON "_pages_v_blocks_cta1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta1_image_image_media_idx" ON "_pages_v_blocks_cta1" USING btree ("image_media_id");
  CREATE INDEX "_pages_v_blocks_cta4_order_idx" ON "_pages_v_blocks_cta4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta4_parent_id_idx" ON "_pages_v_blocks_cta4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta4_path_idx" ON "_pages_v_blocks_cta4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta4_image_idx" ON "_pages_v_blocks_cta4" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cta9_buttons_order_idx" ON "_pages_v_blocks_cta9_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta9_buttons_parent_id_idx" ON "_pages_v_blocks_cta9_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta9_order_idx" ON "_pages_v_blocks_cta9" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta9_parent_id_idx" ON "_pages_v_blocks_cta9" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta9_path_idx" ON "_pages_v_blocks_cta9" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta9_image_idx" ON "_pages_v_blocks_cta9" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cta5_buttons_order_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta5_buttons_parent_id_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta5_order_idx" ON "_pages_v_blocks_cta5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta5_parent_id_idx" ON "_pages_v_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta5_path_idx" ON "_pages_v_blocks_cta5" USING btree ("_path");
  CREATE INDEX "_evt_hdr_4_v_featured_events_order_idx" ON "_evt_hdr_4_v_featured_events" USING btree ("_order");
  CREATE INDEX "_evt_hdr_4_v_featured_events_parent_id_idx" ON "_evt_hdr_4_v_featured_events" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_4_v_order_idx" ON "_evt_hdr_4_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_4_v_parent_id_idx" ON "_evt_hdr_4_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_4_v_path_idx" ON "_evt_hdr_4_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_4_v_event_event_image_idx" ON "_evt_hdr_4_v" USING btree ("event_image_id");
  CREATE INDEX "_evt_hdr_5_v_filters_order_idx" ON "_evt_hdr_5_v_filters" USING btree ("_order");
  CREATE INDEX "_evt_hdr_5_v_filters_parent_id_idx" ON "_evt_hdr_5_v_filters" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_5_v_events_order_idx" ON "_evt_hdr_5_v_events" USING btree ("_order");
  CREATE INDEX "_evt_hdr_5_v_events_parent_id_idx" ON "_evt_hdr_5_v_events" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_5_v_2_order_idx" ON "_evt_hdr_5_v_2" USING btree ("_order");
  CREATE INDEX "_evt_hdr_5_v_2_parent_id_idx" ON "_evt_hdr_5_v_2" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_5_v_2_path_idx" ON "_evt_hdr_5_v_2" USING btree ("_path");
  CREATE INDEX "_evt_hdr_5_v_2_image_idx" ON "_evt_hdr_5_v_2" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_faq1_questions_order_idx" ON "_pages_v_blocks_faq1_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq1_questions_parent_id_idx" ON "_pages_v_blocks_faq1_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq1_order_idx" ON "_pages_v_blocks_faq1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq1_parent_id_idx" ON "_pages_v_blocks_faq1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq1_path_idx" ON "_pages_v_blocks_faq1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq5_questions_order_idx" ON "_pages_v_blocks_faq5_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq5_questions_parent_id_idx" ON "_pages_v_blocks_faq5_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq5_order_idx" ON "_pages_v_blocks_faq5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq5_parent_id_idx" ON "_pages_v_blocks_faq5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq5_path_idx" ON "_pages_v_blocks_faq5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_footer1_column_links_links_order_idx" ON "_pages_v_blocks_footer1_column_links_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer1_column_links_links_parent_id_idx" ON "_pages_v_blocks_footer1_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer1_column_links_order_idx" ON "_pages_v_blocks_footer1_column_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer1_column_links_parent_id_idx" ON "_pages_v_blocks_footer1_column_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer1_footer_links_order_idx" ON "_pages_v_blocks_footer1_footer_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer1_footer_links_parent_id_idx" ON "_pages_v_blocks_footer1_footer_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer1_order_idx" ON "_pages_v_blocks_footer1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer1_parent_id_idx" ON "_pages_v_blocks_footer1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer1_path_idx" ON "_pages_v_blocks_footer1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_footer1_logo_logo_media_idx" ON "_pages_v_blocks_footer1" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_footer5_column_links_links_order_idx" ON "_pages_v_blocks_footer5_column_links_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer5_column_links_links_parent_id_idx" ON "_pages_v_blocks_footer5_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer5_column_links_order_idx" ON "_pages_v_blocks_footer5_column_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer5_column_links_parent_id_idx" ON "_pages_v_blocks_footer5_column_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer5_social_media_links_order_idx" ON "_pages_v_blocks_footer5_social_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer5_social_media_links_parent_id_idx" ON "_pages_v_blocks_footer5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer5_footer_links_order_idx" ON "_pages_v_blocks_footer5_footer_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer5_footer_links_parent_id_idx" ON "_pages_v_blocks_footer5_footer_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer5_order_idx" ON "_pages_v_blocks_footer5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer5_parent_id_idx" ON "_pages_v_blocks_footer5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer5_path_idx" ON "_pages_v_blocks_footer5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_footer5_logo_logo_media_idx" ON "_pages_v_blocks_footer5" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_header44_links_order_idx" ON "_pages_v_blocks_header44_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_header44_links_parent_id_idx" ON "_pages_v_blocks_header44_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_header44_order_idx" ON "_pages_v_blocks_header44" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_header44_parent_id_idx" ON "_pages_v_blocks_header44" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_header44_path_idx" ON "_pages_v_blocks_header44" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_header48_order_idx" ON "_pages_v_blocks_header48" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_header48_parent_id_idx" ON "_pages_v_blocks_header48" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_header48_path_idx" ON "_pages_v_blocks_header48" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout1_links_order_idx" ON "_pages_v_blocks_layout1_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout1_links_parent_id_idx" ON "_pages_v_blocks_layout1_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout1_order_idx" ON "_pages_v_blocks_layout1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout1_parent_id_idx" ON "_pages_v_blocks_layout1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout1_path_idx" ON "_pages_v_blocks_layout1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout1_media_idx" ON "_pages_v_blocks_layout1" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_layout5_sub_headings_order_idx" ON "_pages_v_blocks_layout5_sub_headings" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout5_sub_headings_parent_id_idx" ON "_pages_v_blocks_layout5_sub_headings" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout5_buttons_order_idx" ON "_pages_v_blocks_layout5_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout5_buttons_parent_id_idx" ON "_pages_v_blocks_layout5_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout5_order_idx" ON "_pages_v_blocks_layout5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout5_parent_id_idx" ON "_pages_v_blocks_layout5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout5_path_idx" ON "_pages_v_blocks_layout5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout5_image_idx" ON "_pages_v_blocks_layout5" USING btree ("image_id");
  CREATE INDEX "_sub_links_v_order_idx" ON "_sub_links_v" USING btree ("_order");
  CREATE INDEX "_sub_links_v_parent_id_idx" ON "_sub_links_v" USING btree ("_parent_id");
  CREATE INDEX "_nav_links_v_order_idx" ON "_nav_links_v" USING btree ("_order");
  CREATE INDEX "_nav_links_v_parent_id_idx" ON "_nav_links_v" USING btree ("_parent_id");
  CREATE INDEX "_btns_v_order_idx" ON "_btns_v" USING btree ("_order");
  CREATE INDEX "_btns_v_parent_id_idx" ON "_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_navbar1_order_idx" ON "_pages_v_blocks_navbar1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_navbar1_parent_id_idx" ON "_pages_v_blocks_navbar1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_navbar1_path_idx" ON "_pages_v_blocks_navbar1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_navbar1_logo_logo_media_idx" ON "_pages_v_blocks_navbar1" USING btree ("logo_media_id");
  CREATE INDEX "_cat_link_items_5_v_order_idx" ON "_cat_link_items_5_v" USING btree ("_order");
  CREATE INDEX "_cat_link_items_5_v_parent_id_idx" ON "_cat_link_items_5_v" USING btree ("_parent_id");
  CREATE INDEX "_cat_links_5_v_order_idx" ON "_cat_links_5_v" USING btree ("_order");
  CREATE INDEX "_cat_links_5_v_parent_id_idx" ON "_cat_links_5_v" USING btree ("_parent_id");
  CREATE INDEX "_featured_links_5_v_order_idx" ON "_featured_links_5_v" USING btree ("_order");
  CREATE INDEX "_featured_links_5_v_parent_id_idx" ON "_featured_links_5_v" USING btree ("_parent_id");
  CREATE INDEX "_nav_links_5_v_order_idx" ON "_nav_links_5_v" USING btree ("_order");
  CREATE INDEX "_nav_links_5_v_parent_id_idx" ON "_nav_links_5_v" USING btree ("_parent_id");
  CREATE INDEX "_btns_5_v_order_idx" ON "_btns_5_v" USING btree ("_order");
  CREATE INDEX "_btns_5_v_parent_id_idx" ON "_btns_5_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_navbar5_order_idx" ON "_pages_v_blocks_navbar5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_navbar5_parent_id_idx" ON "_pages_v_blocks_navbar5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_navbar5_path_idx" ON "_pages_v_blocks_navbar5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_navbar5_logo_logo_media_idx" ON "_pages_v_blocks_navbar5" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_pricing1_order_idx" ON "_pages_v_blocks_pricing1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing1_parent_id_idx" ON "_pages_v_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing1_path_idx" ON "_pages_v_blocks_pricing1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial1_order_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial1_parent_id_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial1_path_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial1_logo_logo_media_idx" ON "_pages_v_blocks_testimonial1" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial1_avatar_avatar_media_idx" ON "_pages_v_blocks_testimonial1" USING btree ("avatar_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_order_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_avatar_avatar_media_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("avatar_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_logo_logo_media_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_order_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial5_parent_id_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_path_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_path");
  ALTER TABLE "evt_hdr_5" ADD CONSTRAINT "evt_hdr_5_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v" ADD CONSTRAINT "_evt_hdr_5_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "evt_hdr_5_event_event_image_idx" ON "evt_hdr_5" USING btree ("event_image_id");
  CREATE INDEX "_evt_hdr_5_v_event_event_image_idx" ON "_evt_hdr_5_v" USING btree ("event_image_id");
  ALTER TABLE "evt_hdr_5" DROP COLUMN "back_link_url";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "back_link_button_title";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "back_link_button_variant";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "back_link_button_size";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "image_id";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "input_placeholder";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "button_title";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "button_variant";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "button_size";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "terms_and_conditions";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "date_weekday";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "date_day";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "date_month";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "date_year";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "countdown_iso_date";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "amount_left";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "back_link_url";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "back_link_button_title";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "back_link_button_variant";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "back_link_button_size";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "image_id";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "input_placeholder";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "button_title";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "button_variant";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "button_size";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "terms_and_conditions";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "date_weekday";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "date_day";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "date_month";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "date_year";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "countdown_iso_date";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "amount_left";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_banner1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog7_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog7_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog9_small_featured_blog_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog9_blog_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_blog9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_contact1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_contact5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta1_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta9_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_cta5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "evt_hdr_4_featured_events" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "evt_hdr_4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "evt_hdr_5_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "evt_hdr_5_events" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "evt_hdr_5_2" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "pages_blocks_header44_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_header44" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_header48" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout1_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout5_sub_headings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_layout5" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "_pages_v_blocks_banner1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog7_tabs_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog7_tabs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog7" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog9_blog_posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_blog9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_contact5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta1_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta4" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta9_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta9" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_cta5" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_evt_hdr_4_v_featured_events" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_evt_hdr_4_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_evt_hdr_5_v_filters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_evt_hdr_5_v_events" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_evt_hdr_5_v_2" DISABLE ROW LEVEL SECURITY;
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
  ALTER TABLE "_pages_v_blocks_header44_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_header44" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_header48" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout1_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout1" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout5_sub_headings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout5_buttons" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_layout5" DISABLE ROW LEVEL SECURITY;
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
  DROP TABLE "pages_blocks_banner1" CASCADE;
  DROP TABLE "pages_blocks_blog7_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog7_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog7" CASCADE;
  DROP TABLE "pages_blocks_blog9_small_featured_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog9_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog9" CASCADE;
  DROP TABLE "pages_blocks_contact1" CASCADE;
  DROP TABLE "pages_blocks_contact5" CASCADE;
  DROP TABLE "pages_blocks_cta1_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta1" CASCADE;
  DROP TABLE "pages_blocks_cta4" CASCADE;
  DROP TABLE "pages_blocks_cta9_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta9" CASCADE;
  DROP TABLE "pages_blocks_cta5_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta5" CASCADE;
  DROP TABLE "evt_hdr_4_featured_events" CASCADE;
  DROP TABLE "evt_hdr_4" CASCADE;
  DROP TABLE "evt_hdr_5_filters" CASCADE;
  DROP TABLE "evt_hdr_5_events" CASCADE;
  DROP TABLE "evt_hdr_5_2" CASCADE;
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
  DROP TABLE "pages_blocks_header44_links" CASCADE;
  DROP TABLE "pages_blocks_header44" CASCADE;
  DROP TABLE "pages_blocks_header48" CASCADE;
  DROP TABLE "pages_blocks_layout1_links" CASCADE;
  DROP TABLE "pages_blocks_layout1" CASCADE;
  DROP TABLE "pages_blocks_layout5_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout5_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout5" CASCADE;
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
  DROP TABLE "_pages_v_blocks_banner1" CASCADE;
  DROP TABLE "_pages_v_blocks_blog7_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog7_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog7" CASCADE;
  DROP TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog9_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog9" CASCADE;
  DROP TABLE "_pages_v_blocks_contact1" CASCADE;
  DROP TABLE "_pages_v_blocks_contact5" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1" CASCADE;
  DROP TABLE "_pages_v_blocks_cta4" CASCADE;
  DROP TABLE "_pages_v_blocks_cta9_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta9" CASCADE;
  DROP TABLE "_pages_v_blocks_cta5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta5" CASCADE;
  DROP TABLE "_evt_hdr_4_v_featured_events" CASCADE;
  DROP TABLE "_evt_hdr_4_v" CASCADE;
  DROP TABLE "_evt_hdr_5_v_filters" CASCADE;
  DROP TABLE "_evt_hdr_5_v_events" CASCADE;
  DROP TABLE "_evt_hdr_5_v_2" CASCADE;
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
  DROP TABLE "_pages_v_blocks_header44_links" CASCADE;
  DROP TABLE "_pages_v_blocks_header44" CASCADE;
  DROP TABLE "_pages_v_blocks_header48" CASCADE;
  DROP TABLE "_pages_v_blocks_layout1_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout1" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5" CASCADE;
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
  ALTER TABLE "evt_hdr_5" DROP CONSTRAINT "evt_hdr_5_event_image_id_media_id_fk";
  
  ALTER TABLE "_evt_hdr_5_v" DROP CONSTRAINT "_evt_hdr_5_v_event_image_id_media_id_fk";
  
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
  DROP INDEX "evt_hdr_5_event_event_image_idx";
  DROP INDEX "_evt_hdr_5_v_event_event_image_idx";
  ALTER TABLE "evt_hdr_5" ALTER COLUMN "heading" SET DEFAULT 'Event title heading';
  ALTER TABLE "_evt_hdr_5_v" ALTER COLUMN "heading" SET DEFAULT 'Event title heading';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "back_link_url" varchar DEFAULT '#';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "back_link_button_title" varchar DEFAULT 'All events';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "back_link_button_variant" varchar DEFAULT 'link';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "back_link_button_size" varchar DEFAULT 'link';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "image_id" integer;
  ALTER TABLE "evt_hdr_5" ADD COLUMN "input_placeholder" varchar DEFAULT 'Enter your email';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "button_title" varchar DEFAULT 'Save my spot';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "button_variant" varchar DEFAULT 'primary';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "button_size" varchar DEFAULT 'md';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "terms_and_conditions" jsonb;
  ALTER TABLE "evt_hdr_5" ADD COLUMN "date_weekday" varchar DEFAULT 'Sat';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "date_day" varchar DEFAULT '10';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "date_month" varchar DEFAULT 'Feb';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "date_year" varchar;
  ALTER TABLE "evt_hdr_5" ADD COLUMN "countdown_iso_date" varchar DEFAULT '2024-11-14T01:23:29.000+01:00';
  ALTER TABLE "evt_hdr_5" ADD COLUMN "amount_left" varchar DEFAULT '10';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "back_link_url" varchar DEFAULT '#';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "back_link_button_title" varchar DEFAULT 'All events';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "back_link_button_variant" varchar DEFAULT 'link';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "back_link_button_size" varchar DEFAULT 'link';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "image_id" integer;
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "input_placeholder" varchar DEFAULT 'Enter your email';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "button_title" varchar DEFAULT 'Save my spot';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "button_variant" varchar DEFAULT 'primary';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "button_size" varchar DEFAULT 'md';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "terms_and_conditions" jsonb;
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "date_weekday" varchar DEFAULT 'Sat';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "date_day" varchar DEFAULT '10';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "date_month" varchar DEFAULT 'Feb';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "date_year" varchar;
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "countdown_iso_date" varchar DEFAULT '2024-11-14T01:23:29.000+01:00';
  ALTER TABLE "_evt_hdr_5_v" ADD COLUMN "amount_left" varchar DEFAULT '10';
  ALTER TABLE "evt_hdr_5" ADD CONSTRAINT "evt_hdr_5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v" ADD CONSTRAINT "_evt_hdr_5_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "evt_hdr_5_image_idx" ON "evt_hdr_5" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_5_v_image_idx" ON "_evt_hdr_5_v" USING btree ("image_id");
  ALTER TABLE "evt_hdr_5" DROP COLUMN "tagline";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_url";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_image_id";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_video";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_category";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_status";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_title";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_date_weekday";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_date_day";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_date_month";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_date_year";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_description";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_button_title";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_button_url";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_button_variant";
  ALTER TABLE "evt_hdr_5" DROP COLUMN "event_button_size";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "tagline";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_url";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_image_id";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_video";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_category";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_status";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_title";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_date_weekday";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_date_day";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_date_month";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_date_year";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_description";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_button_title";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_button_url";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_button_variant";
  ALTER TABLE "_evt_hdr_5_v" DROP COLUMN "event_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact1_button_size";
  DROP TYPE "public"."enum_pages_blocks_contact5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact5_button_size";
  DROP TYPE "public"."enum_pages_blocks_cta1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta1_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta4_button_variant";
  DROP TYPE "public"."enum_pages_blocks_cta4_button_size";
  DROP TYPE "public"."enum_pages_blocks_cta9_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta9_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_link_type";
  DROP TYPE "public"."enum_evt_hdr_4_featured_events_button_variant";
  DROP TYPE "public"."enum_evt_hdr_4_featured_events_button_size";
  DROP TYPE "public"."enum_evt_hdr_4_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_4_event_button_size";
  DROP TYPE "public"."enum_evt_hdr_5_filters_variant";
  DROP TYPE "public"."enum_evt_hdr_5_filters_size";
  DROP TYPE "public"."enum_evt_hdr_5_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_5_event_button_size";
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
  DROP TYPE "public"."enum_pages_blocks_header44_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_header44_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_header48_button_size";
  DROP TYPE "public"."enum_pages_blocks_header48_button_variant";
  DROP TYPE "public"."enum_pages_blocks_layout1_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout1_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout5_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout5_buttons_link_appearance";
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
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_contact5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta4_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta4_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta9_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_link_type";
  DROP TYPE "public"."enum__evt_hdr_4_v_featured_events_button_variant";
  DROP TYPE "public"."enum__evt_hdr_4_v_featured_events_button_size";
  DROP TYPE "public"."enum__evt_hdr_4_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_4_v_event_button_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_filters_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_filters_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_event_button_size";
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
  DROP TYPE "public"."enum__pages_v_blocks_header44_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_header44_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_header48_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_header48_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout1_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout1_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_appearance";
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
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_size";`)
}
