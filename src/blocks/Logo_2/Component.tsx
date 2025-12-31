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

export type Logo2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo2Block: React.FC<Logo2Props> = (props) => {
  const { heading, logos } = {
    ...Logo2Defaults,
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
      <div className="container grid grid-cols-1 items-start justify-start gap-x-12 gap-y-8 md:grid-cols-[max-content_1fr] md:items-center md:justify-between md:gap-y-4 lg:gap-x-16">
        <h1 className="font-bold leading-[1.2] md:max-w-[16rem] md:text-md md:leading-[1.2] lg:max-w-xxs">
          {heading}
        </h1>
        <div className="grid grid-cols-2 items-center justify-end gap-x-4 gap-y-4 pt-4 sm:grid-cols-3 md:gap-x-8 md:pt-0 lg:grid-cols-5">
          {logos?.map((logo, index) => {
            const imageSrc = getImageSrc(logo.image)
            const imageAlt = getImageAlt(logo)
            
            return (
              <div
                key={index}
                className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0"
              >
                <div className="flex items-center justify-center h-24 w-32 md:h-28 md:w-36">
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={144}
                      height={112}
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export const Logo2Defaults: Props = {
  heading: "Used by the world's leading companies",
  logos: [],
};
