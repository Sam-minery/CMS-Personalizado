import React from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'

type ImageProps = {
  image: string | Media
  url?: string
  alt?: string
}

type Props = {
  heading: string
  description: string
  images: ImageProps[]
}

export type Gallery6BlockProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

export const Gallery6Block: React.FC<Gallery6BlockProps> = (props) => {
  const { heading, description, images } = {
    ...Gallery6Defaults,
    ...props,
  }

  const getImageSrc = (image: string | Media): string => {
    if (typeof image === 'string') {
      return image
    }
    return typeof image === 'object' && image !== null && image.url ? image.url : ''
  }

  const getImageAlt = (image: string | Media, fallbackAlt: string): string => {
    if (typeof image === 'object' && image?.alt) {
      return image.alt
    }
    return fallbackAlt
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          {images?.map((imageItem, index) => {
            const imageSrc = getImageSrc(imageItem.image)
            const imageAlt = getImageAlt(imageItem.image, imageItem.alt || 'Gallery image')
            
            return (
              <a key={index} href={imageItem.url || '#'}>
                {imageSrc && (
                  <Image 
                    src={imageSrc} 
                    alt={imageAlt || 'Gallery image'} 
                    width={400}
                    height={300}
                    className="size-full object-cover" 
                  />
                )}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const Gallery6Defaults: Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 1",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 2",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 3",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 4",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 5",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 6",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 7",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      url: "#",
      alt: "Relume placeholder image 8",
    },
  ],
}
