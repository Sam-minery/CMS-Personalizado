"use client"
import React from "react"
import { motion } from "motion/react"
import { LampContainer } from "@/components/ui/lamp"

type Props = {
  titleTop?: string
  titleBottom?: string
  backgroundColor?: 'slate-950' | 'zinc-950' | 'neutral-950' | 'gray-950'
  hue?: 'cyan' | 'emerald' | 'violet' | 'fuchsia' | 'sky' | 'indigo' | 'amber' | 'rose'
}

export const LampSectionHeader: React.FC<Props> = ({
  titleTop = "Build lamps",
  titleBottom = "the right way",
  backgroundColor = 'slate-950',
  hue = 'cyan',
}) => {
  return (
    <LampContainer backgroundColor={backgroundColor} hue={hue}>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        {titleTop} <br /> {titleBottom}
      </motion.h1>
    </LampContainer>
  )
}


