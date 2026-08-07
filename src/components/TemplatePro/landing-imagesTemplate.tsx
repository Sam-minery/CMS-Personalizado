"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export const LandingImages = ({
  firstImageSrc = "https://assets.aceternity.com/screenshots/4.jpg",
  secondImageSrc = "https://assets.aceternity.com/screenshots/1.jpg",
  showGradient = true,
}) => {
  return (
    <div className="relative" style={{ minHeight: '600px', paddingBottom: '100px' }}>
      <div className="relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-20 perspective-distant translate-x-10 md:translate-x-28" style={{ height: '500px' }}>
        {/* Primera imagen - fondo */}
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="perspective-[4000px] shadow-2xl"
          style={{ 
            zIndex: 1,
            position: 'absolute',
            top: '40px',
            left: '-20px',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={firstImageSrc}
            alt="Demo 1 for agenforce template"
            height={1080}
            width={1920}
            draggable={false}
            className={cn(
              "absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-xl select-none pointer-events-none object-cover"
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
              objectPosition: 'top left',
            }}
            unoptimized={firstImageSrc.startsWith('http')}
          />
        </motion.div>

        {/* Segunda imagen - superpuesta */}
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
          viewport={{
            once: true,
          }}
          className="perspective-[4000px] shadow-2xl"
          style={{
            zIndex: 2,
            position: 'absolute',
            top: '-60px',
            left: '40px',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={secondImageSrc}
            alt="Demo 2 for agenforce template"
            height={1080}
            width={1920}
            draggable={false}
            className={cn(
              "absolute inset-0 -translate-x-10 rounded-lg mask-r-from-50% mask-b-from-50% shadow-xl select-none pointer-events-none object-cover"
            )}
            style={{
              transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
              objectPosition: 'top left',
            }}
            unoptimized={secondImageSrc.startsWith('http')}
          />
        </motion.div>
      </div>
      {showGradient && (
        <div
          className="absolute inset-0 pointer-events-none overflow-visible"
          style={{
            zIndex: 10,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            background: `
              linear-gradient(to top, 
                transparent 0%, 
                transparent 20%, 
                hsl(var(--background) / 0.8) 25%, 
                hsl(var(--background) / 0.95) 28%, 
                hsl(var(--background)) 30%, 
                hsl(var(--background)) 100%
              ),
              linear-gradient(to right, 
                transparent 0%, 
                transparent 25%, 
                hsl(var(--background) / 0.4) 35%, 
                hsl(var(--background) / 0.7) 45%, 
                hsl(var(--background) / 0.9) 55%, 
                hsl(var(--background)) 65%, 
                hsl(var(--background)) 100%
              )
            `
          }}
        ></div>
      )}
    </div>
  );
};
