import type { CSSProperties } from 'react'

/** Atributo `data-*` único por instancia para reglas CSS de ancho responsive (móvil menor a 768px vs desktop). */
export const SENDA_CUSTOM_BREAKOUT_ATTR = 'data-senda-custom-breakout' as const

export function sendaCssEscapeAttrValue(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

const calcWidthRules = (vw: number) =>
  vw >= 100
    ? 'width:100dvw;max-width:none;margin-left:calc(50% - 50dvw);margin-right:calc(50% - 50dvw);'
    : `width:${vw}vw;max-width:100vw;margin-left:calc(50% - ${vw}vw / 2);margin-right:calc(50% - ${vw}vw / 2);`

/** Estilo inline del contenedor “breakout” (mismo ancho en todos los viewports). */
export function sendaCalcBreakoutInlineStyle(vw: number): CSSProperties {
  if (vw >= 100) {
    return {
      width: '100dvw',
      maxWidth: 'none',
      marginLeft: 'calc(50% - 50dvw)',
      marginRight: 'calc(50% - 50dvw)',
      boxSizing: 'border-box',
    }
  }
  return {
    width: `${vw}vw`,
    maxWidth: '100vw',
    marginLeft: `calc(50% - ${vw}vw / 2)`,
    marginRight: `calc(50% - ${vw}vw / 2)`,
    boxSizing: 'border-box',
  }
}

export function sendaBreakoutOnlyBoxSizing(): CSSProperties {
  return { boxSizing: 'border-box' }
}

/**
 * CSS con `@media (max-width: 767px)` y `(min-width: 768px)`.
 * `attrValue` debe ser estable y único por bloque en la página (p. ej. `styleId`).
 */
export function buildSendaCalcBreakoutResponsiveCss(
  attrValue: string,
  desktopVw: number,
  mobileVw: number,
): string {
  const esc = sendaCssEscapeAttrValue(attrValue)
  const attr = SENDA_CUSTOM_BREAKOUT_ATTR
  return `[${attr}="${esc}"]{box-sizing:border-box;}
@media (max-width:767px){[${attr}="${esc}"]{${calcWidthRules(mobileVw)}}}
@media (min-width:768px){[${attr}="${esc}"]{${calcWidthRules(desktopVw)}}}
`
}

const centeredRules = (vw: number) =>
  `width:${vw}vw;max-width:100%;margin-left:auto;margin-right:auto;`

/** Hero SENDA: ancho en vw centrado con `margin: auto` (sin márgenes calc). */
export function sendaCenteredVwBreakoutInlineStyle(vw: number): CSSProperties {
  return {
    width: `${vw}vw`,
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  }
}

export function buildSendaCenteredVwBreakoutResponsiveCss(
  attrValue: string,
  desktopVw: number,
  mobileVw: number,
): string {
  const esc = sendaCssEscapeAttrValue(attrValue)
  const attr = SENDA_CUSTOM_BREAKOUT_ATTR
  return `[${attr}="${esc}"]{box-sizing:border-box;}
@media (max-width:767px){[${attr}="${esc}"]{${centeredRules(mobileVw)}}}
@media (min-width:768px){[${attr}="${esc}"]{${centeredRules(desktopVw)}}}
`
}

/**
 * Porcentaje móvil opcional. `null` = usar el mismo ancho que en desktop en todos los breakpoints.
 */
export function sendaResolveOptionalMobileWidthVw(
  applyCustomWidth: boolean | null | undefined,
  customWidthPercentMobile: number | null | undefined,
): number | null {
  if (applyCustomWidth !== true) return null
  if (
    customWidthPercentMobile == null ||
    typeof customWidthPercentMobile !== 'number' ||
    Number.isNaN(customWidthPercentMobile)
  ) {
    return null
  }
  const clamped = Math.min(100, Math.max(0, customWidthPercentMobile))
  return clamped <= 0 ? 100 : clamped
}
