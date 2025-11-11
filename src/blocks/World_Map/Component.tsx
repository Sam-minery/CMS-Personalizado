"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import WorldMap from "@/components/ui/world-map"
import { motion } from "motion/react"

type DotItem = {
  start: {
    lat: number
    lng: number
    label?: string | null
  }
  end: {
    lat: number
    lng: number
    label?: string | null
  }
}

type Props = BlockType & {
  title?: string | null
  titleHighlight?: string | null
  description?: string | null
  dots?: DotItem[]
  lineColor?: string | null
  padding?: string | null
}

export const WorldMapDemo: React.FC<Props> = ({
  title = 'Remote',
  titleHighlight = 'Connectivity',
  description = 'Break free from traditional boundaries. Work from anywhere, at the comfort of your own studio apartment. Perfect for Nomads and Travellers.',
  dots = [],
  lineColor = '#0ea5e9',
  padding = 'py-40',
}) => {
  // Transform dots to the format expected by WorldMap component
  const formattedDots = dots.map((dot) => ({
    start: {
      lat: dot.start.lat,
      lng: dot.start.lng,
      label: dot.start.label || undefined,
    },
    end: {
      lat: dot.end.lat,
      lng: dot.end.lng,
      label: dot.end.label || undefined,
    },
  }))

  const highlightText = titleHighlight || 'Connectivity'

  return (
    <div className={`${padding} dark:bg-black bg-white w-full`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          {title}{" "}
          <span className="text-neutral-400">
            {highlightText.split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        {description && (
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            {description}
          </p>
        )}
      </div>
      {formattedDots.length > 0 ? (
        <WorldMap
          dots={formattedDots}
          lineColor={lineColor || undefined}
        />
      ) : (
        <div className="mx-auto mt-8 text-center text-neutral-500">
          Por favor agrega al menos una conexión en el mapa
        </div>
      )}
    </div>
  )
}

