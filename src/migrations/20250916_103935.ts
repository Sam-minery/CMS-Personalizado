import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_blog1_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_blog5_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."var" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."sz" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_comparison_1_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_comparison_1_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_comparison_13_products_main_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_comparison_13_products_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_custom_2_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_1_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_1_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_evt_3_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_3_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_3_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_3_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_3_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_3_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq2_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_faq2_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq4_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_faq4_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum_links_1_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_links_1_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_links_1_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_stats_1_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_stats_1_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_stats_3_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'outline', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum_stats_3_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_team1_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_pages_blocks_team1_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_team2_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_pages_blocks_team2_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_blog1_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__comparison_1_v_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__comparison_1_v_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__comparison_1_v_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__comparison_13_v_products_main_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__comparison_13_v_products_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_custom_2_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_1_v_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_1_v_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__evt_3_v_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_3_v_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_3_v_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_3_v_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_3_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_3_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq2_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_faq2_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq4_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_faq4_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum__links_1_v_categories_links_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__links_1_v_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__links_1_v_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__stats_1_v_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__stats_1_v_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__stats_3_v_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'outline', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum__stats_3_v_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_team1_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__pages_v_blocks_team1_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_team2_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__pages_v_blocks_team2_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contact_submissions_status" AS ENUM('new', 'reviewing', 'responded', 'closed');
  CREATE TYPE "public"."enum_form_custom_2_submissions_status" AS ENUM('new', 'reviewing', 'responded', 'closed');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar11_config_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_header_navbar11_config_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar11');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer4');
  CREATE TABLE "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_blog1_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "pages_blocks_blog1_blog_posts" (
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
  
  CREATE TABLE "pages_blocks_blog1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"category_link" varchar DEFAULT '#',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_blog5_buttons_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "pages_blocks_blog5_blog_posts" (
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
  
  CREATE TABLE "pages_blocks_blog5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"category_link" varchar DEFAULT '#',
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_title" varchar,
  	"featured_blog_post_description" varchar,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon_type" "icon_type" DEFAULT 'link'
  );
  
  CREATE TABLE "blog_post_header1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_post_header5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar DEFAULT 'Category',
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "jobs" (
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
  
  CREATE TABLE "depts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "pages_blocks_career_section1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "comparison_1_comparison_products_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"product_name" varchar DEFAULT 'Product name',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet'
  );
  
  CREATE TABLE "comparison_1_comparison_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Product comparison'
  );
  
  CREATE TABLE "comparison_1_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_comparison_1_features_items_type" DEFAULT 'text',
  	"text_value" varchar
  );
  
  CREATE TABLE "comparison_1_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here'
  );
  
  CREATE TABLE "comparison_1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum_comparison_1_buttons_variant" DEFAULT 'secondary',
  	"size" "enum_comparison_1_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false
  );
  
  CREATE TABLE "comparison_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "comparison_13_products_main_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_comparison_13_products_main_features_items_type" DEFAULT 'text',
  	"text_value" varchar
  );
  
  CREATE TABLE "comparison_13_products_main_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here'
  );
  
  CREATE TABLE "comparison_13_products_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_comparison_13_products_features_items_type" DEFAULT 'check',
  	"text_value" varchar
  );
  
  CREATE TABLE "comparison_13_products_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here'
  );
  
  CREATE TABLE "comparison_13_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"product_name" varchar DEFAULT 'Product name',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet'
  );
  
  CREATE TABLE "comparison_13" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_custom_2_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_cta_custom_2_buttons_variant" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_cta_custom_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_1_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_variant" "enum_evt_1_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_evt_1_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot'
  );
  
  CREATE TABLE "evt_1_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all'
  );
  
  CREATE TABLE "evt_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_3_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_variant" "enum_evt_3_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_evt_3_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "evt_3_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all'
  );
  
  CREATE TABLE "evt_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_1_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" varchar DEFAULT 'secondary',
  	"button_size" varchar DEFAULT 'sm'
  );
  
  CREATE TABLE "evt_hdr_1_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" varchar DEFAULT 'secondary',
  	"button_size" varchar DEFAULT 'sm'
  );
  
  CREATE TABLE "evt_hdr_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"event_url" varchar DEFAULT '#',
  	"event_image_id" integer,
  	"event_date_weekday" varchar DEFAULT 'Sat',
  	"event_date_day" varchar DEFAULT '10',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_category" varchar DEFAULT 'Category',
  	"event_title" varchar DEFAULT 'Event title heading',
  	"event_status" varchar,
  	"event_location" varchar DEFAULT 'Location',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"event_button_title" varchar DEFAULT 'Save my spot',
  	"event_button_variant" varchar DEFAULT 'secondary',
  	"event_button_size" varchar DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_3_featured_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"image_id" integer,
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
  	"button_variant" "enum_evt_hdr_3_featured_events_button_variant" DEFAULT 'link',
  	"button_size" "enum_evt_hdr_3_featured_events_button_size" DEFAULT 'link'
  );
  
  CREATE TABLE "evt_hdr_3" (
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
  	"event_date_weekday" varchar DEFAULT 'Sat',
  	"event_date_day" varchar DEFAULT '10',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_location" varchar DEFAULT 'Location',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"event_button_title" varchar DEFAULT 'View event',
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum_evt_hdr_3_event_button_variant" DEFAULT 'link',
  	"event_button_size" "enum_evt_hdr_3_event_button_size" DEFAULT 'link',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_1_2" (
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
  	"countdown_iso_date" varchar DEFAULT '2024-12-14T01:23:29.000+01:00',
  	"amount_left" varchar DEFAULT '10',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_5" (
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
  
  CREATE TABLE "pages_blocks_faq2_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Question text goes here',
  	"answer" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  );
  
  CREATE TABLE "pages_blocks_faq2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'FAQs',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"footer_heading" varchar DEFAULT 'Still have questions?',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'Contact',
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum_pages_blocks_faq2_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_faq2_button_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq4_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Question text goes here',
  	"answer" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'
  );
  
  CREATE TABLE "pages_blocks_faq4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'FAQs',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"footer_heading" varchar DEFAULT 'Still have questions?',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'Contact',
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum_pages_blocks_faq4_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_faq4_button_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_custom_2_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_form_custom_2_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_form_custom_2_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_form_custom_2_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" numeric PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_form_custom_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"logo_alt" varchar DEFAULT 'Logo image',
  	"nav_text" varchar DEFAULT 'Already have an account?',
  	"nav_button_title" varchar DEFAULT 'Log In',
  	"nav_button_variant" "enum_pages_blocks_form_custom_2_nav_button_variant" DEFAULT 'link',
  	"nav_button_size" "enum_pages_blocks_form_custom_2_nav_button_size" DEFAULT 'link',
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
  
  CREATE TABLE "pages_blocks_gallery6_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"alt" varchar DEFAULT 'Gallery image'
  );
  
  CREATE TABLE "pages_blocks_gallery6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Image Gallery',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery19_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Gallery image'
  );
  
  CREATE TABLE "pages_blocks_gallery19" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Image Gallery',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_gallery27_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Gallery image'
  );
  
  CREATE TABLE "pages_blocks_gallery27" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Image Gallery',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "links_1_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum_links_1_categories_links_variant" DEFAULT 'secondary'
  );
  
  CREATE TABLE "links_1_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE "links_1_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum_links_1_social_links_platform" DEFAULT 'facebook'
  );
  
  CREATE TABLE "links_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Name Surname',
  	"author_position" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"author_location" varchar DEFAULT 'Location',
  	"button_variant" "enum_links_1_button_variant" DEFAULT 'secondary',
  	"button_title" varchar DEFAULT 'Join our newsletter',
  	"button_subtitle" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"news_letter_heading" varchar DEFAULT 'Join our newsletter',
  	"news_letter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"news_letter_input_placeholder" varchar DEFAULT 'Enter your email',
  	"news_letter_submit_button_title" varchar DEFAULT 'Subscribe',
  	"news_letter_terms_and_conditions" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logo1_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "pages_blocks_logo1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Used by the world''s leading companies',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logo2_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "pages_blocks_logo2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Used by the world''s leading companies',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_long_content1" (
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
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio1_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'View project',
  	"button_variant" "enum_pages_blocks_portfolio1_projects_button_variant" DEFAULT 'link',
  	"button_size" "enum_pages_blocks_portfolio1_projects_button_size" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_portfolio1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Portfolio',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" "enum_pages_blocks_portfolio1_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_portfolio1_button_size" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio5_projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Tag',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_portfolio5_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'View project',
  	"button_variant" "enum_pages_blocks_portfolio5_projects_button_variant" DEFAULT 'link',
  	"button_size" "enum_pages_blocks_portfolio5_projects_button_size" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_portfolio5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Portfolio',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" "enum_pages_blocks_portfolio5_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_pages_blocks_portfolio5_button_size" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio_header1_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Tag one',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_portfolio_header1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_portfolio_header2_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Tag one',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_portfolio_header2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing5_feature_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_src_id" integer,
  	"icon_alt" varchar DEFAULT 'Icon description',
  	"heading" varchar DEFAULT 'Key feature heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  );
  
  CREATE TABLE "pages_blocks_pricing5_pricing_plan_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar DEFAULT 'Feature text goes here'
  );
  
  CREATE TABLE "pages_blocks_pricing5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Pricing plan',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"pricing_plan_plan_name" varchar DEFAULT 'Basic plan',
  	"pricing_plan_description" varchar DEFAULT 'Lorem ipsum dolor sit amet',
  	"pricing_plan_monthly_price" varchar DEFAULT '$19',
  	"pricing_plan_button_title" varchar DEFAULT 'Get started',
  	"pricing_plan_button_variant" "enum_pages_blocks_pricing5_pricing_plan_button_variant" DEFAULT 'default',
  	"pricing_plan_button_size" "enum_pages_blocks_pricing5_pricing_plan_button_size" DEFAULT 'default',
  	"pricing_plan_button_href" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "stats_1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum_stats_1_buttons_variant" DEFAULT 'secondary',
  	"size" "enum_stats_1_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false
  );
  
  CREATE TABLE "stats_1_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"percentage" varchar DEFAULT '30%',
  	"heading" varchar DEFAULT 'Short heading goes here'
  );
  
  CREATE TABLE "stats_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Medium length section heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"block_name" varchar
  );
  
  CREATE TABLE "stats_3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum_stats_3_buttons_variant" DEFAULT 'secondary-alt',
  	"size" "enum_stats_3_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false
  );
  
  CREATE TABLE "stats_3_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"percentage" varchar DEFAULT '30%',
  	"heading" varchar DEFAULT 'Short heading goes here'
  );
  
  CREATE TABLE "stats_3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Medium length section heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Background image',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team1_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum_pages_blocks_team1_team_members_social_links_platform" DEFAULT 'linkedin'
  );
  
  CREATE TABLE "pages_blocks_team1_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar DEFAULT 'Full name',
  	"job_title" varchar DEFAULT 'Job title',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  );
  
  CREATE TABLE "pages_blocks_team1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Our team',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_heading" varchar DEFAULT 'We''re hiring!',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_button_title" varchar DEFAULT 'Open positions',
  	"footer_button_variant" "enum_pages_blocks_team1_footer_button_variant" DEFAULT 'secondary',
  	"footer_button_href" varchar DEFAULT '#',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_team2_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum_pages_blocks_team2_team_members_social_links_platform" DEFAULT 'linkedin'
  );
  
  CREATE TABLE "pages_blocks_team2_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar DEFAULT 'Full name',
  	"job_title" varchar DEFAULT 'Job title',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
  );
  
  CREATE TABLE "pages_blocks_team2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Our team',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_heading" varchar DEFAULT 'We''re hiring!',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_button_title" varchar DEFAULT 'Open positions',
  	"footer_button_variant" "enum_pages_blocks_team2_footer_button_variant" DEFAULT 'secondary',
  	"footer_button_href" varchar DEFAULT '#',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonial3_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_src_id" integer,
  	"image_alt" varchar,
  	"quote" varchar DEFAULT '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  	"avatar_src_id" integer,
  	"avatar_alt" varchar,
  	"name" varchar DEFAULT 'Name Surname',
  	"position" varchar DEFAULT 'Position',
  	"company_name" varchar DEFAULT 'Company name'
  );
  
  CREATE TABLE "pages_blocks_testimonial3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Customer testimonials',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_testimonial6_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number_of_stars" numeric DEFAULT 5,
  	"quote" varchar DEFAULT '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  	"avatar_id" integer,
  	"name" varchar DEFAULT 'Name Surname',
  	"position" varchar DEFAULT 'Position, Company name',
  	"logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_testimonial6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Customer testimonials',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline1_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline1_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline1_timelines_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_timeline1_timelines_buttons_variant" DEFAULT 'default',
  	"size" "enum_pages_blocks_timeline1_timelines_buttons_size" DEFAULT 'default',
  	"href" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline1_timelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"heading" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_rich_text" jsonb,
  	"hero_media_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_blog1_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog1_blog_posts" (
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
  
  CREATE TABLE "_pages_v_blocks_blog1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"category_link" varchar DEFAULT '#',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_blog5_buttons_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_blog_posts" (
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
  
  CREATE TABLE "_pages_v_blocks_blog5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"category_link" varchar DEFAULT '#',
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_title" varchar,
  	"featured_blog_post_description" varchar,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon_type" "icon_type" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blog_post_header5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar DEFAULT 'Category',
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_jobs_v" (
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
  
  CREATE TABLE "_depts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career_section1" (
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
  
  CREATE TABLE "_comparison_1_v_comparison_products_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"product_name" varchar DEFAULT 'Product name',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_comparison_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Product comparison',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__comparison_1_v_features_items_type" DEFAULT 'text',
  	"text_value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__comparison_1_v_buttons_variant" DEFAULT 'secondary',
  	"size" "enum__comparison_1_v_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_comparison_13_v_products_main_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__comparison_13_v_products_main_features_items_type" DEFAULT 'text',
  	"text_value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_13_v_products_main_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_13_v_products_features_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__comparison_13_v_products_features_items_type" DEFAULT 'check',
  	"text_value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_13_v_products_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Feature text goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_13_v_products" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"product_name" varchar DEFAULT 'Product name',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_13_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_custom_2_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_cta_custom_2_buttons_variant" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_custom_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_1_v_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_variant" "enum__evt_1_v_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__evt_1_v_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_1_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_3_v_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_variant" "enum__evt_3_v_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__evt_3_v_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_3_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_3_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_1_v_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" varchar DEFAULT 'secondary',
  	"button_size" varchar DEFAULT 'sm',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_1_v_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"date_weekday" varchar DEFAULT 'Fri',
  	"date_day" varchar DEFAULT '09',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"title" varchar DEFAULT 'Event title heading',
  	"status" varchar,
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" varchar DEFAULT 'secondary',
  	"button_size" varchar DEFAULT 'sm',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"event_url" varchar DEFAULT '#',
  	"event_image_id" integer,
  	"event_date_weekday" varchar DEFAULT 'Sat',
  	"event_date_day" varchar DEFAULT '10',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_category" varchar DEFAULT 'Category',
  	"event_title" varchar DEFAULT 'Event title heading',
  	"event_status" varchar,
  	"event_location" varchar DEFAULT 'Location',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"event_button_title" varchar DEFAULT 'Save my spot',
  	"event_button_variant" varchar DEFAULT 'secondary',
  	"event_button_size" varchar DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_3_v_featured_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"image_id" integer,
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
  	"button_variant" "enum__evt_hdr_3_v_featured_events_button_variant" DEFAULT 'link',
  	"button_size" "enum__evt_hdr_3_v_featured_events_button_size" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_3_v" (
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
  	"event_date_weekday" varchar DEFAULT 'Sat',
  	"event_date_day" varchar DEFAULT '10',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_location" varchar DEFAULT 'Location',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"event_button_title" varchar DEFAULT 'View event',
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum__evt_hdr_3_v_event_button_variant" DEFAULT 'link',
  	"event_button_size" "enum__evt_hdr_3_v_event_button_size" DEFAULT 'link',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_1_v_2" (
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
  	"countdown_iso_date" varchar DEFAULT '2024-12-14T01:23:29.000+01:00',
  	"amount_left" varchar DEFAULT '10',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_5_v" (
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
  
  CREATE TABLE "_pages_v_blocks_faq2_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Question text goes here',
  	"answer" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'FAQs',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"footer_heading" varchar DEFAULT 'Still have questions?',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'Contact',
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum__pages_v_blocks_faq2_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_faq2_button_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq4_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Question text goes here',
  	"answer" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'FAQs',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"footer_heading" varchar DEFAULT 'Still have questions?',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'Contact',
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum__pages_v_blocks_faq4_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_faq4_button_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_custom_2_service_type_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_custom_2_budget_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_custom_2_employees_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_custom_2_countries_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" numeric,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_custom_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_url" varchar DEFAULT '#',
  	"logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"logo_alt" varchar DEFAULT 'Logo image',
  	"nav_text" varchar DEFAULT 'Already have an account?',
  	"nav_button_title" varchar DEFAULT 'Log In',
  	"nav_button_variant" "enum__pages_v_blocks_form_custom_2_nav_button_variant" DEFAULT 'link',
  	"nav_button_size" "enum__pages_v_blocks_form_custom_2_nav_button_size" DEFAULT 'link',
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
  
  CREATE TABLE "_pages_v_blocks_gallery6_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"alt" varchar DEFAULT 'Gallery image',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Image Gallery',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery19_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Gallery image',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery19" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Image Gallery',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery27_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Gallery image',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_gallery27" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Image Gallery',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_links_1_v_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum__links_1_v_categories_links_variant" DEFAULT 'secondary',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_links_1_v_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_links_1_v_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum__links_1_v_social_links_platform" DEFAULT 'facebook',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_links_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Name Surname',
  	"author_position" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"author_location" varchar DEFAULT 'Location',
  	"button_variant" "enum__links_1_v_button_variant" DEFAULT 'secondary',
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
  
  CREATE TABLE "_pages_v_blocks_logo1_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Used by the world''s leading companies',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo2_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Used by the world''s leading companies',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_long_content1" (
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
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio1_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'View project',
  	"button_variant" "enum__pages_v_blocks_portfolio1_projects_button_variant" DEFAULT 'link',
  	"button_size" "enum__pages_v_blocks_portfolio1_projects_button_size" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Portfolio',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" "enum__pages_v_blocks_portfolio1_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_portfolio1_button_size" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio5_projects_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Tag',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio5_projects" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  	"image_id" integer,
  	"url" varchar DEFAULT '#',
  	"button_title" varchar DEFAULT 'View project',
  	"button_variant" "enum__pages_v_blocks_portfolio5_projects_button_variant" DEFAULT 'link',
  	"button_size" "enum__pages_v_blocks_portfolio5_projects_button_size" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Portfolio',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"button_title" varchar DEFAULT 'View all',
  	"button_variant" "enum__pages_v_blocks_portfolio5_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__pages_v_blocks_portfolio5_button_size" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio_header1_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Tag one',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio_header1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio_header2_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Tag one',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_portfolio_header2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Project name here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing5_feature_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_src_id" integer,
  	"icon_alt" varchar DEFAULT 'Icon description',
  	"heading" varchar DEFAULT 'Key feature heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing5_pricing_plan_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar DEFAULT 'Feature text goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Pricing plan',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"pricing_plan_plan_name" varchar DEFAULT 'Basic plan',
  	"pricing_plan_description" varchar DEFAULT 'Lorem ipsum dolor sit amet',
  	"pricing_plan_monthly_price" varchar DEFAULT '$19',
  	"pricing_plan_button_title" varchar DEFAULT 'Get started',
  	"pricing_plan_button_variant" "enum__pages_v_blocks_pricing5_pricing_plan_button_variant" DEFAULT 'default',
  	"pricing_plan_button_size" "enum__pages_v_blocks_pricing5_pricing_plan_button_size" DEFAULT 'default',
  	"pricing_plan_button_href" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_stats_1_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__stats_1_v_buttons_variant" DEFAULT 'secondary',
  	"size" "enum__stats_1_v_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_stats_1_v_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"percentage" varchar DEFAULT '30%',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_stats_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Medium length section heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_stats_3_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__stats_3_v_buttons_variant" DEFAULT 'secondary-alt',
  	"size" "enum__stats_3_v_buttons_size" DEFAULT 'md',
  	"url" varchar DEFAULT '#',
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_stats_3_v_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"percentage" varchar DEFAULT '30%',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_stats_3_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Medium length section heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  	"image_src_id" integer,
  	"image_alt" varchar DEFAULT 'Background image',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team1_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum__pages_v_blocks_team1_team_members_social_links_platform" DEFAULT 'linkedin',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team1_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar DEFAULT 'Full name',
  	"job_title" varchar DEFAULT 'Job title',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Our team',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_heading" varchar DEFAULT 'We''re hiring!',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_button_title" varchar DEFAULT 'Open positions',
  	"footer_button_variant" "enum__pages_v_blocks_team1_footer_button_variant" DEFAULT 'secondary',
  	"footer_button_href" varchar DEFAULT '#',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team2_team_members_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"href" varchar DEFAULT '#',
  	"platform" "enum__pages_v_blocks_team2_team_members_social_links_platform" DEFAULT 'linkedin',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team2_team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"name" varchar DEFAULT 'Full name',
  	"job_title" varchar DEFAULT 'Job title',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_team2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Our team',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_heading" varchar DEFAULT 'We''re hiring!',
  	"footer_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer_button_title" varchar DEFAULT 'Open positions',
  	"footer_button_variant" "enum__pages_v_blocks_team2_footer_button_variant" DEFAULT 'secondary',
  	"footer_button_href" varchar DEFAULT '#',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial3_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_src_id" integer,
  	"image_alt" varchar,
  	"quote" varchar DEFAULT '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  	"avatar_src_id" integer,
  	"avatar_alt" varchar,
  	"name" varchar DEFAULT 'Name Surname',
  	"position" varchar DEFAULT 'Position',
  	"company_name" varchar DEFAULT 'Company name',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Customer testimonials',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial6_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number_of_stars" numeric DEFAULT 5,
  	"quote" varchar DEFAULT '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
  	"avatar_id" integer,
  	"name" varchar DEFAULT 'Name Surname',
  	"position" varchar DEFAULT 'Position, Company name',
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_testimonial6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Customer testimonials',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline1_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline1_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline1_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline1_timelines_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_timeline1_timelines_buttons_variant" DEFAULT 'default',
  	"size" "enum__pages_v_blocks_timeline1_timelines_buttons_size" DEFAULT 'default',
  	"href" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline1_timelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline1" (
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
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_hero_rich_text" jsonb,
  	"version_hero_media_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"first_name" varchar NOT NULL,
  	"last_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"topic" varchar,
  	"description" varchar,
  	"message" varchar NOT NULL,
  	"accept_terms" boolean DEFAULT false,
  	"source" varchar DEFAULT 'contact-section-2',
  	"status" "enum_contact_submissions_status" DEFAULT 'new',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_custom_2_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"service_type" varchar NOT NULL,
  	"budget" varchar NOT NULL,
  	"about_project" varchar NOT NULL,
  	"company_name" varchar NOT NULL,
  	"employees" varchar NOT NULL,
  	"website" varchar NOT NULL,
  	"country" varchar NOT NULL,
  	"date" varchar NOT NULL,
  	"source" varchar DEFAULT 'form-custom-2',
  	"status" "enum_form_custom_2_submissions_status" DEFAULT 'new',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"category_i_d" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"contact_submissions_id" integer,
  	"form_custom_2_submissions_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "header_navbar11_config_nav_links_sub_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
  	"icon_alt" varchar DEFAULT 'Icon',
  	"title" varchar,
  	"description" varchar,
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "header_navbar11_config_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "header_navbar11_config_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_header_navbar11_config_buttons_variant" DEFAULT 'default',
  	"size" "enum_header_navbar11_config_buttons_size" DEFAULT 'sm'
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"navbar_type" "enum_header_navbar_type" DEFAULT 'default',
  	"navbar11_config_logo_url" varchar DEFAULT '#',
  	"navbar11_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"navbar11_config_logo_alt" varchar DEFAULT 'Company logo',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "footer_footer4_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "footer_footer4_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_footer4_config_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"platform" "enum_footer_footer4_config_social_media_links_platform"
  );
  
  CREATE TABLE "footer_footer4_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"footer_type" "enum_footer_footer_type" DEFAULT 'default',
  	"footer4_config_logo_url" varchar DEFAULT '#',
  	"footer4_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"footer4_config_logo_alt" varchar DEFAULT 'Logo image',
  	"footer4_config_footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_buttons" ADD CONSTRAINT "pages_blocks_blog1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_blog_posts" ADD CONSTRAINT "pages_blocks_blog1_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_blog_posts" ADD CONSTRAINT "pages_blocks_blog1_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_blog_posts" ADD CONSTRAINT "pages_blocks_blog1_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1" ADD CONSTRAINT "pages_blocks_blog1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_buttons" ADD CONSTRAINT "pages_blocks_blog5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_blog_posts" ADD CONSTRAINT "pages_blocks_blog5_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_blog_posts" ADD CONSTRAINT "pages_blocks_blog5_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_blog_posts" ADD CONSTRAINT "pages_blocks_blog5_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "breadcrumbs" ADD CONSTRAINT "breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "social_links" ADD CONSTRAINT "social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jobs" ADD CONSTRAINT "jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."depts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "depts" ADD CONSTRAINT "depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career_section1" ADD CONSTRAINT "pages_blocks_career_section1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products_products" ADD CONSTRAINT "comparison_1_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products_products" ADD CONSTRAINT "comparison_1_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products" ADD CONSTRAINT "comparison_1_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_features_items" ADD CONSTRAINT "comparison_1_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_features" ADD CONSTRAINT "comparison_1_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_buttons" ADD CONSTRAINT "comparison_1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1" ADD CONSTRAINT "comparison_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_13_products_main_features_items" ADD CONSTRAINT "comparison_13_products_main_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_13_products_main_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_13_products_main_features" ADD CONSTRAINT "comparison_13_products_main_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_13_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_13_products_features_items" ADD CONSTRAINT "comparison_13_products_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_13_products_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_13_products_features" ADD CONSTRAINT "comparison_13_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_13_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_13_products" ADD CONSTRAINT "comparison_13_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "comparison_13_products" ADD CONSTRAINT "comparison_13_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_13"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_13" ADD CONSTRAINT "comparison_13_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_custom_2_buttons" ADD CONSTRAINT "pages_blocks_cta_custom_2_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_custom_2" ADD CONSTRAINT "pages_blocks_cta_custom_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_custom_2" ADD CONSTRAINT "pages_blocks_cta_custom_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_1_tabs_content" ADD CONSTRAINT "evt_1_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_1_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_1_tabs" ADD CONSTRAINT "evt_1_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_1" ADD CONSTRAINT "evt_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_3_tabs_content" ADD CONSTRAINT "evt_3_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_3_tabs_content" ADD CONSTRAINT "evt_3_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_3_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_3_tabs" ADD CONSTRAINT "evt_3_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_3" ADD CONSTRAINT "evt_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_filters" ADD CONSTRAINT "evt_hdr_1_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_events" ADD CONSTRAINT "evt_hdr_1_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1" ADD CONSTRAINT "evt_hdr_1_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_1" ADD CONSTRAINT "evt_hdr_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_3_featured_events" ADD CONSTRAINT "evt_hdr_3_featured_events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_3_featured_events" ADD CONSTRAINT "evt_hdr_3_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_3" ADD CONSTRAINT "evt_hdr_3_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_3" ADD CONSTRAINT "evt_hdr_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_2" ADD CONSTRAINT "evt_hdr_1_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_2" ADD CONSTRAINT "evt_hdr_1_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5" ADD CONSTRAINT "evt_hdr_5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_5" ADD CONSTRAINT "evt_hdr_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq2_questions" ADD CONSTRAINT "pages_blocks_faq2_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq2" ADD CONSTRAINT "pages_blocks_faq2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq4_questions" ADD CONSTRAINT "pages_blocks_faq4_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq4" ADD CONSTRAINT "pages_blocks_faq4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_service_type_options" ADD CONSTRAINT "pages_blocks_form_custom_2_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_budget_options" ADD CONSTRAINT "pages_blocks_form_custom_2_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_employees_options" ADD CONSTRAINT "pages_blocks_form_custom_2_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_countries_options" ADD CONSTRAINT "pages_blocks_form_custom_2_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2" ADD CONSTRAINT "pages_blocks_form_custom_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery6_images" ADD CONSTRAINT "pages_blocks_gallery6_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery6_images" ADD CONSTRAINT "pages_blocks_gallery6_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery6" ADD CONSTRAINT "pages_blocks_gallery6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery19_images" ADD CONSTRAINT "pages_blocks_gallery19_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery19_images" ADD CONSTRAINT "pages_blocks_gallery19_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery19"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery19" ADD CONSTRAINT "pages_blocks_gallery19_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery27_images" ADD CONSTRAINT "pages_blocks_gallery27_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery27_images" ADD CONSTRAINT "pages_blocks_gallery27_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery27"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery27" ADD CONSTRAINT "pages_blocks_gallery27_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1_categories_links" ADD CONSTRAINT "links_1_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_1_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1_categories" ADD CONSTRAINT "links_1_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1_social_links" ADD CONSTRAINT "links_1_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1" ADD CONSTRAINT "links_1_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "links_1" ADD CONSTRAINT "links_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo1_logos" ADD CONSTRAINT "pages_blocks_logo1_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo1_logos" ADD CONSTRAINT "pages_blocks_logo1_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo1" ADD CONSTRAINT "pages_blocks_logo1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo2_logos" ADD CONSTRAINT "pages_blocks_logo2_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo2_logos" ADD CONSTRAINT "pages_blocks_logo2_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo2" ADD CONSTRAINT "pages_blocks_logo2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content1" ADD CONSTRAINT "pages_blocks_long_content1_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content1" ADD CONSTRAINT "pages_blocks_long_content1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1_projects" ADD CONSTRAINT "pages_blocks_portfolio1_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1_projects" ADD CONSTRAINT "pages_blocks_portfolio1_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1" ADD CONSTRAINT "pages_blocks_portfolio1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio5_projects_tags" ADD CONSTRAINT "pages_blocks_portfolio5_projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio5_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio5_projects" ADD CONSTRAINT "pages_blocks_portfolio5_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio5_projects" ADD CONSTRAINT "pages_blocks_portfolio5_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio5" ADD CONSTRAINT "pages_blocks_portfolio5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_header1_tags" ADD CONSTRAINT "pages_blocks_portfolio_header1_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_header1" ADD CONSTRAINT "pages_blocks_portfolio_header1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_header2_tags" ADD CONSTRAINT "pages_blocks_portfolio_header2_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio_header2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_header2" ADD CONSTRAINT "pages_blocks_portfolio_header2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio_header2" ADD CONSTRAINT "pages_blocks_portfolio_header2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5_feature_sections" ADD CONSTRAINT "pages_blocks_pricing5_feature_sections_icon_src_id_media_id_fk" FOREIGN KEY ("icon_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5_feature_sections" ADD CONSTRAINT "pages_blocks_pricing5_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5_pricing_plan_features" ADD CONSTRAINT "pages_blocks_pricing5_pricing_plan_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5" ADD CONSTRAINT "pages_blocks_pricing5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stats_1_buttons" ADD CONSTRAINT "stats_1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stats_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stats_1_stats" ADD CONSTRAINT "stats_1_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stats_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stats_1" ADD CONSTRAINT "stats_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stats_3_buttons" ADD CONSTRAINT "stats_3_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stats_3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stats_3_stats" ADD CONSTRAINT "stats_3_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."stats_3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "stats_3" ADD CONSTRAINT "stats_3_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "stats_3" ADD CONSTRAINT "stats_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team1_team_members_social_links" ADD CONSTRAINT "pages_blocks_team1_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team1_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team1_team_members" ADD CONSTRAINT "pages_blocks_team1_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team1_team_members" ADD CONSTRAINT "pages_blocks_team1_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team1" ADD CONSTRAINT "pages_blocks_team1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team2_team_members_social_links" ADD CONSTRAINT "pages_blocks_team2_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team2_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team2_team_members" ADD CONSTRAINT "pages_blocks_team2_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_team2_team_members" ADD CONSTRAINT "pages_blocks_team2_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_team2" ADD CONSTRAINT "pages_blocks_team2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_avatar_src_id_media_id_fk" FOREIGN KEY ("avatar_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3" ADD CONSTRAINT "pages_blocks_testimonial3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6_testimonials" ADD CONSTRAINT "pages_blocks_testimonial6_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6_testimonials" ADD CONSTRAINT "pages_blocks_testimonial6_testimonials_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6_testimonials" ADD CONSTRAINT "pages_blocks_testimonial6_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6" ADD CONSTRAINT "pages_blocks_testimonial6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1_buttons" ADD CONSTRAINT "pages_blocks_timeline1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1_timelines_buttons" ADD CONSTRAINT "pages_blocks_timeline1_timelines_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline1_timelines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1_timelines" ADD CONSTRAINT "pages_blocks_timeline1_timelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1" ADD CONSTRAINT "pages_blocks_timeline1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_buttons" ADD CONSTRAINT "_pages_v_blocks_blog1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog1_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog1_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog1_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1" ADD CONSTRAINT "_pages_v_blocks_blog1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_buttons" ADD CONSTRAINT "_pages_v_blocks_blog5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog5_blog_posts_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog5_blog_posts_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_blog_posts" ADD CONSTRAINT "_pages_v_blocks_blog5_blog_posts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_breadcrumbs_v" ADD CONSTRAINT "_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_social_links_v" ADD CONSTRAINT "_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v" ADD CONSTRAINT "_jobs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_depts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_depts_v" ADD CONSTRAINT "_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD CONSTRAINT "_pages_v_blocks_career_section1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features_items" ADD CONSTRAINT "_comparison_1_v_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features" ADD CONSTRAINT "_comparison_1_v_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_buttons" ADD CONSTRAINT "_comparison_1_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v" ADD CONSTRAINT "_comparison_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_main_features_items" ADD CONSTRAINT "_comparison_13_v_products_main_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products_main_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_main_features" ADD CONSTRAINT "_comparison_13_v_products_main_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_features_items" ADD CONSTRAINT "_comparison_13_v_products_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_features" ADD CONSTRAINT "_comparison_13_v_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products" ADD CONSTRAINT "_comparison_13_v_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products" ADD CONSTRAINT "_comparison_13_v_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v" ADD CONSTRAINT "_comparison_13_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_custom_2_buttons" ADD CONSTRAINT "_pages_v_blocks_cta_custom_2_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_custom_2" ADD CONSTRAINT "_pages_v_blocks_cta_custom_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_custom_2" ADD CONSTRAINT "_pages_v_blocks_cta_custom_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_1_v_tabs_content" ADD CONSTRAINT "_evt_1_v_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_1_v_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_1_v_tabs" ADD CONSTRAINT "_evt_1_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_1_v" ADD CONSTRAINT "_evt_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_3_v_tabs_content" ADD CONSTRAINT "_evt_3_v_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_3_v_tabs_content" ADD CONSTRAINT "_evt_3_v_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_3_v_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_3_v_tabs" ADD CONSTRAINT "_evt_3_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_3_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_3_v" ADD CONSTRAINT "_evt_3_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_filters" ADD CONSTRAINT "_evt_hdr_1_v_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_events" ADD CONSTRAINT "_evt_hdr_1_v_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v" ADD CONSTRAINT "_evt_hdr_1_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v" ADD CONSTRAINT "_evt_hdr_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v_featured_events" ADD CONSTRAINT "_evt_hdr_3_v_featured_events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v_featured_events" ADD CONSTRAINT "_evt_hdr_3_v_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_3_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v" ADD CONSTRAINT "_evt_hdr_3_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v" ADD CONSTRAINT "_evt_hdr_3_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_2" ADD CONSTRAINT "_evt_hdr_1_v_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_2" ADD CONSTRAINT "_evt_hdr_1_v_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v" ADD CONSTRAINT "_evt_hdr_5_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v" ADD CONSTRAINT "_evt_hdr_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq2_questions" ADD CONSTRAINT "_pages_v_blocks_faq2_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq2" ADD CONSTRAINT "_pages_v_blocks_faq2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq4_questions" ADD CONSTRAINT "_pages_v_blocks_faq4_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq4" ADD CONSTRAINT "_pages_v_blocks_faq4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_service_type_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_budget_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_employees_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_countries_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery6_images" ADD CONSTRAINT "_pages_v_blocks_gallery6_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery6_images" ADD CONSTRAINT "_pages_v_blocks_gallery6_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery6" ADD CONSTRAINT "_pages_v_blocks_gallery6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery19_images" ADD CONSTRAINT "_pages_v_blocks_gallery19_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery19_images" ADD CONSTRAINT "_pages_v_blocks_gallery19_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery19"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery19" ADD CONSTRAINT "_pages_v_blocks_gallery19_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery27_images" ADD CONSTRAINT "_pages_v_blocks_gallery27_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery27_images" ADD CONSTRAINT "_pages_v_blocks_gallery27_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery27"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery27" ADD CONSTRAINT "_pages_v_blocks_gallery27_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v_categories_links" ADD CONSTRAINT "_links_1_v_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_1_v_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v_categories" ADD CONSTRAINT "_links_1_v_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v_social_links" ADD CONSTRAINT "_links_1_v_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v" ADD CONSTRAINT "_links_1_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_links_1_v" ADD CONSTRAINT "_links_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo1_logos" ADD CONSTRAINT "_pages_v_blocks_logo1_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo1_logos" ADD CONSTRAINT "_pages_v_blocks_logo1_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo1" ADD CONSTRAINT "_pages_v_blocks_logo1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo2_logos" ADD CONSTRAINT "_pages_v_blocks_logo2_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo2_logos" ADD CONSTRAINT "_pages_v_blocks_logo2_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo2" ADD CONSTRAINT "_pages_v_blocks_logo2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content1" ADD CONSTRAINT "_pages_v_blocks_long_content1_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content1" ADD CONSTRAINT "_pages_v_blocks_long_content1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio1_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio1_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1" ADD CONSTRAINT "_pages_v_blocks_portfolio1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio5_projects_tags" ADD CONSTRAINT "_pages_v_blocks_portfolio5_projects_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio5_projects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio5_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio5_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio5_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio5_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio5" ADD CONSTRAINT "_pages_v_blocks_portfolio5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio_header1_tags" ADD CONSTRAINT "_pages_v_blocks_portfolio_header1_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio_header1" ADD CONSTRAINT "_pages_v_blocks_portfolio_header1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio_header2_tags" ADD CONSTRAINT "_pages_v_blocks_portfolio_header2_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio_header2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio_header2" ADD CONSTRAINT "_pages_v_blocks_portfolio_header2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio_header2" ADD CONSTRAINT "_pages_v_blocks_portfolio_header2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5_feature_sections" ADD CONSTRAINT "_pages_v_blocks_pricing5_feature_sections_icon_src_id_media_id_fk" FOREIGN KEY ("icon_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5_feature_sections" ADD CONSTRAINT "_pages_v_blocks_pricing5_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5_pricing_plan_features" ADD CONSTRAINT "_pages_v_blocks_pricing5_pricing_plan_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5" ADD CONSTRAINT "_pages_v_blocks_pricing5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_stats_1_v_buttons" ADD CONSTRAINT "_stats_1_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stats_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_stats_1_v_stats" ADD CONSTRAINT "_stats_1_v_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stats_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_stats_1_v" ADD CONSTRAINT "_stats_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_stats_3_v_buttons" ADD CONSTRAINT "_stats_3_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stats_3_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_stats_3_v_stats" ADD CONSTRAINT "_stats_3_v_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_stats_3_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_stats_3_v" ADD CONSTRAINT "_stats_3_v_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_stats_3_v" ADD CONSTRAINT "_stats_3_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team1_team_members_social_links" ADD CONSTRAINT "_pages_v_blocks_team1_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team1_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team1_team_members" ADD CONSTRAINT "_pages_v_blocks_team1_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team1_team_members" ADD CONSTRAINT "_pages_v_blocks_team1_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team1" ADD CONSTRAINT "_pages_v_blocks_team1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team2_team_members_social_links" ADD CONSTRAINT "_pages_v_blocks_team2_team_members_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team2_team_members"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team2_team_members" ADD CONSTRAINT "_pages_v_blocks_team2_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team2_team_members" ADD CONSTRAINT "_pages_v_blocks_team2_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_team2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_team2" ADD CONSTRAINT "_pages_v_blocks_team2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_avatar_src_id_media_id_fk" FOREIGN KEY ("avatar_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3" ADD CONSTRAINT "_pages_v_blocks_testimonial3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial6_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial6_testimonials_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial6_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6" ADD CONSTRAINT "_pages_v_blocks_testimonial6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1_timelines_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline1_timelines_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline1_timelines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1_timelines" ADD CONSTRAINT "_pages_v_blocks_timeline1_timelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1" ADD CONSTRAINT "_pages_v_blocks_timeline1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_custom_2_submissions_fk" FOREIGN KEY ("form_custom_2_submissions_id") REFERENCES "public"."form_custom_2_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_nav_links_sub_menu_links" ADD CONSTRAINT "header_navbar11_config_nav_links_sub_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_navbar11_config_nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_nav_links" ADD CONSTRAINT "header_navbar11_config_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_buttons" ADD CONSTRAINT "header_navbar11_config_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_column_links_links" ADD CONSTRAINT "footer_footer4_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer4_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_column_links" ADD CONSTRAINT "footer_footer4_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_social_media_links" ADD CONSTRAINT "footer_footer4_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_footer_links" ADD CONSTRAINT "footer_footer4_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog1_buttons_order_idx" ON "pages_blocks_blog1_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_buttons_parent_id_idx" ON "pages_blocks_blog1_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_blog_posts_order_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_blog_posts_parent_id_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_blog_posts_image_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog1_blog_posts_avatar_idx" ON "pages_blocks_blog1_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog1_order_idx" ON "pages_blocks_blog1" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_parent_id_idx" ON "pages_blocks_blog1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_path_idx" ON "pages_blocks_blog1" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog5_buttons_order_idx" ON "pages_blocks_blog5_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_buttons_parent_id_idx" ON "pages_blocks_blog5_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_blog_posts_order_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_blog_posts_parent_id_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_blog_posts_image_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog5_blog_posts_avatar_idx" ON "pages_blocks_blog5_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog5_order_idx" ON "pages_blocks_blog5" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_parent_id_idx" ON "pages_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_path_idx" ON "pages_blocks_blog5" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_post_image_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_post_avatar_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "breadcrumbs_order_idx" ON "breadcrumbs" USING btree ("_order");
  CREATE INDEX "breadcrumbs_parent_id_idx" ON "breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "social_links_order_idx" ON "social_links" USING btree ("_order");
  CREATE INDEX "social_links_parent_id_idx" ON "social_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_order_idx" ON "blog_post_header1" USING btree ("_order");
  CREATE INDEX "blog_post_header1_parent_id_idx" ON "blog_post_header1" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_path_idx" ON "blog_post_header1" USING btree ("_path");
  CREATE INDEX "blog_post_header1_image_idx" ON "blog_post_header1" USING btree ("image_id");
  CREATE INDEX "blog_post_header1_author_author_avatar_idx" ON "blog_post_header1" USING btree ("author_avatar_id");
  CREATE INDEX "blog_post_header5_order_idx" ON "blog_post_header5" USING btree ("_order");
  CREATE INDEX "blog_post_header5_parent_id_idx" ON "blog_post_header5" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header5_path_idx" ON "blog_post_header5" USING btree ("_path");
  CREATE INDEX "blog_post_header5_image_idx" ON "blog_post_header5" USING btree ("image_id");
  CREATE INDEX "blog_post_header5_author_author_avatar_idx" ON "blog_post_header5" USING btree ("author_avatar_id");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "jobs_order_idx" ON "jobs" USING btree ("_order");
  CREATE INDEX "jobs_parent_id_idx" ON "jobs" USING btree ("_parent_id");
  CREATE INDEX "depts_order_idx" ON "depts" USING btree ("_order");
  CREATE INDEX "depts_parent_id_idx" ON "depts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career_section1_order_idx" ON "pages_blocks_career_section1" USING btree ("_order");
  CREATE INDEX "pages_blocks_career_section1_parent_id_idx" ON "pages_blocks_career_section1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career_section1_path_idx" ON "pages_blocks_career_section1" USING btree ("_path");
  CREATE INDEX "comparison_1_comparison_products_products_order_idx" ON "comparison_1_comparison_products_products" USING btree ("_order");
  CREATE INDEX "comparison_1_comparison_products_products_parent_id_idx" ON "comparison_1_comparison_products_products" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_comparison_products_products_icon_idx" ON "comparison_1_comparison_products_products" USING btree ("icon_id");
  CREATE INDEX "comparison_1_comparison_products_order_idx" ON "comparison_1_comparison_products" USING btree ("_order");
  CREATE INDEX "comparison_1_comparison_products_parent_id_idx" ON "comparison_1_comparison_products" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_features_items_order_idx" ON "comparison_1_features_items" USING btree ("_order");
  CREATE INDEX "comparison_1_features_items_parent_id_idx" ON "comparison_1_features_items" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_features_order_idx" ON "comparison_1_features" USING btree ("_order");
  CREATE INDEX "comparison_1_features_parent_id_idx" ON "comparison_1_features" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_buttons_order_idx" ON "comparison_1_buttons" USING btree ("_order");
  CREATE INDEX "comparison_1_buttons_parent_id_idx" ON "comparison_1_buttons" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_order_idx" ON "comparison_1" USING btree ("_order");
  CREATE INDEX "comparison_1_parent_id_idx" ON "comparison_1" USING btree ("_parent_id");
  CREATE INDEX "comparison_1_path_idx" ON "comparison_1" USING btree ("_path");
  CREATE INDEX "comparison_13_products_main_features_items_order_idx" ON "comparison_13_products_main_features_items" USING btree ("_order");
  CREATE INDEX "comparison_13_products_main_features_items_parent_id_idx" ON "comparison_13_products_main_features_items" USING btree ("_parent_id");
  CREATE INDEX "comparison_13_products_main_features_order_idx" ON "comparison_13_products_main_features" USING btree ("_order");
  CREATE INDEX "comparison_13_products_main_features_parent_id_idx" ON "comparison_13_products_main_features" USING btree ("_parent_id");
  CREATE INDEX "comparison_13_products_features_items_order_idx" ON "comparison_13_products_features_items" USING btree ("_order");
  CREATE INDEX "comparison_13_products_features_items_parent_id_idx" ON "comparison_13_products_features_items" USING btree ("_parent_id");
  CREATE INDEX "comparison_13_products_features_order_idx" ON "comparison_13_products_features" USING btree ("_order");
  CREATE INDEX "comparison_13_products_features_parent_id_idx" ON "comparison_13_products_features" USING btree ("_parent_id");
  CREATE INDEX "comparison_13_products_order_idx" ON "comparison_13_products" USING btree ("_order");
  CREATE INDEX "comparison_13_products_parent_id_idx" ON "comparison_13_products" USING btree ("_parent_id");
  CREATE INDEX "comparison_13_products_icon_idx" ON "comparison_13_products" USING btree ("icon_id");
  CREATE INDEX "comparison_13_order_idx" ON "comparison_13" USING btree ("_order");
  CREATE INDEX "comparison_13_parent_id_idx" ON "comparison_13" USING btree ("_parent_id");
  CREATE INDEX "comparison_13_path_idx" ON "comparison_13" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_custom_2_buttons_order_idx" ON "pages_blocks_cta_custom_2_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_custom_2_buttons_parent_id_idx" ON "pages_blocks_cta_custom_2_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_custom_2_order_idx" ON "pages_blocks_cta_custom_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_custom_2_parent_id_idx" ON "pages_blocks_cta_custom_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_custom_2_path_idx" ON "pages_blocks_cta_custom_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_custom_2_image_idx" ON "pages_blocks_cta_custom_2" USING btree ("image_id");
  CREATE INDEX "evt_1_tabs_content_order_idx" ON "evt_1_tabs_content" USING btree ("_order");
  CREATE INDEX "evt_1_tabs_content_parent_id_idx" ON "evt_1_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "evt_1_tabs_order_idx" ON "evt_1_tabs" USING btree ("_order");
  CREATE INDEX "evt_1_tabs_parent_id_idx" ON "evt_1_tabs" USING btree ("_parent_id");
  CREATE INDEX "evt_1_order_idx" ON "evt_1" USING btree ("_order");
  CREATE INDEX "evt_1_parent_id_idx" ON "evt_1" USING btree ("_parent_id");
  CREATE INDEX "evt_1_path_idx" ON "evt_1" USING btree ("_path");
  CREATE INDEX "evt_3_tabs_content_order_idx" ON "evt_3_tabs_content" USING btree ("_order");
  CREATE INDEX "evt_3_tabs_content_parent_id_idx" ON "evt_3_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "evt_3_tabs_content_image_idx" ON "evt_3_tabs_content" USING btree ("image_id");
  CREATE INDEX "evt_3_tabs_order_idx" ON "evt_3_tabs" USING btree ("_order");
  CREATE INDEX "evt_3_tabs_parent_id_idx" ON "evt_3_tabs" USING btree ("_parent_id");
  CREATE INDEX "evt_3_order_idx" ON "evt_3" USING btree ("_order");
  CREATE INDEX "evt_3_parent_id_idx" ON "evt_3" USING btree ("_parent_id");
  CREATE INDEX "evt_3_path_idx" ON "evt_3" USING btree ("_path");
  CREATE INDEX "evt_hdr_1_filters_order_idx" ON "evt_hdr_1_filters" USING btree ("_order");
  CREATE INDEX "evt_hdr_1_filters_parent_id_idx" ON "evt_hdr_1_filters" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_1_events_order_idx" ON "evt_hdr_1_events" USING btree ("_order");
  CREATE INDEX "evt_hdr_1_events_parent_id_idx" ON "evt_hdr_1_events" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_1_order_idx" ON "evt_hdr_1" USING btree ("_order");
  CREATE INDEX "evt_hdr_1_parent_id_idx" ON "evt_hdr_1" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_1_path_idx" ON "evt_hdr_1" USING btree ("_path");
  CREATE INDEX "evt_hdr_1_event_event_image_idx" ON "evt_hdr_1" USING btree ("event_image_id");
  CREATE INDEX "evt_hdr_3_featured_events_order_idx" ON "evt_hdr_3_featured_events" USING btree ("_order");
  CREATE INDEX "evt_hdr_3_featured_events_parent_id_idx" ON "evt_hdr_3_featured_events" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_3_featured_events_image_idx" ON "evt_hdr_3_featured_events" USING btree ("image_id");
  CREATE INDEX "evt_hdr_3_order_idx" ON "evt_hdr_3" USING btree ("_order");
  CREATE INDEX "evt_hdr_3_parent_id_idx" ON "evt_hdr_3" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_3_path_idx" ON "evt_hdr_3" USING btree ("_path");
  CREATE INDEX "evt_hdr_3_event_event_image_idx" ON "evt_hdr_3" USING btree ("event_image_id");
  CREATE INDEX "evt_hdr_1_2_order_idx" ON "evt_hdr_1_2" USING btree ("_order");
  CREATE INDEX "evt_hdr_1_2_parent_id_idx" ON "evt_hdr_1_2" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_1_2_path_idx" ON "evt_hdr_1_2" USING btree ("_path");
  CREATE INDEX "evt_hdr_1_2_image_idx" ON "evt_hdr_1_2" USING btree ("image_id");
  CREATE INDEX "evt_hdr_5_order_idx" ON "evt_hdr_5" USING btree ("_order");
  CREATE INDEX "evt_hdr_5_parent_id_idx" ON "evt_hdr_5" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_5_path_idx" ON "evt_hdr_5" USING btree ("_path");
  CREATE INDEX "evt_hdr_5_image_idx" ON "evt_hdr_5" USING btree ("image_id");
  CREATE INDEX "pages_blocks_faq2_questions_order_idx" ON "pages_blocks_faq2_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq2_questions_parent_id_idx" ON "pages_blocks_faq2_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq2_order_idx" ON "pages_blocks_faq2" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq2_parent_id_idx" ON "pages_blocks_faq2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq2_path_idx" ON "pages_blocks_faq2" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq4_questions_order_idx" ON "pages_blocks_faq4_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq4_questions_parent_id_idx" ON "pages_blocks_faq4_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq4_order_idx" ON "pages_blocks_faq4" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq4_parent_id_idx" ON "pages_blocks_faq4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq4_path_idx" ON "pages_blocks_faq4" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_form_custom_2_service_type_options_order_idx" ON "pages_blocks_form_custom_2_service_type_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_custom_2_service_type_options_parent_id_idx" ON "pages_blocks_form_custom_2_service_type_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_custom_2_budget_options_order_idx" ON "pages_blocks_form_custom_2_budget_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_custom_2_budget_options_parent_id_idx" ON "pages_blocks_form_custom_2_budget_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_custom_2_employees_options_order_idx" ON "pages_blocks_form_custom_2_employees_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_custom_2_employees_options_parent_id_idx" ON "pages_blocks_form_custom_2_employees_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_custom_2_countries_options_order_idx" ON "pages_blocks_form_custom_2_countries_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_custom_2_countries_options_parent_id_idx" ON "pages_blocks_form_custom_2_countries_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_custom_2_order_idx" ON "pages_blocks_form_custom_2" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_custom_2_parent_id_idx" ON "pages_blocks_form_custom_2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_custom_2_path_idx" ON "pages_blocks_form_custom_2" USING btree ("_path");
  CREATE INDEX "pages_blocks_gallery6_images_order_idx" ON "pages_blocks_gallery6_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery6_images_parent_id_idx" ON "pages_blocks_gallery6_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery6_images_image_idx" ON "pages_blocks_gallery6_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery6_order_idx" ON "pages_blocks_gallery6" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery6_parent_id_idx" ON "pages_blocks_gallery6" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery6_path_idx" ON "pages_blocks_gallery6" USING btree ("_path");
  CREATE INDEX "pages_blocks_gallery19_images_order_idx" ON "pages_blocks_gallery19_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery19_images_parent_id_idx" ON "pages_blocks_gallery19_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery19_images_image_idx" ON "pages_blocks_gallery19_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery19_order_idx" ON "pages_blocks_gallery19" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery19_parent_id_idx" ON "pages_blocks_gallery19" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery19_path_idx" ON "pages_blocks_gallery19" USING btree ("_path");
  CREATE INDEX "pages_blocks_gallery27_images_order_idx" ON "pages_blocks_gallery27_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery27_images_parent_id_idx" ON "pages_blocks_gallery27_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery27_images_image_idx" ON "pages_blocks_gallery27_images" USING btree ("image_id");
  CREATE INDEX "pages_blocks_gallery27_order_idx" ON "pages_blocks_gallery27" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery27_parent_id_idx" ON "pages_blocks_gallery27" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery27_path_idx" ON "pages_blocks_gallery27" USING btree ("_path");
  CREATE INDEX "links_1_categories_links_order_idx" ON "links_1_categories_links" USING btree ("_order");
  CREATE INDEX "links_1_categories_links_parent_id_idx" ON "links_1_categories_links" USING btree ("_parent_id");
  CREATE INDEX "links_1_categories_order_idx" ON "links_1_categories" USING btree ("_order");
  CREATE INDEX "links_1_categories_parent_id_idx" ON "links_1_categories" USING btree ("_parent_id");
  CREATE INDEX "links_1_social_links_order_idx" ON "links_1_social_links" USING btree ("_order");
  CREATE INDEX "links_1_social_links_parent_id_idx" ON "links_1_social_links" USING btree ("_parent_id");
  CREATE INDEX "links_1_order_idx" ON "links_1" USING btree ("_order");
  CREATE INDEX "links_1_parent_id_idx" ON "links_1" USING btree ("_parent_id");
  CREATE INDEX "links_1_path_idx" ON "links_1" USING btree ("_path");
  CREATE INDEX "links_1_author_author_avatar_idx" ON "links_1" USING btree ("author_avatar_id");
  CREATE INDEX "pages_blocks_logo1_logos_order_idx" ON "pages_blocks_logo1_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo1_logos_parent_id_idx" ON "pages_blocks_logo1_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo1_logos_image_idx" ON "pages_blocks_logo1_logos" USING btree ("image_id");
  CREATE INDEX "pages_blocks_logo1_order_idx" ON "pages_blocks_logo1" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo1_parent_id_idx" ON "pages_blocks_logo1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo1_path_idx" ON "pages_blocks_logo1" USING btree ("_path");
  CREATE INDEX "pages_blocks_logo2_logos_order_idx" ON "pages_blocks_logo2_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo2_logos_parent_id_idx" ON "pages_blocks_logo2_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo2_logos_image_idx" ON "pages_blocks_logo2_logos" USING btree ("image_id");
  CREATE INDEX "pages_blocks_logo2_order_idx" ON "pages_blocks_logo2" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo2_parent_id_idx" ON "pages_blocks_logo2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo2_path_idx" ON "pages_blocks_logo2" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content1_order_idx" ON "pages_blocks_long_content1" USING btree ("_order");
  CREATE INDEX "pages_blocks_long_content1_parent_id_idx" ON "pages_blocks_long_content1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_long_content1_path_idx" ON "pages_blocks_long_content1" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content1_image_image_src_idx" ON "pages_blocks_long_content1" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_portfolio1_projects_order_idx" ON "pages_blocks_portfolio1_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio1_projects_parent_id_idx" ON "pages_blocks_portfolio1_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio1_projects_image_idx" ON "pages_blocks_portfolio1_projects" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portfolio1_order_idx" ON "pages_blocks_portfolio1" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio1_parent_id_idx" ON "pages_blocks_portfolio1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio1_path_idx" ON "pages_blocks_portfolio1" USING btree ("_path");
  CREATE INDEX "pages_blocks_portfolio5_projects_tags_order_idx" ON "pages_blocks_portfolio5_projects_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio5_projects_tags_parent_id_idx" ON "pages_blocks_portfolio5_projects_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio5_projects_order_idx" ON "pages_blocks_portfolio5_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio5_projects_parent_id_idx" ON "pages_blocks_portfolio5_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio5_projects_image_idx" ON "pages_blocks_portfolio5_projects" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portfolio5_order_idx" ON "pages_blocks_portfolio5" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio5_parent_id_idx" ON "pages_blocks_portfolio5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio5_path_idx" ON "pages_blocks_portfolio5" USING btree ("_path");
  CREATE INDEX "pages_blocks_portfolio_header1_tags_order_idx" ON "pages_blocks_portfolio_header1_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_header1_tags_parent_id_idx" ON "pages_blocks_portfolio_header1_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_header1_order_idx" ON "pages_blocks_portfolio_header1" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_header1_parent_id_idx" ON "pages_blocks_portfolio_header1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_header1_path_idx" ON "pages_blocks_portfolio_header1" USING btree ("_path");
  CREATE INDEX "pages_blocks_portfolio_header2_tags_order_idx" ON "pages_blocks_portfolio_header2_tags" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_header2_tags_parent_id_idx" ON "pages_blocks_portfolio_header2_tags" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_header2_order_idx" ON "pages_blocks_portfolio_header2" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio_header2_parent_id_idx" ON "pages_blocks_portfolio_header2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio_header2_path_idx" ON "pages_blocks_portfolio_header2" USING btree ("_path");
  CREATE INDEX "pages_blocks_portfolio_header2_image_idx" ON "pages_blocks_portfolio_header2" USING btree ("image_id");
  CREATE INDEX "pages_blocks_pricing5_feature_sections_order_idx" ON "pages_blocks_pricing5_feature_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing5_feature_sections_parent_id_idx" ON "pages_blocks_pricing5_feature_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing5_feature_sections_icon_icon_src_idx" ON "pages_blocks_pricing5_feature_sections" USING btree ("icon_src_id");
  CREATE INDEX "pages_blocks_pricing5_pricing_plan_features_order_idx" ON "pages_blocks_pricing5_pricing_plan_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing5_pricing_plan_features_parent_id_idx" ON "pages_blocks_pricing5_pricing_plan_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing5_order_idx" ON "pages_blocks_pricing5" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing5_parent_id_idx" ON "pages_blocks_pricing5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing5_path_idx" ON "pages_blocks_pricing5" USING btree ("_path");
  CREATE INDEX "stats_1_buttons_order_idx" ON "stats_1_buttons" USING btree ("_order");
  CREATE INDEX "stats_1_buttons_parent_id_idx" ON "stats_1_buttons" USING btree ("_parent_id");
  CREATE INDEX "stats_1_stats_order_idx" ON "stats_1_stats" USING btree ("_order");
  CREATE INDEX "stats_1_stats_parent_id_idx" ON "stats_1_stats" USING btree ("_parent_id");
  CREATE INDEX "stats_1_order_idx" ON "stats_1" USING btree ("_order");
  CREATE INDEX "stats_1_parent_id_idx" ON "stats_1" USING btree ("_parent_id");
  CREATE INDEX "stats_1_path_idx" ON "stats_1" USING btree ("_path");
  CREATE INDEX "stats_3_buttons_order_idx" ON "stats_3_buttons" USING btree ("_order");
  CREATE INDEX "stats_3_buttons_parent_id_idx" ON "stats_3_buttons" USING btree ("_parent_id");
  CREATE INDEX "stats_3_stats_order_idx" ON "stats_3_stats" USING btree ("_order");
  CREATE INDEX "stats_3_stats_parent_id_idx" ON "stats_3_stats" USING btree ("_parent_id");
  CREATE INDEX "stats_3_order_idx" ON "stats_3" USING btree ("_order");
  CREATE INDEX "stats_3_parent_id_idx" ON "stats_3" USING btree ("_parent_id");
  CREATE INDEX "stats_3_path_idx" ON "stats_3" USING btree ("_path");
  CREATE INDEX "stats_3_image_image_src_idx" ON "stats_3" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_team1_team_members_social_links_order_idx" ON "pages_blocks_team1_team_members_social_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_team1_team_members_social_links_parent_id_idx" ON "pages_blocks_team1_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team1_team_members_order_idx" ON "pages_blocks_team1_team_members" USING btree ("_order");
  CREATE INDEX "pages_blocks_team1_team_members_parent_id_idx" ON "pages_blocks_team1_team_members" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team1_team_members_image_idx" ON "pages_blocks_team1_team_members" USING btree ("image_id");
  CREATE INDEX "pages_blocks_team1_order_idx" ON "pages_blocks_team1" USING btree ("_order");
  CREATE INDEX "pages_blocks_team1_parent_id_idx" ON "pages_blocks_team1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team1_path_idx" ON "pages_blocks_team1" USING btree ("_path");
  CREATE INDEX "pages_blocks_team2_team_members_social_links_order_idx" ON "pages_blocks_team2_team_members_social_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_team2_team_members_social_links_parent_id_idx" ON "pages_blocks_team2_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team2_team_members_order_idx" ON "pages_blocks_team2_team_members" USING btree ("_order");
  CREATE INDEX "pages_blocks_team2_team_members_parent_id_idx" ON "pages_blocks_team2_team_members" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team2_team_members_image_idx" ON "pages_blocks_team2_team_members" USING btree ("image_id");
  CREATE INDEX "pages_blocks_team2_order_idx" ON "pages_blocks_team2" USING btree ("_order");
  CREATE INDEX "pages_blocks_team2_parent_id_idx" ON "pages_blocks_team2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_team2_path_idx" ON "pages_blocks_team2" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_order_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_parent_id_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_image_image_src_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_avatar_avatar_src_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("avatar_src_id");
  CREATE INDEX "pages_blocks_testimonial3_order_idx" ON "pages_blocks_testimonial3" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial3_parent_id_idx" ON "pages_blocks_testimonial3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial3_path_idx" ON "pages_blocks_testimonial3" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_order_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_parent_id_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_avatar_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_logo_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_testimonial6_order_idx" ON "pages_blocks_testimonial6" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial6_parent_id_idx" ON "pages_blocks_testimonial6" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial6_path_idx" ON "pages_blocks_testimonial6" USING btree ("_path");
  CREATE INDEX "pages_blocks_timeline1_buttons_order_idx" ON "pages_blocks_timeline1_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_buttons_parent_id_idx" ON "pages_blocks_timeline1_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_timelines_buttons_order_idx" ON "pages_blocks_timeline1_timelines_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_timelines_buttons_parent_id_idx" ON "pages_blocks_timeline1_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_timelines_order_idx" ON "pages_blocks_timeline1_timelines" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_timelines_parent_id_idx" ON "pages_blocks_timeline1_timelines" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_order_idx" ON "pages_blocks_timeline1" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_parent_id_idx" ON "pages_blocks_timeline1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_path_idx" ON "pages_blocks_timeline1" USING btree ("_path");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog1_buttons_order_idx" ON "_pages_v_blocks_blog1_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_buttons_parent_id_idx" ON "_pages_v_blocks_blog1_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_order_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_image_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog1_blog_posts_avatar_idx" ON "_pages_v_blocks_blog1_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog1_order_idx" ON "_pages_v_blocks_blog1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_parent_id_idx" ON "_pages_v_blocks_blog1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_path_idx" ON "_pages_v_blocks_blog1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog5_buttons_order_idx" ON "_pages_v_blocks_blog5_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_buttons_parent_id_idx" ON "_pages_v_blocks_blog5_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_order_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_parent_id_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_image_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog5_blog_posts_avatar_idx" ON "_pages_v_blocks_blog5_blog_posts" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_order_idx" ON "_pages_v_blocks_blog5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_parent_id_idx" ON "_pages_v_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_path_idx" ON "_pages_v_blocks_blog5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_post_image_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_post_avatar_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "_breadcrumbs_v_order_idx" ON "_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_breadcrumbs_v_parent_id_idx" ON "_breadcrumbs_v" USING btree ("_parent_id");
  CREATE INDEX "_social_links_v_order_idx" ON "_social_links_v" USING btree ("_order");
  CREATE INDEX "_social_links_v_parent_id_idx" ON "_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_order_idx" ON "_blog_post_header1_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_v_parent_id_idx" ON "_blog_post_header1_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_path_idx" ON "_blog_post_header1_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header1_v_image_idx" ON "_blog_post_header1_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header1_v_author_author_avatar_idx" ON "_blog_post_header1_v" USING btree ("author_avatar_id");
  CREATE INDEX "_blog_post_header5_v_order_idx" ON "_blog_post_header5_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header5_v_parent_id_idx" ON "_blog_post_header5_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header5_v_path_idx" ON "_blog_post_header5_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header5_v_image_idx" ON "_blog_post_header5_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header5_v_author_author_avatar_idx" ON "_blog_post_header5_v" USING btree ("author_avatar_id");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_jobs_v_order_idx" ON "_jobs_v" USING btree ("_order");
  CREATE INDEX "_jobs_v_parent_id_idx" ON "_jobs_v" USING btree ("_parent_id");
  CREATE INDEX "_depts_v_order_idx" ON "_depts_v" USING btree ("_order");
  CREATE INDEX "_depts_v_parent_id_idx" ON "_depts_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career_section1_order_idx" ON "_pages_v_blocks_career_section1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career_section1_parent_id_idx" ON "_pages_v_blocks_career_section1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career_section1_path_idx" ON "_pages_v_blocks_career_section1" USING btree ("_path");
  CREATE INDEX "_comparison_1_v_comparison_products_products_order_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_comparison_products_products_parent_id_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_comparison_products_products_icon_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("icon_id");
  CREATE INDEX "_comparison_1_v_comparison_products_order_idx" ON "_comparison_1_v_comparison_products" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_comparison_products_parent_id_idx" ON "_comparison_1_v_comparison_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_features_items_order_idx" ON "_comparison_1_v_features_items" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_features_items_parent_id_idx" ON "_comparison_1_v_features_items" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_features_order_idx" ON "_comparison_1_v_features" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_features_parent_id_idx" ON "_comparison_1_v_features" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_buttons_order_idx" ON "_comparison_1_v_buttons" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_buttons_parent_id_idx" ON "_comparison_1_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_order_idx" ON "_comparison_1_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_parent_id_idx" ON "_comparison_1_v" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_path_idx" ON "_comparison_1_v" USING btree ("_path");
  CREATE INDEX "_comparison_13_v_products_main_features_items_order_idx" ON "_comparison_13_v_products_main_features_items" USING btree ("_order");
  CREATE INDEX "_comparison_13_v_products_main_features_items_parent_id_idx" ON "_comparison_13_v_products_main_features_items" USING btree ("_parent_id");
  CREATE INDEX "_comparison_13_v_products_main_features_order_idx" ON "_comparison_13_v_products_main_features" USING btree ("_order");
  CREATE INDEX "_comparison_13_v_products_main_features_parent_id_idx" ON "_comparison_13_v_products_main_features" USING btree ("_parent_id");
  CREATE INDEX "_comparison_13_v_products_features_items_order_idx" ON "_comparison_13_v_products_features_items" USING btree ("_order");
  CREATE INDEX "_comparison_13_v_products_features_items_parent_id_idx" ON "_comparison_13_v_products_features_items" USING btree ("_parent_id");
  CREATE INDEX "_comparison_13_v_products_features_order_idx" ON "_comparison_13_v_products_features" USING btree ("_order");
  CREATE INDEX "_comparison_13_v_products_features_parent_id_idx" ON "_comparison_13_v_products_features" USING btree ("_parent_id");
  CREATE INDEX "_comparison_13_v_products_order_idx" ON "_comparison_13_v_products" USING btree ("_order");
  CREATE INDEX "_comparison_13_v_products_parent_id_idx" ON "_comparison_13_v_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_13_v_products_icon_idx" ON "_comparison_13_v_products" USING btree ("icon_id");
  CREATE INDEX "_comparison_13_v_order_idx" ON "_comparison_13_v" USING btree ("_order");
  CREATE INDEX "_comparison_13_v_parent_id_idx" ON "_comparison_13_v" USING btree ("_parent_id");
  CREATE INDEX "_comparison_13_v_path_idx" ON "_comparison_13_v" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_custom_2_buttons_order_idx" ON "_pages_v_blocks_cta_custom_2_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_custom_2_buttons_parent_id_idx" ON "_pages_v_blocks_cta_custom_2_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_custom_2_order_idx" ON "_pages_v_blocks_cta_custom_2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_custom_2_parent_id_idx" ON "_pages_v_blocks_cta_custom_2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_custom_2_path_idx" ON "_pages_v_blocks_cta_custom_2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_custom_2_image_idx" ON "_pages_v_blocks_cta_custom_2" USING btree ("image_id");
  CREATE INDEX "_evt_1_v_tabs_content_order_idx" ON "_evt_1_v_tabs_content" USING btree ("_order");
  CREATE INDEX "_evt_1_v_tabs_content_parent_id_idx" ON "_evt_1_v_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_evt_1_v_tabs_order_idx" ON "_evt_1_v_tabs" USING btree ("_order");
  CREATE INDEX "_evt_1_v_tabs_parent_id_idx" ON "_evt_1_v_tabs" USING btree ("_parent_id");
  CREATE INDEX "_evt_1_v_order_idx" ON "_evt_1_v" USING btree ("_order");
  CREATE INDEX "_evt_1_v_parent_id_idx" ON "_evt_1_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_1_v_path_idx" ON "_evt_1_v" USING btree ("_path");
  CREATE INDEX "_evt_3_v_tabs_content_order_idx" ON "_evt_3_v_tabs_content" USING btree ("_order");
  CREATE INDEX "_evt_3_v_tabs_content_parent_id_idx" ON "_evt_3_v_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_evt_3_v_tabs_content_image_idx" ON "_evt_3_v_tabs_content" USING btree ("image_id");
  CREATE INDEX "_evt_3_v_tabs_order_idx" ON "_evt_3_v_tabs" USING btree ("_order");
  CREATE INDEX "_evt_3_v_tabs_parent_id_idx" ON "_evt_3_v_tabs" USING btree ("_parent_id");
  CREATE INDEX "_evt_3_v_order_idx" ON "_evt_3_v" USING btree ("_order");
  CREATE INDEX "_evt_3_v_parent_id_idx" ON "_evt_3_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_3_v_path_idx" ON "_evt_3_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_1_v_filters_order_idx" ON "_evt_hdr_1_v_filters" USING btree ("_order");
  CREATE INDEX "_evt_hdr_1_v_filters_parent_id_idx" ON "_evt_hdr_1_v_filters" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_1_v_events_order_idx" ON "_evt_hdr_1_v_events" USING btree ("_order");
  CREATE INDEX "_evt_hdr_1_v_events_parent_id_idx" ON "_evt_hdr_1_v_events" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_1_v_order_idx" ON "_evt_hdr_1_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_1_v_parent_id_idx" ON "_evt_hdr_1_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_1_v_path_idx" ON "_evt_hdr_1_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_1_v_event_event_image_idx" ON "_evt_hdr_1_v" USING btree ("event_image_id");
  CREATE INDEX "_evt_hdr_3_v_featured_events_order_idx" ON "_evt_hdr_3_v_featured_events" USING btree ("_order");
  CREATE INDEX "_evt_hdr_3_v_featured_events_parent_id_idx" ON "_evt_hdr_3_v_featured_events" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_3_v_featured_events_image_idx" ON "_evt_hdr_3_v_featured_events" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_3_v_order_idx" ON "_evt_hdr_3_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_3_v_parent_id_idx" ON "_evt_hdr_3_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_3_v_path_idx" ON "_evt_hdr_3_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_3_v_event_event_image_idx" ON "_evt_hdr_3_v" USING btree ("event_image_id");
  CREATE INDEX "_evt_hdr_1_v_2_order_idx" ON "_evt_hdr_1_v_2" USING btree ("_order");
  CREATE INDEX "_evt_hdr_1_v_2_parent_id_idx" ON "_evt_hdr_1_v_2" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_1_v_2_path_idx" ON "_evt_hdr_1_v_2" USING btree ("_path");
  CREATE INDEX "_evt_hdr_1_v_2_image_idx" ON "_evt_hdr_1_v_2" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_5_v_order_idx" ON "_evt_hdr_5_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_5_v_parent_id_idx" ON "_evt_hdr_5_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_5_v_path_idx" ON "_evt_hdr_5_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_5_v_image_idx" ON "_evt_hdr_5_v" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_faq2_questions_order_idx" ON "_pages_v_blocks_faq2_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq2_questions_parent_id_idx" ON "_pages_v_blocks_faq2_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq2_order_idx" ON "_pages_v_blocks_faq2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq2_parent_id_idx" ON "_pages_v_blocks_faq2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq2_path_idx" ON "_pages_v_blocks_faq2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq4_questions_order_idx" ON "_pages_v_blocks_faq4_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq4_questions_parent_id_idx" ON "_pages_v_blocks_faq4_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq4_order_idx" ON "_pages_v_blocks_faq4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq4_parent_id_idx" ON "_pages_v_blocks_faq4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq4_path_idx" ON "_pages_v_blocks_faq4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_service_type_options_order_idx" ON "_pages_v_blocks_form_custom_2_service_type_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_custom_2_service_type_options_parent_id_idx" ON "_pages_v_blocks_form_custom_2_service_type_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_budget_options_order_idx" ON "_pages_v_blocks_form_custom_2_budget_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_custom_2_budget_options_parent_id_idx" ON "_pages_v_blocks_form_custom_2_budget_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_employees_options_order_idx" ON "_pages_v_blocks_form_custom_2_employees_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_custom_2_employees_options_parent_id_idx" ON "_pages_v_blocks_form_custom_2_employees_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_countries_options_order_idx" ON "_pages_v_blocks_form_custom_2_countries_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_custom_2_countries_options_parent_id_idx" ON "_pages_v_blocks_form_custom_2_countries_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_order_idx" ON "_pages_v_blocks_form_custom_2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_custom_2_parent_id_idx" ON "_pages_v_blocks_form_custom_2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_custom_2_path_idx" ON "_pages_v_blocks_form_custom_2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_gallery6_images_order_idx" ON "_pages_v_blocks_gallery6_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery6_images_parent_id_idx" ON "_pages_v_blocks_gallery6_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery6_images_image_idx" ON "_pages_v_blocks_gallery6_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery6_order_idx" ON "_pages_v_blocks_gallery6" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery6_parent_id_idx" ON "_pages_v_blocks_gallery6" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery6_path_idx" ON "_pages_v_blocks_gallery6" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_gallery19_images_order_idx" ON "_pages_v_blocks_gallery19_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery19_images_parent_id_idx" ON "_pages_v_blocks_gallery19_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery19_images_image_idx" ON "_pages_v_blocks_gallery19_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery19_order_idx" ON "_pages_v_blocks_gallery19" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery19_parent_id_idx" ON "_pages_v_blocks_gallery19" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery19_path_idx" ON "_pages_v_blocks_gallery19" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_gallery27_images_order_idx" ON "_pages_v_blocks_gallery27_images" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery27_images_parent_id_idx" ON "_pages_v_blocks_gallery27_images" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery27_images_image_idx" ON "_pages_v_blocks_gallery27_images" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_gallery27_order_idx" ON "_pages_v_blocks_gallery27" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_gallery27_parent_id_idx" ON "_pages_v_blocks_gallery27" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_gallery27_path_idx" ON "_pages_v_blocks_gallery27" USING btree ("_path");
  CREATE INDEX "_links_1_v_categories_links_order_idx" ON "_links_1_v_categories_links" USING btree ("_order");
  CREATE INDEX "_links_1_v_categories_links_parent_id_idx" ON "_links_1_v_categories_links" USING btree ("_parent_id");
  CREATE INDEX "_links_1_v_categories_order_idx" ON "_links_1_v_categories" USING btree ("_order");
  CREATE INDEX "_links_1_v_categories_parent_id_idx" ON "_links_1_v_categories" USING btree ("_parent_id");
  CREATE INDEX "_links_1_v_social_links_order_idx" ON "_links_1_v_social_links" USING btree ("_order");
  CREATE INDEX "_links_1_v_social_links_parent_id_idx" ON "_links_1_v_social_links" USING btree ("_parent_id");
  CREATE INDEX "_links_1_v_order_idx" ON "_links_1_v" USING btree ("_order");
  CREATE INDEX "_links_1_v_parent_id_idx" ON "_links_1_v" USING btree ("_parent_id");
  CREATE INDEX "_links_1_v_path_idx" ON "_links_1_v" USING btree ("_path");
  CREATE INDEX "_links_1_v_author_author_avatar_idx" ON "_links_1_v" USING btree ("author_avatar_id");
  CREATE INDEX "_pages_v_blocks_logo1_logos_order_idx" ON "_pages_v_blocks_logo1_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo1_logos_parent_id_idx" ON "_pages_v_blocks_logo1_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo1_logos_image_idx" ON "_pages_v_blocks_logo1_logos" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_logo1_order_idx" ON "_pages_v_blocks_logo1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo1_parent_id_idx" ON "_pages_v_blocks_logo1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo1_path_idx" ON "_pages_v_blocks_logo1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_logo2_logos_order_idx" ON "_pages_v_blocks_logo2_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo2_logos_parent_id_idx" ON "_pages_v_blocks_logo2_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo2_logos_image_idx" ON "_pages_v_blocks_logo2_logos" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_logo2_order_idx" ON "_pages_v_blocks_logo2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo2_parent_id_idx" ON "_pages_v_blocks_logo2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo2_path_idx" ON "_pages_v_blocks_logo2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content1_order_idx" ON "_pages_v_blocks_long_content1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_long_content1_parent_id_idx" ON "_pages_v_blocks_long_content1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_long_content1_path_idx" ON "_pages_v_blocks_long_content1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content1_image_image_src_idx" ON "_pages_v_blocks_long_content1" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_order_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_parent_id_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_image_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_order_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio1_parent_id_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_path_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_portfolio5_projects_tags_order_idx" ON "_pages_v_blocks_portfolio5_projects_tags" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio5_projects_tags_parent_id_idx" ON "_pages_v_blocks_portfolio5_projects_tags" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio5_projects_order_idx" ON "_pages_v_blocks_portfolio5_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio5_projects_parent_id_idx" ON "_pages_v_blocks_portfolio5_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio5_projects_image_idx" ON "_pages_v_blocks_portfolio5_projects" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_portfolio5_order_idx" ON "_pages_v_blocks_portfolio5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio5_parent_id_idx" ON "_pages_v_blocks_portfolio5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio5_path_idx" ON "_pages_v_blocks_portfolio5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_portfolio_header1_tags_order_idx" ON "_pages_v_blocks_portfolio_header1_tags" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio_header1_tags_parent_id_idx" ON "_pages_v_blocks_portfolio_header1_tags" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio_header1_order_idx" ON "_pages_v_blocks_portfolio_header1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio_header1_parent_id_idx" ON "_pages_v_blocks_portfolio_header1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio_header1_path_idx" ON "_pages_v_blocks_portfolio_header1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_portfolio_header2_tags_order_idx" ON "_pages_v_blocks_portfolio_header2_tags" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio_header2_tags_parent_id_idx" ON "_pages_v_blocks_portfolio_header2_tags" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio_header2_order_idx" ON "_pages_v_blocks_portfolio_header2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio_header2_parent_id_idx" ON "_pages_v_blocks_portfolio_header2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio_header2_path_idx" ON "_pages_v_blocks_portfolio_header2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_portfolio_header2_image_idx" ON "_pages_v_blocks_portfolio_header2" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_pricing5_feature_sections_order_idx" ON "_pages_v_blocks_pricing5_feature_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing5_feature_sections_parent_id_idx" ON "_pages_v_blocks_pricing5_feature_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing5_feature_sections_icon_icon_src_idx" ON "_pages_v_blocks_pricing5_feature_sections" USING btree ("icon_src_id");
  CREATE INDEX "_pages_v_blocks_pricing5_pricing_plan_features_order_idx" ON "_pages_v_blocks_pricing5_pricing_plan_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing5_pricing_plan_features_parent_id_idx" ON "_pages_v_blocks_pricing5_pricing_plan_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing5_order_idx" ON "_pages_v_blocks_pricing5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing5_parent_id_idx" ON "_pages_v_blocks_pricing5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing5_path_idx" ON "_pages_v_blocks_pricing5" USING btree ("_path");
  CREATE INDEX "_stats_1_v_buttons_order_idx" ON "_stats_1_v_buttons" USING btree ("_order");
  CREATE INDEX "_stats_1_v_buttons_parent_id_idx" ON "_stats_1_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_stats_1_v_stats_order_idx" ON "_stats_1_v_stats" USING btree ("_order");
  CREATE INDEX "_stats_1_v_stats_parent_id_idx" ON "_stats_1_v_stats" USING btree ("_parent_id");
  CREATE INDEX "_stats_1_v_order_idx" ON "_stats_1_v" USING btree ("_order");
  CREATE INDEX "_stats_1_v_parent_id_idx" ON "_stats_1_v" USING btree ("_parent_id");
  CREATE INDEX "_stats_1_v_path_idx" ON "_stats_1_v" USING btree ("_path");
  CREATE INDEX "_stats_3_v_buttons_order_idx" ON "_stats_3_v_buttons" USING btree ("_order");
  CREATE INDEX "_stats_3_v_buttons_parent_id_idx" ON "_stats_3_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_stats_3_v_stats_order_idx" ON "_stats_3_v_stats" USING btree ("_order");
  CREATE INDEX "_stats_3_v_stats_parent_id_idx" ON "_stats_3_v_stats" USING btree ("_parent_id");
  CREATE INDEX "_stats_3_v_order_idx" ON "_stats_3_v" USING btree ("_order");
  CREATE INDEX "_stats_3_v_parent_id_idx" ON "_stats_3_v" USING btree ("_parent_id");
  CREATE INDEX "_stats_3_v_path_idx" ON "_stats_3_v" USING btree ("_path");
  CREATE INDEX "_stats_3_v_image_image_src_idx" ON "_stats_3_v" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_team1_team_members_social_links_order_idx" ON "_pages_v_blocks_team1_team_members_social_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team1_team_members_social_links_parent_id_idx" ON "_pages_v_blocks_team1_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team1_team_members_order_idx" ON "_pages_v_blocks_team1_team_members" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team1_team_members_parent_id_idx" ON "_pages_v_blocks_team1_team_members" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team1_team_members_image_idx" ON "_pages_v_blocks_team1_team_members" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_team1_order_idx" ON "_pages_v_blocks_team1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team1_parent_id_idx" ON "_pages_v_blocks_team1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team1_path_idx" ON "_pages_v_blocks_team1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_team2_team_members_social_links_order_idx" ON "_pages_v_blocks_team2_team_members_social_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team2_team_members_social_links_parent_id_idx" ON "_pages_v_blocks_team2_team_members_social_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team2_team_members_order_idx" ON "_pages_v_blocks_team2_team_members" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team2_team_members_parent_id_idx" ON "_pages_v_blocks_team2_team_members" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team2_team_members_image_idx" ON "_pages_v_blocks_team2_team_members" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_team2_order_idx" ON "_pages_v_blocks_team2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_team2_parent_id_idx" ON "_pages_v_blocks_team2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_team2_path_idx" ON "_pages_v_blocks_team2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_order_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_image_image_src_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_avatar_avatar_src_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("avatar_src_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_order_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial3_parent_id_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_path_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_order_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_avatar_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_logo_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_order_idx" ON "_pages_v_blocks_testimonial6" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial6_parent_id_idx" ON "_pages_v_blocks_testimonial6" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_path_idx" ON "_pages_v_blocks_testimonial6" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_timeline1_buttons_order_idx" ON "_pages_v_blocks_timeline1_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_buttons_parent_id_idx" ON "_pages_v_blocks_timeline1_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_buttons_order_idx" ON "_pages_v_blocks_timeline1_timelines_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_buttons_parent_id_idx" ON "_pages_v_blocks_timeline1_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_order_idx" ON "_pages_v_blocks_timeline1_timelines" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_parent_id_idx" ON "_pages_v_blocks_timeline1_timelines" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_order_idx" ON "_pages_v_blocks_timeline1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_parent_id_idx" ON "_pages_v_blocks_timeline1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_path_idx" ON "_pages_v_blocks_timeline1" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "contact_submissions_updated_at_idx" ON "contact_submissions" USING btree ("updated_at");
  CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");
  CREATE INDEX "form_custom_2_submissions_updated_at_idx" ON "form_custom_2_submissions" USING btree ("updated_at");
  CREATE INDEX "form_custom_2_submissions_created_at_idx" ON "form_custom_2_submissions" USING btree ("created_at");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_custom_2_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_custom_2_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_navbar11_config_nav_links_sub_menu_links_order_idx" ON "header_navbar11_config_nav_links_sub_menu_links" USING btree ("_order");
  CREATE INDEX "header_navbar11_config_nav_links_sub_menu_links_parent_id_idx" ON "header_navbar11_config_nav_links_sub_menu_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar11_config_nav_links_order_idx" ON "header_navbar11_config_nav_links" USING btree ("_order");
  CREATE INDEX "header_navbar11_config_nav_links_parent_id_idx" ON "header_navbar11_config_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar11_config_buttons_order_idx" ON "header_navbar11_config_buttons" USING btree ("_order");
  CREATE INDEX "header_navbar11_config_buttons_parent_id_idx" ON "header_navbar11_config_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_column_links_links_order_idx" ON "footer_footer4_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_column_links_links_parent_id_idx" ON "footer_footer4_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_column_links_order_idx" ON "footer_footer4_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_column_links_parent_id_idx" ON "footer_footer4_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_social_media_links_order_idx" ON "footer_footer4_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_social_media_links_parent_id_idx" ON "footer_footer4_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_footer_links_order_idx" ON "footer_footer4_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_footer_links_parent_id_idx" ON "footer_footer4_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_blog1_buttons" CASCADE;
  DROP TABLE "pages_blocks_blog1_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog1" CASCADE;
  DROP TABLE "pages_blocks_blog5_buttons" CASCADE;
  DROP TABLE "pages_blocks_blog5_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog5" CASCADE;
  DROP TABLE "breadcrumbs" CASCADE;
  DROP TABLE "social_links" CASCADE;
  DROP TABLE "blog_post_header1" CASCADE;
  DROP TABLE "blog_post_header5" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "jobs" CASCADE;
  DROP TABLE "depts" CASCADE;
  DROP TABLE "pages_blocks_career_section1" CASCADE;
  DROP TABLE "comparison_1_comparison_products_products" CASCADE;
  DROP TABLE "comparison_1_comparison_products" CASCADE;
  DROP TABLE "comparison_1_features_items" CASCADE;
  DROP TABLE "comparison_1_features" CASCADE;
  DROP TABLE "comparison_1_buttons" CASCADE;
  DROP TABLE "comparison_1" CASCADE;
  DROP TABLE "comparison_13_products_main_features_items" CASCADE;
  DROP TABLE "comparison_13_products_main_features" CASCADE;
  DROP TABLE "comparison_13_products_features_items" CASCADE;
  DROP TABLE "comparison_13_products_features" CASCADE;
  DROP TABLE "comparison_13_products" CASCADE;
  DROP TABLE "comparison_13" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_cta_custom_2_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta_custom_2" CASCADE;
  DROP TABLE "evt_1_tabs_content" CASCADE;
  DROP TABLE "evt_1_tabs" CASCADE;
  DROP TABLE "evt_1" CASCADE;
  DROP TABLE "evt_3_tabs_content" CASCADE;
  DROP TABLE "evt_3_tabs" CASCADE;
  DROP TABLE "evt_3" CASCADE;
  DROP TABLE "evt_hdr_1_filters" CASCADE;
  DROP TABLE "evt_hdr_1_events" CASCADE;
  DROP TABLE "evt_hdr_1" CASCADE;
  DROP TABLE "evt_hdr_3_featured_events" CASCADE;
  DROP TABLE "evt_hdr_3" CASCADE;
  DROP TABLE "evt_hdr_1_2" CASCADE;
  DROP TABLE "evt_hdr_5" CASCADE;
  DROP TABLE "pages_blocks_faq2_questions" CASCADE;
  DROP TABLE "pages_blocks_faq2" CASCADE;
  DROP TABLE "pages_blocks_faq4_questions" CASCADE;
  DROP TABLE "pages_blocks_faq4" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_service_type_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_budget_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_employees_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_countries_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2" CASCADE;
  DROP TABLE "pages_blocks_gallery6_images" CASCADE;
  DROP TABLE "pages_blocks_gallery6" CASCADE;
  DROP TABLE "pages_blocks_gallery19_images" CASCADE;
  DROP TABLE "pages_blocks_gallery19" CASCADE;
  DROP TABLE "pages_blocks_gallery27_images" CASCADE;
  DROP TABLE "pages_blocks_gallery27" CASCADE;
  DROP TABLE "links_1_categories_links" CASCADE;
  DROP TABLE "links_1_categories" CASCADE;
  DROP TABLE "links_1_social_links" CASCADE;
  DROP TABLE "links_1" CASCADE;
  DROP TABLE "pages_blocks_logo1_logos" CASCADE;
  DROP TABLE "pages_blocks_logo1" CASCADE;
  DROP TABLE "pages_blocks_logo2_logos" CASCADE;
  DROP TABLE "pages_blocks_logo2" CASCADE;
  DROP TABLE "pages_blocks_long_content1" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio1" CASCADE;
  DROP TABLE "pages_blocks_portfolio5_projects_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio5_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio5" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header1_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header1" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header2_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header2" CASCADE;
  DROP TABLE "pages_blocks_pricing5_feature_sections" CASCADE;
  DROP TABLE "pages_blocks_pricing5_pricing_plan_features" CASCADE;
  DROP TABLE "pages_blocks_pricing5" CASCADE;
  DROP TABLE "stats_1_buttons" CASCADE;
  DROP TABLE "stats_1_stats" CASCADE;
  DROP TABLE "stats_1" CASCADE;
  DROP TABLE "stats_3_buttons" CASCADE;
  DROP TABLE "stats_3_stats" CASCADE;
  DROP TABLE "stats_3" CASCADE;
  DROP TABLE "pages_blocks_team1_team_members_social_links" CASCADE;
  DROP TABLE "pages_blocks_team1_team_members" CASCADE;
  DROP TABLE "pages_blocks_team1" CASCADE;
  DROP TABLE "pages_blocks_team2_team_members_social_links" CASCADE;
  DROP TABLE "pages_blocks_team2_team_members" CASCADE;
  DROP TABLE "pages_blocks_team2" CASCADE;
  DROP TABLE "pages_blocks_testimonial3_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial3" CASCADE;
  DROP TABLE "pages_blocks_testimonial6_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial6" CASCADE;
  DROP TABLE "pages_blocks_timeline1_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline1_timelines_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline1_timelines" CASCADE;
  DROP TABLE "pages_blocks_timeline1" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5" CASCADE;
  DROP TABLE "_breadcrumbs_v" CASCADE;
  DROP TABLE "_social_links_v" CASCADE;
  DROP TABLE "_blog_post_header1_v" CASCADE;
  DROP TABLE "_blog_post_header5_v" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_jobs_v" CASCADE;
  DROP TABLE "_depts_v" CASCADE;
  DROP TABLE "_pages_v_blocks_career_section1" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products_products" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products" CASCADE;
  DROP TABLE "_comparison_1_v_features_items" CASCADE;
  DROP TABLE "_comparison_1_v_features" CASCADE;
  DROP TABLE "_comparison_1_v_buttons" CASCADE;
  DROP TABLE "_comparison_1_v" CASCADE;
  DROP TABLE "_comparison_13_v_products_main_features_items" CASCADE;
  DROP TABLE "_comparison_13_v_products_main_features" CASCADE;
  DROP TABLE "_comparison_13_v_products_features_items" CASCADE;
  DROP TABLE "_comparison_13_v_products_features" CASCADE;
  DROP TABLE "_comparison_13_v_products" CASCADE;
  DROP TABLE "_comparison_13_v" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_custom_2_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_custom_2" CASCADE;
  DROP TABLE "_evt_1_v_tabs_content" CASCADE;
  DROP TABLE "_evt_1_v_tabs" CASCADE;
  DROP TABLE "_evt_1_v" CASCADE;
  DROP TABLE "_evt_3_v_tabs_content" CASCADE;
  DROP TABLE "_evt_3_v_tabs" CASCADE;
  DROP TABLE "_evt_3_v" CASCADE;
  DROP TABLE "_evt_hdr_1_v_filters" CASCADE;
  DROP TABLE "_evt_hdr_1_v_events" CASCADE;
  DROP TABLE "_evt_hdr_1_v" CASCADE;
  DROP TABLE "_evt_hdr_3_v_featured_events" CASCADE;
  DROP TABLE "_evt_hdr_3_v" CASCADE;
  DROP TABLE "_evt_hdr_1_v_2" CASCADE;
  DROP TABLE "_evt_hdr_5_v" CASCADE;
  DROP TABLE "_pages_v_blocks_faq2_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq2" CASCADE;
  DROP TABLE "_pages_v_blocks_faq4_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq4" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_service_type_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_budget_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_employees_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_countries_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery6_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery6" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery19_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery19" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery27_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery27" CASCADE;
  DROP TABLE "_links_1_v_categories_links" CASCADE;
  DROP TABLE "_links_1_v_categories" CASCADE;
  DROP TABLE "_links_1_v_social_links" CASCADE;
  DROP TABLE "_links_1_v" CASCADE;
  DROP TABLE "_pages_v_blocks_logo1_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo1" CASCADE;
  DROP TABLE "_pages_v_blocks_logo2_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo2" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content1" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio5_projects_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio5_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio5" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header1_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header1" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header2_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header2" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing5_feature_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing5_pricing_plan_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing5" CASCADE;
  DROP TABLE "_stats_1_v_buttons" CASCADE;
  DROP TABLE "_stats_1_v_stats" CASCADE;
  DROP TABLE "_stats_1_v" CASCADE;
  DROP TABLE "_stats_3_v_buttons" CASCADE;
  DROP TABLE "_stats_3_v_stats" CASCADE;
  DROP TABLE "_stats_3_v" CASCADE;
  DROP TABLE "_pages_v_blocks_team1_team_members_social_links" CASCADE;
  DROP TABLE "_pages_v_blocks_team1_team_members" CASCADE;
  DROP TABLE "_pages_v_blocks_team1" CASCADE;
  DROP TABLE "_pages_v_blocks_team2_team_members_social_links" CASCADE;
  DROP TABLE "_pages_v_blocks_team2_team_members" CASCADE;
  DROP TABLE "_pages_v_blocks_team2" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial3_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial3" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial6_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial6" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1_timelines_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1_timelines" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "contact_submissions" CASCADE;
  DROP TABLE "form_custom_2_submissions" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_navbar11_config_nav_links_sub_menu_links" CASCADE;
  DROP TABLE "header_navbar11_config_nav_links" CASCADE;
  DROP TABLE "header_navbar11_config_buttons" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer_footer4_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer4_config_column_links" CASCADE;
  DROP TABLE "footer_footer4_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer4_config_footer_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_blog1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_blog5_buttons_variant";
  DROP TYPE "public"."icon_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."var";
  DROP TYPE "public"."sz";
  DROP TYPE "public"."enum_comparison_1_features_items_type";
  DROP TYPE "public"."enum_comparison_1_buttons_variant";
  DROP TYPE "public"."enum_comparison_1_buttons_size";
  DROP TYPE "public"."enum_comparison_13_products_main_features_items_type";
  DROP TYPE "public"."enum_comparison_13_products_features_items_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_custom_2_buttons_variant";
  DROP TYPE "public"."enum_evt_1_tabs_content_button_variant";
  DROP TYPE "public"."enum_evt_1_tabs_content_button_size";
  DROP TYPE "public"."enum_evt_3_tabs_content_button_variant";
  DROP TYPE "public"."enum_evt_3_tabs_content_button_size";
  DROP TYPE "public"."enum_evt_hdr_3_featured_events_button_variant";
  DROP TYPE "public"."enum_evt_hdr_3_featured_events_button_size";
  DROP TYPE "public"."enum_evt_hdr_3_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_3_event_button_size";
  DROP TYPE "public"."enum_pages_blocks_faq2_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq2_button_size";
  DROP TYPE "public"."enum_pages_blocks_faq4_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq4_button_size";
  DROP TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_variant";
  DROP TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_size";
  DROP TYPE "public"."enum_links_1_categories_links_variant";
  DROP TYPE "public"."enum_links_1_social_links_platform";
  DROP TYPE "public"."enum_links_1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_projects_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_projects_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_button_size";
  DROP TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_variant";
  DROP TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_size";
  DROP TYPE "public"."enum_stats_1_buttons_variant";
  DROP TYPE "public"."enum_stats_1_buttons_size";
  DROP TYPE "public"."enum_stats_3_buttons_variant";
  DROP TYPE "public"."enum_stats_3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_team1_team_members_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team1_footer_button_variant";
  DROP TYPE "public"."enum_pages_blocks_team2_team_members_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team2_footer_button_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline1_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_size";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_blog1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__comparison_1_v_features_items_type";
  DROP TYPE "public"."enum__comparison_1_v_buttons_variant";
  DROP TYPE "public"."enum__comparison_1_v_buttons_size";
  DROP TYPE "public"."enum__comparison_13_v_products_main_features_items_type";
  DROP TYPE "public"."enum__comparison_13_v_products_features_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta_custom_2_buttons_variant";
  DROP TYPE "public"."enum__evt_1_v_tabs_content_button_variant";
  DROP TYPE "public"."enum__evt_1_v_tabs_content_button_size";
  DROP TYPE "public"."enum__evt_3_v_tabs_content_button_variant";
  DROP TYPE "public"."enum__evt_3_v_tabs_content_button_size";
  DROP TYPE "public"."enum__evt_hdr_3_v_featured_events_button_variant";
  DROP TYPE "public"."enum__evt_hdr_3_v_featured_events_button_size";
  DROP TYPE "public"."enum__evt_hdr_3_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_3_v_event_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_faq2_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq2_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_faq4_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq4_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_size";
  DROP TYPE "public"."enum__links_1_v_categories_links_variant";
  DROP TYPE "public"."enum__links_1_v_social_links_platform";
  DROP TYPE "public"."enum__links_1_v_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_size";
  DROP TYPE "public"."enum__stats_1_v_buttons_variant";
  DROP TYPE "public"."enum__stats_1_v_buttons_size";
  DROP TYPE "public"."enum__stats_3_v_buttons_variant";
  DROP TYPE "public"."enum__stats_3_v_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_team1_team_members_social_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_team1_footer_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_team2_team_members_social_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_team2_footer_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_size";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_contact_submissions_status";
  DROP TYPE "public"."enum_form_custom_2_submissions_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_navbar11_config_buttons_variant";
  DROP TYPE "public"."enum_header_navbar11_config_buttons_size";
  DROP TYPE "public"."enum_header_navbar_type";
  DROP TYPE "public"."enum_footer_nav_items_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_social_media_links_platform";
  DROP TYPE "public"."enum_footer_footer_type";`)
}
