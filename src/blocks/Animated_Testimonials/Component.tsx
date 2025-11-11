"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

// Helper function to convert Payload API URL to public static URL
const convertToPublicUrl = (url: string): string => {
  if (!url) return url
  if (url.startsWith('/api/media/file/')) {
    return url.replace('/api/media/file/', '/media/')
  }
  return url
}

// Helper function to get image URL from upload field
const getImageUrl = (media: string | MediaType | number | null | undefined): string => {
  if (!media) return ''
  if (typeof media === 'string') return convertToPublicUrl(media)
  if (typeof media === 'number') return ''
  if (media && typeof media === 'object' && 'url' in media) {
    const url = media.url || ''
    return convertToPublicUrl(url)
  }
  return ''
}

type TestimonialItem = {
  quote?: string | null
  name?: string | null
  designation?: string | null
  image?: string | MediaType | number | null
}

type Props = BlockType & {
  testimonials?: TestimonialItem[]
  autoplay?: boolean | null
}

export const AnimatedTestimonialsDemo: React.FC<Props> = ({
  testimonials = [],
  autoplay = false,
}) => {
  // Si no hay testimonios, mostrar mensaje
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="w-full py-20">
        <div className="mx-auto text-center text-neutral-500">
          Por favor agrega al menos un testimonio
        </div>
      </div>
    )
  }

  // Convertir los testimonios al formato esperado por el componente UI
  const formattedTestimonials = testimonials.map((testimonial) => ({
    quote: testimonial.quote || '',
    name: testimonial.name || '',
    designation: testimonial.designation || '',
    src: getImageUrl(testimonial.image),
  }))

  return <AnimatedTestimonials testimonials={formattedTestimonials} autoplay={autoplay || false} />
}

