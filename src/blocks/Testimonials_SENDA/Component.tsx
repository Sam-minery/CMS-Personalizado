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
import {
  appendFontGroupHeadingMarginRules,
  appendFontGroupLineHeightRules,
  appendTypographyBodyListSizeRules,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  type FontGroupHeadingMargins,
  type FontGroupLineHeights,
  type FontGroupTypography,
} from '@/utilities/fontGroupRichTextCss'

/** Breakpoint carrusel: 1280px. Por debajo = modo scroll. */
const SCROLL_MODE_MAX_WIDTH = 1279
/** Por debajo de 1024px = móvil: tamaño fijo de card. A partir de 1024px se respeta cardSize/custom. */
const MOBILE_VIEW_MAX_WIDTH = 1023
const MOBILE_CARD_WIDTH_PX = 355
const MOBILE_CARD_HEIGHT = 603

/** Px para scroll/grid; sin unidad: &lt;100 → rem (ej. 18 = 18rem), ≥100 → px — alineado con Cards_SENDA / config. */
function parseWidthToPx(value: string): number {
  const s = (value || '').trim()
  if (!s) return MOBILE_CARD_WIDTH_PX
  if (s.endsWith('rem')) return Math.round(parseFloat(s) * 16) || MOBILE_CARD_WIDTH_PX
  if (s.endsWith('px')) return Math.round(parseFloat(s)) || MOBILE_CARD_WIDTH_PX
  const n = parseFloat(s)
  if (!Number.isFinite(n)) return MOBILE_CARD_WIDTH_PX
  return n < 100 ? Math.round(n * 16) : Math.round(n)
}

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

type FontGroupFontEntry = { font?: FontFile | number; variant?: string }

type FontGroupData = {
  fontFamilyName?: string | null
  fonts?: FontGroupFontEntry[] | null
  typography?: FontGroupTypography | null
  typographyMobile?: FontGroupTypography | null
  headingMargins?: FontGroupHeadingMargins | null
  lineHeights?: FontGroupLineHeights | null
}

function normalizeTestimonialsFontGroup(raw: unknown): FontGroupData | null {
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
  return o as FontGroupData
}

const TESTIMONIALS_FG_RICHTEXT =
  'testimonials-senda-richtext [&_h1]:font-bold [&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6'

type TestimonialsSendaBlockProps = {
  title?: DefaultTypedEditorState | null
  titleColor?: string | null
  backgroundColor?: string | null
  anchorId?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
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
  isMobileView: boolean
  /** Móvil o desktop con card custom: nombre abajo a la izquierda, cita flex-1 recortada. */
  pinNameToBottom: boolean
  fontGroupTypographyActive: boolean
}> = ({ testimonial, index, cardHeight, isMobileView, pinNameToBottom, fontGroupTypographyActive }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const titleDescStyle: React.CSSProperties = testimonial.titleAndDescriptionColor
    ? { color: testimonial.titleAndDescriptionColor }
    : { color: '#1f2937' }
  const nameStyle: React.CSSProperties = testimonial.nameAndProfessionColor
    ? { color: testimonial.nameAndProfessionColor }
    : { color: '#374151' }
  /**
   * Móvil: altura fija para anclar nombre/profesión abajo; la cita usa flex-1 + overflow hidden (sin scroll) si es larga.
   * Desktop: altura según cardSize.
   */
  const heightStyle = isMobileView ? MOBILE_CARD_HEIGHT : cardHeight

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
      className="relative flex flex-col rounded-3xl overflow-hidden bg-white shadow-sm w-full flex-shrink-0"
      style={{
        height: heightStyle,
        minHeight: isMobileView ? MOBILE_CARD_HEIGHT : undefined,
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
        className={cn(
          'flex flex-col px-5 -mt-1 pb-5',
          pinNameToBottom ? 'min-h-0 flex-1' : 'flex-1',
        )}
        style={titleDescStyle}
      >
        <div
          className={cn(
            'w-full max-w-[356px] mt-6',
            pinNameToBottom
              ? 'mx-auto min-h-0 flex-1 overflow-hidden self-stretch'
              : 'mx-auto h-[260px] overflow-hidden',
            fontGroupTypographyActive && TESTIMONIALS_FG_RICHTEXT,
          )}
        >
          <RichText
            data={testimonial.titleAndDescription}
            enableGutter={false}
            enableProse={false}
            className={
              fontGroupTypographyActive
                ? '[text-wrap:balance]'
                : 'text-base md:text-lg font-semibold [text-wrap:balance] [&_p]:mb-2 [&_p:last-child]:mb-0 [&_h1]:text-xl [&_h2]:text-lg [&_h3]:text-base'
            }
          />
        </div>

        <div
          className={cn(
            'w-full max-w-[356px] flex-shrink-0',
            pinNameToBottom
              ? 'self-start mr-auto pt-6 text-left [&_*]:text-left'
              : 'mx-auto -mt-1',
            fontGroupTypographyActive && TESTIMONIALS_FG_RICHTEXT,
          )}
          style={nameStyle}
        >
          <RichText
            data={testimonial.nameAndProfession}
            enableGutter={false}
            enableProse={false}
            className={
              fontGroupTypographyActive
                ? pinNameToBottom
                  ? '[&_*]:text-left'
                  : ''
                : cn(
                    'text-sm [&_p]:font-bold [&_p]:mb-0.5 [&_p:last-child]:text-xs [&_p:last-child]:uppercase [&_p:last-child]:font-normal [&_p:last-child]:opacity-80',
                    pinNameToBottom && '[&_*]:text-left',
                  )
            }
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
  useFontGroup,
  fontGroup,
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
  const [isMobileView, setIsMobileView] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `testimonials-senda-${uniqueId}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object'
      ? normalizeTestimonialsFontGroup(fontGroup)
      : null

  const fontGroupTypographyActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() && Array.isArray(fontGroupObj.fonts),
  )

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename
      ? customFontFileObj.filename.replace(/\.[^.]+$/, '')
      : undefined)

  const getFontFamily = () => {
    if (fontGroupObj?.fontFamilyName) return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }

  const selectedFontFamily = getFontFamily()
  useGoogleFont(fontGroupTypographyActive ? undefined : selectedFontFamily)

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile =
    fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []
    const sel = `[data-testimonials-senda-font="${styleId}"]`
    const mainRichtext = `${sel} .testimonials-senda-richtext`
    const planRichtext = mainRichtext
    const payloadRichtext = `${sel} .payload-richtext`

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
      const fontValue = `"${fontGroupObj.fontFamilyName!.replace(/"/g, '\\"')}"`
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )

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

      appendFontGroupHeadingMarginRules(
        fontGroupObj.headingMargins,
        mainRichtext,
        planRichtext,
        payloadRichtext,
        (rule) => styles.push(rule),
      )
      appendFontGroupLineHeightRules(
        fontGroupObj.lineHeights,
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
      const fontValue = `"${customFontFamilyName.replace(/"/g, '\\"')}"`
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )
    } else if (selectedFontFamily) {
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} button, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${selectedFontFamily} !important; }`,
      )
    }

    if (titleColor) {
      styles.push(
        `${sel} .testimonials-senda-title { color: ${titleColor} !important; }`,
      )
    }

    styles.push(`
      @media (max-width: 767px) {
        ${sel} .testimonials-senda-title,
        ${sel} .testimonials-senda-title * {
          text-align: left !important;
        }
      }
    `)

    styles.push(
      `${sel} sub, ${sel} sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

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
  if (cardSize === 'custom' && customCardWidth?.trim()) {
    selectedWidth = customCardWidth.trim()
    selectedHeight = customCardHeight?.trim() || sizeMap.md.height
  } else {
    const key: 'sm' | 'md' | 'lg' =
      cardSize === 'sm' || cardSize === 'md' || cardSize === 'lg' ? cardSize : 'md'
    const preset = sizeMap[key]
    selectedWidth = preset.width
    selectedHeight = preset.height
  }

  const testimonialGridWidthPx = parseWidthToPx(selectedWidth)

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

  const getCardWidthPx = () => parseWidthToPx(selectedWidth)

  /** Paso de scroll = una card + gap. Solo en modo scroll. */
  const getScrollStep = () => {
    const gap = getCurrentGap()
    return getCardWidthPx() + gap
  }

  /** Fija el scroll a una posición que muestre una card completa (índice 0, 1, 2, ...). Así no se corta ninguna.
   * En la última card usamos maxScroll para evitar un retroceso que cortaría la card por la derecha. */
  const snapToNearestCard = () => {
    const container = scrollContainerRef.current
    if (!container || testimonialData.length === 0) return
    const step = getScrollStep()
    if (step <= 0) return
    const { scrollLeft: sl, scrollWidth, clientWidth } = container
    const maxScroll = Math.max(0, scrollWidth - clientWidth)
    const index = Math.round(sl / step)
    const clampedIndex = Math.min(Math.max(0, index), testimonialData.length - 1)
    const isLastCard = clampedIndex === testimonialData.length - 1
    const targetScroll = isLastCard ? maxScroll : clampedIndex * step
    const clampedScroll = Math.min(Math.max(0, targetScroll), maxScroll)
    if (Math.abs(container.scrollLeft - clampedScroll) > 1) {
      container.scrollLeft = clampedScroll
    }
  }

  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (!container || testimonialData.length === 0) return
    const step = getScrollStep()
    if (step <= 0) return
    const nextIndex = Math.max(0, currentIndex - 1)
    if (nextIndex === currentIndex) return
    const targetScroll = nextIndex * step
    container.scrollTo({ left: targetScroll, behavior: 'smooth' })
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (!container || testimonialData.length === 0) return
    const step = getScrollStep()
    if (step <= 0) return
    const nextIndex = Math.min(testimonialData.length - 1, currentIndex + 1)
    if (nextIndex === currentIndex) return
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
    const isLastCard = nextIndex === testimonialData.length - 1
    const targetScroll = isLastCard ? maxScroll : nextIndex * step
    container.scrollTo({ left: targetScroll, behavior: 'smooth' })
  }

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft: sl, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(sl > 0)
      setCanScrollRight(sl < scrollWidth - clientWidth - 1)
      const step = getScrollStep()
      const calculatedIndex = step > 0 ? Math.round(sl / step) : 0
      setCurrentIndex(
        Math.min(Math.max(0, calculatedIndex), testimonialData.length - 1),
      )
    }
  }

  /** Scroll/carrusel cuando viewport < 1280px o cuando hay más de 3 testimonios.
   * Usamos viewport (window.innerWidth) para que coincida con los media queries del CSS.
   * isMobileView: por debajo de 1024px se usa tamaño fijo de card; a partir de 1024 se respeta cardSize. */
  const updateScrollMode = () => {
    if (typeof window === 'undefined') return
    const viewportWidth = window.innerWidth
    setUseScrollMode(viewportWidth <= SCROLL_MODE_MAX_WIDTH || testimonialData.length > 3)
    setIsMobileView(viewportWidth <= MOBILE_VIEW_MAX_WIDTH)
  }

  useEffect(() => {
    updateScrollMode()
    window.addEventListener('resize', updateScrollMode)
    return () => window.removeEventListener('resize', updateScrollMode)
  }, [testimonialData.length])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    checkScrollability()

    const onScroll = () => {
      checkScrollability()
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current)
      snapTimeoutRef.current = setTimeout(() => {
        snapToNearestCard()
        checkScrollability()
        snapTimeoutRef.current = null
      }, 150)
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', checkScrollability)
    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkScrollability)
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current)
    }
  }, [testimonialData.length])

  const getDesktopGap = (): string => {
    const map: Record<string, string> = {
      xs: '1rem',
      sm: '1.5rem',
      medium: '2rem',
      lg: '3rem',
      xl: '4rem',
      custom: '2rem',
    }
    if (cardsGap === 'custom' && customGap != null && customGap !== '') {
      const raw = String(customGap).trim()
      if (raw && raw !== 'undefined') {
        if (/^\d+(\.\d+)?$/.test(raw)) return `${raw}px`
        if (/^\d+(\.\d+)?\s*(rem|px|em|%)$/i.test(raw)) return raw
        if (/^\d+(\.\d+)?\s+/.test(raw)) return raw.split(/\s+/)[0]?.trim() || map.medium
        return raw
      }
    }
    return map[cardsGap || 'medium'] || map.medium
  }

  const desktopGap = getDesktopGap()
  const gapId = `testimonials-senda-gap-${cardsGap || 'medium'}`
  const sanitized = (desktopGap || '').replace(/["'\\]/g, '').trim()
  const safeDesktopGap =
    sanitized &&
    sanitized !== 'undefined' &&
    sanitized.length < 50
      ? sanitized
      : '2rem'

  const hasTitle = Boolean(
    title && (title as { root?: { children?: unknown[] } })?.root?.children?.length,
  )
  const backgroundStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent',
  }

  const sectionId = sanitizeAnchorId(anchorId) || undefined

  const isDesktopCarouselMany =
    useScrollMode && testimonialData.length > 3 && !isMobileView

  return (
    <div
      id={sectionId}
      data-testimonials-senda-font={styleId}
      data-desktop-gap={cardsGap === 'custom' ? safeDesktopGap : undefined}
      className={cn(
        'relative w-full py-12 md:py-16 lg:py-20 px-0',
        !isDesktopCarouselMany && 'overflow-x-hidden',
        isDesktopCarouselMany && 'senda-testimonials-desktop-carousel-many',
      )}
      style={{
        ...backgroundStyle,
        ...fontStyle,
        ...(cardsGap === 'custom' && safeDesktopGap
          ? { ['--senda-testimonials-desktop-gap' as string]: safeDesktopGap }
          : {}),
      }}
    >
      {combinedStyles ? <style>{combinedStyles}</style> : null}
      <div
        className={cn(
          'mx-auto w-full min-w-0 px-4 lg:px-6 senda-testimonials-inner',
          !disableInnerContainer && 'max-w-7xl',
          !isDesktopCarouselMany && 'overflow-x-hidden',
          isDesktopCarouselMany && 'senda-testimonials-inner-desktop-carousel-many',
        )}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
 .senda-testimonials-desktop-carousel-many { overflow-x: visible !important; }
 .senda-testimonials-inner-desktop-carousel-many { overflow-x: visible !important; }
 .${gapId} {
   gap: 1.5rem !important;
 }
 @media (max-width: 1279px) {
   .${gapId} {
     gap: 1.5rem !important;
     column-gap: 1.5rem !important;
     row-gap: 1.5rem !important;
   }
 }
 /* Desktop grid solo cuando NO estamos en modo carrusel (≤3 testimonios) */
 @media (min-width: 1280px) {
   .senda-testimonials-carousel-wrapper:not(.senda-testimonials-is-carousel) .${gapId} {
     display: grid !important;
     overflow: visible !important;
     gap: var(--senda-testimonials-desktop-gap, ${safeDesktopGap}) !important;
     column-gap: var(--senda-testimonials-desktop-gap, ${safeDesktopGap}) !important;
     row-gap: var(--senda-testimonials-desktop-gap, ${safeDesktopGap}) !important;
   }
   .senda-testimonials-carousel-wrapper:not(.senda-testimonials-is-carousel) .${gapId}.senda-testimonials-grid {
     grid-template-columns: repeat(auto-fit, minmax(${testimonialGridWidthPx}px, ${testimonialGridWidthPx}px)) !important;
     justify-content: center !important;
   }
   .senda-testimonials-carousel-wrapper:not(.senda-testimonials-is-carousel) .senda-testimonials-grid .senda-testimonials-card-cell {
     width: 100% !important;
     min-width: 0 !important;
     max-width: none !important;
     flex-shrink: 0 !important;
   }
   .senda-testimonials-carousel-wrapper:not(.senda-testimonials-is-carousel) .senda-testimonials-scroll-viewport {
     overflow: visible !important;
     padding-left: 0 !important;
     padding-right: 0 !important;
   }
   .senda-testimonials-carousel-wrapper:not(.senda-testimonials-is-carousel) {
     margin-left: 0 !important;
     margin-right: 0 !important;
     width: 100% !important;
   }
   .senda-testimonials-carousel-wrapper:not(.senda-testimonials-is-carousel) .senda-testimonials-nav-buttons {
     display: none !important;
   }
 }
 /* Modo carrusel: mantener scroll */
 .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel .senda-testimonials-scroll-viewport {
   display: flex !important;
   overflow-x: auto !important;
   flex-wrap: nowrap !important;
 }
 .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel .senda-testimonials-card-cell {
   flex-shrink: 0 !important;
 }
 /* Móvil carrusel: ancho según --senda-testimonial-card-width (config / tamaño card) */
 .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel.senda-testimonials-mobile .senda-testimonials-card-cell {
   width: var(--senda-testimonial-card-width, ${MOBILE_CARD_WIDTH_PX}px) !important;
   min-width: var(--senda-testimonial-card-width, ${MOBILE_CARD_WIDTH_PX}px) !important;
   max-width: var(--senda-testimonial-card-width, ${MOBILE_CARD_WIDTH_PX}px) !important;
 }
 /* 4+ testimonios: padding simétrico para que el primer y último card tengan el mismo espacio a izquierda y derecha.
  * scroll-padding evita que la primera/última card se peguen al borde al hacer snap. */
 .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel.senda-testimonials-carousel-visible-3 .senda-testimonials-scroll-viewport {
   margin-left: auto !important;
   margin-right: auto !important;
   padding-left: 1rem !important;
   padding-right: 1rem !important;
   scroll-padding-left: 1rem !important;
   scroll-padding-right: 1rem !important;
   scroll-snap-type: x mandatory !important;
   scroll-snap-stop: always !important;
 }
 .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel.senda-testimonials-carousel-visible-3 .senda-testimonials-card-cell {
   scroll-snap-align: start !important;
   scroll-snap-stop: always !important;
 }
 .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel.senda-testimonials-carousel-visible-3 .senda-testimonials-card-cell.senda-testimonials-card-cell-last {
   scroll-snap-align: end !important;
 }
 @media (max-width: 1279px) {
   .senda-testimonials-carousel-wrapper {
     margin-left: -1rem !important;
     margin-right: -1rem !important;
     width: calc(100% + 2rem) !important;
   }
   .senda-testimonials-scroll-viewport {
     overflow-x: auto !important;
     padding-left: 1rem !important;
     padding-right: 1rem !important;
   }
 }
 @media (min-width: 1024px) and (max-width: 1279px) {
   .senda-testimonials-carousel-wrapper {
     margin-left: -1.5rem !important;
     margin-right: -1.5rem !important;
     width: calc(100% + 3rem) !important;
   }
   .senda-testimonials-scroll-viewport {
     padding-left: 1.5rem !important;
     padding-right: 1.5rem !important;
   }
 }
 @media (min-width: 1280px) {
   .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel {
     margin-left: -1.5rem !important;
     margin-right: 0 !important;
     width: calc(100% + 1.5rem) !important;
   }
   /* Breakout solo a la izquierda en desktop carrusel (4+ testimonios) para que la última card no se corte por overflow-x-hidden del contenedor */
   .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel.senda-testimonials-carousel-visible-3 {
     margin-left: -1.5rem !important;
     margin-right: 0 !important;
     width: calc(100% + 1.5rem) !important;
   }
   .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel .senda-testimonials-scroll-viewport {
     padding-left: 1.5rem !important;
     padding-right: 1.5rem !important;
   }
   /* 4+ testimonios desktop: padding derecho para que la última card se vea completa */
   .senda-testimonials-carousel-wrapper.senda-testimonials-is-carousel.senda-testimonials-carousel-visible-3 .senda-testimonials-scroll-viewport {
     max-width: calc(var(--senda-testimonial-card-width, 18rem) * 3 + var(--senda-testimonial-scroll-gap, 1.5rem) * 2 + 1.5rem + 2rem) !important;
     margin-left: auto !important;
     margin-right: auto !important;
     padding-right: 2rem !important;
     scroll-padding-left: 1.5rem !important;
     scroll-padding-right: 2rem !important;
   }
 }
 `,
          }}
        />

        {hasTitle && (
          <div className="mb-10 md:mb-12 w-full max-w-4xl mx-auto text-left md:text-center">
            <div
              className={cn(
                'testimonials-senda-title',
                fontGroupTypographyActive && TESTIMONIALS_FG_RICHTEXT,
                !fontGroupTypographyActive &&
                  '[&_h1]:text-3xl [&_h1]:md:text-4xl [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h3]:text-xl [&_h3]:md:text-2xl font-bold',
              )}
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

        <div
          className={cn(
            'senda-testimonials-carousel-wrapper relative -ml-4 -mr-4 w-[calc(100%+2rem)]',
            useScrollMode && 'senda-testimonials-is-carousel',
            useScrollMode && testimonialData.length > 3 && 'senda-testimonials-carousel-visible-3',
            useScrollMode && isMobileView && 'senda-testimonials-mobile',
          )}
          ref={wrapperRef}
          style={
            useScrollMode
              ? {
                  ['--senda-testimonial-card-width' as string]: selectedWidth,
                  ...(testimonialData.length > 3 && !isMobileView
                    ? { ['--senda-testimonial-scroll-gap' as string]: safeDesktopGap }
                    : {}),
                }
              : undefined
          }
        >
          <div
            ref={scrollContainerRef}
            className={cn(
              'senda-testimonials-scroll-viewport flex senda-testimonials-grid',
              'overflow-x-auto scroll-smooth pl-4 pr-4',
              '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
              gapId,
            )}
            onScroll={checkScrollability}
          >
            {testimonialData.map((t, index) => (
              <div
                key={index}
                className={cn(
                  'senda-testimonials-card-cell flex-shrink-0',
                  index === testimonialData.length - 1 && 'senda-testimonials-card-cell-last',
                )}
                style={
                  useScrollMode && !isMobileView
                    ? { width: selectedWidth, minWidth: selectedWidth, maxWidth: selectedWidth }
                    : undefined
                }
              >
                <TestimonialCard
                  testimonial={t}
                  index={index}
                  cardHeight={selectedHeight}
                  isMobileView={isMobileView}
                  pinNameToBottom={
                    isMobileView ||
                    (cardSize === 'custom' && Boolean(customCardWidth?.trim()))
                  }
                  fontGroupTypographyActive={fontGroupTypographyActive}
                />
              </div>
            ))}
          </div>

          <div className="senda-testimonials-nav-buttons flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full',
                'bg-[#c5bdaa] text-white shadow-sm',
                'transition-all hover:opacity-90 active:scale-95',
                'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
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
                'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100',
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
