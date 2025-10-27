"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";
import { CMSLink } from "@/components/Link";

type ImageProps = {
  url?: string;
  alt?: string;
} | string;

type TimelineItem = {
  heading: string;
  title: string;
  description: string;
  buttons: Array<ButtonProps & { href?: string }>;
  image: ImageProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: Array<ButtonProps & { href?: string }>;
  timelineItems: TimelineItem[];
};

export type Timeline7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Timeline7 = (props: Timeline7Props) => {
  const { tagline, heading, description, buttons, timelineItems } = {
    ...Timeline7Defaults,
    ...props,
  };

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineColor = useTransform(scrollYProgress, [0, 1], ["#e5e5e5", "#000000"]);

  // Mapeo de variantes para CMSLink
  const variantMapping: Record<string, 'default' | 'secondary' | 'outline' | 'ghost' | 'link'> = {
    'default': 'default',
    'secondary': 'secondary',
    'outline': 'outline',
    'ghost': 'ghost',
    'link': 'link',
  };

  // Mapeo de tamaños para CMSLink
  const sizeMapping: Record<string, 'default' | 'sm' | 'lg' | 'icon' | 'clear'> = {
    'sm': 'sm',
    'default': 'default',
    'lg': 'lg',
    'icon': 'icon',
    'link': 'clear',
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="relative z-10 w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => {
                // Si hay un enlace, usar CMSLink, si no, usar Button normal
                if (button.href) {
                  const mappedVariant = variantMapping[button.variant || 'default'] || 'default';
                  const mappedSize = sizeMapping[button.size || 'default'] || 'default';
                  
                  return (
                    <CMSLink 
                      key={index} 
                      url={button.href}
                      appearance={mappedVariant}
                      size={mappedSize}
                    >
                      {button.title}
                    </CMSLink>
                  );
                }
                
                return (
                  <Button key={index} {...button}>
                    {button.title}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <div ref={timelineRef} className="relative w-full max-w-lg">
          {/* Línea del timeline animada */}
          <div className="absolute left-6 top-0 bottom-0 w-[3px] md:left-8">
            <motion.div 
              className="h-full w-full"
              style={{ backgroundColor: lineColor }}
            />
            <div className="absolute top-0 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="absolute bottom-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
          </div>
          
          {/* Contenido del timeline */}
          <div className="relative pl-16 md:pl-20">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ item }: { item: TimelineItem }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };

  // Mapeo de variantes para CMSLink
  const variantMapping: Record<string, 'default' | 'secondary' | 'outline' | 'ghost' | 'link'> = {
    'default': 'default',
    'secondary': 'secondary',
    'outline': 'outline',
    'ghost': 'ghost',
    'link': 'link',
  };

  // Mapeo de tamaños para CMSLink
  const sizeMapping: Record<string, 'default' | 'sm' | 'lg' | 'icon' | 'clear'> = {
    'sm': 'sm',
    'default': 'default',
    'lg': 'lg',
    'icon': 'icon',
    'link': 'clear',
  };

  return (
    <div className="relative mb-16 last:mb-0">
      {/* Círculo del timeline */}
      <div className="absolute -left-10 top-8 flex h-8 w-8 items-center justify-center md:-left-12">
        <motion.div
          ref={circleRef}
          style={backgroundColor}
          className="z-20 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white]"
        />
      </div>
      
      {/* Contenido del elemento */}
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        <div>
          <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
            {item.heading}
          </h3>
          <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{item.title}</h4>
          <p className="text-gray-600">{item.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {item.buttons.map((button, index) => {
              // Si hay un enlace, usar CMSLink, si no, usar Button normal
              if (button.href) {
                const mappedVariant = variantMapping[button.variant || 'default'] || 'default';
                const mappedSize = sizeMapping[button.size || 'default'] || 'default';
                
                return (
                  <CMSLink 
                    key={index} 
                    url={button.href}
                    appearance={mappedVariant}
                    size={mappedSize}
                  >
                    {button.title}
                  </CMSLink>
                );
              }
              
              return (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img 
            src={typeof item.image === 'string' ? item.image : item.image?.url} 
            alt={typeof item.image === 'string' ? 'Timeline image' : item.image?.alt || 'Timeline image'} 
            className="w-full" 
          />
        </div>
      </div>
    </div>
  );
};

export const Timeline7Defaults: Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  timelineItems: [
    {
      heading: "Date",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      heading: "Date",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      heading: "Date",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      heading: "Date",
      title: "Short heading here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      image: {
        url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ],
};
