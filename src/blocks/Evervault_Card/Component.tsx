"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import { EvervaultCard, Icon } from "@/components/ui/evervault-card"
import { cn } from "@/utilities/ui"

export type EvervaultCardItem = {
  text?: string
  title?: string
  badgeText?: string
  height?: string
  maxWidth?: string
}

type Props = BlockType & {
  layout?: 'grid' | 'flex-horizontal' | 'flex-vertical'
  gridColumns?: string
  cards?: EvervaultCardItem[]
}

const SingleCard: React.FC<{
  card: EvervaultCardItem
}> = ({ card }) => {
  const {
    text = "hover",
    title,
    badgeText = "Watch me hover",
    height = "h-[30rem]",
    maxWidth = "max-w-sm",
  } = card

  return (
    <div
      className={cn(
        "border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative",
        height,
        maxWidth
      )}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <div className="flex-1 w-full flex items-center justify-center">
        <EvervaultCard text={text} className="w-full h-full" />
      </div>

      <div className="w-full mt-auto">
        {title && (
          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            {title}
          </h2>
        )}

        {badgeText && (
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 inline-block">
            {badgeText}
          </p>
        )}
      </div>
    </div>
  )
}

export const EvervaultCardDemo: React.FC<Props> = ({
  layout = 'grid',
  gridColumns = '3',
  cards = [],
}) => {
  if (!cards || cards.length === 0) {
    return (
      <div className="text-neutral-500 text-center">
        No hay cards para mostrar
      </div>
    )
  }

  // Si solo hay una card, usar el diseño simple
  if (cards.length === 1) {
    return (
      <div className="flex justify-center w-full">
        <SingleCard card={cards[0]} />
      </div>
    )
  }

  // Múltiples cards con diferentes layouts
  const containerClasses = cn(
    "w-full",
    {
      'grid gap-6': layout === 'grid',
      'flex flex-wrap gap-6 justify-center': layout === 'flex-horizontal',
      'flex flex-col gap-6 items-center': layout === 'flex-vertical',
    }
  )

  const gridColsClass = {
    '1': 'grid-cols-1',
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[gridColumns || '3'] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  const finalContainerClasses = layout === 'grid'
    ? cn(containerClasses, gridColsClass)
    : containerClasses

  return (
    <div className={finalContainerClasses}>
      {cards.map((card, index) => (
        <SingleCard key={index} card={card} />
      ))}
    </div>
  )
}

