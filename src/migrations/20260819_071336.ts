import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."t" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."elt" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."nlt" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_elements_style_shadow" AS ENUM('none', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_elements_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_contact_form_shadow" AS ENUM('none', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_contact_form_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_privacy_policy_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_background_type" AS ENUM('color', 'image', 'video');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum_pages_blocks_layout_drop_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum_imc_d_el_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_d_nel_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_imc_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_imc_drop_footer_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_lcta_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_lcta_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_lcta_drop_steps_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_team_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_team_drop_secondary_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_team_drop_members_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta_app_btn_store" AS ENUM('appStore', 'googlePlay');
  CREATE TYPE "public"."enum_cta_app_btn_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta_app_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta_app_subtitle_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_cta_app_features_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pd_product_purchase_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pd_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_fqd_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'header138', 'heroTemplate', 'heroDrop');
  CREATE TYPE "public"."img1_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."img2_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."h_ff" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."f_ff" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."o_ff" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_elements_style_shadow" AS ENUM('none', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_elements_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_contact_form_shadow" AS ENUM('none', 'sm', 'md', 'lg', 'xl');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_contact_form_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_privacy_policy_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_block_height_mode" AS ENUM('auto', 'viewport', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_background_type" AS ENUM('color', 'image', 'video');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_background_color_mode" AS ENUM('solid', 'gradient');
  CREATE TYPE "public"."enum__pages_v_blocks_layout_drop_gradient_direction" AS ENUM('to-right', 'to-left', 'to-bottom', 'to-top', 'diagonal-down', 'diagonal-up');
  CREATE TYPE "public"."enum__imc_d_el_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_d_nel_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__imc_drop_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__imc_drop_v_footer_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lcta_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__lcta_drop_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__lcta_drop_v_steps_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__team_drop_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__team_drop_v_secondary_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__team_drop_v_members_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta_app_btn_v_store" AS ENUM('appStore', 'googlePlay');
  CREATE TYPE "public"."enum__cta_app_btn_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta_app_v_header_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta_app_v_subtitle_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__cta_app_v_features_style_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pd_v_product_purchase_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pd_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__fqd_v_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'header138', 'heroTemplate', 'heroDrop');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_font_groups_fonts_variant" AS ENUM('regular', 'regularItalic', 'medium', 'mediumItalic', 'semibold', 'semiboldItalic', 'bold', 'boldItalic', 'light', 'lightItalic', 'heavy', 'heavyItalic');
  CREATE TYPE "public"."enum_contact_submissions_status" AS ENUM('new', 'reviewing', 'responded', 'closed');
  CREATE TYPE "public"."enum_form_custom_2_submissions_source" AS ENUM('form-custom-2', 'multi-form-2', 'banner1', 'contact1', 'contact5');
  CREATE TYPE "public"."enum_form_custom_2_submissions_status" AS ENUM('new', 'reviewing', 'responded', 'closed');
  CREATE TYPE "public"."enum_leads_formulario_status" AS ENUM('new', 'synced', 'error');
  CREATE TYPE "public"."enum_leads_cta_status" AS ENUM('new', 'emailed', 'error');
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
  CREATE TYPE "public"."enum_drop_sub_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_drop_nav_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_drop_btns_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_drop_btns_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_drop_btns_variant" AS ENUM('default', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar5', 'navbar11', 'navbarTemplate', 'navbar_drop');
  CREATE TYPE "public"."enum_header_navbar5_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_login_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_signup_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_drop_config_font_family" AS ENUM('default', 'Arial, sans-serif', '"Times New Roman", serif', 'Georgia, serif', 'Verdana, sans-serif', 'Helvetica, Arial, sans-serif', '"Courier New", monospace', '"Roboto", sans-serif', '"Open Sans", sans-serif', '"Lato", sans-serif', '"Montserrat", sans-serif', '"Playfair Display", serif', '"Inter", sans-serif', '"Poppins", sans-serif', '"Raleway", sans-serif');
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
  CREATE TYPE "public"."enum_ftd_nav_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_ftd_soc_icon" AS ENUM('none', 'instagram', 'facebook', 'youtube');
  CREATE TYPE "public"."enum_ftd_soc_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_ftd_pol_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer1', 'footer4', 'footer5', 'footerTemplate', 'footer_drop');
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
  CREATE TYPE "public"."enum_footer_footer_drop_config_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
  CREATE TYPE "public"."enum_footer_footer_drop_config_secondary_logo_link_type" AS ENUM('reference', 'custom', 'anchor');
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
  
  CREATE TABLE "hd_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "t" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "hd_feat" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "hd_cat" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"cat_lbl" varchar,
  	"imc_lbl" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"eligible" boolean DEFAULT false
  );
  
  CREATE TABLE "hd_el" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "elt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar
  );
  
  CREATE TABLE "hd_nel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "nlt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar
  );
  
  CREATE TABLE "hd_foot" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "ld_el" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT true,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "pages_blocks_layout_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_pages_blocks_layout_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"elements_style_border_color" varchar DEFAULT '#e5e7eb',
  	"elements_style_shadow" "enum_pages_blocks_layout_drop_elements_style_shadow" DEFAULT 'none',
  	"elements_style_text_color" varchar,
  	"elements_style_bold_text_color" varchar,
  	"elements_style_use_font_group" boolean DEFAULT false,
  	"elements_style_font_group_id" integer,
  	"elements_style_font_family" "enum_pages_blocks_layout_drop_elements_style_font_family" DEFAULT 'default',
  	"elements_style_use_custom_font" boolean DEFAULT false,
  	"elements_style_custom_font_file_id" integer,
  	"elements_style_custom_font_name" varchar,
  	"contact_form_icon_use_media" boolean DEFAULT false,
  	"contact_form_icon_media_image_id" integer,
  	"contact_form_icon_icon_s_v_g" varchar,
  	"contact_form_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_content" jsonb,
  	"contact_form_name_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_name_field_icon_media_image_id" integer,
  	"contact_form_name_field_icon_icon_s_v_g" varchar,
  	"contact_form_name_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_name_field_value" varchar DEFAULT 'Nombre',
  	"contact_form_phone_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_phone_field_icon_media_image_id" integer,
  	"contact_form_phone_field_icon_icon_s_v_g" varchar,
  	"contact_form_phone_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_phone_field_value" varchar DEFAULT 'Teléfono',
  	"contact_form_email_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_email_field_icon_media_image_id" integer,
  	"contact_form_email_field_icon_icon_s_v_g" varchar,
  	"contact_form_email_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_email_field_value" varchar DEFAULT 'Email',
  	"contact_form_border_color" varchar DEFAULT '#e5e7eb',
  	"contact_form_shadow" "enum_pages_blocks_layout_drop_contact_form_shadow" DEFAULT 'lg',
  	"contact_form_text_color" varchar,
  	"contact_form_bold_text_color" varchar,
  	"contact_form_use_font_group" boolean DEFAULT false,
  	"contact_form_font_group_id" integer,
  	"contact_form_font_family" "enum_pages_blocks_layout_drop_contact_form_font_family" DEFAULT 'default',
  	"contact_form_use_custom_font" boolean DEFAULT false,
  	"contact_form_custom_font_file_id" integer,
  	"contact_form_custom_font_name" varchar,
  	"privacy_policy_required" boolean DEFAULT true,
  	"privacy_policy_content" jsonb,
  	"privacy_policy_text_color" varchar,
  	"privacy_policy_bold_text_color" varchar,
  	"privacy_policy_use_font_group" boolean DEFAULT false,
  	"privacy_policy_font_group_id" integer,
  	"privacy_policy_font_family" "enum_pages_blocks_layout_drop_privacy_policy_font_family" DEFAULT 'default',
  	"privacy_policy_use_custom_font" boolean DEFAULT false,
  	"privacy_policy_custom_font_file_id" integer,
  	"privacy_policy_custom_font_name" varchar,
  	"button_label" varchar DEFAULT 'Continuar',
  	"button_icon_s_v_g" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar DEFAULT '#ffffff',
  	"button_link_type" "enum_pages_blocks_layout_drop_button_link_type" DEFAULT 'custom',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"block_height_mode" "enum_pages_blocks_layout_drop_block_height_mode" DEFAULT 'auto',
  	"custom_block_height_px" numeric,
  	"background_type" "enum_pages_blocks_layout_drop_background_type" DEFAULT 'color',
  	"video_youtube_url" varchar,
  	"background_image_id" integer,
  	"background_color" varchar DEFAULT '#ffffff',
  	"background_color_mode" "enum_pages_blocks_layout_drop_background_color_mode" DEFAULT 'solid',
  	"gradient_start_color" varchar,
  	"gradient_end_color" varchar,
  	"gradient_direction" "enum_pages_blocks_layout_drop_gradient_direction" DEFAULT 'to-right',
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "imc_d_cat" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"category_label" varchar,
  	"imc_label" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"is_eligible" boolean DEFAULT false,
  	"show_tag" boolean DEFAULT false,
  	"tag_label" varchar DEFAULT 'Apto',
  	"tag_icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_d_el" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_imc_d_el_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_d_nel" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_imc_d_nel_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "imc_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_imc_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"category_header_label" varchar DEFAULT 'Categoría',
  	"imc_header_label" varchar DEFAULT 'IMC',
  	"category_header_icon_use_media" boolean DEFAULT false,
  	"category_header_icon_media_image_id" integer,
  	"category_header_icon_icon_s_v_g" varchar,
  	"category_header_icon_alt" varchar DEFAULT 'Icono',
  	"imc_header_icon_use_media" boolean DEFAULT false,
  	"imc_header_icon_media_image_id" integer,
  	"imc_header_icon_icon_s_v_g" varchar,
  	"imc_header_icon_alt" varchar DEFAULT 'Icono',
  	"image_media_image_id" integer,
  	"image_alt" varchar DEFAULT 'Imagen',
  	"image_circle_color" varchar DEFAULT '#F8D4E0',
  	"open_button_label" varchar DEFAULT 'Calcula tu IMC',
  	"open_button_icon_s_v_g" varchar,
  	"open_button_background_color" varchar DEFAULT '#C2005F',
  	"open_button_text_color" varchar DEFAULT '#FFFFFF',
  	"footer_content" jsonb,
  	"footer_style_text_color" varchar,
  	"footer_style_bold_text_color" varchar,
  	"footer_style_use_font_group" boolean DEFAULT false,
  	"footer_style_font_group_id" integer,
  	"footer_style_font_family" "enum_imc_drop_footer_style_font_family" DEFAULT 'default',
  	"footer_style_use_custom_font" boolean DEFAULT false,
  	"footer_style_custom_font_file_id" integer,
  	"footer_style_custom_font_name" varchar,
  	"modal_title" varchar DEFAULT 'Calcula tu IMC',
  	"height_label" varchar DEFAULT 'Altura (cm)',
  	"weight_label" varchar DEFAULT 'Peso (kg)',
  	"height_placeholder" varchar DEFAULT 'ej: 165',
  	"weight_placeholder" varchar DEFAULT 'ej: 92',
  	"calculate_button_text" varchar DEFAULT 'Calcular',
  	"calculate_button_icon_s_v_g" varchar,
  	"recalculate_button_text" varchar DEFAULT 'Volver a calcular',
  	"calculate_button_color" varchar DEFAULT '#C2005F',
  	"calculate_button_text_color" varchar DEFAULT '#FFFFFF',
  	"modal_card_background_color" varchar DEFAULT '#FFFFFF',
  	"enable_eligible_contact_form" boolean DEFAULT false,
  	"eligible_contact_form_title" jsonb,
  	"eligible_contact_form_description" jsonb,
  	"eligible_contact_form_name_placeholder" varchar DEFAULT 'Nombre',
  	"eligible_contact_form_phone_placeholder" varchar DEFAULT 'Teléfono',
  	"eligible_contact_form_email_placeholder" varchar DEFAULT 'Email',
  	"eligible_contact_form_name_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_name_icon_media_image_id" integer,
  	"eligible_contact_form_name_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_name_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_phone_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_phone_icon_media_image_id" integer,
  	"eligible_contact_form_phone_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_phone_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_email_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_email_icon_media_image_id" integer,
  	"eligible_contact_form_email_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_email_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_privacy_content" jsonb,
  	"eligible_contact_form_privacy_required" boolean DEFAULT true,
  	"eligible_contact_form_continue_button_text" jsonb,
  	"eligible_contact_form_continue_button_color" varchar DEFAULT '#C2005F',
  	"eligible_contact_form_continue_button_text_color" varchar DEFAULT '#FFFFFF',
  	"eligible_content" jsonb,
  	"eligible_button_color" varchar DEFAULT '#C2005F',
  	"eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"not_eligible_content" jsonb,
  	"not_eligible_button_color" varchar DEFAULT '#C2005F',
  	"not_eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"table_header_background_color" varchar DEFAULT '#FDF2F7',
  	"table_card_background_color" varchar DEFAULT '#FFFFFF',
  	"tag_background_color" varchar DEFAULT '#E8F5E9',
  	"tag_text_color" varchar DEFAULT '#2E7D32',
  	"accent_color" varchar DEFAULT '#C2005F',
  	"block_name" varchar
  );
  
  CREATE TABLE "lcta_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag_label" varchar DEFAULT 'Paso 01',
  	"tag_background_color" varchar DEFAULT '#FCE4EC',
  	"tag_text_color" varchar DEFAULT '#C2005F',
  	"image_id" integer,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "lcta_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_lcta_btn_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar
  );
  
  CREATE TABLE "lcta_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_lcta_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"steps_style_text_color" varchar,
  	"steps_style_bold_text_color" varchar,
  	"steps_style_use_font_group" boolean DEFAULT false,
  	"steps_style_font_group_id" integer,
  	"steps_style_font_family" "enum_lcta_drop_steps_style_font_family" DEFAULT 'default',
  	"steps_style_use_custom_font" boolean DEFAULT false,
  	"steps_style_custom_font_file_id" integer,
  	"steps_style_custom_font_name" varchar,
  	"button_background_color" varchar DEFAULT '#C2005F',
  	"button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "team_members" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb
  );
  
  CREATE TABLE "team_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_team_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"divider_icon_use_media" boolean DEFAULT false,
  	"divider_icon_media_image_id" integer,
  	"divider_icon_icon_s_v_g" varchar,
  	"divider_icon_alt" varchar DEFAULT 'Icono',
  	"secondary_content" jsonb,
  	"secondary_style_text_color" varchar,
  	"secondary_style_bold_text_color" varchar,
  	"secondary_style_use_font_group" boolean DEFAULT false,
  	"secondary_style_font_group_id" integer,
  	"secondary_style_font_family" "enum_team_drop_secondary_style_font_family" DEFAULT 'default',
  	"secondary_style_use_custom_font" boolean DEFAULT false,
  	"secondary_style_custom_font_file_id" integer,
  	"secondary_style_custom_font_name" varchar,
  	"members_style_text_color" varchar,
  	"members_style_bold_text_color" varchar,
  	"members_style_use_font_group" boolean DEFAULT false,
  	"members_style_font_group_id" integer,
  	"members_style_font_family" "enum_team_drop_members_style_font_family" DEFAULT 'default',
  	"members_style_use_custom_font" boolean DEFAULT false,
  	"members_style_custom_font_file_id" integer,
  	"members_style_custom_font_name" varchar,
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "cta_app_ft" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "cta_app_qr" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Código QR'
  );
  
  CREATE TABLE "cta_app_btn" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"store" "enum_cta_app_btn_store" DEFAULT 'appStore',
  	"link_type" "enum_cta_app_btn_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "cta_app" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar DEFAULT '#101835',
  	"header_style_bold_text_color" varchar DEFAULT '#C2005F',
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum_cta_app_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"subtitle_content" jsonb,
  	"subtitle_style_text_color" varchar DEFAULT '#666666',
  	"subtitle_style_bold_text_color" varchar,
  	"subtitle_style_use_font_group" boolean DEFAULT false,
  	"subtitle_style_font_group_id" integer,
  	"subtitle_style_font_family" "enum_cta_app_subtitle_style_font_family" DEFAULT 'default',
  	"subtitle_style_use_custom_font" boolean DEFAULT false,
  	"subtitle_style_custom_font_file_id" integer,
  	"subtitle_style_custom_font_name" varchar,
  	"mockup_image_id" integer,
  	"features_style_text_color" varchar DEFAULT '#101835',
  	"features_style_bold_text_color" varchar,
  	"features_style_use_font_group" boolean DEFAULT false,
  	"features_style_font_group_id" integer,
  	"features_style_font_family" "enum_cta_app_features_style_font_family" DEFAULT 'default',
  	"features_style_use_custom_font" boolean DEFAULT false,
  	"features_style_custom_font_file_id" integer,
  	"features_style_custom_font_name" varchar,
  	"features_style_check_color" varchar DEFAULT '#4CAF50',
  	"features_style_icon_use_media" boolean DEFAULT false,
  	"features_style_icon_media_image_id" integer,
  	"features_style_icon_icon_s_v_g" varchar,
  	"features_style_icon_alt" varchar DEFAULT 'Icono',
  	"download_card_desktop_scan_text" varchar DEFAULT 'Escanea el código QR para descargar la app',
  	"download_card_mobile_download_text" varchar DEFAULT 'Descarga la app y lleva tu bienestar siempre contigo',
  	"download_card_phone_icon_use_media" boolean DEFAULT false,
  	"download_card_phone_icon_media_image_id" integer,
  	"download_card_phone_icon_icon_s_v_g" varchar,
  	"download_card_phone_icon_alt" varchar DEFAULT 'Icono',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"enable_mockup_scroll_animation" boolean DEFAULT true,
  	"mockup_scroll_show_percent" numeric DEFAULT 100,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"block_name" varchar
  );
  
  CREATE TABLE "l2d_pre" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#101835',
  	"icon_background_color" varchar DEFAULT '#fce4ec'
  );
  
  CREATE TABLE "l2d" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"secondary_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color_primary" varchar DEFAULT '#101835',
  	"text_color_secondary" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_fondo_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#f8f4ff',
  	"accent_color" varchar,
  	"enable_parallax" boolean DEFAULT true,
  	"parallax_intensity" numeric DEFAULT 0.35,
  	"block_name" varchar
  );
  
  CREATE TABLE "pd_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#fce4ec',
  	"text_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "pd_num" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"icon_background_color" varchar DEFAULT '#f8bbd0',
  	"text_color" varchar,
  	"bold_text_color" varchar
  );
  
  CREATE TABLE "pd_ci" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"product" jsonb,
  	"price" jsonb,
  	"tag" jsonb,
  	"tag_background_color" varchar DEFAULT '#c8e6c9',
  	"tag_text_color" varchar DEFAULT '#2e7d32',
  	"price_text_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "pd_cols" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"title" jsonb,
  	"total_label" jsonb,
  	"total_price" jsonb,
  	"total_price_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "pd_pfi" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb
  );
  
  CREATE TABLE "pd_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#ffffff',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"highlight" jsonb,
  	"content" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar
  );
  
  CREATE TABLE "pd" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"main_style_text_color" varchar,
  	"main_style_bold_text_color" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"enable_animated_bg" boolean DEFAULT false,
  	"animated_accent_color" varchar DEFAULT '#a1004a',
  	"product_background_color" varchar DEFAULT '#ffffff',
  	"product_purchase_previous_price" jsonb,
  	"product_purchase_current_price" jsonb,
  	"product_purchase_description" jsonb,
  	"product_purchase_background_color" varchar DEFAULT '#faf7f8',
  	"product_purchase_button_label" varchar DEFAULT 'Empezar ahora',
  	"product_purchase_button_icon_s_v_g" varchar,
  	"product_purchase_button_background_color" varchar DEFAULT '#a1004a',
  	"product_purchase_button_text_color" varchar DEFAULT '#ffffff',
  	"product_purchase_button_link_type" "enum_pd_product_purchase_button_link_type" DEFAULT 'reference',
  	"product_purchase_button_link_new_tab" boolean,
  	"product_purchase_button_link_url" varchar,
  	"fine_print" jsonb,
  	"fine_print_color" varchar DEFAULT '#101835',
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_pd_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "fqd_q" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"accent_color" varchar DEFAULT '#a1004a'
  );
  
  CREATE TABLE "fqd" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#101835',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"questions_section_background_color" varchar DEFAULT '#ffffff',
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum_fqd_font_family" DEFAULT 'default',
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
  	"hero_hd_tag_icon_use_media" boolean DEFAULT false,
  	"hero_hd_tag_icon_img_id" integer,
  	"hero_hd_tag_icon_svg" varchar,
  	"hero_hd_tag_icon_alt" varchar DEFAULT 'Icono',
  	"hero_hd_tag_label" varchar DEFAULT 'Clínica digital de pérdida de peso',
  	"hero_hd_tag_background_color" varchar DEFAULT '#FCE4EC',
  	"hero_hd_tag_text_color" varchar DEFAULT '#C2005F',
  	"hero_hd_hdr" jsonb,
  	"hero_hd_hsty_color" varchar,
  	"hero_hd_hsty_bold" varchar,
  	"hero_hd_hsty_use_f_g" boolean DEFAULT false,
  	"hero_hd_hsty_fg_id" integer,
  	"hero_hd_hsty_ff" "h_ff" DEFAULT 'default',
  	"hero_hd_hsty_use_c_f" boolean DEFAULT false,
  	"hero_hd_hsty_c_font_id" integer,
  	"hero_hd_hsty_c_font_nm" varchar,
  	"hero_hd_fsty_color" varchar,
  	"hero_hd_fsty_bold" varchar,
  	"hero_hd_fsty_use_f_g" boolean DEFAULT false,
  	"hero_hd_fsty_fg_id" integer,
  	"hero_hd_fsty_ff" "f_ff" DEFAULT 'default',
  	"hero_hd_fsty_use_c_f" boolean DEFAULT false,
  	"hero_hd_fsty_c_font_id" integer,
  	"hero_hd_fsty_c_font_nm" varchar,
  	"hero_hd_media_id" integer,
  	"hero_hd_img_alt" varchar DEFAULT 'Hero',
  	"hero_hd_calc_icon_use_media" boolean DEFAULT false,
  	"hero_hd_calc_icon_img_id" integer,
  	"hero_hd_calc_icon_svg" varchar,
  	"hero_hd_calc_icon_alt" varchar DEFAULT 'Icono',
  	"hero_hd_calc_content" jsonb,
  	"hero_hd_calc_h_label" varchar DEFAULT 'Estatura',
  	"hero_hd_calc_h_ph" varchar DEFAULT 'Ej. 170',
  	"hero_hd_calc_h_unit" varchar DEFAULT 'cm',
  	"hero_hd_calc_w_label" varchar DEFAULT 'Peso',
  	"hero_hd_calc_w_ph" varchar DEFAULT 'Ej. 70',
  	"hero_hd_calc_w_unit" varchar DEFAULT 'kg',
  	"hero_hd_calc_btn_label" varchar DEFAULT 'Calcular mi IMC',
  	"hero_hd_calc_btn_svg" varchar,
  	"hero_hd_calc_ptag_icon_use_media" boolean DEFAULT false,
  	"hero_hd_calc_ptag_icon_img_id" integer,
  	"hero_hd_calc_ptag_icon_svg" varchar,
  	"hero_hd_calc_ptag_icon_alt" varchar DEFAULT 'Icono',
  	"hero_hd_calc_ptag_label" varchar DEFAULT 'Tus datos están protegidos',
  	"hero_hd_calc_float_svg" varchar,
  	"hero_hd_calc_btn_bg" varchar DEFAULT '#C2005F',
  	"hero_hd_calc_btn_fg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_calc_card_bg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_calc_modal_title" varchar DEFAULT 'Calcula tu IMC',
  	"hero_hd_calc_modal_bg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_calc_recalc_txt" varchar DEFAULT 'Volver a calcular',
  	"hero_hd_calc_enable_contact" boolean DEFAULT true,
  	"hero_hd_calc_contact_title" jsonb,
  	"hero_hd_calc_contact_desc" jsonb,
  	"hero_hd_calc_contact_n_ph" varchar DEFAULT 'Nombre',
  	"hero_hd_calc_contact_p_ph" varchar DEFAULT 'Teléfono',
  	"hero_hd_calc_contact_e_ph" varchar DEFAULT 'Email',
  	"hero_hd_calc_contact_n_icon_use_media" boolean DEFAULT false,
  	"hero_hd_calc_contact_n_icon_img_id" integer,
  	"hero_hd_calc_contact_n_icon_svg" varchar,
  	"hero_hd_calc_contact_n_icon_alt" varchar DEFAULT 'Icono',
  	"hero_hd_calc_contact_p_icon_use_media" boolean DEFAULT false,
  	"hero_hd_calc_contact_p_icon_img_id" integer,
  	"hero_hd_calc_contact_p_icon_svg" varchar,
  	"hero_hd_calc_contact_p_icon_alt" varchar DEFAULT 'Icono',
  	"hero_hd_calc_contact_e_icon_use_media" boolean DEFAULT false,
  	"hero_hd_calc_contact_e_icon_img_id" integer,
  	"hero_hd_calc_contact_e_icon_svg" varchar,
  	"hero_hd_calc_contact_e_icon_alt" varchar DEFAULT 'Icono',
  	"hero_hd_calc_contact_privacy" jsonb,
  	"hero_hd_calc_contact_priv_req" boolean DEFAULT true,
  	"hero_hd_calc_contact_cont_btn" jsonb,
  	"hero_hd_calc_contact_cont_bg" varchar DEFAULT '#C2005F',
  	"hero_hd_calc_contact_cont_fg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_calc_elig_content" jsonb,
  	"hero_hd_calc_elig_bg" varchar DEFAULT '#C2005F',
  	"hero_hd_calc_elig_fg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_calc_no_elig_content" jsonb,
  	"hero_hd_calc_no_elig_bg" varchar DEFAULT '#C2005F',
  	"hero_hd_calc_no_elig_fg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_calc_tag_bg" varchar DEFAULT '#E8F5E9',
  	"hero_hd_calc_tag_fg" varchar DEFAULT '#2E7D32',
  	"hero_hd_osty_color" varchar,
  	"hero_hd_osty_bold" varchar,
  	"hero_hd_osty_use_f_g" boolean DEFAULT false,
  	"hero_hd_osty_fg_id" integer,
  	"hero_hd_osty_ff" "o_ff" DEFAULT 'default',
  	"hero_hd_osty_use_c_f" boolean DEFAULT false,
  	"hero_hd_osty_c_font_id" integer,
  	"hero_hd_osty_c_font_nm" varchar,
  	"hero_hd_curves" boolean DEFAULT true,
  	"hero_hd_accent" varchar DEFAULT '#C2005F',
  	"hero_hd_bg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_bg_grad" varchar DEFAULT 'linear-gradient(180deg, #FFF5F8 0%, #FFFFFF 55%)',
  	"hero_hd_p_btn_bg" varchar DEFAULT '#C2005F',
  	"hero_hd_p_btn_fg" varchar DEFAULT '#FFFFFF',
  	"hero_hd_s_btn_fg" varchar DEFAULT '#101835',
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
  
  CREATE TABLE "_hd_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "t" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_feat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_cat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"cat_lbl" varchar,
  	"imc_lbl" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"eligible" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "elt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_nel_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "nlt" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar DEFAULT '#',
  	"link_label" varchar,
  	"svg" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_hd_foot_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_img_id" integer,
  	"icon_svg" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ld_el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT true,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_layout_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__pages_v_blocks_layout_drop_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"elements_style_border_color" varchar DEFAULT '#e5e7eb',
  	"elements_style_shadow" "enum__pages_v_blocks_layout_drop_elements_style_shadow" DEFAULT 'none',
  	"elements_style_text_color" varchar,
  	"elements_style_bold_text_color" varchar,
  	"elements_style_use_font_group" boolean DEFAULT false,
  	"elements_style_font_group_id" integer,
  	"elements_style_font_family" "enum__pages_v_blocks_layout_drop_elements_style_font_family" DEFAULT 'default',
  	"elements_style_use_custom_font" boolean DEFAULT false,
  	"elements_style_custom_font_file_id" integer,
  	"elements_style_custom_font_name" varchar,
  	"contact_form_icon_use_media" boolean DEFAULT false,
  	"contact_form_icon_media_image_id" integer,
  	"contact_form_icon_icon_s_v_g" varchar,
  	"contact_form_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_content" jsonb,
  	"contact_form_name_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_name_field_icon_media_image_id" integer,
  	"contact_form_name_field_icon_icon_s_v_g" varchar,
  	"contact_form_name_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_name_field_value" varchar DEFAULT 'Nombre',
  	"contact_form_phone_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_phone_field_icon_media_image_id" integer,
  	"contact_form_phone_field_icon_icon_s_v_g" varchar,
  	"contact_form_phone_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_phone_field_value" varchar DEFAULT 'Teléfono',
  	"contact_form_email_field_icon_use_media" boolean DEFAULT false,
  	"contact_form_email_field_icon_media_image_id" integer,
  	"contact_form_email_field_icon_icon_s_v_g" varchar,
  	"contact_form_email_field_icon_alt" varchar DEFAULT 'Icono',
  	"contact_form_email_field_value" varchar DEFAULT 'Email',
  	"contact_form_border_color" varchar DEFAULT '#e5e7eb',
  	"contact_form_shadow" "enum__pages_v_blocks_layout_drop_contact_form_shadow" DEFAULT 'lg',
  	"contact_form_text_color" varchar,
  	"contact_form_bold_text_color" varchar,
  	"contact_form_use_font_group" boolean DEFAULT false,
  	"contact_form_font_group_id" integer,
  	"contact_form_font_family" "enum__pages_v_blocks_layout_drop_contact_form_font_family" DEFAULT 'default',
  	"contact_form_use_custom_font" boolean DEFAULT false,
  	"contact_form_custom_font_file_id" integer,
  	"contact_form_custom_font_name" varchar,
  	"privacy_policy_required" boolean DEFAULT true,
  	"privacy_policy_content" jsonb,
  	"privacy_policy_text_color" varchar,
  	"privacy_policy_bold_text_color" varchar,
  	"privacy_policy_use_font_group" boolean DEFAULT false,
  	"privacy_policy_font_group_id" integer,
  	"privacy_policy_font_family" "enum__pages_v_blocks_layout_drop_privacy_policy_font_family" DEFAULT 'default',
  	"privacy_policy_use_custom_font" boolean DEFAULT false,
  	"privacy_policy_custom_font_file_id" integer,
  	"privacy_policy_custom_font_name" varchar,
  	"button_label" varchar DEFAULT 'Continuar',
  	"button_icon_s_v_g" varchar,
  	"button_background_color" varchar,
  	"button_text_color" varchar DEFAULT '#ffffff',
  	"button_link_type" "enum__pages_v_blocks_layout_drop_button_link_type" DEFAULT 'custom',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"block_height_mode" "enum__pages_v_blocks_layout_drop_block_height_mode" DEFAULT 'auto',
  	"custom_block_height_px" numeric,
  	"background_type" "enum__pages_v_blocks_layout_drop_background_type" DEFAULT 'color',
  	"video_youtube_url" varchar,
  	"background_image_id" integer,
  	"background_color" varchar DEFAULT '#ffffff',
  	"background_color_mode" "enum__pages_v_blocks_layout_drop_background_color_mode" DEFAULT 'solid',
  	"gradient_start_color" varchar,
  	"gradient_end_color" varchar,
  	"gradient_direction" "enum__pages_v_blocks_layout_drop_gradient_direction" DEFAULT 'to-right',
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_imc_d_cat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"category_label" varchar,
  	"imc_label" varchar,
  	"imc_min" numeric,
  	"imc_max" numeric,
  	"is_eligible" boolean DEFAULT false,
  	"show_tag" boolean DEFAULT false,
  	"tag_label" varchar DEFAULT 'Apto',
  	"tag_icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_d_el_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__imc_d_el_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_d_nel_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__imc_d_nel_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_imc_drop_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__imc_drop_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"category_header_label" varchar DEFAULT 'Categoría',
  	"imc_header_label" varchar DEFAULT 'IMC',
  	"category_header_icon_use_media" boolean DEFAULT false,
  	"category_header_icon_media_image_id" integer,
  	"category_header_icon_icon_s_v_g" varchar,
  	"category_header_icon_alt" varchar DEFAULT 'Icono',
  	"imc_header_icon_use_media" boolean DEFAULT false,
  	"imc_header_icon_media_image_id" integer,
  	"imc_header_icon_icon_s_v_g" varchar,
  	"imc_header_icon_alt" varchar DEFAULT 'Icono',
  	"image_media_image_id" integer,
  	"image_alt" varchar DEFAULT 'Imagen',
  	"image_circle_color" varchar DEFAULT '#F8D4E0',
  	"open_button_label" varchar DEFAULT 'Calcula tu IMC',
  	"open_button_icon_s_v_g" varchar,
  	"open_button_background_color" varchar DEFAULT '#C2005F',
  	"open_button_text_color" varchar DEFAULT '#FFFFFF',
  	"footer_content" jsonb,
  	"footer_style_text_color" varchar,
  	"footer_style_bold_text_color" varchar,
  	"footer_style_use_font_group" boolean DEFAULT false,
  	"footer_style_font_group_id" integer,
  	"footer_style_font_family" "enum__imc_drop_v_footer_style_font_family" DEFAULT 'default',
  	"footer_style_use_custom_font" boolean DEFAULT false,
  	"footer_style_custom_font_file_id" integer,
  	"footer_style_custom_font_name" varchar,
  	"modal_title" varchar DEFAULT 'Calcula tu IMC',
  	"height_label" varchar DEFAULT 'Altura (cm)',
  	"weight_label" varchar DEFAULT 'Peso (kg)',
  	"height_placeholder" varchar DEFAULT 'ej: 165',
  	"weight_placeholder" varchar DEFAULT 'ej: 92',
  	"calculate_button_text" varchar DEFAULT 'Calcular',
  	"calculate_button_icon_s_v_g" varchar,
  	"recalculate_button_text" varchar DEFAULT 'Volver a calcular',
  	"calculate_button_color" varchar DEFAULT '#C2005F',
  	"calculate_button_text_color" varchar DEFAULT '#FFFFFF',
  	"modal_card_background_color" varchar DEFAULT '#FFFFFF',
  	"enable_eligible_contact_form" boolean DEFAULT false,
  	"eligible_contact_form_title" jsonb,
  	"eligible_contact_form_description" jsonb,
  	"eligible_contact_form_name_placeholder" varchar DEFAULT 'Nombre',
  	"eligible_contact_form_phone_placeholder" varchar DEFAULT 'Teléfono',
  	"eligible_contact_form_email_placeholder" varchar DEFAULT 'Email',
  	"eligible_contact_form_name_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_name_icon_media_image_id" integer,
  	"eligible_contact_form_name_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_name_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_phone_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_phone_icon_media_image_id" integer,
  	"eligible_contact_form_phone_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_phone_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_email_icon_use_media" boolean DEFAULT false,
  	"eligible_contact_form_email_icon_media_image_id" integer,
  	"eligible_contact_form_email_icon_icon_s_v_g" varchar,
  	"eligible_contact_form_email_icon_alt" varchar DEFAULT 'Icono',
  	"eligible_contact_form_privacy_content" jsonb,
  	"eligible_contact_form_privacy_required" boolean DEFAULT true,
  	"eligible_contact_form_continue_button_text" jsonb,
  	"eligible_contact_form_continue_button_color" varchar DEFAULT '#C2005F',
  	"eligible_contact_form_continue_button_text_color" varchar DEFAULT '#FFFFFF',
  	"eligible_content" jsonb,
  	"eligible_button_color" varchar DEFAULT '#C2005F',
  	"eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"not_eligible_content" jsonb,
  	"not_eligible_button_color" varchar DEFAULT '#C2005F',
  	"not_eligible_button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"table_header_background_color" varchar DEFAULT '#FDF2F7',
  	"table_card_background_color" varchar DEFAULT '#FFFFFF',
  	"tag_background_color" varchar DEFAULT '#E8F5E9',
  	"tag_text_color" varchar DEFAULT '#2E7D32',
  	"accent_color" varchar DEFAULT '#C2005F',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_lcta_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag_label" varchar DEFAULT 'Paso 01',
  	"tag_background_color" varchar DEFAULT '#FCE4EC',
  	"tag_text_color" varchar DEFAULT '#C2005F',
  	"image_id" integer,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lcta_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__lcta_btn_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"icon_s_v_g" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_lcta_drop_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__lcta_drop_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"steps_style_text_color" varchar,
  	"steps_style_bold_text_color" varchar,
  	"steps_style_use_font_group" boolean DEFAULT false,
  	"steps_style_font_group_id" integer,
  	"steps_style_font_family" "enum__lcta_drop_v_steps_style_font_family" DEFAULT 'default',
  	"steps_style_use_custom_font" boolean DEFAULT false,
  	"steps_style_custom_font_file_id" integer,
  	"steps_style_custom_font_name" varchar,
  	"button_background_color" varchar DEFAULT '#C2005F',
  	"button_text_color" varchar DEFAULT '#FFFFFF',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_team_members_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_team_drop_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar,
  	"header_style_bold_text_color" varchar,
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__team_drop_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"divider_icon_use_media" boolean DEFAULT false,
  	"divider_icon_media_image_id" integer,
  	"divider_icon_icon_s_v_g" varchar,
  	"divider_icon_alt" varchar DEFAULT 'Icono',
  	"secondary_content" jsonb,
  	"secondary_style_text_color" varchar,
  	"secondary_style_bold_text_color" varchar,
  	"secondary_style_use_font_group" boolean DEFAULT false,
  	"secondary_style_font_group_id" integer,
  	"secondary_style_font_family" "enum__team_drop_v_secondary_style_font_family" DEFAULT 'default',
  	"secondary_style_use_custom_font" boolean DEFAULT false,
  	"secondary_style_custom_font_file_id" integer,
  	"secondary_style_custom_font_name" varchar,
  	"members_style_text_color" varchar,
  	"members_style_bold_text_color" varchar,
  	"members_style_use_font_group" boolean DEFAULT false,
  	"members_style_font_group_id" integer,
  	"members_style_font_family" "enum__team_drop_v_members_style_font_family" DEFAULT 'default',
  	"members_style_use_custom_font" boolean DEFAULT false,
  	"members_style_custom_font_file_id" integer,
  	"members_style_custom_font_name" varchar,
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta_app_ft_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_app_qr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Código QR',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_app_btn_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"store" "enum__cta_app_btn_v_store" DEFAULT 'appStore',
  	"link_type" "enum__cta_app_btn_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_app_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"header_content" jsonb,
  	"header_style_text_color" varchar DEFAULT '#101835',
  	"header_style_bold_text_color" varchar DEFAULT '#C2005F',
  	"header_style_use_font_group" boolean DEFAULT false,
  	"header_style_font_group_id" integer,
  	"header_style_font_family" "enum__cta_app_v_header_style_font_family" DEFAULT 'default',
  	"header_style_use_custom_font" boolean DEFAULT false,
  	"header_style_custom_font_file_id" integer,
  	"header_style_custom_font_name" varchar,
  	"subtitle_content" jsonb,
  	"subtitle_style_text_color" varchar DEFAULT '#666666',
  	"subtitle_style_bold_text_color" varchar,
  	"subtitle_style_use_font_group" boolean DEFAULT false,
  	"subtitle_style_font_group_id" integer,
  	"subtitle_style_font_family" "enum__cta_app_v_subtitle_style_font_family" DEFAULT 'default',
  	"subtitle_style_use_custom_font" boolean DEFAULT false,
  	"subtitle_style_custom_font_file_id" integer,
  	"subtitle_style_custom_font_name" varchar,
  	"mockup_image_id" integer,
  	"features_style_text_color" varchar DEFAULT '#101835',
  	"features_style_bold_text_color" varchar,
  	"features_style_use_font_group" boolean DEFAULT false,
  	"features_style_font_group_id" integer,
  	"features_style_font_family" "enum__cta_app_v_features_style_font_family" DEFAULT 'default',
  	"features_style_use_custom_font" boolean DEFAULT false,
  	"features_style_custom_font_file_id" integer,
  	"features_style_custom_font_name" varchar,
  	"features_style_check_color" varchar DEFAULT '#4CAF50',
  	"features_style_icon_use_media" boolean DEFAULT false,
  	"features_style_icon_media_image_id" integer,
  	"features_style_icon_icon_s_v_g" varchar,
  	"features_style_icon_alt" varchar DEFAULT 'Icono',
  	"download_card_desktop_scan_text" varchar DEFAULT 'Escanea el código QR para descargar la app',
  	"download_card_mobile_download_text" varchar DEFAULT 'Descarga la app y lleva tu bienestar siempre contigo',
  	"download_card_phone_icon_use_media" boolean DEFAULT false,
  	"download_card_phone_icon_media_image_id" integer,
  	"download_card_phone_icon_icon_s_v_g" varchar,
  	"download_card_phone_icon_alt" varchar DEFAULT 'Icono',
  	"background_color" varchar DEFAULT '#FFFFFF',
  	"show_decorative_svgs" boolean DEFAULT true,
  	"enable_mockup_scroll_animation" boolean DEFAULT true,
  	"mockup_scroll_show_percent" numeric DEFAULT 100,
  	"apply_custom_width" boolean DEFAULT false,
  	"custom_width_percent" numeric DEFAULT 100,
  	"custom_width_percent_mobile" numeric,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_l2d_pre_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#101835',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_l2d_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"secondary_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color_primary" varchar DEFAULT '#101835',
  	"text_color_secondary" varchar DEFAULT '#5c6b8a',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_fondo_drop" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#f8f4ff',
  	"accent_color" varchar,
  	"enable_parallax" boolean DEFAULT true,
  	"parallax_intensity" numeric DEFAULT 0.35,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pd_tags_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"background_color" varchar DEFAULT '#fce4ec',
  	"text_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_num_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"icon_background_color" varchar DEFAULT '#f8bbd0',
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_ci_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"product" jsonb,
  	"price" jsonb,
  	"tag" jsonb,
  	"tag_background_color" varchar DEFAULT '#c8e6c9',
  	"tag_text_color" varchar DEFAULT '#2e7d32',
  	"price_text_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_cols_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"title" jsonb,
  	"total_label" jsonb,
  	"total_price" jsonb,
  	"total_price_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_pfi_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_stats_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_color" varchar DEFAULT '#ffffff',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"highlight" jsonb,
  	"content" jsonb,
  	"text_color" varchar,
  	"bold_text_color" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pd_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"main_style_text_color" varchar,
  	"main_style_bold_text_color" varchar,
  	"background_image_id" integer,
  	"background_color" varchar,
  	"enable_animated_bg" boolean DEFAULT false,
  	"animated_accent_color" varchar DEFAULT '#a1004a',
  	"product_background_color" varchar DEFAULT '#ffffff',
  	"product_purchase_previous_price" jsonb,
  	"product_purchase_current_price" jsonb,
  	"product_purchase_description" jsonb,
  	"product_purchase_background_color" varchar DEFAULT '#faf7f8',
  	"product_purchase_button_label" varchar DEFAULT 'Empezar ahora',
  	"product_purchase_button_icon_s_v_g" varchar,
  	"product_purchase_button_background_color" varchar DEFAULT '#a1004a',
  	"product_purchase_button_text_color" varchar DEFAULT '#ffffff',
  	"product_purchase_button_link_type" "enum__pd_v_product_purchase_button_link_type" DEFAULT 'reference',
  	"product_purchase_button_link_new_tab" boolean,
  	"product_purchase_button_link_url" varchar,
  	"fine_print" jsonb,
  	"fine_print_color" varchar DEFAULT '#101835',
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__pd_v_font_family" DEFAULT 'default',
  	"use_custom_font" boolean DEFAULT false,
  	"custom_font_file_id" integer,
  	"custom_font_name" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_fqd_q_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec',
  	"question_rich_text" jsonb,
  	"answer_rich_text" jsonb,
  	"accent_color" varchar DEFAULT '#a1004a',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fqd_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_id" varchar,
  	"main_content" jsonb,
  	"background_color" varchar DEFAULT '#ffffff',
  	"text_color" varchar DEFAULT '#101835',
  	"bold_text_color" varchar DEFAULT '#a1004a',
  	"questions_section_background_color" varchar DEFAULT '#ffffff',
  	"use_font_group" boolean DEFAULT false,
  	"font_group_id" integer,
  	"font_family" "enum__fqd_v_font_family" DEFAULT 'default',
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
  	"version_hero_hd_tag_icon_use_media" boolean DEFAULT false,
  	"version_hero_hd_tag_icon_img_id" integer,
  	"version_hero_hd_tag_icon_svg" varchar,
  	"version_hero_hd_tag_icon_alt" varchar DEFAULT 'Icono',
  	"version_hero_hd_tag_label" varchar DEFAULT 'Clínica digital de pérdida de peso',
  	"version_hero_hd_tag_background_color" varchar DEFAULT '#FCE4EC',
  	"version_hero_hd_tag_text_color" varchar DEFAULT '#C2005F',
  	"version_hero_hd_hdr" jsonb,
  	"version_hero_hd_hsty_color" varchar,
  	"version_hero_hd_hsty_bold" varchar,
  	"version_hero_hd_hsty_use_f_g" boolean DEFAULT false,
  	"version_hero_hd_hsty_fg_id" integer,
  	"version_hero_hd_hsty_ff" "h_ff" DEFAULT 'default',
  	"version_hero_hd_hsty_use_c_f" boolean DEFAULT false,
  	"version_hero_hd_hsty_c_font_id" integer,
  	"version_hero_hd_hsty_c_font_nm" varchar,
  	"version_hero_hd_fsty_color" varchar,
  	"version_hero_hd_fsty_bold" varchar,
  	"version_hero_hd_fsty_use_f_g" boolean DEFAULT false,
  	"version_hero_hd_fsty_fg_id" integer,
  	"version_hero_hd_fsty_ff" "f_ff" DEFAULT 'default',
  	"version_hero_hd_fsty_use_c_f" boolean DEFAULT false,
  	"version_hero_hd_fsty_c_font_id" integer,
  	"version_hero_hd_fsty_c_font_nm" varchar,
  	"version_hero_hd_media_id" integer,
  	"version_hero_hd_img_alt" varchar DEFAULT 'Hero',
  	"version_hero_hd_calc_icon_use_media" boolean DEFAULT false,
  	"version_hero_hd_calc_icon_img_id" integer,
  	"version_hero_hd_calc_icon_svg" varchar,
  	"version_hero_hd_calc_icon_alt" varchar DEFAULT 'Icono',
  	"version_hero_hd_calc_content" jsonb,
  	"version_hero_hd_calc_h_label" varchar DEFAULT 'Estatura',
  	"version_hero_hd_calc_h_ph" varchar DEFAULT 'Ej. 170',
  	"version_hero_hd_calc_h_unit" varchar DEFAULT 'cm',
  	"version_hero_hd_calc_w_label" varchar DEFAULT 'Peso',
  	"version_hero_hd_calc_w_ph" varchar DEFAULT 'Ej. 70',
  	"version_hero_hd_calc_w_unit" varchar DEFAULT 'kg',
  	"version_hero_hd_calc_btn_label" varchar DEFAULT 'Calcular mi IMC',
  	"version_hero_hd_calc_btn_svg" varchar,
  	"version_hero_hd_calc_ptag_icon_use_media" boolean DEFAULT false,
  	"version_hero_hd_calc_ptag_icon_img_id" integer,
  	"version_hero_hd_calc_ptag_icon_svg" varchar,
  	"version_hero_hd_calc_ptag_icon_alt" varchar DEFAULT 'Icono',
  	"version_hero_hd_calc_ptag_label" varchar DEFAULT 'Tus datos están protegidos',
  	"version_hero_hd_calc_float_svg" varchar,
  	"version_hero_hd_calc_btn_bg" varchar DEFAULT '#C2005F',
  	"version_hero_hd_calc_btn_fg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_calc_card_bg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_calc_modal_title" varchar DEFAULT 'Calcula tu IMC',
  	"version_hero_hd_calc_modal_bg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_calc_recalc_txt" varchar DEFAULT 'Volver a calcular',
  	"version_hero_hd_calc_enable_contact" boolean DEFAULT true,
  	"version_hero_hd_calc_contact_title" jsonb,
  	"version_hero_hd_calc_contact_desc" jsonb,
  	"version_hero_hd_calc_contact_n_ph" varchar DEFAULT 'Nombre',
  	"version_hero_hd_calc_contact_p_ph" varchar DEFAULT 'Teléfono',
  	"version_hero_hd_calc_contact_e_ph" varchar DEFAULT 'Email',
  	"version_hero_hd_calc_contact_n_icon_use_media" boolean DEFAULT false,
  	"version_hero_hd_calc_contact_n_icon_img_id" integer,
  	"version_hero_hd_calc_contact_n_icon_svg" varchar,
  	"version_hero_hd_calc_contact_n_icon_alt" varchar DEFAULT 'Icono',
  	"version_hero_hd_calc_contact_p_icon_use_media" boolean DEFAULT false,
  	"version_hero_hd_calc_contact_p_icon_img_id" integer,
  	"version_hero_hd_calc_contact_p_icon_svg" varchar,
  	"version_hero_hd_calc_contact_p_icon_alt" varchar DEFAULT 'Icono',
  	"version_hero_hd_calc_contact_e_icon_use_media" boolean DEFAULT false,
  	"version_hero_hd_calc_contact_e_icon_img_id" integer,
  	"version_hero_hd_calc_contact_e_icon_svg" varchar,
  	"version_hero_hd_calc_contact_e_icon_alt" varchar DEFAULT 'Icono',
  	"version_hero_hd_calc_contact_privacy" jsonb,
  	"version_hero_hd_calc_contact_priv_req" boolean DEFAULT true,
  	"version_hero_hd_calc_contact_cont_btn" jsonb,
  	"version_hero_hd_calc_contact_cont_bg" varchar DEFAULT '#C2005F',
  	"version_hero_hd_calc_contact_cont_fg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_calc_elig_content" jsonb,
  	"version_hero_hd_calc_elig_bg" varchar DEFAULT '#C2005F',
  	"version_hero_hd_calc_elig_fg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_calc_no_elig_content" jsonb,
  	"version_hero_hd_calc_no_elig_bg" varchar DEFAULT '#C2005F',
  	"version_hero_hd_calc_no_elig_fg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_calc_tag_bg" varchar DEFAULT '#E8F5E9',
  	"version_hero_hd_calc_tag_fg" varchar DEFAULT '#2E7D32',
  	"version_hero_hd_osty_color" varchar,
  	"version_hero_hd_osty_bold" varchar,
  	"version_hero_hd_osty_use_f_g" boolean DEFAULT false,
  	"version_hero_hd_osty_fg_id" integer,
  	"version_hero_hd_osty_ff" "o_ff" DEFAULT 'default',
  	"version_hero_hd_osty_use_c_f" boolean DEFAULT false,
  	"version_hero_hd_osty_c_font_id" integer,
  	"version_hero_hd_osty_c_font_nm" varchar,
  	"version_hero_hd_curves" boolean DEFAULT true,
  	"version_hero_hd_accent" varchar DEFAULT '#C2005F',
  	"version_hero_hd_bg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_bg_grad" varchar DEFAULT 'linear-gradient(180deg, #FFF5F8 0%, #FFFFFF 55%)',
  	"version_hero_hd_p_btn_bg" varchar DEFAULT '#C2005F',
  	"version_hero_hd_p_btn_fg" varchar DEFAULT '#FFFFFF',
  	"version_hero_hd_s_btn_fg" varchar DEFAULT '#101835',
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
  
  CREATE TABLE "font_groups_fonts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"font_id" integer NOT NULL,
  	"variant" "enum_font_groups_fonts_variant" NOT NULL
  );
  
  CREATE TABLE "font_groups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"font_family_name" varchar NOT NULL,
  	"heading1_desktop_font_size" varchar,
  	"heading1_desktop_line_height" varchar,
  	"heading1_desktop_margin_top" varchar,
  	"heading1_desktop_margin_bottom" varchar,
  	"heading1_mobile_font_size" varchar,
  	"heading1_mobile_line_height" varchar,
  	"heading1_mobile_margin_top" varchar,
  	"heading1_mobile_margin_bottom" varchar,
  	"heading2_desktop_font_size" varchar,
  	"heading2_desktop_line_height" varchar,
  	"heading2_desktop_margin_top" varchar,
  	"heading2_desktop_margin_bottom" varchar,
  	"heading2_mobile_font_size" varchar,
  	"heading2_mobile_line_height" varchar,
  	"heading2_mobile_margin_top" varchar,
  	"heading2_mobile_margin_bottom" varchar,
  	"heading3_desktop_font_size" varchar,
  	"heading3_desktop_line_height" varchar,
  	"heading3_desktop_margin_top" varchar,
  	"heading3_desktop_margin_bottom" varchar,
  	"heading3_mobile_font_size" varchar,
  	"heading3_mobile_line_height" varchar,
  	"heading3_mobile_margin_top" varchar,
  	"heading3_mobile_margin_bottom" varchar,
  	"heading4_desktop_font_size" varchar,
  	"heading4_desktop_line_height" varchar,
  	"heading4_desktop_margin_top" varchar,
  	"heading4_desktop_margin_bottom" varchar,
  	"heading4_mobile_font_size" varchar,
  	"heading4_mobile_line_height" varchar,
  	"heading4_mobile_margin_top" varchar,
  	"heading4_mobile_margin_bottom" varchar,
  	"heading5_desktop_font_size" varchar,
  	"heading5_desktop_line_height" varchar,
  	"heading5_desktop_margin_top" varchar,
  	"heading5_desktop_margin_bottom" varchar,
  	"heading5_mobile_font_size" varchar,
  	"heading5_mobile_line_height" varchar,
  	"heading5_mobile_margin_top" varchar,
  	"heading5_mobile_margin_bottom" varchar,
  	"heading6_desktop_font_size" varchar,
  	"heading6_desktop_line_height" varchar,
  	"heading6_desktop_margin_top" varchar,
  	"heading6_desktop_margin_bottom" varchar,
  	"heading6_mobile_font_size" varchar,
  	"heading6_mobile_line_height" varchar,
  	"heading6_mobile_margin_top" varchar,
  	"heading6_mobile_margin_bottom" varchar,
  	"body_text_desktop_font_size" varchar,
  	"body_text_desktop_line_height" varchar,
  	"body_text_desktop_margin_top" varchar,
  	"body_text_desktop_margin_bottom" varchar,
  	"body_text_mobile_font_size" varchar,
  	"body_text_mobile_line_height" varchar,
  	"body_text_mobile_margin_top" varchar,
  	"body_text_mobile_margin_bottom" varchar,
  	"lists_text_desktop_font_size" varchar,
  	"lists_text_desktop_line_height" varchar,
  	"lists_text_desktop_margin_top" varchar,
  	"lists_text_desktop_margin_bottom" varchar,
  	"lists_text_mobile_font_size" varchar,
  	"lists_text_mobile_line_height" varchar,
  	"lists_text_mobile_margin_top" varchar,
  	"lists_text_mobile_margin_bottom" varchar,
  	"quote_text_desktop_font_size" varchar,
  	"quote_text_desktop_line_height" varchar,
  	"quote_text_desktop_margin_top" varchar,
  	"quote_text_desktop_margin_bottom" varchar,
  	"quote_text_mobile_font_size" varchar,
  	"quote_text_mobile_line_height" varchar,
  	"quote_text_mobile_margin_top" varchar,
  	"quote_text_mobile_margin_bottom" varchar,
  	"small_body_text_desktop_font_size" varchar,
  	"small_body_text_desktop_line_height" varchar,
  	"small_body_text_desktop_margin_top" varchar,
  	"small_body_text_desktop_margin_bottom" varchar,
  	"small_body_text_mobile_font_size" varchar,
  	"small_body_text_mobile_line_height" varchar,
  	"small_body_text_mobile_margin_top" varchar,
  	"small_body_text_mobile_margin_bottom" varchar,
  	"caption_text_desktop_font_size" varchar,
  	"caption_text_mobile_font_size" varchar,
  	"preload_fonts" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
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
  
  CREATE TABLE "leads_formulario" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead_ref" varchar,
  	"page_path" varchar NOT NULL,
  	"campaign_name" varchar,
  	"campaign_id" varchar,
  	"utm_content" varchar,
  	"utm_source" varchar,
  	"gclid" varchar,
  	"fbclid" varchar,
  	"status" "enum_leads_formulario_status" DEFAULT 'new' NOT NULL,
  	"last_sync_at" timestamp(3) with time zone,
  	"last_sync_error" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "leads_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"lead_ref" varchar,
  	"full_name" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"status" "enum_leads_cta_status" DEFAULT 'new' NOT NULL,
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
  	"font_groups_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"contact_submissions_id" integer,
  	"form_custom_2_submissions_id" integer,
  	"leads_formulario_id" integer,
  	"leads_cta_id" integer,
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
  
  CREATE TABLE "drop_sub" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'google',
  	"link_type" "enum_drop_sub_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "drop_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'home',
  	"link_type" "enum_drop_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "drop_btns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'youtube',
  	"link_type" "enum_drop_btns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"size" "enum_drop_btns_size" DEFAULT 'lg',
  	"variant" "enum_drop_btns_variant" DEFAULT 'default',
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
  	"navbar_drop_config_logo_use_media" boolean DEFAULT true,
  	"navbar_drop_config_logo_media_id" integer,
  	"navbar_drop_config_logo_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
  	"navbar_drop_config_logo_alt" varchar DEFAULT 'Logo image',
  	"navbar_drop_config_background_color" varchar,
  	"navbar_drop_config_mobile_menu_background_color" varchar,
  	"navbar_drop_config_text_color" varchar,
  	"navbar_drop_config_bold_text_color" varchar,
  	"navbar_drop_config_button_background_color" varchar,
  	"navbar_drop_config_button_text_color" varchar,
  	"navbar_drop_config_use_font_group" boolean DEFAULT false,
  	"navbar_drop_config_font_group_id" integer,
  	"navbar_drop_config_font_family" "enum_header_navbar_drop_config_font_family" DEFAULT 'default',
  	"navbar_drop_config_use_custom_font" boolean DEFAULT false,
  	"navbar_drop_config_custom_font_file_id" integer,
  	"navbar_drop_config_custom_font_name" varchar,
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
  
  CREATE TABLE "ftd_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'INICIO',
  	"link_type" "enum_ftd_nav_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar,
  	"icon_use_media" boolean DEFAULT false,
  	"icon_media_image_id" integer,
  	"icon_icon_s_v_g" varchar,
  	"icon_alt" varchar DEFAULT 'Icono',
  	"icon_background_color" varchar DEFAULT '#fce4ec'
  );
  
  CREATE TABLE "ftd_soc" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_ftd_soc_icon" DEFAULT 'none',
  	"title" varchar,
  	"link_type" "enum_ftd_soc_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_anchor_id" varchar
  );
  
  CREATE TABLE "ftd_pol" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"link_type" "enum_ftd_pol_link_type" DEFAULT 'reference',
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
  	"footer_drop_config_logo_use_media" boolean DEFAULT true,
  	"footer_drop_config_logo_media_image_id" integer,
  	"footer_drop_config_logo_icon_s_v_g" varchar,
  	"footer_drop_config_logo_alt" varchar DEFAULT 'Logo',
  	"footer_drop_config_logo_link_type" "enum_footer_footer_drop_config_logo_link_type" DEFAULT 'reference',
  	"footer_drop_config_logo_link_new_tab" boolean,
  	"footer_drop_config_logo_link_url" varchar,
  	"footer_drop_config_logo_link_anchor_id" varchar,
  	"footer_drop_config_secondary_logo_enabled" boolean DEFAULT false,
  	"footer_drop_config_secondary_logo_use_media" boolean DEFAULT true,
  	"footer_drop_config_secondary_logo_media_image_id" integer,
  	"footer_drop_config_secondary_logo_icon_s_v_g" varchar,
  	"footer_drop_config_secondary_logo_alt" varchar DEFAULT 'Logo secundario',
  	"footer_drop_config_secondary_logo_link_type" "enum_footer_footer_drop_config_secondary_logo_link_type" DEFAULT 'reference',
  	"footer_drop_config_secondary_logo_link_new_tab" boolean,
  	"footer_drop_config_secondary_logo_link_url" varchar,
  	"footer_drop_config_secondary_logo_link_anchor_id" varchar,
  	"footer_drop_config_footer_text" jsonb,
  	"footer_drop_config_background_color" varchar DEFAULT '#ffffff',
  	"footer_drop_config_text_color" varchar DEFAULT '#101835',
  	"footer_drop_config_text_color_secondary" varchar DEFAULT '#a1004a',
  	"footer_drop_config_hide_mobile_icons" boolean DEFAULT false,
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
  
  CREATE TABLE "notificacion_leads_cta_recipients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL
  );
  
  CREATE TABLE "notificacion_leads_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT false,
  	"from_email" varchar,
  	"subject_prefix" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_btn" ADD CONSTRAINT "hd_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_feat" ADD CONSTRAINT "hd_feat_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hd_feat" ADD CONSTRAINT "hd_feat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_cat" ADD CONSTRAINT "hd_cat_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hd_cat" ADD CONSTRAINT "hd_cat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_el" ADD CONSTRAINT "hd_el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_nel" ADD CONSTRAINT "hd_nel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hd_foot" ADD CONSTRAINT "hd_foot_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hd_foot" ADD CONSTRAINT "hd_foot_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ld_el" ADD CONSTRAINT "ld_el_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ld_el" ADD CONSTRAINT "ld_el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_elements_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("elements_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_elements_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("elements_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_name_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_name_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_phone_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_phone_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_email_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_email_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_font_group_id_font_groups_id_fk" FOREIGN KEY ("contact_form_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_contact_form_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("contact_form_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_privacy_policy_font_group_id_font_groups_id_fk" FOREIGN KEY ("privacy_policy_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_privacy_policy_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("privacy_policy_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_layout_drop" ADD CONSTRAINT "pages_blocks_layout_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_d_cat" ADD CONSTRAINT "imc_d_cat_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_d_cat" ADD CONSTRAINT "imc_d_cat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_d_el" ADD CONSTRAINT "imc_d_el_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_d_nel" ADD CONSTRAINT "imc_d_nel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."imc_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_category_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("category_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_imc_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("imc_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_footer_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("footer_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_footer_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_eligible_contact_form_name_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_name_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_eligible_contact_form_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_eligible_contact_form_email_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_email_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "imc_drop" ADD CONSTRAINT "imc_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lcta_steps" ADD CONSTRAINT "lcta_steps_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_steps" ADD CONSTRAINT "lcta_steps_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_steps" ADD CONSTRAINT "lcta_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lcta_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lcta_btn" ADD CONSTRAINT "lcta_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."lcta_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_steps_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("steps_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_steps_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("steps_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lcta_drop" ADD CONSTRAINT "lcta_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_members" ADD CONSTRAINT "team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_divider_icon_media_image_id_media_id_fk" FOREIGN KEY ("divider_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_secondary_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("secondary_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_secondary_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("secondary_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_members_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("members_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_members_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("members_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "team_drop" ADD CONSTRAINT "team_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app_ft" ADD CONSTRAINT "cta_app_ft_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_app"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app_qr" ADD CONSTRAINT "cta_app_qr_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app_qr" ADD CONSTRAINT "cta_app_qr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_app"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app_btn" ADD CONSTRAINT "cta_app_btn_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_app"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_subtitle_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("subtitle_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_subtitle_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("subtitle_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_mockup_image_id_media_id_fk" FOREIGN KEY ("mockup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_features_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("features_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_features_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("features_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_features_style_icon_media_image_id_media_id_fk" FOREIGN KEY ("features_style_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_download_card_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("download_card_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_app" ADD CONSTRAINT "cta_app_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "l2d_pre" ADD CONSTRAINT "l2d_pre_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "l2d_pre" ADD CONSTRAINT "l2d_pre_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."l2d"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "l2d" ADD CONSTRAINT "l2d_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_fondo_drop" ADD CONSTRAINT "pages_blocks_fondo_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_tags" ADD CONSTRAINT "pd_tags_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_tags" ADD CONSTRAINT "pd_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_num" ADD CONSTRAINT "pd_num_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_num" ADD CONSTRAINT "pd_num_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_ci" ADD CONSTRAINT "pd_ci_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd_cols"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_cols" ADD CONSTRAINT "pd_cols_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_cols" ADD CONSTRAINT "pd_cols_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_pfi" ADD CONSTRAINT "pd_pfi_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_pfi" ADD CONSTRAINT "pd_pfi_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd_stats" ADD CONSTRAINT "pd_stats_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd_stats" ADD CONSTRAINT "pd_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pd" ADD CONSTRAINT "pd_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fqd_q" ADD CONSTRAINT "fqd_q_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fqd_q" ADD CONSTRAINT "fqd_q_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fqd"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fqd" ADD CONSTRAINT "fqd_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fqd" ADD CONSTRAINT "fqd_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fqd" ADD CONSTRAINT "fqd_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_header138_first_image_media_image_id_media_id_fk" FOREIGN KEY ("hero_header138_first_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_header138_second_image_media_image_id_media_id_fk" FOREIGN KEY ("hero_header138_second_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_tag_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_tag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_hsty_fg_id_font_groups_id_fk" FOREIGN KEY ("hero_hd_hsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_hsty_c_font_id_fonts_id_fk" FOREIGN KEY ("hero_hd_hsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_fsty_fg_id_font_groups_id_fk" FOREIGN KEY ("hero_hd_fsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_fsty_c_font_id_fonts_id_fk" FOREIGN KEY ("hero_hd_fsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_media_id_media_id_fk" FOREIGN KEY ("hero_hd_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_ptag_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_ptag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_contact_n_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_contact_n_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_contact_p_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_contact_p_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_calc_contact_e_icon_img_id_media_id_fk" FOREIGN KEY ("hero_hd_calc_contact_e_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_osty_fg_id_font_groups_id_fk" FOREIGN KEY ("hero_hd_osty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hd_osty_c_font_id_fonts_id_fk" FOREIGN KEY ("hero_hd_osty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_btn_v" ADD CONSTRAINT "_hd_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_feat_v" ADD CONSTRAINT "_hd_feat_v_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hd_feat_v" ADD CONSTRAINT "_hd_feat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_cat_v" ADD CONSTRAINT "_hd_cat_v_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hd_cat_v" ADD CONSTRAINT "_hd_cat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_el_v" ADD CONSTRAINT "_hd_el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_nel_v" ADD CONSTRAINT "_hd_nel_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hd_foot_v" ADD CONSTRAINT "_hd_foot_v_icon_img_id_media_id_fk" FOREIGN KEY ("icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hd_foot_v" ADD CONSTRAINT "_hd_foot_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ld_el_v" ADD CONSTRAINT "_ld_el_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ld_el_v" ADD CONSTRAINT "_ld_el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout_drop"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_elements_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("elements_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_elements_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("elements_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_name_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_name_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_phone_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_phone_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_email_field_icon_media_image_id_media_id_fk" FOREIGN KEY ("contact_form_email_field_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_font_group_id_font_groups_id_fk" FOREIGN KEY ("contact_form_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_contact_form_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("contact_form_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_privacy_policy_font_group_id_font_groups_id_fk" FOREIGN KEY ("privacy_policy_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_privacy_policy_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("privacy_policy_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_layout_drop" ADD CONSTRAINT "_pages_v_blocks_layout_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_d_cat_v" ADD CONSTRAINT "_imc_d_cat_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_d_cat_v" ADD CONSTRAINT "_imc_d_cat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_d_el_v" ADD CONSTRAINT "_imc_d_el_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_d_nel_v" ADD CONSTRAINT "_imc_d_nel_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_imc_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_category_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("category_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_imc_header_icon_media_image_id_media_id_fk" FOREIGN KEY ("imc_header_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_footer_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("footer_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_footer_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("footer_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_eligible_contact_form_name_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_name_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_eligible_contact_form_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_eligible_contact_form_email_icon_media_image_id_media_id_fk" FOREIGN KEY ("eligible_contact_form_email_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_imc_drop_v" ADD CONSTRAINT "_imc_drop_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lcta_steps_v" ADD CONSTRAINT "_lcta_steps_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_steps_v" ADD CONSTRAINT "_lcta_steps_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_steps_v" ADD CONSTRAINT "_lcta_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_lcta_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lcta_btn_v" ADD CONSTRAINT "_lcta_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_lcta_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_steps_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("steps_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_steps_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("steps_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_lcta_drop_v" ADD CONSTRAINT "_lcta_drop_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_members_v" ADD CONSTRAINT "_team_members_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_drop_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_divider_icon_media_image_id_media_id_fk" FOREIGN KEY ("divider_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_secondary_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("secondary_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_secondary_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("secondary_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_members_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("members_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_members_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("members_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_team_drop_v" ADD CONSTRAINT "_team_drop_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_ft_v" ADD CONSTRAINT "_cta_app_ft_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_app_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_qr_v" ADD CONSTRAINT "_cta_app_qr_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_qr_v" ADD CONSTRAINT "_cta_app_qr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_app_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_btn_v" ADD CONSTRAINT "_cta_app_btn_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_app_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_header_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("header_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_header_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("header_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_subtitle_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("subtitle_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_subtitle_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("subtitle_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_mockup_image_id_media_id_fk" FOREIGN KEY ("mockup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_features_style_font_group_id_font_groups_id_fk" FOREIGN KEY ("features_style_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_features_style_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("features_style_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_features_style_icon_media_image_id_media_id_fk" FOREIGN KEY ("features_style_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_download_card_phone_icon_media_image_id_media_id_fk" FOREIGN KEY ("download_card_phone_icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_app_v" ADD CONSTRAINT "_cta_app_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_l2d_pre_v" ADD CONSTRAINT "_l2d_pre_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_l2d_pre_v" ADD CONSTRAINT "_l2d_pre_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_l2d_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_l2d_v" ADD CONSTRAINT "_l2d_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_fondo_drop" ADD CONSTRAINT "_pages_v_blocks_fondo_drop_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_tags_v" ADD CONSTRAINT "_pd_tags_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_tags_v" ADD CONSTRAINT "_pd_tags_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_num_v" ADD CONSTRAINT "_pd_num_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_num_v" ADD CONSTRAINT "_pd_num_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_ci_v" ADD CONSTRAINT "_pd_ci_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_cols_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_cols_v" ADD CONSTRAINT "_pd_cols_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_cols_v" ADD CONSTRAINT "_pd_cols_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_pfi_v" ADD CONSTRAINT "_pd_pfi_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_pfi_v" ADD CONSTRAINT "_pd_pfi_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_stats_v" ADD CONSTRAINT "_pd_stats_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_stats_v" ADD CONSTRAINT "_pd_stats_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pd_v" ADD CONSTRAINT "_pd_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fqd_q_v" ADD CONSTRAINT "_fqd_q_v_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fqd_q_v" ADD CONSTRAINT "_fqd_q_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fqd_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fqd_v" ADD CONSTRAINT "_fqd_v_font_group_id_font_groups_id_fk" FOREIGN KEY ("font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fqd_v" ADD CONSTRAINT "_fqd_v_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fqd_v" ADD CONSTRAINT "_fqd_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_header138_first_image_media_image_id_media_id_fk" FOREIGN KEY ("version_hero_header138_first_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_header138_second_image_media_image_id_media_id_fk" FOREIGN KEY ("version_hero_header138_second_image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_tag_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_tag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_hsty_fg_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hd_hsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_hsty_c_font_id_fonts_id_fk" FOREIGN KEY ("version_hero_hd_hsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_fsty_fg_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hd_fsty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_fsty_c_font_id_fonts_id_fk" FOREIGN KEY ("version_hero_hd_fsty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_media_id_media_id_fk" FOREIGN KEY ("version_hero_hd_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_ptag_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_ptag_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_contact_n_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_contact_n_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_contact_p_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_contact_p_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_calc_contact_e_icon_img_id_media_id_fk" FOREIGN KEY ("version_hero_hd_calc_contact_e_icon_img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_osty_fg_id_font_groups_id_fk" FOREIGN KEY ("version_hero_hd_osty_fg_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hd_osty_c_font_id_fonts_id_fk" FOREIGN KEY ("version_hero_hd_osty_c_font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
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
  ALTER TABLE "font_groups_fonts" ADD CONSTRAINT "font_groups_fonts_font_id_fonts_id_fk" FOREIGN KEY ("font_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "font_groups_fonts" ADD CONSTRAINT "font_groups_fonts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."font_groups"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_font_groups_fk" FOREIGN KEY ("font_groups_id") REFERENCES "public"."font_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_custom_2_submissions_fk" FOREIGN KEY ("form_custom_2_submissions_id") REFERENCES "public"."form_custom_2_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_formulario_fk" FOREIGN KEY ("leads_formulario_id") REFERENCES "public"."leads_formulario"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_cta_fk" FOREIGN KEY ("leads_cta_id") REFERENCES "public"."leads_cta"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "drop_sub" ADD CONSTRAINT "drop_sub_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."drop_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "drop_nav" ADD CONSTRAINT "drop_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "drop_btns" ADD CONSTRAINT "drop_btns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar11_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar11_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar1_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar5_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_drop_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar_drop_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_drop_config_font_group_id_font_groups_id_fk" FOREIGN KEY ("navbar_drop_config_font_group_id") REFERENCES "public"."font_groups"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_drop_config_custom_font_file_id_fonts_id_fk" FOREIGN KEY ("navbar_drop_config_custom_font_file_id") REFERENCES "public"."fonts"("id") ON DELETE set null ON UPDATE no action;
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
  ALTER TABLE "ftd_nav" ADD CONSTRAINT "ftd_nav_icon_media_image_id_media_id_fk" FOREIGN KEY ("icon_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ftd_nav" ADD CONSTRAINT "ftd_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ftd_soc" ADD CONSTRAINT "ftd_soc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ftd_pol" ADD CONSTRAINT "ftd_pol_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer1_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer4_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer4_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer5_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("footer_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_drop_config_logo_media_image_id_media_id_fk" FOREIGN KEY ("footer_drop_config_logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_drop_config_secondary_logo_media_image_id_media_id_fk" FOREIGN KEY ("footer_drop_config_secondary_logo_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "notificacion_leads_cta_recipients" ADD CONSTRAINT "notificacion_leads_cta_recipients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."notificacion_leads_cta"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "hd_btn_order_idx" ON "hd_btn" USING btree ("_order");
  CREATE INDEX "hd_btn_parent_id_idx" ON "hd_btn" USING btree ("_parent_id");
  CREATE INDEX "hd_feat_order_idx" ON "hd_feat" USING btree ("_order");
  CREATE INDEX "hd_feat_parent_id_idx" ON "hd_feat" USING btree ("_parent_id");
  CREATE INDEX "hd_feat_icon_icon_img_idx" ON "hd_feat" USING btree ("icon_img_id");
  CREATE INDEX "hd_cat_order_idx" ON "hd_cat" USING btree ("_order");
  CREATE INDEX "hd_cat_parent_id_idx" ON "hd_cat" USING btree ("_parent_id");
  CREATE INDEX "hd_cat_icon_icon_img_idx" ON "hd_cat" USING btree ("icon_img_id");
  CREATE INDEX "hd_el_order_idx" ON "hd_el" USING btree ("_order");
  CREATE INDEX "hd_el_parent_id_idx" ON "hd_el" USING btree ("_parent_id");
  CREATE INDEX "hd_nel_order_idx" ON "hd_nel" USING btree ("_order");
  CREATE INDEX "hd_nel_parent_id_idx" ON "hd_nel" USING btree ("_parent_id");
  CREATE INDEX "hd_foot_order_idx" ON "hd_foot" USING btree ("_order");
  CREATE INDEX "hd_foot_parent_id_idx" ON "hd_foot" USING btree ("_parent_id");
  CREATE INDEX "hd_foot_icon_icon_img_idx" ON "hd_foot" USING btree ("icon_img_id");
  CREATE INDEX "ld_el_order_idx" ON "ld_el" USING btree ("_order");
  CREATE INDEX "ld_el_parent_id_idx" ON "ld_el" USING btree ("_parent_id");
  CREATE INDEX "ld_el_icon_icon_media_image_idx" ON "ld_el" USING btree ("icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_order_idx" ON "pages_blocks_layout_drop" USING btree ("_order");
  CREATE INDEX "pages_blocks_layout_drop_parent_id_idx" ON "pages_blocks_layout_drop" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_layout_drop_path_idx" ON "pages_blocks_layout_drop" USING btree ("_path");
  CREATE INDEX "pages_blocks_layout_drop_header_style_header_style_font__idx" ON "pages_blocks_layout_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "pages_blocks_layout_drop_header_style_header_style_custo_idx" ON "pages_blocks_layout_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "pages_blocks_layout_drop_elements_style_elements_style_f_idx" ON "pages_blocks_layout_drop" USING btree ("elements_style_font_group_id");
  CREATE INDEX "pages_blocks_layout_drop_elements_style_elements_style_c_idx" ON "pages_blocks_layout_drop" USING btree ("elements_style_custom_font_file_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_icon_contact_form__idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_name_field_icon_co_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_name_field_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_phone_field_icon_c_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_phone_field_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_email_field_icon_c_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_email_field_icon_media_image_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_contact_form_font__idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_font_group_id");
  CREATE INDEX "pages_blocks_layout_drop_contact_form_contact_form_custo_idx" ON "pages_blocks_layout_drop" USING btree ("contact_form_custom_font_file_id");
  CREATE INDEX "pages_blocks_layout_drop_privacy_policy_privacy_policy_f_idx" ON "pages_blocks_layout_drop" USING btree ("privacy_policy_font_group_id");
  CREATE INDEX "pages_blocks_layout_drop_privacy_policy_privacy_policy_c_idx" ON "pages_blocks_layout_drop" USING btree ("privacy_policy_custom_font_file_id");
  CREATE INDEX "pages_blocks_layout_drop_background_image_idx" ON "pages_blocks_layout_drop" USING btree ("background_image_id");
  CREATE INDEX "imc_d_cat_order_idx" ON "imc_d_cat" USING btree ("_order");
  CREATE INDEX "imc_d_cat_parent_id_idx" ON "imc_d_cat" USING btree ("_parent_id");
  CREATE INDEX "imc_d_cat_icon_icon_media_image_idx" ON "imc_d_cat" USING btree ("icon_media_image_id");
  CREATE INDEX "imc_d_el_order_idx" ON "imc_d_el" USING btree ("_order");
  CREATE INDEX "imc_d_el_parent_id_idx" ON "imc_d_el" USING btree ("_parent_id");
  CREATE INDEX "imc_d_nel_order_idx" ON "imc_d_nel" USING btree ("_order");
  CREATE INDEX "imc_d_nel_parent_id_idx" ON "imc_d_nel" USING btree ("_parent_id");
  CREATE INDEX "imc_drop_order_idx" ON "imc_drop" USING btree ("_order");
  CREATE INDEX "imc_drop_parent_id_idx" ON "imc_drop" USING btree ("_parent_id");
  CREATE INDEX "imc_drop_path_idx" ON "imc_drop" USING btree ("_path");
  CREATE INDEX "imc_drop_header_style_header_style_font_group_idx" ON "imc_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "imc_drop_header_style_header_style_custom_font_file_idx" ON "imc_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "imc_drop_category_header_icon_category_header_icon_media_idx" ON "imc_drop" USING btree ("category_header_icon_media_image_id");
  CREATE INDEX "imc_drop_imc_header_icon_imc_header_icon_media_image_idx" ON "imc_drop" USING btree ("imc_header_icon_media_image_id");
  CREATE INDEX "imc_drop_image_image_media_image_idx" ON "imc_drop" USING btree ("image_media_image_id");
  CREATE INDEX "imc_drop_footer_style_footer_style_font_group_idx" ON "imc_drop" USING btree ("footer_style_font_group_id");
  CREATE INDEX "imc_drop_footer_style_footer_style_custom_font_file_idx" ON "imc_drop" USING btree ("footer_style_custom_font_file_id");
  CREATE INDEX "imc_drop_eligible_contact_form_name_icon_eligible_contac_idx" ON "imc_drop" USING btree ("eligible_contact_form_name_icon_media_image_id");
  CREATE INDEX "imc_drop_eligible_contact_form_phone_icon_eligible_conta_idx" ON "imc_drop" USING btree ("eligible_contact_form_phone_icon_media_image_id");
  CREATE INDEX "imc_drop_eligible_contact_form_email_icon_eligible_conta_idx" ON "imc_drop" USING btree ("eligible_contact_form_email_icon_media_image_id");
  CREATE INDEX "lcta_steps_order_idx" ON "lcta_steps" USING btree ("_order");
  CREATE INDEX "lcta_steps_parent_id_idx" ON "lcta_steps" USING btree ("_parent_id");
  CREATE INDEX "lcta_steps_image_idx" ON "lcta_steps" USING btree ("image_id");
  CREATE INDEX "lcta_steps_icon_icon_media_image_idx" ON "lcta_steps" USING btree ("icon_media_image_id");
  CREATE INDEX "lcta_btn_order_idx" ON "lcta_btn" USING btree ("_order");
  CREATE INDEX "lcta_btn_parent_id_idx" ON "lcta_btn" USING btree ("_parent_id");
  CREATE INDEX "lcta_drop_order_idx" ON "lcta_drop" USING btree ("_order");
  CREATE INDEX "lcta_drop_parent_id_idx" ON "lcta_drop" USING btree ("_parent_id");
  CREATE INDEX "lcta_drop_path_idx" ON "lcta_drop" USING btree ("_path");
  CREATE INDEX "lcta_drop_header_style_header_style_font_group_idx" ON "lcta_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "lcta_drop_header_style_header_style_custom_font_file_idx" ON "lcta_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "lcta_drop_steps_style_steps_style_font_group_idx" ON "lcta_drop" USING btree ("steps_style_font_group_id");
  CREATE INDEX "lcta_drop_steps_style_steps_style_custom_font_file_idx" ON "lcta_drop" USING btree ("steps_style_custom_font_file_id");
  CREATE INDEX "team_members_order_idx" ON "team_members" USING btree ("_order");
  CREATE INDEX "team_members_parent_id_idx" ON "team_members" USING btree ("_parent_id");
  CREATE INDEX "team_members_image_idx" ON "team_members" USING btree ("image_id");
  CREATE INDEX "team_drop_order_idx" ON "team_drop" USING btree ("_order");
  CREATE INDEX "team_drop_parent_id_idx" ON "team_drop" USING btree ("_parent_id");
  CREATE INDEX "team_drop_path_idx" ON "team_drop" USING btree ("_path");
  CREATE INDEX "team_drop_header_style_header_style_font_group_idx" ON "team_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "team_drop_header_style_header_style_custom_font_file_idx" ON "team_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "team_drop_divider_icon_divider_icon_media_image_idx" ON "team_drop" USING btree ("divider_icon_media_image_id");
  CREATE INDEX "team_drop_secondary_style_secondary_style_font_group_idx" ON "team_drop" USING btree ("secondary_style_font_group_id");
  CREATE INDEX "team_drop_secondary_style_secondary_style_custom_font_fi_idx" ON "team_drop" USING btree ("secondary_style_custom_font_file_id");
  CREATE INDEX "team_drop_members_style_members_style_font_group_idx" ON "team_drop" USING btree ("members_style_font_group_id");
  CREATE INDEX "team_drop_members_style_members_style_custom_font_file_idx" ON "team_drop" USING btree ("members_style_custom_font_file_id");
  CREATE INDEX "cta_app_ft_order_idx" ON "cta_app_ft" USING btree ("_order");
  CREATE INDEX "cta_app_ft_parent_id_idx" ON "cta_app_ft" USING btree ("_parent_id");
  CREATE INDEX "cta_app_qr_order_idx" ON "cta_app_qr" USING btree ("_order");
  CREATE INDEX "cta_app_qr_parent_id_idx" ON "cta_app_qr" USING btree ("_parent_id");
  CREATE INDEX "cta_app_qr_image_idx" ON "cta_app_qr" USING btree ("image_id");
  CREATE INDEX "cta_app_btn_order_idx" ON "cta_app_btn" USING btree ("_order");
  CREATE INDEX "cta_app_btn_parent_id_idx" ON "cta_app_btn" USING btree ("_parent_id");
  CREATE INDEX "cta_app_order_idx" ON "cta_app" USING btree ("_order");
  CREATE INDEX "cta_app_parent_id_idx" ON "cta_app" USING btree ("_parent_id");
  CREATE INDEX "cta_app_path_idx" ON "cta_app" USING btree ("_path");
  CREATE INDEX "cta_app_header_style_header_style_font_group_idx" ON "cta_app" USING btree ("header_style_font_group_id");
  CREATE INDEX "cta_app_header_style_header_style_custom_font_file_idx" ON "cta_app" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "cta_app_subtitle_style_subtitle_style_font_group_idx" ON "cta_app" USING btree ("subtitle_style_font_group_id");
  CREATE INDEX "cta_app_subtitle_style_subtitle_style_custom_font_file_idx" ON "cta_app" USING btree ("subtitle_style_custom_font_file_id");
  CREATE INDEX "cta_app_mockup_image_idx" ON "cta_app" USING btree ("mockup_image_id");
  CREATE INDEX "cta_app_features_style_features_style_font_group_idx" ON "cta_app" USING btree ("features_style_font_group_id");
  CREATE INDEX "cta_app_features_style_features_style_custom_font_file_idx" ON "cta_app" USING btree ("features_style_custom_font_file_id");
  CREATE INDEX "cta_app_features_style_icon_features_style_icon_media_im_idx" ON "cta_app" USING btree ("features_style_icon_media_image_id");
  CREATE INDEX "cta_app_download_card_phone_icon_download_card_phone_ico_idx" ON "cta_app" USING btree ("download_card_phone_icon_media_image_id");
  CREATE INDEX "l2d_pre_order_idx" ON "l2d_pre" USING btree ("_order");
  CREATE INDEX "l2d_pre_parent_id_idx" ON "l2d_pre" USING btree ("_parent_id");
  CREATE INDEX "l2d_pre_icon_icon_media_image_idx" ON "l2d_pre" USING btree ("icon_media_image_id");
  CREATE INDEX "l2d_order_idx" ON "l2d" USING btree ("_order");
  CREATE INDEX "l2d_parent_id_idx" ON "l2d" USING btree ("_parent_id");
  CREATE INDEX "l2d_path_idx" ON "l2d" USING btree ("_path");
  CREATE INDEX "pages_blocks_fondo_drop_order_idx" ON "pages_blocks_fondo_drop" USING btree ("_order");
  CREATE INDEX "pages_blocks_fondo_drop_parent_id_idx" ON "pages_blocks_fondo_drop" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_fondo_drop_path_idx" ON "pages_blocks_fondo_drop" USING btree ("_path");
  CREATE INDEX "pd_tags_order_idx" ON "pd_tags" USING btree ("_order");
  CREATE INDEX "pd_tags_parent_id_idx" ON "pd_tags" USING btree ("_parent_id");
  CREATE INDEX "pd_tags_icon_icon_media_image_idx" ON "pd_tags" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_num_order_idx" ON "pd_num" USING btree ("_order");
  CREATE INDEX "pd_num_parent_id_idx" ON "pd_num" USING btree ("_parent_id");
  CREATE INDEX "pd_num_icon_icon_media_image_idx" ON "pd_num" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_ci_order_idx" ON "pd_ci" USING btree ("_order");
  CREATE INDEX "pd_ci_parent_id_idx" ON "pd_ci" USING btree ("_parent_id");
  CREATE INDEX "pd_cols_order_idx" ON "pd_cols" USING btree ("_order");
  CREATE INDEX "pd_cols_parent_id_idx" ON "pd_cols" USING btree ("_parent_id");
  CREATE INDEX "pd_cols_icon_icon_media_image_idx" ON "pd_cols" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_pfi_order_idx" ON "pd_pfi" USING btree ("_order");
  CREATE INDEX "pd_pfi_parent_id_idx" ON "pd_pfi" USING btree ("_parent_id");
  CREATE INDEX "pd_pfi_icon_icon_media_image_idx" ON "pd_pfi" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_stats_order_idx" ON "pd_stats" USING btree ("_order");
  CREATE INDEX "pd_stats_parent_id_idx" ON "pd_stats" USING btree ("_parent_id");
  CREATE INDEX "pd_stats_icon_icon_media_image_idx" ON "pd_stats" USING btree ("icon_media_image_id");
  CREATE INDEX "pd_order_idx" ON "pd" USING btree ("_order");
  CREATE INDEX "pd_parent_id_idx" ON "pd" USING btree ("_parent_id");
  CREATE INDEX "pd_path_idx" ON "pd" USING btree ("_path");
  CREATE INDEX "pd_background_image_idx" ON "pd" USING btree ("background_image_id");
  CREATE INDEX "pd_font_group_idx" ON "pd" USING btree ("font_group_id");
  CREATE INDEX "pd_custom_font_file_idx" ON "pd" USING btree ("custom_font_file_id");
  CREATE INDEX "fqd_q_order_idx" ON "fqd_q" USING btree ("_order");
  CREATE INDEX "fqd_q_parent_id_idx" ON "fqd_q" USING btree ("_parent_id");
  CREATE INDEX "fqd_q_icon_icon_media_image_idx" ON "fqd_q" USING btree ("icon_media_image_id");
  CREATE INDEX "fqd_order_idx" ON "fqd" USING btree ("_order");
  CREATE INDEX "fqd_parent_id_idx" ON "fqd" USING btree ("_parent_id");
  CREATE INDEX "fqd_path_idx" ON "fqd" USING btree ("_path");
  CREATE INDEX "fqd_font_group_idx" ON "fqd" USING btree ("font_group_id");
  CREATE INDEX "fqd_custom_font_file_idx" ON "fqd" USING btree ("custom_font_file_id");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_hero_header138_first_image_hero_header138_first_im_idx" ON "pages" USING btree ("hero_header138_first_image_media_image_id");
  CREATE INDEX "pages_hero_header138_second_image_hero_header138_second__idx" ON "pages" USING btree ("hero_header138_second_image_media_image_id");
  CREATE INDEX "pages_hero_hero_imgs_hero_hero_imgs_first_image_upload_idx" ON "pages" USING btree ("hero_hero_imgs_first_image_upload_id");
  CREATE INDEX "pages_hero_hero_imgs_hero_hero_imgs_second_image_upload_idx" ON "pages" USING btree ("hero_hero_imgs_second_image_upload_id");
  CREATE INDEX "pages_hero_hd_tag_icon_hero_hd_tag_icon_img_idx" ON "pages" USING btree ("hero_hd_tag_icon_img_id");
  CREATE INDEX "pages_hero_hd_hsty_hero_hd_hsty_fg_idx" ON "pages" USING btree ("hero_hd_hsty_fg_id");
  CREATE INDEX "pages_hero_hd_hsty_hero_hd_hsty_c_font_idx" ON "pages" USING btree ("hero_hd_hsty_c_font_id");
  CREATE INDEX "pages_hero_hd_fsty_hero_hd_fsty_fg_idx" ON "pages" USING btree ("hero_hd_fsty_fg_id");
  CREATE INDEX "pages_hero_hd_fsty_hero_hd_fsty_c_font_idx" ON "pages" USING btree ("hero_hd_fsty_c_font_id");
  CREATE INDEX "pages_hero_hd_hero_hd_media_idx" ON "pages" USING btree ("hero_hd_media_id");
  CREATE INDEX "pages_hero_hd_calc_icon_hero_hd_calc_icon_img_idx" ON "pages" USING btree ("hero_hd_calc_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_ptag_icon_hero_hd_calc_ptag_icon_img_idx" ON "pages" USING btree ("hero_hd_calc_ptag_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_contact_n_icon_hero_hd_calc_contact_n_idx" ON "pages" USING btree ("hero_hd_calc_contact_n_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_contact_p_icon_hero_hd_calc_contact_p_idx" ON "pages" USING btree ("hero_hd_calc_contact_p_icon_img_id");
  CREATE INDEX "pages_hero_hd_calc_contact_e_icon_hero_hd_calc_contact_e_idx" ON "pages" USING btree ("hero_hd_calc_contact_e_icon_img_id");
  CREATE INDEX "pages_hero_hd_osty_hero_hd_osty_fg_idx" ON "pages" USING btree ("hero_hd_osty_fg_id");
  CREATE INDEX "pages_hero_hd_osty_hero_hd_osty_c_font_idx" ON "pages" USING btree ("hero_hd_osty_c_font_id");
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
  CREATE INDEX "_hd_btn_v_order_idx" ON "_hd_btn_v" USING btree ("_order");
  CREATE INDEX "_hd_btn_v_parent_id_idx" ON "_hd_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_feat_v_order_idx" ON "_hd_feat_v" USING btree ("_order");
  CREATE INDEX "_hd_feat_v_parent_id_idx" ON "_hd_feat_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_feat_v_icon_icon_img_idx" ON "_hd_feat_v" USING btree ("icon_img_id");
  CREATE INDEX "_hd_cat_v_order_idx" ON "_hd_cat_v" USING btree ("_order");
  CREATE INDEX "_hd_cat_v_parent_id_idx" ON "_hd_cat_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_cat_v_icon_icon_img_idx" ON "_hd_cat_v" USING btree ("icon_img_id");
  CREATE INDEX "_hd_el_v_order_idx" ON "_hd_el_v" USING btree ("_order");
  CREATE INDEX "_hd_el_v_parent_id_idx" ON "_hd_el_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_nel_v_order_idx" ON "_hd_nel_v" USING btree ("_order");
  CREATE INDEX "_hd_nel_v_parent_id_idx" ON "_hd_nel_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_foot_v_order_idx" ON "_hd_foot_v" USING btree ("_order");
  CREATE INDEX "_hd_foot_v_parent_id_idx" ON "_hd_foot_v" USING btree ("_parent_id");
  CREATE INDEX "_hd_foot_v_icon_icon_img_idx" ON "_hd_foot_v" USING btree ("icon_img_id");
  CREATE INDEX "_ld_el_v_order_idx" ON "_ld_el_v" USING btree ("_order");
  CREATE INDEX "_ld_el_v_parent_id_idx" ON "_ld_el_v" USING btree ("_parent_id");
  CREATE INDEX "_ld_el_v_icon_icon_media_image_idx" ON "_ld_el_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_order_idx" ON "_pages_v_blocks_layout_drop" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_layout_drop_parent_id_idx" ON "_pages_v_blocks_layout_drop" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_path_idx" ON "_pages_v_blocks_layout_drop" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_layout_drop_header_style_header_style_fo_idx" ON "_pages_v_blocks_layout_drop" USING btree ("header_style_font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_header_style_header_style_cu_idx" ON "_pages_v_blocks_layout_drop" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_elements_style_elements_styl_idx" ON "_pages_v_blocks_layout_drop" USING btree ("elements_style_font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_elements_style_elements_st_1_idx" ON "_pages_v_blocks_layout_drop" USING btree ("elements_style_custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_icon_contact_fo_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_name_field_icon_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_name_field_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_phone_field_ico_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_phone_field_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_email_field_ico_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_email_field_icon_media_image_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_contact_form_fo_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_contact_form_contact_form_cu_idx" ON "_pages_v_blocks_layout_drop" USING btree ("contact_form_custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_privacy_policy_privacy_polic_idx" ON "_pages_v_blocks_layout_drop" USING btree ("privacy_policy_font_group_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_privacy_policy_privacy_pol_1_idx" ON "_pages_v_blocks_layout_drop" USING btree ("privacy_policy_custom_font_file_id");
  CREATE INDEX "_pages_v_blocks_layout_drop_background_image_idx" ON "_pages_v_blocks_layout_drop" USING btree ("background_image_id");
  CREATE INDEX "_imc_d_cat_v_order_idx" ON "_imc_d_cat_v" USING btree ("_order");
  CREATE INDEX "_imc_d_cat_v_parent_id_idx" ON "_imc_d_cat_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_d_cat_v_icon_icon_media_image_idx" ON "_imc_d_cat_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_imc_d_el_v_order_idx" ON "_imc_d_el_v" USING btree ("_order");
  CREATE INDEX "_imc_d_el_v_parent_id_idx" ON "_imc_d_el_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_d_nel_v_order_idx" ON "_imc_d_nel_v" USING btree ("_order");
  CREATE INDEX "_imc_d_nel_v_parent_id_idx" ON "_imc_d_nel_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_drop_v_order_idx" ON "_imc_drop_v" USING btree ("_order");
  CREATE INDEX "_imc_drop_v_parent_id_idx" ON "_imc_drop_v" USING btree ("_parent_id");
  CREATE INDEX "_imc_drop_v_path_idx" ON "_imc_drop_v" USING btree ("_path");
  CREATE INDEX "_imc_drop_v_header_style_header_style_font_group_idx" ON "_imc_drop_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_imc_drop_v_header_style_header_style_custom_font_file_idx" ON "_imc_drop_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_imc_drop_v_category_header_icon_category_header_icon_me_idx" ON "_imc_drop_v" USING btree ("category_header_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_imc_header_icon_imc_header_icon_media_image_idx" ON "_imc_drop_v" USING btree ("imc_header_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_image_image_media_image_idx" ON "_imc_drop_v" USING btree ("image_media_image_id");
  CREATE INDEX "_imc_drop_v_footer_style_footer_style_font_group_idx" ON "_imc_drop_v" USING btree ("footer_style_font_group_id");
  CREATE INDEX "_imc_drop_v_footer_style_footer_style_custom_font_file_idx" ON "_imc_drop_v" USING btree ("footer_style_custom_font_file_id");
  CREATE INDEX "_imc_drop_v_eligible_contact_form_name_icon_eligible_con_idx" ON "_imc_drop_v" USING btree ("eligible_contact_form_name_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_eligible_contact_form_phone_icon_eligible_co_idx" ON "_imc_drop_v" USING btree ("eligible_contact_form_phone_icon_media_image_id");
  CREATE INDEX "_imc_drop_v_eligible_contact_form_email_icon_eligible_co_idx" ON "_imc_drop_v" USING btree ("eligible_contact_form_email_icon_media_image_id");
  CREATE INDEX "_lcta_steps_v_order_idx" ON "_lcta_steps_v" USING btree ("_order");
  CREATE INDEX "_lcta_steps_v_parent_id_idx" ON "_lcta_steps_v" USING btree ("_parent_id");
  CREATE INDEX "_lcta_steps_v_image_idx" ON "_lcta_steps_v" USING btree ("image_id");
  CREATE INDEX "_lcta_steps_v_icon_icon_media_image_idx" ON "_lcta_steps_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_lcta_btn_v_order_idx" ON "_lcta_btn_v" USING btree ("_order");
  CREATE INDEX "_lcta_btn_v_parent_id_idx" ON "_lcta_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_lcta_drop_v_order_idx" ON "_lcta_drop_v" USING btree ("_order");
  CREATE INDEX "_lcta_drop_v_parent_id_idx" ON "_lcta_drop_v" USING btree ("_parent_id");
  CREATE INDEX "_lcta_drop_v_path_idx" ON "_lcta_drop_v" USING btree ("_path");
  CREATE INDEX "_lcta_drop_v_header_style_header_style_font_group_idx" ON "_lcta_drop_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_lcta_drop_v_header_style_header_style_custom_font_file_idx" ON "_lcta_drop_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_lcta_drop_v_steps_style_steps_style_font_group_idx" ON "_lcta_drop_v" USING btree ("steps_style_font_group_id");
  CREATE INDEX "_lcta_drop_v_steps_style_steps_style_custom_font_file_idx" ON "_lcta_drop_v" USING btree ("steps_style_custom_font_file_id");
  CREATE INDEX "_team_members_v_order_idx" ON "_team_members_v" USING btree ("_order");
  CREATE INDEX "_team_members_v_parent_id_idx" ON "_team_members_v" USING btree ("_parent_id");
  CREATE INDEX "_team_members_v_image_idx" ON "_team_members_v" USING btree ("image_id");
  CREATE INDEX "_team_drop_v_order_idx" ON "_team_drop_v" USING btree ("_order");
  CREATE INDEX "_team_drop_v_parent_id_idx" ON "_team_drop_v" USING btree ("_parent_id");
  CREATE INDEX "_team_drop_v_path_idx" ON "_team_drop_v" USING btree ("_path");
  CREATE INDEX "_team_drop_v_header_style_header_style_font_group_idx" ON "_team_drop_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_team_drop_v_header_style_header_style_custom_font_file_idx" ON "_team_drop_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_team_drop_v_divider_icon_divider_icon_media_image_idx" ON "_team_drop_v" USING btree ("divider_icon_media_image_id");
  CREATE INDEX "_team_drop_v_secondary_style_secondary_style_font_group_idx" ON "_team_drop_v" USING btree ("secondary_style_font_group_id");
  CREATE INDEX "_team_drop_v_secondary_style_secondary_style_custom_font_idx" ON "_team_drop_v" USING btree ("secondary_style_custom_font_file_id");
  CREATE INDEX "_team_drop_v_members_style_members_style_font_group_idx" ON "_team_drop_v" USING btree ("members_style_font_group_id");
  CREATE INDEX "_team_drop_v_members_style_members_style_custom_font_fil_idx" ON "_team_drop_v" USING btree ("members_style_custom_font_file_id");
  CREATE INDEX "_cta_app_ft_v_order_idx" ON "_cta_app_ft_v" USING btree ("_order");
  CREATE INDEX "_cta_app_ft_v_parent_id_idx" ON "_cta_app_ft_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_qr_v_order_idx" ON "_cta_app_qr_v" USING btree ("_order");
  CREATE INDEX "_cta_app_qr_v_parent_id_idx" ON "_cta_app_qr_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_qr_v_image_idx" ON "_cta_app_qr_v" USING btree ("image_id");
  CREATE INDEX "_cta_app_btn_v_order_idx" ON "_cta_app_btn_v" USING btree ("_order");
  CREATE INDEX "_cta_app_btn_v_parent_id_idx" ON "_cta_app_btn_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_v_order_idx" ON "_cta_app_v" USING btree ("_order");
  CREATE INDEX "_cta_app_v_parent_id_idx" ON "_cta_app_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_app_v_path_idx" ON "_cta_app_v" USING btree ("_path");
  CREATE INDEX "_cta_app_v_header_style_header_style_font_group_idx" ON "_cta_app_v" USING btree ("header_style_font_group_id");
  CREATE INDEX "_cta_app_v_header_style_header_style_custom_font_file_idx" ON "_cta_app_v" USING btree ("header_style_custom_font_file_id");
  CREATE INDEX "_cta_app_v_subtitle_style_subtitle_style_font_group_idx" ON "_cta_app_v" USING btree ("subtitle_style_font_group_id");
  CREATE INDEX "_cta_app_v_subtitle_style_subtitle_style_custom_font_fil_idx" ON "_cta_app_v" USING btree ("subtitle_style_custom_font_file_id");
  CREATE INDEX "_cta_app_v_mockup_image_idx" ON "_cta_app_v" USING btree ("mockup_image_id");
  CREATE INDEX "_cta_app_v_features_style_features_style_font_group_idx" ON "_cta_app_v" USING btree ("features_style_font_group_id");
  CREATE INDEX "_cta_app_v_features_style_features_style_custom_font_fil_idx" ON "_cta_app_v" USING btree ("features_style_custom_font_file_id");
  CREATE INDEX "_cta_app_v_features_style_icon_features_style_icon_media_idx" ON "_cta_app_v" USING btree ("features_style_icon_media_image_id");
  CREATE INDEX "_cta_app_v_download_card_phone_icon_download_card_phone__idx" ON "_cta_app_v" USING btree ("download_card_phone_icon_media_image_id");
  CREATE INDEX "_l2d_pre_v_order_idx" ON "_l2d_pre_v" USING btree ("_order");
  CREATE INDEX "_l2d_pre_v_parent_id_idx" ON "_l2d_pre_v" USING btree ("_parent_id");
  CREATE INDEX "_l2d_pre_v_icon_icon_media_image_idx" ON "_l2d_pre_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_l2d_v_order_idx" ON "_l2d_v" USING btree ("_order");
  CREATE INDEX "_l2d_v_parent_id_idx" ON "_l2d_v" USING btree ("_parent_id");
  CREATE INDEX "_l2d_v_path_idx" ON "_l2d_v" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_fondo_drop_order_idx" ON "_pages_v_blocks_fondo_drop" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_fondo_drop_parent_id_idx" ON "_pages_v_blocks_fondo_drop" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_fondo_drop_path_idx" ON "_pages_v_blocks_fondo_drop" USING btree ("_path");
  CREATE INDEX "_pd_tags_v_order_idx" ON "_pd_tags_v" USING btree ("_order");
  CREATE INDEX "_pd_tags_v_parent_id_idx" ON "_pd_tags_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_tags_v_icon_icon_media_image_idx" ON "_pd_tags_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_num_v_order_idx" ON "_pd_num_v" USING btree ("_order");
  CREATE INDEX "_pd_num_v_parent_id_idx" ON "_pd_num_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_num_v_icon_icon_media_image_idx" ON "_pd_num_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_ci_v_order_idx" ON "_pd_ci_v" USING btree ("_order");
  CREATE INDEX "_pd_ci_v_parent_id_idx" ON "_pd_ci_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_cols_v_order_idx" ON "_pd_cols_v" USING btree ("_order");
  CREATE INDEX "_pd_cols_v_parent_id_idx" ON "_pd_cols_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_cols_v_icon_icon_media_image_idx" ON "_pd_cols_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_pfi_v_order_idx" ON "_pd_pfi_v" USING btree ("_order");
  CREATE INDEX "_pd_pfi_v_parent_id_idx" ON "_pd_pfi_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_pfi_v_icon_icon_media_image_idx" ON "_pd_pfi_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_stats_v_order_idx" ON "_pd_stats_v" USING btree ("_order");
  CREATE INDEX "_pd_stats_v_parent_id_idx" ON "_pd_stats_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_stats_v_icon_icon_media_image_idx" ON "_pd_stats_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_pd_v_order_idx" ON "_pd_v" USING btree ("_order");
  CREATE INDEX "_pd_v_parent_id_idx" ON "_pd_v" USING btree ("_parent_id");
  CREATE INDEX "_pd_v_path_idx" ON "_pd_v" USING btree ("_path");
  CREATE INDEX "_pd_v_background_image_idx" ON "_pd_v" USING btree ("background_image_id");
  CREATE INDEX "_pd_v_font_group_idx" ON "_pd_v" USING btree ("font_group_id");
  CREATE INDEX "_pd_v_custom_font_file_idx" ON "_pd_v" USING btree ("custom_font_file_id");
  CREATE INDEX "_fqd_q_v_order_idx" ON "_fqd_q_v" USING btree ("_order");
  CREATE INDEX "_fqd_q_v_parent_id_idx" ON "_fqd_q_v" USING btree ("_parent_id");
  CREATE INDEX "_fqd_q_v_icon_icon_media_image_idx" ON "_fqd_q_v" USING btree ("icon_media_image_id");
  CREATE INDEX "_fqd_v_order_idx" ON "_fqd_v" USING btree ("_order");
  CREATE INDEX "_fqd_v_parent_id_idx" ON "_fqd_v" USING btree ("_parent_id");
  CREATE INDEX "_fqd_v_path_idx" ON "_fqd_v" USING btree ("_path");
  CREATE INDEX "_fqd_v_font_group_idx" ON "_fqd_v" USING btree ("font_group_id");
  CREATE INDEX "_fqd_v_custom_font_file_idx" ON "_fqd_v" USING btree ("custom_font_file_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_hero_header138_first_image_version_hero_idx" ON "_pages_v" USING btree ("version_hero_header138_first_image_media_image_id");
  CREATE INDEX "_pages_v_version_hero_header138_second_image_version_her_idx" ON "_pages_v" USING btree ("version_hero_header138_second_image_media_image_id");
  CREATE INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_f_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_first_image_upload_id");
  CREATE INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_s_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_second_image_upload_id");
  CREATE INDEX "_pages_v_version_hero_hd_tag_icon_version_hero_hd_tag_ic_idx" ON "_pages_v" USING btree ("version_hero_hd_tag_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_hsty_version_hero_hd_hsty_fg_idx" ON "_pages_v" USING btree ("version_hero_hd_hsty_fg_id");
  CREATE INDEX "_pages_v_version_hero_hd_hsty_version_hero_hd_hsty_c_fon_idx" ON "_pages_v" USING btree ("version_hero_hd_hsty_c_font_id");
  CREATE INDEX "_pages_v_version_hero_hd_fsty_version_hero_hd_fsty_fg_idx" ON "_pages_v" USING btree ("version_hero_hd_fsty_fg_id");
  CREATE INDEX "_pages_v_version_hero_hd_fsty_version_hero_hd_fsty_c_fon_idx" ON "_pages_v" USING btree ("version_hero_hd_fsty_c_font_id");
  CREATE INDEX "_pages_v_version_hero_hd_version_hero_hd_media_idx" ON "_pages_v" USING btree ("version_hero_hd_media_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_icon_version_hero_hd_calc__idx" ON "_pages_v" USING btree ("version_hero_hd_calc_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_ptag_icon_version_hero_hd__idx" ON "_pages_v" USING btree ("version_hero_hd_calc_ptag_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_contact_n_icon_version_her_idx" ON "_pages_v" USING btree ("version_hero_hd_calc_contact_n_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_contact_p_icon_version_her_idx" ON "_pages_v" USING btree ("version_hero_hd_calc_contact_p_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_calc_contact_e_icon_version_her_idx" ON "_pages_v" USING btree ("version_hero_hd_calc_contact_e_icon_img_id");
  CREATE INDEX "_pages_v_version_hero_hd_osty_version_hero_hd_osty_fg_idx" ON "_pages_v" USING btree ("version_hero_hd_osty_fg_id");
  CREATE INDEX "_pages_v_version_hero_hd_osty_version_hero_hd_osty_c_fon_idx" ON "_pages_v" USING btree ("version_hero_hd_osty_c_font_id");
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
  CREATE INDEX "font_groups_fonts_order_idx" ON "font_groups_fonts" USING btree ("_order");
  CREATE INDEX "font_groups_fonts_parent_id_idx" ON "font_groups_fonts" USING btree ("_parent_id");
  CREATE INDEX "font_groups_fonts_font_idx" ON "font_groups_fonts" USING btree ("font_id");
  CREATE INDEX "font_groups_updated_at_idx" ON "font_groups" USING btree ("updated_at");
  CREATE INDEX "font_groups_created_at_idx" ON "font_groups" USING btree ("created_at");
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
  CREATE UNIQUE INDEX "leads_formulario_lead_ref_idx" ON "leads_formulario" USING btree ("lead_ref");
  CREATE INDEX "leads_formulario_updated_at_idx" ON "leads_formulario" USING btree ("updated_at");
  CREATE INDEX "leads_formulario_created_at_idx" ON "leads_formulario" USING btree ("created_at");
  CREATE UNIQUE INDEX "leads_cta_lead_ref_idx" ON "leads_cta" USING btree ("lead_ref");
  CREATE INDEX "leads_cta_updated_at_idx" ON "leads_cta" USING btree ("updated_at");
  CREATE INDEX "leads_cta_created_at_idx" ON "leads_cta" USING btree ("created_at");
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
  CREATE INDEX "payload_locked_documents_rels_font_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("font_groups_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_form_custom_2_submissions__idx" ON "payload_locked_documents_rels" USING btree ("form_custom_2_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_leads_formulario_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_formulario_id");
  CREATE INDEX "payload_locked_documents_rels_leads_cta_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_cta_id");
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
  CREATE INDEX "drop_sub_order_idx" ON "drop_sub" USING btree ("_order");
  CREATE INDEX "drop_sub_parent_id_idx" ON "drop_sub" USING btree ("_parent_id");
  CREATE INDEX "drop_nav_order_idx" ON "drop_nav" USING btree ("_order");
  CREATE INDEX "drop_nav_parent_id_idx" ON "drop_nav" USING btree ("_parent_id");
  CREATE INDEX "drop_btns_order_idx" ON "drop_btns" USING btree ("_order");
  CREATE INDEX "drop_btns_parent_id_idx" ON "drop_btns" USING btree ("_parent_id");
  CREATE INDEX "header_navbar11_config_logo_navbar11_config_logo_image_idx" ON "header" USING btree ("navbar11_config_logo_image_id");
  CREATE INDEX "header_navbar1_config_logo_navbar1_config_logo_media_idx" ON "header" USING btree ("navbar1_config_logo_media_id");
  CREATE INDEX "header_navbar5_config_logo_navbar5_config_logo_media_idx" ON "header" USING btree ("navbar5_config_logo_media_id");
  CREATE INDEX "header_navbar_template_config_logo_navbar_template_confi_idx" ON "header" USING btree ("navbar_template_config_logo_image_id");
  CREATE INDEX "header_navbar_drop_config_logo_navbar_drop_config_logo_m_idx" ON "header" USING btree ("navbar_drop_config_logo_media_id");
  CREATE INDEX "header_navbar_drop_config_navbar_drop_config_font_group_idx" ON "header" USING btree ("navbar_drop_config_font_group_id");
  CREATE INDEX "header_navbar_drop_config_navbar_drop_config_custom_font_idx" ON "header" USING btree ("navbar_drop_config_custom_font_file_id");
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
  CREATE INDEX "ftd_nav_order_idx" ON "ftd_nav" USING btree ("_order");
  CREATE INDEX "ftd_nav_parent_id_idx" ON "ftd_nav" USING btree ("_parent_id");
  CREATE INDEX "ftd_nav_icon_icon_media_image_idx" ON "ftd_nav" USING btree ("icon_media_image_id");
  CREATE INDEX "ftd_soc_order_idx" ON "ftd_soc" USING btree ("_order");
  CREATE INDEX "ftd_soc_parent_id_idx" ON "ftd_soc" USING btree ("_parent_id");
  CREATE INDEX "ftd_pol_order_idx" ON "ftd_pol" USING btree ("_order");
  CREATE INDEX "ftd_pol_parent_id_idx" ON "ftd_pol" USING btree ("_parent_id");
  CREATE INDEX "footer_footer1_config_logo_footer1_config_logo_media_idx" ON "footer" USING btree ("footer1_config_logo_media_id");
  CREATE INDEX "footer_footer4_config_logo_footer4_config_logo_media_idx" ON "footer" USING btree ("footer4_config_logo_media_id");
  CREATE INDEX "footer_footer5_config_logo_footer5_config_logo_media_idx" ON "footer" USING btree ("footer5_config_logo_media_id");
  CREATE INDEX "footer_footer_template_config_logo_footer_template_confi_idx" ON "footer" USING btree ("footer_template_config_logo_image_id");
  CREATE INDEX "footer_footer_drop_config_logo_footer_drop_config_logo_m_idx" ON "footer" USING btree ("footer_drop_config_logo_media_image_id");
  CREATE INDEX "footer_footer_drop_config_secondary_logo_footer_drop_con_idx" ON "footer" USING btree ("footer_drop_config_secondary_logo_media_image_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "notificacion_leads_cta_recipients_order_idx" ON "notificacion_leads_cta_recipients" USING btree ("_order");
  CREATE INDEX "notificacion_leads_cta_recipients_parent_id_idx" ON "notificacion_leads_cta_recipients" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "hd_btn" CASCADE;
  DROP TABLE "hd_feat" CASCADE;
  DROP TABLE "hd_cat" CASCADE;
  DROP TABLE "hd_el" CASCADE;
  DROP TABLE "hd_nel" CASCADE;
  DROP TABLE "hd_foot" CASCADE;
  DROP TABLE "ld_el" CASCADE;
  DROP TABLE "pages_blocks_layout_drop" CASCADE;
  DROP TABLE "imc_d_cat" CASCADE;
  DROP TABLE "imc_d_el" CASCADE;
  DROP TABLE "imc_d_nel" CASCADE;
  DROP TABLE "imc_drop" CASCADE;
  DROP TABLE "lcta_steps" CASCADE;
  DROP TABLE "lcta_btn" CASCADE;
  DROP TABLE "lcta_drop" CASCADE;
  DROP TABLE "team_members" CASCADE;
  DROP TABLE "team_drop" CASCADE;
  DROP TABLE "cta_app_ft" CASCADE;
  DROP TABLE "cta_app_qr" CASCADE;
  DROP TABLE "cta_app_btn" CASCADE;
  DROP TABLE "cta_app" CASCADE;
  DROP TABLE "l2d_pre" CASCADE;
  DROP TABLE "l2d" CASCADE;
  DROP TABLE "pages_blocks_fondo_drop" CASCADE;
  DROP TABLE "pd_tags" CASCADE;
  DROP TABLE "pd_num" CASCADE;
  DROP TABLE "pd_ci" CASCADE;
  DROP TABLE "pd_cols" CASCADE;
  DROP TABLE "pd_pfi" CASCADE;
  DROP TABLE "pd_stats" CASCADE;
  DROP TABLE "pd" CASCADE;
  DROP TABLE "fqd_q" CASCADE;
  DROP TABLE "fqd" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_hd_btn_v" CASCADE;
  DROP TABLE "_hd_feat_v" CASCADE;
  DROP TABLE "_hd_cat_v" CASCADE;
  DROP TABLE "_hd_el_v" CASCADE;
  DROP TABLE "_hd_nel_v" CASCADE;
  DROP TABLE "_hd_foot_v" CASCADE;
  DROP TABLE "_ld_el_v" CASCADE;
  DROP TABLE "_pages_v_blocks_layout_drop" CASCADE;
  DROP TABLE "_imc_d_cat_v" CASCADE;
  DROP TABLE "_imc_d_el_v" CASCADE;
  DROP TABLE "_imc_d_nel_v" CASCADE;
  DROP TABLE "_imc_drop_v" CASCADE;
  DROP TABLE "_lcta_steps_v" CASCADE;
  DROP TABLE "_lcta_btn_v" CASCADE;
  DROP TABLE "_lcta_drop_v" CASCADE;
  DROP TABLE "_team_members_v" CASCADE;
  DROP TABLE "_team_drop_v" CASCADE;
  DROP TABLE "_cta_app_ft_v" CASCADE;
  DROP TABLE "_cta_app_qr_v" CASCADE;
  DROP TABLE "_cta_app_btn_v" CASCADE;
  DROP TABLE "_cta_app_v" CASCADE;
  DROP TABLE "_l2d_pre_v" CASCADE;
  DROP TABLE "_l2d_v" CASCADE;
  DROP TABLE "_pages_v_blocks_fondo_drop" CASCADE;
  DROP TABLE "_pd_tags_v" CASCADE;
  DROP TABLE "_pd_num_v" CASCADE;
  DROP TABLE "_pd_ci_v" CASCADE;
  DROP TABLE "_pd_cols_v" CASCADE;
  DROP TABLE "_pd_pfi_v" CASCADE;
  DROP TABLE "_pd_stats_v" CASCADE;
  DROP TABLE "_pd_v" CASCADE;
  DROP TABLE "_fqd_q_v" CASCADE;
  DROP TABLE "_fqd_v" CASCADE;
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
  DROP TABLE "font_groups_fonts" CASCADE;
  DROP TABLE "font_groups" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "contact_submissions" CASCADE;
  DROP TABLE "form_custom_2_submissions" CASCADE;
  DROP TABLE "leads_formulario" CASCADE;
  DROP TABLE "leads_cta" CASCADE;
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
  DROP TABLE "drop_sub" CASCADE;
  DROP TABLE "drop_nav" CASCADE;
  DROP TABLE "drop_btns" CASCADE;
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
  DROP TABLE "ftd_nav" CASCADE;
  DROP TABLE "ftd_soc" CASCADE;
  DROP TABLE "ftd_pol" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "notificacion_leads_cta_recipients" CASCADE;
  DROP TABLE "notificacion_leads_cta" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."t";
  DROP TYPE "public"."elt";
  DROP TYPE "public"."nlt";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_header_style_font_family";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_elements_style_shadow";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_elements_style_font_family";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_contact_form_shadow";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_contact_form_font_family";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_privacy_policy_font_family";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_block_height_mode";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_background_type";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_background_color_mode";
  DROP TYPE "public"."enum_pages_blocks_layout_drop_gradient_direction";
  DROP TYPE "public"."enum_imc_d_el_link_type";
  DROP TYPE "public"."enum_imc_d_nel_link_type";
  DROP TYPE "public"."enum_imc_drop_header_style_font_family";
  DROP TYPE "public"."enum_imc_drop_footer_style_font_family";
  DROP TYPE "public"."enum_lcta_btn_link_type";
  DROP TYPE "public"."enum_lcta_drop_header_style_font_family";
  DROP TYPE "public"."enum_lcta_drop_steps_style_font_family";
  DROP TYPE "public"."enum_team_drop_header_style_font_family";
  DROP TYPE "public"."enum_team_drop_secondary_style_font_family";
  DROP TYPE "public"."enum_team_drop_members_style_font_family";
  DROP TYPE "public"."enum_cta_app_btn_store";
  DROP TYPE "public"."enum_cta_app_btn_link_type";
  DROP TYPE "public"."enum_cta_app_header_style_font_family";
  DROP TYPE "public"."enum_cta_app_subtitle_style_font_family";
  DROP TYPE "public"."enum_cta_app_features_style_font_family";
  DROP TYPE "public"."enum_pd_product_purchase_button_link_type";
  DROP TYPE "public"."enum_pd_font_family";
  DROP TYPE "public"."enum_fqd_font_family";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."img1_type";
  DROP TYPE "public"."img2_type";
  DROP TYPE "public"."h_ff";
  DROP TYPE "public"."f_ff";
  DROP TYPE "public"."o_ff";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_header_style_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_elements_style_shadow";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_elements_style_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_contact_form_shadow";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_contact_form_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_privacy_policy_font_family";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_block_height_mode";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_background_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_background_color_mode";
  DROP TYPE "public"."enum__pages_v_blocks_layout_drop_gradient_direction";
  DROP TYPE "public"."enum__imc_d_el_v_link_type";
  DROP TYPE "public"."enum__imc_d_nel_v_link_type";
  DROP TYPE "public"."enum__imc_drop_v_header_style_font_family";
  DROP TYPE "public"."enum__imc_drop_v_footer_style_font_family";
  DROP TYPE "public"."enum__lcta_btn_v_link_type";
  DROP TYPE "public"."enum__lcta_drop_v_header_style_font_family";
  DROP TYPE "public"."enum__lcta_drop_v_steps_style_font_family";
  DROP TYPE "public"."enum__team_drop_v_header_style_font_family";
  DROP TYPE "public"."enum__team_drop_v_secondary_style_font_family";
  DROP TYPE "public"."enum__team_drop_v_members_style_font_family";
  DROP TYPE "public"."enum__cta_app_btn_v_store";
  DROP TYPE "public"."enum__cta_app_btn_v_link_type";
  DROP TYPE "public"."enum__cta_app_v_header_style_font_family";
  DROP TYPE "public"."enum__cta_app_v_subtitle_style_font_family";
  DROP TYPE "public"."enum__cta_app_v_features_style_font_family";
  DROP TYPE "public"."enum__pd_v_product_purchase_button_link_type";
  DROP TYPE "public"."enum__pd_v_font_family";
  DROP TYPE "public"."enum__fqd_v_font_family";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_font_groups_fonts_variant";
  DROP TYPE "public"."enum_contact_submissions_status";
  DROP TYPE "public"."enum_form_custom_2_submissions_source";
  DROP TYPE "public"."enum_form_custom_2_submissions_status";
  DROP TYPE "public"."enum_leads_formulario_status";
  DROP TYPE "public"."enum_leads_cta_status";
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
  DROP TYPE "public"."enum_drop_sub_link_type";
  DROP TYPE "public"."enum_drop_nav_link_type";
  DROP TYPE "public"."enum_drop_btns_link_type";
  DROP TYPE "public"."enum_drop_btns_size";
  DROP TYPE "public"."enum_drop_btns_variant";
  DROP TYPE "public"."enum_header_navbar_type";
  DROP TYPE "public"."enum_header_navbar5_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_login_button_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_signup_button_link_type";
  DROP TYPE "public"."enum_header_navbar_drop_config_font_family";
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
  DROP TYPE "public"."enum_ftd_nav_link_type";
  DROP TYPE "public"."enum_ftd_soc_icon";
  DROP TYPE "public"."enum_ftd_soc_link_type";
  DROP TYPE "public"."enum_ftd_pol_link_type";
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
  DROP TYPE "public"."enum_footer_footer_drop_config_logo_link_type";
  DROP TYPE "public"."enum_footer_footer_drop_config_secondary_logo_link_type";`)
}
