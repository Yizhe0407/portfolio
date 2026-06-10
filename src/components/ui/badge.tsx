import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center whitespace-nowrap rounded-full border border-zinc-200 font-semibold",
  {
    variants: {
      variant: {
        default: "bg-white text-zinc-700",
        muted: "bg-zinc-50 text-zinc-500",
        emerald: "border-emerald-300 bg-emerald-50 text-emerald-700",
      },
      size: {
        default: "px-3 py-1 text-xs",
        sm: "px-2.5 py-[3px] text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
