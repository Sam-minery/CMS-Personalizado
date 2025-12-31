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

type Feature = {
  icon?: ImageGroup | null
  heading?: string | null
  description?: string | null
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
      appearance?: 'default' | 'outline' | null
    }
  }> | null
}

type Layout222BlockProps = {
  image?: ImageGroup | null
  features?: Feature[] | null
}

export const Layout222Block: React.FC<Layout222BlockProps> = ({ image, features }) => {
  // Función para obtener la URL de la imagen principal
  const getImageSrc = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return ''
    if (imageGroup.useMedia && imageGroup.mediaImage) {
      if (typeof imageGroup.mediaImage === 'object' && imageGroup.mediaImage !== null && imageGroup.mediaImage.url) {
        return imageGroup.mediaImage.url
      }
    }
    return imageGroup.src || ''
  }

  // Función para obtener el alt de la imagen principal
  const getImageAlt = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return 'Image'
    return imageGroup.alt || 'Image'
  }

  // Función para obtener la URL del icono
  const getIconSrc = (iconGroup: ImageGroup | null | undefined): string => {
    if (!iconGroup) return ''
    if (iconGroup.useMedia && iconGroup.mediaImage) {
      if (typeof iconGroup.mediaImage === 'object' && iconGroup.mediaImage !== null && iconGroup.mediaImage.url) {
        return iconGroup.mediaImage.url
      }
    }
    return iconGroup.src || ''
  }

  // Función para obtener el alt del icono
  const getIconAlt = (iconGroup: ImageGroup | null | undefined): string => {
    if (!iconGroup) return 'Icon'
    return iconGroup.alt || 'Icon'
  }

  const imageSrc = getImageSrc(image)
  const imageAlt = getImageAlt(image)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          {imageSrc && (
            <div className="order-2 md:order-1">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full object-cover rounded-xl"
              />
            </div>
          )}
          <div className="order-1 md:order-2">
            {Array.isArray(features) && features.length > 0 && (
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const iconSrc = getIconSrc(feature.icon)
                  const iconAlt = getIconAlt(feature.icon)

                  return (
                    <div key={index}>
                      {iconSrc && (
                        <div className="mb-3 md:mb-4">
                          <img
                            src={iconSrc}
                            className="size-12 rounded-lg"
                            alt={iconAlt}
                          />
                        </div>
                      )}
                      {feature.heading && (
                        <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                          {feature.heading}
                        </h3>
                      )}
                      {feature.description && <p>{feature.description}</p>}
                      {Array.isArray(feature.buttons) && feature.buttons.length > 0 && (
                        <div className="mt-5 flex items-center gap-x-4 md:mt-6">
                          {feature.buttons.map((button, buttonIndex) => (
                            <CMSLink
                              key={buttonIndex}
                              {...button.link}
                              appearance="link"
                              size="clear"
                            >
                              <RxChevronRight className="ml-1 inline-block" />
                            </CMSLink>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

