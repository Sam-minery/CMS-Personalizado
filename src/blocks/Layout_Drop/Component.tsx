'use client'

import React, { useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { Checkbox } from '@/components/ui/checkbox'
import type { Page, Post } from '@/payload-types'
import { expandFontGroupRichTextFields } from '@/utilities/expandFontGroupRichTextFields'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_DESKTOP_MIN,
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

/** Tipos locales alineados con CTA1_SENDA_Alter para resolver URLs absolutas de media. */
type MediaLike = {
  url?: string | null
  alt?: string | null
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

type ShadowLevel = 'none' | 'sm' | 'md' | 'lg' | 'xl'

type ElementsStyle = SectionTypography & {
  borderColor?: string | null
  shadow?: ShadowLevel | null
  /** @deprecated usar `shadow` */
  enableShadow?: boolean | null
}

/** Sombras suaves y difusas (blur alto, opacidad baja, sin bordes duros). */
const SHADOW_STYLE: Record<ShadowLevel, string> = {
  none: 'none',
  sm: '0 4px 20px rgba(16, 24, 53, 0.06)',
  md: '0 8px 32px rgba(16, 24, 53, 0.08)',
  lg: '0 14px 44px rgba(16, 24, 53, 0.10)',
  xl: '0 20px 56px rgba(16, 24, 53, 0.12)',
}

function resolveShadowStyle(
  shadow?: ShadowLevel | null,
  legacyEnable?: boolean | null,
  fallback: ShadowLevel = 'none',
): string {
  if (shadow && shadow in SHADOW_STYLE) return SHADOW_STYLE[shadow]
  if (legacyEnable === true) return SHADOW_STYLE.md
  if (legacyEnable === false) return SHADOW_STYLE.none
  return SHADOW_STYLE[fallback]
}

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
}

type FormFieldConfig = {
  icon?: IconGroup | null
  value?: string | null
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

export type LayoutDropBlockType = {
  blockName?: string
  blockType?: 'layoutDrop'
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerStyle?: SectionTypography | null
  elements?: Array<{
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    id?: string | null
  }> | null
  elementsStyle?: ElementsStyle | null
  contactForm?: (SectionTypography & {
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    nameField?: FormFieldConfig | null
    phoneField?: FormFieldConfig | null
    emailField?: FormFieldConfig | null
    borderColor?: string | null
    shadow?: ShadowLevel | null
    /** @deprecated usar `shadow` */
    enableShadow?: boolean | null
  }) | null
  privacyPolicy?: (SectionTypography & {
    required?: boolean | null
    content?: DefaultTypedEditorState | null
  }) | null
  button?: {
    label?: string | null
    iconSVG?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    link?: LinkType | null
  } | null
  blockHeightMode?: 'auto' | 'viewport' | 'custom' | null
  customBlockHeightPx?: number | null
  backgroundType?: 'video' | 'image' | 'color' | null
  video?: { youtubeUrl?: string | null } | null
  backgroundImage?: MediaLike | null
  backgroundColor?: string | null
  backgroundColorMode?: 'solid' | 'gradient' | null
  gradientStartColor?: string | null
  gradientEndColor?: string | null
  gradientDirection?: string | null
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
}

const DEFAULT_BTN_BG = 'linear-gradient(90deg, #e91e63 0%, #6a1b4d 100%)'
const ACCENT = '#c2185b'
const NAVY = '#101835'

const DROP_FG_RICHTEXT =
  'layout-drop-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'layout-drop'
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

function resolveLinkHref(link?: LinkType | null): string | null {
  if (!link) return null
  if (link.type === 'custom' && link.url) return link.url
  if (link.type === 'reference' && link.reference?.value) {
    const value = link.reference.value
    if (typeof value === 'object' && value !== null && 'slug' in value) {
      const slug = (value as Page | Post).slug
      if (!slug) return null
      const prefix = link.reference.relationTo === 'posts' ? '/posts' : ''
      return `${prefix}/${slug}`
    }
  }
  return null
}

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  const safe = trimmed.replace(/[^#a-zA-Z0-9(),.%\s-]/g, '')
  return safe || ''
}

function buildDropGradient(direction: string, startColor: string, endColor: string): string {
  const a = sanitizeCssColor(startColor) || startColor.trim()
  const b = sanitizeCssColor(endColor) || endColor.trim()
  if (!a || !b) return ''
  return `linear-gradient(${direction} in oklch, ${a} 0%, ${a} 44%, color-mix(in oklch, ${a} 91%, ${b}) 54%, color-mix(in oklch, ${a} 72%, ${b}) 64%, color-mix(in oklch, ${a} 48%, ${b}) 74%, ${b} 88%, ${b} 100%)`
}

function normalizeDropFontGroup(raw: unknown): FontGroupData | null {
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
    const fg = normalizeDropFontGroup(style.fontGroup)
    if (fg?.fontFamilyName?.trim()) {
      return `"${fg.fontFamilyName.replace(/"/g, '\\"')}"`
    }
  }
  if (style.useCustomFont) {
    const file = style.customFontFile && typeof style.customFontFile === 'object' ? style.customFontFile : null
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

/**
 * CSS tipográfico acotado a un scope (clase de sección), para no pintar todo el bloque.
 * Si includeBtnLabel, aplica body size/line-height a `.layout-drop-btn-label`.
 */
function buildSectionFontCss(
  rootSel: string,
  scopeClass: string,
  style: SectionTypography | null | undefined,
  opts?: { includeBtnLabel?: boolean; fallbackTextColor?: string },
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
  const mainRichtext = `${scope}.layout-drop-richtext, ${scope} .layout-drop-richtext, ${scope}`
  const planRichtext = mainRichtext
  const payloadRichtext = `${scope} .payload-richtext`
  const btnLabels = opts?.includeBtnLabel ? `${rootSel} .layout-drop-btn-label` : ''

  const fontGroupObj =
    style.useFontGroup && style.fontGroup && typeof style.fontGroup === 'object'
      ? normalizeDropFontGroup(style.fontGroup)
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
      `${scope}, ${scope} *, ${scope} a, ${scope} button, ${scope} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
    )
    if (btnLabels) {
      styles.push(`${btnLabels}, ${btnLabels} * { font-family: ${fontValue} !important; }`)
    }

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
        styles.push(`${scope} [data-text-size="caption"] { font-size: ${typo.caption} !important; }`)
      }
    }

    const bodyBtnDesk = trimFontGroupValue(fontGroupObj.typography?.body)
    if (bodyBtnDesk && btnLabels) {
      styles.push(`${btnLabels} { font-size: ${bodyBtnDesk} !important; }`)
    }

    const typoMob = fontGroupObj.typographyMobile
    if (typoMob) {
      const mobRules: string[] = []
      const t = (v: string | null | undefined) => (typeof v === 'string' ? v.trim() : '') || ''
      if (t(typoMob.h1))
        mobRules.push(`${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${t(typoMob.h1)} !important; }`)
      if (t(typoMob.h2))
        mobRules.push(`${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${t(typoMob.h2)} !important; }`)
      if (t(typoMob.h3))
        mobRules.push(`${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${t(typoMob.h3)} !important; }`)
      if (t(typoMob.h4))
        mobRules.push(`${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${t(typoMob.h4)} !important; }`)
      if (t(typoMob.h5))
        mobRules.push(`${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${t(typoMob.h5)} !important; }`)
      if (t(typoMob.h6))
        mobRules.push(`${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${t(typoMob.h6)} !important; }`)
      appendTypographyBodyListSizeRules(typoMob, mainRichtext, planRichtext, payloadRichtext, (rule) =>
        mobRules.push(rule),
      )
      const capM = t(typoMob.caption)
      if (capM) {
        mobRules.push(
          `${mainRichtext} .caption, ${payloadRichtext} .caption { font-size: ${capM} !important; }`,
        )
        mobRules.push(`${scope} [data-text-size="caption"] { font-size: ${capM} !important; }`)
      }
      const bodyMobBtn = t(typoMob.body)
      if (bodyMobBtn && btnLabels) {
        mobRules.push(`${btnLabels} { font-size: ${bodyMobBtn} !important; }`)
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

    const bodyLhDesk = trimFontGroupValue(fontGroupObj.lineHeights?.body)
    const mergedLh = mergeFontGroupLineHeightsWithFallback(
      fontGroupObj.lineHeights,
      fontGroupObj.lineHeightsMobile,
    )
    const bodyLhMob = trimFontGroupValue(mergedLh?.body)
    if (bodyLhDesk && btnLabels) {
      styles.push(
        `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${btnLabels} { line-height: ${bodyLhDesk} !important; } }`,
      )
    }
    if (bodyLhMob && btnLabels) {
      styles.push(
        `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${btnLabels} { line-height: ${bodyLhMob} !important; } }`,
      )
    }

    const weightMap: Record<string, string> = {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      heavy: '800',
    }
    for (const [key, w] of Object.entries(weightMap)) {
      styles.push(`${scope} [data-text-weight="${key}"] { font-weight: ${w} !important; }`)
    }
  } else if (style.useCustomFont && fontFileUrl && customFontFamilyName && isValidFontFile) {
    const familyEsc = customFontFamilyName.replace(/"/g, '\\"')
    styles.push(`
      @font-face {
        font-family: "${familyEsc}";
        src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `)
    styles.push(
      `${scope}, ${scope} *, ${scope} a, ${scope} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: "${familyEsc}" !important; }`,
    )
    if (btnLabels) {
      styles.push(`${btnLabels}, ${btnLabels} * { font-family: "${familyEsc}" !important; }`)
    }
  } else if (style.fontFamily && style.fontFamily !== 'default') {
    styles.push(
      `${scope}, ${scope} *, ${scope} a, ${scope} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${style.fontFamily} !important; }`,
    )
    if (btnLabels) {
      styles.push(`${btnLabels}, ${btnLabels} * { font-family: ${style.fontFamily} !important; }`)
    }
  }

  const textColor = sanitizeCssColor(style.textColor) || opts?.fallbackTextColor || ''
  if (textColor) {
    styles.push(
      `${scope}, ${scope} p, ${scope} h1, ${scope} h2, ${scope} h3, ${scope} h4, ${scope} h5, ${scope} h6, ${scope} li, ${scope} span:not(strong):not(b), ${scope} a { color: ${textColor} !important; }`,
    )
  }

  const boldColor = sanitizeCssColor(style.boldTextColor)
  if (boldColor) {
    styles.push(`${scope} strong, ${scope} b { color: ${boldColor} !important; }`)
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
        <img
          src={src}
          alt={getIconAlt(icon)}
          className={cn('object-contain', imgClassName)}
        />
      </span>
    )
  }

  if (useMedia) return null

  const svg = icon.iconSVG && String(icon.iconSVG).trim() ? sanitizeSVG(icon.iconSVG) : ''
  if (!svg) return null
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden
    />
  )
}

export const LayoutDropBlock: React.FC<LayoutDropBlockType> = (props) => {
  const {
    anchorId,
    headerContent,
    headerStyle,
    elements,
    elementsStyle,
    contactForm,
    privacyPolicy,
    button,
    blockHeightMode = 'auto',
    customBlockHeightPx,
    backgroundType = 'color',
    video,
    backgroundImage,
    backgroundColor,
    backgroundColorMode = 'solid',
    gradientStartColor,
    gradientEndColor,
    gradientDirection,
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
  } = props

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `layout-drop-${uniqueId}`
  const rootSel = `[data-layout-drop-font="${styleId}"]`

  useGoogleFont(googleFontForSection(headerStyle))
  useGoogleFont(googleFontForSection(elementsStyle))
  useGoogleFont(googleFontForSection(contactForm))
  useGoogleFont(googleFontForSection(privacyPolicy))

  const headerCss = buildSectionFontCss(rootSel, 'layout-drop-header', headerStyle, {
    fallbackTextColor: NAVY,
  })
  const elementsCss = buildSectionFontCss(rootSel, 'layout-drop-elements', elementsStyle, {
    fallbackTextColor: NAVY,
  })
  const formCss = buildSectionFontCss(rootSel, 'layout-drop-form', contactForm, {
    includeBtnLabel: true,
    fallbackTextColor: NAVY,
  })
  const privacyCss = buildSectionFontCss(rootSel, 'layout-drop-privacy', privacyPolicy)

  const sectionId = sanitizeAnchorId(anchorId)
  const privacyRequired = privacyPolicy?.required !== false
  const btnLabel = button?.label?.trim() || 'Continuar'
  const btnBg = button?.backgroundColor?.trim() || DEFAULT_BTN_BG
  const btnFg = button?.textColor?.trim() || '#ffffff'
  const btnIconSvg =
    button?.iconSVG && String(button.iconSVG).trim() ? sanitizeSVG(button.iconSVG) : ''

  const cardsBorderColor =
    sanitizeCssColor(elementsStyle?.borderColor) || '#e5e7eb'
  const formBorderColor =
    sanitizeCssColor(contactForm?.borderColor) || '#e5e7eb'
  const cardsShadowStyle = resolveShadowStyle(
    elementsStyle?.shadow,
    elementsStyle?.enableShadow,
    'none',
  )
  const formShadowStyle = resolveShadowStyle(
    contactForm?.shadow,
    contactForm?.enableShadow,
    'lg',
  )

  const getYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : ''
  }

  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = getYouTubeVideoId(url)
    return videoId
      ? 'https://www.youtube.com/embed/' +
          videoId +
          '?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1'
      : ''
  }

  const embedUrl = video?.youtubeUrl ? getYouTubeEmbedUrl(video.youtubeUrl) : ''
  const backgroundImageUrl = getMediaUrlSafe(backgroundImage)

  const heightClasses =
    blockHeightMode === 'viewport' ? 'min-h-[60vh] md:min-h-[70vh]' : ''
  const customHeightStyle =
    blockHeightMode === 'custom' && customBlockHeightPx
      ? { minHeight: `${customBlockHeightPx}px` }
      : undefined

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
    headerCss.css,
    elementsCss.css,
    formCss.css,
    privacyCss.css,
    layoutBreakoutCss,
  ]
    .filter(Boolean)
    .join('\n')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage('')

    if (privacyRequired && !acceptPrivacy) {
      setSubmitMessage('Debes aceptar la política de privacidad para continuar.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/form-custom-2-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionData: [
            { field: 'name', value: name },
            { field: 'phone', value: phone },
            { field: 'email', value: email },
            { field: 'source', value: 'layoutDrop' },
          ],
          formType: 'layoutDrop',
        }),
      })

      if (!response.ok) {
        setSubmitMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
        return
      }

      setName('')
      setPhone('')
      setEmail('')
      setAcceptPrivacy(false)
      setSubmitMessage('¡Gracias! Hemos recibido tus datos correctamente.')

      const href = resolveLinkHref(button?.link)
      if (href) {
        if (button?.link?.newTab) {
          window.open(href, '_blank', 'noopener,noreferrer')
        } else {
          window.location.href = href
        }
      }
    } catch (error) {
      console.error('Error submitting Layout Drop form:', error)
      setSubmitMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const gradientCssDirection =
    gradientDirection === 'to-left'
      ? 'to left'
      : gradientDirection === 'to-bottom'
        ? 'to bottom'
        : gradientDirection === 'to-top'
          ? 'to top'
          : gradientDirection === 'diagonal-down'
            ? '135deg'
            : gradientDirection === 'diagonal-up'
              ? '45deg'
              : 'to right'

  return (
    <>
      {allBlockStyles ? <style>{allBlockStyles}</style> : null}
      <section
        id={sectionId}
        data-layout-drop-font={styleId}
        className={cn(
          'layout-drop relative overflow-x-clip',
          heightClasses,
          layoutCustomWidthVw == null && 'px-[5%]',
          layoutCustomWidthVw != null && 'px-0',
        )}
        style={customHeightStyle}
      >
        {/* Fondo full-bleed (overflow aquí para no recortar sombras del contenido) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {backgroundType === 'video' && (embedUrl || video?.youtubeUrl) && (
            <>
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    height: '100vh',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                  }}
                  title="Video de fondo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="absolute inset-0 h-full w-full"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    height: '100vh',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                  }}
                  autoPlay
                  loop
                  muted
                >
                  <source src={video?.youtubeUrl || ''} type="video/mp4" />
                </video>
              )}
            </>
          )}

          {backgroundType === 'image' && backgroundImageUrl && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}

          {(backgroundType === 'color' || !backgroundType) && (
            <>
              {backgroundColorMode === 'gradient' &&
              gradientStartColor &&
              gradientEndColor ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: buildDropGradient(
                      gradientCssDirection,
                      gradientStartColor,
                      gradientEndColor,
                    ),
                  }}
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: backgroundColor?.trim() || '#ffffff' }}
                />
              )}
            </>
          )}

          {backgroundType !== 'color' && backgroundType != null && (
            <div className="absolute inset-0 bg-black/60" />
          )}
        </div>

        {/* Decoración suave solo en fondo color sólido */}
        {(backgroundType === 'color' || !backgroundType) &&
          backgroundColorMode !== 'gradient' && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 -top-32 z-[1] h-72 w-72 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(233,30,99,0.12) 0%, transparent 70%)',
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 top-10 z-[1] h-80 w-80 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(156,39,176,0.10) 0%, transparent 70%)',
                }}
              />
            </>
          )}

        <div
          className={cn(
            'relative z-10 min-w-0 py-16 md:py-20 lg:py-24',
            layoutCustomWidthVw != null && 'overflow-x-visible',
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
              {headerContent && (
                <div
                  className={cn(
                    'layout-drop-header mx-auto mb-10 max-w-3xl text-center md:mb-12 lg:mb-14',
                    headerCss.fontGroupActive && DROP_FG_RICHTEXT,
                    !headerCss.fontGroupActive &&
                      '[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight md:[&_h1]:text-4xl lg:[&_h1]:text-5xl [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight md:[&_h2]:text-4xl lg:[&_h2]:text-5xl [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-tight md:[&_h3]:text-3xl [&_p]:mt-4 [&_p]:text-base [&_p]:leading-relaxed md:[&_p]:text-lg [&_strong]:font-bold',
                  )}
                >
                  <RichText data={headerContent} enableGutter={false} enableProse={false} />
                </div>
              )}

              <div className="grid grid-cols-1 items-stretch gap-8 overflow-visible lg:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.75fr)] lg:gap-10">
                <div className="grid grid-cols-2 gap-4 overflow-visible p-1 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {(elements || []).map((element, index) => (
                    <div
                      key={element.id || index}
                      className={cn(
                        'flex min-w-0 overflow-hidden rounded-2xl border-2 bg-white',
                        'flex-col items-center justify-center gap-3 px-3 py-5 text-center sm:gap-4 sm:px-4 sm:py-6',
                        'lg:min-h-[240px] lg:gap-5 lg:px-4 lg:py-12',
                        'origin-center transition-[transform,filter] duration-300 ease-out will-change-transform',
                        'hover:z-10 hover:scale-[1.06] hover:drop-shadow-[0_0_18px_rgba(233,30,99,0.45)]',
                      )}
                      style={{
                        borderColor: cardsBorderColor,
                        boxShadow: cardsShadowStyle,
                      }}
                    >
                      <div
                        className={cn(
                          'flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full sm:h-[5.5rem] sm:w-[5.5rem]',
                          'lg:h-[6.5rem] lg:w-[6.5rem]',
                        )}
                        style={{ backgroundColor: 'rgba(233, 30, 99, 0.08)' }}
                      >
                        <IconMedia
                          icon={element.icon}
                          className="h-[3.25rem] w-[3.25rem] sm:h-[3.75rem] sm:w-[3.75rem] lg:h-[4.5rem] lg:w-[4.5rem]"
                          imgClassName="h-[3.25rem] w-[3.25rem] sm:h-[3.75rem] sm:w-[3.75rem] lg:h-[4.5rem] lg:w-[4.5rem]"
                        />
                      </div>
                      {element.content && (
                        <div
                          className={cn(
                            'layout-drop-elements w-full min-w-0 max-w-full break-words text-sm font-bold leading-snug sm:text-base',
                            '[&_p]:m-0 [&_p]:max-w-full [&_p]:break-words [&_strong]:font-bold [&_*]:max-w-full',
                            elementsCss.fontGroupActive && DROP_FG_RICHTEXT,
                          )}
                        >
                          <RichText
                            data={element.content}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className="flex h-full min-h-[420px] flex-col rounded-2xl border-2 bg-white px-5 py-8 sm:px-6 sm:py-10 lg:min-h-[520px] lg:px-6 lg:py-12"
                  style={{
                    borderColor: formBorderColor,
                    boxShadow: formShadowStyle,
                  }}
                >
                  <div className="mb-6 flex items-start gap-3 sm:mb-8">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)' }}
                    >
                      <IconMedia
                        icon={contactForm?.icon}
                        className="h-8 w-8"
                        imgClassName="h-8 w-8"
                      />
                    </div>
                    {contactForm?.content && (
                      <div
                        className={cn(
                          'layout-drop-form min-w-0 flex-1',
                          formCss.fontGroupActive && DROP_FG_RICHTEXT,
                          !formCss.fontGroupActive &&
                            '[&_h1]:text-lg [&_h1]:font-bold [&_h1]:leading-snug [&_h2]:text-lg [&_h2]:font-bold [&_h2]:leading-snug [&_h3]:text-lg [&_h3]:font-bold [&_h3]:leading-snug [&_h4]:text-lg [&_h4]:font-bold [&_h4]:leading-snug [&_p]:mt-1 [&_p]:text-sm [&_p]:leading-relaxed [&_p:first-child]:mt-0',
                        )}
                      >
                        <RichText
                          data={contactForm.content}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    )}
                  </div>

                  <form className="flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
                    <label className="relative block">
                      <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-gray-400">
                        <IconMedia
                          icon={contactForm?.nameField?.icon}
                          className="h-5 w-5"
                          imgClassName="h-5 w-5"
                        />
                      </span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={contactForm?.nameField?.value || 'Nombre'}
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                      />
                    </label>

                    <label className="relative block">
                      <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-gray-400">
                        <IconMedia
                          icon={contactForm?.phoneField?.icon}
                          className="h-5 w-5"
                          imgClassName="h-5 w-5"
                        />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={contactForm?.phoneField?.value || 'Teléfono'}
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                      />
                    </label>

                    <label className="relative block">
                      <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-gray-400">
                        <IconMedia
                          icon={contactForm?.emailField?.icon}
                          className="h-5 w-5"
                          imgClassName="h-5 w-5"
                        />
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={contactForm?.emailField?.value || 'Email'}
                        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                      />
                    </label>

                    <div className="mt-1 flex items-start gap-3">
                      <Checkbox
                        id={`${sectionId}-privacy`}
                        checked={acceptPrivacy}
                        onCheckedChange={(v) => setAcceptPrivacy(v === true)}
                        required={privacyRequired}
                        className="mt-0.5 shrink-0"
                      />
                      {privacyPolicy?.content && (
                        <label
                          htmlFor={`${sectionId}-privacy`}
                          className={cn(
                            'layout-drop-privacy cursor-pointer text-xs leading-relaxed',
                            privacyCss.fontGroupActive && DROP_FG_RICHTEXT,
                            !privacyCss.fontGroupActive &&
                              'text-gray-500 [&_a]:font-semibold [&_a]:underline [&_p]:m-0 [&_strong]:font-semibold',
                            !privacyPolicy?.textColor &&
                              !privacyPolicy?.boldTextColor &&
                              '[&_a]:text-[color:var(--layout-drop-accent)] [&_strong]:text-[color:var(--layout-drop-accent)]',
                          )}
                          style={
                            {
                              ['--layout-drop-accent' as string]: ACCENT,
                            } as React.CSSProperties
                          }
                        >
                          <RichText
                            data={privacyPolicy.content}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </label>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        'mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5',
                        'font-semibold transition-[filter,opacity] duration-200',
                        !formCss.fontGroupActive && 'text-base',
                        'hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2',
                        'disabled:pointer-events-none disabled:opacity-60',
                      )}
                      style={{
                        background: btnBg,
                        color: btnFg,
                      }}
                    >
                      <span className="layout-drop-btn-label">
                        {isSubmitting ? 'Enviando…' : btnLabel}
                      </span>
                      {btnIconSvg ? (
                        <span
                          className="inline-flex h-5 w-5 items-center justify-center [&_svg]:h-full [&_svg]:w-full"
                          dangerouslySetInnerHTML={{ __html: btnIconSvg }}
                          aria-hidden
                        />
                      ) : (
                        <span aria-hidden className="text-lg leading-none">
                          →
                        </span>
                      )}
                    </button>

                    {submitMessage && (
                      <p
                        className={cn(
                          'text-center text-sm',
                          submitMessage.includes('Error') || submitMessage.includes('Debes')
                            ? 'text-red-600'
                            : 'text-green-600',
                        )}
                        role="status"
                      >
                        {submitMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LayoutDropBlock
