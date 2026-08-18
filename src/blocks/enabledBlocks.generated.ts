/**
 * GENERADO por scripts/generate-enabled-blocks.ts
 * No editar a mano. La lista de bloques se define en src/projectConfig.ts → enabledBlockSlugs.
 * Después de cambiar projectConfig, ejecuta: npm run generate:enabled-blocks
 */
import type { Block } from 'payload'

import { LayoutDropBlock } from './Layout_Drop/config'
import { CalculadoraIMCDropBlock } from './CalculadoraIMC_Drop/config'
import { LayoutCTADropBlock } from './LayoutCTA_Drop/config'
import { TeamDropBlock } from './Team_Drop/config'
import { CTAAppDropBlock } from './CTAApp_Drop/config'
import { Layout2DropBlock } from './Layout2_DROP/config'
import { FondoDropBlock } from './Fondo_DROP/config'
import { PricingDropBlock } from './Pricing_DROP/config'
import { FAQDropBlock } from './FAQ_DROP/config'

export const ENABLED_BLOCKS_BY_SLUG: Record<string, Block> = {
  "layoutDrop": LayoutDropBlock,
  "calculadoraIMCDrop": CalculadoraIMCDropBlock,
  "layoutCTADrop": LayoutCTADropBlock,
  "teamDrop": TeamDropBlock,
  "ctaAppDrop": CTAAppDropBlock,
  "layout2Drop": Layout2DropBlock,
  "fondoDrop": FondoDropBlock,
  "pricingDrop": PricingDropBlock,
  "faqDrop": FAQDropBlock,
}