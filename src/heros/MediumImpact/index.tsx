import React from 'react'
import Image from 'next/image'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const imageUrl = media && typeof media === 'object' 
    ? (media.url || (media as any).image?.url || '')
    : ''

  const imageWidth = media && typeof media === 'object' ? (media.width || 1920) : 1920
  const imageHeight = media && typeof media === 'object' ? (media.height || 1080) : 1080

  return (
    <div className="">
      <div className="container mb-8">
        {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex gap-4">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className="container ">
        {imageUrl && (
          <div>
            <Image
              src={imageUrl}
              alt={media && typeof media === 'object' ? (media.alt || 'Hero image') : 'Hero image'}
              width={imageWidth}
              height={imageHeight}
              className="-mx-4 md:-mx-8 2xl:-mx-16 w-full h-auto"
              priority
            />
            {media && typeof media === 'object' && media?.caption && (
              <div className="mt-3">
                <RichText data={media.caption} enableGutter={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
