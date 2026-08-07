'use client'
import React from 'react'
import Image from 'next/image'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const Header1Hero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const imageUrl = media && typeof media === 'object' && media !== null
    ? (media.url || (media as any).image?.url || '')
    : ''

  const imageWidth = media && typeof media === 'object' ? (media.width || 800) : 800
  const imageHeight = media && typeof media === 'object' ? (media.height || 600) : 600

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            {richText && (
              <div className="mb-5 md:mb-6 [&_h1]:text-6xl [&_h1]:font-bold [&_h1]:md:text-9xl [&_h1]:lg:text-10xl [&_h2]:text-5xl [&_h2]:font-bold [&_h2]:md:text-8xl [&_h2]:lg:text-9xl [&_h3]:text-4xl [&_h3]:font-bold [&_h3]:md:text-7xl [&_h3]:lg:text-8xl [&_h4]:text-3xl [&_h4]:font-bold [&_h4]:md:text-6xl [&_h4]:lg:text-7xl">
                <RichText 
                  className="" 
                  data={richText} 
                  enableGutter={false} 
                  enableProse={false}
                />
              </div>
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
          <div>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={media && typeof media === 'object' ? (media.alt || 'Hero image') : 'Hero image'}
                width={imageWidth}
                height={imageHeight}
                className="w-full object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
