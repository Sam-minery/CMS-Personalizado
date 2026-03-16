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
  button?: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    reference?: {
      relationTo: 'pages' | 'posts'
      value: number | any
    } | null
    url?: string | null
    label?: string | null
    appearance?: 'default' | 'outline' | null
  } | null
}

type Layout132BlockProps = {
  sections?: Section[] | null
}

export const Layout132Block: React.FC<Layout132BlockProps> = ({ sections }) => {
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
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
          {Array.isArray(sections) && sections.length > 0 && sections.map((section, index) => {
            const imageSrc = getImageSrc(section.image)
            const imageAlt = getImageAlt(section.image)

            return (
              <div key={index}>
                {imageSrc && (
                  <div className="mb-6 md:mb-8">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={800}
                      height={450}
                      className="w-full object-cover rounded-xl"
                    />
                  </div>
                )}
                {section.heading && (
                  <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {section.heading}
                  </h3>
                )}
                {section.description && (
                  <p className="mt-5 md:mt-6">{section.description}</p>
                )}
                {section.button && (
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <CMSLink
                      {...section.button}
                      appearance="link"
                      size="clear"
                    >
                      <RxChevronRight className="ml-1 inline-block" />
                    </CMSLink>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

