'use client'

import React from 'react'
import { motion } from 'motion/react'
import type { Block as BlockType } from 'payload'
import { cn } from '@/utilities/ui'
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from '@/components/ui/glowing-stars'
import { CMSLink } from '@/components/Link'

type Props = BlockType & {
  title?: string
  description?: string
  button?: {
    text?: string
    link?: {
      type?: 'custom' | 'reference'
      url?: string
      reference?: any
      newTab?: boolean
    }
  }
  backgroundColor?: string
  height?: string
}

// Componente del botón con icono usando CMSLink
const ActionButton = ({ 
  text, 
  link 
}: { 
  text: string
  link?: {
    type?: 'custom' | 'reference'
    url?: string
    reference?: any
    newTab?: boolean
  }
}) => {
  if (!link) return null

  return (
    <CMSLink
      type={link.type}
      url={link.url}
      reference={link.reference}
      newTab={link.newTab}
      appearance="inline"
      className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-200 group cursor-pointer"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-4 w-4 text-white stroke-2 group-hover:translate-x-0.5 transition-transform duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </motion.svg>
    </CMSLink>
  )
}

export const Glowing_Background_Star_Card: React.FC<Props> = ({
  title = 'Next.js 14',
  description = 'The power of full-stack to the frontend. Read the release notes.',
  button = {
    text: 'Ver más',
    link: {
      type: 'custom',
      url: '#',
      newTab: false,
    },
  },
  backgroundColor = 'slate-950',
  height = 'auto',
}) => {
  // Mapeo de colores de fondo
  const backgroundClasses = {
    'slate-950': 'bg-slate-950',
    'zinc-950': 'bg-zinc-950',
    'gray-950': 'bg-gray-950',
    'neutral-950': 'bg-neutral-950',
  }

  // Mapeo de alturas
  const heightClasses = {
    auto: 'py-20',
    screen: 'h-screen',
    '30rem': 'h-[30rem]',
    '40rem': 'h-[40rem]',
    '50rem': 'h-[50rem]',
  }

  const currentHeight = heightClasses[height as keyof typeof heightClasses] || heightClasses.auto
  const currentBackground = backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-slate-950'

  return (
    <div className={cn('relative flex items-center justify-center antialiased', currentHeight, currentBackground)}>
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>{title}</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>{description}</GlowingStarsDescription>
          <ActionButton 
            text={button.text || 'Ver más'} 
            link={button.link}
          />
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  )
}
