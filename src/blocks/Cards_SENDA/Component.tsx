'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { IconX, IconPlus, IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import type { Media } from '@/payload-types'
import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'

// Tipo del bloque (alineado con config: anchorId, fuentes, colores extra en cards)
type SendaCardsBlock = {
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerContentColor?: string | null
  headerContentMaxWidth?: string | null
  /** @deprecated Usar headerContent. Mantenido para bloques guardados con título/descripción. */
  title?: DefaultTypedEditorState | null
  titleColor?: string | null
  description?: DefaultTypedEditorState | null
  descriptionColor?: string | null
  cardSize?: 'sm' | 'md' | 'lg' | 'custom' | null
  customCardWidth?: string | null
  customCardHeight?: string | null
  cards?: Array<{
    title?: DefaultTypedEditorState | null
    titleColor?: string | null
    image?: number | Media | null
    expandedContent?: DefaultTypedEditorState | null
    expandedContentColor?: string | null
    avatarImage?: number | Media | null
    userName?: string | null
    userNameColor?: string | null
    backContent?: DefaultTypedEditorState | null
    backBackgroundColor?: string | null
    backContentColor?: string | null
  }> | null
  backgroundColor?: string | null
  boldTextColor?: string | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: { url?: string; filename?: string; name?: string } | number | null
  customFontName?: string | null
  cardsGap?: 'xs' | 'sm' | 'medium' | 'lg' | 'xl' | 'custom' | null
  customGap?: string | null
}

type CardData = {
  cardKey: string
  title: DefaultTypedEditorState
  titleColor?: string
  src?: string
  expandedContent: DefaultTypedEditorState
  expandedContentColor?: string
  avatarSrc?: string
  userName?: string
  userNameColor?: string
  backContent: DefaultTypedEditorState
  backBackgroundColor?: string
  backContentColor?: string
  hasExpandedContent: boolean
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

const SendaCard: React.FC<{
  card: CardData
  index: number
  cardHeight: string
  isFlipped: boolean
  onToggleFlip: () => void
}> = ({ card, index, cardHeight, isFlipped, onToggleFlip }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(cardRef, {
    margin: '0px 0px -40% 0px',
  })
  const titleStyle: React.CSSProperties = card.titleColor
    ? { color: card.titleColor }
    : { color: '#1f2937' }

  const expandedContentStyle: React.CSSProperties = card.expandedContentColor
    ? { color: card.expandedContentColor }
    : { color: '#374151' }

  const backCardStyle: React.CSSProperties = {
    backgroundColor: card.backBackgroundColor || '#ffffff',
  }
  const backContentStyle: React.CSSProperties = card.backContentColor
    ? { color: card.backContentColor }
    : { color: '#1f2937' }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: 'easeOut',
      }}
      className="relative rounded-[32px] overflow-hidden bg-[#F5F5F7] dark:bg-neutral-900 w-full"
      style={{
        height: cardHeight,
        perspective: '1000px',
      }}
    >
      <div
        className="relative h-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Cara frontal: oculta con visibility cuando está volteada para que no se vea en la trasera */}
        <div
          className={cn(
            'absolute inset-0 [backface-visibility:hidden]',
            isFlipped && 'pointer-events-none',
          )}
          style={{
            backfaceVisibility: 'hidden',
            visibility: isFlipped ? 'hidden' : 'visible',
          }}
        >
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
            {card.src ? (
              <Image
                src={card.src}
                alt="Card background"
                fill
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F7] to-[#E8E8EA] dark:from-neutral-800 dark:to-neutral-900" />
            )}
          </div>

          <div className="relative z-20 px-6 pt-6 pb-4" style={titleStyle}>
            <RichText
              data={card.title}
              enableGutter={false}
              enableProse={false}
              className="text-xl md:text-2xl font-bold [text-wrap:balance]"
            />
          </div>

          <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2">
            <button
              onClick={onToggleFlip}
              className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:opacity-90 hover:scale-110 shadow-sm"
              style={{ backgroundColor: '#ffffff' }}
              aria-label={isFlipped ? 'Ver cara frontal' : 'Ver reverso'}
            >
              {isFlipped ? (
                <IconX className="h-5 w-5" style={{ color: '#2A2822' }} />
              ) : (
                <IconPlus className="h-5 w-5" style={{ color: '#2A2822' }} />
              )}
            </button>
          </div>

          <AnimatePresence>
            {isInView && !isFlipped && card.hasExpandedContent && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
                className="absolute bottom-20 left-4 right-4 md:bottom-24 md:left-6 md:right-6 z-30 bg-white/95 rounded-2xl p-4 md:p-5 shadow-xl max-h-[60%] overflow-y-auto"
              >
                {(card.avatarSrc || card.userName) && (
                  <div className="flex items-center gap-2 mb-3">
                    {card.avatarSrc && (
                      <div className="relative h-8 w-8 md:h-10 md:w-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
                        <Image
                          src={card.avatarSrc}
                          alt={card.userName || 'Avatar'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {card.userName && (
                      <span
                        className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200"
                        style={card.userNameColor ? { color: card.userNameColor } : undefined}
                      >
                        {card.userName}
                      </span>
                    )}
                  </div>
                )}

                <div className="text-sm md:text-base leading-relaxed" style={expandedContentStyle}>
                  <RichText
                    data={card.expandedContent}
                    enableGutter={false}
                    enableProse={false}
                    className="[&_h1]:text-2xl [&_h1]:md:text-3xl [&_h1]:font-bold [&_h1]:mb-3 [&_h1]:mt-2 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:mb-2 [&_h2]:mt-2 [&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:mt-2 [&_h4]:text-base [&_h4]:md:text-lg [&_h4]:font-bold [&_h4]:mb-2 [&_h4]:mt-2 [&_p]:mb-2 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-1 [&_li]:pl-1"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cara trasera: rotateY(180deg) + translateZ(1px) para quedar por delante y verse siempre al voltear */}
        <div
          className={cn(
            'absolute inset-0 rounded-[32px] p-6 flex flex-col justify-between gap-3 [backface-visibility:hidden]',
            !isFlipped && 'pointer-events-none',
          )}
          style={{
            ...backCardStyle,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(1px)',
          }}
        >
          <div className="flex-1 min-h-0 overflow-y-auto flex items-start">
            <div className="w-full" style={backContentStyle}>
              <RichText
                data={card.backContent}
                enableGutter={false}
                enableProse={false}
                className="text-base md:text-lg font-semibold [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-2 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-2 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:mt-2 [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-bold [&_h4]:mb-2 [&_h4]:mt-2 [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-1 [&_li]:pl-1"
              />
            </div>
          </div>

          <div className="flex flex-shrink-0 justify-end pt-3">
            <button
              onClick={onToggleFlip}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:opacity-90 hover:scale-105 shadow-sm"
              style={{ backgroundColor: '#ffffff' }}
              aria-label="Cerrar tarjeta"
            >
              <IconX className="h-5 w-5" style={{ color: '#2A2822' }} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const SendaCardsBlockComponent: React.FC<
  SendaCardsBlock & { disableInnerContainer?: boolean }
> = ({
  anchorId,
  headerContent,
  headerContentColor,
  headerContentMaxWidth,
  title,
  titleColor,
  description,
  descriptionColor,
  cards,
  cardSize,
  customCardWidth,
  customCardHeight,
  backgroundColor,
  boldTextColor,
  fontFamily,
  useCustomFont,
  customFontFile,
  customFontName,
  cardsGap,
  customGap,
  disableInnerContainer,
}) => {
  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `cards-senda-${uniqueId}`

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
        `[data-cards-senda-font="${styleId}"], [data-cards-senda-font="${styleId}"] *, [data-cards-senda-font="${styleId}"] a, [data-cards-senda-font="${styleId}"] button, [data-cards-senda-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
      )
    }
    if (boldTextColor) {
      styles.push(
        `[data-cards-senda-font="${styleId}"] strong, [data-cards-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      )
    }
    return styles.join('\n')
  }

  const combinedStyles = buildStyles()

  const hasNewContent = headerContent && (headerContent as any)?.root?.children?.length > 0
  const hasLegacyTitle = title && (title as any)?.root?.children?.length > 0
  const hasLegacyDescription = description && (description as any)?.root?.children?.length > 0
  const showLegacy = !hasNewContent && (hasLegacyTitle || hasLegacyDescription)
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const getCurrentGap = () => {
    if (typeof window === 'undefined' || !scrollContainerRef.current) return 0
    const style = window.getComputedStyle(scrollContainerRef.current)
    const gapValue = style.columnGap || style.gap || '0px'
    const parsed = parseFloat(gapValue)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const handleToggleFlip = (index: number) => {
    setFlippedCardIndex(flippedCardIndex === index ? null : index)
  }

  const CARD_WIDTH_SCROLL = 355

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const gap = getCurrentGap()
      const step = CARD_WIDTH_SCROLL + gap
      scrollContainerRef.current.scrollBy({
        left: -step,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const gap = getCurrentGap()
      const step = CARD_WIDTH_SCROLL + gap
      scrollContainerRef.current.scrollBy({
        left: step,
        behavior: 'smooth',
      })
    }
  }

  const sizeMap: Record<'sm' | 'md' | 'lg', { width: string; height: string }> = {
    sm: { width: '16rem', height: '30rem' },
    md: { width: '18rem', height: '32rem' },
    lg: { width: '20rem', height: '34rem' },
  }

  let selectedWidth: string
  let selectedHeight: string

  if (cardSize === 'custom' && customCardWidth && customCardHeight) {
    selectedWidth = customCardWidth
    selectedHeight = customCardHeight
  } else {
    const presetKey: 'sm' | 'md' | 'lg' =
      cardSize === 'sm' || cardSize === 'md' || cardSize === 'lg' ? cardSize : 'md'
    const presetSize = sizeMap[presetKey]
    selectedWidth = presetSize.width
    selectedHeight = presetSize.height
  }

  const isRichTextEmpty = (value?: DefaultTypedEditorState | null): boolean => {
    if (!value || !value.root || !Array.isArray((value as any).root?.children)) {
      return true
    }
    const root: any = value.root
    return root.children.every((block: any) => {
      if (!block || !Array.isArray(block.children)) return true
      return block.children.every((child: any) => {
        if (typeof child.text === 'string') {
          return child.text.trim().length === 0
        }
        return true
      })
    })
  }

  const titleFallback: DefaultTypedEditorState = {
    root: {
      children: [
        {
          children: [
            {
              text: 'Card sin título',
              type: 'text',
              version: 1,
              style: '',
              format: 0,
              detail: 0,
              mode: 'normal',
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          textFormat: 0,
          type: 'paragraph',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }

  const contentFallback: DefaultTypedEditorState = {
    root: {
      children: [],
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }

  const cardData: CardData[] =
    cards && cards.length > 0
      ? cards.map((card: NonNullable<SendaCardsBlock['cards']>[number], cardIndex: number) => {
          const mediaDoc =
            card.image && typeof card.image === 'object' ? (card.image as Media) : undefined
          const mediaUrl = getMediaUrl(
            mediaDoc?.sizes?.large?.url || mediaDoc?.sizes?.medium?.url || mediaDoc?.url || null,
          )
          const avatarDoc =
            card.avatarImage && typeof card.avatarImage === 'object'
              ? (card.avatarImage as Media)
              : undefined
          const avatarUrl = getMediaUrl(
            avatarDoc?.sizes?.thumbnail?.url ||
              avatarDoc?.sizes?.small?.url ||
              avatarDoc?.url ||
              null,
          )
          const hasExpandedContent = !isRichTextEmpty(card.expandedContent)
          const rawId = (card as { id?: string }).id
          const cardKey = `card-${cardIndex}-${rawId ?? 'noid'}`

          return {
            cardKey,
            title: card.title || titleFallback,
            titleColor: card.titleColor || undefined,
            src: mediaUrl || undefined,
            expandedContent: card.expandedContent || contentFallback,
            expandedContentColor: card.expandedContentColor || undefined,
            avatarSrc: avatarUrl || undefined,
            userName: card.userName || undefined,
            userNameColor: card.userNameColor ?? undefined,
            backContent: card.backContent || contentFallback,
            backBackgroundColor: card.backBackgroundColor || undefined,
            backContentColor: card.backContentColor ?? undefined,
            hasExpandedContent,
          }
        })
      : []

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft: scrollLeftVal, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeftVal > 0)
      setCanScrollRight(scrollLeftVal < scrollWidth - clientWidth - 1)
      const gap = getCurrentGap()
      const step = CARD_WIDTH_SCROLL + gap
      const calculatedIndex = step > 0 ? Math.round(scrollLeftVal / step) : 0
      setCurrentCardIndex(Math.min(calculatedIndex, cardData.length - 1))
    }
  }

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
  }, [cardData.length])

  const backgroundStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent',
  }

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
  const gapId = `senda-cards-gap-${cardsGap || 'medium'}`
  const sanitized = (desktopGap || '').replace(/["'\\]/g, '').trim()
  const safeDesktopGap =
    sanitized &&
    sanitized !== 'undefined' &&
    sanitized.length < 50
      ? sanitized
      : '2rem'

  const calculateMaxCardsWidth = (): string => {
    const numCards = cardData.length
    if (numCards === 0) return '420px'
    const cardMaxWidth = 420
    const gaps = numCards > 1 ? numCards - 1 : 0
    const gapValue = desktopGap.includes('rem')
      ? parseFloat(desktopGap) * 16
      : parseFloat(desktopGap) || 0
    const totalWidth = numCards * cardMaxWidth + gaps * gapValue
    return `${totalWidth}px`
  }

  const maxCardsContainerWidth = calculateMaxCardsWidth()

  const headerTextContainerStyle: React.CSSProperties = {}
  if (headerContentMaxWidth && headerContentMaxWidth.trim()) {
    const raw = headerContentMaxWidth.trim()
    const hasUnits = /[a-z%]+$/i.test(raw)
    headerTextContainerStyle.maxWidth = hasUnits ? raw : `${raw}px`
  }

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <div
        id={sanitizeAnchorId(anchorId, 'cards-senda')}
        data-cards-senda-font={styleId}
        data-desktop-gap={cardsGap === 'custom' ? safeDesktopGap : undefined}
        className={cn(
          'relative w-full py-12 md:py-16 lg:py-20 px-0 overflow-x-hidden',
          'font-sans',
        )}
        style={{
          ...backgroundStyle,
          ...(cardsGap === 'custom' && safeDesktopGap ? { ['--senda-cards-desktop-gap' as string]: safeDesktopGap } : {}),
        }}
      >
        <div className={cn('mx-auto w-full min-w-0 px-4 lg:px-6 overflow-x-hidden', !disableInnerContainer && 'max-w-7xl')}>
          <style
            dangerouslySetInnerHTML={{
              __html: `
 .${gapId} {
 gap: 1.5rem !important;
 }
 @media (max-width: 1219px) {
 .${gapId} {
 gap: 1.5rem !important;
 column-gap: 1.5rem !important;
 row-gap: 1.5rem !important;
 }
 }
 @media (min-width: 1220px) {
 .senda-cards-desktop-content {
 display: grid !important;
 grid-template-columns: repeat(auto-fit, minmax(360px, 420px)) !important;
 gap: var(--senda-cards-desktop-gap, ${safeDesktopGap}) !important;
 justify-content: center !important;
 width: 100% !important;
 max-width: ${maxCardsContainerWidth} !important;
 margin-left: auto !important;
 margin-right: auto !important;
 }
 .senda-cards-desktop-content .senda-cards-text-container {
 grid-column: 1 / -1 !important;
 justify-content: flex-start;
 padding-left: 1.5rem;
 }
 .senda-cards-desktop-content .senda-cards-carousel-wrapper {
 grid-column: 1 / -1 !important;
 }
 .${gapId} {
 display: grid !important;
 overflow: visible !important;
 gap: var(--senda-cards-desktop-gap, ${safeDesktopGap}) !important;
 column-gap: var(--senda-cards-desktop-gap, ${safeDesktopGap}) !important;
 row-gap: var(--senda-cards-desktop-gap, ${safeDesktopGap}) !important;
 }
 .${gapId}.senda-cards-grid {
 grid-template-columns: repeat(auto-fit, minmax(360px, 420px)) !important;
 justify-content: center !important;
 }
 .senda-cards-text-inner {
 max-width: 100%;
 min-width: 0;
 }
 }
 .senda-cards-text-container {
 display: flex;
 justify-content: flex-start;
 width: 100%;
 max-width: 100%;
 min-width: 0;
 overflow: hidden;
 box-sizing: border-box;
 }
 .senda-cards-text-inner {
 width: 100%;
 max-width: 100%;
 min-width: 0;
 box-sizing: border-box;
 overflow: hidden;
 }
 .senda-cards-header-box {
 width: 100%;
 max-width: 100%;
 min-width: 0;
 box-sizing: border-box;
 overflow-wrap: break-word;
 word-wrap: break-word;
 word-break: break-word;
 overflow: hidden;
 }
 @media (max-width: 1219px) {
 .senda-cards-text-container {
 max-width: 100% !important;
 }
 .senda-cards-text-inner {
 max-width: 100% !important;
 }
 .senda-cards-header-box {
 max-width: 100% !important;
 min-height: 0;
 }
 }
 @media (max-width: 1219px) {
 .senda-cards-carousel-wrapper {
 margin-left: -1rem !important;
 margin-right: -1rem !important;
 width: calc(100% + 2rem) !important;
 }
 .senda-cards-scroll-viewport {
 overflow-x: auto !important;
 padding-left: 1rem !important;
 padding-right: 1rem !important;
 }
 .senda-cards-card-cell {
 width: 355px !important;
 min-width: 355px !important;
 max-width: 355px !important;
 }
 .senda-cards-card-cell > * {
 height: 516px !important;
 min-height: 516px !important;
 max-height: 516px !important;
 }
 }
 @media (min-width: 1024px) and (max-width: 1219px) {
 .senda-cards-carousel-wrapper {
 margin-left: -1.5rem !important;
 margin-right: -1.5rem !important;
 width: calc(100% + 3rem) !important;
 }
 .senda-cards-scroll-viewport {
 padding-left: 1.5rem !important;
 padding-right: 1.5rem !important;
 }
 }
 @media (min-width: 1220px) {
 .senda-cards-scroll-viewport {
 overflow: visible !important;
 padding-left: 0 !important;
 padding-right: 0 !important;
 }
 .senda-cards-carousel-wrapper {
 margin-left: 0 !important;
 margin-right: 0 !important;
 width: 100% !important;
 }
 .senda-cards-nav-buttons {
 display: none !important;
 }
 .senda-cards-grid .senda-cards-card-cell {
 width: 100% !important;
 min-width: 0 !important;
 max-width: none !important;
 flex-shrink: 0 !important;
 }
 }
 `,
            }}
          />

          <div className="senda-cards-desktop-content w-full">
          <motion.div
            className="senda-cards-text-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
          >
            <div
              className="senda-cards-text-inner pl-0"
              style={{ boxSizing: 'border-box' }}
            >
              <div className="senda-cards-header-box" style={headerTextContainerStyle}>
                {hasNewContent && (
                  <div
                    className="mb-10 md:mb-12 leading-relaxed"
                    style={headerContentColor ? { color: headerContentColor } : {}}
                  >
                    <RichText
                      data={headerContent}
                      enableGutter={false}
                      enableProse={false}
                      className="[&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:lg:text-5xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-2 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-2 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:mt-2 [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-bold [&_h4]:mb-2 [&_h4]:mt-2 [&_p]:text-base [&_p]:md:text-lg [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-1 [&_li]:pl-1"
                    />
                  </div>
                )}
                {showLegacy && (
                  <>
                    {hasLegacyTitle && (
                      <div
                        className="mb-4 md:mb-5"
                        style={titleColor ? { color: titleColor } : {}}
                      >
                        <RichText
                          data={title}
                          enableGutter={false}
                          enableProse={false}
                          className="text-3xl md:text-4xl lg:text-5xl font-bold"
                        />
                      </div>
                    )}
                    {hasLegacyDescription && (
                      <div
                        className="mb-10 md:mb-12 leading-relaxed"
                        style={descriptionColor ? { color: descriptionColor } : {}}
                      >
                        <RichText
                          data={description}
                          enableGutter={false}
                          enableProse={false}
                          className="text-base md:text-lg [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-2 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-2 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:mt-2 [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-bold [&_h4]:mb-2 [&_h4]:mt-2 [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-1 [&_li]:pl-1"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>

          <div className="senda-cards-carousel-wrapper relative -ml-4 -mr-4 w-[calc(100%+2rem)]">
            <div
              ref={scrollContainerRef}
              className={cn(
                'senda-cards-scroll-viewport flex senda-cards-grid',
                'overflow-x-auto scroll-smooth',
                'pl-4 pr-4',
                '[scrollbar-width:none]',
                '[-ms-overflow-style:none]',
                '[&::-webkit-scrollbar]:hidden',
                gapId,
              )}
              onScroll={checkScrollability}
            >
              {cardData.map((card, index) => (
                <div
                  key={card.cardKey}
                  className={cn(
                    'senda-cards-card-cell flex-shrink-0 w-[355px] min-w-[355px] max-w-[355px]',
                  )}
                >
                  <SendaCard
                    card={card}
                    index={index}
                    isFlipped={flippedCardIndex === index}
                    onToggleFlip={() => handleToggleFlip(index)}
                    cardHeight={selectedHeight}
                  />
                </div>
              ))}
            </div>

            <div className="senda-cards-nav-buttons flex items-center justify-center gap-4 mt-6">
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
                  {cardData.map((_, index) => (
                    <div
                      key={cardData[index].cardKey}
                      className={cn(
                        'transition-all duration-300',
                        index === currentCardIndex
                          ? 'w-8 h-3 rounded-full bg-white'
                          : 'w-3 h-3 rounded-full bg-[#e5dfd2]',
                      )}
                      aria-label={`Card ${index + 1}`}
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
      </div>
    </>
  )
}
