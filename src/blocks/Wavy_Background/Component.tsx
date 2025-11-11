"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import { WavyBackground } from "@/components/ui/wavy-background"
import { cn } from "@/utilities/ui"

type Props = BlockType & {
  title?: string
  description?: string
  height?: string
  padding?: string
  maxWidth?: string
  speed?: 'slow' | 'fast'
  waveOpacity?: number
  blur?: number
  waveWidth?: number
  backgroundFill?: string
}

export const WavyBackgroundDemo: React.FC<Props> = ({
  title = "Hero waves are cool",
  description = "Leverage the power of canvas to create a beautiful hero section",
  height = "h-screen",
  padding = "pb-40",
  maxWidth = "max-w-4xl",
  speed = "fast",
  waveOpacity = 0.5,
  blur = 10,
  waveWidth = 50,
  backgroundFill = "black",
}) => {
  return (
    <WavyBackground 
      className={cn(maxWidth, "mx-auto", padding, "px-4")}
      containerClassName={height}
      speed={speed}
      waveOpacity={waveOpacity}
      blur={blur}
      waveWidth={waveWidth}
      backgroundFill={backgroundFill}
    >
      <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center drop-shadow-lg">
        {title}
      </h1>
      {description && (
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center drop-shadow-md">
          {description}
        </p>
      )}
    </WavyBackground>
  )
}

