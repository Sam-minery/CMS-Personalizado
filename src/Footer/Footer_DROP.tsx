'use client'

import React, { useCallback } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'

type MediaLike = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
  sizes?: { large?: { url?: string | null }; medium?: { url?: string | null } }
} | number

type LogoGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
  link?: FooterLink | null
}

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: MediaLike | null
  iconSVG?: string | null
  alt?: string | null
}

type FooterLink = {
  type?: 'reference' | 'custom' | 'anchor' | null
  url?: string | null
  newTab?: boolean | null
  anchorId?: string | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: unknown
  } | null
}

type NavLinkItem = {
  id?: string | null
  title?: string | null
  link?: FooterLink | null
  icon?: IconGroup | null
  iconBackgroundColor?: string | null
}

type SocialButtonItem = {
  id?: string | null
  icon?: 'none' | 'instagram' | 'facebook' | 'youtube' | null
  title?: string | null
  link?: FooterLink | null
}

type PolicyLinkItem = {
  id?: string | null
  title?: DefaultTypedEditorState | null
  link?: FooterLink | null
}

export type FooterDropProps = {
  logo?: LogoGroup | null
  secondaryLogo?: (LogoGroup & { enabled?: boolean | null }) | null
  navLinks?: NavLinkItem[] | null
  socialButtons?: SocialButtonItem[] | null
  policyLinks?: PolicyLinkItem[] | null
  footerText?: DefaultTypedEditorState | null
  backgroundColor?: string | null
  textColor?: string | null
  textColorSecondary?: string | null
  hideMobileIcons?: boolean | null
}

const NAVY = '#101835'
const ACCENT = '#a1004a'
const ICON_BG = '#fce4ec'
const DIVIDER = '#e6e6ea'

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '') || ''
}

function normalizeHexInput(color: string): string {
  const c = color.trim()
  if (!c) return c
  if (c.startsWith('#')) return c
  if (/^[0-9a-fA-F]{6}$/.test(c) || /^[0-9a-fA-F]{3}$/.test(c)) return `#${c}`
  return c
}

function parseRgb(color: string): { r: number; g: number; b: number } | null {
  const c = normalizeHexInput(color)
  const hex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.exec(c)
  if (hex) {
    const h = hex[1]
    const r = h.length === 3 ? parseInt(h[0] + h[0], 16) : parseInt(h.slice(0, 2), 16)
    const g = h.length === 3 ? parseInt(h[1] + h[1], 16) : parseInt(h.slice(2, 4), 16)
    const b = h.length === 3 ? parseInt(h[2] + h[2], 16) : parseInt(h.slice(4, 6), 16)
    return { r, g, b }
  }
  const rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(c)
  if (rgb) return { r: Number(rgb[1]), g: Number(rgb[2]), b: Number(rgb[3]) }
  return null
}

function mixTone(color: string, amount: number): string {
  const rgb = parseRgb(color)
  if (!rgb) return sanitizeCssColor(color)
  const r = Math.round(rgb.r + (255 - rgb.r) * amount)
  const g = Math.round(rgb.g + (255 - rgb.g) * amount)
  const b = Math.round(rgb.b + (255 - rgb.b) * amount)
  return `rgb(${r},${g},${b})`
}

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media === 'number') return ''
  const url = media.sizes?.large?.url || media.sizes?.medium?.url || media.url || ''
  return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
}

function getLogoAlt(logo?: LogoGroup | null, fallback = 'Logo'): string {
  if (logo?.mediaImage && typeof logo.mediaImage === 'object') {
    return logo.mediaImage.alt || logo.alt || fallback
  }
  return logo?.alt || fallback
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

function scrollToAnchor(id: string) {
  if (!id || typeof document === 'undefined') return
  const el = document.getElementById(id.trim())
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToTop() {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function LogoMark({
  logo,
  className,
  imgClassName,
  fallbackAlt,
}: {
  logo?: LogoGroup | null
  className?: string
  imgClassName?: string
  fallbackAlt?: string
}) {
  if (!logo) return null

  const useMedia = Boolean(logo.useMedia && logo.mediaImage)
  const src = useMedia ? getMediaUrlSafe(logo.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 items-center', className)}>
        <img src={src} alt={getLogoAlt(logo, fallbackAlt)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  if (useMedia) return null

  const svg = logo.iconSVG && String(logo.iconSVG).trim() ? sanitizeSVG(logo.iconSVG) : ''
  if (!svg) return null
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-auto [&_svg]:max-h-full',
        className,
      )}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden
    />
  )
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

  const useMedia = Boolean(icon.useMedia && icon.mediaImage)
  const src = useMedia ? getMediaUrlSafe(icon.mediaImage) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <img src={src} alt={icon.alt || 'Icono'} className={cn('object-contain', imgClassName)} />
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

function hasLogoContent(logo?: LogoGroup | null): boolean {
  if (!logo) return false
  if (logo.useMedia) return Boolean(getMediaUrlSafe(logo.mediaImage))
  return Boolean(logo.iconSVG && String(logo.iconSVG).trim())
}

function hasIconContent(icon?: IconGroup | null): boolean {
  if (!icon) return false
  if (icon.useMedia) return Boolean(getMediaUrlSafe(icon.mediaImage))
  return Boolean(icon.iconSVG && String(icon.iconSVG).trim())
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-white" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-white" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-0.5 h-[16px] w-[16px] fill-white" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function SocialGlyph({ icon }: { icon?: SocialButtonItem['icon'] }) {
  if (icon === 'instagram') {
    return (
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        }}
      >
        <InstagramIcon />
      </span>
    )
  }
  if (icon === 'facebook') {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2]">
        <FacebookIcon />
      </span>
    )
  }
  if (icon === 'youtube') {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000]">
        <YoutubeIcon />
      </span>
    )
  }
  return null
}

function FooterAction({
  link,
  className,
  style,
  children,
  ariaLabel,
  fallbackToTop,
}: {
  link?: FooterLink | null
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
  ariaLabel?: string
  fallbackToTop?: boolean
}) {
  const onAnchor = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      if (link?.type === 'anchor' && link.anchorId) {
        scrollToAnchor(link.anchorId)
        return
      }
      if (fallbackToTop) scrollToTop()
    },
    [link, fallbackToTop],
  )

  if (link?.type === 'anchor' && link.anchorId) {
    return (
      <button type="button" className={className} style={style} onClick={onAnchor} aria-label={ariaLabel}>
        {children}
      </button>
    )
  }

  if (link?.type === 'reference' || (link?.type === 'custom' && link.url)) {
    return (
      <CMSLink {...(link as React.ComponentProps<typeof CMSLink>)} className={className} style={style}>
        {ariaLabel ? <span className="sr-only">{ariaLabel}</span> : null}
        {children}
      </CMSLink>
    )
  }

  if (fallbackToTop) {
    return (
      <button type="button" className={className} style={style} onClick={onAnchor} aria-label={ariaLabel || 'Ir al inicio'}>
        {children}
      </button>
    )
  }

  return (
    <span className={className} style={style}>
      {children}
    </span>
  )
}

export const Footer_DROP: React.FC<FooterDropProps> = (props) => {
  const {
    logo,
    secondaryLogo,
    navLinks,
    socialButtons,
    policyLinks,
    footerText,
    backgroundColor,
    textColor,
    textColorSecondary,
    hideMobileIcons,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')

  const bg = sanitizeCssColor(backgroundColor) || '#ffffff'
  const primary = sanitizeCssColor(textColor) || NAVY
  const secondary = sanitizeCssColor(textColorSecondary) || ACCENT
  const policyBg = mixTone(secondary, 0.94)
  const waveFill = mixTone(secondary, 0.88)

  const nav = Array.isArray(navLinks) ? navLinks : []
  const social = Array.isArray(socialButtons) ? socialButtons.slice(0, 3) : []
  const policies = (Array.isArray(policyLinks) ? policyLinks : [])
    .filter((item) => hasRichText(item.title))
    .slice(0, 4)
  const showSecondary = Boolean(secondaryLogo?.enabled && hasLogoContent(secondaryLogo))
  const showPrimary = hasLogoContent(logo)
  const hideIcons = Boolean(hideMobileIcons)
  const policyRichtextClass =
    'footer-drop-policy-richtext [&_p]:m-0 [&_p]:inline [&_a]:no-underline [&_*]:text-inherit'

  const renderSocial = (item: SocialButtonItem, size: 'sm' | 'md' = 'md') => {
    const label = item.title?.trim() || item.icon || 'Red social'
    const glyph = <SocialGlyph icon={item.icon} />
    const content =
      item.icon && item.icon !== 'none' ? (
        <span className={cn(size === 'sm' && '[&>span]:h-9 [&>span]:w-9')}>{glyph}</span>
      ) : (
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-full px-3 text-[10px] font-semibold uppercase tracking-wide text-white',
            size === 'sm' ? 'h-9 min-w-9' : 'h-10 min-w-10',
          )}
          style={{ backgroundColor: secondary }}
        >
          {(item.title || 'Link').slice(0, 2)}
        </span>
      )

    return (
      <FooterAction
        key={item.id || item.title || item.icon || undefined}
        link={item.link}
        className="inline-flex shrink-0 transition-transform duration-150 hover:scale-105 active:scale-95"
        ariaLabel={label}
      >
        {content}
      </FooterAction>
    )
  }

  return (
    <footer
      data-footer-drop={uniqueId}
      className="footer-drop relative mx-4 mt-auto mb-5 overflow-hidden rounded-[2.5rem] shadow-[0_8px_32px_rgba(16,24,53,0.08)] min-[992px]:mx-6 min-[992px]:mb-6"
      style={
        {
          backgroundColor: bg,
          color: primary,
          ['--footer-drop-primary' as string]: primary,
          ['--footer-drop-secondary' as string]: secondary,
        } as React.CSSProperties
      }
    >
      {/* ── Desktop ─────────────────────────────────────────── */}
      <div className="hidden min-[992px]:block">
        <div className="flex min-h-[8rem] items-stretch px-8 py-8 lg:px-12 lg:py-10">
          <div className="flex shrink-0 items-center gap-5 pr-6 lg:gap-6 lg:pr-8">
            {showPrimary ? (
              <FooterAction
                link={logo?.link}
                fallbackToTop
                className="inline-flex items-center"
                ariaLabel={getLogoAlt(logo)}
              >
                <LogoMark logo={logo} className="h-10 max-w-[160px]" imgClassName="h-10 w-auto max-w-[160px]" />
              </FooterAction>
            ) : null}

            {showSecondary ? (
              <>
                <span className="h-10 w-px shrink-0 self-center" style={{ backgroundColor: DIVIDER }} aria-hidden />
                <FooterAction
                  link={secondaryLogo?.link}
                  className="inline-flex items-center"
                  ariaLabel={getLogoAlt(secondaryLogo, 'Logo secundario')}
                >
                  <LogoMark
                    logo={secondaryLogo}
                    className="h-11 max-w-[72px]"
                    imgClassName="h-11 w-auto max-w-[72px]"
                    fallbackAlt="Logo secundario"
                  />
                </FooterAction>
              </>
            ) : null}
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-5 px-4">
            {nav.length > 0 ? (
              <nav className="flex flex-wrap items-center justify-center" aria-label="Navegación">
                {nav.map((item, index) => (
                  <React.Fragment key={item.id || `${item.title}-${index}`}>
                    {index > 0 ? (
                      <span className="mx-4 h-3.5 w-px shrink-0 lg:mx-6" style={{ backgroundColor: DIVIDER }} aria-hidden />
                    ) : null}
                    <FooterAction
                      link={item.link}
                      className="whitespace-nowrap px-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--footer-drop-primary)] transition-colors duration-150 hover:text-[color:var(--footer-drop-secondary)]"
                    >
                      {item.title}
                    </FooterAction>
                  </React.Fragment>
                ))}
              </nav>
            ) : null}

            {policies.length > 0 ? (
              <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1" aria-label="Políticas">
                {policies.map((item, index) => (
                  <FooterAction
                    key={item.id || `policy-d-${index}`}
                    link={item.link}
                    className="whitespace-nowrap text-[10px] font-medium tracking-[0.14em] transition-opacity hover:opacity-70"
                    style={{ color: secondary }}
                  >
                    <span className={policyRichtextClass}>
                      <RichText data={item.title!} enableGutter={false} enableProse={false} />
                    </span>
                  </FooterAction>
                ))}
              </nav>
            ) : null}
          </div>

          {social.length > 0 ? (
            <>
              <div className="mx-4 w-px shrink-0 self-stretch" style={{ backgroundColor: DIVIDER }} aria-hidden />
              <div className="flex shrink-0 items-center gap-2.5 pl-4 lg:pl-6">
                {social.map((item) => renderSocial(item))}
              </div>
            </>
          ) : null}
        </div>

        {hasRichText(footerText) ? (
          <div
            className="footer-drop-richtext border-t px-8 py-4 text-center text-[11px] leading-relaxed [&_a]:underline [&_p]:m-0"
            style={{ color: primary, borderColor: DIVIDER }}
          >
            <RichText data={footerText!} enableGutter={false} enableProse={false} />
          </div>
        ) : null}
      </div>

      {/* ── Mobile ──────────────────────────────────────────── */}
      <div className="flex flex-col min-[992px]:hidden">
        <div className="flex items-center justify-between gap-3 px-5 pb-4 pt-6">
          <div className="flex min-w-0 items-center gap-3">
            {showPrimary ? (
              <FooterAction
                link={logo?.link}
                fallbackToTop
                className="inline-flex items-center"
                ariaLabel={getLogoAlt(logo)}
              >
                <LogoMark logo={logo} className="h-9 max-w-[120px]" imgClassName="h-9 w-auto max-w-[120px]" />
              </FooterAction>
            ) : null}

            {showSecondary ? (
              <>
                <span className="h-9 w-px shrink-0" style={{ backgroundColor: DIVIDER }} aria-hidden />
                <FooterAction
                  link={secondaryLogo?.link}
                  className="inline-flex items-center"
                  ariaLabel={getLogoAlt(secondaryLogo, 'Logo secundario')}
                >
                  <LogoMark
                    logo={secondaryLogo}
                    className="h-10 max-w-[56px]"
                    imgClassName="h-10 w-auto max-w-[56px]"
                    fallbackAlt="Logo secundario"
                  />
                </FooterAction>
              </>
            ) : null}
          </div>

          {social.length > 0 ? (
            <div className="flex shrink-0 items-center gap-2">{social.map((item) => renderSocial(item, 'sm'))}</div>
          ) : null}
        </div>

        {nav.length > 0 ? (
          <nav className="flex flex-col px-7" aria-label="Navegación">
            {nav.map((item, index) => {
              const iconBg = sanitizeCssColor(item.iconBackgroundColor) || ICON_BG
              const showIcon = !hideIcons && hasIconContent(item.icon)
              return (
                <FooterAction
                  key={item.id || `${item.title}-${index}`}
                  link={item.link}
                  className={cn(
                    'flex items-center gap-3 py-3.5 text-[color:var(--footer-drop-primary)] transition-colors duration-150 hover:text-[color:var(--footer-drop-secondary)]',
                    index < nav.length - 1 && 'border-b',
                  )}
                  style={{ borderColor: DIVIDER }}
                >
                  {showIcon ? (
                    <span
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: iconBg }}
                    >
                      <IconMedia
                        icon={item.icon}
                        className="h-4 w-4 text-current [&_svg]:text-current"
                        imgClassName="h-4 w-4"
                      />
                    </span>
                  ) : null}
                  <span className="text-[12px] font-semibold uppercase tracking-[0.1em]">{item.title}</span>
                </FooterAction>
              )
            })}
          </nav>
        ) : null}

        <div className="relative mt-2" style={{ backgroundColor: policyBg }}>
          <svg
            className="absolute inset-x-0 top-0 h-5 w-full -translate-y-[99%]"
            viewBox="0 0 1440 40"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d="M0,28 C240,8 480,0 720,10 C960,20 1200,36 1440,18 L1440,40 L0,40 Z" fill={policyBg} />
          </svg>

          {policies.length > 0 ? (
            <nav className="flex flex-col items-center px-8 pb-2 pt-6" aria-label="Políticas">
              {policies.map((item, index) => (
                <FooterAction
                  key={item.id || `policy-m-${index}`}
                  link={item.link}
                  className={cn(
                    'w-full py-3 text-center text-[11px] font-semibold tracking-[0.14em]',
                    index < policies.length - 1 && 'border-b',
                  )}
                  style={{ color: secondary, borderColor: mixTone(secondary, 0.82) }}
                >
                  <span className={policyRichtextClass}>
                    <RichText data={item.title!} enableGutter={false} enableProse={false} />
                  </span>
                </FooterAction>
              ))}
            </nav>
          ) : null}

          {hasRichText(footerText) ? (
            <div
              className="footer-drop-richtext px-6 pb-8 pt-5 text-center text-[11px] leading-relaxed [&_a]:underline [&_p]:m-0"
              style={{ color: primary }}
            >
              <RichText data={footerText!} enableGutter={false} enableProse={false} />
            </div>
          ) : (
            <div className="h-6" />
          )}

          <svg className="block h-8 w-full" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden>
            <path
              d="M0,18 C180,42 420,4 720,22 C1020,40 1260,8 1440,28 L1440,48 L0,48 Z"
              fill={waveFill}
            />
          </svg>
        </div>
      </div>
    </footer>
  )
}
