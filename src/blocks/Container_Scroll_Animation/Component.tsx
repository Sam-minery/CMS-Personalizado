"use client"
import React from 'react'

import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import type { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'

type Props = {
  heading: string
  highlight: string
  media: MediaType | string | number | null
  size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl'
}

export const ContainerScrollAnimationBlock: React.FC<Props> = (props) => {
  const { heading, highlight, media, size = 'auto' } = props

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        size={size}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {heading}
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">{highlight}</span>
            </h1>
          </>
        }
      >
        {size === 'auto' ? (
          <Media
            resource={media}
            imgClassName="mx-auto rounded-2xl object-contain h-auto w-full object-left-top"
            htmlElement={null}
          />
        ) : (
          <div className="h-full w-full">
            <Media
              resource={media}
              imgClassName="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
              htmlElement={null}
            />
          </div>
        )}
      </ContainerScroll>
    </div>
  )
}


