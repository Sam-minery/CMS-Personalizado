/**
 * GENERADO por scripts/generate-enabled-blocks.ts
 * No editar a mano. La lista de bloques se define en src/projectConfig.ts → enabledBlockSlugs.
 * Después de cambiar projectConfig, ejecuta: npm run generate:enabled-blocks
 */
import type { Block } from 'payload'

import { CTA1SendaBlock } from './CTA1_SENDA/config'
import { CTA2SendaBlock } from './CTA2_SENDA/config'
import { SendaCardsBlockConfig } from './Cards_SENDA/config'
import { MultiFormSendaBlock } from './Multi_Form_SENDA/config'
import { LayoutSendaBlock } from './Layout_SENDA/config'
import { LayoutSendaSectionsBlock } from './Layout_SENDA_Sections/config'
import { NavbarSimpleSendaBlock } from './Navbar_Simple_SENDA/config'
import { PricingSendaBlock } from './Pricing_SENDA/config'
import { FAQSendaBlock } from './FAQ_SENDA/config'
import { TestimonialsSendaBlockConfig } from './Testimonials_SENDA/config'
import { BloqueIMCSendaBlockConfig } from './BloqueIMC_SENDA/config'
import { AppSendaBlockConfig } from './APP_SENDA/config'

export const ENABLED_BLOCKS_BY_SLUG: Record<string, Block> = {
  "cta1Senda": CTA1SendaBlock,
  "cta2Senda": CTA2SendaBlock,
  "cardsSenda": SendaCardsBlockConfig,
  "multiFormSenda": MultiFormSendaBlock,
  "layoutSenda": LayoutSendaBlock,
  "layoutSendaSections": LayoutSendaSectionsBlock,
  "navbarSimpleSenda": NavbarSimpleSendaBlock,
  "pricingSenda": PricingSendaBlock,
  "faqSenda": FAQSendaBlock,
  "testimonialsSenda": TestimonialsSendaBlockConfig,
  "bloqueIMCSenda": BloqueIMCSendaBlockConfig,
  "appSenda": AppSendaBlockConfig,
}
