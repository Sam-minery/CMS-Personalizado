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

type Section = {
  image?: ImageGroup | null
  heading?: string | null
  description?: string | null
}

type Layout239BlockProps = {
  tagline?: string | null
  heading?: string | null
  description?: string | null
  sections?: Section[] | null
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

export const Layout239Block: React.FC<Layout239BlockProps> = ({
  tagline,
  heading,
  description,
  sections,
  buttons,
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

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
              {heading && (
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  {heading}
                </h2>
              )}
              {description && <p className="md:text-md">{description}</p>}
            </div>
          </div>
          {Array.isArray(sections) && sections.length > 0 && (
            <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
              {sections.map((section, index) => {
                const imageSrc = getImageSrc(section.image)
                const imageAlt = getImageAlt(section.image)

                return (
                  <div key={index} className="flex w-full flex-col items-center text-center">
                    {imageSrc && (
                      <div className="rb-6 mb-6 md:mb-8">
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          width={400}
                          height={300}
                          className="w-full object-cover rounded-xl"
                        />
                      </div>
                    )}
                    {section.heading && (
                      <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                        {section.heading}
                      </h3>
                    )}
                    {section.description && <p>{section.description}</p>}
                  </div>
                )
              })}
            </div>
          )}
          {Array.isArray(buttons) && buttons.length > 0 && (
            <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
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
      </div>
    </section>
  )
}

