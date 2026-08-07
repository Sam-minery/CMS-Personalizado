"use client";

import {
  CogIcon,
  ErrorIcon,
  FileIcon,
  HubspotIcon,
  SalesforceIcon,
  SheetsIcon,
  SlackIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import {
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandSlack,
  IconCircleDashedCheck,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { Media } from "@/components/Media";
import type { Media as MediaType } from "@/payload-types";

interface SkeletonTwoProps {
  logo?: MediaType | string | null;
}

export const SkeletonTwo = ({ logo }: SkeletonTwoProps) => {
  return (
    <div
      className="flex-1 rounded-t-3xl gap-2 flex items-center justify-center w-full h-full absolute inset-0 p-2"
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center" style={{ 
        position: 'relative',
        transform: 'none',
        transformOrigin: 'center center',
      }}>
        {/* Círculos de fondo - centrados */}
        <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-60 bg-neutral-100/80 z-[9] dark:bg-neutral-800/80" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', margin: 0 }}></Circle>
        <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-80 bg-neutral-100/60 z-[8] dark:bg-neutral-800/60" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', margin: 0 }}></Circle>
        <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-100 bg-neutral-100/40 z-[7] dark:bg-neutral-800/40" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', margin: 0 }}></Circle>
        <Circle className="shadow border-neutral-100 dark:border-neutral-700 size-120 bg-neutral-100/20 z-[6] dark:bg-neutral-800/20" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', margin: 0 }}></Circle>
        
        {/* Círculo central con logo - centrado */}
        <Circle className="flex items-center justify-center border-neutral-200 dark:border-neutral-700 shadow-sm z-[10]" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', margin: 0 }}>
          {logo ? (
            <div className="size-10 flex items-center justify-center relative z-[11]">
              <Media resource={logo} className="size-10 object-contain" />
            </div>
          ) : (
            <div className="size-10 bg-neutral-300 dark:bg-neutral-600 rounded-full relative z-[11]" />
          )}
        </Circle>

        {/* Elementos orbitando */}
        <RevolvingCard className="[--initial-position:0deg] [--translate-position:100px] [--orbit-duration:10s] z-[11]">
          <IconBrandSlack className="size-8 text-current" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:80deg] [--translate-position:120px] [--orbit-duration:20s] z-[11]">
          <IconBrandMeta className="size-8 text-blue-500" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:140deg] [--translate-position:140px] [--orbit-duration:15s] z-[11]">
          <IconBrandInstagram className="size-8 text-red-500" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:240deg] [--translate-position:160px] [--orbit-duration:25s] z-[11]">
          <SheetsIcon className="size-8 text-current" />
        </RevolvingCard>

        <RevolvingCard className="[--initial-position:20deg] [--translate-position:150px] [--orbit-duration:30s] size-auto ring-0 shadow-none bg-transparent w-60 z-[11]" style={{ marginLeft: '-120px', marginTop: '-20px' }}>
          <SkeletonCard
            className="relative max-w-[90%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Campaign Planner"
            description="Creates clear, ready-to-use campaign briefs using product info."
          />
        </RevolvingCard>

        <RevolvingCard className="[--initial-position:60deg] [--translate-position:130px] [--orbit-duration:20s] size-auto ring-0 shadow-none bg-transparent w-60 z-[11]" style={{ marginLeft: '-120px', marginTop: '-20px' }}>
          <SkeletonCard
            className="relative max-w-[90%] z-30 bg-white dark:bg-neutral-800"
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Ready made solutions"
          />
        </RevolvingCard>
      </div>
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-transparent mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-xs font-normal text-black dark:text-white">
          {title}
        </p>
      </div>
      {description && (
        <p className="text-[10px] text-neutral-400 dark:text-neutral-400 font-normal mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

const RevolvingCard = ({
  className,
  children,
  style,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  // Extraer las variables CSS de la className
  const orbitDuration = className?.match(/\[--orbit-duration:(\d+s)\]/)?.[1] || '10s';
  const translatePosition = className?.match(/\[--translate-position:(\d+px)\]/)?.[1] || '120px';
  const initialPosition = className?.match(/\[--initial-position:(\d+deg)\]/)?.[1] || '0deg';

  const defaultStyle: React.CSSProperties = {
    left: '50%',
    top: '50%',
    marginLeft: '-20px',
    marginTop: '-20px',
    willChange: 'transform',
    transformOrigin: '50% 50%',
    animation: `orbit ${orbitDuration} linear infinite`,
    '--translate-position': translatePosition,
    '--initial-position': initialPosition,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "size-10 flex absolute items-center justify-center bg-white dark:bg-neutral-800 border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm",
        className
      )}
      style={{ ...defaultStyle, ...style }}
    >
      {children}
    </div>
  );
};

const Circle = ({
  className,
  children,
  style,
}: {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white dark:bg-neutral-800 shrink-0 border border-transparent rounded-full",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};