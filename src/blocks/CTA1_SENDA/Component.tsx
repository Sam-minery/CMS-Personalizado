'use client'

import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type MediaLike = {
  url?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

type CTA1SendaLink = {
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
  title?: string | null
  variant?: 'primary' | 'secondary' | null
  link?: CTA1SendaLink | null
  backgroundColor?: string | null
  textColor?: string | null
  iconSVG?: string | null
}

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
}

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

export type CTA1SendaBlockProps = {
  content: DefaultTypedEditorState | null
  icon?: IconGroup | null
  buttons?: ButtonItem[] | null
  video?: { youtubeUrl?: string | null } | null
  backgroundType?: 'video' | 'image' | 'color' | null
  backgroundImage?: MediaLike | null
  backgroundColor?: string | null
  backgroundColorMode?: 'solid' | 'gradient' | null
  gradientStartColor?: string | null
  gradientEndColor?: string | null
  gradientDirection?:
    | 'to-right'
    | 'to-left'
    | 'to-bottom'
    | 'to-top'
    | 'diagonal-down'
    | 'diagonal-up'
    | null
  textColor?: string | null
  boldTextColor?: string | null
  buttonsAlignment?: 'left' | 'center' | 'right' | null
  blockHeightMode?: 'auto' | 'viewport' | 'custom' | null
  customBlockHeightPx?: number | null
  anchorId?: string | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || ''
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as { url?: string; sizes?: { large?: { url?: string }; medium?: { url?: string } } }
  const url =
    m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.url || ''
  return url ? getMediaUrl(url) : ''
}

export const CTA1SendaBlock: React.FC<CTA1SendaBlockProps> = ({
  content,
  icon: iconGroup,
  buttons,
  video,
  backgroundType = 'video',
  backgroundImage,
  backgroundColor,
  backgroundColorMode = 'solid',
  gradientStartColor,
  gradientEndColor,
  gradientDirection,
  textColor,
  boldTextColor,
  buttonsAlignment = 'center',
  blockHeightMode = 'viewport',
  customBlockHeightPx,
  anchorId,
  fontFamily,
  useCustomFont,
  customFontFile,
  customFontName,
}) => {
  const getYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : ''
  }

  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = getYouTubeVideoId(url)
    return videoId
      ? 'https://www.youtube.com/embed/' +
          videoId +
          '?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1'
      : ''
  }

  const embedUrl = video?.youtubeUrl ? getYouTubeEmbedUrl(video.youtubeUrl) : ''
  const backgroundImageUrl = getMediaUrlSafe(backgroundImage)

  const useIconMedia = iconGroup?.useMedia !== false && iconGroup?.mediaImage
  const iconUrl = useIconMedia ? getMediaUrlSafe(iconGroup?.mediaImage) : ''
  const iconSvgCode =
    !useIconMedia && iconGroup?.iconSVG?.trim()
      ? sanitizeSVG(iconGroup.iconSVG)
      : ''

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `cta1-senda-${uniqueId}`

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename
      ? customFontFileObj.filename.replace(/\.[^.]+$/, '')
      : undefined)

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
        `[data-cta1-senda-font="${styleId}"], [data-cta1-senda-font="${styleId}"] *, [data-cta1-senda-font="${styleId}"] a, [data-cta1-senda-font="${styleId}"] button, [data-cta1-senda-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
      )
    }

    if (textColor) {
      // Excluir enlaces de botones (.cta1-senda-buttons a) para que el color por botón se aplique
      styles.push(
        `[data-cta1-senda-font="${styleId}"], [data-cta1-senda-font="${styleId}"] p, [data-cta1-senda-font="${styleId}"] h1, [data-cta1-senda-font="${styleId}"] h2, [data-cta1-senda-font="${styleId}"] h3, [data-cta1-senda-font="${styleId}"] h4, [data-cta1-senda-font="${styleId}"] h5, [data-cta1-senda-font="${styleId}"] h6, [data-cta1-senda-font="${styleId}"] span:not(strong):not(b), [data-cta1-senda-font="${styleId}"] div, [data-cta1-senda-font="${styleId}"] a:not(.cta1-senda-buttons a), [data-cta1-senda-font="${styleId}"] ul, [data-cta1-senda-font="${styleId}"] ol, [data-cta1-senda-font="${styleId}"] li { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `[data-cta1-senda-font="${styleId}"] strong, [data-cta1-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const heightClasses =
    blockHeightMode === 'viewport' ? 'min-h-[60vh] md:min-h-[70vh]' : ''
  const customHeightStyle =
    blockHeightMode === 'custom' && customBlockHeightPx
      ? { minHeight: `${customBlockHeightPx}px` }
      : undefined

  const sectionId = sanitizeAnchorId(anchorId) || undefined

  return (
    <>
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      <section
        id={sectionId}
        data-cta1-senda-font={styleId}
        className={cn(
          'relative px-[5%] overflow-hidden flex items-center justify-center',
          heightClasses,
        )}
        style={customHeightStyle}
      >
        <div className="container relative z-10">
          <div className="w-full max-w-lg mx-auto text-center">
            {iconUrl ? (
              <div className="mb-5 md:mb-6 flex justify-center" aria-hidden>
                <span className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white">
                  <img
                    src={iconUrl}
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </span>
              </div>
            ) : iconSvgCode ? (
              <div
                className="mb-5 md:mb-6 flex justify-center w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full border-2 border-white items-center justify-center"
                aria-hidden
              >
                <span
                  className="inline-flex w-10 h-10 md:w-12 md:h-12 [&_svg]:w-full [&_svg]:h-full [&_svg]:block"
                  dangerouslySetInnerHTML={{ __html: iconSvgCode }}
                />
              </div>
            ) : null}
            <div
              className={cn(
                'mb-5 md:mb-6',
                !textColor &&
                  !boldTextColor &&
                  'text-white [&_p]:text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_span]:text-white [&_div]:text-white [&_strong]:text-white [&_em]:text-white [&_a]:text-white [&_ul]:text-white [&_ol]:text-white [&_li]:text-white',
                '[&_p]:text-[31px] [&_p]:leading-[30px] [&_p]:font-light',
                '[&_h1]:text-[50px] [&_h1]:leading-[56px] [&_h1]:font-light',
                '[&_h2]:text-[51px] [&_h2]:leading-[52px] [&_h2]:font-light',
                '[&_h3]:text-[42px] [&_h3]:leading-[40px] [&_h3]:font-light',
                '[&_h4]:text-[32px] [&_h4]:leading-[32px] [&_h4]:font-light',
              )}
            >
              {content ? <RichText data={content} enableGutter={false} /> : null}
            </div>
            <div
              className={cn(
                'cta1-senda-buttons mt-6 flex flex-wrap gap-4 md:mt-8',
                buttonsAlignment === 'center' && 'justify-center',
                buttonsAlignment === 'right' && 'justify-end',
              )}
            >
              {buttons?.map((button, index) => {
                const hasCustomBackground = !!button.backgroundColor
                const hasCustomTextColor = !!button.textColor
                const buttonStyle =
                  hasCustomBackground || hasCustomTextColor
                    ? {
                        ...(hasCustomBackground
                          ? { backgroundColor: button.backgroundColor || undefined }
                          : {}),
                        ...(hasCustomTextColor
                          ? { color: button.textColor || undefined }
                          : {}),
                        ...(button.variant === 'secondary' && hasCustomBackground
                          ? { borderColor: button.backgroundColor || undefined }
                          : {}),
                      }
                    : undefined

                const { label, ...linkProps } = button.link || {}
                const buttonIconSvg = button.iconSVG?.trim()
                  ? sanitizeSVG(button.iconSVG)
                  : ''

                const textColorStyle = hasCustomTextColor && button.textColor
                  ? { color: button.textColor }
                  : undefined

                return (
                  <CMSLink
                    key={index}
                    {...(linkProps as React.ComponentProps<typeof CMSLink>)}
                    appearance="inline"
                    className={cn(
                      'inline-flex items-center justify-center rounded-xl px-8 py-3 text-base font-medium shadow-sm transition-colors duration-200',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                      button.variant === 'secondary'
                        ? 'bg-transparent border border-white/70 text-white hover:bg-white/10'
                        : 'bg-white text-[#1b4bb8] hover:bg-white/90',
                    )}
                    style={{ ...fontStyle, ...buttonStyle }}
                  >
                    <span style={textColorStyle}>{button.title}</span>
                    {buttonIconSvg ? (
                      <span
                        className="ml-2 inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                        style={textColorStyle}
                        aria-hidden
                        dangerouslySetInnerHTML={{ __html: buttonIconSvg }}
                      />
                    ) : null}
                  </CMSLink>
                )
              })}
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          {backgroundType === 'video' && (embedUrl || video?.youtubeUrl) && (
            <>
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    height: '100vh',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                  }}
                  title="Video de fondo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="absolute inset-0 w-full h-full"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100vw',
                    height: '100vh',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectFit: 'cover',
                  }}
                  autoPlay
                  loop
                  muted
                >
                  <source src={video?.youtubeUrl || ''} type="video/mp4" />
                </video>
              )}
            </>
          )}

          {backgroundType === 'image' && backgroundImageUrl && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}

          {backgroundType === 'color' && (
            <>
              {backgroundColorMode === 'gradient' &&
              gradientStartColor &&
              gradientEndColor ? (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(${
                      gradientDirection === 'to-left'
                        ? 'to left'
                        : gradientDirection === 'to-bottom'
                          ? 'to bottom'
                          : gradientDirection === 'to-top'
                            ? 'to top'
                            : gradientDirection === 'diagonal-down'
                              ? '135deg'
                              : gradientDirection === 'diagonal-up'
                                ? '45deg'
                                : 'to right'
                    }, ${gradientStartColor} 0%, ${gradientEndColor} 100%)`,
                  }}
                />
              ) : backgroundColor ? (
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor }}
                />
              ) : null}
            </>
          )}

          {backgroundType !== 'color' && (
            <div className="absolute inset-0 bg-black/60" />
          )}
        </div>
      </section>
    </>
  )
}
