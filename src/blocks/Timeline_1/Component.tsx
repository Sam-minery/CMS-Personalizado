"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@relume_io/relume-ui";
// ButtonProps type removed as it's not used
import { RxChevronRight } from "react-icons/rx";
import { CMSLink } from '@/components/Link'

type Timeline = {
  date: string;
  heading: string;
  description: string;
  buttons: Array<{ title: string; variant?: string; size?: string; href?: string }>;
};

// Mapeo de variantes de relume-ui a las del CMSLink local
const variantMapping: Record<string, 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'> = {
  'default': 'default',
  'primary': 'default',
  'secondary': 'secondary',
  'secondary-alt': 'secondary',
  'outline': 'outline',
  'ghost': 'ghost',
  'tertiary': 'ghost',
  'link': 'link',
  'link-alt': 'link',
}

// Mapeo de tamaños de relume-ui a los del CMSLink local
const sizeMapping: Record<string, 'default' | 'sm' | 'lg' | 'icon' | 'clear'> = {
  'default': 'default',
  'primary': 'default',
  'sm': 'sm',
  'icon': 'icon',
  'lg': 'lg',
  'link': 'clear',
}

export const Timeline1Block: React.FC<{
  tagline?: string;
  heading?: string;
  description?: string;
  buttons?: Array<{ title: string; variant?: string; size?: string; href?: string }>;
  timelines?: Timeline[];
}> = ({ 
  tagline = "Tagline",
  heading = "Medium length section heading goes here",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons = [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
    },
  ],
  timelines = [
    {
      date: "Date",
      heading: "Short heading here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      heading: "Short heading here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      heading: "Short heading here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      date: "Date",
      heading: "Short heading here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ]
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons?.map((button, index) => {
                // Si hay un enlace, usar CMSLink, si no, usar Button normal
                if (button.href) {
                  const mappedVariant = variantMapping[button.variant || 'default'] || 'default'
                  const mappedSize = sizeMapping[button.size || 'default'] || 'default'
                  
                  return (
                    <CMSLink 
                      key={index} 
                      url={button.href}
                      appearance={mappedVariant}
                      size={mappedSize}
                    >
                      {button.title}
                    </CMSLink>
                  )
                }
                
                return (
                  <Button 
                    key={index} 
                    variant={button.variant as 'primary' | 'secondary' | 'ghost' | 'link' | 'secondary-alt' | 'tertiary' | 'link-alt'}
                    size={button.size as 'primary' | 'sm' | 'icon' | 'link'}
                  >
                    {button.title}
                  </Button>
                )
              })}
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            {timelines?.map((timeline, index) => (
              <TimelineItem key={index} timeline={timeline} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ timeline }: { timeline: Timeline }) => {
  const circleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });

  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };

  return (
    <div className="relative">
      <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
        <motion.div
          ref={circleRef}
          style={backgroundColor}
          className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
        />
      </div>
      <div className="ml-12 mt-4 flex flex-col md:ml-0">
        <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
          {timeline.date}
        </h2>
        <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">{timeline.heading}</h3>
        <p>{timeline.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          {timeline.buttons?.map((button, index) => {
            // Si hay un enlace, usar CMSLink, si no, usar Button normal
            if (button.href) {
              const mappedVariant = variantMapping[button.variant || 'default'] || 'default'
              const mappedSize = sizeMapping[button.size || 'default'] || 'default'
              
              return (
                <CMSLink 
                  key={index} 
                  url={button.href}
                  appearance={mappedVariant}
                  size={mappedSize}
                >
                  {button.title}
                </CMSLink>
              )
            }
            
            return (
              <Button 
                key={index} 
                variant={button.variant as 'primary' | 'secondary' | 'ghost' | 'link' | 'secondary-alt' | 'tertiary' | 'link-alt'}
                size={button.size as 'primary' | 'sm' | 'icon' | 'link'}
              >
                {button.title}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  );
};
