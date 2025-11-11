"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import { SparklesCore } from "@/components/ui/sparkles"
import { cn } from "@/utilities/ui"

type Props = BlockType & {
  title?: string
  backgroundColor?: 'slate-950' | 'zinc-950' | 'neutral-950' | 'gray-950' | 'black'
  height?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  showGradients?: boolean
}

export const SparklesPreview: React.FC<Props> = ({
  title = "Aceternity",
  backgroundColor = 'black',
  height = "40rem",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
  particleColor = "#FFFFFF",
  showGradients = true,
}) => {
  // Mapeo de colores de fondo
  const backgroundClasses = {
    'slate-950': 'bg-slate-950',
    'zinc-950': 'bg-zinc-950',
    'neutral-950': 'bg-neutral-950',
    'gray-950': 'bg-gray-950',
    'black': 'bg-black',
  }

  const bgColor = backgroundClasses[backgroundColor] || 'bg-black'

  return (
    <div className={cn("w-full flex flex-col items-center justify-center overflow-hidden rounded-md", bgColor)} style={{ height }}>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
      <div className="w-[40rem] h-40 relative">
        {showGradients && (
          <>
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </>
        )}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={minSize}
          maxSize={maxSize}
          particleDensity={particleDensity}
          className="w-full h-full"
          particleColor={particleColor}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

