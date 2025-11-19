'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";
import type { Media as MediaType } from '@/payload-types'

type ProjectProps = {
  title: string;
  description: string;
  image: string | MediaType;
  url: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio1 = (props: Portfolio1Props) => {
  const { tagline, heading, description, projects, button } = {
    ...Portfolio1Defaults,
    ...props,
  };
  
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const firstProject = projects[0];
  const additionalProjects = projects.slice(1);
  
  const toggleProjects = () => {
    setShowAllProjects(!showAllProjects);
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </header>
        
        {/* Primer proyecto siempre visible */}
        <div className="max-w-6xl mx-auto mb-8">
          <Project {...firstProject} />
        </div>
        
        {/* Proyectos adicionales (colapsables) */}
        {showAllProjects && additionalProjects.length > 0 && (
          <div className="max-w-6xl mx-auto mb-8">
            <div className="space-y-12">
              {additionalProjects.map((project, index) => (
                <Project key={index + 1} {...project} />
              ))}
            </div>
          </div>
        )}
        
        <footer className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button {...button} onClick={toggleProjects} className="flex items-center gap-2">
            {isExpanded ? 'Ver menos proyectos' : `Ver ${additionalProjects.length} proyecto${additionalProjects.length > 1 ? 's' : ''} más`}
            {isExpanded ? <RxChevronDown /> : <RxChevronRight />}
          </Button>
        </footer>
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({ title, description, image, url, button }) => {
  // Función para obtener la URL de la imagen desde el objeto Media
  const getImageSrc = (imageItem: string | MediaType): string => {
    if (typeof imageItem === 'string') {
      return imageItem
    }
    if (typeof imageItem === 'object' && imageItem?.url) {
      return imageItem.url
    }
    return ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (imageItem: string | MediaType): string => {
    if (typeof imageItem === 'object' && imageItem?.alt) {
      return imageItem.alt
    }
    return title || 'Project image'
  }

  const imageSrc = getImageSrc(image)
  const imageAlt = getImageAlt(image)

  return (
    <article className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        {imageSrc && (
          <a href={url}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={700}
              className="w-full max-h-[600px] lg:max-h-[700px] object-contain mx-auto"
            />
          </a>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="w-full lg:w-2/3">
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            <a href={url} className="hover:text-gray-600 transition-colors">{title}</a>
          </h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        <div className="w-full lg:w-1/3 flex justify-end lg:justify-start">
          <Button {...button} asChild>
            <a href={url}>{button.title}</a>
          </Button>
        </div>
      </div>
    </article>
  )
};

const project = {
  title: "Project name here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
  url: "#",
  button: {
    title: "View project",
    variant: "link" as const,
    size: "link" as const,
    iconRight: <RxChevronRight />,
  },
};

export const Portfolio1Defaults: Props = {
  tagline: "Portfolio",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  projects: [project, project],
  button: {
    title: "View all",
    variant: "secondary" as const,
    size: "primary" as const,
  },
};
