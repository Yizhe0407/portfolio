import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export default function Container({
  noPadding = false,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  noPadding?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[min(370px,100%_-_1.25rem)] sm:max-w-[616px] lg:max-w-[1052px] z-10",
        noPadding ? "" : "px-6 sm:px-10",
        className
      )}
      {...props}
    />
  );
}
