'use client'

import React from 'react'
import type { Block as BlockType } from 'payload'
import { cn } from '@/utilities/ui'
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '@/components/ui/text-reveal-card'

type Props = BlockType & {
  title?: string
  description?: string
  visibleText?: string
  revealText?: string
  backgroundColor?: string
  height?: string
}

export const Text_Reveal_Card: React.FC<Props> = ({
  title = 'Sometimes, you just need to see it.',
  description = 'This is a text reveal card. Hover over the card to reveal the hidden text.',
  visibleText = 'You know the business',
  revealText = 'I know the chemistry',
  backgroundColor = 'dark',
  height = '40rem',
}) => {
  // Mapeo de colores de fondo
  const backgroundClasses = {
    'dark': 'bg-[#0E0E10]',
    'slate-950': 'bg-slate-950',
    'zinc-950': 'bg-zinc-950',
    'gray-950': 'bg-gray-950',
    'neutral-950': 'bg-neutral-950',
  }

  // Mapeo de alturas
  const heightClasses = {
    '30rem': 'h-[30rem]',
    '40rem': 'h-[40rem]',
    '50rem': 'h-[50rem]',
    '60rem': 'h-[60rem]',
    'screen': 'h-screen',
  }

  const currentHeight = heightClasses[height as keyof typeof heightClasses] || heightClasses['40rem']
  const currentBackground = backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-[#0E0E10]'

  return (
    <div className={cn('flex items-center justify-center rounded-2xl w-full', currentHeight, currentBackground)}>
      <TextRevealCard
        text={visibleText}
        revealText={revealText}
      >
        <TextRevealCardTitle>
          {title}
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          {description}
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  )
}
