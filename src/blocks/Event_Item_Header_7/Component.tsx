"use client";

import * as React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiMap, BiCalendarAlt, BiUser } from "react-icons/bi";
import Image from "next/image";
import { CMSLink } from '@/components/Link';

type ImageProps = {
  src?: string;
  url?: string;
  alt?: string;
} | string;

type Date = {
  weekday: string;
  day: string;
  month: string;
  year: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  date: Date;
  location: string;
  speakers: string;
  image: ImageProps;
  buttons: {
    title: string;
    variant: string;
    size: string;
    link: {
      type: 'reference' | 'custom';
      url?: string;
      reference?: any;
      newTab?: boolean;
    };
  }[];
};

export type EventItemHeader7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const EventItemHeader7 = (props: EventItemHeader7Props) => {
  const { tagline, heading, description, date, location, speakers, image, buttons } = {
    ...EventItemHeader7Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
          <h4 className="font-semibold">{tagline}</h4>
          <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="mt-5 text-base md:mt-6 md:text-md">{description}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm md:mt-6">
            <div className="flex items-center gap-2">
              <BiCalendarAlt className="size-6 flex-none" />
              {date.weekday} {date.day} {date.month} {date.year}
            </div>
            <div className="flex items-center gap-2 ">
              <BiMap className="size-6 flex-none" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-6 items-center">
                <BiUser size={23} />
              </div>
              <span>{speakers}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <CMSLink key={index} {...button.link}>
                <Button 
                  variant={button.variant as any}
                  size={button.size as any}
                  className={`
                    ${button.variant === 'primary' 
                      ? 'bg-black text-white hover:bg-gray-800 border border-gray-700' 
                      : button.variant === 'secondary'
                      ? 'bg-white text-black hover:bg-gray-100 border border-gray-300'
                      : button.variant === 'link'
                      ? 'bg-transparent text-black hover:text-gray-600 underline'
                      : 'bg-black text-white hover:bg-gray-800'
                    }
                    ${button.size === 'sm' 
                      ? 'px-3 py-2 text-sm' 
                      : button.size === 'lg' 
                      ? 'px-8 py-4 text-lg' 
                      : 'px-6 py-3 text-base'
                    }
                    font-medium rounded-md transition-colors duration-200
                  `}
                >
                  {button.title}
                </Button>
              </CMSLink>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <div className="relative aspect-video">
            <Image 
              src={typeof image === 'string' ? image : image?.url || image?.src || 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg'} 
              alt={typeof image === 'string' ? 'Event image' : image?.alt || 'Event image'} 
              fill
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventItemHeader7Defaults: Props = {
  tagline: "Tagline",
  heading: "Event title heading",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  date: {
    weekday: "Sat",
    day: "10",
    month: "Feb",
    year: "2024",
  },
  location: "Location",
  speakers: "Speakers",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  buttons: [
    { 
      title: "Save my spot",
      variant: "primary",
      size: "default",
      link: {
        type: "custom",
        url: "#",
      }
    }, 
    { 
      title: "View event", 
      variant: "secondary",
      size: "default",
      link: {
        type: "custom",
        url: "#",
      }
    }
  ],
};
