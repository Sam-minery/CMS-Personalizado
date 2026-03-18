'use client'

import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type LinkType = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: Page | Post | number | string
  } | null
  url?: string | null
  label?: string | null
}

type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: number | Media | null
  src?: string | null
  alt?: string | null
}

type SubHeading = {
  icon?: {
    useMedia?: boolean | null
    mediaImage?: number | Media | null
    iconSVG?: string | null
    alt?: string | null
  } | null
  content?: DefaultTypedEditorState | null
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'layout-senda'
}

type LayoutSendaProps = {
  anchorId?: string | null
  richText?: DefaultTypedEditorState | null
  image?: ImageGroup | null
  subHeadings?: SubHeading[] | null
  buttons?: Array<{
    link?: LinkType | null
    appearance?: 'default' | 'secondary' | 'outline' | 'link' | null
    size?: 'sm' | 'lg' | 'clear' | null
    iconSVG?: string | null
  }> | null
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

const getImageSrc = (imageGroup: ImageGroup | null | undefined): string => {
  if (!imageGroup) return ''
  if (imageGroup.useMedia && imageGroup.mediaImage && typeof imageGroup.mediaImage === 'object') {
    return imageGroup.mediaImage.url || ''
  }
  return imageGroup.src || ''
}

const getImageAlt = (imageGroup: ImageGroup | null | undefined): string => {
  if (!imageGroup) return 'Image'
  if (imageGroup.useMedia && imageGroup.mediaImage && typeof imageGroup.mediaImage === 'object') {
    return imageGroup.mediaImage.alt || imageGroup.alt || 'Image'
  }
  return imageGroup.alt || 'Image'
}

const getIconImageSrc = (subHeading: SubHeading | null | undefined): string => {
  const icon = subHeading?.icon
  if (!icon || !icon.useMedia || !icon.mediaImage || typeof icon.mediaImage !== 'object') return ''
  return icon.mediaImage.url || ''
}

const getIconAlt = (subHeading: SubHeading | null | undefined): string => {
  return subHeading?.icon?.alt || 'Icon'
}

export const LayoutSendaBlock: React.FC<LayoutSendaProps> = (props) => {
  const {
    anchorId,
    richText,
    image,
    subHeadings,
    buttons,
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
  const styleId = `layout-senda-${uniqueId}`

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object'
      ? customFontFile
      : null
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
    fontFileUrl &&
    /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

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
        `[data-layout-senda-font="${styleId}"], [data-layout-senda-font="${styleId}"] *, [data-layout-senda-font="${styleId}"] a, [data-layout-senda-font="${styleId}"] button, [data-layout-senda-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
      )
    }

    if (textColor) {
      styles.push(
        `[data-layout-senda-font="${styleId}"], [data-layout-senda-font="${styleId}"] p, [data-layout-senda-font="${styleId}"] h1, [data-layout-senda-font="${styleId}"] h2, [data-layout-senda-font="${styleId}"] h3, [data-layout-senda-font="${styleId}"] h4, [data-layout-senda-font="${styleId}"] h5, [data-layout-senda-font="${styleId}"] h6, [data-layout-senda-font="${styleId}"] li, [data-layout-senda-font="${styleId}"] span:not(strong):not(b), [data-layout-senda-font="${styleId}"] a { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `[data-layout-senda-font="${styleId}"] strong, [data-layout-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }

    if (buttonBackgroundColor || buttonTextColor) {
      const btnRules: string[] = ['border-radius: 0.75rem !important;']
      if (buttonBackgroundColor) btnRules.push(`background-color: ${buttonBackgroundColor} !important;`)
      styles.push(`[data-layout-senda-font="${styleId}"] .layout-senda-btn-filled { ${btnRules.join(' ')} }`)

      if (buttonTextColor) {
        styles.push(
          `[data-layout-senda-font="${styleId}"] .layout-senda-btn-filled, [data-layout-senda-font="${styleId}"] .layout-senda-btn-filled * { color: ${buttonTextColor} !important; }`,
        )
      }
    } else {
      styles.push(`[data-layout-senda-font="${styleId}"] .layout-senda-btn-filled { border-radius: 0.75rem !important; }`)
    }

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const mainImageSrc = getImageSrc(image)
  const mainImageAlt = getImageAlt(image)
  const buttonItems = Array.isArray(buttons) ? buttons.slice(0, 2) : []

  /** Sin invertir: móvil imagen arriba; desktop texto izq / imagen dcha. Invertido: móvil imagen arriba; desktop imagen izq / texto dcha. */
  const textContainerClass = invertLayout ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
  const imageContainerClass = invertLayout ? 'order-1 lg:order-1' : 'order-1 lg:order-2'

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId)}
        data-layout-senda-font={styleId}
        className="px-[5%] py-16 md:py-24 lg:py-28"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-20">
            <div className={textContainerClass} style={fontStyle}>
              {richText && (
                <div className="mb-6 md:mb-8 [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
                  <RichText data={richText} enableGutter={false} enableProse={false} />
                </div>
              )}

              {Array.isArray(subHeadings) && subHeadings.length > 0 && (
                <div className="grid auto-rows-min grid-cols-1 items-start gap-6 py-2 sm:grid-cols-2">
                  {subHeadings.map((subHeading, index) => {
                    const iconImageSrc = getIconImageSrc(subHeading)
                    const iconSvg = subHeading?.icon?.useMedia ? null : subHeading?.icon?.iconSVG
                    const normalizedIconSvg = iconSvg
                      ? sanitizeSVG(iconSvg).replace(/\sheight=["'][^"']*["']/gi, '')
                      : ''
                    const svgWidthMatch = normalizedIconSvg.match(/\swidth=["']([^"']+)["']/i)
                    const rawSvgWidth = svgWidthMatch?.[1]?.trim()
                    const svgWidthCss = rawSvgWidth
                      ? (/^\d+(\.\d+)?$/.test(rawSvgWidth) ? `${rawSvgWidth}px` : rawSvgWidth)
                      : '14px'
                    return (
                      <div key={index} className="self-start min-w-0">
                        {subHeading?.content && (
                          <div className="grid min-w-0 grid-cols-[auto,1fr] items-stretch gap-x-1">
                            {iconImageSrc ? (
                              <span className="inline-flex size-9 shrink-0 overflow-hidden rounded-md">
                                <Image
                                  src={iconImageSrc}
                                  alt={getIconAlt(subHeading)}
                                  width={48}
                                  height={48}
                                  className="size-full object-cover"
                                />
                              </span>
                            ) : normalizedIconSvg ? (
                              <span
                                className="relative inline-flex shrink-0 self-stretch pr-1 overflow-hidden"
                                style={{ width: svgWidthCss }}
                                aria-hidden
                              >
                                <span
                                  className="absolute inset-0 [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:max-w-none"
                                  dangerouslySetInnerHTML={{ __html: normalizedIconSvg }}
                                />
                              </span>
                            ) : null}
                            <div className="min-w-0 [&_h1]:m-0 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:m-0 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:m-0 [&_p]:m-0 [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-1 [&_ol]:list-decimal [&_ol]:pl-5">
                              <RichText data={subHeading.content} enableGutter={false} enableProse={false} />
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              {buttonItems.length > 0 && (
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  {buttonItems.map((button, index) => {
                    const appearance = button?.appearance ?? (index === 0 ? 'secondary' : 'link')
                    const size = button?.size ?? (appearance === 'link' ? 'clear' : 'sm')
                    const iconSVG = button?.iconSVG
                    const filledClass = appearance === 'link' ? undefined : 'layout-senda-btn-filled'

                    return (
                      <CMSLink
                        key={index}
                        {...(button?.link as React.ComponentProps<typeof CMSLink>)}
                        label={undefined}
                        appearance={appearance}
                        size={size}
                        className={filledClass}
                        style={fontStyle}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          {button?.link?.label ?? 'Button'}
                          {iconSVG ? (
                            <span
                              className="inline-flex size-5 shrink-0 [&_svg]:size-full"
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

            <div className={imageContainerClass}>
              {mainImageSrc && (
                <Image
                  src={mainImageSrc}
                  alt={mainImageAlt}
                  width={800}
                  height={600}
                  className="w-full rounded-xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
