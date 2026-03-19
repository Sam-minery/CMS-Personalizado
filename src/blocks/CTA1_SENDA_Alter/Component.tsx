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

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
}

type PopupButton = {
  link?: CTA1SendaLink | null
  backgroundColor?: string | null
  textColor?: string | null
}

type PhonePopupConfig = {
  usePopup?: boolean | null
  closeButtonSVG?: string | null
  title?: DefaultTypedEditorState | null
  titleTextColor?: string | null
  titleBoldTextColor?: string | null
  nameLabel?: string | null
  phoneLabel?: string | null
  button?: PopupButton | null
  termsRichText?: DefaultTypedEditorState | null
  termsTextColor?: string | null
  dataProtectionRichText?: DefaultTypedEditorState | null
  dataProtectionTextColor?: string | null
  gradientStartColor?: string | null
  gradientEndColor?: string | null
  gradientDirection?: 'to-br' | 'to-tr' | 'to-right' | 'to-bottom' | null
}

type ContactSection = {
  icon?: IconGroup | null
  labelRichText?: DefaultTypedEditorState | null
  /** Compatibilidad: antes era "label" (text) */
  label?: string | null
  labelTextColor?: string | null
  buttonBackgroundColor?: string | null
  buttonTextColor?: string | null
  iconSVG?: string | null
  link?: CTA1SendaLink | null
  phonePopup?: PhonePopupConfig | null
}

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

export type CTA1SendaAlterBlockProps = {
  /** Título y descripción en un único richText (área 929×120) */
  title?: DefaultTypedEditorState | null
  /** Compatibilidad: bloques antiguos tenían "description" por separado */
  description?: DefaultTypedEditorState | null
  /** Compatibilidad: bloques antiguos usaban "content" */
  content?: DefaultTypedEditorState | null
  videocallSection?: ContactSection | null
  phoneSection?: ContactSection | null
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

/** Acepta hex, rgb, rgba, nombres CSS, etc. y devuelve un valor seguro para usar en style o CSS. */
function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  // Permitir caracteres válidos en colores CSS: #, dígitos, letras, espacios, comas, ., (), %, rgb/hsl/etc.
  const safe = trimmed.replace(/[^#a-zA-Z0-9(),.%\s-]/g, '')
  return safe || ''
}

/**
 * Degradado ~70/30 (principal / secundario). OKLCH + color-mix para transición suave.
 */
function buildCtaSendaAlterGradient(
  direction: string,
  startColor: string,
  endColor: string,
): string {
  const a = sanitizeCssColor(startColor) || startColor.trim()
  const b = sanitizeCssColor(endColor) || endColor.trim()
  if (!a || !b) return ''
  return `linear-gradient(${direction} in oklch, ${a} 0%, ${a} 44%, color-mix(in oklch, ${a} 91%, ${b}) 54%, color-mix(in oklch, ${a} 72%, ${b}) 64%, color-mix(in oklch, ${a} 48%, ${b}) 74%, ${b} 88%, ${b} 100%)`
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as { url?: string; sizes?: { large?: { url?: string }; medium?: { url?: string } } }
  const url =
    m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.url || ''
  return url ? getMediaUrl(url) : ''
}

function SectionIcon({ iconGroup }: { iconGroup?: IconGroup | null }) {
  const useMedia = iconGroup?.useMedia !== false && iconGroup?.mediaImage
  const iconUrl = useMedia ? getMediaUrlSafe(iconGroup?.mediaImage) : ''
  const iconSvgCode =
    !useMedia && iconGroup?.iconSVG?.trim() ? sanitizeSVG(iconGroup.iconSVG) : ''
  if (!iconUrl && !iconSvgCode) return null
  return (
    <div className="mb-4 flex justify-center mx-auto shrink-0" aria-hidden>
      {iconUrl ? (
        <img src={iconUrl} alt="" className="object-contain" style={{ width: 118, height: 118 }} />
      ) : (
        <span
          className="inline-flex [&_svg]:w-full [&_svg]:h-full [&_svg]:block"
          style={{ width: 118, height: 118 }}
          dangerouslySetInnerHTML={{ __html: iconSvgCode }}
        />
      )}
    </div>
  )
}

export const CTA1SendaAlterBlock: React.FC<CTA1SendaAlterBlockProps> = ({
  title: titleProp,
  description,
  content,
  videocallSection,
  phoneSection,
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

  const title = titleProp ?? content
  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `cta1-senda-${uniqueId}`

  const [isPhonePopupOpen, setIsPhonePopupOpen] = React.useState(false)
  const [formName, setFormName] = React.useState('')
  const [formPhone, setFormPhone] = React.useState('')
  const [agreedToTerms, setAgreedToTerms] = React.useState(false)

  const usePhonePopup = !!phoneSection?.phonePopup?.usePopup
  const popup = phoneSection?.phonePopup

  const openPhonePopup = React.useCallback(() => setIsPhonePopupOpen(true), [])
  const closePhonePopup = React.useCallback(() => {
    setIsPhonePopupOpen(false)
    setFormName('')
    setFormPhone('')
    setAgreedToTerms(false)
  }, [])

  React.useEffect(() => {
    if (!isPhonePopupOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePhonePopup()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isPhonePopupOpen, closePhonePopup])

  const popupGradientDir =
    popup?.gradientDirection === 'to-tr'
      ? 'to top right'
      : popup?.gradientDirection === 'to-right'
        ? 'to right'
        : popup?.gradientDirection === 'to-bottom'
          ? 'to bottom'
          : 'to bottom right'

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
      // Aplicar solo a elementos de contenido (p, h1, span, a, ul, ol, li), excluyendo todo lo que esté dentro de .cta1-senda-buttons,
      // y sin aplicar a section/div para que el área de botones no herede el color y el color por botón se aplique bien
      styles.push(
        `[data-cta1-senda-font="${styleId}"] p:not(.cta1-senda-buttons p), [data-cta1-senda-font="${styleId}"] h1:not(.cta1-senda-buttons h1), [data-cta1-senda-font="${styleId}"] h2:not(.cta1-senda-buttons h2), [data-cta1-senda-font="${styleId}"] h3:not(.cta1-senda-buttons h3), [data-cta1-senda-font="${styleId}"] h4:not(.cta1-senda-buttons h4), [data-cta1-senda-font="${styleId}"] h5:not(.cta1-senda-buttons h5), [data-cta1-senda-font="${styleId}"] h6:not(.cta1-senda-buttons h6), [data-cta1-senda-font="${styleId}"] span:not(strong):not(b):not(.cta1-senda-buttons span), [data-cta1-senda-font="${styleId}"] a:not(.cta1-senda-buttons a), [data-cta1-senda-font="${styleId}"] ul:not(.cta1-senda-buttons ul), [data-cta1-senda-font="${styleId}"] ol:not(.cta1-senda-buttons ol), [data-cta1-senda-font="${styleId}"] li:not(.cta1-senda-buttons li) { color: ${textColor} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `[data-cta1-senda-font="${styleId}"] strong, [data-cta1-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
      // Dentro de los botones de sección, strong/b heredan el color del botón
      styles.push(
        `[data-cta1-senda-font="${styleId}"] .cta1-senda-buttons strong, [data-cta1-senda-font="${styleId}"] .cta1-senda-buttons b { color: inherit !important; }`,
      )
    }
    // Los textos descriptivos de secciones usan su propio color (labelTextColor); forzar herencia
    styles.push(
      `[data-cta1-senda-font="${styleId}"] .cta1-senda-section-label * { color: inherit !important; }`,
    )

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
          'relative px-[5%] overflow-hidden flex items-center justify-center py-10 md:py-0',
          heightClasses,
        )}
        style={customHeightStyle}
      >
        <div className="relative z-10 flex flex-col items-center w-full max-w-[929px] mx-auto">
          {/* Cabecera: título y descripción en un único richText — 929×120 */}
          <div
            className={cn(
              'w-full mx-auto text-center min-h-[120px] flex flex-col justify-center',
              !textColor &&
                !boldTextColor &&
                'text-white [&_p]:text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_h4]:text-white [&_h5]:text-white [&_h6]:text-white [&_span]:text-white [&_div]:text-white [&_strong]:text-white [&_em]:text-white [&_a]:text-white [&_ul]:text-white [&_ol]:text-white [&_li]:text-white',
              '[&_p]:text-lg md:text-xl [&_p]:leading-relaxed',
              '[&_h1]:text-3xl md:text-4xl [&_h1]:leading-tight [&_h1]:font-bold',
              '[&_h2]:text-2xl md:text-3xl [&_h2]:leading-tight [&_h2]:font-bold',
              '[&_h3]:text-xl md:text-2xl [&_h3]:font-semibold',
              '[&_h4]:text-lg md:text-xl [&_h4]:font-semibold',
            )}
            style={{
              maxWidth: 929,
              width: '100%',
              ...(textColor ? { color: textColor } : {}),
            }}
          >
            {title ? <RichText data={title} enableGutter={false} /> : null}
            {description ? (
              <div className="mt-2 [&_.RichText]:text-base md:[&_.RichText]:text-lg">
                <RichText data={description} enableGutter={false} />
              </div>
            ) : null}
          </div>

          {/* Contenedor secciones: 920×318 — centrado en todos los breakpoints */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-items-center w-full mx-auto min-h-[318px]"
            style={{ maxWidth: 920 }}
          >
            {/* Sección Videollamada — 436×318 */}
            <div
              className="flex flex-col items-center justify-center py-6 px-6 pb-10 md:pb-6 border-b-[3px] md:border-b-0 md:border-r-[3px] border-white/30 min-h-[318px] w-full max-w-[436px] mx-auto"
            >
              <SectionIcon iconGroup={videocallSection?.icon} />
              {(videocallSection?.labelRichText || videocallSection?.label) ? (
                <div
                  className={cn(
                    'cta1-senda-section-label text-lg md:text-xl font-normal mb-5 [&_.RichText]:text-inherit w-full text-center',
                  )}
                  style={{
                    color:
                      sanitizeCssColor(videocallSection.labelTextColor) ||
                      sanitizeCssColor(textColor) ||
                      'rgba(255,255,255,1)',
                  }}
                >
                  {videocallSection.labelRichText ? (
                    <RichText data={videocallSection.labelRichText} enableGutter={false} />
                  ) : (
                    <p>{videocallSection?.label}</p>
                  )}
                </div>
              ) : null}
              {videocallSection?.link && (() => {
                const link = videocallSection.link as React.ComponentProps<typeof CMSLink> & { label?: string }
                const { label: linkLabel, ...linkProps } = link
                const bg = sanitizeCssColor(videocallSection.buttonBackgroundColor) || 'rgba(255,255,255,0.2)'
                const fg = sanitizeCssColor(videocallSection.buttonTextColor) || '#ffffff'
                return (
                  <div className="cta1-senda-buttons">
                    <CMSLink
                      {...linkProps}
                      appearance="inline"
                      className="inline-flex items-center justify-center rounded-xl text-base font-medium border border-white/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2"
                      style={{
                        ...fontStyle,
                        width: 180,
                        height: 48,
                        backgroundColor: bg,
                        color: fg,
                      }}
                    >
                      {linkLabel ? <span>{linkLabel}</span> : null}
                      {videocallSection.iconSVG?.trim() ? (
                        <span
                          className="ml-2 inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          style={{ color: fg }}
                          aria-hidden
                          dangerouslySetInnerHTML={{
                            __html: sanitizeSVG(videocallSection.iconSVG),
                          }}
                        />
                      ) : null}
                    </CMSLink>
                  </div>
                )
              })()}
            </div>

            {/* Sección Teléfono — 436×318 */}
            <div
              className="flex flex-col items-center justify-center py-6 px-6 min-h-[318px] w-full max-w-[436px] mx-auto"
            >
              <SectionIcon iconGroup={phoneSection?.icon} />
              {(phoneSection?.labelRichText || phoneSection?.label) ? (
                <div
                  className={cn(
                    'cta1-senda-section-label text-lg md:text-xl font-normal mb-5 [&_.RichText]:text-inherit w-full text-center',
                  )}
                  style={{
                    color:
                      sanitizeCssColor(phoneSection.labelTextColor) ||
                      sanitizeCssColor(textColor) ||
                      'rgba(255,255,255,1)',
                  }}
                >
                  {phoneSection.labelRichText ? (
                    <RichText data={phoneSection.labelRichText} enableGutter={false} />
                  ) : (
                    <p>{phoneSection?.label}</p>
                  )}
                </div>
              ) : null}
              {usePhonePopup ? (
                  <div className="cta1-senda-buttons">
                    <button
                      type="button"
                      onClick={openPhonePopup}
                      className="inline-flex items-center justify-center rounded-xl text-base font-medium border border-white/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2"
                      style={{
                        ...fontStyle,
                        width: 180,
                        height: 48,
                        backgroundColor:
                          sanitizeCssColor(phoneSection?.buttonBackgroundColor) || 'rgba(255,255,255,0.2)',
                        color: sanitizeCssColor(phoneSection?.buttonTextColor) || '#ffffff',
                      }}
                    >
                  {(() => {
                    const link = phoneSection?.link as { label?: string } | undefined
                    const linkLabel = link?.label
                    return (
                      <>
                        {linkLabel ? <span>{linkLabel}</span> : null}
                        {phoneSection?.iconSVG?.trim() ? (
                          <span
                            className="ml-2 inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            style={{ color: phoneSection?.buttonTextColor || '#ffffff' }}
                            aria-hidden
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(phoneSection.iconSVG),
                            }}
                          />
                        ) : null}
                      </>
                    )
                  })()}
                    </button>
                  </div>
              ) : (
                phoneSection?.link &&
                (() => {
                  const link = phoneSection.link as React.ComponentProps<typeof CMSLink> & { label?: string }
                  const { label: linkLabel, ...linkProps } = link
                  const bg = sanitizeCssColor(phoneSection.buttonBackgroundColor) || 'rgba(255,255,255,0.2)'
                  const fg = sanitizeCssColor(phoneSection.buttonTextColor) || '#ffffff'
                  return (
                    <div className="cta1-senda-buttons">
                      <CMSLink
                        {...linkProps}
                        appearance="inline"
                        className="inline-flex items-center justify-center rounded-xl text-base font-medium border border-white/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2"
                        style={{
                          ...fontStyle,
                          width: 180,
                          height: 48,
                          backgroundColor: bg,
                          color: fg,
                        }}
                      >
                        {linkLabel ? <span>{linkLabel}</span> : null}
                        {phoneSection.iconSVG?.trim() ? (
                          <span
                            className="ml-2 inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            style={{ color: fg }}
                            aria-hidden
                            dangerouslySetInnerHTML={{
                              __html: sanitizeSVG(phoneSection.iconSVG),
                            }}
                          />
                        ) : null}
                      </CMSLink>
                    </div>
                  )
                })()
              )}
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
                    backgroundImage: buildCtaSendaAlterGradient(
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
                                : 'to right',
                      gradientStartColor,
                      gradientEndColor,
                    ),
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

      {/* Popup teléfono */}
      {usePhonePopup && popup && isPhonePopupOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto px-4 pb-8 sm:px-6"
          style={{
            paddingTop:
              'max(12.5rem, calc(env(safe-area-inset-top, 0px) + 9.5rem))',
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="phone-popup-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closePhonePopup}
            onKeyDown={(e) => e.key === 'Escape' && closePhonePopup()}
            aria-hidden
          />
          <div className="relative w-full max-w-[351px] md:max-w-[928px]" style={{ width: '100%' }}>
            {/* Cerrar fuera del panel del popup; sin fondo circular */}
            <button
              type="button"
              onClick={closePhonePopup}
              className="absolute -top-10 right-0 z-[120] flex h-10 w-10 items-center justify-center text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-opacity hover:opacity-90 md:-top-11 md:right-1 md:h-11 md:w-11"
              aria-label="Cerrar"
            >
              {popup.closeButtonSVG?.trim() ? (
                <span
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-visible text-white [&_svg]:block [&_svg]:max-h-7 [&_svg]:max-w-7 [&_svg]:min-h-[1.25rem] [&_svg]:min-w-[1.25rem]"
                  dangerouslySetInnerHTML={{ __html: sanitizeSVG(popup.closeButtonSVG) }}
                />
              ) : (
                <span
                  className="relative inline-block h-5 w-5 shrink-0 md:h-6 md:w-6"
                  aria-hidden
                >
                  <span className="absolute left-1/2 top-1/2 block h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current md:w-[1.125rem]" />
                  <span className="absolute left-1/2 top-1/2 block h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current md:w-[1.125rem]" />
                </span>
              )}
            </button>
            <div
              className={cn(
                'relative w-full overflow-hidden rounded-2xl p-6 pt-8 md:p-8 md:pt-10 text-white shadow-xl flex flex-col justify-center',
                'max-w-[351px] min-h-[660px] md:max-w-[928px] md:min-h-[692px]',
              )}
              style={{
                width: '100%',
                background:
                  popup.gradientStartColor && popup.gradientEndColor
                    ? buildCtaSendaAlterGradient(
                        popupGradientDir,
                        popup.gradientStartColor,
                        popup.gradientEndColor,
                      )
                    : buildCtaSendaAlterGradient('to bottom right', '#1e3a5f', '#4a2c7a'),
              }}
            >
            {/* Título y descripción: móvil 303×120 centrado; desktop sin restricción */}
            {(() => {
              const titleColor = sanitizeCssColor(popup.titleTextColor) || '#ffffff'
              const boldColor = sanitizeCssColor(popup.titleBoldTextColor)
              return (
                <div
                  id="phone-popup-title"
                  className={cn(
                    'w-full max-w-[303px] min-h-[120px] mx-auto text-center mb-6 md:w-[668px] md:min-h-[104px] md:max-w-[668px] md:text-left [&_.RichText]:text-xl md:[&_.RichText]:text-2xl [&_.RichText]:font-semibold',
                    boldColor && `popup-title-bold-${styleId}`,
                  )}
                  style={{ color: titleColor }}
                >
                  <style>{`
                    .popup-title-${styleId}, .popup-title-${styleId} * { color: ${titleColor} !important; }
                    ${boldColor ? `.popup-title-bold-${styleId} strong, .popup-title-bold-${styleId} b { color: ${boldColor} !important; }` : ''}
                  `}</style>
                  <span className={`popup-title-${styleId}`}>
                    {popup.title ? <RichText data={popup.title} enableGutter={false} /> : null}
                  </span>
                </div>
              )
            })()}

            <form
              onSubmit={(e) => {
                e.preventDefault()
                closePhonePopup()
              }}
              className="space-y-4"
            >
              <div className="mx-auto space-y-4 w-full max-w-[303px] min-h-[276px] md:max-w-[391px] md:w-[391px]">
              <div>
                <label htmlFor={`${styleId}-popup-name`} className="block text-sm font-medium text-white/95 mb-1">
                  {popup.nameLabel || 'Nombre y apellidos *'}
                </label>
                <input
                  id={`${styleId}-popup-name`}
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="rounded-2xl border border-white/30 bg-white/95 text-gray-900 px-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ width: 261, height: 48 }}
                  placeholder="Nombre y apellidos"
                />
              </div>
              <div>
                <label htmlFor={`${styleId}-popup-phone`} className="block text-sm font-medium text-white/95 mb-1">
                  {popup.phoneLabel || 'Número de teléfono *'}
                </label>
                <input
                  id={`${styleId}-popup-phone`}
                  type="tel"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  className="rounded-2xl border border-white/30 bg-white/95 text-gray-900 px-3 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ width: 261, height: 48 }}
                  placeholder="666 666 666"
                />
              </div>

              {popup.button?.link ? (
                agreedToTerms ? (
                  (() => {
                    const btn = popup.button
                    const link = btn.link as React.ComponentProps<typeof CMSLink> & { label?: string }
                    const { label: linkLabel, ...linkProps } = link
                    const bg = sanitizeCssColor(btn.backgroundColor) || 'rgba(255,255,255,0.2)'
                    const fg = sanitizeCssColor(btn.textColor) || '#ffffff'
                    return (
                      <CMSLink
                        {...linkProps}
                        appearance="inline"
                        className="rounded-xl text-base font-medium transition-colors inline-flex items-center justify-center border border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2"
                        style={{
                          ...fontStyle,
                          width: 120,
                          height: 48,
                          backgroundColor: bg,
                          color: fg,
                        }}
                      >
                        {linkLabel ? linkLabel : 'Enviar'}
                      </CMSLink>
                    )
                  })()
                ) : (
                  <span
                    className="rounded-xl text-base font-medium inline-flex items-center justify-center border border-white/40 cursor-not-allowed opacity-70"
                    style={{
                      ...fontStyle,
                      width: 120,
                      height: 48,
                      backgroundColor: sanitizeCssColor(popup.button?.backgroundColor) || 'rgba(255,255,255,0.15)',
                      color: sanitizeCssColor(popup.button?.textColor) || '#ffffff',
                    }}
                  >
                    {(popup.button?.link as { label?: string })?.label || 'Enviar'}
                  </span>
                )
              ) : null}

              <div className="flex items-start gap-3">
                <input
                  id={`${styleId}-popup-terms`}
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-white/50 bg-white/20 text-blue-600 focus:ring-white/50"
                />
                <label
                  htmlFor={`${styleId}-popup-terms`}
                  className={`flex-1 text-sm [&_.RichText]:text-sm popup-terms-${styleId}`}
                >
                  <style>{`
                    .popup-terms-${styleId}, .popup-terms-${styleId} * { color: ${sanitizeCssColor(popup.termsTextColor) || 'rgba(255,255,255,0.9)'} !important; }
                  `}</style>
                  {popup.termsRichText ? <RichText data={popup.termsRichText} enableGutter={false} /> : null}
                </label>
              </div>

              </div>

              {/* Protección de datos: móvil 303×112; desktop 548×64 (altura ajustada) */}
              <div className={`w-full max-w-[303px] min-h-[112px] mx-auto mt-4 md:w-[548px] md:min-h-[64px] md:max-w-[548px] [&_a]:underline popup-dp-${styleId}`}>
                <style>{`
                  .popup-dp-${styleId}, .popup-dp-${styleId} * { color: ${sanitizeCssColor(popup.dataProtectionTextColor) || 'rgba(255,255,255,0.8)'} !important; }
                `}</style>
                {popup.dataProtectionRichText ? (
                  <RichText data={popup.dataProtectionRichText} enableGutter={false} />
                ) : null}
              </div>
            </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
