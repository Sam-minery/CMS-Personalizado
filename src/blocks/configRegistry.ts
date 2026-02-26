/**
 * Registro central de bloques para Pages y RenderBlocks.
 * Usa carga perezosa: solo se cargan los configs de los bloques habilitados
 * (enabledBlockSlugs), reduciendo el tiempo de "pulling schema" en run dev.
 *
 * La lista de bloques habilitados se define en: src/projectConfig.ts → enabledBlockSlugs
 */
import type { Block } from 'payload'
import path from 'path'
import { createRequire } from 'module'

import { enabledBlockSlugs } from '@/projectConfig'

import { ENABLED_BLOCKS_BY_SLUG } from './enabledBlocks.generated'
import { BLOCK_LOADER_MANIFEST } from './blockLoaderManifest'

const req = createRequire(import.meta.url)
const requireFromCwd = createRequire(import.meta.url)

/** Orden de slugs para la colección Pages (mantiene orden en admin) */
export const ALL_BLOCK_SLUGS_ORDERED: string[] = [
  'animatedPin3D',
  'archive',
  'backgroundRippleEffect',
  'banner1',
  'banner2',
  'banner3',
  'banner4',
  'banner9',
  'blog1',
  'blog5',
  'blog7',
  'blog9',
  'blogPostHeader1',
  'blogPostHeader2',
  'blogPostHeader3',
  'blogPostHeader5',
  'cta',
  'career3',
  'career4',
  'career5',
  'career6',
  'careerSection1',
  'comparison1',
  'comparison13',
  'contact1',
  'contact5',
  'content',
  'cta1',
  'cta4',
  'cta5',
  'cta9',
  'cta_custom_2',
  'cta2Senda',
  'event1',
  'event3',
  'event4',
  'event6',
  'eventHeader1',
  'eventHeader3',
  'eventHeader4',
  'eventHeader5',
  'eventItemHdr1',
  'eventItemHdr5',
  'eventItemHdr6',
  'eventItemHdr7',
  'faq1',
  'faq2',
  'faq4',
  'faq5',
  'faqSenda',
  'focusCards',
  'footer1',
  'infiniteMovingCards',
  'footer5',
  'formBlock',
  'gallery6',
  'gallery19',
  'gallery27',
  'GlowingStarCard',
  'header44',
  'header48',
  'stickyBanner',
  'layout1',
  'layout5',
  'layout10',
  'layoutSenda',
  'layoutSendaSections',
  'pricingSenda',
  'layout42',
  'layout90',
  'layout132',
  'layout133',
  'layout222',
  'layout239',
  'layout304',
  'layout352',
  'layout395',
  'stats24',
  'cta27',
  'links1',
  'links4',
  'logo1',
  'logo2',
  'logoCloudTemplate',
  'speedTemplate',
  'pricingTemplate',
  'faqTemplate',
  'feature1Template',
  'feature2Template',
  'longContent1',
  'longContent2',
  'longContent3',
  'longContent4',
  'mediaBlock',
  'form_custom_2',
  'multiForm2',
  'multiForm7',
  'navbar1',
  'navbar5',
  'portfolio1',
  'portfolio5',
  'portfolioHeader1',
  'portfolioHeader2',
  'pricing1',
  'pricing5',
  'pulseBeams',
  'spotlight',
  'stats1',
  'stats3',
  'team1',
  'team2',
  'testimonial1',
  'testimonial3',
  'testimonial5',
  'testimonial6',
  'TextRevealCard',
  'timeline1',
  'timeline3',
  'timeline7',
]

/** Todos los slugs disponibles (útil para referencia y validación) */
export const allAvailableSlugs: string[] = [...ALL_BLOCK_SLUGS_ORDERED]

/**
 * Carga el config de un bloque por slug (carga perezosa).
 * Usa BLOCK_LOADER_MANIFEST como fuente de verdad (path + exportName).
 * Intenta require(entry.path) desde este módulo; si falla (p. ej. en bundle de Next),
 * intenta desde process.cwd() + src/blocks para entornos que corren desde raíz.
 */
function loadBlockConfig(slug: string): Block | null {
  const entry = BLOCK_LOADER_MANIFEST[slug]
  if (!entry) return null

  try {
    const mod = req(entry.path) as Record<string, Block>
    return mod?.[entry.exportName] ?? null
  } catch {
    try {
      const relPath = entry.path.replace(/^\.\//, '')
      const absPath = path.join(process.cwd(), 'src', 'blocks', relPath)
      const mod = requireFromCwd(absPath) as Record<string, Block>
      return mod?.[entry.exportName] ?? null
    } catch {
      return null
    }
  }
}

/**
 * Devuelve los block configs habilitados para este proyecto.
 *
 * - Si `enabledBlockSlugs` es un array: se usan los bloques del archivo generado
 *   (enabledBlocks.generated.ts), cargados por imports estáticos. Así Lexical y @/ se resuelven bien en Next.
 * - Si es null: se cargan TODOS los bloques vía require() (arranque más lento; algunos pueden fallar en Next).
 *
 * Tras cambiar la lista en projectConfig, ejecuta: npm run generate:enabled-blocks
 */
export function getEnabledPageBlocks(): Block[] {
  if (enabledBlockSlugs && enabledBlockSlugs.length > 0) {
    const blocks = enabledBlockSlugs
      .map((slug) => ENABLED_BLOCKS_BY_SLUG[slug])
      .filter((b): b is Block => Boolean(b))
    if (blocks.length > 0) return blocks
    console.warn(
      '[configRegistry] No se encontraron bloques en ENABLED_BLOCKS_BY_SLUG. Ejecuta: npm run generate:enabled-blocks',
    )
  }

  const slugsToLoad = enabledBlockSlugs ?? ALL_BLOCK_SLUGS_ORDERED
  const blocks: Block[] = []
  for (const slug of slugsToLoad) {
    const block = loadBlockConfig(slug)
    if (block) blocks.push(block)
  }

  if (enabledBlockSlugs && blocks.length === 0) {
    console.warn(
      '[configRegistry] No se encontraron bloques habilitados. Verifica los slugs en projectConfig.ts. Cargando todos los bloques como fallback.',
    )
    return ALL_BLOCK_SLUGS_ORDERED.map(loadBlockConfig).filter(
      (b): b is Block => Boolean(b),
    )
  }

  return blocks
}
