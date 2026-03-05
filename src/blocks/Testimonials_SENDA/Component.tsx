'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'

const MOBILE_CARD_WIDTH = 355
const MOBILE_CARD_HEIGHT = 602

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type MediaLike = {
  url?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

type TestimonialsSendaBlockProps = {
  title?: DefaultTypedEditorState | null
  titleColor?: string | null
  backgroundColor?: string | null
  anchorId?: string | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
  cardsGap?: 'xs' | 'sm' | 'medium' | 'lg' | 'xl' | 'custom' | null
  customGap?: string | null
  cardSize?: 'sm' | 'md' | 'lg' | 'custom' | null
  customCardWidth?: string | null
  customCardHeight?: string | null
  testimonials?: Array<{
    image?: {
      useMedia?: boolean | null
      mediaImage?: MediaLike | null
      src?: string | null
      alt?: string | null
    } | null
    titleAndDescription?: DefaultTypedEditorState | null
    titleAndDescriptionColor?: string | null
    nameAndProfession?: DefaultTypedEditorState | null
    nameAndProfessionColor?: string | null
  }> | null
  disableInnerContainer?: boolean
}

type TestimonialData = {
  imageSrc: string
  imageAlt: string
  titleAndDescription: DefaultTypedEditorState
  titleAndDescriptionColor?: string
  nameAndProfession: DefaultTypedEditorState
  nameAndProfessionColor?: string
}

const emptyRichTextFallback: DefaultTypedEditorState = {
  root: {
    children: [],
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || ''
}

/** URL del media: prioriza .url, luego sizes. Misma lógica que Hero_SENDA/Layout_SENDA: devolver tal cual (ruta relativa) para mismo origen en next/image. */
function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string } }
  }
  return m?.url ?? m?.sizes?.large?.url ?? m?.sizes?.medium?.url ?? ''
}

type TestimonialImageGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  src?: string | null
  alt?: string | null
}

function getTestimonialImageUrl(imageGroup: TestimonialImageGroup | null | undefined): string {
  if (!imageGroup || typeof imageGroup !== 'object') return ''
  const useMedia = imageGroup.useMedia !== false
  if (useMedia && imageGroup.mediaImage) return getMediaUrlSafe(imageGroup.mediaImage)
  const src = imageGroup.src?.trim()
  return src ?? ''
}

function getTestimonialImageAlt(imageGroup: TestimonialImageGroup | null | undefined): string {
  if (!imageGroup || typeof imageGroup !== 'object') return 'Testimonio'
  return imageGroup.alt?.trim() || 'Testimonio'
}

const TestimonialCard: React.FC<{
  testimonial: TestimonialData
  index: number
  cardHeight: string
  useScrollMode: boolean
}> = ({ testimonial, index, cardHeight, useScrollMode }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const titleDescStyle: React.CSSProperties = testimonial.titleAndDescriptionColor
    ? { color: testimonial.titleAndDescriptionColor }
    : { color: '#1f2937' }
  const nameStyle: React.CSSProperties = testimonial.nameAndProfessionColor
    ? { color: testimonial.nameAndProfessionColor }
    : { color: '#374151' }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.08 * index,
        ease: 'easeOut',
      }}
      className="relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm w-full flex-shrink-0"
      style={{
        height: useScrollMode ? MOBILE_CARD_HEIGHT : cardHeight,
        minHeight: useScrollMode ? MOBILE_CARD_HEIGHT : undefined,
      }}
    >
      <div className="relative w-full aspect-[355/240] flex-shrink-0 overflow-hidden bg-[#2563eb]">
        {testimonial.imageSrc ? (
          <Image
            src={testimonial.imageSrc}
            alt={testimonial.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1023px) 355px, 400px"
          />
        ) : (
          <div className="absolute inset-0 bg-[#2563eb]" />
        )}
      </div>

      <div
        className="flex-1 flex flex-col p-5"
        style={titleDescStyle}
      >
        <div className="w-full max-w-[356px] h-[260px] overflow-hidden mx-auto">
          <RichText
            data={testimonial.titleAndDescription}
            enableGutter={false}
            enableProse={false}
            className="text-base md:text-lg font-semibold [text-wrap:balance] [&_p]:mb-2 [&_p:last-child]:mb-0 [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base"
          />
        </div>

        <div className="mt-4 pt-4" style={nameStyle}>
          <RichText
            data={testimonial.nameAndProfession}
            enableGutter={false}
            enableProse={false}
            className="text-sm [&_p]:font-bold [&_p]:mb-0.5 [&_p:last-child]:text-xs [&_p:last-child]:uppercase [&_p:last-child]:font-normal [&_p:last-child]:opacity-80"
          />
        </div>
      </div>
    </motion.div>
  )
}

export const TestimonialsSendaBlockComponent: React.FC<TestimonialsSendaBlockProps> = ({
  title,
  titleColor,
  backgroundColor,
  anchorId,
  fontFamily,
  useCustomFont,
  customFontFile,
  customFontName,
  cardsGap,
  customGap,
  cardSize,
  customCardWidth,
  customCardHeight,
  testimonials,
  disableInnerContainer,
}) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [useScrollMode, setUseScrollMode] = useState(true)
  const [containerWidth, setContainerWidth] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `testimonials-senda-${uniqueId}`

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
        `[data-testimonials-senda-font="${styleId}"], [data-testimonials-senda-font="${styleId}"] *, [data-testimonials-senda-font="${styleId}"] p, [data-testimonials-senda-font="${styleId}"] h1, [data-testimonials-senda-font="${styleId}"] h2, [data-testimonials-senda-font="${styleId}"] h3, [data-testimonials-senda-font="${styleId}"] h4 { font-family: ${fontValue} !important; }`,
      )
    }

    if (titleColor) {
      styles.push(
        `[data-testimonials-senda-font="${styleId}"] .testimonials-senda-title { color: ${titleColor} !important; }`,
      )
    }

    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const sizeMap: Record<'sm' | 'md' | 'lg', { width: string; height: string }> = {
    sm: { width: '16rem', height: '28rem' },
    md: { width: '18rem', height: '32rem' },
    lg: { width: '20rem', height: '36rem' },
  }

  let selectedWidth: string
  let selectedHeight: string
  if (cardSize === 'custom' && customCardWidth && customCardHeight) {
    selectedWidth = customCardWidth
    selectedHeight = customCardHeight
  } else {
    const key: 'sm' | 'md' | 'lg' =
      cardSize === 'sm' || cardSize === 'md' || cardSize === 'lg' ? cardSize : 'md'
    const preset = sizeMap[key]
    selectedWidth = preset.width
    selectedHeight = preset.height
  }

  const getCurrentGap = () => {
    if (typeof window === 'undefined' || !scrollContainerRef.current) return 0
    const style = window.getComputedStyle(scrollContainerRef.current)
    const gapValue = style.columnGap || style.gap || '0px'
    const parsed = parseFloat(gapValue)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const testimonialData: TestimonialData[] =
    testimonials && testimonials.length > 0
      ? testimonials.map((t) => ({
          imageSrc: getTestimonialImageUrl(t.image),
          imageAlt: getTestimonialImageAlt(t.image),
          titleAndDescription: t.titleAndDescription || emptyRichTextFallback,
          titleAndDescriptionColor: t.titleAndDescriptionColor || undefined,
          nameAndProfession: t.nameAndProfession || emptyRichTextFallback,
          nameAndProfessionColor: t.nameAndProfessionColor || undefined,
        }))
      : []

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const gap = getCurrentGap()
      const cardWidth = useScrollMode ? MOBILE_CARD_WIDTH : 360
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const gap = getCurrentGap()
      const cardWidth = useScrollMode ? MOBILE_CARD_WIDTH : 360
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth',
      })
    }
  }

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft: sl, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(sl > 0)
      setCanScrollRight(sl < scrollWidth - clientWidth - 1)
      const gap = getCurrentGap()
      const cardWidth = useScrollMode ? MOBILE_CARD_WIDTH : 360
      const calculatedIndex = Math.round(sl / (cardWidth + gap))
      setCurrentIndex(
        Math.min(Math.max(0, calculatedIndex), testimonialData.length - 1),
      )
    }
  }

  const SCROLL_MODE_MAX_WIDTH = 800
  const updateScrollMode = () => {
    if (typeof window === 'undefined' || !wrapperRef.current) return
    const width = wrapperRef.current.offsetWidth
    setContainerWidth(width)
    setUseScrollMode(width < SCROLL_MODE_MAX_WIDTH || testimonialData.length > 3)
  }

  useEffect(() => {
    updateScrollMode()
    const el = wrapperRef.current
    if (!el) return
    const ro = new ResizeObserver(updateScrollMode)
    ro.observe(el)
    window.addEventListener('resize', updateScrollMode)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateScrollMode)
    }
  }, [testimonialData.length])

  useEffect(() => {
    checkScrollability()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScrollability)
      window.addEventListener('resize', checkScrollability)
      return () => {
        container.removeEventListener('scroll', checkScrollability)
        window.removeEventListener('resize', checkScrollability)
      }
    }
  }, [testimonialData.length, useScrollMode])

  const getDesktopGap = (): string => {
    if (cardsGap === 'custom' && customGap?.trim()) {
      const v = customGap.trim()
      if (/^\d+(\.\d+)?$/.test(v)) return `${v}px`
      return v
    }
    const map: Record<string, string> = {
      xs: '1rem',
      sm: '1.5rem',
      medium: '2rem',
      lg: '3rem',
      xl: '4rem',
    }
    return map[cardsGap || 'medium'] || map.medium
  }

  const desktopGap = getDesktopGap()
  const gapId = `testimonials-senda-gap-${cardsGap || 'medium'}`

  const DESKTOP_CARD_WIDTH = 355
  const DESKTOP_CAROUSEL_GAP_PX = 24
  const isDesktopCarousel =
    useScrollMode &&
    containerWidth >= SCROLL_MODE_MAX_WIDTH &&
    testimonialData.length > 3
  const desktopCarouselMaxWidth = isDesktopCarousel
    ? 3 * DESKTOP_CARD_WIDTH + 2 * DESKTOP_CAROUSEL_GAP_PX
    : undefined

  const hasTitle = Boolean(
    title && (title as { root?: { children?: unknown[] } })?.root?.children?.length,
  )
  const backgroundStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent',
  }

  const sectionId = sanitizeAnchorId(anchorId) || undefined

  return (
    <div
      id={sectionId}
      data-testimonials-senda-font={styleId}
      className="relative w-full min-w-full py-12 md:py-16 lg:py-20 px-4 md:px-6"
      style={{ ...backgroundStyle, ...fontStyle }}
    >
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      <div
        className={cn(
          'mx-auto w-full',
          !disableInnerContainer && 'max-w-7xl',
        )}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
 .${gapId}.testimonials-senda-scroll {
   display: flex !important;
   overflow-x: auto !important;
   gap: 1.5rem !important;
   scroll-behavior: smooth;
 }
 .${gapId}.testimonials-senda-grid {
   display: grid !important;
   gap: ${desktopGap} !important;
   column-gap: ${desktopGap} !important;
   row-gap: ${desktopGap} !important;
   grid-template-columns: repeat(auto-fit, minmax(360px, 420px)) !important;
   justify-content: center !important;
   overflow: visible !important;
 }
 `,
          }}
        />

        {hasTitle && (
          <div className="mb-10 md:mb-12 text-center max-w-4xl mx-auto">
            <div
              className="testimonials-senda-title [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h3]:text-xl [&_h3]:md:text-2xl font-bold"
              style={titleColor ? { color: titleColor } : undefined}
            >
              <RichText
                data={title!}
                enableGutter={false}
                enableProse={false}
              />
            </div>
          </div>
        )}

        <div className="relative" ref={wrapperRef}>
          <div
            ref={scrollContainerRef}
            className={cn(
              gapId,
              useScrollMode ? 'testimonials-senda-scroll' : 'testimonials-senda-grid',
              '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
            )}
            style={
              useScrollMode
                ? desktopCarouselMaxWidth != null
                  ? {
                      maxWidth: desktopCarouselMaxWidth,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }
                  : undefined
                : {
                    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 420px))',
                    justifyContent: 'center',
                  }
            }
            onScroll={checkScrollability}
          >
            {testimonialData.map((t, index) => (
              <div
                key={index}
                className={cn(
                  useScrollMode && 'flex-shrink-0 w-[355px] min-w-[355px] max-w-[420px]',
                  !useScrollMode && 'w-full min-w-0 max-w-none',
                )}
              >
                <TestimonialCard
                  testimonial={t}
                  index={index}
                  cardHeight={selectedHeight}
                  useScrollMode={useScrollMode}
                />
              </div>
            ))}
          </div>

          <div
            className={cn(
              'flex items-center justify-center gap-4 mt-6',
              !useScrollMode && 'hidden',
            )}
          >
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full',
                'bg-[#c5bdaa] text-white shadow-sm',
                'transition-all hover:opacity-90 active:scale-95',
                'disabled:opacity-40 disabled:cursor-not-allowed',
              )}
              aria-label="Scroll izquierda"
            >
              <IconArrowLeft className="h-5 w-5 text-white" />
            </button>
            <div className="flex items-center justify-center px-6 py-3 rounded-full bg-[#c5bdaa]">
              <div className="flex items-center gap-3">
                {testimonialData.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      'transition-all duration-300',
                      i === currentIndex
                        ? 'w-8 h-3 rounded-full bg-white'
                        : 'w-3 h-3 rounded-full bg-[#e5dfd2]',
                    )}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full',
                'bg-[#c5bdaa] text-white shadow-sm',
                'transition-all hover:opacity-90 active:scale-95',
                'disabled:opacity-40 disabled:cursor-not-allowed',
              )}
              aria-label="Scroll derecha"
            >
              <IconArrowRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
