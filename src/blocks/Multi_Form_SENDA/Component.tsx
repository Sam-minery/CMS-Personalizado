'use client'

import React, { useState } from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type FontFile = {
  url?: string
  filename?: string
  name?: string
}

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
  const isValidFontFile =
    fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

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
        `[data-mf-senda-font="${styleId}"], [data-mf-senda-font="${styleId}"] *, [data-mf-senda-font="${styleId}"] a, [data-mf-senda-font="${styleId}"] button, [data-mf-senda-font="${styleId}"] .mf-senda-btn, [data-mf-senda-font="${styleId}"] .mf-senda-btn *, [data-mf-senda-font="${styleId}"] .mf-senda-step-btn, [data-mf-senda-font="${styleId}"] .mf-senda-step-btn * { font-family: ${fontValue} !important; }`,
      )
    }
    if (textColor) {
      styles.push(
        `[data-mf-senda-font="${styleId}"], [data-mf-senda-font="${styleId}"] p, [data-mf-senda-font="${styleId}"] h1, [data-mf-senda-font="${styleId}"] h2, [data-mf-senda-font="${styleId}"] h3, [data-mf-senda-font="${styleId}"] h4, [data-mf-senda-font="${styleId}"] span:not(strong):not(b), [data-mf-senda-font="${styleId}"] a { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `[data-mf-senda-font="${styleId}"] strong, [data-mf-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }
    const btnRules: string[] = ['border-radius: 0.75rem !important;']
    if (buttonBackgroundColor) btnRules.push(`background-color: ${buttonBackgroundColor} !important;`)
    styles.push(`[data-mf-senda-font="${styleId}"] .mf-senda-btn { ${btnRules.join(' ')} }`)
    if (buttonTextColor) {
      styles.push(
        `[data-mf-senda-font="${styleId}"] .mf-senda-btn, [data-mf-senda-font="${styleId}"] .mf-senda-btn * { color: ${buttonTextColor} !important; }`,
      )
    }
    /* Botón de paso: colores por variable CSS para ganar a las reglas de texto/enlaces */
    styles.push(
      `[data-mf-senda-font="${styleId}"] .mf-senda-step-btn { border-radius: 0.75rem !important; }`,
    )
    styles.push(
      `[data-mf-senda-font="${styleId}"] .mf-senda-step-btn, [data-mf-senda-font="${styleId}"] .mf-senda-step-btn * { color: var(--mf-senda-step-btn-color, inherit) !important; }`,
    )
    const boldColorForHover = boldTextColor ?? '#000000'
    styles.push(
      `[data-mf-senda-font="${styleId}"] .mf-senda-option-btn:hover .mf-senda-option-dot { box-shadow: inset 0 0 0 6px ${boldColorForHover} !important; }`,
    )
    /* Padding lateral del contenedor de opciones: casi nulo en móvil (compensa padding de la tarjeta), mucho en desktop */
    styles.push(
      `@media (max-width: 767px) { [data-mf-senda-font="${styleId}"] .mf-senda-options-list { margin-left: -1.5rem !important; margin-right: -1.5rem !important; padding-left: 0.25rem !important; padding-right: 0.25rem !important; } }`,
    )
    styles.push(
      `@media (min-width: 768px) { [data-mf-senda-font="${styleId}"] .mf-senda-options-list { margin-left: 0 !important; margin-right: 0 !important; padding-left: 3rem !important; padding-right: 3rem !important; } }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined
  const stepsList = steps ?? []
  const stepCount = stepsList.length
  const isOnSteps = formStarted && currentStepIndex < stepCount
  const isFinished = formStarted && currentStepIndex >= stepCount
  const hasEndScreen =
    hasRichTextContent(endRichText) || hasValidEndLink(endButtonLink)
  const showEndScreen = isFinished && hasEndScreen
  const currentStep = isOnSteps && stepsList[currentStepIndex] ? stepsList[currentStepIndex] : null
  const options = currentStep?.options ?? []
  const backgroundImageUrl = getBackgroundImageUrl(backgroundImage)

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'multi-form-senda')}
        data-mf-senda-font={styleId}
        className="relative w-full pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 px-6 md:px-8 lg:px-10 bg-cover bg-center bg-no-repeat"
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
            {/* Línea temporal: solo visible desde el primer step (tras pulsar inicio) */}
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

            {/* Intro: antes de empezar */}
            {!formStarted && (
              <div style={fontStyle} className="pt-6">
                {introRichText && (
                  <div className="pt-2 mb-8 lg:px-28 [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
                    <RichText data={introRichText} enableGutter={false} enableProse={false} />
                  </div>
                )}
                <div className="lg:flex lg:justify-center">
                  <button
                    type="button"
                    onClick={() => setFormStarted(true)}
                    className="mf-senda-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
                    style={fontStyle}
                  >
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
                  </button>
                </div>
              </div>
            )}

            {/* Paso actual */}
            {isOnSteps && currentStep && (
              <div style={fontStyle} className="pt-6">
                {currentStep.stepRichText && (
                  <div className="pt-2 mb-8 lg:px-28 [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
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
                          <span className="min-w-0 flex-1 [&_p]:m-0 [&_h1]:text-lg [&_h2]:text-base [&_h3]:text-base [&_h4]:text-sm">
                            <RichText data={opt.optionRichText} enableGutter={false} enableProse={false} />
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
                {/* Botón de paso: enlace o confirmar opción */}
                {currentStep.convertStepButtonToLink && hasValidStepButtonLink(currentStep.stepButtonLink) && currentStep.stepButtonLink ? (
                  <div className="mt-6 lg:flex lg:justify-center">
                    <CMSLink
                      type={currentStep.stepButtonLink.type ?? undefined}
                      reference={
                        currentStep.stepButtonLink.reference?.relationTo && currentStep.stepButtonLink.reference?.value != null
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
                      appearance="default"
                      size="default"
                      className="mf-senda-step-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all hover:opacity-90"
                      style={{
                        ...fontStyle,
                        backgroundColor: (selectedOptionInCurrentStep === null ? (currentStep.stepButtonBackgroundColor ?? buttonBackgroundColor) : buttonBackgroundColor) as React.CSSProperties['backgroundColor'],
                        ['--mf-senda-step-btn-color' as string]: (selectedOptionInCurrentStep === null ? (currentStep.stepButtonTextColor ?? buttonTextColor) : buttonTextColor),
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        {(currentStep.stepButtonLink.label?.trim() || currentStep.stepButtonLabel?.trim() || 'Continuar')}
                        {currentStep.stepButtonIconSVG?.trim() ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(currentStep.stepButtonIconSVG).replace(/\sheight=["'][^"']*["']/gi, ''),
                            }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </CMSLink>
                  </div>
                ) : (
                  <div className="mt-6 lg:flex lg:justify-center">
                    <button
                      type="button"
                      disabled={selectedOptionInCurrentStep === null}
                      onClick={() => {
                        setCurrentStepIndex((i) => i + 1)
                        setSelectedOptionInCurrentStep(null)
                      }}
                      className="mf-senda-step-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all hover:opacity-90 focus:outline-none disabled:cursor-not-allowed"
                      style={{
                        ...fontStyle,
                        backgroundColor: (selectedOptionInCurrentStep === null ? (currentStep.stepButtonBackgroundColor ?? buttonBackgroundColor) : buttonBackgroundColor) as React.CSSProperties['backgroundColor'],
                        ['--mf-senda-step-btn-color' as string]: (selectedOptionInCurrentStep === null ? (currentStep.stepButtonTextColor ?? buttonTextColor) : buttonTextColor),
                      }}
                    >
                      {currentStep.stepButtonLabel?.trim() || 'Continuar'}
                      {currentStep.stepButtonIconSVG?.trim() ? (
                        <span
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          dangerouslySetInnerHTML={{
                            __html: sanitizeSVG(currentStep.stepButtonIconSVG).replace(/\sheight=["'][^"']*["']/gi, ''),
                          }}
                          aria-hidden
                        />
                      ) : null}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Final: texto + botón con enlace (solo si hay texto final o enlace válido) */}
            {showEndScreen && (
              <div style={fontStyle} className="pt-6">
                {endRichText && hasRichTextContent(endRichText) && (
                  <div className="pt-2 mb-8 lg:px-28 [&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
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
                      size="default"
                      className="mf-senda-btn inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all hover:opacity-90"
                      style={fontStyle}
                    >
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
