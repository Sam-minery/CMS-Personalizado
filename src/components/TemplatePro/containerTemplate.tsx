import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("max-w-7xl px-12 md:px-20 lg:px-28 py-2 md:py-4 lg:py-6 mx-auto overflow-hidden", className)}>
      {children}
    </div>
  );
};
