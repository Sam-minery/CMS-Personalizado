'use client'

import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

type FondoDropProps = {
  blockType?: 'fondoDrop'
  blockIndex?: number
  backgroundColor?: string | null
  accentColor?: string | null
  enableParallax?: boolean | null
  parallaxIntensity?: number | null
}

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

function colorWithAlpha(color: string, alpha: number): string {
  const rgb = parseRgb(color)
  if (rgb) return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`
  const safe = sanitizeCssColor(color)
  return `color-mix(in srgb, ${safe} ${Math.round(alpha * 100)}%, transparent)`
}

/** Mezcla hacia blanco o negro. amount 0–1. */
function mixTone(color: string, amount: number, toward: 'white' | 'black' = 'white'): string {
  const rgb = parseRgb(color)
  if (!rgb) return sanitizeCssColor(color)
  const target = toward === 'white' ? 255 : 0
  const r = Math.round(rgb.r + (target - rgb.r) * amount)
  const g = Math.round(rgb.g + (target - rgb.g) * amount)
  const b = Math.round(rgb.b + (target - rgb.b) * amount)
  return `rgb(${r},${g},${b})`
}

function deriveAccent(background: string): string {
  const rgb = parseRgb(background)
  if (!rgb) return '#c2185b'
  const max = Math.max(rgb.r, rgb.g, rgb.b)
  const min = Math.min(rgb.r, rgb.g, rgb.b)
  const mid = (max + min) / 2
  const r = Math.min(255, Math.round(rgb.r * 0.55 + mid * 0.2 + 80))
  const g = Math.min(255, Math.round(rgb.g * 0.35 + mid * 0.1 + 20))
  const b = Math.min(255, Math.round(rgb.b * 0.55 + mid * 0.15 + 60))
  return `rgb(${r},${g},${b})`
}

type Palette = {
  base: string
  accent: string
  soft: string
  softMid: string
  mid: string
  strong: string
  stroke: string
  strokeSoft: string
  node: string
  nodeSoft: string
}

function buildPalette(backgroundColor: string, accentColor?: string): Palette {
  const base = sanitizeCssColor(backgroundColor) || '#f8f4ff'
  const accent = sanitizeCssColor(accentColor || '') || deriveAccent(base)
  const tint = mixTone(accent, 0.35, 'white')
  const deep = mixTone(accent, 0.2, 'black')
  return {
    base,
    accent,
    soft: colorWithAlpha(tint, 0.08),
    softMid: colorWithAlpha(tint, 0.14),
    mid: colorWithAlpha(accent, 0.18),
    strong: colorWithAlpha(deep, 0.26),
    stroke: colorWithAlpha(deep, 0.7),
    strokeSoft: colorWithAlpha(accent, 0.45),
    node: deep,
    nodeSoft: colorWithAlpha(accent, 0.75),
  }
}

const LAYER_SPEEDS = { slow: 0.92, mid: 0.82, fast: 0.7, waves: 0.97 } as const

type ScatterItem =
  | {
      kind: 'circle'
      x: number
      y: number
      r: number
      fill: keyof Pick<Palette, 'soft' | 'softMid' | 'mid' | 'strong'>
      blur?: number
    }
  | {
      kind: 'blob'
      d: string
      x: number
      y: number
      w: number
      h: number
      fill: keyof Pick<Palette, 'soft' | 'softMid' | 'mid' | 'strong'>
      blur?: number
      rotate?: number
    }
  | {
      kind: 'arc'
      d: string
      x: number
      y: number
      w: number
      h: number
      stroke: keyof Pick<Palette, 'stroke' | 'strokeSoft'>
      width?: number
      nodes?: Array<{ cx: number; cy: number; r: number }>
    }

/**
 * Elementos únicos repartidos por la altura (yFrac 0–1 en página corta).
 * En páginas largas se recolocan por bandas de viewport con offsets distintos
 * (sin espejo ni franja idéntica).
 */
const SCATTER_SLOW: ScatterItem[] = [
  { kind: 'circle', x: -4, y: 0.06, r: 14, fill: 'soft', blur: 28 },
  { kind: 'circle', x: 92, y: 0.12, r: 18, fill: 'softMid', blur: 22 },
  { kind: 'circle', x: 86, y: 0.28, r: 11, fill: 'soft', blur: 18 },
  { kind: 'circle', x: -6, y: 0.42, r: 16, fill: 'mid', blur: 26 },
  { kind: 'circle', x: 96, y: 0.55, r: 13, fill: 'soft', blur: 20 },
  { kind: 'circle', x: 8, y: 0.68, r: 16, fill: 'softMid', blur: 30 },
  { kind: 'circle', x: 88, y: 0.82, r: 10, fill: 'soft', blur: 16 },
  { kind: 'circle', x: 102, y: 0.36, r: 15, fill: 'softMid', blur: 24 },
  { kind: 'circle', x: 94, y: 0.72, r: 12, fill: 'soft', blur: 18 },
  {
    kind: 'blob',
    x: -12,
    y: 0.18,
    w: 36,
    h: 26,
    fill: 'soft',
    blur: 24,
    d: 'M10 80 C40 20 90 10 130 55 C160 90 140 140 90 150 C40 160 0 120 10 80 Z',
  },
  {
    kind: 'blob',
    x: 82,
    y: 0.48,
    w: 32,
    h: 28,
    fill: 'softMid',
    blur: 20,
    rotate: 18,
    d: 'M20 100 C50 40 120 30 150 80 C170 120 130 160 80 155 C30 150 0 130 20 100 Z',
  },
  {
    kind: 'blob',
    x: -8,
    y: 0.75,
    w: 34,
    h: 24,
    fill: 'soft',
    blur: 22,
    d: 'M0 90 C60 40 140 50 180 100 C200 130 160 170 100 160 C40 150 -10 130 0 90 Z',
  },
  {
    kind: 'blob',
    x: 88,
    y: 0.22,
    w: 30,
    h: 24,
    fill: 'soft',
    blur: 18,
    rotate: -8,
    d: 'M40 90 C80 30 150 40 170 90 C185 125 140 160 90 150 C45 140 20 120 40 90 Z',
  },
]

const SCATTER_MID: ScatterItem[] = [
  { kind: 'circle', x: 8, y: 0.08, r: 7, fill: 'mid' },
  { kind: 'circle', x: 92, y: 0.2, r: 9, fill: 'strong', blur: 10 },
  { kind: 'circle', x: -3, y: 0.33, r: 12, fill: 'mid', blur: 12 },
  { kind: 'circle', x: 90, y: 0.38, r: 5, fill: 'softMid' },
  { kind: 'circle', x: 105, y: 0.5, r: 15, fill: 'soft', blur: 14 },
  { kind: 'circle', x: 10, y: 0.58, r: 8, fill: 'mid' },
  { kind: 'circle', x: 88, y: 0.7, r: 6, fill: 'strong' },
  { kind: 'circle', x: 4, y: 0.88, r: 10, fill: 'softMid', blur: 8 },
  { kind: 'circle', x: 98, y: 0.14, r: 8, fill: 'mid', blur: 8 },
  { kind: 'circle', x: 100, y: 0.64, r: 7, fill: 'strong', blur: 6 },
  {
    kind: 'blob',
    x: 82,
    y: 0.05,
    w: 28,
    h: 20,
    fill: 'mid',
    rotate: -12,
    d: 'M30 70 C70 20 140 25 160 70 C175 105 130 140 80 130 C35 122 10 100 30 70 Z',
  },
  {
    kind: 'blob',
    x: -8,
    y: 0.62,
    w: 30,
    h: 22,
    fill: 'softMid',
    rotate: 8,
    d: 'M15 90 C55 35 130 40 155 85 C170 115 125 150 70 145 C25 140 0 120 15 90 Z',
  },
  {
    kind: 'blob',
    x: 90,
    y: 0.42,
    w: 26,
    h: 22,
    fill: 'mid',
    rotate: 14,
    d: 'M25 85 C65 35 140 45 160 90 C170 120 125 155 75 145 C35 135 10 115 25 85 Z',
  },
  {
    kind: 'arc',
    x: -5,
    y: 0.15,
    w: 28,
    h: 40,
    stroke: 'strokeSoft',
    width: 1.4,
    d: 'M20 280 C80 160 40 60 120 20',
    nodes: [{ cx: 55, cy: 150, r: 3.5 }],
  },
  {
    kind: 'arc',
    x: 82,
    y: 0.35,
    w: 28,
    h: 45,
    stroke: 'stroke',
    width: 1.3,
    d: 'M200 20 C140 100 180 200 80 280',
    nodes: [
      { cx: 160, cy: 90, r: 3 },
      { cx: 130, cy: 190, r: 4 },
    ],
  },
  {
    kind: 'arc',
    x: -6,
    y: 0.55,
    w: 30,
    h: 28,
    stroke: 'strokeSoft',
    width: 1.2,
    d: 'M10 180 C80 60 140 100 200 40',
    nodes: [{ cx: 90, cy: 90, r: 3.2 }],
  },
  {
    kind: 'arc',
    x: 86,
    y: 0.58,
    w: 26,
    h: 38,
    stroke: 'strokeSoft',
    width: 1.25,
    d: 'M60 20 C140 70 100 160 180 240',
    nodes: [{ cx: 110, cy: 110, r: 3 }],
  },
]

const SCATTER_FAST: ScatterItem[] = [
  {
    kind: 'arc',
    x: -4,
    y: 0.1,
    w: 32,
    h: 35,
    stroke: 'stroke',
    width: 1.5,
    d: 'M20 220 C80 100 140 60 220 100',
    nodes: [
      { cx: 70, cy: 140, r: 4 },
      { cx: 160, cy: 70, r: 3.5 },
    ],
  },
  {
    kind: 'arc',
    x: 78,
    y: 0.22,
    w: 32,
    h: 50,
    stroke: 'strokeSoft',
    width: 1.25,
    d: 'M240 10 C180 90 220 180 60 260',
    nodes: [{ cx: 190, cy: 120, r: 3 }],
  },
  {
    kind: 'arc',
    x: -8,
    y: 0.4,
    w: 26,
    h: 42,
    stroke: 'strokeSoft',
    width: 1.1,
    d: 'M30 20 C90 90 20 180 70 270',
    nodes: [{ cx: 50, cy: 140, r: 3 }],
  },
  {
    kind: 'arc',
    x: 84,
    y: 0.62,
    w: 30,
    h: 30,
    stroke: 'stroke',
    width: 1.35,
    d: 'M40 180 C100 60 160 140 220 40',
    nodes: [
      { cx: 90, cy: 100, r: 3.5 },
      { cx: 170, cy: 80, r: 3 },
    ],
  },
  {
    kind: 'arc',
    x: 88,
    y: 0.78,
    w: 26,
    h: 36,
    stroke: 'strokeSoft',
    width: 1.2,
    d: 'M40 10 C100 80 60 160 140 230',
    nodes: [{ cx: 70, cy: 100, r: 3.2 }],
  },
  {
    kind: 'arc',
    x: 90,
    y: 0.08,
    w: 24,
    h: 32,
    stroke: 'stroke',
    width: 1.3,
    d: 'M40 10 C110 50 80 140 160 200',
    nodes: [{ cx: 85, cy: 80, r: 3.5 }],
  },
  { kind: 'circle', x: 12, y: 0.18, r: 2.2, fill: 'strong' },
  { kind: 'circle', x: 8, y: 0.48, r: 2.8, fill: 'strong' },
  { kind: 'circle', x: 92, y: 0.65, r: 2, fill: 'mid' },
  { kind: 'circle', x: 10, y: 0.85, r: 2.5, fill: 'strong' },
  { kind: 'circle', x: 96, y: 0.3, r: 2.4, fill: 'strong' },
  { kind: 'circle', x: 94, y: 0.52, r: 2.1, fill: 'mid' },
]

/** Offsets irregulares por banda para que no se note un patrón vertical. */
const BAND_X_JITTER = [0, 5, -8, 3, -4, 9, -2, 6, -10, 2]
const BAND_Y_JITTER = [0.04, 0.18, 0.31, 0.47, 0.61, 0.73, 0.88]

/** Empuja piezas fuera de la franja central (~28–72%) hacia los laterales. */
function nudgeAwayFromCenter(x: number): number {
  if (x > 26 && x < 74) {
    return x < 50 ? Math.min(x, 16) : Math.max(x, 84)
  }
  return x
}

function expandScatterForHeight(
  items: ScatterItem[],
  docHeight: number,
  vh: number,
): Array<ScatterItem & { yAbs: number }> {
  const bands = Math.max(1, Math.ceil(docHeight / Math.max(vh, 1)))
  const result: Array<ScatterItem & { yAbs: number }> = []

  for (let b = 0; b < bands; b++) {
    const bandTop = b * vh
    const start = (b * 3) % items.length
    // Un poco menos denso que antes
    const count = Math.min(items.length, 2 + (b % 3))
    for (let k = 0; k < count; k++) {
      const item = items[(start + k * 2) % items.length]
      const xJ = BAND_X_JITTER[(b + k) % BAND_X_JITTER.length]
      const yJ = BAND_Y_JITTER[(b * 2 + k) % BAND_Y_JITTER.length]
      const x = nudgeAwayFromCenter(
        Math.max(-15, Math.min(110, item.x + xJ * (b % 2 === 0 ? 1 : -1))),
      )
      const maxYInBand = b === bands - 1 ? vh * 0.45 : vh * 0.92
      const yAbs = bandTop + Math.min(yJ * vh, maxYInBand)
      result.push({ ...item, x, yAbs })
    }
  }

  return result
}

function ScatterLayer({
  items,
  palette,
  layerId,
}: {
  items: Array<ScatterItem & { yAbs: number }>
  palette: Palette
  layerId: string
}) {
  return (
    <>
      {items.map((item, i) => {
        const top = item.yAbs
        const uid = `${layerId}-${i}`

        if (item.kind === 'circle') {
          const size = `${item.r * 2}vw`
          return (
            <div
              key={uid}
              className="absolute"
              style={{
                left: `${item.x}%`,
                top,
                width: size,
                height: size,
                marginLeft: `-${item.r}vw`,
                marginTop: `-${item.r}vw`,
                borderRadius: '50%',
                background: palette[item.fill],
                filter: item.blur ? `blur(${item.blur}px)` : undefined,
              }}
            />
          )
        }

        if (item.kind === 'blob') {
          return (
            <svg
              key={uid}
              className="absolute overflow-visible"
              style={{
                left: `${item.x}%`,
                top,
                width: `${item.w}vw`,
                height: `${item.h}vw`,
                transform: item.rotate ? `rotate(${item.rotate}deg)` : undefined,
                filter: item.blur ? `blur(${item.blur}px)` : undefined,
              }}
              viewBox="0 0 200 180"
              aria-hidden
            >
              <path d={item.d} fill={palette[item.fill]} />
            </svg>
          )
        }

        return (
          <svg
            key={uid}
            className="absolute overflow-visible"
            style={{
              left: `${item.x}%`,
              top,
              width: `${item.w}vw`,
              height: `${item.h}vw`,
            }}
            viewBox="0 0 400 300"
            aria-hidden
          >
            <path
              d={item.d}
              fill="none"
              stroke={palette[item.stroke]}
              strokeWidth={item.width ?? 1.25}
              strokeLinecap="round"
            />
            {item.nodes?.map((n, ni) => (
              <circle key={`${uid}-n${ni}`} cx={n.cx} cy={n.cy} r={n.r} fill={palette.node} />
            ))}
          </svg>
        )
      })}
    </>
  )
}

/** Olas solo en el final real del documento (siempre de borde a borde). */
function PageEndWaves({ palette, waveHeight }: { palette: Palette; waveHeight: number }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      style={{ height: waveHeight }}
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id="fd-wave-soft" x="-8%" y="-25%" width="116%" height="150%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      {/* Capas full-bleed: cada path entra y sale por los laterales y cierra abajo */}
      <path
        d="M0 195 C160 95 300 250 480 185 C660 120 780 55 960 100 C1140 145 1280 210 1440 155 L1440 420 L0 420 Z"
        fill={palette.soft}
        filter="url(#fd-wave-soft)"
      />
      <path
        d="M0 245 C140 165 280 295 470 240 C660 185 820 125 1000 170 C1180 215 1320 275 1440 235 L1440 420 L0 420 Z"
        fill={palette.softMid}
      />
      <path
        d="M0 295 C180 225 340 335 520 290 C720 240 880 185 1080 225 C1240 255 1360 315 1440 295 L1440 420 L0 420 Z"
        fill={palette.mid}
      />
      <path
        d="M0 340 C200 300 360 375 560 345 C760 315 960 280 1160 320 C1300 345 1380 365 1440 350 L1440 420 L0 420 Z"
        fill={palette.strong}
      />
      <path
        d="M0 365 C120 340 240 390 400 370 C580 345 760 330 940 355 C1120 380 1280 360 1440 375 L1440 420 L0 420 Z"
        fill={palette.mid}
      />
      <path
        d="M80 390 C360 240 720 150 1360 95"
        fill="none"
        stroke={palette.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="380" cy="290" r="5" fill={palette.node} />
      <circle cx="820" cy="175" r="4.5" fill={palette.nodeSoft} />
    </svg>
  )
}

export const FondoDropBlock: React.FC<FondoDropProps> = ({
  backgroundColor,
  accentColor,
  enableParallax = true,
  parallaxIntensity = 0.35,
}) => {
  const [mounted, setMounted] = useState(false)
  const [docHeight, setDocHeight] = useState(0)
  const [vh, setVh] = useState(900)

  const slowRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const fastRef = useRef<HTMLDivElement>(null)
  const wavesRef = useRef<HTMLDivElement>(null)

  const palette = buildPalette(backgroundColor || '#f8f4ff', accentColor || undefined)
  const parallaxOn = enableParallax !== false
  const intensity = Math.min(1, Math.max(0, Number(parallaxIntensity) || 0.35))

  useEffect(() => {
    setMounted(true)

    const prevHtmlBg = document.documentElement.style.backgroundColor
    const prevBodyBg = document.body.style.backgroundColor
    document.documentElement.style.backgroundColor = 'transparent'
    document.body.style.backgroundColor = 'transparent'
    document.documentElement.classList.add('has-fondo-drop')

    const measure = () => {
      const h = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight,
      )
      setDocHeight(h)
      setVh(window.innerHeight)
    }

    measure()

    let raf = 0
    const applyParallax = () => {
      raf = 0
      const scrollY = window.scrollY || window.pageYOffset || 0
      const layers: Array<[HTMLDivElement | null, number]> = [
        [slowRef.current, LAYER_SPEEDS.slow],
        [midRef.current, LAYER_SPEEDS.mid],
        [fastRef.current, LAYER_SPEEDS.fast],
        [wavesRef.current, LAYER_SPEEDS.waves],
      ]
      for (const [el, speed] of layers) {
        if (!el) continue
        const effectiveSpeed = parallaxOn ? 1 - (1 - speed) * intensity : 1
        el.style.transform = `translate3d(0, ${-scrollY * effectiveSpeed}px, 0)`
      }
    }

    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(applyParallax)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)

    const ro = new ResizeObserver(measure)
    ro.observe(document.documentElement)
    if (document.body) ro.observe(document.body)

    const t1 = window.setTimeout(measure, 200)
    const t2 = window.setTimeout(measure, 1000)

    applyParallax()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      ro.disconnect()
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      if (raf) window.cancelAnimationFrame(raf)
      document.documentElement.style.backgroundColor = prevHtmlBg
      document.body.style.backgroundColor = prevBodyBg
      document.documentElement.classList.remove('has-fondo-drop')
    }
  }, [parallaxOn, intensity])

  const layerHeight = Math.max(docHeight, vh)
  const waveHeight = Math.min(Math.max(vh * 0.78, 380), 720)
  const slowItems = expandScatterForHeight(SCATTER_SLOW, layerHeight, vh)
  const midItems = expandScatterForHeight(SCATTER_MID, layerHeight, vh)
  const fastItems = expandScatterForHeight(SCATTER_FAST, layerHeight, vh)

  if (!mounted) return null

  const content = (
    <div
      data-fondo-drop
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{
        zIndex: -1,
        backgroundColor: palette.base,
      }}
    >
      <div
        ref={slowRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <ScatterLayer items={slowItems} palette={palette} layerId="slow" />
      </div>

      <div
        ref={midRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <ScatterLayer items={midItems} palette={palette} layerId="mid" />
      </div>

      <div
        ref={fastRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <ScatterLayer items={fastItems} palette={palette} layerId="fast" />
      </div>

      <div
        ref={wavesRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <PageEndWaves palette={palette} waveHeight={waveHeight} />
      </div>
    </div>
  )

  return createPortal(content, document.body)
}

export default FondoDropBlock
