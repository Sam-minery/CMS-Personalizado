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

const FTS_FG_RICHTEXT =
  'final-test-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

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

type BackgroundImageGroup = {
  useMedia?: boolean | null
  mediaImage?: ImageMedia | null
  src?: string | null
}

type MainImageGroup = {
  useMedia?: boolean | null
  mediaImage?: ImageMedia | null
  src?: string | null
  alt?: string | null
}

type ButtonGroup = {
  title?: string | null
  link?: LinkType | null
  iconSVG?: string | null
}

function getImageUrl(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as { url?: string | null; sizes?: { medium?: { url?: string }; small?: { url?: string } } }
  return m.url ?? m.sizes?.medium?.url ?? m.sizes?.small?.url ?? ''
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

function getBackgroundImageUrl(group: BackgroundImageGroup | null | undefined): string {
  if (!group) return ''
  if (group.useMedia && group.mediaImage && typeof group.mediaImage === 'object') {
    return getImageUrl(group.mediaImage)
  }
  if (typeof group.src === 'string' && group.src.trim()) return group.src.trim()
  return ''
}

function getMainImageUrl(group: MainImageGroup | null | undefined): string {
  if (!group) return ''
  if (group.useMedia !== false && group.mediaImage && typeof group.mediaImage === 'object') {
    return getImageUrl(group.mediaImage)
  }
  if (typeof group.src === 'string' && group.src.trim()) return group.src.trim()
  return ''
}

function getMainImageAlt(group: MainImageGroup | null | undefined): string {
  if (!group) return 'Imagen'
  if (group.useMedia !== false && group.mediaImage && typeof group.mediaImage === 'object') {
    return (group.mediaImage as { alt?: string }).alt ?? group.alt ?? 'Imagen'
  }
  if (typeof group.alt === 'string' && group.alt.trim()) return group.alt.trim()
  return 'Imagen'
}

export type FinalTestSendaBlockProps = {
  blockType?: string
  anchorId?: string | null
  content?: DefaultTypedEditorState | null
  mainImage?: MainImageGroup | null
  button?: ButtonGroup | null
  backgroundImage?: BackgroundImageGroup | null
  backgroundColor?: string | null
  componentBackgroundColor?: string | null
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
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
}

export const FinalTestSendaBlock: React.FC<FinalTestSendaBlockProps> = (props) => {
  const {
    anchorId,
    content,
    mainImage,
    button,
    backgroundImage,
    backgroundColor,
    componentBackgroundColor,
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
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `final-test-senda-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object' ? normalizeFontGroup(fontGroup) : null

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
    const sel = `[data-final-test-senda="${styleId}"]`
    const mainRichtext = `${sel} .final-test-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    const btnLabels = `${sel} .final-test-senda-btn .final-test-senda-btn-label`

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
          mobRules.push(
            `${mainRichtext} p .caption, ${mainRichtext} .payload-richtext .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${capM} !important; }`,
          )
          mobRules.push(`${sel} [data-text-size="caption"] { font-size: ${capM} !important; }`)
        }

        const bodyMobBtn = t(typoMob.body)
        if (bodyMobBtn) {
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
      if (bodyLhDesk) {
        styles.push(
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${btnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${btnLabels} { line-height: ${bodyLhMob} !important; } }`,
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
      styles.push(
        `${sel} .final-test-senda-content-richtext, ${sel} .final-test-senda-content-richtext p, ${sel} .final-test-senda-content-richtext h1, ${sel} .final-test-senda-content-richtext h2, ${sel} .final-test-senda-content-richtext h3, ${sel} .final-test-senda-content-richtext h4, ${sel} .final-test-senda-content-richtext h5, ${sel} .final-test-senda-content-richtext h6, ${sel} .final-test-senda-content-richtext li, ${sel} .final-test-senda-content-richtext span:not(strong):not(b), ${sel} .final-test-senda-content-richtext a { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `${sel} .final-test-senda-content-richtext strong, ${sel} .final-test-senda-content-richtext b { color: ${boldTextColor} !important; }`,
      )
    }

    const ftBtn = `${sel} .final-test-senda-btn`
    appendSendaInjectedButtonBorderRadius(styles, ftBtn)
    const btnRules: string[] = [`background-color: ${buttonBackgroundColor || '#007AFF'} !important;`]
    styles.push(`${ftBtn} { ${btnRules.join(' ')} }`)
    styles.push(
      `${ftBtn}, ${ftBtn} * { color: ${buttonTextColor || '#ffffff'} !important; }`,
    )

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .final-test-senda-richtext h1, ${sel} .final-test-senda-richtext h2, ${sel} .final-test-senda-richtext h3, ${sel} .final-test-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .final-test-senda-richtext h4 { font-weight: 900 !important; }`)
    }

    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const backgroundImageUrl = getBackgroundImageUrl(backgroundImage)

  const ftsSectionBgStyle: React.CSSProperties = {
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

  const ftsCustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const ftsCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(applyCustomWidth, customWidthPercentMobile)
  const ftsBreakoutCss =
    ftsCustomWidthVw != null && ftsCustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, ftsCustomWidthVw, ftsCustomWidthMobileVw)
      : ''

  const mainImageUrl = getMainImageUrl(mainImage)
  const mainImageAlt = getMainImageAlt(mainImage)
  const linkData = button?.link
  const buttonLabel = button?.title?.trim() || linkData?.label || 'Más información'
  const iconSVG = button?.iconSVG

  const richTextClass = cn(
    'final-test-senda-richtext final-test-senda-content-richtext',
    fontGroupTypographyActive && FTS_FG_RICHTEXT,
    !fontGroupTypographyActive &&
      'mb-5 md:mb-6 text-lg md:text-xl [&_h1]:text-6xl [&_h1]:font-bold [&_h1]:md:text-9xl [&_h1]:lg:text-10xl [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:md:text-8xl [&_h2]:lg:text-9xl [&_h3]:text-4xl [&_h3]:font-bold [&_h3]:md:text-7xl [&_h3]:lg:text-8xl [&_h4]:text-3xl [&_h4]:font-bold [&_h4]:md:text-6xl [&_h4]:lg:text-7xl [&_p]:text-lg [&_p]:md:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-lg [&_ul]:md:text-xl [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-lg [&_ol]:md:text-xl [&_li]:text-lg [&_li]:md:text-xl',
    !textColor && '[&_p]:text-neutral-800',
  )

  const renderButton = (wrapperClassName: string) => {
    if (!linkData) return null
    return (
      <div className={wrapperClassName}>
        <CMSLink
          {...(linkData as React.ComponentProps<typeof CMSLink>)}
          label={undefined}
          appearance="inline"
          className={cn(
            'final-test-senda-btn shadow-sm transition-colors hover:opacity-90',
            sendaBlockButtonNativeClassName,
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          )}
          style={fontStyle}
        >
          <span className="final-test-senda-btn-label inline-flex items-center justify-center gap-2">
            {buttonLabel}
            {iconSVG ? (
              <span
                className="inline-flex h-5 w-5 shrink-0 [&_svg]:h-full [&_svg]:w-full"
                dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
                aria-hidden
              />
            ) : null}
          </span>
        </CMSLink>
      </div>
    )
  }

  const inner = (
    <>
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:gap-y-16 lg:grid-cols-2 lg:items-center">
        <div
          className={cn(
            'final-test-senda-col-left order-1',
            ftsCustomWidthVw != null && ftsCustomWidthVw >= 100
              ? 'lg:pl-0 xl:pl-0'
              : 'lg:pl-6 xl:pl-10',
          )}
          style={fontStyle}
        >
          {content && (
            <RichText
              data={content}
              enableGutter={false}
              enableProse={false}
              className={richTextClass}
              style={textColor ? { color: textColor } : undefined}
            />
          )}
          {renderButton('mt-6 flex justify-start lg:hidden')}
        </div>
        <div className="final-test-senda-col-right order-2 flex flex-col overflow-hidden rounded-3xl">
          {mainImageUrl ? (
            <Image
              src={mainImageUrl}
              alt={mainImageAlt}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          ) : null}
        </div>
      </div>
      {renderButton('mt-10 hidden md:mt-12 lg:mt-10 lg:flex lg:justify-center')}
    </>
  )

  const ftsInnerBlock = (
    <div
      className={cn(
        ftsCustomWidthVw != null
          ? 'mx-auto w-full max-w-none px-0'
          : 'container relative max-lg:!px-2',
      )}
    >
      {componentBackgroundColor?.trim() ? (
        <div
          className={cn(
            'rounded-2xl py-10 sm:py-10 md:py-12 lg:py-14',
            ftsCustomWidthVw != null && ftsCustomWidthVw >= 100
              ? 'px-4 sm:px-5 md:px-6 lg:px-8'
              : 'px-4 sm:px-6 md:px-10 lg:px-12',
          )}
          style={{ backgroundColor: componentBackgroundColor }}
        >
          {inner}
        </div>
      ) : (
        inner
      )}
    </div>
  )

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      {ftsBreakoutCss ? <style>{ftsBreakoutCss}</style> : null}
      <section
        id={sanitizeAnchorId(anchorId, 'final-test-senda')}
        data-final-test-senda={styleId}
        className={cn(
          'final-test-senda-section relative overflow-visible',
          ftsCustomWidthVw != null && 'w-full min-w-0 max-w-none',
          ftsCustomWidthVw == null &&
            'max-lg:px-3 lg:px-[5%] pb-16 pt-20 md:pb-24 md:pt-28 lg:pb-28 lg:pt-32',
          ftsCustomWidthVw != null && 'overflow-x-visible px-0 py-0',
        )}
        style={ftsCustomWidthVw == null ? ftsSectionBgStyle : undefined}
      >
        {ftsCustomWidthVw != null && (backgroundColor || backgroundImageUrl) ? (
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 left-1/2 -z-0 max-w-none min-h-full -translate-x-1/2',
              ftsCustomWidthVw >= 100 ? 'w-[100dvw] min-w-[100dvw]' : 'w-screen',
            )}
            style={ftsSectionBgStyle}
          />
        ) : null}
        {ftsCustomWidthVw != null ? (
          <div className="relative z-[1] w-full min-w-0 overflow-x-visible pb-16 pt-20 md:pb-24 md:pt-28 lg:pb-28 lg:pt-32">
            <div
              className="relative box-border min-w-0 w-full max-w-none overflow-x-visible px-0"
              {...(ftsCustomWidthVw != null && ftsCustomWidthMobileVw != null
                ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
                : {})}
              style={
                ftsCustomWidthMobileVw != null
                  ? sendaBreakoutOnlyBoxSizing()
                  : sendaCalcBreakoutInlineStyle(ftsCustomWidthVw)
              }
            >
              {ftsInnerBlock}
            </div>
          </div>
        ) : (
          ftsInnerBlock
        )}
      </section>
    </>
  )
}
