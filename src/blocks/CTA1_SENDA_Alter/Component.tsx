'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'
import {
  SENDA_CUSTOM_BREAKOUT_ATTR,
  buildSendaCalcBreakoutResponsiveCss,
  sendaBreakoutOnlyBoxSizing,
  sendaCalcBreakoutInlineStyle,
  sendaResolveOptionalMobileWidthVw,
} from '@/utilities/sendaCustomWidthBreakout'
import {
  sendaBlockButtonNativeClassName,
  sendaBlockButtonNativeSymmetricClassName,
} from '@/utilities/sendaBlockButtonClasses'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
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
import { validateAndSanitizeURL } from '@/utilities/validateURL'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type MediaLike = {
  url?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

type CTA1SendaLink = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: { slug?: string } | string | number
  } | null
  label?: string | null
}

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
}

type PopupButton = {
  link?: CTA1SendaLink | null
  backgroundColor?: string | null
  textColor?: string | null
}

type PhonePopupConfig = {
  usePopup?: boolean | null
  closeButtonSVG?: string | null
  title?: DefaultTypedEditorState | null
  titleTextColor?: string | null
  titleBoldTextColor?: string | null
  nameLabel?: string | null
  phoneLabel?: string | null
  button?: PopupButton | null
  termsRichText?: DefaultTypedEditorState | null
  termsTextColor?: string | null
  dataProtectionRichText?: DefaultTypedEditorState | null
  dataProtectionTextColor?: string | null
  gradientStartColor?: string | null
  gradientEndColor?: string | null
  gradientDirection?: 'to-br' | 'to-tr' | 'to-right' | 'to-bottom' | null
}

type ContactSection = {
  icon?: IconGroup | null
  labelRichText?: DefaultTypedEditorState | null
  /** Compatibilidad: antes era "label" (text) */
  label?: string | null
  labelTextColor?: string | null
  buttonBackgroundColor?: string | null
  buttonTextColor?: string | null
  iconSVG?: string | null
  link?: CTA1SendaLink | null
  phonePopup?: PhonePopupConfig | null
}

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

function normalizeCta1FontGroup(raw: unknown): FontGroupData | null {
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

/** Contenedor RichText / payload para reglas `.cta1-senda-richtext` del font group. */
const CTA_FG_RICHTEXT =
  'cta1-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

export type CTA1SendaAlterBlockProps = {
  /** Título y descripción en un único richText (área ~1200×120 en desktop) */
  title?: DefaultTypedEditorState | null
  /** Compatibilidad: bloques antiguos tenían "description" por separado */
  description?: DefaultTypedEditorState | null
  /** Compatibilidad: bloques antiguos usaban "content" */
  content?: DefaultTypedEditorState | null
  videocallSection?: ContactSection | null
  phoneSection?: ContactSection | null
  video?: { youtubeUrl?: string | null } | null
  backgroundType?: 'video' | 'image' | 'color' | null
  backgroundImage?: MediaLike | null
  backgroundColor?: string | null
  backgroundColorMode?: 'solid' | 'gradient' | null
  gradientStartColor?: string | null
  gradientEndColor?: string | null
  gradientDirection?:
    | 'to-right'
    | 'to-left'
    | 'to-bottom'
    | 'to-top'
    | 'diagonal-down'
    | 'diagonal-up'
    | null
  textColor?: string | null
  boldTextColor?: string | null
  blockHeightMode?: 'auto' | 'viewport' | 'custom' | null
  customBlockHeightPx?: number | null
  anchorId?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
  /** Si es true, el contenido interior usa `customWidthPercent` como ancho en vw (fondo del bloque a ancho completo). */
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || ''
}

/** Misma resolución de `href` que `CMSLink` para navegar tras guardar el lead CTA. */
function resolvePhonePopupHref(link: CTA1SendaLink): string | null {
  const type = link.type
  const refVal = link.reference?.value
  const rawHref =
    type === 'reference' &&
    refVal &&
    typeof refVal === 'object' &&
    'slug' in refVal &&
    typeof (refVal as { slug?: string }).slug === 'string'
      ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${(refVal as { slug: string }).slug}`
      : link.url

  if (!rawHref) return null
  const href =
    type === 'reference'
      ? rawHref
      : validateAndSanitizeURL(rawHref, {
          allowRelative: true,
          allowAbsolute: true,
          logBlocked: process.env.NODE_ENV === 'development',
        })
  return href || null
}

/** Acepta hex, rgb, rgba, nombres CSS, etc. y devuelve un valor seguro para usar en style o CSS. */
function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  // Permitir caracteres válidos en colores CSS: #, dígitos, letras, espacios, comas, ., (), %, rgb/hsl/etc.
  const safe = trimmed.replace(/[^#a-zA-Z0-9(),.%\s-]/g, '')
  return safe || ''
}

/**
 * Degradado ~70/30 (principal / secundario). OKLCH + color-mix para transición suave.
 */
function buildCtaSendaAlterGradient(
  direction: string,
  startColor: string,
  endColor: string,
): string {
  const a = sanitizeCssColor(startColor) || startColor.trim()
  const b = sanitizeCssColor(endColor) || endColor.trim()
  if (!a || !b) return ''
  return `linear-gradient(${direction} in oklch, ${a} 0%, ${a} 44%, color-mix(in oklch, ${a} 91%, ${b}) 54%, color-mix(in oklch, ${a} 72%, ${b}) 64%, color-mix(in oklch, ${a} 48%, ${b}) 74%, ${b} 88%, ${b} 100%)`
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as { url?: string; sizes?: { large?: { url?: string }; medium?: { url?: string } } }
  const url =
    m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.url || ''
  return url ? getMediaUrl(url) : ''
}

function SectionIcon({ iconGroup }: { iconGroup?: IconGroup | null }) {
  const useMedia = iconGroup?.useMedia !== false && iconGroup?.mediaImage
  const iconUrl = useMedia ? getMediaUrlSafe(iconGroup?.mediaImage) : ''
  const iconSvgCode =
    !useMedia && iconGroup?.iconSVG?.trim() ? sanitizeSVG(iconGroup.iconSVG) : ''
  if (!iconUrl && !iconSvgCode) return null
  return (
    <div className="mb-4 flex justify-center mx-auto shrink-0" aria-hidden>
      {iconUrl ? (
        <img src={iconUrl} alt="" className="object-contain" style={{ width: 118, height: 118 }} />
      ) : (
        <span
          className="inline-flex [&_svg]:w-full [&_svg]:h-full [&_svg]:block"
          style={{ width: 118, height: 118 }}
          dangerouslySetInnerHTML={{ __html: iconSvgCode }}
        />
      )}
    </div>
  )
}

export const CTA1SendaAlterBlock: React.FC<CTA1SendaAlterBlockProps> = ({
  title: titleProp,
  description,
  content,
  videocallSection,
  phoneSection,
  video,
  backgroundType = 'video',
  backgroundImage,
  backgroundColor,
  backgroundColorMode = 'solid',
  gradientStartColor,
  gradientEndColor,
  gradientDirection,
  textColor,
  boldTextColor,
  blockHeightMode = 'viewport',
  customBlockHeightPx,
  anchorId,
  useFontGroup,
  fontGroup,
  fontFamily,
  useCustomFont,
  customFontFile,
  customFontName,
  applyCustomWidth,
  customWidthPercent,
  customWidthPercentMobile,
}) => {
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

  const title = titleProp ?? content
  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `cta1-senda-${uniqueId}`

  const router = useRouter()
  const [isPhonePopupOpen, setIsPhonePopupOpen] = React.useState(false)
  const [formName, setFormName] = React.useState('')
  const [formPhone, setFormPhone] = React.useState('')
  const [agreedToTerms, setAgreedToTerms] = React.useState(false)
  const [leadsCtaSubmitting, setLeadsCtaSubmitting] = React.useState(false)
  const [leadsCtaSubmitError, setLeadsCtaSubmitError] = React.useState<string | null>(null)

  const usePhonePopup = !!phoneSection?.phonePopup?.usePopup
  const popup = phoneSection?.phonePopup

  const openPhonePopup = React.useCallback(() => {
    setLeadsCtaSubmitError(null)
    setIsPhonePopupOpen(true)
  }, [])
  const closePhonePopup = React.useCallback(() => {
    setIsPhonePopupOpen(false)
    setFormName('')
    setFormPhone('')
    setAgreedToTerms(false)
    setLeadsCtaSubmitting(false)
    setLeadsCtaSubmitError(null)
  }, [])

  React.useEffect(() => {
    if (!isPhonePopupOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePhonePopup()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isPhonePopupOpen, closePhonePopup])

  const popupGradientDir =
    popup?.gradientDirection === 'to-tr'
      ? 'to top right'
      : popup?.gradientDirection === 'to-right'
        ? 'to right'
        : popup?.gradientDirection === 'to-bottom'
          ? 'to bottom'
          : 'to bottom right'

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeCta1FontGroup(fontGroup)
      : null

  const fontGroupTypographyActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename
      ? customFontFileObj.filename.replace(/\.[^.]+$/, '')
      : undefined)

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
    const sel = `[data-cta1-senda-font="${styleId}"]`
    const mainRichtext = `${sel} .cta1-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    /** Texto de botones de sección + botón del popup: tamaño/interlineado “body” del font group. */
    const cta1BtnLabels = `${sel} .cta1-senda-buttons .cta1-senda-btn-label, ${sel} .cta1-popup-btn-label`

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
        styles.push(`${cta1BtnLabels} { font-size: ${bodyBtnDesk} !important; }`)
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
          mobRules.push(`${cta1BtnLabels} { font-size: ${bodyMobBtn} !important; }`)
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
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${cta1BtnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${cta1BtnLabels} { line-height: ${bodyLhMob} !important; } }`,
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

    if (textColor) {
      // Aplicar solo a elementos de contenido (p, h1, span, a, ul, ol, li), excluyendo todo lo que esté dentro de .cta1-senda-buttons,
      // y sin aplicar a section/div para que el área de botones no herede el color y el color por botón se aplique bien
      styles.push(
        `[data-cta1-senda-font="${styleId}"] p:not(.cta1-senda-buttons p), [data-cta1-senda-font="${styleId}"] h1:not(.cta1-senda-buttons h1), [data-cta1-senda-font="${styleId}"] h2:not(.cta1-senda-buttons h2), [data-cta1-senda-font="${styleId}"] h3:not(.cta1-senda-buttons h3), [data-cta1-senda-font="${styleId}"] h4:not(.cta1-senda-buttons h4), [data-cta1-senda-font="${styleId}"] h5:not(.cta1-senda-buttons h5), [data-cta1-senda-font="${styleId}"] h6:not(.cta1-senda-buttons h6), [data-cta1-senda-font="${styleId}"] span:not(strong):not(b):not(.cta1-senda-buttons span):not(.cta1-popup-btn-label), [data-cta1-senda-font="${styleId}"] a:not(.cta1-senda-buttons a):not(.cta1-popup-submit), [data-cta1-senda-font="${styleId}"] ul:not(.cta1-senda-buttons ul), [data-cta1-senda-font="${styleId}"] ol:not(.cta1-senda-buttons ol), [data-cta1-senda-font="${styleId}"] li:not(.cta1-senda-buttons li) { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `[data-cta1-senda-font="${styleId}"] strong, [data-cta1-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
      // Dentro de los botones de sección, strong/b heredan el color del botón
      styles.push(
        `[data-cta1-senda-font="${styleId}"] .cta1-senda-buttons strong, [data-cta1-senda-font="${styleId}"] .cta1-senda-buttons b { color: inherit !important; }`,
      )
    }
    // Los textos descriptivos de secciones usan su propio color (labelTextColor); forzar herencia
    styles.push(
      `[data-cta1-senda-font="${styleId}"] .cta1-senda-section-label * { color: inherit !important; }`,
    )

    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const heightClasses =
    blockHeightMode === 'viewport' ? 'min-h-[60vh] md:min-h-[70vh]' : ''
  const customHeightStyle =
    blockHeightMode === 'custom' && customBlockHeightPx
      ? { minHeight: `${customBlockHeightPx}px` }
      : undefined

  const sectionId = sanitizeAnchorId(anchorId) || undefined

  /** Ancho del contenido en % del viewport (solo si el checkbox está activo). */
  const cta1CustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const cta1CustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(
    applyCustomWidth,
    customWidthPercentMobile,
  )
  const cta1BreakoutCss =
    cta1CustomWidthVw != null && cta1CustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, cta1CustomWidthVw, cta1CustomWidthMobileVw)
      : ''

  const cta1SectionBtnClass = cn(
    sendaBlockButtonNativeClassName,
    'font-medium border border-white/40 transition-all duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2',
    !fontGroupTypographyActive && 'text-base',
  )

  return (
    <>
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      {cta1BreakoutCss ? <style>{cta1BreakoutCss}</style> : null}
      <div data-cta1-senda-font={styleId}>
      <section
        id={sectionId}
        className={cn(
          'relative w-full flex items-center justify-center py-10 md:py-0',
          cta1CustomWidthVw == null && 'overflow-hidden',
          cta1CustomWidthVw != null && 'overflow-x-visible overflow-y-hidden',
          heightClasses,
          cta1CustomWidthVw == null && 'px-[5%]',
          cta1CustomWidthVw != null && 'px-0',
        )}
        style={customHeightStyle}
      >
        <div
          className={cn(
            'relative z-10 flex flex-col items-center min-w-0',
            cta1CustomWidthVw == null && 'w-full max-w-[1200px] mx-auto',
            cta1CustomWidthVw != null && 'box-border w-full max-w-none min-w-0',
          )}
          {...(cta1CustomWidthVw != null && cta1CustomWidthMobileVw != null
            ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
            : {})}
          style={
            cta1CustomWidthVw == null
              ? undefined
              : cta1CustomWidthMobileVw != null
                ? sendaBreakoutOnlyBoxSizing()
                : sendaCalcBreakoutInlineStyle(cta1CustomWidthVw)
          }
        >
          {/* Cabecera: título y descripción en un único richText — ~1200×120 desktop */}
          <div
            className={cn(
              'w-full mx-auto text-center min-h-[120px] flex flex-col justify-center',
              fontGroupTypographyActive && CTA_FG_RICHTEXT,
              !textColor &&
                !boldTextColor &&
                'text-white [&_p]:text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_span]:text-white [&_div]:text-white [&_strong]:text-white [&_em]:text-white [&_a]:text-white [&_ul]:text-white [&_ol]:text-white [&_li]:text-white',
              !fontGroupTypographyActive && [
                '[&_p]:text-lg md:text-xl [&_p]:leading-relaxed',
                '[&_h1]:text-3xl md:text-4xl [&_h1]:leading-tight [&_h1]:font-bold',
                '[&_h2]:text-2xl md:text-3xl [&_h2]:leading-tight [&_h2]:font-bold',
                '[&_h3]:text-xl md:text-2xl [&_h3]:font-semibold',
                '[&_h4]:text-lg md:text-xl [&_h4]:font-semibold',
              ],
            )}
            style={{
              ...(cta1CustomWidthVw != null
                ? { width: '100%', maxWidth: '100%' }
                : { maxWidth: 1200, width: '100%' }),
              ...(textColor ? { color: textColor } : {}),
            }}
          >
            {title ? <RichText data={title} enableGutter={false} enableProse={false} /> : null}
            {description ? (
              <div
                className={cn(
                  'mt-2',
                  !fontGroupTypographyActive && '[&_.RichText]:text-base md:[&_.RichText]:text-lg',
                  fontGroupTypographyActive && CTA_FG_RICHTEXT,
                )}
              >
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            ) : null}
          </div>

          {/* Contenedor secciones: 920×318; con ancho personalizado, flex 50/50 + barra vertical en el centro real */}
          <div
            className={cn(
              'relative w-full mx-auto min-h-[318px]',
              cta1CustomWidthVw == null &&
                'grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-items-center',
              cta1CustomWidthVw != null && 'flex flex-col md:flex-row md:items-stretch md:gap-0',
            )}
            style={
              cta1CustomWidthVw == null
                ? { maxWidth: 920 }
                : { maxWidth: '100%', width: '100%' }
            }
          >
            {/* Sección Videollamada — 436×318 */}
            <div
              className={cn(
                'flex flex-col items-center justify-center py-6 px-6 pb-10 md:pb-6 min-h-[318px] w-full max-w-[436px] mx-auto',
                cta1CustomWidthVw != null && 'relative z-[1] max-w-none min-w-0 md:flex-1',
              )}
            >
              <SectionIcon iconGroup={videocallSection?.icon} />
              {(videocallSection?.labelRichText || videocallSection?.label) ? (
                <div
                  className={cn(
                    'cta1-senda-section-label font-normal mb-5 [&_.RichText]:text-inherit w-full text-center',
                    fontGroupTypographyActive ? CTA_FG_RICHTEXT : 'text-lg md:text-xl',
                  )}
                  style={{
                    color:
                      sanitizeCssColor(videocallSection.labelTextColor) ||
                      sanitizeCssColor(textColor) ||
                      'rgba(255,255,255,1)',
                  }}
                >
                  {videocallSection.labelRichText ? (
                    <RichText
                      data={videocallSection.labelRichText}
                      enableGutter={false}
                      enableProse={false}
                    />
                  ) : (
                    <p>{videocallSection?.label}</p>
                  )}
                </div>
              ) : null}
              {videocallSection?.link && (() => {
                const link = videocallSection.link as React.ComponentProps<typeof CMSLink> & { label?: string }
                const { label: linkLabel, ...linkProps } = link
                const bg = sanitizeCssColor(videocallSection.buttonBackgroundColor) || 'rgba(255,255,255,0.2)'
                const fg = sanitizeCssColor(videocallSection.buttonTextColor) || '#ffffff'
                return (
                  <div className="cta1-senda-buttons">
                    <CMSLink
                      {...linkProps}
                      appearance="inline"
                      className={cta1SectionBtnClass}
                      style={{
                        ...fontStyle,
                        backgroundColor: bg,
                        color: fg,
                      }}
                    >
                      {linkLabel ? (
                        <span className="cta1-senda-btn-label leading-normal">{linkLabel}</span>
                      ) : null}
                      {videocallSection.iconSVG?.trim() ? (
                        <span
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          style={{ color: fg }}
                          aria-hidden
                          dangerouslySetInnerHTML={{
                            __html: sanitizeSVG(videocallSection.iconSVG),
                          }}
                        />
                      ) : null}
                    </CMSLink>
                  </div>
                )
              })()}
              <div
                className="mx-auto mt-6 h-[3px] w-[334px] max-w-full shrink-0 bg-white/30 md:hidden"
                aria-hidden
              />
            </div>

            {/* Sección Teléfono — 436×318 */}
            <div
              className={cn(
                'flex flex-col items-center justify-center py-6 px-6 min-h-[318px] w-full max-w-[436px] mx-auto',
                cta1CustomWidthVw != null && 'relative z-[1] max-w-none min-w-0 md:flex-1',
              )}
            >
              <SectionIcon iconGroup={phoneSection?.icon} />
              {(phoneSection?.labelRichText || phoneSection?.label) ? (
                <div
                  className={cn(
                    'cta1-senda-section-label font-normal mb-5 [&_.RichText]:text-inherit w-full text-center',
                    fontGroupTypographyActive ? CTA_FG_RICHTEXT : 'text-lg md:text-xl',
                  )}
                  style={{
                    color:
                      sanitizeCssColor(phoneSection.labelTextColor) ||
                      sanitizeCssColor(textColor) ||
                      'rgba(255,255,255,1)',
                  }}
                >
                  {phoneSection.labelRichText ? (
                    <RichText
                      data={phoneSection.labelRichText}
                      enableGutter={false}
                      enableProse={false}
                    />
                  ) : (
                    <p>{phoneSection?.label}</p>
                  )}
                </div>
              ) : null}
              {usePhonePopup ? (
                  <div className="cta1-senda-buttons">
                    <button
                      type="button"
                      onClick={openPhonePopup}
                      className={cta1SectionBtnClass}
                      style={{
                        ...fontStyle,
                        backgroundColor:
                          sanitizeCssColor(phoneSection?.buttonBackgroundColor) || 'rgba(255,255,255,0.2)',
                        color: sanitizeCssColor(phoneSection?.buttonTextColor) || '#ffffff',
                      }}
                    >
                  {(() => {
                    const link = phoneSection?.link as { label?: string } | undefined
                    const linkLabel = link?.label
                    return (
                      <>
                        {linkLabel ? (
                          <span className="cta1-senda-btn-label leading-normal">{linkLabel}</span>
                        ) : null}
                        {phoneSection?.iconSVG?.trim() ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            style={{ color: phoneSection?.buttonTextColor || '#ffffff' }}
                            aria-hidden
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(phoneSection.iconSVG),
                            }}
                          />
                        ) : null}
                      </>
                    )
                  })()}
                    </button>
                  </div>
              ) : (
                phoneSection?.link &&
                (() => {
                  const link = phoneSection.link as React.ComponentProps<typeof CMSLink> & { label?: string }
                  const { label: linkLabel, ...linkProps } = link
                  const bg = sanitizeCssColor(phoneSection.buttonBackgroundColor) || 'rgba(255,255,255,0.2)'
                  const fg = sanitizeCssColor(phoneSection.buttonTextColor) || '#ffffff'
                  return (
                    <div className="cta1-senda-buttons">
                      <CMSLink
                        {...linkProps}
                        appearance="inline"
                        className={cta1SectionBtnClass}
                        style={{
                          ...fontStyle,
                          backgroundColor: bg,
                          color: fg,
                        }}
                      >
                        {linkLabel ? (
                          <span className="cta1-senda-btn-label leading-normal">{linkLabel}</span>
                        ) : null}
                        {phoneSection.iconSVG?.trim() ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            style={{ color: fg }}
                            aria-hidden
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(phoneSection.iconSVG),
                            }}
                          />
                        ) : null}
                      </CMSLink>
                    </div>
                  )
                })()
              )}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-[318px] w-[3px] -translate-x-1/2 -translate-y-1/2 bg-white/30 md:block"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
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
                  className="absolute inset-0 w-full h-full"
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

          {backgroundType === 'color' && (
            <>
              {backgroundColorMode === 'gradient' &&
              gradientStartColor &&
              gradientEndColor ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: buildCtaSendaAlterGradient(
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
                                : 'to right',
                      gradientStartColor,
                      gradientEndColor,
                    ),
                  }}
                />
              ) : backgroundColor ? (
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor }}
                />
              ) : null}
            </>
          )}

          {backgroundType !== 'color' && (
            <div className="absolute inset-0 bg-black/60" />
          )}
        </div>
      </section>

      {/* Popup teléfono (dentro del root con data-cta1-senda-font para font groups) */}
      {usePhonePopup && popup && isPhonePopupOpen && (
        <div
          className={cn(
            'fixed inset-0 z-[1100] flex justify-center overflow-y-auto px-4 pb-8 sm:px-6',
            'max-md:items-start max-md:pt-[max(4.25rem,calc(env(safe-area-inset-top,0px)+3.5rem))]',
            'md:items-center md:py-4',
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby="phone-popup-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closePhonePopup}
            onKeyDown={(e) => e.key === 'Escape' && closePhonePopup()}
            aria-hidden
          />
          <div className="relative w-full max-w-[351px] md:max-w-[928px]" style={{ width: '100%' }}>
            {/* Cerrar fuera del panel del popup; sin fondo circular. Siempre SVG inline para que dev y prod se vean igual (el SVG del CMS en prod puede verse como "/"). */}
            <button
              type="button"
              onClick={closePhonePopup}
              className="absolute -top-10 right-0 z-[120] flex h-10 w-10 items-center justify-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-opacity hover:opacity-90 md:-top-11 md:right-1 md:h-11 md:w-11"
              aria-label="Cerrar"
            >
              <svg
                className="h-6 w-6 shrink-0 md:h-7 md:w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div
              className={cn(
                'relative w-full overflow-hidden rounded-3xl p-6 pt-8 md:p-8 md:pt-10 text-white shadow-xl flex flex-col justify-center',
                'max-w-[351px] min-h-[660px] md:max-w-[928px] md:min-h-[692px]',
              )}
              style={{
                width: '100%',
                background:
                  popup.gradientStartColor && popup.gradientEndColor
                    ? buildCtaSendaAlterGradient(
                        popupGradientDir,
                        popup.gradientStartColor,
                        popup.gradientEndColor,
                      )
                    : buildCtaSendaAlterGradient('to bottom right', '#1e3a5f', '#4a2c7a'),
              }}
            >
            {/* Título y descripción: móvil 303×120 centrado; desktop sin restricción */}
            {(() => {
              const titleColor = sanitizeCssColor(popup.titleTextColor) || '#ffffff'
              const boldColor = sanitizeCssColor(popup.titleBoldTextColor)
              return (
                <div
                  id="phone-popup-title"
                  className={cn(
                    'w-full max-w-[303px] min-h-[120px] mx-auto text-center mb-6 md:w-[668px] md:min-h-[104px] md:max-w-[668px] md:text-left',
                    !fontGroupTypographyActive &&
                      '[&_.RichText]:text-xl md:[&_.RichText]:text-2xl [&_.RichText]:font-semibold',
                    boldColor && `popup-title-bold-${styleId}`,
                  )}
                  style={{ color: titleColor }}
                >
                  <style>{`
                    .popup-title-${styleId}, .popup-title-${styleId} * { color: ${titleColor} !important; }
                    ${boldColor ? `.popup-title-bold-${styleId} strong, .popup-title-bold-${styleId} b { color: ${boldColor} !important; }` : ''}
                  `}</style>
                  <span className={cn(`popup-title-${styleId}`, fontGroupTypographyActive && CTA_FG_RICHTEXT)}>
                    {popup.title ? (
                      <RichText data={popup.title} enableGutter={false} enableProse={false} />
                    ) : null}
                  </span>
                </div>
              )
            })()}

            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
              className="space-y-4"
            >
              <div className="mx-auto space-y-4 w-full max-w-[303px] min-h-[276px] md:max-w-[391px] md:w-[391px]">
              <div>
                <label htmlFor={`${styleId}-popup-name`} className="block text-sm font-medium text-white/95 mb-1">
                  {popup.nameLabel || 'Nombre y apellidos *'}
                </label>
                <input
                  id={`${styleId}-popup-name`}
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="rounded-2xl border border-white/30 bg-white/95 text-gray-900 px-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ width: 261, height: 48 }}
                  placeholder="Nombre y apellidos"
                />
              </div>
              <div>
                <label htmlFor={`${styleId}-popup-phone`} className="block text-sm font-medium text-white/95 mb-1">
                  {popup.phoneLabel || 'Número de teléfono *'}
                </label>
                <input
                  id={`${styleId}-popup-phone`}
                  type="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="rounded-2xl border border-white/30 bg-white/95 text-gray-900 px-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ width: 261, height: 48 }}
                  placeholder="678 678 678"
                />
              </div>

              {popup.button?.link ? (
                agreedToTerms ? (
                  (() => {
                    const btn = popup.button
                    const link = btn.link as CTA1SendaLink
                    const linkLabel = link.label
                    const bg = sanitizeCssColor(btn.backgroundColor) || 'rgba(255,255,255,0.2)'
                    const fg = sanitizeCssColor(btn.textColor) || '#ffffff'
                    const displayLabel = linkLabel ? linkLabel : 'Enviar'

                    const submitLeadThenNavigate = async () => {
                      const name = formName.trim()
                      const phone = formPhone.trim()
                      if (!name || !phone) {
                        setLeadsCtaSubmitError('Indica nombre y teléfono.')
                        return
                      }
                      const href = resolvePhonePopupHref(link)
                      if (!href) {
                        setLeadsCtaSubmitError('El enlace de destino no es válido.')
                        return
                      }
                      setLeadsCtaSubmitting(true)
                      setLeadsCtaSubmitError(null)
                      try {
                        const res = await fetch('/api/leads-cta-submit', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ fullName: name, phone }),
                        })
                        let data: { error?: string; retryAfterSec?: number } = {}
                        try {
                          data = (await res.json()) as typeof data
                        } catch {
                          /* ignore */
                        }
                        if (!res.ok) {
                          const msg =
                            typeof data.error === 'string'
                              ? data.error
                              : 'No se pudo guardar. Inténtalo de nuevo.'
                          setLeadsCtaSubmitError(
                            res.status === 429 && typeof data.retryAfterSec === 'number'
                              ? `${msg} Reintenta en ${data.retryAfterSec}s.`
                              : msg,
                          )
                          return
                        }
                        closePhonePopup()
                        if (link.newTab) {
                          window.open(href, '_blank', 'noopener,noreferrer')
                        } else {
                          router.push(href)
                        }
                      } finally {
                        setLeadsCtaSubmitting(false)
                      }
                    }

                    return (
                      <div className="space-y-2">
                        <button
                          type="button"
                          disabled={leadsCtaSubmitting}
                          onClick={() => void submitLeadThenNavigate()}
                          className={cn(
                            sendaBlockButtonNativeSymmetricClassName,
                            'cta1-popup-submit font-medium border-0 transition-[filter,opacity] duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 inline-flex items-center justify-center text-center cursor-pointer disabled:opacity-60 disabled:pointer-events-none',
                            !fontGroupTypographyActive && 'text-base',
                          )}
                          style={{
                            ...fontStyle,
                            backgroundColor: bg,
                            color: fg,
                          }}
                        >
                          <span className="cta1-popup-btn-label leading-normal">
                            {leadsCtaSubmitting ? 'Enviando…' : displayLabel}
                          </span>
                        </button>
                        {leadsCtaSubmitError ? (
                          <p className="text-sm text-red-200" role="alert">
                            {leadsCtaSubmitError}
                          </p>
                        ) : null}
                      </div>
                    )
                  })()
                ) : (
                  <span
                    className={cn(
                      sendaBlockButtonNativeSymmetricClassName,
                      'font-medium border-0 cursor-not-allowed opacity-70',
                      !fontGroupTypographyActive && 'text-base',
                    )}
                    style={{
                      ...fontStyle,
                      backgroundColor: sanitizeCssColor(popup.button?.backgroundColor) || 'rgba(255,255,255,0.15)',
                      color: sanitizeCssColor(popup.button?.textColor) || '#ffffff',
                    }}
                  >
                    <span className="cta1-popup-btn-label leading-normal">
                      {(popup.button?.link as { label?: string })?.label || 'Enviar'}
                    </span>
                  </span>
                )
              ) : null}

              <div className="flex items-start gap-3">
                <input
                  id={`${styleId}-popup-terms`}
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/50 bg-white/20 text-blue-600 focus:ring-white/50"
                />
                <label
                  htmlFor={`${styleId}-popup-terms`}
                  className={cn(
                    `flex-1 popup-terms-${styleId}`,
                    !fontGroupTypographyActive && 'text-sm [&_.RichText]:text-sm',
                  )}
                >
                  <style>{`
                    .popup-terms-${styleId}, .popup-terms-${styleId} * { color: ${sanitizeCssColor(popup.termsTextColor) || 'rgba(255,255,255,0.9)'} !important; }
                  `}</style>
                  {popup.termsRichText ? (
                    <div className={cn(fontGroupTypographyActive && CTA_FG_RICHTEXT)}>
                      <RichText
                        data={popup.termsRichText}
                        enableGutter={false}
                        enableProse={false}
                      />
                    </div>
                  ) : null}
                </label>
              </div>

              </div>

              {/* Protección de datos: móvil 303×112; desktop 548×64 (altura ajustada) */}
              <div
                className={cn(
                  `w-full max-w-[303px] min-h-[112px] mx-auto mt-4 md:w-[548px] md:min-h-[64px] md:max-w-[548px] [&_a]:underline popup-dp-${styleId}`,
                  fontGroupTypographyActive && CTA_FG_RICHTEXT,
                )}
              >
                <style>{`
                  .popup-dp-${styleId}, .popup-dp-${styleId} * { color: ${sanitizeCssColor(popup.dataProtectionTextColor) || 'rgba(255,255,255,0.8)'} !important; }
                `}</style>
                {popup.dataProtectionRichText ? (
                  <RichText
                    data={popup.dataProtectionRichText}
                    enableGutter={false}
                    enableProse={false}
                  />
                ) : null}
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
