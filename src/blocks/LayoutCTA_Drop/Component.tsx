'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { motion, useReducedMotion } from 'motion/react'

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
  label?: string | null
}

type ButtonItem = {
  id?: string | null
  link?: CTALink | null
  iconSVG?: string | null
}

type StepItem = {
  id?: string | null
  tag?: {
    label?: string | null
    backgroundColor?: string | null
    textColor?: string | null
  } | null
  image?: MediaLike | null
  icon?: IconGroup | null
  content?: DefaultTypedEditorState | null
}

export type LayoutCTADropBlockProps = {
  blockName?: string
  blockType?: 'layoutCTADrop'
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerStyle?: SectionTypography | null
  steps?: StepItem[] | null
  stepsStyle?: SectionTypography | null
  buttons?: ButtonItem[] | null
  buttonBackgroundColor?: string | null
  buttonTextColor?: string | null
  backgroundColor?: string | null
  showDecorativeSvgs?: boolean | null
  decorativeSvgColor?: string | null
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
}

const ACCENT = '#C2005F'
const NAVY = '#101835'
const TAG_BG = '#FCE4EC'
const DOT_INACTIVE = '#F8BBD0'
const CARD_SHADOW = '0 10px 32px rgba(16, 24, 53, 0.08)'
const DESKTOP_SCALE_ACTIVE = 1.07
const DESKTOP_CYCLE_MS = 4200
const DESKTOP_INTRO_STEP_MS = 1450
const DESKTOP_INTRO_EASE = [0.22, 1, 0.36, 1] as const
const DESKTOP_CARD_W = 285
const DESKTOP_CONN_W = 16
const DESKTOP_DECK_MIN_H = 470

/** Centros de cada card respecto al centro del contenedor (px). */
function getDeckCenters(count: number, cardW = DESKTOP_CARD_W, connW = DESKTOP_CONN_W): number[] {
  if (count <= 0) return []
  const total = count * cardW + Math.max(0, count - 1) * connW
  const left = -total / 2
  return Array.from({ length: count }, (_, i) => left + i * (cardW + connW) + cardW / 2)
}

const DEFAULT_ARROW_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'

const DROP_FG_RICHTEXT =
  'lcta-drop-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

function SparkleSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2 13.2 8.8 20 10l-6.8 1.2L12 18l-1.2-6.8L4 10l6.8-1.2L12 2Z" />
    </svg>
  )
}

function DecorativeBackground({
  reduceMotion,
  color,
}: {
  reduceMotion: boolean | null
  color: string
}) {
  const loop = (duration: number, delay = 0) => ({
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  })
  const washed = `color-mix(in srgb, ${color} 45%, white)`

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.svg
        className="absolute -left-10 top-[12%] h-[220px] w-[220px] opacity-40 md:h-[300px] md:w-[300px]"
        style={{ color: washed }}
        viewBox="0 0 200 200"
        fill="none"
        animate={reduceMotion ? undefined : { rotate: [0, 6, 0], opacity: [0.28, 0.45, 0.28] }}
        transition={loop(10)}
      >
        <circle cx="50" cy="100" r="78" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="50" cy="100" r="54" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </motion.svg>

      <motion.svg
        className="absolute -right-12 top-[22%] h-[240px] w-[240px] opacity-40 md:h-[320px] md:w-[320px]"
        style={{ color: washed }}
        viewBox="0 0 200 200"
        fill="none"
        animate={reduceMotion ? undefined : { rotate: [0, -8, 0], opacity: [0.25, 0.42, 0.25] }}
        transition={loop(12, 0.6)}
      >
        <circle cx="150" cy="80" r="82" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="150" cy="80" r="58" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      </motion.svg>

      <motion.span
        className="absolute left-[7%] top-[16%]"
        style={{ color }}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -10, 0], opacity: [0.3, 0.75, 0.3], scale: [0.92, 1.1, 0.92] }
        }
        transition={loop(4.2)}
      >
        <SparkleSvg className="h-4 w-4 md:h-5 md:w-5" />
      </motion.span>

      <motion.span
        className="absolute right-[9%] top-[18%]"
        style={{ color }}
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
                opacity: [0.28, 0.7, 0.28],
                scale: [0.9, 1.12, 0.9],
                rotate: [0, 18, 0, -12, 0],
              }
        }
        transition={loop(5, 0.4)}
      >
        <SparkleSvg className="h-3 w-3 md:h-3.5 md:w-3.5" />
      </motion.span>

      <motion.span
        className="absolute bottom-[20%] left-[14%]"
        style={{ color }}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -9, 0], opacity: [0.28, 0.72, 0.28], scale: [0.94, 1.08, 0.94] }
        }
        transition={loop(4.8, 0.8)}
      >
        <SparkleSvg className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </motion.span>

      <motion.span
        className="absolute bottom-[26%] right-[16%]"
        style={{ color }}
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -7, 0],
                opacity: [0.25, 0.68, 0.25],
                scale: [0.9, 1.1, 0.9],
                rotate: [0, -16, 0, 12, 0],
              }
        }
        transition={loop(5.2, 1.1)}
      >
        <SparkleSvg className="h-2.5 w-2.5 md:h-3 md:w-3" />
      </motion.span>

      <motion.span
        className="absolute left-[4%] top-[48%]"
        style={{ color }}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -6, 0], opacity: [0.22, 0.55, 0.22], scale: [0.95, 1.08, 0.95] }
        }
        transition={loop(3.8, 0.3)}
      >
        <SparkleSvg className="h-2 w-2 md:h-2.5 md:w-2.5" />
      </motion.span>

      <motion.span
        className="absolute right-[5%] top-[52%]"
        style={{ color }}
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -7, 0], opacity: [0.2, 0.5, 0.2], scale: [0.94, 1.1, 0.94] }
        }
        transition={loop(4.4, 0.9)}
      >
        <SparkleSvg className="h-2.5 w-2.5" />
      </motion.span>

      <motion.svg
        className="absolute bottom-[14%] right-[8%] h-5 w-5 md:h-6 md:w-6"
        style={{ color: washed }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        animate={reduceMotion ? undefined : { rotate: [0, 90, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={loop(8)}
      >
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[32%] left-[10%] h-4 w-4"
        style={{ color: washed }}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        animate={reduceMotion ? undefined : { rotate: [0, -90, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={loop(9, 1)}
      >
        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
      </motion.svg>
    </div>
  )
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'layout-cta-drop'
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
  const mainRichtext = `${scope}.lcta-drop-richtext, ${scope} .lcta-drop-richtext, ${scope}`
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

function StepCard({
  step,
  index,
  variant,
  stepsFontGroupActive,
  isActive = false,
}: {
  step: StepItem
  index: number
  variant: 'desktop' | 'mobile'
  stepsFontGroupActive: boolean
  isActive?: boolean
}) {
  const imageSrc = getMediaUrlSafe(step.image)
  const imageAlt =
    step.image && typeof step.image === 'object' ? step.image.alt || `Paso ${index + 1}` : `Paso ${index + 1}`
  const tagLabel = step.tag?.label?.trim() || `Paso ${String(index + 1).padStart(2, '0')}`
  const tagBg = sanitizeCssColor(step.tag?.backgroundColor, TAG_BG)
  const tagFg = sanitizeCssColor(step.tag?.textColor, ACCENT)
  const iconBorder = `color-mix(in srgb, ${tagFg} 32%, white)`
  const isMobile = variant === 'mobile'
  const reduceMotion = useReducedMotion()

  if (isMobile) {
    return (
      <article
        className="relative flex h-full w-full flex-col rounded-2xl bg-white"
        style={{ boxShadow: CARD_SHADOW }}
      >
        <span
          className="absolute left-4 top-4 z-20 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide"
          style={{ backgroundColor: tagBg, color: tagFg }}
        >
          {tagLabel}
        </span>

        {/* Imagen por encima del cuerpo de la card para que no la tapen bordes/vecinas */}
        <div className="relative z-20 flex shrink-0 items-center justify-center px-5 pb-0 pt-12">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className="lcta-drop-mobile-img h-auto w-[min(220px,72%)] max-w-[220px] rounded-full object-cover aspect-square"
            />
          ) : (
            <div className="lcta-drop-mobile-img aspect-square w-[min(220px,72%)] max-w-[220px] rounded-full bg-[#FDF2F7]" />
          )}

          <div
            className="lcta-drop-step-icon absolute bottom-0 left-1/2 z-[60] flex h-12 w-12 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 shadow-sm"
            style={{ backgroundColor: tagBg, borderColor: iconBorder, color: ACCENT }}
          >
            <IconMedia icon={step.icon} className="h-6 w-6" imgClassName="h-6 w-6" />
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-6 pb-6 pt-10 text-center">
          {step.content && (
            <RichText
              data={step.content}
              enableGutter={false}
              className={cn(
                'lcta-drop-steps text-sm font-semibold leading-snug',
                stepsFontGroupActive && DROP_FG_RICHTEXT,
                '[&_p]:m-0 [&_strong]:font-bold',
              )}
            />
          )}
        </div>
      </article>
    )
  }

  /* Desktop — foto inset; icono a la izquierda → centro al activar */
  return (
    <article
      className="relative flex h-full min-w-0 flex-col rounded-[20px] bg-white transition-[box-shadow] duration-300"
      style={{
        boxShadow: isActive
          ? `0 16px 44px color-mix(in srgb, ${tagBg} 85%, transparent), 0 0 32px ${tagBg}`
          : CARD_SHADOW,
      }}
    >
      <div className="relative w-full px-3.5 pt-3.5">
        {/* Contenedor de la imagen: el icono se ancla al 50/50 del borde inferior */}
        <div className="relative w-full">
          <div className="aspect-[7/5] w-full overflow-hidden rounded-2xl">
            {imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-[#FDF2F7]" />
            )}

            <span
              className="absolute left-3 top-3 z-10 rounded-full px-3 py-1.5 text-[11px] font-semibold leading-none tracking-wide"
              style={{ backgroundColor: tagBg, color: tagFg }}
            >
              {tagLabel}
            </span>
          </div>

          <motion.div
            className="lcta-drop-step-icon absolute z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full border-[2.5px] shadow-[0_2px_8px_rgba(16,24,53,0.08)]"
            style={{ backgroundColor: tagBg, borderColor: iconBorder, color: ACCENT, top: '100%' }}
            initial={false}
            animate={{
              left: isActive ? '50%' : '18%',
              x: '-50%',
              y: '-50%',
              // Giro 2D parcial (~3% de vuelta) al desplazarse
              rotate: isActive ? 11 : 0,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                    rotate: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
                  }
            }
          >
            <IconMedia icon={step.icon} className="h-[22px] w-[22px]" imgClassName="h-[22px] w-[22px]" />
          </motion.div>
        </div>
      </div>

      <div
        className="flex flex-1 flex-col px-5 pb-7 pt-10 text-center lg:px-7 lg:pb-8"
        style={{ color: NAVY }}
      >
        {step.content && (
          <RichText
            data={step.content}
            enableGutter={false}
            className={cn(
              'lcta-drop-steps text-[15px] font-bold leading-[1.35]',
              stepsFontGroupActive && DROP_FG_RICHTEXT,
              '[&_p]:m-0 [&_strong]:font-bold',
            )}
          />
        )}
      </div>
    </article>
  )
}

function Connector({
  className,
  backgroundColor,
  color,
}: {
  className?: string
  backgroundColor: string
  color: string
}) {
  return (
    <div
      className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-[0_2px_10px_rgba(16,24,53,0.12)]',
        className,
      )}
      style={{
        backgroundColor,
        borderColor: `color-mix(in srgb, ${color} 32%, white)`,
        color,
      }}
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export const LayoutCTADropBlock: React.FC<LayoutCTADropBlockProps> = (props) => {
  const {
    anchorId,
    headerContent,
    headerStyle,
    steps,
    stepsStyle,
    buttons,
    buttonBackgroundColor,
    buttonTextColor,
    backgroundColor,
    showDecorativeSvgs,
    decorativeSvgColor,
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
  } = props

  const reactId = useId().replace(/:/g, '').toLowerCase()
  const rootAttr = `data-lcta-drop-${reactId}`
  const rootSel = `[${rootAttr}]`
  const reduceMotion = useReducedMotion()

  const stepsList = Array.isArray(steps) ? steps.slice(0, 4) : []
  const buttonsList = Array.isArray(buttons) ? buttons.slice(0, 1) : []

  const bg = sanitizeCssColor(backgroundColor, '#FFFFFF')
  const btnBg = sanitizeCssColor(buttonBackgroundColor, ACCENT)
  const btnFg = sanitizeCssColor(buttonTextColor, '#FFFFFF')
  const decorativeColor = sanitizeCssColor(decorativeSvgColor, ACCENT)
  const sectionId = sanitizeAnchorId(anchorId)

  const headerCss = buildSectionFontCss(rootSel, 'lcta-drop-header', headerStyle, {
    fallbackTextColor: NAVY,
  })
  const stepsCss = buildSectionFontCss(rootSel, 'lcta-drop-steps', stepsStyle, {
    fallbackTextColor: NAVY,
  })

  useGoogleFont(googleFontForSection(headerStyle))
  useGoogleFont(googleFontForSection(stepsStyle))

  const scrollRef = useRef<HTMLDivElement>(null)
  const desktopStepsRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [spotlightIndex, setSpotlightIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [introStarted, setIntroStarted] = useState(false)
  const [introVisibleCount, setIntroVisibleCount] = useState(0)
  const [introDone, setIntroDone] = useState(false)
  const desktopActiveIndex = hoveredIndex ?? spotlightIndex

  useEffect(() => {
    const el = scrollRef.current
    if (!el || stepsList.length <= 1) return

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[]
      if (!children.length) return
      const scrollLeft = el.scrollLeft
      let best = 0
      let bestDist = Infinity
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - scrollLeft)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })
      setActiveIndex(best)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [stepsList.length])

  // Desktop intro: al entrar en viewport, revelar cards una a una
  useEffect(() => {
    if (reduceMotion) {
      setIntroStarted(true)
      setIntroVisibleCount(stepsList.length)
      setIntroDone(true)
      return
    }
    if (introStarted || stepsList.length === 0) return

    const el = desktopStepsRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setIntroStarted(true)
        setIntroVisibleCount(1)
        setSpotlightIndex(0)
        obs.disconnect()
      },
      {
        // Empieza cuando ~la mitad del bloque está en viewport (zona central)
        threshold: 0.5,
        rootMargin: '-12% 0px -12% 0px',
      },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduceMotion, introStarted, stepsList.length])

  useEffect(() => {
    if (!introStarted || introDone || reduceMotion) return
    if (introVisibleCount >= stepsList.length) {
      setIntroDone(true)
      return
    }
    const id = window.setTimeout(() => {
      setIntroVisibleCount((prev) => {
        const next = Math.min(prev + 1, stepsList.length)
        setSpotlightIndex(next - 1)
        return next
      })
    }, DESKTOP_INTRO_STEP_MS)
    return () => window.clearTimeout(id)
  }, [introStarted, introVisibleCount, introDone, stepsList.length, reduceMotion])

  // Ciclo spotlight solo cuando terminó la intro
  useEffect(() => {
    if (!introDone || reduceMotion || stepsList.length <= 1 || hoveredIndex !== null) return
    const id = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % stepsList.length)
    }, DESKTOP_CYCLE_MS)
    return () => window.clearInterval(id)
  }, [introDone, stepsList.length, hoveredIndex, reduceMotion])

  const goToSlide = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[index] as HTMLElement | undefined
    if (!child) return
    el.scrollTo({ left: child.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' })
    setActiveIndex(index)
  }

  const fadeUp = reduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      }

  const styleId = `lcta-drop-${reactId}`
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

  return (
    <section
      id={sectionId}
      {...{ [rootAttr]: '' }}
      className={cn(
        'relative py-14 md:py-24',
        layoutCustomWidthVw == null && 'overflow-x-visible md:overflow-x-clip',
        layoutCustomWidthVw != null && 'overflow-x-visible',
      )}
      style={{ backgroundColor: bg }}
    >
      <style>{`
        ${headerCss.css}
        ${stepsCss.css}
        ${rootSel} .lcta-drop-header.lcta-drop-richtext h1,
        ${rootSel} .lcta-drop-header.lcta-drop-richtext h2,
        ${rootSel} .lcta-drop-header .payload-richtext h1,
        ${rootSel} .lcta-drop-header .payload-richtext h2 {
          letter-spacing: -0.025em;
          font-weight: 700;
          line-height: 1.15;
        }
        @media (min-width: 768px) {
          ${rootSel} .lcta-drop-header.lcta-drop-richtext h1,
          ${rootSel} .lcta-drop-header.lcta-drop-richtext h2,
          ${rootSel} .lcta-drop-header .payload-richtext h1,
          ${rootSel} .lcta-drop-header .payload-richtext h2 {
            font-size: clamp(2rem, 3.2vw, 2.75rem);
          }
          ${rootSel} .lcta-drop-header.lcta-drop-richtext p,
          ${rootSel} .lcta-drop-header .payload-richtext p {
            color: #4A5568;
            font-size: 1.0625rem;
            font-weight: 400;
            line-height: 1.55;
            margin-top: 0.75rem;
          }
        }
        /*
          El scroll horizontal fuerza clipping en el eje Y (spec CSS).
          Por eso: card más estrecha que el viewport + padding lateral amplio
          + imagen dimensionada al % de la card (nunca más ancha que el slide).
        */
        ${rootSel} .lcta-drop-carousel-shell {
          overflow: visible;
        }
        ${rootSel} .lcta-drop-carousel {
          display: flex;
          align-items: stretch;
          gap: 0.75rem;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          /* Padding lateral = aire para centrar el slide sin que vecinas tapen la foto */
          padding: 0.5rem 12% 1.25rem;
          scroll-padding-inline: 12%;
        }
        ${rootSel} .lcta-drop-carousel::-webkit-scrollbar { display: none; }
        ${rootSel} .lcta-drop-carousel-item {
          position: relative;
          flex: 0 0 76%;
          max-width: 320px;
          scroll-snap-align: center;
          scroll-snap-stop: always;
        }
        ${rootSel} .lcta-drop-carousel-item.is-active {
          z-index: 40;
        }
        ${rootSel} .lcta-drop-carousel-item:not(.is-active) {
          z-index: 1;
        }
        ${rootSel} .lcta-drop-carousel-item .lcta-drop-mobile-img {
          position: relative;
          z-index: 1;
        }
        ${rootSel} .lcta-drop-carousel-item .lcta-drop-step-icon {
          z-index: 60;
        }
        @media (prefers-reduced-motion: reduce) {
          ${rootSel} .lcta-drop-carousel { scroll-behavior: auto; }
        }
        ${layoutBreakoutCss}
      `}</style>

      {showDecorativeSvgs !== false && (
        <DecorativeBackground reduceMotion={reduceMotion} color={decorativeColor} />
      )}

      <div
        className={cn(
          'relative z-[1] w-full overflow-x-visible md:overflow-visible',
          layoutCustomWidthVw == null
            ? 'mx-auto max-w-[1320px] px-3 sm:px-5 lg:px-6'
            : 'box-border max-w-none px-0',
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
        {headerContent && (
          <motion.div
            className="mx-auto mb-10 max-w-[720px] text-center md:mb-16"
            {...(fadeUp || {})}
          >
            <div style={!headerCss.fontGroupActive ? { color: NAVY } : undefined}>
              <RichText
                data={headerContent}
                enableGutter={false}
                className={cn(
                  'lcta-drop-header',
                  headerCss.fontGroupActive && DROP_FG_RICHTEXT,
                  '[&_h1]:mb-0 [&_h2]:mb-0 [&_h3]:mb-0 [&_p]:mx-auto [&_p]:max-w-2xl [&_p]:text-base [&_p]:font-normal [&_p]:leading-relaxed',
                )}
              />
            </div>
          </motion.div>
        )}

        {/* Desktop: mazo apilado → se reparte; flechas encima */}
        {stepsList.length > 0 && (() => {
          const visibleCount = Math.max(
            introVisibleCount,
            reduceMotion ? stepsList.length : 0,
          )
          const centers = getDeckCenters(visibleCount)
          const visibleSteps = stepsList.slice(0, visibleCount)

          return (
            <div
              ref={desktopStepsRef}
              className="relative mx-auto mb-4 hidden w-full max-w-[1200px] overflow-visible md:mb-6 md:block"
              style={{ minHeight: DESKTOP_DECK_MIN_H }}
            >
              {visibleSteps.map((step, index) => {
                const isActive = !reduceMotion && desktopActiveIndex === index
                const isEmerging =
                  !introDone && !reduceMotion && index === visibleCount - 1 && index > 0
                const targetX = centers[index] ?? 0
                const stackX = index === 0 ? targetX : (centers[index - 1] ?? 0)

                return (
                  <motion.div
                    key={step.id || `step-d-${index}`}
                    className="absolute top-6 will-change-transform"
                    style={{
                      width: DESKTOP_CARD_W,
                      left: '50%',
                      marginLeft: -DESKTOP_CARD_W / 2,
                      // Más a la derecha = más abajo; la última nunca tapa a las anteriores
                      // (ni al salir del mazo ni con spotlight/hover). Flechas en z-50+.
                      zIndex: (() => {
                        const fromBack = stepsList.length - index
                        if (isEmerging) return 1
                        const isLast = index === stepsList.length - 1
                        if (isActive && !isLast) return 40
                        return fromBack
                      })(),
                    }}
                    initial={
                      reduceMotion
                        ? false
                        : index === 0
                          ? { x: 0, y: 12, scale: 0.985, opacity: 1 }
                          : { x: stackX, y: 14, scale: 0.98, opacity: 1 }
                    }
                    animate={{
                      x: targetX,
                      y: 0,
                      scale: isActive ? DESKTOP_SCALE_ACTIVE : 1,
                      opacity: 1,
                    }}
                    transition={{
                      x: { duration: 1.25, ease: DESKTOP_INTRO_EASE },
                      y: { duration: 1.25, ease: DESKTOP_INTRO_EASE },
                      scale: {
                        type: 'spring',
                        stiffness: 120,
                        damping: 24,
                        mass: 1.1,
                      },
                    }}
                    onMouseEnter={() => {
                      if (!introDone && !reduceMotion) return
                      setHoveredIndex(index)
                    }}
                    onMouseLeave={() => {
                      if (!introDone && !reduceMotion) return
                      setSpotlightIndex(index)
                      setHoveredIndex(null)
                    }}
                  >
                    <StepCard
                      step={step}
                      index={index}
                      variant="desktop"
                      stepsFontGroupActive={stepsCss.fontGroupActive}
                      isActive={isActive}
                    />
                  </motion.div>
                )
              })}

              {/* Flechas siempre por encima, aparecen con cada nuevo paso */}
              {visibleCount > 1 &&
                Array.from({ length: visibleCount - 1 }, (_, gapIndex) => {
                  const leftIdx = gapIndex
                  const rightIdx = gapIndex + 1
                  const midX = ((centers[leftIdx] ?? 0) + (centers[rightIdx] ?? 0)) / 2
                  const fromX = centers[leftIdx] ?? 0
                  return (
                    <motion.div
                      key={`conn-d-${rightIdx}`}
                      className="pointer-events-none absolute top-[42%] z-[60]"
                      style={{
                        left: '50%',
                        width: 32,
                        marginLeft: -16,
                      }}
                      initial={
                        reduceMotion
                          ? false
                          : { x: fromX, y: 10, opacity: 0, scale: 0.55 }
                      }
                      animate={{ x: midX, y: 0, opacity: 1, scale: 1 }}
                      transition={{
                        x: { duration: 1.25, ease: DESKTOP_INTRO_EASE },
                        y: { duration: 1.1, ease: DESKTOP_INTRO_EASE },
                        opacity: { duration: 0.55, ease: DESKTOP_INTRO_EASE, delay: 0.2 },
                        scale: { duration: 0.7, ease: DESKTOP_INTRO_EASE, delay: 0.15 },
                      }}
                    >
                      <Connector
                        className="mx-auto"
                        backgroundColor={sanitizeCssColor(
                          visibleSteps[leftIdx]?.tag?.backgroundColor,
                          TAG_BG,
                        )}
                        color={sanitizeCssColor(visibleSteps[leftIdx]?.tag?.textColor, ACCENT)}
                      />
                    </motion.div>
                  )
                })}
            </div>
          )
        })()}

        {/* Mobile: carrusel + dots */}
        {stepsList.length > 0 && (
          <motion.div
            className="lcta-drop-carousel-shell relative z-20 -mx-3 mb-8 sm:-mx-5 md:hidden"
            {...(fadeUp
              ? { ...fadeUp, transition: { ...fadeUp.transition, delay: 0.08 } }
              : {})}
          >
            <div ref={scrollRef} className="lcta-drop-carousel">
              {stepsList.map((step, index) => (
                <div
                  key={step.id || `step-m-${index}`}
                  className={cn(
                    'lcta-drop-carousel-item',
                    activeIndex === index && 'is-active',
                  )}
                >
                  <StepCard
                    step={step}
                    index={index}
                    variant="mobile"
                    stepsFontGroupActive={stepsCss.fontGroupActive}
                  />
                </div>
              ))}
            </div>

            {stepsList.length > 1 && (
              <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Pasos">
                {stepsList.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-label={`Ir al paso ${index + 1}`}
                    onClick={() => goToSlide(index)}
                    className="h-2.5 w-2.5 rounded-full transition-colors"
                    style={{
                      backgroundColor: activeIndex === index ? ACCENT : DOT_INACTIVE,
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {buttonsList.length > 0 && (
          <motion.div
            className="flex justify-center md:-mt-2"
            {...(fadeUp
              ? { ...fadeUp, transition: { ...fadeUp.transition, delay: 0.16 } }
              : {})}
          >
            {buttonsList.map((btn, index) => {
              const iconSvg = btn.iconSVG?.trim()
                ? sanitizeSVG(btn.iconSVG)
                : sanitizeSVG(DEFAULT_ARROW_SVG)
              return (
                <CMSLink
                  key={btn.id || `cta-${index}`}
                  type={btn.link?.type}
                  newTab={btn.link?.newTab}
                  reference={
                    btn.link?.reference as React.ComponentProps<typeof CMSLink>['reference']
                  }
                  url={btn.link?.url}
                  label={null}
                  appearance="inline"
                  className="inline-flex h-12 w-auto max-w-none items-center justify-center gap-2 rounded-full px-9 text-base font-semibold transition-opacity hover:opacity-90 md:h-[52px] md:px-10 md:text-[1.05rem]"
                  style={{
                    background: `linear-gradient(90deg, ${btnBg} 0%, #7a1848 55%, #5c1240 100%)`,
                    color: btnFg,
                  }}
                >
                  <span>{btn.link?.label || 'Empezar'}</span>
                  {iconSvg && (
                    <span
                      className="inline-flex h-[1.1em] w-[1.1em]"
                      dangerouslySetInnerHTML={{ __html: iconSvg }}
                      aria-hidden
                    />
                  )}
                </CMSLink>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
