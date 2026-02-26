/**
 * GENERADO por scripts/generate-enabled-blocks.ts
 * No editar a mano. La lista de bloques se define en src/projectConfig.ts → enabledBlockSlugs.
 * Después de cambiar projectConfig, ejecuta: npm run generate:enabled-blocks
 */
import type { Block } from 'payload'

import { Banner4 } from './Banner_4/config'
import { Banner1Block } from './Banner1/config'
import { Portfolio1 } from './Portfolio_1/config'
import { Comparison1 } from './Comparison_1/config'
import { CTA2SendaBlock } from './CTA2_SENDA/config'
import { LayoutSendaBlock } from './Layout_SENDA/config'
import { LayoutSendaSectionsBlock } from './Layout_SENDA_Sections/config'
import { PricingSendaBlock } from './Pricing_SENDA/config'
import { FAQSendaBlock } from './FAQ_SENDA/config'
import { BlogPostHeader1 } from './Blog_Post_Header_1/config'
import { BlogPostHeader5 } from './Blog_Post_Header_5/config'
import { Blog5 } from './Blog_5/config'

export const ENABLED_BLOCKS_BY_SLUG: Record<string, Block> = {
  "banner4": Banner4,
  "banner1": Banner1Block,
  "portfolio1": Portfolio1,
  "comparison1": Comparison1,
  "cta2Senda": CTA2SendaBlock,
  "layoutSenda": LayoutSendaBlock,
  "layoutSendaSections": LayoutSendaSectionsBlock,
  "pricingSenda": PricingSendaBlock,
  "faqSenda": FAQSendaBlock,
  "blogPostHeader1": BlogPostHeader1,
  "blogPostHeader5": BlogPostHeader5,
  "blog5": Blog5,
}
