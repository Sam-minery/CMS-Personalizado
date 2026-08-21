import type { CSSProperties } from 'react'

import { cn } from '@/utilities/ui'

/**
 * Estilo de caja compartido para botones DROP (Navbar, Hero, Layout, CTA, IMC, Pricing).
 * Radio `rounded-xl` (12px) en todos, incluido el Navbar.
 * Tipografía (tamaño, line-height) la aportan los font groups del CMS.
 */
const dropBlockButtonBoxCore =
  'inline-flex items-center justify-center gap-2 rounded-xl whitespace-nowrap shrink-0 font-semibold transition-opacity hover:opacity-90'

/** Navbar DROP (ui/Button o CMSLink con apariencia de botón). */
export const dropBlockButtonPrimitiveClassName = cn(
  dropBlockButtonBoxCore,
  '!rounded-xl !h-auto !min-h-[44px] md:!min-h-[48px] !px-5 md:!px-6 !py-0',
)

/** Hero, Layout, CTA, IMC, Pricing — misma caja y mismo radio que el Navbar. */
export const dropBlockButtonNativeClassName = cn(
  dropBlockButtonBoxCore,
  'rounded-xl min-h-[44px] md:min-h-[48px] px-5 md:px-6 py-2.5',
)

export const DROP_BUTTON_RADIUS_CSS = '0.75rem'

/** CSS inyectado para forzar el radio DROP (p. ej. Navbar). */
export function appendDropInjectedButtonBorderRadius(styles: string[], selector: string): void {
  styles.push(`${selector} { border-radius: ${DROP_BUTTON_RADIUS_CSS} !important; }`)
}

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '') || ''
}

function isPlainColor(value: string): boolean {
  const v = value.trim()
  return /^(#|rgba?\(|hsla?\(|oklch\(|var\()/i.test(v) || (/^[a-z]+$/i.test(v) && !/gradient/i.test(v))
}

/**
 * Fondo de botón DROP: color sólido, o degradado 90° si hay color secundario.
 * Si el campo primario ya trae un `linear-gradient(...)` (datos legacy) y no hay secundario, se respeta.
 */
export function dropButtonBackgroundCss(
  primary: string | null | undefined,
  secondary?: string | null,
  fallback = '#C2005F',
): string {
  const secondarySafe = sanitizeCssColor(secondary)
  const primaryRaw = primary?.trim() || ''
  const primarySafe = sanitizeCssColor(primaryRaw)

  if (secondarySafe) {
    const from = primarySafe && isPlainColor(primaryRaw) ? primarySafe : fallback
    return `linear-gradient(90deg, ${from} 0%, ${secondarySafe} 100%)`
  }
  if (primarySafe) return primarySafe
  return fallback
}

export function dropButtonBackgroundStyle(
  primary: string | null | undefined,
  secondary: string | null | undefined,
  options?: { color?: string | null; fallback?: string },
): CSSProperties {
  const bg = dropButtonBackgroundCss(primary, secondary, options?.fallback)
  const color = options?.color ? sanitizeCssColor(options.color) || undefined : undefined
  const style: CSSProperties = /gradient\(/i.test(bg)
    ? { backgroundImage: bg, backgroundColor: 'transparent' }
    : { backgroundColor: bg }
  if (color) style.color = color
  return style
}
