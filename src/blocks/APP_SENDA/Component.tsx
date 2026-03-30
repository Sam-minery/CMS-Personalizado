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
import { sendaBlockButtonNativeClassName } from '@/utilities/sendaBlockButtonClasses'
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
  return o as FontGroupData
}

const APP_FG_RICHTEXT =
  'app-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

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

export type AppSendaBlockProps = {
  blockType?: string
  anchorId?: string | null
  content?: DefaultTypedEditorState | null
  contentBelowImages?: DefaultTypedEditorState | null
  backgroundImage?: BackgroundImageGroup | null
  backgroundColor?: string | null
  cardBackgroundColor?: string | null
  contentColor?: string | null
  boldTextColor?: string | null
  contentBelowImagesColor?: string | null
  buttonsBackgroundColor?: string | null
  buttonsTextColor?: string | null
  /** Grupo (useMedia/mediaImage/src/alt) o legacy: upload directo (ImageMedia) */
  image1?: ContentImageGroup | ImageMedia | null
  image2?: ContentImageGroup | ImageMedia | null
  buttons?: ButtonItem[] | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

export const AppSendaBlock: React.FC<AppSendaBlockProps> = (props) => {
  const {
    anchorId,
    content,
    contentBelowImages,
    backgroundImage,
    backgroundColor,
    cardBackgroundColor,
    contentColor,
    boldTextColor,
    contentBelowImagesColor,
    buttonsBackgroundColor,
    buttonsTextColor,
    image1,
    image2,
    buttons,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `app-senda-${uniqueId}`

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
    const sel = `[data-app-senda-block="${styleId}"]`
    const mainRichtext = `${sel} .app-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    const appBtnLabels = `${sel} .app-senda-buttons .app-senda-btn-label`

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
      styles.push(`${sel}.app-senda-section { background-color: ${backgroundColor} !important; }`)
    }
    if (cardBackgroundColor) {
      styles.push(`${sel} .app-senda-card { background-color: ${cardBackgroundColor} !important; }`)
    }
    if (contentColor) {
      styles.push(
        `${sel} .app-senda-content-richtext, ${sel} .app-senda-content-richtext p, ${sel} .app-senda-content-richtext h1, ${sel} .app-senda-content-richtext h2, ${sel} .app-senda-content-richtext h3, ${sel} .app-senda-content-richtext h4, ${sel} .app-senda-content-richtext h5, ${sel} .app-senda-content-richtext h6, ${sel} .app-senda-content-richtext li, ${sel} .app-senda-content-richtext span, ${sel} .app-senda-content-richtext a { color: ${contentColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `${sel} .app-senda-content-richtext strong, ${sel} .app-senda-content-richtext b, ${sel} .app-senda-below-richtext strong, ${sel} .app-senda-below-richtext b { color: ${boldTextColor} !important; }`,
      )
    }
    if (contentBelowImagesColor) {
      styles.push(
        `${sel} .app-senda-below-richtext, ${sel} .app-senda-below-richtext p, ${sel} .app-senda-below-richtext h1, ${sel} .app-senda-below-richtext h2, ${sel} .app-senda-below-richtext h3, ${sel} .app-senda-below-richtext h4, ${sel} .app-senda-below-richtext h5, ${sel} .app-senda-below-richtext h6, ${sel} .app-senda-below-richtext li, ${sel} .app-senda-below-richtext span:not(strong):not(b), ${sel} .app-senda-below-richtext a { color: ${contentBelowImagesColor} !important; }`,
      )
    }
    const btnRules: string[] = [
      'border-radius: 1rem !important;',
      `background-color: ${buttonsBackgroundColor || '#007AFF'} !important;`,
    ]
    styles.push(`${sel} .app-senda-btn { ${btnRules.join(' ')} }`)
    styles.push(
      `${sel} .app-senda-btn, ${sel} .app-senda-btn * { color: ${buttonsTextColor || '#ffffff'} !important; }`,
    )

    styles.push(`
      @media (max-width: 767px) {
        ${sel} .app-senda-content-richtext,
        ${sel} .app-senda-content-richtext *,
        ${sel} .app-senda-below-richtext,
        ${sel} .app-senda-below-richtext * { text-align: left !important; }
      }
    `)

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .app-senda-richtext h1, ${sel} .app-senda-richtext h2, ${sel} .app-senda-richtext h3, ${sel} .app-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .app-senda-richtext h4 { font-weight: 900 !important; }`)
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const image1Url = getContentImageUrl(image1)
  const image2Url = getContentImageUrl(image2)
  const image1Alt = getContentImageAlt(image1, 'App image 1')
  const image2Alt = getContentImageAlt(image2, 'App image 2')
  const backgroundImageUrl = getBackgroundImageUrl(backgroundImage)

  const titleRichTextClasses = cn(
    'app-senda-richtext app-senda-content-richtext [&_*]:text-left',
    fontGroupTypographyActive && APP_FG_RICHTEXT,
    !fontGroupTypographyActive &&
      '[&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_p]:text-[15px] [&_p]:leading-relaxed',
    !contentColor && '[&_p]:text-neutral-700',
  )
  const belowRichTextClasses = cn(
    'app-senda-richtext app-senda-below-richtext [&_*]:text-left',
    fontGroupTypographyActive && APP_FG_RICHTEXT,
    !fontGroupTypographyActive && '[&_p]:text-[15px] [&_p]:leading-relaxed',
    !contentBelowImagesColor &&
      '[&_p]:text-neutral-700 [&_h1]:text-neutral-800 [&_h2]:text-neutral-800 [&_h3]:text-neutral-800 [&_h4]:text-neutral-800 [&_h5]:text-neutral-800 [&_h6]:text-neutral-800',
  )

  const buttonList = Array.isArray(buttons) ? buttons.slice(0, 2) : []

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'app-senda')}
        data-app-senda-block={styleId}
        className="app-senda-section min-h-[840px] px-[5%] pt-20 pb-10 md:pt-24 md:pb-14 flex items-center"
        style={{
          ...(backgroundColor ? { backgroundColor } : {}),
          ...(backgroundImageUrl
            ? {
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }
            : {}),
        }}
      >
        <div className="container mx-auto">
          <div
            className="app-senda-card mx-auto flex w-fit max-w-full min-w-0 flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg min-h-[1174px] md:min-h-[720px] md:w-full md:max-w-[1100px] md:gap-8 md:p-10"
            style={cardBackgroundColor ? { backgroundColor: cardBackgroundColor } : undefined}
          >
            {/* Primer campo de texto: móvil 279×80, desktop 924×56. En móvil más separado del borde superior. */}
            <div className="order-1 mx-auto mb-3 mt-6 w-full max-w-[279px] min-h-[80px] text-left md:mt-0 md:w-full md:max-w-[924px] md:min-h-[56px]">
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

            {buttonList.length > 0 && (
              <div
                className={cn(
                  'app-senda-buttons order-3 mx-auto flex w-max max-w-full shrink-0 flex-nowrap items-center justify-center gap-4',
                  'md:order-4 md:mt-0',
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
                        'app-senda-btn shadow-sm transition-colors hover:opacity-90',
                        sendaBlockButtonNativeClassName,
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                      )}
                      style={fontStyle}
                    >
                      <span className="app-senda-btn-label inline-flex items-center justify-center gap-2">
                        {text}
                        {iconSVG ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </CMSLink>
                  )
                })}
              </div>
            )}

            {/* Tablet/ventanas medias (768–1279px): texto e imagen apilados. Desktop (xl 1280+): en fila 940×416. */}
            <div className="order-2 mx-auto flex w-full min-w-0 max-w-[279px] -mt-16 flex-col gap-6 md:max-w-[940px] md:min-w-0 md:items-center xl:-mt-8 xl:min-h-[416px] xl:flex-row xl:items-center xl:justify-between xl:overflow-hidden xl:gap-10">
              {/* Segundo RichText: móvil 279×566; tablet apilado; desktop (xl) 505×416 */}
              {contentBelowImages ? (
                <div className="w-full min-h-[566px] min-w-0 max-w-[279px] flex-1 text-left md:max-w-[505px] md:min-h-0 xl:min-h-[416px] xl:max-w-[505px] xl:shrink">
                  <RichText
                    data={contentBelowImages}
                    enableGutter={false}
                    enableProse={false}
                    className={belowRichTextClasses}
                    style={contentBelowImagesColor ? { color: contentBelowImagesColor } : undefined}
                  />
                </div>
              ) : null}

              {/* Imagen 1: tablet apilada debajo del texto; desktop (xl) a la derecha. */}
              {image1Url ? (
                <div className="relative hidden min-w-0 items-center justify-center md:flex md:h-[345px] md:w-[407px] md:max-w-[407px] xl:shrink">
                  <Image
                    src={image1Url}
                    alt={image1Alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 327px, (max-width: 1279px) 407px, 407px"
                  />
                </div>
              ) : null}
            </div>

            {/* Imagen 2: solo móvil, última (order-4). Contenedor 327×334, imagen 279×334 */}
            {image2Url ? (
              <div className="order-4 flex h-[334px] w-full max-w-full shrink-0 items-center justify-center md:hidden">
                <div className="relative h-[334px] w-full max-w-[279px]">
                  <Image
                    src={image2Url}
                    alt={image2Alt}
                    fill
                    className="object-contain"
                    sizes="279px"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
