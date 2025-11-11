"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

type LogoItem = {
  image: MediaType
  title?: string
}

type Props = {
  heading?: string
  description?: string
  logos?: LogoItem[]
}

export const LogoCloud: React.FC<Props> = (props) => {
  const { heading, description, logos } = props

  return (
    <section className="pb-10 md:pb-10">
      {(heading || description) && (
        <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-xl mx-auto">
          {heading}
          {description && (
            <>
              {' '}
              <br className="hidden md:block" />{' '}
              <span className="text-neutral-400"> {description}</span>
            </>
          )}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10">
        {logos?.map((logo, index) => (
          <motion.div
            initial={{ y: -10, opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
            key={logo.image?.id || index}
          >
            <div className="size-20 mx-auto flex items-center justify-center">
              <Media
                resource={logo.image}
                alt={logo.title || logo.image?.alt || ''}
                className="max-h-full max-w-full object-contain dark:filter dark:invert"
                htmlElement="div"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


