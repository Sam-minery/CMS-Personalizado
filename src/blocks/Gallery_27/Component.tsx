"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from 'next/image'
import type { Media } from '@/payload-types'

type ImageProps = {
  image: string | Media
  alt?: string
}

type Props = {
  heading: string
  description: string
  images: ImageProps[]
}

export type Gallery27BlockProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

export const Gallery27Block: React.FC<Gallery27BlockProps> = (props) => {
  const { heading, description, images } = {
    ...Gallery27Defaults,
    ...props,
  }

  const getImageSrc = (image: string | Media): string => {
    if (typeof image === 'string') {
      return image
    }
    return typeof image === 'object' && image !== null && image.url ? image.url : ''
  }

  const getImageAlt = (image: string | Media, fallbackAlt: string): string => {
    if (typeof image === 'object' && image?.alt) {
      return image.alt
    }
    return fallbackAlt
  }

  // Estado para el carrusel
  const [current, setCurrent] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    setIsClient(true)
    
    // Calcular cuántas imágenes mostrar según el tamaño de pantalla
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // 1 imagen en móvil
      } else if (window.innerWidth < 768) {
        setItemsPerView(2) // 2 imágenes en sm
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3) // 3 imágenes en md
      } else {
        setItemsPerView(4) // 4 imágenes en lg
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Calcular el número máximo de slides
  const maxSlides = Math.max(1, Math.ceil((images?.length || 0) / itemsPerView))

  // Función para cambiar slide
  const goToSlide = (index: number) => {
    setCurrent(Math.min(index, maxSlides - 1))
  }

  // Función para siguiente slide
  const nextSlide = () => {
    setCurrent((prev) => Math.min(prev + 1, maxSlides - 1))
  }

  // Función para slide anterior
  const prevSlide = () => {
    setCurrent((prev) => Math.max(prev - 1, 0))
  }

  if (!isClient) {
    return (
      <section id="relume" className="overflow-hidden py-16 md:py-24 lg:py-28">
        <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-0">
          <div className="flex lg:justify-self-end">
            <div className="mx-[5%] w-full max-w-md lg:mb-24 lg:ml-[5vw] lg:mr-20">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
              <p className="md:text-md">{description}</p>
            </div>
          </div>
          <div className="overflow-hidden px-[5%] lg:px-0">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {images?.slice(0, 6).map((imageItem, index) => {
                const imageSrc = getImageSrc(imageItem.image)
                const imageAlt = getImageAlt(imageItem.image, imageItem.alt || 'Gallery image')
                
                return (
                  <div key={index} className="w-full">
                    {imageSrc && (
                      <Image 
                        src={imageSrc} 
                        alt={imageAlt || 'Gallery image'} 
                        width={400}
                        height={300}
                        className="size-full object-cover" 
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="relume" className="overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="grid auto-cols-fr grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-0">
        <div className="flex lg:justify-self-end">
          <div className="mx-[5%] w-full max-w-md lg:mb-24 lg:ml-[5vw] lg:mr-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        
        {/* Carrusel */}
        <div className="overflow-hidden px-[5%] lg:px-0">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${current * (100 / maxSlides)}%)`,
                  width: `${maxSlides * 100}%`
                }}
              >
                {Array.from({ length: maxSlides }, (_, slideIndex) => (
                  <div 
                    key={slideIndex}
                    className="flex-shrink-0 w-full"
                    style={{ width: `${100 / maxSlides}%` }}
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-3">
                      {images?.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((imageItem, imageIndex) => {
                        const imageSrc = getImageSrc(imageItem.image)
                        const imageAlt = getImageAlt(imageItem.image, imageItem.alt || 'Gallery image')
                        
                        return (
                          <div key={imageIndex} className="w-full">
                            {imageSrc && (
                              <Image
                                src={imageSrc}
                                alt={imageAlt || 'Gallery image'}
                                width={400}
                                height={300}
                                className="size-full object-cover rounded-lg"
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Controles de navegación */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex gap-2 md:gap-4">
              <button
                onClick={prevSlide}
                disabled={current === 0}
                className="static left-0 top-0 size-12 -translate-y-0 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Slide anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                disabled={current >= maxSlides - 1}
                className="static left-0 top-0 size-12 -translate-y-0 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Siguiente slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicadores - Solo para slides */}
            <div className="absolute right-[5%] mt-5 flex items-center justify-end md:right-8 lg:right-16">
              {Array.from({ length: maxSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`mx-[3px] inline-block size-2 rounded-full transition-all duration-200 ${
                    current === index
                      ? "bg-black"
                      : "bg-neutral-300 hover:bg-neutral-500"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const Gallery27Defaults: Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  images: [
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 1",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 2",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 3",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 4",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 5",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 6",
    },
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 7",
    },
  ],
}
