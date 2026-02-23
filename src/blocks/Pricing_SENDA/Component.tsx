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

type PricingSendaProps = {
  anchorId?: string | null
  richText?: DefaultTypedEditorState | null
  plans?: Plan[] | null
  backgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
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
    richText,
    plans,
    backgroundColor,
    textColor,
    boldTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = props

  const uniqueId = React.useId().replace(/:/g, '-')
  const styleId = `pricing-senda-${uniqueId}`

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
  const isValidFontFile = fontFileUrl && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl)

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
        `[data-ps-font="${styleId}"], [data-ps-font="${styleId}"] *, [data-ps-font="${styleId}"] a, [data-ps-font="${styleId}"] span { font-family: ${fontValue} !important; }`,
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

    styles.push(
      `[data-ps-font="${styleId}"] h4 { font-weight: 700 !important; letter-spacing: 0.02em; }`,
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

  const combinedStyles = buildStyles()
  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined

  const renderPlan = (plan: Plan, index: number) => {
    const planStyle: React.CSSProperties = {
      ...(plan.backgroundColor ? { backgroundColor: plan.backgroundColor } : undefined),
      ...(plan.textColor ? { color: plan.textColor } : undefined),
    }

    const planContent = (
      <div
        className={`pricing-senda-plan pricing-senda-plan-${index} grid grid-cols-1 gap-5 rounded-xl p-5 md:grid-cols-2 md:gap-6 md:p-6 lg:gap-6 lg:p-7`}
        style={planStyle}
      >
        {plan.richText && (
          <div className="min-w-0 md:pr-6 lg:pr-10 [&_h1]:m-0 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:m-0 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:m-0 [&_h4]:font-bold [&_p]:m-0 [&_ul]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mt-1 [&_ol]:list-decimal [&_ol]:pl-5">
            <RichText data={plan.richText} enableGutter={false} enableProse={false} />
          </div>
        )}
        <div className="flex flex-col gap-5 min-w-0 md:border-l md:border-current/30 md:pl-6 lg:pl-10">
          {plan.richText && Array.isArray(plan.planElements) && plan.planElements.length > 0 ? (
            <hr className="my-0 w-full flex-shrink-0 border-t border-current/30 md:hidden" aria-hidden />
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
