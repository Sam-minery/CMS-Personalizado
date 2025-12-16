'use client'
import React from 'react'
import Image from 'next/image'
import type { Page, Media } from '@/payload-types'
import { CMSLink } from '@/components/Link'

export const Header138Hero: React.FC<Page['hero']> = ({
  links,
  header138Heading,
  header138Description,
  header138FirstImage,
  header138SecondImage,
}) => {
  // Función para obtener la URL de la imagen
  const getImageSrc = (imageData: any): string => {
    if (!imageData) return ''
    
    // Si es un objeto Media
    if (typeof imageData === 'object') {
      if (imageData.useMedia && imageData.mediaImage) {
        if (typeof imageData.mediaImage === 'object' && imageData.mediaImage?.url) {
          return imageData.mediaImage.url
        }
      }
      if (imageData.src) {
        return imageData.src
      }
    }
    
    return ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (imageData: any, defaultAlt: string = 'Image'): string => {
    if (!imageData) return defaultAlt
    
    if (typeof imageData === 'object') {
      if (imageData.useMedia && imageData.mediaImage) {
        if (typeof imageData.mediaImage === 'object' && imageData.mediaImage?.alt) {
          return imageData.mediaImage.alt
        }
      }
      if (imageData.alt) {
        return imageData.alt
      }
    }
    
    return defaultAlt
  }

  const firstImageSrc = getImageSrc(header138FirstImage)
  const firstImageAlt = getImageAlt(header138FirstImage, 'Hero main image')
  const secondImageSrc = getImageSrc(header138SecondImage)
  const secondImageAlt = getImageAlt(header138SecondImage, 'Hero secondary image')

  return (
    <section id="relume" className="relative flex min-h-svh flex-col mb-12 md:mb-16 lg:mb-20">
      <div className="absolute top-0 left-0 right-0 w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {firstImageSrc && (
          <Image
            className="w-full h-full object-cover object-top"
            src={firstImageSrc}
            alt={firstImageAlt}
            fill
            priority
            sizes="100vw"
          />
        )}
      </div>
      <div className="relative flex flex-1 flex-col z-10">
        {secondImageSrc && (
          <div className="absolute top-[25vh] md:top-[35vh] lg:top-[45vh] right-[5%] w-[30%] md:w-1/5 z-10">
            <Image
              className="aspect-square size-full object-cover"
              src={secondImageSrc}
              alt={secondImageAlt}
              width={400}
              height={400}
            />
          </div>
        )}
      </div>
      <div className="px-[5%] mt-[60vh] md:mt-[70vh] lg:mt-[80vh] relative z-20 pb-12 md:pb-16 lg:pb-20">
        <div className="container">
          <div className="py-12 md:py-18 lg:py-20">
            <div className="auto-cols-1fr grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
              {header138Heading && (
                <h1 className="text-6xl font-bold text-text-primary md:text-9xl lg:text-10xl">
                  {header138Heading}
                </h1>
              )}
              <div>
                {header138Description && (
                  <p className="text-base text-text-primary md:text-md">{header138Description}</p>
                )}
                {Array.isArray(links) && links.length > 0 && (
                  <div className="mt-6 flex gap-x-4 md:mt-8">
                    {links.map(({ link }, index) => (
                      <CMSLink
                        key={index}
                        {...link}
                        appearance={index === 0 ? 'default' : 'secondary'}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

