'use client'

import React from 'react'
import Image from 'next/image'
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
import { appendSendaInjectedButtonBorderRadius } from '@/utilities/sendaInjectedButtonRadius'
import { RxChevronRight } from 'react-icons/rx'
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

/** Tipos locales: sin depender de payload-types para que el bloque no falle si no está en enabledBlockSlugs. */
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

function normalizeLssFontGroup(raw: unknown): FontGroupData | null {
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

const LSS_FG_RICHTEXT =
  'lss-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

/** Tamaño fijo del icono cuando viene de subida (media / archivo .svg u otro raster). */
const LSS_UPLOADED_ICON_PX = 65

/** `width`/`height` del SVG → valor CSS (número sin unidad → `px`). */
function svgAttrToCssSize(raw: string | undefined, fallback: string): string {
  if (raw == null || raw === '') return fallback
  const t = raw.trim()
  if (/^\d+(\.\d+)?$/.test(t)) return `${t}px`
  return t
}

type LinkType = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: number | string | { slug?: string }
  } | null
  url?: string | null
  label?: string | null
}

/** Objeto mínimo de media (id o documento con url). */
type MediaLike = number | { url?: string; alt?: string } | null

type SectionIcon = {
  useMedia?: boolean | null
  mediaImage?: MediaLike
  iconSVG?: string | null
  alt?: string | null
}

type Section = {
  icon?: SectionIcon | null
  richText?: DefaultTypedEditorState | null
  enableLink?: boolean | null
  link?: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: number | unknown
    } | null
    url?: string | null
    label?: string | null
    appearance?: 'default' | 'outline' | null
  } | null
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

type LayoutSendaSectionsProps = {
  anchorId?: string | null
  richText?: DefaultTypedEditorState | null
  sections?: Section[] | null
  buttons?: Array<{ link?: LinkType | null }> | null
  backgroundColor?: string | null
  /** Si es true, el contenido interior usa `customWidthPercent` como ancho en vw; el fondo a ancho completo. */
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
  textColor?: string | null
  boldTextColor?: string | null
  buttonBackgroundColor?: string | null
  buttonTextColor?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

const getIconImageSrc = (icon: SectionIcon | null | undefined): string => {
  if (!icon || !icon.useMedia || !icon.mediaImage || typeof icon.mediaImage !== 'object') return ''
  return icon.mediaImage.url || ''
}

const getIconAlt = (icon: SectionIcon | null | undefined): string => {
  return icon?.alt || 'Icon'
}

const hasLink = (section: Section): boolean => {
  if (!section.enableLink || !section.link) return false
  if (section.link.type === 'reference' && section.link.reference?.value) return true
  if (section.link.type === 'custom' && section.link.url) return true
  return false
}

export const LayoutSendaSectionsBlock: React.FC<LayoutSendaSectionsProps> = (props) => {
  const {
    anchorId,
    richText,
    sections,
    buttons,
    backgroundColor,
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
    textColor,
    boldTextColor,
    buttonBackgroundColor,
    buttonTextColor,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `layout-senda-sections-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeLssFontGroup(fontGroup)
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
  const isValidFontFile = fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []
    const sel = `[data-lss-font="${styleId}"]`
    const mainRichtext = `${sel} .lss-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    const lssBtnLabels = `${sel} .lss-btn-label`

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
        styles.push(`${lssBtnLabels} { font-size: ${bodyBtnDesk} !important; }`)
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
          mobRules.push(`${lssBtnLabels} { font-size: ${bodyMobBtn} !important; }`)
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
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${lssBtnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${lssBtnLabels} { line-height: ${bodyLhMob} !important; } }`,
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

    styles.push(
      `@media (max-width: 767px) { ${sel} .lss-main-richtext, ${sel} .lss-main-richtext * { text-align: left !important; } }`,
    )

    if (textColor) {
      styles.push(
        `${sel}, ${sel} p, ${sel} h1, ${sel} h2, ${sel} h3, ${sel} h4, ${sel} h5, ${sel} h6, ${sel} li, ${sel} span:not(strong):not(b):not(.lss-btn-label), ${sel} a { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `${sel} strong, ${sel} b { color: ${boldTextColor} !important; }`,
      )
    }

    const lssFilledBtn = `${sel} .lss-btn-filled`
    appendSendaInjectedButtonBorderRadius(styles, lssFilledBtn)

    if (buttonBackgroundColor || buttonTextColor) {
      const btnRules: string[] = []
      if (buttonBackgroundColor)
        btnRules.push(`background-color: ${buttonBackgroundColor} !important;`)
      if (btnRules.length > 0) {
        styles.push(`${lssFilledBtn} { ${btnRules.join(' ')} }`)
      }

      if (buttonTextColor) {
        styles.push(
          `${lssFilledBtn}, ${lssFilledBtn} * { color: ${buttonTextColor} !important; }`,
        )
      }
    }

    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  /** Ancho del contenido en % del viewport (solo si el checkbox está activo). */
  const lssCustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const lssCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(
    applyCustomWidth,
    customWidthPercentMobile,
  )
  const lssBreakoutCss =
    lssCustomWidthVw != null && lssCustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, lssCustomWidthVw, lssCustomWidthMobileVw)
      : ''

  const renderSection = (section: Section, index: number) => {
    const icon = section.icon
    const iconImageSrc = icon ? getIconImageSrc(icon) : ''
    const iconSvg = icon?.useMedia ? null : icon?.iconSVG
    const sanitizedIconSvg = iconSvg ? sanitizeSVG(iconSvg) : ''
    const svgWidthMatch = sanitizedIconSvg.match(/\swidth=["']([^"']+)["']/i)
    const svgHeightMatch = sanitizedIconSvg.match(/\sheight=["']([^"']+)["']/i)
    const rawSvgWidth = svgWidthMatch?.[1]?.trim()
    const rawSvgHeight = svgHeightMatch?.[1]?.trim()
    const normalizedIconSvg = sanitizedIconSvg.replace(/\sheight=["'][^"']*["']/gi, '')

    const svgWidthCss = svgAttrToCssSize(rawSvgWidth, '48px')
    const svgHeightCss = svgAttrToCssSize(
      rawSvgHeight,
      rawSvgWidth != null && rawSvgWidth !== ''
        ? svgAttrToCssSize(rawSvgWidth, '48px')
        : '48px',
    )

    const sectionContent = (
      <div className="flex flex-col gap-4 transition-all duration-200 hover:opacity-90">
        {(iconImageSrc || normalizedIconSvg) && (
          <div className="flex shrink-0 justify-start">
            {iconImageSrc ? (
              <span
                className="inline-flex shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: LSS_UPLOADED_ICON_PX,
                  height: LSS_UPLOADED_ICON_PX,
                }}
              >
                <Image
                  src={iconImageSrc}
                  alt={getIconAlt(icon)}
                  width={LSS_UPLOADED_ICON_PX}
                  height={LSS_UPLOADED_ICON_PX}
                  className="size-full object-contain"
                  unoptimized={/\.svg/i.test(iconImageSrc)}
                />
              </span>
            ) : (
              <span
                className="relative inline-flex shrink-0 overflow-hidden"
                style={{ width: svgWidthCss, height: svgHeightCss }}
                aria-hidden
              >
                <span
                  className="absolute inset-0 [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:max-w-none"
                  dangerouslySetInnerHTML={{ __html: normalizedIconSvg }}
                />
              </span>
            )}
          </div>
        )}
        {section.richText && (
          <div
            className={cn(
              'min-w-0',
              fontGroupTypographyActive && LSS_FG_RICHTEXT,
              !fontGroupTypographyActive &&
                '[&_h1]:m-0 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:m-0 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:m-0 [&_p]:m-0 [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-1 [&_ol]:list-decimal [&_ol]:pl-5',
            )}
          >
            <RichText data={section.richText} enableGutter={false} enableProse={false} />
          </div>
        )}
      </div>
    )

    if (hasLink(section)) {
      return (
        <CMSLink
          key={index}
          {...(section.link as React.ComponentProps<typeof CMSLink>)}
          appearance="inline"
          className="block cursor-pointer rounded-lg py-4 pl-2 pr-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md sm:pl-2.5 md:p-4"
        >
          {sectionContent}
        </CMSLink>
      )
    }

    return (
      <div key={index} className="rounded-lg py-4 pl-2 pr-4 sm:pl-2.5 md:p-4">
        {sectionContent}
      </div>
    )
  }

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      {lssBreakoutCss ? <style>{lssBreakoutCss}</style> : null}
      <section
        id={sanitizeAnchorId(anchorId, 'layout-senda-sections')}
        data-lss-font={styleId}
        className={cn(
          'relative w-full',
          lssCustomWidthVw == null &&
            'overflow-x-hidden py-0 pl-2 pr-[5%] sm:pl-3 md:px-[5%]',
          lssCustomWidthVw != null && 'overflow-x-visible px-0',
        )}
        style={lssCustomWidthVw == null && backgroundColor ? { backgroundColor } : undefined}
      >
        {lssCustomWidthVw != null && backgroundColor ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 left-1/2 -z-0 w-screen -translate-x-1/2 max-w-none"
            style={{ backgroundColor }}
          />
        ) : null}
        <div
          className={cn(
            'relative z-[1] min-w-0 py-16 md:py-24 lg:py-20',
            lssCustomWidthVw != null && 'overflow-x-visible',
          )}
        >
          <div
            className={cn(
              'relative min-w-0',
              lssCustomWidthVw == null ? 'mx-auto w-full' : 'box-border w-full max-w-none px-0 overflow-x-visible',
            )}
            {...(lssCustomWidthVw != null && lssCustomWidthMobileVw != null
              ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
              : {})}
            style={
              lssCustomWidthVw == null
                ? undefined
                : lssCustomWidthMobileVw != null
                  ? sendaBreakoutOnlyBoxSizing()
                  : sendaCalcBreakoutInlineStyle(lssCustomWidthVw)
            }
          >
            <div className={lssCustomWidthVw == null ? 'container' : 'mx-auto w-full max-w-none'}>
          <div className="mb-[32px] w-full md:mb-18 lg:mb-14" style={fontStyle}>
            {richText && (
              <div
                className={cn(
                  'lss-main-richtext w-full',
                  fontGroupTypographyActive && LSS_FG_RICHTEXT,
                  !fontGroupTypographyActive &&
                    '[&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6',
                )}
              >
                <RichText data={richText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>

          {Array.isArray(sections) && sections.length > 0 && (
            <div className="grid grid-cols-1 gap-y-[32px] md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4 lg:gap-y-12">
              {sections.map((section, index) => renderSection(section, index))}
            </div>
          )}

          {Array.isArray(buttons) && buttons.length > 0 && (
            <div className="mt-[32px] flex flex-wrap items-center gap-4 md:mt-18 lg:mt-14">
              {buttons.map((button, index) => {
                const isSecondButton = index === 1
                if (isSecondButton) {
                  return (
                    <CMSLink
                      key={index}
                      {...(button.link as React.ComponentProps<typeof CMSLink>)}
                      appearance="link"
                      size="clear"
                    >
                      <RxChevronRight className="ml-1 inline-block" />
                    </CMSLink>
                  )
                }
                const link = button.link as React.ComponentProps<typeof CMSLink> & { label?: string }
                const { label: linkLabel, ...linkProps } = link
                return (
                  <CMSLink
                    key={index}
                    {...linkProps}
                    label={undefined}
                    appearance="secondary"
                    className="lss-btn-filled"
                    style={fontStyle}
                  >
                    <span
                      className={cn(
                        'lss-btn-label',
                        fontGroupTypographyActive && 'leading-normal',
                      )}
                    >
                      {linkLabel ?? 'Button'}
                    </span>
                  </CMSLink>
                )
              })}
            </div>
          )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
