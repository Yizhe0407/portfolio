"use client";

import { House } from "lucide-react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/resume", label: "Resume" },
];

const SCROLL_THRESHOLD = 60;

export default function Navbar() {
  const pathname = usePathname();
  const yVal = useMotionValue(0);
  const opacityVal = useMotionValue(1);
  const isVisibleRef = useRef(true);
  const directionChangeY = useRef(0);
  const lastDelta = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const spring = { type: "spring", stiffness: 300, damping: 30 } as const;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (currentScrollY < 10) {
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          animate(yVal, 0, spring);
          animate(opacityVal, 1, spring);
        }
        directionChangeY.current = 0;
        lastDelta.current = 0;
        return;
      }

      // Record Y whenever direction changes
      if ((delta > 0 && lastDelta.current <= 0) || (delta < 0 && lastDelta.current >= 0)) {
        directionChangeY.current = currentScrollY;
      }
      lastDelta.current = delta;

      if (delta > 0 && isVisibleRef.current) {
        if (currentScrollY - directionChangeY.current > SCROLL_THRESHOLD) {
          isVisibleRef.current = false;
          animate(yVal, -120, spring);
          animate(opacityVal, 0, spring);
        }
      } else if (delta < 0 && !isVisibleRef.current) {
        if (directionChangeY.current - currentScrollY > SCROLL_THRESHOLD) {
          isVisibleRef.current = true;
          animate(yVal, 0, spring);
          animate(opacityVal, 1, spring);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacityVal, yVal]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      aria-label="Main navigation"
      style={{ y: yVal, opacity: opacityVal }}
      className="flex w-92.5 sm:w-95 mx-auto items-center h-18 border rounded-3xl px-5 sm:px-6 py-4 bg-white/95"
    >
      <div className="flex w-full items-center">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center translate-x-0.5 transition-colors",
              isActive("/") ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900"
            )}
          >
            <House size={20} strokeWidth={2.5} />
            {isActive("/") && (
              <motion.span
                layoutId="underline-active"
                className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-zinc-900"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="relative flex flex-1 items-center justify-center font-medium">
          <div className="relative grid w-full max-w-sm grid-cols-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative flex items-center justify-center px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900",
                  isActive(link.href) && "text-zinc-900"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="underline-active"
                    className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-zinc-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
