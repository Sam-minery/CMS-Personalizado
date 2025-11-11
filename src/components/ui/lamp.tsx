"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utilities/ui";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
  backgroundColor = 'slate-950',
  hue = 'cyan',
}: {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'slate-950' | 'zinc-950' | 'neutral-950' | 'gray-950';
  hue?: 'cyan' | 'emerald' | 'violet' | 'fuchsia' | 'sky' | 'indigo' | 'amber' | 'rose';
}) => {
  const bgClasses: Record<string, string> = {
    'slate-950': 'bg-slate-950',
    'zinc-950': 'bg-zinc-950',
    'neutral-950': 'bg-neutral-950',
    'gray-950': 'bg-gray-950',
  };

  const hueClasses: Record<string, {
    from500: string;
    to500: string;
    bg500: string;
    bg400: string;
    line400: string;
  }> = {
    cyan: { from500: 'from-cyan-500', to500: 'to-cyan-500', bg500: 'bg-cyan-500', bg400: 'bg-cyan-400', line400: 'bg-cyan-400' },
    emerald: { from500: 'from-emerald-500', to500: 'to-emerald-500', bg500: 'bg-emerald-500', bg400: 'bg-emerald-400', line400: 'bg-emerald-400' },
    violet: { from500: 'from-violet-500', to500: 'to-violet-500', bg500: 'bg-violet-500', bg400: 'bg-violet-400', line400: 'bg-violet-400' },
    fuchsia: { from500: 'from-fuchsia-500', to500: 'to-fuchsia-500', bg500: 'bg-fuchsia-500', bg400: 'bg-fuchsia-400', line400: 'bg-fuchsia-400' },
    sky: { from500: 'from-sky-500', to500: 'to-sky-500', bg500: 'bg-sky-500', bg400: 'bg-sky-400', line400: 'bg-sky-400' },
    indigo: { from500: 'from-indigo-500', to500: 'to-indigo-500', bg500: 'bg-indigo-500', bg400: 'bg-indigo-400', line400: 'bg-indigo-400' },
    amber: { from500: 'from-amber-500', to500: 'to-amber-500', bg500: 'bg-amber-500', bg400: 'bg-amber-400', line400: 'bg-amber-400' },
    rose: { from500: 'from-rose-500', to500: 'to-rose-500', bg500: 'bg-rose-500', bg400: 'bg-rose-400', line400: 'bg-rose-400' },
  };

  const bg = bgClasses[backgroundColor] || bgClasses['slate-950'];
  const hueSet = hueClasses[hue] || hueClasses['cyan'];

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        bg,
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn("absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]", hueSet.from500)}
        >
          <div className={cn("absolute  w-[100%] left-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]", bg)} />
          <div className={cn("absolute  w-40 h-[100%] left-0  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]", bg)} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={cn("absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent text-white [--conic-position:from_290deg_at_center_top]", hueSet.to500)}
        >
          <div className={cn("absolute  w-40 h-[100%] right-0  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]", bg)} />
          <div className={cn("absolute  w-[100%] right-0 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]", bg)} />
        </motion.div>
        <div className={cn("absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 blur-2xl", bg)}></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className={cn("absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl", hueSet.bg500)}></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn("absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl", hueSet.bg400)}
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn("absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem]", hueSet.line400)}
        ></motion.div>

        <div className={cn("absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] ", bg)}></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
