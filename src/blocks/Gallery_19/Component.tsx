"use client";

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

export type Gallery19BlockProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

export const Gallery19Block: React.FC<Gallery19BlockProps> = (props) => {
  const { heading, description, images } = {
    ...Gallery19Defaults,
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
      if (window.innerWidth < 768) {
        setItemsPerView(2) // 2 imágenes en móvil
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3) // 3 imágenes en tablet
      } else {
        setItemsPerView(4) // 4 imágenes en desktop
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Calcular el número máximo de slides
  const maxSlides = Math.max(0, (images?.length || 0) - itemsPerView + 1)

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
      <section id="relume">
        <div className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="mb-12 text-center md:mb-18 lg:mb-20">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
            <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
              {images?.slice(0, 8).map((imageItem, index) => {
                const imageSrc = getImageSrc(imageItem.image)
                const imageAlt = getImageAlt(imageItem.image, imageItem.alt || 'Gallery image')
                
                return (
                  <div key={index} className="w-full">
                    {imageSrc && (
                      <Image 
                        src={imageSrc} 
                        alt={imageAlt || 'Gallery image'} 
                        width={400}
                        height={400}
                        className="aspect-square size-full object-cover" 
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
    <section id="relume">
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          
          {/* Carrusel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${current * (100 / itemsPerView)}%)`,
                  width: `${(images?.length || 0) * (100 / itemsPerView)}%`
                }}
              >
                {images?.map((imageItem, index) => {
                  const imageSrc = getImageSrc(imageItem.image)
                  const imageAlt = getImageAlt(imageItem.image, imageItem.alt || 'Gallery image')
                  
                  return (
                    <div 
                      key={index} 
                      className="flex-shrink-0 px-3 md:px-4"
                      style={{ width: `${100 / (images?.length || 1)}%` }}
                    >
                      <div className="w-full">
                        {imageSrc && (
                          <Image
                            src={imageSrc}
                            alt={imageAlt || 'Gallery image'}
                            width={400}
                            height={400}
                            className="aspect-square w-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              disabled={current === 0}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 size-12 lg:size-14 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Imagen anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              disabled={current >= maxSlides - 1}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 size-12 lg:size-14 bg-white/80 hover:bg-white rounded-full items-center justify-center shadow-lg transition-all duration-200 z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Siguiente imagen"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicadores */}
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            {Array.from({ length: maxSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative mx-[3px] inline-block size-2 rounded-full transition-all duration-200 ${
                  current === index
                    ? "bg-black"
                    : "bg-neutral-400 hover:bg-neutral-600"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const Gallery19Defaults: Props = {
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
    {
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder image 8",
    },
  ],
}
