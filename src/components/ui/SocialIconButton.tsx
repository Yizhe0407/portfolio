import { cva } from "class-variance-authority";

/**
 * Shared "icon pill" look for social/contact links, used by the hero social
 * row and the about page profile card.
 */
export const socialIconButtonVariants = cva(
  "flex items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition hover:-translate-y-0.5 hover:text-zinc-900",
  {
    variants: {
      size: {
        default: "h-11 w-11",
        sm: "h-10 w-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
