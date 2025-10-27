import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'

import type { LongContent1Block as LongContent1BlockProps } from '@/payload-types'

export const LongContent1Block: React.FC<LongContent1BlockProps> = (props) => {
  const { heading, content, image } = props

  if (!heading || !content || !image) {
    return null
  }

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose">
              <RichText data={content} enableGutter={false} />
            </div>
          </div>
          <div>
            {(() => {
              const imageSrc = typeof image.src === 'object' && image.src?.url ? image.src.url : String(image.src);
              return imageSrc && imageSrc !== 'undefined' && imageSrc !== 'null' && (
                <Image 
                  src={imageSrc} 
                  alt={image.alt || 'Content image'} 
                  width={800}
                  height={400}
                  className="w-full object-cover"
                  quality={100}
                />
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  )
} 