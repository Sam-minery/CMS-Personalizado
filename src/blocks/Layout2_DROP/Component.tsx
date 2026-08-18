'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'

type MediaLike = {
  url?: string | null
  alt?: string | null
  sizes?: { large?: { url?: string }; medium?: { url?: string } }
} | number

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
}

export type Layout2DropBlockType = {
  blockName?: string
  blockType?: 'layout2Drop'
  anchorId?: string | null
  mainContent?: DefaultTypedEditorState | null
  secondaryContent?: DefaultTypedEditorState | null
  backgroundColor?: string | null
  textColorPrimary?: string | null
  textColorSecondary?: string | null
  boldTextColor?: string | null
  prestaciones?: Array<{
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    backgroundColor?: string | null
    textColor?: string | null
    boldTextColor?: string | null
    iconBackgroundColor?: string | null
    id?: string | null
  }> | null
}

const NAVY = '#101835'
const ACCENT = '#a1004a'
const SECONDARY = '#5c6b8a'
const ICON_BG = '#fce4ec'

/** Separador SVG hardcodeado (línea magenta con diamante central). */
const HEADER_DIVIDER_SVG = (
  <svg
    width="72"
    height="12"
    viewBox="0 0 72 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M2 6H30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M42 6H70"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M36 2.5L39.5 6L36 9.5L32.5 6L36 2.5Z"
      fill="currentColor"
    />
  </svg>
)

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'layout2-drop'
}

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '') || ''
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const m = media as {
    url?: string
    sizes?: { large?: { url?: string }; medium?: { url?: string } }
  }
  const url = m?.sizes?.large?.url || m?.sizes?.medium?.url || m?.url || ''
  return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
}

function getIconAlt(icon?: IconGroup | null): string {
  if (icon?.mediaImage && typeof icon.mediaImage === 'object') {
    return icon.mediaImage.alt || icon.alt || 'Icono'
  }
  return icon?.alt || 'Icono'
}

function hasRichText(data?: DefaultTypedEditorState | null): boolean {
  if (!data || typeof data !== 'object') return false
  const root = (data as { root?: { children?: unknown[] } }).root
  if (!Array.isArray(root?.children) || root.children.length === 0) return false

  const hasVisibleText = (nodes: unknown[]): boolean => {
    for (const node of nodes) {
      if (!node || typeof node !== 'object') continue
      const n = node as { text?: string; children?: unknown[] }
      if (typeof n.text === 'string' && n.text.trim().length > 0) return true
      if (Array.isArray(n.children) && hasVisibleText(n.children)) return true
    }
    return false
  }

  return hasVisibleText(root.children)
}

function IconMedia({
  icon,
  className,
  imgClassName,
}: {
  icon?: IconGroup | null
  className?: string
  imgClassName?: string
}) {
  if (!icon) return null

  const useMedia = icon.useMedia !== false && icon.mediaImage
  const src = useMedia ? getMediaUrlSafe(icon.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <img src={src} alt={getIconAlt(icon)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  if (useMedia) return null

  const svg = icon.iconSVG && String(icon.iconSVG).trim() ? sanitizeSVG(icon.iconSVG) : ''
  if (!svg) return null
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden
    />
  )
}

function RichScope({
  scopeClass,
  textColor,
  boldTextColor,
  className,
  children,
}: {
  scopeClass: string
  textColor?: string | null
  boldTextColor?: string | null
  className?: string
  children: React.ReactNode
}) {
  const color = sanitizeCssColor(textColor)
  const bold = sanitizeCssColor(boldTextColor)
  return (
    <div
      className={cn(
        scopeClass,
        'layout2-drop-richtext [&_p]:m-0 [&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_h4]:m-0 [&_h5]:m-0 [&_h6]:m-0',
        className,
      )}
      style={
        {
          ...(color ? { color, ['--l2d-text' as string]: color } : {}),
          ...(bold ? { ['--l2d-bold' as string]: bold } : {}),
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

type PrestacionItem = NonNullable<Layout2DropBlockType['prestaciones']>[number]

function PrestacionCard({
  item,
  index,
  total,
  showIndexBadge,
  variant = 'desktop',
}: {
  item: PrestacionItem
  index: number
  total: number
  showIndexBadge?: boolean
  variant?: 'desktop' | 'mobile'
}) {
  const cardBg = sanitizeCssColor(item.backgroundColor) || '#ffffff'
  const iconBg = sanitizeCssColor(item.iconBackgroundColor) || ICON_BG
  const textColor = sanitizeCssColor(item.textColor) || SECONDARY
  const boldColor = sanitizeCssColor(item.boldTextColor) || NAVY
  const pad = String(index + 1).padStart(2, '0')
  const totalPad = String(total).padStart(2, '0')
  const isMobile = variant === 'mobile'

  return (
    <article
      className={cn(
        'layout2-drop-card flex h-full w-full flex-col items-center rounded-2xl text-center shadow-[0_8px_32px_rgba(16,24,53,0.08)]',
        isMobile ? 'px-6 py-10' : 'px-5 py-7',
      )}
      style={{ backgroundColor: cardBg }}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-full',
          isMobile ? 'mb-5 h-24 w-24' : 'mb-3.5 h-14 w-14',
        )}
        style={{ backgroundColor: iconBg }}
      >
        <IconMedia
          icon={item.icon}
          className={cn(
            'text-[var(--l2d-accent,#a1004a)] [&_svg]:h-full [&_svg]:w-full [&_svg]:text-current',
            isMobile ? 'h-12 w-12' : 'h-7 w-7',
          )}
          imgClassName={isMobile ? 'h-12 w-12' : 'h-7 w-7'}
        />
      </div>

      {showIndexBadge ? (
        <span
          className="mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
          style={{
            backgroundColor: iconBg,
            color: sanitizeCssColor(item.boldTextColor) || ACCENT,
          }}
        >
          {pad} / {totalPad}
        </span>
      ) : null}

      {hasRichText(item.content) ? (
        <RichScope
          scopeClass="layout2-drop-card-content"
          textColor={textColor}
          boldTextColor={boldColor}
          className="w-full"
        >
          <RichText data={item.content!} enableGutter={false} enableProse={false} />
        </RichScope>
      ) : null}
    </article>
  )
}

export const Layout2DropBlock: React.FC<Layout2DropBlockType> = (props) => {
  const {
    anchorId,
    mainContent,
    secondaryContent,
    backgroundColor,
    textColorPrimary,
    textColorSecondary,
    boldTextColor,
    prestaciones,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `layout2-drop-${uniqueId}`
  const sectionId = sanitizeAnchorId(anchorId)

  const blockBg = sanitizeCssColor(backgroundColor) || '#ffffff'
  const primaryColor = sanitizeCssColor(textColorPrimary) || NAVY
  const secondaryColor = sanitizeCssColor(textColorSecondary) || SECONDARY
  const boldColor = sanitizeCssColor(boldTextColor) || ACCENT

  const items = Array.isArray(prestaciones)
    ? prestaciones.filter((p) => hasRichText(p?.content) || p?.icon).slice(0, 6)
    : []

  /** Filas de 3 para desktop (última fila centrada). */
  const desktopRows: PrestacionItem[][] = []
  for (let i = 0; i < items.length; i += 3) {
    desktopRows.push(items.slice(i, i + 3))
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0)
  }, [items.length, activeIndex])

  const goTo = useCallback(
    (index: number) => {
      if (items.length === 0) return
      const next = ((index % items.length) + items.length) % items.length
      setActiveIndex(next)
    },
    [items.length],
  )

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
    touchDeltaX.current = 0
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = (e.touches[0]?.clientX ?? 0) - touchStartX.current
  }

  const onTouchEnd = () => {
    const delta = touchDeltaX.current
    touchStartX.current = null
    touchDeltaX.current = 0
    if (Math.abs(delta) < 40) return
    if (delta < 0) goTo(activeIndex + 1)
    else goTo(activeIndex - 1)
  }

  return (
    <section
      id={sectionId}
      data-layout2-drop={styleId}
      className="layout2-drop relative w-full overflow-hidden"
      style={
        {
          backgroundColor: blockBg,
          ['--l2d-accent' as string]: boldColor,
        } as React.CSSProperties
      }
    >
      <style>{`
        [data-layout2-drop="${styleId}"] .layout2-drop-richtext strong,
        [data-layout2-drop="${styleId}"] .layout2-drop-richtext b {
          color: var(--l2d-bold, inherit) !important;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-main {
          font-size: clamp(1.625rem, 3.2vw, 2.375rem);
          line-height: 1.2;
          font-weight: 700;
          text-align: center;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-main .payload-richtext :is(h1, h2, h3, h4, h5, h6, p) {
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          margin: 0;
          text-align: center;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-secondary {
          font-size: clamp(0.95rem, 1.4vw, 1.125rem);
          line-height: 1.55;
          font-weight: 400;
          text-align: center;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-secondary .payload-richtext :is(h1, h2, h3, h4, h5, h6, p) {
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          margin: 0;
          text-align: center;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-card-content {
          font-size: 0.95rem;
          line-height: 1.55;
          font-weight: 400;
          text-align: center;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-card-content .payload-richtext :is(h1, h2, h3, h4, h5, h6) {
          font-size: clamp(1.05rem, 1.5vw, 1.2rem);
          line-height: 1.3;
          font-weight: 700;
          margin: 0 0 0.65rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          [data-layout2-drop="${styleId}"] .layout2-drop-card-content {
            font-size: 0.875rem;
            line-height: 1.5;
          }
          [data-layout2-drop="${styleId}"] .layout2-drop-card-content .payload-richtext :is(h1, h2, h3, h4, h5, h6) {
            font-size: 1.05rem;
            margin: 0 0 0.5rem;
          }
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-card-content .payload-richtext p {
          font-size: inherit;
          line-height: inherit;
          margin: 0;
          text-align: center;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-card-content .payload-richtext p + p {
          margin-top: 0.5rem;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-card-content .payload-richtext strong,
        [data-layout2-drop="${styleId}"] .layout2-drop-card-content .payload-richtext b {
          font-weight: 700;
        }
        /* Desktop: cards compactas, filas centradas → margen lateral amplio */
        [data-layout2-drop="${styleId}"] .layout2-drop-desktop-grid {
          width: 100%;
          max-width: 990px;
          margin-inline: auto;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-desktop-row {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 1.35rem;
          width: 100%;
        }
        [data-layout2-drop="${styleId}"] .layout2-drop-desktop-row > .layout2-drop-card {
          flex: 0 0 310px;
          width: 310px;
          max-width: 310px;
        }
        @media (min-width: 1024px) {
          [data-layout2-drop="${styleId}"] .layout2-drop-desktop-row {
            gap: 1.5rem;
          }
        }
      `}</style>

      <div className="relative mx-auto w-full max-w-5xl px-7 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        {/* Header */}
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center sm:mb-14">
          {hasRichText(mainContent) ? (
            <RichScope
              scopeClass="layout2-drop-main"
              textColor={primaryColor}
              boldTextColor={boldColor}
              className="mb-4 w-full sm:mb-5"
            >
              <RichText data={mainContent!} enableGutter={false} enableProse={false} />
            </RichScope>
          ) : null}

          <div className="mb-4 text-[var(--l2d-accent,#a1004a)] sm:mb-5" aria-hidden>
            {HEADER_DIVIDER_SVG}
          </div>

          {hasRichText(secondaryContent) ? (
            <RichScope
              scopeClass="layout2-drop-secondary"
              textColor={secondaryColor}
              boldTextColor={boldColor}
              className="w-full"
            >
              <RichText data={secondaryContent!} enableGutter={false} enableProse={false} />
            </RichScope>
          ) : null}
        </div>

        {/* Desktop: filas de 3 cards compactas, centradas */}
        {items.length > 0 ? (
          <div className="layout2-drop-desktop-grid hidden md:flex md:flex-col md:gap-5 lg:gap-6">
            {desktopRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="layout2-drop-desktop-row"
                data-cols={row.length}
              >
                {row.map((item, colIndex) => {
                  const index = rowIndex * 3 + colIndex
                  return (
                    <PrestacionCard
                      key={item.id || `pre-${index}`}
                      item={item}
                      index={index}
                      total={items.length}
                      variant="desktop"
                    />
                  )
                })}
              </div>
            ))}
          </div>
        ) : null}

        {/* Móvil: carrusel de una tarjeta */}
        {items.length > 0 ? (
          <div className="px-1 md:hidden">
            <div
              className="relative touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <PrestacionCard
                item={items[activeIndex]!}
                index={activeIndex}
                total={items.length}
                showIndexBadge
                variant="mobile"
              />
            </div>

            {items.length > 1 ? (
              <div
                className="mt-6 flex items-center justify-center gap-2.5"
                role="tablist"
                aria-label="Navegación de prestaciones"
              >
                {items.map((item, index) => {
                  const isActive = index === activeIndex
                  return (
                    <button
                      key={item.id || `dot-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Prestación ${index + 1} de ${items.length}`}
                      className={cn(
                        'h-2.5 w-2.5 rounded-full transition-colors',
                        isActive ? 'scale-110' : 'opacity-90',
                      )}
                      style={{
                        backgroundColor: isActive ? boldColor : ICON_BG,
                      }}
                      onClick={() => goTo(index)}
                    />
                  )
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default Layout2DropBlock
