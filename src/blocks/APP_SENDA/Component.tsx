'use client'

import React from 'react'
import Image from 'next/image'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type LinkType = {
  type?: 'custom' | 'reference' | null
  url?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: { slug?: string } | string | number
  } | null
  label?: string | null
}

type ImageMedia =
  | {
      url?: string | null
      alt?: string | null
      sizes?: {
        medium?: { url?: string }
        small?: { url?: string }
      }
    }
  | number
  | null

/** URL de la imagen: prioriza .url del media, luego sizes. Misma lógica que Hero_SENDA/CTA2_SENDA: ruta tal cual para mismo origen en next/image en producción. */
function getImageUrl(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as { url?: string | null; sizes?: { medium?: { url?: string }; small?: { url?: string } } }
  return m.url ?? m.sizes?.medium?.url ?? m.sizes?.small?.url ?? ''
}

function getImageAlt(media: ImageMedia | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  return (media as { alt?: string }).alt ?? 'App image'
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

type ButtonItem = {
  title?: string | null
  link?: LinkType | null
  iconSVG?: string | null
}

export type AppSendaBlockProps = {
  blockType?: string
  anchorId?: string | null
  content?: DefaultTypedEditorState | null
  contentBelowImages?: DefaultTypedEditorState | null
  backgroundColor?: string | null
  cardBackgroundColor?: string | null
  contentColor?: string | null
  boldTextColor?: string | null
  contentBelowImagesColor?: string | null
  buttonsBackgroundColor?: string | null
  buttonsTextColor?: string | null
  image1?: ImageMedia
  image2?: ImageMedia
  buttons?: ButtonItem[] | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

export const AppSendaBlock: React.FC<AppSendaBlockProps> = (props) => {
  const {
    anchorId,
    content,
    contentBelowImages,
    backgroundColor,
    cardBackgroundColor,
    contentColor,
    boldTextColor,
    contentBelowImagesColor,
    buttonsBackgroundColor,
    buttonsTextColor,
    image1,
    image2,
    buttons,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `app-senda-${uniqueId}`

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
    const sel = `[data-app-senda-block="${styleId}"]`

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
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span { font-family: ${fontValue} !important; }`,
      )
    }

    /* Colores aplicados con !important para que se respeten en modo claro y oscuro (sin depender de color-scheme). */
    if (backgroundColor) {
      styles.push(`${sel}.app-senda-section { background-color: ${backgroundColor} !important; }`)
    }
    if (cardBackgroundColor) {
      styles.push(`${sel} .app-senda-card { background-color: ${cardBackgroundColor} !important; }`)
    }
    if (contentColor) {
      styles.push(
        `${sel} .app-senda-content-richtext, ${sel} .app-senda-content-richtext p, ${sel} .app-senda-content-richtext h1, ${sel} .app-senda-content-richtext h2, ${sel} .app-senda-content-richtext h3, ${sel} .app-senda-content-richtext h4, ${sel} .app-senda-content-richtext h5, ${sel} .app-senda-content-richtext h6, ${sel} .app-senda-content-richtext li, ${sel} .app-senda-content-richtext span, ${sel} .app-senda-content-richtext a { color: ${contentColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `${sel} strong, ${sel} b { color: ${boldTextColor} !important; }`,
      )
    }
    if (contentBelowImagesColor) {
      styles.push(
        `${sel} .app-senda-below-richtext, ${sel} .app-senda-below-richtext p, ${sel} .app-senda-below-richtext h1, ${sel} .app-senda-below-richtext h2, ${sel} .app-senda-below-richtext h3, ${sel} .app-senda-below-richtext span, ${sel} .app-senda-below-richtext a { color: ${contentBelowImagesColor} !important; }`,
      )
    }
    const btnRules: string[] = [
      'border-radius: 0.75rem !important;',
      `background-color: ${buttonsBackgroundColor || '#007AFF'} !important;`,
    ]
    styles.push(`${sel} .app-senda-btn { ${btnRules.join(' ')} }`)
    styles.push(
      `${sel} .app-senda-btn, ${sel} .app-senda-btn * { color: ${buttonsTextColor || '#ffffff'} !important; }`,
    )

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const image1Url = getImageUrl(image1)
  const image2Url = getImageUrl(image2)
  const image1Alt = getImageAlt(image1)
  const image2Alt = getImageAlt(image2)

  const titleRichTextClasses = cn(
    'app-senda-content-richtext [&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_p]:text-[15px] [&_p]:leading-relaxed [&_*]:text-left',
    !contentColor && '[&_p]:text-neutral-700',
  )
  const belowRichTextClasses = cn(
    'app-senda-below-richtext [&_p]:text-[15px] [&_p]:leading-relaxed [&_*]:text-left',
    !contentBelowImagesColor && '[&_p]:text-neutral-700',
  )

  const buttonList = Array.isArray(buttons) ? buttons.slice(0, 2) : []

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'app-senda')}
        data-app-senda-block={styleId}
        className="app-senda-section px-[5%] py-10 md:py-14"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container mx-auto">
          <div
            className="app-senda-card mx-auto flex w-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg min-h-[472px] max-w-[327px] md:max-w-[1100px] md:min-h-[764px] md:gap-8 md:p-10"
            style={cardBackgroundColor ? { backgroundColor: cardBackgroundColor } : undefined}
          >
            <div className="order-1 mx-auto mb-3 w-full max-w-[279px] min-h-[272px] text-left md:max-w-[563px] md:min-h-[214px]">
              {content && (
                <RichText
                  data={content}
                  enableGutter={false}
                  className={titleRichTextClasses}
                  style={contentColor ? { color: contentColor } : undefined}
                />
              )}
            </div>

            {buttonList.length > 0 && (
              <div className="order-2 mx-auto flex h-[38px] w-[248px] items-center justify-between gap-2 md:order-4 md:mt-0 md:h-[48px] md:w-auto md:gap-4">
                {buttonList.map((button, index) => {
                  const linkData = button?.link
                  if (!linkData) return null
                  const text = button?.title ?? linkData?.label ?? 'Button'
                  const iconSVG = button?.iconSVG
                  return (
                    <CMSLink
                      key={index}
                      {...(linkData as React.ComponentProps<typeof CMSLink>)}
                      label={undefined}
                      appearance="inline"
                      className={cn(
                        'app-senda-btn inline-flex h-[38px] w-[120px] items-center justify-center gap-1.5 rounded-xl text-sm font-medium shadow-sm transition-colors hover:opacity-90',
                        'md:h-[48px] md:w-[138px] md:text-base',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                      )}
                    >
                      <span style={fontStyle}>{text}</span>
                      {iconSVG ? (
                        <span
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
                          aria-hidden
                        />
                      ) : null}
                    </CMSLink>
                  )
                })}
              </div>
            )}

            <div className="order-3 flex w-[327px] min-w-[327px] -mx-6 flex-wrap items-center justify-center gap-6 md:mx-0 md:w-auto md:min-w-0 md:order-2 md:gap-10">
              {image1Url ? (
                <div className="relative hidden shrink-0 items-center justify-center md:flex md:h-[268px] md:w-[404px]">
                  <Image
                    src={image1Url}
                    alt={image1Alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 327px, 404px"
                  />
                </div>
              ) : null}
              {image2Url ? (
                <div className="relative flex h-[520px] w-full shrink-0 items-center justify-center md:hidden">
                  <Image
                    src={image2Url}
                    alt={image2Alt}
                    fill
                    className="object-contain"
                    sizes="327px"
                  />
                </div>
              ) : null}
            </div>

            {contentBelowImages && (
              <div className="order-4 mx-auto w-full text-left max-w-[279px] min-h-[120px] md:order-3 md:max-w-[563px] md:min-h-[60px]">
                <RichText
                  data={contentBelowImages}
                  enableGutter={false}
                  className={belowRichTextClasses}
                  style={contentBelowImagesColor ? { color: contentBelowImagesColor } : undefined}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
