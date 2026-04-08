/**
 * Convierte la forma anidada del admin (heading1Desktop, bodyTextMobile, …)
 * en los grupos planos que usa `fontGroupRichTextCss` y los bloques (typography, headingMargins, …).
 * Si el documento sigue en forma antigua (solo `typography`), se devuelve sin cambios.
 */

import type {
  FontGroupHeadingMargins,
  FontGroupLineHeights,
  FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'

export type FontGroupRichTextStyleBlock = {
  fontSize?: string | null
  lineHeight?: string | null
  marginTop?: string | null
  marginBottom?: string | null
}

function styleBlock(raw: unknown): FontGroupRichTextStyleBlock | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  return raw as FontGroupRichTextStyleBlock
}

function trim(s: string | null | undefined): string {
  return (typeof s === 'string' ? s.trim() : '') || ''
}

export type FontGroupWithExpandedRichText = Record<string, unknown> & {
  typography?: FontGroupTypography | null
  typographyMobile?: FontGroupTypography | null
  headingMargins?: FontGroupHeadingMargins | null
  headingMarginsMobile?: FontGroupHeadingMargins | null
  lineHeights?: FontGroupLineHeights | null
  lineHeightsMobile?: FontGroupLineHeights | null
}

/** True si parece documento ya migrado al esquema por encabezado. */
function hasNestedHeadingShape(fg: Record<string, unknown>): boolean {
  return fg.heading1Desktop != null && typeof fg.heading1Desktop === 'object'
}

/** True si solo existe la forma antigua (grupos typography / headingMargins planos). */
function hasLegacyFlatShape(fg: Record<string, unknown>): boolean {
  return fg.typography != null && typeof fg.typography === 'object' && !hasNestedHeadingShape(fg)
}

/**
 * Añade (o sobrescribe) typography*, headingMargins*, lineHeights* a partir de heading*Desktop/Mobile, etc.
 */
export function expandFontGroupRichTextFields<T extends Record<string, unknown>>(fg: T): T & FontGroupWithExpandedRichText {
  const o = fg as Record<string, unknown>
  if (hasLegacyFlatShape(o)) {
    return fg as T & FontGroupWithExpandedRichText
  }
  if (!hasNestedHeadingShape(o)) {
    return fg as T & FontGroupWithExpandedRichText
  }

  const typography: FontGroupTypography = {}
  const typographyMobile: FontGroupTypography = {}
  const headingMargins: FontGroupHeadingMargins = {}
  const headingMarginsMobile: FontGroupHeadingMargins = {}
  const lineHeights: FontGroupLineHeights = {}
  const lineHeightsMobile: FontGroupLineHeights = {}

  const hKeys = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
  for (let i = 0; i < 6; i++) {
    const n = i + 1
    const th = hKeys[i]
    const desk = styleBlock(o[`heading${n}Desktop` as keyof typeof o])
    const mob = styleBlock(o[`heading${n}Mobile` as keyof typeof o])
    const fs = trim(desk?.fontSize)
    if (fs) typography[th] = fs
    const fsm = trim(mob?.fontSize)
    if (fsm) typographyMobile[th] = fsm
    const lh = trim(desk?.lineHeight)
    if (lh) lineHeights[th] = lh
    const lhm = trim(mob?.lineHeight)
    if (lhm) lineHeightsMobile[th] = lhm
    const mt = trim(desk?.marginTop)
    const mb = trim(desk?.marginBottom)
    const mtk = `${th}MarginTop` as keyof FontGroupHeadingMargins
    const mbk = `${th}MarginBottom` as keyof FontGroupHeadingMargins
    if (mt) headingMargins[mtk] = mt
    if (mb) headingMargins[mbk] = mb
    const mtm = trim(mob?.marginTop)
    const mbm = trim(mob?.marginBottom)
    if (mtm) headingMarginsMobile[mtk] = mtm
    if (mbm) headingMarginsMobile[mbk] = mbm
  }

  const bodyDesk = styleBlock(o.bodyTextDesktop)
  const bodyMob = styleBlock(o.bodyTextMobile)
  const listsDesk = styleBlock(o.listsTextDesktop)
  const listsMob = styleBlock(o.listsTextMobile)
  const quoteDesk = styleBlock(o.quoteTextDesktop)
  const quoteMob = styleBlock(o.quoteTextMobile)
  const capDesk = styleBlock(o.captionTextDesktop)
  const capMob = styleBlock(o.captionTextMobile)

  const bfs = trim(bodyDesk?.fontSize)
  if (bfs) typography.body = bfs
  const bfsm = trim(bodyMob?.fontSize)
  if (bfsm) typographyMobile.body = bfsm
  const blh = trim(bodyDesk?.lineHeight)
  if (blh) lineHeights.body = blh
  const blhm = trim(bodyMob?.lineHeight)
  if (blhm) lineHeightsMobile.body = blhm
  const bmt = trim(bodyDesk?.marginTop)
  const bmb = trim(bodyDesk?.marginBottom)
  if (bmt) headingMargins.bodyMarginTop = bmt
  if (bmb) headingMargins.bodyMarginBottom = bmb
  const bmtm = trim(bodyMob?.marginTop)
  const bmbm = trim(bodyMob?.marginBottom)
  if (bmtm) headingMarginsMobile.bodyMarginTop = bmtm
  if (bmbm) headingMarginsMobile.bodyMarginBottom = bmbm

  const lfs = trim(listsDesk?.fontSize)
  if (lfs) typography.lists = lfs
  const lfsm = trim(listsMob?.fontSize)
  if (lfsm) typographyMobile.lists = lfsm
  const llh = trim(listsDesk?.lineHeight)
  if (llh) lineHeights.lists = llh
  const llhm = trim(listsMob?.lineHeight)
  if (llhm) lineHeightsMobile.lists = llhm
  const lmt = trim(listsDesk?.marginTop)
  const lmb = trim(listsDesk?.marginBottom)
  if (lmt) headingMargins.listsMarginTop = lmt
  if (lmb) headingMargins.listsMarginBottom = lmb
  const lmtm = trim(listsMob?.marginTop)
  const lmbm = trim(listsMob?.marginBottom)
  if (lmtm) headingMarginsMobile.listsMarginTop = lmtm
  if (lmbm) headingMarginsMobile.listsMarginBottom = lmbm

  const qfs = trim(quoteDesk?.fontSize)
  if (qfs) typography.quote = qfs
  const qfsm = trim(quoteMob?.fontSize)
  if (qfsm) typographyMobile.quote = qfsm
  const qlh = trim(quoteDesk?.lineHeight)
  if (qlh) lineHeights.quote = qlh
  const qlhm = trim(quoteMob?.lineHeight)
  if (qlhm) lineHeightsMobile.quote = qlhm
  const qmt = trim(quoteDesk?.marginTop)
  const qmb = trim(quoteDesk?.marginBottom)
  if (qmt) headingMargins.quoteMarginTop = qmt
  if (qmb) headingMargins.quoteMarginBottom = qmb
  const qmtm = trim(quoteMob?.marginTop)
  const qmbm = trim(quoteMob?.marginBottom)
  if (qmtm) headingMarginsMobile.quoteMarginTop = qmtm
  if (qmbm) headingMarginsMobile.quoteMarginBottom = qmbm

  const cfs = trim(capDesk?.fontSize)
  if (cfs) typography.caption = cfs
  const cfsm = trim(capMob?.fontSize)
  if (cfsm) typographyMobile.caption = cfsm
  // Interlineado/márgenes de caption en admin: el CSS global aún no los emite (caption hereda de contenedor).

  const out = {
    ...o,
    typography,
    typographyMobile,
    headingMargins,
    headingMarginsMobile,
    lineHeights,
    lineHeightsMobile,
  } as T & FontGroupWithExpandedRichText

  return out
}
