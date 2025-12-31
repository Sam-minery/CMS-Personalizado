"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

interface AnimatedPin3DBlockProps {
  title?: string;
  description?: string;
  media?: string | any;
  pinTitle?: string;
  href?: string;
  backgroundColor?: string;
}

const getGradientClasses = (backgroundColor: string) => {
  switch (backgroundColor) {
    case 'green-blue-cyan':
      return 'bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500';
    case 'pink-red-orange':
      return 'bg-gradient-to-br from-pink-500 via-red-500 to-orange-500';
    case 'yellow-orange-red':
      return 'bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500';
    case 'violet-purple-blue':
    default:
      return 'bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500';
  }
};

export const AnimatedPin3DBlock: React.FC<AnimatedPin3DBlockProps> = ({
  title = "Aceternity UI",
  description = "Customizable Tailwind CSS and Framer Motion Components.",
  media,
  pinTitle = "/ui.aceternity.com",
  href,
  backgroundColor = "violet-purple-blue",
}) => {
  const gradientClasses = getGradientClasses(backgroundColor);

  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title={pinTitle}
        href={href || "#"}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            {media && typeof media === 'object' && media !== null && media.url ? (
              <img
                src={media.url}
                alt={media.alt || title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : media && typeof media === 'string' ? (
              <img
                src={media}
                alt={title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className={`w-full h-full ${gradientClasses}`} />
            )}
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
