'use client'
import React from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: number | Media | null
  src?: string | null
  alt?: string | null
}

type Layout90BlockProps = {
  heading?: string | null
  description?: string | null
  image?: ImageGroup | null
}

export const Layout90Block: React.FC<Layout90BlockProps> = ({
  heading,
  description,
  image,
}) => {
  // Función para obtener la URL de la imagen
  const getImageSrc = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return ''
    if (imageGroup.useMedia && imageGroup.mediaImage) {
      if (typeof imageGroup.mediaImage === 'object' && imageGroup.mediaImage?.url) {
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
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          {heading && (
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              {heading}
            </h3>
          )}
          {description && (
            <p className="md:text-md">{description}</p>
          )}
        </div>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={600}
            className="w-full object-cover rounded-xl"
          />
        )}
      </div>
    </section>
  )
}

