'use client'

import React, { useState } from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'
import {
  sendaBlockButtonNativeClassName,
  sendaBlockButtonPrimitiveClassName,
} from '@/utilities/sendaBlockButtonClasses'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import {
  appendFontGroupHeadingMarginRules,
  appendFontGroupLineHeightRules,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  trimFontGroupValue,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type FontFile = {
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
  lineHeights?: FontGroupLineHeights | null
}

function normalizeMultiFormFontGroup(raw: unknown): FontGroupData | null {
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

const MF_FG_RICHTEXT =
  'mf-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

type LinkGroup = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  label?: string | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: { slug?: string } | string | number
  } | null
}

type FormStep = {
  stepRichText?: DefaultTypedEditorState | null
  options?: Array<{ optionRichText?: DefaultTypedEditorState | null }> | null
  stepButtonBackgroundColor?: string | null
  stepButtonTextColor?: string | null
  stepButtonIconSVG?: string | null
  stepButtonLabel?: string | null
  convertStepButtonToLink?: boolean | null
  stepButtonLink?: LinkGroup | null
}

type BackgroundImageGroup = {
  useMedia?: boolean | null
  mediaImage?: { url?: string | null } | number | null
  src?: string | null
}

type Props = {
  anchorId?: string | null
  introRichText?: DefaultTypedEditorState | null
  startButtonLabel?: string | null
  startButtonIconSVG?: string | null
  steps?: FormStep[] | null
  endRichText?: DefaultTypedEditorState | null
  endButtonLink?: LinkGroup | null
  endButtonLabel?: string | null
  endButtonIconSVG?: string | null
  optionsBackgroundColor?: string | null
  backgroundColor?: string | null
  backgroundImage?: BackgroundImageGroup | null
  formBackgroundColor?: string | null
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

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

function getHref(link: LinkGroup | null | undefined): string {
  if (!link) return '#'
  if (link.type === 'custom' && link.url) return link.url
  if (link.type === 'reference' && link.reference?.value) {
    const val = link.reference.value
    const slug = typeof val === 'object' && val !== null && 'slug' in val ? (val as { slug: string }).slug : null
    if (slug) {
      const base = link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''
      return `${base}/${slug}`
    }
  }
  return '#'
}

function hasRichTextContent(data: DefaultTypedEditorState | null | undefined): boolean {
  if (data == null || typeof data !== 'object') return false
  const root = (data as { root?: { children?: unknown[] } }).root
  return Array.isArray(root?.children) && root.children.length > 0
}

function hasValidEndLink(link: LinkGroup | null | undefined): boolean {
  return !!link && getHref(link) !== '#'
}

function hasValidStepButtonLink(link: LinkGroup | null | undefined): boolean {
  return !!link && getHref(link) !== '#'
}

/** URL de la imagen de fondo (misma lógica que Layout_SENDA: mediaImage.url o src directos). */
function getBackgroundImageUrl(bg: BackgroundImageGroup | null | undefined): string {
  if (!bg) return ''
  if (bg.useMedia && bg.mediaImage && typeof bg.mediaImage === 'object') {
    return bg.mediaImage.url || ''
  }
  return bg.src || ''
}

const richtextIntroStepEnd = cn(
  'pt-2 mb-8 lg:px-28 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6',
)

const richtextIntroStepEndTailwind =
  '[&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold'

const richtextOptionTailwind = '[&_p]:m-0 [&_h1]:text-lg [&_h2]:text-base [&_h3]:text-base [&_h4]:text-sm'

export const MultiFormSendaBlock: React.FC<Props> = (props) => {
  const {
    anchorId,
    introRichText,
    startButtonLabel = 'Comenzar',
    startButtonIconSVG,
    steps = [],
    endRichText,
    endButtonLink,
    endButtonLabel,
    endButtonIconSVG,
    optionsBackgroundColor,
    backgroundColor,
    backgroundImage,
    formBackgroundColor = '#ffffff',
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

  const [formStarted, setFormStarted] = useState(false)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [selectedOptionInCurrentStep, setSelectedOptionInCurrentStep] = useState<number | null>(null)

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `multi-form-senda-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeMultiFormFontGroup(fontGroup)
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
    const sel = `[data-mf-senda-font="${styleId}"]`
    const mainRichtext = `${sel} .mf-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`
    const mfBtnLabels = `${sel} .mf-senda-btn .mf-senda-btn-label, ${sel} .mf-senda-step-btn .mf-senda-btn-label`

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
        styles.push(`${mfBtnLabels} { font-size: ${bodyBtnDesk} !important; }`)
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
          mobRules.push(`${mfBtnLabels} { font-size: ${bodyMobBtn} !important; }`)
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
        styles.push(`${mfBtnLabels} { line-height: ${bodyLhBtn} !important; }`)
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
        `${sel} p, ${sel} h1, ${sel} h2, ${sel} h3, ${sel} h4, ${sel} h5, ${sel} h6, ${sel} span:not(strong):not(b):not(.mf-senda-btn-label), ${sel} a:not(.mf-senda-btn):not(.mf-senda-step-btn) { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(`${sel} strong, ${sel} b { color: ${boldTextColor} !important; }`)
    }

    const btnRules: string[] = ['border-radius: 1rem !important;']
    if (buttonBackgroundColor) btnRules.push(`background-color: ${buttonBackgroundColor} !important;`)
    styles.push(`${sel} .mf-senda-btn { ${btnRules.join(' ')} }`)
    if (buttonTextColor) {
      styles.push(
        `${sel} .mf-senda-btn, ${sel} .mf-senda-btn * { color: ${buttonTextColor} !important; }`,
      )
    }
    styles.push(`${sel} .mf-senda-step-btn { border-radius: 1rem !important; }`)
    styles.push(
      `${sel} .mf-senda-step-btn, ${sel} .mf-senda-step-btn * { color: var(--mf-senda-step-btn-color, inherit) !important; }`,
    )
    const boldColorForHover = boldTextColor ?? '#000000'
    styles.push(
      `${sel} .mf-senda-option-btn:hover .mf-senda-option-dot { box-shadow: inset 0 0 0 6px ${boldColorForHover} !important; }`,
    )
    styles.push(
      `@media (max-width: 767px) { ${sel} .mf-senda-options-list { margin-left: -1.5rem !important; margin-right: -1.5rem !important; padding-left: 0.25rem !important; padding-right: 0.25rem !important; } }`,
    )
    styles.push(
      `@media (min-width: 768px) { ${sel} .mf-senda-options-list { margin-left: 0 !important; margin-right: 0 !important; padding-left: 3rem !important; padding-right: 3rem !important; } }`,
    )

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .mf-senda-richtext h1, ${sel} .mf-senda-richtext h2, ${sel} .mf-senda-richtext h3, ${sel} .mf-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .mf-senda-richtext h4 { font-weight: 900 !important; }`)
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined
  const stepsList = steps ?? []
  const stepCount = stepsList.length
  const isOnSteps = formStarted && currentStepIndex < stepCount
  const isFinished = formStarted && currentStepIndex >= stepCount
  const hasEndScreen = hasRichTextContent(endRichText) || hasValidEndLink(endButtonLink)
  const showEndScreen = isFinished && hasEndScreen
  const currentStep = isOnSteps && stepsList[currentStepIndex] ? stepsList[currentStepIndex] : null
  const options = currentStep?.options ?? []
  const backgroundImageUrl = getBackgroundImageUrl(backgroundImage)

  const richtextMainClass = cn(
    'mf-senda-richtext',
    richtextIntroStepEnd,
    fontGroupTypographyActive && MF_FG_RICHTEXT,
    !fontGroupTypographyActive && richtextIntroStepEndTailwind,
  )

  const richtextOptionClass = cn(
    'min-w-0 flex-1 mf-senda-richtext',
    fontGroupTypographyActive && MF_FG_RICHTEXT,
    !fontGroupTypographyActive && richtextOptionTailwind,
  )

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'multi-form-senda')}
        data-mf-senda-font={styleId}
        className="relative w-full pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 px-6 md:px-8 lg:px-10 bg-cover bg-center bg-no-repeat"
        style={{
          ...(backgroundColor != null && backgroundColor !== ''
            ? { backgroundColor: backgroundColor as React.CSSProperties['backgroundColor'] }
            : {}),
          ...(backgroundImageUrl
            ? {
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom',
                backgroundRepeat: 'no-repeat',
              }
            : {}),
        }}
      >
        <div className="container">
          <div
            className="mx-auto max-w-2xl rounded-2xl pt-10 px-6 pb-6 md:pt-12 md:px-8 md:pb-8 lg:pt-14 lg:px-10 lg:pb-10 shadow-lg"
            style={{
              backgroundColor: (formBackgroundColor ?? '#ffffff') as React.CSSProperties['backgroundColor'],
            }}
          >
            {formStarted && stepCount > 0 && (
              <div className="w-full lg:w-1/3 lg:mx-auto pt-6 mb-8">
                <div className="flex items-center gap-1 lg:gap-2">
                  {stepsList.map((_, index) => {
                    const isActive = formStarted && index === currentStepIndex
                    const activeColor = (boldTextColor as React.CSSProperties['backgroundColor']) ?? '#000000'
                    const inactiveColor = 'rgba(218, 212, 195)'
                    return (
                      <div
                        key={index}
                        className="h-1 flex-1 min-w-0 rounded-full transition-all duration-300 lg:h-1.5"
                        style={{
                          backgroundColor: isActive ? activeColor : inactiveColor,
                          opacity: isActive ? 1 : 1,
                        }}
                        aria-hidden
                      />
                    )
                  })}
                </div>
              </div>
            )}

            {!formStarted && (
              <div style={fontStyle} className="pt-6">
                {introRichText && (
                  <div className={richtextMainClass}>
                    <RichText data={introRichText} enableGutter={false} enableProse={false} />
                  </div>
                )}
                <div className="lg:flex lg:justify-center">
                  <button
                    type="button"
                    onClick={() => setFormStarted(true)}
                    className={cn(
                      'mf-senda-btn transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400',
                      sendaBlockButtonNativeClassName,
                    )}
                    style={fontStyle}
                  >
                    <span className="mf-senda-btn-label inline-flex items-center gap-2">
                      {startButtonLabel}
                      {startButtonIconSVG?.trim() && (
                        <span
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          dangerouslySetInnerHTML={{
                            __html: sanitizeSVG(startButtonIconSVG).replace(/\sheight=["'][^"']*["']/gi, ''),
                          }}
                          aria-hidden
                        />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {isOnSteps && currentStep && (
              <div style={fontStyle} className="pt-6">
                {currentStep.stepRichText && (
                  <div className={richtextMainClass}>
                    <RichText data={currentStep.stepRichText} enableGutter={false} enableProse={false} />
                  </div>
                )}
                <div className="mf-senda-options-list flex flex-col gap-2 -mx-6 px-1 md:mx-0 md:px-12">
                  {options.map((opt, optIndex) => {
                    const isSelected = selectedOptionInCurrentStep === optIndex
                    return (
                      <button
                        key={optIndex}
                        type="button"
                        onClick={() => setSelectedOptionInCurrentStep(optIndex)}
                        className="mf-senda-option-btn flex w-full items-start gap-3 text-left rounded-xl py-3 md:py-4 pl-5 pr-4 md:pl-8 md:pr-8 font-medium transition-all hover:opacity-90 focus:outline-none"
                        style={{
                          ...fontStyle,
                          ...(optionsBackgroundColor != null && optionsBackgroundColor !== ''
                            ? { backgroundColor: optionsBackgroundColor as React.CSSProperties['backgroundColor'] }
                            : {}),
                        }}
                      >
                        <span
                          className="mf-senda-option-dot mt-1.5 h-5 w-5 flex-shrink-0 rounded-full border-2 border-neutral-800 bg-transparent transition-[box-shadow] duration-200"
                          style={
                            isSelected && boldTextColor
                              ? { boxShadow: `inset 0 0 0 6px ${boldTextColor}` }
                              : isSelected
                                ? { boxShadow: 'inset 0 0 0 6px #000000' }
                                : undefined
                          }
                          aria-hidden
                        />
                        {opt.optionRichText && (
                          <span className={richtextOptionClass}>
                            <RichText data={opt.optionRichText} enableGutter={false} enableProse={false} />
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                {currentStep.convertStepButtonToLink &&
                hasValidStepButtonLink(currentStep.stepButtonLink) &&
                currentStep.stepButtonLink ? (
                  <div className="mt-10 lg:flex lg:justify-center">
                    <CMSLink
                      type={currentStep.stepButtonLink.type ?? undefined}
                      reference={
                        currentStep.stepButtonLink.reference?.relationTo &&
                        currentStep.stepButtonLink.reference?.value != null
                          ? {
                              relationTo: currentStep.stepButtonLink.reference.relationTo,
                              value: currentStep.stepButtonLink.reference.value as React.ComponentProps<
                                typeof CMSLink
                              >['reference'] extends { value: infer V } ? V : never,
                            }
                          : undefined
                      }
                      url={currentStep.stepButtonLink.url ?? undefined}
                      newTab={currentStep.stepButtonLink.newTab ?? undefined}
                      appearance="inline"
                      className={cn(
                        'mf-senda-step-btn mf-senda-step-btn-link no-underline transition-all hover:opacity-90',
                        sendaBlockButtonNativeClassName,
                      )}
                      style={{
                        ...fontStyle,
                        backgroundColor: (selectedOptionInCurrentStep === null
                          ? (currentStep.stepButtonBackgroundColor ?? buttonBackgroundColor)
                          : buttonBackgroundColor) as React.CSSProperties['backgroundColor'],
                        ['--mf-senda-step-btn-color' as string]:
                          selectedOptionInCurrentStep === null
                            ? (currentStep.stepButtonTextColor ?? buttonTextColor)
                            : buttonTextColor,
                      }}
                    >
                      <span className="mf-senda-btn-label inline-flex items-center gap-2">
                        {currentStep.stepButtonLink.label?.trim() ||
                          currentStep.stepButtonLabel?.trim() ||
                          'Continuar'}
                        {currentStep.stepButtonIconSVG?.trim() ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(currentStep.stepButtonIconSVG).replace(
                                /\sheight=["'][^"']*["']/gi,
                                '',
                              ),
                            }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </CMSLink>
                  </div>
                ) : (
                  <div className="mt-10 lg:flex lg:justify-center">
                    <button
                      type="button"
                      disabled={selectedOptionInCurrentStep === null}
                      onClick={() => {
                        setCurrentStepIndex((i) => i + 1)
                        setSelectedOptionInCurrentStep(null)
                      }}
                      className={cn(
                        'mf-senda-step-btn transition-all hover:opacity-90 focus:outline-none disabled:cursor-not-allowed',
                        sendaBlockButtonNativeClassName,
                      )}
                      style={{
                        ...fontStyle,
                        backgroundColor: (selectedOptionInCurrentStep === null
                          ? (currentStep.stepButtonBackgroundColor ?? buttonBackgroundColor)
                          : buttonBackgroundColor) as React.CSSProperties['backgroundColor'],
                        ['--mf-senda-step-btn-color' as string]:
                          selectedOptionInCurrentStep === null
                            ? (currentStep.stepButtonTextColor ?? buttonTextColor)
                            : buttonTextColor,
                      }}
                    >
                      <span className="mf-senda-btn-label inline-flex items-center gap-2">
                        {currentStep.stepButtonLabel?.trim() || 'Continuar'}
                        {currentStep.stepButtonIconSVG?.trim() ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(currentStep.stepButtonIconSVG).replace(
                                /\sheight=["'][^"']*["']/gi,
                                '',
                              ),
                            }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {showEndScreen && (
              <div style={fontStyle} className="pt-6">
                {endRichText && hasRichTextContent(endRichText) && (
                  <div className={richtextMainClass}>
                    <RichText data={endRichText} enableGutter={false} enableProse={false} />
                  </div>
                )}
                {hasValidEndLink(endButtonLink) && endButtonLink && (
                  <div className="lg:flex lg:justify-center">
                    <CMSLink
                      type={endButtonLink.type ?? undefined}
                      reference={
                        endButtonLink.reference?.relationTo && endButtonLink.reference?.value != null
                          ? {
                              relationTo: endButtonLink.reference.relationTo,
                              value: endButtonLink.reference.value as React.ComponentProps<
                                typeof CMSLink
                              >['reference'] extends { value: infer V } ? V : never,
                            }
                          : undefined
                      }
                      url={endButtonLink.url ?? undefined}
                      newTab={endButtonLink.newTab ?? undefined}
                      appearance="default"
                      size="clear"
                      className={cn(
                        'mf-senda-btn transition-all hover:opacity-90',
                        sendaBlockButtonPrimitiveClassName,
                      )}
                      style={fontStyle}
                    >
                      <span className="mf-senda-btn-label inline-flex items-center gap-2">
                        {endButtonLabel?.trim() || endButtonLink.label || 'Continuar'}
                        {endButtonIconSVG?.trim() && (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(endButtonIconSVG).replace(/\sheight=["'][^"']*["']/gi, ''),
                            }}
                            aria-hidden
                          />
                        )}
                      </span>
                    </CMSLink>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
