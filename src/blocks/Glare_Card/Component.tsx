"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { GlareCard } from "@/components/ui/glare-card"

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

type CardItem = {
  cardType?: 'icon' | 'image' | 'text' | null
  icon?: string | null
  image?: string | MediaType | number | null
  title?: string | null
  description?: string | null
}

type Props = BlockType & {
  cards?: CardItem[]
  padding?: string | null
  backgroundColor?: string | null
  gridCols?: string | null
}

export const GlareCardDemo: React.FC<Props> = ({
  cards = [],
  padding = 'py-20',
  backgroundColor = 'bg-white dark:bg-black',
  gridCols = '3',
}) => {
  // Si no hay tarjetas, mostrar mensaje
  if (!cards || cards.length === 0) {
    return (
      <div className={`${padding} ${backgroundColor} w-full`}>
        <div className="mx-auto text-center text-neutral-500">
          Por favor agrega al menos una tarjeta
        </div>
      </div>
    )
  }

  // Convertir el número de columnas a clases de Tailwind con comportamiento responsivo
  const getGridClasses = (cols: string | null | undefined): string => {
    const numCols = cols || '3'
    const gridMap: Record<string, string> = {
      '1': 'grid-cols-1',
      '2': 'grid-cols-1 md:grid-cols-2',
      '3': 'grid-cols-1 md:grid-cols-3',
      '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }
    return gridMap[numCols] || gridMap['3']
  }

  return (
    <div className={`${padding} ${backgroundColor} w-full flex justify-center`}>
      <div className={`grid ${getGridClasses(gridCols)} gap-10 max-w-6xl w-full px-8 justify-items-center`}>
        {cards.map((card, index) => {
          const cardType = card.cardType || 'icon'
          // Default className based on card type
          const className = 
            cardType === 'text' 
              ? 'flex flex-col items-start justify-end py-8 px-6'
              : cardType === 'image'
              ? 'relative'
              : 'flex flex-col items-center justify-center'

          return (
            <GlareCard key={index} className={className} hasImage={cardType === 'image'}>
              {cardType === 'icon' && (
                <svg
                  width="66"
                  height="65"
                  viewBox="0 0 66 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-white"
                >
                  <path
                    d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                    stroke="currentColor"
                    strokeWidth="15"
                    strokeMiterlimit="3.86874"
                    strokeLinecap="round"
                  />
                </svg>
              )}

              {cardType === 'image' && card.image && (
                <img
                  className="h-full w-full absolute inset-0 object-cover z-10"
                  src={getImageUrl(card.image)}
                  alt={card.title || `Imagen ${index + 1}`}
                />
              )}

              {cardType === 'text' && (
                <>
                  {card.title && (
                    <p className="font-bold text-white text-lg">{card.title}</p>
                  )}
                  {card.description && (
                    <p className="font-normal text-base text-neutral-200 mt-4">
                      {card.description}
                    </p>
                  )}
                </>
              )}
            </GlareCard>
          )
        })}
      </div>
    </div>
  )
}

