'use client'

import React from 'react'
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import { sanitizeSVG } from '@/utilities/sanitizeHTML'

/** Tipos locales para no depender de payload-types (evita fallos de build si el bloque no está en projectConfig). */
type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: { url?: string | null; alt?: string | null } | number | null
  src?: string | null
  alt?: string | null
}

type LinkRef = {
  relationTo?: 'pages' | 'posts'
  value?: { slug?: string } | string | number
}

type IconLinkGroup = {
  link?: {
    type?: 'reference' | 'custom' | null
    reference?: LinkRef | null
    url?: string | null
    newTab?: boolean | null
  } | null
  iconSVG?: string | null
}

type Props = {
  image?: ImageGroup | null
  iconLink?: IconLinkGroup | null
}

const getImageSrc = (imageGroup: ImageGroup | null | undefined): string => {
  if (!imageGroup) return ''
  if (imageGroup.useMedia && imageGroup.mediaImage && typeof imageGroup.mediaImage === 'object') {
    return imageGroup.mediaImage.url || ''
  }
  return imageGroup.src || ''
}

const getImageAlt = (imageGroup: ImageGroup | null | undefined): string => {
  if (!imageGroup) return 'Navbar image'
  if (imageGroup.useMedia && imageGroup.mediaImage && typeof imageGroup.mediaImage === 'object') {
    return imageGroup.mediaImage.alt || imageGroup.alt || 'Navbar image'
  }
  return imageGroup.alt || 'Navbar image'
}

function getHref(link: IconLinkGroup['link']): string {
  if (!link) return ''
  if (link.type === 'custom' && link.url) return link.url
  if (link.type === 'reference' && link.reference?.value != null) {
    const val = link.reference.value
    const slug = typeof val === 'object' && val !== null && 'slug' in val ? (val as { slug: string }).slug : null
    if (slug) {
      const base = link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''
      return `${base}/${slug}`
    }
  }
  return ''
}

export const NavbarSimpleSendaBlock: React.FC<Props> = (props) => {
  const { image, iconLink } = props

  const imageSrc = getImageSrc(image)
  const imageAlt = getImageAlt(image)
  const link = iconLink?.link
  const href = getHref(link)
  const iconSVG = iconLink?.iconSVG?.trim()
  const hasValidLink = !!href

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-4 md:px-6">
      {/* Icono enlace: esquina superior izquierda */}
      <div className="flex shrink-0 items-center justify-center">
        {hasValidLink && iconSVG ? (
          <CMSLink
            type={link?.type ?? undefined}
            reference={
              link?.type === 'reference' && link.reference?.relationTo && link.reference?.value != null
                ? {
                    relationTo: link.reference.relationTo,
                    value: link.reference.value as React.ComponentProps<typeof CMSLink>['reference'] extends { value: infer V } ? V : never,
                  }
                : undefined
            }
            url={link?.type === 'custom' ? link.url ?? undefined : undefined}
            newTab={link?.newTab ?? undefined}
            label={undefined}
            appearance="link"
            className="inline-flex items-center justify-center p-2 text-current [&_svg]:block"
          >
            <span
              className="inline-flex h-8 w-8 shrink-0 [&_svg]:h-full [&_svg]:w-full"
              dangerouslySetInnerHTML={{ __html: sanitizeSVG(iconSVG) }}
              aria-hidden
            />
          </CMSLink>
        ) : null}
      </div>

      {/* Imagen: centrada; en desktop más padding superior y tamaño reducido (móvil sin cambios) */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center pt-1 md:pt-4">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={480}
            height={80}
            className="h-9 w-auto max-w-[200px] object-contain object-center md:h-11 md:max-w-[280px] lg:h-12 lg:max-w-[320px]"
          />
        ) : null}
      </div>

      {/* Espacio derecho para equilibrar el icono izquierdo */}
      <div className="w-10 shrink-0 md:w-12" aria-hidden />
    </header>
  )
}
