import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div
      className="perspective-distant h-full w-full mask-radial-from-50% mask-r-from-50% relative"
      style={{
        perspective: '2000px',
        transformStyle: 'preserve-3d',
        transform: 'rotateZ(10deg) rotateY(-15deg) rotateX(20deg) scale(1.0) translateY(-10px)',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <SkeletonCard
        className="absolute max-w-[90%]"
        style={{ 
          zIndex: 30,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) translateX(4rem) translateY(9rem)',
        }}
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="120S" variant="danger" />}
      />
      <SkeletonCard
        className="absolute max-w-[85%]"
        style={{ 
          zIndex: 20,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) translateX(2.5rem) translateY(4rem)',
        }}
        icon={<IconExclamationCircle className="size-4" />}
        title="Issue Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="10S" variant="success" />}
      />
      <SkeletonCard
        className="absolute max-w-[80%]"
        style={{ 
          zIndex: 10,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) translateX(1rem) translateY(-0.5rem)',
        }}
        icon={<IconPrison className="size-4" />}
        title="Risk Analysis"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="40s" variant="warning" />}
      />
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  className,
  style,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] h-fit my-auto bg-white dark:bg-neutral-900 mx-auto w-full p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
      style={style}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-xs md:text-sm font-normal text-black dark:text-white">
          {title}
        </p>
        {badge}
      </div>
      <p className="text-[10px] md:text-sm text-neutral-500 dark:text-neutral-400 font-light mt-3">
        {description}
      </p>
      <div className="flex items-center gap-2 flex-wrap mt-4">
        <Tag text="Google Ads" />
        <Tag text="SaaS" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700">
      {text}
    </div>
  );
};

const Badge = ({
  variant = "success",
  text,
}: {
  variant?: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "px-1 py-0.5 rounded-full flex border items-center gap-1 w-fit",

        variant === "danger" && "bg-red-300/10 border-red-300 text-red-500",
        variant === "warning" &&
          "bg-yellow-300/10 border-yellow-300 text-yellow-500",
        variant === "success" &&
          "bg-green-300/10 border-green-300 text-green-500"
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className="size-3" />
      <p className="text-[10px] font-bold">{text}</p>
    </div>
  );
};