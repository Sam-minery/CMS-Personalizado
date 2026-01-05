import { Button, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { validateAndSanitizeURL } from '@/utilities/validateURL'
import Link from 'next/link'
import React from 'react'

import type { Page, Post } from '@/payload-types'

type CMSLinkType = {
  appearance?: 'inline' | ButtonProps['variant']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    appearance = 'inline',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props

  // Construir href: si es referencia interna, construir la ruta; si no, usar URL personalizada
  const rawHref =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!rawHref) return null

  // Validar y sanitizar la URL (las referencias internas siempre son seguras, pero validamos URLs personalizadas)
  const href = type === 'reference' 
    ? rawHref // Las referencias internas no necesitan validación
    : validateAndSanitizeURL(rawHref, {
        allowRelative: true,
        allowAbsolute: true,
        logBlocked: process.env.NODE_ENV === 'development', // Log solo en desarrollo
      })

  // Si la URL no pasa la validación, no renderizar el enlace (fallback seguro)
  if (!href) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[CMSLink] Invalid or dangerous URL blocked:', rawHref)
    }
    return null
  }

  const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (appearance === 'inline') {
    return (
      <Link className={cn(className)} href={href} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={appearance}>
      <Link className={cn(className)} href={href} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
