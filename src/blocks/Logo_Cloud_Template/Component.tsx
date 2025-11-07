"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { Media as MediaType } from "@/payload-types";

type LogoItem = {
  title: string;
  useMedia?: boolean;
  media?: MediaType | string;
  src?: string;
  alt?: string;
};

type Props = {
  heading?: string;
  logos?: LogoItem[];
};

export type LogoCloudTemplateProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LogoCloudTemplate: React.FC<LogoCloudTemplateProps> = (props) => {
  const { heading, logos = [] } = {
    ...LogoCloudTemplateDefaults,
    ...props,
  };

  return (
    <section className="pb-10 md:pb-10">
      {heading && (
        <h2 className="text-neutral-600 font-medium dark:text-neutral-400 text-lg text-center max-w-xl mx-auto">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-x-4 gap-y-8 mt-10 max-w-xl mx-auto">
        {logos.map((logo, index) => (
          <motion.div
            initial={{
              y: -10,
              opacity: 0,
              filter: "blur(10px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            key={logo.title || index}
          >
            {logo.useMedia && logo.media && typeof logo.media === 'object' ? (
              <Media
                resource={logo.media}
                alt={logo.alt || logo.title || "Logo"}
                imgClassName="size-20 object-contain mx-auto dark:filter dark:invert"
              />
            ) : logo.src ? (
              <Image
                src={logo.src}
                width={100}
                height={100}
                alt={logo.alt || logo.title || "Logo"}
                className="size-20 object-contain mx-auto dark:filter dark:invert"
              />
            ) : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const LogoCloudTemplateDefaults: Props = {
  heading: "Trusted by modern operators across industries. From pilot to scale without chaos.",
  logos: [
    {
      title: "Open AI",
      useMedia: false,
      src: "https://assets.aceternity.com/logos/openai.png",
      alt: "Open AI",
    },
    {
      title: "Hello Patient",
      useMedia: false,
      src: "https://assets.aceternity.com/logos/hello-patient.png",
      alt: "Hello Patient",
    },
    {
      title: "Granola",
      useMedia: false,
      src: "https://assets.aceternity.com/logos/granola.png",
      alt: "Granola",
    },
    {
      title: "Character AI",
      useMedia: false,
      src: "https://assets.aceternity.com/logos/characterai.png",
      alt: "Character AI",
    },
    {
      title: "Oracle",
      useMedia: false,
      src: "https://assets.aceternity.com/logos/oracle.png",
      alt: "Oracle",
    },
    {
      title: "Portola",
      useMedia: false,
      src: "https://assets.aceternity.com/logos/portola.png",
      alt: "Portola",
    },
  ],
};

