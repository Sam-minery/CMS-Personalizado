'use client'
import React from 'react'
import Image from 'next/image'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Header5Hero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const imageUrl = media && typeof media === 'object' 
    ? (media.url || (media as any).image?.url || '')
    : ''

  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            {richText && (
              <RichText 
                className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl" 
                data={richText} 
                enableGutter={false} 
                enableProse={false}
              />
            )}
            {Array.isArray(links) && links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {links.map(({ link }, index) => (
                  <CMSLink 
                    key={index} 
                    {...link}
                    appearance={index === 0 ? 'default' : 'secondary'}
                    size="sm"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={media && typeof media === 'object' ? (media.alt || 'Hero image') : 'Hero image'}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}
