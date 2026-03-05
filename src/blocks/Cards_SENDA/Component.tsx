'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { IconX, IconPlus, IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import { cn } from '@/utilities/ui'

/** Tipo local para media (mismo criterio que Layout_SENDA: usar .url del objeto poblado y getMediaUrl para producción). */
type ImageMedia = {
  url?: string | null
  alt?: string | null
  sizes?: {
    large?: { url?: string }
    medium?: { url?: string }
    thumbnail?: { url?: string }
    small?: { url?: string }
  }
} | number

/** Obtiene la URL de la imagen de la card: prioriza .url del media (como Layout_SENDA) y la normaliza con getMediaUrl para producción. */
function getCardImageSrc(media: ImageMedia | null | undefined): string {
  if (!media || typeof media !== 'object') return ''
  const raw = media.url ?? media.sizes?.large?.url ?? media.sizes?.medium?.url ?? null
  return getMediaUrl(raw)
}

/** Obtiene la URL del avatar: prioriza .url del media y la normaliza con getMediaUrl para producción. */
function getCardAvatarSrc(media: ImageMedia | null | undefined): string {
  if (!media || typeof media !== 'object') return ''
  const raw = media.url ?? media.sizes?.thumbnail?.url ?? media.sizes?.small?.url ?? null
  return getMediaUrl(raw)
}

/** Tipos locales del bloque (incluye campos legacy para compatibilidad). */
type SendaCardsBlock = {
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  headerContentColor?: string | null
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
    image?: ImageMedia | null
    expandedContent?: DefaultTypedEditorState | null
    expandedContentColor?: string | null
    avatarImage?: ImageMedia | null
    userName?: string | null
    backContent?: DefaultTypedEditorState | null
    backBackgroundColor?: string | null
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
 /** Id del ítem en Payload (puede repetirse si hay duplicados); se usa con index para keys únicas. */
 cardKey: string
 title: DefaultTypedEditorState
 titleColor?: string
 src?: string
 expandedContent: DefaultTypedEditorState
 expandedContentColor?: string
 avatarSrc?: string
 userName?: string
 backContent: DefaultTypedEditorState
 backBackgroundColor?: string
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
 // La animación se dispara cuando la tarjeta entra/sale por la parte inferior del viewport
 // para que al bajar aparezca y al subir desaparezca
 margin: '0px 0px -40% 0px',
 })
 const titleStyle: React.CSSProperties = card.titleColor
 ? { color: card.titleColor }
 : { color: '#1f2937' } // Color oscuro por defecto (neutral-800)

 const expandedContentStyle: React.CSSProperties = card.expandedContentColor
 ? { color: card.expandedContentColor }
 : { color: '#374151' } // Color gris oscuro por defecto (neutral-700)

 const backCardStyle: React.CSSProperties = {
 backgroundColor: card.backBackgroundColor || '#ffffff',
 }

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
 {/* Contenedor 3D para el flip de la tarjeta */}
 <div
 className="relative h-full transition-transform duration-700 [transform-style:preserve-3d]"
 style={{
 transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
 }}
 >
 {/* Cara frontal */}
 <div
 className={cn(
 'absolute inset-0 [backface-visibility:hidden]',
 isFlipped && 'pointer-events-none',
 )}
 >
 {/* Imagen de fondo */}
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

 {/* Título sobre la imagen */}
 <div className="relative z-20 px-6 pt-6 pb-4" style={titleStyle}>
 <RichText
 data={card.title}
 enableGutter={false}
 enableProse={false}
 className="text-xl md:text-2xl font-bold [text-wrap:balance]"
 />
 </div>

 {/* Controles en la cara frontal */}
 <div className="absolute bottom-4 right-4 z-40 flex items-center gap-2">
 {/* Botón "+" para voltear la tarjeta (mostrar reverso / volver al frontal) */}
 <button
 onClick={onToggleFlip}
 className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 transition-all hover:bg-neutral-300 hover:scale-110 dark:bg-neutral-700 dark:hover:bg-neutral-600 shadow-sm"
 aria-label={isFlipped ? 'Ver cara frontal' : 'Ver reverso'}
 >
 {isFlipped ? (
 <IconX className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
 ) : (
 <IconPlus className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
 )}
 </button>
 </div>

 {/* Pop up con el contenido expandible en la cara frontal */}
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
 {/* Avatar y nombre en la parte superior del popup */}
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
 <span className="text-sm md:text-base font-semibold text-neutral-800 dark:text-neutral-200">
 {card.userName}
 </span>
 )}
 </div>
 )}

 {/* Contenido del mensaje (scrollable) */}
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

 {/* Cara trasera */}
 <div
 className={cn(
 'absolute inset-0 rounded-[32px] p-6 flex flex-col justify-between gap-3 [backface-visibility:hidden] [transform:rotateY(180deg)]',
 !isFlipped && 'pointer-events-none',
 )}
 style={backCardStyle}
 >
 {/* Contenido del reverso - respeta la alineación del RichText */}
 <div className="flex-1 flex items-start">
 <div className="w-full">
 <RichText
 data={card.backContent}
 enableGutter={false}
 enableProse={false}
 className="text-base md:text-lg font-semibold [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:mt-2 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-2 [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:mb-2 [&_h3]:mt-2 [&_h4]:text-lg [&_h4]:md:text-xl [&_h4]:font-bold [&_h4]:mb-2 [&_h4]:mt-2 [&_p]:mb-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-1 [&_li]:pl-1"
 />
 </div>
 </div>

 {/* Botón para cerrar / volver al frontal */}
 <div className="flex justify-end">
 <button
 onClick={onToggleFlip}
 className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 transition-all hover:bg-neutral-300 hover:scale-105 dark:bg-neutral-700 dark:hover:bg-neutral-600 shadow-sm"
 aria-label="Cerrar tarjeta"
 >
 <IconX className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
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
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined
 // Preferir el nuevo campo único; si no existe, usar título + descripción (legacy)
 const hasNewContent = headerContent && (headerContent as any)?.root?.children?.length > 0
 const hasLegacyTitle = title && (title as any)?.root?.children?.length > 0
 const hasLegacyDescription = description && (description as any)?.root?.children?.length > 0
 const showLegacy = !hasNewContent && (hasLegacyTitle || hasLegacyDescription)
 const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null)
 const [canScrollLeft, setCanScrollLeft] = useState(false)
 const [canScrollRight, setCanScrollRight] = useState(true)
 const [currentCardIndex, setCurrentCardIndex] = useState(0)
 const scrollContainerRef = useRef<HTMLDivElement>(null)

 // Obtener el gap real aplicado a las cards (tanto en móvil como en desktop)
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

 // Scroll hacia la izquierda
 const scrollLeft = () => {
 if (scrollContainerRef.current) {
 const cardWidth = 360
 const gap = getCurrentGap()
 scrollContainerRef.current.scrollBy({
 left: -(cardWidth + gap),
 behavior: 'smooth',
 })
 }
 }

 // Scroll hacia la derecha
 const scrollRight = () => {
 if (scrollContainerRef.current) {
 const cardWidth = 360
 const gap = getCurrentGap()
 scrollContainerRef.current.scrollBy({
 left: cardWidth + gap,
 behavior: 'smooth',
 })
 }
 }

 // Tamaños de card disponibles (ancho fijo, alto proporcional)
 const sizeMap: Record<'sm' | 'md' | 'lg', { width: string; height: string }> = {
 sm: { width: '16rem', height: '30rem' },
 md: { width: '18rem', height: '32rem' },
 lg: { width: '20rem', height: '34rem' },
 }

 // Determinar tamaño seleccionado (incluye tamaño personalizado)
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

  const cardData: CardData[] =
    cards && cards.length > 0
      ? cards.map((card: NonNullable<SendaCardsBlock['cards']>[number], cardIndex: number) => {
 // Utilidad para comprobar si un richText está realmente vacío
 const isRichTextEmpty = (value?: DefaultTypedEditorState | null): boolean => {
 if (!value || !value.root || !Array.isArray((value as any).root?.children)) {
 return true
 }

 const root: any = value.root

 // Consideramos vacío si todos los nodos hijos son párrafos sin texto o con solo espacios
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

          const mediaUrl = getCardImageSrc(card.image)
          const avatarUrl = getCardAvatarSrc(card.avatarImage)

 // Fallback para título si no hay richText
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

 // Fallback vacío para contenido expandido si no hay richText
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

 const hasExpandedContent = !isRichTextEmpty(card.expandedContent)
          // Key única por card: índice + id si existe. Evita "duplicate key" si dos ítems comparten el mismo id (Payload).
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
 backContent: card.backContent || contentFallback,
 backBackgroundColor: card.backBackgroundColor || undefined,
 hasExpandedContent,
 }
 })
 : []

 // Verificar si se puede hacer scroll en cada dirección
 const checkScrollability = () => {
 if (scrollContainerRef.current) {
 const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
 setCanScrollLeft(scrollLeft > 0)
 setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
 
 // Calcular el índice de la card actual basado en la posición del scroll
 const cardWidth = 360 // min-width de las cards
 const gap = getCurrentGap()
 const scrollPosition = scrollLeft
 const calculatedIndex = Math.round(scrollPosition / (cardWidth + gap))
 setCurrentCardIndex(Math.min(calculatedIndex, cardData.length - 1))
 }
 }

 // Verificar scrollability al montar y cuando cambien las cards
 useEffect(() => {
 checkScrollability()
 const container = scrollContainerRef.current
 if (container) {
 container.addEventListener('scroll', checkScrollability)
 // También verificar cuando cambie el tamaño de la ventana
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

 // Grid con ancho fijo para cards - usar auto-fit para que se adapte automáticamente
 // Las cards siempre tendrán el mismo tamaño según la configuración
 const gridStyle: React.CSSProperties = {
 // Cada card será responsive con un ancho mínimo de 360px y máximo de 420px
 gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 420px))',
 justifyContent: 'center',
 }

 // Determinar el gap según la configuración
 // IMPORTANTE: en móvil usamos SIEMPRE un gap fijo (1.5rem / 24px)
 // y solo en desktop el gap responde a lo configurado en el admin.
 const getDesktopGap = (): string => {
 // Si es personalizado, usar el valor exacto (puede ser 0px, 1px, etc.)
 if (cardsGap === 'custom') {
 if (customGap && customGap.trim()) {
 // Asegurar que el valor tenga unidades si es un número
 const gapValue = customGap.trim()
 // Si es solo un número, asumir px
 if (/^\d+(\.\d+)?$/.test(gapValue)) {
 return `${gapValue}px`
 }
 return gapValue
 }
 // Si es custom pero no hay valor, usar fallback
 return '2rem'
 }

 const selectedGap = cardsGap || 'medium'
 const gapMap: Record<'xs' | 'sm' | 'medium' | 'lg' | 'xl', string> = {
 xs: '1rem', // 16px
 sm: '1.5rem', // 24px
 medium: '2rem', // 32px
 lg: '3rem', // 48px
 xl: '4rem', // 64px
 }

 return gapMap[selectedGap] || gapMap.medium
 }

 const desktopGap = getDesktopGap()
 
 // Generar CSS para media query responsive
 const gapId = `senda-cards-gap-${cardsGap || 'medium'}`
 
 // Calcular el ancho máximo del contenedor de cards para alinear el texto
 const calculateMaxCardsWidth = (): string => {
 const numCards = cardData.length
 if (numCards === 0) return '420px'
 const cardMaxWidth = 420 // px
 const gaps = numCards > 1 ? (numCards - 1) : 0
 // Convertir gap a px si es necesario
 const gapValue = desktopGap.includes('rem') 
 ? parseFloat(desktopGap) * 16 
 : parseFloat(desktopGap) || 0
 const totalWidth = (numCards * cardMaxWidth) + (gaps * gapValue)
 return `${totalWidth}px`
 }
 
 const maxCardsContainerWidth = calculateMaxCardsWidth()
 // En desktop: ancho máximo del RichText del encabezado (más estrecho que la fila de cards), alineado al margen izquierdo de las cards
 const headerTextMaxWidthDesktop = 'min(480px, 65vw)'
 
 // Debug eliminado (ya validado): el gap se calcula correctamente desde el admin.

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      {/* Contenedor a ancho completo para que el color de fondo llegue a los extremos en desktop */}
      <div
        id={sanitizeAnchorId(anchorId, 'cards-senda')}
        data-cards-senda-font={styleId}
        className="relative w-full"
        style={{ ...backgroundStyle, ...fontStyle }}
      >
        <div
          className={cn(
            'relative w-full py-12 md:py-16 lg:py-20 px-4 md:px-6',
            { container: !disableInnerContainer },
          )}
        >
 <div className={cn('mx-auto', { 'max-w-7xl': !disableInnerContainer })}>
 {/* CSS para gap responsive y grid en desktop */}
 <style
 dangerouslySetInnerHTML={{
 __html: `
 /* Gap en móvil/tablet (flex + scroll horizontal) - fijo (1.5rem) */
 .${gapId} {
 gap: 1.5rem !important;
 }
 
 /* Texto anclado a la primera tarjeta en scroll: mismo inicio que la fila de cards */
 .senda-cards-text-container {
 display: flex;
 justify-content: flex-start;
 width: 100%;
 }
 .senda-cards-text-inner {
 width: 100%;
 max-width: 360px;
 }
 
 /* Desktop: cards centradas y texto anclado al bloque de cards (mismo ancho y centro) */
 @media (min-width: 1024px) {
 .${gapId} {
 gap: ${desktopGap} !important;
 column-gap: ${desktopGap} !important;
 row-gap: ${desktopGap} !important;
 grid-template-columns: repeat(auto-fit, minmax(360px, 420px)) !important;
 justify-content: center !important;
 }
 
 div.${gapId} {
 gap: ${desktopGap} !important;
 column-gap: ${desktopGap} !important;
 row-gap: ${desktopGap} !important;
 }

 .senda-cards-text-container {
 justify-content: flex-start;
 max-width: ${maxCardsContainerWidth};
 margin-left: auto;
 margin-right: auto;
 }
 .senda-cards-text-inner {
 max-width: ${headerTextMaxWidthDesktop};
 min-width: 360px;
 }
 }
 `,
 }}
 />
 
 {/* Encabezado: un solo rich text (headerContent) o legacy título + descripción */}
 <div className="senda-cards-text-container">
 <div className="senda-cards-text-inner">
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
 
 {/* Contenedor de cards con scroll horizontal en móvil y grid en desktop */}
 <div className="relative">
 {/* Contenedor scrollable en móvil, grid en desktop */}
 <div
 ref={scrollContainerRef}
 className={cn(
 'flex lg:grid',
 'overflow-x-auto lg:overflow-visible',
 'scroll-smooth',
 '[scrollbar-width:none]', // Firefox
 '[-ms-overflow-style:none]', // IE/Edge
 '[&::-webkit-scrollbar]:hidden', // Chrome/Safari
 gapId,
 )}
 onScroll={checkScrollability}
 >
 {cardData.map((card, index) => (
 <div
 key={card.cardKey}
 className={cn(
 // Móvil/tablet: ancho fijo para el scroll horizontal
 'flex-shrink-0 w-[360px] min-w-[360px] max-w-[420px]',
 // Desktop (lg): el grid controla el ancho
 'lg:w-full lg:min-w-0 lg:max-w-none lg:flex-shrink',
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

 {/* Botones de navegación e indicadores (solo con scroll horizontal; ocultos en desktop con grid) */}
 <div className="flex items-center justify-center gap-4 mt-6 lg:hidden">
 {/* Botón izquierda */}
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

 {/* Indicadores tipo "pill" */}
 <div className="flex items-center justify-center px-6 py-3 rounded-full bg-[#c5bdaa]">
 <div className="flex items-center gap-3">
 {cardData.map((card, index) => (
 <div
 key={card.cardKey}
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

 {/* Botón derecha */}
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