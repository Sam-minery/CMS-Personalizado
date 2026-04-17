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
import { cn } from '@/utilities/ui'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import { expandFontGroupRichTextFields } from '@/utilities/expandFontGroupRichTextFields'
import {
  appendFontGroupHeadingMarginRulesResponsive,
  appendFontGroupLineHeightRulesResponsive,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type FontGroupFontEntry = { font?: FontFile | number; variant?: string }

type FontGroupData = {
  fontFamilyName?: string | null
  fonts?: FontGroupFontEntry[] | null
  typography?: FontGroupTypography | null
  typographyMobile?: FontGroupTypography | null
  headingMargins?: FontGroupHeadingMargins | null
  headingMarginsMobile?: FontGroupHeadingMargins | null
  lineHeights?: FontGroupLineHeights | null
  lineHeightsMobile?: FontGroupLineHeights | null
}

function normalizeFooterFontGroup(raw: unknown): FontGroupData | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  let o = raw as Record<string, unknown>
  const rel = o.relationTo
  const inner = o.value
  if (
    inner &&
    typeof inner === 'object' &&
    !Array.isArray(inner) &&
    (rel === 'font-groups' || rel === 'fontGroups')
  ) {
    o = inner as Record<string, unknown>
  }
  return expandFontGroupRichTextFields(o as Record<string, unknown>) as FontGroupData
}

const FOOTER_FG_RICHTEXT =
  '[&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

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
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
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
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `footer-senda-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeFooterFontGroup(fontGroup)
      : null

  const fontGroupTypographyActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename ? customFontFileObj.filename.replace(/\.[^.]+$/, '') : undefined)

  const getFontFamily = () => {
    if (fontGroupObj?.fontFamilyName) return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }

  const selectedFontFamily = getFontFamily()
  useGoogleFont(
    fontGroupTypographyActive || useCustomFont ? undefined : selectedFontFamily,
  )

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []
    const sel = `[data-fs-footer="${styleId}"]`
    const mainRichtext = `${sel} .footer-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`

    const pushFontScopes = (fontValue: string) => {
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )
    }

    if (fontGroupTypographyActive && fontGroupObj) {
      const familyName = fontGroupObj.fontFamilyName!.replace(/"/g, '\\"')
      const fontEntries = (fontGroupObj.fonts || []).filter(
        (e): e is FontGroupFontEntry & { font: FontFile } =>
          e?.font != null && typeof e.font === 'object' && e.font?.url != null,
      )
      for (const entry of fontEntries) {
        const url = getMediaUrl(entry.font.url).replace(/([^:]\/)\/+/g, '$1')
        const variant = entry.variant || 'regular'
        const { weight, style: fontStyleCss } = FONT_GROUP_VARIANT_CSS[variant] ?? {
          weight: '400',
          style: 'normal',
        }
        const formatMatch = url.match(/\.(woff2?|ttf|otf)(\?.*)?$/i)
        const format = formatMatch
          ? formatMatch[1].toLowerCase() === 'woff2'
            ? 'woff2'
            : formatMatch[1].toLowerCase() === 'woff'
              ? 'woff'
              : formatMatch[1].toLowerCase() === 'ttf'
                ? 'truetype'
                : 'opentype'
          : 'woff2'
        if (!formatMatch) continue
        styles.push(`
          @font-face {
            font-family: "${familyName}";
            src: url("${url}") format("${format}");
            font-weight: ${weight};
            font-style: ${fontStyleCss};
            font-display: swap;
          }
        `)
      }
      pushFontScopes(`"${fontGroupObj.fontFamilyName!.replace(/"/g, '\\"')}"`)

      const typo = fontGroupObj.typography
      if (typo) {
        if (typo.h1)
          styles.push(`${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${typo.h1} !important; }`)
        if (typo.h2)
          styles.push(`${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${typo.h2} !important; }`)
        if (typo.h3)
          styles.push(`${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${typo.h3} !important; }`)
        if (typo.h4)
          styles.push(`${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${typo.h4} !important; }`)
        if (typo.h5)
          styles.push(`${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${typo.h5} !important; }`)
        if (typo.h6)
          styles.push(`${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${typo.h6} !important; }`)
        appendTypographyBodyListSizeRules(typo, mainRichtext, planRichtext, payloadRichtext, (rule) =>
          styles.push(rule),
        )
        if (typo.caption) {
          styles.push(
            `${mainRichtext} .caption, ${payloadRichtext} .caption { font-size: ${typo.caption} !important; }`,
          )
          styles.push(
            `${mainRichtext} p .caption, ${mainRichtext} .payload-richtext .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${typo.caption} !important; }`,
          )
          styles.push(`${sel} [data-text-size="caption"] { font-size: ${typo.caption} !important; }`)
        }
      }

      const typoMob = fontGroupObj.typographyMobile
      if (typoMob) {
        const mobRules: string[] = []
        const t = (v: string | null | undefined) => (typeof v === 'string' ? v.trim() : '') || ''
        if (t(typoMob.h1))
          mobRules.push(`${mainRichtext} h1, ${payloadRichtext} h1 { font-size: ${t(typoMob.h1)} !important; }`)
        if (t(typoMob.h2))
          mobRules.push(`${mainRichtext} h2, ${payloadRichtext} h2 { font-size: ${t(typoMob.h2)} !important; }`)
        if (t(typoMob.h3))
          mobRules.push(`${mainRichtext} h3, ${payloadRichtext} h3 { font-size: ${t(typoMob.h3)} !important; }`)
        if (t(typoMob.h4))
          mobRules.push(`${mainRichtext} h4, ${payloadRichtext} h4 { font-size: ${t(typoMob.h4)} !important; }`)
        if (t(typoMob.h5))
          mobRules.push(`${mainRichtext} h5, ${payloadRichtext} h5 { font-size: ${t(typoMob.h5)} !important; }`)
        if (t(typoMob.h6))
          mobRules.push(`${mainRichtext} h6, ${payloadRichtext} h6 { font-size: ${t(typoMob.h6)} !important; }`)

        appendTypographyBodyListSizeRules(typoMob, mainRichtext, planRichtext, payloadRichtext, (rule) =>
          mobRules.push(rule),
        )

        const capM = t(typoMob.caption)
        if (capM) {
          mobRules.push(
            `${mainRichtext} .caption, ${payloadRichtext} .caption { font-size: ${capM} !important; }`,
          )
          mobRules.push(
            `${mainRichtext} p .caption, ${mainRichtext} .payload-richtext .caption, ${mainRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${capM} !important; }`,
          )
          mobRules.push(`${sel} [data-text-size="caption"] { font-size: ${capM} !important; }`)
        }

        if (mobRules.length > 0) {
          styles.push(
            `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) {\n${mobRules.join('\n')}\n}`,
          )
        }
      }

      appendFontGroupHeadingMarginRulesResponsive(
        fontGroupObj.headingMargins,
        fontGroupObj.headingMarginsMobile,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )
      appendFontGroupLineHeightRulesResponsive(
        fontGroupObj.lineHeights,
        fontGroupObj.lineHeightsMobile,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )

      styles.push(
        `${mainRichtext} h1, ${mainRichtext} h2, ${mainRichtext} h3, ${mainRichtext} h4, ${payloadRichtext} h1, ${payloadRichtext} h2, ${payloadRichtext} h3, ${payloadRichtext} h4 { letter-spacing: 0.02em; }`,
      )
      const weightMap: Record<string, string> = {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        heavy: '800',
      }
      for (const [key, w] of Object.entries(weightMap)) {
        styles.push(`${sel} [data-text-weight="${key}"] { font-weight: ${w} !important; }`)
        styles.push(
          `${mainRichtext} [data-text-weight="${key}"], ${payloadRichtext} [data-text-weight="${key}"] { font-weight: ${w} !important; }`,
        )
      }
    } else if (useCustomFont && fontFileUrl && customFontFamilyName && isValidFontFile) {
      styles.push(`
        @font-face {
          font-family: "${customFontFamilyName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `)
      pushFontScopes(`"${customFontFamilyName.replace(/"/g, '\\"')}"`)
    } else if (selectedFontFamily) {
      pushFontScopes(selectedFontFamily)
    }

    if (textColor) {
      styles.push(
        `${sel}, ${sel} p, ${sel} a, ${sel} span:not(strong):not(b) { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `${sel} .footer-senda-richtext strong, ${sel} .footer-senda-richtext b, ${sel} strong, ${sel} b { color: ${boldTextColor} !important; }`,
      )
    }

    if (!fontGroupTypographyActive) {
      styles.push(
        `${sel} .footer-senda-richtext h1, ${sel} .footer-senda-richtext h2, ${sel} .footer-senda-richtext h3, ${sel} .footer-senda-richtext h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(`${sel} .footer-senda-richtext h4 { font-weight: 900 !important; }`)
    }
    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    return styles.join('\n')
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const richtextWrap = (className?: string) =>
    cn(
      'footer-senda-richtext',
      fontGroupTypographyActive && FOOTER_FG_RICHTEXT,
      className,
    )

  const logoMedia = logo?.media && typeof logo.media === 'object' ? logo.media : null
  const logoUrl = logoMedia?.url ?? ''
  const logoHref = logo?.link ? getHref(logo.link) : '#'
  const isLogoAnchor = logo?.link?.type === 'anchor' && logo?.link?.anchorId

  const columns = Array.isArray(columnLinks) ? columnLinks : []
  const social = Array.isArray(socialMediaLinks) ? socialMediaLinks : []
  const links = Array.isArray(footerLinks) ? footerLinks : []
  const hasLinkColumns = columns.some(
    (col) => Array.isArray(col.links) && col.links.length > 0,
  )

  const renderLink = (
    linkConfig: FooterLink | null | undefined,
    children: React.ReactNode,
    className?: string,
  ) => {
    if (!linkConfig) return <span className={className}>{children}</span>
    if (linkConfig.type === 'anchor' && linkConfig.anchorId) {
      return (
        <button type="button" className={className} onClick={() => scrollToAnchor(linkConfig.anchorId!)}>
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
        className="footer-senda-font-root px-[5%] py-12 md:py-18 lg:py-20"
        style={{
          ...(backgroundColor ? { backgroundColor } : {}),
          ...fontStyle,
        }}
      >
        <div className="container">
          <div className="flex flex-col gap-y-10 pb-10 md:pb-12 lg:gap-y-12 lg:pb-14" style={fontStyle}>
            <div className="grid max-w-full grid-cols-2 gap-x-6 gap-y-8 md:flex md:flex-row md:flex-wrap md:items-start md:gap-x-20 lg:gap-x-24">
              {columns.map((column, colIndex) => (
                <ul key={colIndex} className="flex min-w-0 flex-col gap-3 md:min-w-[220px] md:gap-4">
                  {Array.isArray(column.links) &&
                    column.links.map((item, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="block w-full border-b border-[#B8B5AE] pb-1 font-semibold md:pb-1.5 [&_a]:font-semibold [&_button]:font-semibold"
                      >
                        {renderLink(
                          item.link,
                          item.titleRichText ? (
                            <div className={richtextWrap()}>
                              <RichText
                                data={item.titleRichText}
                                enableGutter={false}
                                enableProse={false}
                              />
                            </div>
                          ) : null,
                          'inline-block',
                        )}
                      </li>
                    ))}
                </ul>
              ))}
              {social.length > 0 && (
                <ul
                  className={cn(
                    'flex min-w-0 flex-col gap-3 md:min-w-[220px] md:gap-4',
                    hasLinkColumns && 'md:ml-10 lg:ml-12',
                  )}
                >
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
                          <span className={richtextWrap('ml-2 inline-block')}>
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
                      <li key={idx} className="block w-full border-b border-[#B8B5AE] pb-1 md:pb-1.5">
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

          <div className="flex flex-col gap-8 pb-4 pt-6 text-sm md:flex-row md:items-center md:justify-between md:gap-4 md:gap-x-6 md:pb-0 md:pt-8">
            <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-0">
              {links.map((item, index) => (
                <li key={index} className="underline decoration-current underline-offset-1">
                  {renderLink(
                    item.link,
                    item.titleRichText ? (
                      <div className={richtextWrap()}>
                        <RichText
                          data={item.titleRichText}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    ) : null,
                    undefined,
                  )}
                </li>
              ))}
            </ul>
            {footerText && (
              <div
                className={richtextWrap(
                  'footer-senda-text [&_p]:m-0 [&_a]:underline [&_a]:decoration-current [&_a]:underline-offset-1',
                )}
              >
                <RichText data={footerText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
