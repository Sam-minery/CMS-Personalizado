'use client'

import React, { Component, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'

/** Error Boundary para la vista IMC >= 25: si RichText/Image/CMSLink lanzan, mostramos fallback y el resto del front no se cae. */
class HighBMIResultErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type MediaLike = {
  url?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string }; small?: { url?: string } }
} | number

/** Grupo imagen: subida (media) o URL externa (src). Misma lógica que Layout_SENDA. */
type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  src?: string | null
  alt?: string | null
}

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type BloqueIMCLink = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  reference?: { relationTo?: 'pages' | 'posts'; value?: { slug?: string } | string | number } | null
  label?: string | null
}

type ButtonItem = {
  link?: BloqueIMCLink | null
  iconSVG?: string | null
}

export type BloqueIMCSendaBlockProps = {
  anchorId?: string | null
  title?: DefaultTypedEditorState | null
  description?: DefaultTypedEditorState | null
  heightLabel?: string | null
  weightLabel?: string | null
  calculateButtonText?: string | null
  calculateButtonIconSVG?: string | null
  resultContent?: DefaultTypedEditorState | null
  /** Botón del resultado cuando IMC < 25 (nombre en config: 'resultButton (IMC < 25)') */
  'resultButton (IMC < 25)'?: ButtonItem[] | null
  /** Clave antigua por si hay datos guardados con el nombre anterior */
  resultButton?: ButtonItem[] | null
  backgroundColor?: string | null
  cardBackgroundColor?: string | null
  resultCardBackgroundColor?: string | null
  resultTextColor?: string | null
  textColor?: string | null
  labelColor?: string | null
  calculateButtonColor?: string | null
  calculateButtonTextColor?: string | null
  resultButtonColor?: string | null
  resultButtonTextColor?: string | null
  highBMIContent?: DefaultTypedEditorState | null
  backgroundImage?: ImageGroup | null
  highBMIImage?: ImageGroup | null
  highBMINameAndDescription?: DefaultTypedEditorState | null
  highBMIButton?: ButtonItem[] | null
  highBMICardBackgroundColor?: string | null
  highBMITextColor?: string | null
  highBMIButtonColor?: string | null
  highBMIButtonTextColor?: string | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
  disableInnerContainer?: boolean
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || ''
}

/** URL del media: prioriza .url, luego sizes. Sin getMediaUrl (evita fallos en producción); misma metodología que Layout_SENDA (imageGroup.mediaImage.url). */
function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string }; small?: { url?: string } }
  }
  return m?.url ?? m?.sizes?.large?.url ?? m?.sizes?.medium?.url ?? m?.sizes?.small?.url ?? ''
}

/** Resuelve la URL de un grupo imagen (subida o URL externa). Misma lógica que Layout_SENDA: mediaImage.url directo o src. Acepta dato legacy: highBMIImage como media directo. */
function getImageGroupSrc(
  group: ImageGroup | MediaLike | null | undefined,
): string {
  if (!group) return ''
  const g = group as ImageGroup
  if ('useMedia' in g && g.useMedia && g.mediaImage && typeof g.mediaImage === 'object') {
    return getMediaUrlSafe(g.mediaImage)
  }
  if ('src' in g && typeof g.src === 'string' && g.src.trim()) return g.src.trim()
  if (typeof group === 'object' && 'url' in group) {
    return getMediaUrlSafe(group as MediaLike)
  }
  if (typeof group === 'number') return ''
  return ''
}

export const BloqueIMCSendaBlock: React.FC<BloqueIMCSendaBlockProps> = ({
  anchorId,
  title,
  description,
  heightLabel = 'Estatura (en cm)',
  weightLabel = 'Peso (en kg)',
  calculateButtonText = 'Calcular IMC',
  calculateButtonIconSVG,
  resultContent,
  'resultButton (IMC < 25)': resultButtonNewKey,
  resultButton: resultButtonLegacy,
  backgroundColor,
  cardBackgroundColor,
  resultCardBackgroundColor,
  resultTextColor,
  textColor,
  labelColor,
  calculateButtonColor,
  calculateButtonTextColor,
  resultButtonColor,
  resultButtonTextColor,
  highBMIContent,
  backgroundImage,
  highBMIImage,
  highBMINameAndDescription,
  highBMIButton,
  highBMICardBackgroundColor,
  highBMITextColor,
  highBMIButtonColor,
  highBMIButtonTextColor,
  fontFamily,
  useCustomFont,
  customFontFile,
  customFontName,
  disableInnerContainer,
}) => {
  const [height, setHeight] = useState<string>('')
  const [weight, setWeight] = useState<string>('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [showHighBMI, setShowHighBMI] = useState(false)

  /** Botón IMC < 25: priorizar clave nueva del config, luego la antigua por datos ya guardados */
  const resultButton = resultButtonNewKey ?? resultButtonLegacy

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `bloque-imc-senda-${uniqueId}`

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
    styles.push(`
      @media (max-width: 767px) {
        [data-bloque-imc-high-bmi-desc],
        [data-bloque-imc-high-bmi-desc] *,
        [data-bloque-imc-result-desc],
        [data-bloque-imc-result-desc] *,
        [data-bloque-imc-calc-title-desc],
        [data-bloque-imc-calc-title-desc] * {
          text-align: left !important;
        }
      }
      [data-bloque-imc-calc-btn-icon] svg,
      [data-bloque-imc-calc-btn-icon] svg * {
        fill: currentColor !important;
        stroke: currentColor !important;
        stroke-width: 0.1 !important;
      }
    `)
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
        `[data-bloque-imc-senda-font="${styleId}"], [data-bloque-imc-senda-font="${styleId}"] *, [data-bloque-imc-senda-font="${styleId}"] button, [data-bloque-imc-senda-font="${styleId}"] a, [data-bloque-imc-senda-font="${styleId}"] label, [data-bloque-imc-senda-font="${styleId}"] input { font-family: ${fontValue} !important; }`,
      )
    }

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const calculateBMI = () => {
    const heightNum = parseFloat(height)
    const weightNum = parseFloat(weight)

    if (heightNum > 0 && weightNum > 0) {
      const heightInMeters = heightNum / 100
      const calculatedBMI = weightNum / (heightInMeters * heightInMeters)
      setBmi(calculatedBMI)

      if (calculatedBMI < 25) {
        setShowResult(true)
        setShowHighBMI(false)
      } else {
        setShowResult(false)
        setShowHighBMI(true)
      }
    } else {
      alert('Por favor, introduce valores válidos para la estatura y el peso.')
    }
  }

  const defaultBackground =
    backgroundColor || 'linear-gradient(to bottom, #f8f8f8 0%, #e8e8ea 100%)'
  const defaultCardBackground = cardBackgroundColor || '#f5f5f0'
  const defaultResultCardBackground = resultCardBackgroundColor || cardBackgroundColor || '#fafafa'
  const defaultResultTextColor = resultTextColor || textColor || '#000000'
  const defaultTextColor = textColor || '#000000'
  const defaultLabelColor = labelColor || textColor || '#000000'
  const defaultCalculateButtonColor = calculateButtonColor || '#2563eb'
  const defaultCalculateButtonTextColor = calculateButtonTextColor || '#ffffff'
  const defaultResultButtonColor = resultButtonColor || '#2563eb'
  const defaultResultButtonTextColor = resultButtonTextColor || '#ffffff'
  const defaultHighBMICardBackground =
    highBMICardBackgroundColor || cardBackgroundColor || '#fafafa'
  const defaultHighBMITextColor = highBMITextColor || textColor || '#000000'
  const defaultHighBMIButtonColor = highBMIButtonColor || resultButtonColor || '#2563eb'
  const defaultHighBMIButtonTextColor = highBMIButtonTextColor || resultButtonTextColor || '#ffffff'

  const backgroundImageUrl = getImageGroupSrc(backgroundImage)
  const highBMIImageUrl = getImageGroupSrc(highBMIImage)
  const highBMIImageAlt = highBMIImage?.alt?.trim() || 'Imagen profesional'
  const calculateBtnIconSvg = calculateButtonIconSVG?.trim()
    ? sanitizeSVG(calculateButtonIconSVG)
    : ''

  const sectionId = sanitizeAnchorId(anchorId) || undefined

  return (
    <>
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      <div
        id={sectionId}
        data-bloque-imc-senda-font={styleId}
        className="relative w-full min-w-0 min-h-screen flex items-start justify-center px-4 md:px-6 pt-24 pb-12 overflow-x-hidden md:pt-28 md:pb-12 md:h-[690px] md:min-h-[690px]"
        style={{
          background: showResult || showHighBMI ? backgroundColor || '#f5f5f5' : defaultBackground,
          ...(backgroundImageUrl
            ? {
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }
            : {}),
          ...fontStyle,
        }}
      >
        <div
          className={cn(
            'w-full mx-auto flex justify-center',
            !disableInnerContainer && 'max-w-7xl',
          )}
        >
          {!showResult && !showHighBMI ? (
            <div
              className="rounded-3xl flex flex-col items-start justify-center w-full max-w-[327px] min-h-[602px] p-6 box-border md:w-full md:max-w-[1100px] md:min-h-[350px] md:h-[430px] md:py-12 md:px-0 md:gap-8 md:items-center"
              style={{
                backgroundColor: defaultCardBackground,
              }}
            >
              <div
                data-bloque-imc-calc-title-desc
                className="flex flex-col justify-center w-[279px] min-h-[236px] shrink-0 mb-6 md:w-[680px] md:min-h-[158px] md:mb-0 md:mx-auto"
              >
                <div className="flex flex-col justify-center w-full h-full min-h-0">
                  {title ? (
                    <div
                      className="text-left md:text-center max-w-full break-words mb-0"
                      style={{ color: defaultTextColor }}
                    >
                      <RichText
                        data={title}
                        enableGutter={false}
                        enableProse={false}
                        className="text-2xl font-bold md:text-3xl"
                      />
                    </div>
                  ) : null}
                  {description ? (
                    <div
                      className="text-left md:text-center break-words"
                      style={{ color: defaultTextColor }}
                    >
                      <RichText
                        data={description}
                        enableGutter={false}
                        enableProse={false}
                        className="text-sm leading-relaxed md:text-base"
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col items-center w-full flex-1 min-w-0 md:flex-initial md:w-[414px] md:h-[152px] md:flex md:flex-col md:justify-between md:items-center">
                <div className="flex flex-col gap-4 w-full max-w-[279px] md:flex-row md:max-w-[414px] md:w-[414px] md:gap-3 md:flex-1 md:items-end md:justify-between">
                  <div className="flex flex-col w-full md:w-[201px] md:shrink-0">
                    <label
                      htmlFor="height"
                      className="block text-xs md:text-sm font-normal mb-2 md:mb-1.5 text-left"
                      style={{ color: defaultLabelColor }}
                    >
                      {heightLabel}
                    </label>
                    <input
                      id="height"
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="ejemplo: 165"
                      className="w-full h-[48px] px-3 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm md:w-[201px] md:min-w-[201px]"
                      style={{
                        border: '1px solid #B8B5AE',
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-[201px] md:shrink-0">
                    <label
                      htmlFor="weight"
                      className="block text-xs md:text-sm font-normal mb-2 md:mb-1.5 text-left"
                      style={{ color: defaultLabelColor }}
                    >
                      {weightLabel}
                    </label>
                    <input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="ejemplo: 92"
                      className="w-full h-[48px] px-3 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm md:w-[201px] md:min-w-[201px]"
                      style={{
                        border: '1px solid #B8B5AE',
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6 w-full max-w-[279px] md:mt-6 md:max-w-none md:shrink-0">
                  <button
                    onClick={calculateBMI}
                    className="rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm text-white shrink-0 w-[149px] min-w-[149px] max-w-[149px] h-[38px] min-h-[38px] max-h-[38px] md:w-[153px] md:min-w-[153px] md:max-w-none md:h-[48px] md:min-h-[48px] md:max-h-none whitespace-nowrap"
                    style={{
                      backgroundColor: height && weight ? defaultHighBMIButtonColor : defaultCalculateButtonColor,
                      color: height && weight ? defaultHighBMIButtonTextColor : defaultCalculateButtonTextColor,
                      ...fontStyle,
                    }}
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.disabled) {
                        e.currentTarget.style.opacity = '0.9'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    disabled={!height || !weight}
                  >
                    <span>{calculateButtonText}</span>
                    {calculateBtnIconSvg ? (
                      <span
                        data-bloque-imc-calc-btn-icon
                        className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                        style={{ color: 'inherit' }}
                        aria-hidden
                        dangerouslySetInnerHTML={{ __html: calculateBtnIconSvg }}
                      />
                    ) : null}
                  </button>
                </div>
              </div>
            </div>
          ) : showResult ? (
            <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center min-w-0">
              <div
                className="rounded-3xl flex items-center justify-center w-full max-w-[327px] min-h-[570px] p-6 box-border md:w-full md:max-w-[1100px] md:h-[472px] md:min-h-[472px] md:p-10"
                style={{ backgroundColor: defaultResultCardBackground, ...fontStyle }}
              >
                <div className="flex flex-col items-start justify-start w-full h-full md:items-center overflow-visible">
                  {/* Contenedor conjunto resultado + RichText: 492 × 234 en desktop */}
                  <div className="flex flex-col items-start justify-center w-full max-w-[279px] min-h-0 shrink-0 text-left mt-4 md:mt-6 md:max-w-[492px] md:w-full md:h-[234px] md:items-center md:text-center">
                    {bmi !== null && (
                      /* Resultado: fuente del bloque o Saans; móvil izquierda, desktop centro */
                      <div
                        className="mb-4 w-full max-w-[675px] md:h-[52px] flex flex-wrap items-baseline justify-start text-left md:justify-center md:text-center"
                        style={{
                          color: defaultResultTextColor,
                          fontFamily: selectedFontFamily || 'Saans, sans-serif',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontSize: '2rem',
                          lineHeight: 1.25,
                          letterSpacing: 0,
                        }}
                      >
                        <span style={{ fontSize: '2.25rem' }}>
                          Tu IMC es de
                        </span>
                        <span className="inline-flex items-baseline ml-2">
                          <span style={{ fontSize: '2.75rem' }}>
                            {bmi.toFixed(1).replace('.', ',')}
                          </span>
                          <span style={{ fontSize: '1.5rem' }} className="ml-1">
                            kg/m2
                          </span>
                        </span>
                      </div>
                    )}

                    {resultContent ? (
                      <div
                        data-bloque-imc-result-desc
                        className="text-sm leading-relaxed md:text-base text-left flex-1 min-h-0 w-full md:flex md:items-start md:justify-center"
                        style={{ color: defaultResultTextColor }}
                      >
                        <RichText
                          data={resultContent}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    ) : null}
                  </div>

                  {/* Espaciador solo en móvil para separar descripción y botón (IMC < 25) */}
                  {resultButton && resultButton.length > 0 ? (
                    <div className="w-full shrink-0 h-24 md:h-0 md:min-h-0 md:overflow-hidden" aria-hidden />
                  ) : null}
                  {resultButton && resultButton.length > 0 ? (
                    <div className="flex justify-center shrink-0 w-full md:mt-10">
                      {resultButton.map((buttonItem, index) => {
                        const iconSvg = buttonItem.iconSVG?.trim()
                          ? sanitizeSVG(buttonItem.iconSVG)
                          : ''
                        return (
                          <div
                            key={index}
                            className="inline-flex items-center justify-center rounded-xl text-sm md:text-base font-medium transition-opacity hover:opacity-90 w-[154px] h-[38px] md:w-[170px] md:h-[48px]"
                            style={{
                              ...(defaultResultButtonColor && {
                                backgroundColor: defaultResultButtonColor,
                              }),
                              ...(defaultResultButtonTextColor && {
                                color: defaultResultButtonTextColor,
                              }),
                              ...fontStyle,
                            }}
                          >
                            <CMSLink
                              {...(buttonItem.link as React.ComponentProps<typeof CMSLink>)}
                              appearance="inline"
                              className="inline-flex items-center justify-center gap-2 w-full h-full"
                            >
                              {iconSvg ? (
                                <span
                                  className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                                  aria-hidden
                                  dangerouslySetInnerHTML={{ __html: iconSvg }}
                                />
                              ) : null}
                            </CMSLink>
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <HighBMIResultErrorBoundary
              fallback={
                <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center min-w-0">
                  <div
                    className="rounded-3xl flex items-center justify-center w-full max-w-[327px] min-h-[200px] p-6 box-border md:w-full md:max-w-[1100px] md:min-h-[200px] md:p-10"
                    style={{
                      backgroundColor: defaultHighBMICardBackground || '#f8f8f8',
                      color: defaultHighBMITextColor || '#000000',
                      ...fontStyle,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      {bmi !== null && (
                        <div
                          className="mb-4 w-full max-w-[675px] flex flex-wrap items-baseline justify-center text-center"
                          style={{
                            color: defaultHighBMITextColor || '#000000',
                            fontFamily: selectedFontFamily || 'Saans, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: '2rem',
                            lineHeight: 1.25,
                            letterSpacing: 0,
                            textAlign: 'center',
                          }}
                        >
                          <span style={{ fontSize: '2.25rem' }}>Tu IMC es de</span>
                          <span className="inline-flex items-baseline ml-2">
                            <span style={{ fontSize: '2.75rem' }}>
                              {bmi.toFixed(1).replace('.', ',')}
                            </span>
                            <span style={{ fontSize: '1.5rem' }} className="ml-1">
                              kg/m2
                            </span>
                          </span>
                        </div>
                      )}
                      <p className="mt-2 text-sm opacity-80">Contenido no disponible en este momento.</p>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center min-w-0">
                <div
                  className="rounded-3xl flex items-center justify-center w-full max-w-[327px] min-h-[722px] p-6 box-border md:w-full md:max-w-[1100px] md:min-h-[472px] md:h-[540px] md:p-10"
                  style={{
                    backgroundColor: defaultHighBMICardBackground,
                    ...fontStyle,
                  }}
                >
                  <div className="flex flex-col items-start justify-between w-full h-full max-w-full min-w-0 md:max-w-[908px] md:items-center">
                    <div className="flex flex-col items-start justify-center w-full max-w-[279px] min-h-[190px] min-w-0 text-left md:max-w-[492px] md:w-full md:min-h-[128px] md:items-center md:text-center">
                      {bmi !== null && (
                        <div
                          className="mb-6 w-full max-w-[675px] md:h-[52px] flex flex-wrap items-baseline justify-start text-left md:justify-center md:text-center md:mb-6"
                          style={{
                            color: defaultHighBMITextColor,
                            fontFamily: selectedFontFamily || 'Saans, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: '2rem',
                            lineHeight: 1.25,
                            letterSpacing: 0,
                          }}
                        >
                          <span style={{ fontSize: '2.25rem' }}>Tu IMC es de</span>
                          <span className="inline-flex items-baseline ml-2">
                            <span style={{ fontSize: '2.75rem' }}>
                              {bmi.toFixed(1).replace('.', ',')}
                            </span>
                            <span style={{ fontSize: '1.5rem' }} className="ml-1">
                              kg/m2
                            </span>
                          </span>
                        </div>
                      )}

                      {highBMIContent ? (
                        <div
                          data-bloque-imc-high-bmi-desc
                          className="text-sm md:text-base leading-relaxed text-left md:text-center ml-2 md:ml-0"
                          style={{ color: defaultHighBMITextColor }}
                        >
                          <RichText
                            data={highBMIContent}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="w-full max-w-[279px] md:max-w-[492px] h-[1px] my-4 md:my-5 bg-[#BDB6A8] shrink-0" />

                    <div className="w-full max-w-[279px] min-h-[342px] min-w-0 md:max-w-[492px] md:w-full md:min-h-[211px] flex flex-col md:flex-row gap-2 md:gap-6 md:items-center items-start">
                      {highBMIImageUrl ? (
                        <div className="flex justify-start md:justify-start shrink-0">
                          <div className="relative w-[127px] h-[118px] md:w-[176px] md:h-[163px] rounded-2xl overflow-hidden">
                            <Image
                              src={highBMIImageUrl}
                              alt={highBMIImageAlt}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      ) : null}

                      {highBMINameAndDescription ? (
                        <div
                          className="flex flex-col justify-center text-left min-w-0 flex-1 -mt-4 md:mt-0 w-[247px] max-w-full h-[88px] overflow-hidden md:w-auto md:h-auto md:overflow-visible ml-4 md:ml-0 text-sm md:text-base leading-relaxed [&_h1]:text-lg [&_h1]:md:text-xl [&_h2]:text-base [&_h2]:md:text-lg [&_h3]:text-sm [&_h3]:md:text-base"
                          style={{ color: defaultHighBMITextColor }}
                        >
                          <RichText
                            data={highBMINameAndDescription}
                            enableGutter={false}
                            enableProse={false}
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="w-full max-w-[279px] md:max-w-[492px] h-[1px] my-4 md:my-5 bg-[#BDB6A8] shrink-0" />

                    {highBMIButton && highBMIButton.length > 0 ? (
                      <div className="flex justify-center w-full">
                        {highBMIButton.map((buttonItem, index) => {
                          const iconSvg = buttonItem.iconSVG?.trim()
                            ? sanitizeSVG(buttonItem.iconSVG)
                            : ''
                          return (
                            <div
                              key={index}
                              className="inline-flex items-center justify-center rounded-xl text-sm md:text-base font-medium transition-opacity hover:opacity-90 w-[164px] h-[38px] md:w-[207px] md:h-[48px]"
                              style={{
                                ...(defaultHighBMIButtonColor && {
                                  backgroundColor: defaultHighBMIButtonColor,
                                }),
                                ...(defaultHighBMIButtonTextColor && {
                                  color: defaultHighBMIButtonTextColor,
                                }),
                                ...fontStyle,
                              }}
                            >
                              <CMSLink
                                {...(buttonItem.link as React.ComponentProps<typeof CMSLink>)}
                                appearance="inline"
                                className="inline-flex items-center justify-center gap-2 w-full h-full"
                              >
                                {iconSvg ? (
                                  <span
                                    className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                                    aria-hidden
                                    dangerouslySetInnerHTML={{ __html: iconSvg }}
                                  />
                                ) : null}
                              </CMSLink>
                            </div>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </HighBMIResultErrorBoundary>
          )}
        </div>
      </div>
    </>
  )
}
