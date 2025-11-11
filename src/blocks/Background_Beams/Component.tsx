"use client"
import React from "react"
import type { Block as BlockType } from 'payload'
import { BackgroundBeams } from "@/components/ui/background-beams"
import { cn } from "@/utilities/ui"

type Props = BlockType & {
  title?: string
  description?: string
  placeholder?: string
  backgroundColor?: string
  height?: string
}

export const BackgroundBeamsDemo: React.FC<Props> = ({
  title = "Join the waitlist",
  description = "Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business. Whether you're sending order confirmations, password reset emails, or promotional campaigns, MailJet has got you covered.",
  placeholder = "hi@manuarora.in",
  backgroundColor = "neutral-950",
  height = "40rem",
}) => {
  // Mapeo de colores de fondo
  const backgroundClasses = {
    'slate-950': 'bg-slate-950',
    'zinc-950': 'bg-zinc-950',
    'gray-950': 'bg-gray-950',
    'neutral-950': 'bg-neutral-950',
  }

  const bgColor = backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-neutral-950'

  return (
    <div className={cn("w-full rounded-md relative flex flex-col items-center justify-center antialiased", bgColor)} style={{ height }}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          {title}
        </h1>
        {description && (
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            {description}
          </p>
        )}
        <input
          type="text"
          placeholder={placeholder}
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}

