"use client";

import React from 'react';
import { Media } from '@/components/Media';
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
  
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container grid grid-cols-1 items-start justify-start gap-x-12 gap-y-8 md:grid-cols-[max-content_1fr] md:items-center md:justify-between md:gap-y-4 lg:gap-x-16">
        <h1 className="font-bold leading-[1.2] md:max-w-[16rem] md:text-md md:leading-[1.2] lg:max-w-xxs">
          {heading}
        </h1>
        <div className="grid grid-cols-2 items-center justify-end gap-x-4 gap-y-4 pt-4 sm:grid-cols-3 md:gap-x-8 md:pt-0 lg:grid-cols-5">
          {logos?.map((logo, index) => (
            <div
              key={index}
              className="flex items-start justify-center justify-self-center px-4 py-3 md:p-0"
            >
              <div className="flex items-center justify-center h-24 w-32 md:h-28 md:w-36">
                <Media
                  resource={logo.image}
                  alt={logo.alt || logo.image?.alt || ''}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Logo2Defaults: Props = {
  heading: "Used by the world's leading companies",
  logos: [],
};
