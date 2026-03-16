'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Media } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { RxChevronRight } from 'react-icons/rx'

type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: number | Media | null
  src?: string | null
  alt?: string | null
}

type Content = {
  tagline?: string | null
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

type TimelineItem = {
  date?: string | null
  description?: string | null
  image?: ImageGroup | null
  timelineButtons?: Array<{
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

type Layout352BlockProps = {
  featureContent?: Content | null
  timelineItems?: TimelineItem[] | null
  bottomContent?: Content | null
}

const ContentSection: React.FC<Content> = ({ tagline, heading, description, buttons }) => {
  return (
    <div className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          {heading && (
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          )}
          {description && <p className="md:text-md">{description}</p>}
          {Array.isArray(buttons) && buttons.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
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
    </div>
  )
}

const TimelineItemComponent: React.FC<TimelineItem> = ({ date, description, image, timelineButtons }) => {
  const circleRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ['end end', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.85, 1], [0, 0.25, 0.75, 1])
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#ccc', '#000'])

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
    <div className="relative z-20 grid w-full auto-cols-fr grid-cols-[3rem_1fr] gap-y-6 py-16 sm:grid-cols-[4rem_1fr] md:w-auto md:grid-cols-[1fr_10rem_1fr] md:gap-y-0 lg:grid-cols-[1fr_12rem_1fr]">
      {date && (
        <motion.div
          className="[grid-area:1/2/2/3] md:text-right md:[grid-area:auto]"
          style={{ opacity }}
        >
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{date}</h3>
        </motion.div>
      )}
      <div className="flex justify-start [grid-area:1/1/3/2] md:justify-center md:[grid-area:auto]">
        <motion.div
          ref={circleRef}
          style={{ backgroundColor }}
          className="sticky top-[50vh] size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
        />
      </div>
      <motion.div style={{ opacity }}>
        <div className="mb-10 md:mb-14 lg:mb-16">
          {description && <p className="md:text-md">{description}</p>}
          {Array.isArray(timelineButtons) && timelineButtons.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {timelineButtons.map((button, index) => {
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
          <div className="overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="w-full object-cover rounded-xl"
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export const Layout352Block: React.FC<Layout352BlockProps> = ({
  featureContent,
  timelineItems,
  bottomContent,
}) => {
  return (
    <section id="relume" className="relative z-0">
      <div className="relative -z-30">
        <div>
          {featureContent && <ContentSection {...featureContent} />}
          <div className="px-[5%]">
            <div className="container">
              <div className="relative flex flex-col items-center justify-center">
                <div className="absolute left-1.5 top-0 -z-20 h-full w-[3px] bg-neutral-lighter md:left-auto">
                  <div className="absolute top-0 h-full w-[3px] bg-neutral-black" />
                  <div className="absolute left-0 right-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-white to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 z-10 h-24 w-full bg-gradient-to-t from-white to-transparent" />
                </div>
                {Array.isArray(timelineItems) &&
                  timelineItems.length > 0 &&
                  timelineItems.map((item, index) => (
                    <TimelineItemComponent key={index} {...item} />
                  ))}
              </div>
            </div>
          </div>
          {bottomContent && <ContentSection {...bottomContent} />}
        </div>
      </div>
    </section>
  )
}
