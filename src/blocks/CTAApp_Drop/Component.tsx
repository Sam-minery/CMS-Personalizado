'use client'

import React, { useEffect, useId, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'
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
  FONT_GROUP_VARIANT_CSS,
  mergeFontGroupLineHeightsWithFallback,
  trimFontGroupValue,
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
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'

type MediaLike = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
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

type SectionTypography = {
  textColor?: string | null
  boldTextColor?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
}

type CTALink = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: Page | Post | number | string
  } | null
}

type FeatureItem = {
  id?: string | null
  label?: string | null
}

type QrItem = {
  id?: string | null
  image?: MediaLike | null
  alt?: string | null
}

type StoreButtonItem = {
  id?: string | null
  store?: 'appStore' | 'googlePlay' | null
  link?: CTALink | null
}

type FeaturesStyle = SectionTypography & {
  checkColor?: string | null
  icon?: IconGroup | null
}

type DownloadCard = {
  qrCodes?: QrItem[] | null
  desktopScanText?: string | null
  mobileDownloadText?: string | null
  phoneIcon?: IconGroup | null
  storeButtons?: StoreButtonItem[] | null
}

export type CTAAppDropBlockProps = {
  blockName?: string
  blockType?: 'ctaAppDrop'
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerStyle?: SectionTypography | null
  subtitleContent?: DefaultTypedEditorState | null
  subtitleStyle?: SectionTypography | null
  mockupImage?: MediaLike | null
  features?: FeatureItem[] | null
  featuresStyle?: FeaturesStyle | null
  downloadCard?: DownloadCard | null
  backgroundColor?: string | null
  showDecorativeSvgs?: boolean | null
  enableMockupScrollAnimation?: boolean | null
  mockupScrollShowPercent?: number | null
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
}

const ACCENT = '#C2005F'
const NAVY = '#101835'
const GRAY = '#666666'
const CHECK_GREEN = '#4CAF50'
const CARD_SHADOW = '0 8px 28px rgba(16, 24, 53, 0.06)'

const DROP_FG_RICHTEXT =
  'cta-app-drop-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

const MOCKUP_RISE_CSS = `
.cta-app-drop-mockup-rise {
  opacity: 1;
  transform: none;
}
@media (min-width: 1024px) {
  .cta-app-drop-mockup-rise.is-animated {
    opacity: var(--mockup-p, 0);
    transform: translate3d(0, calc((1 - var(--mockup-p, 0)) * 100%), 0);
    will-change: transform, opacity;
    backface-visibility: hidden;
  }
}
@media (prefers-reduced-motion: reduce) {
  .cta-app-drop-mockup-rise.is-animated {
    opacity: 1;
    transform: none;
    will-change: auto;
  }
}
`

function SparkleSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 13.2 8.8 20 10l-6.8 1.2L12 18l-1.2-6.8L4 10l6.8-1.2L12 2Z" />
    </svg>
  )
}

function DiamondSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path d="M12 3.2 20.2 12 12 20.8 3.8 12Z" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function PlusSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path d="M12 5v14M5 12h14" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function DecorativeBackground({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [isDesktop, setIsDesktop] = React.useState(false)
  const canAnimate = Boolean(isDesktop && !reduceMotion)

  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const loop = (duration: number, delay = 0) => ({
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  })

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <motion.svg
        className="absolute -right-14 top-[18%] h-[250px] w-[250px] text-[#D4B8E8] opacity-40 md:h-[330px] md:w-[330px]"
        viewBox="0 0 200 200"
        fill="none"
        animate={canAnimate ? { rotate: [0, -7, 0], opacity: [0.24, 0.4, 0.24] } : undefined}
        transition={loop(13, 0.5)}
      >
        <path
          d="M30 70c28 0 52 12 70 34s28 50 22 78"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M42 78c22 2 42 12 56 30s22 42 16 64"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M56 88c16 4 30 12 40 26s16 34 12 52"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.5"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.span
        className="absolute left-[8%] top-[14%] text-[#C2005F]"
        animate={
          canAnimate
            ? { y: [0, -9, 0], opacity: [0.3, 0.74, 0.3], scale: [0.92, 1.1, 0.92] }
            : undefined
        }
        transition={loop(4.4)}
      >
        <SparkleSvg className="h-4 w-4 md:h-5 md:w-5" />
      </motion.span>

      <motion.span
        className="absolute right-[10%] top-[16%] text-[#C2005F]"
        animate={
          canAnimate
            ? {
                y: [0, -8, 0],
                opacity: [0.28, 0.7, 0.28],
                scale: [0.9, 1.12, 0.9],
                rotate: [0, 16, 0, -10, 0],
              }
            : undefined
        }
        transition={loop(5.1, 0.35)}
      >
        <DiamondSvg className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </motion.span>

      <motion.span
        className="absolute bottom-[22%] left-[16%] text-[#C2005F]"
        animate={
          canAnimate
            ? { y: [0, -8, 0], opacity: [0.26, 0.68, 0.26], scale: [0.94, 1.08, 0.94] }
            : undefined
        }
        transition={loop(4.8, 0.7)}
      >
        <PlusSvg className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </motion.span>

      <motion.span
        className="absolute bottom-[28%] right-[14%] text-[#C2005F]"
        animate={
          canAnimate
            ? {
                y: [0, -7, 0],
                opacity: [0.24, 0.66, 0.24],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, -14, 0, 10, 0],
              }
            : undefined
        }
        transition={loop(5.3, 1)}
      >
        <SparkleSvg className="h-2.5 w-2.5 md:h-3 md:w-3" />
      </motion.span>

      <motion.span
        className="absolute left-[5%] top-[50%] text-[#C2005F]"
        animate={
          canAnimate
            ? { y: [0, -6, 0], opacity: [0.2, 0.52, 0.2], scale: [0.95, 1.08, 0.95] }
            : undefined
        }
        transition={loop(3.9, 0.4)}
      >
        <DiamondSvg className="h-2.5 w-2.5 md:h-3 md:w-3" />
      </motion.span>

      <motion.span
        className="absolute right-[6%] top-[54%] text-[#C2005F]"
        animate={
          canAnimate
            ? { y: [0, -7, 0], opacity: [0.2, 0.5, 0.2], scale: [0.94, 1.1, 0.94] }
            : undefined
        }
        transition={loop(4.5, 0.85)}
      >
        <PlusSvg className="h-2.5 w-2.5" />
      </motion.span>

      <motion.span
        className="absolute right-[22%] top-[10%] text-[#C2005F]"
        animate={
          canAnimate
            ? { y: [0, -5, 0], opacity: [0.18, 0.48, 0.18], scale: [0.96, 1.06, 0.96] }
            : undefined
        }
        transition={loop(4.1, 1.2)}
      >
        <SparkleSvg className="h-2 w-2 md:h-2.5 md:w-2.5" />
      </motion.span>
    </div>
  )
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'cta-app-drop'
}

function sanitizeCssColor(value: string | null | undefined, fallback = ''): string {
  if (value == null || typeof value !== 'string') return fallback
  const trimmed = value.trim()
  if (!trimmed) return fallback
  const safe = trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '')
  return safe || fallback
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

function normalizeFontGroup(raw: unknown): FontGroupData | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  let o = raw as Record<string, unknown>
  const rel = o.relationTo
  const inner = o.value
  if (
    inner &&
    typeof inner === 'object' &&
    !Array.isArray(inner) &&
    (rel === 'font-groups' || rel === 'fontGroups')
  ) {
    o = inner as Record<string, unknown>
  }
  return expandFontGroupRichTextFields(o as Record<string, unknown>) as FontGroupData
}

function resolveSectionFontFamily(style?: SectionTypography | null): string | undefined {
  if (!style) return undefined
  if (style.useFontGroup && style.fontGroup && typeof style.fontGroup === 'object') {
    const fg = normalizeFontGroup(style.fontGroup)
    if (fg?.fontFamilyName?.trim()) {
      return `"${fg.fontFamilyName.replace(/"/g, '\\"')}"`
    }
  }
  if (style.useCustomFont) {
    const file =
      style.customFontFile && typeof style.customFontFile === 'object' ? style.customFontFile : null
    const name =
      style.customFontName?.trim() ||
      file?.name?.trim() ||
      (file?.filename ? file.filename.replace(/\.[^.]+$/, '') : undefined)
    if (name) return `"${name.replace(/"/g, '\\"')}"`
  }
  if (style.fontFamily && style.fontFamily !== 'default') return style.fontFamily
  return undefined
}

function googleFontForSection(style?: SectionTypography | null): string | undefined {
  if (!style || style.useFontGroup) return undefined
  return resolveSectionFontFamily(style)
}

function buildSectionFontCss(
  rootSel: string,
  scopeClass: string,
  style: SectionTypography | null | undefined,
  opts?: { fallbackTextColor?: string },
): { css: string; fontGroupActive: boolean } {
  if (!style) {
    const fallback = opts?.fallbackTextColor
    return {
      css: fallback ? `${rootSel} .${scopeClass} { color: ${fallback}; }` : '',
      fontGroupActive: false,
    }
  }

  const styles: string[] = []
  const scope = `${rootSel} .${scopeClass}`
  const mainRichtext = `${scope}.cta-app-drop-richtext, ${scope} .cta-app-drop-richtext, ${scope}`
  const planRichtext = mainRichtext
  const payloadRichtext = `${scope} .payload-richtext`

  const fontGroupObj =
    style.useFontGroup && style.fontGroup && typeof style.fontGroup === 'object'
      ? normalizeFontGroup(style.fontGroup)
      : null
  const fontGroupActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    style.customFontFile && typeof style.customFontFile === 'object' ? style.customFontFile : null
  const customFontFamilyName =
    style.customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename
      ? customFontFileObj.filename.replace(/\.[^.]+$/, '')
      : undefined)
  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  if (fontGroupActive && fontGroupObj) {
    const familyName = fontGroupObj.fontFamilyName!.replace(/"/g, '\\"')
    const fontEntries = (fontGroupObj.fonts || []).filter(
      (e): e is FontGroupFontEntry & { font: FontFile } =>
        e?.font != null && typeof e.font === 'object' && e.font?.url != null,
    )
    for (const entry of fontEntries) {
      const url = getMediaUrl(entry.font.url).replace(/([^:]\/)\/+/g, '$1')
      const variant = entry.variant || 'regular'
      const { weight, style: fontStyleCss } = FONT_GROUP_VARIANT_CSS[variant] ?? {
        weight: '400',
        style: 'normal',
      }
      const formatMatch = url.match(/\.(woff2?|ttf|otf)(\?.*)?$/i)
      const format = formatMatch
        ? formatMatch[1].toLowerCase() === 'woff2'
          ? 'woff2'
          : formatMatch[1].toLowerCase() === 'woff'
            ? 'woff'
            : formatMatch[1].toLowerCase() === 'ttf'
              ? 'truetype'
              : 'opentype'
        : 'woff2'
      if (!formatMatch) continue
      styles.push(`
        @font-face {
          font-family: "${familyName}";
          src: url("${url}") format("${format}");
          font-weight: ${weight};
          font-style: ${fontStyleCss};
          font-display: swap;
        }
      `)
    }
    const fontValue = `"${fontGroupObj.fontFamilyName!.replace(/"/g, '\\"')}"`
    styles.push(
      `${scope}, ${scope} *, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
    )

    const typo = fontGroupObj.typography
    if (typo) {
      if (typo.h1)
        styles.push(`${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${typo.h1} !important; }`)
      if (typo.h2)
        styles.push(`${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${typo.h2} !important; }`)
      if (typo.h3)
        styles.push(`${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${typo.h3} !important; }`)
      if (typo.h4)
        styles.push(`${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${typo.h4} !important; }`)
      if (typo.h5)
        styles.push(`${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${typo.h5} !important; }`)
      if (typo.h6)
        styles.push(`${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${typo.h6} !important; }`)
      appendTypographyBodyListSizeRules(typo, mainRichtext, planRichtext, payloadRichtext, (rule) =>
        styles.push(rule),
      )
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

    const bodyLhDesk = trimFontGroupValue(fontGroupObj.lineHeights?.body)
    const mergedLh = mergeFontGroupLineHeightsWithFallback(
      fontGroupObj.lineHeights,
      fontGroupObj.lineHeightsMobile,
    )
    if (bodyLhDesk && mergedLh?.body) {
      /* applied via helper above */
    }
  } else if (style.useCustomFont && isValidFontFile && customFontFamilyName && fontFileUrl) {
    const family = customFontFamilyName.replace(/"/g, '\\"')
    const formatMatch = fontFileNameOrUrl.match(/\.(woff2?|ttf|otf)(\?.*)?$/i)
    const format = formatMatch
      ? formatMatch[1].toLowerCase() === 'woff2'
        ? 'woff2'
        : formatMatch[1].toLowerCase() === 'woff'
          ? 'woff'
          : formatMatch[1].toLowerCase() === 'ttf'
            ? 'truetype'
            : 'opentype'
      : 'woff2'
    styles.push(`
      @font-face {
        font-family: "${family}";
        src: url("${fontFileUrl}") format("${format}");
        font-display: swap;
      }
    `)
    styles.push(
      `${scope}, ${scope} *, ${payloadRichtext}, ${payloadRichtext} * { font-family: "${family}", sans-serif !important; }`,
    )
  } else {
    const family = resolveSectionFontFamily(style)
    if (family) {
      styles.push(
        `${scope}, ${scope} *, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${family} !important; }`,
      )
    }
  }

  const textColor = sanitizeCssColor(style.textColor) || opts?.fallbackTextColor || ''
  const boldColor = sanitizeCssColor(style.boldTextColor)
  if (textColor) {
    styles.push(`${scope}, ${payloadRichtext} { color: ${textColor}; }`)
  }
  if (boldColor) {
    styles.push(
      `${scope} strong, ${scope} b, ${payloadRichtext} strong, ${payloadRichtext} b { color: ${boldColor} !important; }`,
    )
  }

  return { css: styles.join('\n'), fontGroupActive }
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

  if (icon.useMedia === true) return null

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

function DefaultCheck({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <circle cx="12" cy="12" r="12" fill={color} fillOpacity="0.2" />
      <path
        d="M6.8 12.2 10.2 15.5 17.2 8.4"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DefaultPhoneIcon({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      className="h-6 w-6 shrink-0"
      aria-hidden
    >
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M11 18.5h2" strokeLinecap="round" />
    </svg>
  )
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 384 512"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function PlayLogo({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const clipId = `cta-gp-${uid}`

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <clipPath id={clipId}>
          <path d="M5.85 1.72C4.42.9 2.55 1.95 2.55 3.68v16.64c0 1.73 1.87 2.78 3.3 1.96l13.55-7.82c1.32-.76 1.32-2.84 0-3.6L5.85 1.72z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <polygon fill="#4285F4" points="10.4,12 -2,-4 -2,28" />
        <polygon fill="#34A853" points="10.4,12 -2,-4 28,4" />
        <polygon fill="#FBBC04" points="10.4,12 28,4 28,20" />
        <polygon fill="#EA4335" points="10.4,12 28,20 -2,28" />
      </g>
    </svg>
  )
}

function StoreBadgeContent({ store }: { store: 'appStore' | 'googlePlay' }) {
  if (store === 'googlePlay') {
    return (
      <>
        <PlayLogo className="h-[26px] w-[26px] shrink-0" />
        <span className="flex min-w-0 flex-col items-start leading-none">
          <span className="text-[8px] font-medium uppercase tracking-[0.06em] text-white/85">
            Disponible en
          </span>
          <span className="mt-[3px] text-[15px] font-semibold tracking-tight">Google Play</span>
        </span>
      </>
    )
  }

  return (
    <>
      <AppleLogo className="-mt-px h-[26px] w-[21px] shrink-0 text-white" />
      <span className="flex min-w-0 flex-col items-start leading-none">
        <span className="text-[8px] font-medium tracking-[0.02em] text-white/85">
          Descárgalo en el
        </span>
        <span className="mt-[3px] text-[15px] font-semibold tracking-tight">App Store</span>
      </span>
    </>
  )
}

function hasIconContent(icon?: IconGroup | null): boolean {
  if (!icon) return false
  if (icon.useMedia !== false && icon.mediaImage) {
    return Boolean(getMediaUrlSafe(icon.mediaImage))
  }
  if (icon.useMedia === true) return false
  return Boolean(icon.iconSVG && String(icon.iconSVG).trim())
}

function FeatureCheck({
  icon,
  color,
}: {
  icon?: IconGroup | null
  color: string
}) {
  if (hasIconContent(icon)) {
    return <IconMedia icon={icon} className="h-5 w-5" imgClassName="h-5 w-5" />
  }
  return <DefaultCheck color={color} />
}

function PhoneGlyph({ icon }: { icon?: IconGroup | null }) {
  if (hasIconContent(icon)) {
    return <IconMedia icon={icon} className="h-6 w-6" imgClassName="h-6 w-6" />
  }
  return <DefaultPhoneIcon color={ACCENT} />
}

export const CTAAppDropBlock: React.FC<CTAAppDropBlockProps> = (props) => {
  const {
    anchorId,
    headerContent,
    headerStyle,
    subtitleContent,
    subtitleStyle,
    mockupImage,
    features,
    featuresStyle,
    downloadCard,
    backgroundColor,
    showDecorativeSvgs,
    enableMockupScrollAnimation,
    mockupScrollShowPercent,
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
  } = props

  const uniqueId = useId().replace(/:/g, '-')
  const styleId = `cta-app-drop-${uniqueId}`
  const rootSel = `[data-cta-app-drop-font="${styleId}"]`
  const sectionRef = useRef<HTMLElement>(null)
  const mockupRiseRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const featuresList = Array.isArray(features) ? features.filter((f) => f?.label?.trim()) : []
  const qrList = Array.isArray(downloadCard?.qrCodes)
    ? downloadCard.qrCodes.filter((q) => getMediaUrlSafe(q.image))
    : []
  const storeButtons = Array.isArray(downloadCard?.storeButtons)
    ? downloadCard.storeButtons.slice(0, 2)
    : []

  const bg = sanitizeCssColor(backgroundColor, '#FFFFFF')
  const checkColor = sanitizeCssColor(featuresStyle?.checkColor, CHECK_GREEN)
  const sectionId = sanitizeAnchorId(anchorId)
  const mockupSrc = getMediaUrlSafe(mockupImage)
  const mockupAlt =
    mockupImage && typeof mockupImage === 'object' ? mockupImage.alt || 'App Drop' : 'App Drop'
  const desktopScanText =
    downloadCard?.desktopScanText?.trim() || 'Escanea el código QR para descargar la app'
  const mobileDownloadText =
    downloadCard?.mobileDownloadText?.trim() ||
    'Descarga la app y lleva tu bienestar siempre contigo'
  const showDecor = showDecorativeSvgs !== false
  const mockupScrollEnabled = enableMockupScrollAnimation !== false
  const mockupShowAt = (() => {
    const p = mockupScrollShowPercent
    if (typeof p !== 'number' || Number.isNaN(p)) return 1
    return Math.min(1, Math.max(0.01, p / 100))
  })()
  const hasDownloadCard = qrList.length > 0 || storeButtons.length > 0

  const headerCss = buildSectionFontCss(rootSel, 'cta-app-drop-header', headerStyle, {
    fallbackTextColor: NAVY,
  })
  const subtitleCss = buildSectionFontCss(rootSel, 'cta-app-drop-subtitle', subtitleStyle, {
    fallbackTextColor: GRAY,
  })
  const featuresCss = buildSectionFontCss(rootSel, 'cta-app-drop-features', featuresStyle, {
    fallbackTextColor: NAVY,
  })

  useGoogleFont(googleFontForSection(headerStyle))
  useGoogleFont(googleFontForSection(subtitleStyle))
  useGoogleFont(googleFontForSection(featuresStyle))

  useEffect(() => {
    const mockupEl = mockupRiseRef.current
    const sectionEl = sectionRef.current
    if (!mockupSrc || !mockupEl || !sectionEl) return

    const desktopMq = window.matchMedia('(min-width: 1024px)')

    const setProgress = (value: number) => {
      mockupEl.style.setProperty('--mockup-p', String(value))
    }

    const update = () => {
      if (reduceMotion || !mockupScrollEnabled || !desktopMq.matches) {
        setProgress(1)
        return
      }
      const rect = sectionEl.getBoundingClientRect()
      const vh = window.innerHeight
      const height = rect.height || 1
      const raw = (vh - rect.top) / height
      setProgress(Math.min(1, Math.max(0, raw / mockupShowAt)))
    }

    let raf = 0
    const onScrollOrResize = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        update()
      })
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
    desktopMq.addEventListener('change', onScrollOrResize)
    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      desktopMq.removeEventListener('change', onScrollOrResize)
    }
  }, [mockupSrc, reduceMotion, mockupScrollEnabled, mockupShowAt])

  const layoutCustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const layoutCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(
    applyCustomWidth,
    customWidthPercentMobile,
  )
  const layoutBreakoutCss =
    layoutCustomWidthVw != null && layoutCustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, layoutCustomWidthVw, layoutCustomWidthMobileVw)
      : ''

  const allBlockStyles = [
    MOCKUP_RISE_CSS,
    headerCss.css,
    subtitleCss.css,
    featuresCss.css,
    layoutBreakoutCss,
  ]
    .filter(Boolean)
    .join('\n')

  const storeBadgeClass =
    'inline-flex h-[44px] min-w-[160px] items-center gap-2.5 rounded-[9px] bg-black px-3.5 text-white transition-opacity hover:opacity-90'
  const storeBadgeMobileClass =
    'inline-flex h-[42px] min-w-0 flex-1 items-center justify-center gap-2 rounded-[9px] bg-black px-2.5 text-white transition-opacity hover:opacity-90'

  const renderStoreButtons = (layout: 'stack' | 'row') =>
    storeButtons.length > 0 ? (
      <div
        className={cn(
          'flex shrink-0',
          layout === 'stack' ? 'flex-col gap-2' : 'w-full flex-row items-center justify-center gap-2',
        )}
      >
        {storeButtons.map((btn, index) => {
          const store = btn.store === 'googlePlay' ? 'googlePlay' : 'appStore'
          return (
            <CMSLink
              key={btn.id || `store-${index}`}
              type={btn.link?.type}
              newTab={btn.link?.newTab ?? true}
              reference={btn.link?.reference as React.ComponentProps<typeof CMSLink>['reference']}
              url={btn.link?.url}
              label={null}
              appearance="inline"
              className={layout === 'row' ? storeBadgeMobileClass : storeBadgeClass}
            >
              <StoreBadgeContent store={store} />
            </CMSLink>
          )
        })}
      </div>
    ) : null

  return (
    <section
      ref={sectionRef}
      id={sectionId}
      data-cta-app-drop-font={styleId}
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      {allBlockStyles ? <style dangerouslySetInnerHTML={{ __html: allBlockStyles }} /> : null}
      {showDecor && <DecorativeBackground reduceMotion={reduceMotion} />}

      <div
        className={cn(
          'relative z-10 min-w-0 py-16 md:py-20 lg:py-24',
          layoutCustomWidthVw == null && 'px-[5%]',
          layoutCustomWidthVw != null && 'overflow-x-visible px-0',
        )}
      >
        <div
          className={cn(
            'relative min-w-0',
            layoutCustomWidthVw == null
              ? 'mx-auto w-full'
              : 'box-border w-full max-w-none overflow-x-visible px-0',
          )}
          {...(layoutCustomWidthVw != null && layoutCustomWidthMobileVw != null
            ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
            : {})}
          style={
            layoutCustomWidthVw == null
              ? undefined
              : layoutCustomWidthMobileVw != null
                ? sendaBreakoutOnlyBoxSizing()
                : sendaCalcBreakoutInlineStyle(layoutCustomWidthVw)
          }
        >
          <div
            className={
              layoutCustomWidthVw == null
                ? 'container relative mx-auto max-w-7xl'
                : 'relative mx-auto w-full max-w-none'
            }
          >
            <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
              {/* Mobile header (centered) */}
              <div className="relative z-10 order-1 text-center lg:hidden">
                {headerContent && (
                  <div
                    className={cn(
                      'cta-app-drop-header',
                      headerCss.fontGroupActive && DROP_FG_RICHTEXT,
                      !headerCss.fontGroupActive &&
                        '[&_h1]:text-[1.85rem] [&_h1]:font-bold [&_h1]:leading-tight [&_h2]:text-[1.85rem] [&_h2]:font-bold [&_h2]:leading-tight [&_h3]:text-2xl [&_h3]:font-bold [&_p]:mt-2 [&_p]:text-base [&_strong]:font-bold',
                    )}
                  >
                    <RichText data={headerContent} enableGutter={false} enableProse={false} />
                  </div>
                )}
                <div
                  className="mx-auto mt-4 h-[2px] w-16 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                  aria-hidden
                />
                {subtitleContent && (
                  <div
                    className={cn(
                      'cta-app-drop-subtitle mt-4',
                      subtitleCss.fontGroupActive && DROP_FG_RICHTEXT,
                      !subtitleCss.fontGroupActive && '[&_p]:text-base [&_p]:leading-relaxed',
                    )}
                  >
                    <RichText data={subtitleContent} enableGutter={false} enableProse={false} />
                  </div>
                )}
              </div>

              {mockupSrc && (
                <div className={cn(
                  'relative z-10 order-2 -mx-10 flex w-[calc(100%+5rem)] justify-center overflow-visible px-10 sm:-mx-14 sm:w-[calc(100%+7rem)] sm:px-14 lg:order-1 lg:mx-0 lg:w-full lg:justify-start lg:px-0',
                  mockupScrollEnabled && 'lg:overflow-hidden',
                )}>
                  <div className="mx-auto w-[min(108%,460px)] -translate-x-10 sm:w-[min(108%,540px)] sm:-translate-x-12 lg:mx-0 lg:-ml-4 lg:w-full lg:max-w-[540px] lg:translate-x-0 xl:max-w-[580px]">
                    <div
                      ref={mockupRiseRef}
                      className={cn(
                        'cta-app-drop-mockup-rise',
                        mockupScrollEnabled && 'is-animated',
                      )}
                      style={{
                        WebkitMaskImage:
                          'linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.55) 82%, transparent 100%)',
                        maskImage:
                          'linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.55) 82%, transparent 100%)',
                      }}
                    >
                      <img
                        src={mockupSrc}
                        alt={mockupAlt}
                        className="mx-auto h-auto w-full object-contain object-center"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="relative z-10 order-3 flex flex-col lg:order-2">
                {/* Desktop header (left aligned) */}
                <div className="mb-6 hidden text-left lg:block lg:mb-8">
                  {headerContent && (
                    <div
                      className={cn(
                        'cta-app-drop-header',
                        headerCss.fontGroupActive && DROP_FG_RICHTEXT,
                        !headerCss.fontGroupActive &&
                          '[&_h1]:text-4xl [&_h1]:font-bold [&_h1]:leading-[1.15] xl:[&_h1]:text-5xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:leading-[1.15] xl:[&_h2]:text-5xl [&_h3]:text-3xl [&_h3]:font-bold [&_p]:mt-3 [&_p]:text-lg [&_strong]:font-bold',
                      )}
                    >
                      <RichText data={headerContent} enableGutter={false} enableProse={false} />
                    </div>
                  )}
                  {subtitleContent && (
                    <div
                      className={cn(
                        'cta-app-drop-subtitle mt-4',
                        subtitleCss.fontGroupActive && DROP_FG_RICHTEXT,
                        !subtitleCss.fontGroupActive &&
                          '[&_p]:text-lg [&_p]:leading-relaxed',
                      )}
                    >
                      <RichText data={subtitleContent} enableGutter={false} enableProse={false} />
                    </div>
                  )}
                </div>

                {featuresList.length > 0 && (
                  <ul
                    className={cn(
                      'cta-app-drop-features mx-auto mb-8 grid w-fit max-w-full grid-cols-1 gap-x-10 gap-y-3 sm:gap-y-3.5 lg:mx-0 lg:mb-10 lg:w-full lg:grid-cols-2',
                      featuresCss.fontGroupActive && DROP_FG_RICHTEXT,
                    )}
                  >
                    {featuresList.map((item, index) => (
                      <li
                        key={item.id || `ft-${index}`}
                        className="flex items-start gap-2.5 text-[15px] leading-snug lg:text-base"
                        style={
                          featuresCss.fontGroupActive
                            ? undefined
                            : { color: sanitizeCssColor(featuresStyle?.textColor, NAVY) }
                        }
                      >
                        <span className="mt-0.5 inline-flex shrink-0">
                          <FeatureCheck icon={featuresStyle?.icon} color={checkColor} />
                        </span>
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {hasDownloadCard && (
                  <div
                    className="w-full rounded-[24px] border border-[#EEE7EC] bg-white px-5 py-5 sm:px-6 sm:py-5 lg:-ml-8 lg:w-[calc(100%+2rem)] lg:rounded-2xl xl:-ml-10 xl:w-[calc(100%+2.5rem)]"
                    style={{ boxShadow: CARD_SHADOW }}
                  >
                    {/* Desktop card */}
                    <div className="hidden items-center gap-4 lg:flex xl:gap-5">
                      {qrList.length > 0 && (
                        <div className="flex shrink-0 gap-2">
                          {qrList.map((qr, index) => {
                            const src = getMediaUrlSafe(qr.image)
                            if (!src) return null
                            return (
                              <img
                                key={qr.id || `qr-${index}`}
                                src={src}
                                alt={qr.alt || 'Código QR'}
                                className="h-[72px] w-[72px] rounded-md object-contain xl:h-20 xl:w-20"
                              />
                            )
                          })}
                        </div>
                      )}
                      <div className="flex min-w-0 flex-1 items-center gap-2">
                        <PhoneGlyph icon={downloadCard?.phoneIcon} />
                        <p className="text-sm leading-snug text-[#666666]">{desktopScanText}</p>
                      </div>
                      {storeButtons.length > 0 && (
                        <>
                          <div className="h-12 w-px shrink-0 bg-[#E5E7EB]" aria-hidden />
                          {renderStoreButtons('stack')}
                        </>
                      )}
                    </div>

                    {/* Mobile card */}
                    <div className="flex flex-col gap-5 lg:hidden">
                      <div className="flex items-center gap-3.5">
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8D6E6]">
                          <PhoneGlyph icon={downloadCard?.phoneIcon} />
                        </span>
                        <p className="min-w-0 flex-1 text-left text-[15px] font-medium leading-snug text-[#101835]">
                          {mobileDownloadText}
                        </p>
                      </div>
                      {renderStoreButtons('row')}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
