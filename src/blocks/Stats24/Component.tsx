'use client'
import React from 'react'
import Image from 'next/image'
import type { Media } from '@/payload-types'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from '@relume_io/relume-ui'
import { FaCirclePlay } from 'react-icons/fa6'

type ImageGroup = {
  useMedia?: boolean | null
  mediaImage?: number | Media | null
  src?: string | null
  alt?: string | null
}

type VideoGroup = {
  image?: ImageGroup | null
  url?: string | null
}

type Tab = {
  value?: string | null
  percentage?: string | null
  heading?: string | null
  description?: string | null
  useVideo?: boolean | null
  image?: ImageGroup | null
  video?: VideoGroup | null
}

type Stats24BlockProps = {
  tagline?: string | null
  heading?: string | null
  description?: string | null
  defaultTabValue?: string | null
  tabs?: Tab[] | null
}

export const Stats24Block: React.FC<Stats24BlockProps> = ({
  tagline,
  heading,
  description,
  defaultTabValue,
  tabs,
}) => {
  // Función para obtener la URL de la imagen
  const getImageSrc = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return ''
    if (imageGroup.useMedia && imageGroup.mediaImage) {
      if (typeof imageGroup.mediaImage === 'object' && imageGroup.mediaImage !== null && imageGroup.mediaImage.url) {
        return imageGroup.mediaImage.url
      }
    }
    return imageGroup.src || ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (imageGroup: ImageGroup | null | undefined): string => {
    if (!imageGroup) return 'Image'
    return imageGroup.alt || 'Image'
  }

  // Función para convertir URLs de YouTube al formato embed correcto
  const getVideoUrl = (url: string | null | undefined): string => {
    if (!url) return ''
    
    // Si ya es una URL de embed, la devolvemos tal como está
    if (url.includes('youtube.com/embed/')) {
      return url
    }
    
    // Si es una URL normal de YouTube, la convertimos a embed
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    const match = url.match(youtubeRegex)
    
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`
    }
    
    // Si no es YouTube, devolvemos la URL tal como está
    return url
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container flex flex-col items-start">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          {heading && (
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          )}
          {description && <p className="md:text-md">{description}</p>}
        </div>
        {Array.isArray(tabs) && tabs.length > 0 && (
          <Tabs
            defaultValue={defaultTabValue || 'tab-1'}
            className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
          >
            <TabsList className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-1 items-center gap-x-4 gap-y-10">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value || `tab-${index + 1}`}
                  className="flex-col items-start justify-start whitespace-normal border-0 border-l-2 border-transparent py-0 pl-8 pr-0 text-left data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
                >
                  {tab.percentage && (
                    <h2 className="mb-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                      {tab.percentage}
                    </h2>
                  )}
                  {tab.heading && (
                    <h3 className="text-md font-bold leading-[1.4] md:text-xl">{tab.heading}</h3>
                  )}
                  {tab.description && <p className="mt-2">{tab.description}</p>}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="max-size-full flex items-center justify-center overflow-hidden">
              {tabs.map((tab, index) => {
                const tabValue = tab.value || `tab-${index + 1}`
                const imageSrc = tab.useVideo
                  ? getImageSrc(tab.video?.image)
                  : getImageSrc(tab.image)
                const imageAlt = tab.useVideo
                  ? getImageAlt(tab.video?.image)
                  : getImageAlt(tab.image)

                return (
                  <TabsContent key={tabValue} value={tabValue} className="data-[state=active]:animate-tabs">
                    <div className="relative size-full">
                      {tab.useVideo && tab.video ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="relative flex w-full items-center justify-center">
                              {imageSrc ? (
                                <Image
                                  src={imageSrc}
                                  alt={imageAlt}
                                  width={800}
                                  height={600}
                                  className="size-full object-cover"
                                />
                              ) : (
                                <div className="flex h-96 w-full items-center justify-center bg-gray-200">
                                  <span className="text-gray-500">Imagen de miniatura del video</span>
                                </div>
                              )}
                              <span className="absolute inset-0 z-10 bg-black/50" />
                              <FaCirclePlay className="absolute z-20 size-16 text-white" />
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogTitle className="sr-only">Reproductor de video</DialogTitle>
                            <VideoIframe video={getVideoUrl(tab.video?.url)} />
                          </DialogContent>
                        </Dialog>
                      ) : (
                        imageSrc && (
                          <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={800}
                            height={600}
                            className="size-full object-cover"
                          />
                        )
                      )}
                    </div>
                  </TabsContent>
                )
              })}
            </div>
          </Tabs>
        )}
      </div>
    </section>
  )
}

