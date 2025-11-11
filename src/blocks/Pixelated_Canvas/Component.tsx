"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas"

// Helper function to get image URL from upload field
const getImageUrl = (media: string | MediaType | number | null | undefined): string => {
  if (!media) return ''
  if (typeof media === 'string') return media
  if (typeof media === 'number') return ''
  if (media && typeof media === 'object' && 'url' in media) {
    return media.url || ''
  }
  return ''
}

type Props = BlockType & {
  media?: MediaType | string | number | null
  width?: number
  height?: number
  cellSize?: number
  dotScale?: number
  shape?: 'circle' | 'square'
  backgroundColor?: string
  dropoutStrength?: number
  interactive?: boolean
  distortionStrength?: number
  distortionRadius?: number
  distortionMode?: 'repel' | 'attract' | 'swirl'
  followSpeed?: number
  jitterStrength?: number
  jitterSpeed?: number
  sampleAverage?: boolean
  tintColor?: string
  tintStrength?: number
  className?: string
}

export const PixelatedCanvasDemo: React.FC<Props> = ({
  media,
  width = 400,
  height = 500,
  cellSize = 3,
  dotScale = 0.9,
  shape = "square",
  backgroundColor = "#000000",
  dropoutStrength = 0.4,
  interactive = true,
  distortionStrength = 3,
  distortionRadius = 80,
  distortionMode = "swirl",
  followSpeed = 0.2,
  jitterStrength = 4,
  jitterSpeed = 4,
  sampleAverage = true,
  tintColor = "#FFFFFF",
  tintStrength = 0.2,
  className = "rounded-xl border border-neutral-800 shadow-lg",
}) => {
  const imageUrl = getImageUrl(media)

  if (!imageUrl) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor selecciona una imagen
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center w-full my-8">
      <PixelatedCanvas
        src={imageUrl}
        width={width}
        height={height}
        cellSize={cellSize}
        dotScale={dotScale}
        shape={shape}
        backgroundColor={backgroundColor}
        dropoutStrength={dropoutStrength}
        interactive={interactive}
        distortionStrength={distortionStrength}
        distortionRadius={distortionRadius}
        distortionMode={distortionMode}
        followSpeed={followSpeed}
        jitterStrength={jitterStrength}
        jitterSpeed={jitterSpeed}
        sampleAverage={sampleAverage}
        tintColor={tintColor}
        tintStrength={tintStrength}
        className={className}
      />
    </div>
  )
}

