/**
 * Lista de bloques que aparecen en el layout de Pages (admin y frontend).
 *
 * - `null` = Carga TODOS los bloques (útil si no quieres filtrar).
 * - `string[]` = Solo estos bloques aparecen en "Content" → "Layout" al editar una página.
 *
 * Para ver todos los slugs disponibles: src/blocks/configRegistry.ts → ALL_BLOCK_SLUGS_ORDERED.
 */
export const enabledBlockSlugs: string[] | null = [
  'cta1Senda',
  'cta1SendaAlter',
  'cta2Senda',
  'cardsSenda',
  'multiFormSenda',
  'layoutSenda',
  'layoutSendaSections',
  'navbarSimpleSenda',
  'pricingSenda',
  'faqSenda',
  'testimonialsSenda',
  'bloqueIMCSenda',
  'appSenda',
]
