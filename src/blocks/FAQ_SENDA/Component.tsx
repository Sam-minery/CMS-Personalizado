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
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/** Tipos locales: sin depender de payload-types. */
type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

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
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `faq-senda-${uniqueId}`

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename ? customFontFileObj.filename.replace(/\.[^.]+$/, '') : undefined)

  const getFontFamily = () => {
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }

  const selectedFontFamily = getFontFamily()
  useGoogleFont(selectedFontFamily)

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile = fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []

    if (useCustomFont && fontFileUrl && customFontFamilyName && isValidFontFile) {
      styles.push(`
        @font-face {
          font-family: "${customFontFamilyName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `)
    }

    const fontValue =
      useCustomFont && customFontFamilyName && isValidFontFile
        ? `"${customFontFamilyName.replace(/"/g, '\\"')}"`
        : selectedFontFamily && !useCustomFont
          ? selectedFontFamily
          : ''

    if (fontValue) {
      styles.push(
        `[data-fs-font="${styleId}"], [data-fs-font="${styleId}"] *, [data-fs-font="${styleId}"] a, [data-fs-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
      )
    }

    if (textColor) {
      styles.push(
        `[data-fs-font="${styleId}"] .faq-senda-main-richtext, [data-fs-font="${styleId}"] .faq-senda-main-richtext p, [data-fs-font="${styleId}"] .faq-senda-main-richtext h1, [data-fs-font="${styleId}"] .faq-senda-main-richtext h2, [data-fs-font="${styleId}"] .faq-senda-main-richtext h3, [data-fs-font="${styleId}"] .faq-senda-main-richtext h4, [data-fs-font="${styleId}"] .faq-senda-accordion-content, [data-fs-font="${styleId}"] .faq-senda-accordion-content p, [data-fs-font="${styleId}"] .faq-senda-accordion-content li, [data-fs-font="${styleId}"] .faq-senda-accordion-content span:not(strong):not(b), [data-fs-font="${styleId}"] .faq-senda-accordion-trigger { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `[data-fs-font="${styleId}"] .faq-senda-main-richtext strong, [data-fs-font="${styleId}"] .faq-senda-main-richtext b, [data-fs-font="${styleId}"] .faq-senda-accordion-content strong, [data-fs-font="${styleId}"] .faq-senda-accordion-content b { color: ${boldTextColor} !important; }`,
      )
    }

    styles.push(
      `[data-fs-font="${styleId}"] .faq-senda-main-richtext h1, [data-fs-font="${styleId}"] .faq-senda-main-richtext h2, [data-fs-font="${styleId}"] .faq-senda-main-richtext h3, [data-fs-font="${styleId}"] .faq-senda-main-richtext h4, [data-fs-font="${styleId}"] .faq-senda-accordion-trigger h1, [data-fs-font="${styleId}"] .faq-senda-accordion-trigger h2, [data-fs-font="${styleId}"] .faq-senda-accordion-trigger h3, [data-fs-font="${styleId}"] .faq-senda-accordion-trigger h4, [data-fs-font="${styleId}"] .faq-senda-accordion-content h1, [data-fs-font="${styleId}"] .faq-senda-accordion-content h2, [data-fs-font="${styleId}"] .faq-senda-accordion-content h3, [data-fs-font="${styleId}"] .faq-senda-accordion-content h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
    )
    styles.push(
      `[data-fs-font="${styleId}"] .faq-senda-main-richtext h4, [data-fs-font="${styleId}"] .faq-senda-accordion-trigger h4, [data-fs-font="${styleId}"] .faq-senda-accordion-content h4 { font-weight: 900 !important; }`,
    )
    styles.push(
      `[data-fs-font="${styleId}"] sub, [data-fs-font="${styleId}"] sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    /* Icono del acordeón: rotación 180° al abrir */
    styles.push(
      `[data-fs-font="${styleId}"] .faq-senda-accordion-icon { display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s ease; }`,
    )
    styles.push(
      `[data-fs-font="${styleId}"] [data-state=open] .faq-senda-accordion-icon { transform: rotate(180deg); }`,
    )
    styles.push(
      `[data-fs-font="${styleId}"] .faq-senda-accordion-icon svg { width: 1.75rem; height: 1.75rem; display: block; }`,
    )

    /* Cada ítem es una sección individual: fondo solo dentro del contorno redondeado (hasta donde va el reborde) */
    styles.push(
      `[data-fs-font="${styleId}"] .faq-senda-accordion-item { border: none !important; overflow: hidden; }`,
    )
    if (questionsSectionBackgroundColor) {
      styles.push(
        `[data-fs-font="${styleId}"] .faq-senda-accordion-item { background-color: ${questionsSectionBackgroundColor}; }`,
      )
    }
    if (questionsSectionBorderColor) {
      styles.push(
        `[data-fs-font="${styleId}"] .faq-senda-accordion-item[data-state=open] { border: 1px solid ${questionsSectionBorderColor} !important; }`,
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
        className="px-3 py-16 md:px-[5%] md:py-24 lg:py-28"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container max-w-lg">
          <div
            className="faq-senda-main-richtext mb-12 text-center md:mb-16 lg:mb-20"
            style={fontStyle}
          >
            {richText && (
              <div className="[&_h1]:m-0 [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:m-0 [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:m-0 [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_h4]:font-bold [&_p]:m-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
                <RichText data={richText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>

          <div className="faq-senda-accordion-wrapper px-2 py-4 md:p-5">
            <Accordion type="multiple" className="grid items-start justify-stretch gap-4">
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
                      className="faq-senda-accordion-trigger py-3 md:py-4 [&[data-state=open]>svg]:rotate-180"
                    >
                      <span className="min-w-0 flex-1 text-left">
                        {q?.questionRichText && (
                          <RichText
                            data={q.questionRichText}
                            enableGutter={false}
                            enableProse={false}
                          />
                        )}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="faq-senda-accordion-content px-6 pb-5 pt-0 md:px-8 md:pb-6">
                      {q?.answerRichText && (
                        <RichText
                          data={q.answerRichText}
                          enableGutter={false}
                          enableProse={false}
                        />
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
