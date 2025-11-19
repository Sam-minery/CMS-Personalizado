"use client";

import React, { useState } from "react";
import Image from 'next/image'
import RichText from '@/components/RichText'
import { FaCirclePlay } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@relume_io/relume-ui";

import type { LongContent4Block as LongContent4BlockProps } from '@/payload-types'

export const LongContent4Block: React.FC<LongContent4BlockProps> = (props) => {
  const { heading, content, image, video } = props

  const [isIframeLoaded, setIsIframeLoaded] = useState<boolean>(false);

  // Función para convertir URLs de YouTube al formato embed correcto
  const getVideoUrl = (url: string | null | undefined) => {
    if (!url) return ''
    
    // Si ya es una URL de embed, la devolvemos tal como está
    if (typeof url === 'string' && url.includes('youtube.com/embed/')) {
      return url
    }
    
    // Si es una URL normal de YouTube, la convertimos a embed
    if (typeof url === 'string') {
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
      const match = url.match(youtubeRegex);
      
      if (match) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    
    // Si no es YouTube, devolvemos la URL tal como está
    return typeof url === 'string' ? url : ''
  }

  if (!heading || !content || !image || !video) {
    return null
  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative flex w-full items-center justify-center">
                  {(() => {
                    const imageSrc = typeof image.src === 'object' && image.src?.url ? image.src.url : String(image.src);
                    return imageSrc && imageSrc !== 'undefined' && imageSrc !== 'null' && (
                      <Image 
                        src={imageSrc} 
                        alt={image.alt || 'Video thumbnail'} 
                        width={800}
                        height={400}
                        className="size-full object-cover"
                        quality={100}
                      />
                    );
                  })()}
                  <span className="absolute inset-0 z-10 bg-black/50" />
                  <FaCirclePlay className="absolute z-20 size-16 text-white" />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="sr-only">Video Player</DialogTitle>
                {!isIframeLoaded && (
                  <CgSpinner className="mx-auto size-16 animate-spin text-white" />
                )}
                <iframe
                  className={clsx(
                    "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                    {
                      visible: isIframeLoaded,
                      hidden: !isIframeLoaded,
                    },
                  )}
                  src={getVideoUrl(video)}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={() => setIsIframeLoaded(true)}
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <div className="prose">
              <RichText data={content} enableGutter={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
