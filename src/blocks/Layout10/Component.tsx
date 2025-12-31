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

type SubHeading = {
  icon?: ImageGroup
  title?: string | null
  description?: string | null
}

type Layout10BlockProps = {
  tagline?: string | null
  heading?: string | null
  description?: string | null
  subHeadings?: SubHeading[] | null
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
  image?: ImageGroup | null
}

export const Layout10Block: React.FC<Layout10BlockProps> = ({
  tagline,
  heading,
  description,
  subHeadings,
  buttons,
  image,
}) => {
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

  // Función para obtener la URL del icono
  const getIconSrc = (subHeading: SubHeading | null | undefined): string => {
    if (!subHeading || !subHeading.icon) return ''
    const icon = subHeading.icon
    if (icon.useMedia && icon.mediaImage) {
      if (typeof icon.mediaImage === 'object' && icon.mediaImage !== null && icon.mediaImage.url) {
        return icon.mediaImage.url
      }
    }
    return icon.src || ''
  }

  // Función para obtener el alt del icono
  const getIconAlt = (subHeading: SubHeading | null | undefined): string => {
    if (!subHeading || !subHeading.icon) return 'Icon'
    return subHeading.icon.alt || 'Icon'
  }

  const imageSrc = getImageSrc(image)
  const imageAlt = getImageAlt(image)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            {tagline && (
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            )}
            {heading && (
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h1>
            )}
            {description && (
              <p className="mb-6 md:mb-8 md:text-md">{description}</p>
            )}
            {Array.isArray(subHeadings) && subHeadings.length > 0 && (
              <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                {subHeadings.map((subHeading, index) => {
                  const iconSrc = getIconSrc(subHeading)
                  const iconAlt = getIconAlt(subHeading)
                  
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
                      {subHeading.title && (
                        <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                          {subHeading.title}
                        </h6>
                      )}
                      {subHeading.description && (
                        <p>{subHeading.description}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
            {Array.isArray(buttons) && buttons.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {buttons.map((button, index) => {
                  const isSecondButton = index === 1
                  
                  if (isSecondButton) {
                    return (
                      <CMSLink
                        key={index}
                        {...button.link}
                        appearance="link"
                        size="clear"
                      >
                        <RxChevronRight className="ml-1 inline-block" />
                      </CMSLink>
                    )
                  }
                  
                  return (
                    <CMSLink
                      key={index}
                      {...button.link}
                      appearance="secondary"
                    />
                  )
                })}
              </div>
            )}
          </div>
          {imageSrc && (
            <div>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="w-full object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

