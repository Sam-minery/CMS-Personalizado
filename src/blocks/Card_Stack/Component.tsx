"use client"
import React from 'react'
import { CardStack } from '@/components/ui/card-stack'
import { cn } from '@/utilities/ui'

export type CardItem = {
  id?: number
  name: string
  designation: string
  content: string
}

type Props = {
  cards?: CardItem[]
  height?: string
}

// Small utility to highlight the content of specific section of a testimonial content
const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  )
}

// Convert plain text to JSX with highlighting of text between **
const parseContent = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const text = part.slice(2, -2)
          return <Highlight key={index}>{text}</Highlight>
        }
        return part
      })}
    </p>
  )
}

export const CardStackDemo: React.FC<Props> = (props) => {
  const { cards = [], height = 'h-[40rem]' } = props

  // Map the cards to the format expected by CardStack
  const cardItems = cards.map((card, index) => ({
    id: card.id || index,
    name: card.name,
    designation: card.designation,
    content: parseContent(card.content),
  }))

  return (
    <div className={`${height} flex items-center justify-center w-full`}>
      {cardItems.length > 0 ? (
        <CardStack items={cardItems} />
      ) : (
        <div className="text-neutral-500 text-center">
          No hay tarjetas para mostrar
        </div>
      )}
    </div>
  )
}

