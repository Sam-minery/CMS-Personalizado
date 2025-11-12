import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_animated_pin3_d_background_color" AS ENUM('violet-purple-blue', 'green-blue-cyan', 'pink-red-orange', 'yellow-orange-red');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_height" AS ENUM('screen', '30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_ripple_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum_pages_blocks_background_ripple_effect_grid_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner2_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner3_buttons_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_banner3_buttons_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."icon_type" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_blog_post_header2_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_button_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_blog_post_header2_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header3_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_blog_post_header3_social_links_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."var" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."sz" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_career5_jobs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_career6_jobs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_comparison_1_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_comparison_1_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_comparison_1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_comparison_13_products_main_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_comparison_13_products_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum_pages_blocks_contact1_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact1_button_size" AS ENUM('default', 'sm', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact5_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_contact5_button_size" AS ENUM('sm', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta1_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_cta1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta4_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_pages_blocks_cta4_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_cta5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta9_buttons_variant" AS ENUM('solid', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_custom_2_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_1_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_1_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_evt_3_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_3_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_evt_4_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_evt_4_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_1_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_1_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_1_events_button_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_1_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_3_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_3_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_3_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_3_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_4_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_4_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_4_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_4_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_5_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_evt_hdr_5_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_2_back_link_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_2_back_link_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_1_2_back_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_1_2_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_1_2_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_5_2_back_link_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_2_back_link_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_5_2_back_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_5_2_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_5_2_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_6_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_6_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_6_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_6_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_evt_hdr_7_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_evt_hdr_7_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_evt_hdr_7_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq1_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq1_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq1_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq2_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_faq2_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_faq4_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_faq4_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
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
  CREATE TYPE "public"."enum_glowing_star_card_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_glowing_star_card_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_glowing_star_card_height" AS ENUM('auto', 'screen', '30rem', '40rem', '50rem');
  CREATE TYPE "public"."enum_pages_blocks_header44_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header44_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_header48_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_header48_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_layout1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout5_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_links_1_categories_links_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum_links_1_categories_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_links_1_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_links_1_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_links_1_button_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum_links_4_categories_links_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum_links_4_categories_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_links_4_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum_links_4_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_links_4_button_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."img1_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."img2_type" AS ENUM('upload', 'url');
  CREATE TYPE "public"."enum_pages_blocks_pricing_template_features_icon" AS ENUM('lock', 'users', 'loop');
  CREATE TYPE "public"."t" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_feature1_template_cards_skeleton" AS ENUM('first', 'second', 'third');
  CREATE TYPE "public"."enum_pages_blocks_feature1_template_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_feature2_template_main_cards_skeleton" AS ENUM('first', 'second');
  CREATE TYPE "public"."enum_pages_blocks_feature2_template_features_icon" AS ENUM('workflow', 'integration', 'human');
  CREATE TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_multi_form2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_multi_form2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
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
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_portfolio5_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_pulse_beams_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_pulse_beams_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_pages_blocks_pulse_beams_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum_pages_blocks_pulse_beams_button_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum_pages_blocks_spotlight_spotlight_color" AS ENUM('white', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'cyan', 'orange');
  CREATE TYPE "public"."enum_pages_blocks_spotlight_background_color" AS ENUM('black', 'white');
  CREATE TYPE "public"."enum_pages_blocks_spotlight_text_color" AS ENUM('white', 'black');
  CREATE TYPE "public"."enum_stats_1_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_stats_1_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_stats_3_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'outline', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum_stats_3_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_team1_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_pages_blocks_team1_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_team2_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum_pages_blocks_team2_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum_text_reveal_card_background_color" AS ENUM('dark', 'slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum_text_reveal_card_height" AS ENUM('30rem', '40rem', '50rem', '60rem', 'screen');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'heroTemplate');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_animated_pin3_d_background_color" AS ENUM('violet-purple-blue', 'green-blue-cyan', 'pink-red-orange', 'yellow-orange-red');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_height" AS ENUM('screen', '30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_ripple_color" AS ENUM('blue', 'cyan', 'green', 'purple', 'pink');
  CREATE TYPE "public"."enum__pages_v_blocks_background_ripple_effect_grid_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner1_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner2_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner3_buttons_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_banner3_buttons_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin');
  CREATE TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header2_social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header3_breadcrumbs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__blog_post_header3_social_links_v_platform" AS ENUM('link', 'linkedin', 'twitter', 'facebook');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__career5_jobs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__career6_jobs_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__comparison_1_v_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__comparison_1_buttons_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__comparison_13_v_products_main_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__comparison_13_v_products_features_items_type" AS ENUM('text', 'check', 'x');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_button_size" AS ENUM('default', 'sm', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact5_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_contact5_button_size" AS ENUM('sm', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_buttons_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta4_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__pages_v_blocks_cta4_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_cta5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant" AS ENUM('solid', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_custom_2_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_1_v_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_1_v_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__evt_3_v_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_3_v_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__evt_4_v_tabs_content_button_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__evt_4_v_tabs_content_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_1_v_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_1_v_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_1_v_events_button_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_1_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_3_v_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_3_v_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_3_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_3_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_4_v_featured_events_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_4_v_featured_events_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_4_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_4_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_filters_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_5_v_filters_size" AS ENUM('sm', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_event_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__evt_hdr_5_v_event_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_2_back_link_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_2_back_link_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_1_v_2_back_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_1_v_2_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_1_v_2_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_back_link_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_back_link_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_back_link_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_button_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_5_v_2_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_6_v_breadcrumbs_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_6_v_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_6_v_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_6_v_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__evt_hdr_7_v_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__evt_hdr_7_v_buttons_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__evt_hdr_7_v_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq1_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq1_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq1_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq2_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_faq2_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_faq4_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_faq4_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
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
  CREATE TYPE "public"."enum__glowing_star_card_v_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__glowing_star_card_v_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__glowing_star_card_v_height" AS ENUM('auto', 'screen', '30rem', '40rem', '50rem');
  CREATE TYPE "public"."enum__pages_v_blocks_header44_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header44_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_header48_button_size" AS ENUM('sm', 'md', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_header48_button_variant" AS ENUM('default', 'destructive', 'outline', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_layout1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__links_1_v_categories_links_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum__links_1_v_categories_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_1_v_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__links_1_v_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_1_v_button_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum__links_4_v_categories_links_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum__links_4_v_categories_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_4_v_social_links_platform" AS ENUM('facebook', 'instagram', 'twitter', 'linkedin', 'youtube');
  CREATE TYPE "public"."enum__links_4_v_social_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_4_v_button_variant" AS ENUM('primary', 'default', 'secondary', 'outline', 'ghost', 'link', 'destructive');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_template_features_icon" AS ENUM('lock', 'users', 'loop');
  CREATE TYPE "public"."enum__pages_v_blocks_feature1_template_cards_skeleton" AS ENUM('first', 'second', 'third');
  CREATE TYPE "public"."enum__pages_v_blocks_feature1_template_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_feature2_template_main_cards_skeleton" AS ENUM('first', 'second');
  CREATE TYPE "public"."enum__pages_v_blocks_feature2_template_features_icon" AS ENUM('workflow', 'integration', 'human');
  CREATE TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_variant" AS ENUM('link', 'default', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_size" AS ENUM('link', 'default', 'sm', 'lg');
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
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio1_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_button_variant" AS ENUM('primary', 'secondary', 'link', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_portfolio5_button_size" AS ENUM('small', 'medium', 'large', 'primary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_variant" AS ENUM('primary', 'secondary', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_size" AS ENUM('sm', 'primary', 'icon', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_variant" AS ENUM('default', 'secondary', 'outline', 'ghost');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_size" AS ENUM('sm', 'default', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_background_color" AS ENUM('slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_height" AS ENUM('30rem', '40rem', '50rem', '60rem');
  CREATE TYPE "public"."enum__pages_v_blocks_pulse_beams_button_size" AS ENUM('small', 'medium', 'large', 'xlarge');
  CREATE TYPE "public"."enum__pages_v_blocks_spotlight_spotlight_color" AS ENUM('white', 'blue', 'green', 'red', 'yellow', 'purple', 'pink', 'cyan', 'orange');
  CREATE TYPE "public"."enum__pages_v_blocks_spotlight_background_color" AS ENUM('black', 'white');
  CREATE TYPE "public"."enum__pages_v_blocks_spotlight_text_color" AS ENUM('white', 'black');
  CREATE TYPE "public"."enum__stats_1_v_buttons_variant" AS ENUM('primary', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__stats_1_v_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__stats_3_v_buttons_variant" AS ENUM('primary', 'secondary', 'secondary-alt', 'outline', 'ghost', 'link', 'link-alt');
  CREATE TYPE "public"."enum__stats_3_v_buttons_size" AS ENUM('sm', 'md', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_team1_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__pages_v_blocks_team1_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_team2_team_members_social_links_platform" AS ENUM('linkedin', 'twitter', 'dribbble');
  CREATE TYPE "public"."enum__pages_v_blocks_team2_footer_button_variant" AS ENUM('primary', 'secondary', 'outline');
  CREATE TYPE "public"."enum__text_reveal_card_v_background_color" AS ENUM('dark', 'slate-950', 'zinc-950', 'gray-950', 'neutral-950');
  CREATE TYPE "public"."enum__text_reveal_card_v_height" AS ENUM('30rem', '40rem', '50rem', '60rem', 'screen');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_variant" AS ENUM('default', 'secondary', 'outline', 'ghost', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_size" AS ENUM('sm', 'default', 'lg', 'link');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact', 'custom2', 'header1', 'header5', 'heroTemplate');
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
  CREATE TYPE "public"."enum_header_navbar_type" AS ENUM('default', 'navbar1', 'navbar5', 'navbar11', 'navbarTemplate');
  CREATE TYPE "public"."enum_header_navbar5_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_logo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_login_button_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_navbar_template_config_signup_button_link_type" AS ENUM('reference', 'custom');
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
  CREATE TYPE "public"."enum_footer_footer_type" AS ENUM('default', 'footer1', 'footer4', 'footer5', 'footerTemplate');
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
  
  CREATE TABLE "pages_blocks_animated_pin3_d" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Aceternity UI',
  	"description" varchar DEFAULT 'Customizable Tailwind CSS and Framer Motion Components.',
  	"media_id" integer,
  	"pin_title" varchar DEFAULT '/ui.aceternity.com',
  	"href" varchar,
  	"background_color" "enum_pages_blocks_animated_pin3_d_background_color" DEFAULT 'violet-purple-blue',
  	"block_name" varchar
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
  
  CREATE TABLE "pages_blocks_background_ripple_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Background cell animation with framer motion',
  	"subtitle" varchar DEFAULT '',
  	"background_color" "enum_pages_blocks_background_ripple_effect_background_color" DEFAULT 'slate-950',
  	"height" "enum_pages_blocks_background_ripple_effect_height" DEFAULT 'screen',
  	"ripple_color" "enum_pages_blocks_background_ripple_effect_ripple_color" DEFAULT 'blue',
  	"grid_size" "enum_pages_blocks_background_ripple_effect_grid_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_id" integer,
  	"logo_url" varchar,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_size" "enum_pages_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum_pages_blocks_banner1_button_variant" DEFAULT 'default',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner2" (
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
  
  CREATE TABLE "pages_blocks_banner3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"size" "enum_pages_blocks_banner3_buttons_size" DEFAULT 'sm',
  	"variant" "enum_pages_blocks_banner3_buttons_variant" DEFAULT 'default',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_banner3" (
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
  
  CREATE TABLE "pages_blocks_blog1_tabs_content" (
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
  
  CREATE TABLE "pages_blocks_blog1_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar
  );
  
  CREATE TABLE "pages_blocks_blog1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Blog',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"default_value" varchar DEFAULT 'view-all',
  	"category_link" varchar DEFAULT '#',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_blog5_tabs_content" (
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
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"default_value" varchar DEFAULT 'view-all',
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
  
  CREATE TABLE "blog_post_header2_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_blog_post_header2_social_links_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_blog_post_header2" (
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
  
  CREATE TABLE "blog_post_header3_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum_blog_post_header3_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "blog_post_header3_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_blog_post_header3_social_links_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "pages_blocks_blog_post_header3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
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
  
  CREATE TABLE "career5_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum_career5_jobs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "career5_depts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "pages_blocks_career5" (
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
  
  CREATE TABLE "career6_jobs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum_career6_jobs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "career6_depts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department'
  );
  
  CREATE TABLE "pages_blocks_career6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Job Openings',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
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
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"comparison_title" varchar DEFAULT 'Product comparison',
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
  
  CREATE TABLE "pages_blocks_cta9_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum_pages_blocks_cta9_buttons_variant" DEFAULT 'solid',
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
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#'
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
  
  CREATE TABLE "evt_4_tabs_content" (
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
  	"button_variant" "enum_evt_4_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_evt_4_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#'
  );
  
  CREATE TABLE "evt_4_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all'
  );
  
  CREATE TABLE "evt_4" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Events',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_6_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Webinar title heading',
  	"duration" varchar DEFAULT '45',
  	"status" varchar,
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"video_url" varchar
  );
  
  CREATE TABLE "evt_6_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all'
  );
  
  CREATE TABLE "evt_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Webinars',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_1_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'View all',
  	"url" varchar DEFAULT '#',
  	"variant" "enum_evt_hdr_1_filters_variant" DEFAULT 'secondary',
  	"size" "enum_evt_hdr_1_filters_size" DEFAULT 'sm'
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
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum_evt_hdr_1_events_button_variant" DEFAULT 'secondary',
  	"button_size" "enum_evt_hdr_1_events_button_size" DEFAULT 'sm'
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
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum_evt_hdr_1_event_button_variant" DEFAULT 'secondary',
  	"event_button_size" "enum_evt_hdr_1_event_button_size" DEFAULT 'primary',
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
  	"size" "enum_evt_hdr_5_filters_size" DEFAULT 'link'
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
  
  CREATE TABLE "evt_hdr_5" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Webinars',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"event_url" varchar DEFAULT '#',
  	"event_image_id" integer,
  	"event_video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"event_category" varchar DEFAULT 'Category',
  	"event_status" varchar,
  	"event_title" varchar DEFAULT 'Webinar title heading',
  	"event_date_weekday" varchar DEFAULT 'Sat',
  	"event_date_day" varchar DEFAULT '10',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"event_button_title" varchar DEFAULT 'Save my spot',
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum_evt_hdr_5_event_button_variant" DEFAULT 'secondary',
  	"event_button_size" "enum_evt_hdr_5_event_button_size" DEFAULT 'primary',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_1_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"back_link_title" varchar DEFAULT 'All events',
  	"back_link_variant" "enum_evt_hdr_1_2_back_link_variant" DEFAULT 'primary',
  	"back_link_size" "enum_evt_hdr_1_2_back_link_size" DEFAULT 'default',
  	"back_link_link_type" "enum_evt_hdr_1_2_back_link_link_type" DEFAULT 'reference',
  	"back_link_link_new_tab" boolean,
  	"back_link_link_url" varchar,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" "enum_evt_hdr_1_2_button_variant" DEFAULT 'primary',
  	"button_size" "enum_evt_hdr_1_2_button_size" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar,
  	"countdown_date" timestamp(3) with time zone,
  	"countdown_time" varchar DEFAULT '19:00',
  	"countdown_timezone" varchar DEFAULT 'Europe/Madrid',
  	"amount_left" varchar DEFAULT '10',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_5_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"back_link_title" varchar DEFAULT 'All events',
  	"back_link_variant" "enum_evt_hdr_5_2_back_link_variant" DEFAULT 'primary',
  	"back_link_size" "enum_evt_hdr_5_2_back_link_size" DEFAULT 'default',
  	"back_link_link_type" "enum_evt_hdr_5_2_back_link_link_type" DEFAULT 'reference',
  	"back_link_link_new_tab" boolean,
  	"back_link_link_url" varchar,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" "enum_evt_hdr_5_2_button_variant" DEFAULT 'primary',
  	"button_size" "enum_evt_hdr_5_2_button_size" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar,
  	"countdown_date" timestamp(3) with time zone,
  	"countdown_time" varchar DEFAULT '19:00',
  	"countdown_timezone" varchar DEFAULT 'Europe/Madrid',
  	"amount_left" varchar DEFAULT '10',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_6_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Events',
  	"link_type" "enum_evt_hdr_6_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "evt_hdr_6_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" "enum_evt_hdr_6_buttons_variant" DEFAULT 'primary',
  	"size" "enum_evt_hdr_6_buttons_size" DEFAULT 'default',
  	"link_type" "enum_evt_hdr_6_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "evt_hdr_6" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"block_name" varchar
  );
  
  CREATE TABLE "evt_hdr_7_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" "enum_evt_hdr_7_buttons_variant" DEFAULT 'primary',
  	"size" "enum_evt_hdr_7_buttons_size" DEFAULT 'default',
  	"link_type" "enum_evt_hdr_7_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "evt_hdr_7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"image_id" integer,
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
  
  CREATE TABLE "glowing_star_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Next.js 14',
  	"description" varchar DEFAULT 'The power of full-stack to the frontend. Read the release notes.',
  	"button_text" varchar DEFAULT 'Ver más',
  	"button_link_type" "enum_glowing_star_card_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum_glowing_star_card_background_color" DEFAULT 'slate-950',
  	"height" "enum_glowing_star_card_height" DEFAULT 'auto',
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
  
  CREATE TABLE "links_1_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum_links_1_categories_links_variant" DEFAULT 'secondary',
  	"link_type" "enum_links_1_categories_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
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
  	"platform" "enum_links_1_social_links_platform" DEFAULT 'facebook',
  	"link_type" "enum_links_1_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
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
  
  CREATE TABLE "links_4_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum_links_4_categories_links_variant" DEFAULT 'secondary',
  	"link_type" "enum_links_4_categories_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
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
  	"platform" "enum_links_4_social_links_platform" DEFAULT 'facebook',
  	"link_type" "enum_links_4_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
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
  
  CREATE TABLE "pages_blocks_logo_cloud_template_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Logo',
  	"use_media" boolean DEFAULT false,
  	"media_id" integer,
  	"src" varchar DEFAULT '',
  	"alt" varchar
  );
  
  CREATE TABLE "pages_blocks_logo_cloud_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Trusted by modern operators across industries. From pilot to scale without chaos.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_speed_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"speed_template_heading" varchar DEFAULT 'Built for Speed <br /> Designed for Scale',
  	"speed_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
  	"speed_imgs_first_image_type" "img1_type" DEFAULT 'url',
  	"speed_imgs_first_image_upload_id" integer,
  	"speed_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg',
  	"speed_imgs_second_image_type" "img2_type" DEFAULT 'url',
  	"speed_imgs_second_image_upload_id" integer,
  	"speed_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg',
  	"speed_imgs_show_gradient" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_pricing_template_features_icon" DEFAULT 'lock',
  	"text" varchar DEFAULT 'Feature'
  );
  
  CREATE TABLE "pages_blocks_pricing_template_pricing_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_template_pricing_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"price" varchar DEFAULT '10',
  	"description" varchar DEFAULT 'Description',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_link_type" "t" DEFAULT 'custom',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar DEFAULT '/'
  );
  
  CREATE TABLE "pages_blocks_pricing_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"pricing_template_top_text" varchar DEFAULT 'Trusted by 500+ enterprise companies',
  	"pricing_template_heading" varchar DEFAULT 'Affordable pricing. <br /> Easy scaling.',
  	"pricing_template_subheading" varchar DEFAULT 'Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you''re ready',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_faq_template_questions_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Answer'
  );
  
  CREATE TABLE "pages_blocks_faq_template_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar DEFAULT 'Question?'
  );
  
  CREATE TABLE "pages_blocks_faq_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"faq_template_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature1_template_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"skeleton" "enum_pages_blocks_feature1_template_cards_skeleton" DEFAULT 'first',
  	"link_type" "enum_pages_blocks_feature1_template_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_feature1_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature1_template_heading" varchar DEFAULT 'Built for Fast Moving <br /> Teams That Need Control.',
  	"feature1_template_subheading" varchar DEFAULT 'Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_feature2_template_main_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"description" varchar DEFAULT 'Card description',
  	"skeleton" "enum_pages_blocks_feature2_template_main_cards_skeleton" DEFAULT 'first',
  	"logo_id" integer
  );
  
  CREATE TABLE "pages_blocks_feature2_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_pages_blocks_feature2_template_features_icon" DEFAULT 'workflow',
  	"title" varchar DEFAULT 'Feature Title',
  	"description" varchar DEFAULT 'Feature description'
  );
  
  CREATE TABLE "pages_blocks_feature2_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
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
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
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
  	"logo_image_id" integer,
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
  
  CREATE TABLE "pages_blocks_pulse_beams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"button_text" varchar DEFAULT 'Connect',
  	"button_link_type" "enum_pages_blocks_pulse_beams_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum_pages_blocks_pulse_beams_background_color" DEFAULT 'slate-950',
  	"height" "enum_pages_blocks_pulse_beams_height" DEFAULT '40rem',
  	"button_size" "enum_pages_blocks_pulse_beams_button_size" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_spotlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Spotlight is the new trend.',
  	"description" varchar,
  	"spotlight_color" "enum_pages_blocks_spotlight_spotlight_color" DEFAULT 'white',
  	"background_color" "enum_pages_blocks_spotlight_background_color" DEFAULT 'black',
  	"text_color" "enum_pages_blocks_spotlight_text_color" DEFAULT 'white',
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
  
  CREATE TABLE "text_reveal_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sometimes, you just need to see it.',
  	"description" varchar DEFAULT 'This is a text reveal card. Hover over the card to reveal the hidden text.',
  	"visible_text" varchar DEFAULT 'You know the business',
  	"reveal_text" varchar DEFAULT 'I know the chemistry',
  	"background_color" "enum_text_reveal_card_background_color" DEFAULT 'dark',
  	"height" "enum_text_reveal_card_height" DEFAULT '40rem',
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
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_rich_text" jsonb,
  	"hero_media_id" integer,
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
  
  CREATE TABLE "_pages_v_blocks_animated_pin3_d" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Aceternity UI',
  	"description" varchar DEFAULT 'Customizable Tailwind CSS and Framer Motion Components.',
  	"media_id" integer,
  	"pin_title" varchar DEFAULT '/ui.aceternity.com',
  	"href" varchar,
  	"background_color" "enum__pages_v_blocks_animated_pin3_d_background_color" DEFAULT 'violet-purple-blue',
  	"_uuid" varchar,
  	"block_name" varchar
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
  
  CREATE TABLE "_pages_v_blocks_background_ripple_effect" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Background cell animation with framer motion',
  	"subtitle" varchar DEFAULT '',
  	"background_color" "enum__pages_v_blocks_background_ripple_effect_background_color" DEFAULT 'slate-950',
  	"height" "enum__pages_v_blocks_background_ripple_effect_height" DEFAULT 'screen',
  	"ripple_color" "enum__pages_v_blocks_background_ripple_effect_ripple_color" DEFAULT 'blue',
  	"grid_size" "enum__pages_v_blocks_background_ripple_effect_grid_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Medium length banner heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"logo_id" integer,
  	"logo_url" varchar,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Sign up',
  	"button_size" "enum__pages_v_blocks_banner1_button_size" DEFAULT 'sm',
  	"button_variant" "enum__pages_v_blocks_banner1_button_variant" DEFAULT 'default',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner2" (
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
  
  CREATE TABLE "_pages_v_blocks_banner3_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"size" "enum__pages_v_blocks_banner3_buttons_size" DEFAULT 'sm',
  	"variant" "enum__pages_v_blocks_banner3_buttons_variant" DEFAULT 'default',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner3" (
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
  
  CREATE TABLE "_pages_v_blocks_blog1_tabs_content" (
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
  
  CREATE TABLE "_pages_v_blocks_blog1_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"trigger" varchar,
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
  	"default_value" varchar DEFAULT 'view-all',
  	"category_link" varchar DEFAULT '#',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog5_tabs_content" (
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
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"default_value" varchar DEFAULT 'view-all',
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
  
  CREATE TABLE "_blog_post_header2_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__blog_post_header2_social_links_v_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_post_header2" (
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
  
  CREATE TABLE "_blog_post_header3_breadcrumbs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Blog',
  	"link_type" "enum__blog_post_header3_breadcrumbs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_blog_post_header3_social_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__blog_post_header3_social_links_v_platform" DEFAULT 'link',
  	"url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_blog_post_header3" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Blog title heading will go here',
  	"image_use_media" boolean DEFAULT false,
  	"image_media_image_id" integer,
  	"image_src" varchar DEFAULT 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
  	"image_alt" varchar DEFAULT 'Relume placeholder image',
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
  
  CREATE TABLE "_career5_jobs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum__career5_jobs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_career5_depts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career5" (
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
  
  CREATE TABLE "_career6_jobs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Title',
  	"location" varchar DEFAULT 'Location',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
  	"button_title" varchar DEFAULT 'Apply Now',
  	"button_variant" "var" DEFAULT 'secondary',
  	"button_size" "sz" DEFAULT 'sm',
  	"link_type" "enum__career6_jobs_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_career6_depts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Job Department',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_career6" (
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
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Short heading goes here',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  	"comparison_title" varchar DEFAULT 'Product comparison',
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
  
  CREATE TABLE "_pages_v_blocks_cta9_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Button',
  	"variant" "enum__pages_v_blocks_cta9_buttons_variant" DEFAULT 'solid',
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
  	"button_url" varchar DEFAULT '#',
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
  
  CREATE TABLE "_evt_4_v_tabs_content" (
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
  	"button_variant" "enum__evt_4_v_tabs_content_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__evt_4_v_tabs_content_button_size" DEFAULT 'sm',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_4_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_4_v" (
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
  
  CREATE TABLE "_evt_6_v_tabs_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar DEFAULT '#',
  	"title" varchar DEFAULT 'Webinar title heading',
  	"duration" varchar DEFAULT '45',
  	"status" varchar,
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"video_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_6_v_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar DEFAULT 'view-all',
  	"trigger" varchar DEFAULT 'View all',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_6_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Webinars',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_1_v_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'View all',
  	"url" varchar DEFAULT '#',
  	"variant" "enum__evt_hdr_1_v_filters_variant" DEFAULT 'secondary',
  	"size" "enum__evt_hdr_1_v_filters_size" DEFAULT 'sm',
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
  	"button_url" varchar DEFAULT '#',
  	"button_variant" "enum__evt_hdr_1_v_events_button_variant" DEFAULT 'secondary',
  	"button_size" "enum__evt_hdr_1_v_events_button_size" DEFAULT 'sm',
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
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum__evt_hdr_1_v_event_button_variant" DEFAULT 'secondary',
  	"event_button_size" "enum__evt_hdr_1_v_event_button_size" DEFAULT 'primary',
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
  	"size" "enum__evt_hdr_5_v_filters_size" DEFAULT 'link',
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
  
  CREATE TABLE "_evt_hdr_5_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Webinars',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"event_url" varchar DEFAULT '#',
  	"event_image_id" integer,
  	"event_video" varchar DEFAULT 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
  	"event_category" varchar DEFAULT 'Category',
  	"event_status" varchar,
  	"event_title" varchar DEFAULT 'Webinar title heading',
  	"event_date_weekday" varchar DEFAULT 'Sat',
  	"event_date_day" varchar DEFAULT '10',
  	"event_date_month" varchar DEFAULT 'Feb',
  	"event_date_year" varchar DEFAULT '2024',
  	"event_description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  	"event_button_title" varchar DEFAULT 'Save my spot',
  	"event_button_url" varchar DEFAULT '#',
  	"event_button_variant" "enum__evt_hdr_5_v_event_button_variant" DEFAULT 'secondary',
  	"event_button_size" "enum__evt_hdr_5_v_event_button_size" DEFAULT 'primary',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_1_v_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"back_link_title" varchar DEFAULT 'All events',
  	"back_link_variant" "enum__evt_hdr_1_v_2_back_link_variant" DEFAULT 'primary',
  	"back_link_size" "enum__evt_hdr_1_v_2_back_link_size" DEFAULT 'default',
  	"back_link_link_type" "enum__evt_hdr_1_v_2_back_link_link_type" DEFAULT 'reference',
  	"back_link_link_new_tab" boolean,
  	"back_link_link_url" varchar,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" "enum__evt_hdr_1_v_2_button_variant" DEFAULT 'primary',
  	"button_size" "enum__evt_hdr_1_v_2_button_size" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar,
  	"countdown_date" timestamp(3) with time zone,
  	"countdown_time" varchar DEFAULT '19:00',
  	"countdown_timezone" varchar DEFAULT 'Europe/Madrid',
  	"amount_left" varchar DEFAULT '10',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_5_v_2" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"back_link_title" varchar DEFAULT 'All events',
  	"back_link_variant" "enum__evt_hdr_5_v_2_back_link_variant" DEFAULT 'primary',
  	"back_link_size" "enum__evt_hdr_5_v_2_back_link_size" DEFAULT 'default',
  	"back_link_link_type" "enum__evt_hdr_5_v_2_back_link_link_type" DEFAULT 'reference',
  	"back_link_link_new_tab" boolean,
  	"back_link_link_url" varchar,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"input_placeholder" varchar DEFAULT 'Enter your email',
  	"button_title" varchar DEFAULT 'Save my spot',
  	"button_variant" "enum__evt_hdr_5_v_2_button_variant" DEFAULT 'primary',
  	"button_size" "enum__evt_hdr_5_v_2_button_size" DEFAULT 'default',
  	"terms_and_conditions" jsonb,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar,
  	"countdown_date" timestamp(3) with time zone,
  	"countdown_time" varchar DEFAULT '19:00',
  	"countdown_timezone" varchar DEFAULT 'Europe/Madrid',
  	"amount_left" varchar DEFAULT '10',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_6_v_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Events',
  	"link_type" "enum__evt_hdr_6_v_breadcrumbs_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_6_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" "enum__evt_hdr_6_v_buttons_variant" DEFAULT 'primary',
  	"size" "enum__evt_hdr_6_v_buttons_size" DEFAULT 'default',
  	"link_type" "enum__evt_hdr_6_v_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_6_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"image_id" integer,
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_evt_hdr_7_v_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Save my spot',
  	"variant" "enum__evt_hdr_7_v_buttons_variant" DEFAULT 'primary',
  	"size" "enum__evt_hdr_7_v_buttons_size" DEFAULT 'default',
  	"link_type" "enum__evt_hdr_7_v_buttons_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_evt_hdr_7_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar DEFAULT 'Tagline',
  	"heading" varchar DEFAULT 'Event title heading',
  	"description" varchar DEFAULT 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  	"date_weekday" varchar DEFAULT 'Sat',
  	"date_day" varchar DEFAULT '10',
  	"date_month" varchar DEFAULT 'Feb',
  	"date_year" varchar DEFAULT '2024',
  	"location" varchar DEFAULT 'Location',
  	"speakers" varchar DEFAULT 'Speakers',
  	"image_id" integer,
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
  
  CREATE TABLE "_glowing_star_card_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Next.js 14',
  	"description" varchar DEFAULT 'The power of full-stack to the frontend. Read the release notes.',
  	"button_text" varchar DEFAULT 'Ver más',
  	"button_link_type" "enum__glowing_star_card_v_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum__glowing_star_card_v_background_color" DEFAULT 'slate-950',
  	"height" "enum__glowing_star_card_v_height" DEFAULT 'auto',
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
  
  CREATE TABLE "_links_1_v_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum__links_1_v_categories_links_variant" DEFAULT 'secondary',
  	"link_type" "enum__links_1_v_categories_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
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
  	"platform" "enum__links_1_v_social_links_platform" DEFAULT 'facebook',
  	"link_type" "enum__links_1_v_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
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
  
  CREATE TABLE "_links_4_v_categories_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Link title',
  	"variant" "enum__links_4_v_categories_links_variant" DEFAULT 'secondary',
  	"link_type" "enum__links_4_v_categories_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
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
  	"platform" "enum__links_4_v_social_links_platform" DEFAULT 'facebook',
  	"link_type" "enum__links_4_v_social_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
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
  
  CREATE TABLE "_pages_v_blocks_logo_cloud_template_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Logo',
  	"use_media" boolean DEFAULT false,
  	"media_id" integer,
  	"src" varchar DEFAULT '',
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logo_cloud_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Trusted by modern operators across industries. From pilot to scale without chaos.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_speed_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"speed_template_heading" varchar DEFAULT 'Built for Speed <br /> Designed for Scale',
  	"speed_template_subheading" varchar DEFAULT 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
  	"speed_imgs_first_image_type" "img1_type" DEFAULT 'url',
  	"speed_imgs_first_image_upload_id" integer,
  	"speed_imgs_first_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/3.jpg',
  	"speed_imgs_second_image_type" "img2_type" DEFAULT 'url',
  	"speed_imgs_second_image_upload_id" integer,
  	"speed_imgs_second_image_url" varchar DEFAULT 'https://assets.aceternity.com/screenshots/4.jpg',
  	"speed_imgs_show_gradient" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_pricing_template_features_icon" DEFAULT 'lock',
  	"text" varchar DEFAULT 'Feature',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template_pricing_cards_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template_pricing_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"price" varchar DEFAULT '10',
  	"description" varchar DEFAULT 'Description',
  	"cta_text" varchar DEFAULT 'Get Started',
  	"cta_link_type" "t" DEFAULT 'custom',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar DEFAULT '/',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"pricing_template_top_text" varchar DEFAULT 'Trusted by 500+ enterprise companies',
  	"pricing_template_heading" varchar DEFAULT 'Affordable pricing. <br /> Easy scaling.',
  	"pricing_template_subheading" varchar DEFAULT 'Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you''re ready',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_template_questions_answers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar DEFAULT 'Answer',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_template_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar DEFAULT 'Question?',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_faq_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"faq_template_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature1_template_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"skeleton" "enum__pages_v_blocks_feature1_template_cards_skeleton" DEFAULT 'first',
  	"link_type" "enum__pages_v_blocks_feature1_template_cards_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature1_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature1_template_heading" varchar DEFAULT 'Built for Fast Moving <br /> Teams That Need Control.',
  	"feature1_template_subheading" varchar DEFAULT 'Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature2_template_main_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Card Title',
  	"description" varchar DEFAULT 'Card description',
  	"skeleton" "enum__pages_v_blocks_feature2_template_main_cards_skeleton" DEFAULT 'first',
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature2_template_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon" "enum__pages_v_blocks_feature2_template_features_icon" DEFAULT 'workflow',
  	"title" varchar DEFAULT 'Feature Title',
  	"description" varchar DEFAULT 'Feature description',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_feature2_template" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
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
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
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
  	"logo_image_id" integer,
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
  
  CREATE TABLE "_pages_v_blocks_pulse_beams" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"button_text" varchar DEFAULT 'Connect',
  	"button_link_type" "enum__pages_v_blocks_pulse_beams_button_link_type" DEFAULT 'reference',
  	"button_link_new_tab" boolean,
  	"button_link_url" varchar,
  	"background_color" "enum__pages_v_blocks_pulse_beams_background_color" DEFAULT 'slate-950',
  	"height" "enum__pages_v_blocks_pulse_beams_height" DEFAULT '40rem',
  	"button_size" "enum__pages_v_blocks_pulse_beams_button_size" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_spotlight" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Spotlight is the new trend.',
  	"description" varchar,
  	"spotlight_color" "enum__pages_v_blocks_spotlight_spotlight_color" DEFAULT 'white',
  	"background_color" "enum__pages_v_blocks_spotlight_background_color" DEFAULT 'black',
  	"text_color" "enum__pages_v_blocks_spotlight_text_color" DEFAULT 'white',
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
  
  CREATE TABLE "_text_reveal_card_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Sometimes, you just need to see it.',
  	"description" varchar DEFAULT 'This is a text reveal card. Hover over the card to reveal the hidden text.',
  	"visible_text" varchar DEFAULT 'You know the business',
  	"reveal_text" varchar DEFAULT 'I know the chemistry',
  	"background_color" "enum__text_reveal_card_v_background_color" DEFAULT 'dark',
  	"height" "enum__text_reveal_card_v_height" DEFAULT '40rem',
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
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_hero_rich_text" jsonb,
  	"version_hero_media_id" integer,
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
  	"footer_template_config_footer_text" varchar DEFAULT '© 2025 Agenforce AI. All rights reserved.',
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
  ALTER TABLE "pages_blocks_animated_pin3_d" ADD CONSTRAINT "pages_blocks_animated_pin3_d_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_animated_pin3_d" ADD CONSTRAINT "pages_blocks_animated_pin3_d_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_background_ripple_effect" ADD CONSTRAINT "pages_blocks_background_ripple_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner1" ADD CONSTRAINT "pages_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
  ALTER TABLE "pages_blocks_blog1_tabs_content" ADD CONSTRAINT "pages_blocks_blog1_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_tabs_content" ADD CONSTRAINT "pages_blocks_blog1_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_tabs_content" ADD CONSTRAINT "pages_blocks_blog1_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1_tabs" ADD CONSTRAINT "pages_blocks_blog1_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog1" ADD CONSTRAINT "pages_blocks_blog1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs_content" ADD CONSTRAINT "pages_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5_tabs" ADD CONSTRAINT "pages_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog5" ADD CONSTRAINT "pages_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "blog_post_header1_breadcrumbs" ADD CONSTRAINT "blog_post_header1_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1_social_links" ADD CONSTRAINT "blog_post_header1_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."blog_post_header1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header1" ADD CONSTRAINT "blog_post_header1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header2_social_links" ADD CONSTRAINT "blog_post_header2_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header2" ADD CONSTRAINT "pages_blocks_blog_post_header2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header3_breadcrumbs" ADD CONSTRAINT "blog_post_header3_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header3_social_links" ADD CONSTRAINT "blog_post_header3_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_blog_post_header3" ADD CONSTRAINT "pages_blocks_blog_post_header3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "blog_post_header5" ADD CONSTRAINT "blog_post_header5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3_depts3_jobs" ADD CONSTRAINT "pages_blocks_career3_depts3_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career3_depts3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3_depts3" ADD CONSTRAINT "pages_blocks_career3_depts3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career3" ADD CONSTRAINT "pages_blocks_career3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4_depts4_jobs" ADD CONSTRAINT "pages_blocks_career4_depts4_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career4_depts4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4_depts4" ADD CONSTRAINT "pages_blocks_career4_depts4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career4" ADD CONSTRAINT "pages_blocks_career4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career5_jobs" ADD CONSTRAINT "career5_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."career5_depts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career5_depts" ADD CONSTRAINT "career5_depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career5" ADD CONSTRAINT "pages_blocks_career5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career6_jobs" ADD CONSTRAINT "career6_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."career6_depts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "career6_depts" ADD CONSTRAINT "career6_depts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_career6" ADD CONSTRAINT "pages_blocks_career6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "pages_blocks_contact1" ADD CONSTRAINT "pages_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_contact5" ADD CONSTRAINT "pages_blocks_contact5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1_buttons" ADD CONSTRAINT "pages_blocks_cta1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta4" ADD CONSTRAINT "pages_blocks_cta4_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta4" ADD CONSTRAINT "pages_blocks_cta4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta5_buttons" ADD CONSTRAINT "pages_blocks_cta5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta5" ADD CONSTRAINT "pages_blocks_cta5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta9_buttons" ADD CONSTRAINT "pages_blocks_cta9_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta9" ADD CONSTRAINT "pages_blocks_cta9_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta9" ADD CONSTRAINT "pages_blocks_cta9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "evt_4_tabs_content" ADD CONSTRAINT "evt_4_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_4_tabs_content" ADD CONSTRAINT "evt_4_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_4_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_4_tabs" ADD CONSTRAINT "evt_4_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_4" ADD CONSTRAINT "evt_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_6_tabs_content" ADD CONSTRAINT "evt_6_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_6_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_6_tabs" ADD CONSTRAINT "evt_6_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_6" ADD CONSTRAINT "evt_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_filters" ADD CONSTRAINT "evt_hdr_1_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_events" ADD CONSTRAINT "evt_hdr_1_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1" ADD CONSTRAINT "evt_hdr_1_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_1" ADD CONSTRAINT "evt_hdr_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_3_featured_events" ADD CONSTRAINT "evt_hdr_3_featured_events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_3_featured_events" ADD CONSTRAINT "evt_hdr_3_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_3" ADD CONSTRAINT "evt_hdr_3_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_3" ADD CONSTRAINT "evt_hdr_3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_4_featured_events" ADD CONSTRAINT "evt_hdr_4_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_4" ADD CONSTRAINT "evt_hdr_4_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_4" ADD CONSTRAINT "evt_hdr_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_filters" ADD CONSTRAINT "evt_hdr_5_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_events" ADD CONSTRAINT "evt_hdr_5_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5" ADD CONSTRAINT "evt_hdr_5_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_5" ADD CONSTRAINT "evt_hdr_5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_2" ADD CONSTRAINT "evt_hdr_1_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_1_2" ADD CONSTRAINT "evt_hdr_1_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_2" ADD CONSTRAINT "evt_hdr_5_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_5_2" ADD CONSTRAINT "evt_hdr_5_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_6_breadcrumbs" ADD CONSTRAINT "evt_hdr_6_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_6_buttons" ADD CONSTRAINT "evt_hdr_6_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_6" ADD CONSTRAINT "evt_hdr_6_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_6" ADD CONSTRAINT "evt_hdr_6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_7_buttons" ADD CONSTRAINT "evt_hdr_7_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."evt_hdr_7"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "evt_hdr_7" ADD CONSTRAINT "evt_hdr_7_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "evt_hdr_7" ADD CONSTRAINT "evt_hdr_7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq1_questions" ADD CONSTRAINT "pages_blocks_faq1_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq1" ADD CONSTRAINT "pages_blocks_faq1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq2_questions" ADD CONSTRAINT "pages_blocks_faq2_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq2" ADD CONSTRAINT "pages_blocks_faq2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq4_questions" ADD CONSTRAINT "pages_blocks_faq4_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq4" ADD CONSTRAINT "pages_blocks_faq4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery6_images" ADD CONSTRAINT "pages_blocks_gallery6_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery6_images" ADD CONSTRAINT "pages_blocks_gallery6_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery6" ADD CONSTRAINT "pages_blocks_gallery6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery19_images" ADD CONSTRAINT "pages_blocks_gallery19_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery19_images" ADD CONSTRAINT "pages_blocks_gallery19_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery19"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery19" ADD CONSTRAINT "pages_blocks_gallery19_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery27_images" ADD CONSTRAINT "pages_blocks_gallery27_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery27_images" ADD CONSTRAINT "pages_blocks_gallery27_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery27"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery27" ADD CONSTRAINT "pages_blocks_gallery27_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "glowing_star_card" ADD CONSTRAINT "glowing_star_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "links_1_categories_links" ADD CONSTRAINT "links_1_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_1_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1_categories" ADD CONSTRAINT "links_1_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1_social_links" ADD CONSTRAINT "links_1_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_1" ADD CONSTRAINT "links_1_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "links_1" ADD CONSTRAINT "links_1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4_categories_links" ADD CONSTRAINT "links_4_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_4_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4_categories" ADD CONSTRAINT "links_4_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4_social_links" ADD CONSTRAINT "links_4_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."links_4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links_4" ADD CONSTRAINT "links_4_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "links_4" ADD CONSTRAINT "links_4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo1_logos" ADD CONSTRAINT "pages_blocks_logo1_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo1_logos" ADD CONSTRAINT "pages_blocks_logo1_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo1" ADD CONSTRAINT "pages_blocks_logo1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo2_logos" ADD CONSTRAINT "pages_blocks_logo2_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo2_logos" ADD CONSTRAINT "pages_blocks_logo2_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo2" ADD CONSTRAINT "pages_blocks_logo2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_cloud_template_logos" ADD CONSTRAINT "pages_blocks_logo_cloud_template_logos_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_cloud_template_logos" ADD CONSTRAINT "pages_blocks_logo_cloud_template_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_logo_cloud_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logo_cloud_template" ADD CONSTRAINT "pages_blocks_logo_cloud_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_speed_template" ADD CONSTRAINT "pages_blocks_speed_template_speed_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_speed_template" ADD CONSTRAINT "pages_blocks_speed_template_speed_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_speed_template" ADD CONSTRAINT "pages_blocks_speed_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template_features" ADD CONSTRAINT "pages_blocks_pricing_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template_pricing_cards_steps" ADD CONSTRAINT "pages_blocks_pricing_template_pricing_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_template_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template_pricing_cards" ADD CONSTRAINT "pages_blocks_pricing_template_pricing_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_template" ADD CONSTRAINT "pages_blocks_pricing_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_template_questions_answers" ADD CONSTRAINT "pages_blocks_faq_template_questions_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_template_questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_template_questions" ADD CONSTRAINT "pages_blocks_faq_template_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_faq_template" ADD CONSTRAINT "pages_blocks_faq_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature1_template_cards" ADD CONSTRAINT "pages_blocks_feature1_template_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature1_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature1_template" ADD CONSTRAINT "pages_blocks_feature1_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template_main_cards" ADD CONSTRAINT "pages_blocks_feature2_template_main_cards_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template_main_cards" ADD CONSTRAINT "pages_blocks_feature2_template_main_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template_features" ADD CONSTRAINT "pages_blocks_feature2_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_feature2_template" ADD CONSTRAINT "pages_blocks_feature2_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content1" ADD CONSTRAINT "pages_blocks_long_content1_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content1" ADD CONSTRAINT "pages_blocks_long_content1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content2" ADD CONSTRAINT "pages_blocks_long_content2_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content2" ADD CONSTRAINT "pages_blocks_long_content2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content3" ADD CONSTRAINT "pages_blocks_long_content3_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content3" ADD CONSTRAINT "pages_blocks_long_content3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content4" ADD CONSTRAINT "pages_blocks_long_content4_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_long_content4" ADD CONSTRAINT "pages_blocks_long_content4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_service_type_options" ADD CONSTRAINT "pages_blocks_form_custom_2_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_budget_options" ADD CONSTRAINT "pages_blocks_form_custom_2_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_employees_options" ADD CONSTRAINT "pages_blocks_form_custom_2_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2_countries_options" ADD CONSTRAINT "pages_blocks_form_custom_2_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2" ADD CONSTRAINT "pages_blocks_form_custom_2_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_custom_2" ADD CONSTRAINT "pages_blocks_form_custom_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "pages_blocks_pricing1" ADD CONSTRAINT "pages_blocks_pricing1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5_feature_sections" ADD CONSTRAINT "pages_blocks_pricing5_feature_sections_icon_src_id_media_id_fk" FOREIGN KEY ("icon_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5_feature_sections" ADD CONSTRAINT "pages_blocks_pricing5_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5_pricing_plan_features" ADD CONSTRAINT "pages_blocks_pricing5_pricing_plan_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing5" ADD CONSTRAINT "pages_blocks_pricing5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pulse_beams" ADD CONSTRAINT "pages_blocks_pulse_beams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_spotlight" ADD CONSTRAINT "pages_blocks_spotlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial1" ADD CONSTRAINT "pages_blocks_testimonial1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_avatar_src_id_media_id_fk" FOREIGN KEY ("avatar_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3_testimonials" ADD CONSTRAINT "pages_blocks_testimonial3_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial3" ADD CONSTRAINT "pages_blocks_testimonial3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" ADD CONSTRAINT "pages_blocks_testimonial5_testimonials_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" ADD CONSTRAINT "pages_blocks_testimonial5_testimonials_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5_testimonials" ADD CONSTRAINT "pages_blocks_testimonial5_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial5" ADD CONSTRAINT "pages_blocks_testimonial5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6_testimonials" ADD CONSTRAINT "pages_blocks_testimonial6_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6_testimonials" ADD CONSTRAINT "pages_blocks_testimonial6_testimonials_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6_testimonials" ADD CONSTRAINT "pages_blocks_testimonial6_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_testimonial6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_testimonial6" ADD CONSTRAINT "pages_blocks_testimonial6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "text_reveal_card" ADD CONSTRAINT "text_reveal_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1_buttons" ADD CONSTRAINT "pages_blocks_timeline1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1_timelines_buttons" ADD CONSTRAINT "pages_blocks_timeline1_timelines_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline1_timelines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1_timelines" ADD CONSTRAINT "pages_blocks_timeline1_timelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline1" ADD CONSTRAINT "pages_blocks_timeline1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_animated_pin3_d" ADD CONSTRAINT "_pages_v_blocks_animated_pin3_d_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_animated_pin3_d" ADD CONSTRAINT "_pages_v_blocks_animated_pin3_d_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_background_ripple_effect" ADD CONSTRAINT "_pages_v_blocks_background_ripple_effect_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner1" ADD CONSTRAINT "_pages_v_blocks_banner1_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_blog1_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1_tabs" ADD CONSTRAINT "_pages_v_blocks_blog1_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog1" ADD CONSTRAINT "_pages_v_blocks_blog1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs_content" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5_tabs" ADD CONSTRAINT "_pages_v_blocks_blog5_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_image_id_media_id_fk" FOREIGN KEY ("featured_blog_post_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_featured_blog_post_avatar_id_media_id_fk" FOREIGN KEY ("featured_blog_post_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog5" ADD CONSTRAINT "_pages_v_blocks_blog5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_blog_post_header1_breadcrumbs_v" ADD CONSTRAINT "_blog_post_header1_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_social_links_v" ADD CONSTRAINT "_blog_post_header1_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_blog_post_header1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header1_v" ADD CONSTRAINT "_blog_post_header1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header2_social_links_v" ADD CONSTRAINT "_blog_post_header2_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header2" ADD CONSTRAINT "_pages_v_blocks_blog_post_header2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header3_breadcrumbs_v" ADD CONSTRAINT "_blog_post_header3_breadcrumbs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header3_social_links_v" ADD CONSTRAINT "_blog_post_header3_social_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_blog_post_header3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_image_media_image_id_media_id_fk" FOREIGN KEY ("image_media_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_blog_post_header3" ADD CONSTRAINT "_pages_v_blocks_blog_post_header3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_blog_post_header5_v" ADD CONSTRAINT "_blog_post_header5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3_depts3_jobs" ADD CONSTRAINT "_pages_v_blocks_career3_depts3_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career3_depts3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3_depts3" ADD CONSTRAINT "_pages_v_blocks_career3_depts3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career3" ADD CONSTRAINT "_pages_v_blocks_career3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4_depts4_jobs" ADD CONSTRAINT "_pages_v_blocks_career4_depts4_jobs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career4_depts4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4_depts4" ADD CONSTRAINT "_pages_v_blocks_career4_depts4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career4" ADD CONSTRAINT "_pages_v_blocks_career4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career5_jobs_v" ADD CONSTRAINT "_career5_jobs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_career5_depts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career5_depts_v" ADD CONSTRAINT "_career5_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career5" ADD CONSTRAINT "_pages_v_blocks_career5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career6_jobs_v" ADD CONSTRAINT "_career6_jobs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_career6_depts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_career6_depts_v" ADD CONSTRAINT "_career6_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career6" ADD CONSTRAINT "_pages_v_blocks_career6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_jobs_v" ADD CONSTRAINT "_jobs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_depts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_depts_v" ADD CONSTRAINT "_depts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_career_section1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_career_section1" ADD CONSTRAINT "_pages_v_blocks_career_section1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_comparison_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_comparison_products" ADD CONSTRAINT "_comparison_1_v_comparison_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features_items" ADD CONSTRAINT "_comparison_1_v_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v_features" ADD CONSTRAINT "_comparison_1_v_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_buttons_v" ADD CONSTRAINT "_comparison_1_buttons_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_1_v" ADD CONSTRAINT "_comparison_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_main_features_items" ADD CONSTRAINT "_comparison_13_v_products_main_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products_main_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_main_features" ADD CONSTRAINT "_comparison_13_v_products_main_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_features_items" ADD CONSTRAINT "_comparison_13_v_products_features_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products_features"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products_features" ADD CONSTRAINT "_comparison_13_v_products_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products" ADD CONSTRAINT "_comparison_13_v_products_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_comparison_13_v_products" ADD CONSTRAINT "_comparison_13_v_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comparison_13_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comparison_13_v" ADD CONSTRAINT "_comparison_13_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact1" ADD CONSTRAINT "_pages_v_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_contact5" ADD CONSTRAINT "_pages_v_blocks_contact5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1_buttons" ADD CONSTRAINT "_pages_v_blocks_cta1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_image_media_id_media_id_fk" FOREIGN KEY ("image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta4" ADD CONSTRAINT "_pages_v_blocks_cta4_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta4" ADD CONSTRAINT "_pages_v_blocks_cta4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta5_buttons" ADD CONSTRAINT "_pages_v_blocks_cta5_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta5" ADD CONSTRAINT "_pages_v_blocks_cta5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta9_buttons" ADD CONSTRAINT "_pages_v_blocks_cta9_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta9"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta9" ADD CONSTRAINT "_pages_v_blocks_cta9_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta9" ADD CONSTRAINT "_pages_v_blocks_cta9_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_evt_4_v_tabs_content" ADD CONSTRAINT "_evt_4_v_tabs_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_4_v_tabs_content" ADD CONSTRAINT "_evt_4_v_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_4_v_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_4_v_tabs" ADD CONSTRAINT "_evt_4_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_4_v" ADD CONSTRAINT "_evt_4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_6_v_tabs_content" ADD CONSTRAINT "_evt_6_v_tabs_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_6_v_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_6_v_tabs" ADD CONSTRAINT "_evt_6_v_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_6_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_6_v" ADD CONSTRAINT "_evt_6_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_filters" ADD CONSTRAINT "_evt_hdr_1_v_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_events" ADD CONSTRAINT "_evt_hdr_1_v_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v" ADD CONSTRAINT "_evt_hdr_1_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v" ADD CONSTRAINT "_evt_hdr_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v_featured_events" ADD CONSTRAINT "_evt_hdr_3_v_featured_events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v_featured_events" ADD CONSTRAINT "_evt_hdr_3_v_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_3_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v" ADD CONSTRAINT "_evt_hdr_3_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_3_v" ADD CONSTRAINT "_evt_hdr_3_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_4_v_featured_events" ADD CONSTRAINT "_evt_hdr_4_v_featured_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_4_v" ADD CONSTRAINT "_evt_hdr_4_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_4_v" ADD CONSTRAINT "_evt_hdr_4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_filters" ADD CONSTRAINT "_evt_hdr_5_v_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_events" ADD CONSTRAINT "_evt_hdr_5_v_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_5_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v" ADD CONSTRAINT "_evt_hdr_5_v_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v" ADD CONSTRAINT "_evt_hdr_5_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_2" ADD CONSTRAINT "_evt_hdr_1_v_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_1_v_2" ADD CONSTRAINT "_evt_hdr_1_v_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_2" ADD CONSTRAINT "_evt_hdr_5_v_2_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_5_v_2" ADD CONSTRAINT "_evt_hdr_5_v_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v_breadcrumbs" ADD CONSTRAINT "_evt_hdr_6_v_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_6_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v_buttons" ADD CONSTRAINT "_evt_hdr_6_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_6_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v" ADD CONSTRAINT "_evt_hdr_6_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_6_v" ADD CONSTRAINT "_evt_hdr_6_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_7_v_buttons" ADD CONSTRAINT "_evt_hdr_7_v_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_evt_hdr_7_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_evt_hdr_7_v" ADD CONSTRAINT "_evt_hdr_7_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_evt_hdr_7_v" ADD CONSTRAINT "_evt_hdr_7_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq1_questions" ADD CONSTRAINT "_pages_v_blocks_faq1_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq1" ADD CONSTRAINT "_pages_v_blocks_faq1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq2_questions" ADD CONSTRAINT "_pages_v_blocks_faq2_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq2" ADD CONSTRAINT "_pages_v_blocks_faq2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq4_questions" ADD CONSTRAINT "_pages_v_blocks_faq4_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq4"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq4" ADD CONSTRAINT "_pages_v_blocks_faq4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery6_images" ADD CONSTRAINT "_pages_v_blocks_gallery6_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery6_images" ADD CONSTRAINT "_pages_v_blocks_gallery6_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery6" ADD CONSTRAINT "_pages_v_blocks_gallery6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery19_images" ADD CONSTRAINT "_pages_v_blocks_gallery19_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery19_images" ADD CONSTRAINT "_pages_v_blocks_gallery19_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery19"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery19" ADD CONSTRAINT "_pages_v_blocks_gallery19_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery27_images" ADD CONSTRAINT "_pages_v_blocks_gallery27_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery27_images" ADD CONSTRAINT "_pages_v_blocks_gallery27_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery27"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_gallery27" ADD CONSTRAINT "_pages_v_blocks_gallery27_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_glowing_star_card_v" ADD CONSTRAINT "_glowing_star_card_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_links_1_v_categories_links" ADD CONSTRAINT "_links_1_v_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_1_v_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v_categories" ADD CONSTRAINT "_links_1_v_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v_social_links" ADD CONSTRAINT "_links_1_v_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_1_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_1_v" ADD CONSTRAINT "_links_1_v_author_avatar_id_media_id_fk" FOREIGN KEY ("author_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_links_1_v" ADD CONSTRAINT "_links_1_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v_categories_links" ADD CONSTRAINT "_links_4_v_categories_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_4_v_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v_categories" ADD CONSTRAINT "_links_4_v_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v_social_links" ADD CONSTRAINT "_links_4_v_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_links_4_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_4_v" ADD CONSTRAINT "_links_4_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_links_4_v" ADD CONSTRAINT "_links_4_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo1_logos" ADD CONSTRAINT "_pages_v_blocks_logo1_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo1_logos" ADD CONSTRAINT "_pages_v_blocks_logo1_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo1" ADD CONSTRAINT "_pages_v_blocks_logo1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo2_logos" ADD CONSTRAINT "_pages_v_blocks_logo2_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo2_logos" ADD CONSTRAINT "_pages_v_blocks_logo2_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo2" ADD CONSTRAINT "_pages_v_blocks_logo2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template_logos" ADD CONSTRAINT "_pages_v_blocks_logo_cloud_template_logos_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template_logos" ADD CONSTRAINT "_pages_v_blocks_logo_cloud_template_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_logo_cloud_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logo_cloud_template" ADD CONSTRAINT "_pages_v_blocks_logo_cloud_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_speed_template" ADD CONSTRAINT "_pages_v_blocks_speed_template_speed_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_speed_template" ADD CONSTRAINT "_pages_v_blocks_speed_template_speed_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("speed_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_speed_template" ADD CONSTRAINT "_pages_v_blocks_speed_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template_features" ADD CONSTRAINT "_pages_v_blocks_pricing_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template_pricing_cards_steps" ADD CONSTRAINT "_pages_v_blocks_pricing_template_pricing_cards_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_template_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template_pricing_cards" ADD CONSTRAINT "_pages_v_blocks_pricing_template_pricing_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_template" ADD CONSTRAINT "_pages_v_blocks_pricing_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_template_questions_answers" ADD CONSTRAINT "_pages_v_blocks_faq_template_questions_answers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_template_questions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_template_questions" ADD CONSTRAINT "_pages_v_blocks_faq_template_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_faq_template" ADD CONSTRAINT "_pages_v_blocks_faq_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature1_template_cards" ADD CONSTRAINT "_pages_v_blocks_feature1_template_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature1_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature1_template" ADD CONSTRAINT "_pages_v_blocks_feature1_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template_main_cards" ADD CONSTRAINT "_pages_v_blocks_feature2_template_main_cards_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template_main_cards" ADD CONSTRAINT "_pages_v_blocks_feature2_template_main_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template_features" ADD CONSTRAINT "_pages_v_blocks_feature2_template_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_feature2_template"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_feature2_template" ADD CONSTRAINT "_pages_v_blocks_feature2_template_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content1" ADD CONSTRAINT "_pages_v_blocks_long_content1_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content1" ADD CONSTRAINT "_pages_v_blocks_long_content1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content2" ADD CONSTRAINT "_pages_v_blocks_long_content2_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content2" ADD CONSTRAINT "_pages_v_blocks_long_content2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content3" ADD CONSTRAINT "_pages_v_blocks_long_content3_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content3" ADD CONSTRAINT "_pages_v_blocks_long_content3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content4" ADD CONSTRAINT "_pages_v_blocks_long_content4_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_long_content4" ADD CONSTRAINT "_pages_v_blocks_long_content4_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_service_type_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_service_type_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_budget_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_budget_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_employees_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_employees_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2_countries_options" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_countries_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_custom_2"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_custom_2" ADD CONSTRAINT "_pages_v_blocks_form_custom_2_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_pricing1" ADD CONSTRAINT "_pages_v_blocks_pricing1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5_feature_sections" ADD CONSTRAINT "_pages_v_blocks_pricing5_feature_sections_icon_src_id_media_id_fk" FOREIGN KEY ("icon_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5_feature_sections" ADD CONSTRAINT "_pages_v_blocks_pricing5_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5_pricing_plan_features" ADD CONSTRAINT "_pages_v_blocks_pricing5_pricing_plan_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing5" ADD CONSTRAINT "_pages_v_blocks_pricing5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pulse_beams" ADD CONSTRAINT "_pages_v_blocks_pulse_beams_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_spotlight" ADD CONSTRAINT "_pages_v_blocks_spotlight_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial1" ADD CONSTRAINT "_pages_v_blocks_testimonial1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_image_src_id_media_id_fk" FOREIGN KEY ("image_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_avatar_src_id_media_id_fk" FOREIGN KEY ("avatar_src_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial3_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial3"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial3" ADD CONSTRAINT "_pages_v_blocks_testimonial3_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial5_testimonials_avatar_media_id_media_id_fk" FOREIGN KEY ("avatar_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial5_testimonials_logo_media_id_media_id_fk" FOREIGN KEY ("logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial5_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial5"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial5" ADD CONSTRAINT "_pages_v_blocks_testimonial5_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial6_testimonials_avatar_id_media_id_fk" FOREIGN KEY ("avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial6_testimonials_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6_testimonials" ADD CONSTRAINT "_pages_v_blocks_testimonial6_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_testimonial6"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_testimonial6" ADD CONSTRAINT "_pages_v_blocks_testimonial6_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_text_reveal_card_v" ADD CONSTRAINT "_text_reveal_card_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline1_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1_timelines_buttons" ADD CONSTRAINT "_pages_v_blocks_timeline1_timelines_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline1_timelines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1_timelines" ADD CONSTRAINT "_pages_v_blocks_timeline1_timelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline1"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline1" ADD CONSTRAINT "_pages_v_blocks_timeline1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_first_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_first_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_hero_imgs_second_image_upload_id_media_id_fk" FOREIGN KEY ("version_hero_hero_imgs_second_image_upload_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar11_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar11_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar1_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar5_config_logo_media_id_media_id_fk" FOREIGN KEY ("navbar5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header" ADD CONSTRAINT "header_navbar_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("navbar_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer1_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer1_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer4_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer4_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer5_config_logo_media_id_media_id_fk" FOREIGN KEY ("footer5_config_logo_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_template_config_logo_image_id_media_id_fk" FOREIGN KEY ("footer_template_config_logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_animated_pin3_d_order_idx" ON "pages_blocks_animated_pin3_d" USING btree ("_order");
  CREATE INDEX "pages_blocks_animated_pin3_d_parent_id_idx" ON "pages_blocks_animated_pin3_d" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_animated_pin3_d_path_idx" ON "pages_blocks_animated_pin3_d" USING btree ("_path");
  CREATE INDEX "pages_blocks_animated_pin3_d_media_idx" ON "pages_blocks_animated_pin3_d" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_background_ripple_effect_order_idx" ON "pages_blocks_background_ripple_effect" USING btree ("_order");
  CREATE INDEX "pages_blocks_background_ripple_effect_parent_id_idx" ON "pages_blocks_background_ripple_effect" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_background_ripple_effect_path_idx" ON "pages_blocks_background_ripple_effect" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner1_order_idx" ON "pages_blocks_banner1" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner1_parent_id_idx" ON "pages_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner1_path_idx" ON "pages_blocks_banner1" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner1_logo_idx" ON "pages_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_banner2_order_idx" ON "pages_blocks_banner2" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner2_parent_id_idx" ON "pages_blocks_banner2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner2_path_idx" ON "pages_blocks_banner2" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner2_logo_logo_media_image_idx" ON "pages_blocks_banner2" USING btree ("logo_media_image_id");
  CREATE INDEX "pages_blocks_banner3_buttons_order_idx" ON "pages_blocks_banner3_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner3_buttons_parent_id_idx" ON "pages_blocks_banner3_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner3_order_idx" ON "pages_blocks_banner3" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner3_parent_id_idx" ON "pages_blocks_banner3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner3_path_idx" ON "pages_blocks_banner3" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner3_logo_logo_media_image_idx" ON "pages_blocks_banner3" USING btree ("logo_media_image_id");
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
  CREATE INDEX "pages_blocks_blog1_tabs_content_order_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_tabs_content_parent_id_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_tabs_content_image_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog1_tabs_content_avatar_idx" ON "pages_blocks_blog1_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog1_tabs_order_idx" ON "pages_blocks_blog1_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_tabs_parent_id_idx" ON "pages_blocks_blog1_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_order_idx" ON "pages_blocks_blog1" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog1_parent_id_idx" ON "pages_blocks_blog1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog1_path_idx" ON "pages_blocks_blog1" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog5_tabs_content_order_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_content_parent_id_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_image_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "pages_blocks_blog5_tabs_content_avatar_idx" ON "pages_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_blog5_tabs_order_idx" ON "pages_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_tabs_parent_id_idx" ON "pages_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_order_idx" ON "pages_blocks_blog5" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog5_parent_id_idx" ON "pages_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog5_path_idx" ON "pages_blocks_blog5" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_post_image_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "pages_blocks_blog5_featured_blog_post_featured_blog_post_avatar_idx" ON "pages_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
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
  CREATE INDEX "blog_post_header1_breadcrumbs_order_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_order");
  CREATE INDEX "blog_post_header1_breadcrumbs_parent_id_idx" ON "blog_post_header1_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_social_links_order_idx" ON "blog_post_header1_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header1_social_links_parent_id_idx" ON "blog_post_header1_social_links" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_order_idx" ON "blog_post_header1" USING btree ("_order");
  CREATE INDEX "blog_post_header1_parent_id_idx" ON "blog_post_header1" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header1_path_idx" ON "blog_post_header1" USING btree ("_path");
  CREATE INDEX "blog_post_header1_image_idx" ON "blog_post_header1" USING btree ("image_id");
  CREATE INDEX "blog_post_header1_author_author_avatar_idx" ON "blog_post_header1" USING btree ("author_avatar_id");
  CREATE INDEX "blog_post_header2_social_links_order_idx" ON "blog_post_header2_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header2_social_links_parent_id_idx" ON "blog_post_header2_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_post_header2_order_idx" ON "pages_blocks_blog_post_header2" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_post_header2_parent_id_idx" ON "pages_blocks_blog_post_header2" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_post_header2_path_idx" ON "pages_blocks_blog_post_header2" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog_post_header2_image_image_media_image_idx" ON "pages_blocks_blog_post_header2" USING btree ("image_media_image_id");
  CREATE INDEX "blog_post_header3_breadcrumbs_order_idx" ON "blog_post_header3_breadcrumbs" USING btree ("_order");
  CREATE INDEX "blog_post_header3_breadcrumbs_parent_id_idx" ON "blog_post_header3_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "blog_post_header3_social_links_order_idx" ON "blog_post_header3_social_links" USING btree ("_order");
  CREATE INDEX "blog_post_header3_social_links_parent_id_idx" ON "blog_post_header3_social_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_post_header3_order_idx" ON "pages_blocks_blog_post_header3" USING btree ("_order");
  CREATE INDEX "pages_blocks_blog_post_header3_parent_id_idx" ON "pages_blocks_blog_post_header3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_blog_post_header3_path_idx" ON "pages_blocks_blog_post_header3" USING btree ("_path");
  CREATE INDEX "pages_blocks_blog_post_header3_image_image_media_image_idx" ON "pages_blocks_blog_post_header3" USING btree ("image_media_image_id");
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
  CREATE INDEX "career5_jobs_order_idx" ON "career5_jobs" USING btree ("_order");
  CREATE INDEX "career5_jobs_parent_id_idx" ON "career5_jobs" USING btree ("_parent_id");
  CREATE INDEX "career5_depts_order_idx" ON "career5_depts" USING btree ("_order");
  CREATE INDEX "career5_depts_parent_id_idx" ON "career5_depts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career5_order_idx" ON "pages_blocks_career5" USING btree ("_order");
  CREATE INDEX "pages_blocks_career5_parent_id_idx" ON "pages_blocks_career5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career5_path_idx" ON "pages_blocks_career5" USING btree ("_path");
  CREATE INDEX "career6_jobs_order_idx" ON "career6_jobs" USING btree ("_order");
  CREATE INDEX "career6_jobs_parent_id_idx" ON "career6_jobs" USING btree ("_parent_id");
  CREATE INDEX "career6_depts_order_idx" ON "career6_depts" USING btree ("_order");
  CREATE INDEX "career6_depts_parent_id_idx" ON "career6_depts" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career6_order_idx" ON "pages_blocks_career6" USING btree ("_order");
  CREATE INDEX "pages_blocks_career6_parent_id_idx" ON "pages_blocks_career6" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_career6_path_idx" ON "pages_blocks_career6" USING btree ("_path");
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
  CREATE INDEX "pages_blocks_contact1_order_idx" ON "pages_blocks_contact1" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact1_parent_id_idx" ON "pages_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact1_path_idx" ON "pages_blocks_contact1" USING btree ("_path");
  CREATE INDEX "pages_blocks_contact5_order_idx" ON "pages_blocks_contact5" USING btree ("_order");
  CREATE INDEX "pages_blocks_contact5_parent_id_idx" ON "pages_blocks_contact5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_contact5_path_idx" ON "pages_blocks_contact5" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
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
  CREATE INDEX "pages_blocks_cta5_buttons_order_idx" ON "pages_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta5_buttons_parent_id_idx" ON "pages_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta5_order_idx" ON "pages_blocks_cta5" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta5_parent_id_idx" ON "pages_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta5_path_idx" ON "pages_blocks_cta5" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta9_buttons_order_idx" ON "pages_blocks_cta9_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta9_buttons_parent_id_idx" ON "pages_blocks_cta9_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta9_order_idx" ON "pages_blocks_cta9" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta9_parent_id_idx" ON "pages_blocks_cta9" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta9_path_idx" ON "pages_blocks_cta9" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta9_image_idx" ON "pages_blocks_cta9" USING btree ("image_id");
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
  CREATE INDEX "evt_4_tabs_content_order_idx" ON "evt_4_tabs_content" USING btree ("_order");
  CREATE INDEX "evt_4_tabs_content_parent_id_idx" ON "evt_4_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "evt_4_tabs_content_image_idx" ON "evt_4_tabs_content" USING btree ("image_id");
  CREATE INDEX "evt_4_tabs_order_idx" ON "evt_4_tabs" USING btree ("_order");
  CREATE INDEX "evt_4_tabs_parent_id_idx" ON "evt_4_tabs" USING btree ("_parent_id");
  CREATE INDEX "evt_4_order_idx" ON "evt_4" USING btree ("_order");
  CREATE INDEX "evt_4_parent_id_idx" ON "evt_4" USING btree ("_parent_id");
  CREATE INDEX "evt_4_path_idx" ON "evt_4" USING btree ("_path");
  CREATE INDEX "evt_6_tabs_content_order_idx" ON "evt_6_tabs_content" USING btree ("_order");
  CREATE INDEX "evt_6_tabs_content_parent_id_idx" ON "evt_6_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "evt_6_tabs_order_idx" ON "evt_6_tabs" USING btree ("_order");
  CREATE INDEX "evt_6_tabs_parent_id_idx" ON "evt_6_tabs" USING btree ("_parent_id");
  CREATE INDEX "evt_6_order_idx" ON "evt_6" USING btree ("_order");
  CREATE INDEX "evt_6_parent_id_idx" ON "evt_6" USING btree ("_parent_id");
  CREATE INDEX "evt_6_path_idx" ON "evt_6" USING btree ("_path");
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
  CREATE INDEX "evt_hdr_5_order_idx" ON "evt_hdr_5" USING btree ("_order");
  CREATE INDEX "evt_hdr_5_parent_id_idx" ON "evt_hdr_5" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_5_path_idx" ON "evt_hdr_5" USING btree ("_path");
  CREATE INDEX "evt_hdr_5_event_event_image_idx" ON "evt_hdr_5" USING btree ("event_image_id");
  CREATE INDEX "evt_hdr_1_2_order_idx" ON "evt_hdr_1_2" USING btree ("_order");
  CREATE INDEX "evt_hdr_1_2_parent_id_idx" ON "evt_hdr_1_2" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_1_2_path_idx" ON "evt_hdr_1_2" USING btree ("_path");
  CREATE INDEX "evt_hdr_1_2_image_idx" ON "evt_hdr_1_2" USING btree ("image_id");
  CREATE INDEX "evt_hdr_5_2_order_idx" ON "evt_hdr_5_2" USING btree ("_order");
  CREATE INDEX "evt_hdr_5_2_parent_id_idx" ON "evt_hdr_5_2" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_5_2_path_idx" ON "evt_hdr_5_2" USING btree ("_path");
  CREATE INDEX "evt_hdr_5_2_image_idx" ON "evt_hdr_5_2" USING btree ("image_id");
  CREATE INDEX "evt_hdr_6_breadcrumbs_order_idx" ON "evt_hdr_6_breadcrumbs" USING btree ("_order");
  CREATE INDEX "evt_hdr_6_breadcrumbs_parent_id_idx" ON "evt_hdr_6_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_6_buttons_order_idx" ON "evt_hdr_6_buttons" USING btree ("_order");
  CREATE INDEX "evt_hdr_6_buttons_parent_id_idx" ON "evt_hdr_6_buttons" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_6_order_idx" ON "evt_hdr_6" USING btree ("_order");
  CREATE INDEX "evt_hdr_6_parent_id_idx" ON "evt_hdr_6" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_6_path_idx" ON "evt_hdr_6" USING btree ("_path");
  CREATE INDEX "evt_hdr_6_image_idx" ON "evt_hdr_6" USING btree ("image_id");
  CREATE INDEX "evt_hdr_7_buttons_order_idx" ON "evt_hdr_7_buttons" USING btree ("_order");
  CREATE INDEX "evt_hdr_7_buttons_parent_id_idx" ON "evt_hdr_7_buttons" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_7_order_idx" ON "evt_hdr_7" USING btree ("_order");
  CREATE INDEX "evt_hdr_7_parent_id_idx" ON "evt_hdr_7" USING btree ("_parent_id");
  CREATE INDEX "evt_hdr_7_path_idx" ON "evt_hdr_7" USING btree ("_path");
  CREATE INDEX "evt_hdr_7_image_idx" ON "evt_hdr_7" USING btree ("image_id");
  CREATE INDEX "pages_blocks_faq1_questions_order_idx" ON "pages_blocks_faq1_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq1_questions_parent_id_idx" ON "pages_blocks_faq1_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq1_order_idx" ON "pages_blocks_faq1" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq1_parent_id_idx" ON "pages_blocks_faq1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq1_path_idx" ON "pages_blocks_faq1" USING btree ("_path");
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
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
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
  CREATE INDEX "glowing_star_card_order_idx" ON "glowing_star_card" USING btree ("_order");
  CREATE INDEX "glowing_star_card_parent_id_idx" ON "glowing_star_card" USING btree ("_parent_id");
  CREATE INDEX "glowing_star_card_path_idx" ON "glowing_star_card" USING btree ("_path");
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
  CREATE INDEX "pages_blocks_logo_cloud_template_logos_order_idx" ON "pages_blocks_logo_cloud_template_logos" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_cloud_template_logos_parent_id_idx" ON "pages_blocks_logo_cloud_template_logos" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_cloud_template_logos_media_idx" ON "pages_blocks_logo_cloud_template_logos" USING btree ("media_id");
  CREATE INDEX "pages_blocks_logo_cloud_template_order_idx" ON "pages_blocks_logo_cloud_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_logo_cloud_template_parent_id_idx" ON "pages_blocks_logo_cloud_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logo_cloud_template_path_idx" ON "pages_blocks_logo_cloud_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_speed_template_order_idx" ON "pages_blocks_speed_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_speed_template_parent_id_idx" ON "pages_blocks_speed_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_speed_template_path_idx" ON "pages_blocks_speed_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_speed_template_speed_imgs_speed_imgs_first_image_upload_idx" ON "pages_blocks_speed_template" USING btree ("speed_imgs_first_image_upload_id");
  CREATE INDEX "pages_blocks_speed_template_speed_imgs_speed_imgs_second_image_upload_idx" ON "pages_blocks_speed_template" USING btree ("speed_imgs_second_image_upload_id");
  CREATE INDEX "pages_blocks_pricing_template_features_order_idx" ON "pages_blocks_pricing_template_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_features_parent_id_idx" ON "pages_blocks_pricing_template_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_steps_order_idx" ON "pages_blocks_pricing_template_pricing_cards_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_steps_parent_id_idx" ON "pages_blocks_pricing_template_pricing_cards_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_order_idx" ON "pages_blocks_pricing_template_pricing_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_pricing_cards_parent_id_idx" ON "pages_blocks_pricing_template_pricing_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_order_idx" ON "pages_blocks_pricing_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_template_parent_id_idx" ON "pages_blocks_pricing_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_template_path_idx" ON "pages_blocks_pricing_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_faq_template_questions_answers_order_idx" ON "pages_blocks_faq_template_questions_answers" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_template_questions_answers_parent_id_idx" ON "pages_blocks_faq_template_questions_answers" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_template_questions_order_idx" ON "pages_blocks_faq_template_questions" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_template_questions_parent_id_idx" ON "pages_blocks_faq_template_questions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_template_order_idx" ON "pages_blocks_faq_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_faq_template_parent_id_idx" ON "pages_blocks_faq_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_faq_template_path_idx" ON "pages_blocks_faq_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature1_template_cards_order_idx" ON "pages_blocks_feature1_template_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature1_template_cards_parent_id_idx" ON "pages_blocks_feature1_template_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature1_template_order_idx" ON "pages_blocks_feature1_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature1_template_parent_id_idx" ON "pages_blocks_feature1_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature1_template_path_idx" ON "pages_blocks_feature1_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_feature2_template_main_cards_order_idx" ON "pages_blocks_feature2_template_main_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature2_template_main_cards_parent_id_idx" ON "pages_blocks_feature2_template_main_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature2_template_main_cards_logo_idx" ON "pages_blocks_feature2_template_main_cards" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_feature2_template_features_order_idx" ON "pages_blocks_feature2_template_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature2_template_features_parent_id_idx" ON "pages_blocks_feature2_template_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature2_template_order_idx" ON "pages_blocks_feature2_template" USING btree ("_order");
  CREATE INDEX "pages_blocks_feature2_template_parent_id_idx" ON "pages_blocks_feature2_template" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_feature2_template_path_idx" ON "pages_blocks_feature2_template" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content1_order_idx" ON "pages_blocks_long_content1" USING btree ("_order");
  CREATE INDEX "pages_blocks_long_content1_parent_id_idx" ON "pages_blocks_long_content1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_long_content1_path_idx" ON "pages_blocks_long_content1" USING btree ("_path");
  CREATE INDEX "pages_blocks_long_content1_image_image_src_idx" ON "pages_blocks_long_content1" USING btree ("image_src_id");
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
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
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
  CREATE INDEX "pages_blocks_form_custom_2_logo_logo_image_idx" ON "pages_blocks_form_custom_2" USING btree ("logo_image_id");
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
  CREATE INDEX "pages_blocks_pricing1_order_idx" ON "pages_blocks_pricing1" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing1_parent_id_idx" ON "pages_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing1_path_idx" ON "pages_blocks_pricing1" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing5_feature_sections_order_idx" ON "pages_blocks_pricing5_feature_sections" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing5_feature_sections_parent_id_idx" ON "pages_blocks_pricing5_feature_sections" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing5_feature_sections_icon_icon_src_idx" ON "pages_blocks_pricing5_feature_sections" USING btree ("icon_src_id");
  CREATE INDEX "pages_blocks_pricing5_pricing_plan_features_order_idx" ON "pages_blocks_pricing5_pricing_plan_features" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing5_pricing_plan_features_parent_id_idx" ON "pages_blocks_pricing5_pricing_plan_features" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing5_order_idx" ON "pages_blocks_pricing5" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing5_parent_id_idx" ON "pages_blocks_pricing5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing5_path_idx" ON "pages_blocks_pricing5" USING btree ("_path");
  CREATE INDEX "pages_blocks_pulse_beams_order_idx" ON "pages_blocks_pulse_beams" USING btree ("_order");
  CREATE INDEX "pages_blocks_pulse_beams_parent_id_idx" ON "pages_blocks_pulse_beams" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pulse_beams_path_idx" ON "pages_blocks_pulse_beams" USING btree ("_path");
  CREATE INDEX "pages_blocks_spotlight_order_idx" ON "pages_blocks_spotlight" USING btree ("_order");
  CREATE INDEX "pages_blocks_spotlight_parent_id_idx" ON "pages_blocks_spotlight" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_spotlight_path_idx" ON "pages_blocks_spotlight" USING btree ("_path");
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
  CREATE INDEX "pages_blocks_testimonial1_order_idx" ON "pages_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial1_parent_id_idx" ON "pages_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial1_path_idx" ON "pages_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial1_logo_logo_media_idx" ON "pages_blocks_testimonial1" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_testimonial1_avatar_avatar_media_idx" ON "pages_blocks_testimonial1" USING btree ("avatar_media_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_order_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_parent_id_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_image_image_src_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("image_src_id");
  CREATE INDEX "pages_blocks_testimonial3_testimonials_avatar_avatar_src_idx" ON "pages_blocks_testimonial3_testimonials" USING btree ("avatar_src_id");
  CREATE INDEX "pages_blocks_testimonial3_order_idx" ON "pages_blocks_testimonial3" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial3_parent_id_idx" ON "pages_blocks_testimonial3" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial3_path_idx" ON "pages_blocks_testimonial3" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_order_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_parent_id_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_avatar_avatar_media_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("avatar_media_id");
  CREATE INDEX "pages_blocks_testimonial5_testimonials_logo_logo_media_idx" ON "pages_blocks_testimonial5_testimonials" USING btree ("logo_media_id");
  CREATE INDEX "pages_blocks_testimonial5_order_idx" ON "pages_blocks_testimonial5" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial5_parent_id_idx" ON "pages_blocks_testimonial5" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial5_path_idx" ON "pages_blocks_testimonial5" USING btree ("_path");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_order_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_parent_id_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_avatar_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("avatar_id");
  CREATE INDEX "pages_blocks_testimonial6_testimonials_logo_idx" ON "pages_blocks_testimonial6_testimonials" USING btree ("logo_id");
  CREATE INDEX "pages_blocks_testimonial6_order_idx" ON "pages_blocks_testimonial6" USING btree ("_order");
  CREATE INDEX "pages_blocks_testimonial6_parent_id_idx" ON "pages_blocks_testimonial6" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_testimonial6_path_idx" ON "pages_blocks_testimonial6" USING btree ("_path");
  CREATE INDEX "text_reveal_card_order_idx" ON "text_reveal_card" USING btree ("_order");
  CREATE INDEX "text_reveal_card_parent_id_idx" ON "text_reveal_card" USING btree ("_parent_id");
  CREATE INDEX "text_reveal_card_path_idx" ON "text_reveal_card" USING btree ("_path");
  CREATE INDEX "pages_blocks_timeline1_buttons_order_idx" ON "pages_blocks_timeline1_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_buttons_parent_id_idx" ON "pages_blocks_timeline1_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_timelines_buttons_order_idx" ON "pages_blocks_timeline1_timelines_buttons" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_timelines_buttons_parent_id_idx" ON "pages_blocks_timeline1_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_timelines_order_idx" ON "pages_blocks_timeline1_timelines" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_timelines_parent_id_idx" ON "pages_blocks_timeline1_timelines" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_order_idx" ON "pages_blocks_timeline1" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline1_parent_id_idx" ON "pages_blocks_timeline1" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline1_path_idx" ON "pages_blocks_timeline1" USING btree ("_path");
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
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
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
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_order_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_parent_id_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_path_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_animated_pin3_d_media_idx" ON "_pages_v_blocks_animated_pin3_d" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_background_ripple_effect_order_idx" ON "_pages_v_blocks_background_ripple_effect" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_background_ripple_effect_parent_id_idx" ON "_pages_v_blocks_background_ripple_effect" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_background_ripple_effect_path_idx" ON "_pages_v_blocks_background_ripple_effect" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner1_order_idx" ON "_pages_v_blocks_banner1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner1_parent_id_idx" ON "_pages_v_blocks_banner1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner1_path_idx" ON "_pages_v_blocks_banner1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner1_logo_idx" ON "_pages_v_blocks_banner1" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_banner2_order_idx" ON "_pages_v_blocks_banner2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner2_parent_id_idx" ON "_pages_v_blocks_banner2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner2_path_idx" ON "_pages_v_blocks_banner2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner2_logo_logo_media_image_idx" ON "_pages_v_blocks_banner2" USING btree ("logo_media_image_id");
  CREATE INDEX "_pages_v_blocks_banner3_buttons_order_idx" ON "_pages_v_blocks_banner3_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner3_buttons_parent_id_idx" ON "_pages_v_blocks_banner3_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner3_order_idx" ON "_pages_v_blocks_banner3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner3_parent_id_idx" ON "_pages_v_blocks_banner3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner3_path_idx" ON "_pages_v_blocks_banner3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner3_logo_logo_media_image_idx" ON "_pages_v_blocks_banner3" USING btree ("logo_media_image_id");
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
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_order_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_image_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_content_avatar_idx" ON "_pages_v_blocks_blog1_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_order_idx" ON "_pages_v_blocks_blog1_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_tabs_parent_id_idx" ON "_pages_v_blocks_blog1_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_order_idx" ON "_pages_v_blocks_blog1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog1_parent_id_idx" ON "_pages_v_blocks_blog1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog1_path_idx" ON "_pages_v_blocks_blog1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_order_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_parent_id_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_image_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_content_avatar_idx" ON "_pages_v_blocks_blog5_tabs_content" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_order_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_tabs_parent_id_idx" ON "_pages_v_blocks_blog5_tabs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_order_idx" ON "_pages_v_blocks_blog5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog5_parent_id_idx" ON "_pages_v_blocks_blog5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog5_path_idx" ON "_pages_v_blocks_blog5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_post_image_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_image_id");
  CREATE INDEX "_pages_v_blocks_blog5_featured_blog_post_featured_blog_post_avatar_idx" ON "_pages_v_blocks_blog5" USING btree ("featured_blog_post_avatar_id");
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
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_order_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_breadcrumbs_v_parent_id_idx" ON "_blog_post_header1_breadcrumbs_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_social_links_v_order_idx" ON "_blog_post_header1_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_social_links_v_parent_id_idx" ON "_blog_post_header1_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_order_idx" ON "_blog_post_header1_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header1_v_parent_id_idx" ON "_blog_post_header1_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header1_v_path_idx" ON "_blog_post_header1_v" USING btree ("_path");
  CREATE INDEX "_blog_post_header1_v_image_idx" ON "_blog_post_header1_v" USING btree ("image_id");
  CREATE INDEX "_blog_post_header1_v_author_author_avatar_idx" ON "_blog_post_header1_v" USING btree ("author_avatar_id");
  CREATE INDEX "_blog_post_header2_social_links_v_order_idx" ON "_blog_post_header2_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header2_social_links_v_parent_id_idx" ON "_blog_post_header2_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_order_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_parent_id_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_path_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog_post_header2_image_image_media_image_idx" ON "_pages_v_blocks_blog_post_header2" USING btree ("image_media_image_id");
  CREATE INDEX "_blog_post_header3_breadcrumbs_v_order_idx" ON "_blog_post_header3_breadcrumbs_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header3_breadcrumbs_v_parent_id_idx" ON "_blog_post_header3_breadcrumbs_v" USING btree ("_parent_id");
  CREATE INDEX "_blog_post_header3_social_links_v_order_idx" ON "_blog_post_header3_social_links_v" USING btree ("_order");
  CREATE INDEX "_blog_post_header3_social_links_v_parent_id_idx" ON "_blog_post_header3_social_links_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_order_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_parent_id_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_path_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_blog_post_header3_image_image_media_image_idx" ON "_pages_v_blocks_blog_post_header3" USING btree ("image_media_image_id");
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
  CREATE INDEX "_career5_jobs_v_order_idx" ON "_career5_jobs_v" USING btree ("_order");
  CREATE INDEX "_career5_jobs_v_parent_id_idx" ON "_career5_jobs_v" USING btree ("_parent_id");
  CREATE INDEX "_career5_depts_v_order_idx" ON "_career5_depts_v" USING btree ("_order");
  CREATE INDEX "_career5_depts_v_parent_id_idx" ON "_career5_depts_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career5_order_idx" ON "_pages_v_blocks_career5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career5_parent_id_idx" ON "_pages_v_blocks_career5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career5_path_idx" ON "_pages_v_blocks_career5" USING btree ("_path");
  CREATE INDEX "_career6_jobs_v_order_idx" ON "_career6_jobs_v" USING btree ("_order");
  CREATE INDEX "_career6_jobs_v_parent_id_idx" ON "_career6_jobs_v" USING btree ("_parent_id");
  CREATE INDEX "_career6_depts_v_order_idx" ON "_career6_depts_v" USING btree ("_order");
  CREATE INDEX "_career6_depts_v_parent_id_idx" ON "_career6_depts_v" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career6_order_idx" ON "_pages_v_blocks_career6" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_career6_parent_id_idx" ON "_pages_v_blocks_career6" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_career6_path_idx" ON "_pages_v_blocks_career6" USING btree ("_path");
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
  CREATE INDEX "_comparison_1_buttons_v_order_idx" ON "_comparison_1_buttons_v" USING btree ("_order");
  CREATE INDEX "_comparison_1_buttons_v_parent_id_idx" ON "_comparison_1_buttons_v" USING btree ("_parent_id");
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
  CREATE INDEX "_pages_v_blocks_contact1_order_idx" ON "_pages_v_blocks_contact1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact1_parent_id_idx" ON "_pages_v_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact1_path_idx" ON "_pages_v_blocks_contact1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_contact5_order_idx" ON "_pages_v_blocks_contact5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_contact5_parent_id_idx" ON "_pages_v_blocks_contact5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_contact5_path_idx" ON "_pages_v_blocks_contact5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_cta5_buttons_order_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta5_buttons_parent_id_idx" ON "_pages_v_blocks_cta5_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta5_order_idx" ON "_pages_v_blocks_cta5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta5_parent_id_idx" ON "_pages_v_blocks_cta5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta5_path_idx" ON "_pages_v_blocks_cta5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta9_buttons_order_idx" ON "_pages_v_blocks_cta9_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta9_buttons_parent_id_idx" ON "_pages_v_blocks_cta9_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta9_order_idx" ON "_pages_v_blocks_cta9" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta9_parent_id_idx" ON "_pages_v_blocks_cta9" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta9_path_idx" ON "_pages_v_blocks_cta9" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta9_image_idx" ON "_pages_v_blocks_cta9" USING btree ("image_id");
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
  CREATE INDEX "_evt_4_v_tabs_content_order_idx" ON "_evt_4_v_tabs_content" USING btree ("_order");
  CREATE INDEX "_evt_4_v_tabs_content_parent_id_idx" ON "_evt_4_v_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_evt_4_v_tabs_content_image_idx" ON "_evt_4_v_tabs_content" USING btree ("image_id");
  CREATE INDEX "_evt_4_v_tabs_order_idx" ON "_evt_4_v_tabs" USING btree ("_order");
  CREATE INDEX "_evt_4_v_tabs_parent_id_idx" ON "_evt_4_v_tabs" USING btree ("_parent_id");
  CREATE INDEX "_evt_4_v_order_idx" ON "_evt_4_v" USING btree ("_order");
  CREATE INDEX "_evt_4_v_parent_id_idx" ON "_evt_4_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_4_v_path_idx" ON "_evt_4_v" USING btree ("_path");
  CREATE INDEX "_evt_6_v_tabs_content_order_idx" ON "_evt_6_v_tabs_content" USING btree ("_order");
  CREATE INDEX "_evt_6_v_tabs_content_parent_id_idx" ON "_evt_6_v_tabs_content" USING btree ("_parent_id");
  CREATE INDEX "_evt_6_v_tabs_order_idx" ON "_evt_6_v_tabs" USING btree ("_order");
  CREATE INDEX "_evt_6_v_tabs_parent_id_idx" ON "_evt_6_v_tabs" USING btree ("_parent_id");
  CREATE INDEX "_evt_6_v_order_idx" ON "_evt_6_v" USING btree ("_order");
  CREATE INDEX "_evt_6_v_parent_id_idx" ON "_evt_6_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_6_v_path_idx" ON "_evt_6_v" USING btree ("_path");
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
  CREATE INDEX "_evt_hdr_5_v_order_idx" ON "_evt_hdr_5_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_5_v_parent_id_idx" ON "_evt_hdr_5_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_5_v_path_idx" ON "_evt_hdr_5_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_5_v_event_event_image_idx" ON "_evt_hdr_5_v" USING btree ("event_image_id");
  CREATE INDEX "_evt_hdr_1_v_2_order_idx" ON "_evt_hdr_1_v_2" USING btree ("_order");
  CREATE INDEX "_evt_hdr_1_v_2_parent_id_idx" ON "_evt_hdr_1_v_2" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_1_v_2_path_idx" ON "_evt_hdr_1_v_2" USING btree ("_path");
  CREATE INDEX "_evt_hdr_1_v_2_image_idx" ON "_evt_hdr_1_v_2" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_5_v_2_order_idx" ON "_evt_hdr_5_v_2" USING btree ("_order");
  CREATE INDEX "_evt_hdr_5_v_2_parent_id_idx" ON "_evt_hdr_5_v_2" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_5_v_2_path_idx" ON "_evt_hdr_5_v_2" USING btree ("_path");
  CREATE INDEX "_evt_hdr_5_v_2_image_idx" ON "_evt_hdr_5_v_2" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_6_v_breadcrumbs_order_idx" ON "_evt_hdr_6_v_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_evt_hdr_6_v_breadcrumbs_parent_id_idx" ON "_evt_hdr_6_v_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_6_v_buttons_order_idx" ON "_evt_hdr_6_v_buttons" USING btree ("_order");
  CREATE INDEX "_evt_hdr_6_v_buttons_parent_id_idx" ON "_evt_hdr_6_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_6_v_order_idx" ON "_evt_hdr_6_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_6_v_parent_id_idx" ON "_evt_hdr_6_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_6_v_path_idx" ON "_evt_hdr_6_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_6_v_image_idx" ON "_evt_hdr_6_v" USING btree ("image_id");
  CREATE INDEX "_evt_hdr_7_v_buttons_order_idx" ON "_evt_hdr_7_v_buttons" USING btree ("_order");
  CREATE INDEX "_evt_hdr_7_v_buttons_parent_id_idx" ON "_evt_hdr_7_v_buttons" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_7_v_order_idx" ON "_evt_hdr_7_v" USING btree ("_order");
  CREATE INDEX "_evt_hdr_7_v_parent_id_idx" ON "_evt_hdr_7_v" USING btree ("_parent_id");
  CREATE INDEX "_evt_hdr_7_v_path_idx" ON "_evt_hdr_7_v" USING btree ("_path");
  CREATE INDEX "_evt_hdr_7_v_image_idx" ON "_evt_hdr_7_v" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_faq1_questions_order_idx" ON "_pages_v_blocks_faq1_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq1_questions_parent_id_idx" ON "_pages_v_blocks_faq1_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq1_order_idx" ON "_pages_v_blocks_faq1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq1_parent_id_idx" ON "_pages_v_blocks_faq1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq1_path_idx" ON "_pages_v_blocks_faq1" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
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
  CREATE INDEX "_glowing_star_card_v_order_idx" ON "_glowing_star_card_v" USING btree ("_order");
  CREATE INDEX "_glowing_star_card_v_parent_id_idx" ON "_glowing_star_card_v" USING btree ("_parent_id");
  CREATE INDEX "_glowing_star_card_v_path_idx" ON "_glowing_star_card_v" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_logos_order_idx" ON "_pages_v_blocks_logo_cloud_template_logos" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_logos_parent_id_idx" ON "_pages_v_blocks_logo_cloud_template_logos" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_logos_media_idx" ON "_pages_v_blocks_logo_cloud_template_logos" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_order_idx" ON "_pages_v_blocks_logo_cloud_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_parent_id_idx" ON "_pages_v_blocks_logo_cloud_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logo_cloud_template_path_idx" ON "_pages_v_blocks_logo_cloud_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_speed_template_order_idx" ON "_pages_v_blocks_speed_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_speed_template_parent_id_idx" ON "_pages_v_blocks_speed_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_speed_template_path_idx" ON "_pages_v_blocks_speed_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_speed_template_speed_imgs_speed_imgs_first_image_upload_idx" ON "_pages_v_blocks_speed_template" USING btree ("speed_imgs_first_image_upload_id");
  CREATE INDEX "_pages_v_blocks_speed_template_speed_imgs_speed_imgs_second_image_upload_idx" ON "_pages_v_blocks_speed_template" USING btree ("speed_imgs_second_image_upload_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_features_order_idx" ON "_pages_v_blocks_pricing_template_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_features_parent_id_idx" ON "_pages_v_blocks_pricing_template_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_steps_order_idx" ON "_pages_v_blocks_pricing_template_pricing_cards_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_steps_parent_id_idx" ON "_pages_v_blocks_pricing_template_pricing_cards_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_order_idx" ON "_pages_v_blocks_pricing_template_pricing_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_pricing_cards_parent_id_idx" ON "_pages_v_blocks_pricing_template_pricing_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_order_idx" ON "_pages_v_blocks_pricing_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_template_parent_id_idx" ON "_pages_v_blocks_pricing_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_template_path_idx" ON "_pages_v_blocks_pricing_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_answers_order_idx" ON "_pages_v_blocks_faq_template_questions_answers" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_answers_parent_id_idx" ON "_pages_v_blocks_faq_template_questions_answers" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_order_idx" ON "_pages_v_blocks_faq_template_questions" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_template_questions_parent_id_idx" ON "_pages_v_blocks_faq_template_questions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_template_order_idx" ON "_pages_v_blocks_faq_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_faq_template_parent_id_idx" ON "_pages_v_blocks_faq_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_faq_template_path_idx" ON "_pages_v_blocks_faq_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature1_template_cards_order_idx" ON "_pages_v_blocks_feature1_template_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature1_template_cards_parent_id_idx" ON "_pages_v_blocks_feature1_template_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature1_template_order_idx" ON "_pages_v_blocks_feature1_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature1_template_parent_id_idx" ON "_pages_v_blocks_feature1_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature1_template_path_idx" ON "_pages_v_blocks_feature1_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_feature2_template_main_cards_order_idx" ON "_pages_v_blocks_feature2_template_main_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature2_template_main_cards_parent_id_idx" ON "_pages_v_blocks_feature2_template_main_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_main_cards_logo_idx" ON "_pages_v_blocks_feature2_template_main_cards" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_features_order_idx" ON "_pages_v_blocks_feature2_template_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature2_template_features_parent_id_idx" ON "_pages_v_blocks_feature2_template_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_order_idx" ON "_pages_v_blocks_feature2_template" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_feature2_template_parent_id_idx" ON "_pages_v_blocks_feature2_template" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_feature2_template_path_idx" ON "_pages_v_blocks_feature2_template" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content1_order_idx" ON "_pages_v_blocks_long_content1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_long_content1_parent_id_idx" ON "_pages_v_blocks_long_content1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_long_content1_path_idx" ON "_pages_v_blocks_long_content1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_long_content1_image_image_src_idx" ON "_pages_v_blocks_long_content1" USING btree ("image_src_id");
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
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
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
  CREATE INDEX "_pages_v_blocks_form_custom_2_logo_logo_image_idx" ON "_pages_v_blocks_form_custom_2" USING btree ("logo_image_id");
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
  CREATE INDEX "_pages_v_blocks_pricing1_order_idx" ON "_pages_v_blocks_pricing1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing1_parent_id_idx" ON "_pages_v_blocks_pricing1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing1_path_idx" ON "_pages_v_blocks_pricing1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing5_feature_sections_order_idx" ON "_pages_v_blocks_pricing5_feature_sections" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing5_feature_sections_parent_id_idx" ON "_pages_v_blocks_pricing5_feature_sections" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing5_feature_sections_icon_icon_src_idx" ON "_pages_v_blocks_pricing5_feature_sections" USING btree ("icon_src_id");
  CREATE INDEX "_pages_v_blocks_pricing5_pricing_plan_features_order_idx" ON "_pages_v_blocks_pricing5_pricing_plan_features" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing5_pricing_plan_features_parent_id_idx" ON "_pages_v_blocks_pricing5_pricing_plan_features" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing5_order_idx" ON "_pages_v_blocks_pricing5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing5_parent_id_idx" ON "_pages_v_blocks_pricing5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing5_path_idx" ON "_pages_v_blocks_pricing5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pulse_beams_order_idx" ON "_pages_v_blocks_pulse_beams" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pulse_beams_parent_id_idx" ON "_pages_v_blocks_pulse_beams" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pulse_beams_path_idx" ON "_pages_v_blocks_pulse_beams" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_spotlight_order_idx" ON "_pages_v_blocks_spotlight" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_spotlight_parent_id_idx" ON "_pages_v_blocks_spotlight" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_spotlight_path_idx" ON "_pages_v_blocks_spotlight" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_testimonial1_order_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial1_parent_id_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial1_path_idx" ON "_pages_v_blocks_testimonial1" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial1_logo_logo_media_idx" ON "_pages_v_blocks_testimonial1" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial1_avatar_avatar_media_idx" ON "_pages_v_blocks_testimonial1" USING btree ("avatar_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_order_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_image_image_src_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("image_src_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_testimonials_avatar_avatar_src_idx" ON "_pages_v_blocks_testimonial3_testimonials" USING btree ("avatar_src_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_order_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial3_parent_id_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial3_path_idx" ON "_pages_v_blocks_testimonial3" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_order_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_avatar_avatar_media_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("avatar_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_testimonials_logo_logo_media_idx" ON "_pages_v_blocks_testimonial5_testimonials" USING btree ("logo_media_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_order_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial5_parent_id_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial5_path_idx" ON "_pages_v_blocks_testimonial5" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_order_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_parent_id_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_avatar_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("avatar_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_testimonials_logo_idx" ON "_pages_v_blocks_testimonial6_testimonials" USING btree ("logo_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_order_idx" ON "_pages_v_blocks_testimonial6" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_testimonial6_parent_id_idx" ON "_pages_v_blocks_testimonial6" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_testimonial6_path_idx" ON "_pages_v_blocks_testimonial6" USING btree ("_path");
  CREATE INDEX "_text_reveal_card_v_order_idx" ON "_text_reveal_card_v" USING btree ("_order");
  CREATE INDEX "_text_reveal_card_v_parent_id_idx" ON "_text_reveal_card_v" USING btree ("_parent_id");
  CREATE INDEX "_text_reveal_card_v_path_idx" ON "_text_reveal_card_v" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_timeline1_buttons_order_idx" ON "_pages_v_blocks_timeline1_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_buttons_parent_id_idx" ON "_pages_v_blocks_timeline1_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_buttons_order_idx" ON "_pages_v_blocks_timeline1_timelines_buttons" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_buttons_parent_id_idx" ON "_pages_v_blocks_timeline1_timelines_buttons" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_order_idx" ON "_pages_v_blocks_timeline1_timelines" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_timelines_parent_id_idx" ON "_pages_v_blocks_timeline1_timelines" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_order_idx" ON "_pages_v_blocks_timeline1" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline1_parent_id_idx" ON "_pages_v_blocks_timeline1" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline1_path_idx" ON "_pages_v_blocks_timeline1" USING btree ("_path");
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
  CREATE INDEX "_pages_v_blocks_timeline7_path_idx" ON "_pages_v_blocks_timeline7" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_first_image_upload_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_first_image_upload_id");
  CREATE INDEX "_pages_v_version_hero_hero_imgs_version_hero_hero_imgs_second_image_upload_idx" ON "_pages_v" USING btree ("version_hero_hero_imgs_second_image_upload_id");
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
  CREATE INDEX "header_navbar11_config_nav_links_sub_menu_links_icon_icon_image_idx" ON "header_navbar11_config_nav_links_sub_menu_links" USING btree ("icon_image_id");
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
  CREATE INDEX "header_navbar11_config_logo_navbar11_config_logo_image_idx" ON "header" USING btree ("navbar11_config_logo_image_id");
  CREATE INDEX "header_navbar1_config_logo_navbar1_config_logo_media_idx" ON "header" USING btree ("navbar1_config_logo_media_id");
  CREATE INDEX "header_navbar5_config_logo_navbar5_config_logo_media_idx" ON "header" USING btree ("navbar5_config_logo_media_id");
  CREATE INDEX "header_navbar_template_config_logo_navbar_template_config_logo_image_idx" ON "header" USING btree ("navbar_template_config_logo_image_id");
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
  CREATE INDEX "footer_footer1_config_logo_footer1_config_logo_media_idx" ON "footer" USING btree ("footer1_config_logo_media_id");
  CREATE INDEX "footer_footer4_config_logo_footer4_config_logo_media_idx" ON "footer" USING btree ("footer4_config_logo_media_id");
  CREATE INDEX "footer_footer5_config_logo_footer5_config_logo_media_idx" ON "footer" USING btree ("footer5_config_logo_media_id");
  CREATE INDEX "footer_footer_template_config_logo_footer_template_config_logo_image_idx" ON "footer" USING btree ("footer_template_config_logo_image_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_animated_pin3_d" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_background_ripple_effect" CASCADE;
  DROP TABLE "pages_blocks_banner1" CASCADE;
  DROP TABLE "pages_blocks_banner2" CASCADE;
  DROP TABLE "pages_blocks_banner3_buttons" CASCADE;
  DROP TABLE "pages_blocks_banner3" CASCADE;
  DROP TABLE "pages_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner4" CASCADE;
  DROP TABLE "pages_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "pages_blocks_banner9" CASCADE;
  DROP TABLE "pages_blocks_blog1_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog1_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog1" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog5_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog5" CASCADE;
  DROP TABLE "pages_blocks_blog7_tabs_content" CASCADE;
  DROP TABLE "pages_blocks_blog7_tabs" CASCADE;
  DROP TABLE "pages_blocks_blog7" CASCADE;
  DROP TABLE "pages_blocks_blog9_small_featured_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog9_blog_posts" CASCADE;
  DROP TABLE "pages_blocks_blog9" CASCADE;
  DROP TABLE "blog_post_header1_breadcrumbs" CASCADE;
  DROP TABLE "blog_post_header1_social_links" CASCADE;
  DROP TABLE "blog_post_header1" CASCADE;
  DROP TABLE "blog_post_header2_social_links" CASCADE;
  DROP TABLE "pages_blocks_blog_post_header2" CASCADE;
  DROP TABLE "blog_post_header3_breadcrumbs" CASCADE;
  DROP TABLE "blog_post_header3_social_links" CASCADE;
  DROP TABLE "pages_blocks_blog_post_header3" CASCADE;
  DROP TABLE "blog_post_header5" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_career3_depts3_jobs" CASCADE;
  DROP TABLE "pages_blocks_career3_depts3" CASCADE;
  DROP TABLE "pages_blocks_career3" CASCADE;
  DROP TABLE "pages_blocks_career4_depts4_jobs" CASCADE;
  DROP TABLE "pages_blocks_career4_depts4" CASCADE;
  DROP TABLE "pages_blocks_career4" CASCADE;
  DROP TABLE "career5_jobs" CASCADE;
  DROP TABLE "career5_depts" CASCADE;
  DROP TABLE "pages_blocks_career5" CASCADE;
  DROP TABLE "career6_jobs" CASCADE;
  DROP TABLE "career6_depts" CASCADE;
  DROP TABLE "pages_blocks_career6" CASCADE;
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
  DROP TABLE "pages_blocks_contact1" CASCADE;
  DROP TABLE "pages_blocks_contact5" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_cta1_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta1" CASCADE;
  DROP TABLE "pages_blocks_cta4" CASCADE;
  DROP TABLE "pages_blocks_cta5_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta5" CASCADE;
  DROP TABLE "pages_blocks_cta9_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta9" CASCADE;
  DROP TABLE "pages_blocks_cta_custom_2_buttons" CASCADE;
  DROP TABLE "pages_blocks_cta_custom_2" CASCADE;
  DROP TABLE "evt_1_tabs_content" CASCADE;
  DROP TABLE "evt_1_tabs" CASCADE;
  DROP TABLE "evt_1" CASCADE;
  DROP TABLE "evt_3_tabs_content" CASCADE;
  DROP TABLE "evt_3_tabs" CASCADE;
  DROP TABLE "evt_3" CASCADE;
  DROP TABLE "evt_4_tabs_content" CASCADE;
  DROP TABLE "evt_4_tabs" CASCADE;
  DROP TABLE "evt_4" CASCADE;
  DROP TABLE "evt_6_tabs_content" CASCADE;
  DROP TABLE "evt_6_tabs" CASCADE;
  DROP TABLE "evt_6" CASCADE;
  DROP TABLE "evt_hdr_1_filters" CASCADE;
  DROP TABLE "evt_hdr_1_events" CASCADE;
  DROP TABLE "evt_hdr_1" CASCADE;
  DROP TABLE "evt_hdr_3_featured_events" CASCADE;
  DROP TABLE "evt_hdr_3" CASCADE;
  DROP TABLE "evt_hdr_4_featured_events" CASCADE;
  DROP TABLE "evt_hdr_4" CASCADE;
  DROP TABLE "evt_hdr_5_filters" CASCADE;
  DROP TABLE "evt_hdr_5_events" CASCADE;
  DROP TABLE "evt_hdr_5" CASCADE;
  DROP TABLE "evt_hdr_1_2" CASCADE;
  DROP TABLE "evt_hdr_5_2" CASCADE;
  DROP TABLE "evt_hdr_6_breadcrumbs" CASCADE;
  DROP TABLE "evt_hdr_6_buttons" CASCADE;
  DROP TABLE "evt_hdr_6" CASCADE;
  DROP TABLE "evt_hdr_7_buttons" CASCADE;
  DROP TABLE "evt_hdr_7" CASCADE;
  DROP TABLE "pages_blocks_faq1_questions" CASCADE;
  DROP TABLE "pages_blocks_faq1" CASCADE;
  DROP TABLE "pages_blocks_faq2_questions" CASCADE;
  DROP TABLE "pages_blocks_faq2" CASCADE;
  DROP TABLE "pages_blocks_faq4_questions" CASCADE;
  DROP TABLE "pages_blocks_faq4" CASCADE;
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
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_gallery6_images" CASCADE;
  DROP TABLE "pages_blocks_gallery6" CASCADE;
  DROP TABLE "pages_blocks_gallery19_images" CASCADE;
  DROP TABLE "pages_blocks_gallery19" CASCADE;
  DROP TABLE "pages_blocks_gallery27_images" CASCADE;
  DROP TABLE "pages_blocks_gallery27" CASCADE;
  DROP TABLE "glowing_star_card" CASCADE;
  DROP TABLE "pages_blocks_header44_links" CASCADE;
  DROP TABLE "pages_blocks_header44" CASCADE;
  DROP TABLE "pages_blocks_header48" CASCADE;
  DROP TABLE "pages_blocks_layout1_links" CASCADE;
  DROP TABLE "pages_blocks_layout1" CASCADE;
  DROP TABLE "pages_blocks_layout5_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout5_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout5" CASCADE;
  DROP TABLE "links_1_categories_links" CASCADE;
  DROP TABLE "links_1_categories" CASCADE;
  DROP TABLE "links_1_social_links" CASCADE;
  DROP TABLE "links_1" CASCADE;
  DROP TABLE "links_4_categories_links" CASCADE;
  DROP TABLE "links_4_categories" CASCADE;
  DROP TABLE "links_4_social_links" CASCADE;
  DROP TABLE "links_4" CASCADE;
  DROP TABLE "pages_blocks_logo1_logos" CASCADE;
  DROP TABLE "pages_blocks_logo1" CASCADE;
  DROP TABLE "pages_blocks_logo2_logos" CASCADE;
  DROP TABLE "pages_blocks_logo2" CASCADE;
  DROP TABLE "pages_blocks_logo_cloud_template_logos" CASCADE;
  DROP TABLE "pages_blocks_logo_cloud_template" CASCADE;
  DROP TABLE "pages_blocks_speed_template" CASCADE;
  DROP TABLE "pages_blocks_pricing_template_features" CASCADE;
  DROP TABLE "pages_blocks_pricing_template_pricing_cards_steps" CASCADE;
  DROP TABLE "pages_blocks_pricing_template_pricing_cards" CASCADE;
  DROP TABLE "pages_blocks_pricing_template" CASCADE;
  DROP TABLE "pages_blocks_faq_template_questions_answers" CASCADE;
  DROP TABLE "pages_blocks_faq_template_questions" CASCADE;
  DROP TABLE "pages_blocks_faq_template" CASCADE;
  DROP TABLE "pages_blocks_feature1_template_cards" CASCADE;
  DROP TABLE "pages_blocks_feature1_template" CASCADE;
  DROP TABLE "pages_blocks_feature2_template_main_cards" CASCADE;
  DROP TABLE "pages_blocks_feature2_template_features" CASCADE;
  DROP TABLE "pages_blocks_feature2_template" CASCADE;
  DROP TABLE "pages_blocks_long_content1" CASCADE;
  DROP TABLE "pages_blocks_long_content2" CASCADE;
  DROP TABLE "pages_blocks_long_content3" CASCADE;
  DROP TABLE "pages_blocks_long_content4" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_service_type_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_budget_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_employees_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2_countries_options" CASCADE;
  DROP TABLE "pages_blocks_form_custom_2" CASCADE;
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
  DROP TABLE "pages_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio1" CASCADE;
  DROP TABLE "pages_blocks_portfolio5_projects_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio5_projects" CASCADE;
  DROP TABLE "pages_blocks_portfolio5" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header1_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header1" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header2_tags" CASCADE;
  DROP TABLE "pages_blocks_portfolio_header2" CASCADE;
  DROP TABLE "pages_blocks_pricing1" CASCADE;
  DROP TABLE "pages_blocks_pricing5_feature_sections" CASCADE;
  DROP TABLE "pages_blocks_pricing5_pricing_plan_features" CASCADE;
  DROP TABLE "pages_blocks_pricing5" CASCADE;
  DROP TABLE "pages_blocks_pulse_beams" CASCADE;
  DROP TABLE "pages_blocks_spotlight" CASCADE;
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
  DROP TABLE "pages_blocks_testimonial1" CASCADE;
  DROP TABLE "pages_blocks_testimonial3_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial3" CASCADE;
  DROP TABLE "pages_blocks_testimonial5_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial5" CASCADE;
  DROP TABLE "pages_blocks_testimonial6_testimonials" CASCADE;
  DROP TABLE "pages_blocks_testimonial6" CASCADE;
  DROP TABLE "text_reveal_card" CASCADE;
  DROP TABLE "pages_blocks_timeline1_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline1_timelines_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline1_timelines" CASCADE;
  DROP TABLE "pages_blocks_timeline1" CASCADE;
  DROP TABLE "pages_blocks_timeline3_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline3_timelines_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline3_timelines" CASCADE;
  DROP TABLE "pages_blocks_timeline3" CASCADE;
  DROP TABLE "pages_blocks_timeline7_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline7_timeline_items_buttons" CASCADE;
  DROP TABLE "pages_blocks_timeline7_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline7" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_animated_pin3_d" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_background_ripple_effect" CASCADE;
  DROP TABLE "_pages_v_blocks_banner1" CASCADE;
  DROP TABLE "_pages_v_blocks_banner2" CASCADE;
  DROP TABLE "_pages_v_blocks_banner3_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_banner3" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner4" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9_social_media_links" CASCADE;
  DROP TABLE "_pages_v_blocks_banner9" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog1" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog5" CASCADE;
  DROP TABLE "_pages_v_blocks_blog7_tabs_content" CASCADE;
  DROP TABLE "_pages_v_blocks_blog7_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_blog7" CASCADE;
  DROP TABLE "_pages_v_blocks_blog9_small_featured_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog9_blog_posts" CASCADE;
  DROP TABLE "_pages_v_blocks_blog9" CASCADE;
  DROP TABLE "_blog_post_header1_breadcrumbs_v" CASCADE;
  DROP TABLE "_blog_post_header1_social_links_v" CASCADE;
  DROP TABLE "_blog_post_header1_v" CASCADE;
  DROP TABLE "_blog_post_header2_social_links_v" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_post_header2" CASCADE;
  DROP TABLE "_blog_post_header3_breadcrumbs_v" CASCADE;
  DROP TABLE "_blog_post_header3_social_links_v" CASCADE;
  DROP TABLE "_pages_v_blocks_blog_post_header3" CASCADE;
  DROP TABLE "_blog_post_header5_v" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_career3_depts3_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_career3_depts3" CASCADE;
  DROP TABLE "_pages_v_blocks_career3" CASCADE;
  DROP TABLE "_pages_v_blocks_career4_depts4_jobs" CASCADE;
  DROP TABLE "_pages_v_blocks_career4_depts4" CASCADE;
  DROP TABLE "_pages_v_blocks_career4" CASCADE;
  DROP TABLE "_career5_jobs_v" CASCADE;
  DROP TABLE "_career5_depts_v" CASCADE;
  DROP TABLE "_pages_v_blocks_career5" CASCADE;
  DROP TABLE "_career6_jobs_v" CASCADE;
  DROP TABLE "_career6_depts_v" CASCADE;
  DROP TABLE "_pages_v_blocks_career6" CASCADE;
  DROP TABLE "_jobs_v" CASCADE;
  DROP TABLE "_depts_v" CASCADE;
  DROP TABLE "_pages_v_blocks_career_section1" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products_products" CASCADE;
  DROP TABLE "_comparison_1_v_comparison_products" CASCADE;
  DROP TABLE "_comparison_1_v_features_items" CASCADE;
  DROP TABLE "_comparison_1_v_features" CASCADE;
  DROP TABLE "_comparison_1_buttons_v" CASCADE;
  DROP TABLE "_comparison_1_v" CASCADE;
  DROP TABLE "_comparison_13_v_products_main_features_items" CASCADE;
  DROP TABLE "_comparison_13_v_products_main_features" CASCADE;
  DROP TABLE "_comparison_13_v_products_features_items" CASCADE;
  DROP TABLE "_comparison_13_v_products_features" CASCADE;
  DROP TABLE "_comparison_13_v_products" CASCADE;
  DROP TABLE "_comparison_13_v" CASCADE;
  DROP TABLE "_pages_v_blocks_contact1" CASCADE;
  DROP TABLE "_pages_v_blocks_contact5" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1" CASCADE;
  DROP TABLE "_pages_v_blocks_cta4" CASCADE;
  DROP TABLE "_pages_v_blocks_cta5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta5" CASCADE;
  DROP TABLE "_pages_v_blocks_cta9_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta9" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_custom_2_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_custom_2" CASCADE;
  DROP TABLE "_evt_1_v_tabs_content" CASCADE;
  DROP TABLE "_evt_1_v_tabs" CASCADE;
  DROP TABLE "_evt_1_v" CASCADE;
  DROP TABLE "_evt_3_v_tabs_content" CASCADE;
  DROP TABLE "_evt_3_v_tabs" CASCADE;
  DROP TABLE "_evt_3_v" CASCADE;
  DROP TABLE "_evt_4_v_tabs_content" CASCADE;
  DROP TABLE "_evt_4_v_tabs" CASCADE;
  DROP TABLE "_evt_4_v" CASCADE;
  DROP TABLE "_evt_6_v_tabs_content" CASCADE;
  DROP TABLE "_evt_6_v_tabs" CASCADE;
  DROP TABLE "_evt_6_v" CASCADE;
  DROP TABLE "_evt_hdr_1_v_filters" CASCADE;
  DROP TABLE "_evt_hdr_1_v_events" CASCADE;
  DROP TABLE "_evt_hdr_1_v" CASCADE;
  DROP TABLE "_evt_hdr_3_v_featured_events" CASCADE;
  DROP TABLE "_evt_hdr_3_v" CASCADE;
  DROP TABLE "_evt_hdr_4_v_featured_events" CASCADE;
  DROP TABLE "_evt_hdr_4_v" CASCADE;
  DROP TABLE "_evt_hdr_5_v_filters" CASCADE;
  DROP TABLE "_evt_hdr_5_v_events" CASCADE;
  DROP TABLE "_evt_hdr_5_v" CASCADE;
  DROP TABLE "_evt_hdr_1_v_2" CASCADE;
  DROP TABLE "_evt_hdr_5_v_2" CASCADE;
  DROP TABLE "_evt_hdr_6_v_breadcrumbs" CASCADE;
  DROP TABLE "_evt_hdr_6_v_buttons" CASCADE;
  DROP TABLE "_evt_hdr_6_v" CASCADE;
  DROP TABLE "_evt_hdr_7_v_buttons" CASCADE;
  DROP TABLE "_evt_hdr_7_v" CASCADE;
  DROP TABLE "_pages_v_blocks_faq1_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq1" CASCADE;
  DROP TABLE "_pages_v_blocks_faq2_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq2" CASCADE;
  DROP TABLE "_pages_v_blocks_faq4_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq4" CASCADE;
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
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery6_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery6" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery19_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery19" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery27_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery27" CASCADE;
  DROP TABLE "_glowing_star_card_v" CASCADE;
  DROP TABLE "_pages_v_blocks_header44_links" CASCADE;
  DROP TABLE "_pages_v_blocks_header44" CASCADE;
  DROP TABLE "_pages_v_blocks_header48" CASCADE;
  DROP TABLE "_pages_v_blocks_layout1_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout1" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout5" CASCADE;
  DROP TABLE "_links_1_v_categories_links" CASCADE;
  DROP TABLE "_links_1_v_categories" CASCADE;
  DROP TABLE "_links_1_v_social_links" CASCADE;
  DROP TABLE "_links_1_v" CASCADE;
  DROP TABLE "_links_4_v_categories_links" CASCADE;
  DROP TABLE "_links_4_v_categories" CASCADE;
  DROP TABLE "_links_4_v_social_links" CASCADE;
  DROP TABLE "_links_4_v" CASCADE;
  DROP TABLE "_pages_v_blocks_logo1_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo1" CASCADE;
  DROP TABLE "_pages_v_blocks_logo2_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo2" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_cloud_template_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_logo_cloud_template" CASCADE;
  DROP TABLE "_pages_v_blocks_speed_template" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template_pricing_cards_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template_pricing_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_template" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_template_questions_answers" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_template_questions" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_template" CASCADE;
  DROP TABLE "_pages_v_blocks_feature1_template_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_feature1_template" CASCADE;
  DROP TABLE "_pages_v_blocks_feature2_template_main_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_feature2_template_features" CASCADE;
  DROP TABLE "_pages_v_blocks_feature2_template" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content1" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content2" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content3" CASCADE;
  DROP TABLE "_pages_v_blocks_long_content4" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_service_type_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_budget_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_employees_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2_countries_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_custom_2" CASCADE;
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
  DROP TABLE "_pages_v_blocks_portfolio1_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio1" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio5_projects_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio5_projects" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio5" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header1_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header1" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header2_tags" CASCADE;
  DROP TABLE "_pages_v_blocks_portfolio_header2" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing1" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing5_feature_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing5_pricing_plan_features" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing5" CASCADE;
  DROP TABLE "_pages_v_blocks_pulse_beams" CASCADE;
  DROP TABLE "_pages_v_blocks_spotlight" CASCADE;
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
  DROP TABLE "_pages_v_blocks_testimonial1" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial3_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial3" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial5_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial5" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial6_testimonials" CASCADE;
  DROP TABLE "_pages_v_blocks_testimonial6" CASCADE;
  DROP TABLE "_text_reveal_card_v" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1_timelines_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1_timelines" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline1" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_timelines_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3_timelines" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline3" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_timeline_items_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline7" CASCADE;
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
  DROP TABLE "header_navbar1_config_nav_links_sub_menu_links" CASCADE;
  DROP TABLE "header_navbar1_config_nav_links" CASCADE;
  DROP TABLE "header_navbar1_config_buttons" CASCADE;
  DROP TABLE "navbar5_cat_link_items" CASCADE;
  DROP TABLE "navbar5_cat_links" CASCADE;
  DROP TABLE "navbar5_featured_links" CASCADE;
  DROP TABLE "navbar5_links" CASCADE;
  DROP TABLE "navbar5_buttons" CASCADE;
  DROP TABLE "header_navbar_template_config_nav_links" CASCADE;
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
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_animated_pin3_d_background_color";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_background_color";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_height";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_ripple_color";
  DROP TYPE "public"."enum_pages_blocks_background_ripple_effect_grid_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner2_button_size";
  DROP TYPE "public"."enum_pages_blocks_banner2_button_variant";
  DROP TYPE "public"."enum_pages_blocks_banner3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_banner3_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum_pages_blocks_banner9_social_media_links_platform";
  DROP TYPE "public"."enum_blog_post_header1_breadcrumbs_link_type";
  DROP TYPE "public"."icon_type";
  DROP TYPE "public"."enum_blog_post_header2_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_button_variant";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_button_size";
  DROP TYPE "public"."enum_pages_blocks_blog_post_header2_button_link_type";
  DROP TYPE "public"."enum_blog_post_header3_breadcrumbs_link_type";
  DROP TYPE "public"."enum_blog_post_header3_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."var";
  DROP TYPE "public"."sz";
  DROP TYPE "public"."enum_career5_jobs_link_type";
  DROP TYPE "public"."enum_career6_jobs_link_type";
  DROP TYPE "public"."enum_comparison_1_features_items_type";
  DROP TYPE "public"."enum_comparison_1_buttons_variant";
  DROP TYPE "public"."enum_comparison_1_buttons_size";
  DROP TYPE "public"."enum_comparison_1_buttons_link_type";
  DROP TYPE "public"."enum_comparison_13_products_main_features_items_type";
  DROP TYPE "public"."enum_comparison_13_products_features_items_type";
  DROP TYPE "public"."enum_pages_blocks_contact1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact1_button_size";
  DROP TYPE "public"."enum_pages_blocks_contact5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_contact5_button_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta1_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta4_button_variant";
  DROP TYPE "public"."enum_pages_blocks_cta4_button_size";
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta5_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta9_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_custom_2_buttons_variant";
  DROP TYPE "public"."enum_evt_1_tabs_content_button_variant";
  DROP TYPE "public"."enum_evt_1_tabs_content_button_size";
  DROP TYPE "public"."enum_evt_3_tabs_content_button_variant";
  DROP TYPE "public"."enum_evt_3_tabs_content_button_size";
  DROP TYPE "public"."enum_evt_4_tabs_content_button_variant";
  DROP TYPE "public"."enum_evt_4_tabs_content_button_size";
  DROP TYPE "public"."enum_evt_hdr_1_filters_variant";
  DROP TYPE "public"."enum_evt_hdr_1_filters_size";
  DROP TYPE "public"."enum_evt_hdr_1_events_button_variant";
  DROP TYPE "public"."enum_evt_hdr_1_events_button_size";
  DROP TYPE "public"."enum_evt_hdr_1_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_1_event_button_size";
  DROP TYPE "public"."enum_evt_hdr_3_featured_events_button_variant";
  DROP TYPE "public"."enum_evt_hdr_3_featured_events_button_size";
  DROP TYPE "public"."enum_evt_hdr_3_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_3_event_button_size";
  DROP TYPE "public"."enum_evt_hdr_4_featured_events_button_variant";
  DROP TYPE "public"."enum_evt_hdr_4_featured_events_button_size";
  DROP TYPE "public"."enum_evt_hdr_4_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_4_event_button_size";
  DROP TYPE "public"."enum_evt_hdr_5_filters_variant";
  DROP TYPE "public"."enum_evt_hdr_5_filters_size";
  DROP TYPE "public"."enum_evt_hdr_5_event_button_variant";
  DROP TYPE "public"."enum_evt_hdr_5_event_button_size";
  DROP TYPE "public"."enum_evt_hdr_1_2_back_link_variant";
  DROP TYPE "public"."enum_evt_hdr_1_2_back_link_size";
  DROP TYPE "public"."enum_evt_hdr_1_2_back_link_link_type";
  DROP TYPE "public"."enum_evt_hdr_1_2_button_variant";
  DROP TYPE "public"."enum_evt_hdr_1_2_button_size";
  DROP TYPE "public"."enum_evt_hdr_5_2_back_link_variant";
  DROP TYPE "public"."enum_evt_hdr_5_2_back_link_size";
  DROP TYPE "public"."enum_evt_hdr_5_2_back_link_link_type";
  DROP TYPE "public"."enum_evt_hdr_5_2_button_variant";
  DROP TYPE "public"."enum_evt_hdr_5_2_button_size";
  DROP TYPE "public"."enum_evt_hdr_6_breadcrumbs_link_type";
  DROP TYPE "public"."enum_evt_hdr_6_buttons_variant";
  DROP TYPE "public"."enum_evt_hdr_6_buttons_size";
  DROP TYPE "public"."enum_evt_hdr_6_buttons_link_type";
  DROP TYPE "public"."enum_evt_hdr_7_buttons_variant";
  DROP TYPE "public"."enum_evt_hdr_7_buttons_size";
  DROP TYPE "public"."enum_evt_hdr_7_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq1_button_size";
  DROP TYPE "public"."enum_pages_blocks_faq1_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq2_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq2_button_size";
  DROP TYPE "public"."enum_pages_blocks_faq4_button_variant";
  DROP TYPE "public"."enum_pages_blocks_faq4_button_size";
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
  DROP TYPE "public"."enum_glowing_star_card_button_link_type";
  DROP TYPE "public"."enum_glowing_star_card_background_color";
  DROP TYPE "public"."enum_glowing_star_card_height";
  DROP TYPE "public"."enum_pages_blocks_header44_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_header44_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_header48_button_size";
  DROP TYPE "public"."enum_pages_blocks_header48_button_variant";
  DROP TYPE "public"."enum_pages_blocks_layout1_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout1_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout5_buttons_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout5_buttons_link_appearance";
  DROP TYPE "public"."enum_links_1_categories_links_variant";
  DROP TYPE "public"."enum_links_1_categories_links_link_type";
  DROP TYPE "public"."enum_links_1_social_links_platform";
  DROP TYPE "public"."enum_links_1_social_links_link_type";
  DROP TYPE "public"."enum_links_1_button_variant";
  DROP TYPE "public"."enum_links_4_categories_links_variant";
  DROP TYPE "public"."enum_links_4_categories_links_link_type";
  DROP TYPE "public"."enum_links_4_social_links_platform";
  DROP TYPE "public"."enum_links_4_social_links_link_type";
  DROP TYPE "public"."enum_links_4_button_variant";
  DROP TYPE "public"."img1_type";
  DROP TYPE "public"."img2_type";
  DROP TYPE "public"."enum_pages_blocks_pricing_template_features_icon";
  DROP TYPE "public"."t";
  DROP TYPE "public"."enum_pages_blocks_feature1_template_cards_skeleton";
  DROP TYPE "public"."enum_pages_blocks_feature1_template_cards_link_type";
  DROP TYPE "public"."enum_pages_blocks_feature2_template_main_cards_skeleton";
  DROP TYPE "public"."enum_pages_blocks_feature2_template_features_icon";
  DROP TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_variant";
  DROP TYPE "public"."enum_pages_blocks_form_custom_2_nav_button_size";
  DROP TYPE "public"."enum_pages_blocks_multi_form2_nav_button_variant";
  DROP TYPE "public"."enum_pages_blocks_multi_form2_nav_button_size";
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
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_projects_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_projects_button_size";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_button_variant";
  DROP TYPE "public"."enum_pages_blocks_portfolio5_button_size";
  DROP TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_variant";
  DROP TYPE "public"."enum_pages_blocks_pricing1_pricing_plan_button_size";
  DROP TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_variant";
  DROP TYPE "public"."enum_pages_blocks_pricing5_pricing_plan_button_size";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_button_link_type";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_background_color";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_height";
  DROP TYPE "public"."enum_pages_blocks_pulse_beams_button_size";
  DROP TYPE "public"."enum_pages_blocks_spotlight_spotlight_color";
  DROP TYPE "public"."enum_pages_blocks_spotlight_background_color";
  DROP TYPE "public"."enum_pages_blocks_spotlight_text_color";
  DROP TYPE "public"."enum_stats_1_buttons_variant";
  DROP TYPE "public"."enum_stats_1_buttons_size";
  DROP TYPE "public"."enum_stats_3_buttons_variant";
  DROP TYPE "public"."enum_stats_3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_team1_team_members_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team1_footer_button_variant";
  DROP TYPE "public"."enum_pages_blocks_team2_team_members_social_links_platform";
  DROP TYPE "public"."enum_pages_blocks_team2_footer_button_variant";
  DROP TYPE "public"."enum_text_reveal_card_background_color";
  DROP TYPE "public"."enum_text_reveal_card_height";
  DROP TYPE "public"."enum_pages_blocks_timeline1_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline1_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline1_timelines_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline3_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline3_timelines_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline7_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline7_buttons_size";
  DROP TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_timeline7_timeline_items_buttons_size";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_animated_pin3_d_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_height";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_ripple_color";
  DROP TYPE "public"."enum__pages_v_blocks_background_ripple_effect_grid_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner2_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner2_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner3_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_banner3_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_banner4_social_media_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_banner9_social_media_links_platform";
  DROP TYPE "public"."enum__blog_post_header1_breadcrumbs_v_link_type";
  DROP TYPE "public"."enum__blog_post_header2_social_links_v_platform";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_blog_post_header2_button_link_type";
  DROP TYPE "public"."enum__blog_post_header3_breadcrumbs_v_link_type";
  DROP TYPE "public"."enum__blog_post_header3_social_links_v_platform";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__career5_jobs_v_link_type";
  DROP TYPE "public"."enum__career6_jobs_v_link_type";
  DROP TYPE "public"."enum__comparison_1_v_features_items_type";
  DROP TYPE "public"."enum__comparison_1_buttons_v_variant";
  DROP TYPE "public"."enum__comparison_1_buttons_v_size";
  DROP TYPE "public"."enum__comparison_1_buttons_v_link_type";
  DROP TYPE "public"."enum__comparison_13_v_products_main_features_items_type";
  DROP TYPE "public"."enum__comparison_13_v_products_features_items_type";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_contact5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_contact5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta4_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta4_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta5_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta9_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_custom_2_buttons_variant";
  DROP TYPE "public"."enum__evt_1_v_tabs_content_button_variant";
  DROP TYPE "public"."enum__evt_1_v_tabs_content_button_size";
  DROP TYPE "public"."enum__evt_3_v_tabs_content_button_variant";
  DROP TYPE "public"."enum__evt_3_v_tabs_content_button_size";
  DROP TYPE "public"."enum__evt_4_v_tabs_content_button_variant";
  DROP TYPE "public"."enum__evt_4_v_tabs_content_button_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_filters_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_filters_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_events_button_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_events_button_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_event_button_size";
  DROP TYPE "public"."enum__evt_hdr_3_v_featured_events_button_variant";
  DROP TYPE "public"."enum__evt_hdr_3_v_featured_events_button_size";
  DROP TYPE "public"."enum__evt_hdr_3_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_3_v_event_button_size";
  DROP TYPE "public"."enum__evt_hdr_4_v_featured_events_button_variant";
  DROP TYPE "public"."enum__evt_hdr_4_v_featured_events_button_size";
  DROP TYPE "public"."enum__evt_hdr_4_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_4_v_event_button_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_filters_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_filters_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_event_button_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_event_button_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_2_back_link_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_2_back_link_size";
  DROP TYPE "public"."enum__evt_hdr_1_v_2_back_link_link_type";
  DROP TYPE "public"."enum__evt_hdr_1_v_2_button_variant";
  DROP TYPE "public"."enum__evt_hdr_1_v_2_button_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_back_link_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_back_link_size";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_back_link_link_type";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_button_variant";
  DROP TYPE "public"."enum__evt_hdr_5_v_2_button_size";
  DROP TYPE "public"."enum__evt_hdr_6_v_breadcrumbs_link_type";
  DROP TYPE "public"."enum__evt_hdr_6_v_buttons_variant";
  DROP TYPE "public"."enum__evt_hdr_6_v_buttons_size";
  DROP TYPE "public"."enum__evt_hdr_6_v_buttons_link_type";
  DROP TYPE "public"."enum__evt_hdr_7_v_buttons_variant";
  DROP TYPE "public"."enum__evt_hdr_7_v_buttons_size";
  DROP TYPE "public"."enum__evt_hdr_7_v_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_faq1_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq2_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq2_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_faq4_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_faq4_button_size";
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
  DROP TYPE "public"."enum__glowing_star_card_v_button_link_type";
  DROP TYPE "public"."enum__glowing_star_card_v_background_color";
  DROP TYPE "public"."enum__glowing_star_card_v_height";
  DROP TYPE "public"."enum__pages_v_blocks_header44_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_header44_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_header48_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_header48_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout1_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout1_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout5_buttons_link_appearance";
  DROP TYPE "public"."enum__links_1_v_categories_links_variant";
  DROP TYPE "public"."enum__links_1_v_categories_links_link_type";
  DROP TYPE "public"."enum__links_1_v_social_links_platform";
  DROP TYPE "public"."enum__links_1_v_social_links_link_type";
  DROP TYPE "public"."enum__links_1_v_button_variant";
  DROP TYPE "public"."enum__links_4_v_categories_links_variant";
  DROP TYPE "public"."enum__links_4_v_categories_links_link_type";
  DROP TYPE "public"."enum__links_4_v_social_links_platform";
  DROP TYPE "public"."enum__links_4_v_social_links_link_type";
  DROP TYPE "public"."enum__links_4_v_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_template_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_feature1_template_cards_skeleton";
  DROP TYPE "public"."enum__pages_v_blocks_feature1_template_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_feature2_template_main_cards_skeleton";
  DROP TYPE "public"."enum__pages_v_blocks_feature2_template_features_icon";
  DROP TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_form_custom_2_nav_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_multi_form2_nav_button_size";
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
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_projects_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio1_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_projects_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_portfolio5_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_pricing1_pricing_plan_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_pricing5_pricing_plan_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_button_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_height";
  DROP TYPE "public"."enum__pages_v_blocks_pulse_beams_button_size";
  DROP TYPE "public"."enum__pages_v_blocks_spotlight_spotlight_color";
  DROP TYPE "public"."enum__pages_v_blocks_spotlight_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_spotlight_text_color";
  DROP TYPE "public"."enum__stats_1_v_buttons_variant";
  DROP TYPE "public"."enum__stats_1_v_buttons_size";
  DROP TYPE "public"."enum__stats_3_v_buttons_variant";
  DROP TYPE "public"."enum__stats_3_v_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_team1_team_members_social_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_team1_footer_button_variant";
  DROP TYPE "public"."enum__pages_v_blocks_team2_team_members_social_links_platform";
  DROP TYPE "public"."enum__pages_v_blocks_team2_footer_button_variant";
  DROP TYPE "public"."enum__text_reveal_card_v_background_color";
  DROP TYPE "public"."enum__text_reveal_card_v_height";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline1_timelines_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline3_timelines_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_buttons_size";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_timeline7_timeline_items_buttons_size";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
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
  DROP TYPE "public"."enum_header_navbar_type";
  DROP TYPE "public"."enum_header_navbar5_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_logo_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_login_button_link_type";
  DROP TYPE "public"."enum_header_navbar_template_config_signup_button_link_type";
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
  DROP TYPE "public"."enum_footer_footer_template_config_cta_button_link_type";`)
}
