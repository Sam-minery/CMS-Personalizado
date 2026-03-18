'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type HeroSendaLink = {
  type?: 'custom' | 'reference' | null
  url?: string | null
  label?: string | null
  newTab?: boolean | null
  appearance?: string | null
  reference?: { relationTo?: 'pages' | 'posts'; value?: Page | Post | string | number } | null
}

type LinkItem = {
  link: HeroSendaLink
}

type HeroSendaButton = {
  title?: string | null
  link?: HeroSendaLink
  appearance?: 'default' | 'secondary' | null
  size?: 'sm' | 'lg' | null
  iconSVG?: string | null
}

type HeroSendaImage = {
  useMedia?: boolean
  media?: Media | number | null
  url?: string | null
  alt?: string | null
}

type Props = {
  type?: string
  richText?: DefaultTypedEditorState
  links?: LinkItem[]
  heroSendaLeftButtons?: HeroSendaButton[] | null
  heroSendaImage?: HeroSendaImage | null
  heroSendaImageButton?: { link?: HeroSendaLink; iconSVG?: string | null; useVidivAgent?: boolean | null } | null
  heroSendaBackgroundColor?: string | null
  heroSendaTextColor?: string | null
  heroSendaBoldTextColor?: string | null
  heroSendaButtonBackgroundColor?: string | null
  heroSendaButtonTextColor?: string | null
  heroSendaButton2BackgroundColor?: string | null
  heroSendaButton2TextColor?: string | null
  heroSendaButton3BackgroundColor?: string | null
  heroSendaButton3TextColor?: string | null
  heroSendaFontFamily?: string | null
  heroSendaUseCustomFont?: boolean
  heroSendaCustomFontFile?: FontFile | number | null
  heroSendaCustomFontName?: string | null
}

export const Hero_SENDA: React.FC<Props> = (props) => {
  const {
    richText,
    links,
    heroSendaLeftButtons,
    heroSendaImage,
    heroSendaImageButton,
    heroSendaBackgroundColor,
    heroSendaTextColor,
    heroSendaBoldTextColor,
    heroSendaButtonBackgroundColor,
    heroSendaButtonTextColor,
    heroSendaButton2BackgroundColor,
    heroSendaButton2TextColor,
    heroSendaButton3BackgroundColor,
    heroSendaButton3TextColor,
    heroSendaFontFamily,
    heroSendaUseCustomFont,
    heroSendaCustomFontFile,
    heroSendaCustomFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `hero-senda-${uniqueId}`

  const customFontFileObj =
    heroSendaCustomFontFile && typeof heroSendaCustomFontFile === 'object'
      ? heroSendaCustomFontFile
      : null
  const customFontFamilyName =
    heroSendaCustomFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename ? customFontFileObj.filename.replace(/\.[^.]+$/, '') : undefined)

  const getFontFamily = () => {
    if (heroSendaUseCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (heroSendaFontFamily && heroSendaFontFamily !== 'default') return heroSendaFontFamily
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
    if (heroSendaUseCustomFont && fontFileUrl && customFontFamilyName && isValidFontFile) {
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
    if (heroSendaUseCustomFont && customFontFamilyName && isValidFontFile) {
      containerRules.push(`font-family: "${customFontFamilyName.replace(/"/g, '\\"')}" !important;`)
    } else if (selectedFontFamily && !heroSendaUseCustomFont) {
      containerRules.push(`font-family: ${selectedFontFamily} !important;`)
    }
    if (containerRules.length > 0) {
      const fontValue =
        heroSendaUseCustomFont && customFontFamilyName && isValidFontFile
          ? `"${customFontFamilyName.replace(/"/g, '\\"')}"`
          : selectedFontFamily && !heroSendaUseCustomFont
            ? selectedFontFamily
            : ''
      if (fontValue) {
        styles.push(
          `[data-hero-senda-font="${styleId}"], [data-hero-senda-font="${styleId}"] *, [data-hero-senda-font="${styleId}"] a, [data-hero-senda-font="${styleId}"] button, [data-hero-senda-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
        )
      }
    }
    if (heroSendaTextColor) {
      styles.push(
        `[data-hero-senda-font="${styleId}"], [data-hero-senda-font="${styleId}"] p, [data-hero-senda-font="${styleId}"] h1, [data-hero-senda-font="${styleId}"] h2, [data-hero-senda-font="${styleId}"] h3, [data-hero-senda-font="${styleId}"] h4, [data-hero-senda-font="${styleId}"] h5, [data-hero-senda-font="${styleId}"] h6, [data-hero-senda-font="${styleId}"] span:not(strong):not(b), [data-hero-senda-font="${styleId}"] a { color: ${heroSendaTextColor} !important; }`,
      )
    }
    if (heroSendaBoldTextColor) {
      styles.push(
        `[data-hero-senda-font="${styleId}"] strong, [data-hero-senda-font="${styleId}"] b { color: ${heroSendaBoldTextColor} !important; }`,
      )
    }
    if (heroSendaButtonBackgroundColor || heroSendaButtonTextColor) {
      const btnBaseRules: string[] = ['border-radius: 0.75rem !important;']
      if (heroSendaButtonBackgroundColor) btnBaseRules.push(`background-color: ${heroSendaButtonBackgroundColor} !important;`)
      if (heroSendaButtonTextColor) {
        styles.push(
          `[data-hero-senda-font="${styleId}"] .hero-senda-btn-default, [data-hero-senda-font="${styleId}"] .hero-senda-btn-default * { color: ${heroSendaButtonTextColor} !important; }`,
        )
      }
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-default { ${btnBaseRules.join(' ')} }`)
    } else {
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-default { border-radius: 0.75rem !important; }`)
    }
    if (heroSendaButton2BackgroundColor || heroSendaButton2TextColor) {
      const btn2Rules: string[] = ['border-radius: 0.75rem !important;']
      if (heroSendaButton2BackgroundColor) btn2Rules.push(`background-color: ${heroSendaButton2BackgroundColor} !important;`)
      if (heroSendaButton2TextColor) {
        styles.push(
          `[data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary, [data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary * { color: ${heroSendaButton2TextColor} !important; }`,
        )
        btn2Rules.push(`border: 1px solid color-mix(in srgb, ${heroSendaButton2TextColor} 60%, transparent) !important;`)
      }
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary { ${btn2Rules.join(' ')} }`)
    } else {
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-secondary { border-radius: 0.75rem !important; }`)
    }
    if (heroSendaButton3BackgroundColor || heroSendaButton3TextColor) {
      const btn3Rules: string[] = ['border-radius: 1.25rem !important;', 'padding: 1.25rem 2rem !important;', 'min-height: 4rem !important;', 'display: inline-flex !important;', 'align-items: center !important;']
      if (heroSendaButton3BackgroundColor) btn3Rules.push(`background-color: ${heroSendaButton3BackgroundColor} !important;`)
      if (heroSendaButton3TextColor) {
        styles.push(
          `[data-hero-senda-font="${styleId}"] .hero-senda-btn-image, [data-hero-senda-font="${styleId}"] .hero-senda-btn-image * { color: ${heroSendaButton3TextColor} !important; }`,
        )
      }
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-image { ${btn3Rules.join(' ')} }`)
    } else {
      styles.push(`[data-hero-senda-font="${styleId}"] .hero-senda-btn-image { border-radius: 1.25rem !important; padding: 1.25rem 2rem !important; min-height: 4rem !important; display: inline-flex !important; align-items: center !important; }`)
    }
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const imageSrc =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media.url || ''
      : heroSendaImage?.url || ''
  const imageAlt =
    heroSendaImage?.useMedia && heroSendaImage?.media && typeof heroSendaImage.media === 'object'
      ? heroSendaImage.media.alt || heroSendaImage.alt || 'Hero image'
      : heroSendaImage?.alt || 'Hero image'

  const leftButtons = (Array.isArray(heroSendaLeftButtons) && heroSendaLeftButtons.length > 0)
    ? heroSendaLeftButtons.slice(0, 2)
    : (Array.isArray(links) ? links.slice(0, 2).map((item) => ({ link: item.link, appearance: 'default' as const, size: 'sm' as const, iconSVG: null })) : [])
  const imageButtonLink = heroSendaImageButton?.link
  const imageButtonIconSVG = heroSendaImageButton?.iconSVG
  const useVidivAgent = heroSendaImageButton?.useVidivAgent === true
  const showImageButtonArea = useVidivAgent || imageButtonLink != null

  const [footerInView, setFooterInView] = useState(false)
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { rootMargin: '0px 0px 50px 0px', threshold: 0 }
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {useVidivAgent && (
        <Script
          src="https://app.vidiv.net/widget.js"
          strategy="afterInteractive"
          type="text/javascript"
        />
      )}
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id="hero-senda"
        data-hero-senda-font={styleId}
        className="relative overflow-visible px-[5%] py-16 md:py-24 lg:py-28"
        style={
          heroSendaBackgroundColor
            ? { backgroundColor: heroSendaBackgroundColor }
            : undefined
        }
      >
        <div className="container relative">
          {/* Móvil: orden 1) RichText 2) 2 botones izquierda 3) Imagen 4) Tercer botón. Desktop: 2 columnas (texto+botones | imagen+botón). */}
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center [&>.hero-senda-col-left]:order-1 [&>.hero-senda-col-right]:order-2">
            <div className="hero-senda-col-left" style={fontStyle}>
              {richText && (
                <div className="hero-senda-richtext mb-5 md:mb-6 text-lg md:text-xl [&_h1]:text-6xl [&_h1]:font-bold [&_h1]:md:text-9xl [&_h1]:lg:text-10xl [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:md:text-8xl [&_h2]:lg:text-9xl [&_h3]:text-4xl [&_h3]:font-bold [&_h3]:md:text-7xl [&_h3]:lg:text-8xl [&_h4]:text-3xl [&_h4]:font-bold [&_h4]:md:text-6xl [&_h4]:lg:text-7xl [&_p]:text-lg [&_p]:md:text-xl [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-lg [&_ul]:md:text-xl [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-lg [&_ol]:md:text-xl [&_li]:text-lg [&_li]:md:text-xl">
                  <RichText
                    className=""
                    data={richText}
                    enableGutter={false}
                    enableProse={false}
                  />
                </div>
              )}
              {leftButtons.length === 2 && (
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                  {leftButtons.map((item, index) => {
                    const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
                    const label = (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
                    const appearance = (item as HeroSendaButton).appearance ?? (index === 0 ? 'default' : 'secondary')
                    const size = (item as HeroSendaButton).size ?? 'sm'
                    const iconSVG = (item as HeroSendaButton).iconSVG ?? null
                    const btnClassName = appearance === 'default' ? 'hero-senda-btn-default' : appearance === 'secondary' ? 'hero-senda-btn-secondary' : undefined
                    return (
                      <CMSLink
                        key={index}
                        {...(link as React.ComponentProps<typeof CMSLink>)}
                        label={undefined}
                        appearance={appearance}
                        size={size}
                        className={btnClassName}
                        style={fontStyle}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          {fontStyle ? <span style={fontStyle}>{label}</span> : label}
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
            <div className="hero-senda-col-right flex flex-col">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
              )}
            </div>
          </div>
          {/* Un solo botón izquierda: centrado en la parte inferior del hero */}
          {leftButtons.length === 1 && (() => {
            const item = leftButtons[0]
            const link = (item as HeroSendaButton).link ?? (item as LinkItem).link
            const label = (link as HeroSendaLink)?.label ?? (item as HeroSendaButton).title ?? 'Button'
            const appearance = (item as HeroSendaButton).appearance ?? 'default'
            const size = (item as HeroSendaButton).size ?? 'sm'
            const iconSVG = (item as HeroSendaButton).iconSVG ?? null
            const btnClassName = appearance === 'default' ? 'hero-senda-btn-default' : appearance === 'secondary' ? 'hero-senda-btn-secondary' : undefined
            return (
              <div className="mt-10 md:mt-12 flex justify-center">
                <CMSLink
                  {...(link as React.ComponentProps<typeof CMSLink>)}
                  label={undefined}
                  appearance={appearance}
                  size={size}
                  className={btnClassName}
                  style={fontStyle}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {fontStyle ? <span style={fontStyle}>{label}</span> : label}
                    {iconSVG ? (
                      <span
                        className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                        dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
                        aria-hidden
                      />
                    ) : null}
                  </span>
                </CMSLink>
              </div>
            )
          })()}
          {/* Tercer botón o widget Vidiv: posición fija; se oculta cuando el footer entra en pantalla para no taparlo */}
          {showImageButtonArea && (
            <div
              className={`hero-senda-image-btn-wrap fixed bottom-6 right-6 z-40 flex justify-end transition-opacity duration-300 ${footerInView ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
            >
              {useVidivAgent ? (
                React.createElement('vidiv-agent', { slug: 'senda-health-draft' })
              ) : (
                <CMSLink
                  {...(imageButtonLink as React.ComponentProps<typeof CMSLink>)}
                  label={undefined}
                  appearance="outline"
                  size="lg"
                  className="hero-senda-btn-image text-base md:text-lg p-3 md:p-4 md:px-6 md:py-3"
                  style={fontStyle}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="hidden md:inline">
                      {fontStyle ? <span style={fontStyle}>{(imageButtonLink as HeroSendaLink).label ?? ''}</span> : ((imageButtonLink as HeroSendaLink).label ?? '')}
                    </span>
                    {imageButtonIconSVG ? (
                      <span
                        className="inline-flex shrink-0 w-8 h-8 md:w-9 md:h-9 [&_svg]:w-full [&_svg]:h-full"
                        dangerouslySetInnerHTML={{ __html: sanitizeSVG(imageButtonIconSVG) }}
                        aria-hidden
                      />
                    ) : null}
                  </span>
                </CMSLink>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
