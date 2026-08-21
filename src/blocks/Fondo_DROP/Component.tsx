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
    node: deep,
    nodeSoft: colorWithAlpha(accent, 0.75),
  }
}

const LAYER_SPEEDS = { slow: 0.94, mid: 0.86, fast: 0.76, waves: 0.97 } as const

/** Misma estrella 4 puntas que Pricing_DROP / estilo DROP. */
const SPARKLE_PATH =
  'M12 1.1c.38 4.55 2.95 7.12 7.5 7.5-4.55.38-7.12 2.95-7.5 7.5-.38-4.55-2.95-7.12-7.5-7.5 4.55-.38 7.12-2.95 7.5-7.5Z'

type ScatterItem =
  | {
      kind: 'sparkle'
      x: number
      y: number
      size: number
      opacity: number
    }
  | {
      kind: 'orbit'
      x: number
      y: number
      size: number
      opacity: number
      dash?: string
      strokeWidth?: number
      rotate?: number
    }

/** Catálogo con tamaños/opacidades ya distintos; al expandir se varían más por banda. */
const SCATTER_SLOW: ScatterItem[] = [
  { kind: 'orbit', x: -4, y: 0.1, size: 36, opacity: 0.38, dash: '10 9', strokeWidth: 1.45 },
  { kind: 'orbit', x: 84, y: 0.48, size: 22, opacity: 0.22, dash: '3 11', strokeWidth: 1.15 },
  { kind: 'orbit', x: 88, y: 0.78, size: 42, opacity: 0.3, dash: '14 7', strokeWidth: 1.5 },
  { kind: 'orbit', x: -2, y: 0.4, size: 18, opacity: 0.26, dash: '6 12', strokeWidth: 1.2 },
  { kind: 'sparkle', x: 8, y: 0.32, size: 28, opacity: 0.48 },
  { kind: 'sparkle', x: 92, y: 0.18, size: 11, opacity: 0.24 },
  { kind: 'sparkle', x: 6, y: 0.68, size: 19, opacity: 0.36 },
  { kind: 'sparkle', x: 90, y: 0.58, size: 8, opacity: 0.42 },
]

const SCATTER_MID: ScatterItem[] = [
  { kind: 'orbit', x: 86, y: 0.08, size: 30, opacity: 0.36, dash: '11 8', strokeWidth: 1.45, rotate: 22 },
  { kind: 'orbit', x: -6, y: 0.55, size: 48, opacity: 0.24, dash: '4 10', strokeWidth: 1.2 },
  { kind: 'orbit', x: 90, y: 0.62, size: 16, opacity: 0.34, dash: '9 9', strokeWidth: 1.3, rotate: -14 },
  { kind: 'orbit', x: 8, y: 0.28, size: 26, opacity: 0.2, dash: '2 9', strokeWidth: 1.1, rotate: 8 },
  { kind: 'sparkle', x: 94, y: 0.36, size: 26, opacity: 0.5 },
  { kind: 'sparkle', x: 6, y: 0.16, size: 9, opacity: 0.28 },
  { kind: 'sparkle', x: 90, y: 0.7, size: 17, opacity: 0.4 },
  { kind: 'sparkle', x: 10, y: 0.44, size: 13, opacity: 0.22 },
  { kind: 'sparkle', x: 96, y: 0.5, size: 21, opacity: 0.33 },
]

const SCATTER_FAST: ScatterItem[] = [
  { kind: 'sparkle', x: 10, y: 0.06, size: 7, opacity: 0.52 },
  { kind: 'sparkle', x: 92, y: 0.26, size: 18, opacity: 0.3 },
  { kind: 'sparkle', x: 4, y: 0.48, size: 12, opacity: 0.44 },
  { kind: 'sparkle', x: 96, y: 0.52, size: 24, opacity: 0.26 },
  { kind: 'sparkle', x: 88, y: 0.06, size: 10, opacity: 0.48 },
  { kind: 'sparkle', x: 8, y: 0.78, size: 15, opacity: 0.34 },
  { kind: 'sparkle', x: 94, y: 0.84, size: 6, opacity: 0.4 },
  { kind: 'orbit', x: 88, y: 0.34, size: 14, opacity: 0.36, dash: '8 10', strokeWidth: 1.35, rotate: -18 },
  { kind: 'orbit', x: -5, y: 0.28, size: 32, opacity: 0.22, dash: '5 9', strokeWidth: 1.15, rotate: 12 },
]

const BAND_X_JITTER = [0, 4, -6, 2, -3, 5, -8, 3]
const BAND_Y_JITTER = [0.06, 0.18, 0.32, 0.46, 0.6, 0.74, 0.86]
const SIZE_SCALE = [0.55, 0.72, 0.88, 1.05, 1.22, 1.4, 0.65, 1.15]
const OPACITY_SCALE = [0.7, 0.85, 1.0, 1.15, 1.3, 0.78, 1.08, 0.92]
const ROTATE_JITTER = [0, 12, -18, 25, -8, 32, -22, 6]
const DASH_VARIANTS = ['11 8', '3 10', '8 12', '14 6', '5 9', '2 8', '10 10', '7 11']

function nudgeAwayFromCenter(x: number): number {
  if (x > 24 && x < 76) {
    return x < 50 ? Math.min(x, 14) : Math.max(x, 86)
  }
  return x
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n))
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
    // 1–2 piezas por banda (antes 2–4)
    const count = 1 + (b % 2)
    for (let k = 0; k < count; k++) {
      const base = items[(start + k * 2) % items.length]
      const idx = b * 5 + k * 3
      const xJ = BAND_X_JITTER[(b + k) % BAND_X_JITTER.length]
      const yJ = BAND_Y_JITTER[(b * 2 + k) % BAND_Y_JITTER.length]
      const x = nudgeAwayFromCenter(
        Math.max(-12, Math.min(108, base.x + xJ * (b % 2 === 0 ? 1 : -1))),
      )
      const maxYInBand = b === bands - 1 ? vh * 0.4 : vh * 0.9
      const yAbs = bandTop + Math.min(yJ * vh, maxYInBand)

      const sizeMul = SIZE_SCALE[idx % SIZE_SCALE.length]
      const opacMul = OPACITY_SCALE[(idx + 2) % OPACITY_SCALE.length]

      if (base.kind === 'sparkle') {
        result.push({
          ...base,
          x,
          yAbs,
          size: Math.round(clamp(base.size * sizeMul, 5, 34)),
          opacity: clamp(base.opacity * opacMul, 0.16, 0.55),
        })
      } else {
        result.push({
          ...base,
          x,
          yAbs,
          size: Math.round(clamp(base.size * sizeMul, 12, 52)),
          opacity: clamp(base.opacity * opacMul, 0.14, 0.42),
          rotate: (base.rotate ?? 0) + ROTATE_JITTER[idx % ROTATE_JITTER.length],
          dash: DASH_VARIANTS[(idx + b) % DASH_VARIANTS.length],
          strokeWidth: clamp((base.strokeWidth ?? 1.2) * (0.85 + (idx % 4) * 0.08), 1.0, 1.6),
        })
      }
    }
  }

  return result
}

function DashedOrbit({
  sizeVw,
  color,
  opacity,
  dash = '11 8',
  strokeWidth = 1.15,
  rotate = 0,
}: {
  sizeVw: number
  color: string
  opacity: number
  dash?: string
  strokeWidth?: number
  rotate?: number
}) {
  return (
    <svg
      className="overflow-visible"
      width={`${sizeVw}vw`}
      height={`${sizeVw}vw`}
      viewBox="0 0 400 400"
      fill="none"
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, opacity }}
      aria-hidden
    >
      <circle
        cx="200"
        cy="200"
        r="168"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dash}
      />
      <circle cx="48" cy="118" r="3.2" fill={color} opacity="0.7" />
      <circle cx="340" cy="96" r="2.6" fill={color} opacity="0.55" />
      <circle cx="356" cy="230" r="2.8" fill={color} opacity="0.5" />
    </svg>
  )
}

function SparkleMark({
  size,
  color,
  opacity,
}: {
  size: number
  color: string
  opacity: number
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      opacity={opacity}
      aria-hidden
    >
      <path d={SPARKLE_PATH} />
    </svg>
  )
}

function ScatterLayer({
  items,
  accent,
  layerId,
}: {
  items: Array<ScatterItem & { yAbs: number }>
  accent: string
  layerId: string
}) {
  return (
    <>
      {items.map((item, i) => {
        const uid = `${layerId}-${i}`
        const style: React.CSSProperties = {
          left: `${item.x}%`,
          top: item.yAbs,
          transform: 'translate(-50%, -50%)',
        }

        if (item.kind === 'sparkle') {
          return (
            <div key={uid} className="absolute" style={style}>
              <SparkleMark size={item.size} color={accent} opacity={item.opacity} />
            </div>
          )
        }

        return (
          <div key={uid} className="absolute" style={style}>
            <DashedOrbit
              sizeVw={item.size}
              color={accent}
              opacity={item.opacity}
              dash={item.dash}
              strokeWidth={item.strokeWidth}
              rotate={item.rotate}
            />
          </div>
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
        color: palette.accent,
      }}
    >
      <div
        ref={slowRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <ScatterLayer items={slowItems} accent={palette.accent} layerId="slow" />
      </div>

      <div
        ref={midRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <ScatterLayer items={midItems} accent={palette.accent} layerId="mid" />
      </div>

      <div
        ref={fastRef}
        className="absolute top-0 left-0 w-full will-change-transform"
        style={{ height: layerHeight }}
      >
        <ScatterLayer items={fastItems} accent={palette.accent} layerId="fast" />
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
