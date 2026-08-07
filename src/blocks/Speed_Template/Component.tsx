import React from "react";
import { Container } from "@/components/TemplatePro/containerTemplate";
import { Heading } from "@/components/TemplatePro/headingTemplate";
import { Subheading } from "@/components/TemplatePro/subheadingTemplate";
import { LandingImages } from "@/components/TemplatePro/landing-imagesTemplate";
import { GradientDivider } from "@/components/TemplatePro/gradient-dividerTemplate";
import type { Page } from '@/payload-types'
import { sanitizeHTML } from "@/utilities/sanitizeHTML";
import "@/components/TemplatePro/TemplateStyles.css";

interface SpeedTemplateProps {
  speedTemplateHeading?: string | null;
  speedTemplateSubheading?: string | null;
  speedImgs?: {
    firstImageType?: ('upload' | 'url') | null;
    firstImageUpload?: any;
    firstImageUrl?: string | null;
    secondImageType?: ('upload' | 'url') | null;
    secondImageUpload?: any;
    secondImageUrl?: string | null;
    showGradient?: boolean | null;
  };
}

export const SpeedTemplate: React.FC<SpeedTemplateProps> = (props) => {
  const {
    speedTemplateHeading = "Built for Speed <br /> Designed for Scale",
    speedTemplateSubheading = "Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.",
    speedImgs = {
      firstImageType: 'url',
      firstImageUrl: "https://assets.aceternity.com/screenshots/3.jpg",
      secondImageType: 'url',
      secondImageUrl: "https://assets.aceternity.com/screenshots/4.jpg",
      showGradient: true
    }
  } = props || {};

  // Helper function to get image source
  const getImageSrc = (imageType: 'upload' | 'url', imageUpload?: any, imageUrl?: string) => {
    if (imageType === 'upload' && imageUpload && typeof imageUpload === 'object' && imageUpload !== null && imageUpload.url) {
      return imageUpload.url;
    }
    return imageUrl || '';
  };

  // Get image sources
  let firstImageSrc = getImageSrc(
    (speedImgs?.firstImageType as 'upload' | 'url') || 'url',
    speedImgs?.firstImageUpload,
    speedImgs?.firstImageUrl || undefined
  );

  let secondImageSrc = getImageSrc(
    (speedImgs?.secondImageType as 'upload' | 'url') || 'url',
    speedImgs?.secondImageUpload,
    speedImgs?.secondImageUrl || undefined
  );

  // Defaults diferentes siempre
  const defaultFirst = "https://assets.aceternity.com/screenshots/3.jpg";
  const defaultSecond = "https://assets.aceternity.com/screenshots/4.jpg";

  // Si la primera está vacía, usar default
  if (!firstImageSrc) {
    firstImageSrc = defaultFirst;
  }
  
  // Si la segunda está vacía, usar default diferente
  if (!secondImageSrc) {
    secondImageSrc = defaultSecond;
  }

  // SIEMPRE asegurar que sean diferentes
  if (firstImageSrc === secondImageSrc) {
    console.warn('SpeedTemplate: Ambas imágenes tienen la misma URL, forzando diferentes:', firstImageSrc);
    // Forzar siempre defaults diferentes
    firstImageSrc = defaultFirst;
    secondImageSrc = defaultSecond;
  }

  // Debug: Verificar URLs de imágenes
  if (typeof window !== 'undefined') {
    console.log('SpeedTemplate - URLs originales:', { 
      first: speedImgs?.firstImageUrl, 
      second: speedImgs?.secondImageUrl 
    });
    console.log('SpeedTemplate - URLs finales:', { 
      firstImageSrc, 
      secondImageSrc 
    });
    console.log('SpeedTemplate - Images are different:', firstImageSrc !== secondImageSrc);
  }

  return (
    <section className="template-container template-container-wrapper pt-10 md:pt-20 lg:pt-10 relative overflow-hidden">
      <Container>
        <div className="w-full md:w-1/3">
          <Heading as="h2" className="template-fade-in text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: sanitizeHTML(speedTemplateHeading || "Built for Speed <br /> Designed for Scale") }} />
          </Heading>

          <Subheading className="py-8 template-slide-up text-base md:text-lg lg:text-xl leading-relaxed whitespace-normal">
            {speedTemplateSubheading || "Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work."}
          </Subheading>
        </div>
        
        <LandingImages 
          firstImageSrc={firstImageSrc}
          secondImageSrc={secondImageSrc}
          showGradient={speedImgs?.showGradient ?? true}
        />
      </Container>
      <GradientDivider />
    </section>
  );
};

