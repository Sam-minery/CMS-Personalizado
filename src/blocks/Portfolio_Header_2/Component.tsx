'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

type Tag = {
  url: string;
  label: string;
};

type Props = {
  heading: string;
  description: string;
  tags: Tag[];
  image: string | MediaType;
};

export type PortfolioHeader2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const PortfolioHeader2 = (props: PortfolioHeader2Props) => {
  const { heading, description, tags, image } = {
    ...PortfolioHeader2Defaults,
    ...props,
  };

  const getImageAlt = (image: string | MediaType): string => {
    if (typeof image === 'object' && image?.alt) {
      return image.alt
    }
    return 'Portfolio header background image'
  }

  return (
    <section id="relume">
      <div className="flex min-h-svh flex-col">
        <div className="relative flex-1">
          <Media 
            resource={image} 
            alt={getImageAlt(image)}
            className="absolute size-full object-cover"
            imgClassName="absolute size-full object-cover"
          />
        </div>
        <div className="px-[5%]">
          <div className="mx-auto max-w-lg py-12 text-center md:py-16 lg:py-20">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
              {tags.map((tag, index) => (
                <li key={index} className="flex">
                  <a
                    href={tag.url}
                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                  >
                    {tag.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PortfolioHeader2Defaults: Props = {
  heading: "Project name here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
  image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
};
