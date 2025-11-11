"use client"

import React, { useMemo } from "react"
import type { Block as BlockType } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { LayoutGrid } from "@/components/ui/layout-grid"

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

type CardItem = {
  id?: string | null
  thumbnail?: string | MediaType | number | null
  title?: string | null
  subtitle?: string | null
  description?: string | null
  className?: string | null
}

type Props = BlockType & {
  height?: string
  padding?: string
  cards?: CardItem[]
}

const SkeletonCard: React.FC<{
  card: CardItem
}> = ({ card }) => {
  const { title, subtitle, description } = card

  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {title || 'Sin título'}
      </p>
      {subtitle && (
        <p className="font-normal text-base text-white mt-2">
          {subtitle}
        </p>
      )}
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description || 'Sin descripción'}
      </p>
    </div>
  )
}

export const LayoutGridDemo: React.FC<Props> = ({
  height = 'h-auto',
  padding = 'py-20',
  cards = [],
}) => {
  // Transform cards to the format expected by LayoutGrid component
  // Memoizar para evitar recrear el array en cada render
  // IMPORTANTE: Los hooks deben estar antes de cualquier return condicional
  const formattedCards = useMemo(() => {
    if (!cards || cards.length === 0) return []
    
    return cards.map((card, index) => {
      const imageUrl = getImageUrl(card.thumbnail)
      
      // Ensure id is always a number
      let cardId: number
      if (card.id && typeof card.id === 'string') {
        const parsedId = parseInt(card.id, 10)
        cardId = isNaN(parsedId) ? index + 1 : parsedId
      } else if (typeof card.id === 'number') {
        cardId = card.id
      } else {
        cardId = index + 1
      }
      
      return {
        id: cardId,
        content: <SkeletonCard card={card} />,
        className: card.className || 'md:col-span-1',
        thumbnail: imageUrl || '',
      }
    })
  }, [cards])

  // Filter out cards without valid thumbnails
  const validCards = useMemo(() => {
    return formattedCards.filter(card => card.thumbnail !== '')
  }, [formattedCards])

  // Ahora podemos hacer los returns condicionales después de los hooks
  if (!cards || cards.length === 0) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor agrega al menos una tarjeta
      </div>
    )
  }

  if (validCards.length === 0) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor agrega imágenes válidas a las tarjetas
      </div>
    )
  }

  return (
    <div className={`${height} ${padding} w-full min-h-[400px]`}>
      <LayoutGrid cards={validCards} />
    </div>
  )
}

