'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Checkbox } from '@/components/ui/checkbox'
import type { Page, Post } from '@/payload-types'
import { expandFontGroupRichTextFields } from '@/utilities/expandFontGroupRichTextFields'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  mergeFontGroupLineHeightsWithFallback,
  trimFontGroupValue,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'

type MediaLike = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

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

type SectionTypography = {
  textColor?: string | null
  boldTextColor?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
}

type BloqueIMCLink = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: Page | Post | number | string
  } | null
  label?: string | null
}

type ButtonItem = {
  link?: BloqueIMCLink | null
  iconSVG?: string | null
}

type CategoryRow = {
  id?: string | null
  icon?: IconGroup | null
  categoryLabel?: string | null
  imcLabel?: string | null
  imcMin?: number | null
  imcMax?: number | null
  isEligible?: boolean | null
  showTag?: boolean | null
  tagLabel?: string | null
  tagIconSVG?: string | null
}

export type CalculadoraIMCDropBlockProps = {
  blockName?: string
  blockType?: 'calculadoraIMCDrop'
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerStyle?: SectionTypography | null
  categoryHeaderLabel?: string | null
  imcHeaderLabel?: string | null
  categoryHeaderIcon?: IconGroup | null
  imcHeaderIcon?: IconGroup | null
  categories?: CategoryRow[] | null
  image?: {
    mediaImage?: MediaLike | null
    alt?: string | null
    circleColor?: string | null
  } | null
  openButton?: {
    label?: string | null
    iconSVG?: string | null
    backgroundColor?: string | null
    textColor?: string | null
  } | null
  footerContent?: DefaultTypedEditorState | null
  footerStyle?: SectionTypography | null
  modalTitle?: string | null
  heightLabel?: string | null
  weightLabel?: string | null
  heightPlaceholder?: string | null
  weightPlaceholder?: string | null
  calculateButtonText?: string | null
  calculateButtonIconSVG?: string | null
  recalculateButtonText?: string | null
  calculateButtonColor?: string | null
  calculateButtonTextColor?: string | null
  modalCardBackgroundColor?: string | null
  enableEligibleContactForm?: boolean | null
  eligibleContactForm?: {
    title?: DefaultTypedEditorState | null
    description?: DefaultTypedEditorState | null
    namePlaceholder?: string | null
    phonePlaceholder?: string | null
    emailPlaceholder?: string | null
    nameIcon?: IconGroup | null
    phoneIcon?: IconGroup | null
    emailIcon?: IconGroup | null
    privacyContent?: DefaultTypedEditorState | null
    privacyRequired?: boolean | null
    continueButtonText?: DefaultTypedEditorState | null
    continueButtonColor?: string | null
    continueButtonTextColor?: string | null
  } | null
  eligibleContent?: DefaultTypedEditorState | null
  eligibleResult?: { buttons?: ButtonItem[] | null } | null
  eligibleButtonColor?: string | null
  eligibleButtonTextColor?: string | null
  notEligibleContent?: DefaultTypedEditorState | null
  notEligibleResult?: { buttons?: ButtonItem[] | null } | null
  notEligibleButtonColor?: string | null
  notEligibleButtonTextColor?: string | null
  backgroundColor?: string | null
  tableHeaderBackgroundColor?: string | null
  tableCardBackgroundColor?: string | null
  tagBackgroundColor?: string | null
  tagTextColor?: string | null
  accentColor?: string | null
}

type ModalStep = 'calc' | 'contact' | 'result'

const ACCENT = '#C2005F'
const NAVY = '#0B1F3A'
const BODY_GRAY = '#4A5568'
const DEFAULT_CHECK_SVG =
  '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.2L6.4 11.1L12.5 4.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const DROP_FG_RICHTEXT =
  'imc-drop-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'calculadora-imc-drop'
}

function sanitizeCssColor(value: string | null | undefined, fallback = ''): string {
  if (value == null || typeof value !== 'string') return fallback
  const trimmed = value.trim()
  if (!trimmed) return fallback
  const safe = trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '')
  return safe || fallback
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string } }
  }
  const url = m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.url || ''
  return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
}

function getIconAlt(icon?: IconGroup | null): string {
  if (icon?.mediaImage && typeof icon.mediaImage === 'object') {
    return icon.mediaImage.alt || icon.alt || 'Icono'
  }
  return icon?.alt || 'Icono'
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

function resolveSectionFontFamily(style?: SectionTypography | null): string | undefined {
  if (!style) return undefined
  if (style.useFontGroup && style.fontGroup && typeof style.fontGroup === 'object') {
    const fg = normalizeFontGroup(style.fontGroup)
    if (fg?.fontFamilyName?.trim()) {
      return `"${fg.fontFamilyName.replace(/"/g, '\\"')}"`
    }
  }
  if (style.useCustomFont) {
    const file =
      style.customFontFile && typeof style.customFontFile === 'object' ? style.customFontFile : null
    const name =
      style.customFontName?.trim() ||
      file?.name?.trim() ||
      (file?.filename ? file.filename.replace(/\.[^.]+$/, '') : undefined)
    if (name) return `"${name.replace(/"/g, '\\"')}"`
  }
  if (style.fontFamily && style.fontFamily !== 'default') return style.fontFamily
  return undefined
}

function googleFontForSection(style?: SectionTypography | null): string | undefined {
  if (!style || style.useFontGroup) return undefined
  return resolveSectionFontFamily(style)
}

function buildSectionFontCss(
  rootSel: string,
  scopeClass: string,
  style: SectionTypography | null | undefined,
  opts?: { fallbackTextColor?: string },
): { css: string; fontGroupActive: boolean } {
  if (!style) {
    const fallback = opts?.fallbackTextColor
    return {
      css: fallback ? `${rootSel} .${scopeClass} { color: ${fallback}; }` : '',
      fontGroupActive: false,
    }
  }

  const styles: string[] = []
  const scope = `${rootSel} .${scopeClass}`
  const mainRichtext = `${scope}.imc-drop-richtext, ${scope} .imc-drop-richtext, ${scope}`
  const planRichtext = mainRichtext
  const payloadRichtext = `${scope} .payload-richtext`

  const fontGroupObj =
    style.useFontGroup && style.fontGroup && typeof style.fontGroup === 'object'
      ? normalizeFontGroup(style.fontGroup)
      : null
  const fontGroupActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    style.customFontFile && typeof style.customFontFile === 'object' ? style.customFontFile : null
  const customFontFamilyName =
    style.customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename
      ? customFontFileObj.filename.replace(/\.[^.]+$/, '')
      : undefined)
  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  if (fontGroupActive && fontGroupObj) {
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
      `${scope}, ${scope} *, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
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
    }

    const typoMob = fontGroupObj.typographyMobile
    if (typoMob) {
      const mobRules: string[] = []
      const t = (v: string | null | undefined) => (typeof v === 'string' ? v.trim() : '') || ''
      if (t(typoMob.h1))
        mobRules.push(
          `${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${t(typoMob.h1)} !important; }`,
        )
      if (t(typoMob.h2))
        mobRules.push(
          `${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${t(typoMob.h2)} !important; }`,
        )
      if (t(typoMob.h3))
        mobRules.push(
          `${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${t(typoMob.h3)} !important; }`,
        )
      if (t(typoMob.h4))
        mobRules.push(
          `${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${t(typoMob.h4)} !important; }`,
        )
      if (t(typoMob.h5))
        mobRules.push(
          `${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${t(typoMob.h5)} !important; }`,
        )
      if (t(typoMob.h6))
        mobRules.push(
          `${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${t(typoMob.h6)} !important; }`,
        )
      appendTypographyBodyListSizeRules(typoMob, mainRichtext, planRichtext, payloadRichtext, (rule) =>
        mobRules.push(rule),
      )
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
    if (bodyLhDesk && mergedLh?.body) {
      /* keep body line-height applied via helper above */
    }
  } else if (style.useCustomFont && isValidFontFile && customFontFamilyName && fontFileUrl) {
    const family = customFontFamilyName.replace(/"/g, '\\"')
    const formatMatch = fontFileNameOrUrl.match(/\.(woff2?|ttf|otf)(\?.*)?$/i)
    const format = formatMatch
      ? formatMatch[1].toLowerCase() === 'woff2'
        ? 'woff2'
        : formatMatch[1].toLowerCase() === 'woff'
          ? 'woff'
          : formatMatch[1].toLowerCase() === 'ttf'
            ? 'truetype'
            : 'opentype'
      : 'woff2'
    styles.push(`
      @font-face {
        font-family: "${family}";
        src: url("${fontFileUrl}") format("${format}");
        font-display: swap;
      }
    `)
    styles.push(
      `${scope}, ${scope} *, ${payloadRichtext}, ${payloadRichtext} * { font-family: "${family}", sans-serif !important; }`,
    )
  } else {
    const family = resolveSectionFontFamily(style)
    if (family) {
      styles.push(
        `${scope}, ${scope} *, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${family} !important; }`,
      )
    }
  }

  const textColor = sanitizeCssColor(style.textColor) || opts?.fallbackTextColor || ''
  const boldColor = sanitizeCssColor(style.boldTextColor)
  if (textColor) {
    styles.push(`${scope}, ${payloadRichtext} { color: ${textColor}; }`)
  }
  if (boldColor) {
    styles.push(
      `${scope} strong, ${scope} b, ${payloadRichtext} strong, ${payloadRichtext} b { color: ${boldColor} !important; }`,
    )
  }

  return { css: styles.join('\n'), fontGroupActive }
}

/** Sustituye `{bmi}` en nodos de texto del Lexical editor state. */
function replaceBmiPlaceholder(
  data: DefaultTypedEditorState | null | undefined,
  bmiFormatted: string,
): DefaultTypedEditorState | null {
  if (!data) return null
  const walk = (node: unknown): unknown => {
    if (!node || typeof node !== 'object') return node
    if (Array.isArray(node)) return node.map(walk)
    const n = node as Record<string, unknown>
    const next: Record<string, unknown> = { ...n }
    if (typeof n.text === 'string' && n.text.includes('{bmi}')) {
      next.text = n.text.split('{bmi}').join(bmiFormatted)
    }
    if (Array.isArray(n.children)) {
      next.children = n.children.map(walk)
    }
    return next
  }
  return walk(data) as DefaultTypedEditorState
}

function matchCategory(bmi: number, categories: CategoryRow[] | null | undefined): CategoryRow | null {
  if (!categories?.length) return null
  for (const row of categories) {
    const min = typeof row.imcMin === 'number' ? row.imcMin : null
    if (min == null) continue
    const max = typeof row.imcMax === 'number' ? row.imcMax : null
    const geMin = bmi >= min
    const ltMax = max == null ? true : bmi < max
    if (geMin && ltMax) return row
  }
  return null
}

function IconMedia({
  icon,
  className,
  imgClassName,
}: {
  icon?: IconGroup | null
  className?: string
  imgClassName?: string
}) {
  if (!icon) return null

  const useMedia = icon.useMedia !== false && icon.mediaImage
  const src = useMedia ? getMediaUrlSafe(icon.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <img src={src} alt={getIconAlt(icon)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  if (icon.useMedia === true) return null

  const svg = icon.iconSVG && String(icon.iconSVG).trim() ? sanitizeSVG(icon.iconSVG) : ''
  if (!svg) return null
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden
    />
  )
}

function ResultCTAButtons({
  buttons,
  backgroundColor,
  textColor,
}: {
  buttons?: ButtonItem[] | null
  backgroundColor: string
  textColor: string
}) {
  if (!buttons?.length) return null
  return (
    <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:items-center">
      {buttons.map((buttonItem, index) => {
        const iconSvg = buttonItem.iconSVG?.trim() ? sanitizeSVG(buttonItem.iconSVG) : ''
        const linkProps = buttonItem.link as React.ComponentProps<typeof CMSLink>
        const isSecondary = index > 0
        return (
          <CMSLink
            key={index}
            {...linkProps}
            label={undefined}
            appearance="inline"
            className={cn(
              'inline-flex w-full items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[220px]',
              isSecondary && 'border-2 bg-transparent',
            )}
            style={
              isSecondary
                ? { borderColor: backgroundColor, color: backgroundColor, backgroundColor: 'transparent' }
                : { backgroundColor, color: textColor }
            }
          >
            <span className="inline-flex flex-row items-center justify-center gap-2" dir="ltr">
              <span className="min-w-0">{linkProps.label?.trim() || 'Continuar'}</span>
              {iconSvg ? (
                <span
                  className="inline-flex h-5 w-5 shrink-0 [&_svg]:h-full [&_svg]:w-full"
                  aria-hidden
                  dangerouslySetInnerHTML={{ __html: iconSvg }}
                />
              ) : null}
            </span>
          </CMSLink>
        )
      })}
    </div>
  )
}

export const CalculadoraIMCDropBlock: React.FC<CalculadoraIMCDropBlockProps> = (props) => {
  const {
    anchorId,
    headerContent,
    headerStyle,
    categoryHeaderLabel = 'Categoría',
    imcHeaderLabel = 'IMC',
    categoryHeaderIcon,
    imcHeaderIcon,
    categories,
    image,
    openButton,
    footerContent,
    footerStyle,
    modalTitle = 'Calcula tu IMC',
    heightLabel = 'Altura (cm)',
    weightLabel = 'Peso (kg)',
    heightPlaceholder = 'ej: 165',
    weightPlaceholder = 'ej: 92',
    calculateButtonText = 'Calcular',
    calculateButtonIconSVG,
    recalculateButtonText = 'Volver a calcular',
    calculateButtonColor,
    calculateButtonTextColor,
    modalCardBackgroundColor,
    enableEligibleContactForm,
    eligibleContactForm,
    eligibleContent,
    eligibleResult,
    eligibleButtonColor,
    eligibleButtonTextColor,
    notEligibleContent,
    notEligibleResult,
    notEligibleButtonColor,
    notEligibleButtonTextColor,
    backgroundColor,
    tableHeaderBackgroundColor,
    tableCardBackgroundColor,
    tagBackgroundColor,
    tagTextColor,
    accentColor,
  } = props

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<ModalStep>('calc')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [matchedCategory, setMatchedCategory] = useState<CategoryRow | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)
  const [contactError, setContactError] = useState<string | null>(null)

  const dialogRef = useRef<HTMLDivElement>(null)
  const openButtonRef = useRef<HTMLButtonElement>(null)
  const uniqueId = React.useId().replace(/:/g, '-')
  const sectionId = sanitizeAnchorId(anchorId)
  const rootSel = `[data-imc-drop-font="${uniqueId}"]`

  const accent = sanitizeCssColor(accentColor, ACCENT)
  const bg = sanitizeCssColor(backgroundColor, '#FFFFFF')
  const tableHeaderBg = sanitizeCssColor(tableHeaderBackgroundColor, '#FDF2F7')
  const tableCardBg = sanitizeCssColor(tableCardBackgroundColor, '#FFFFFF')
  const tagBg = sanitizeCssColor(tagBackgroundColor, '#E7F6EA')
  const tagFg = sanitizeCssColor(tagTextColor, '#2F8F46')
  const circleColor = sanitizeCssColor(image?.circleColor, '#F3D4E4')
  const openBtnBg = sanitizeCssColor(openButton?.backgroundColor, accent)
  const openBtnFg = sanitizeCssColor(openButton?.textColor, '#FFFFFF')
  const calcBtnBg = sanitizeCssColor(calculateButtonColor, accent)
  const calcBtnFg = sanitizeCssColor(calculateButtonTextColor, '#FFFFFF')
  const modalBg = sanitizeCssColor(modalCardBackgroundColor, '#FFFFFF')
  const eligBtnBg = sanitizeCssColor(eligibleButtonColor, accent)
  const eligBtnFg = sanitizeCssColor(eligibleButtonTextColor, '#FFFFFF')
  const notEligBtnBg = sanitizeCssColor(notEligibleButtonColor, accent)
  const notEligBtnFg = sanitizeCssColor(notEligibleButtonTextColor, '#FFFFFF')
  const contactBtnBg = sanitizeCssColor(eligibleContactForm?.continueButtonColor, accent)
  const contactBtnFg = sanitizeCssColor(eligibleContactForm?.continueButtonTextColor, '#FFFFFF')
  const privacyRequired = eligibleContactForm?.privacyRequired !== false
  const useContactFlow = Boolean(enableEligibleContactForm)

  useGoogleFont(googleFontForSection(headerStyle))
  useGoogleFont(googleFontForSection(footerStyle))

  const headerCss = buildSectionFontCss(rootSel, 'imc-drop-header', headerStyle, {
    fallbackTextColor: NAVY,
  })
  const footerCss = buildSectionFontCss(rootSel, 'imc-drop-footer', footerStyle, {
    fallbackTextColor: '#6B7280',
  })

  const imageSrc = getMediaUrlSafe(image?.mediaImage)
  const imageAlt =
    image?.alt ||
    (image?.mediaImage && typeof image.mediaImage === 'object'
      ? image.mediaImage.alt || 'Imagen'
      : 'Imagen')
  const openIconSvg = openButton?.iconSVG?.trim() ? sanitizeSVG(openButton.iconSVG) : ''
  const calcIconSvg = calculateButtonIconSVG?.trim() ? sanitizeSVG(calculateButtonIconSVG) : ''

  const bmiFormatted = bmi != null ? bmi.toFixed(1).replace('.', ',') : ''
  const isEligible = Boolean(matchedCategory?.isEligible)
  const resultContent = useMemo(() => {
    if (modalStep !== 'result' || bmi == null) return null
    const source = isEligible ? eligibleContent : notEligibleContent
    return replaceBmiPlaceholder(source, bmiFormatted)
  }, [modalStep, bmi, isEligible, eligibleContent, notEligibleContent, bmiFormatted])

  const resetContactForm = useCallback(() => {
    setContactName('')
    setContactPhone('')
    setContactEmail('')
    setAcceptPrivacy(false)
    setContactError(null)
    setIsSubmittingContact(false)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setModalStep('calc')
    setBmi(null)
    setMatchedCategory(null)
    setFormError(null)
    setHeight('')
    setWeight('')
    resetContactForm()
    requestAnimationFrame(() => openButtonRef.current?.focus())
  }, [resetContactForm])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
    setModalStep('calc')
    setBmi(null)
    setMatchedCategory(null)
    setFormError(null)
    resetContactForm()
  }, [resetContactForm])

  const calculateBMI = useCallback(() => {
    const heightNum = parseFloat(height)
    const weightNum = parseFloat(weight)
    if (!(heightNum > 0 && weightNum > 0)) {
      setFormError('Introduce valores válidos para la altura y el peso.')
      return
    }
    const heightInMeters = heightNum / 100
    const calculatedBMI = weightNum / (heightInMeters * heightInMeters)
    const match = matchCategory(calculatedBMI, categories)
    const eligible = Boolean(match?.isEligible)
    setBmi(calculatedBMI)
    setMatchedCategory(match)
    setFormError(null)
    if (eligible && useContactFlow) {
      setModalStep('contact')
    } else {
      setModalStep('result')
    }
  }, [height, weight, categories, useContactFlow])

  const handleContactSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setContactError(null)

      if (privacyRequired && !acceptPrivacy) {
        setContactError('Debes aceptar el tratamiento de datos para continuar.')
        return
      }

      setIsSubmittingContact(true)
      try {
        const response = await fetch('/api/form-custom-2-submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            submissionData: [
              { field: 'name', value: contactName },
              { field: 'phone', value: contactPhone },
              { field: 'email', value: contactEmail },
              { field: 'bmi', value: bmiFormatted },
              { field: 'category', value: matchedCategory?.categoryLabel || '' },
              { field: 'source', value: 'calculadoraIMCDrop' },
            ],
            formType: 'calculadoraIMCDrop',
          }),
        })

        if (!response.ok) {
          setContactError('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
          return
        }

        resetContactForm()
        setModalStep('result')
      } catch {
        setContactError('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
      } finally {
        setIsSubmittingContact(false)
      }
    },
    [
      privacyRequired,
      acceptPrivacy,
      contactName,
      contactPhone,
      contactEmail,
      bmiFormatted,
      matchedCategory?.categoryLabel,
      resetContactForm,
    ],
  )

  const stepIndex = modalStep === 'calc' ? 0 : modalStep === 'contact' ? 1 : 2
  const showStepDots =
    useContactFlow &&
    (modalStep === 'calc' ||
      modalStep === 'contact' ||
      (modalStep === 'result' && isEligible))

  const stepDots = showStepDots ? (
    <div className="flex items-center justify-center gap-2" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            'h-2 w-2 rounded-full transition-colors',
            i === stepIndex ? 'bg-[#1B2B4A]' : 'bg-gray-300',
          )}
        />
      ))}
    </div>
  ) : null

  useEffect(() => {
    if (!isModalOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => {
      const first = dialogRef.current?.querySelector<HTMLElement>(
        'input, button:not([disabled]), [href], textarea, select',
      )
      first?.focus()
    })
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [isModalOpen, closeModal])

  const tableBlock = (
    <div
      className="w-full overflow-hidden rounded-[20px] border border-[#F0E6EC] bg-white shadow-[0_12px_40px_rgba(194,0,95,0.08)]"
      style={{ backgroundColor: tableCardBg }}
    >
      <div
        className="grid grid-cols-2 items-center px-4 py-3.5 sm:px-6 sm:py-4"
        style={{ backgroundColor: tableHeaderBg }}
      >
        <div
          className="flex min-w-0 items-center gap-2 pr-3 text-[15px] font-bold tracking-tight sm:pr-4"
          style={{ color: NAVY }}
        >
          <IconMedia
            icon={categoryHeaderIcon}
            className="h-5 w-5 shrink-0 text-[color:var(--imc-drop-accent)] [&_svg]:text-[color:var(--imc-drop-accent)]"
            imgClassName="h-5 w-5"
          />
          <span className="truncate">{categoryHeaderLabel || 'Categoría'}</span>
        </div>
        <div
          className="flex h-full items-center justify-between gap-2 border-l border-[#E0D5DB] pl-4 text-[15px] font-bold tracking-tight sm:pl-6"
          style={{ color: NAVY }}
        >
          <div className="flex flex-1 items-center justify-center gap-2">
            <IconMedia
              icon={imcHeaderIcon}
              className="h-5 w-5 shrink-0 text-[color:var(--imc-drop-accent)] [&_svg]:text-[color:var(--imc-drop-accent)]"
              imgClassName="h-5 w-5"
            />
            <span>{imcHeaderLabel || 'IMC'}</span>
          </div>
          <div aria-hidden className="w-[4.25rem] shrink-0 sm:w-[4.75rem]" />
        </div>
      </div>

      <ul>
        {(categories || []).map((row, idx) => {
          const tagIcon = row.tagIconSVG?.trim()
            ? sanitizeSVG(row.tagIconSVG)
            : DEFAULT_CHECK_SVG
          const zebra = idx % 2 === 1
          return (
            <li
              key={row.id || idx}
              className="grid grid-cols-2 items-center border-t border-[#F3EEF1] px-4 py-3 sm:px-6 sm:py-3.5"
              style={{ backgroundColor: zebra ? 'rgba(252, 232, 240, 0.35)' : 'transparent' }}
            >
              <div className="flex min-w-0 items-center gap-2.5 pr-3 sm:gap-3 sm:pr-4">
                <IconMedia
                  icon={row.icon}
                  className="h-[22px] w-[22px] shrink-0 text-[color:var(--imc-drop-accent)] [&_svg]:h-full [&_svg]:w-full [&_svg]:text-[color:var(--imc-drop-accent)] sm:h-6 sm:w-6"
                  imgClassName="h-[22px] w-[22px] sm:h-6 sm:w-6"
                />
                <span
                  className="truncate text-[13px] font-medium sm:text-sm"
                  style={{ color: NAVY }}
                >
                  {row.categoryLabel}
                </span>
              </div>
              <div className="flex h-full items-center justify-between gap-2 border-l border-[#E0D5DB] pl-4 sm:pl-6">
                <div
                  className="flex flex-1 items-center justify-center text-center text-[13px] font-medium tabular-nums sm:text-sm"
                  style={{ color: NAVY }}
                >
                  {row.imcLabel}
                </div>
                <div className="flex w-[4.25rem] shrink-0 items-center justify-end sm:w-[4.75rem]">
                  {row.showTag ? (
                    <span
                      className="inline-flex h-[22px] min-w-[3.75rem] items-center justify-center gap-1 rounded-full px-2.5 text-[11px] font-semibold leading-none sm:min-w-[4.25rem] sm:text-xs"
                      style={{ backgroundColor: tagBg, color: tagFg }}
                    >
                      <span
                        className="inline-flex h-3 w-3 shrink-0 [&_svg]:h-full [&_svg]:w-full"
                        aria-hidden
                        dangerouslySetInnerHTML={{ __html: tagIcon }}
                      />
                      {row.tagLabel || 'Apto'}
                    </span>
                  ) : (
                    <span
                      className="inline-block h-[22px] min-w-[3.75rem] sm:min-w-[4.25rem]"
                      aria-hidden
                    />
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const imageBlock = (
    <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:mx-0 lg:max-w-none lg:min-h-[480px] lg:translate-x-0 xl:-translate-x-2">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[96%] max-w-[480px] -translate-x-1/2 -translate-y-[46%] rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${circleColor} 0%, ${circleColor}CC 42%, ${circleColor}00 72%)`,
        }}
        aria-hidden
      />
      {/* Arco decorativo punteado (gira lentamente) */}
      <div
        className="pointer-events-none absolute left-1/2 top-[6%] h-[90%] w-[98%] max-w-[500px] -translate-x-1/2"
        aria-hidden
      >
        <svg
          className="imc-drop-orbit h-full w-full opacity-50"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="168"
            stroke={accent}
            strokeWidth="1.25"
            strokeDasharray="3 10"
            opacity="0.45"
          />
          <circle cx="48" cy="118" r="3.5" fill={accent} opacity="0.55" />
          <circle cx="340" cy="96" r="2.5" fill={accent} opacity="0.4" />
          <circle cx="356" cy="230" r="3" fill={accent} opacity="0.35" />
        </svg>
      </div>
      {imageSrc ? (
        <div className="relative z-[1] w-full max-w-[340px] lg:max-w-[390px]">
          <img
            src={imageSrc}
            alt={imageAlt || 'Imagen'}
            className="imc-drop-image-cut mx-auto h-auto w-full object-contain object-bottom"
          />
        </div>
      ) : (
        <div
          className="relative z-[1] flex aspect-[3/4] w-full max-w-[320px] items-center justify-center rounded-2xl border border-dashed border-pink-200 bg-white/40 text-sm text-gray-400"
          aria-hidden
        >
          Imagen
        </div>
      )}
    </div>
  )

  const ctaButton = (
    <button
      ref={openButtonRef}
      type="button"
      onClick={openModal}
      className="inline-flex w-full max-w-sm items-center justify-center gap-2.5 rounded-full px-10 py-4 text-[15px] font-semibold tracking-wide shadow-[0_10px_28px_rgba(194,0,95,0.28)] transition-[opacity,transform] hover:opacity-95 active:translate-y-px lg:w-auto lg:min-w-[280px]"
      style={{ backgroundColor: openBtnBg, color: openBtnFg }}
    >
      <span>{openButton?.label || 'Calcula tu IMC'}</span>
      {openIconSvg ? (
        <span
          className="inline-flex h-5 w-5 shrink-0 [&_svg]:h-full [&_svg]:w-full"
          aria-hidden
          dangerouslySetInnerHTML={{ __html: openIconSvg }}
        />
      ) : (
        <span aria-hidden className="text-lg font-light leading-none">
          →
        </span>
      )}
    </button>
  )

  return (
    <>
      <style>{`${headerCss.css}
${footerCss.css}
${rootSel} .imc-drop-header strong,
${rootSel} .imc-drop-header b {
  color: ${accent};
  font-weight: 700;
}
${rootSel} .imc-drop-header h1,
${rootSel} .imc-drop-header h2,
${rootSel} .imc-drop-header h3 {
  color: ${NAVY};
  letter-spacing: -0.02em;
}
@keyframes imc-drop-orbit-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
${rootSel} .imc-drop-orbit {
  animation: imc-drop-orbit-spin 32s linear infinite;
  transform-origin: 50% 50%;
  will-change: transform;
}
@media (prefers-reduced-motion: reduce) {
  ${rootSel} .imc-drop-orbit {
    animation: none;
  }
}
${rootSel} .imc-drop-image-cut {
  /* Corte curvo en la base; el borde se funde un poco para no marcar una línea dura */
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='500'%3E%3Cstop offset='0%25' stop-color='white'/%3E%3Cstop offset='86%25' stop-color='white'/%3E%3Cstop offset='100%25' stop-color='black'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23g)' d='M0 0h400v455Q200 500 0 455V0z'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='500'%3E%3Cstop offset='0%25' stop-color='white'/%3E%3Cstop offset='86%25' stop-color='white'/%3E%3Cstop offset='100%25' stop-color='black'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23g)' d='M0 0h400v455Q200 500 0 455V0z'/%3E%3C/svg%3E");
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}`}</style>
      <section
        id={sectionId}
        data-imc-drop-font={uniqueId}
        className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
        style={
          {
            backgroundColor: bg,
            ['--imc-drop-accent' as string]: accent,
          } as React.CSSProperties
        }
      >
        {/* Decoración de fondo (círculos suaves + arcos) */}
        <div
          className="pointer-events-none absolute -left-28 -top-16 h-[420px] w-[420px] rounded-full opacity-70 blur-2xl"
          style={{
            background: `radial-gradient(circle, ${accent}22 0%, ${accent}10 40%, transparent 70%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-24 h-[380px] w-[380px] rounded-full opacity-60 blur-2xl"
          style={{
            background: `radial-gradient(circle, #B8A0F022 0%, ${accent}14 45%, transparent 70%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full opacity-50 blur-3xl"
          style={{
            background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
          }}
          aria-hidden
        />
        <div className="relative z-[1] mx-auto flex w-full max-w-[1120px] flex-col items-center">
          {headerContent ? (
            <div
              className={cn(
                'imc-drop-header mb-6 max-w-[720px] text-center lg:mb-8',
                headerCss.fontGroupActive && DROP_FG_RICHTEXT,
                !headerCss.fontGroupActive &&
                  cn(
                    '[&_h1]:text-[1.75rem] [&_h1]:font-bold [&_h1]:leading-[1.15] sm:[&_h1]:text-[2.35rem] lg:[&_h1]:text-[2.75rem]',
                    '[&_h2]:text-[1.75rem] [&_h2]:font-bold [&_h2]:leading-[1.15] sm:[&_h2]:text-[2.35rem] lg:[&_h2]:text-[2.75rem]',
                    '[&_h3]:text-[1.5rem] [&_h3]:font-bold [&_h3]:leading-tight',
                    '[&_p]:mx-auto [&_p]:mt-5 [&_p]:max-w-[640px] [&_p]:text-[15px] [&_p]:leading-relaxed sm:[&_p]:text-base',
                    '[&_p:first-child]:mt-0 [&_strong]:font-bold',
                  ),
              )}
              style={
                !headerStyle?.textColor
                  ? ({ color: NAVY, ['--imc-drop-body' as string]: BODY_GRAY } as React.CSSProperties)
                  : undefined
              }
            >
              <div
                className={
                  !headerStyle?.textColor
                    ? '[&_p]:text-[color:var(--imc-drop-body)]'
                    : undefined
                }
              >
                <RichText data={headerContent} enableGutter={false} enableProse={false} />
              </div>
            </div>
          ) : null}

          {/* Desktop: tabla | imagen */}
          <div className="hidden w-full items-center lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
            <div className="min-w-0">{tableBlock}</div>
            <div className="flex min-w-0 justify-start">{imageBlock}</div>
          </div>
          <div className="mt-3 hidden justify-center lg:flex">{ctaButton}</div>

          {/* Mobile: tabla → botón → imagen */}
          <div className="flex w-full flex-col items-center gap-8 lg:hidden">
            {tableBlock}
            {ctaButton}
            {imageBlock}
          </div>

          {footerContent ? (
            <div
              className={cn(
                'imc-drop-footer mt-5 max-w-[640px] text-center text-[13px] italic leading-relaxed lg:mt-5',
                footerCss.fontGroupActive && DROP_FG_RICHTEXT,
                !footerCss.fontGroupActive &&
                  'text-[#7A8494] [&_p]:m-0 [&_p]:leading-relaxed [&_em]:italic',
              )}
            >
              <RichText data={footerContent} enableGutter={false} enableProse={false} />
            </div>
          ) : null}
        </div>
      </section>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Cerrar"
            onClick={closeModal}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${uniqueId}-modal-title`}
            className="relative z-[1] w-full max-w-md rounded-3xl p-6 shadow-2xl sm:p-8"
            style={{ backgroundColor: modalBg }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              aria-label="Cerrar calculadora"
            >
              ✕
            </button>

            {modalStep === 'calc' ? (
              <>
                <h2
                  id={`${uniqueId}-modal-title`}
                  className="pr-8 text-xl font-bold"
                  style={{ color: NAVY }}
                >
                  {modalTitle || 'Calcula tu IMC'}
                </h2>
                <div className="mt-6 flex flex-col gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium" style={{ color: NAVY }}>
                      {heightLabel}
                    </span>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={heightPlaceholder || 'ej: 165'}
                      className="w-full rounded-xl border border-[#1B2B4A]/40 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[color:var(--imc-drop-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium" style={{ color: NAVY }}>
                      {weightLabel}
                    </span>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={weightPlaceholder || 'ej: 92'}
                      className="w-full rounded-xl border border-[#1B2B4A]/40 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[color:var(--imc-drop-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>
                  {formError ? (
                    <p className="text-sm text-red-600" role="alert">
                      {formError}
                    </p>
                  ) : null}
                  {stepDots ? <div className="mt-1">{stepDots}</div> : null}
                  <button
                    type="button"
                    onClick={calculateBMI}
                    disabled={!height || !weight}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    style={{ backgroundColor: calcBtnBg, color: calcBtnFg }}
                  >
                    <span>{calculateButtonText || 'Calcular'}</span>
                    {calcIconSvg ? (
                      <span
                        className="inline-flex h-5 w-5 shrink-0 [&_svg]:h-full [&_svg]:w-full"
                        aria-hidden
                        dangerouslySetInnerHTML={{ __html: calcIconSvg }}
                      />
                    ) : null}
                  </button>
                </div>
              </>
            ) : null}

            {modalStep === 'contact' ? (
              <>
                <div
                  id={`${uniqueId}-modal-title`}
                  className="pr-8 text-xl font-bold [&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_p]:m-0"
                  style={{ color: NAVY }}
                >
                  {eligibleContactForm?.title ? (
                    <RichText
                      data={eligibleContactForm.title}
                      enableGutter={false}
                      enableProse={false}
                    />
                  ) : (
                    <h2 className="text-xl font-bold">Déjanos tu contacto</h2>
                  )}
                </div>
                {eligibleContactForm?.description ? (
                  <div className="mt-3 text-sm leading-relaxed text-gray-600 [&_p]:m-0 [&_p+p]:mt-2">
                    <RichText
                      data={eligibleContactForm.description}
                      enableGutter={false}
                      enableProse={false}
                    />
                  </div>
                ) : null}

                <form className="mt-6 flex flex-col gap-3.5" onSubmit={handleContactSubmit}>
                  <label className="relative block">
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#1B2B4A]">
                      <IconMedia
                        icon={eligibleContactForm?.nameIcon}
                        className="h-5 w-5"
                        imgClassName="h-5 w-5"
                      />
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder={eligibleContactForm?.namePlaceholder || 'Nombre'}
                      className="w-full rounded-xl border border-[#1B2B4A]/55 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[color:var(--imc-drop-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>

                  <label className="relative block">
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#1B2B4A]">
                      <IconMedia
                        icon={eligibleContactForm?.phoneIcon}
                        className="h-5 w-5"
                        imgClassName="h-5 w-5"
                      />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder={eligibleContactForm?.phonePlaceholder || 'Teléfono'}
                      className="w-full rounded-xl border border-[#1B2B4A]/55 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[color:var(--imc-drop-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>

                  <label className="relative block">
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#1B2B4A]">
                      <IconMedia
                        icon={eligibleContactForm?.emailIcon}
                        className="h-5 w-5"
                        imgClassName="h-5 w-5"
                      />
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder={eligibleContactForm?.emailPlaceholder || 'Email'}
                      className="w-full rounded-xl border border-[#1B2B4A]/55 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[color:var(--imc-drop-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>

                  <div className="mt-1 flex items-start gap-3">
                    <Checkbox
                      id={`${uniqueId}-privacy`}
                      checked={acceptPrivacy}
                      onCheckedChange={(v) => setAcceptPrivacy(v === true)}
                      required={privacyRequired}
                      className="mt-0.5 shrink-0"
                    />
                    {eligibleContactForm?.privacyContent ? (
                      <label
                        htmlFor={`${uniqueId}-privacy`}
                        className="cursor-pointer text-xs leading-relaxed text-gray-600 [&_a]:font-semibold [&_a]:underline [&_p]:m-0"
                      >
                        <RichText
                          data={eligibleContactForm.privacyContent}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </label>
                    ) : (
                      <label
                        htmlFor={`${uniqueId}-privacy`}
                        className="cursor-pointer text-xs leading-relaxed text-gray-600"
                      >
                        Consiento el tratamiento de mis datos personales, incluido datos personales
                        de salud, conforme a la política de privacidad.
                      </label>
                    )}
                  </div>

                  {contactError ? (
                    <p className="text-sm text-red-600" role="alert">
                      {contactError}
                    </p>
                  ) : null}

                  {stepDots ? <div className="mt-2">{stepDots}</div> : null}

                  <button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="mt-1 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold shadow-[0_8px_20px_rgba(194,0,95,0.25)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 [&_p]:m-0"
                    style={{ backgroundColor: contactBtnBg, color: contactBtnFg }}
                  >
                    {isSubmittingContact ? (
                      'Enviando…'
                    ) : eligibleContactForm?.continueButtonText ? (
                      <RichText
                        data={eligibleContactForm.continueButtonText}
                        enableGutter={false}
                        enableProse={false}
                      />
                    ) : (
                      'Continuar'
                    )}
                  </button>
                </form>
              </>
            ) : null}

            {modalStep === 'result' ? (
              <>
                <h2
                  id={`${uniqueId}-modal-title`}
                  className="pr-8 text-xl font-bold"
                  style={{ color: NAVY }}
                >
                  Tu resultado
                </h2>
                <div className="mt-5 text-center">
                  <p className="text-base" style={{ color: NAVY }}>
                    Tu IMC es de{' '}
                    <span className="text-3xl font-bold" style={{ color: accent }}>
                      {bmiFormatted}
                    </span>{' '}
                    <span className="text-sm text-gray-500">kg/m²</span>
                  </p>
                  {matchedCategory?.categoryLabel ? (
                    <p className="mt-2 text-sm text-gray-600">
                      Categoría:{' '}
                      <span className="font-semibold" style={{ color: NAVY }}>
                        {matchedCategory.categoryLabel}
                      </span>
                      {isEligible ? (
                        <span
                          className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold"
                          style={{ backgroundColor: tagBg, color: tagFg }}
                        >
                          Apto
                        </span>
                      ) : (
                        <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                          No apto
                        </span>
                      )}
                    </p>
                  ) : null}
                </div>

                {resultContent ? (
                  <div
                    className={cn(
                      'mt-5 text-center text-sm leading-relaxed text-gray-700',
                      '[&_p]:m-0 [&_p+p]:mt-2 [&_strong]:font-semibold',
                    )}
                  >
                    <RichText data={resultContent} enableGutter={false} enableProse={false} />
                  </div>
                ) : (
                  <p className="mt-5 text-center text-sm text-gray-600">
                    {isEligible
                      ? 'Según tu IMC, podrías ser apto para el tratamiento Drop.'
                      : 'Según tu IMC, Drop podría no ser el tratamiento adecuado. Consulta con un profesional.'}
                  </p>
                )}

                <ResultCTAButtons
                  buttons={
                    isEligible ? eligibleResult?.buttons : notEligibleResult?.buttons
                  }
                  backgroundColor={isEligible ? eligBtnBg : notEligBtnBg}
                  textColor={isEligible ? eligBtnFg : notEligBtnFg}
                />

                {stepDots ? <div className="mt-5">{stepDots}</div> : null}

                <button
                  type="button"
                  onClick={() => {
                    setModalStep('calc')
                    setBmi(null)
                    setMatchedCategory(null)
                    setFormError(null)
                    resetContactForm()
                  }}
                  className="mt-4 w-full text-center text-sm font-medium underline-offset-2 hover:underline"
                  style={{ color: accent }}
                >
                  {recalculateButtonText || 'Volver a calcular'}
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  )
}
