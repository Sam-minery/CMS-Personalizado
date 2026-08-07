"use client";

import { cn } from "@/utilities/ui";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  cardClassName,
}: {
  items: {
    id?: string;
    image?: string;
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  cardClassName?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Esperar a que los elementos estén en el DOM
    const timer = setTimeout(() => {
      addAnimation();
    }, 0);

    return () => {
      clearTimeout(timer);
      // Limpiar elementos duplicados al desmontar
      if (scrollerRef.current) {
        const children = Array.from(scrollerRef.current.children);
        const originalCount = items.length;
        // Remover solo los elementos duplicados (los que están después de los originales)
        children.slice(originalCount).forEach((child) => {
          child.remove();
        });
      }
    };
  }, [items.length, direction, speed]);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Limpiar duplicados previos si existen
      const children = Array.from(scrollerRef.current.children);
      const originalCount = items.length;
      children.slice(originalCount).forEach((child) => {
        child.remove();
      });

      // Esperar a que los elementos estén completamente renderizados
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (scrollerRef.current && containerRef.current) {
            // Calcular el ancho total del contenido original
            const scrollerContent = Array.from(scrollerRef.current.children) as HTMLElement[];
            if (scrollerContent.length === 0) return;

            // Calcular el ancho total incluyendo gaps
            let totalWidth = 0;
            scrollerContent.forEach((item) => {
              const rect = item.getBoundingClientRect();
              totalWidth += rect.width;
            });
            // Agregar los gaps (gap-4 = 1rem = 16px por cada gap)
            const gapWidth = (scrollerContent.length - 1) * 16; // gap-4 = 16px
            totalWidth += gapWidth;

            // Clonar los elementos suficientes veces para crear un loop perfecto
            // Clonamos al menos 2 veces para asegurar continuidad sin importar el número de cards
            const clonesNeeded = Math.max(2, Math.ceil((containerRef.current.offsetWidth * 2) / totalWidth) + 1);
            
            for (let i = 0; i < clonesNeeded; i++) {
              scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                if (scrollerRef.current) {
                  scrollerRef.current.appendChild(duplicatedItem);
                }
              });
            }

            // Establecer la distancia de animación basada en el ancho real del set original
            // Esto asegura que cuando la animación termine, el siguiente set esté exactamente donde estaba el primero
            containerRef.current.style.setProperty("--scroll-distance", `-${totalWidth}px`);

            getDirection();
            getSpeed();
            setStart(true);
          }
        });
      });
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "90s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => {
          const hasImage = item.image && item.image.trim() !== ''
          // El id siempre debe estar presente y ser único (generado en Component.tsx)
          // Usar el índice como fallback solo en caso extremo
          const uniqueKey = item.id || `infinite-card-fallback-${idx}`
          return (
            <li
              className={cn(
                "relative max-w-full shrink-0 rounded-2xl border border-b-0 px-8 py-6",
                hasImage 
                  ? "w-[400px] md:w-[500px] min-h-[280px]" 
                  : "w-[350px] md:w-[450px]",
                cardClassName || "border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
              )}
              key={uniqueKey}
            >
              <blockquote className="flex flex-col h-full">
                <div
                  aria-hidden="true"
                  className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                {hasImage && (
                  <div className="relative z-20 mb-4 w-full h-32 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name || 'Card image'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100 flex-grow">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                      {item.title}
                    </span>
                  </span>
                </div>
              </blockquote>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
