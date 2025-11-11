"use client"

import React, { useMemo } from "react"
import type { Block as BlockType } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { ThreeDMarquee } from "@/components/ui/3d-marquee"

// Helper function to convert Payload API URL to public static URL
// Payload returns /api/media/file/filename.png but files are in /media/filename.png
const convertToPublicUrl = (url: string): string => {
  if (!url) return url
  // Convert /api/media/file/filename.png -> /media/filename.png
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

type ImageItem = {
  image?: string | MediaType | number | null
}

type Props = BlockType & {
  images?: ImageItem[]
  padding?: string | null
  backgroundColor?: string | null
}

export const ThreeDMarqueeDemo: React.FC<Props> = ({
  images = [],
  padding = 'my-10',
  backgroundColor = 'bg-gray-950/5',
}) => {
  // Transform images to the format expected by ThreeDMarquee component
  const imageUrls = useMemo(() => {
    if (!images || images.length === 0) return []
    
    const urls = images
      .map((item) => {
        const url = getImageUrl(item.image)
        // Ensure conversion happened
        if (url && url.startsWith('/api/media/file/')) {
          return convertToPublicUrl(url)
        }
        return url
      })
      .filter((url) => url !== '')
    
    return urls
  }, [images])

  // Early return if no images provided
  if (!images || images.length === 0) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor agrega al menos una imagen
      </div>
    )
  }

  // Early return if no valid URLs were generated
  if (imageUrls.length === 0) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor agrega imágenes válidas desde la colección Media
      </div>
    )
  }

  return (
    <div className={`relative z-10 mx-auto ${padding} max-w-7xl rounded-3xl ${backgroundColor} p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800`}>
      <ThreeDMarquee images={imageUrls} />
    </div>
  )
}

