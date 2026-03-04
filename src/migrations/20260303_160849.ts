import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_hs_left_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."app" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."sz" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_comparison_1_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_comparison_1_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta2_senda_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta2_senda_buttons_appearance" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum_cta2_senda_buttons_size" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum_pages_blocks_cta2_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cards_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_multi_form_senda_end_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_multi_form_senda_font_family" AS ENUM('default', 'Arial, sans-serif', 'Georgia, serif', '"Inter", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_ls_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_lss_sections_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lss_sections_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_lss_btns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lss_btns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout_senda_sections_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_ps_plans_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_ps_plans_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_pricing_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_faq_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header1_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_blog_post_header5_social_media_links_icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header5_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog5_tabs_content_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog5_featured_blog_post_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_blog5_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'header138', 'heroTemplate', 'heroSenda');
  CREATE TYPE "public"."enum_pages_hero_hero_senda_image_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_hero_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."t" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."img1_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."img2_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__hs_left_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__comparison_1_v_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_appearance" AS ENUM('default', 'secondary', 'outline', 'link');
  CREATE TYPE "public"."enum__cta2_senda_buttons_v_size" AS ENUM('sm', 'lg', 'clear');
  CREATE TYPE "public"."enum__pages_v_blocks_cta2_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_cards_gap" AS ENUM('xs', 'sm', 'medium', 'lg', 'xl', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cards_senda_card_size" AS ENUM('sm', 'md', 'lg', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form_senda_end_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form_senda_font_family" AS ENUM('default', 'Arial, sans-serif', 'Georgia, serif', '"Inter", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__ls_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lss_sections_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lss_sections_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__lss_btns_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lss_btns_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_senda_sections_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__ps_plans_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__ps_plans_v_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_social_links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header1_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__blog_post_header5_v_social_media_links_icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__blog_post_header5_v_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_tabs_content_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_featured_blog_post_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_blog5_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'header138', 'heroTemplate', 'heroSenda');
  CREATE TYPE "public"."enum__pages_v_version_hero_hero_senda_image_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_hero_senda_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contact_submissions_status" AS ENUM('new', 'reviewing', 'responded', 'closed');
  CREATE TYPE "public"."enum_form_custom_2_submissions_source" AS ENUM('form-custom-2', 'multi-form-2', 'banner1', 'contact1', 'contact5');
  CREATE TYPE "public"."enum_form_custom_2_submissions_status" AS ENUM('new', 'reviewing', 'responded', 'closed');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar11_config_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_header_navbar11_config_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_header_navbar1_config_nav_links_sub_menu_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar1_config_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar1_config_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar1_config_buttons_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_header_navbar1_config_buttons_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_cat_link_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_cat_link_items_button_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_cat_link_items_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_featured_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_featured_links_button_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_featured_links_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_links_mega_menu_button_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_links_mega_menu_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_links_mega_menu_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_navbar5_buttons_size" AS ENUM('sm', 'primary');
  CREATE TYPE "public"."enum_navbar5_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_navbar5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_senda_sub_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_senda_nav_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_senda_btns_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_senda_btns_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_senda_btns_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar5', 'navbar11', 'navbarTemplate', 'navbar_senda');
  CREATE TYPE "public"."enum_header_navbar5_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_login_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_signup_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_senda_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer1_config_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer1_config_column_links_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer1_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer4_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_column_links_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_social_media_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_social_media_links_icon" AS ENUM('facebook', 'instagram', 'x', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer5_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_product_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_company_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_footer_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_social_links_platform" AS ENUM('twitter', 'instagram', 'linkedin');
  CREATE TYPE "public"."enum_footer_footer_template_config_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_senda_config_column_links_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_social_media_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_footer_footer_senda_config_footer_links_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer1', 'footer4', 'footer5', 'footerTemplate', 'footerSenda');
  CREATE TYPE "public"."enum_footer_footer1_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer1_config_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_footer_footer1_config_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_footer_footer1_config_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer4_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer5_config_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_footer_footer5_config_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_footer_footer5_config_terms_and_conditions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_template_config_cta_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_footer_senda_config_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_senda_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
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
  
  CREATE TABLE "hs_left_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_hs_left_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'default',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_pages_blocks_banner4_social_media_links_platform",
  	"type" "enum_pages_blocks_banner4_social_media_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar
  );
  
  CREATE TABLE "pages_blocks_banner4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_banner4_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_type" "enum_pages_blocks_banner1_button_type" DEFAULT 'reference',
  	"button_new_tab" boolean,
  	"button_url" varchar,
  	"button_label" varchar,
  	"button_size" "enum_pages_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_banner1_button_variant" DEFAULT 'default',
  	"button_button_submits_form" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_banner1_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
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
  	"id" varchar PRIMARY KEY NOT NULL
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
  	"link_type" "enum_comparison_1_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_right" boolean DEFAULT false
  );
  
  CREATE TABLE "comparison_1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"comparison_title" varchar DEFAULT 'Product comparison',
  	"block_name" varchar
  );
  
  CREATE TABLE "cta2_senda_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cta2_senda_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "enum_cta2_senda_buttons_appearance" DEFAULT 'default',
  	"size" "enum_cta2_senda_buttons_size" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_cta2_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_id" integer,
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_cta2_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_senda_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"title_color" varchar,
  	"image_id" integer,
  	"expanded_content" jsonb,
  	"expanded_content_color" varchar,
  	"back_content" jsonb,
  	"back_background_color" varchar,
  	"avatar_image_id" integer,
  	"user_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cards_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_content_color" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_cards_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum_pages_blocks_cards_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum_pages_blocks_cards_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_multi_form_senda_steps_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_multi_form_senda_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb
  );
  
  CREATE TABLE "pages_blocks_multi_form_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"intro_rich_text" jsonb,
  	"start_button_label" varchar DEFAULT 'Comenzar',
  	"start_button_icon_s_v_g" varchar,
  	"end_rich_text" jsonb,
  	"end_button_link_type" "enum_pages_blocks_multi_form_senda_end_button_link_type" DEFAULT 'reference',
  	"end_button_link_new_tab" boolean,
  	"end_button_link_url" varchar,
  	"end_button_link_label" varchar,
  	"end_button_label" varchar,
  	"end_button_icon_s_v_g" varchar,
  	"options_background_color" varchar,
  	"background_color" varchar,
  	"form_background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_multi_form_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ls_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Subheading icon',
  	"content" jsonb
  );
  
  CREATE TABLE "ls_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_ls_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'secondary',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_layout_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Layout SENDA image',
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_layout_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "lss_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Section icon',
  	"rich_text" jsonb,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_lss_sections_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_lss_sections_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "lss_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_lss_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_lss_btns_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_layout_senda_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum_pages_blocks_layout_senda_sections_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "ps_elements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"text" varchar
  );
  
  CREATE TABLE "ps_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum_ps_plans_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_ps_plans_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_pricing_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_pricing_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "faq_senda_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"questions_section_background_color" varchar,
  	"questions_section_border_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_faq_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_post_header1_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum_blog_post_header1_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header1_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_type" "icon_type" DEFAULT 'link',
  	"link_type" "enum_blog_post_header1_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_blog_post_header1_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "blog_post_header5_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_type" "enum_blog_post_header5_social_media_links_icon_type" DEFAULT 'link',
  	"link_type" "enum_blog_post_header5_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar DEFAULT 'Category',
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_blog5_tabs_content_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"post_content" jsonb,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"content" jsonb,
  	"default_value" varchar DEFAULT 'view-all',
  	"featured_blog_post_type" "enum_pages_blocks_blog5_featured_blog_post_type" DEFAULT 'reference',
  	"featured_blog_post_new_tab" boolean,
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_post_content" jsonb,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum_pages_blocks_blog5_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_rich_text" jsonb,
  	"hero_media_id" integer,
  	"hero_hero_senda_image_use_media" boolean DEFAULT true,
  	"hero_hero_senda_image_media_id" integer,
  	"hero_hero_senda_image_url" varchar,
  	"hero_hero_senda_image_alt" varchar,
  	"hero_hero_senda_image_button_link_type" "enum_pages_hero_hero_senda_image_button_link_type" DEFAULT 'reference',
  	"hero_hero_senda_image_button_link_new_tab" boolean,
  	"hero_hero_senda_image_button_link_url" varchar,
  	"hero_hero_senda_image_button_link_label" varchar,
  	"hero_hero_senda_image_button_icon_s_v_g" varchar,
  	"hero_hero_senda_background_color" varchar,
  	"hero_hero_senda_text_color" varchar,
  	"hero_hero_senda_bold_text_color" varchar,
  	"hero_hero_senda_button_background_color" varchar,
  	"hero_hero_senda_button_text_color" varchar,
  	"hero_hero_senda_button2_background_color" varchar,
  	"hero_hero_senda_button2_text_color" varchar,
  	"hero_hero_senda_button3_background_color" varchar,
  	"hero_hero_senda_button3_text_color" varchar,
  	"hero_hero_senda_font_family" "enum_pages_hero_hero_senda_font_family" DEFAULT 'default',
  	"hero_hero_senda_use_custom_font" boolean DEFAULT false,
  	"hero_hero_senda_custom_font_file_id" integer,
  	"hero_hero_senda_custom_font_name" varchar,
  	"hero_header138_heading" varchar DEFAULT 'Medium length hero heading goes here',
  	"hero_header138_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"hero_header138_first_image_use_media" boolean DEFAULT false,
  	"hero_header138_first_image_media_image_id" integer,
  	"hero_header138_first_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"hero_header138_first_image_alt" varchar DEFAULT 'Relume placeholder image 1',
  	"hero_header138_second_image_use_media" boolean DEFAULT false,
  	"hero_header138_second_image_media_image_id" integer,
  	"hero_header138_second_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png',
  	"hero_header138_second_image_alt" varchar DEFAULT 'Relume placeholder image 2',
  	"hero_hero_template_heading" varchar DEFAULT 'Agents that do the work <br /> Approvals that keep you safe.',
  	"hero_hero_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
  	"hero_hero_prim_btn_text" varchar DEFAULT 'Start your free trial',
  	"hero_hero_prim_btn_link_type" "t" DEFAULT 'custom',
  	"hero_hero_prim_btn_link_new_tab" boolean,
  	"hero_hero_prim_btn_link_url" varchar DEFAULT '#',
  	"hero_hero_sec_btn_text" varchar DEFAULT 'View role based demos',
  	"hero_hero_sec_btn_link_type" "t" DEFAULT 'custom',
  	"hero_hero_sec_btn_link_new_tab" boolean,
  	"hero_hero_sec_btn_link_url" varchar DEFAULT '#',
  	"hero_hero_imgs_first_image_type" "img1_type" DEFAULT 'url',
  	"hero_hero_imgs_first_image_upload_id" integer,
  	"hero_hero_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg',
  	"hero_hero_imgs_second_image_type" "img2_type" DEFAULT 'url',
  	"hero_hero_imgs_second_image_upload_id" integer,
  	"hero_hero_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/1.jpg',
  	"hero_hero_imgs_show_gradient" boolean DEFAULT true,
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
  	"posts_id" integer
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
  
  CREATE TABLE "_hs_left_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__hs_left_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'default',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner4_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__pages_v_blocks_banner4_social_media_links_platform",
  	"type" "enum__pages_v_blocks_banner4_social_media_links_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_banner4_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"logo_id" integer,
  	"logo_url" varchar,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_type" "enum__pages_v_blocks_banner1_button_type" DEFAULT 'reference',
  	"button_new_tab" boolean,
  	"button_url" varchar,
  	"button_label" varchar,
  	"button_size" "enum__pages_v_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_banner1_button_variant" DEFAULT 'default',
  	"button_button_submits_form" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_banner1_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
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
  
  CREATE TABLE "_comparison_1_buttons_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__comparison_1_buttons_v_variant" DEFAULT 'secondary',
  	"size" "enum__comparison_1_buttons_v_size" DEFAULT 'md',
  	"link_type" "enum__comparison_1_buttons_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon_right" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comparison_1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"comparison_title" varchar DEFAULT 'Product comparison',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta2_senda_buttons_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cta2_senda_buttons_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "enum__cta2_senda_buttons_v_appearance" DEFAULT 'default',
  	"size" "enum__cta2_senda_buttons_v_size" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta2_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_id" integer,
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_cta2_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_senda_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"title_color" varchar,
  	"image_id" integer,
  	"expanded_content" jsonb,
  	"expanded_content_color" varchar,
  	"back_content" jsonb,
  	"back_background_color" varchar,
  	"avatar_image_id" integer,
  	"user_name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cards_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_content_color" varchar,
  	"background_color" varchar DEFAULT 'transparent',
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_cards_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"cards_gap" "enum__pages_v_blocks_cards_senda_cards_gap" DEFAULT 'medium',
  	"custom_gap" varchar,
  	"card_size" "enum__pages_v_blocks_cards_senda_card_size" DEFAULT 'md',
  	"custom_card_width" varchar,
  	"custom_card_height" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda_steps_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"option_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_rich_text" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_multi_form_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"intro_rich_text" jsonb,
  	"start_button_label" varchar DEFAULT 'Comenzar',
  	"start_button_icon_s_v_g" varchar,
  	"end_rich_text" jsonb,
  	"end_button_link_type" "enum__pages_v_blocks_multi_form_senda_end_button_link_type" DEFAULT 'reference',
  	"end_button_link_new_tab" boolean,
  	"end_button_link_url" varchar,
  	"end_button_link_label" varchar,
  	"end_button_label" varchar,
  	"end_button_icon_s_v_g" varchar,
  	"options_background_color" varchar,
  	"background_color" varchar,
  	"form_background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_multi_form_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ls_sub_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Subheading icon',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ls_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__ls_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"appearance" "app" DEFAULT 'secondary',
  	"size" "sz" DEFAULT 'sm',
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"image_use_media" boolean DEFAULT true,
  	"image_media_image_id" integer,
  	"image_src" varchar,
  	"image_alt" varchar DEFAULT 'Layout SENDA image',
  	"invert_layout" boolean DEFAULT false,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_layout_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_lss_sections_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Section icon',
  	"rich_text" jsonb,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__lss_sections_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__lss_sections_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lss_btns_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__lss_btns_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__lss_btns_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_senda_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_layout_senda_sections_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_ps_elements_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_s_v_g" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ps_plans_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"enable_link" boolean DEFAULT false,
  	"link_type" "enum__ps_plans_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__ps_plans_v_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_pricing_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_faq_senda_questions_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_senda" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"rich_text" jsonb,
  	"background_color" varchar,
  	"questions_section_background_color" varchar,
  	"questions_section_border_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_faq_senda_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blog_post_header1_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum__blog_post_header1_breadcrumbs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header1_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_type" "icon_type" DEFAULT 'link',
  	"link_type" "enum__blog_post_header1_social_links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header1_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__blog_post_header1_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_blog_post_header5_v_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_type" "enum__blog_post_header5_v_social_media_links_icon_type" DEFAULT 'link',
  	"link_type" "enum__blog_post_header5_v_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar DEFAULT 'Category',
  	"content" jsonb,
  	"image_id" integer,
  	"author_avatar_id" integer,
  	"author_full_name" varchar DEFAULT 'Full name',
  	"author_date" varchar DEFAULT '11 Jan 2022',
  	"author_read_time" varchar DEFAULT '5 min read',
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_blog5_tabs_content_type" DEFAULT 'reference',
  	"new_tab" boolean,
  	"url" varchar,
  	"image_id" integer,
  	"category" varchar,
  	"post_content" jsonb,
  	"avatar_id" integer,
  	"full_name" varchar,
  	"date" varchar,
  	"read_time" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"content" jsonb,
  	"default_value" varchar DEFAULT 'view-all',
  	"featured_blog_post_type" "enum__pages_v_blocks_blog5_featured_blog_post_type" DEFAULT 'reference',
  	"featured_blog_post_new_tab" boolean,
  	"featured_blog_post_url" varchar,
  	"featured_blog_post_image_id" integer,
  	"featured_blog_post_category" varchar,
  	"featured_blog_post_post_content" jsonb,
  	"featured_blog_post_avatar_id" integer,
  	"featured_blog_post_full_name" varchar,
  	"featured_blog_post_date" varchar,
  	"featured_blog_post_read_time" varchar,
  	"background_color" varchar,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"font_family" "enum__pages_v_blocks_blog5_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
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
  	"version_hero_hero_senda_image_use_media" boolean DEFAULT true,
  	"version_hero_hero_senda_image_media_id" integer,
  	"version_hero_hero_senda_image_url" varchar,
  	"version_hero_hero_senda_image_alt" varchar,
  	"version_hero_hero_senda_image_button_link_type" "enum__pages_v_version_hero_hero_senda_image_button_link_type" DEFAULT 'reference',
  	"version_hero_hero_senda_image_button_link_new_tab" boolean,
  	"version_hero_hero_senda_image_button_link_url" varchar,
  	"version_hero_hero_senda_image_button_link_label" varchar,
  	"version_hero_hero_senda_image_button_icon_s_v_g" varchar,
  	"version_hero_hero_senda_background_color" varchar,
  	"version_hero_hero_senda_text_color" varchar,
  	"version_hero_hero_senda_bold_text_color" varchar,
  	"version_hero_hero_senda_button_background_color" varchar,
  	"version_hero_hero_senda_button_text_color" varchar,
  	"version_hero_hero_senda_button2_background_color" varchar,
  	"version_hero_hero_senda_button2_text_color" varchar,
  	"version_hero_hero_senda_button3_background_color" varchar,
  	"version_hero_hero_senda_button3_text_color" varchar,
  	"version_hero_hero_senda_font_family" "enum__pages_v_version_hero_hero_senda_font_family" DEFAULT 'default',
  	"version_hero_hero_senda_use_custom_font" boolean DEFAULT false,
  	"version_hero_hero_senda_custom_font_file_id" integer,
  	"version_hero_hero_senda_custom_font_name" varchar,
  	"version_hero_header138_heading" varchar DEFAULT 'Medium length hero heading goes here',
  	"version_hero_header138_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"version_hero_header138_first_image_use_media" boolean DEFAULT false,
  	"version_hero_header138_first_image_media_image_id" integer,
  	"version_hero_header138_first_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"version_hero_header138_first_image_alt" varchar DEFAULT 'Relume placeholder image 1',
  	"version_hero_header138_second_image_use_media" boolean DEFAULT false,
  	"version_hero_header138_second_image_media_image_id" integer,
  	"version_hero_header138_second_image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png',
  	"version_hero_header138_second_image_alt" varchar DEFAULT 'Relume placeholder image 2',
  	"version_hero_hero_template_heading" varchar DEFAULT 'Agents that do the work <br /> Approvals that keep you safe.',
  	"version_hero_hero_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
  	"version_hero_hero_prim_btn_text" varchar DEFAULT 'Start your free trial',
  	"version_hero_hero_prim_btn_link_type" "t" DEFAULT 'custom',
  	"version_hero_hero_prim_btn_link_new_tab" boolean,
  	"version_hero_hero_prim_btn_link_url" varchar DEFAULT '#',
  	"version_hero_hero_sec_btn_text" varchar DEFAULT 'View role based demos',
  	"version_hero_hero_sec_btn_link_type" "t" DEFAULT 'custom',
  	"version_hero_hero_sec_btn_link_new_tab" boolean,
  	"version_hero_hero_sec_btn_link_url" varchar DEFAULT '#',
  	"version_hero_hero_imgs_first_image_type" "img1_type" DEFAULT 'url',
  	"version_hero_hero_imgs_first_image_upload_id" integer,
  	"version_hero_hero_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg',
  	"version_hero_hero_imgs_second_image_type" "img2_type" DEFAULT 'url',
  	"version_hero_hero_imgs_second_image_upload_id" integer,
  	"version_hero_hero_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/1.jpg',
  	"version_hero_hero_imgs_show_gradient" boolean DEFAULT true,
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
  	"posts_id" integer
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
  
  CREATE TABLE "fonts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
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
  	"focal_y" numeric
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
  	"source" "enum_form_custom_2_submissions_source" DEFAULT 'form-custom-2',
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
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
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
  	"fonts_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"contact_submissions_id" integer,
  	"form_custom_2_submissions_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer
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
  	"icon_image_id" integer,
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
  
  CREATE TABLE "header_navbar1_config_nav_links_sub_menu_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_header_navbar1_config_nav_links_sub_menu_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "header_navbar1_config_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_header_navbar1_config_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "header_navbar1_config_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_header_navbar1_config_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"size" "enum_header_navbar1_config_buttons_size" DEFAULT 'lg',
  	"variant" "enum_header_navbar1_config_buttons_variant" DEFAULT 'default'
  );
  
  CREATE TABLE "navbar5_cat_link_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navbar5_cat_link_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum_navbar5_cat_link_items_button_size" DEFAULT 'sm',
  	"button_variant" "enum_navbar5_cat_link_items_button_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "navbar5_cat_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "navbar5_featured_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_navbar5_featured_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"image_src" varchar,
  	"image_alt" varchar,
  	"title" varchar,
  	"description" varchar,
  	"button_title" varchar,
  	"button_size" "enum_navbar5_featured_links_button_size" DEFAULT 'sm',
  	"button_variant" "enum_navbar5_featured_links_button_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE "navbar5_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_navbar5_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"mega_menu_featured_sections_title" varchar,
  	"mega_menu_button_title" varchar,
  	"mega_menu_button_size" "enum_navbar5_links_mega_menu_button_size" DEFAULT 'sm',
  	"mega_menu_button_variant" "enum_navbar5_links_mega_menu_button_variant" DEFAULT 'primary',
  	"mega_menu_button_link_type" "enum_navbar5_links_mega_menu_button_link_type" DEFAULT 'reference',
  	"mega_menu_button_link_new_tab" boolean,
  	"mega_menu_button_link_url" varchar
  );
  
  CREATE TABLE "navbar5_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"size" "enum_navbar5_buttons_size" DEFAULT 'sm',
  	"variant" "enum_navbar5_buttons_variant" DEFAULT 'primary',
  	"link_type" "enum_navbar5_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "header_navbar_template_config_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Link',
  	"link_type" "enum_header_navbar_template_config_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "senda_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_senda_sub_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "senda_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_senda_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "senda_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_senda_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"size" "enum_senda_btns_size" DEFAULT 'lg',
  	"variant" "enum_senda_btns_variant" DEFAULT 'default',
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"navbar_type" "enum_header_navbar_type" DEFAULT 'default',
  	"navbar11_config_logo_url" varchar DEFAULT '#',
  	"navbar11_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"navbar11_config_logo_image_id" integer,
  	"navbar11_config_logo_alt" varchar DEFAULT 'Company logo',
  	"navbar1_config_logo_use_media" boolean DEFAULT true,
  	"navbar1_config_logo_media_id" integer,
  	"navbar1_config_logo_url" varchar DEFAULT '#',
  	"navbar1_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"navbar1_config_logo_alt" varchar DEFAULT 'Logo image',
  	"navbar5_config_logo_use_media" boolean DEFAULT true,
  	"navbar5_config_logo_media_id" integer,
  	"navbar5_config_logo_url" varchar DEFAULT '#',
  	"navbar5_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"navbar5_config_logo_alt" varchar DEFAULT 'Logo image',
  	"navbar5_config_logo_link_type" "enum_header_navbar5_config_logo_link_type" DEFAULT 'reference',
  	"navbar5_config_logo_link_new_tab" boolean,
  	"navbar5_config_logo_link_url" varchar,
  	"navbar_template_config_logo_image_id" integer,
  	"navbar_template_config_logo_text" varchar DEFAULT 'Logo',
  	"navbar_template_config_logo_link_type" "enum_header_navbar_template_config_logo_link_type" DEFAULT 'reference',
  	"navbar_template_config_logo_link_new_tab" boolean,
  	"navbar_template_config_logo_link_url" varchar,
  	"navbar_template_config_login_button_title" varchar DEFAULT 'Login',
  	"navbar_template_config_login_button_link_type" "enum_header_navbar_template_config_login_button_link_type" DEFAULT 'reference',
  	"navbar_template_config_login_button_link_new_tab" boolean,
  	"navbar_template_config_login_button_link_url" varchar,
  	"navbar_template_config_signup_button_title" varchar DEFAULT 'Signup',
  	"navbar_template_config_signup_button_link_type" "enum_header_navbar_template_config_signup_button_link_type" DEFAULT 'reference',
  	"navbar_template_config_signup_button_link_new_tab" boolean,
  	"navbar_template_config_signup_button_link_url" varchar,
  	"navbar_senda_config_logo_use_media" boolean DEFAULT true,
  	"navbar_senda_config_logo_media_id" integer,
  	"navbar_senda_config_logo_url" varchar DEFAULT '#',
  	"navbar_senda_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"navbar_senda_config_logo_alt" varchar DEFAULT 'Logo image',
  	"navbar_senda_config_background_color" varchar,
  	"navbar_senda_config_text_color" varchar,
  	"navbar_senda_config_bold_text_color" varchar,
  	"navbar_senda_config_button_background_color" varchar,
  	"navbar_senda_config_button_text_color" varchar,
  	"navbar_senda_config_font_family" "enum_header_navbar_senda_config_font_family" DEFAULT 'default',
  	"navbar_senda_config_use_custom_font" boolean DEFAULT false,
  	"navbar_senda_config_custom_font_file_id" integer,
  	"navbar_senda_config_custom_font_name" varchar,
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
  
  CREATE TABLE "footer_footer1_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer1_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum_footer_footer1_config_column_links_links_icon"
  );
  
  CREATE TABLE "footer_footer1_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "footer_footer1_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer1_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer4_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer4_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
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
  	"link_type" "enum_footer_footer4_config_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"platform" "enum_footer_footer4_config_social_media_links_platform"
  );
  
  CREATE TABLE "footer_footer4_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer4_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer5_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer5_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer5_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "footer_footer5_config_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_footer5_config_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"icon" "enum_footer_footer5_config_social_media_links_icon"
  );
  
  CREATE TABLE "footer_footer5_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer5_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_product_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer_template_config_product_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_company_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer_template_config_company_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_type" "enum_footer_footer_template_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_template_config_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_footer_footer_template_config_social_links_platform" DEFAULT 'twitter',
  	"link_type" "enum_footer_footer_template_config_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_column_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_column_links_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_column_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "footer_footer_senda_config_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_social_media_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"platform" "enum_footer_footer_senda_config_social_media_links_platform",
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "footer_footer_senda_config_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title_rich_text" jsonb,
  	"link_type" "enum_footer_footer_senda_config_footer_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"footer_type" "enum_footer_footer_type" DEFAULT 'default',
  	"footer1_config_logo_media_id" integer,
  	"footer1_config_logo_link_type" "enum_footer_footer1_config_logo_link_type" DEFAULT 'reference',
  	"footer1_config_logo_link_new_tab" boolean,
  	"footer1_config_logo_link_url" varchar,
  	"footer1_config_newsletter_description" varchar DEFAULT 'Join our newsletter to stay up to date on features and releases.',
  	"footer1_config_input_placeholder" varchar DEFAULT 'Enter your email',
  	"footer1_config_button_title" varchar DEFAULT 'Subscribe',
  	"footer1_config_button_size" "enum_footer_footer1_config_button_size" DEFAULT 'sm',
  	"footer1_config_button_variant" "enum_footer_footer1_config_button_variant" DEFAULT 'secondary',
  	"footer1_config_terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our',
  	"footer1_config_terms_and_conditions_link_type" "enum_footer_footer1_config_terms_and_conditions_link_type" DEFAULT 'reference',
  	"footer1_config_terms_and_conditions_link_new_tab" boolean,
  	"footer1_config_terms_and_conditions_link_url" varchar,
  	"footer1_config_terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.',
  	"footer1_config_footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"footer4_config_logo_media_id" integer,
  	"footer4_config_logo_link_type" "enum_footer_footer4_config_logo_link_type" DEFAULT 'reference',
  	"footer4_config_logo_link_new_tab" boolean,
  	"footer4_config_logo_link_url" varchar,
  	"footer4_config_footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"footer5_config_logo_media_id" integer,
  	"footer5_config_logo_link_type" "enum_footer_footer5_config_logo_link_type" DEFAULT 'reference',
  	"footer5_config_logo_link_new_tab" boolean,
  	"footer5_config_logo_link_url" varchar,
  	"footer5_config_newsletter_heading" varchar DEFAULT 'Join our newsletter',
  	"footer5_config_newsletter_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"footer5_config_input_placeholder" varchar DEFAULT 'Enter your email',
  	"footer5_config_button_title" varchar DEFAULT 'Subscribe',
  	"footer5_config_button_size" "enum_footer_footer5_config_button_size" DEFAULT 'sm',
  	"footer5_config_button_variant" "enum_footer_footer5_config_button_variant" DEFAULT 'secondary',
  	"footer5_config_terms_and_conditions_text" varchar DEFAULT 'By subscribing you agree to with our',
  	"footer5_config_terms_and_conditions_link_type" "enum_footer_footer5_config_terms_and_conditions_link_type" DEFAULT 'reference',
  	"footer5_config_terms_and_conditions_link_new_tab" boolean,
  	"footer5_config_terms_and_conditions_link_url" varchar,
  	"footer5_config_terms_and_conditions_suffix" varchar DEFAULT 'and provide consent to receive updates from our company.',
  	"footer5_config_footer_text" varchar DEFAULT '© 2024 Relume. All rights reserved.',
  	"footer_template_config_logo_image_id" integer,
  	"footer_template_config_logo_text" varchar DEFAULT 'Logo',
  	"footer_template_config_logo_link_type" "enum_footer_footer_template_config_logo_link_type" DEFAULT 'reference',
  	"footer_template_config_logo_link_new_tab" boolean,
  	"footer_template_config_logo_link_url" varchar,
  	"footer_template_config_subheading" varchar DEFAULT 'Safe, observable, outcome-driven AI',
  	"footer_template_config_cta_button_title" varchar DEFAULT 'Start a 30-day trial',
  	"footer_template_config_cta_button_link_type" "enum_footer_footer_template_config_cta_button_link_type" DEFAULT 'reference',
  	"footer_template_config_cta_button_link_new_tab" boolean,
  	"footer_template_config_cta_button_link_url" varchar,
  	"footer_template_config_newsletter_description" varchar DEFAULT 'Get the latest product news and behind the scenes updates.',
  	"footer_template_config_newsletter_placeholder" varchar DEFAULT 'Your email',
  	"footer_template_config_footer_text" varchar DEFAULT '© 2026 Agenforce AI. All rights reserved.',
  	"footer_senda_config_logo_media_id" integer,
  	"footer_senda_config_logo_link_type" "enum_footer_footer_senda_config_logo_link_type" DEFAULT 'reference',
  	"footer_senda_config_logo_link_new_tab" boolean,
  	"footer_senda_config_logo_link_url" varchar,
  	"footer_senda_config_logo_link_anchor_id" varchar,
  	"footer_senda_config_footer_text" jsonb,
  	"footer_senda_config_background_color" varchar,
  	"footer_senda_config_text_color" varchar,
  	"footer_senda_config_bold_text_color" varchar,
  	"footer_senda_config_font_family" "enum_footer_footer_senda_config_font_family" DEFAULT 'default',
  	"footer_senda_config_use_custom_font" boolean DEFAULT false,
  	"footer_senda_config_custom_font_file_id" integer,
  	"footer_senda_config_custom_font_name" varchar,
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
  ALTER TABLE "hs_left_btns" ADD CONSTRAINT "hs_left_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4_social_media_links" ADD CONSTRAINT "pages_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner4" ADD CONSTRAINT "pages_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1_projects" ADD CONSTRAINT "pages_blocks_portfolio1_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1_projects" ADD CONSTRAINT "pages_blocks_portfolio1_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_portfolio1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_portfolio1" ADD CONSTRAINT "pages_blocks_portfolio1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products_products" ADD CONSTRAINT "comparison_1_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products_products" ADD CONSTRAINT "comparison_1_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_comparison_products" ADD CONSTRAINT "comparison_1_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_features_items" ADD CONSTRAINT "comparison_1_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_features" ADD CONSTRAINT "comparison_1_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1_buttons" ADD CONSTRAINT "comparison_1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comparison_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comparison_1" ADD CONSTRAINT "comparison_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta2_senda_buttons" ADD CONSTRAINT "cta2_senda_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta2_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta2_senda" ADD CONSTRAINT "pages_blocks_cta2_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda_cards" ADD CONSTRAINT "pages_blocks_cards_senda_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cards_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cards_senda" ADD CONSTRAINT "pages_blocks_cards_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda_steps_options" ADD CONSTRAINT "pages_blocks_multi_form_senda_steps_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda_steps" ADD CONSTRAINT "pages_blocks_multi_form_senda_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD CONSTRAINT "pages_blocks_multi_form_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_multi_form_senda" ADD CONSTRAINT "pages_blocks_multi_form_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ls_sub" ADD CONSTRAINT "ls_sub_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ls_sub" ADD CONSTRAINT "ls_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ls_btns" ADD CONSTRAINT "ls_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda" ADD CONSTRAINT "pages_blocks_layout_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lss_sections" ADD CONSTRAINT "lss_sections_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lss_sections" ADD CONSTRAINT "lss_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lss_btns" ADD CONSTRAINT "lss_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_senda_sections" ADD CONSTRAINT "pages_blocks_layout_senda_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ps_elements" ADD CONSTRAINT "ps_elements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ps_plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ps_plans" ADD CONSTRAINT "ps_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_senda" ADD CONSTRAINT "pages_blocks_pricing_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_senda_questions" ADD CONSTRAINT "faq_senda_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_senda" ADD CONSTRAINT "pages_blocks_faq_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1_breadcrumbs" ADD CONSTRAINT "blog_post_header1_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1_social_links" ADD CONSTRAINT "blog_post_header1_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header5_social_media_links" ADD CONSTRAINT "blog_post_header5_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs" ADD CONSTRAINT "pages_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_image_media_id_media_id_fk" FOREIGN KEY ("hero_hero_senda_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("hero_hero_senda_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_header138_first_image_media_image_id_media_id_fk" FOREIGN KEY ("hero_header138_first_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_header138_second_image_media_image_id_media_id_fk" FOREIGN KEY ("hero_header138_second_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hs_left_btns_v" ADD CONSTRAINT "_hs_left_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4_social_media_links" ADD CONSTRAINT "_pages_v_blocks_banner4_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_banner4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner4" ADD CONSTRAINT "_pages_v_blocks_banner4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio1_projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1_projects" ADD CONSTRAINT "_pages_v_blocks_portfolio1_projects_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_portfolio1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_portfolio1" ADD CONSTRAINT "_pages_v_blocks_portfolio1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features_items" ADD CONSTRAINT "_comparison_1_v_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features" ADD CONSTRAINT "_comparison_1_v_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_buttons_v" ADD CONSTRAINT "_comparison_1_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v" ADD CONSTRAINT "_comparison_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta2_senda_buttons_v" ADD CONSTRAINT "_cta2_senda_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta2_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta2_senda" ADD CONSTRAINT "_pages_v_blocks_cta2_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_avatar_image_id_media_id_fk" FOREIGN KEY ("avatar_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda_cards" ADD CONSTRAINT "_pages_v_blocks_cards_senda_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cards_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cards_senda" ADD CONSTRAINT "_pages_v_blocks_cards_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps_options" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_steps_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda_steps" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_multi_form_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_multi_form_senda" ADD CONSTRAINT "_pages_v_blocks_multi_form_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ls_sub_v" ADD CONSTRAINT "_ls_sub_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ls_sub_v" ADD CONSTRAINT "_ls_sub_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ls_btns_v" ADD CONSTRAINT "_ls_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda" ADD CONSTRAINT "_pages_v_blocks_layout_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lss_sections_v" ADD CONSTRAINT "_lss_sections_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lss_sections_v" ADD CONSTRAINT "_lss_sections_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lss_btns_v" ADD CONSTRAINT "_lss_btns_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_senda_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_senda_sections" ADD CONSTRAINT "_pages_v_blocks_layout_senda_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ps_elements_v" ADD CONSTRAINT "_ps_elements_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ps_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ps_plans_v" ADD CONSTRAINT "_ps_plans_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_senda" ADD CONSTRAINT "_pages_v_blocks_pricing_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_senda_questions_v" ADD CONSTRAINT "_faq_senda_questions_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_senda"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_senda" ADD CONSTRAINT "_pages_v_blocks_faq_senda_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_breadcrumbs_v" ADD CONSTRAINT "_blog_post_header1_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_social_links_v" ADD CONSTRAINT "_blog_post_header1_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v_social_media_links" ADD CONSTRAINT "_blog_post_header5_v_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_image_media_id_media_id_fk" FOREIGN KEY ("version_hero_hero_senda_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_senda_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("version_hero_hero_senda_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_header138_first_image_media_image_id_media_id_fk" FOREIGN KEY ("version_hero_header138_first_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_header138_second_image_media_image_id_media_id_fk" FOREIGN KEY ("version_hero_header138_second_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_fonts_fk" FOREIGN KEY ("fonts_id") REFERENCES "public"."fonts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_custom_2_submissions_fk" FOREIGN KEY ("form_custom_2_submissions_id") REFERENCES "public"."form_custom_2_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_nav_links_sub_menu_links" ADD CONSTRAINT "header_navbar11_config_nav_links_sub_menu_links_icon_image_id_media_id_fk" FOREIGN KEY ("icon_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_nav_links_sub_menu_links" ADD CONSTRAINT "header_navbar11_config_nav_links_sub_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_navbar11_config_nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_nav_links" ADD CONSTRAINT "header_navbar11_config_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar11_config_buttons" ADD CONSTRAINT "header_navbar11_config_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar1_config_nav_links_sub_menu_links" ADD CONSTRAINT "header_navbar1_config_nav_links_sub_menu_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_navbar1_config_nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar1_config_nav_links" ADD CONSTRAINT "header_navbar1_config_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar1_config_buttons" ADD CONSTRAINT "header_navbar1_config_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_cat_link_items" ADD CONSTRAINT "navbar5_cat_link_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar5_cat_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_cat_links" ADD CONSTRAINT "navbar5_cat_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar5_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_featured_links" ADD CONSTRAINT "navbar5_featured_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navbar5_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_links" ADD CONSTRAINT "navbar5_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navbar5_buttons" ADD CONSTRAINT "navbar5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navbar_template_config_nav_links" ADD CONSTRAINT "header_navbar_template_config_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_sub" ADD CONSTRAINT "senda_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."senda_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_nav" ADD CONSTRAINT "senda_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "senda_btns" ADD CONSTRAINT "senda_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar11_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar11_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar1_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar5_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar_senda_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_senda_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("navbar_senda_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer1_config_column_links_links" ADD CONSTRAINT "footer_footer1_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer1_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer1_config_column_links" ADD CONSTRAINT "footer_footer1_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer1_config_footer_links" ADD CONSTRAINT "footer_footer1_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_column_links_links" ADD CONSTRAINT "footer_footer4_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer4_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_column_links" ADD CONSTRAINT "footer_footer4_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_social_media_links" ADD CONSTRAINT "footer_footer4_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer4_config_footer_links" ADD CONSTRAINT "footer_footer4_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_column_links_links" ADD CONSTRAINT "footer_footer5_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer5_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_column_links" ADD CONSTRAINT "footer_footer5_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_social_media_links" ADD CONSTRAINT "footer_footer5_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer5_config_footer_links" ADD CONSTRAINT "footer_footer5_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_product_links" ADD CONSTRAINT "footer_footer_template_config_product_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_company_links" ADD CONSTRAINT "footer_footer_template_config_company_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_footer_links" ADD CONSTRAINT "footer_footer_template_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_template_config_social_links" ADD CONSTRAINT "footer_footer_template_config_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_column_links_links" ADD CONSTRAINT "footer_footer_senda_config_column_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer_senda_config_column_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_column_links" ADD CONSTRAINT "footer_footer_senda_config_column_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_social_media_links" ADD CONSTRAINT "footer_footer_senda_config_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_footer_senda_config_footer_links" ADD CONSTRAINT "footer_footer_senda_config_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer1_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer4_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer4_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer5_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("footer_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer_senda_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_senda_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_senda_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "hs_left_btns_order_idx" ON "hs_left_btns" USING btree ("_order");
  CREATE INDEX "hs_left_btns_parent_id_idx" ON "hs_left_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_social_media_links_order_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner4_social_media_links_parent_id_idx" ON "pages_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_order_idx" ON "pages_blocks_banner4" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner4_parent_id_idx" ON "pages_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner4_path_idx" ON "pages_blocks_banner4" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner4_logo_idx" ON "pages_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner4_custom_font_file_idx" ON "pages_blocks_banner4" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_banner1_order_idx" ON "pages_blocks_banner1" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner1_parent_id_idx" ON "pages_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner1_path_idx" ON "pages_blocks_banner1" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner1_logo_idx" ON "pages_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner1_custom_font_file_idx" ON "pages_blocks_banner1" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_portfolio1_projects_order_idx" ON "pages_blocks_portfolio1_projects" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio1_projects_parent_id_idx" ON "pages_blocks_portfolio1_projects" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio1_projects_image_idx" ON "pages_blocks_portfolio1_projects" USING btree ("image_id");
  CREATE INDEX "pages_blocks_portfolio1_order_idx" ON "pages_blocks_portfolio1" USING btree ("_order");
  CREATE INDEX "pages_blocks_portfolio1_parent_id_idx" ON "pages_blocks_portfolio1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_portfolio1_path_idx" ON "pages_blocks_portfolio1" USING btree ("_path");
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
  CREATE INDEX "cta2_senda_buttons_order_idx" ON "cta2_senda_buttons" USING btree ("_order");
  CREATE INDEX "cta2_senda_buttons_parent_id_idx" ON "cta2_senda_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta2_senda_order_idx" ON "pages_blocks_cta2_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta2_senda_parent_id_idx" ON "pages_blocks_cta2_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta2_senda_path_idx" ON "pages_blocks_cta2_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta2_senda_image_idx" ON "pages_blocks_cta2_senda" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cta2_senda_custom_font_file_idx" ON "pages_blocks_cta2_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_order_idx" ON "pages_blocks_cards_senda_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_senda_cards_parent_id_idx" ON "pages_blocks_cards_senda_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_image_idx" ON "pages_blocks_cards_senda_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_cards_senda_cards_avatar_image_idx" ON "pages_blocks_cards_senda_cards" USING btree ("avatar_image_id");
  CREATE INDEX "pages_blocks_cards_senda_order_idx" ON "pages_blocks_cards_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_cards_senda_parent_id_idx" ON "pages_blocks_cards_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cards_senda_path_idx" ON "pages_blocks_cards_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_cards_senda_custom_font_file_idx" ON "pages_blocks_cards_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_options_order_idx" ON "pages_blocks_multi_form_senda_steps_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_options_parent_id_idx" ON "pages_blocks_multi_form_senda_steps_options" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_order_idx" ON "pages_blocks_multi_form_senda_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_steps_parent_id_idx" ON "pages_blocks_multi_form_senda_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_order_idx" ON "pages_blocks_multi_form_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_multi_form_senda_parent_id_idx" ON "pages_blocks_multi_form_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_multi_form_senda_path_idx" ON "pages_blocks_multi_form_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_multi_form_senda_custom_font_file_idx" ON "pages_blocks_multi_form_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "ls_sub_order_idx" ON "ls_sub" USING btree ("_order");
  CREATE INDEX "ls_sub_parent_id_idx" ON "ls_sub" USING btree ("_parent_id");
  CREATE INDEX "ls_sub_icon_icon_media_image_idx" ON "ls_sub" USING btree ("icon_media_image_id");
  CREATE INDEX "ls_btns_order_idx" ON "ls_btns" USING btree ("_order");
  CREATE INDEX "ls_btns_parent_id_idx" ON "ls_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_order_idx" ON "pages_blocks_layout_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_senda_parent_id_idx" ON "pages_blocks_layout_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_path_idx" ON "pages_blocks_layout_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_senda_image_image_media_image_idx" ON "pages_blocks_layout_senda" USING btree ("image_media_image_id");
  CREATE INDEX "pages_blocks_layout_senda_custom_font_file_idx" ON "pages_blocks_layout_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "lss_sections_order_idx" ON "lss_sections" USING btree ("_order");
  CREATE INDEX "lss_sections_parent_id_idx" ON "lss_sections" USING btree ("_parent_id");
  CREATE INDEX "lss_sections_icon_icon_media_image_idx" ON "lss_sections" USING btree ("icon_media_image_id");
  CREATE INDEX "lss_btns_order_idx" ON "lss_btns" USING btree ("_order");
  CREATE INDEX "lss_btns_parent_id_idx" ON "lss_btns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_order_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_senda_sections_parent_id_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_senda_sections_path_idx" ON "pages_blocks_layout_senda_sections" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_senda_sections_custom_font_file_idx" ON "pages_blocks_layout_senda_sections" USING btree ("custom_font_file_id");
  CREATE INDEX "ps_elements_order_idx" ON "ps_elements" USING btree ("_order");
  CREATE INDEX "ps_elements_parent_id_idx" ON "ps_elements" USING btree ("_parent_id");
  CREATE INDEX "ps_plans_order_idx" ON "ps_plans" USING btree ("_order");
  CREATE INDEX "ps_plans_parent_id_idx" ON "ps_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_order_idx" ON "pages_blocks_pricing_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_senda_parent_id_idx" ON "pages_blocks_pricing_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_senda_path_idx" ON "pages_blocks_pricing_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_senda_custom_font_file_idx" ON "pages_blocks_pricing_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "faq_senda_questions_order_idx" ON "faq_senda_questions" USING btree ("_order");
  CREATE INDEX "faq_senda_questions_parent_id_idx" ON "faq_senda_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_senda_order_idx" ON "pages_blocks_faq_senda" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_senda_parent_id_idx" ON "pages_blocks_faq_senda" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_senda_path_idx" ON "pages_blocks_faq_senda" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_senda_custom_font_file_idx" ON "pages_blocks_faq_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "blog_post_header1_breadcrumbs_order_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_order");
  CREATE INDEX "blog_post_header1_breadcrumbs_parent_id_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_social_links_order_idx" ON "blog_post_header1_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header1_social_links_parent_id_idx" ON "blog_post_header1_social_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_order_idx" ON "blog_post_header1" USING btree ("_order");
  CREATE INDEX "blog_post_header1_parent_id_idx" ON "blog_post_header1" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_path_idx" ON "blog_post_header1" USING btree ("_path");
  CREATE INDEX "blog_post_header1_image_idx" ON "blog_post_header1" USING btree ("image_id");
  CREATE INDEX "blog_post_header1_author_author_avatar_idx" ON "blog_post_header1" USING btree ("author_avatar_id");
  CREATE INDEX "blog_post_header1_custom_font_file_idx" ON "blog_post_header1" USING btree ("custom_font_file_id");
  CREATE INDEX "blog_post_header5_social_media_links_order_idx" ON "blog_post_header5_social_media_links" USING btree ("_order");
  CREATE INDEX "blog_post_header5_social_media_links_parent_id_idx" ON "blog_post_header5_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header5_order_idx" ON "blog_post_header5" USING btree ("_order");
  CREATE INDEX "blog_post_header5_parent_id_idx" ON "blog_post_header5" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header5_path_idx" ON "blog_post_header5" USING btree ("_path");
  CREATE INDEX "blog_post_header5_image_idx" ON "blog_post_header5" USING btree ("image_id");
  CREATE INDEX "blog_post_header5_author_author_avatar_idx" ON "blog_post_header5" USING btree ("author_avatar_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_order_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_content_parent_id_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_image_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_avatar_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog5_tabs_order_idx" ON "pages_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_parent_id_idx" ON "pages_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_order_idx" ON "pages_blocks_blog5" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_parent_id_idx" ON "pages_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_path_idx" ON "pages_blocks_blog5" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_post_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_po_1_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "pages_blocks_blog5_custom_font_file_idx" ON "pages_blocks_blog5" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_hero_hero_senda_image_hero_hero_senda_image_media_idx" ON "pages" USING btree ("hero_hero_senda_image_media_id");
  CREATE INDEX "pages_hero_hero_hero_senda_custom_font_file_idx" ON "pages" USING btree ("hero_hero_senda_custom_font_file_id");
  CREATE INDEX "pages_hero_header138_first_image_hero_header138_first_im_idx" ON "pages" USING btree ("hero_header138_first_image_media_image_id");
  CREATE INDEX "pages_hero_header138_second_image_hero_header138_second__idx" ON "pages" USING btree ("hero_header138_second_image_media_image_id");
  CREATE INDEX "pages_hero_hero_imgs_hero_hero_imgs_first_image_upload_idx" ON "pages" USING btree ("hero_hero_imgs_first_image_upload_id");
  CREATE INDEX "pages_hero_hero_imgs_hero_hero_imgs_second_image_upload_idx" ON "pages" USING btree ("hero_hero_imgs_second_image_upload_id");
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
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_hs_left_btns_v_order_idx" ON "_hs_left_btns_v" USING btree ("_order");
  CREATE INDEX "_hs_left_btns_v_parent_id_idx" ON "_hs_left_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_social_media_links_order_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner4_social_media_links_parent_id_idx" ON "_pages_v_blocks_banner4_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_order_idx" ON "_pages_v_blocks_banner4" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner4_parent_id_idx" ON "_pages_v_blocks_banner4" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner4_path_idx" ON "_pages_v_blocks_banner4" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner4_logo_idx" ON "_pages_v_blocks_banner4" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner4_custom_font_file_idx" ON "_pages_v_blocks_banner4" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_banner1_order_idx" ON "_pages_v_blocks_banner1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner1_parent_id_idx" ON "_pages_v_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner1_path_idx" ON "_pages_v_blocks_banner1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner1_logo_idx" ON "_pages_v_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner1_custom_font_file_idx" ON "_pages_v_blocks_banner1" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_order_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_parent_id_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_projects_image_idx" ON "_pages_v_blocks_portfolio1_projects" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_order_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_portfolio1_parent_id_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_portfolio1_path_idx" ON "_pages_v_blocks_portfolio1" USING btree ("_path");
  CREATE INDEX "_comparison_1_v_comparison_products_products_order_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_comparison_products_products_parent_id_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_comparison_products_products_icon_idx" ON "_comparison_1_v_comparison_products_products" USING btree ("icon_id");
  CREATE INDEX "_comparison_1_v_comparison_products_order_idx" ON "_comparison_1_v_comparison_products" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_comparison_products_parent_id_idx" ON "_comparison_1_v_comparison_products" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_features_items_order_idx" ON "_comparison_1_v_features_items" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_features_items_parent_id_idx" ON "_comparison_1_v_features_items" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_features_order_idx" ON "_comparison_1_v_features" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_features_parent_id_idx" ON "_comparison_1_v_features" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_buttons_v_order_idx" ON "_comparison_1_buttons_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_buttons_v_parent_id_idx" ON "_comparison_1_buttons_v" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_order_idx" ON "_comparison_1_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_v_parent_id_idx" ON "_comparison_1_v" USING btree ("_parent_id");
  CREATE INDEX "_comparison_1_v_path_idx" ON "_comparison_1_v" USING btree ("_path");
  CREATE INDEX "_cta2_senda_buttons_v_order_idx" ON "_cta2_senda_buttons_v" USING btree ("_order");
  CREATE INDEX "_cta2_senda_buttons_v_parent_id_idx" ON "_cta2_senda_buttons_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_order_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta2_senda_parent_id_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_path_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta2_senda_image_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cta2_senda_custom_font_file_idx" ON "_pages_v_blocks_cta2_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_order_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_parent_id_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_image_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_cards_avatar_image_idx" ON "_pages_v_blocks_cards_senda_cards" USING btree ("avatar_image_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_order_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cards_senda_parent_id_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cards_senda_path_idx" ON "_pages_v_blocks_cards_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cards_senda_custom_font_file_idx" ON "_pages_v_blocks_cards_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_options_order_idx" ON "_pages_v_blocks_multi_form_senda_steps_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_options_parent_id_idx" ON "_pages_v_blocks_multi_form_senda_steps_options" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_order_idx" ON "_pages_v_blocks_multi_form_senda_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_steps_parent_id_idx" ON "_pages_v_blocks_multi_form_senda_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_order_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_parent_id_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_path_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_multi_form_senda_custom_font_file_idx" ON "_pages_v_blocks_multi_form_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_ls_sub_v_order_idx" ON "_ls_sub_v" USING btree ("_order");
  CREATE INDEX "_ls_sub_v_parent_id_idx" ON "_ls_sub_v" USING btree ("_parent_id");
  CREATE INDEX "_ls_sub_v_icon_icon_media_image_idx" ON "_ls_sub_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_ls_btns_v_order_idx" ON "_ls_btns_v" USING btree ("_order");
  CREATE INDEX "_ls_btns_v_parent_id_idx" ON "_ls_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_order_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_senda_parent_id_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_path_idx" ON "_pages_v_blocks_layout_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_senda_image_image_media_image_idx" ON "_pages_v_blocks_layout_senda" USING btree ("image_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_custom_font_file_idx" ON "_pages_v_blocks_layout_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_lss_sections_v_order_idx" ON "_lss_sections_v" USING btree ("_order");
  CREATE INDEX "_lss_sections_v_parent_id_idx" ON "_lss_sections_v" USING btree ("_parent_id");
  CREATE INDEX "_lss_sections_v_icon_icon_media_image_idx" ON "_lss_sections_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_lss_btns_v_order_idx" ON "_lss_btns_v" USING btree ("_order");
  CREATE INDEX "_lss_btns_v_parent_id_idx" ON "_lss_btns_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_order_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_parent_id_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_path_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_senda_sections_custom_font_file_idx" ON "_pages_v_blocks_layout_senda_sections" USING btree ("custom_font_file_id");
  CREATE INDEX "_ps_elements_v_order_idx" ON "_ps_elements_v" USING btree ("_order");
  CREATE INDEX "_ps_elements_v_parent_id_idx" ON "_ps_elements_v" USING btree ("_parent_id");
  CREATE INDEX "_ps_plans_v_order_idx" ON "_ps_plans_v" USING btree ("_order");
  CREATE INDEX "_ps_plans_v_parent_id_idx" ON "_ps_plans_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_order_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_senda_parent_id_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_senda_path_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_senda_custom_font_file_idx" ON "_pages_v_blocks_pricing_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_faq_senda_questions_v_order_idx" ON "_faq_senda_questions_v" USING btree ("_order");
  CREATE INDEX "_faq_senda_questions_v_parent_id_idx" ON "_faq_senda_questions_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_order_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_senda_parent_id_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_senda_path_idx" ON "_pages_v_blocks_faq_senda" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_senda_custom_font_file_idx" ON "_pages_v_blocks_faq_senda" USING btree ("custom_font_file_id");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_order_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_parent_id_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_social_links_v_order_idx" ON "_blog_post_header1_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_social_links_v_parent_id_idx" ON "_blog_post_header1_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_order_idx" ON "_blog_post_header1_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_v_parent_id_idx" ON "_blog_post_header1_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_path_idx" ON "_blog_post_header1_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header1_v_image_idx" ON "_blog_post_header1_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header1_v_author_author_avatar_idx" ON "_blog_post_header1_v" USING btree ("author_avatar_id");
  CREATE INDEX "_blog_post_header1_v_custom_font_file_idx" ON "_blog_post_header1_v" USING btree ("custom_font_file_id");
  CREATE INDEX "_blog_post_header5_v_social_media_links_order_idx" ON "_blog_post_header5_v_social_media_links" USING btree ("_order");
  CREATE INDEX "_blog_post_header5_v_social_media_links_parent_id_idx" ON "_blog_post_header5_v_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header5_v_order_idx" ON "_blog_post_header5_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header5_v_parent_id_idx" ON "_blog_post_header5_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header5_v_path_idx" ON "_blog_post_header5_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header5_v_image_idx" ON "_blog_post_header5_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header5_v_author_author_avatar_idx" ON "_blog_post_header5_v" USING btree ("author_avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_order_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_image_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_avatar_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_order_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_parent_id_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_order_idx" ON "_pages_v_blocks_blog5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_parent_id_idx" ON "_pages_v_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_path_idx" ON "_pages_v_blocks_blog5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_p_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_1_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_custom_font_file_idx" ON "_pages_v_blocks_blog5" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_hero_hero_senda_image_version_hero_hero_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_image_media_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_hero_senda_custom_fon_idx" ON "_pages_v" USING btree ("version_hero_hero_senda_custom_font_file_id");
  CREATE INDEX "_pages_v_version_hero_header138_first_image_version_hero_idx" ON "_pages_v" USING btree ("version_hero_header138_first_image_media_image_id");
  CREATE INDEX "_pages_v_version_hero_header138_second_image_version_her_idx" ON "_pages_v" USING btree ("version_hero_header138_second_image_media_image_id");
  CREATE INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_f_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_first_image_upload_id");
  CREATE INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_s_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_second_image_upload_id");
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
  CREATE INDEX "fonts_updated_at_idx" ON "fonts" USING btree ("updated_at");
  CREATE INDEX "fonts_created_at_idx" ON "fonts" USING btree ("created_at");
  CREATE UNIQUE INDEX "fonts_filename_idx" ON "fonts" USING btree ("filename");
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
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
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
  CREATE INDEX "payload_locked_documents_rels_fonts_id_idx" ON "payload_locked_documents_rels" USING btree ("fonts_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_custom_2_submissions__idx" ON "payload_locked_documents_rels" USING btree ("form_custom_2_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
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
  CREATE INDEX "header_navbar11_config_nav_links_sub_menu_links_icon_ico_idx" ON "header_navbar11_config_nav_links_sub_menu_links" USING btree ("icon_image_id");
  CREATE INDEX "header_navbar11_config_nav_links_order_idx" ON "header_navbar11_config_nav_links" USING btree ("_order");
  CREATE INDEX "header_navbar11_config_nav_links_parent_id_idx" ON "header_navbar11_config_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar11_config_buttons_order_idx" ON "header_navbar11_config_buttons" USING btree ("_order");
  CREATE INDEX "header_navbar11_config_buttons_parent_id_idx" ON "header_navbar11_config_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_navbar1_config_nav_links_sub_menu_links_order_idx" ON "header_navbar1_config_nav_links_sub_menu_links" USING btree ("_order");
  CREATE INDEX "header_navbar1_config_nav_links_sub_menu_links_parent_id_idx" ON "header_navbar1_config_nav_links_sub_menu_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar1_config_nav_links_order_idx" ON "header_navbar1_config_nav_links" USING btree ("_order");
  CREATE INDEX "header_navbar1_config_nav_links_parent_id_idx" ON "header_navbar1_config_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_navbar1_config_buttons_order_idx" ON "header_navbar1_config_buttons" USING btree ("_order");
  CREATE INDEX "header_navbar1_config_buttons_parent_id_idx" ON "header_navbar1_config_buttons" USING btree ("_parent_id");
  CREATE INDEX "navbar5_cat_link_items_order_idx" ON "navbar5_cat_link_items" USING btree ("_order");
  CREATE INDEX "navbar5_cat_link_items_parent_id_idx" ON "navbar5_cat_link_items" USING btree ("_parent_id");
  CREATE INDEX "navbar5_cat_links_order_idx" ON "navbar5_cat_links" USING btree ("_order");
  CREATE INDEX "navbar5_cat_links_parent_id_idx" ON "navbar5_cat_links" USING btree ("_parent_id");
  CREATE INDEX "navbar5_featured_links_order_idx" ON "navbar5_featured_links" USING btree ("_order");
  CREATE INDEX "navbar5_featured_links_parent_id_idx" ON "navbar5_featured_links" USING btree ("_parent_id");
  CREATE INDEX "navbar5_links_order_idx" ON "navbar5_links" USING btree ("_order");
  CREATE INDEX "navbar5_links_parent_id_idx" ON "navbar5_links" USING btree ("_parent_id");
  CREATE INDEX "navbar5_buttons_order_idx" ON "navbar5_buttons" USING btree ("_order");
  CREATE INDEX "navbar5_buttons_parent_id_idx" ON "navbar5_buttons" USING btree ("_parent_id");
  CREATE INDEX "header_navbar_template_config_nav_links_order_idx" ON "header_navbar_template_config_nav_links" USING btree ("_order");
  CREATE INDEX "header_navbar_template_config_nav_links_parent_id_idx" ON "header_navbar_template_config_nav_links" USING btree ("_parent_id");
  CREATE INDEX "senda_sub_order_idx" ON "senda_sub" USING btree ("_order");
  CREATE INDEX "senda_sub_parent_id_idx" ON "senda_sub" USING btree ("_parent_id");
  CREATE INDEX "senda_nav_order_idx" ON "senda_nav" USING btree ("_order");
  CREATE INDEX "senda_nav_parent_id_idx" ON "senda_nav" USING btree ("_parent_id");
  CREATE INDEX "senda_btns_order_idx" ON "senda_btns" USING btree ("_order");
  CREATE INDEX "senda_btns_parent_id_idx" ON "senda_btns" USING btree ("_parent_id");
  CREATE INDEX "header_navbar11_config_logo_navbar11_config_logo_image_idx" ON "header" USING btree ("navbar11_config_logo_image_id");
  CREATE INDEX "header_navbar1_config_logo_navbar1_config_logo_media_idx" ON "header" USING btree ("navbar1_config_logo_media_id");
  CREATE INDEX "header_navbar5_config_logo_navbar5_config_logo_media_idx" ON "header" USING btree ("navbar5_config_logo_media_id");
  CREATE INDEX "header_navbar_template_config_logo_navbar_template_confi_idx" ON "header" USING btree ("navbar_template_config_logo_image_id");
  CREATE INDEX "header_navbar_senda_config_logo_navbar_senda_config_logo_idx" ON "header" USING btree ("navbar_senda_config_logo_media_id");
  CREATE INDEX "header_navbar_senda_config_navbar_senda_config_custom_fo_idx" ON "header" USING btree ("navbar_senda_config_custom_font_file_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_column_links_links_order_idx" ON "footer_footer1_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer1_config_column_links_links_parent_id_idx" ON "footer_footer1_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_column_links_order_idx" ON "footer_footer1_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer1_config_column_links_parent_id_idx" ON "footer_footer1_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_footer_links_order_idx" ON "footer_footer1_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer1_config_footer_links_parent_id_idx" ON "footer_footer1_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_column_links_links_order_idx" ON "footer_footer4_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_column_links_links_parent_id_idx" ON "footer_footer4_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_column_links_order_idx" ON "footer_footer4_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_column_links_parent_id_idx" ON "footer_footer4_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_social_media_links_order_idx" ON "footer_footer4_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_social_media_links_parent_id_idx" ON "footer_footer4_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer4_config_footer_links_order_idx" ON "footer_footer4_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer4_config_footer_links_parent_id_idx" ON "footer_footer4_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_column_links_links_order_idx" ON "footer_footer5_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_column_links_links_parent_id_idx" ON "footer_footer5_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_column_links_order_idx" ON "footer_footer5_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_column_links_parent_id_idx" ON "footer_footer5_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_social_media_links_order_idx" ON "footer_footer5_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_social_media_links_parent_id_idx" ON "footer_footer5_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer5_config_footer_links_order_idx" ON "footer_footer5_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer5_config_footer_links_parent_id_idx" ON "footer_footer5_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_product_links_order_idx" ON "footer_footer_template_config_product_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_product_links_parent_id_idx" ON "footer_footer_template_config_product_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_company_links_order_idx" ON "footer_footer_template_config_company_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_company_links_parent_id_idx" ON "footer_footer_template_config_company_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_footer_links_order_idx" ON "footer_footer_template_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_footer_links_parent_id_idx" ON "footer_footer_template_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_template_config_social_links_order_idx" ON "footer_footer_template_config_social_links" USING btree ("_order");
  CREATE INDEX "footer_footer_template_config_social_links_parent_id_idx" ON "footer_footer_template_config_social_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_column_links_links_order_idx" ON "footer_footer_senda_config_column_links_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_column_links_links_parent_id_idx" ON "footer_footer_senda_config_column_links_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_column_links_order_idx" ON "footer_footer_senda_config_column_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_column_links_parent_id_idx" ON "footer_footer_senda_config_column_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_social_media_links_order_idx" ON "footer_footer_senda_config_social_media_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_social_media_links_parent_id_idx" ON "footer_footer_senda_config_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer_senda_config_footer_links_order_idx" ON "footer_footer_senda_config_footer_links" USING btree ("_order");
  CREATE INDEX "footer_footer_senda_config_footer_links_parent_id_idx" ON "footer_footer_senda_config_footer_links" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_logo_footer1_config_logo_media_idx" ON "footer" USING btree ("footer1_config_logo_media_id");
  CREATE INDEX "footer_footer4_config_logo_footer4_config_logo_media_idx" ON "footer" USING btree ("footer4_config_logo_media_id");
  CREATE INDEX "footer_footer5_config_logo_footer5_config_logo_media_idx" ON "footer" USING btree ("footer5_config_logo_media_id");
  CREATE INDEX "footer_footer_template_config_logo_footer_template_confi_idx" ON "footer" USING btree ("footer_template_config_logo_image_id");
  CREATE INDEX "footer_footer_senda_config_logo_footer_senda_config_logo_idx" ON "footer" USING btree ("footer_senda_config_logo_media_id");
  CREATE INDEX "footer_footer_senda_config_footer_senda_config_custom_fo_idx" ON "footer" USING btree ("footer_senda_config_custom_font_file_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "hs_left_btns" CASCADE;
  DROP TABLE "pages_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner4" CASCADE;
  DROP TABLE "pages_blocks_banner1" CASCADE;
  DROP TABLE "pages_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio1" CASCADE;
  DROP TABLE "comparison_1_comparison_products_products" CASCADE;
  DROP TABLE "comparison_1_comparison_products" CASCADE;
  DROP TABLE "comparison_1_features_items" CASCADE;
  DROP TABLE "comparison_1_features" CASCADE;
  DROP TABLE "comparison_1_buttons" CASCADE;
  DROP TABLE "comparison_1" CASCADE;
  DROP TABLE "cta2_senda_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta2_senda" CASCADE;
  DROP TABLE "pages_blocks_cards_senda_cards" CASCADE;
  DROP TABLE "pages_blocks_cards_senda" CASCADE;
  DROP TABLE "pages_blocks_multi_form_senda_steps_options" CASCADE;
  DROP TABLE "pages_blocks_multi_form_senda_steps" CASCADE;
  DROP TABLE "pages_blocks_multi_form_senda" CASCADE;
  DROP TABLE "ls_sub" CASCADE;
  DROP TABLE "ls_btns" CASCADE;
  DROP TABLE "pages_blocks_layout_senda" CASCADE;
  DROP TABLE "lss_sections" CASCADE;
  DROP TABLE "lss_btns" CASCADE;
  DROP TABLE "pages_blocks_layout_senda_sections" CASCADE;
  DROP TABLE "ps_elements" CASCADE;
  DROP TABLE "ps_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_senda" CASCADE;
  DROP TABLE "faq_senda_questions" CASCADE;
  DROP TABLE "pages_blocks_faq_senda" CASCADE;
  DROP TABLE "blog_post_header1_breadcrumbs" CASCADE;
  DROP TABLE "blog_post_header1_social_links" CASCADE;
  DROP TABLE "blog_post_header1" CASCADE;
  DROP TABLE "blog_post_header5_social_media_links" CASCADE;
  DROP TABLE "blog_post_header5" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog5" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_hs_left_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4" CASCADE;
  DROP TABLE "_pages_v_blocks_banner1" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products_products" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products" CASCADE;
  DROP TABLE "_comparison_1_v_features_items" CASCADE;
  DROP TABLE "_comparison_1_v_features" CASCADE;
  DROP TABLE "_comparison_1_buttons_v" CASCADE;
  DROP TABLE "_comparison_1_v" CASCADE;
  DROP TABLE "_cta2_senda_buttons_v" CASCADE;
  DROP TABLE "_pages_v_blocks_cta2_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_senda_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_cards_senda" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda_steps_options" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_multi_form_senda" CASCADE;
  DROP TABLE "_ls_sub_v" CASCADE;
  DROP TABLE "_ls_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_senda" CASCADE;
  DROP TABLE "_lss_sections_v" CASCADE;
  DROP TABLE "_lss_btns_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_senda_sections" CASCADE;
  DROP TABLE "_ps_elements_v" CASCADE;
  DROP TABLE "_ps_plans_v" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_senda" CASCADE;
  DROP TABLE "_faq_senda_questions_v" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_senda" CASCADE;
  DROP TABLE "_blog_post_header1_breadcrumbs_v" CASCADE;
  DROP TABLE "_blog_post_header1_social_links_v" CASCADE;
  DROP TABLE "_blog_post_header1_v" CASCADE;
  DROP TABLE "_blog_post_header5_v_social_media_links" CASCADE;
  DROP TABLE "_blog_post_header5_v" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "fonts" CASCADE;
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
  DROP TABLE "payload_kv" CASCADE;
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
  DROP TABLE "header_navbar1_config_nav_links_sub_menu_links" CASCADE;
  DROP TABLE "header_navbar1_config_nav_links" CASCADE;
  DROP TABLE "header_navbar1_config_buttons" CASCADE;
  DROP TABLE "navbar5_cat_link_items" CASCADE;
  DROP TABLE "navbar5_cat_links" CASCADE;
  DROP TABLE "navbar5_featured_links" CASCADE;
  DROP TABLE "navbar5_links" CASCADE;
  DROP TABLE "navbar5_buttons" CASCADE;
  DROP TABLE "header_navbar_template_config_nav_links" CASCADE;
  DROP TABLE "senda_sub" CASCADE;
  DROP TABLE "senda_nav" CASCADE;
  DROP TABLE "senda_btns" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer_footer1_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer1_config_column_links" CASCADE;
  DROP TABLE "footer_footer1_config_footer_links" CASCADE;
  DROP TABLE "footer_footer4_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer4_config_column_links" CASCADE;
  DROP TABLE "footer_footer4_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer4_config_footer_links" CASCADE;
  DROP TABLE "footer_footer5_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer5_config_column_links" CASCADE;
  DROP TABLE "footer_footer5_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer5_config_footer_links" CASCADE;
  DROP TABLE "footer_footer_template_config_product_links" CASCADE;
  DROP TABLE "footer_footer_template_config_company_links" CASCADE;
  DROP TABLE "footer_footer_template_config_footer_links" CASCADE;
  DROP TABLE "footer_footer_template_config_social_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_column_links_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_column_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_social_media_links" CASCADE;
  DROP TABLE "footer_footer_senda_config_footer_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_hs_left_btns_link_type";
  DROP TYPE "public"."app";
  DROP TYPE "public"."sz";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_type";
  DROP TYPE "public"."enum_pages_blocks_banner4_font_family";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_type";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner1_font_family";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum_comparison_1_features_items_type";
  DROP TYPE "public"."enum_comparison_1_buttons_variant";
  DROP TYPE "public"."enum_comparison_1_buttons_size";
  DROP TYPE "public"."enum_comparison_1_buttons_link_type";
  DROP TYPE "public"."enum_cta2_senda_buttons_link_type";
  DROP TYPE "public"."enum_cta2_senda_buttons_appearance";
  DROP TYPE "public"."enum_cta2_senda_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_cta2_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_cards_gap";
  DROP TYPE "public"."enum_pages_blocks_cards_senda_card_size";
  DROP TYPE "public"."enum_pages_blocks_multi_form_senda_end_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_multi_form_senda_font_family";
  DROP TYPE "public"."enum_ls_btns_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout_senda_font_family";
  DROP TYPE "public"."enum_lss_sections_link_type";
  DROP TYPE "public"."enum_lss_sections_link_appearance";
  DROP TYPE "public"."enum_lss_btns_link_type";
  DROP TYPE "public"."enum_lss_btns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout_senda_sections_font_family";
  DROP TYPE "public"."enum_ps_plans_link_type";
  DROP TYPE "public"."enum_ps_plans_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_pricing_senda_font_family";
  DROP TYPE "public"."enum_pages_blocks_faq_senda_font_family";
  DROP TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type";
  DROP TYPE "public"."icon_type";
  DROP TYPE "public"."enum_blog_post_header1_social_links_link_type";
  DROP TYPE "public"."enum_blog_post_header1_font_family";
  DROP TYPE "public"."enum_blog_post_header5_social_media_links_icon_type";
  DROP TYPE "public"."enum_blog_post_header5_social_media_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_blog5_tabs_content_type";
  DROP TYPE "public"."enum_pages_blocks_blog5_featured_blog_post_type";
  DROP TYPE "public"."enum_pages_blocks_blog5_font_family";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_hero_hero_senda_image_button_link_type";
  DROP TYPE "public"."enum_pages_hero_hero_senda_font_family";
  DROP TYPE "public"."t";
  DROP TYPE "public"."img1_type";
  DROP TYPE "public"."img2_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__hs_left_btns_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_type";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum__comparison_1_v_features_items_type";
  DROP TYPE "public"."enum__comparison_1_buttons_v_variant";
  DROP TYPE "public"."enum__comparison_1_buttons_v_size";
  DROP TYPE "public"."enum__comparison_1_buttons_v_link_type";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_link_type";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_appearance";
  DROP TYPE "public"."enum__cta2_senda_buttons_v_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta2_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_cards_gap";
  DROP TYPE "public"."enum__pages_v_blocks_cards_senda_card_size";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form_senda_end_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form_senda_font_family";
  DROP TYPE "public"."enum__ls_btns_v_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout_senda_font_family";
  DROP TYPE "public"."enum__lss_sections_v_link_type";
  DROP TYPE "public"."enum__lss_sections_v_link_appearance";
  DROP TYPE "public"."enum__lss_btns_v_link_type";
  DROP TYPE "public"."enum__lss_btns_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout_senda_sections_font_family";
  DROP TYPE "public"."enum__ps_plans_v_link_type";
  DROP TYPE "public"."enum__ps_plans_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_senda_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_faq_senda_font_family";
  DROP TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type";
  DROP TYPE "public"."enum__blog_post_header1_social_links_v_link_type";
  DROP TYPE "public"."enum__blog_post_header1_v_font_family";
  DROP TYPE "public"."enum__blog_post_header5_v_social_media_links_icon_type";
  DROP TYPE "public"."enum__blog_post_header5_v_social_media_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_tabs_content_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_featured_blog_post_type";
  DROP TYPE "public"."enum__pages_v_blocks_blog5_font_family";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_hero_senda_image_button_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_hero_senda_font_family";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_contact_submissions_status";
  DROP TYPE "public"."enum_form_custom_2_submissions_source";
  DROP TYPE "public"."enum_form_custom_2_submissions_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_navbar11_config_buttons_variant";
  DROP TYPE "public"."enum_header_navbar11_config_buttons_size";
  DROP TYPE "public"."enum_header_navbar1_config_nav_links_sub_menu_links_link_type";
  DROP TYPE "public"."enum_header_navbar1_config_nav_links_link_type";
  DROP TYPE "public"."enum_header_navbar1_config_buttons_link_type";
  DROP TYPE "public"."enum_header_navbar1_config_buttons_size";
  DROP TYPE "public"."enum_header_navbar1_config_buttons_variant";
  DROP TYPE "public"."enum_navbar5_cat_link_items_link_type";
  DROP TYPE "public"."enum_navbar5_cat_link_items_button_size";
  DROP TYPE "public"."enum_navbar5_cat_link_items_button_variant";
  DROP TYPE "public"."enum_navbar5_featured_links_link_type";
  DROP TYPE "public"."enum_navbar5_featured_links_button_size";
  DROP TYPE "public"."enum_navbar5_featured_links_button_variant";
  DROP TYPE "public"."enum_navbar5_links_link_type";
  DROP TYPE "public"."enum_navbar5_links_mega_menu_button_size";
  DROP TYPE "public"."enum_navbar5_links_mega_menu_button_variant";
  DROP TYPE "public"."enum_navbar5_links_mega_menu_button_link_type";
  DROP TYPE "public"."enum_navbar5_buttons_size";
  DROP TYPE "public"."enum_navbar5_buttons_variant";
  DROP TYPE "public"."enum_navbar5_buttons_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_nav_links_link_type";
  DROP TYPE "public"."enum_senda_sub_link_type";
  DROP TYPE "public"."enum_senda_nav_link_type";
  DROP TYPE "public"."enum_senda_btns_link_type";
  DROP TYPE "public"."enum_senda_btns_size";
  DROP TYPE "public"."enum_senda_btns_variant";
  DROP TYPE "public"."enum_header_navbar_type";
  DROP TYPE "public"."enum_header_navbar5_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_login_button_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_signup_button_link_type";
  DROP TYPE "public"."enum_header_navbar_senda_config_font_family";
  DROP TYPE "public"."enum_footer_nav_items_link_type";
  DROP TYPE "public"."enum_footer_footer1_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer1_config_column_links_links_icon";
  DROP TYPE "public"."enum_footer_footer1_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_social_media_links_platform";
  DROP TYPE "public"."enum_footer_footer4_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_social_media_links_icon";
  DROP TYPE "public"."enum_footer_footer5_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_product_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_company_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_social_links_platform";
  DROP TYPE "public"."enum_footer_footer_template_config_social_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_column_links_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_social_media_links_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_social_media_links_platform";
  DROP TYPE "public"."enum_footer_footer_senda_config_footer_links_link_type";
  DROP TYPE "public"."enum_footer_footer_type";
  DROP TYPE "public"."enum_footer_footer1_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer1_config_button_size";
  DROP TYPE "public"."enum_footer_footer1_config_button_variant";
  DROP TYPE "public"."enum_footer_footer1_config_terms_and_conditions_link_type";
  DROP TYPE "public"."enum_footer_footer4_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer5_config_button_size";
  DROP TYPE "public"."enum_footer_footer5_config_button_variant";
  DROP TYPE "public"."enum_footer_footer5_config_terms_and_conditions_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_template_config_cta_button_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_senda_config_font_family";`)
}
