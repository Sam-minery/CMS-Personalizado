"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export type ProjectItem = {
  id?: number
  title: string
  description: string
  link?: string
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

type Props = {
  projects?: ProjectItem[]
  colorScheme?: ColorScheme
}

// Mapa de colores para diferentes esquemas
const colorSchemes = {
  slate: {
    hover: 'bg-slate-800/[0.8]',
    card: 'from-slate-800 to-slate-800/[0.2]',
    border: 'group-hover:border-slate-700',
    title: 'text-zinc-100',
    description: 'text-zinc-400',
  },
  blue: {
    hover: 'bg-blue-900/[0.8]',
    card: 'from-blue-900 to-blue-900/[0.2]',
    border: 'group-hover:border-blue-700',
    title: 'text-blue-50',
    description: 'text-blue-300',
  },
  red: {
    hover: 'bg-red-900/[0.8]',
    card: 'from-red-900 to-red-900/[0.2]',
    border: 'group-hover:border-red-700',
    title: 'text-red-50',
    description: 'text-red-300',
  },
  green: {
    hover: 'bg-green-900/[0.8]',
    card: 'from-green-900 to-green-900/[0.2]',
    border: 'group-hover:border-green-700',
    title: 'text-green-50',
    description: 'text-green-300',
  },
  purple: {
    hover: 'bg-purple-900/[0.8]',
    card: 'from-purple-900 to-purple-900/[0.2]',
    border: 'group-hover:border-purple-700',
    title: 'text-purple-50',
    description: 'text-purple-300',
  },
  pink: {
    hover: 'bg-pink-900/[0.8]',
    card: 'from-pink-900 to-pink-900/[0.2]',
    border: 'group-hover:border-pink-700',
    title: 'text-pink-50',
    description: 'text-pink-300',
  },
  orange: {
    hover: 'bg-orange-900/[0.8]',
    card: 'from-orange-900 to-orange-900/[0.2]',
    border: 'group-hover:border-orange-700',
    title: 'text-orange-50',
    description: 'text-orange-300',
  },
  emerald: {
    hover: 'bg-emerald-900/[0.8]',
    card: 'from-emerald-900 to-emerald-900/[0.2]',
    border: 'group-hover:border-emerald-700',
    title: 'text-emerald-50',
    description: 'text-emerald-300',
  },
  amber: {
    hover: 'bg-amber-900/[0.8]',
    card: 'from-amber-900 to-amber-900/[0.2]',
    border: 'group-hover:border-amber-700',
    title: 'text-amber-50',
    description: 'text-amber-300',
  },
  indigo: {
    hover: 'bg-indigo-900/[0.8]',
    card: 'from-indigo-900 to-indigo-900/[0.2]',
    border: 'group-hover:border-indigo-700',
    title: 'text-indigo-50',
    description: 'text-indigo-300',
  },
}

export const HoverEffect: React.FC<Props> = (props) => {
  const { projects = [], colorScheme = 'slate' } = props
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const colors = colorSchemes[colorScheme] || colorSchemes.slate

  if (projects.length === 0) {
    return (
      <div className="text-neutral-500 text-center">
        No hay proyectos para mostrar
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {projects.map((project, idx) => (
          <div
            key={project.link || idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={`absolute inset-0 h-full w-full ${colors.hover} block rounded-3xl`}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div
              className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br ${colors.card} border border-transparent ${colors.border} relative z-50`}
            >
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className={`${colors.title} font-bold tracking-wide mt-4`}>
                    {project.title}
                  </h4>
                  <p className={`mt-8 ${colors.description} tracking-wide leading-relaxed text-sm`}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

