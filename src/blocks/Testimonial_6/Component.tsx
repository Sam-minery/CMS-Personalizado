import React from 'react'
import Image from 'next/image'
import { BiSolidStar } from "react-icons/bi"
import { Media } from '@/payload-types'

type Testimonial = {
  numberOfStars: number
  quote: string
  avatar: Media | number | null
  name: string
  position: string
  logo: Media | number | null
}

type Props = {
  heading: string
  description: string
  testimonials: Testimonial[]
}

export type Testimonial6Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

// Función helper para obtener la URL de la imagen
const getImageUrl = (image: Media | number | null): string => {
  if (!image || typeof image === 'number') return ''
  if (image && typeof image === 'object' && image !== null && 'url' in image) return image.url || ''
  return ''
}

// Función helper para obtener el alt de la imagen
const getImageAlt = (image: Media | number | null, fallbackAlt?: string): string => {
  if (!image || typeof image === 'number') return fallbackAlt || ''
  if (image && typeof image === 'object' && 'alt' in image) return image.alt || fallbackAlt || ''
  return fallbackAlt || ''
}

export const Testimonial6 = (props: Testimonial6Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial6Defaults,
    ...props,
  }
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
    <div className="mb-6 flex md:mb-8">
      {Array(testimonial.numberOfStars)
        .fill(null)
        .map((_, starIndex) => (
          <BiSolidStar key={starIndex} className="size-6" />
        ))}
    </div>
    <blockquote className="text-md font-bold leading-[1.4] md:text-xl">
      {testimonial.quote}
    </blockquote>
    <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
      <div className="mb-4">
        {getImageUrl(testimonial.avatar) && (
          <Image
            src={getImageUrl(testimonial.avatar)}
            alt={getImageAlt(testimonial.avatar, 'Testimonial avatar')}
            width={56}
            height={56}
            className="size-14 min-h-14 min-w-14 rounded-full object-cover"
            quality={100}
          />
        )}
      </div>
      <div className="mb-3 md:mb-4">
        <p className="font-semibold">{testimonial.name}</p>
        <p>{testimonial.position}</p>
      </div>
      <div className="hidden w-px self-stretch bg-black md:block" />
      <div>
        {getImageUrl(testimonial.logo) && (
          <Image 
            src={getImageUrl(testimonial.logo)} 
            alt={getImageAlt(testimonial.logo, 'Company logo')} 
            width={48}
            height={48}
            className="max-h-12" 
            quality={100}
          />
        )}
      </div>
    </div>
  </div>
)

export const Testimonial6Defaults: Props = {
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials: [
    {
      numberOfStars: 5,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: null,
      name: "Name Surname",
      position: "Position, Company name",
      logo: null,
    },
    {
      numberOfStars: 5,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: null,
      name: "Name Surname",
      position: "Position, Company name",
      logo: null,
    },
    {
      numberOfStars: 5,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
      avatar: null,
      name: "Name Surname",
      position: "Position, Company name",
      logo: null,
    },
  ],
}
