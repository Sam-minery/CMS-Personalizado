/**
 * GENERADO por scripts/generate-enabled-blocks.ts
 * No editar a mano. La lista de bloques se define en src/projectConfig.ts → enabledBlockSlugs.
 * Después de cambiar projectConfig, ejecuta: npm run generate:enabled-blocks
 */
import type { Block } from 'payload'

import { LayoutDropBlock } from './Layout_Drop/config'

export const ENABLED_BLOCKS_BY_SLUG: Record<string, Block> = {
  "layoutDrop": LayoutDropBlock,
}
