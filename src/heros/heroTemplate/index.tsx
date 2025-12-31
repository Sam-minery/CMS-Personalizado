import React from "react";
import { Container } from "@/components/TemplatePro/containerTemplate";
import { Heading } from "@/components/TemplatePro/headingTemplate";
import { Subheading } from "@/components/TemplatePro/subheadingTemplate";
import { Button } from "@/components/ui/buttonTemplate";
import { CMSLink } from "@/components/Link";
import { LandingImages } from "@/components/TemplatePro/landing-imagesTemplate";
import { GradientDivider } from "@/components/TemplatePro/gradient-dividerTemplate";
import type { Page } from '@/payload-types'
import "@/components/TemplatePro/TemplateStyles.css";

interface HeroTemplateProps {
  heroTemplateHeading?: string | null;
  heroTemplateSubheading?: string | null;
  heroPrimBtn?: {
    text: string;
    link?: {
      type?: ('reference' | 'custom') | null;
      reference?: any;
      url?: string | null;
      newTab?: boolean | null;
    };
  };
  heroSecBtn?: {
    text: string;
    link?: {
      type?: ('reference' | 'custom') | null;
      reference?: any;
      url?: string | null;
      newTab?: boolean | null;
    };
  };
  heroImgs?: {
    firstImageType?: ('upload' | 'url') | null;
    firstImageUpload?: any;
    firstImageUrl?: string | null;
    secondImageType?: ('upload' | 'url') | null;
    secondImageUpload?: any;
    secondImageUrl?: string | null;
    showGradient?: boolean | null;
  };
}

export const HeroTemplate: React.FC<HeroTemplateProps> = (props) => {
  const {
    heroTemplateHeading = "Agents that do the work <br /> Approvals that keep you safe.",
    heroTemplateSubheading = "Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.",
    heroPrimBtn = { 
      text: "Start your free trial", 
      link: { type: 'custom', url: '#' }
    },
    heroSecBtn = { 
      text: "View role based demos", 
      link: { type: 'custom', url: '#' }
    },
    heroImgs = {
      firstImageType: 'url',
      firstImageUrl: "https://assets.aceternity.com/screenshots/4.jpg",
      secondImageType: 'url',
      secondImageUrl: "https://assets.aceternity.com/screenshots/1.jpg",
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
    (heroImgs?.firstImageType as 'upload' | 'url') || 'url',
    heroImgs?.firstImageUpload,
    heroImgs?.firstImageUrl || undefined
  );

  let secondImageSrc = getImageSrc(
    (heroImgs?.secondImageType as 'upload' | 'url') || 'url',
    heroImgs?.secondImageUpload,
    heroImgs?.secondImageUrl || undefined
  );

  // Defaults diferentes siempre
  const defaultFirst = "https://assets.aceternity.com/screenshots/4.jpg";
  const defaultSecond = "https://assets.aceternity.com/screenshots/1.jpg";

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
    console.warn('HeroTemplate: Ambas imágenes tienen la misma URL, forzando diferentes:', firstImageSrc);
    // Forzar siempre defaults diferentes
    firstImageSrc = defaultFirst;
    secondImageSrc = defaultSecond;
  }

  // Debug: Verificar URLs de imágenes
  if (typeof window !== 'undefined') {
    console.log('HeroTemplate - URLs originales:', { 
      first: heroImgs?.firstImageUrl, 
      second: heroImgs?.secondImageUrl 
    });
    console.log('HeroTemplate - URLs finales:', { 
      firstImageSrc, 
      secondImageSrc 
    });
    console.log('HeroTemplate - Images are different:', firstImageSrc !== secondImageSrc);
  }
  return (
    <section className="template-container template-container-wrapper pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          <Heading as="h1" className="template-fade-in text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tight">
            <span dangerouslySetInnerHTML={{ __html: heroTemplateHeading || "Agents that do the work <br /> Approvals that keep you safe." }} />
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          <Subheading className="py-8 template-slide-up text-base md:text-lg lg:text-xl leading-relaxed whitespace-normal">
            {heroTemplateSubheading || "Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work."}
          </Subheading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 template-slide-up relative z-10">
            <Button className="template-button primary shadow-brand" asChild>
              <CMSLink {...(heroPrimBtn?.link || { type: 'custom', url: '#' })}>
                {heroPrimBtn?.text}
              </CMSLink>
            </Button>
            <Button className="template-button outline" asChild variant="outline">
              <CMSLink {...(heroSecBtn?.link || { type: 'custom', url: '#' })}>
                {heroSecBtn?.text}
              </CMSLink>
            </Button>
          </div>
        </div>
        
        <LandingImages 
          firstImageSrc={firstImageSrc}
          secondImageSrc={secondImageSrc}
          showGradient={heroImgs?.showGradient ?? true}
        />
      </Container>
      <GradientDivider />
    </section>
  );
};
