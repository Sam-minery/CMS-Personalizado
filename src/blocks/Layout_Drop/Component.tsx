'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import RichText from '@/components/RichText'
import { Checkbox } from '@/components/ui/checkbox'
import type { Media, Page, Post } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'
import { cn } from '@/utilities/ui'

type IconGroup = {
  useMedia?: boolean | null
  mediaImage?: number | Media | null
  iconSVG?: string | null
  alt?: string | null
}

type FormFieldConfig = {
  icon?: IconGroup | null
  value?: string | null
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

export type LayoutDropBlockType = {
  blockName?: string
  blockType?: 'layoutDrop'
  anchorId?: string | null
  headerContent?: DefaultTypedEditorState | null
  elements?: Array<{
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    id?: string | null
  }> | null
  contactForm?: {
    icon?: IconGroup | null
    content?: DefaultTypedEditorState | null
    nameField?: FormFieldConfig | null
    phoneField?: FormFieldConfig | null
    emailField?: FormFieldConfig | null
  } | null
  privacyPolicy?: {
    required?: boolean | null
    content?: DefaultTypedEditorState | null
  } | null
  button?: {
    label?: string | null
    iconSVG?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    link?: LinkType | null
  } | null
  backgroundColor?: string | null
}

function sanitizeAnchorId(value: string | null | undefined): string {
  const s = (value || '').trim().replace(/[^a-zA-Z0-9_-]/g, '')
  return s || 'layout-drop'
}

function getIconSrc(icon?: IconGroup | null): string {
  if (!icon?.useMedia || !icon.mediaImage || typeof icon.mediaImage !== 'object') return ''
  const url = icon.mediaImage.url
  if (!url) return ''
  return getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1')
}

function getIconAlt(icon?: IconGroup | null): string {
  if (icon?.useMedia && icon.mediaImage && typeof icon.mediaImage === 'object') {
    return icon.mediaImage.alt || icon.alt || 'Icono'
  }
  return icon?.alt || 'Icono'
}

function resolveLinkHref(link?: LinkType | null): string | null {
  if (!link) return null
  if (link.type === 'custom' && link.url) return link.url
  if (link.type === 'reference' && link.reference?.value) {
    const value = link.reference.value
    if (typeof value === 'object' && value !== null && 'slug' in value) {
      const slug = (value as Page | Post).slug
      if (!slug) return null
      const prefix = link.reference.relationTo === 'posts' ? '/posts' : ''
      return `${prefix}/${slug}`
    }
  }
  return null
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

  if (icon.useMedia) {
    const src = getIconSrc(icon)
    if (!src) return null
    const isGif = /\.gif(\?|$)/i.test(src)
    return (
      <span className={cn('relative inline-flex shrink-0 overflow-hidden', className)}>
        <Image
          src={src}
          alt={getIconAlt(icon)}
          width={48}
          height={48}
          unoptimized={isGif}
          className={cn('object-contain', imgClassName)}
        />
      </span>
    )
  }

  const svg = icon.iconSVG && String(icon.iconSVG).trim() ? sanitizeSVG(icon.iconSVG) : ''
  if (!svg) return null
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center [&_svg]:h-full [&_svg]:w-full', className)}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-hidden
    />
  )
}

const DEFAULT_BTN_BG = 'linear-gradient(90deg, #e91e63 0%, #6a1b4d 100%)'
const ACCENT = '#c2185b'
const NAVY = '#101835'

export const LayoutDropBlock: React.FC<LayoutDropBlockType> = (props) => {
  const {
    anchorId,
    headerContent,
    elements,
    contactForm,
    privacyPolicy,
    button,
    backgroundColor,
  } = props

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [acceptPrivacy, setAcceptPrivacy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const sectionId = sanitizeAnchorId(anchorId)
  const privacyRequired = privacyPolicy?.required !== false
  const btnLabel = button?.label?.trim() || 'Continuar'
  const btnBg = button?.backgroundColor?.trim() || DEFAULT_BTN_BG
  const btnFg = button?.textColor?.trim() || '#ffffff'
  const btnIconSvg =
    button?.iconSVG && String(button.iconSVG).trim() ? sanitizeSVG(button.iconSVG) : ''

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage('')

    if (privacyRequired && !acceptPrivacy) {
      setSubmitMessage('Debes aceptar la política de privacidad para continuar.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/form-custom-2-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionData: [
            { field: 'name', value: name },
            { field: 'phone', value: phone },
            { field: 'email', value: email },
            { field: 'source', value: 'layoutDrop' },
          ],
          formType: 'layoutDrop',
        }),
      })

      if (!response.ok) {
        setSubmitMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
        return
      }

      setName('')
      setPhone('')
      setEmail('')
      setAcceptPrivacy(false)
      setSubmitMessage('¡Gracias! Hemos recibido tus datos correctamente.')

      const href = resolveLinkHref(button?.link)
      if (href) {
        if (button?.link?.newTab) {
          window.open(href, '_blank', 'noopener,noreferrer')
        } else {
          window.location.href = href
        }
      }
    } catch (error) {
      console.error('Error submitting Layout Drop form:', error)
      setSubmitMessage('Error al enviar el formulario. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id={sectionId}
      className="layout-drop relative overflow-hidden px-[5%] py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: backgroundColor?.trim() || '#ffffff' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(233,30,99,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(156,39,176,0.10) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl">
        {headerContent && (
          <div
            className={cn(
              'layout-drop-header mx-auto mb-10 max-w-3xl text-center md:mb-12 lg:mb-14',
              '[&_h1]:text-3xl [&_h1]:font-bold [&_h1]:leading-tight md:[&_h1]:text-4xl lg:[&_h1]:text-5xl',
              '[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:leading-tight md:[&_h2]:text-4xl lg:[&_h2]:text-5xl',
              '[&_h3]:text-2xl [&_h3]:font-bold [&_h3]:leading-tight md:[&_h3]:text-3xl',
              '[&_p]:mt-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-gray-600 md:[&_p]:text-lg',
              '[&_strong]:font-bold',
            )}
            style={{ color: NAVY }}
          >
            <RichText data={headerContent} enableGutter={false} enableProse={false} />
          </div>
        )}

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)] lg:gap-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
            {(elements || []).map((element, index) => (
              <div
                key={element.id || index}
                className={cn(
                  'flex rounded-2xl border border-gray-200 bg-white p-3 sm:p-4',
                  'flex-row items-center gap-3',
                  'lg:flex-col lg:items-center lg:justify-center lg:gap-4 lg:px-5 lg:py-8 lg:text-center',
                )}
              >
                <div
                  className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14',
                    'lg:h-16 lg:w-16',
                  )}
                  style={{ backgroundColor: 'rgba(233, 30, 99, 0.08)' }}
                >
                  <IconMedia
                    icon={element.icon}
                    className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                    imgClassName="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                  />
                </div>
                {element.content && (
                  <div
                    className={cn(
                      'min-w-0 flex-1 text-left text-sm font-bold leading-snug sm:text-base',
                      'lg:flex-none lg:text-center lg:text-base',
                      '[&_p]:m-0 [&_strong]:font-bold',
                    )}
                    style={{ color: NAVY }}
                  >
                    <RichText data={element.content} enableGutter={false} enableProse={false} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 lg:p-7">
            <div className="mb-5 flex items-start gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(233, 30, 99, 0.1)' }}
              >
                <IconMedia
                  icon={contactForm?.icon}
                  className="h-6 w-6"
                  imgClassName="h-6 w-6"
                />
              </div>
              {contactForm?.content && (
                <div
                  className={cn(
                    'min-w-0 flex-1',
                    '[&_h1]:text-lg [&_h1]:font-bold [&_h1]:leading-snug',
                    '[&_h2]:text-lg [&_h2]:font-bold [&_h2]:leading-snug',
                    '[&_h3]:text-lg [&_h3]:font-bold [&_h3]:leading-snug',
                    '[&_h4]:text-lg [&_h4]:font-bold [&_h4]:leading-snug',
                    '[&_p]:mt-1 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-gray-500',
                    '[&_p:first-child]:mt-0',
                  )}
                  style={{ color: NAVY }}
                >
                  <RichText data={contactForm.content} enableGutter={false} enableProse={false} />
                </div>
              )}
            </div>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <label className="relative block">
                <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-gray-400">
                  <IconMedia
                    icon={contactForm?.nameField?.icon}
                    className="h-5 w-5"
                    imgClassName="h-5 w-5"
                  />
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={contactForm?.nameField?.value || 'Nombre'}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </label>

              <label className="relative block">
                <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-gray-400">
                  <IconMedia
                    icon={contactForm?.phoneField?.icon}
                    className="h-5 w-5"
                    imgClassName="h-5 w-5"
                  />
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={contactForm?.phoneField?.value || 'Teléfono'}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </label>

              <label className="relative block">
                <span className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-gray-400">
                  <IconMedia
                    icon={contactForm?.emailField?.icon}
                    className="h-5 w-5"
                    imgClassName="h-5 w-5"
                  />
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={contactForm?.emailField?.value || 'Email'}
                  className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-pink-300 focus:ring-2 focus:ring-pink-100"
                />
              </label>

              <div className="mt-1 flex items-start gap-3">
                <Checkbox
                  id={`${sectionId}-privacy`}
                  checked={acceptPrivacy}
                  onCheckedChange={(v) => setAcceptPrivacy(v === true)}
                  required={privacyRequired}
                  className="mt-0.5 shrink-0"
                />
                {privacyPolicy?.content && (
                  <label
                    htmlFor={`${sectionId}-privacy`}
                    className={cn(
                      'cursor-pointer text-xs leading-relaxed text-gray-500',
                      '[&_a]:font-semibold [&_a]:underline',
                      '[&_p]:m-0 [&_strong]:font-semibold',
                    )}
                    style={
                      {
                        ['--layout-drop-accent' as string]: ACCENT,
                      } as React.CSSProperties
                    }
                  >
                    <span className="layout-drop-privacy [&_a]:text-[color:var(--layout-drop-accent)] [&_strong]:text-[color:var(--layout-drop-accent)]">
                      <RichText
                        data={privacyPolicy.content}
                        enableGutter={false}
                        enableProse={false}
                      />
                    </span>
                  </label>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 py-2" aria-hidden>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
                <span className="h-2 w-2 rounded-full bg-gray-300" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5',
                  'text-base font-semibold transition-[filter,opacity] duration-200',
                  'hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2',
                  'disabled:pointer-events-none disabled:opacity-60',
                )}
                style={{
                  background: btnBg,
                  color: btnFg,
                }}
              >
                <span>{isSubmitting ? 'Enviando…' : btnLabel}</span>
                {btnIconSvg ? (
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center [&_svg]:h-full [&_svg]:w-full"
                    dangerouslySetInnerHTML={{ __html: btnIconSvg }}
                    aria-hidden
                  />
                ) : (
                  <span aria-hidden className="text-lg leading-none">
                    →
                  </span>
                )}
              </button>

              {submitMessage && (
                <p
                  className={cn(
                    'text-center text-sm',
                    submitMessage.includes('Error') || submitMessage.includes('Debes')
                      ? 'text-red-600'
                      : 'text-green-600',
                  )}
                  role="status"
                >
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LayoutDropBlock
