'use client'

import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type CTA2SendaLink = {
  type?: 'reference' | 'custom' | null
  url?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: { slug?: string } | string | number
  } | null
  label?: string | null
}

type ButtonItem = {
  link?: CTA2SendaLink | null
  appearance?: 'default' | 'secondary' | 'outline' | 'link' | null
  size?: 'sm' | 'lg' | 'clear' | null
  iconSVG?: string | null
}

type ImageMedia = {
  url?: string | null
  alt?: string | null
  filename?: string | null
} | number

type Props = {
  blockType?: string
  anchorId?: string | null
  richText?: DefaultTypedEditorState | null
  buttons?: ButtonItem[] | null
  image?: ImageMedia | null
  invertLayout?: boolean | null
  backgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  buttonBackgroundColor?: string | null
  buttonTextColor?: string | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

function getImageUrl(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  return media.url ?? ''
}

function getImageAlt(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return 'CTA image'
  return media.alt || media.filename || 'CTA image'
}

export const CTA2SendaBlock: React.FC<Props> = (props) => {
  const {
    anchorId,
    richText,
    buttons,
    image,
    invertLayout,
    backgroundColor,
    textColor,
    boldTextColor,
    buttonBackgroundColor,
    buttonTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `cta2-senda-${uniqueId}`

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

    const containerRules: string[] = []
    if (useCustomFont && customFontFamilyName && isValidFontFile) {
      containerRules.push(`font-family: "${customFontFamilyName.replace(/"/g, '\\"')}" !important;`)
    } else if (selectedFontFamily && !useCustomFont) {
      containerRules.push(`font-family: ${selectedFontFamily} !important;`)
    }
    if (containerRules.length > 0) {
      const fontValue =
        useCustomFont && customFontFamilyName && isValidFontFile
          ? `"${customFontFamilyName.replace(/"/g, '\\"')}"`
          : selectedFontFamily && !useCustomFont
            ? selectedFontFamily
            : ''
      if (fontValue) {
        styles.push(
          `[data-cta2-senda-font="${styleId}"], [data-cta2-senda-font="${styleId}"] *, [data-cta2-senda-font="${styleId}"] a, [data-cta2-senda-font="${styleId}"] button, [data-cta2-senda-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
        )
      }
    }

    if (textColor) {
      styles.push(
        `[data-cta2-senda-font="${styleId}"], [data-cta2-senda-font="${styleId}"] p, [data-cta2-senda-font="${styleId}"] h1, [data-cta2-senda-font="${styleId}"] h2, [data-cta2-senda-font="${styleId}"] h3, [data-cta2-senda-font="${styleId}"] h4, [data-cta2-senda-font="${styleId}"] h5, [data-cta2-senda-font="${styleId}"] h6, [data-cta2-senda-font="${styleId}"] span:not(strong):not(b), [data-cta2-senda-font="${styleId}"] a { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `[data-cta2-senda-font="${styleId}"] strong, [data-cta2-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }

    // Botones: border-radius y colores opcionales de fondo y texto
    const btnBaseRules = ['border-radius: 0.75rem !important;']
    if (buttonBackgroundColor) btnBaseRules.push(`background-color: ${buttonBackgroundColor} !important;`)
    const btnSelector = `[data-cta2-senda-font="${styleId}"] .cta2-senda-btn-default, [data-cta2-senda-font="${styleId}"] .cta2-senda-btn-secondary`
    styles.push(`${btnSelector} { ${btnBaseRules.join(' ')} }`)
    if (buttonTextColor) {
      styles.push(
        `[data-cta2-senda-font="${styleId}"] .cta2-senda-btn-default, [data-cta2-senda-font="${styleId}"] .cta2-senda-btn-default *, [data-cta2-senda-font="${styleId}"] .cta2-senda-btn-secondary, [data-cta2-senda-font="${styleId}"] .cta2-senda-btn-secondary * { color: ${buttonTextColor} !important; }`,
      )
    }
    styles.push(
      `[data-cta2-senda-font="${styleId}"] .cta2-senda-btn-outline { border-radius: 0.75rem !important; }`,
    )

    // RichText: h1–h4 más gruesos y sub/sup como en Pricing_SENDA
    styles.push(
      `[data-cta2-senda-font="${styleId}"] .cta2-senda-richtext h1, [data-cta2-senda-font="${styleId}"] .cta2-senda-richtext h2, [data-cta2-senda-font="${styleId}"] .cta2-senda-richtext h3, [data-cta2-senda-font="${styleId}"] .cta2-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
    )
    styles.push(
      `[data-cta2-senda-font="${styleId}"] .cta2-senda-richtext h4 { font-weight: 900 !important; }`,
    )
    styles.push(
      `[data-cta2-senda-font="${styleId}"] sub, [data-cta2-senda-font="${styleId}"] sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const imageSrc = getImageUrl(image)
  const imageUrlResolved = imageSrc ? getMediaUrl(imageSrc) : ''
  const imageAlt = getImageAlt(image)

  const textContainerClass = invertLayout ? 'order-1 lg:order-2' : 'order-2 lg:order-1'
  const imageContainerClass = invertLayout ? 'order-2 lg:order-1' : 'order-1 lg:order-2'

  const buttonItems = Array.isArray(buttons) ? buttons.slice(0, 4) : []

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={anchorId?.trim() || undefined}
        data-cta2-senda-font={styleId}
        className="px-[5%] pt-8 pb-0 md:pt-14 lg:pt-16 md:pb-0"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-stretch">
            <div className={`${textContainerClass} flex flex-col lg:justify-center`} style={fontStyle}>
              {richText && (
                <div className="cta2-senda-richtext mb-5 md:mb-6 text-lg md:text-xl [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:md:text-4xl [&_h4]:lg:text-5xl [&_p]:text-lg [&_p]:md:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-lg [&_li]:md:text-xl">
                  <RichText data={richText} enableGutter={false} enableProse={false} />
                </div>
              )}

              {buttonItems.length > 0 && (
                <div
                  className={`mt-6 flex flex-wrap items-center gap-4 md:mt-8 ${invertLayout ? 'justify-end' : ''}`}
                >
                  {buttonItems.map((button, index) => {
                    const appearance = button?.appearance ?? (index === 0 ? 'default' : 'secondary')
                    const size = button?.size ?? (appearance === 'link' ? 'clear' : 'sm')
                    const iconSVG = button?.iconSVG ?? null
                    const btnClassName =
                      appearance === 'default'
                        ? 'cta2-senda-btn-default'
                        : appearance === 'secondary'
                          ? 'cta2-senda-btn-secondary'
                          : appearance === 'outline'
                            ? 'cta2-senda-btn-outline'
                            : undefined

                    return (
                      <CMSLink
                        key={index}
                        {...(button?.link as React.ComponentProps<typeof CMSLink>)}
                        label={undefined}
                        appearance={appearance}
                        size={size}
                        className={btnClassName}
                        style={fontStyle}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          {fontStyle ? (
                            <span style={fontStyle}>{button?.link?.label ?? 'Button'}</span>
                          ) : (
                            button?.link?.label ?? 'Button'
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
                    )
                  })}
                </div>
              )}
            </div>

            <div className={`${imageContainerClass} flex min-h-[280px] lg:min-h-[400px] overflow-hidden`}>
              {imageUrlResolved && (
                <Image
                  src={imageUrlResolved}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover object-bottom"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
