import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'

type Testimonial = {
  image: {
    src: Media | string
    alt?: string
  }
  quote: string
  avatar: {
    src: Media | string
    alt?: string
  }
  name: string
  position: string
  companyName: string
}

type Props = {
  heading: string
  description: string
  testimonials: Testimonial[]
}

export type Testimonial3Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

// Función helper para obtener la URL de la imagen
const getImageUrl = (image: Media | string): string => {
  if (typeof image === 'string') return image
  if (image && typeof image === 'object' && 'url' in image) return image.url || ''
  return ''
}

// Función helper para obtener el alt de la imagen
const getImageAlt = (image: Media | string, fallbackAlt?: string): string => {
  if (typeof image === 'string') return fallbackAlt || ''
  if (image && typeof image === 'object' && 'alt' in image) return image.alt || fallbackAlt || ''
  return fallbackAlt || ''
}

export const Testimonial3 = (props: Testimonial3Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial3Defaults,
    ...props,
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="mb-6 md:mb-8">
                {getImageUrl(testimonial.image.src) && (
                  <Image 
                    src={getImageUrl(testimonial.image.src)} 
                    alt={getImageAlt(testimonial.image.src, testimonial.image.alt)} 
                    width={56}
                    height={56}
                    className="max-h-14" 
                    quality={100}
                  />
                )}
              </div>
              <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
                {testimonial.quote}
              </blockquote>
              <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                <div className="mb-3 md:mb-4">
                  {getImageUrl(testimonial.avatar.src) && (
                    <Image
                      src={getImageUrl(testimonial.avatar.src)}
                      alt={getImageAlt(testimonial.avatar.src, testimonial.avatar.alt)}
                      width={112}
                      height={112}
                      className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                      quality={100}
                      priority
                    />
                  )}
                </div>
                <p className="font-semibold">{testimonial.name}</p>
                <p>
                  <span>{testimonial.position}</span>, <span>{testimonial.companyName}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Testimonial3Defaults: Props = {
  heading: 'Customer testimonials',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  testimonials: [
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
        alt: 'Webflow logo 1',
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Testimonial avatar 1',
      },
      name: 'Name Surname',
      position: 'Position',
      companyName: 'Company name',
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
        alt: 'Webflow logo 2',
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Testimonial avatar 2',
      },
      name: 'Name Surname',
      position: 'Position',
      companyName: 'Company name',
    },
    {
      image: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg',
        alt: 'Webflow logo 3',
      },
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: {
        src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
        alt: 'Testimonial avatar 3',
      },
      name: 'Name Surname',
      position: 'Position',
      companyName: 'Company name',
    },
  ],
}
