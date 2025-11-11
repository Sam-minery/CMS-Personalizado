"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utilities/ui";

type Card = {
  id: number;
  content: React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  // Memoizar las tarjetas para evitar re-renders innecesarios
  const memoizedCards = useMemo(() => cards, [cards]);

  const handleClick = (card: Card) => {
    if (selected?.id === card.id) {
      setSelected(null);
    } else {
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      <AnimatePresence>
        {selected && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black z-40"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
      {memoizedCards.map((card) => {
        const isSelected = selected?.id === card.id;
        return (
          <motion.div
            key={card.id}
            className={cn("relative", card.className)}
            layout
            initial={false}
            animate={{
              opacity: selected && !isSelected ? 0.3 : 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              layout: {
                duration: 0,
              },
            }}
          >
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                "relative overflow-hidden rounded-xl bg-white cursor-pointer",
                "h-[400px] md:h-[500px] w-full"
              )}
              layoutId={isSelected ? undefined : `card-${card.id}`}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                layout: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              }}
              style={{
                opacity: isSelected ? 0 : 1,
                pointerEvents: isSelected ? "none" : "auto",
              }}
            >
              <ImageComponent card={card} isSelected={isSelected} />
            </motion.div>
          </motion.div>
        );
      })}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={`selected-${selected.id}`}
            layoutId={`card-${selected.id}`}
            onClick={() => handleClick(selected)}
            className="fixed inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col cursor-pointer"
            initial={false}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              layout: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative overflow-hidden rounded-xl bg-white w-full h-full">
              <motion.img
                layoutId={`image-${selected.id}-image`}
                src={selected.thumbnail}
                height="500"
                width="500"
                className="object-cover absolute inset-0 h-full w-full"
                alt="thumbnail"
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
              <SelectedCard selected={selected} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({ card, isSelected = false }: { card: Card; isSelected?: boolean }) => {
  return (
    <motion.img
      layoutId={isSelected ? undefined : `image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className="object-cover absolute inset-0 h-full w-full"
      alt="thumbnail"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  if (!selected) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected.content}
      </motion.div>
    </motion.div>
  );
};
