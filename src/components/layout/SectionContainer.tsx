import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function SectionContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[370px] py-[40px] sm:max-w-[524px] sm:py-[60px] lg:max-w-[774px] lg:py-[80px]",
        className
      )}
      {...props}
    />
  );
}
