'use client'

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { sendaBlockButtonPrimitiveClassName } from '@/utilities/sendaBlockButtonClasses'
import { appendSendaInjectedButtonBorderRadius } from '@/utilities/sendaInjectedButtonRadius'
import { cn } from '@/utilities/ui'
import {
  SENDA_CUSTOM_BREAKOUT_ATTR,
  buildSendaCenteredVwBreakoutResponsiveCss,
  sendaBreakoutOnlyBoxSizing,
  sendaCenteredVwBreakoutInlineStyle,
  sendaResolveOptionalMobileWidthVw,
} from '@/utilities/sendaCustomWidthBreakout'
import { expandFontGroupRichTextFields } from '@/utilities/expandFontGroupRichTextFields'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_DESKTOP_MIN,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  mergeFontGroupLineHeightsWithFallback,
  trimFontGroupValue,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

/** Variante de font group -> font-weight y font-style para @font-face */
const FONT_GROUP_VARIANT_CSS: Record<string, { weight: string; style: string }> = {
  regular: { weight: '400', style: 'normal' },
  regularItalic: { weight: '400', style: 'italic' },
  medium: { weight: '500', style: 'normal' },
  mediumItalic: { weight: '500', style: 'italic' },
  semibold: { weight: '600', style: 'normal' },
  semiboldItalic: { weight: '600', style: 'italic' },
  bold: { weight: '700', style: 'normal' },
  boldItalic: { weight: '700', style: 'italic' },
  light: { weight: '300', style: 'normal' },
  lightItalic: { weight: '300', style: 'italic' },
  heavy: { weight: '800', style: 'normal' },
  heavyItalic: { weight: '800', style: 'italic' },
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

/** API / live preview: `{ relationTo, value }` o documento plano del font-group. */
function normalizeHeroFontGroup(raw: unknown): FontGroupData | null {
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

type HeroSendaLink = {
  type?: 'custom' | 'reference' | null
  url?: string | null
  label?: string | null
  newTab?: boolean | null
  appearance?: string | null
  reference?: { relationTo?: 'pages' | 'posts'; value?: Page | Post | string | number } | null
}

type LinkItem = {
  link: HeroSendaLink
}

type HeroSendaButton = {
  title?: string | null
  link?: HeroSendaLink
  appearance?: 'default' | 'secondary' | null
  size?: 'sm' | 'lg' | null
  iconSVG?: string | null
}

type HeroSendaImage = {
  useMedia?: boolean
  media?: Media | number | null
  url?: string | null
  alt?: string | null
  useCuImgDims?: boolean | null
  customUploadedImageWidth?: number | null
  customUploadedImageWidthUnit?: 'px' | 'rem' | null
  customUploadedImageHeight?: number | null
  customUploadedImageHeightUnit?: 'px' | 'rem' | null
  customUploadedImageMobW?: number | null
  customUploadedImageMobWu?: 'px' | 'rem' | null
  customUploadedImageMobH?: number | null
  customUploadedImageMobHu?: 'px' | 'rem' | null
}

type Props = {
  type?: string
  richText?: DefaultTypedEditorState
  links?: LinkItem[]
  heroSendaLeftButtons?: HeroSendaButton[] | null
  heroSendaImage?: HeroSendaImage | null
  heroSendaImageButton?: { link?: HeroSendaLink; iconSVG?: string | null; useVidivAgent?: boolean | null } | null
  heroSendaBackgroundColor?: string | null
  heroSendaTextColor?: string | null
  heroSendaBoldTextColor?: string | null
  heroSendaButtonBackgroundColor?: string | null
  heroSendaButtonTextColor?: string | null
  heroSendaButton2BackgroundColor?: string | null
  heroSendaButton2TextColor?: string | null
  heroSendaButton3BackgroundColor?: string | null
  heroSendaButton3TextColor?: string | null
  heroSendaUseFontGroup?: boolean | null
  heroSendaFontGroup?: FontGroupData | number | null
  heroSendaFontFamily?: string | null
  heroSendaUseCustomFont?: boolean
  heroSendaCustomFontFile?: FontFile | number | null
  heroSendaCustomFontName?: string | null
  heroSendaApplyCustomWidth?: boolean | null
  heroSendaCustomWidthPercent?: number | null
  heroSendaCustomWidthPercentMobile?: number | null
}

export const Hero_SENDA: React.FC<Props> = (props) => {
  const {
    richText,
    links,
    heroSendaLeftButtons,
    heroSendaImage,
    heroSendaImageButton,
    heroSendaBackgroundColor,
    heroSendaTextColor,
    heroSendaBoldTextColor,
    heroSendaButtonBackgroundColor,
    heroSendaButtonTextColor,
    heroSendaButton2BackgroundColor,
    heroSendaButton2TextColor,
    heroSendaButton3BackgroundColor,
    heroSendaButton3TextColor,
    heroSendaUseFontGroup,
    heroSendaFontGroup,
    heroSendaFontFamily,
    heroSendaUseCustomFont,
    heroSendaCustomFontFile,
    heroSendaCustomFontName,
    heroSendaApplyCustomWidth,
    heroSendaCustomWidthPercent,
    heroSendaCustomWidthPercentMobile,
  } = props

  const styleId = 'hero-senda'
  const fontGroupObj =
    heroSendaUseFontGroup && heroSendaFontGroup && typeof heroSendaFontGroup === 'object'
      ? normalizeHeroFontGroup(heroSendaFontGroup)
      : null

  /** Misma condición que Pricing SENDA: tipografía CMS solo con familia + fuentes cargadas. */
  const fontGroupTypographyActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    heroSendaCustomFontFile && typeof heroSendaCustomFontFile === 'object'
      ? heroSendaCustomFontFile
      : null
  const customFontFamilyName =
    heroSendaCustomFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename ? customFontFileObj.filename.replace(/\.[^.]+$/, '') : undefined)

  const getFontFamily = () => {
    if (fontGroupObj?.fontFamilyName) return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
    if (heroSendaUseCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (heroSendaFontFamily && heroSendaFontFamily !== 'default') return heroSendaFontFamily
    return undefined
  }
  const selectedFontFamily = getFontFamily()
  useGoogleFont(fontGroupTypographyActive ? undefined : selectedFontFamily)

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    fontFileUrl &&
    /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []
    const sel = `[data-hero-senda-font="${styleId}"]`
    const mainRichtext = `${sel} .hero-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    /** Botones default/secondary (columna izq. + copia centrada en desktop). */
    const heroLeftBtnLabels = `${sel} .hero-senda-btn-default .hero-senda-btn-label, ${sel} .hero-senda-btn-secondary .hero-senda-btn-label`

    if (fontGroupTypographyActive && fontGroupObj) {
      const familyName = fontGroupObj.fontFamilyName!.replace(/"/g, '\\"')
      const fontEntries = (fontGroupObj.fonts || []).filter(
        (e): e is FontGroupFontEntry & { font: FontFile } =>
          e?.font != null && typeof e.font === 'object' && e.font?.url != null,
      )
      for (const entry of fontEntries) {
        const url = getMediaUrl(entry.font.url).replace(/([^:]\/)\/+/g, '$1')
        const variant = entry.variant || 'regular'
        const { weight, style } = FONT_GROUP_VARIANT_CSS[variant] ?? { weight: '400', style: 'normal' }
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
            font-style: ${style};
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
        styles.push(`${heroLeftBtnLabels} { font-size: ${bodyBtnDesk} !important; }`)
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
          mobRules.push(`${heroLeftBtnLabels} { font-size: ${bodyMobBtn} !important; }`)
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
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${heroLeftBtnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${heroLeftBtnLabels} { line-height: ${bodyLhMob} !important; } }`,
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
    } else if (heroSendaUseCustomFont && fontFileUrl && customFontFamilyName && isValidFontFile) {
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
    if (heroSendaTextColor) {
      styles.push(
        `[data-hero-senda-font="${styleId}"], [data-hero-senda-font="${styleId}"] p, [data-hero-senda-font="${styleId}"] h1, [data-hero-senda-font="${styleId}"] h2, [data-hero-senda-font="${styleId}"] h3, [data-hero-senda-font="${styleId}"] h4, [data-hero-senda-font="${styleId}"] h5, [data-hero-senda-font="${styleId}"] h6, [data-hero-senda-font="${styleId}"] span:not(strong):not(b), [data-hero-senda-font="${styleId}"] a { color: ${heroSendaTextColor} !important; }`,
      )
    }
    if (heroSendaBoldTextColor) {
      styles.push(
        `[data-hero-senda-font="${styleId}"] strong, [data-hero-senda-font="${styleId}"] b { color: ${heroSendaBoldTextColor} !important; }`,
      )
    }
    const heroBtnDefault = `${sel} .hero-senda-btn-default`
    const heroBtnSecondary = `${sel} .hero-senda-btn-secondary`
    const heroBtnImage = `${sel} .hero-senda-btn-image`
    appendSendaInjectedButtonBorderRadius(styles, heroBtnDefault)
    appendSendaInjectedButtonBorderRadius(styles, heroBtnSecondary)
    appendSendaInjectedButtonBorderRadius(styles, heroBtnImage)

    if (heroSendaButtonBackgroundColor || heroSendaButtonTextColor) {
      const btnBaseRules: string[] = []
      if (heroSendaButtonBackgroundColor) btnBaseRules.push(`background-color: ${heroSendaButtonBackgroundColor} !important;`)
      if (heroSendaButtonTextColor) {
        styles.push(`${heroBtnDefault}, ${heroBtnDefault} * { color: ${heroSendaButtonTextColor} !important; }`)
      }
      if (btnBaseRules.length > 0) {
        styles.push(`${heroBtnDefault} { ${btnBaseRules.join(' ')} }`)
      }
    }

    if (heroSendaButton2BackgroundColor || heroSendaButton2TextColor) {
      const btn2Rules: string[] = []
      if (heroSendaButton2BackgroundColor) btn2Rules.push(`background-color: ${heroSendaButton2BackgroundColor} !important;`)
      if (heroSendaButton2TextColor) {
        styles.push(`${heroBtnSecondary}, ${heroBtnSecondary} * { color: ${heroSendaButton2TextColor} !important; }`)
        btn2Rules.push(`border: 1px solid color-mix(in srgb, ${heroSendaButton2TextColor} 60%, transparent) !important;`)
      }
      if (btn2Rules.length > 0) {
        styles.push(`${heroBtnSecondary} { ${btn2Rules.join(' ')} }`)
      }
    }

    if (heroSendaButton3BackgroundColor || heroSendaButton3TextColor) {
      const btn3Rules: string[] = [
        'padding: 1.25rem 2rem !important;',
        'min-height: 4rem !important;',
        'display: inline-flex !important;',
        'align-items: center !important;',
      ]
      if (heroSendaButton3BackgroundColor) btn3Rules.push(`background-color: ${heroSendaButton3BackgroundColor} !important;`)
      if (heroSendaButton3TextColor) {
        styles.push(`${heroBtnImage}, ${heroBtnImage} * { color: ${heroSendaButton3TextColor} !important; }`)
      }
      styles.push(`${heroBtnImage} { ${btn3Rules.join(' ')} }`)
    } else {
      styles.push(
        `${heroBtnImage} { padding: 1.25rem 2rem !important; min-height: 4rem !important; display: inline-flex !important; align-items: center !important; }`,
      )
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  /** Ancho del hero en % del viewport (solo si el checkbox está activo). 0 o inválido → 100. */
  const heroSendaCustomWidthVw =
    heroSendaApplyCustomWidth === true
      ? (() => {
          const p = heroSendaCustomWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const heroSendaCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(
    heroSendaApplyCustomWidth,
    heroSendaCustomWidthPercentMobile,
  )
  const heroBreakoutId = `${styleId}-breakout`
  const heroBreakoutCss =
    heroSendaCustomWidthVw != null && heroSendaCustomWidthMobileVw != null
      ? buildSendaCenteredVwBreakoutResponsiveCss(
          heroBreakoutId,
          heroSendaCustomWidthVw,
          heroSendaCustomWidthMobileVw,
        )
      : ''

  const imageSrc =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media.url || ''
      : heroSendaImage?.url || ''
  const imageAlt =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media.alt || heroSendaImage.alt || 'Hero image'
      : heroSendaImage?.alt || 'Hero image'

  const mediaObj =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media
      : null
  const useCustomUploadedDims =
    heroSendaImage?.useMedia === true &&
    heroSendaImage?.useCuImgDims === true &&
    mediaObj != null
  const wVal = heroSendaImage?.customUploadedImageWidth
  const hVal = heroSendaImage?.customUploadedImageHeight
  const wUnit = heroSendaImage?.customUploadedImageWidthUnit === 'rem' ? 'rem' : 'px'
  const hUnit = heroSendaImage?.customUploadedImageHeightUnit === 'rem' ? 'rem' : 'px'
  const customDimsValid =
    useCustomUploadedDims &&
    typeof wVal === 'number' &&
    !Number.isNaN(wVal) &&
    wVal > 0 &&
    typeof hVal === 'number' &&
    !Number.isNaN(hVal) &&
    hVal > 0
  const mobWVal = heroSendaImage?.customUploadedImageMobW
  const mobHVal = heroSendaImage?.customUploadedImageMobH
  const mobWUnit = heroSendaImage?.customUploadedImageMobWu === 'rem' ? 'rem' : 'px'
  const mobHUnit = heroSendaImage?.customUploadedImageMobHu === 'rem' ? 'rem' : 'px'
  const customMobDimsValid =
    customDimsValid &&
    typeof mobWVal === 'number' &&
    !Number.isNaN(mobWVal) &&
    mobWVal > 0 &&
    typeof mobHVal === 'number' &&
    !Number.isNaN(mobHVal) &&
    mobHVal > 0
  const deskW = `${wVal}${wUnit}`
  const deskH = `${hVal}${hUnit}`
  const smW = customMobDimsValid ? `${mobWVal}${mobWUnit}` : deskW
  const smH = customMobDimsValid ? `${mobHVal}${mobHUnit}` : deskH
  const customImgBoxCss =
    customDimsValid &&
    `
#hero-senda.hero-senda--custom-img .hero-senda-custom-img-wrap {
  position: relative;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  flex-shrink: 0;
  width: min(100%, ${smW});
  height: ${smH};
  max-width: 100%;
}
@media (min-width: 1024px) {
  #hero-senda.hero-senda--custom-img .hero-senda-custom-img-wrap {
    margin-left: auto;
    margin-right: 0;
    width: min(100%, ${deskW});
    height: ${deskH};
  }
}
`.trim()
  const intrinsicW = mediaObj?.width && mediaObj.width > 0 ? mediaObj.width : 800
  const intrinsicH = mediaObj?.height && mediaObj.height > 0 ? mediaObj.height : 600

  const leftButtons = (Array.isArray(heroSendaLeftButtons) && heroSendaLeftButtons.length > 0)
    ? heroSendaLeftButtons.slice(0, 2)
    : (Array.isArray(links) ? links.slice(0, 2).map((item) => ({ link: item.link, appearance: 'default' as const, size: 'sm' as const, iconSVG: null })) : [])
  const imageButtonLink = heroSendaImageButton?.link
  const imageButtonIconSVG = heroSendaImageButton?.iconSVG
  const useVidivAgent = heroSendaImageButton?.useVidivAgent === true
  const showImageButtonArea = useVidivAgent || imageButtonLink != null

  const [footerInView, setFooterInView] = useState(false)

  const heroPairBtnsRef = useRef<HTMLDivElement>(null)
  const [pairStackVertical, setPairStackVertical] = useState(false)

  const pairMeasureKey = useMemo(() => {
    const lb =
      Array.isArray(heroSendaLeftButtons) && heroSendaLeftButtons.length > 0
        ? heroSendaLeftButtons.slice(0, 2)
        : Array.isArray(links)
          ? links.slice(0, 2).map((item) => ({
              link: item.link,
              appearance: 'default' as const,
              size: 'sm' as const,
              iconSVG: null,
            }))
          : []
    if (lb.length !== 2) return ''
    return lb
      .map((item) => {
        const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
        const label =
          (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
        const hasIcon = (item as HeroSendaButton).iconSVG ? '1' : '0'
        return `${label}\t${hasIcon}`
      })
      .join('|')
  }, [heroSendaLeftButtons, links])

  useLayoutEffect(() => {
    if (leftButtons.length !== 2) return
    const root = heroPairBtnsRef.current
    if (!root || typeof ResizeObserver === 'undefined') return

    const parseGapPx = (): number => {
      const g = getComputedStyle(root).gap
      if (!g || g === 'normal') return 12
      const n = parseFloat(g)
      return Number.isFinite(n) ? n : 12
    }

    const measure = () => {
      const kids = Array.from(root.children).filter((n): n is HTMLElement => n instanceof HTMLElement)
      if (kids.length !== 2) return
      const [a, b] = kids
      if (root.clientWidth <= 0) return

      const gap = parseGapPx()
      const sa = a.style.width
      const sb = b.style.width
      const sma = a.style.maxWidth
      const smb = b.style.maxWidth
      const fa = a.style.flex
      const fb = b.style.flex
      a.style.width = 'max-content'
      a.style.maxWidth = 'none'
      a.style.flex = 'none'
      b.style.width = 'max-content'
      b.style.maxWidth = 'none'
      b.style.flex = 'none'
      const wa = a.offsetWidth
      const wb = b.offsetWidth
      a.style.width = sa
      a.style.maxWidth = sma
      a.style.flex = fa
      b.style.width = sb
      b.style.maxWidth = smb
      b.style.flex = fb

      const cw = root.clientWidth
      const naturalSum = wa + wb + gap
      // En fila cada botón solo tiene ~mitad del ancho: si uno necesita más, no debe truncarse para “encajar” los dos; se apilan.
      const half = Math.max(0, (cw - gap) / 2)
      const ε = 2
      const needStack =
        naturalSum > cw + ε || wa > half + ε || wb > half + ε
      setPairStackVertical(needStack)
    }

    const ro = new ResizeObserver(() => measure())
    ro.observe(root)
    measure()
    const fonts = document.fonts
    let cancelled = false
    const fontsPromise = fonts?.ready
    if (fontsPromise) {
      void fontsPromise.then(() => {
        if (!cancelled) measure()
      })
    }
    return () => {
      cancelled = true
      ro.disconnect()
    }
  }, [leftButtons.length, pairMeasureKey, fontGroupTypographyActive])

  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { rootMargin: '0px 0px 50px 0px', threshold: 0 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {useVidivAgent && (
        <Script
          src="https://app.vidiv.net/widget.js"
          strategy="afterInteractive"
          type="text/javascript"
        />
      )}
      {combinedStyles && <style>{combinedStyles}</style>}
      {customImgBoxCss ? <style>{customImgBoxCss}</style> : null}
      {heroBreakoutCss ? <style>{heroBreakoutCss}</style> : null}
      <section
        id="hero-senda"
        data-hero-senda-font={styleId}
        className={cn(
          'relative w-full overflow-visible py-16 md:py-24 lg:py-28',
          heroSendaCustomWidthVw == null && 'px-[5%]',
          heroSendaCustomWidthVw != null && 'px-0',
          customDimsValid && 'hero-senda--custom-img min-h-[max-content]',
        )}
        style={heroSendaBackgroundColor ? { backgroundColor: heroSendaBackgroundColor } : undefined}
      >
        <div
          className={cn(
            'relative min-w-0',
            heroSendaCustomWidthVw == null && 'container',
            heroSendaCustomWidthVw != null && 'mx-auto box-border max-w-none',
            customDimsValid && 'overflow-visible',
          )}
          {...(heroSendaCustomWidthVw != null && heroSendaCustomWidthMobileVw != null
            ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: heroBreakoutId }
            : {})}
          style={
            heroSendaCustomWidthVw != null
              ? heroSendaCustomWidthMobileVw != null
                ? sendaBreakoutOnlyBoxSizing()
                : sendaCenteredVwBreakoutInlineStyle(heroSendaCustomWidthVw)
              : undefined
          }
        >
          {/* Móvil: texto → botones (1 o 2 en fila) → imagen. Desktop lg+: 2 cols; 1 botón además centrado bajo el bloque. */}
          <div className="grid min-w-0 grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center [&>.hero-senda-col-left]:order-1 [&>.hero-senda-col-right]:order-2">
            <div className="hero-senda-col-left min-w-0" style={fontStyle}>
              {richText && (
                <div
                  className={
                    fontGroupTypographyActive
                      ? 'hero-senda-richtext mb-5 md:mb-6 [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'
                      : 'hero-senda-richtext mb-5 md:mb-6 text-lg md:text-xl [&_h1]:text-6xl [&_h1]:font-bold [&_h1]:md:text-9xl [&_h1]:lg:text-10xl [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:md:text-8xl [&_h2]:lg:text-9xl [&_h3]:text-4xl [&_h3]:font-bold [&_h3]:md:text-7xl [&_h3]:lg:text-8xl [&_h4]:text-3xl [&_h4]:font-bold [&_h4]:md:text-6xl [&_h4]:lg:text-7xl [&_p]:text-lg [&_p]:md:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-lg [&_ul]:md:text-xl [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-lg [&_ol]:md:text-xl [&_li]:text-lg [&_li]:md:text-xl'
                  }
                >
                  <RichText
                    className=""
                    data={richText}
                    enableGutter={false}
                    enableProse={false}
                  />
                </div>
              )}
              {/* Móvil/tablet: 1 o 2 botones bajo el texto. Desktop (lg+): solo 2 botones aquí; 1 botón va abajo centrado. */}
              {leftButtons.length > 0 && (
                <div
                  ref={leftButtons.length === 2 ? heroPairBtnsRef : undefined}
                  className={
                    leftButtons.length === 1
                      ? 'mt-6 flex flex-wrap gap-4 md:mt-8 lg:hidden'
                      : cn(
                          'mt-6 flex items-stretch gap-3 md:mt-8 md:gap-4 lg:flex-wrap lg:gap-4',
                          pairStackVertical ? 'flex-col' : 'flex-row flex-nowrap',
                        )
                  }
                >
                  {leftButtons.map((item, index) => {
                    const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
                    const label = (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
                    const appearance = (item as HeroSendaButton).appearance ?? (index === 0 ? 'default' : 'secondary')
                    const iconSVG = (item as HeroSendaButton).iconSVG ?? null
                    const btnClassName = appearance === 'default' ? 'hero-senda-btn-default' : appearance === 'secondary' ? 'hero-senda-btn-secondary' : undefined
                    const twoCols = leftButtons.length === 2
                    // Con font group el tamaño lo marca el CMS (texto normal); sin Tailwind text-xs/base para no pisarlo.
                    const labelClass = fontGroupTypographyActive
                      ? cn(
                          'hero-senda-btn-label text-center leading-normal',
                          twoCols &&
                            (pairStackVertical
                              ? 'min-w-0 truncate'
                              : 'min-w-0 whitespace-normal break-words'),
                        )
                      : cn(
                          'text-center',
                          twoCols &&
                            (pairStackVertical
                              ? 'min-w-0 truncate'
                              : 'min-w-0 whitespace-normal break-words'),
                          !fontGroupTypographyActive && 'max-lg:text-xs max-lg:leading-tight lg:text-base lg:leading-normal',
                        )
                    return (
                      <CMSLink
                        key={index}
                        {...(link as React.ComponentProps<typeof CMSLink>)}
                        label={undefined}
                        appearance={appearance}
                        size="clear"
                        className={cn(
                          sendaBlockButtonPrimitiveClassName,
                          btnClassName,
                          twoCols &&
                            (pairStackVertical
                              ? 'w-full flex-none justify-center overflow-hidden whitespace-normal'
                              : 'w-auto max-lg:min-w-0 max-lg:flex-1 max-lg:basis-0 max-lg:shrink max-lg:justify-center max-lg:overflow-visible max-lg:whitespace-normal lg:inline-flex lg:w-auto lg:flex-none lg:shrink-0'),
                          !twoCols && 'max-lg:overflow-hidden',
                        )}
                        style={fontStyle}
                      >
                        <span
                          className={
                            twoCols
                              ? cn(
                                  'inline-flex min-w-0 max-w-full flex-1 flex-row flex-nowrap items-center justify-center gap-2 lg:flex-initial lg:justify-start',
                                  pairStackVertical ? 'overflow-hidden' : 'overflow-visible',
                                )
                              : 'inline-flex min-w-0 max-w-full flex-row flex-nowrap items-center justify-center gap-2 overflow-hidden'
                          }
                        >
                          {fontStyle ? (
                            <span className={labelClass} style={fontStyle}>
                              {label}
                            </span>
                          ) : (
                            <span className={labelClass}>{label}</span>
                          )}
                          {iconSVG ? (
                            <span
                              className="inline-flex shrink-0 w-5 h-5 flex-shrink-0 [&_svg]:w-full [&_svg]:h-full"
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
            </div>
            <div
              className={cn(
                'hero-senda-col-right flex min-w-0 flex-col',
                customDimsValid ? 'w-full items-center lg:items-end' : 'w-full',
              )}
            >
              {imageSrc &&
                (customDimsValid ? (
                  <div className="hero-senda-custom-img-wrap">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      fill
                      className="object-fill"
                      sizes={
                        customMobDimsValid
                          ? `(max-width: 1023px) min(100vw, ${mobWVal}px), min(50vw, ${wVal}px)`
                          : `(max-width: 1023px) min(100vw, ${wVal}px), min(50vw, ${wVal}px)`
                      }
                      priority
                    />
                  </div>
                ) : (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={intrinsicW}
                    height={intrinsicH}
                    className="w-full object-cover"
                    priority
                  />
                ))}
            </div>
          </div>
          {/* Solo desktop (lg+): un botón centrado bajo el hero; en móvil ese botón va bajo el texto (columna izq). */}
          {leftButtons.length === 1 && (() => {
            const item = leftButtons[0]
            const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
            const label = (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
            const appearance = (item as HeroSendaButton).appearance ?? 'default'
            const iconSVG = (item as HeroSendaButton).iconSVG ?? null
            const btnClassName = appearance === 'default' ? 'hero-senda-btn-default' : appearance === 'secondary' ? 'hero-senda-btn-secondary' : undefined
            return (
              <div className="mt-10 md:mt-12 hidden lg:flex justify-center">
                <CMSLink
                  {...(link as React.ComponentProps<typeof CMSLink>)}
                  label={undefined}
                  appearance={appearance}
                  size="clear"
                  className={cn(sendaBlockButtonPrimitiveClassName, btnClassName)}
                  style={fontStyle}
                >
                  <span className="inline-flex items-center gap-2">
                    {fontStyle ? (
                      <span
                        className={fontGroupTypographyActive ? 'hero-senda-btn-label' : undefined}
                        style={fontStyle}
                      >
                        {label}
                      </span>
                    ) : fontGroupTypographyActive ? (
                      <span className="hero-senda-btn-label">{label}</span>
                    ) : (
                      label
                    )}
                    {iconSVG ? (
                      <span
                        className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                        dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
                        aria-hidden
                      />
                    ) : null}
                  </span>
                </CMSLink>
              </div>
            )
          })()}
          {/* Tercer botón o widget Vidiv: posición fija; se oculta cuando el footer entra en pantalla para no taparlo */}
          {showImageButtonArea && (
            <div
              className={`hero-senda-image-btn-wrap fixed bottom-6 right-6 z-40 flex justify-end transition-opacity duration-300 ${footerInView ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            >
              {useVidivAgent ? (
                React.createElement('vidiv-agent', { slug: 'senda-health-draft' })
              ) : (
                <CMSLink
                  {...(imageButtonLink as React.ComponentProps<typeof CMSLink>)}
                  label={undefined}
                  appearance="outline"
                  size="clear"
                  className={cn(sendaBlockButtonPrimitiveClassName, 'hero-senda-btn-image')}
                  style={fontStyle}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="hidden md:inline">
                      {fontStyle ? <span style={fontStyle}>{(imageButtonLink as HeroSendaLink).label ?? ''}</span> : ((imageButtonLink as HeroSendaLink).label ?? '')}
                    </span>
                    {imageButtonIconSVG ? (
                      <span
                        className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                        dangerouslySetInnerHTML={{ __html: sanitizeSVG(imageButtonIconSVG) }}
                        aria-hidden
                      />
                    ) : null}
                  </span>
                </CMSLink>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
