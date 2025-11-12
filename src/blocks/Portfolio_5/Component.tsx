'use client'

import React, { useState } from 'react'
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight, RxChevronDown } from "react-icons/rx";
import { Media } from '@/components/Media'
import type { Media as MediaType } from '@/payload-types'

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  image: string | MediaType;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio5 = (props: Portfolio5Props) => {
  const { tagline, heading, description, projects, button } = {
    ...Portfolio5Defaults,
    ...props,
  };
  
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const firstProject = projects[0];
  const secondProject = projects[1];
  const additionalProjects = projects.slice(2);
  
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
        
        {/* Proyectos visibles */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12 mb-8">
          {/* Primer proyecto siempre visible */}
          <Project {...firstProject} />
          
          {/* Segundo proyecto - siempre visible si existe */}
          {secondProject && <Project {...secondProject} />}
          
          {/* Proyectos adicionales (colapsables) - solo se muestran cuando está expandido */}
          {showAllProjects && additionalProjects.length > 0 && 
            additionalProjects.map((project, index) => (
              <Project key={index + 2} {...project} />
            ))
          }
        </div>
        
        {/* Solo mostrar el botón si hay más de 2 proyectos */}
        {projects.length > 2 && (
          <footer className="mt-12 flex justify-center md:mt-18 lg:mt-20">
            <Button {...button} onClick={toggleProjects} className="flex items-center gap-2">
              {isExpanded ? 'Ver menos proyectos' : 'Ver todos los proyectos'}
              {isExpanded ? <RxChevronDown /> : <RxChevronRight />}
            </Button>
          </footer>
        )}
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({ title, description, image, url, button, tags }) => {
  const getImageAlt = (image: string | MediaType): string => {
    if (typeof image === 'object' && image?.alt) {
      return image.alt
    }
    return title || 'Project image'
  }

  return (
    <article>
      <div className="mb-5 md:mb-6">
        <a href={url}>
          <Media 
            resource={image} 
            alt={getImageAlt(image)}
            className="w-full h-64 object-cover"
            imgClassName="w-full h-64 object-cover"
          />
        </a>
      </div>
      <h3 className="mb-2 text-xl font-bold md:text-2xl">
        <a href={url} className="hover:text-gray-600 transition-colors">{title}</a>
      </h3>
      <p className="text-gray-600">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
        {tags.map((tag, index) => (
          <li key={index} className="flex">
            <a href={tag.url} className="bg-gray-100 px-2 py-1 text-sm font-semibold hover:bg-gray-200 transition-colors">
              {tag.label}
            </a>
          </li>
        ))}
      </ul>
      <Button {...button} asChild className="mt-5 md:mt-6">
        <a href={url}>{button.title}</a>
      </Button>
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
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};

export const Portfolio5Defaults: Props = {
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
