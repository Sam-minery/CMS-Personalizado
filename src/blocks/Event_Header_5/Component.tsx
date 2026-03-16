"use client";

import { useState } from "react";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Button } from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";
import { CgSpinner } from "react-icons/cg";
import clsx from "clsx";
import Image from "next/image";

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

type Event = {
  url: string;
  image: ImageProps;
  video: string;
  category: string;
  date: Date;
  title: string;
  status: string | null;
  description: string;
  button: ButtonProps & { url?: string };
};

type FeaturedEvent = Omit<Event, "image" | "video" | "category" | "date" | "button"> & {
  duration: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  event: Event;
  events: FeaturedEvent[];
  filters: ButtonProps[];
};

export type EventHeader5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const EventHeader5 = (props: EventHeader5Props) => {
  const { tagline, heading, description, event, events, filters } = {
    ...EventHeader5Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Función para convertir URLs de YouTube al formato embed correcto
  const getVideoUrl = (url: string) => {
    if (!url) return '';
    
    // Si ya es una URL de embed, la devolvemos tal como está
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    // Si es una URL normal de YouTube, la convertimos a embed
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(youtubeRegex);
    
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    
    // Si no es YouTube, devolvemos la URL tal como está
    return url;
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="mb-12 grid auto-cols-fr auto-rows-auto grid-cols-1 items-center gap-8 md:mb-18 md:gap-12 lg:mb-20 lg:grid-cols-2">
          <button 
            className="relative flex w-full items-center justify-center cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            <Image
              src={typeof event.image === 'string' ? event.image : event.image?.url || event.image?.src || 'https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg'}
              alt={typeof event.image === 'string' ? 'Event image' : event.image?.alt || 'Event image'}
              width={600}
              height={400}
              className="aspect-[3/2] size-full object-cover"
            />
            <span className="absolute inset-0 z-10 bg-black/50" />
            <p className="absolute left-4 top-4 z-20 bg-background-secondary px-2 py-1 text-sm font-semibold">
              {event.category}
            </p>
            <FaCirclePlay className="absolute z-20 size-16 text-white" />
          </button>
          
          {isDialogOpen && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsDialogOpen(false);
                  setIsIframeLoaded(false);
                }
              }}
            >
              <div className="relative bg-white rounded-lg p-4 max-w-2xl w-full mx-4">
                <button
                  onClick={() => {
                    setIsDialogOpen(false);
                    setIsIframeLoaded(false);
                  }}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                >
                  ×
                </button>
                <div className="relative mt-8">
                  {!isIframeLoaded && (
                    <div className="flex items-center justify-center h-64">
                      <CgSpinner className="size-12 animate-spin text-gray-500" />
                    </div>
                  )}
                  <iframe
                    className={clsx("w-full h-80 rounded", {
                      visible: isIframeLoaded,
                      hidden: !isIframeLoaded,
                    })}
                    src={getVideoUrl(event.video)}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    onLoad={() => setIsIframeLoaded(true)}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col items-start">
            <div className="flex w-full flex-col items-start justify-start">
              <div className="mb-3 flex items-center gap-2 text-sm md:mb-4">
                <BiCalendarAlt className="size-6 flex-none" />
                {event.date.weekday} {event.date.day} {event.date.month} {event.date.year}
              </div>
              <a href={event.url} className="mb-3 md:mb-4">
                <h2 className="text-xl font-bold md:text-2xl">{event.title}</h2>
              </a>
              <p>{event.description}</p>
              <a href={event.button.url || '#'}>
                <Button
                  {...event.button}
                  className="mt-5 flex items-center justify-center gap-x-2 md:mt-6"
                >
                  {event.button.title}
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:ml-0 md:w-full md:overflow-hidden md:pl-0">
          {filters.map((filter, index) => (
            <Button key={index} className="px-4" {...filter}>
              {filter.title}
            </Button>
          ))}
        </div>
        {events.map((event, index) => (
          <FeaturedEvent key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

const FeaturedEvent: React.FC<FeaturedEvent> = ({ duration, status, url, title, description }) => {
  return (
    <div className="grid grid-cols-1 place-items-start gap-8 overflow-hidden border-t border-border-primary py-6 sm:grid-cols-[1fr_max-content] sm:place-items-center md:py-8">
      <div className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <MdAccessTime className="size-6 flex-none" />
            <span>{duration} minutes</span>
          </div>
          {status && (
            <p className="bg-background-secondary px-2 py-1 text-sm font-semibold">{status}</p>
          )}
        </div>
        <a href={url} className="mb-4">
          <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
        </a>
        <p className="line-clamp-3">{description}</p>
      </div>
      <Button variant="link" size="link" className="flex">
        <FaCirclePlay className="block text-8xl" />
      </Button>
    </div>
  );
};

export const EventHeader5Defaults: Props = {
  tagline: "Tagline",
  heading: "Webinars",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  event: {
    url: "#",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg",
      alt: "Relume placeholder image",
    },
    video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
    category: "Category",
    date: {
      weekday: "Sat",
      day: "10",
      month: "Feb",
      year: "2024",
    },
    title: "Webinar title heading",
    status: null,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    button: {
      variant: "secondary",
      size: "primary",
      title: "Save my spot",
    },
  },
  filters: [
    {
      variant: "secondary",
      title: "View all",
      size: "link",
    },
    {
      variant: "link",
      title: "Category one",
      size: "link",
    },
    {
      variant: "link",
      title: "Category two",
      size: "link",
    },
    {
      variant: "link",
      title: "Category three",
      size: "link",
    },
    {
      variant: "link",
      title: "Category four",
      size: "link",
    },
  ],
  events: [
    {
      url: "#",
      title: "Webinar title heading",
      duration: "45",
      status: "Coming soon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      url: "#",
      title: "Webinar title heading",
      duration: "45",
      status: null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      url: "#",
      title: "Webinar title heading",
      duration: "45",
      status: null,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ],
};
