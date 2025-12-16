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
  tagline?: string | null
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
      appearance?: 'default' | 'outline' | null
    }
  }> | null
}

type Layout133BlockProps = {
  sections?: Section[] | null
}

export const Layout133Block: React.FC<Layout133BlockProps> = ({ sections }) => {
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

  // Función para obtener la URL del enlace desde el primer botón
  const getSectionUrl = (section: Section): string => {
    if (section.buttons && section.buttons.length > 0 && section.buttons[0].link) {
      const link = section.buttons[0].link
      if (link.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value.slug) {
        return `${link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''}/${link.reference.value.slug}`
      }
      return link.url || '#'
    }
    return '#'
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-12 gap-y-12 md:gap-16 lg:grid-cols-2">
          {Array.isArray(sections) && sections.length > 0 && sections.map((section, index) => {
            const imageSrc = getImageSrc(section.image)
            const imageAlt = getImageAlt(section.image)
            const sectionUrl = getSectionUrl(section)

            return (
              <div key={index} className="grid grid-cols-[.5fr_1fr] gap-x-8 gap-y-6 md:gap-y-4">
                {imageSrc && (
                  <CMSLink
                    {...(section.buttons?.[0]?.link || {})}
                    label={null}
                    appearance="inline"
                    className="w-full"
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={200}
                      height={200}
                      className="aspect-square w-full object-cover rounded-xl"
                    />
                  </CMSLink>
                )}
                <div className="flex h-full flex-col items-start justify-start">
                  <div className="flex w-full flex-col items-start justify-start">
                    {section.tagline && (
                      <p className="mb-2 font-semibold">{section.tagline}</p>
                    )}
                    {section.heading && (
                      <CMSLink
                        {...(section.buttons?.[0]?.link || {})}
                        label={null}
                        appearance="inline"
                        className="mb-2"
                      >
                        <h3 className="text-xl font-bold md:text-2xl">{section.heading}</h3>
                      </CMSLink>
                    )}
                    {section.description && (
                      <p>{section.description}</p>
                    )}
                    {Array.isArray(section.buttons) && section.buttons.length > 0 && (
                      <div className="mt-5 flex items-center justify-center gap-x-2 md:mt-6">
                        {section.buttons.map((button, buttonIndex) => (
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

