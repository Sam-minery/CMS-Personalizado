"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Calcular la posición relativa de cada testimonio respecto al activo
  const getTestimonialPosition = (index: number) => {
    const diff = index - active;
    const normalizedDiff = ((diff % testimonials.length) + testimonials.length) % testimonials.length;
    
    // Si es el activo, está al frente
    if (normalizedDiff === 0) {
      return { zIndex: 50, opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 };
    }
    
    // Calcular posiciones para las imágenes detrás
    const positions = [
      { zIndex: 40, opacity: 0.85, scale: 0.95, rotate: -3, x: -15, y: 10 },
      { zIndex: 30, opacity: 0.7, scale: 0.9, rotate: 2, x: 10, y: -8 },
      { zIndex: 20, opacity: 0.55, scale: 0.85, rotate: -2, x: -8, y: 12 },
      { zIndex: 10, opacity: 0.4, scale: 0.8, rotate: 1, x: 5, y: -5 },
    ];
    
    return positions[Math.min(normalizedDiff - 1, positions.length - 1)] || positions[positions.length - 1];
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 font-sans antialiased md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {/* Contenedor de imágenes apiladas */}
        <div className="relative h-[500px] w-full">
            <AnimatePresence>
            {testimonials.map((testimonial, index) => {
              const position = getTestimonialPosition(index);
              const isActive = index === active;
              
              return (
                <motion.div
                  key={`${testimonial.src}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: position.rotate,
                    x: position.x,
                    y: position.y,
                  }}
                  animate={{
                    opacity: position.opacity,
                    scale: position.scale,
                    rotate: position.rotate,
                    x: position.x,
                    y: position.y,
                    zIndex: position.zIndex,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-center"
                  style={{
                    zIndex: position.zIndex,
                  }}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className={`h-full w-full rounded-3xl object-cover object-center shadow-xl transition-all duration-300 ${
                      isActive ? 'shadow-2xl' : 'shadow-lg'
                    }`}
                  />
                </motion.div>
              );
            })}
            </AnimatePresence>
        </div>

        {/* Contenido del testimonio */}
        <div className="flex flex-col justify-center">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
              <p className="mt-2 text-base text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-neutral-300">
              {testimonials[active].quote}
            </p>
          </motion.div>

          {/* Botones de navegación */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              aria-label="Testimonio anterior"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:translate-x-[-2px] dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              aria-label="Siguiente testimonio"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:translate-x-[2px] dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
