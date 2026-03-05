'use client'

import React, { useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type MediaLike = {
  url?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string }; small?: { url?: string } }
} | number

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
  resultButton?: ButtonItem[] | null
  backgroundColor?: string | null
  cardBackgroundColor?: string | null
  resultCardBackgroundColor?: string | null
  textColor?: string | null
  labelColor?: string | null
  calculateButtonColor?: string | null
  calculateButtonTextColor?: string | null
  resultButtonColor?: string | null
  resultButtonTextColor?: string | null
  highBMIContent?: DefaultTypedEditorState | null
  highBMIImage?: MediaLike | null
  highBMIName?: string | null
  highBMIDescription?: DefaultTypedEditorState | null
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

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string }; small?: { url?: string } }
  }
  const url =
    m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.sizes?.small?.url || m?.url || ''
  return url ? getMediaUrl(url) : ''
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
  resultButton,
  backgroundColor,
  cardBackgroundColor,
  resultCardBackgroundColor,
  textColor,
  labelColor,
  calculateButtonColor,
  calculateButtonTextColor,
  resultButtonColor,
  resultButtonTextColor,
  highBMIContent,
  highBMIImage,
  highBMIName,
  highBMIDescription,
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

  const highBMIImageUrl = getMediaUrlSafe(highBMIImage)
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
        className="relative w-full min-w-full min-h-screen flex items-center justify-center px-4 md:px-6 py-12"
        style={{
          background: showResult || showHighBMI ? backgroundColor || '#f5f5f5' : defaultBackground,
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
              className="rounded-3xl flex flex-col items-center justify-center w-full max-w-[327px] min-h-[602px] p-6 box-border md:max-w-[1100px] md:w-[1100px] md:min-h-[350px] md:h-[430px] md:py-12 md:px-0 md:gap-8"
              style={{
                backgroundColor: defaultCardBackground,
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div className="flex flex-col justify-center w-[279px] min-h-[236px] shrink-0 mb-6 md:w-[680px] md:min-h-[158px] md:mb-0 md:mx-auto">
                <div className="flex flex-col justify-center w-full h-full min-h-0">
                  {title ? (
                    <div
                      className="text-left md:text-center max-w-full break-words md:mb-2"
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
                      className="text-left md:text-center break-words mt-2 md:mt-0"
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
                      className="w-full h-[48px] px-3 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm text-sm md:w-[201px] md:min-w-[201px]"
                      style={{
                        border: '1px solid #B8B5AE',
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
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
                      className="w-full h-[48px] px-3 rounded-xl bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-sm text-sm md:w-[201px] md:min-w-[201px]"
                      style={{
                        border: '1px solid #B8B5AE',
                        boxShadow:
                          '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                      }}
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6 w-full max-w-[279px] md:mt-6 md:max-w-none md:shrink-0">
                  <button
                    onClick={calculateBMI}
                    className="rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm text-white shadow-sm hover:shadow-md w-full h-[48px] md:w-[153px] whitespace-nowrap"
                    style={{
                      backgroundColor: defaultCalculateButtonColor,
                      color: defaultCalculateButtonTextColor,
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
                        className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                        aria-hidden
                        dangerouslySetInnerHTML={{ __html: calculateBtnIconSvg }}
                      />
                    ) : null}
                  </button>
                </div>
              </div>
            </div>
          ) : showResult ? (
            <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center">
              <div
                className="rounded-3xl shadow-lg flex items-center justify-center w-full max-w-[327px] min-h-[570px] p-6 box-border md:max-w-[1100px] md:w-[1100px] md:h-[472px] md:min-h-[472px] md:p-10"
                style={{ backgroundColor: defaultResultCardBackground, ...fontStyle }}
              >
                <div className="flex flex-col items-start justify-between w-full h-full md:items-center">
                  <div className="flex flex-col items-start justify-center w-[279px] min-h-[416px] text-left md:w-[492px] md:min-h-[234px] md:items-center md:text-center">
                    {bmi !== null && (
                      <div className="mb-3 md:mb-2" style={{ color: defaultTextColor }}>
                        <p className="text-lg md:text-2xl font-normal text-inherit">
                          Tu IMC es de
                        </p>
                        <div className="w-[279px] min-h-[40px] flex items-center md:w-auto md:min-h-0">
                          <p className="mt-1 text-4xl md:text-5xl font-bold text-inherit">
                            {bmi.toFixed(1).replace('.', ',')}{' '}
                            <span className="text-sm md:text-xl font-normal align-top">
                              kg/m²
                            </span>
                          </p>
                        </div>
                      </div>
                    )}

                    {resultContent ? (
                      <div
                        className="text-sm leading-relaxed md:text-base text-left"
                        style={{ color: defaultTextColor }}
                      >
                        <RichText
                          data={resultContent}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    ) : null}
                  </div>

                  {resultButton && resultButton.length > 0 ? (
                    <div className="flex justify-center shrink-0 w-full">
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
            <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 flex justify-center">
              <div
                className="rounded-3xl shadow-lg flex items-center justify-center w-full max-w-[327px] min-h-[722px] p-6 box-border md:max-w-[1100px] md:w-[1100px] md:min-h-[472px] md:h-[540px] md:p-10"
                style={{
                  backgroundColor: defaultHighBMICardBackground,
                  ...fontStyle,
                }}
              >
                <div className="flex flex-col items-start justify-between w-full h-full max-w-full md:max-w-[908px] md:items-center">
                  <div className="flex flex-col items-start justify-center w-[279px] min-h-[190px] text-left md:w-[492px] md:min-h-[128px] md:items-center md:text-center">
                    {bmi !== null && (
                      <div
                        className="w-[279px] min-h-[40px] flex flex-col justify-center mb-3 md:mb-2 md:w-auto md:min-h-0"
                        style={{ color: defaultHighBMITextColor }}
                      >
                        <h2 className="font-sans text-2xl font-normal leading-tight md:text-4xl md:font-bold">
                          Tu IMC es de {bmi.toFixed(1).replace('.', ',')}
                          <span className="text-base md:text-lg font-normal align-top">
                            {' '}
                            kg/m²
                          </span>
                        </h2>
                      </div>
                    )}

                    {highBMIContent ? (
                      <div
                        className="text-sm md:text-base leading-relaxed"
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

                  <div className="w-[279px] md:w-[492px] h-[1px] my-4 md:my-5 bg-[#BDB6A8] shrink-0" />

                  <div className="w-[279px] min-h-[342px] md:w-[492px] md:min-h-[211px] flex flex-col md:flex-row gap-4 md:gap-6 md:items-center items-start">
                    {highBMIImageUrl ? (
                      <div className="flex justify-start md:justify-start shrink-0">
                        <div className="relative w-[127px] h-[118px] md:w-[176px] md:h-[163px] rounded-2xl overflow-hidden">
                          <Image
                            src={highBMIImageUrl}
                            alt={highBMIName || 'Imagen profesional'}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ) : null}

                    {(highBMIName || highBMIDescription) ? (
                      <div className="flex flex-col justify-center text-left min-w-0 md:flex-1">
                        {highBMIName ? (
                          <h3
                            className="text-lg md:text-xl font-bold mb-1"
                            style={{ color: defaultHighBMITextColor }}
                          >
                            {highBMIName}
                          </h3>
                        ) : null}

                        {highBMIDescription ? (
                          <div
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: defaultHighBMITextColor }}
                          >
                            <RichText
                              data={highBMIDescription}
                              enableGutter={false}
                              enableProse={false}
                            />
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="w-[279px] md:w-[492px] h-[1px] my-4 md:my-5 bg-[#BDB6A8] shrink-0" />

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
          )}
        </div>
      </div>
    </>
  )
}
