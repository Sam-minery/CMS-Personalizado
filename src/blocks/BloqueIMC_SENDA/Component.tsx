'use client'

import React, { Component, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { sendaBlockButtonNativeClassName } from '@/utilities/sendaBlockButtonClasses'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
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

/** Error Boundary para la vista IMC >= 26: si RichText/Image/CMSLink lanzan, mostramos fallback y el resto del front no se cae. */
class HighBMIResultErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type MediaLike = {
  url?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string }; small?: { url?: string } }
} | number

/** Grupo imagen: subida (media) o URL externa (src). Misma lógica que Layout_SENDA. */
type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  src?: string | null
  alt?: string | null
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

function normalizeImcFontGroup(raw: unknown): FontGroupData | null {
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

const IMC_FG_RICHTEXT =
  'imc-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

type BloqueIMCLink = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  reference?: { relationTo?: 'pages' | 'posts'; value?: { slug?: string } | string | number } | null
  label?: string | null
}

type ButtonItem = {
  link?: BloqueIMCLink | null
  iconSVG?: string | null
}

export type BloqueIMCSendaBlockProps = {
  anchorId?: string | null
  title?: DefaultTypedEditorState | null
  description?: DefaultTypedEditorState | null
  heightLabel?: string | null
  weightLabel?: string | null
  calculateButtonText?: string | null
  calculateButtonIconSVG?: string | null
  resultContent?: DefaultTypedEditorState | null
  /** Botón del resultado cuando IMC < 26 (nombre en config: 'resultButton (IMC < 25)') */
  'resultButton (IMC < 25)'?: ButtonItem[] | null
  /** Clave antigua por si hay datos guardados con el nombre anterior */
  resultButton?: ButtonItem[] | null
  backgroundColor?: string | null
  cardBackgroundColor?: string | null
  resultCardBackgroundColor?: string | null
  resultTextColor?: string | null
  textColor?: string | null
  labelColor?: string | null
  calculateButtonColor?: string | null
  calculateButtonTextColor?: string | null
  resultButtonColor?: string | null
  resultButtonTextColor?: string | null
  highBMIContent?: DefaultTypedEditorState | null
  backgroundImage?: ImageGroup | null
  highBMIImage?: ImageGroup | null
  highBMINameAndDescription?: DefaultTypedEditorState | null
  highBMIButton?: ButtonItem[] | null
  highBMICardBackgroundColor?: string | null
  highBMITextColor?: string | null
  highBMIButtonColor?: string | null
  highBMIButtonTextColor?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
  disableInnerContainer?: boolean
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || ''
}

/** URL del media: prioriza .url, luego sizes. Sin getMediaUrl (evita fallos en producción); misma metodología que Layout_SENDA (imageGroup.mediaImage.url). */
function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string }; small?: { url?: string } }
  }
  return m?.url ?? m?.sizes?.large?.url ?? m?.sizes?.medium?.url ?? m?.sizes?.small?.url ?? ''
}

/** Resuelve la URL de un grupo imagen (subida o URL externa). Misma lógica que Layout_SENDA: mediaImage.url directo o src. Acepta dato legacy: highBMIImage como media directo. */
function getImageGroupSrc(
  group: ImageGroup | MediaLike | null | undefined,
): string {
  if (!group) return ''
  const g = group as ImageGroup
  if ('useMedia' in g && g.useMedia && g.mediaImage && typeof g.mediaImage === 'object') {
    return getMediaUrlSafe(g.mediaImage)
  }
  if ('src' in g && typeof g.src === 'string' && g.src.trim()) return g.src.trim()
  if (typeof group === 'object' && 'url' in group) {
    return getMediaUrlSafe(group as MediaLike)
  }
  if (typeof group === 'number') return ''
  return ''
}

export const BloqueIMCSendaBlock: React.FC<BloqueIMCSendaBlockProps> = ({
  anchorId,
  title,
  description,
  heightLabel = 'Estatura (en cm)',
  weightLabel = 'Peso (en kg)',
  calculateButtonText = 'Calcular IMC',
  calculateButtonIconSVG,
  resultContent,
  'resultButton (IMC < 25)': resultButtonNewKey,
  resultButton: resultButtonLegacy,
  backgroundColor,
  cardBackgroundColor,
  resultCardBackgroundColor,
  resultTextColor,
  textColor,
  labelColor,
  calculateButtonColor,
  calculateButtonTextColor,
  resultButtonColor,
  resultButtonTextColor,
  highBMIContent,
  backgroundImage,
  highBMIImage,
  highBMINameAndDescription,
  highBMIButton,
  highBMICardBackgroundColor,
  highBMITextColor,
  highBMIButtonColor,
  highBMIButtonTextColor,
  useFontGroup,
  fontGroup,
  fontFamily,
  useCustomFont,
  customFontFile,
  customFontName,
  disableInnerContainer,
}) => {
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showHighBMI, setShowHighBMI] = useState(false)

  /** Botón IMC < 26: priorizar clave nueva del config, luego la antigua por datos ya guardados */
  const resultButton = resultButtonNewKey ?? resultButtonLegacy

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `bloque-imc-senda-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeImcFontGroup(fontGroup)
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
    styles.push(`
      @media (max-width: 767px) {
        [data-bloque-imc-high-bmi-desc],
        [data-bloque-imc-high-bmi-desc] *,
        [data-bloque-imc-result-desc],
        [data-bloque-imc-result-desc] *,
        [data-bloque-imc-calc-title-desc],
        [data-bloque-imc-calc-title-desc] * {
          text-align: left !important;
        }
      }
      [data-bloque-imc-calc-btn-icon] svg,
      [data-bloque-imc-calc-btn-icon] svg * {
        fill: currentColor !important;
        stroke: currentColor !important;
        stroke-width: 0.1 !important;
      }
    `)

    const sel = `[data-bloque-imc-senda-font="${styleId}"]`
    const mainRichtext = `${sel} .imc-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    const imcBtnLabels = `${sel} .imc-senda-btn .imc-senda-btn-label, ${sel} .imc-senda-result-btn .imc-senda-btn-label, ${sel} .imc-senda-high-btn .imc-senda-btn-label`

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
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} label, ${sel} input, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
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
        styles.push(`${imcBtnLabels} { font-size: ${bodyBtnDesk} !important; }`)
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
          mobRules.push(`${imcBtnLabels} { font-size: ${bodyMobBtn} !important; }`)
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
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${imcBtnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${imcBtnLabels} { line-height: ${bodyLhMob} !important; } }`,
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
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} label, ${sel} input, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )
    } else if (selectedFontFamily) {
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} label, ${sel} input, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${selectedFontFamily} !important; }`,
      )
    }

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .imc-senda-richtext h1, ${sel} .imc-senda-richtext h2, ${sel} .imc-senda-richtext h3, ${sel} .imc-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .imc-senda-richtext h4 { font-weight: 900 !important; }`)
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const calculateBMI = () => {
    const heightNum = parseFloat(height)
    const weightNum = parseFloat(weight)

    if (heightNum > 0 && weightNum > 0) {
      const heightInMeters = heightNum / 100
      const calculatedBMI = weightNum / (heightInMeters * heightInMeters)
      setBmi(calculatedBMI)

      if (calculatedBMI < 26) {
        setShowResult(true)
        setShowHighBMI(false)
      } else {
        setShowResult(false)
        setShowHighBMI(true)
      }
    } else {
      alert('Por favor, introduce valores válidos para la estatura y el peso.')
    }
  }

  const defaultBackground =
    backgroundColor || 'linear-gradient(to bottom, #f8f8f8 0%, #e8e8ea 100%)'
  const defaultCardBackground = cardBackgroundColor || '#f5f5f0'
  const defaultResultCardBackground = resultCardBackgroundColor || cardBackgroundColor || '#fafafa'
  const defaultResultTextColor = resultTextColor || textColor || '#000000'
  const defaultTextColor = textColor || '#000000'
  const defaultLabelColor = labelColor || textColor || '#000000'
  const defaultCalculateButtonColor = calculateButtonColor || '#2563eb'
  const defaultCalculateButtonTextColor = calculateButtonTextColor || '#ffffff'
  const defaultResultButtonColor = resultButtonColor || '#2563eb'
  const defaultResultButtonTextColor = resultButtonTextColor || '#ffffff'
  const defaultHighBMICardBackground =
    highBMICardBackgroundColor || cardBackgroundColor || '#fafafa'
  const defaultHighBMITextColor = highBMITextColor || textColor || '#000000'
  const defaultHighBMIButtonColor = highBMIButtonColor || resultButtonColor || '#2563eb'
  const defaultHighBMIButtonTextColor = highBMIButtonTextColor || resultButtonTextColor || '#ffffff'

  const backgroundImageUrl = getImageGroupSrc(backgroundImage)
  const highBMIImageUrl = getImageGroupSrc(highBMIImage)
  const highBMIImageAlt = highBMIImage?.alt?.trim() || 'Imagen profesional'
  const calculateBtnIconSvg = calculateButtonIconSVG?.trim()
    ? sanitizeSVG(calculateButtonIconSVG)
    : ''

  const sectionId = sanitizeAnchorId(anchorId) || undefined

  const titleRichtextClass = cn(
    'imc-senda-richtext max-w-full break-words mb-0',
    fontGroupTypographyActive && IMC_FG_RICHTEXT,
    !fontGroupTypographyActive && 'text-2xl font-bold md:text-3xl',
  )

  const descRichtextClass = cn(
    'imc-senda-richtext',
    fontGroupTypographyActive && IMC_FG_RICHTEXT,
    !fontGroupTypographyActive && 'text-sm leading-relaxed md:text-base',
  )

  const resultRichtextClass = cn(
    'imc-senda-richtext',
    fontGroupTypographyActive && IMC_FG_RICHTEXT,
    !fontGroupTypographyActive && 'text-sm leading-relaxed md:text-base',
  )

  const highBmiContentClass = cn(
    'imc-senda-richtext',
    fontGroupTypographyActive && IMC_FG_RICHTEXT,
    !fontGroupTypographyActive && 'text-sm md:text-base leading-relaxed',
  )

  const highBmiNameClass = cn(
    'imc-senda-richtext flex flex-col justify-center text-left min-w-0 flex-1 mt-1 md:mt-0 w-[247px] max-w-full min-h-0 overflow-visible md:w-auto md:h-auto ml-4 md:ml-0',
    fontGroupTypographyActive && IMC_FG_RICHTEXT,
    !fontGroupTypographyActive &&
      'text-sm md:text-base leading-relaxed [&_h1]:text-lg [&_h1]:md:text-xl [&_h2]:text-base [&_h2]:md:text-lg [&_h3]:text-sm [&_h3]:md:text-base',
  )

  return (
    <>
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      <div
        id={sectionId}
        data-bloque-imc-senda-font={styleId}
        className={cn(
          'relative w-full min-w-0 min-h-screen flex items-start justify-center px-4 md:px-6 pt-24 pb-12 overflow-x-clip overflow-y-visible md:pt-28 md:pb-12 md:min-h-[690px]',
          showHighBMI ? 'md:h-auto' : 'md:h-[690px]',
        )}
        style={{
          background: showResult || showHighBMI ? backgroundColor || '#f5f5f5' : defaultBackground,
          ...(backgroundImageUrl
            ? {
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }
            : {}),
          ...fontStyle,
        }}
      >
        <div
          className={cn(
            'w-full mx-auto flex justify-center',
            !disableInnerContainer && 'max-w-7xl',
          )}
        >
          {!showResult && !showHighBMI ? (
            <div
              className="rounded-3xl flex flex-col items-start justify-center w-full max-w-[327px] min-h-[602px] p-6 box-border md:w-full md:max-w-[1100px] md:min-h-[350px] md:h-[430px] md:py-12 md:px-0 md:gap-8 md:items-center"
              style={{
                backgroundColor: defaultCardBackground,
              }}
            >
              <div
                data-bloque-imc-calc-title-desc
                className="flex flex-col justify-center w-[279px] min-h-[236px] shrink-0 mb-6 md:w-[680px] md:min-h-[158px] md:mb-0 md:mx-auto"
              >
                <div className="flex flex-col justify-center w-full h-full min-h-0">
                  {title ? (
                    <div className="text-left md:text-center" style={{ color: defaultTextColor }}>
                      <div className={titleRichtextClass}>
                        <RichText data={title} enableGutter={false} enableProse={false} />
                      </div>
                    </div>
                  ) : null}
                  {description ? (
                    <div className="text-left md:text-center break-words" style={{ color: defaultTextColor }}>
                      <div className={descRichtextClass}>
                        <RichText data={description} enableGutter={false} enableProse={false} />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col items-center w-full flex-1 min-w-0 md:flex-initial md:w-[414px] md:h-[152px] md:flex md:flex-col md:justify-between md:items-center">
                <div className="flex flex-col gap-4 w-full max-w-[279px] md:flex-row md:max-w-[414px] md:w-[414px] md:gap-3 md:flex-1 md:items-end md:justify-between">
                  <div className="flex flex-col w-full md:w-[201px] md:shrink-0">
                    <label
                      htmlFor="height"
                      className="block text-xs md:text-sm font-normal mb-2 md:mb-1.5 text-left"
                      style={{ color: defaultLabelColor }}
                    >
                      {heightLabel}
                    </label>
                    <input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="ejemplo: 165"
                      className="w-full h-[48px] px-3 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm md:w-[201px] md:min-w-[201px]"
                      style={{
                        border: '1px solid #B8B5AE',
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-[201px] md:shrink-0">
                    <label
                      htmlFor="weight"
                      className="block text-xs md:text-sm font-normal mb-2 md:mb-1.5 text-left"
                      style={{ color: defaultLabelColor }}
                    >
                      {weightLabel}
                    </label>
                    <input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="ejemplo: 92"
                      className="w-full h-[48px] px-3 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm md:w-[201px] md:min-w-[201px]"
                      style={{
                        border: '1px solid #B8B5AE',
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6 w-full max-w-[279px] md:mt-6 md:max-w-none md:shrink-0">
                  <button
                    type="button"
                    onClick={calculateBMI}
                    className={cn(
                      'imc-senda-btn text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium',
                      sendaBlockButtonNativeClassName,
                    )}
                    style={{
                      backgroundColor: height && weight ? defaultHighBMIButtonColor : defaultCalculateButtonColor,
                      color: height && weight ? defaultHighBMIButtonTextColor : defaultCalculateButtonTextColor,
                      ...fontStyle,
                    }}
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.opacity = '0.9'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    disabled={!height || !weight}
                  >
                    <span
                      className="imc-senda-btn-label inline-flex flex-row items-center justify-center gap-2"
                      dir="ltr"
                    >
                      <span className="min-w-0">{calculateButtonText}</span>
                      {calculateBtnIconSvg ? (
                        <span
                          data-bloque-imc-calc-btn-icon
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          style={{ color: 'inherit' }}
                          aria-hidden
                          dangerouslySetInnerHTML={{ __html: calculateBtnIconSvg }}
                        />
                      ) : null}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : showResult ? (
            <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center min-w-0">
              <div
                className="rounded-3xl flex items-center justify-center w-full max-w-[327px] min-h-[570px] p-6 box-border md:w-full md:max-w-[1100px] md:h-[472px] md:min-h-[472px] md:p-10"
                style={{ backgroundColor: defaultResultCardBackground, ...fontStyle }}
              >
                <div className="flex flex-col items-start justify-start w-full h-full md:items-center overflow-visible">
                  {/* Contenedor conjunto resultado + RichText: 492 × 234 en desktop */}
                  <div className="flex flex-col items-start justify-center w-full max-w-[279px] min-h-0 shrink-0 text-left mt-4 md:mt-6 md:max-w-[492px] md:w-full md:h-[234px] md:items-center md:text-center">
                    {bmi !== null && (
                      /* Resultado: fuente del bloque o Saans; móvil izquierda, desktop centro */
                      <div
                        className="mb-4 w-full max-w-[675px] md:h-[52px] flex flex-wrap items-baseline justify-start text-left md:justify-center md:text-center"
                        style={{
                          color: defaultResultTextColor,
                          fontFamily: selectedFontFamily || 'Saans, sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: '2rem',
                          lineHeight: 1.25,
                          letterSpacing: 0,
                        }}
                      >
                        <span style={{ fontSize: '2.25rem' }}>
                          Tu IMC es de
                        </span>
                        <span className="inline-flex items-baseline ml-2">
                          <span style={{ fontSize: '2.75rem' }}>
                            {bmi.toFixed(1).replace('.', ',')}
                          </span>
                          <span style={{ fontSize: '1.5rem' }} className="ml-1">
                            kg/m2
                          </span>
                        </span>
                      </div>
                    )}

                    {resultContent ? (
                      <div
                        data-bloque-imc-result-desc
                        className={cn(
                          'text-left flex-1 min-h-0 w-full md:flex md:items-start md:justify-center',
                          resultRichtextClass,
                        )}
                        style={{ color: defaultResultTextColor }}
                      >
                        <RichText data={resultContent} enableGutter={false} enableProse={false} />
                      </div>
                    ) : null}
                  </div>

                  {/* Espaciador solo en móvil para separar descripción y botón (IMC < 26) */}
                  {resultButton && resultButton.length > 0 ? (
                    <div className="w-full shrink-0 h-24 md:h-0 md:min-h-0 md:overflow-hidden" aria-hidden />
                  ) : null}
                  {resultButton && resultButton.length > 0 ? (
                    <div className="flex justify-center shrink-0 w-full md:mt-10">
                      {resultButton.map((buttonItem, index) => {
                        const iconSvg = buttonItem.iconSVG?.trim()
                          ? sanitizeSVG(buttonItem.iconSVG)
                          : ''
                        const linkProps = buttonItem.link as React.ComponentProps<typeof CMSLink>
                        return (
                          <CMSLink
                            key={index}
                            {...linkProps}
                            label={undefined}
                            appearance="inline"
                            className={cn(
                              'imc-senda-result-btn transition-opacity hover:opacity-90 font-medium',
                              sendaBlockButtonNativeClassName,
                            )}
                            style={{
                              ...(defaultResultButtonColor && {
                                backgroundColor: defaultResultButtonColor,
                              }),
                              ...(defaultResultButtonTextColor && {
                                color: defaultResultButtonTextColor,
                              }),
                              ...fontStyle,
                            }}
                          >
                            <span
                              className="imc-senda-btn-label inline-flex flex-row items-center justify-center gap-2"
                              dir="ltr"
                            >
                              <span className="min-w-0">
                                {linkProps.label?.trim() || 'Continuar'}
                              </span>
                              {iconSvg ? (
                                <span
                                  className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                                  aria-hidden
                                  dangerouslySetInnerHTML={{ __html: iconSvg }}
                                />
                              ) : null}
                            </span>
                          </CMSLink>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <HighBMIResultErrorBoundary
              fallback={
                <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center min-w-0">
                  <div
                    className="rounded-3xl flex items-center justify-center w-full max-w-[327px] min-h-[200px] p-6 box-border md:w-full md:max-w-[1100px] md:min-h-[200px] md:p-10"
                    style={{
                      backgroundColor: defaultHighBMICardBackground || '#f8f8f8',
                      color: defaultHighBMITextColor || '#000000',
                      ...fontStyle,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      {bmi !== null && (
                        <div
                          className="mb-4 w-full max-w-[675px] flex flex-wrap items-baseline justify-center text-center"
                          style={{
                            color: defaultHighBMITextColor || '#000000',
                            fontFamily: selectedFontFamily || 'Saans, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: '2rem',
                            lineHeight: 1.25,
                            letterSpacing: 0,
                            textAlign: 'center',
                          }}
                        >
                          <span style={{ fontSize: '2.25rem' }}>Tu IMC es de</span>
                          <span className="inline-flex items-baseline ml-2">
                            <span style={{ fontSize: '2.75rem' }}>
                              {bmi.toFixed(1).replace('.', ',')}
                            </span>
                            <span style={{ fontSize: '1.5rem' }} className="ml-1">
                              kg/m2
                            </span>
                          </span>
                        </div>
                      )}
                      <p className="mt-2 text-sm opacity-80">Contenido no disponible en este momento.</p>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center min-w-0">
                <div
                  className="rounded-3xl flex items-center justify-center w-full max-w-[327px] min-h-0 p-6 pb-12 box-border md:w-full md:max-w-[1100px] md:min-h-[472px] md:h-auto md:p-10"
                  style={{
                    backgroundColor: defaultHighBMICardBackground,
                    ...fontStyle,
                  }}
                >
                  <div className="flex flex-col items-start justify-start gap-y-3 w-full max-w-full min-w-0 md:max-w-[908px] md:items-center md:justify-between md:gap-y-0 md:min-h-0">
                    <div className="flex flex-col items-start justify-center w-full max-w-[279px] min-h-0 min-w-0 text-left md:max-w-[492px] md:w-full md:min-h-[128px] md:items-center md:text-center">
                      {bmi !== null && (
                        <div
                          className="mb-6 w-full max-w-[675px] md:h-[52px] flex flex-wrap items-baseline justify-start text-left md:justify-center md:text-center md:mb-6"
                          style={{
                            color: defaultHighBMITextColor,
                            fontFamily: selectedFontFamily || 'Saans, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: '2rem',
                            lineHeight: 1.25,
                            letterSpacing: 0,
                          }}
                        >
                          <span style={{ fontSize: '2.25rem' }}>Tu IMC es de</span>
                          <span className="inline-flex items-baseline ml-2">
                            <span style={{ fontSize: '2.75rem' }}>
                              {bmi.toFixed(1).replace('.', ',')}
                            </span>
                            <span style={{ fontSize: '1.5rem' }} className="ml-1">
                              kg/m2
                            </span>
                          </span>
                        </div>
                      )}

                      {highBMIContent ? (
                        <div
                          data-bloque-imc-high-bmi-desc
                          className={cn('text-left md:text-center ml-2 md:ml-0', highBmiContentClass)}
                          style={{ color: defaultHighBMITextColor }}
                        >
                          <RichText data={highBMIContent} enableGutter={false} enableProse={false} />
                        </div>
                      ) : null}
                    </div>

                    <div className="w-full max-w-[279px] md:max-w-[492px] h-[1px] my-2 md:my-5 bg-[#BDB6A8] shrink-0" />

                    <div className="w-full max-w-[279px] min-h-0 min-w-0 md:max-w-[492px] md:w-full md:min-h-[211px] flex flex-col md:flex-row gap-2 md:gap-6 md:items-center items-start">
                      {highBMIImageUrl ? (
                        <div className="flex justify-start md:justify-start shrink-0">
                          <div className="relative w-[127px] h-[118px] md:w-[176px] md:h-[163px] rounded-2xl overflow-hidden">
                            <Image
                              src={highBMIImageUrl}
                              alt={highBMIImageAlt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : null}

                      {highBMINameAndDescription ? (
                        <div className={highBmiNameClass} style={{ color: defaultHighBMITextColor }}>
                          <RichText
                            data={highBMINameAndDescription}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="w-full max-w-[279px] md:max-w-[492px] h-[1px] mt-6 mb-2 md:my-5 bg-[#BDB6A8] shrink-0" />

                    {highBMIButton && highBMIButton.length > 0 ? (
                      <div className="flex justify-center w-full mt-4 md:mt-0">
                        {highBMIButton.map((buttonItem, index) => {
                          const iconSvg = buttonItem.iconSVG?.trim()
                            ? sanitizeSVG(buttonItem.iconSVG)
                            : ''
                          const linkProps = buttonItem.link as React.ComponentProps<typeof CMSLink>
                          return (
                            <CMSLink
                              key={index}
                              {...linkProps}
                              label={undefined}
                              appearance="inline"
                              className={cn(
                                'imc-senda-high-btn transition-opacity hover:opacity-90 font-medium',
                                sendaBlockButtonNativeClassName,
                              )}
                              style={{
                                ...(defaultHighBMIButtonColor && {
                                  backgroundColor: defaultHighBMIButtonColor,
                                }),
                                ...(defaultHighBMIButtonTextColor && {
                                  color: defaultHighBMIButtonTextColor,
                                }),
                                ...fontStyle,
                              }}
                            >
                              <span
                                className="imc-senda-btn-label inline-flex flex-row items-center justify-center gap-2"
                                dir="ltr"
                              >
                                <span className="min-w-0">
                                  {linkProps.label?.trim() || 'Continuar'}
                                </span>
                                {iconSvg ? (
                                  <span
                                    className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                                    aria-hidden
                                    dangerouslySetInnerHTML={{ __html: iconSvg }}
                                  />
                                ) : null}
                              </span>
                            </CMSLink>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </HighBMIResultErrorBoundary>
          )}
        </div>
      </div>
    </>
  )
}
