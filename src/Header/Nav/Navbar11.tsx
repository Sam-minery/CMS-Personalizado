"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { CMSLink } from '@/components/Link';

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SubMenuLink = {
  icon: ImageProps;
  title: string;
  description: string;
  url: string;
};

type NavLink = {
  title: string;
  url: string;
  subMenuLinks?: SubMenuLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar11Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar11: React.FC<Navbar11Props> = (props) => {
  const { logo, navLinks, buttons } = {
    ...Navbar11Defaults,
    ...props,
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Simple media query hook replacement
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section
      id="relume"
      className="z-[999] flex w-full items-center border-b border-gray-200 bg-white md:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full items-center justify-between lg:flex">
        <div className="grid min-h-16 grid-cols-2 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={logo.url}>
            {logo.src && (
              <Image 
                src={logo.src} 
                alt={logo.alt || 'Logo'} 
                width={150} 
                height={50} 
              />
            )}
          </a>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span
              className={`my-[3px] h-0.5 w-6 bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-2 -rotate-45' : ''
              }`}
            />
            <span
              className={`my-[3px] h-0.5 w-6 bg-black transition-all duration-300 ${
                mobileMenuOpen ? 'w-0' : ''
              }`}
            />
            <span
              className={`my-[3px] h-0.5 w-6 bg-black transition-all duration-300 ${
                mobileMenuOpen ? '-translate-y-2 rotate-45' : ''
              }`}
            />
          </button>
        </div>
        <div
          className={`overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-screen' : 'max-h-0 lg:max-h-none'
          }`}
        >
          <nav className="lg:flex lg:items-center">
            {navLinks.map((navLink, index) =>
              navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                <SubMenu
                  key={index}
                  subMenuLinks={navLink.subMenuLinks}
                  title={navLink.title}
                  isMobile={isMobile}
                />
              ) : (
                <CMSLink
                  key={index}
                  url={navLink.url}
                  appearance="link"
                  className="block py-3 text-left text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base lg:first:pt-2"
                >
                  {navLink.title}
                </CMSLink>
              ),
            )}
          </nav>
          <div className="mt-6 flex flex-col gap-4 lg:ml-4 lg:mt-0 lg:flex-row lg:items-center">
            {buttons.map((button, index) => (
              <Button key={index} className="w-full text-black" {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SubMenu = ({
  title,
  subMenuLinks,
  isMobile,
}: {
  title: string;
  subMenuLinks: SubMenuLink[];
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <div
          className={`transition-transform duration-300 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isDropdownOpen && (
        <nav
          className={`z-50 bg-white lg:absolute lg:w-80 lg:border lg:border-gray-200 lg:p-6 transition-all duration-300 ${
            isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="grid grid-cols-1 grid-rows-[max-content] gap-y-2 py-3 md:py-3 lg:gap-y-4 lg:py-0">
            {subMenuLinks.map((subMenuLink, index) => (
              <CMSLink
                key={index}
                url={subMenuLink.url}
                appearance="link"
                className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 lg:py-1"
              >
                <div>
                  {subMenuLink.icon.src && (
                    <Image
                      className="size-6"
                      src={subMenuLink.icon.src}
                      alt={subMenuLink.icon.alt || 'Icon'}
                      width={24}
                      height={24}
                    />
                  )}
                </div>
                <div className="flex flex-col items-start justify-center">
                  <p className="text-md font-semibold lg:text-base">{subMenuLink.title}</p>
                  <p className="hidden text-sm md:block">{subMenuLink.description}</p>
                </div>
              </CMSLink>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export const Navbar11Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Company logo",
  },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      subMenuLinks: [
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Icon 1",
          },
          title: "Page one",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          url: "#",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Icon 2",
          },
          title: "Page two",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          url: "#",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Icon 3",
          },
          title: "Page three",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          url: "#",
        },
        {
          icon: {
            src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
            alt: "Icon 4",
          },
          title: "Page four",
          description: "Lorem ipsum dolor sit amet consectetur elit",
          url: "#",
        },
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      size: "sm",
    },
  ],
};
