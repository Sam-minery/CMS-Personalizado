'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import {
  appendFontGroupHeadingMarginRules,
  appendFontGroupLineHeightRules,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
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
  lineHeights?: FontGroupLineHeights | null
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
  return o as FontGroupData
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

      appendFontGroupHeadingMarginRules(
        fontGroupObj.headingMargins,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )
      appendFontGroupLineHeightRules(
        fontGroupObj.lineHeights,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )

      const bodyLhBtn = trimFontGroupValue(fontGroupObj.lineHeights?.body)
      if (bodyLhBtn) {
        styles.push(`${heroLeftBtnLabels} { line-height: ${bodyLhBtn} !important; }`)
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
    if (heroSendaButtonBackgroundColor || heroSendaButtonTextColor) {
      const btnBaseRules: string[] = ['border-radius: 0.75rem !important;']
      if (heroSendaButtonBackgroundColor) btnBaseRules.push(`background-color: ${heroSendaButtonBackgroundColor} !important;`)
      if (heroSendaButtonTextColor) {
        styles.push(
          `[data-hero-senda-font="${styleId}"] .hero-senda-btn-default, [data-hero-senda-font="${styleId}"] .hero-senda-btn-default * { color: ${heroSendaButtonTextColor} !important; }`,
        )
      }
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-default { ${btnBaseRules.join(' ')} }`)
    } else {
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-default { border-radius: 0.75rem !important; }`)
    }
    if (heroSendaButton2BackgroundColor || heroSendaButton2TextColor) {
      const btn2Rules: string[] = ['border-radius: 0.75rem !important;']
      if (heroSendaButton2BackgroundColor) btn2Rules.push(`background-color: ${heroSendaButton2BackgroundColor} !important;`)
      if (heroSendaButton2TextColor) {
        styles.push(
          `[data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary, [data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary * { color: ${heroSendaButton2TextColor} !important; }`,
        )
        btn2Rules.push(`border: 1px solid color-mix(in srgb, ${heroSendaButton2TextColor} 60%, transparent) !important;`)
      }
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary { ${btn2Rules.join(' ')} }`)
    } else {
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary { border-radius: 0.75rem !important; }`)
    }
    if (heroSendaButton3BackgroundColor || heroSendaButton3TextColor) {
      const btn3Rules: string[] = ['border-radius: 1.25rem !important;', 'padding: 1.25rem 2rem !important;', 'min-height: 4rem !important;', 'display: inline-flex !important;', 'align-items: center !important;']
      if (heroSendaButton3BackgroundColor) btn3Rules.push(`background-color: ${heroSendaButton3BackgroundColor} !important;`)
      if (heroSendaButton3TextColor) {
        styles.push(
          `[data-hero-senda-font="${styleId}"] .hero-senda-btn-image, [data-hero-senda-font="${styleId}"] .hero-senda-btn-image * { color: ${heroSendaButton3TextColor} !important; }`,
        )
      }
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-image { ${btn3Rules.join(' ')} }`)
    } else {
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-image { border-radius: 1.25rem !important; padding: 1.25rem 2rem !important; min-height: 4rem !important; display: inline-flex !important; align-items: center !important; }`)
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const imageSrc =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media.url || ''
      : heroSendaImage?.url || ''
  const imageAlt =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media.alt || heroSendaImage.alt || 'Hero image'
      : heroSendaImage?.alt || 'Hero image'

  const leftButtons = (Array.isArray(heroSendaLeftButtons) && heroSendaLeftButtons.length > 0)
    ? heroSendaLeftButtons.slice(0, 2)
    : (Array.isArray(links) ? links.slice(0, 2).map((item) => ({ link: item.link, appearance: 'default' as const, size: 'sm' as const, iconSVG: null })) : [])
  const imageButtonLink = heroSendaImageButton?.link
  const imageButtonIconSVG = heroSendaImageButton?.iconSVG
  const useVidivAgent = heroSendaImageButton?.useVidivAgent === true
  const showImageButtonArea = useVidivAgent || imageButtonLink != null

  const [footerInView, setFooterInView] = useState(false)
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
      <section
        id="hero-senda"
        data-hero-senda-font={styleId}
        className="relative overflow-visible px-[5%] py-16 md:py-24 lg:py-28"
        style={
          heroSendaBackgroundColor
            ? { backgroundColor: heroSendaBackgroundColor }
            : undefined
        }
      >
        <div className="container relative">
          {/* Móvil: texto → botones (1 o 2 en fila) → imagen. Desktop lg+: 2 cols; 1 botón además centrado bajo el bloque. */}
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center [&>.hero-senda-col-left]:order-1 [&>.hero-senda-col-right]:order-2">
            <div className="hero-senda-col-left" style={fontStyle}>
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
                  className={
                    leftButtons.length === 1
                      ? 'mt-6 flex flex-wrap gap-4 md:mt-8 lg:hidden'
                      : 'mt-6 flex flex-row flex-nowrap items-stretch gap-2 sm:gap-3 md:mt-8 md:gap-4 lg:flex-wrap lg:gap-4'
                  }
                >
                  {leftButtons.map((item, index) => {
                    const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
                    const label = (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
                    const appearance = (item as HeroSendaButton).appearance ?? (index === 0 ? 'default' : 'secondary')
                    const size = (item as HeroSendaButton).size ?? 'sm'
                    const iconSVG = (item as HeroSendaButton).iconSVG ?? null
                    const btnClassName = appearance === 'default' ? 'hero-senda-btn-default' : appearance === 'secondary' ? 'hero-senda-btn-secondary' : undefined
                    const twoCols = leftButtons.length === 2
                    // Con font group el tamaño lo marca el CMS (texto normal); sin Tailwind text-xs/base para no pisarlo.
                    const labelClass = fontGroupTypographyActive
                      ? 'hero-senda-btn-label min-w-0 truncate text-center leading-normal'
                      : 'min-w-0 truncate text-center max-lg:text-xs max-lg:leading-tight lg:text-base lg:leading-normal'
                    return (
                      <CMSLink
                        key={index}
                        {...(link as React.ComponentProps<typeof CMSLink>)}
                        label={undefined}
                        appearance={appearance}
                        size={size}
                        className={
                          twoCols
                            ? `${btnClassName ?? ''} max-lg:min-w-0 max-lg:flex-1 max-lg:basis-0 max-lg:justify-center max-lg:overflow-hidden lg:inline-flex lg:w-auto lg:flex-none lg:shrink-0`.trim()
                            : `${btnClassName ?? ''} max-lg:overflow-hidden`.trim()
                        }
                        style={fontStyle}
                      >
                        <span
                          className={
                            twoCols
                              ? 'inline-flex min-w-0 max-w-full flex-1 flex-row flex-nowrap items-center justify-center gap-1.5 overflow-hidden lg:flex-initial lg:justify-start'
                              : 'inline-flex min-w-0 max-w-full flex-row flex-nowrap items-center justify-center gap-1.5 overflow-hidden'
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
            <div className="hero-senda-col-right flex flex-col">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
              )}
            </div>
          </div>
          {/* Solo desktop (lg+): un botón centrado bajo el hero; en móvil ese botón va bajo el texto (columna izq). */}
          {leftButtons.length === 1 && (() => {
            const item = leftButtons[0]
            const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
            const label = (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
            const appearance = (item as HeroSendaButton).appearance ?? 'default'
            const size = (item as HeroSendaButton).size ?? 'sm'
            const iconSVG = (item as HeroSendaButton).iconSVG ?? null
            const btnClassName = appearance === 'default' ? 'hero-senda-btn-default' : appearance === 'secondary' ? 'hero-senda-btn-secondary' : undefined
            return (
              <div className="mt-10 md:mt-12 hidden lg:flex justify-center">
                <CMSLink
                  {...(link as React.ComponentProps<typeof CMSLink>)}
                  label={undefined}
                  appearance={appearance}
                  size={size}
                  className={btnClassName}
                  style={fontStyle}
                >
                  <span className="inline-flex items-center gap-1.5">
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
                  size="lg"
                  className="hero-senda-btn-image text-base md:text-lg p-3 md:p-4 md:px-6 md:py-3"
                  style={fontStyle}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="hidden md:inline">
                      {fontStyle ? <span style={fontStyle}>{(imageButtonLink as HeroSendaLink).label ?? ''}</span> : ((imageButtonLink as HeroSendaLink).label ?? '')}
                    </span>
                    {imageButtonIconSVG ? (
                      <span
                        className="inline-flex shrink-0 w-8 h-8 md:w-9 md:h-9 [&_svg]:w-full [&_svg]:h-full"
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
