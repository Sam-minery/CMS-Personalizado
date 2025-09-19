'use client'

import React from 'react'
import { Button } from "@relume_io/relume-ui"
import type { ButtonProps } from "@relume_io/relume-ui"
import { RxChevronRight } from "react-icons/rx"
import { CMSLink } from '@/components/Link'
import Image from "next/image"

type ImageProps = {
  src?: string | { url?: string }
  alt?: string
}

type StatsProps = {
  percentage: string
  heading: string
}

type Props = {
  tagline: string
  heading: string
  description: string
  buttons: (ButtonProps & { url?: string })[]
  image: ImageProps
  stats: StatsProps[]
}

export type Stats3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

const variantMapping: Record<string, 'default' | 'secondary' | 'outline' | 'ghost' | 'link'> = {
  'primary': 'default',
  'secondary': 'secondary',
  'secondary-alt': 'secondary',
  'outline': 'outline',
  'ghost': 'ghost',
  'link': 'link',
  'link-alt': 'link',
}

const sizeMapping: Record<string, 'default' | 'sm' | 'lg' | 'icon'> = {
  'sm': 'sm',
  'md': 'default',
  'lg': 'lg',
  'link': 'default',
}

export const Stats3 = (props: Stats3Props) => {
  const { tagline, heading, description, stats, buttons, image } = {
    ...Stats3Defaults,
    ...props,
  }
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
            <h2 className="text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
              {heading}
            </h2>
          </div>
          <div>
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => {
                const { url, ...buttonProps } = button
                
                // Si hay un enlace, usar CMSLink, si no, usar Button normal
                if (url) {
                  const mappedVariant = variantMapping[buttonProps.variant || 'default'] || 'default'
                  const mappedSize = sizeMapping[buttonProps.size || 'default'] || 'default'
                  
                  return (
                    <CMSLink 
                      key={index} 
                      url={url}
                      appearance={mappedVariant}
                      size={mappedSize}
                    >
                      {button.title}
                    </CMSLink>
                  )
                }
                
                return (
                  <Button key={index} {...buttonProps}>
                    {button.title}
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {stats.map((stat, index) => (
            <div key={index} className="border-l-2 border-border-alternative pl-8">
              <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
                {stat.percentage}
              </p>
              <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
                {stat.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {(() => {
          const imageSrc = typeof image.src === 'object' && image.src?.url ? image.src.url : String(image.src || '');
          return imageSrc && imageSrc !== 'undefined' && imageSrc !== 'null' && (
            <Image 
              src={imageSrc} 
              alt={image.alt || 'Background image'} 
              fill
              className="object-cover" 
            />
          );
        })()}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}

export const Stats3Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  buttons: [
    { title: "Button", variant: "secondary-alt", url: "#" },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
      url: "#",
      iconRight: <RxChevronRight />,
    },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Background image",
  },
  stats: [
    { percentage: "30%", heading: "Short heading goes here" },
    { percentage: "30%", heading: "Short heading goes here" },
    { percentage: "30%", heading: "Short heading goes here" },
  ],
}
