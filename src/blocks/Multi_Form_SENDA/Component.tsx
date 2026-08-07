'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import RichText from '@/components/RichText'
import { readLeadsFormularioAttributionFromStorage } from '@/components/LeadsFormularioAttribution/LeadsFormularioAttributionStorage'
import { getRecaptchaEnterpriseToken } from '@/utilities/recaptchaEnterpriseClient'
import { RECAPTCHA_ACTION_LEADS_FORMULARIO } from '@/utilities/recaptchaEnterpriseConstants'
import { CMSLink } from '@/components/Link'
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
import {
  sendaBlockButtonNativeClassName,
  sendaBlockButtonPrimitiveClassName,
} from '@/utilities/sendaBlockButtonClasses'
import { appendSendaInjectedButtonBorderRadius } from '@/utilities/sendaInjectedButtonRadius'
import { validateAndSanitizeURL } from '@/utilities/validateURL'
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
  headingMarginsMobile?: FontGroupHeadingMargins | null
  lineHeights?: FontGroupLineHeights | null
  lineHeightsMobile?: FontGroupLineHeights | null
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
  return expandFontGroupRichTextFields(o as Record<string, unknown>) as FontGroupData
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
  applyCustomWidth?: boolean | null
  customWidthPercent?: number | null
  customWidthPercentMobile?: number | null
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

/** Misma lógica que `CMSLink`: referencia interna o URL custom validada. */
function getSanitizedNavigationHref(link: LinkGroup | null | undefined): string | null {
  if (!link) return null
  if (link.type === 'reference' && link.reference?.value) {
    const h = getHref(link)
    return h === '#' ? null : h
  }
  if (link.type === 'custom' && link.url) {
    return (
      validateAndSanitizeURL(link.url, {
        allowRelative: true,
        allowAbsolute: true,
        logBlocked: process.env.NODE_ENV === 'development',
      }) || null
    )
  }
  return null
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

const richtextIntroStepEndBase =
  'pt-2 mb-8 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

const richtextIntroStepEndTailwind =
  '[&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold'

const richtextOptionTailwind = '[&_p]:m-0 [&_h1]:text-lg [&_h2]:text-base [&_h3]:text-base [&_h4]:text-sm'

export const MultiFormSendaBlock: React.FC<Props> = (props) => {
  const router = useRouter()
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
    applyCustomWidth,
    customWidthPercent,
    customWidthPercentMobile,
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
  /** Lead: se crea al pulsar «Continuar» en el último paso (antes de la pantalla final). */
  const [lastStepLeadBusy, setLastStepLeadBusy] = useState(false)
  const lastStepLeadLockRef = useRef(false)
  const lastStepLeadCreatedRef = useRef(false)

  /** En móvil, al cambiar de paso el viewport suele quedar abajo; alinear el bloque blanco arriba para ver la pregunta y las primeras opciones. */
  const mfWhiteCardScrollRef = useRef<HTMLDivElement>(null)
  const prevStepIndexRef = useRef(currentStepIndex)
  const prevFormStartedRef = useRef(formStarted)

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

  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) {
      prevStepIndexRef.current = currentStepIndex
      prevFormStartedRef.current = formStarted
      return
    }

    const enteredSteps = formStarted && !prevFormStartedRef.current
    const stepChanged =
      formStarted && prevFormStartedRef.current && prevStepIndexRef.current !== currentStepIndex

    if (enteredSteps || stepChanged) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mfWhiteCardScrollRef.current?.scrollIntoView({
            behavior: 'auto',
            block: 'start',
            inline: 'nearest',
          })
        })
      })
    }

    prevStepIndexRef.current = currentStepIndex
    prevFormStartedRef.current = formStarted
  }, [currentStepIndex, formStarted])

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
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${mfBtnLabels} { line-height: ${bodyLhDesk} !important; } }`,
        )
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${mfBtnLabels} { line-height: ${bodyLhMob} !important; } }`,
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
        `${sel} p, ${sel} h1, ${sel} h2, ${sel} h3, ${sel} h4, ${sel} h5, ${sel} h6, ${sel} span:not(strong):not(b):not(.mf-senda-btn-label), ${sel} a:not(.mf-senda-btn):not(.mf-senda-step-btn) { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(`${sel} strong, ${sel} b { color: ${boldTextColor} !important; }`)
    }

    const mfBtn = `${sel} .mf-senda-btn`
    const mfStepBtn = `${sel} .mf-senda-step-btn`
    appendSendaInjectedButtonBorderRadius(styles, mfBtn)
    appendSendaInjectedButtonBorderRadius(styles, mfStepBtn)

    const btnRules: string[] = []
    if (buttonBackgroundColor) btnRules.push(`background-color: ${buttonBackgroundColor} !important;`)
    if (btnRules.length > 0) {
      styles.push(`${mfBtn} { ${btnRules.join(' ')} }`)
    }
    if (buttonTextColor) {
      styles.push(
        `${mfBtn}, ${mfBtn} * { color: ${buttonTextColor} !important; }`,
      )
    }
    styles.push(
      `${sel} .mf-senda-step-btn, ${sel} .mf-senda-step-btn * { color: var(--mf-senda-step-btn-color, inherit) !important; }`,
    )
    const boldColorForHover = boldTextColor ?? '#000000'
    styles.push(
      `@media (min-width: 768px) { ${sel} .mf-senda-option-btn:hover .mf-senda-option-dot { box-shadow: inset 0 0 0 8px ${boldColorForHover} !important; } }`,
    )
    styles.push(
      `@media (max-width: 767px) { ${sel} .mf-senda-options-list { margin-left: -1.25rem !important; margin-right: -1.25rem !important; padding-left: 0.5rem !important; padding-right: 0.5rem !important; } }`,
    )
    styles.push(
      `@media (min-width: 768px) { ${sel} .mf-senda-options-list { margin-left: 0 !important; margin-right: 0 !important; padding-left: 2rem !important; padding-right: 2rem !important; } }`,
    )

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .mf-senda-richtext h1, ${sel} .mf-senda-richtext h2, ${sel} .mf-senda-richtext h3, ${sel} .mf-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .mf-senda-richtext h4 { font-weight: 900 !important; }`)
    }

    styles.push(
      `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) {
        ${sel} .mf-senda-intro-richtext,
        ${sel} .mf-senda-intro-richtext *,
        ${sel} .mf-senda-step-main-richtext,
        ${sel} .mf-senda-step-main-richtext * {
          text-align: left !important;
        }
      }`,
    )

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
  const isLastStep = stepCount > 0 && currentStepIndex === stepCount - 1

  useEffect(() => {
    const onLastStep = isLastStep
    if (!formStarted || !onLastStep) {
      setLastStepLeadBusy(false)
      lastStepLeadLockRef.current = false
      lastStepLeadCreatedRef.current = false
    }
  }, [formStarted, isLastStep])

  const submitLeadsFormularioLead = useCallback(async (): Promise<boolean> => {
    const attr = readLeadsFormularioAttributionFromStorage()
    const pagePath = typeof window !== 'undefined' ? window.location.pathname : ''
    try {
      const recaptchaToken = await getRecaptchaEnterpriseToken(RECAPTCHA_ACTION_LEADS_FORMULARIO)
      if (!recaptchaToken) return false
      const res = await fetch('/api/leads-formulario-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pagePath,
          recaptchaToken,
          ...attr,
        }),
      })
      return res.ok
    } catch {
      return false
    }
  }, [])

  const advanceAfterLastStepLead = useCallback(async () => {
    if (lastStepLeadLockRef.current || lastStepLeadCreatedRef.current) return
    lastStepLeadLockRef.current = true
    setLastStepLeadBusy(true)
    try {
      const ok = await submitLeadsFormularioLead()
      if (!ok) return
      lastStepLeadCreatedRef.current = true
      setCurrentStepIndex((i) => i + 1)
      setSelectedOptionInCurrentStep(null)
    } finally {
      lastStepLeadLockRef.current = false
      setLastStepLeadBusy(false)
    }
  }, [submitLeadsFormularioLead])

  const navigateAfterLastStepLead = useCallback(
    async (link: LinkGroup) => {
      if (lastStepLeadLockRef.current || lastStepLeadCreatedRef.current) return
      const href = getSanitizedNavigationHref(link)
      if (!href) return
      lastStepLeadLockRef.current = true
      setLastStepLeadBusy(true)
      try {
        const ok = await submitLeadsFormularioLead()
        if (!ok) return
        lastStepLeadCreatedRef.current = true
        const openNew = Boolean(link.newTab)
        if (openNew) {
          window.open(href, '_blank', 'noopener,noreferrer')
        } else if (href.startsWith('http://') || href.startsWith('https://')) {
          window.location.assign(href)
        } else {
          await router.push(href)
        }
      } finally {
        lastStepLeadLockRef.current = false
        setLastStepLeadBusy(false)
      }
    },
    [router, submitLeadsFormularioLead],
  )

  const mfCustomWidthVw =
    applyCustomWidth === true
      ? (() => {
          const p = customWidthPercent
          if (typeof p !== 'number' || Number.isNaN(p)) return 100
          const clamped = Math.min(100, Math.max(0, p))
          return clamped <= 0 ? 100 : clamped
        })()
      : null

  const mfCustomWidthMobileVw = sendaResolveOptionalMobileWidthVw(applyCustomWidth, customWidthPercentMobile)
  const mfBreakoutCss =
    mfCustomWidthVw != null && mfCustomWidthMobileVw != null
      ? buildSendaCalcBreakoutResponsiveCss(styleId, mfCustomWidthVw, mfCustomWidthMobileVw)
      : ''

  const mfSectionBgStyle: React.CSSProperties = {
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
  }

  const richtextMainClass = cn(
    'mf-senda-richtext',
    richtextIntroStepEndBase,
    mfCustomWidthVw != null && mfCustomWidthVw >= 100 ? 'lg:px-0' : 'lg:px-28',
    fontGroupTypographyActive && MF_FG_RICHTEXT,
    !fontGroupTypographyActive && richtextIntroStepEndTailwind,
  )

  const richtextOptionClass = cn(
    'min-w-0 flex-1 mf-senda-richtext',
    fontGroupTypographyActive && MF_FG_RICHTEXT,
    !fontGroupTypographyActive && richtextOptionTailwind,
  )

  const mfInnerBlock = (
    <div
      className={cn(
        mfCustomWidthVw != null ? 'mx-auto w-full max-w-none px-0' : 'container',
      )}
    >
      <div
        ref={mfWhiteCardScrollRef}
        className={cn(
          'mx-auto scroll-mt-4 rounded-2xl pt-10 pb-6 shadow-lg md:pt-12 md:pb-8 lg:pt-14 lg:pb-10',
          mfCustomWidthVw != null && mfCustomWidthVw >= 100
            ? 'w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-10'
            : 'max-w-2xl px-6 md:px-8 lg:px-10',
        )}
        style={{
          backgroundColor: (formBackgroundColor ?? '#ffffff') as React.CSSProperties['backgroundColor'],
        }}
      >
            {formStarted && stepCount > 0 && (
              <div className="w-full lg:w-1/3 lg:mx-auto pt-0 mb-8">
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
                  <div className="px-2 sm:px-3 md:px-4 lg:px-5">
                    <div className={cn(richtextMainClass, 'mf-senda-intro-richtext')}>
                      <RichText data={introRichText} enableGutter={false} enableProse={false} />
                    </div>
                  </div>
                )}
                <div className="mb-6 md:mb-8 lg:flex lg:justify-center">
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
                  <div className={cn(richtextMainClass, 'mf-senda-step-main-richtext')}>
                    <RichText data={currentStep.stepRichText} enableGutter={false} enableProse={false} />
                  </div>
                )}
                <div className="mf-senda-options-list flex flex-col gap-2 -mx-[1.375rem] px-1.5 md:mx-0 md:px-8">
                  {options.map((opt, optIndex) => {
                    const isSelected = selectedOptionInCurrentStep === optIndex
                    return (
                      <button
                        key={optIndex}
                        type="button"
                        onClick={() => setSelectedOptionInCurrentStep(optIndex)}
                        className="mf-senda-option-btn flex w-full items-center gap-3 text-left rounded-3xl py-3 md:py-4 pl-5 pr-4 md:pl-6 md:pr-8 font-medium transition-all md:hover:opacity-90 focus:outline-none"
                        style={{
                          ...fontStyle,
                          ...(optionsBackgroundColor != null && optionsBackgroundColor !== ''
                            ? { backgroundColor: optionsBackgroundColor as React.CSSProperties['backgroundColor'] }
                            : {}),
                        }}
                      >
                        <span
                          className="mf-senda-option-dot -ml-1 h-7 w-7 flex-shrink-0 rounded-full border-2 border-neutral-800 bg-transparent transition-[box-shadow] duration-200 md:-ml-1.5"
                          style={
                            isSelected && boldTextColor
                              ? { boxShadow: `inset 0 0 0 8px ${boldTextColor}` }
                              : isSelected
                                ? { boxShadow: 'inset 0 0 0 8px #000000' }
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
                  <div className="mt-10 mb-6 md:mb-8 lg:flex lg:justify-center">
                    {isLastStep ? (
                      <button
                        type="button"
                        disabled={selectedOptionInCurrentStep === null || lastStepLeadBusy}
                        aria-busy={lastStepLeadBusy}
                        onClick={() => void navigateAfterLastStepLead(currentStep.stepButtonLink!)}
                        className={cn(
                          'mf-senda-step-btn mf-senda-step-btn-link no-underline transition-all hover:opacity-90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60',
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
                          {lastStepLeadBusy
                            ? 'Enviando…'
                            : currentStep.stepButtonLink.label?.trim() ||
                              currentStep.stepButtonLabel?.trim() ||
                              'Continuar'}
                          {currentStep.stepButtonIconSVG?.trim() && !lastStepLeadBusy ? (
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
                    ) : (
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
                    )}
                  </div>
                ) : (
                  <div className="mt-10 mb-6 md:mb-8 lg:flex lg:justify-center">
                    <button
                      type="button"
                      disabled={
                        selectedOptionInCurrentStep === null || (isLastStep && lastStepLeadBusy)
                      }
                      aria-busy={isLastStep && lastStepLeadBusy}
                      onClick={() => {
                        if (isLastStep) {
                          void advanceAfterLastStepLead()
                          return
                        }
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
                        {isLastStep && lastStepLeadBusy
                          ? 'Enviando…'
                          : currentStep.stepButtonLabel?.trim() || 'Continuar'}
                        {currentStep.stepButtonIconSVG?.trim() && !(isLastStep && lastStepLeadBusy) ? (
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
  )

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      {mfBreakoutCss ? <style>{mfBreakoutCss}</style> : null}
      <section
        id={sanitizeAnchorId(anchorId, 'multi-form-senda')}
        data-mf-senda-font={styleId}
        className={cn(
          'relative bg-cover bg-center bg-no-repeat',
          mfCustomWidthVw == null ? 'w-full' : 'w-full min-w-0 max-w-none',
          mfCustomWidthVw == null &&
            'overflow-x-hidden px-6 pt-24 pb-16 md:px-8 md:pt-28 md:pb-20 lg:px-10 lg:pt-32 lg:pb-24',
          mfCustomWidthVw != null && 'overflow-x-visible px-0 py-0',
        )}
        style={mfCustomWidthVw == null ? mfSectionBgStyle : undefined}
      >
        {mfCustomWidthVw != null &&
        (Boolean(backgroundImageUrl) || (backgroundColor != null && backgroundColor !== '')) ? (
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 left-1/2 -z-0 max-w-none min-h-full -translate-x-1/2',
              mfCustomWidthVw >= 100 ? 'w-[100dvw] min-w-[100dvw]' : 'w-screen',
            )}
            style={mfSectionBgStyle}
          />
        ) : null}
        {mfCustomWidthVw != null ? (
          <div className="relative z-[1] w-full overflow-x-visible pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
            <div
              className="relative box-border min-w-0 w-full max-w-none overflow-x-visible px-0"
              {...(mfCustomWidthVw != null && mfCustomWidthMobileVw != null
                ? { [SENDA_CUSTOM_BREAKOUT_ATTR]: styleId }
                : {})}
              style={
                mfCustomWidthMobileVw != null
                  ? sendaBreakoutOnlyBoxSizing()
                  : sendaCalcBreakoutInlineStyle(mfCustomWidthVw)
              }
            >
              {mfInnerBlock}
            </div>
          </div>
        ) : (
          mfInnerBlock
        )}
      </section>
    </>
  )
}
