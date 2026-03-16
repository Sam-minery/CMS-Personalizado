import { cn } from "@/lib/utils";
import React from "react";
import { CMSLink } from "@/components/Link";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-l mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardCTA = ({
  className,
  children,
  link,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
}) => {
  const buttonContent = (
    <div
      className={cn(
        "size-5 md:size-10 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center active:scale-[0.98] transition duration-200",
        className
      )}
    >
      {children}
    </div>
  );

  if (link) {
    return (
      <CMSLink {...link} appearance="inline" className="inline-flex">
        {buttonContent}
      </CMSLink>
    );
  }

  return buttonContent;
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-lg md:text-2xl font-bold font-display", className)}>
      {children}
    </h3>
  );
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative perspective-distant overflow-hidden",
        className
      )}
      style={{
        minHeight: '45vh',
        height: '45vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};