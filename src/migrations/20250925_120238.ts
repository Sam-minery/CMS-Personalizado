import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
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
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
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
  
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD CONSTRAINT "pages_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9_social_media_links" ADD CONSTRAINT "pages_blocks_banner9_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9" ADD CONSTRAINT "pages_blocks_banner9_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner9" ADD CONSTRAINT "pages_blocks_banner9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner9_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9" ADD CONSTRAINT "_pages_v_blocks_banner9_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner9" ADD CONSTRAINT "_pages_v_blocks_banner9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  CREATE INDEX "pages_blocks_cta5_buttons_order_idx" ON "pages_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta5_buttons_parent_id_idx" ON "pages_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta5_order_idx" ON "pages_blocks_cta5" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta5_parent_id_idx" ON "pages_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta5_path_idx" ON "pages_blocks_cta5" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_cta5_buttons_order_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta5_buttons_parent_id_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta5_order_idx" ON "_pages_v_blocks_cta5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta5_parent_id_idx" ON "_pages_v_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta5_path_idx" ON "_pages_v_blocks_cta5" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_testimonial5_path_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_banner1" CASCADE;
  DROP TABLE "pages_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner4" CASCADE;
  DROP TABLE "pages_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner9" CASCADE;
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
  DROP TABLE "_pages_v_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9" CASCADE;
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
  DROP TYPE "public"."enum_pages_blocks_banner1_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform";
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
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform";
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
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_size";`)
}
