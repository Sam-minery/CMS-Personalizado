'use client'
import React from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { RxChevronRight } from 'react-icons/rx'

type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: number | Media | null
  src?: string | null
  alt?: string | null
}

type CTA27BlockProps = {
  heading?: string | null
  description?: string | null
  image?: ImageGroup | null
  buttons?: Array<{
    link?: {
      type?: 'reference' | 'custom' | null
      newTab?: boolean | null
      reference?: {
        relationTo: 'pages' | 'posts'
        value: number | any
      } | null
      url?: string | null
      label?: string | null
      appearance?: 'default' | 'outline' | 'secondary-alt' | null
    }
  }> | null
}

export const CTA27Block: React.FC<CTA27BlockProps> = ({
  heading,
  description,
  image,
  buttons,
}) => {
  // Mapeo de variantes de Relume a las del CMSLink
  // En este bloque, 'outline' se mapea a 'secondary' para que el segundo botón tenga el estilo secondary-alt
  const variantMapping: Record<string, 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'> = {
    'default': 'default',
    'primary': 'default',
    'secondary': 'secondary',
    'secondary-alt': 'secondary',
    'outline': 'secondary', // Mapeamos outline a secondary para este bloque específico
    'ghost': 'ghost',
  }

  // Función para obtener la URL de la imagen
  const getImageSrc = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return ''
    if (imageGroup.useMedia && imageGroup.mediaImage) {
      if (typeof imageGroup.mediaImage === 'object' && imageGroup.mediaImage !== null && imageGroup.mediaImage.url) {
        return imageGroup.mediaImage.url
      }
    }
    return imageGroup.src || ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return 'Image'
    return imageGroup.alt || 'Image'
  }

  const imageSrc = getImageSrc(image)
  const imageAlt = getImageAlt(image)

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        {heading && (
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
        )}
        {description && <p className="text-text-alternative md:text-md">{description}</p>}
        {Array.isArray(buttons) && buttons.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => {
              const mappedAppearance = button.link?.appearance
                ? variantMapping[button.link.appearance] || 'default'
                : 'default'
              
              return (
                <CMSLink
                  key={index}
                  {...button.link}
                  appearance={mappedAppearance}
                />
              )
            })}
          </div>
        )}
      </div>
      <div className="absolute inset-0 z-0">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            quality={100}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}

