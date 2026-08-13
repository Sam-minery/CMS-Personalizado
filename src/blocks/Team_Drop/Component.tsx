'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { motion, useReducedMotion } from 'motion/react'

import RichText from '@/components/RichText'
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

type MemberItem = {
  id?: string | null
  image?: MediaLike | null
  content?: DefaultTypedEditorState | null
}

export type TeamDropBlockProps = {
  blockName?: string
  blockType?: 'teamDrop'
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerStyle?: SectionTypography | null
  dividerIcon?: IconGroup | null
  secondaryContent?: DefaultTypedEditorState | null
  secondaryStyle?: SectionTypography | null
  members?: MemberItem[] | null
  membersStyle?: SectionTypography | null
  backgroundColor?: string | null
  showDecorativeSvgs?: boolean | null
}

const ACCENT = '#C2005F'
const NAVY = '#101835'
const MUTED = '#4A5568'
const DOT_INACTIVE = '#F8BBD0'
const GLOW = '#F9EFF8'
const CARD_SHADOW = '0 10px 32px rgba(16, 24, 53, 0.08)'

const DEFAULT_DIVIDER_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 16" fill="none" aria-hidden="true">
  <line x1="0" y1="8" x2="48" y2="8" stroke="${ACCENT}" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="54" cy="8" r="1.5" fill="${ACCENT}"/>
  <circle cx="60" cy="8" r="3.5" fill="${ACCENT}"/>
  <circle cx="66" cy="8" r="1.5" fill="${ACCENT}"/>
  <line x1="72" y1="8" x2="120" y2="8" stroke="${ACCENT}" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`.trim()

const DROP_FG_RICHTEXT =
  'team-drop-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

function SparkleSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 1.5 13.4 9.1 21 10.5l-7.6 1.4L12 19.5l-1.4-7.6L3 10.5l7.6-1.4L12 1.5Z" />
    </svg>
  )
}

function BurstSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.2 13.1 8.4 19.2 7.1 14.6 11.2 20.5 14.1 13.5 13.4 14.2 20.5 12 15.2 9.8 20.5 10.5 13.4 3.5 14.1 9.4 11.2 4.8 7.1 10.9 8.4 12 2.2Z" />
    </svg>
  )
}

function PlusSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path d="M12 5v14M5 12h14" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function DecorativeBackground({ reduceMotion }: { reduceMotion: boolean | null }) {
  const loop = (duration: number, delay = 0) => ({
    duration,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  })

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Arcos abiertos izquierdos */}
      <motion.svg
        className="absolute -left-14 top-[6%] h-[240px] w-[240px] text-[#E8B4D0] opacity-40 md:h-[320px] md:w-[320px]"
        viewBox="0 0 200 200"
        fill="none"
        animate={reduceMotion ? undefined : { rotate: [0, 5, 0], opacity: [0.28, 0.45, 0.28] }}
        transition={loop(11)}
      >
        <path
          d="M20 40c28 18 46 48 46 84s-18 66-46 84"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M42 52c22 16 36 40 36 72s-14 56-36 72"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M62 68c14 12 24 30 24 56s-10 44-24 56"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Arcos abiertos derechos */}
      <motion.svg
        className="absolute -right-16 top-[14%] h-[260px] w-[260px] text-[#D4B8E8] opacity-40 md:h-[340px] md:w-[340px]"
        viewBox="0 0 200 200"
        fill="none"
        animate={reduceMotion ? undefined : { rotate: [0, -6, 0], opacity: [0.25, 0.42, 0.25] }}
        transition={loop(13, 0.5)}
      >
        <path
          d="M180 36c-30 16-50 46-50 86s20 70 50 86"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M158 50c-24 14-40 38-40 72s16 58 40 72"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
          strokeLinecap="round"
        />
        <path
          d="M138 66c-16 12-26 30-26 56s10 44 26 56"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Curva suave inferior izquierda */}
      <motion.svg
        className="absolute -left-6 bottom-[10%] h-[140px] w-[180px] text-[#E8B4D0] opacity-35 md:h-[180px] md:w-[220px]"
        viewBox="0 0 180 120"
        fill="none"
        animate={reduceMotion ? undefined : { y: [0, -6, 0], opacity: [0.22, 0.38, 0.22] }}
        transition={loop(9, 0.8)}
      >
        <path
          d="M10 90c30-40 70-56 110-40 22 9 38 28 50 50"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <path
          d="M28 96c24-30 56-42 88-28 18 8 30 22 40 40"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.65"
          strokeLinecap="round"
        />
      </motion.svg>

      <motion.span
        className="absolute left-[9%] top-[13%] text-[#C2005F]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -10, 0], opacity: [0.3, 0.75, 0.3], scale: [0.92, 1.1, 0.92] }
        }
        transition={loop(4.2)}
      >
        <BurstSvg className="h-4 w-4 md:h-5 md:w-5" />
      </motion.span>

      <motion.span
        className="absolute right-[11%] top-[15%] text-[#C2005F]"
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
        className="absolute bottom-[20%] left-[14%] text-[#C2005F]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -9, 0], opacity: [0.28, 0.72, 0.28], scale: [0.94, 1.08, 0.94] }
        }
        transition={loop(4.8, 0.8)}
      >
        <PlusSvg className="h-3.5 w-3.5 md:h-4 md:w-4" />
      </motion.span>

      <motion.span
        className="absolute bottom-[24%] right-[13%] text-[#C2005F]"
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
        <BurstSvg className="h-2.5 w-2.5 md:h-3 md:w-3" />
      </motion.span>

      <motion.span
        className="absolute right-[6%] top-[48%] text-[#C2005F]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -6, 0], opacity: [0.22, 0.55, 0.22], scale: [0.95, 1.08, 0.95] }
        }
        transition={loop(3.9, 0.6)}
      >
        <PlusSvg className="h-2.5 w-2.5 md:h-3 md:w-3" />
      </motion.span>

      <motion.span
        className="absolute left-[5%] top-[46%] text-[#C2005F]"
        animate={
          reduceMotion
            ? undefined
            : { y: [0, -7, 0], opacity: [0.2, 0.5, 0.2], scale: [0.94, 1.1, 0.94] }
        }
        transition={loop(4.4, 1)}
      >
        <SparkleSvg className="h-2 w-2 md:h-2.5 md:w-2.5" />
      </motion.span>
    </div>
  )
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'team-drop'
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
  const mainRichtext = `${scope}.team-drop-richtext, ${scope} .team-drop-richtext, ${scope}`
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
  fallbackSvg,
}: {
  icon?: IconGroup | null
  className?: string
  imgClassName?: string
  fallbackSvg?: string
}) {
  const useMedia = icon?.useMedia !== false && icon?.mediaImage
  const src = useMedia ? getMediaUrlSafe(icon?.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={getIconAlt(icon)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  if (icon?.useMedia === true) {
    if (!fallbackSvg) return null
  }

  const customSvg = icon?.iconSVG && String(icon.iconSVG).trim() ? sanitizeSVG(icon.iconSVG) : ''
  const svg = customSvg || (fallbackSvg ? sanitizeSVG(fallbackSvg) : '')
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

function MemberCard({
  member,
  index,
  total,
  variant,
  membersFontGroupActive,
}: {
  member: MemberItem
  index: number
  total: number
  variant: 'desktop' | 'mobile'
  membersFontGroupActive: boolean
}) {
  const imageSrc = getMediaUrlSafe(member.image)
  const imageAlt =
    member.image && typeof member.image === 'object'
      ? member.image.alt || `Miembro ${index + 1}`
      : `Miembro ${index + 1}`
  const counter = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  if (variant === 'mobile') {
    return (
      <article
        className="relative flex h-full w-full flex-col items-center overflow-hidden rounded-2xl bg-white px-5 pb-6 pt-7"
        style={{ boxShadow: CARD_SHADOW }}
      >
        {/*
          Contenedor con tamaño fijo al de la foto: el glow se deforma hacia la derecha
          pero se queda dentro de la card (overflow del article), sin recortar la imagen.
        */}
        <div className="relative mb-3 aspect-square w-[72%] max-w-[180px] shrink-0">
          <span
            className="pointer-events-none absolute left-[6%] top-[-2%] z-0 h-[104%] w-[108%] rounded-[46%_54%_48%_52%]"
            style={{
              background: `radial-gradient(ellipse 72% 68% at 62% 46%, ${GLOW} 0%, ${GLOW} 55%, rgba(249, 239, 248, 0.4) 78%, transparent 100%)`,
            }}
            aria-hidden
          />
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={imageAlt}
              className="relative z-[1] h-full w-full rounded-full object-cover"
            />
          ) : (
            <div className="relative z-[1] h-full w-full rounded-full bg-[#FDF2F7]" />
          )}
        </div>

        {member.content && (
          <RichText
            data={member.content}
            enableGutter={false}
            className={cn(
              'team-drop-members w-full text-center text-[17px] font-bold leading-[1.3]',
              membersFontGroupActive && DROP_FG_RICHTEXT,
              '[&_p]:m-0 [&_p]:mt-0.5 [&_p]:text-[14px] [&_p]:font-normal [&_p]:leading-snug',
              '[&_p:first-child]:mt-0 [&_strong]:font-bold',
            )}
          />
        )}

        <span
          className="mt-5 inline-flex rounded-full px-3.5 py-1 text-[12px] font-semibold tracking-wide"
          style={{ backgroundColor: GLOW, color: ACCENT }}
        >
          {counter}
        </span>
      </article>
    )
  }

  return (
    <article
      className="flex h-full w-full flex-col overflow-hidden rounded-[18px] bg-white"
      style={{ boxShadow: CARD_SHADOW }}
    >
      <div className="relative aspect-[6/7] w-full overflow-hidden bg-white">
        <span
          className="absolute -right-[8%] top-[8%] z-0 h-[88%] w-[108%] rounded-[46%_54%_48%_52%]"
          style={{
            background: `radial-gradient(ellipse 72% 68% at 62% 46%, ${GLOW} 0%, ${GLOW} 55%, rgba(249, 239, 248, 0.4) 78%, transparent 100%)`,
          }}
          aria-hidden
        />
        <span
          className="absolute right-[8%] top-[19%] z-[2] h-2.5 w-2.5 rounded-full border-2 border-white"
          style={{ backgroundColor: '#EA0B7C' }}
          aria-hidden
        />
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-[1] h-full w-full object-cover object-top"
          />
        ) : (
          <div className="relative z-[1] h-full w-full bg-[#FDF2F7]" />
        )}
      </div>

      <div className="flex flex-1 flex-col px-3.5 pb-3 pt-1.5 text-left" style={{ color: NAVY }}>
        {member.content && (
          <RichText
            data={member.content}
            enableGutter={false}
            className={cn(
              'team-drop-members text-[15px] font-bold leading-[1.25]',
              membersFontGroupActive && DROP_FG_RICHTEXT,
              '[&_p]:m-0 [&_p]:mt-0.5 [&_p]:text-[12.5px] [&_p]:font-normal [&_p]:leading-snug [&_p]:text-[#4A5568]',
              '[&_p:first-child]:mt-0 [&_strong]:font-bold [&_strong]:text-[#101835]',
            )}
          />
        )}
      </div>
    </article>
  )
}

export const TeamDropBlock: React.FC<TeamDropBlockProps> = (props) => {
  const {
    anchorId,
    headerContent,
    headerStyle,
    dividerIcon,
    secondaryContent,
    secondaryStyle,
    members,
    membersStyle,
    backgroundColor,
    showDecorativeSvgs,
  } = props

  const reactId = useId().replace(/:/g, '').toLowerCase()
  const rootAttr = `data-team-drop-${reactId}`
  const rootSel = `[${rootAttr}]`
  const reduceMotion = useReducedMotion()

  const membersList = Array.isArray(members) ? members.slice(0, 6) : []
  const bg = sanitizeCssColor(backgroundColor, '#FFFFFF')
  const sectionId = sanitizeAnchorId(anchorId)

  const headerCss = buildSectionFontCss(rootSel, 'team-drop-header', headerStyle, {
    fallbackTextColor: NAVY,
  })
  const secondaryCss = buildSectionFontCss(rootSel, 'team-drop-secondary', secondaryStyle, {
    fallbackTextColor: MUTED,
  })
  const membersCss = buildSectionFontCss(rootSel, 'team-drop-members', membersStyle, {
    fallbackTextColor: NAVY,
  })

  useGoogleFont(googleFontForSection(headerStyle))
  useGoogleFont(googleFontForSection(secondaryStyle))
  useGoogleFont(googleFontForSection(membersStyle))

  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || membersList.length <= 1) return

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
  }, [membersList.length])

  const goToSlide = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const next = Math.max(0, Math.min(index, membersList.length - 1))
    const child = el.children[next] as HTMLElement | undefined
    if (!child) return
    el.scrollTo({ left: child.offsetLeft, behavior: reduceMotion ? 'auto' : 'smooth' })
    setActiveIndex(next)
  }

  const fadeUp = reduceMotion
    ? undefined
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <section
      id={sectionId}
      {...{ [rootAttr]: '' }}
      className="relative overflow-x-clip py-14 md:py-24"
      style={{ backgroundColor: bg }}
    >
      <style>{`
        ${headerCss.css}
        ${secondaryCss.css}
        ${membersCss.css}
        ${rootSel} .team-drop-header.team-drop-richtext h1,
        ${rootSel} .team-drop-header.team-drop-richtext h2,
        ${rootSel} .team-drop-header .payload-richtext h1,
        ${rootSel} .team-drop-header .payload-richtext h2 {
          letter-spacing: -0.025em;
          font-weight: 700;
          line-height: 1.15;
          margin: 0;
        }
        ${rootSel} .team-drop-header.team-drop-richtext p,
        ${rootSel} .team-drop-header .payload-richtext p {
          margin: 0;
        }
        @media (min-width: 768px) {
          ${rootSel} .team-drop-header.team-drop-richtext h1,
          ${rootSel} .team-drop-header.team-drop-richtext h2,
          ${rootSel} .team-drop-header .payload-richtext h1,
          ${rootSel} .team-drop-header .payload-richtext h2 {
            font-size: clamp(2rem, 3.2vw, 2.75rem);
          }
        }
        ${rootSel} .team-drop-secondary.team-drop-richtext p,
        ${rootSel} .team-drop-secondary .payload-richtext p {
          color: inherit;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
        }
        @media (min-width: 768px) {
          ${rootSel} .team-drop-secondary.team-drop-richtext p,
          ${rootSel} .team-drop-secondary .payload-richtext p {
            font-size: 1.0625rem;
          }
        }
        ${rootSel} .team-drop-carousel {
          display: flex;
          align-items: stretch;
          gap: 0.75rem;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 0.5rem 14% 0.75rem;
          scroll-padding-inline: 14%;
        }
        ${rootSel} .team-drop-carousel::-webkit-scrollbar { display: none; }
        ${rootSel} .team-drop-carousel-item {
          position: relative;
          flex: 0 0 72%;
          max-width: 300px;
          scroll-snap-align: center;
          scroll-snap-stop: always;
        }
        @media (prefers-reduced-motion: reduce) {
          ${rootSel} .team-drop-carousel { scroll-behavior: auto; }
        }
      `}</style>

      {showDecorativeSvgs !== false && (
        <DecorativeBackground reduceMotion={reduceMotion} />
      )}

      <div className="relative z-[1] mx-auto w-full max-w-[1320px] px-4 sm:px-5 lg:px-6">
        <motion.div
          className="mx-auto mb-10 max-w-[720px] text-center md:mb-14"
          {...(fadeUp || {})}
        >
          {headerContent && (
            <div style={!headerCss.fontGroupActive ? { color: NAVY } : undefined}>
              <RichText
                data={headerContent}
                enableGutter={false}
                className={cn(
                  'team-drop-header',
                  headerCss.fontGroupActive && DROP_FG_RICHTEXT,
                  'text-[1.75rem] font-bold leading-tight md:text-[2.5rem]',
                )}
              />
            </div>
          )}

          <div className="mx-auto mt-4 flex justify-center md:mt-5">
            <IconMedia
              icon={dividerIcon}
              className="h-4 w-[120px] text-[#C2005F]"
              imgClassName="h-4 w-auto"
              fallbackSvg={DEFAULT_DIVIDER_SVG}
            />
          </div>

          {secondaryContent && (
            <div
              className="mx-auto mt-5 max-w-[640px] md:mt-6"
              style={!secondaryCss.fontGroupActive ? { color: MUTED } : undefined}
            >
              <RichText
                data={secondaryContent}
                enableGutter={false}
                className={cn(
                  'team-drop-secondary',
                  secondaryCss.fontGroupActive && DROP_FG_RICHTEXT,
                )}
              />
            </div>
          )}
        </motion.div>

        {/* Desktop: fila de cards */}
        {membersList.length > 0 && (
          <motion.div
            className="mb-4 hidden md:block"
            {...(fadeUp
              ? { ...fadeUp, transition: { ...fadeUp.transition, delay: 0.08 } }
              : {})}
          >
            <div
              className={cn(
                'mx-auto grid w-full gap-4 lg:gap-5',
                membersList.length >= 6 && 'grid-cols-6',
                membersList.length === 5 && 'grid-cols-5',
                membersList.length === 4 && 'grid-cols-4',
                membersList.length === 3 && 'grid-cols-3 max-w-[900px]',
                membersList.length === 2 && 'grid-cols-2 max-w-[560px]',
                membersList.length === 1 && 'grid-cols-1 max-w-[240px]',
              )}
            >
              {membersList.map((member, index) => (
                <MemberCard
                  key={member.id || `member-d-${index}`}
                  member={member}
                  index={index}
                  total={membersList.length}
                  variant="desktop"
                  membersFontGroupActive={membersCss.fontGroupActive}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Mobile: carrusel + flechas + dots */}
        {membersList.length > 0 && (
          <motion.div
            className="relative -mx-4 mb-2 sm:-mx-5 md:hidden"
            {...(fadeUp
              ? { ...fadeUp, transition: { ...fadeUp.transition, delay: 0.08 } }
              : {})}
          >
            <div className="relative">
              {membersList.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Miembro anterior"
                    onClick={() => goToSlide(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(16,24,53,0.12)] disabled:opacity-40"
                    style={{ color: ACCENT }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Miembro siguiente"
                    onClick={() => goToSlide(activeIndex + 1)}
                    disabled={activeIndex >= membersList.length - 1}
                    className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(16,24,53,0.12)] disabled:opacity-40"
                    style={{ color: ACCENT }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}

              <div ref={scrollRef} className="team-drop-carousel">
                {membersList.map((member, index) => (
                  <div
                    key={member.id || `member-m-${index}`}
                    className="team-drop-carousel-item"
                  >
                    <MemberCard
                      member={member}
                      index={index}
                      total={membersList.length}
                      variant="mobile"
                      membersFontGroupActive={membersCss.fontGroupActive}
                    />
                  </div>
                ))}
              </div>
            </div>

            {membersList.length > 1 && (
              <div
                className="mt-5 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Equipo"
              >
                {membersList.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={activeIndex === index}
                    aria-label={`Ir al miembro ${index + 1}`}
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
      </div>
    </section>
  )
}
