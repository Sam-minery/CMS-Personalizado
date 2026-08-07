'use client'

import React from 'react'
import Image from 'next/image'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'
import {
  SENDA_CUSTOM_BREAKOUT_ATTR,
  buildSendaCalcBreakoutResponsiveCss,
  sendaBreakoutOnlyBoxSizing,
  sendaCalcBreakoutInlineStyle,
  sendaResolveOptionalMobileWidthVw,
} from '@/utilities/sendaCustomWidthBreakout'
import { sendaBlockButtonNativeClassName } from '@/utilities/sendaBlockButtonClasses'
import { appendSendaInjectedButtonBorderRadius } from '@/utilities/sendaInjectedButtonRadius'
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

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
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

function normalizeAppFontGroup(raw: unknown): FontGroupData | null {
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

const APP_ALTER_FG_RICHTEXT =
  'app-senda-alter-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

type LinkType = {
  type?: 'custom' | 'reference' | null
  url?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: { slug?: string } | string | number
  } | null
  label?: string | null
}

type ImageMedia =
  | {
      url?: string | null
      alt?: string | null
      sizes?: {
        medium?: { url?: string }
        small?: { url?: string }
      }
    }
  | number
  | null

/** URL de la imagen: prioriza .url del media, luego sizes. Misma lógica que Hero_SENDA/CTA2_SENDA: ruta tal cual para mismo origen en next/image en producción. */
function getImageUrl(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as { url?: string | null; sizes?: { medium?: { url?: string }; small?: { url?: string } } }
  return m.url ?? m.sizes?.medium?.url ?? m.sizes?.small?.url ?? ''
}

function getImageAlt(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  return (media as { alt?: string }).alt ?? 'App image'
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

/** Grupo imagen de fondo: subida (media) o URL externa (src). Misma lógica que BloqueIMC_SENDA. */
type BackgroundImageGroup = {
  useMedia?: boolean | null
  mediaImage?: ImageMedia | null
  src?: string | null
}

/** Grupo para imagen 1 e imagen 2: subida (media) o URL externa (src), con alt. Misma lógica que Layout_SENDA. */
type ContentImageGroup = {
  useMedia?: boolean | null
  mediaImage?: ImageMedia | null
  src?: string | null
  alt?: string | null
}

type ButtonItem = {
  title?: string | null
  link?: LinkType | null
  iconSVG?: string | null
}

function getBackgroundImageUrl(group: BackgroundImageGroup | null | undefined): string {
  if (!group) return ''
  if (group.useMedia && group.mediaImage && typeof group.mediaImage === 'object') {
    return getImageUrl(group.mediaImage)
  }
  if (typeof group.src === 'string' && group.src.trim()) return group.src.trim()
  return ''
}

function getContentImageUrl(
  group: ContentImageGroup | ImageMedia | null | undefined,
): string {
  if (!group) return ''
  const g = group as ContentImageGroup
  if ('useMedia' in g && g.useMedia && g.mediaImage && typeof g.mediaImage === 'object') {
    return getImageUrl(g.mediaImage)
  }
  if ('src' in g && typeof g.src === 'string' && g.src.trim()) return g.src.trim()
  /* Compatibilidad con datos antiguos: image1/image2 como upload directo */
  if (typeof group === 'object' && 'url' in group) return getImageUrl(group as ImageMedia)
  return ''
}

function getContentImageAlt(
  group: ContentImageGroup | ImageMedia | null | undefined,
  fallback: string,
): string {
  if (!group) return fallback
  const g = group as ContentImageGroup
  if ('useMedia' in g && g.useMedia && g.mediaImage && typeof g.mediaImage === 'object') {
    return (g.mediaImage as { alt?: string }).alt ?? g.alt ?? fallback
  }
  if ('alt' in g && typeof g.alt === 'string' && g.alt.trim()) return g.alt.trim()
  if (typeof group === 'object' && 'alt' in group) return (group as { alt?: string }).alt ?? fallback
  return fallback
}

const MOBILE_ALTER_IMG_CLASS = 'h-auto w-full max-w-[279px] object-contain'

function readMediaDimensions(media: unknown): { width: number; height: number } | null {
  if (!media || typeof media !== 'object') return null
  const o = media as { width?: number | null; height?: number | null }
  const w = typeof o.width === 'number' ? o.width : null
  const h = typeof o.height === 'number' ? o.height : null
  if (w != null && h != null && w > 0 && h > 0) return { width: w, height: h }
  return null
}

/** Dimensiones del upload Payload; null si solo URL externa o media sin width/height. */
function getContentImageIntrinsicDimensions(
  group: ContentImageGroup | ImageMedia | null | undefined,
): { width: number; height: number } | null {
  if (!group || typeof group === 'number') return null
  const g = group as ContentImageGroup
  if ('useMedia' in g && g.useMedia && g.mediaImage && typeof g.mediaImage === 'object') {
    const d = readMediaDimensions(g.mediaImage)
    if (d) return d
  }
  if (typeof group === 'object' && 'url' in group) {
    const d = readMediaDimensions(group)
    if (d) return d
  }
  return null
}

function AppSendaAlterMobileImage({
  url,
  alt,
  intrinsic,
}: {
  url: string
  alt: string
  intrinsic: { width: number; height: number } | null
}) {
  if (!url) return null
  if (intrinsic) {
    return (
      <Image
        src={url}
        alt={alt}
        width={intrinsic.width}
        height={intrinsic.height}
        className={MOBILE_ALTER_IMG_CLASS}
        sizes="279px"
      />
    )
  }
  return (
    // URL externa o media sin dimensiones: alto natural según el recurso
    // eslint-disable-next-line @next/next/no-img-element
    <img src={url} alt={alt} className={MOBILE_ALTER_IMG_CLASS} loading="lazy" decoding="async" />
  )
}

export type AppSendaAlterBlockProps = {
  blockType?: string
  anchorId?: string | null
  content?: DefaultTypedEditorState | null
  contentDesktop?: DefaultTypedEditorState | null
  contentMobile1?: DefaultTypedEditorState | null
  contentMobile2?: DefaultTypedEditorState | null
  contentMobile3?: DefaultTypedEditorState | null
  backgroundImage?: BackgroundImageGroup | null
  backgroundColor?: string | null
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
  cardBackgroundColor?: string | null
  contentColor?: string | null
  boldTextColor?: string | null
  contentBelowImagesColor?: string | null
  buttonsBackgroundColor?: string | null
  buttonsTextColor?: string | null
  /** Grupo (useMedia/mediaImage/src/alt) o legacy: upload directo (ImageMedia) */
  image1?: ContentImageGroup | ImageMedia | null
  imageMobile1?: ContentImageGroup | ImageMedia | null
  imageMobile2?: ContentImageGroup | ImageMedia | null
  imageMobile3?: ContentImageGroup | ImageMedia | null
  buttons?: ButtonItem[] | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

export const AppSendaAlterBlock: React.FC<AppSendaAlterBlockProps> = (props) => {
  const {
    anchorId,
    content,
    contentDesktop,
    contentMobile1,
    contentMobile2,
    contentMobile3,
    backgroundImage,
    backgroundColor,
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
    cardBackgroundColor,
    contentColor,
    boldTextColor,
    contentBelowImagesColor,
    buttonsBackgroundColor,
    buttonsTextColor,
    image1,
    imageMobile1,
    imageMobile2,
    imageMobile3,
    buttons,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `app-senda-alter-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeAppFontGroup(fontGroup)
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
    if (fontGroupObj?.fontFamilyName) return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }

  const selectedFontFamily = getFontFamily()
  useGoogleFont(fontGroupTypographyActive ? undefined : selectedFontFamily)

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []
    const sel = `[data-app-senda-alter-block="${styleId}"]`
    const mainRichtext = `${sel} .app-senda-alter-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    const appBtnLabels = `${sel} .app-senda-alter-buttons .app-senda-alter-btn-label`

    if (fontGroupTypographyActive && fontGroupObj) {
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
            `${mainRichtext} p .caption, ${mainRichtext} .payload-richtext .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${typo.caption} !important; }`,
          )
          styles.push(`${sel} [data-text-size="caption"] { font-size: ${typo.caption} !important; }`)
        }
      }

      const bodyBtnDesk = trimFontGroupValue(fontGroupObj.typography?.body)
      if (bodyBtnDesk) {
        styles.push(`${appBtnLabels} { font-size: ${bodyBtnDesk} !important; }`)
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
          mobRules.push(
            `${mainRichtext} p .caption, ${mainRichtext} .payload-richtext .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${capM} !important; }`,
          )
          mobRules.push(`${sel} [data-text-size="caption"] { font-size: ${capM} !important; }`)
        }

        const bodyMobBtn = t(typoMob.body)
        if (bodyMobBtn) {
          mobRules.push(`${appBtnLabels} { font-size: ${bodyMobBtn} !important; }`)
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
      if (bodyLhDesk) {
        styles.push(
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${appBtnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${appBtnLabels} { line-height: ${bodyLhMob} !important; } }`,
        )
      }

      styles.push(
        `${mainRichtext} h1, ${mainRichtext} h2, ${mainRichtext} h3, ${mainRichtext} h4, ${payloadRichtext} h1, ${payloadRichtext} h2, ${payloadRichtext} h3, ${payloadRichtext} h4 { letter-spacing: 0.02em; }`,
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
      styles.push(`
        @font-face {
          font-family: "${customFontFamilyName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `)
      const fontValue = `"${customFontFamilyName.replace(/"/g, '\\"')}"`
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )
    } else if (selectedFontFamily) {
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${selectedFontFamily} !important; }`,
      )
    }

    if (backgroundColor) {
      styles.push(`${sel}.app-senda-alter-section { background-color: ${backgroundColor} !important; }`)
    }
    if (cardBackgroundColor) {
      styles.push(`${sel} .app-senda-alter-card { background-color: ${cardBackgroundColor} !important; }`)
    }
    if (contentColor) {
      styles.push(
        `${sel} .app-senda-alter-content-richtext, ${sel} .app-senda-alter-content-richtext p, ${sel} .app-senda-alter-content-richtext h1, ${sel} .app-senda-alter-content-richtext h2, ${sel} .app-senda-alter-content-richtext h3, ${sel} .app-senda-alter-content-richtext h4, ${sel} .app-senda-alter-content-richtext h5, ${sel} .app-senda-alter-content-richtext h6, ${sel} .app-senda-alter-content-richtext li, ${sel} .app-senda-alter-content-richtext span, ${sel} .app-senda-alter-content-richtext a { color: ${contentColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `${sel} .app-senda-alter-content-richtext strong, ${sel} .app-senda-alter-content-richtext b, ${sel} .app-senda-alter-below-richtext strong, ${sel} .app-senda-alter-below-richtext b, ${sel} .app-senda-alter-mobile-richtext strong, ${sel} .app-senda-alter-mobile-richtext b { color: ${boldTextColor} !important; }`,
      )
    }
    if (contentBelowImagesColor) {
      styles.push(
        `${sel} .app-senda-alter-below-richtext, ${sel} .app-senda-alter-below-richtext p, ${sel} .app-senda-alter-below-richtext h1, ${sel} .app-senda-alter-below-richtext h2, ${sel} .app-senda-alter-below-richtext h3, ${sel} .app-senda-alter-below-richtext h4, ${sel} .app-senda-alter-below-richtext h5, ${sel} .app-senda-alter-below-richtext h6, ${sel} .app-senda-alter-below-richtext li, ${sel} .app-senda-alter-below-richtext span:not(strong):not(b), ${sel} .app-senda-alter-below-richtext a, ${sel} .app-senda-alter-mobile-richtext, ${sel} .app-senda-alter-mobile-richtext p, ${sel} .app-senda-alter-mobile-richtext h1, ${sel} .app-senda-alter-mobile-richtext h2, ${sel} .app-senda-alter-mobile-richtext h3, ${sel} .app-senda-alter-mobile-richtext h4, ${sel} .app-senda-alter-mobile-richtext h5, ${sel} .app-senda-alter-mobile-richtext h6, ${sel} .app-senda-alter-mobile-richtext li, ${sel} .app-senda-alter-mobile-richtext span:not(strong):not(b), ${sel} .app-senda-alter-mobile-richtext a { color: ${contentBelowImagesColor} !important; }`,
      )
    }
    const appBtn = `${sel} .app-senda-alter-btn`
    appendSendaInjectedButtonBorderRadius(styles, appBtn)
    const btnRules: string[] = [`background-color: ${buttonsBackgroundColor || '#007AFF'} !important;`]
    styles.push(`${appBtn} { ${btnRules.join(' ')} }`)
    styles.push(
      `${appBtn}, ${appBtn} * { color: ${buttonsTextColor || '#ffffff'} !important; }`,
    )

    styles.push(`
      @media (max-width: 767px) {
        ${sel} .app-senda-alter-content-richtext,
        ${sel} .app-senda-alter-content-richtext *,
        ${sel} .app-senda-alter-below-richtext,
        ${sel} .app-senda-alter-below-richtext *,
        ${sel} .app-senda-alter-mobile-richtext,
        ${sel} .app-senda-alter-mobile-richtext * { text-align: left !important; }
      }
      @media (min-width: 768px) {
        ${sel} .app-senda-alter-content-richtext,
        ${sel} .app-senda-alter-content-richtext * { text-align: center !important; }
      }
    `)

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .app-senda-alter-richtext h1, ${sel} .app-senda-alter-richtext h2, ${sel} .app-senda-alter-richtext h3, ${sel} .app-senda-alter-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .app-senda-alter-richtext h4 { font-weight: 900 !important; }`)
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const image1Url = getContentImageUrl(image1)
  const imageMobile1Url = getContentImageUrl(imageMobile1)
  const imageMobile2Url = getContentImageUrl(imageMobile2)
  const imageMobile3Url = getContentImageUrl(imageMobile3)
  const image1Alt = getContentImageAlt(image1, 'App image 1')
  const imageMobile1Alt = getContentImageAlt(imageMobile1, 'App image móvil 1')
  const imageMobile2Alt = getContentImageAlt(imageMobile2, 'App image móvil 2')
  const imageMobile3Alt = getContentImageAlt(imageMobile3, 'App image móvil 3')
  const imageMobile1Intrinsic = getContentImageIntrinsicDimensions(imageMobile1)
  const imageMobile2Intrinsic = getContentImageIntrinsicDimensions(imageMobile2)
  const imageMobile3Intrinsic = getContentImageIntrinsicDimensions(imageMobile3)
  const backgroundImageUrl = getBackgroundImageUrl(backgroundImage)

  const titleRichTextClasses = cn(
    'app-senda-alter-richtext app-senda-alter-content-richtext [&_*]:text-left',
    fontGroupTypographyActive && APP_ALTER_FG_RICHTEXT,
    !fontGroupTypographyActive &&
      '[&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_p]:text-[15px] [&_p]:leading-relaxed',
    !contentColor && '[&_p]:text-neutral-700',
  )
  const belowRichTextClasses = cn(
    'app-senda-alter-richtext app-senda-alter-below-richtext [&_*]:text-left',
    fontGroupTypographyActive && APP_ALTER_FG_RICHTEXT,
    !fontGroupTypographyActive && '[&_p]:text-[15px] [&_p]:leading-relaxed',
    !contentBelowImagesColor &&
      '[&_p]:text-neutral-700 [&_h1]:text-neutral-800 [&_h2]:text-neutral-800 [&_h3]:text-neutral-800 [&_h4]:text-neutral-800 [&_h5]:text-neutral-800 [&_h6]:text-neutral-800',
  )
  const mobileRichTextClasses = cn(
    'app-senda-alter-richtext app-senda-alter-mobile-richtext [&_*]:text-left',
    fontGroupTypographyActive && APP_ALTER_FG_RICHTEXT,
    !fontGroupTypographyActive && '[&_p]:text-[15px] [&_p]:leading-relaxed',
    !contentBelowImagesColor &&
      '[&_p]:text-neutral-700 [&_h1]:text-neutral-800 [&_h2]:text-neutral-800 [&_h3]:text-neutral-800 [&_h4]:text-neutral-800 [&_h5]:text-neutral-800 [&_h6]:text-neutral-800',
  )

  const buttonList = Array.isArray(buttons) ? buttons.slice(0, 2) : []

  const renderButtonRow = (extraClassName?: string) =>
    buttonList.length > 0 ? (
      <div
        className={cn(
          'app-senda-alter-buttons mx-auto flex w-max max-w-full shrink-0 flex-nowrap items-center justify-center gap-4',
          extraClassName,
        )}
      >
        {buttonList.map((button, index) => {
          const linkData = button?.link
          if (!linkData) return null
          const text = button?.title ?? linkData?.label ?? 'Button'
          const iconSVG = button?.iconSVG
          return (
            <CMSLink
              key={index}
              {...(linkData as React.ComponentProps<typeof CMSLink>)}
              label={undefined}
              appearance="inline"
              className={cn(
                'app-senda-alter-btn shadow-sm transition-colors hover:opacity-90',
                sendaBlockButtonNativeClassName,
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              )}
              style={fontStyle}
            >
              <span className="app-senda-alter-btn-label inline-flex items-center justify-center gap-2">
                {text}
                {iconSVG ? (
                  <span
                    className="inline-flex h-5 w-5 shrink-0 [&_svg]:h-full [&_svg]:w-full"
                    dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
                    aria-hidden
                  />
                ) : null}
              </span>
            </CMSLink>
          )
        })}
      </div>
    ) : null

  const appCustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const appCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(applyCustomWidth, customWidthPercentMobile)
  const appBreakoutCss =
    appCustomWidthVw != null && appCustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, appCustomWidthVw, appCustomWidthMobileVw)
      : ''

  /** Fondo a ancho viewport: si en móvil el % es 100 aunque desktop sea menor. */
  const appBgUsesFullViewportWidth =
    appCustomWidthVw != null &&
    (appCustomWidthVw >= 100 ||
      (appCustomWidthMobileVw != null && appCustomWidthMobileVw >= 100))

  /**
   * Con ancho personalizado (cualquier %), la tarjeta debe llenar el contenedor breakout (Xvw);
   * `w-fit` / `max-w-[1100px]` ignoraban el % y solo encajaban bien al 100 %.
   */
  const appCardWidthClass = appCustomWidthVw != null ? 'w-full max-w-none' : ''

  const appSectionBgStyle: React.CSSProperties = {
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(backgroundImageUrl
      ? {
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {}),
  }

  const appInnerBlock = (
    <div
      className={cn(
        appCustomWidthVw != null
          ? 'mx-auto w-full max-w-none px-0'
          : 'container mx-auto',
      )}
    >
      <div
        className={cn(
          'app-senda-alter-card mx-auto flex max-w-full min-w-0 flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg min-h-0 md:w-full md:gap-6 md:px-10 md:pt-8 md:pb-5 lg:gap-6 lg:pb-6',
          appCustomWidthVw != null && appCardWidthClass,
        )}
        style={cardBackgroundColor ? { backgroundColor: cardBackgroundColor } : undefined}
      >
            <div className="mx-auto mb-3 mt-6 w-full max-w-[279px] min-h-[80px] text-left md:mt-0 md:w-full md:max-w-[924px] md:min-h-[56px]">
              {content && (
                <RichText
                  data={content}
                  enableGutter={false}
                  enableProse={false}
                  className={titleRichTextClasses}
                  style={contentColor ? { color: contentColor } : undefined}
                />
              )}
            </div>

            <div className="mx-auto flex w-full min-w-0 max-w-[279px] flex-col gap-6 md:hidden">
              {contentMobile1 ? (
                <div className="w-full min-w-0 text-left">
                  <RichText
                    data={contentMobile1}
                    enableGutter={false}
                    enableProse={false}
                    className={mobileRichTextClasses}
                    style={contentBelowImagesColor ? { color: contentBelowImagesColor } : undefined}
                  />
                </div>
              ) : null}

              {imageMobile1Url ? (
                <div className="-mt-3 flex w-full max-w-full shrink-0 justify-center">
                  <AppSendaAlterMobileImage
                    url={imageMobile1Url}
                    alt={imageMobile1Alt}
                    intrinsic={imageMobile1Intrinsic}
                  />
                </div>
              ) : null}

              {contentMobile2 ? (
                <div className="w-full min-w-0 text-left">
                  <RichText
                    data={contentMobile2}
                    enableGutter={false}
                    enableProse={false}
                    className={mobileRichTextClasses}
                    style={contentBelowImagesColor ? { color: contentBelowImagesColor } : undefined}
                  />
                </div>
              ) : null}

              {imageMobile2Url ? (
                <div className="-mt-3 flex w-full max-w-full shrink-0 justify-center">
                  <AppSendaAlterMobileImage
                    url={imageMobile2Url}
                    alt={imageMobile2Alt}
                    intrinsic={imageMobile2Intrinsic}
                  />
                </div>
              ) : null}

              {contentMobile3 ? (
                <div className="w-full min-w-0 text-left">
                  <RichText
                    data={contentMobile3}
                    enableGutter={false}
                    enableProse={false}
                    className={mobileRichTextClasses}
                    style={contentBelowImagesColor ? { color: contentBelowImagesColor } : undefined}
                  />
                </div>
              ) : null}

              {renderButtonRow('w-full max-w-full justify-center')}
              {imageMobile3Url ? (
                <div className="-mt-3 flex w-full max-w-full shrink-0 justify-center">
                  <AppSendaAlterMobileImage
                    url={imageMobile3Url}
                    alt={imageMobile3Alt}
                    intrinsic={imageMobile3Intrinsic}
                  />
                </div>
              ) : null}
            </div>

            <div className="mx-auto hidden w-full min-w-0 max-w-[940px] flex-col gap-5 md:flex md:gap-5 lg:gap-6">
              <div
                className={cn(
                  'mx-auto flex w-full min-w-0 flex-col gap-6 md:max-w-[940px] md:items-center md:gap-4',
                  'xl:grid xl:min-h-[416px] xl:w-full xl:max-w-[940px] xl:grid-cols-[minmax(0,505px)_440px] xl:items-stretch xl:gap-5 xl:overflow-hidden xl:-mt-8',
                )}
              >
                {contentDesktop ? (
                  <div className="flex w-full min-w-0 max-w-[505px] flex-1 flex-col justify-start text-left xl:max-w-none xl:min-h-0 xl:min-w-0">
                    <RichText
                      data={contentDesktop}
                      enableGutter={false}
                      enableProse={false}
                      className={belowRichTextClasses}
                      style={contentBelowImagesColor ? { color: contentBelowImagesColor } : undefined}
                    />
                  </div>
                ) : null}

                {image1Url ? (
                  <div
                    className={cn(
                      'relative flex min-w-0 items-center justify-center md:mx-auto md:h-[345px] md:w-[420px] md:max-w-[420px]',
                      'xl:mx-0 xl:h-full xl:min-h-[416px] xl:w-[440px] xl:max-w-[440px] xl:justify-self-end',
                      !contentDesktop && 'xl:col-start-2',
                    )}
                  >
                    <Image
                      src={image1Url}
                      alt={image1Alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1279px) 420px, 440px"
                    />
                  </div>
                ) : null}
              </div>
              {renderButtonRow('md:mt-0')}
            </div>
          </div>
    </div>
  )

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      {appBreakoutCss ? <style>{appBreakoutCss}</style> : null}
      <section
        id={sanitizeAnchorId(anchorId, 'app-senda-alter')}
        data-app-senda-alter-block={styleId}
        className={cn(
          'app-senda-alter-section relative flex min-h-[840px] items-center',
          appCustomWidthVw != null && 'w-full min-w-0 max-w-none',
          appCustomWidthVw == null && 'overflow-x-hidden px-[5%] pt-20 pb-10 md:pt-24 md:pb-14',
          appCustomWidthVw != null && 'overflow-x-visible px-0 py-0',
        )}
        style={appCustomWidthVw == null ? appSectionBgStyle : undefined}
      >
        {appCustomWidthVw != null && (backgroundColor || backgroundImageUrl) ? (
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 left-1/2 -z-0 max-w-none min-h-full -translate-x-1/2',
              appBgUsesFullViewportWidth ? 'w-[100dvw] min-w-[100dvw]' : 'w-screen',
            )}
            style={appSectionBgStyle}
          />
        ) : null}
        {appCustomWidthVw != null ? (
          <div className="relative z-[1] flex min-h-[840px] w-full min-w-0 flex-1 items-center overflow-x-visible pt-20 pb-10 md:pt-24 md:pb-14">
            <div
              className="relative box-border min-w-0 w-full max-w-none overflow-x-visible px-0"
              {...(appCustomWidthVw != null && appCustomWidthMobileVw != null
                ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
                : {})}
              style={
                appCustomWidthMobileVw != null
                  ? sendaBreakoutOnlyBoxSizing()
                  : sendaCalcBreakoutInlineStyle(appCustomWidthVw)
              }
            >
              {appInnerBlock}
            </div>
          </div>
        ) : (
          appInnerBlock
        )}
      </section>
    </>
  )
}
