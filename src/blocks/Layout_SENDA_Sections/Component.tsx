'use client'

import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { RxChevronRight } from 'react-icons/rx'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/** Tipos locales: sin depender de payload-types para que el bloque no falle si no está en enabledBlockSlugs. */
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
    value?: number | string | { slug?: string }
  } | null
  url?: string | null
  label?: string | null
}

/** Objeto mínimo de media (id o documento con url). */
type MediaLike = number | { url?: string; alt?: string } | null

type SectionIcon = {
  useMedia?: boolean | null
  mediaImage?: MediaLike
  iconSVG?: string | null
  alt?: string | null
}

type Section = {
  icon?: SectionIcon | null
  richText?: DefaultTypedEditorState | null
  enableLink?: boolean | null
  link?: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: number | unknown
    } | null
    url?: string | null
    label?: string | null
    appearance?: 'default' | 'outline' | null
  } | null
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

type LayoutSendaSectionsProps = {
  anchorId?: string | null
  richText?: DefaultTypedEditorState | null
  sections?: Section[] | null
  buttons?: Array<{ link?: LinkType | null }> | null
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

const getIconImageSrc = (icon: SectionIcon | null | undefined): string => {
  if (!icon || !icon.useMedia || !icon.mediaImage || typeof icon.mediaImage !== 'object') return ''
  return icon.mediaImage.url || ''
}

const getIconAlt = (icon: SectionIcon | null | undefined): string => {
  return icon?.alt || 'Icon'
}

const hasLink = (section: Section): boolean => {
  if (!section.enableLink || !section.link) return false
  if (section.link.type === 'reference' && section.link.reference?.value) return true
  if (section.link.type === 'custom' && section.link.url) return true
  return false
}

export const LayoutSendaSectionsBlock: React.FC<LayoutSendaSectionsProps> = (props) => {
  const {
    anchorId,
    richText,
    sections,
    buttons,
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
  const styleId = `layout-senda-sections-${uniqueId}`

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
        `[data-lss-font="${styleId}"], [data-lss-font="${styleId}"] *, [data-lss-font="${styleId}"] a, [data-lss-font="${styleId}"] button, [data-lss-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
      )
    }

    styles.push(
      `@media (max-width: 767px) { [data-lss-font="${styleId}"] .lss-main-richtext, [data-lss-font="${styleId}"] .lss-main-richtext * { text-align: left !important; } }`,
    )

    if (textColor) {
      styles.push(
        `[data-lss-font="${styleId}"], [data-lss-font="${styleId}"] p, [data-lss-font="${styleId}"] h1, [data-lss-font="${styleId}"] h2, [data-lss-font="${styleId}"] h3, [data-lss-font="${styleId}"] h4, [data-lss-font="${styleId}"] h5, [data-lss-font="${styleId}"] h6, [data-lss-font="${styleId}"] li, [data-lss-font="${styleId}"] span:not(strong):not(b), [data-lss-font="${styleId}"] a { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `[data-lss-font="${styleId}"] strong, [data-lss-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }

    if (buttonBackgroundColor || buttonTextColor) {
      const btnRules: string[] = ['border-radius: 0.75rem !important;']
      if (buttonBackgroundColor)
        btnRules.push(`background-color: ${buttonBackgroundColor} !important;`)
      styles.push(`[data-lss-font="${styleId}"] .lss-btn-filled { ${btnRules.join(' ')} }`)

      if (buttonTextColor) {
        styles.push(
          `[data-lss-font="${styleId}"] .lss-btn-filled, [data-lss-font="${styleId}"] .lss-btn-filled * { color: ${buttonTextColor} !important; }`,
        )
      }
    } else {
      styles.push(`[data-lss-font="${styleId}"] .lss-btn-filled { border-radius: 0.75rem !important; }`)
    }

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const renderSection = (section: Section, index: number) => {
    const icon = section.icon
    const iconImageSrc = icon ? getIconImageSrc(icon) : ''
    const iconSvg = icon?.useMedia ? null : icon?.iconSVG
    const normalizedIconSvg = iconSvg
      ? sanitizeSVG(iconSvg).replace(/\sheight=["'][^"']*["']/gi, '')
      : ''
    const svgWidthMatch = normalizedIconSvg.match(/\swidth=["']([^"']+)["']/i)
    const rawSvgWidth = svgWidthMatch?.[1]?.trim()
    const svgWidthCss = rawSvgWidth
      ? /^\d+(\.\d+)?$/.test(rawSvgWidth)
        ? `${rawSvgWidth}px`
        : rawSvgWidth
      : '48px'

    const sectionContent = (
      <div className="flex flex-col gap-4 transition-all duration-200 hover:opacity-90">
        {(iconImageSrc || normalizedIconSvg) && (
          <div className="flex min-h-12 min-w-12 flex-shrink-0 justify-start">
            {iconImageSrc ? (
              <span className="inline-flex size-12 overflow-hidden rounded-lg">
                <Image
                  src={iconImageSrc}
                  alt={getIconAlt(icon)}
                  width={48}
                  height={48}
                  className="size-full object-cover"
                />
              </span>
            ) : (
              <span
                className="relative inline-flex shrink-0 overflow-hidden"
                style={{ width: svgWidthCss, height: '48px' }}
                aria-hidden
              >
                <span
                  className="absolute inset-0 [&_svg]:block [&_svg]:h-full [&_svg]:w-full [&_svg]:max-w-none"
                  dangerouslySetInnerHTML={{ __html: normalizedIconSvg }}
                />
              </span>
            )}
          </div>
        )}
        {section.richText && (
          <div className="min-w-0 [&_h1]:m-0 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:m-0 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:m-0 [&_p]:m-0 [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-1 [&_ol]:list-decimal [&_ol]:pl-5">
            <RichText data={section.richText} enableGutter={false} enableProse={false} />
          </div>
        )}
      </div>
    )

    if (hasLink(section)) {
      return (
        <CMSLink
          key={index}
          {...(section.link as React.ComponentProps<typeof CMSLink>)}
          appearance="inline"
          className="block cursor-pointer rounded-lg py-4 pl-2 pr-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md sm:pl-2.5 md:p-4"
        >
          {sectionContent}
        </CMSLink>
      )
    }

    return (
      <div key={index} className="rounded-lg py-4 pl-2 pr-4 sm:pl-2.5 md:p-4">
        {sectionContent}
      </div>
    )
  }

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'layout-senda-sections')}
        data-lss-font={styleId}
        className="pl-2 pr-[5%] py-16 sm:pl-3 md:px-[5%] md:py-24 lg:py-20"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container">
          <div className="mb-12 md:mb-18 lg:mb-14 w-full" style={fontStyle}>
            {richText && (
              <div className="lss-main-richtext w-full [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
                <RichText data={richText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>

          {Array.isArray(sections) && sections.length > 0 && (
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4 lg:gap-y-12">
              {sections.map((section, index) => renderSection(section, index))}
            </div>
          )}

          {Array.isArray(buttons) && buttons.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-14">
              {buttons.map((button, index) => {
                const isSecondButton = index === 1
                if (isSecondButton) {
                  return (
                    <CMSLink
                      key={index}
                      {...(button.link as React.ComponentProps<typeof CMSLink>)}
                      appearance="link"
                      size="clear"
                    >
                      <RxChevronRight className="ml-1 inline-block" />
                    </CMSLink>
                  )
                }
                return (
                  <CMSLink
                    key={index}
                    {...(button.link as React.ComponentProps<typeof CMSLink>)}
                    appearance="secondary"
                    className="lss-btn-filled"
                    style={fontStyle}
                  />
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
