"use client"

import React from 'react'
import type { Block } from 'payload'
import type { Media as MediaType } from '@/payload-types'
import { InfiniteMovingCards as InfiniteMovingCardsUI } from '@/components/ui/infinite-moving-cards'

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

export type InfiniteMovingCardsItem = {
  id?: string | null
  image?: string | MediaType | number | null
  quote?: string | null
  name?: string | null
  title?: string | null
}

type ColorScheme =
  | 'slate'
  | 'blue'
  | 'red'
  | 'green'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'emerald'
  | 'amber'
  | 'indigo'

type Props = Block & {
  colorScheme?: ColorScheme | null
  height?: string | null
  direction?: ('left' | 'right') | null
  speed?: ('fast' | 'normal' | 'slow') | null
  items?: InfiniteMovingCardsItem[] | null
}

// Mapa de colores para diferentes esquemas
const colorSchemes = {
  slate: {
    border: 'border-slate-200 dark:border-slate-700',
    bg: 'bg-slate-50 dark:bg-slate-900',
    bgGradient: 'bg-[linear-gradient(180deg,#f8fafc,#f1f5f9)] dark:bg-[linear-gradient(180deg,#1e293b,#0f172a)]',
  },
  blue: {
    border: 'border-blue-200 dark:border-blue-700',
    bg: 'bg-blue-50 dark:bg-blue-900',
    bgGradient: 'bg-[linear-gradient(180deg,#eff6ff,#dbeafe)] dark:bg-[linear-gradient(180deg,#1e3a8a,#1e40af)]',
  },
  red: {
    border: 'border-red-200 dark:border-red-700',
    bg: 'bg-red-50 dark:bg-red-900',
    bgGradient: 'bg-[linear-gradient(180deg,#fef2f2,#fee2e2)] dark:bg-[linear-gradient(180deg,#991b1b,#dc2626)]',
  },
  green: {
    border: 'border-green-200 dark:border-green-700',
    bg: 'bg-green-50 dark:bg-green-900',
    bgGradient: 'bg-[linear-gradient(180deg,#f0fdf4,#dcfce7)] dark:bg-[linear-gradient(180deg,#14532d,#166534)]',
  },
  purple: {
    border: 'border-purple-200 dark:border-purple-700',
    bg: 'bg-purple-50 dark:bg-purple-900',
    bgGradient: 'bg-[linear-gradient(180deg,#faf5ff,#f3e8ff)] dark:bg-[linear-gradient(180deg,#581c87,#7c3aed)]',
  },
  pink: {
    border: 'border-pink-200 dark:border-pink-700',
    bg: 'bg-pink-50 dark:bg-pink-900',
    bgGradient: 'bg-[linear-gradient(180deg,#fdf2f8,#fce7f3)] dark:bg-[linear-gradient(180deg,#831843,#be185d)]',
  },
  orange: {
    border: 'border-orange-200 dark:border-orange-700',
    bg: 'bg-orange-50 dark:bg-orange-900',
    bgGradient: 'bg-[linear-gradient(180deg,#fff7ed,#ffedd5)] dark:bg-[linear-gradient(180deg,#7c2d12,#c2410c)]',
  },
  emerald: {
    border: 'border-emerald-200 dark:border-emerald-700',
    bg: 'bg-emerald-50 dark:bg-emerald-900',
    bgGradient: 'bg-[linear-gradient(180deg,#ecfdf5,#d1fae5)] dark:bg-[linear-gradient(180deg,#064e3b,#065f46)]',
  },
  amber: {
    border: 'border-amber-200 dark:border-amber-700',
    bg: 'bg-amber-50 dark:bg-amber-900',
    bgGradient: 'bg-[linear-gradient(180deg,#fffbeb,#fef3c7)] dark:bg-[linear-gradient(180deg,#78350f,#d97706)]',
  },
  indigo: {
    border: 'border-indigo-200 dark:border-indigo-700',
    bg: 'bg-indigo-50 dark:bg-indigo-900',
    bgGradient: 'bg-[linear-gradient(180deg,#eef2ff,#e0e7ff)] dark:bg-[linear-gradient(180deg,#1e1b4b,#312e81)]',
  },
}

export const InfiniteMovingCardsDemo: React.FC<Props> = (props) => {
  const {
    colorScheme = 'slate',
    height = '40rem',
    direction = 'left',
    speed = 'normal',
    items = [],
  } = props

  const colors = colorSchemes[colorScheme || 'slate'] || colorSchemes.slate
  const cardClassName = `${colors.border} ${colors.bgGradient}`

  // Filtrar y transformar items para asegurar que tengan los campos requeridos
  // Usar un contador único para garantizar IDs únicos
  let uniqueIdCounter = 0
  const seenIds = new Set<string>()
  const timestamp = Date.now()
  const randomSuffix = Math.random().toString(36).substring(2, 11)
  
  const validItems = (items || [])
    .map((item, originalIndex) => {
      // Generar un ID único que garantice unicidad absoluta
      let uniqueId: string
      
      if (item?.id) {
        // Si hay un ID de Payload, usarlo pero asegurar unicidad
        uniqueId = `inf-${item.id}-${originalIndex}`
        let counter = 0
        while (seenIds.has(uniqueId)) {
          uniqueId = `inf-${item.id}-${originalIndex}-${counter++}`
        }
      } else {
        // Generar un ID único basado en el índice, contador, timestamp y random
        uniqueId = `infinite-card-${originalIndex}-${++uniqueIdCounter}-${timestamp}-${randomSuffix}`
      }
      
      seenIds.add(uniqueId)
      
      return {
        id: uniqueId,
        image: getImageUrl(item?.image),
        quote: item?.quote || '',
        name: item?.name || '',
        title: item?.title || '',
      }
    })
    .filter((item) => item.quote && item.name && item.title)

  if (validItems.length === 0) {
    return (
      <div className="text-neutral-500 text-center">
        No hay elementos para mostrar
      </div>
    )
  }

  return (
    <div
      className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      style={{ height: height ?? undefined }}
    >
      <InfiniteMovingCardsUI
        items={validItems}
        direction={direction || 'left'}
        speed={speed || 'normal'}
        cardClassName={cardClassName}
      />
    </div>
  )
}
