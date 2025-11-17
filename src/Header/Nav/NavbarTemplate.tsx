"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/TemplatePro/containerTemplate";
import { CMSLink } from "@/components/Link";
import { Button } from "@/components/ui/button";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";

type LogoProps = {
  image?: any;
  text?: string | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
};

type NavLink = {
  title?: string | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
};

type ButtonLink = {
  title?: string | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
};

type Props = {
  logo: LogoProps;
  navLinks: NavLink[];
  loginButton: ButtonLink;
  signupButton: ButtonLink;
};

const LogoComponent: React.FC<LogoProps> = ({ image, text, link }) => {
  const imageUrl = image && typeof image === 'object' 
    ? (image.url || image.image?.url || '')
    : ''

  const imageWidth = image && typeof image === 'object' 
    ? (image.width || image.image?.width || 40)
    : 40

  const imageHeight = image && typeof image === 'object' 
    ? (image.height || image.image?.height || 40)
    : 40

  const logoContent = (
    <div className="flex items-center gap-2">
      {imageUrl && (
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <Image
            src={imageUrl}
            alt={image && typeof image === 'object' ? (image.alt || 'Logo') : 'Logo'}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {text && (
        <span className="text-lg md:text-xl font-bold font-display">
          {text}
        </span>
      )}
    </div>
  );

  if (link) {
    return (
      <CMSLink {...link} appearance="inline" className="flex items-center">
        {logoContent}
      </CMSLink>
    );
  }

  return logoContent;
};

export const MobileNavbar: React.FC<Props> = ({
  logo,
  navLinks,
  loginButton,
  signupButton,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex md:hidden px-4 py-2 justify-between relative">
      <LogoComponent {...logo} />
      <button onClick={() => setOpen(!open)}>
        <IconLayoutSidebar className="size-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 h-full w-full z-50 px-4 py-1.5 flex flex-col justify-between bg-white dark:bg-neutral-900"
          >
            <div>
              <div className="flex justify-between">
                <LogoComponent {...logo} />
                <button onClick={() => setOpen(false)}>
                  <IconX className="size-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6 my-10">
                {navLinks.map((item, index) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -4,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.1,
                    }}
                    key={index}
                  >
                    {item.link && (
                      <CMSLink
                        {...item.link}
                        appearance="link"
                        className="text-2xl text-neutral-600 dark:text-neutral-400 font-medium"
                      >
                        {item.title}
                      </CMSLink>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-end gap-4">
                {loginButton.link && (
                  <CMSLink
                    {...loginButton.link}
                    appearance="link"
                    className="text-sm px-4 inline-block py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
                  >
                    {loginButton.title || "Login"}
                  </CMSLink>
                )}
                {signupButton.link && (
                  <Button asChild>
                    <CMSLink {...signupButton.link} appearance="default">
                      {signupButton.title || "Signup"}
                    </CMSLink>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const DesktopNavbar: React.FC<Props> = ({
  logo,
  navLinks,
  loginButton,
  signupButton,
}) => {
  return (
    <Container className="py-4 items-center justify-between hidden lg:flex">
      <LogoComponent {...logo} />
      <div className="flex items-center gap-10">
        {navLinks.map((item, index) => (
          <React.Fragment key={index}>
            {item.link && (
              <CMSLink
                {...item.link}
                appearance="link"
                className="text-sm text-neutral-600 dark:text-neutral-400 font-medium"
              >
                {item.title}
              </CMSLink>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {loginButton.link && (
          <CMSLink
            {...loginButton.link}
            appearance="link"
            className="text-sm px-4 inline-block py-2 rounded-md text-neutral-600 dark:text-neutral-400 font-medium"
          >
            {loginButton.title || "Login"}
          </CMSLink>
        )}
        {signupButton.link && (
          <Button asChild>
            <CMSLink {...signupButton.link} appearance="default">
              {signupButton.title || "Signup"}
            </CMSLink>
          </Button>
        )}
      </div>
    </Container>
  );
};

export const NavbarTemplate: React.FC<Props> = (props) => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNavbar {...props} />
      <MobileNavbar {...props} />
    </div>
  );
};

