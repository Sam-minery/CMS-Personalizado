"use client"

import React from "react"
import type { Block as BlockType } from 'payload'
import { AnimatePresence, motion } from "motion/react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"

type CardItem = {
  title?: string | null
  animationSpeed?: number | null
  containerClassName?: string | null
  colors?: Array<{
    r?: number | null
    g?: number | null
    b?: number | null
  }>
  dotSize?: number | null
  showRadialGradient?: boolean | null
}

type Props = BlockType & {
  cards?: CardItem[]
  padding?: string | null
  backgroundColor?: string | null
}

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}) => {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  )
}

export const CanvasRevealEffectDemo: React.FC<Props> = ({
  cards = [],
  padding = 'py-20',
  backgroundColor = 'bg-white dark:bg-black',
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

  return (
    <div className={`${padding} flex flex-col lg:flex-row items-center justify-center ${backgroundColor} w-full gap-4 mx-auto px-8`}>
      {cards.map((card, index) => {
        // Convertir colores al formato esperado por CanvasRevealEffect
        const colors = card.colors && card.colors.length > 0
          ? card.colors
              .filter(c => c.r !== null && c.g !== null && c.b !== null)
              .map(c => [c.r || 0, c.g || 0, c.b || 0] as [number, number, number])
          : undefined

        return (
          <Card
            key={index}
            title={card.title || `Tarjeta ${index + 1}`}
            icon={<AceternityIcon />}
          >
            <CanvasRevealEffect
              animationSpeed={card.animationSpeed || 5.1}
              containerClassName={card.containerClassName || "bg-emerald-900"}
              colors={colors}
              dotSize={card.dotSize || undefined}
              showGradient={card.showRadialGradient !== false}
            />
            {card.showRadialGradient && (
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            )}
          </Card>
        )
      })}
    </div>
  )
}

