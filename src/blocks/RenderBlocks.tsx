import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { Banner1 } from '@/blocks/Banner1/Component'
import { Banner4 } from '@/blocks/Banner_4/Component'
import { Banner9 } from '@/blocks/Banner_9/Component'
import { Contact1 } from '@/blocks/Contact1/Component'
import { Contact5 } from '@/blocks/Contact5/Component'
import { CTA1Block } from '@/blocks/CTA1/Component'
import { CTA5Block } from '@/blocks/CTA5/Component'
import { FAQ1 } from '@/blocks/FAQ1/Component'
import { FAQ5 } from '@/blocks/FAQ5/Component'
import { Footer1 } from '@/blocks/Footer1/Component'
import { Footer5 } from '@/blocks/Footer5/Component'
import { Blog1Block } from '@/blocks/Blog_1/Component'
import { Blog5Block } from '@/blocks/Blog_5/Component'
import { BlogPostHeader1Block } from '@/blocks/Blog_Post_Header_1/Component'
import { BlogPostHeader5Block } from '@/blocks/Blog_Post_Header_5/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CareerSection1Block } from '@/blocks/Career_Section_1/Component'
import { CTA_custom_2Block } from '@/blocks/CTA_custom_2/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { Form_custom_2Block } from '@/blocks/Multi-step_form_1/Component'
import { LongContent1Block } from '@/blocks/Long_Content_1/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { Pricing5Block } from '@/blocks/Pricing_5/Component'
import { Testimonial3 } from '@/blocks/Testimonial_3/Component'
import { Testimonial6 } from '@/blocks/Testimonial_6/Component'
import { Gallery6Block } from '@/blocks/Gallery_6/Component'
import { Gallery19Block } from '@/blocks/Gallery_19/Component'
import { Gallery27Block } from '@/blocks/Gallery_27/Component'
import { Logo1Block } from '@/blocks/Logo_1/Component'
import { Logo2Block } from '@/blocks/Logo_2/Component'
import { Team1 as Team1Block } from '@/blocks/Team1/Component'
import { Team2 as Team2Block } from '@/blocks/Team2/Component'
import { Timeline1Block } from '@/blocks/Timeline_1/Component'
import { Portfolio1 as Portfolio1Block } from '@/blocks/Portfolio_1/Component'
import { Portfolio5 as Portfolio5Block } from '@/blocks/Portfolio_5/Component'
import { FAQ2 as FAQ2Block } from '@/blocks/FAQ_2/Component'
import { FAQ4 as FAQ4Block } from '@/blocks/FAQ_4/Component'
import { PortfolioHeader1 as PortfolioHeader1Block } from '@/blocks/Portfolio_Header_1/Component'
import { PortfolioHeader2 as PortfolioHeader2Block } from '@/blocks/Portfolio_Header_2/Component'
import { EventItemHeader1 as EventItemHeader1Block } from '@/blocks/Event_Item_Header_1/Component'
import { EventItemHeader5 as EventItemHeader5Block } from '@/blocks/Event_Item_Header_5/Component'
import { EventHeader1 as EventHeader1Block } from '@/blocks/Event_Header_1/Component'
import { EventHeader3 as EventHeader3Block } from '@/blocks/Event_Header_3/Component'
import { Event1 as Event1Block } from '@/blocks/Event_1/Component'
import { Event3 as Event3Block } from '@/blocks/Event_3/Component'
import { Stats1 as Stats1Block } from '@/blocks/Stats_1/Component'
import { Stats3 as Stats3Block } from '@/blocks/Stats_3/Component'
import { Comparison1 as Comparison1Block } from '@/blocks/Comparison_1/Component'
import { Comparison13 as Comparison13Block } from '@/blocks/Comparison_13/Component'
import { Links1 as Links1Block } from '@/blocks/Links_1/Component'
import { Links4 as Links4Block } from '@/blocks/Links_4/Component'
import { Navbar1 } from '@/blocks/Navbar1/Component'
import { Pricing1 } from '@/blocks/Pricing1/Component'
import { Testimonial1 } from '@/blocks/Testimonial1/Component'
import { Testimonial5 } from '@/blocks/Testimonial5/Component'
import { Navbar5 } from '@/blocks/Navbar5/Component'
import { Layout1Block } from '@/blocks/Layout1/Component'
import { Layout5Block } from '@/blocks/Layout5/Component'
import { Header44Block } from '@/blocks/Header44/Component'
import { Header48Block } from '@/blocks/Header48/Component'

const blockComponents = {
  archive: ArchiveBlock,
  banner1: Banner1,
  banner4: Banner4,
  banner9: Banner9,
  contact1: Contact1,
  contact5: Contact5,
  cta1: CTA1Block,
  cta5: CTA5Block,
  faq1: FAQ1,
  faq5: FAQ5,
  footer1: Footer1,
  footer5: Footer5,
  blog1: Blog1Block,
  blog5: Blog5Block,
  blogPostHeader1: BlogPostHeader1Block,
  blogPostHeader5: BlogPostHeader5Block,
  careerSection1: CareerSection1Block,
  content: ContentBlock,
  cta: CallToActionBlock,
  cta_custom_2: CTA_custom_2Block,
  formBlock: FormBlock,
  form_custom_2: Form_custom_2Block,
  gallery6: Gallery6Block,
  gallery19: Gallery19Block,
  gallery27: Gallery27Block,
  logo1: Logo1Block,
  logo2: Logo2Block,
  team1: Team1Block,
  team2: Team2Block,
  longContent1: LongContent1Block,
  mediaBlock: MediaBlock,
  pricing5: Pricing5Block,
  testimonial3: Testimonial3,
  testimonial6: Testimonial6,
  timeline1: Timeline1Block,
  portfolio1: Portfolio1Block,
  portfolio5: Portfolio5Block,
  faq2: FAQ2Block,
  faq4: FAQ4Block,
  portfolioHeader1: PortfolioHeader1Block,
  portfolioHeader2: PortfolioHeader2Block,
  eventItemHdr1: EventItemHeader1Block,
  eventItemHdr5: EventItemHeader5Block,
  eventHeader1: EventHeader1Block,
  eventHeader3: EventHeader3Block,
  event1: Event1Block,
  event3: Event3Block,
  stats1: Stats1Block,
  stats3: Stats3Block,
  comparison1: Comparison1Block,
  comparison13: Comparison13Block,
  links1: Links1Block,
  links4: Links4Block,
  navbar1: Navbar1,
  navbar5: Navbar5,
  pricing1: Pricing1,
  testimonial1: Testimonial1,
  testimonial5: Testimonial5,
  layout1: Layout1Block,
  layout5: Layout5Block,
  header44: Header44Block,
  header48: Header48Block,
}

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
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error - Block components have different prop types */}
                  <Block {...block} />
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
