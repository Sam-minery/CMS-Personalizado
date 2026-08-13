'use client'

import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import type { Page, Post } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Checkbox } from '@/components/ui/checkbox'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'

type MediaLike = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
} | number

type IconGroup = {
  useMedia?: boolean | null
  img?: MediaLike | null
  svg?: string | null
  alt?: string | null
}

type LinkType = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: {
    relationTo?: 'pages' | 'posts'
    value?: Page | Post | number | string
  } | null
  url?: string | null
  label?: string | null
}

type SectionTypography = {
  color?: string | null
  bold?: string | null
  ff?: string | null
}

type FeatureItem = {
  id?: string | null
  icon?: IconGroup | null
  content?: DefaultTypedEditorState | null
}

type CtaButtonItem = {
  id?: string | null
  link?: LinkType | null
  iconSVG?: string | null
}

type ResultButtonItem = {
  id?: string | null
  link?: LinkType | null
  svg?: string | null
}

type CategoryRow = {
  id?: string | null
  icon?: IconGroup | null
  catLbl?: string | null
  imcLbl?: string | null
  imcMin?: number | null
  imcMax?: number | null
  eligible?: boolean | null
}

type HeroDropData = {
  tag?: {
    icon?: IconGroup | null
    label?: string | null
    backgroundColor?: string | null
    textColor?: string | null
  } | null
  hdr?: DefaultTypedEditorState | null
  hsty?: SectionTypography | null
  buttons?: CtaButtonItem[] | null
  features?: FeatureItem[] | null
  fsty?: SectionTypography | null
  media?: MediaLike | null
  imgAlt?: string | null
  calc?: {
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    hLabel?: string | null
    hPh?: string | null
    hUnit?: string | null
    wLabel?: string | null
    wPh?: string | null
    wUnit?: string | null
    btnLabel?: string | null
    btnSvg?: string | null
    ptag?: {
      icon?: IconGroup | null
      label?: string | null
    } | null
    floatSvg?: string | null
    btnBg?: string | null
    btnFg?: string | null
    cardBg?: string | null
    modalTitle?: string | null
    modalBg?: string | null
    recalcTxt?: string | null
    cats?: CategoryRow[] | null
    enableContact?: boolean | null
    contact?: {
      title?: DefaultTypedEditorState | null
      desc?: DefaultTypedEditorState | null
      nPh?: string | null
      pPh?: string | null
      ePh?: string | null
      nIcon?: IconGroup | null
      pIcon?: IconGroup | null
      eIcon?: IconGroup | null
      privacy?: DefaultTypedEditorState | null
      privReq?: boolean | null
      contBtn?: DefaultTypedEditorState | null
      contBg?: string | null
      contFg?: string | null
    } | null
    eligContent?: DefaultTypedEditorState | null
    eligBtns?: ResultButtonItem[] | null
    eligBg?: string | null
    eligFg?: string | null
    noEligContent?: DefaultTypedEditorState | null
    noEligBtns?: ResultButtonItem[] | null
    noEligBg?: string | null
    noEligFg?: string | null
    tagBg?: string | null
    tagFg?: string | null
  } | null
  footerItems?: FeatureItem[] | null
  osty?: SectionTypography | null
  curves?: boolean | null
  accent?: string | null
  bg?: string | null
  bgGrad?: string | null
  pBtnBg?: string | null
  pBtnFg?: string | null
  sBtnFg?: string | null
}

type HeroDropProps = {
  hd?: HeroDropData | null
}

type ModalStep = 'calc' | 'contact' | 'result'

const NAVY = '#101835'

const DEFAULT_ARROW_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'

const DEFAULT_STAR_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5 13.8 8.2 19.7 9l-4.4 4.1 1.2 5.9L12 16.2 7.5 19l1.2-5.9L4.3 9l5.9-.8L12 2.5Z"/></svg>'

const DEFAULT_LOCK_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>'

const DEFAULT_CHART_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-6"/></svg>'

function getMediaUrlSafe(media: MediaLike | null | undefined): string {
  if (!media || typeof media !== 'object') return ''
  const url = media.url
  return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
}

function getIconAlt(icon?: IconGroup | null): string {
  return icon?.alt || 'Icono'
}

function sanitizeCssColor(value: string | null | undefined): string {
  if (value == null || typeof value !== 'string') return ''
  const trimmed = value.trim()
  if (!trimmed) return ''
  return trimmed.replace(/[^#a-zA-Z0-9(),.%\s/-]/g, '') || ''
}

function replaceBmiPlaceholder(
  data: DefaultTypedEditorState | null | undefined,
  bmiFormatted: string,
): DefaultTypedEditorState | null {
  if (!data) return null
  const walk = (node: unknown): unknown => {
    if (!node || typeof node !== 'object') return node
    if (Array.isArray(node)) return node.map(walk)
    const n = node as Record<string, unknown>
    const next: Record<string, unknown> = { ...n }
    if (typeof n.text === 'string' && n.text.includes('{bmi}')) {
      next.text = n.text.split('{bmi}').join(bmiFormatted)
    }
    if (Array.isArray(n.children)) {
      next.children = n.children.map(walk)
    }
    return next
  }
  return walk(data) as DefaultTypedEditorState
}

function matchCategory(bmi: number, categories: CategoryRow[] | null | undefined): CategoryRow | null {
  if (!categories?.length) return null
  for (const row of categories) {
    const min = typeof row.imcMin === 'number' ? row.imcMin : null
    if (min == null) continue
    const max = typeof row.imcMax === 'number' ? row.imcMax : null
    const geMin = bmi >= min
    const ltMax = max == null ? true : bmi < max
    if (geMin && ltMax) return row
  }
  return null
}

function IconMedia({
  icon,
  className,
  imgClassName,
  fallbackSvg,
}: {
  icon?: IconGroup | null
  className?: string
  imgClassName?: string
  fallbackSvg?: string
}) {
  const useMedia = icon?.useMedia === true && icon.img
  const src = useMedia ? getMediaUrlSafe(icon.img) : ''
  if (src) {
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <img src={src} alt={getIconAlt(icon)} className={cn('object-contain', imgClassName)} />
      </span>
    )
  }

  const raw = icon?.svg?.trim() || fallbackSvg || ''
  const svg = raw ? sanitizeSVG(raw) : ''
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

function typographyCss(
  scope: string,
  style?: SectionTypography | null,
  opts?: { headingSize?: string },
): string {
  if (!style && !opts?.headingSize) return ''
  const color = sanitizeCssColor(style?.color)
  const bold = sanitizeCssColor(style?.bold)
  const font = style?.ff && style.ff !== 'default' ? style.ff : ''
  const rules: string[] = []
  if (color || font) {
    rules.push(`${scope}{${color ? `color:${color};` : ''}${font ? `font-family:${font};` : ''}}`)
  }
  if (bold) {
    rules.push(`${scope} strong,${scope} b{color:${bold};}`)
  }
  if (opts?.headingSize) {
    rules.push(`${scope} h1,${scope} h2{${opts.headingSize}}`)
  }
  return rules.join('')
}

function ResultCTAButtons({
  buttons,
  backgroundColor,
  textColor,
}: {
  buttons?: ResultButtonItem[] | null
  backgroundColor: string
  textColor: string
}) {
  if (!buttons?.length) return null
  return (
    <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:items-center">
      {buttons.map((buttonItem, index) => {
        const iconSvg = buttonItem.svg?.trim() ? sanitizeSVG(buttonItem.svg) : ''
        const isSecondary = index > 0
        return (
          <CMSLink
            key={buttonItem.id || index}
            type={buttonItem.link?.type}
            newTab={buttonItem.link?.newTab}
            reference={
              buttonItem.link?.reference as React.ComponentProps<typeof CMSLink>['reference']
            }
            url={buttonItem.link?.url}
            label={null}
            appearance="inline"
            className={cn(
              'inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 sm:w-auto',
              isSecondary && 'border border-[#E5E7EB] bg-white',
            )}
            style={
              isSecondary
                ? { color: NAVY }
                : { backgroundColor, color: textColor }
            }
          >
            <span>{buttonItem.link?.label}</span>
            {iconSvg ? (
              <span
                className="inline-flex h-4 w-4"
                dangerouslySetInnerHTML={{ __html: iconSvg }}
                aria-hidden
              />
            ) : null}
          </CMSLink>
        )
      })}
    </div>
  )
}

export const HeroDrop: React.FC<HeroDropProps> = ({ hd }) => {
  const data = hd || {}
  const uid = useId().replace(/:/g, '')
  const rootClass = `hero-drop-${uid}`
  const dialogRef = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [formError, setFormError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<ModalStep>('calc')
  const [bmi, setBmi] = useState<number | null>(null)
  const [matchedCategory, setMatchedCategory] = useState<CategoryRow | null>(null)

  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [contactError, setContactError] = useState<string | null>(null)
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)

  const showCurves = data.curves !== false
  const accent = sanitizeCssColor(data.accent) || '#C2005F'
  const bg = sanitizeCssColor(data.bg) || '#FFFFFF'
  const gradient = data.bgGrad?.trim() || ''
  const primaryBtnBg = sanitizeCssColor(data.pBtnBg) || accent
  const primaryBtnText = sanitizeCssColor(data.pBtnFg) || '#FFFFFF'
  const secondaryBtnText = sanitizeCssColor(data.sBtnFg) || NAVY

  const tagBg = sanitizeCssColor(data.tag?.backgroundColor) || '#FCE4EC'
  const tagText = sanitizeCssColor(data.tag?.textColor) || accent
  const calc = data.calc
  const calcBtnBg = sanitizeCssColor(calc?.btnBg) || accent
  const calcBtnText = sanitizeCssColor(calc?.btnFg) || '#FFFFFF'
  const calcCardBg = sanitizeCssColor(calc?.cardBg) || '#FFFFFF'
  const modalBg = sanitizeCssColor(calc?.modalBg) || '#FFFFFF'
  const resultTagBg = sanitizeCssColor(calc?.tagBg) || '#E8F5E9'
  const resultTagFg = sanitizeCssColor(calc?.tagFg) || '#2E7D32'
  const eligBtnBg = sanitizeCssColor(calc?.eligBg) || accent
  const eligBtnFg = sanitizeCssColor(calc?.eligFg) || '#FFFFFF'
  const noEligBtnBg = sanitizeCssColor(calc?.noEligBg) || accent
  const noEligBtnFg = sanitizeCssColor(calc?.noEligFg) || '#FFFFFF'
  const contactBtnBg = sanitizeCssColor(calc?.contact?.contBg) || accent
  const contactBtnFg = sanitizeCssColor(calc?.contact?.contFg) || '#FFFFFF'
  const privacyRequired = calc?.contact?.privReq !== false

  const imageSrc = getMediaUrlSafe(data.media)
  const imageAlt =
    data.imgAlt ||
    (data.media && typeof data.media === 'object' ? data.media.alt : null) ||
    'Hero'

  const features = Array.isArray(data.features) ? data.features : []
  const footerItems = Array.isArray(data.footerItems) ? data.footerItems : []
  const buttons = Array.isArray(data.buttons) ? data.buttons : []
  const categories = Array.isArray(calc?.cats) ? calc.cats : []

  const bmiFormatted =
    bmi != null ? bmi.toFixed(1).replace('.', ',') : ''
  const isEligible = Boolean(matchedCategory?.eligible)
  const resultContent = replaceBmiPlaceholder(
    isEligible ? calc?.eligContent : calc?.noEligContent,
    bmiFormatted,
  )

  const scopedCss = useMemo(() => {
    const root = `.${rootClass}`
    return [
      typographyCss(`${root} .hd-header`, data.hsty, {
        headingSize:
          'font-size:clamp(2.25rem,3.6vw,3.5rem);line-height:1.08;font-weight:700;letter-spacing:-0.03em;color:#101835;',
      }),
      typographyCss(`${root} .hd-features`, data.fsty),
      typographyCss(`${root} .hd-footer`, data.osty),
      `${root}{--hd-accent:${accent};}`,
      `${root} .hd-header .payload-richtext h1,${root} .hd-header .payload-richtext h2{font-size:clamp(1.5rem,5.6vw,1.85rem);line-height:1.15;letter-spacing:-0.03em;margin:0;}`,
      `${root} .hd-header .payload-richtext p{margin:1rem 0 0;font-size:0.8125rem;line-height:1.45;color:#4B5563;max-width:34rem;}`,
      `${root} .hd-header .payload-richtext > *:first-child{margin-top:0;}`,
      `@media (min-width:1024px){${root} .hd-header .payload-richtext h1,${root} .hd-header .payload-richtext h2{font-size:3.5rem;line-height:1.05;} ${root} .hd-header .payload-richtext p{margin:0.85rem 0 0;font-size:1.0625rem;line-height:1.55;}}`,
      `${root} .hd-features .payload-richtext{text-align:center;}`,
      `@media (min-width:1024px){${root} .hd-features .payload-richtext{text-align:left;}}`,
      `${root} .hd-features .payload-richtext h3,${root} .hd-features .payload-richtext h4,${root} .hd-features .payload-richtext p:first-child,${root} .hd-features .payload-richtext strong{display:block;font-size:0.8125rem;font-weight:700;color:#101835;margin:0 0 0.25rem;line-height:1.25;}`,
      `@media (min-width:1024px){${root} .hd-features .payload-richtext h3,${root} .hd-features .payload-richtext h4,${root} .hd-features .payload-richtext p:first-child,${root} .hd-features .payload-richtext strong{font-size:0.9375rem;}}`,
      `${root} .hd-features .payload-richtext p{margin:0;font-size:0.6875rem;line-height:1.35;color:#6B7280;}`,
      `@media (min-width:1024px){${root} .hd-features .payload-richtext p{font-size:0.8125rem;line-height:1.4;}}`,
      `${root} .hd-footer .payload-richtext{text-align:center;}`,
      `@media (min-width:1024px){${root} .hd-footer .payload-richtext{text-align:left;}}`,
      `${root} .hd-footer .payload-richtext h3,${root} .hd-footer .payload-richtext h4,${root} .hd-footer .payload-richtext p:first-child,${root} .hd-footer .payload-richtext strong{font-size:0.75rem;font-weight:700;color:#101835;margin:0;line-height:1.25;}`,
      `@media (min-width:1024px){${root} .hd-footer .payload-richtext h3,${root} .hd-footer .payload-richtext h4,${root} .hd-footer .payload-richtext p:first-child,${root} .hd-footer .payload-richtext strong{font-size:0.9375rem;line-height:1.3;}}`,
      `${root} .hd-footer .payload-richtext p{margin:0.15rem 0 0;font-size:0.625rem;line-height:1.3;color:#6B7280;}`,
      `@media (min-width:1024px){${root} .hd-footer .payload-richtext p{font-size:0.8125rem;line-height:1.4;}}`,
      `${root} .hd-calc-content .payload-richtext h3,${root} .hd-calc-content .payload-richtext h4,${root} .hd-calc-content .payload-richtext > *:first-child{font-size:1.0625rem;font-weight:700;color:#101835;margin:0;line-height:2.75rem;}`,
      `${root} .hd-calc-content .payload-richtext > *:not(:first-child){margin:0.35rem 0 0;margin-left:calc(-2.75rem - 0.75rem);width:calc(100% + 2.75rem + 0.75rem);max-width:none;font-size:0.8125rem;line-height:1.4;font-weight:400;color:#6B7280;}`,
      `@keyframes hd-curve-flow{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-180}}`,
      `@keyframes hd-curve-breathe{0%,100%{opacity:.55}50%{opacity:1}}`,
      `@keyframes hd-curve-drift{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(-12px,8px,0)}}`,
      `@keyframes hd-curve-drift-m{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(-6px,5px,0)}}`,
      `${root} .hd-curves path{stroke-dasharray:3 7;stroke-linecap:round;animation:hd-curve-flow 26s linear infinite,hd-curve-breathe 11s ease-in-out infinite;will-change:stroke-dashoffset,opacity;}`,
      `${root} .hd-curves path:nth-child(2){animation-duration:32s,13s;animation-delay:-6s,-2.5s;}`,
      `${root} .hd-curves path:nth-child(3){animation-duration:38s,15s;animation-delay:-12s,-5s;}`,
      `${root} .hd-curves-mobile{animation:hd-curve-drift-m 18s ease-in-out infinite;will-change:transform;}`,
      `@media (min-width:1024px){${root} .hd-curves-desktop{animation:hd-curve-drift 22s ease-in-out infinite;will-change:transform;}}`,
      `${root} .hd-heart-fab .hd-heart-icon{transition:transform .35s cubic-bezier(.22,1,.36,1);transform-origin:center;will-change:transform;}`,
      `${root} .hd-heart-fab:hover .hd-heart-icon,${root} .hd-heart-fab:focus-visible .hd-heart-icon{transform:scale(1.2);}`,
      `${root} .hd-heart-fab .hd-heart-path{fill-opacity:0;transition:fill-opacity .35s ease;}`,
      `${root} .hd-heart-fab:hover .hd-heart-path,${root} .hd-heart-fab:focus-visible .hd-heart-path{fill-opacity:1;}`,
      `${root} .hd-heart-fab .hd-heart-custom{transition:transform .35s cubic-bezier(.22,1,.36,1);transform-origin:center;}`,
      `${root} .hd-heart-fab:hover .hd-heart-custom,${root} .hd-heart-fab:focus-visible .hd-heart-custom{transform:scale(1.2);}`,
      `@media (prefers-reduced-motion:reduce){${root} .hd-curves,${root} .hd-curves path{animation:none!important;} ${root} .hd-heart-fab .hd-heart-icon,${root} .hd-heart-fab .hd-heart-path,${root} .hd-heart-fab .hd-heart-custom{transition:none!important;} ${root} .hd-heart-fab:hover .hd-heart-icon,${root} .hd-heart-fab:focus-visible .hd-heart-icon,${root} .hd-heart-fab:hover .hd-heart-custom,${root} .hd-heart-fab:focus-visible .hd-heart-custom{transform:none;}}`,
    ].join('')
  }, [rootClass, data.hsty, data.fsty, data.osty, accent])

  const resetContactForm = useCallback(() => {
    setContactName('')
    setContactPhone('')
    setContactEmail('')
    setAcceptPrivacy(false)
    setContactError(null)
    setIsSubmittingContact(false)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setModalStep('calc')
    setBmi(null)
    setMatchedCategory(null)
    setFormError(null)
    resetContactForm()
  }, [resetContactForm])

  const calculateBMI = useCallback(() => {
    const heightNum = parseFloat(height.replace(',', '.'))
    const weightNum = parseFloat(weight.replace(',', '.'))
    if (!(heightNum > 0 && weightNum > 0)) {
      setFormError('Introduce valores válidos para la estatura y el peso.')
      return
    }
    const calculatedBMI = weightNum / ((heightNum / 100) * (heightNum / 100))
    const match = matchCategory(calculatedBMI, categories)
    setBmi(calculatedBMI)
    setMatchedCategory(match)
    setFormError(null)
    setIsModalOpen(true)
    // El resultado solo se muestra tras enviar el formulario de contacto.
    setModalStep('contact')
  }, [height, weight, categories])

  const handleCardSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()
      calculateBMI()
    },
    [calculateBMI],
  )

  const handleContactSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setContactError(null)

      if (privacyRequired && !acceptPrivacy) {
        setContactError('Debes aceptar el tratamiento de datos para continuar.')
        return
      }

      setIsSubmittingContact(true)
      try {
        const response = await fetch('/api/form-custom-2-submissions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            submissionData: [
              { field: 'name', value: contactName },
              { field: 'phone', value: contactPhone },
              { field: 'email', value: contactEmail },
              { field: 'bmi', value: bmiFormatted },
              { field: 'category', value: matchedCategory?.catLbl || '' },
              { field: 'source', value: 'heroDrop' },
            ],
            formType: 'heroDrop',
          }),
        })

        if (!response.ok) {
          setContactError('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
          return
        }

        resetContactForm()
        setModalStep('result')
      } catch {
        setContactError('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
      } finally {
        setIsSubmittingContact(false)
      }
    },
    [
      privacyRequired,
      acceptPrivacy,
      contactName,
      contactPhone,
      contactEmail,
      bmiFormatted,
      matchedCategory?.catLbl,
      resetContactForm,
    ],
  )

  useEffect(() => {
    if (!isModalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isModalOpen, closeModal])

  const calcButtonIcon = calc?.btnSvg?.trim()
    ? sanitizeSVG(calc.btnSvg)
    : sanitizeSVG(DEFAULT_ARROW_SVG)

  const customFloatingIcon = calc?.floatSvg?.trim()
    ? sanitizeSVG(calc.floatSvg)
    : ''
  const heartGradId = `hd-heart-grad-${uid}`

  const stepDots = useMemo(() => {
    const steps: ModalStep[] = ['calc', 'contact', 'result']
    const activeIndex =
      modalStep === 'calc' ? 0 : modalStep === 'contact' ? 1 : 2
    return (
      <div className="flex items-center justify-center gap-2" aria-hidden>
        {steps.map((step, index) => (
          <span
            key={step}
            className={cn(
              'h-2 w-2 rounded-full transition-colors',
              index === activeIndex ? 'opacity-100' : 'opacity-30',
            )}
            style={{ backgroundColor: accent }}
          />
        ))}
      </div>
    )
  }, [modalStep, accent])

  const calcCard = (
    <div
      className="relative mb-4 w-full rounded-[1.25rem] bg-white p-5 shadow-[0_14px_40px_rgba(16,24,53,0.10)] sm:p-7 lg:mb-0 lg:shadow-[0_18px_50px_rgba(16,24,53,0.12)]"
      style={{ backgroundColor: calcCardBg }}
    >
      <div className="mb-0 flex items-start gap-3">
        <span
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `color-mix(in srgb, ${accent} 12%, white)`,
            color: accent,
          }}
        >
          <IconMedia
            icon={calc?.icon}
            className="h-5 w-5"
            imgClassName="h-5 w-5"
            fallbackSvg={DEFAULT_CHART_SVG}
          />
        </span>
        {calc?.content && (
          <div className="hd-calc-content min-w-0 flex-1 overflow-visible">
            <RichText data={calc.content} enableGutter={false} enableProse={false} />
          </div>
        )}
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleCardSubmit} noValidate>
        <label className="flex flex-col gap-1.5">
          <span className="text-[0.9375rem] font-semibold text-[#101835]">
            {calc?.hLabel || 'Estatura'}
          </span>
          <span className="relative">
            <input
              type="number"
              inputMode="decimal"
              min={1}
              step="any"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={calc?.hPh || 'Ej. 170'}
              className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 pr-12 text-sm text-[#101835] outline-none ring-[var(--hd-accent)] placeholder:text-[#9CA3AF] focus:ring-2"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-sm text-[#9CA3AF]">
              {calc?.hUnit || 'cm'}
            </span>
          </span>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[0.9375rem] font-semibold text-[#101835]">
            {calc?.wLabel || 'Peso'}
          </span>
          <span className="relative">
            <input
              type="number"
              inputMode="decimal"
              min={1}
              step="any"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={calc?.wPh || 'Ej. 70'}
              className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 pr-12 text-sm text-[#101835] outline-none ring-[var(--hd-accent)] placeholder:text-[#9CA3AF] focus:ring-2"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-sm text-[#9CA3AF]">
              {calc?.wUnit || 'kg'}
            </span>
          </span>
        </label>

        {formError && !isModalOpen && (
          <p className="text-sm text-red-600" role="alert">
            {formError}
          </p>
        )}

        <button
          type="submit"
          className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-opacity hover:opacity-90 lg:rounded-2xl"
          style={{ backgroundColor: calcBtnBg, color: calcBtnText }}
        >
          <span>{calc?.btnLabel || 'Calcular mi IMC'}</span>
          {calcButtonIcon && (
            <span
              className="inline-flex h-4 w-4"
              dangerouslySetInnerHTML={{ __html: calcButtonIcon }}
              aria-hidden
            />
          )}
        </button>
      </form>

      {(calc?.ptag?.label || calc?.ptag?.icon) && (
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#9CA3AF]">
          <IconMedia
            icon={calc?.ptag?.icon}
            className="h-3.5 w-3.5"
            imgClassName="h-3.5 w-3.5"
            fallbackSvg={DEFAULT_LOCK_SVG}
          />
          <span>{calc?.ptag?.label || 'Tus datos están protegidos'}</span>
        </div>
      )}

      <span
        className="hd-heart-fab absolute -bottom-3.5 -right-3.5 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_10px_28px_rgba(16,24,53,0.14)]"
        style={{ color: '#ad3966' }}
        aria-hidden
      >
        {customFloatingIcon ? (
          <span
            className="hd-heart-custom inline-flex h-6 w-6 shrink-0 [&_svg]:h-full [&_svg]:w-full [&_svg]:overflow-visible"
            dangerouslySetInnerHTML={{ __html: customFloatingIcon }}
          />
        ) : (
          <svg
            className="hd-heart-icon h-6 w-6 shrink-0 overflow-visible"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id={heartGradId}
                x1="12"
                y1="3"
                x2="12"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#ad3966" />
                <stop offset="100%" stopColor="#daa1b2" />
              </linearGradient>
            </defs>
            <path
              className="hd-heart-path"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill={`url(#${heartGradId})`}
              stroke={`url(#${heartGradId})`}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </div>
  )

  return (
    <section
      className={cn(rootClass, 'relative overflow-x-clip')}
      style={{
        backgroundColor: bg || '#FBFBFC',
        backgroundImage: gradient || undefined,
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: scopedCss }} />

      {showCurves && (
        <svg
          className="hd-curves hd-curves-mobile pointer-events-none absolute right-0 top-0 z-[12] h-[340px] w-[70%] sm:h-[380px] lg:hidden"
          viewBox="0 0 280 360"
          fill="none"
          preserveAspectRatio="xMaxYMin slice"
          aria-hidden
        >
          <path
            d="M40 30C110 10 200 50 235 130C270 210 220 290 140 330"
            stroke={accent}
            strokeOpacity="0.28"
            strokeWidth="1.35"
          />
          <path
            d="M70 18C145 0 220 45 248 120C276 195 235 275 165 320"
            stroke={accent}
            strokeOpacity="0.16"
            strokeWidth="1.25"
          />
          <path
            d="M20 55C95 30 185 70 215 145C245 220 200 295 125 340"
            stroke={accent}
            strokeOpacity="0.12"
            strokeWidth="1.2"
          />
        </svg>
      )}

      {/* Imagen mobile: anclada al borde derecho del viewport (fuera del padding) */}
      <div className="pointer-events-none absolute right-0 top-4 z-[15] h-[320px] w-[52%] sm:top-6 sm:h-[360px] sm:w-[50%] lg:hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt || 'Hero'}
            className="absolute bottom-0 right-0 h-full w-auto max-w-none translate-x-[18%] object-contain object-right-bottom"
          />
        ) : (
          <div
            className="absolute bottom-0 right-0 h-full w-[92%] rounded-t-[1.5rem]"
            style={{
              background: `linear-gradient(160deg, color-mix(in srgb, ${accent} 18%, white), #f3f4f6)`,
            }}
          />
        )}
      </div>

      {showCurves && (
        <svg
          className="hd-curves hd-curves-desktop pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1440 820"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <path
            d="M720 40C860 120 980 220 1040 360C1100 500 1180 620 1320 720"
            stroke={accent}
            strokeOpacity="0.22"
            strokeWidth="1.35"
          />
          <path
            d="M780 20C920 110 1060 240 1120 390C1180 540 1280 660 1420 760"
            stroke={accent}
            strokeOpacity="0.14"
            strokeWidth="1.25"
          />
          <path
            d="M640 80C790 160 930 280 990 420C1050 560 1140 680 1280 780"
            stroke={accent}
            strokeOpacity="0.1"
            strokeWidth="1.25"
          />
        </svg>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-8 pt-6 sm:px-6 lg:px-10 lg:pb-14 lg:pt-14 xl:px-12">
        <div className="relative lg:min-h-[600px] xl:min-h-[640px]">
          {/* ========== DESKTOP (sin cambios de layout mobile) ========== */}
          <div className="relative z-20 hidden max-w-[44%] pt-2 lg:block xl:max-w-[42%]">
            {data.tag?.label && (
              <div
                className="mb-5 inline-flex w-fit max-w-full items-center gap-2 rounded-xl px-3.5 py-1.5 text-[0.8125rem] font-medium tracking-[0.01em]"
                style={{ backgroundColor: tagBg, color: tagText }}
              >
                <IconMedia
                  icon={data.tag.icon}
                  className="h-3.5 w-3.5"
                  imgClassName="h-3.5 w-3.5"
                  fallbackSvg={DEFAULT_STAR_SVG}
                />
                <span>{data.tag.label}</span>
              </div>
            )}

            {data.hdr && (
              <div className="hd-header">
                <RichText data={data.hdr} enableGutter={false} enableProse={false} />
              </div>
            )}

            {features.length > 0 && (
              <div className="hd-features mt-9 grid grid-cols-3 gap-5">
                {features.map((item, index) => (
                  <div key={item.id || `desk-feat-${index}`} className="flex flex-col gap-2.5">
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border bg-transparent p-0"
                      style={{
                        borderColor: `color-mix(in srgb, ${accent} 45%, white)`,
                        color: accent,
                      }}
                    >
                      <IconMedia
                        icon={item.icon}
                        className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
                        imgClassName="h-full w-full"
                      />
                    </span>
                    {item.content && (
                      <RichText data={item.content} enableGutter={false} enableProse={false} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {buttons.length > 0 && (
              <div className="mt-9 flex flex-row flex-wrap items-center gap-5">
                {buttons.map((btn, index) => {
                  const isPrimary = index === 0
                  const iconSvg = btn.iconSVG?.trim()
                    ? sanitizeSVG(btn.iconSVG)
                    : sanitizeSVG(DEFAULT_ARROW_SVG)
                  return (
                    <CMSLink
                      key={btn.id || `desk-btn-${index}`}
                      type={btn.link?.type}
                      newTab={btn.link?.newTab}
                      reference={
                        btn.link?.reference as React.ComponentProps<typeof CMSLink>['reference']
                      }
                      url={btn.link?.url}
                      label={null}
                      appearance="inline"
                      className={cn(
                        'inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold transition-opacity hover:opacity-90',
                        isPrimary ? 'h-12 rounded-2xl px-6' : 'h-auto bg-transparent px-0 py-2',
                      )}
                      style={
                        isPrimary
                          ? { backgroundColor: primaryBtnBg, color: primaryBtnText }
                          : { color: secondaryBtnText }
                      }
                    >
                      <span>{btn.link?.label}</span>
                      {iconSvg && (
                        <span
                          className="inline-flex h-4 w-4"
                          dangerouslySetInnerHTML={{ __html: iconSvg }}
                          aria-hidden
                        />
                      )}
                    </CMSLink>
                  )
                })}
              </div>
            )}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block xl:w-[60%]">
            <div className="relative h-full w-full overflow-visible">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={imageAlt || 'Hero'}
                  className="absolute bottom-[10%] left-[36%] h-[80%] w-auto max-w-none -translate-x-1/2 object-cover object-top xl:left-[34%] xl:h-[82%]"
                />
              ) : (
                <div
                  className="absolute bottom-[10%] left-[36%] h-[78%] w-[280px] -translate-x-1/2 rounded-t-[2rem] xl:left-[34%]"
                  style={{
                    background: `linear-gradient(160deg, color-mix(in srgb, ${accent} 18%, white), #f3f4f6)`,
                  }}
                />
              )}
            </div>
          </div>

          {/* ========== MOBILE ========== */}
          <div className="lg:hidden">
            <div className="relative z-20 grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)] items-stretch gap-0">
              <div className="relative z-20 flex min-w-0 flex-col pr-1 sm:pr-2">
                {data.tag?.label && (
                  <div
                    className="mb-4 inline-flex w-fit max-w-full items-center gap-1.5 rounded-xl px-2.5 py-1 text-[0.625rem] font-medium leading-tight tracking-[0.01em] sm:mb-5 sm:gap-2 sm:px-3 sm:text-[0.6875rem]"
                    style={{ backgroundColor: tagBg, color: tagText }}
                  >
                    <IconMedia
                      icon={data.tag.icon}
                      className="h-3 w-3"
                      imgClassName="h-3 w-3"
                      fallbackSvg={DEFAULT_STAR_SVG}
                    />
                    <span>{data.tag.label}</span>
                  </div>
                )}

                {data.hdr && (
                  <div className="hd-header">
                    <RichText data={data.hdr} enableGutter={false} enableProse={false} />
                  </div>
                )}

                {buttons.length > 0 && (
                  <div className="mt-6 flex w-full flex-col gap-2.5">
                    {buttons.map((btn, index) => {
                      const isPrimary = index === 0
                      const iconSvg = btn.iconSVG?.trim()
                        ? sanitizeSVG(btn.iconSVG)
                        : sanitizeSVG(DEFAULT_ARROW_SVG)
                      return (
                        <CMSLink
                          key={btn.id || `mob-btn-${index}`}
                          type={btn.link?.type}
                          newTab={btn.link?.newTab}
                          reference={
                            btn.link?.reference as React.ComponentProps<typeof CMSLink>['reference']
                          }
                          url={btn.link?.url}
                          label={null}
                          appearance="inline"
                          className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl px-3 text-[0.75rem] font-semibold transition-opacity hover:opacity-90 sm:h-11 sm:text-[0.8125rem]"
                          style={
                            isPrimary
                              ? { backgroundColor: primaryBtnBg, color: primaryBtnText }
                              : { backgroundColor: '#F5F5F5', color: secondaryBtnText }
                          }
                        >
                          <span className="truncate">{btn.link?.label}</span>
                          {iconSvg && (
                            <span
                              className="inline-flex h-3.5 w-3.5 shrink-0"
                              dangerouslySetInnerHTML={{ __html: iconSvg }}
                              aria-hidden
                            />
                          )}
                        </CMSLink>
                      )
                    })}
                  </div>
                )}
              </div>

              <div className="min-h-[280px] self-stretch sm:min-h-[320px]" aria-hidden />
            </div>

            {features.length > 0 && (
              <div className="hd-features mt-9 grid grid-cols-3 gap-3 sm:gap-4">
                {features.map((item, index) => (
                  <div
                    key={item.id || `mob-feat-${index}`}
                    className="flex flex-col items-center gap-3 px-0.5 text-center"
                  >
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full p-0"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${accent} 12%, white)`,
                        color: accent,
                      }}
                    >
                      <IconMedia
                        icon={item.icon}
                        className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
                        imgClassName="h-full w-full"
                      />
                    </span>
                    {item.content && (
                      <RichText data={item.content} enableGutter={false} enableProse={false} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Calculadora: una sola instancia (flujo mobile / flotante desktop) */}
          <div className="relative z-[3] mt-9 w-full lg:absolute lg:right-0 lg:top-[10%] lg:mt-0 lg:w-[21.5rem] xl:right-1 xl:top-[12%] xl:w-[22.5rem]">
            {calcCard}
          </div>
        </div>

        {footerItems.length > 0 && (
          <div className="hd-footer relative z-20 mt-12 rounded-[1.5rem] border border-[#EEF0F4] bg-white px-3 py-6 shadow-[0_8px_28px_rgba(16,24,53,0.05)] lg:-mt-14 lg:rounded-[1.75rem] lg:px-8 lg:py-5 lg:shadow-[0_10px_36px_rgba(16,24,53,0.06)] xl:-mt-16">
            <div className="grid grid-cols-3 gap-0 divide-x divide-[#E8EAF0]">
              {footerItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="flex flex-col items-center gap-2 px-2 text-center first:pl-1 last:pr-1 sm:px-3 lg:flex-row lg:items-center lg:gap-3.5 lg:px-6 lg:text-left first:lg:pl-1 last:lg:pr-1"
                >
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full p-0 lg:h-12 lg:w-12"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${accent} 12%, white)`,
                      color: accent,
                    }}
                  >
                    <IconMedia
                      icon={item.icon}
                      className="h-full w-full [&_svg]:h-full [&_svg]:w-full"
                      imgClassName="h-full w-full"
                    />
                  </span>
                  {item.content && (
                    <div className="min-w-0">
                      <RichText data={item.content} enableGutter={false} enableProse={false} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isModalOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Cerrar"
            onClick={closeModal}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${uid}-modal-title`}
            className="relative z-[1] w-full max-w-md rounded-3xl p-6 shadow-2xl sm:p-8"
            style={{ backgroundColor: modalBg }}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
              aria-label="Cerrar calculadora"
            >
              ✕
            </button>

            {modalStep === 'calc' ? (
              <>
                <h2
                  id={`${uid}-modal-title`}
                  className="pr-8 text-xl font-bold"
                  style={{ color: NAVY }}
                >
                  {calc?.modalTitle || 'Calcula tu IMC'}
                </h2>
                <div className="mt-6 flex flex-col gap-4">
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium" style={{ color: NAVY }}>
                      {calc?.hLabel || 'Estatura'}
                    </span>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={calc?.hPh || 'Ej. 170'}
                      className="w-full rounded-xl border border-[#1B2B4A]/40 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[color:var(--hd-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-sm font-medium" style={{ color: NAVY }}>
                      {calc?.wLabel || 'Peso'}
                    </span>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={calc?.wPh || 'Ej. 70'}
                      className="w-full rounded-xl border border-[#1B2B4A]/40 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[color:var(--hd-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>
                  {formError ? (
                    <p className="text-sm text-red-600" role="alert">
                      {formError}
                    </p>
                  ) : null}
                  {stepDots ? <div className="mt-1">{stepDots}</div> : null}
                  <button
                    type="button"
                    onClick={calculateBMI}
                    disabled={!height || !weight}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    style={{ backgroundColor: calcBtnBg, color: calcBtnText }}
                  >
                    <span>{calc?.btnLabel || 'Calcular mi IMC'}</span>
                    {calcButtonIcon ? (
                      <span
                        className="inline-flex h-5 w-5 shrink-0 [&_svg]:h-full [&_svg]:w-full"
                        aria-hidden
                        dangerouslySetInnerHTML={{ __html: calcButtonIcon }}
                      />
                    ) : null}
                  </button>
                </div>
              </>
            ) : null}

            {modalStep === 'contact' ? (
              <>
                <div
                  id={`${uid}-modal-title`}
                  className="pr-8 text-xl font-bold [&_h1]:m-0 [&_h2]:m-0 [&_h3]:m-0 [&_p]:m-0"
                  style={{ color: NAVY }}
                >
                  {calc?.contact?.title ? (
                    <RichText
                      data={calc.contact.title}
                      enableGutter={false}
                      enableProse={false}
                    />
                  ) : (
                    <h2 className="text-xl font-bold">Déjanos tu contacto</h2>
                  )}
                </div>
                {calc?.contact?.desc ? (
                  <div className="mt-3 text-sm leading-relaxed text-gray-600 [&_p]:m-0 [&_p+p]:mt-2">
                    <RichText
                      data={calc.contact.desc}
                      enableGutter={false}
                      enableProse={false}
                    />
                  </div>
                ) : null}

                <form className="mt-6 flex flex-col gap-3.5" onSubmit={handleContactSubmit}>
                  <label className="relative block">
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#1B2B4A]">
                      <IconMedia
                        icon={calc?.contact?.nIcon}
                        className="h-5 w-5"
                        imgClassName="h-5 w-5"
                      />
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder={calc?.contact?.nPh || 'Nombre'}
                      className="w-full rounded-xl border border-[#1B2B4A]/55 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[color:var(--hd-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>

                  <label className="relative block">
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#1B2B4A]">
                      <IconMedia
                        icon={calc?.contact?.pIcon}
                        className="h-5 w-5"
                        imgClassName="h-5 w-5"
                      />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder={calc?.contact?.pPh || 'Teléfono'}
                      className="w-full rounded-xl border border-[#1B2B4A]/55 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[color:var(--hd-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>

                  <label className="relative block">
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-[#1B2B4A]">
                      <IconMedia
                        icon={calc?.contact?.eIcon}
                        className="h-5 w-5"
                        imgClassName="h-5 w-5"
                      />
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder={calc?.contact?.ePh || 'Email'}
                      className="w-full rounded-xl border border-[#1B2B4A]/55 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[color:var(--hd-accent)] focus:ring-2 focus:ring-pink-100"
                    />
                  </label>

                  <div className="mt-1 flex items-start gap-3">
                    <Checkbox
                      id={`${uid}-privacy`}
                      checked={acceptPrivacy}
                      onCheckedChange={(v) => setAcceptPrivacy(v === true)}
                      required={privacyRequired}
                      className="mt-0.5 shrink-0"
                    />
                    {calc?.contact?.privacy ? (
                      <label
                        htmlFor={`${uid}-privacy`}
                        className="cursor-pointer text-xs leading-relaxed text-gray-600 [&_a]:font-semibold [&_a]:underline [&_p]:m-0"
                      >
                        <RichText
                          data={calc.contact.privacy}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </label>
                    ) : (
                      <label
                        htmlFor={`${uid}-privacy`}
                        className="cursor-pointer text-xs leading-relaxed text-gray-600"
                      >
                        Consiento el tratamiento de mis datos personales, incluido datos personales
                        de salud, conforme a la política de privacidad.
                      </label>
                    )}
                  </div>

                  {contactError ? (
                    <p className="text-sm text-red-600" role="alert">
                      {contactError}
                    </p>
                  ) : null}

                  {stepDots ? <div className="mt-2">{stepDots}</div> : null}

                  <button
                    type="submit"
                    disabled={isSubmittingContact}
                    className="mt-1 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold shadow-[0_8px_20px_rgba(194,0,95,0.25)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 [&_p]:m-0"
                    style={{ backgroundColor: contactBtnBg, color: contactBtnFg }}
                  >
                    {isSubmittingContact ? (
                      'Enviando…'
                    ) : calc?.contact?.contBtn ? (
                      <RichText
                        data={calc.contact.contBtn}
                        enableGutter={false}
                        enableProse={false}
                      />
                    ) : (
                      'Continuar'
                    )}
                  </button>
                </form>
              </>
            ) : null}

            {modalStep === 'result' ? (
              <>
                <h2
                  id={`${uid}-modal-title`}
                  className="pr-8 text-xl font-bold"
                  style={{ color: NAVY }}
                >
                  Tu resultado
                </h2>
                <div className="mt-5 text-center">
                  <p className="text-base" style={{ color: NAVY }}>
                    Tu IMC es de{' '}
                    <span className="text-3xl font-bold" style={{ color: accent }}>
                      {bmiFormatted}
                    </span>{' '}
                    <span className="text-sm text-gray-500">kg/m²</span>
                  </p>
                  {matchedCategory?.catLbl ? (
                    <p className="mt-2 text-sm text-gray-600">
                      Categoría:{' '}
                      <span className="font-semibold" style={{ color: NAVY }}>
                        {matchedCategory.catLbl}
                      </span>
                      {isEligible ? (
                        <span
                          className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold"
                          style={{ backgroundColor: resultTagBg, color: resultTagFg }}
                        >
                          Apto
                        </span>
                      ) : (
                        <span className="ml-2 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                          No apto
                        </span>
                      )}
                    </p>
                  ) : null}
                </div>

                {resultContent ? (
                  <div className="mt-5 text-center text-sm leading-relaxed text-gray-700 [&_p]:m-0 [&_p+p]:mt-2 [&_strong]:font-semibold">
                    <RichText data={resultContent} enableGutter={false} enableProse={false} />
                  </div>
                ) : (
                  <p className="mt-5 text-center text-sm text-gray-600">
                    {isEligible
                      ? 'Según tu IMC, podrías ser apto para el tratamiento Drop.'
                      : 'Según tu IMC, Drop podría no ser el tratamiento adecuado. Consulta con un profesional.'}
                  </p>
                )}

                <ResultCTAButtons
                  buttons={isEligible ? calc?.eligBtns : calc?.noEligBtns}
                  backgroundColor={isEligible ? eligBtnBg : noEligBtnBg}
                  textColor={isEligible ? eligBtnFg : noEligBtnFg}
                />

                {stepDots ? <div className="mt-5">{stepDots}</div> : null}

                <button
                  type="button"
                  onClick={() => {
                    setModalStep('calc')
                    setBmi(null)
                    setMatchedCategory(null)
                    setFormError(null)
                    resetContactForm()
                  }}
                  className="mt-4 w-full text-center text-sm font-medium underline-offset-2 hover:underline"
                  style={{ color: accent }}
                >
                  {calc?.recalcTxt || 'Volver a calcular'}
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
