'use client'
import React from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

import type { Layout1Block as Layout1BlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Layout1Block: React.FC<Layout1BlockProps> = ({ 
  tagline, 
  heading, 
  description, 
  links, 
  media 
}) => {
  // Función para obtener la URL de la imagen desde el objeto Media
  const getImageSrc = (mediaItem: number | Media | null | undefined): string => {
    if (!mediaItem) return ''
    if (typeof mediaItem === 'number') return ''
    if (typeof mediaItem === 'object' && mediaItem !== null && mediaItem.url) {
      return mediaItem.url
    }
    return ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (mediaItem: number | Media | null | undefined): string => {
    if (!mediaItem) return 'Image'
    if (typeof mediaItem === 'number') return 'Image'
    if (typeof mediaItem === 'object' && mediaItem?.alt) {
      return mediaItem.alt
    }
    return 'Image'
  }

  const imageSrc = getImageSrc(media)
  const imageAlt = getImageAlt(media)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            {tagline && (
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            )}
            {heading && (
              <div className="mb-5 md:mb-6 [&_h1]:text-5xl [&_h1]:font-bold [&_h1]:md:text-7xl [&_h1]:lg:text-8xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-6xl [&_h2]:lg:text-7xl [&_h3]:text-3xl [&_h3]:font-bold [&_h3]:md:text-5xl [&_h3]:lg:text-6xl [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:md:text-4xl [&_h4]:lg:text-5xl">
                <RichText 
                  data={heading} 
                  enableGutter={false} 
                  enableProse={false}
                />
              </div>
            )}
            {description && (
              <div className="md:text-md">
                <RichText 
                  data={description} 
                  enableGutter={false} 
                  enableProse={false}
                />
              </div>
            )}
            {Array.isArray(links) && links.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {links.map(({ link }, index) => (
                  <CMSLink 
                    key={index} 
                    {...link}
                    appearance={index === 0 ? 'secondary' : 'link'}
                    size={index === 0 ? 'default' : undefined}
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
