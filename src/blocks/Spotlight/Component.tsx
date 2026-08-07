import React from "react";
import { cn } from "@/utilities/ui";
import { Spotlight } from "../../components/ui/spotlight";

type SpotlightBlockProps = {
  title?: string;
  description?: string;
  spotlightColor?: string;
  backgroundColor?: string;
  textColor?: string;
};

// Mapeo de colores para el spotlight
const getSpotlightColor = (color: string) => {
  const colorMap: { [key: string]: string } = {
    white: 'white',
    blue: '#3b82f6',
    green: '#10b981',
    red: '#ef4444',
    yellow: '#f59e0b',
    purple: '#8b5cf6',
    pink: '#ec4899',
    cyan: '#06b6d4',
    orange: '#f97316',
  };
  return colorMap[color] || 'white';
};

// Mapeo de colores de fondo
const getBackgroundColor = (color: string) => {
  const bgMap: { [key: string]: string } = {
    black: 'bg-black/[0.96]',
    white: 'bg-white',
  };
  return bgMap[color] || 'bg-black/[0.96]';
};

// Mapeo de colores de texto
const getTextColor = (textColor: string) => {
  const textColorMap: { [key: string]: string } = {
    white: 'text-white',
    black: 'text-black',
  };
  return textColorMap[textColor] || 'text-white';
};

// Mapeo de colores de título
const getTitleGradient = (textColor: string) => {
  return textColor === 'white'
    ? 'bg-gradient-to-b from-white to-neutral-300'
    : 'bg-gradient-to-b from-black to-neutral-600';
};

export function SpotlightBlock({ 
  title,
  description,
  spotlightColor = "white",
  backgroundColor = "black",
  textColor = "white"
}: SpotlightBlockProps) {
  const spotlightColorValue = getSpotlightColor(spotlightColor);
  const backgroundColorClass = getBackgroundColor(backgroundColor);
  const textColorClass = getTextColor(textColor);
  const titleGradient = getTitleGradient(textColor);

  return (
    <div className={cn("relative flex h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center", backgroundColorClass)}>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill={spotlightColorValue}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        {title && (
          <h1 className={cn("bg-opacity-50 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl", titleGradient)}>
            {title}
          </h1>
        )}
        {description && (
          <p className={cn("mx-auto mt-4 max-w-lg text-center text-base font-normal", textColorClass)}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
