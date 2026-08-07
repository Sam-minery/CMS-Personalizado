'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'motion/react'
import type { Block as BlockType } from 'payload'
import { cn } from '@/utilities/ui'

type Props = BlockType & {
  title?: string
  subtitle?: string
  backgroundColor?: string
  height?: string
  rippleColor?: string
  gridSize?: string
}

const BackgroundCellCore = ({ 
  rippleColor = 'blue',
  gridSize = 'medium' 
}: { 
  rippleColor?: string
  gridSize?: string 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }

  const size = 300

  // Configuración de colores para el efecto ripple - más luminosos
  const rippleColors = {
    blue: 'rgba(14,165,233,0.6)',
    cyan: 'rgba(6,182,212,0.6)',
    green: 'rgba(34,197,94,0.6)',
    purple: 'rgba(147,51,234,0.6)',
    pink: 'rgba(236,72,153,0.6)',
  }

  // Configuración de tamaños de cuadrícula
  const gridSizes = {
    small: { x: 37, y: 25 },
    medium: { x: 47, y: 30 },
    large: { x: 57, y: 35 },
  }

  const currentGridSize = gridSizes[gridSize as keyof typeof gridSizes] || gridSizes.medium

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0"
    >
      <div className="absolute h-full w-full inset-0 overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-slate-950 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
              ${size / 4}px circle at center,
             white, transparent
            )`,
            WebkitMaskImage: `radial-gradient(
            ${size / 4}px circle at center,
            white, transparent
          )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: 'none',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          <Pattern 
            cellClassName="border-blue-600 relative z-[100]" 
            rippleColor={rippleColors[rippleColor as keyof typeof rippleColors] || rippleColors.blue}
            gridSize={currentGridSize}
          />
        </div>
        <Pattern 
          className="opacity-[0.7]" 
          cellClassName="border-neutral-600" 
          rippleColor={rippleColors[rippleColor as keyof typeof rippleColors] || rippleColors.blue}
          gridSize={currentGridSize}
        />
      </div>
    </div>
  )
}

// Componente individual para cada celda
const Cell = ({
  rowIdx,
  colIdx,
  cellClassName,
  rippleColor,
  clickedCell,
  onCellClick,
}: {
  rowIdx: number
  colIdx: number
  cellClassName?: string
  rippleColor?: string
  clickedCell: [number, number] | null
  onCellClick: (rowIdx: number, colIdx: number) => void
}) => {
  const controls = useAnimation()

  useEffect(() => {
    if (clickedCell) {
      const distance = Math.sqrt(
        Math.pow(clickedCell[0] - rowIdx, 2) +
          Math.pow(clickedCell[1] - colIdx, 2)
      )
      controls.start({
        opacity: [0, 1 - distance * 0.05, 0],
        scale: [1, 1.2, 1],
        transition: { duration: distance * 0.15 },
      })
    }
  }, [clickedCell, rowIdx, colIdx, controls])

  return (
    <div
      className={cn(
        'bg-transparent border-l border-b border-neutral-500 hover:border-neutral-400 transition-colors duration-200',
        cellClassName
      )}
      onClick={() => onCellClick(rowIdx, colIdx)}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: [0, 1, 0.8],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        animate={controls}
        className="h-12 w-12"
        style={{
          backgroundColor: rippleColor || 'rgba(14,165,233,0.6)',
          boxShadow: `0 0 20px ${rippleColor || 'rgba(14,165,233,0.4)'}`,
        }}
      ></motion.div>
    </div>
  )
}

const Pattern = ({
  className,
  cellClassName,
  rippleColor,
  gridSize,
}: {
  className?: string
  cellClassName?: string
  rippleColor?: string
  gridSize?: { x: number; y: number }
}) => {
  const x = new Array(gridSize?.x || 47).fill(0)
  const y = new Array(gridSize?.y || 30).fill(0)
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]))
  const [clickedCell, setClickedCell] = useState<[number, number] | null>(null)

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    setClickedCell([rowIdx, colIdx])
  }

  return (
    <div className={cn('flex flex-row relative z-30', className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col relative z-20 border-b"
        >
          {row.map((column, colIdx) => (
            <Cell
              key={`matrix-col-${colIdx}`}
              rowIdx={rowIdx}
              colIdx={colIdx}
              cellClassName={cellClassName}
              rippleColor={rippleColor}
              clickedCell={clickedCell}
              onCellClick={handleCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export const Background_Ripple_Effect: React.FC<Props> = ({
  title = 'Background cell animation with framer motion',
  subtitle = '',
  backgroundColor = 'slate-950',
  height = 'screen',
  rippleColor = 'blue',
  gridSize = 'medium',
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
    screen: 'h-screen',
    '30rem': 'h-[30rem]',
    '40rem': 'h-[40rem]',
    '50rem': 'h-[50rem]',
    '60rem': 'h-[60rem]',
  }

  const currentHeight = heightClasses[height as keyof typeof heightClasses] || heightClasses.screen

  return (
    <div className={`relative ${currentHeight} ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-slate-950'} flex justify-center overflow-hidden`}>
      <BackgroundCellCore rippleColor={rippleColor} gridSize={gridSize} />
      <div className="relative z-50 mt-40 pointer-events-none select-none">
        <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
          {title}
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
        </h1>
      </div>
    </div>
  )
}
