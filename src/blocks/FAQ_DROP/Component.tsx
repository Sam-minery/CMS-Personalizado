'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { expandFontGroupRichTextFields } from '@/utilities/expandFontGroupRichTextFields'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'
import { useGoogleFont } from '@/utilities/useGoogleFont'

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

function normalizeFaqDropFontGroup(raw: unknown): FontGroupData | null {
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

type FAQQuestion = {
  icon?: IconGroup | null
  iconBackgroundColor?: string | null
  questionRichText?: DefaultTypedEditorState | null
  answerRichText?: DefaultTypedEditorState | null
  accentColor?: string | null
  id?: string | null
}

export type FAQDropBlockType = {
  blockName?: string
  blockType?: 'faqDrop'
  anchorId?: string | null
  mainContent?: DefaultTypedEditorState | null
  backgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  questionsSectionBackgroundColor?: string | null
  questions?: FAQQuestion[] | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
  blockIndex?: number
}

const NAVY = '#101835'
const ACCENT = '#a1004a'
const ICON_BG = '#fce4ec'

const FAQ_FG_RICHTEXT =
  'faq-drop-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

/** Separador SVG hardcodeado (igual que Layout2 DROP). */
const HEADER_DIVIDER_SVG = (
  <svg
    width="72"
    height="12"
    viewBox="0 0 72 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M2 6H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M42 6H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M36 2.5L39.5 6L36 9.5L32.5 6L36 2.5Z" fill="currentColor" />
  </svg>
)

const DEFAULT_BUBBLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 6.75h10A3.25 3.25 0 0 1 20.25 10v5A3.25 3.25 0 0 1 17 18.25h-2.7L10.4 21.1a.75.75 0 0 1-1.15-.63v-2.22H7A3.25 3.25 0 0 1 3.75 15V10A3.25 3.25 0 0 1 7 6.75Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'faq-drop'
}

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '') || ''
}

function normalizeHexInput(color: string): string {
  const c = color.trim()
  if (!c) return c
  if (c.startsWith('#')) return c
  if (/^[0-9a-fA-F]{6}$/.test(c) || /^[0-9a-fA-F]{3}$/.test(c)) return `#${c}`
  return c
}

function parseRgb(color: string): { r: number; g: number; b: number } | null {
  const c = normalizeHexInput(color)
  const hex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.exec(c)
  if (hex) {
    const h = hex[1]
    const r = h.length === 3 ? parseInt(h[0] + h[0], 16) : parseInt(h.slice(0, 2), 16)
    const g = h.length === 3 ? parseInt(h[1] + h[1], 16) : parseInt(h.slice(2, 4), 16)
    const b = h.length === 3 ? parseInt(h[2] + h[2], 16) : parseInt(h.slice(4, 6), 16)
    return { r, g, b }
  }
  const rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(c)
  if (rgb) return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) }
  return null
}

/** Mezcla hacia blanco. amount 0–1. */
function mixTone(color: string, amount: number): string {
  const rgb = parseRgb(color)
  if (!rgb) return sanitizeCssColor(color)
  const r = Math.round(rgb.r + (255 - rgb.r) * amount)
  const g = Math.round(rgb.g + (255 - rgb.g) * amount)
  const b = Math.round(rgb.b + (255 - rgb.b) * amount)
  return `rgb(${r},${g},${b})`
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
  const useMedia = Boolean(icon?.useMedia && icon.mediaImage)
  const src = useMedia ? getMediaUrlSafe(icon?.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <img src={src} alt={getIconAlt(icon)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  if (useMedia) return null

  const svg =
    icon?.iconSVG && String(icon.iconSVG).trim()
      ? sanitizeSVG(icon.iconSVG)
      : DEFAULT_BUBBLE_SVG
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

function PlusMinusToggle() {
  return (
    <span className="faq-drop-toggle" aria-hidden>
      <span className="faq-drop-toggle-h" />
      <span className="faq-drop-toggle-v" />
    </span>
  )
}

export const FAQDropBlock: React.FC<FAQDropBlockType> = (props) => {
  const {
    anchorId,
    blockIndex = 0,
    mainContent,
    backgroundColor,
    textColor,
    boldTextColor,
    questionsSectionBackgroundColor,
    questions,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const anchorSlug = sanitizeAnchorId(anchorId)
  const styleId = `faq-drop-${anchorSlug}-${blockIndex}-${uniqueId}`
  const sectionId = anchorSlug

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeFaqDropFontGroup(fontGroup)
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
    const sel = `[data-faq-drop="${styleId}"]`
    const mainRichtext = `${sel} .faq-drop-richtext`
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

  const blockBg = sanitizeCssColor(backgroundColor) || '#ffffff'
  const primaryColor = sanitizeCssColor(textColor) || NAVY
  const boldColor = sanitizeCssColor(boldTextColor) || ACCENT
  const sectionBg = sanitizeCssColor(questionsSectionBackgroundColor) || '#ffffff'
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const questionsList = Array.isArray(questions)
    ? questions.filter((q) => hasRichText(q?.questionRichText) || hasRichText(q?.answerRichText)).slice(0, 10)
    : []

  const fontStyles = buildFontStyles()

  return (
    <section
      id={sectionId}
      data-faq-drop={styleId}
      className="faq-drop relative w-full overflow-hidden"
      style={
        {
          backgroundColor: blockBg,
          ...fontStyle,
          ['--faq-text' as string]: primaryColor,
          ['--faq-bold' as string]: boldColor,
          ['--faq-section-bg' as string]: sectionBg,
        } as React.CSSProperties
      }
    >
      {fontStyles ? <style>{fontStyles}</style> : null}
      <style>{`
        [data-faq-drop="${styleId}"] .faq-drop-richtext strong,
        [data-faq-drop="${styleId}"] .faq-drop-richtext b {
          color: var(--faq-bold, inherit) !important;
        }
        [data-faq-drop="${styleId}"] .faq-drop-main {
          font-size: clamp(1.75rem, 3.4vw, 2.5rem);
          line-height: 1.2;
          font-weight: 700;
          text-align: center;
          color: var(--faq-text);
        }
        [data-faq-drop="${styleId}"] .faq-drop-main .payload-richtext :is(h1, h2, h3, h4, h5, h6, p) {
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          margin: 0;
          text-align: center;
        }
        [data-faq-drop="${styleId}"] .faq-drop-panel {
          background: transparent;
        }
        [data-faq-drop="${styleId}"] .faq-drop-item {
          background-color: var(--faq-section-bg, #ffffff);
          border: 1px solid #efe6ea !important;
          overflow: hidden;
        }
        [data-faq-drop="${styleId}"] .faq-drop-item[data-state=open] {
          border-color: var(--faq-accent-light) !important;
        }
        [data-faq-drop="${styleId}"] .faq-drop-item > h3 {
          margin: 0 !important;
          padding: 0;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          display: flex;
          width: 100%;
        }
        [data-faq-drop="${styleId}"] .faq-drop-item > [data-state=open] {
          background-color: var(--faq-accent-light);
        }
        [data-faq-drop="${styleId}"] .faq-drop-trigger {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 0.85rem;
          background: var(--faq-section-bg, #ffffff);
          color: var(--faq-text);
          text-align: left;
        }
        [data-faq-drop="${styleId}"] .faq-drop-item[data-state=open] .faq-drop-trigger {
          color: var(--faq-accent);
        }
        [data-faq-drop="${styleId}"] .faq-drop-item[data-state=open] .faq-drop-question,
        [data-faq-drop="${styleId}"] .faq-drop-item[data-state=open] .faq-drop-question * {
          color: var(--faq-accent) !important;
        }
        [data-faq-drop="${styleId}"] .faq-drop-question {
          color: var(--faq-text);
          font-weight: 600;
          font-size: 0.95rem;
          line-height: 1.35;
        }
        [data-faq-drop="${styleId}"] .faq-drop-question .payload-richtext :is(h1, h2, h3, h4, h5, h6, p) {
          margin: 0;
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
        }
        [data-faq-drop="${styleId}"] .faq-drop-answer {
          background-color: var(--faq-accent-light);
          color: var(--faq-text);
          font-size: 0.9rem;
          line-height: 1.55;
          font-weight: 400;
        }
        [data-faq-drop="${styleId}"] .faq-drop-answer .payload-richtext :is(h1, h2, h3, h4, h5, h6, p) {
          margin: 0;
          font-size: inherit;
          line-height: inherit;
        }
        [data-faq-drop="${styleId}"] .faq-drop-answer .payload-richtext p + p {
          margin-top: 0.6rem;
        }
        [data-faq-drop="${styleId}"] .faq-drop-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.75rem;
          height: 1.75rem;
          flex-shrink: 0;
          box-sizing: border-box;
          color: var(--faq-accent);
          border: 1.5px solid var(--faq-accent-light);
          border-radius: 999px;
        }
        [data-faq-drop="${styleId}"] .faq-drop-toggle-h,
        [data-faq-drop="${styleId}"] .faq-drop-toggle-v {
          position: absolute;
          top: 50%;
          left: 50%;
          background: currentColor;
          border-radius: 1px;
        }
        [data-faq-drop="${styleId}"] .faq-drop-toggle-h {
          width: 10px;
          height: 2px;
          transform: translate(-50%, -50%);
        }
        [data-faq-drop="${styleId}"] .faq-drop-toggle-v {
          width: 2px;
          height: 10px;
          transform: translate(-50%, -50%);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        [data-faq-drop="${styleId}"] .faq-drop-item[data-state=open] .faq-drop-toggle-v {
          transform: translate(-50%, -50%) rotate(90deg);
          opacity: 0;
        }
        [data-faq-drop="${styleId}"] .faq-drop-icon-wrap {
          background-color: var(--faq-icon-bg);
          color: var(--faq-accent);
        }
        @media (min-width: 768px) {
          [data-faq-drop="${styleId}"] .faq-drop-panel {
            background-color: var(--faq-section-bg, #ffffff);
            box-shadow: 0 10px 40px rgba(16, 24, 53, 0.08);
          }
          [data-faq-drop="${styleId}"] .faq-drop-item {
            box-shadow: none;
          }
          [data-faq-drop="${styleId}"] .faq-drop-question {
            font-size: 1.05rem;
          }
          [data-faq-drop="${styleId}"] .faq-drop-answer {
            font-size: 0.95rem;
          }
          [data-faq-drop="${styleId}"] .faq-drop-toggle {
            width: 2rem;
            height: 2rem;
          }
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-32 lg:py-20 xl:px-40 2xl:px-48">
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center sm:mb-12">
          {hasRichText(mainContent) ? (
            <div
              className={cn(
                'faq-drop-main faq-drop-richtext mb-4 w-full sm:mb-5',
                fontGroupTypographyActive && FAQ_FG_RICHTEXT,
              )}
            >
              <RichText data={mainContent!} enableGutter={false} enableProse={false} />
            </div>
          ) : null}

          <div className="text-[var(--faq-bold,#a1004a)]" aria-hidden>
            {HEADER_DIVIDER_SVG}
          </div>
        </div>

        {questionsList.length > 0 ? (
          <div className="faq-drop-panel rounded-2xl md:rounded-[1.5rem] md:px-8 md:py-8 lg:px-10 lg:py-10">
            <Accordion type="multiple" className="grid items-start justify-stretch gap-3 md:gap-3.5">
              {questionsList.map((q, index) => {
                const accent = sanitizeCssColor(q.accentColor) || ACCENT
                const accentLight = mixTone(accent, 0.86)
                const iconBg = sanitizeCssColor(q.iconBackgroundColor) || ICON_BG
                return (
                  <AccordionItem
                    key={q.id || `faq-drop-item-${index}`}
                    value={`faq-drop-item-${index}`}
                    className="faq-drop-item rounded-xl border-0 first:border-t-0 shadow-[0_6px_24px_rgba(16,24,53,0.07)] md:rounded-xl"
                    style={
                      {
                        ['--faq-accent' as string]: accent,
                        ['--faq-accent-light' as string]: accentLight,
                        ['--faq-icon-bg' as string]: iconBg,
                      } as React.CSSProperties
                    }
                  >
                    <AccordionTrigger
                      icon={<PlusMinusToggle />}
                      className="faq-drop-trigger px-4 py-3.5 md:px-5 md:py-4 [&[data-state=open]>svg]:rotate-0"
                    >
                      <span className="flex min-w-0 flex-1 items-center gap-3 md:gap-3.5">
                        <span
                          className="faq-drop-icon-wrap flex h-9 w-9 shrink-0 items-center justify-center rounded-full md:h-10 md:w-10"
                          aria-hidden
                        >
                          <IconMedia
                            icon={q.icon}
                            className="h-4 w-4 text-current [&_svg]:h-full [&_svg]:w-full [&_svg]:text-current md:h-[1.15rem] md:w-[1.15rem]"
                            imgClassName="h-4 w-4 md:h-[1.15rem] md:w-[1.15rem]"
                          />
                        </span>
                        <span className="faq-drop-question min-w-0 flex-1 text-left">
                          {hasRichText(q.questionRichText) ? (
                            <div
                              className={cn(
                                'faq-drop-richtext',
                                fontGroupTypographyActive && FAQ_FG_RICHTEXT,
                              )}
                            >
                              <RichText
                                data={q.questionRichText!}
                                enableGutter={false}
                                enableProse={false}
                              />
                            </div>
                          ) : null}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="faq-drop-answer px-5 py-5 md:px-8 md:py-6 md:pl-[5.5rem] lg:px-10 lg:py-7 lg:pl-24">
                      {hasRichText(q.answerRichText) ? (
                        <div
                          className={cn(
                            'faq-drop-richtext',
                            fontGroupTypographyActive && FAQ_FG_RICHTEXT,
                          )}
                        >
                          <RichText
                            data={q.answerRichText!}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </div>
                      ) : null}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default FAQDropBlock
