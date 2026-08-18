import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'

import type { Page } from '@/payload-types'

import { enabledBlockSlugs } from '@/projectConfig'

// Carga dinámica: cada bloque solo se descarga cuando se renderiza (y solo los habilitados se exponen)
const allBlockComponents: Record<string, React.ComponentType<any>> = {
  animatedPin3D: dynamic(() => import('@/blocks/3D_Animated_Pin/Component').then((m) => m.AnimatedPin3DBlock)),
  appSenda: dynamic(() => import('@/blocks/APP_SENDA/Component').then((m) => m.AppSendaBlock)),
  appSendaAlter: dynamic(() =>
    import('@/blocks/APP_SENDA_Alter/Component').then((m) => m.AppSendaAlterBlock),
  ),
  finalTestSenda: dynamic(() =>
    import('@/blocks/Final_test_SENDA/Component').then((m) => m.FinalTestSendaBlock),
  ),
  archive: dynamic(() => import('@/blocks/ArchiveBlock/Component').then((m) => m.ArchiveBlock)),
  backgroundRippleEffect: dynamic(() =>
    import('@/blocks/Background_Ripple_Effect/Component').then((m) => m.Background_Ripple_Effect),
  ),
  banner1: dynamic(() => import('@/blocks/Banner1/Component').then((m) => m.Banner1)),
  banner2: dynamic(() => import('@/blocks/Banner2/Component').then((m) => m.Banner2)),
  banner3: dynamic(() => import('@/blocks/Banner3/Component').then((m) => m.Banner3)),
  banner4: dynamic(() => import('@/blocks/Banner_4/Component').then((m) => m.Banner4)),
  bloqueIMCSenda: dynamic(() =>
    import('@/blocks/BloqueIMC_SENDA/Component').then((m) => m.BloqueIMCSendaBlock),
  ),
  banner9: dynamic(() => import('@/blocks/Banner_9/Component').then((m) => m.Banner9)),
  blog1: dynamic(() => import('@/blocks/Blog_1/Component').then((m) => m.Blog1Block)),
  blog5: dynamic(() => import('@/blocks/Blog_5/Component').then((m) => m.Blog5Block)),
  blog7: dynamic(() => import('@/blocks/Blog_7/Component').then((m) => m.Blog7Block)),
  blog9: dynamic(() => import('@/blocks/Blog_9/Component').then((m) => m.Blog9Block)),
  blogPostHeader1: dynamic(() =>
    import('@/blocks/Blog_Post_Header_1/Component').then((m) => m.BlogPostHeader1Block),
  ),
  blogPostHeader2: dynamic(() => import('@/blocks/Blog_Post_Header2/Component').then((m) => m.BlogPostHeader2)),
  blogPostHeader3: dynamic(() => import('@/blocks/Blog_Post_Header3/Component').then((m) => m.BlogPostHeader3)),
  blogPostHeader5: dynamic(() =>
    import('@/blocks/Blog_Post_Header_5/Component').then((m) => m.BlogPostHeader5Block),
  ),
  careerSection1: dynamic(() =>
    import('@/blocks/Career_Section_1/Component').then((m) => m.CareerSection1Block),
  ),
  career3: dynamic(() => import('@/blocks/Career_Section_3/Component').then((m) => m.Career3)),
  career4: dynamic(() => import('@/blocks/Caree_Section_4/Component').then((m) => m.Career4)),
  career5: dynamic(() => import('@/blocks/Career5/Component').then((m) => m.Career5Block)),
  career6: dynamic(() => import('@/blocks/Career6/Component').then((m) => m.Career6Block)),
  comparison1: dynamic(() => import('@/blocks/Comparison_1/Component').then((m) => m.Comparison1)),
  comparison13: dynamic(() => import('@/blocks/Comparison_13/Component').then((m) => m.Comparison13)),
  contact1: dynamic(() => import('@/blocks/Contact1/Component').then((m) => m.Contact1)),
  contact5: dynamic(() => import('@/blocks/Contact5/Component').then((m) => m.Contact5)),
  content: dynamic(() => import('@/blocks/Content/Component').then((m) => m.ContentBlock)),
  cta: dynamic(() => import('@/blocks/CallToAction/Component').then((m) => m.CallToActionBlock)),
  cta_custom_2: dynamic(() => import('@/blocks/CTA_custom_2/Component').then((m) => m.CTA_custom_2Block)),
  cta1Senda: dynamic(() => import('@/blocks/CTA1_SENDA/Component').then((m) => m.CTA1SendaBlock)),
  cta1SendaAlter: dynamic(() =>
    import('@/blocks/CTA1_SENDA_Alter/Component').then((m) => m.CTA1SendaAlterBlock),
  ),
  cta2Senda: dynamic(() => import('@/blocks/CTA2_SENDA/Component').then((m) => m.CTA2SendaBlock)),
  cardsSenda: dynamic(() => import('@/blocks/Cards_SENDA/Component').then((m) => m.SendaCardsBlockComponent)),
  multiFormSenda: dynamic(() =>
    import('@/blocks/Multi_Form_SENDA/Component').then((m) => m.MultiFormSendaBlock),
  ),
  cta1: dynamic(() => import('@/blocks/CTA1/Component').then((m) => m.CTA1Block)),
  cta4: dynamic(() => import('@/blocks/CTA_4/Component').then((m) => m.CTA4Block)),
  cta5: dynamic(() => import('@/blocks/CTA5/Component').then((m) => m.CTA5Block)),
  cta9: dynamic(() => import('@/blocks/CTA_9/Component').then((m) => m.CTA9Block)),
  cta27: dynamic(() => import('@/blocks/CTA27/Component').then((m) => m.CTA27Block)),
  event1: dynamic(() => import('@/blocks/Event_1/Component').then((m) => m.Event1)),
  event3: dynamic(() => import('@/blocks/Event_3/Component').then((m) => m.Event3)),
  event4: dynamic(() => import('@/blocks/Event_4/Component').then((m) => m.Event4)),
  event6: dynamic(() => import('@/blocks/Event_6/Component').then((m) => m.Event6)),
  eventHeader1: dynamic(() => import('@/blocks/Event_Header_1/Component').then((m) => m.EventHeader1)),
  eventHeader3: dynamic(() => import('@/blocks/Event_Header_3/Component').then((m) => m.EventHeader3)),
  eventHeader4: dynamic(() => import('@/blocks/Event_Header_4/Component').then((m) => m.EventHeader4)),
  eventHeader5: dynamic(() => import('@/blocks/Event_Header_5/Component').then((m) => m.EventHeader5)),
  eventItemHdr1: dynamic(() =>
    import('@/blocks/Event_Item_Header_1/Component').then((m) => m.EventItemHeader1),
  ),
  eventItemHdr5: dynamic(() =>
    import('@/blocks/Event_Item_Header_5/Component').then((m) => m.EventItemHeader5),
  ),
  eventItemHdr6: dynamic(() =>
    import('@/blocks/Event_Item_Header_6/Component').then((m) => m.EventItemHeader6),
  ),
  eventItemHdr7: dynamic(() =>
    import('@/blocks/Event_Item_Header_7/Component').then((m) => m.EventItemHeader7),
  ),
  faq1: dynamic(() => import('@/blocks/FAQ1/Component').then((m) => m.FAQ1)),
  faq2: dynamic(() => import('@/blocks/FAQ_2/Component').then((m) => m.FAQ2)),
  faq4: dynamic(() => import('@/blocks/FAQ_4/Component').then((m) => m.FAQ4)),
  faq5: dynamic(() => import('@/blocks/FAQ5/Component').then((m) => m.FAQ5)),
  faqSenda: dynamic(() =>
    import('@/blocks/FAQ_SENDA/Component').then((m) => m.FAQSendaBlock),
  ),
  testimonialsSenda: dynamic(() =>
    import('@/blocks/Testimonials_SENDA/Component').then((m) => m.TestimonialsSendaBlockComponent),
  ),
  faqTemplate: dynamic(() => import('@/blocks/FAQ_Template/Component').then((m) => m.FAQTemplate)),
  feature1Template: dynamic(() =>
    import('@/blocks/Feature1_Template/Component').then((m) => m.Feature1Template),
  ),
  feature2Template: dynamic(() =>
    import('@/blocks/Feature2_Template/Component').then((m) => m.Feature2Template),
  ),
  focusCards: dynamic(() => import('@/blocks/Focus_Cards/Component').then((m) => m.FocusCardsDemo)),
  footer1: dynamic(() => import('@/blocks/Footer1/Component').then((m) => m.Footer1)),
  footer5: dynamic(() => import('@/blocks/Footer5/Component').then((m) => m.Footer5)),
  formBlock: dynamic(() => import('@/blocks/Form/Component').then((m) => m.FormBlock)),
  form_custom_2: dynamic(() =>
    import('@/blocks/Multi-step_form_1/Component').then((m) => m.Form_custom_2Block),
  ),
  gallery6: dynamic(() => import('@/blocks/Gallery_6/Component').then((m) => m.Gallery6Block)),
  gallery19: dynamic(() => import('@/blocks/Gallery_19/Component').then((m) => m.Gallery19Block)),
  gallery27: dynamic(() => import('@/blocks/Gallery_27/Component').then((m) => m.Gallery27Block)),
  GlowingStarCard: dynamic(() =>
    import('@/blocks/Glowing_Background_Star_Card/Component').then((m) => m.Glowing_Background_Star_Card),
  ),
  header44: dynamic(() => import('@/blocks/Header44/Component').then((m) => m.Header44Block)),
  header48: dynamic(() => import('@/blocks/Header48/Component').then((m) => m.Header48Block)),
  infiniteMovingCards: dynamic(() =>
    import('@/blocks/Infinite_Moving_Cards/Component').then((m) => m.InfiniteMovingCardsDemo),
  ),
  layout1: dynamic(() => import('@/blocks/Layout1/Component').then((m) => m.Layout1Block)),
  layout5: dynamic(() => import('@/blocks/Layout5/Component').then((m) => m.Layout5Block)),
  layout10: dynamic(() => import('@/blocks/Layout10/Component').then((m) => m.Layout10Block)),
  layoutSenda: dynamic(() => import('@/blocks/Layout_SENDA/Component').then((m) => m.LayoutSendaBlock)),
  layoutSendaSections: dynamic(() =>
    import('@/blocks/Layout_SENDA_Sections/Component').then((m) => m.LayoutSendaSectionsBlock),
  ),
  layoutDrop: dynamic(() => import('@/blocks/Layout_Drop/Component').then((m) => m.LayoutDropBlock)),
  layout2Drop: dynamic(() =>
    import('@/blocks/Layout2_DROP/Component').then((m) => m.Layout2DropBlock),
  ),
  fondoDrop: dynamic(() => import('@/blocks/Fondo_DROP/Component').then((m) => m.FondoDropBlock)),
  pricingDrop: dynamic(() =>
    import('@/blocks/Pricing_DROP/Component').then((m) => m.PricingDropBlock),
  ),
  faqDrop: dynamic(() => import('@/blocks/FAQ_DROP/Component').then((m) => m.FAQDropBlock)),
  navbarSimpleSenda: dynamic(() =>
    import('@/blocks/Navbar_Simple_SENDA/Component').then((m) => m.NavbarSimpleSendaBlock),
  ),
  pricingSenda: dynamic(() =>
    import('@/blocks/Pricing_SENDA/Component').then((m) => m.PricingSendaBlock),
  ),
  pricingSendaAlter: dynamic(() =>
    import('@/blocks/Pricing_SENDA_Alter/Component').then((m) => m.PricingSendaAlterBlock),
  ),
  layout42: dynamic(() => import('@/blocks/Layout42/Component').then((m) => m.Layout42Block)),
  layout90: dynamic(() => import('@/blocks/Layout90/Component').then((m) => m.Layout90Block)),
  layout132: dynamic(() => import('@/blocks/Layout132/Component').then((m) => m.Layout132Block)),
  layout133: dynamic(() => import('@/blocks/Layout133/Component').then((m) => m.Layout133Block)),
  layout222: dynamic(() => import('@/blocks/Layout222/Component').then((m) => m.Layout222Block)),
  layout239: dynamic(() => import('@/blocks/Layout239/Component').then((m) => m.Layout239Block)),
  layout304: dynamic(() => import('@/blocks/Layout304/Component').then((m) => m.Layout304Block)),
  layout352: dynamic(() => import('@/blocks/Layout352/Component').then((m) => m.Layout352Block)),
  layout395: dynamic(() => import('@/blocks/Layout395/Component').then((m) => m.Layout395Block)),
  links1: dynamic(() => import('@/blocks/Links_1/Component').then((m) => m.Links1)),
  links4: dynamic(() => import('@/blocks/Links_4/Component').then((m) => m.Links4)),
  logo1: dynamic(() => import('@/blocks/Logo_1/Component').then((m) => m.Logo1Block)),
  logo2: dynamic(() => import('@/blocks/Logo_2/Component').then((m) => m.Logo2Block)),
  logoCloudTemplate: dynamic(() =>
    import('@/blocks/Logo_Cloud_Template/Component').then((m) => m.LogoCloudTemplate),
  ),
  longContent1: dynamic(() =>
    import('@/blocks/Long_Content_1/Component').then((m) => m.LongContent1Block),
  ),
  longContent2: dynamic(() =>
    import('@/blocks/Long_Content_2/Component').then((m) => m.LongContent2Block),
  ),
  longContent3: dynamic(() =>
    import('@/blocks/Long_Content_3/Component').then((m) => m.LongContent3Block),
  ),
  longContent4: dynamic(() =>
    import('@/blocks/Long_Content_4/Component').then((m) => m.LongContent4Block),
  ),
  mediaBlock: dynamic(() => import('@/blocks/MediaBlock/Component').then((m) => m.MediaBlock)),
  multiForm2: dynamic(() =>
    import('@/blocks/Multi-step_form_2/Component').then((m) => m.MultiForm2Block),
  ),
  multiForm7: dynamic(() =>
    import('@/blocks/Multi-step_form_7/Component').then((m) => m.MultiForm7Block),
  ),
  navbar1: dynamic(() => import('@/blocks/Navbar1/Component').then((m) => m.Navbar1)),
  navbar5: dynamic(() => import('@/blocks/Navbar5/Component').then((m) => m.Navbar5)),
  portfolio1: dynamic(() => import('@/blocks/Portfolio_1/Component').then((m) => m.Portfolio1)),
  portfolio5: dynamic(() => import('@/blocks/Portfolio_5/Component').then((m) => m.Portfolio5)),
  portfolioHeader1: dynamic(() =>
    import('@/blocks/Portfolio_Header_1/Component').then((m) => m.PortfolioHeader1),
  ),
  portfolioHeader2: dynamic(() =>
    import('@/blocks/Portfolio_Header_2/Component').then((m) => m.PortfolioHeader2),
  ),
  pricing1: dynamic(() => import('@/blocks/Pricing1/Component').then((m) => m.Pricing1)),
  pricing5: dynamic(() => import('@/blocks/Pricing_5/Component').then((m) => m.Pricing5Block)),
  pricingTemplate: dynamic(() =>
    import('@/blocks/Pricing_Template/Component').then((m) => m.PricingTemplate),
  ),
  pulseBeams: dynamic(() => import('@/blocks/Pulse_Beams/Component').then((m) => m.Pulse_Beams)),
  speedTemplate: dynamic(() =>
    import('@/blocks/Speed_Template/Component').then((m) => m.SpeedTemplate),
  ),
  spotlight: dynamic(() => import('@/blocks/Spotlight/Component').then((m) => m.SpotlightBlock)),
  stats1: dynamic(() => import('@/blocks/Stats_1/Component').then((m) => m.Stats1)),
  stats3: dynamic(() => import('@/blocks/Stats_3/Component').then((m) => m.Stats3)),
  stats24: dynamic(() => import('@/blocks/Stats24/Component').then((m) => m.Stats24Block)),
  stickyBanner: dynamic(() =>
    import('@/blocks/Sticky_Banner/Component').then((m) => m.StickyBannerDemo),
  ),
  team1: dynamic(() => import('@/blocks/Team1/Component').then((m) => m.Team1)),
  team2: dynamic(() => import('@/blocks/Team2/Component').then((m) => m.Team2)),
  testimonial1: dynamic(() => import('@/blocks/Testimonial1/Component').then((m) => m.Testimonial1)),
  testimonial3: dynamic(() => import('@/blocks/Testimonial_3/Component').then((m) => m.Testimonial3)),
  testimonial5: dynamic(() => import('@/blocks/Testimonial5/Component').then((m) => m.Testimonial5)),
  testimonial6: dynamic(() => import('@/blocks/Testimonial_6/Component').then((m) => m.Testimonial6)),
  TextRevealCard: dynamic(() =>
    import('@/blocks/Text_Reveal_Card/Component').then((m) => m.Text_Reveal_Card),
  ),
  timeline1: dynamic(() => import('@/blocks/Timeline_1/Component').then((m) => m.Timeline1Block)),
  timeline3: dynamic(() => import('@/blocks/Timeline_3/Component').then((m) => m.Timeline3)),
  timeline7: dynamic(() => import('@/blocks/Timeline_7/Component').then((m) => m.Timeline7)),
}

const blockComponents: Record<string, React.ComponentType<any>> = (() => {
  const slugs = enabledBlockSlugs
  return slugs
    ? Object.fromEntries(
        Object.entries(allBlockComponents).filter(([slug]) => slugs.includes(slug)),
      )
    : allBlockComponents
})()

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} blockIndex={index} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
