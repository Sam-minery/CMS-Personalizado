"use client"

import React, { useMemo } from "react"
import type { Block as BlockType } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { FocusCards } from "@/components/ui/focus-cards"

// Helper function to get image URL from upload field
const getImageUrl = (media: string | MediaType | number | null | undefined): string => {
  if (!media) return ''
  if (typeof media === 'string') return media
  if (typeof media === 'number') return ''
  if (media && typeof media === 'object' && media !== null && 'url' in media) {
    return media.url || ''
  }
  return ''
}

type CardItem = {
  title?: string | null
  image?: string | MediaType | number | null
}

type Props = BlockType & {
  cards?: CardItem[]
}

export const FocusCardsDemo: React.FC<Props> = ({
  cards = [],
}) => {
  // Transform cards to the format expected by FocusCards component
  const formattedCards = useMemo(() => {
    if (!cards || cards.length === 0) return []
    
    return cards
      .map((card) => {
        const imageUrl = getImageUrl(card.image)
        
        return {
          title: card.title || 'Sin título',
          src: imageUrl || '',
        }
      })
      .filter((card) => card.src !== '' && card.title !== 'Sin título')
  }, [cards])

  if (!cards || cards.length === 0) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor agrega al menos una tarjeta
      </div>
    )
  }

  if (formattedCards.length === 0) {
    return (
      <div className="mx-auto mt-8 text-center text-neutral-500">
        Por favor agrega imágenes y títulos válidos a las tarjetas
      </div>
    )
  }

  return <FocusCards cards={formattedCards} />
}
