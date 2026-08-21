'use client'

import React from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import type { Page, Post } from '@/payload-types'
import { expandFontGroupRichTextFields } from '@/utilities/expandFontGroupRichTextFields'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import {
  SENDA_CUSTOM_BREAKOUT_ATTR,
  buildSendaCalcBreakoutResponsiveCss,
  sendaBreakoutOnlyBoxSizing,
  sendaCalcBreakoutInlineStyle,
  sendaResolveOptionalMobileWidthVw,
} from '@/utilities/sendaCustomWidthBreakout'
import {
  dropBlockButtonNativeClassName,
  dropButtonBackgroundStyle,
} from '@/utilities/dropBlockButtonClasses'
import { cn } from '@/utilities/ui'
import { useGoogleFont } from '@/utilities/useGoogleFont'

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

const FONT_GROUP_VARIANT_CSS: Record<string, { weight: string; style: string }> = {
  regular: { weight: '400', style: 'normal' },
  regularItalic: { weight: '400', style: 'italic' },
  medium: { weight: '500', style: 'normal' },
  mediumItalic: { weight: '500', style: 'italic' },
  semibold: { weight: '600', style: 'normal' },
  semiboldItalic: { weight: '600', style: 'italic' },
  bold: { weight: '700', style: 'normal' },
  boldItalic: { weight: '700', style: 'italic' },
  light: { weight: '300', style: 'normal' },
  lightItalic: { weight: '300', style: 'italic' },
  heavy: { weight: '800', style: 'normal' },
  heavyItalic: { weight: '800', style: 'italic' },
}

type FontGroupFontEntry = { font?: FontFile | number; variant?: string }

type FontGroupData = {
  fontFamilyName?: string | null
  fonts?: FontGroupFontEntry[] | null
  typography?: FontGroupTypography | null
  typographyMobile?: FontGroupTypography | null
  headingMargins?: FontGroupHeadingMargins | null
  headingMarginsMobile?: FontGroupHeadingMargins | null
  lineHeights?: FontGroupLineHeights | null
  lineHeightsMobile?: FontGroupLineHeights | null
}

function normalizePricingDropFontGroup(raw: unknown): FontGroupData | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const o = raw as Record<string, unknown>
  if (
    'value' in o &&
    o.value &&
    typeof o.value === 'object' &&
    !Array.isArray(o.value) &&
    (o.relationTo === 'font-groups' || o.relationTo === 'fontGroups')
  ) {
    return expandFontGroupRichTextFields(o.value as Record<string, unknown>) as FontGroupData
  }
  return expandFontGroupRichTextFields(o) as FontGroupData
}

type MediaLike = {
  url?: string | null
  alt?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
}

type LinkType = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: Page | Post | number | string
  } | null
  url?: string | null
  label?: string | null
}

export type PricingDropBlockType = {
  blockName?: string
  blockType?: 'pricingDrop'
  anchorId?: string | null
  tags?: Array<{
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    backgroundColor?: string | null
    textColor?: string | null
    id?: string | null
  }> | null
  mainContent?: DefaultTypedEditorState | null
  mainStyle?: {
    textColor?: string | null
    boldTextColor?: string | null
  } | null
  backgroundImage?: MediaLike | null
  backgroundColor?: string | null
  enableAnimatedBg?: boolean | null
  animatedAccentColor?: string | null
  numberedItems?: Array<{
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    iconBackgroundColor?: string | null
    textColor?: string | null
    boldTextColor?: string | null
    id?: string | null
  }> | null
  product?: {
    backgroundColor?: string | null
    columns?: Array<{
      icon?: IconGroup | null
      iconBackgroundColor?: string | null
      title?: DefaultTypedEditorState | null
      items?: Array<{
        product?: DefaultTypedEditorState | null
        price?: DefaultTypedEditorState | null
        tag?: DefaultTypedEditorState | null
        tagBackgroundColor?: string | null
        tagTextColor?: string | null
        priceTextColor?: string | null
        id?: string | null
      }> | null
      totalLabel?: DefaultTypedEditorState | null
      totalPrice?: DefaultTypedEditorState | null
      totalPriceColor?: string | null
      id?: string | null
    }> | null
    purchase?: {
      previousPrice?: DefaultTypedEditorState | null
      currentPrice?: DefaultTypedEditorState | null
      description?: DefaultTypedEditorState | null
      backgroundColor?: string | null
      button?: {
        label?: string | null
        iconSVG?: string | null
        backgroundColor?: string | null
        backgroundColorSecondary?: string | null
        textColor?: string | null
        link?: LinkType | null
      } | null
    } | null
    footerItems?: Array<{
      icon?: IconGroup | null
      content?: DefaultTypedEditorState | null
      id?: string | null
    }> | null
  } | null
  finePrint?: DefaultTypedEditorState | null
  finePrintColor?: string | null
  stats?: Array<{
    backgroundColor?: string | null
    iconBackgroundColor?: string | null
    icon?: IconGroup | null
    highlight?: DefaultTypedEditorState | null
    content?: DefaultTypedEditorState | null
    textColor?: string | null
    boldTextColor?: string | null
    id?: string | null
  }> | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
  blockIndex?: number
}

const NAVY = '#101835'
const ACCENT = '#a1004a'

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'pricing-drop'
}

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '') || ''
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string } }
  }
  const url = m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.url || ''
  return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
}

function getIconAlt(icon?: IconGroup | null): string {
  if (icon?.mediaImage && typeof icon.mediaImage === 'object') {
    return icon.mediaImage.alt || icon.alt || 'Icono'
  }
  return icon?.alt || 'Icono'
}

/** Oscurece un color CSS (hex preferido) para numeración. */
function darkenColor(color: string, amount = 0.35): string {
  const c = sanitizeCssColor(color)
  const hex = c.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
  if (!hex) return c || ACCENT

  let h = hex[1]
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const mix = (channel: number) => Math.round(channel * (1 - amount))
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(mix(r))}${toHex(mix(g))}${toHex(mix(b))}`
}

function hasRichText(data?: DefaultTypedEditorState | null): boolean {
  if (!data || typeof data !== 'object') return false
  const root = (data as { root?: { children?: unknown[] } }).root
  if (!Array.isArray(root?.children) || root.children.length === 0) return false

  const hasVisibleText = (nodes: unknown[]): boolean => {
    for (const node of nodes) {
      if (!node || typeof node !== 'object') continue
      const n = node as { text?: string; children?: unknown[] }
      if (typeof n.text === 'string' && n.text.trim().length > 0) return true
      if (Array.isArray(n.children) && hasVisibleText(n.children)) return true
    }
    return false
  }

  return hasVisibleText(root.children)
}

function IconMedia({
  icon,
  className,
  imgClassName,
}: {
  icon?: IconGroup | null
  className?: string
  imgClassName?: string
}) {
  if (!icon) return null

  const useMedia = icon.useMedia !== false && icon.mediaImage
  const src = useMedia ? getMediaUrlSafe(icon.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <img src={src} alt={getIconAlt(icon)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  if (useMedia) return null

  const svg = icon.iconSVG && String(icon.iconSVG).trim() ? sanitizeSVG(icon.iconSVG) : ''
  if (!svg) return null
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden
    />
  )
}

function RichScope({
  scopeClass,
  textColor,
  boldTextColor,
  className,
  children,
}: {
  scopeClass: string
  textColor?: string | null
  boldTextColor?: string | null
  className?: string
  children: React.ReactNode
}) {
  const color = sanitizeCssColor(textColor)
  const bold = sanitizeCssColor(boldTextColor)
  return (
    <div
      className={cn(
        scopeClass,
        'pricing-drop-richtext [&_p]:m-0 [&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_h4]:m-0 [&_h5]:m-0 [&_h6]:m-0',
        className,
      )}
      style={
        {
          ...(color ? { color, ['--pd-text' as string]: color } : {}),
          ...(bold ? { ['--pd-bold' as string]: bold } : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

const SPARKLE_PATH =
  'M12 1.1c.38 4.55 2.95 7.12 7.5 7.5-4.55.38-7.12 2.95-7.5 7.5-.38-4.55-2.95-7.12-7.5-7.5 4.55-.38 7.12-2.95 7.5-7.5Z'

function Sparkle({
  size,
  opacity,
  className,
}: {
  size: number
  opacity: number
  className?: string
}) {
  return (
    <svg
      className={cn('absolute', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      opacity={opacity}
      aria-hidden
    >
      <path d={SPARKLE_PATH} />
    </svg>
  )
}

function AnimatedOrbit({ className }: { className?: string }) {
  return (
    <svg
      className={cn('pricing-drop-orbit h-full w-full opacity-55', className)}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
    >
      <circle
        cx="200"
        cy="200"
        r="168"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeDasharray="11 8"
        opacity="0.48"
      />
      <g transform="translate(306 72) scale(0.78)" fill="currentColor" opacity="0.44">
        <path d={SPARKLE_PATH} />
      </g>
      <g transform="translate(52 232) scale(0.62)" fill="currentColor" opacity="0.34">
        <path d={SPARKLE_PATH} />
      </g>
      <g transform="translate(328 268) scale(0.52)" fill="currentColor" opacity="0.3">
        <path d={SPARKLE_PATH} />
      </g>
      <g transform="translate(78 92) scale(0.42)" fill="currentColor" opacity="0.26">
        <path d={SPARKLE_PATH} />
      </g>
    </svg>
  )
}

export const PricingDropBlock: React.FC<PricingDropBlockType> = (props) => {
  const {
    anchorId,
    blockIndex = 0,
    tags,
    mainContent,
    mainStyle,
    backgroundImage,
    backgroundColor,
    enableAnimatedBg,
    animatedAccentColor,
    numberedItems,
    product,
    finePrint,
    finePrintColor,
    stats,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
  } = props

  const anchorSlug = sanitizeAnchorId(anchorId)
  const styleId = `pricing-drop-${anchorSlug}-${blockIndex}`
  const sectionId = anchorSlug

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizePricingDropFontGroup(fontGroup)
      : null

  const fontGroupTypographyActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename ? customFontFileObj.filename.replace(/\.[^.]+$/, '') : undefined)

  const getFontFamily = () => {
    if (fontGroupTypographyActive && fontGroupObj?.fontFamilyName) {
      return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
    }
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }

  const selectedFontFamily = getFontFamily()
  useGoogleFont(fontGroupTypographyActive || useCustomFont ? undefined : selectedFontFamily)

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    Boolean(fontFileUrl) && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildFontStyles = () => {
    const styles: string[] = []
    const sel = `[data-pricing-drop="${styleId}"]`
    const mainRichtext = `${sel} .pricing-drop-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`

    if (fontGroupTypographyActive && fontGroupObj?.fontFamilyName) {
      const familyName = fontGroupObj.fontFamilyName.replace(/"/g, '\\"')
      for (const entry of fontGroupObj.fonts || []) {
        const font = entry?.font
        if (!font || typeof font === 'number') continue
        const url = font.url
        if (!url) continue
        const fontUrl = getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1')
        const variant = entry.variant || 'regular'
        const { weight, style } = FONT_GROUP_VARIANT_CSS[variant] ?? {
          weight: '400',
          style: 'normal',
        }
        const formatMatch = fontUrl.match(/\.(woff2?|ttf|otf)(\?.*)?$/i)
        if (!formatMatch) continue
        const ext = formatMatch[1].toLowerCase()
        const format =
          ext === 'woff2'
            ? 'woff2'
            : ext === 'woff'
              ? 'woff'
              : ext === 'ttf'
                ? 'truetype'
                : 'opentype'
        styles.push(`
          @font-face {
            font-family: "${familyName}";
            src: url("${fontUrl}") format("${format}");
            font-weight: ${weight};
            font-style: ${style};
            font-display: swap;
          }
        `)
      }

      const fontValue = `"${familyName}"`
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )

      const typo = fontGroupObj.typography
      if (typo) {
        if (typo.h1)
          styles.push(
            `${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${typo.h1} !important; }`,
          )
        if (typo.h2)
          styles.push(
            `${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${typo.h2} !important; }`,
          )
        if (typo.h3)
          styles.push(
            `${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${typo.h3} !important; }`,
          )
        if (typo.h4)
          styles.push(
            `${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${typo.h4} !important; }`,
          )
        if (typo.h5)
          styles.push(
            `${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${typo.h5} !important; }`,
          )
        if (typo.h6)
          styles.push(
            `${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${typo.h6} !important; }`,
          )
        appendTypographyBodyListSizeRules(typo, mainRichtext, planRichtext, payloadRichtext, (rule) =>
          styles.push(rule),
        )
        if (typo.caption) {
          styles.push(
            `${mainRichtext} .caption, ${payloadRichtext} .caption { font-size: ${typo.caption} !important; }`,
          )
          styles.push(
            `${mainRichtext} p .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${typo.caption} !important; }`,
          )
          styles.push(`${sel} [data-text-size="caption"] { font-size: ${typo.caption} !important; }`)
        }
      }

      const typoMob = fontGroupObj.typographyMobile
      if (typoMob) {
        const mobRules: string[] = []
        const t = (v: string | null | undefined) => (typeof v === 'string' ? v.trim() : '') || ''
        if (t(typoMob.h1))
          mobRules.push(
            `${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${t(typoMob.h1)} !important; }`,
          )
        if (t(typoMob.h2))
          mobRules.push(
            `${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${t(typoMob.h2)} !important; }`,
          )
        if (t(typoMob.h3))
          mobRules.push(
            `${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${t(typoMob.h3)} !important; }`,
          )
        if (t(typoMob.h4))
          mobRules.push(
            `${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${t(typoMob.h4)} !important; }`,
          )
        if (t(typoMob.h5))
          mobRules.push(
            `${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${t(typoMob.h5)} !important; }`,
          )
        if (t(typoMob.h6))
          mobRules.push(
            `${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${t(typoMob.h6)} !important; }`,
          )
        appendTypographyBodyListSizeRules(typoMob, mainRichtext, planRichtext, payloadRichtext, (rule) =>
          mobRules.push(rule),
        )
        const capM = t(typoMob.caption)
        if (capM) {
          mobRules.push(
            `${mainRichtext} .caption, ${payloadRichtext} .caption { font-size: ${capM} !important; }`,
          )
          mobRules.push(
            `${mainRichtext} p .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${capM} !important; }`,
          )
          mobRules.push(`${sel} [data-text-size="caption"] { font-size: ${capM} !important; }`)
        }
        if (mobRules.length > 0) {
          styles.push(
            `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) {\n${mobRules.join('\n')}\n}`,
          )
        }
      }

      appendFontGroupHeadingMarginRulesResponsive(
        fontGroupObj.headingMargins,
        fontGroupObj.headingMarginsMobile,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )
      appendFontGroupLineHeightRulesResponsive(
        fontGroupObj.lineHeights,
        fontGroupObj.lineHeightsMobile,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )

      const weightMap: Record<string, string> = {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        heavy: '800',
      }
      for (const [key, w] of Object.entries(weightMap)) {
        styles.push(`${sel} [data-text-weight="${key}"] { font-weight: ${w} !important; }`)
        styles.push(
          `${mainRichtext} [data-text-weight="${key}"], ${payloadRichtext} [data-text-weight="${key}"] { font-weight: ${w} !important; }`,
        )
      }
    } else if (useCustomFont && fontFileUrl && customFontFamilyName && isValidFontFile) {
      const familyCss = customFontFamilyName.replace(/"/g, '\\"')
      styles.push(`
        @font-face {
          font-family: "${familyCss}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `)
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span { font-family: "${familyCss}" !important; }`,
      )
    } else if (selectedFontFamily) {
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span { font-family: ${selectedFontFamily} !important; }`,
      )
    }

    return styles.join('\n')
  }

  const bgImageUrl = getMediaUrlSafe(backgroundImage)
  const blockBg = sanitizeCssColor(backgroundColor) || '#ffffff'
  const showAnimatedBg = enableAnimatedBg === true
  const animAccent = sanitizeCssColor(animatedAccentColor) || ACCENT
  const showDesktopDecor = Boolean(bgImageUrl) || showAnimatedBg
  const sectionRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!showAnimatedBg) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let raf = 0
    const applyParallax = () => {
      raf = 0
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const delta = rect.top + rect.height / 2 - window.innerHeight / 2
      el.style.setProperty('--pd-para-slow', `${delta * 0.035}px`)
      el.style.setProperty('--pd-para-mid', `${delta * 0.07}px`)
      el.style.setProperty('--pd-para-fast', `${delta * 0.13}px`)
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(applyParallax)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    applyParallax()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [showAnimatedBg])
  const productBg = sanitizeCssColor(product?.backgroundColor) || '#ffffff'
  const purchase = product?.purchase
  const purchaseBg = sanitizeCssColor(purchase?.backgroundColor) || '#faf7f8'
  const btn = purchase?.button
  const btnLabel = btn?.label?.trim() || 'Empezar ahora'
  const btnFg = sanitizeCssColor(btn?.textColor) || '#ffffff'
  const btnStyle = dropButtonBackgroundStyle(btn?.backgroundColor, btn?.backgroundColorSecondary, {
    color: btnFg,
    fallback: ACCENT,
  })
  const btnIconSvg =
    btn?.iconSVG && String(btn.iconSVG).trim() ? sanitizeSVG(btn.iconSVG) : ''
  const hasBtnLink = Boolean(
    btn?.link &&
      ((btn.link.type === 'custom' && btn.link.url) ||
        (btn.link.type === 'reference' && btn.link.reference?.value)),
  )

  const tagList = Array.isArray(tags) ? tags.filter((t) => hasRichText(t?.content)) : []
  const numbered = Array.isArray(numberedItems) ? numberedItems.slice(0, 3) : []
  const columns = Array.isArray(product?.columns) ? product!.columns!.slice(0, 2) : []
  const footerItems = Array.isArray(product?.footerItems)
    ? product!.footerItems!.slice(0, 2)
    : []
  const statsList = Array.isArray(stats) ? stats.slice(0, 3) : []

  const hasPurchase =
    Boolean(purchase) &&
    (hasRichText(purchase?.previousPrice) ||
      hasRichText(purchase?.currentPrice) ||
      hasRichText(purchase?.description) ||
      Boolean(btn?.label?.trim()))
  const hasPurchasePrev = hasRichText(purchase?.previousPrice)
  const hasPurchaseCurrent = hasRichText(purchase?.currentPrice)
  const hasPurchaseDesc = hasRichText(purchase?.description)
  const hasProductCard =
    columns.length > 0 || hasPurchase || footerItems.length > 0

  const ButtonInner = (
    <>
      <span>{btnLabel}</span>
      {btnIconSvg ? (
        <span
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full"
          dangerouslySetInnerHTML={{ __html: btnIconSvg }}
          aria-hidden
        />
      ) : null}
    </>
  )

  const buttonClassName = cn(
    'pricing-drop-btn w-full',
    dropBlockButtonNativeClassName,
  )

  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const pdCustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const pdCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(
    applyCustomWidth,
    customWidthPercentMobile,
  )

  const pdBreakoutCss =
    pdCustomWidthVw != null && pdCustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, pdCustomWidthVw, pdCustomWidthMobileVw)
      : ''

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      data-pricing-drop={styleId}
      className={cn(
        'pricing-drop relative w-full',
        pdCustomWidthVw != null ? 'overflow-x-clip' : 'overflow-hidden',
      )}
      style={
        {
          backgroundColor: blockBg,
          ...fontStyle,
          ['--pd-anim-accent' as string]: animAccent,
        } as React.CSSProperties
      }
    >
      <style>{`
        [data-pricing-drop="${styleId}"] .pricing-drop-richtext strong,
        [data-pricing-drop="${styleId}"] .pricing-drop-richtext b {
          color: var(--pd-bold, inherit) !important;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-tag .payload-richtext,
        [data-pricing-drop="${styleId}"] .pricing-drop-tag .payload-richtext p {
          font-size: inherit;
          line-height: inherit;
          margin: 0;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-prev .payload-richtext,
        [data-pricing-drop="${styleId}"] .pricing-drop-current .payload-richtext,
        [data-pricing-drop="${styleId}"] .pricing-drop-prev .payload-richtext :is(p, h1, h2, h3, h4, h5, h6),
        [data-pricing-drop="${styleId}"] .pricing-drop-current .payload-richtext :is(p, h1, h2, h3, h4, h5, h6) {
          width: max-content;
          max-width: 100%;
        }
        ${
          fontGroupTypographyActive
            ? ''
            : `
        [data-pricing-drop="${styleId}"] .pricing-drop-main {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 400;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-main .payload-richtext :is(h1, h2, h3, h4, h5, h6) {
          font-size: clamp(1.5rem, 2.4vw, 2.25rem);
          line-height: 1.2;
          font-weight: 700;
          margin: 0 0 0.75rem;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-main .payload-richtext p {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 400;
          margin: 0;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-main .payload-richtext p + p {
          margin-top: 0.75rem;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-num-text {
          font-size: 0.95rem;
          line-height: 1.45;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-col-title {
          font-size: 0.95rem;
          line-height: 1.3;
          font-weight: 600;
          text-align: left;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-product {
          font-size: 0.875rem;
          line-height: 1.35;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-price {
          font-size: 0.875rem;
          line-height: 1.35;
          font-weight: 600;
          text-align: right;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-tag .payload-richtext,
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-tag .payload-richtext p {
          font-size: 0.7rem;
          line-height: 1.2;
          margin: 0;
          font-weight: 600;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-total-label {
          font-size: 0.875rem;
          font-weight: 600;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-total-price {
          font-size: 1rem;
          font-weight: 700;
          text-align: right;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-prev {
          font-size: 0.875rem;
          text-decoration: line-through;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-current {
          font-size: clamp(1.5rem, 2vw, 1.85rem);
          font-weight: 800;
          line-height: 1.1;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-desc {
          font-size: 0.75rem;
          line-height: 1.35;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-fine {
          font-size: 0.75rem;
          line-height: 1.4;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-stat-highlight {
          font-size: 1.25rem;
          line-height: 1.2;
          font-weight: 700;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-stat-text {
          font-size: 0.875rem;
          line-height: 1.35;
        }
        `
        }
        ${
          fontGroupTypographyActive
            ? `
        [data-pricing-drop="${styleId}"] .pricing-drop-col-title {
          text-align: left;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-price,
        [data-pricing-drop="${styleId}"] .pricing-drop-total-price {
          text-align: right;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-prev {
          text-decoration: line-through;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-main .payload-richtext :is(h1, h2, h3, h4, h5, h6) {
          margin: 0 0 0.75rem;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-main .payload-richtext p {
          margin: 0;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-main .payload-richtext p + p {
          margin-top: 0.75rem;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-tag .payload-richtext,
        [data-pricing-drop="${styleId}"] .pricing-drop-cmp-tag .payload-richtext p {
          margin: 0;
        }
        `
            : ''
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-bg-desktop {
          display: none;
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-bg-mobile {
          display: block;
        }
        @media (min-width: 1024px) {
          [data-pricing-drop="${styleId}"] .pricing-drop-bg-desktop {
            display: block;
          }
          [data-pricing-drop="${styleId}"] .pricing-drop-bg-mobile {
            display: none;
          }
        }
        @keyframes pricing-drop-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        [data-pricing-drop="${styleId}"] .pricing-drop-orbit {
          transform-origin: 50% 50%;
        }
        @media (min-width: 1024px) {
          [data-pricing-drop="${styleId}"] .pricing-drop-orbit {
            animation: pricing-drop-orbit-spin 42s linear infinite;
            will-change: transform;
          }
          [data-pricing-drop="${styleId}"] .pricing-drop-sparkle-slow {
            transform: translate3d(0, var(--pd-para-slow, 0px), 0);
            will-change: transform;
          }
          [data-pricing-drop="${styleId}"] .pricing-drop-sparkle-mid {
            transform: translate3d(0, var(--pd-para-mid, 0px), 0);
            will-change: transform;
          }
          [data-pricing-drop="${styleId}"] .pricing-drop-sparkle-fast {
            transform: translate3d(0, var(--pd-para-fast, 0px), 0);
            will-change: transform;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-pricing-drop="${styleId}"] .pricing-drop-orbit {
            animation: none;
          }
          [data-pricing-drop="${styleId}"] .pricing-drop-sparkle-slow,
          [data-pricing-drop="${styleId}"] .pricing-drop-sparkle-mid,
          [data-pricing-drop="${styleId}"] .pricing-drop-sparkle-fast {
            transform: none;
          }
        }
        ${buildFontStyles()}
        ${pdBreakoutCss}
      `}</style>

      {/* Fondo desktop: animación detrás + PNG con transparencia */}
      {showDesktopDecor ? (
        <div
          className="pricing-drop-bg-desktop pointer-events-none absolute inset-0 z-0 overflow-hidden"
          aria-hidden
          style={{ color: animAccent }}
        >
          {showAnimatedBg ? (
            <div className="absolute inset-0 opacity-70">
              <div className="pricing-drop-sparkle-slow absolute inset-0">
                <Sparkle size={28} opacity={0.32} className="left-[16%] top-[18%]" />
                <Sparkle size={16} opacity={0.2} className="left-[70%] top-[64%]" />
                <Sparkle size={22} opacity={0.16} className="left-[8%] top-[62%]" />
              </div>
              <div className="pricing-drop-sparkle-mid absolute inset-0">
                <Sparkle size={18} opacity={0.4} className="left-[26%] top-[52%]" />
                <Sparkle size={24} opacity={0.26} className="left-[62%] top-[16%]" />
                <Sparkle size={12} opacity={0.48} className="left-[78%] top-[40%]" />
                <Sparkle size={14} opacity={0.22} className="left-[48%] top-[78%]" />
              </div>
              <div className="pricing-drop-sparkle-fast absolute inset-0">
                <Sparkle size={9} opacity={0.55} className="left-[20%] top-[36%]" />
                <Sparkle size={13} opacity={0.28} className="left-[58%] top-[70%]" />
                <Sparkle size={17} opacity={0.18} className="left-[82%] top-[24%]" />
                <Sparkle size={8} opacity={0.42} className="left-[12%] top-[74%]" />
                <Sparkle size={11} opacity={0.3} className="left-[72%] top-[52%]" />
              </div>
              <div className="absolute left-1/2 top-1/2 aspect-square h-[82%] max-w-[min(62%,540px)] -translate-x-1/2 -translate-y-1/2">
                <AnimatedOrbit />
              </div>
            </div>
          ) : null}
          {bgImageUrl ? (
            <img
              src={bgImageUrl}
              alt=""
              className="absolute left-1/2 top-1/2 z-[1] h-[70%] w-auto max-w-[56%] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          ) : null}
        </div>
      ) : null}

      <div
        className={cn(
          'relative z-10 min-w-0 py-10 lg:py-14',
          pdCustomWidthVw == null
            ? 'mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-32 xl:px-40 2xl:px-48'
            : 'box-border w-full max-w-none overflow-x-visible px-0',
        )}
        {...(pdCustomWidthVw != null && pdCustomWidthMobileVw != null
          ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
          : {})}
        style={
          pdCustomWidthVw == null
            ? undefined
            : pdCustomWidthMobileVw != null
              ? sendaBreakoutOnlyBoxSizing()
              : sendaCalcBreakoutInlineStyle(pdCustomWidthVw)
        }
      >
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-x-5 lg:gap-y-8">
          {/* Columna izquierda (móvil: fondo hasta arriba de la tabla) */}
          <div className="relative flex flex-col gap-5 lg:col-span-6 lg:gap-6">
            {/* Móvil: imagen + círculo/sparkles estáticos (sin giro ni parallax) */}
            {showDesktopDecor ? (
              <div
                className="pricing-drop-bg-mobile pointer-events-none absolute top-0 z-0 overflow-hidden"
                style={{
                  // Hasta el borde superior de la card producto (cubre el gap-8 móvil)
                  bottom: '-2rem',
                  left: '50%',
                  width: '100vw',
                  maxWidth: '100vw',
                  transform: 'translateX(-50%)',
                  color: animAccent,
                }}
                aria-hidden
              >
                {showAnimatedBg ? (
                  <div className="absolute inset-0 opacity-70">
                    <div className="absolute inset-0">
                      <Sparkle size={22} opacity={0.28} className="right-[8%] top-[12%]" />
                      <Sparkle size={14} opacity={0.18} className="right-[42%] top-[58%]" />
                    </div>
                    <div className="absolute inset-0">
                      <Sparkle size={16} opacity={0.38} className="right-[18%] top-[36%]" />
                      <Sparkle size={20} opacity={0.22} className="right-[4%] top-[68%]" />
                      <Sparkle size={10} opacity={0.45} className="right-[36%] top-[20%]" />
                    </div>
                    <div className="absolute inset-0">
                      <Sparkle size={8} opacity={0.5} className="right-[28%] top-[48%]" />
                      <Sparkle size={12} opacity={0.26} className="right-[6%] top-[26%]" />
                      <Sparkle size={9} opacity={0.34} className="right-[22%] top-[76%]" />
                    </div>
                    <div className="absolute right-0 top-1/2 aspect-square h-[88%] max-w-[78%] translate-x-[10%] -translate-y-1/2">
                      <AnimatedOrbit />
                    </div>
                  </div>
                ) : null}
                {bgImageUrl ? (
                  <img
                    src={bgImageUrl}
                    alt=""
                    className="absolute right-0 top-1/2 z-[1] h-[78%] w-auto max-w-[72%] -translate-y-1/2 object-contain object-right"
                  />
                ) : null}
                {bgImageUrl ? (
                  <div
                    className="absolute inset-0 z-[2]"
                    style={{
                      background: [
                        `linear-gradient(90deg, ${blockBg} 0%, ${blockBg} 22%, transparent 58%)`,
                        `linear-gradient(180deg, transparent 52%, ${blockBg} 96%)`,
                      ].join(', '),
                    }}
                  />
                ) : null}
              </div>
            ) : null}

            <div className="relative z-[1] flex flex-col gap-5 lg:gap-6">
              {/* Tags */}
              {tagList.length > 0 ? (
                <div className="flex flex-wrap items-center gap-2">
                  {tagList.map((tag, i) => {
                    const tagBg = sanitizeCssColor(tag.backgroundColor) || '#fce4ec'
                    const tagFg = sanitizeCssColor(tag.textColor) || ACCENT
                    return (
                      <div
                        key={tag.id || `tag-${i}`}
                        className={cn(
                          'pricing-drop-tag inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1 leading-none',
                          !fontGroupTypographyActive && 'text-sm',
                        )}
                        style={{
                          backgroundColor: tagBg,
                          color: tagFg,
                        }}
                      >
                        <IconMedia
                          icon={tag.icon}
                          className="h-[1em] w-[1em] shrink-0"
                          imgClassName="h-full w-full"
                        />
                        <RichScope
                          scopeClass={`pd-tag-${i}`}
                          textColor={tagFg}
                          className="min-w-0"
                        >
                          {hasRichText(tag.content) ? (
                            <RichText
                              data={tag.content!}
                              enableGutter={false}
                              enableProse={false}
                            />
                          ) : null}
                        </RichScope>
                      </div>
                    )
                  })}
                </div>
              ) : null}

              {/* Texto principal */}
              {hasRichText(mainContent) ? (
                <RichScope
                  scopeClass="pricing-drop-main"
                  textColor={mainStyle?.textColor || NAVY}
                  boldTextColor={mainStyle?.boldTextColor || ACCENT}
                  className="lg:max-w-[32rem] xl:max-w-[36rem]"
                >
                  <RichText data={mainContent!} enableGutter={false} enableProse={false} />
                </RichScope>
              ) : null}
            </div>

            {/* Numerados */}
            {numbered.length > 0 ? (
              <ul className="relative z-[1] flex flex-col gap-4">
                {numbered.map((item, index) => {
                  const iconBg = sanitizeCssColor(item.iconBackgroundColor) || '#f8bbd0'
                  const numColor = darkenColor(iconBg, 0.4)
                  return (
                    <li key={item.id || `num-${index}`} className="flex items-center">
                      <div className="flex shrink-0 items-center gap-1.5">
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
                          style={{ backgroundColor: iconBg, color: numColor }}
                        >
                          {index + 1}
                        </span>
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full"
                          style={{ backgroundColor: iconBg }}
                        >
                          <IconMedia
                            icon={item.icon}
                            className="h-5 w-5"
                            imgClassName="h-full w-full"
                          />
                        </span>
                      </div>
                      <RichScope
                        scopeClass="pricing-drop-num-text"
                        textColor={item.textColor || NAVY}
                        boldTextColor={item.boldTextColor || ACCENT}
                        className="ml-3 min-w-0 flex-1 sm:ml-4"
                      >
                        {hasRichText(item.content) ? (
                          <RichText
                            data={item.content!}
                            enableGutter={false}
                            enableProse={false}
                          />
                        ) : null}
                      </RichScope>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </div>

          {/* Columna derecha: producto + letra pequeña */}
          <div className="relative z-[1] flex flex-col gap-3 lg:col-span-6 lg:col-start-7 lg:row-start-1">
            <div className="flex w-full flex-col gap-3 lg:ml-auto lg:max-w-[28rem] xl:max-w-[30rem]">
            {hasProductCard ? (
            <div
              className="flex w-full flex-col overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(16,24,53,0.08)]"
              style={{ backgroundColor: productBg }}
            >
              {/* Comparativa */}
              {columns.length > 0 ? (
                <div className="relative px-4 pt-5 pb-4 sm:px-5 lg:px-4 lg:pt-5 lg:pb-4">
                  {/* Barra vertical: cubre filas + totales, se corta antes del final */}
                  {columns.length === 2 ? (
                    <div
                      className="pointer-events-none absolute left-1/2 top-6 z-[1] w-px -translate-x-1/2 bg-neutral-200"
                      style={{ bottom: '1.25rem' }}
                      aria-hidden
                    />
                  ) : null}

                  <div
                    className={cn(
                      'relative grid gap-0',
                      columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1',
                    )}
                  >
                    {columns.map((col, colIdx) => {
                      const iconBg =
                        sanitizeCssColor(col.iconBackgroundColor) || '#fce4ec'
                      const items = Array.isArray(col.items) ? col.items.slice(0, 6) : []
                      const padClass =
                        columns.length === 2
                          ? colIdx === 0
                            ? 'pr-4 sm:pr-6'
                            : 'pl-4 sm:pl-6'
                          : ''
                      return (
                        <div
                          key={col.id || `col-body-${colIdx}`}
                          className={cn('flex flex-col gap-4', padClass)}
                        >
                          <div className="flex items-center justify-start gap-2.5">
                            <span
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: iconBg }}
                            >
                              <IconMedia
                                icon={col.icon}
                                className="h-5 w-5"
                                imgClassName="h-full w-full"
                              />
                            </span>
                            {hasRichText(col.title) ? (
                              <RichScope
                                scopeClass="pricing-drop-col-title"
                                textColor={NAVY}
                                className="min-w-0"
                              >
                                <RichText
                                  data={col.title!}
                                  enableGutter={false}
                                  enableProse={false}
                                />
                              </RichScope>
                            ) : null}
                          </div>

                          <ul className="flex flex-col gap-2.5">
                            {items.map((row, rowIdx) => {
                              const priceColor =
                                sanitizeCssColor(row.priceTextColor) || ACCENT
                              const tagBg =
                                sanitizeCssColor(row.tagBackgroundColor) || '#c8e6c9'
                              const tagFg =
                                sanitizeCssColor(row.tagTextColor) || '#2e7d32'
                              const showTag = hasRichText(row.tag)
                              const showPrice = hasRichText(row.price)
                              return (
                                <li
                                  key={row.id || `row-${colIdx}-${rowIdx}`}
                                  className="flex w-full items-center gap-2 sm:gap-3"
                                >
                                  <RichScope
                                    scopeClass="pricing-drop-cmp-product"
                                    textColor={NAVY}
                                    className="min-w-0 flex-1 text-left [&_.payload-richtext]:w-full"
                                  >
                                    {hasRichText(row.product) ? (
                                      <RichText
                                        data={row.product!}
                                        enableGutter={false}
                                        enableProse={false}
                                      />
                                    ) : null}
                                  </RichScope>
                                  {showTag ? (
                                    <span
                                      className="pricing-drop-cmp-tag inline-flex shrink-0 items-center rounded px-2 py-0.5"
                                      style={{ backgroundColor: tagBg, color: tagFg }}
                                    >
                                      <RichScope scopeClass="pd-tag-inner" textColor={tagFg}>
                                        <RichText
                                          data={row.tag!}
                                          enableGutter={false}
                                          enableProse={false}
                                        />
                                      </RichScope>
                                    </span>
                                  ) : showPrice ? (
                                    <RichScope
                                      scopeClass="pricing-drop-cmp-price"
                                      textColor={priceColor}
                                      className="shrink-0 text-right"
                                    >
                                      <RichText
                                        data={row.price!}
                                        enableGutter={false}
                                        enableProse={false}
                                      />
                                    </RichScope>
                                  ) : null}
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      )
                    })}
                  </div>

                  {columns.some(
                    (col) =>
                      hasRichText(col.totalLabel) || hasRichText(col.totalPrice),
                  ) ? (
                    <div
                      className={cn(
                        'relative grid gap-0',
                        columns.length === 2 ? 'grid-cols-2' : 'grid-cols-1',
                      )}
                    >
                      {columns.map((col, colIdx) => {
                        const totalColor =
                          sanitizeCssColor(col.totalPriceColor) || ACCENT
                        const hasTotal =
                          hasRichText(col.totalLabel) || hasRichText(col.totalPrice)
                        const padClass =
                          columns.length === 2
                            ? colIdx === 0
                              ? 'pr-4 sm:pr-6'
                              : 'pl-4 sm:pl-6'
                            : ''
                        if (!hasTotal) {
                          return (
                            <div
                              key={col.id || `col-total-empty-${colIdx}`}
                              className={padClass}
                            />
                          )
                        }
                        return (
                          <div
                            key={col.id || `col-total-${colIdx}`}
                            className={cn('mt-4 pt-0', padClass)}
                          >
                            {/* Barra horizontal: no llega a tocar la vertical */}
                            <div
                              className={cn(
                                'mb-3 border-t border-neutral-200',
                                columns.length === 2 && colIdx === 0
                                  ? 'mr-3 sm:mr-4'
                                  : columns.length === 2 && colIdx === 1
                                    ? 'ml-0'
                                    : '',
                              )}
                            />
                            <div className="flex items-center justify-between gap-3">
                              {hasRichText(col.totalLabel) ? (
                                <RichScope
                                  scopeClass="pricing-drop-total-label"
                                  textColor={NAVY}
                                >
                                  <RichText
                                    data={col.totalLabel!}
                                    enableGutter={false}
                                    enableProse={false}
                                  />
                                </RichScope>
                              ) : (
                                <span />
                              )}
                              {hasRichText(col.totalPrice) ? (
                                <RichScope
                                  scopeClass="pricing-drop-total-price"
                                  textColor={totalColor}
                                >
                                  <RichText
                                    data={col.totalPrice!}
                                    enableGutter={false}
                                    enableProse={false}
                                  />
                                </RichScope>
                              ) : null}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              ) : null}

              {/* Compra */}
              {hasPurchase && purchase ? (
                <div className="px-3 pb-4 sm:px-5 lg:px-4 lg:pb-4" style={{ backgroundColor: purchaseBg }}>
                  <div className="flex w-full items-center gap-x-2.5 py-4 pl-1 pr-1 sm:gap-x-3 sm:pl-2 sm:pr-2 lg:gap-x-3.5 lg:py-5">
                    {hasPurchasePrev ? (
                      <RichScope
                        scopeClass="pricing-drop-prev"
                        textColor={ACCENT}
                        className="flex w-max min-w-0 max-w-full shrink-0 items-center"
                      >
                        <RichText
                          data={purchase.previousPrice!}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </RichScope>
                    ) : null}
                    {hasPurchaseCurrent ? (
                      <RichScope
                        scopeClass="pricing-drop-current"
                        textColor={NAVY}
                        className="flex w-max min-w-0 max-w-full shrink-0 items-center"
                      >
                        <RichText
                          data={purchase.currentPrice!}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </RichScope>
                    ) : null}
                    {hasPurchaseDesc ? (
                      <>
                        <span
                          className="w-px shrink-0 self-stretch bg-neutral-300"
                          aria-hidden
                        />
                        <div className="flex min-w-0 flex-1 items-center justify-start">
                          <RichScope
                            scopeClass="pricing-drop-desc"
                            textColor={NAVY}
                            className="w-full min-w-0 max-w-[11rem] text-left sm:max-w-[12.5rem] lg:max-w-[10rem] xl:max-w-[10.5rem]"
                          >
                            <RichText
                              data={purchase.description!}
                              enableGutter={false}
                              enableProse={false}
                            />
                          </RichScope>
                        </div>
                      </>
                    ) : null}
                  </div>

                  {hasBtnLink && btn?.link ? (
                    <CMSLink
                      {...(btn.link as React.ComponentProps<typeof CMSLink>)}
                      appearance="inline"
                      className={buttonClassName}
                      style={btnStyle}
                    >
                      {ButtonInner}
                    </CMSLink>
                  ) : (
                    <button
                      type="button"
                      className={buttonClassName}
                      style={btnStyle}
                    >
                      {ButtonInner}
                    </button>
                  )}
                </div>
              ) : null}

              {/* Footer items del producto */}
              {footerItems.length > 0 ? (
                <div className="flex flex-row items-stretch px-4 py-4 sm:px-5 lg:px-4">
                  {footerItems.map((item, i) => (
                    <div
                      key={item.id || `pfi-${i}`}
                      className={cn(
                        'flex min-w-0 flex-1 items-center gap-2.5',
                        i > 0 ? 'border-l border-neutral-200 pl-4 sm:pl-6' : 'pr-4 sm:pr-6',
                      )}
                    >
                      <IconMedia
                        icon={item.icon}
                        className="h-5 w-5 shrink-0"
                        imgClassName="h-full w-full"
                      />
                      <RichScope
                        scopeClass="pricing-drop-footer-item"
                        textColor={NAVY}
                        className={cn(
                          'min-w-0 leading-snug',
                          !fontGroupTypographyActive && 'text-sm',
                        )}
                      >
                        {hasRichText(item.content) ? (
                          <RichText
                            data={item.content!}
                            enableGutter={false}
                            enableProse={false}
                          />
                        ) : null}
                      </RichScope>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            ) : null}

            {/* Letra pequeña */}
            {hasRichText(finePrint) ? (
              <RichScope
                scopeClass="pricing-drop-fine"
                textColor={finePrintColor || NAVY}
                className="px-4 text-center sm:px-6"
              >
                <RichText data={finePrint!} enableGutter={false} enableProse={false} />
              </RichScope>
            ) : null}
            </div>
          </div>

          {/* Stats / subsección final */}
          {statsList.length > 0 ? (
            <div className="relative z-[1] mx-auto flex w-full flex-col gap-3 lg:col-span-12 lg:max-w-5xl lg:flex-row lg:flex-nowrap lg:justify-center lg:gap-3.5 xl:max-w-6xl">
              {statsList.map((stat, i) => {
                const cardBg = sanitizeCssColor(stat.backgroundColor) || '#ffffff'
                const iconBg = sanitizeCssColor(stat.iconBackgroundColor) || '#fce4ec'
                return (
                  <div
                    key={stat.id || `stat-${i}`}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 shadow-[0_8px_28px_rgba(16,24,53,0.06)] sm:px-5 lg:w-auto lg:min-w-0 lg:max-w-[17rem] lg:flex-1 lg:px-5 xl:max-w-[18.5rem]"
                    style={{ backgroundColor: cardBg }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: iconBg }}
                    >
                      <IconMedia
                        icon={stat.icon}
                        className="h-5 w-5"
                        imgClassName="h-full w-full"
                      />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-row items-center gap-2 lg:flex-col lg:items-start lg:gap-0.5">
                      {hasRichText(stat.highlight) ? (
                        <RichScope
                          scopeClass="pricing-drop-stat-highlight"
                          textColor={stat.boldTextColor || stat.textColor || ACCENT}
                          boldTextColor={stat.boldTextColor || ACCENT}
                          className="shrink-0 lg:w-full"
                        >
                          <RichText
                            data={stat.highlight!}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </RichScope>
                      ) : null}
                      {hasRichText(stat.content) ? (
                        <RichScope
                          scopeClass="pricing-drop-stat-text"
                          textColor={stat.textColor || NAVY}
                          boldTextColor={stat.boldTextColor || ACCENT}
                          className="min-w-0"
                        >
                          <RichText
                            data={stat.content!}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </RichScope>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
