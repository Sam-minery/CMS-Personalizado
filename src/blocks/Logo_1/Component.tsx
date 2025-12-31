"use client";

import React from 'react';
import Image from 'next/image';
import type { Media as MediaType } from '@/payload-types';

type ImageProps = {
  image: MediaType;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo1Block: React.FC<Logo1Props> = (props) => {
  const { heading, logos } = {
    ...Logo1Defaults,
    ...props,
  };

  // Función para obtener la URL de la imagen desde el objeto Media
  const getImageSrc = (mediaItem: MediaType | null | undefined): string => {
    if (!mediaItem) return ''
    if (typeof mediaItem === 'object' && mediaItem !== null && mediaItem.url) {
      return mediaItem.url
    }
    return ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (logo: ImageProps): string => {
    if (logo.alt) return logo.alt
    if (typeof logo.image === 'object' && logo.image?.alt) {
      return logo.image.alt
    }
    return 'Logo'
  }
  
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <h1 className="mx-auto mb-6 w-full max-w-lg text-center text-base font-bold leading-[1.2] md:mb-8 md:text-md md:leading-[1.2]">
          {heading}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 pb-2 pt-4 md:pt-2">
          {logos?.map((logo, index) => {
            const imageSrc = getImageSrc(logo.image)
            const imageAlt = getImageAlt(logo)
            
            return (
              <div key={index} className="flex items-center justify-center h-16 w-32 md:h-20 md:w-40">
                {imageSrc && (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={160}
                    height={80}
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export const Logo1Defaults: Props = {
  heading: "Used by the world's leading companies",
  logos: [],
};
