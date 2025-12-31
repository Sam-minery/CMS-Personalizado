'use client'
import React from 'react'
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
  icon?: ImageGroup | null
  heading?: string | null
  description?: string | null
  enableLink?: boolean | null
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
  } | null
}

type Layout304BlockProps = {
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

export const Layout304Block: React.FC<Layout304BlockProps> = ({
  tagline,
  heading,
  description,
  sections,
  buttons,
}) => {
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

  // Función para verificar si una sección tiene enlace
  const hasLink = (section: Section): boolean => {
    if (!section.enableLink) return false
    if (!section.link) return false
    if (section.link.type === 'reference' && section.link.reference?.value) return true
    if (section.link.type === 'custom' && section.link.url) return true
    return false
  }

  // Componente para renderizar una sección
  const renderSection = (section: Section, index: number) => {
    const iconSrc = getIconSrc(section.icon)
    const iconAlt = getIconAlt(section.icon)
    const sectionHasLink = hasLink(section)

    const sectionContent = (
      <div className="flex gap-6 transition-all duration-200 hover:opacity-80">
        {iconSrc && (
          <div className="min-h-12 min-w-12 flex-shrink-0">
            <img src={iconSrc} alt={iconAlt} className="size-12 rounded-lg" />
          </div>
        )}
        <div>
          {section.heading && (
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{section.heading}</h3>
          )}
          {section.description && <p>{section.description}</p>}
        </div>
      </div>
    )

    if (sectionHasLink) {
      return (
        <CMSLink
          key={index}
          {...section.link}
          appearance="inline"
          className="block cursor-pointer rounded-lg p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
        >
          {sectionContent}
        </CMSLink>
      )
    }

    return (
      <div key={index} className="rounded-lg p-4">
        {sectionContent}
      </div>
    )
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-lg">
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
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {sections.map((section, index) => renderSection(section, index))}
          </div>
        )}
        {Array.isArray(buttons) && buttons.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
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
    </section>
  )
}

