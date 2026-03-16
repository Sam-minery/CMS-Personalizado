'use client'

import React from 'react'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from 'react-icons/bi'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

/** Link ya resuelto: url viene con la ruta final (incluso para reference) */
type FooterLink = {
  type?: 'reference' | 'custom' | 'anchor' | null
  url?: string | null
  newTab?: boolean | null
  anchorId?: string | null
}

type ColumnLink = {
  titleRichText?: DefaultTypedEditorState | null
  link?: FooterLink | null
}

type ColumnLinks = {
  links?: ColumnLink[] | null
}

type SocialLink = {
  titleRichText?: DefaultTypedEditorState | null
  link?: FooterLink | null
  platform?: string | null
  iconSVG?: string | null
}

type FooterLinkItem = {
  titleRichText?: DefaultTypedEditorState | null
  link?: FooterLink | null
}

type Props = {
  logo: {
    media?: { url?: string; alt?: string } | number | null
    link?: FooterLink | null
  } | null
  columnLinks?: ColumnLinks[] | null
  socialMediaLinks?: SocialLink[] | null
  footerText?: DefaultTypedEditorState | null
  footerLinks?: FooterLinkItem[] | null
  backgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

function scrollToAnchor(id: string) {
  if (!id || typeof document === 'undefined') return
  const el = document.getElementById(id.trim())
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function getHref(link: FooterLink | null | undefined): string {
  if (!link) return '#'
  if (link.type === 'anchor') return '#'
  return link.url || '#'
}

const DEFAULT_SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: <BiLogoFacebookCircle className="size-6" />,
  instagram: <BiLogoInstagram className="size-6" />,
  twitter: <FaXTwitter className="size-6 p-0.5" />,
  linkedin: <BiLogoLinkedinSquare className="size-6" />,
  youtube: <BiLogoYoutube className="size-6" />,
}

export const Footer_SENDA: React.FC<Props> = (props) => {
  const {
    logo,
    columnLinks,
    socialMediaLinks,
    footerText,
    footerLinks,
    backgroundColor,
    textColor,
    boldTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `footer-senda-${uniqueId}`

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
        `[data-fs-footer="${styleId}"], [data-fs-footer="${styleId}"] *, [data-fs-footer="${styleId}"] a, [data-fs-footer="${styleId}"] span { font-family: ${fontValue} !important; }`,
      )
    }

    if (textColor) {
      styles.push(
        `[data-fs-footer="${styleId}"], [data-fs-footer="${styleId}"] p, [data-fs-footer="${styleId}"] a, [data-fs-footer="${styleId}"] span:not(strong):not(b) { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `[data-fs-footer="${styleId}"] strong, [data-fs-footer="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }

    styles.push(
      `[data-fs-footer="${styleId}"] h1, [data-fs-footer="${styleId}"] h2, [data-fs-footer="${styleId}"] h3, [data-fs-footer="${styleId}"] h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
    )
    styles.push(
      `[data-fs-footer="${styleId}"] h4 { font-weight: 900 !important; }`,
    )
    styles.push(
      `[data-fs-footer="${styleId}"] sub, [data-fs-footer="${styleId}"] sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const logoMedia = logo?.media && typeof logo.media === 'object' ? logo.media : null
  // URL del logo tal cual (ruta relativa del media), como Hero_SENDA/Layout_SENDA, para mismo origen en next/image
  const logoUrl = logoMedia?.url ?? ''
  const logoHref = logo?.link ? getHref(logo.link) : '#'
  const isLogoAnchor = logo?.link?.type === 'anchor' && logo?.link?.anchorId

  const columns = Array.isArray(columnLinks) ? columnLinks : []
  const social = Array.isArray(socialMediaLinks) ? socialMediaLinks : []
  const links = Array.isArray(footerLinks) ? footerLinks : []

  const renderLink = (
    linkConfig: FooterLink | null | undefined,
    children: React.ReactNode,
    className?: string,
  ) => {
    if (!linkConfig) return <span className={className}>{children}</span>
    if (linkConfig.type === 'anchor' && linkConfig.anchorId) {
      return (
        <button
          type="button"
          className={className}
          onClick={() => scrollToAnchor(linkConfig.anchorId!)}
        >
          {children}
        </button>
      )
    }
    const href = getHref(linkConfig)
    return (
      <CMSLink
        className={className}
        type="custom"
        url={href}
        newTab={linkConfig.newTab ?? undefined}
        appearance="link"
      >
        {children}
      </CMSLink>
    )
  }

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <footer
        data-fs-footer={styleId}
        className="px-[5%] py-12 md:py-18 lg:py-20"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container">
          {/* Desktop: columnas de links + social a la izquierda; luego logo abajo; luego footer links (izq) + footer text (derecha) */}
          {/* Mobile: columnas + social, luego logo, luego footer links (columna), luego footer text */}

          <div className="flex flex-col gap-y-10 pb-10 md:pb-12 lg:gap-y-12 lg:pb-14" style={fontStyle}>
            {/* Fila: columnas de links + social. Móvil: máx 2 columnas lado a lado; desktop: flex row */}
            <div className="grid max-w-full grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-row md:flex-wrap md:items-start md:gap-x-20 lg:gap-x-24">
              {columns.map((column, colIndex) => (
                <ul key={colIndex} className="flex min-w-0 flex-col gap-3 md:min-w-[220px] md:gap-4">
                  {Array.isArray(column.links) &&
                    column.links.map((item, linkIndex) => (
                      <li key={linkIndex} className="block w-full border-b border-current pb-1 font-semibold md:pb-1.5 [&_a]:font-semibold [&_button]:font-semibold">
                        {renderLink(
                          item.link,
                          item.titleRichText ? (
                            <RichText
                              data={item.titleRichText}
                              enableGutter={false}
                              enableProse={false}
                            />
                          ) : null,
                          'inline-block',
                        )}
                      </li>
                    ))}
                </ul>
              ))}
              {social.length > 0 && (
                <ul className="flex min-w-0 flex-col gap-3 md:min-w-[220px] md:gap-4 md:ml-10 lg:ml-12">
                  {social.map((s, idx) => {
                    const href = getHref(s.link)
                    const isAnchor = s.link?.type === 'anchor' && s.link?.anchorId
                    const iconSvg = s.iconSVG?.trim()
                    const normalizedSvg = iconSvg
                      ? sanitizeSVG(iconSvg).replace(/\sheight=["'][^"']*["']/gi, '')
                      : ''
                    const iconEl = normalizedSvg ? (
                      <span
                        className="inline-flex shrink-0 [&_svg]:size-6"
                        dangerouslySetInnerHTML={{ __html: normalizedSvg }}
                        aria-hidden
                      />
                    ) : (
                      DEFAULT_SOCIAL_ICONS[s.platform || 'facebook'] ?? DEFAULT_SOCIAL_ICONS.facebook
                    )
                    const content = (
                      <>
                        {iconEl}
                        {s.titleRichText && (
                          <span className="ml-2">
                            <RichText
                              data={s.titleRichText}
                              enableGutter={false}
                              enableProse={false}
                            />
                          </span>
                        )}
                      </>
                    )
                    return (
                      <li key={idx} className="block w-full border-b border-current pb-1 md:pb-1.5">
                        {isAnchor ? (
                          <button
                            type="button"
                            className="inline-flex items-center"
                            onClick={() => scrollToAnchor(s.link!.anchorId!)}
                          >
                            {content}
                          </button>
                        ) : (
                          <CMSLink
                            url={href}
                            appearance="link"
                            className="inline-flex items-center"
                            newTab={s.link?.newTab ?? undefined}
                          >
                            {content}
                          </CMSLink>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            {/* Logo: debajo de las columnas. Móvil: se adapta al ancho; desktop: tamaño fijo */}
            <div className="w-full md:w-auto">
              {isLogoAnchor ? (
                <button
                  type="button"
                  className="inline-block w-full md:w-auto"
                  onClick={() => scrollToAnchor(logo!.link!.anchorId!)}
                >
                  {logoUrl && (
                    <Image
                      src={logoUrl}
                      alt={logoMedia?.alt || 'Logo'}
                      width={1400}
                      height={420}
                      className="inline-block h-auto w-full max-w-full object-contain md:w-auto md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px]"
                    />
                  )}
                </button>
              ) : (
                <CMSLink
                  url={logoHref}
                  className="inline-block w-full md:w-auto"
                  newTab={logo?.link?.newTab ?? undefined}
                >
                  {logoUrl && (
                    <Image
                      src={logoUrl}
                      alt={logoMedia?.alt || 'Logo'}
                      width={1400}
                      height={420}
                      className="inline-block h-auto w-full max-w-full object-contain md:w-auto md:max-w-[900px] lg:max-w-[1200px] xl:max-w-[1400px]"
                    />
                  )}
                </CMSLink>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-current opacity-20" aria-hidden />

          {/* Footer links (izq) + footer text (derecha) en desktop; en móvil: links primero, luego text */}
          <div className="flex flex-col gap-8 pb-4 pt-6 text-sm md:flex-row md:items-center md:justify-between md:gap-4 md:gap-x-6 md:pb-0 md:pt-8">
            <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-0">
              {links.map((item, index) => (
                <li key={index} className="underline decoration-current underline-offset-1">
                  {renderLink(
                    item.link,
                    item.titleRichText ? (
                      <RichText
                        data={item.titleRichText}
                        enableGutter={false}
                        enableProse={false}
                      />
                    ) : null,
                    undefined,
                  )}
                </li>
              ))}
            </ul>
            {footerText && (
              <div className="footer-senda-text [&_p]:m-0 [&_a]:underline [&_a]:decoration-current [&_a]:underline-offset-1">
                <RichText data={footerText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
