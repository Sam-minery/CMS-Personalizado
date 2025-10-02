'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import type { Block as BlockType } from 'payload'

import { simpleLink } from '@/fields/simpleLink'

type Props = BlockType & {
  buttonText?: string
  buttonLink?: {
    type?: 'reference' | 'custom'
    reference?: {
      value: any // Puede ser string, number, o objeto con slug
      relationTo: 'pages' | 'posts'
    }
    url?: string
    newTab?: boolean
  }
  backgroundColor?: string
  height?: string
  buttonSize?: string
}

const grad1 = {
  initial: {
    x1: '0%',
    x2: '0%',
    y1: '80%',
    y2: '100%',
  },
  animate: {
    x1: ['0%', '0%', '200%'],
    x2: ['0%', '0%', '180%'],
    y1: ['80%', '0%', '0%'],
    y2: ['100%', '20%', '20%'],
  },
}

const grad2 = {
  initial: {
    x1: '0%',
    x2: '0%',
    y1: '80%',
    y2: '100%',
  },
  animate: {
    x1: ['20%', '100%', '100%'],
    x2: ['0%', '90%', '90%'],
    y1: ['80%', '80%', '-20%'],
    y2: ['100%', '100%', '0%'],
  },
}

const grad3 = {
  initial: {
    x1: '0%',
    x2: '0%',
    y1: '80%',
    y2: '100%',
  },
  animate: {
    x1: ['20%', '100%', '100%'],
    x2: ['0%', '90%', '90%'],
    y1: ['80%', '80%', '-20%'],
    y2: ['100%', '100%', '0%'],
  },
}

const grad4 = {
  initial: {
    x1: '40%',
    x2: '50%',
    y1: '160%',
    y2: '180%',
  },
  animate: {
    x1: '0%',
    x2: '10%',
    y1: '-40%',
    y2: '-20%',
  },
}

const grad5 = {
  initial: {
    x1: '-40%',
    x2: '-10%',
    y1: '0%',
    y2: '20%',
  },
  animate: {
    x1: ['40%', '0%', '0%'],
    x2: ['10%', '0%', '0%'],
    y1: ['0%', '0%', '180%'],
    y2: ['20%', '20%', '200%'],
  },
}

const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  )
}

const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="var(--slate-800)"
      />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="var(--slate-800)"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="var(--slate-800)"
      />
      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="var(--slate-800)"
      />

      {/* Gradient Beams */}
      <path
        d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
      />
      <path
        d="M568 200H841C846.523 200 851 195.523 851 190V40"
        stroke="url(#grad2)"
      />
      <path
        d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />
      <path
        d="M493 274V333.226C493 338.749 497.477 343.226 503 343.226H760C765.523 343.226 770 347.703 770 353.226V427"
        stroke="url(#grad4)"
      />
      <path
        d="M380 168V17C380 11.4772 384.477 7 390 7H414"
        stroke="url(#grad5)"
      />

      <defs>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="770"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="142"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="6.5"
        cy="398.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="420.5"
        cy="6.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
    </svg>
  )
}

const ButtonContent = ({ buttonText, buttonLink, buttonSize = 'medium' }: { buttonText: string; buttonLink?: Props['buttonLink']; buttonSize?: string }) => {
  // Configuración de tamaños del botón
  const buttonSizes = {
    small: {
      container: 'w-[240px] h-[90px]',
      inner: 'w-[240px] h-[90px]',
      text: 'text-sm md:text-2xl',
    },
    medium: {
      container: 'w-[320px] h-[120px]',
      inner: 'w-[320px] h-[120px]',
      text: 'text-base md:text-4xl',
    },
    large: {
      container: 'w-[400px] h-[150px]',
      inner: 'w-[400px] h-[150px]',
      text: 'text-lg md:text-5xl',
    },
    xlarge: {
      container: 'w-[480px] h-[180px]',
      inner: 'w-[480px] h-[180px]',
      text: 'text-xl md:text-6xl',
    },
  }

  const size = buttonSizes[buttonSize as keyof typeof buttonSizes] || buttonSizes.medium

  const buttonElement = (
    <button className={`bg-slate-800 ${size.container} z-40 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block`}>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className={`relative flex justify-center ${size.inner} text-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10`}>
        <span className={`${size.text} inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300`}>
          {buttonText}
        </span>
      </div>
    </button>
  )

  if (!buttonLink) {
    return buttonElement
  }

  if (buttonLink.type === 'custom' && buttonLink.url) {
    return (
      <Link
        href={buttonLink.url}
        target={buttonLink.newTab ? '_blank' : '_self'}
        rel={buttonLink.newTab ? 'noopener noreferrer' : undefined}
      >
        {buttonElement}
      </Link>
    )
  }

  if (buttonLink.type === 'reference' && buttonLink.reference) {
    // Construir la URL correctamente como en CMSLink
    const href = typeof buttonLink.reference.value === 'object' && buttonLink.reference.value.slug
      ? `${buttonLink.reference.relationTo !== 'pages' ? `/${buttonLink.reference.relationTo}` : ''}/${
          buttonLink.reference.value.slug
        }`
      : buttonLink.reference.value
    
    return (
      <Link
        href={href}
        target={buttonLink.newTab ? '_blank' : '_self'}
        rel={buttonLink.newTab ? 'noopener noreferrer' : undefined}
      >
        {buttonElement}
      </Link>
    )
  }

  return buttonElement
}

export const Pulse_Beams: React.FC<Props> = ({
  buttonText = 'Connect',
  buttonLink,
  backgroundColor = 'slate-950',
  height = '40rem',
  buttonSize = 'medium',
}) => {
  // Mapeo de colores de fondo
  const backgroundClasses = {
    'slate-950': 'bg-slate-950',
    'zinc-950': 'bg-zinc-950',
    'gray-950': 'bg-gray-950',
    'neutral-950': 'bg-neutral-950',
  }

  return (
    <div
      className={`flex relative items-center justify-center antialiased overflow-hidden ${backgroundClasses[backgroundColor as keyof typeof backgroundClasses] || 'bg-slate-950'}`}
      style={{ height }}
    >
      <ButtonContent buttonText={buttonText} buttonLink={buttonLink} buttonSize={buttonSize} />
      {/* Core SVGs component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  )
}
