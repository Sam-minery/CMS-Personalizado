/**
 * CSS para RichText bajo font-groups (Pricing SENDA, Hero SENDA, etc.).
 * Mismos conceptos que la colección `font-groups`: body vs listas, márgenes, interlineados.
 */

export type FontGroupTypography = {
  h1?: string | null
  h2?: string | null
  h3?: string | null
  h4?: string | null
  h5?: string | null
  h6?: string | null
  body?: string | null
  lists?: string | null
  caption?: string | null
}

export type FontGroupHeadingMargins = {
  h1MarginTop?: string | null
  h1MarginBottom?: string | null
  h2MarginTop?: string | null
  h2MarginBottom?: string | null
  h3MarginTop?: string | null
  h3MarginBottom?: string | null
  h4MarginTop?: string | null
  h4MarginBottom?: string | null
  h5MarginTop?: string | null
  h5MarginBottom?: string | null
  h6MarginTop?: string | null
  h6MarginBottom?: string | null
  bodyMarginTop?: string | null
  bodyMarginBottom?: string | null
  listsMarginTop?: string | null
  listsMarginBottom?: string | null
}

export type FontGroupLineHeights = {
  h1?: string | null
  h2?: string | null
  h3?: string | null
  h4?: string | null
  h5?: string | null
  h6?: string | null
  body?: string | null
  lists?: string | null
}

/** Viewport “móvil” para @media (max-width): por debajo de `md` en Tailwind (768px − 1). */
export const FONT_GROUP_RICHTEXT_MOBILE_MAX = '767px'

/** Textos de la columna derecha del plan Pricing (icono + texto). */
export function planElementTextSelector(planRichtext: string): string {
  return `${planRichtext} .pricing-senda-plan-element-text`
}

export function trimFontGroupValue(v: string | null | undefined): string {
  return (typeof v === 'string' ? v.trim() : '') || ''
}

/** Tamaños de párrafo vs ítems de lista (body / lists). */
export function appendTypographyBodyListSizeRules(
  typo: FontGroupTypography | null | undefined,
  mainRichtext: string,
  planRichtext: string,
  payloadRichtext: string,
  emit: (css: string) => void,
): void {
  const t = (v: string | null | undefined) => (typeof v === 'string' ? v.trim() : '') || ''
  const bodyV = t(typo?.body)
  const listsV = t(typo?.lists)
  const planText = planElementTextSelector(planRichtext)
  if (bodyV && listsV) {
    emit(
      `${mainRichtext} p, ${planRichtext} p, ${payloadRichtext} p, ${planText} { font-size: ${bodyV} !important; }`,
    )
    emit(
      `${mainRichtext} li, ${planRichtext} li, ${payloadRichtext} li { font-size: ${listsV} !important; }`,
    )
    return
  }
  if (bodyV) {
    emit(
      `${mainRichtext} p, ${mainRichtext} li, ${planRichtext} p, ${planRichtext} li, ${payloadRichtext} p, ${payloadRichtext} li, ${planText} { font-size: ${bodyV} !important; }`,
    )
    return
  }
  if (listsV) {
    emit(
      `${mainRichtext} li, ${planRichtext} li, ${payloadRichtext} li { font-size: ${listsV} !important; }`,
    )
  }
}

export function appendFontGroupHeadingMarginRules(
  margins: FontGroupHeadingMargins | null | undefined,
  mainRichtext: string,
  planRichtext: string,
  payloadRichtext: string,
  emit: (css: string) => void,
): void {
  if (!margins) return
  const m = margins
  for (let n = 1; n <= 6; n++) {
    const mtKey = `h${n}MarginTop` as keyof FontGroupHeadingMargins
    const mbKey = `h${n}MarginBottom` as keyof FontGroupHeadingMargins
    const mt = trimFontGroupValue(m[mtKey] as string | null | undefined)
    const mb = trimFontGroupValue(m[mbKey] as string | null | undefined)
    if (!mt && !mb) continue
    const parts: string[] = []
    if (mt) parts.push(`margin-top: ${mt} !important;`)
    if (mb) parts.push(`margin-bottom: ${mb} !important;`)
    emit(
      `${mainRichtext} h${n}, ${planRichtext} h${n}, ${payloadRichtext} h${n} { ${parts.join(' ')} }`,
    )
  }
  // Mismo criterio que párrafos/listas: dos H del mismo nivel seguidos no acumulan márgenes entre sí;
  // el margen marca la separación respecto a otro tipo de bloque (otro nivel, <p>, lista, etc.).
  for (let n = 1; n <= 6; n++) {
    const mtKey = `h${n}MarginTop` as keyof FontGroupHeadingMargins
    const mbKey = `h${n}MarginBottom` as keyof FontGroupHeadingMargins
    const mt = trimFontGroupValue(m[mtKey] as string | null | undefined)
    const mb = trimFontGroupValue(m[mbKey] as string | null | undefined)
    if (!mt && !mb) continue
    for (const root of [mainRichtext, planRichtext, payloadRichtext]) {
      emit(`${root} h${n} + h${n} { margin-top: 0 !important; }`)
      emit(`${root} h${n}:has(+ h${n}) { margin-bottom: 0 !important; }`)
    }
  }
  const bmt = trimFontGroupValue(m.bodyMarginTop)
  const bmb = trimFontGroupValue(m.bodyMarginBottom)
  if (bmt || bmb) {
    const parts: string[] = []
    if (bmt) parts.push(`margin-top: ${bmt} !important;`)
    if (bmb) parts.push(`margin-bottom: ${bmb} !important;`)
    emit(
      `${mainRichtext} p, ${planRichtext} p, ${payloadRichtext} p, ${planElementTextSelector(planRichtext)} { ${parts.join(' ')} }`,
    )
    // Entre párrafos consecutivos (mismo tamaño tipográfico): no sumar márgenes; el ritmo vertical lo da line-height.
    for (const root of [mainRichtext, planRichtext, payloadRichtext]) {
      emit(`${root} p + p { margin-top: 0 !important; }`)
      emit(`${root} p:has(+ p) { margin-bottom: 0 !important; }`)
    }
  }
  const lmt = trimFontGroupValue(m.listsMarginTop)
  const lmb = trimFontGroupValue(m.listsMarginBottom)
  if (lmt || lmb) {
    const parts: string[] = []
    if (lmt) parts.push(`margin-top: ${lmt} !important;`)
    if (lmb) parts.push(`margin-bottom: ${lmb} !important;`)
    const listBlocks = `${mainRichtext} ul, ${mainRichtext} ol, ${planRichtext} ul, ${planRichtext} ol, ${payloadRichtext} ul, ${payloadRichtext} ol`
    emit(`${listBlocks} { ${parts.join(' ')} }`)
    // Listas consecutivas: mismo criterio que párrafos (espacio interno vía line-height en ítems).
    const listAdjacentTop = [
      `${mainRichtext} ul + ul`,
      `${mainRichtext} ul + ol`,
      `${mainRichtext} ol + ul`,
      `${mainRichtext} ol + ol`,
      `${planRichtext} ul + ul`,
      `${planRichtext} ul + ol`,
      `${planRichtext} ol + ul`,
      `${planRichtext} ol + ol`,
      `${payloadRichtext} ul + ul`,
      `${payloadRichtext} ul + ol`,
      `${payloadRichtext} ol + ul`,
      `${payloadRichtext} ol + ol`,
    ].join(', ')
    emit(`${listAdjacentTop} { margin-top: 0 !important; }`)
    const listHasNext = [
      `${mainRichtext} ul:has(+ ul)`,
      `${mainRichtext} ul:has(+ ol)`,
      `${mainRichtext} ol:has(+ ul)`,
      `${mainRichtext} ol:has(+ ol)`,
      `${planRichtext} ul:has(+ ul)`,
      `${planRichtext} ul:has(+ ol)`,
      `${planRichtext} ol:has(+ ul)`,
      `${planRichtext} ol:has(+ ol)`,
      `${payloadRichtext} ul:has(+ ul)`,
      `${payloadRichtext} ul:has(+ ol)`,
      `${payloadRichtext} ol:has(+ ul)`,
      `${payloadRichtext} ol:has(+ ol)`,
    ].join(', ')
    emit(`${listHasNext} { margin-bottom: 0 !important; }`)
  }
}

export function appendFontGroupLineHeightRules(
  lineHeights: FontGroupLineHeights | null | undefined,
  mainRichtext: string,
  planRichtext: string,
  payloadRichtext: string,
  emit: (css: string) => void,
): void {
  if (!lineHeights) return
  const lh = lineHeights
  for (let n = 1; n <= 6; n++) {
    const key = `h${n}` as keyof FontGroupLineHeights
    const v = trimFontGroupValue(lh[key] as string | null | undefined)
    if (!v) continue
    emit(
      `${mainRichtext} h${n}, ${planRichtext} h${n}, ${payloadRichtext} h${n} { line-height: ${v} !important; }`,
    )
  }
  const bodyLh = trimFontGroupValue(lh.body)
  if (bodyLh) {
    emit(
      `${mainRichtext} p, ${planRichtext} p, ${payloadRichtext} p, ${planElementTextSelector(planRichtext)} { line-height: ${bodyLh} !important; }`,
    )
  }
  const listsLh = trimFontGroupValue(lh.lists)
  if (listsLh) {
    emit(
      `${mainRichtext} ul, ${mainRichtext} ol, ${mainRichtext} li, ${planRichtext} ul, ${planRichtext} ol, ${planRichtext} li, ${payloadRichtext} ul, ${payloadRichtext} ol, ${payloadRichtext} li { line-height: ${listsLh} !important; }`,
    )
  }
}
