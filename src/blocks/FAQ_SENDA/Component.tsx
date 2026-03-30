'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'

/** Tipos locales: sin depender de payload-types. */
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

function normalizeFaqFontGroup(raw: unknown): FontGroupData | null {
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

const FAQ_FG_RICHTEXT =
  'faq-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

type FAQQuestion = {
  questionRichText?: DefaultTypedEditorState | null
  answerRichText?: DefaultTypedEditorState | null
  iconSVG?: string | null
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

const DEFAULT_CHEVRON_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>'

type FAQSendaProps = {
  anchorId?: string | null
  richText?: DefaultTypedEditorState | null
  questions?: FAQQuestion[] | null
  backgroundColor?: string | null
  questionsSectionBackgroundColor?: string | null
  questionsSectionBorderColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

export const FAQSendaBlock: React.FC<FAQSendaProps> = (props) => {
  const {
    anchorId,
    richText,
    questions,
    backgroundColor,
    questionsSectionBackgroundColor,
    questionsSectionBorderColor,
    textColor,
    boldTextColor,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `faq-senda-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeFaqFontGroup(fontGroup)
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
    const sel = `[data-fs-font="${styleId}"]`
    const mainRichtext = `${sel} .faq-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`

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
        `${sel} .faq-senda-main-richtext, ${sel} .faq-senda-main-richtext p, ${sel} .faq-senda-main-richtext h1, ${sel} .faq-senda-main-richtext h2, ${sel} .faq-senda-main-richtext h3, ${sel} .faq-senda-main-richtext h4, ${sel} .faq-senda-accordion-content, ${sel} .faq-senda-accordion-content p, ${sel} .faq-senda-accordion-content li, ${sel} .faq-senda-accordion-content span:not(strong):not(b), ${sel} .faq-senda-accordion-trigger { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `${sel} .faq-senda-main-richtext strong, ${sel} .faq-senda-main-richtext b, ${sel} .faq-senda-accordion-content strong, ${sel} .faq-senda-accordion-content b { color: ${boldTextColor} !important; }`,
      )
    }

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .faq-senda-main-richtext h1, ${sel} .faq-senda-main-richtext h2, ${sel} .faq-senda-main-richtext h3, ${sel} .faq-senda-main-richtext h4, ${sel} .faq-senda-accordion-trigger h1, ${sel} .faq-senda-accordion-trigger h2, ${sel} .faq-senda-accordion-trigger h3, ${sel} .faq-senda-accordion-trigger h4, ${sel} .faq-senda-accordion-content h1, ${sel} .faq-senda-accordion-content h2, ${sel} .faq-senda-accordion-content h3, ${sel} .faq-senda-accordion-content h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(
        `${sel} .faq-senda-main-richtext h4, ${sel} .faq-senda-accordion-trigger h4, ${sel} .faq-senda-accordion-content h4 { font-weight: 900 !important; }`,
      )
    }

    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    /* Icono del acordeón: rotación 180° al abrir */
    styles.push(
      `${sel} .faq-senda-accordion-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s ease; }`,
    )
    styles.push(
      `${sel} [data-state=open] .faq-senda-accordion-icon { transform: rotate(180deg); }`,
    )
    styles.push(
      `${sel} .faq-senda-accordion-icon svg { width: 1.75rem; height: 1.75rem; display: block; }`,
    )

    /* Cada ítem es una sección individual: fondo solo dentro del contorno redondeado (hasta donde va el reborde) */
    styles.push(
      `${sel} .faq-senda-accordion-item { border: none !important; overflow: hidden; }`,
    )
    if (questionsSectionBackgroundColor) {
      styles.push(
        `${sel} .faq-senda-accordion-item { background-color: ${questionsSectionBackgroundColor}; }`,
      )
    }
    if (questionsSectionBorderColor) {
      styles.push(
        `${sel} .faq-senda-accordion-item[data-state=open] { border: 1px solid ${questionsSectionBorderColor} !important; }`,
      )
    }

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const questionsList = Array.isArray(questions) && questions.length > 0 ? questions : []

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'faq-senda')}
        data-fs-font={styleId}
        className="px-2 py-16 sm:px-3 md:px-[5%] md:py-24 lg:py-28"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="faq-senda-inner container w-full max-w-xl md:max-w-2xl lg:max-w-4xl">
          <div
            className="faq-senda-main-richtext mb-12 text-center md:mb-16 lg:mb-20"
            style={fontStyle}
          >
            {richText && (
              <div
                className={cn(
                  'faq-senda-richtext',
                  fontGroupTypographyActive && FAQ_FG_RICHTEXT,
                  !fontGroupTypographyActive &&
                    '[&_h1]:m-0 [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:m-0 [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:m-0 [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_h4]:font-bold [&_p]:m-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6',
                )}
              >
                <RichText data={richText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>

          <div className="faq-senda-accordion-wrapper px-1 py-4 sm:px-2 md:p-5">
            <Accordion type="multiple" className="grid items-start justify-stretch gap-2">
              {questionsList.map((q, index) => {
                const iconSvg = q?.iconSVG?.trim()
                const normalizedSvg = iconSvg
                  ? sanitizeSVG(iconSvg).replace(/\sheight=["'][^"']*["']/gi, '')
                  : ''
                const iconHtml = normalizedSvg || DEFAULT_CHEVRON_SVG
                const iconEl = (
                  <span
                    className="faq-senda-accordion-icon"
                    aria-hidden
                    dangerouslySetInnerHTML={{ __html: iconHtml }}
                  />
                )
                return (
                  <AccordionItem
                    key={index}
                    value={`faq-senda-item-${index}`}
                    className="faq-senda-accordion-item rounded-2xl px-5 py-0 md:px-6"
                  >
                    <AccordionTrigger
                      icon={iconEl}
                      className="faq-senda-accordion-trigger py-2 md:py-3 data-[state=open]:py-3 data-[state=open]:md:py-4 [&[data-state=open]>svg]:rotate-180"
                    >
                      <span className="min-w-0 flex-1 text-left">
                        {q?.questionRichText && (
                          <div className={cn('faq-senda-richtext', fontGroupTypographyActive && FAQ_FG_RICHTEXT)}>
                            <RichText
                              data={q.questionRichText}
                              enableGutter={false}
                              enableProse={false}
                            />
                          </div>
                        )}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="faq-senda-accordion-content px-6 pb-5 pt-0 md:px-8 md:pb-6">
                      {q?.answerRichText && (
                        <div className={cn('faq-senda-richtext', fontGroupTypographyActive && FAQ_FG_RICHTEXT)}>
                          <RichText
                            data={q.answerRichText}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
