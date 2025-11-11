"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import type { Media } from '@/payload-types';

interface SVGMaskEffectProps {
  title?: string;
  highlightedText1?: string;
  highlightedText2?: string;
  additionalText?: string;
  revealText?: string;
  height?: string;
  textSize?: string;
  backgroundImage?: string | Media;
}

// Helper function to get image URL from upload field
const getImageUrl = (image: string | Media): string => {
  if (typeof image === 'string') return image;
  if (image && typeof image === 'object' && 'url' in image) {
    return image.url || '';
  }
  return '';
};

export function SVGMaskEffectDemo({
  title = "Discover the power of",
  highlightedText1 = "Tailwind CSS v4",
  highlightedText2 = "advanced animations",
  additionalText = "with native CSS variables and container queries with",
  revealText = "The first rule of MRR Club is you do not talk about MRR Club. The second rule of MRR Club is you DO NOT talk about MRR Club.",
  height = "40rem",
  textSize = "4xl",
  backgroundImage
}: SVGMaskEffectProps) {
  const imageUrl = backgroundImage ? getImageUrl(backgroundImage) : '';
  
  return (
    <div className={`flex h-[${height}] w-full items-center justify-center overflow-hidden`}>
      <MaskContainer
        revealText={
          <p className={`mx-auto max-w-4xl text-center text-${textSize} font-bold text-slate-800 dark:text-white`}>
            {revealText}
          </p>
        }
        className={`h-[${height}] rounded-md border text-white dark:text-black`}
        backgroundImage={imageUrl}
      >
        <div className="text-center">
          {title}{" "}
          <span className="text-blue-500">{highlightedText1}</span> {additionalText}
          <span className="text-blue-500">{highlightedText2}</span>.
        </div>
      </MaskContainer>
    </div>
  );
}
