'use client'

import React from 'react'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { useGoogleFont } from '@/utilities/useGoogleFont'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/** Tipos locales: sin depender de payload-types. */
type FontFile = {
  id?: string | number
  url?: string
  filename?: string
  name?: string
}

/** Variante de font group -> font-weight y font-style para @font-face */
const FONT_GROUP_VARIANT_CSS: Record<
  string,
  { weight: string; style: string }
> = {
  regular: { weight: '400', style: 'normal' },
  regularItalic: { weight: '400', style: 'italic' },
  medium: { weight: '500', style: 'normal' },
  mediumItalic: { weight: '500', style: 'italic' },
  semibold: { weight: '600', style: 'normal' },
  semiboldItalic: { weight: '600', style: 'italic' },
  bold: { weight: '700', style: 'normal' },
  boldItalic: { weight: '700', style: 'italic' },
  light: { weight: '300', style: 'normal' },
  lightItalic: { weight: '300', style: 'italic' },
  heavy: { weight: '800', style: 'normal' },
  heavyItalic: { weight: '800', style: 'italic' },
}

type FontGroupFontEntry = {
  font?: FontFile | number
  variant?: string
}

type FontGroupData = {
  fontFamilyName?: string | null
  fonts?: FontGroupFontEntry[] | null
  typography?: {
    h1?: string | null
    h2?: string | null
    h3?: string | null
    h4?: string | null
    h5?: string | null
    h6?: string | null
    body?: string | null
    caption?: string | null
  } | null
}

type PlanElement = {
  iconSVG?: string | null
  text?: string | null
}

type Plan = {
  richText?: DefaultTypedEditorState | null
  planElements?: PlanElement[] | null
  backgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  enable3DGradient?: boolean | null
  enableLink?: boolean | null
  link?: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: number | unknown
    } | null
    url?: string | null
    label?: string | null
    appearance?: 'default' | 'outline' | null
  } | null
}

function sanitizeAnchorId(value: string | null | undefined, fallback: string): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || fallback
}

/** Convierte un color hex o rgb a rgba con la opacidad indicada (0–1). */
function colorWithAlpha(color: string | null | undefined, alpha: number): string | undefined {
  if (!color || typeof color !== 'string') return undefined
  const c = color.trim()
  const hex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.exec(c)
  if (hex) {
    const h = hex[1]
    const r = h.length === 3 ? parseInt(h[0] + h[0], 16) : parseInt(h.slice(0, 2), 16)
    const g = h.length === 3 ? parseInt(h[1] + h[1], 16) : parseInt(h.slice(2, 4), 16)
    const b = h.length === 3 ? parseInt(h[2] + h[2], 16) : parseInt(h.slice(4, 6), 16)
    return `rgba(${r},${g},${b},${alpha})`
  }
  const rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(c)
  if (rgb) return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${alpha})`
  return undefined
}

type PricingSendaProps = {
  anchorId?: string | null
  /** Índice del bloque en el layout (pasado por RenderBlocks); se usa para un styleId estable cuando no hay anchorId */
  blockIndex?: number
  richText?: DefaultTypedEditorState | null
  plans?: Plan[] | null
  backgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  useFontGroup?: boolean | null
  fontGroup?: FontGroupData | number | null
  fontFamily?: string | null
  useCustomFont?: boolean | null
  customFontFile?: FontFile | number | null
  customFontName?: string | null
}

const hasLink = (plan: Plan): boolean => {
  if (!plan.enableLink || !plan.link) return false
  if (plan.link.type === 'reference' && plan.link.reference?.value) return true
  if (plan.link.type === 'custom' && plan.link.url) return true
  return false
}

export const PricingSendaBlock: React.FC<PricingSendaProps> = (props) => {
  const {
    anchorId,
    blockIndex = 0,
    richText,
    plans,
    backgroundColor,
    textColor,
    boldTextColor,
    useFontGroup,
    fontGroup,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  // ID estable (mismo en servidor y cliente) para que [data-ps-font] aplique los estilos del font group.
  // Con anchorId usamos ese valor; si no hay o queda vacío, usamos el índice del bloque en el layout.
  const anchorSlug = sanitizeAnchorId(anchorId, '')
  const styleId = anchorSlug ? `pricing-senda-${anchorSlug}` : `pricing-senda-block-${blockIndex}`

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === 'object' ? (fontGroup as FontGroupData) : null

  const customFontFileObj =
    customFontFile && typeof customFontFile === 'object' ? customFontFile : null
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFileObj?.name?.trim() ||
    (customFontFileObj?.filename ? customFontFileObj.filename.replace(/\.[^.]+$/, '') : undefined)

  const getFontFamily = () => {
    if (fontGroupObj?.fontFamilyName) return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }

  const selectedFontFamily = getFontFamily()
  useGoogleFont(fontGroupObj ? undefined : selectedFontFamily)

  const fontFileUrl = customFontFileObj?.url
    ? getMediaUrl(customFontFileObj.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const fontFileNameOrUrl = customFontFileObj?.filename || customFontFileObj?.url || ''
  const isValidFontFile = fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

  const buildStyles = () => {
    const styles: string[] = []
    const sel = `[data-ps-font="${styleId}"]`
    const mainRichtext = `${sel} .pricing-senda-main-richtext`
    const planRichtext = `${sel} .pricing-senda-plan`
    const payloadRichtext = `${sel} .payload-richtext`

    if (fontGroupObj?.fontFamilyName && Array.isArray(fontGroupObj.fonts)) {
      const familyName = fontGroupObj.fontFamilyName.replace(/"/g, '\\"')
      for (const entry of fontGroupObj.fonts) {
        const font = entry?.font
        if (!font || typeof font === 'number') continue
        const url = (font as FontFile).url
        if (!url) continue
        const fontUrl = getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1')
        const variant = entry.variant || 'regular'
        const { weight, style } = FONT_GROUP_VARIANT_CSS[variant] ?? {
          weight: '400',
          style: 'normal',
        }
        const formatMatch = fontUrl.match(/\.(woff2?|ttf|otf)(\?.*)?$/i)
        const format = formatMatch ? (formatMatch[1].toLowerCase() === 'woff2' ? 'woff2' : formatMatch[1].toLowerCase() === 'woff' ? 'woff' : formatMatch[1].toLowerCase() === 'ttf' ? 'truetype' : 'opentype') : 'woff2'
        if (!fontUrl || !formatMatch) continue
        styles.push(`
          @font-face {
            font-family: "${familyName}";
            src: url("${fontUrl}") format("${format}");
            font-weight: ${weight};
            font-style: ${style};
            font-display: swap;
          }
        `)
      }
      const fontValue = `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} span, ${payloadRichtext}, ${payloadRichtext} * { font-family: ${fontValue} !important; }`,
      )
      const typo = fontGroupObj.typography
      if (typo) {
        if (typo.h1)
          styles.push(`${mainRichtext} h1, ${planRichtext} h1, ${payloadRichtext} h1 { font-size: ${typo.h1} !important; }`)
        if (typo.h2)
          styles.push(`${mainRichtext} h2, ${planRichtext} h2, ${payloadRichtext} h2 { font-size: ${typo.h2} !important; }`)
        if (typo.h3)
          styles.push(`${mainRichtext} h3, ${planRichtext} h3, ${payloadRichtext} h3 { font-size: ${typo.h3} !important; }`)
        if (typo.h4)
          styles.push(`${mainRichtext} h4, ${planRichtext} h4, ${payloadRichtext} h4 { font-size: ${typo.h4} !important; }`)
        if (typo.h5)
          styles.push(`${mainRichtext} h5, ${planRichtext} h5, ${payloadRichtext} h5 { font-size: ${typo.h5} !important; }`)
        if (typo.h6)
          styles.push(`${mainRichtext} h6, ${planRichtext} h6, ${payloadRichtext} h6 { font-size: ${typo.h6} !important; }`)
        if (typo.body)
          styles.push(
            `${mainRichtext} p, ${mainRichtext} li, ${planRichtext} p, ${planRichtext} li, ${payloadRichtext} p, ${payloadRichtext} li { font-size: ${typo.body} !important; }`,
          )
        if (typo.caption) {
          styles.push(`${mainRichtext} .caption, ${planRichtext} .caption, ${payloadRichtext} .caption { font-size: ${typo.caption} !important; }`)
          styles.push(
            `${mainRichtext} p .caption, ${mainRichtext} .payload-richtext .caption, ${mainRichtext} span.caption, ${planRichtext} p .caption, ${planRichtext} span.caption, ${payloadRichtext} span.caption { font-size: ${typo.caption} !important; }`,
          )
          styles.push(
            `[data-ps-font="${styleId}"] [data-text-size="caption"] { font-size: ${typo.caption} !important; }`,
          )
        }
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
        `${sel}, ${sel} *, ${sel} a, ${sel} span { font-family: ${fontValue} !important; }`,
      )
    } else if (selectedFontFamily) {
      const fontValue = selectedFontFamily
      styles.push(
        `${sel}, ${sel} *, ${sel} a, ${sel} span { font-family: ${fontValue} !important; }`,
      )
    }

    if (textColor) {
      styles.push(
        `[data-ps-font="${styleId}"] .pricing-senda-main-richtext, [data-ps-font="${styleId}"] .pricing-senda-main-richtext p, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h1, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h2, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h3, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h4, [data-ps-font="${styleId}"] .pricing-senda-main-richtext li, [data-ps-font="${styleId}"] .pricing-senda-main-richtext span:not(strong):not(b) { color: ${textColor} !important; }`,
      )
    }

    if (boldTextColor) {
      styles.push(
        `[data-ps-font="${styleId}"] .pricing-senda-main-richtext strong, [data-ps-font="${styleId}"] .pricing-senda-main-richtext b { color: ${boldTextColor} !important; }`,
      )
    }

    if (!fontGroupObj) {
      styles.push(
        `[data-ps-font="${styleId}"] .pricing-senda-main-richtext h1, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h2, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h3, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h4, [data-ps-font="${styleId}"] .pricing-senda-plan h1, [data-ps-font="${styleId}"] .pricing-senda-plan h2, [data-ps-font="${styleId}"] .pricing-senda-plan h3, [data-ps-font="${styleId}"] .pricing-senda-plan h4 { font-weight: 800 !important; letter-spacing: 0.02em; }`,
      )
      styles.push(
        `[data-ps-font="${styleId}"] .pricing-senda-main-richtext h4, [data-ps-font="${styleId}"] .pricing-senda-plan h4 { font-weight: 900 !important; }`,
      )
    } else {
      styles.push(
        `[data-ps-font="${styleId}"] .pricing-senda-main-richtext h1, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h2, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h3, [data-ps-font="${styleId}"] .pricing-senda-main-richtext h4, [data-ps-font="${styleId}"] .pricing-senda-plan h1, [data-ps-font="${styleId}"] .pricing-senda-plan h2, [data-ps-font="${styleId}"] .pricing-senda-plan h3, [data-ps-font="${styleId}"] .pricing-senda-plan h4 { letter-spacing: 0.02em; }`,
      )
      const weightRules: Array<[string, string]> = [
        ['light', '300'],
        ['regular', '400'],
        ['medium', '500'],
        ['semibold', '600'],
        ['bold', '700'],
        ['heavy', '800'],
      ]
      for (const [key, w] of weightRules) {
        styles.push(
          `[data-ps-font="${styleId}"] [data-text-weight="${key}"] { font-weight: ${w} !important; }`,
        )
        styles.push(
          `[data-ps-font="${styleId}"] .pricing-senda-main-richtext [data-text-weight="${key}"], [data-ps-font="${styleId}"] .pricing-senda-plan [data-text-weight="${key}"], [data-ps-font="${styleId}"] .payload-richtext [data-text-weight="${key}"] { font-weight: ${w} !important; }`,
        )
      }
    }
    /* sub/sup como “texto secundario” en la misma línea: estilo tipo h4, sin bajar/subir */
    styles.push(
      `[data-ps-font="${styleId}"] sub, [data-ps-font="${styleId}"] sup { font-weight: 700 !important; vertical-align: baseline !important; font-size: 0.75em; line-height: 1.2; }`,
    )

    styles.push(
      `[data-ps-font="${styleId}"] .pricing-senda-plan-icon { display: flex; align-items: center; justify-content: center; width: 48px; height: 48px; min-width: 48px; min-height: 48px; flex-shrink: 0; overflow: visible; }`,
    )
    styles.push(
      `[data-ps-font="${styleId}"] .pricing-senda-plan-icon svg { max-width: 100% !important; max-height: 100% !important; width: auto !important; height: auto !important; object-fit: contain !important; display: block !important; margin: auto; }`,
    )

    return styles.join('\n')
  }

  const planBoldStyles =
    Array.isArray(plans) && plans.length > 0
      ? plans
          .map(
            (_, i) =>
              plans[i]?.boldTextColor &&
              `[data-ps-font="${styleId}"] .pricing-senda-plan-${i} strong, [data-ps-font="${styleId}"] .pricing-senda-plan-${i} b { color: ${plans[i]!.boldTextColor} !important; }`,
          )
          .filter(Boolean)
          .join('\n')
      : ''

  const planDividerStyles =
    Array.isArray(plans) && plans.length > 0
      ? plans
          .map((plan, i) => {
            const divColor = colorWithAlpha(plan?.boldTextColor ?? plan?.textColor ?? null, 0.4)
            return divColor
              ? `[data-ps-font="${styleId}"] .pricing-senda-plan-${i} hr { border-color: ${divColor} !important; }`
              : ''
          })
          .filter(Boolean)
          .join('\n')
      : ''

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const renderPlan = (plan: Plan, index: number) => {
    const planStyle: React.CSSProperties = {
      ...(plan.backgroundColor ? { backgroundColor: plan.backgroundColor } : undefined),
      ...(plan.textColor ? { color: plan.textColor } : undefined),
    }
    const dividerColor = colorWithAlpha(plan.boldTextColor ?? plan.textColor ?? null, 0.4)
    const gradientActive = plan.enable3DGradient === true

    const planContent = (
      <div
        className={`pricing-senda-plan pricing-senda-plan-${index} relative grid grid-cols-1 gap-5 rounded-xl p-5 md:grid-cols-2 md:grid-rows-1 md:gap-6 md:p-6 lg:gap-6 lg:p-7 shadow-[0_0_24px_rgba(255,255,255,0.55),0_0_48px_rgba(255,255,255,0.25)]`}
        style={planStyle}
      >
        {gradientActive && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.03) 35%, rgba(0,0,0,0.03) 65%, rgba(0,0,0,0.22) 100%)',
            }}
            aria-hidden
          />
        )}
        {plan.richText && (
          <div className="relative z-10 min-w-0 md:pr-6 lg:pr-10 [&_h1]:m-0 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:m-0 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:m-0 [&_h4]:font-bold [&_p]:m-0 [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-1 [&_ol]:list-decimal [&_ol]:pl-5">
            <RichText data={plan.richText} enableGutter={false} enableProse={false} />
          </div>
        )}
        <div
          className="relative z-10 flex min-h-full flex-col gap-5 min-w-0 md:min-h-0 md:h-full md:justify-between md:border-l md:pl-6 lg:pl-10 md:border-current/30"
          style={dividerColor ? { borderLeftColor: dividerColor } : undefined}
        >
          {plan.richText && Array.isArray(plan.planElements) && plan.planElements.length > 0 ? (
            <hr
              className="my-0 w-full flex-shrink-0 border-t border-current/30 md:hidden"
              style={dividerColor ? { borderTopColor: dividerColor } : undefined}
              aria-hidden
            />
          ) : null}
          {Array.isArray(plan.planElements) &&
            plan.planElements.map((el, elIndex) => {
              if (!el?.iconSVG && el?.text == null) return null
              const iconSvg = el?.iconSVG
              const normalizedSvg = iconSvg
                ? sanitizeSVG(iconSvg).replace(/\sheight=["'][^"']*["']/gi, '')
                : ''
              return (
                <div
                  key={elIndex}
                  className="flex items-center gap-3"
                  style={plan.textColor ? { color: plan.textColor } : undefined}
                >
                  {normalizedSvg ? (
                    <span className="pricing-senda-plan-icon" aria-hidden>
                      <span
                        className="block h-full w-full [&_svg]:block"
                        style={{ width: 48, height: 48 }}
                        dangerouslySetInnerHTML={{ __html: normalizedSvg }}
                      />
                    </span>
                  ) : null}
                  {el?.text != null && <span>{el.text}</span>}
                </div>
              )
            })}
        </div>
      </div>
    )

    if (hasLink(plan)) {
      return (
        <CMSLink
          key={index}
          {...(plan.link as React.ComponentProps<typeof CMSLink>)}
          appearance="inline"
          className="block transition-all duration-200 hover:opacity-90"
        >
          {planContent}
        </CMSLink>
      )
    }

    return <div key={index}>{planContent}</div>
  }

  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      {planBoldStyles && <style>{planBoldStyles}</style>}
      {planDividerStyles && <style>{planDividerStyles}</style>}
      <section
        id={sanitizeAnchorId(anchorId, 'pricing-senda')}
        data-ps-font={styleId}
        className="px-[5%] py-16 md:py-24 lg:py-28"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="container">
          <div className="mb-12 md:mb-16 lg:mb-20 w-full pricing-senda-main-richtext" style={fontStyle}>
            {richText && (
              <div className="w-full [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_h4]:font-bold [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
                <RichText data={richText} enableGutter={false} enableProse={false} />
              </div>
            )}
          </div>

          {Array.isArray(plans) && plans.length > 0 && (
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 md:gap-10 lg:gap-12">
              {plans.map((plan, index) => renderPlan(plan, index))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
