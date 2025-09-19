import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { Banner4 } from '@/blocks/Banner_4/Component'
import { Banner9 } from '@/blocks/Banner_9/Component'
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

const blockComponents = {
  archive: ArchiveBlock,
  banner4: Banner4,
  banner9: Banner9,
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
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
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
