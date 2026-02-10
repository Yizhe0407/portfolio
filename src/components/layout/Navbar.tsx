"use client";

import { House } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const activeIndex = navLinks.findIndex((link) => isActive(link.href));
  const indicatorIndex = activeIndex < 0 ? 0 : activeIndex;
  const hasIndicator = activeIndex >= 0;

  const linkClassName = (href: string) =>
    cn(
      "relative z-10 flex items-center justify-center px-3 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-900",
      isActive(href) && "text-zinc-900"
    );

  return (
    <div className="flex w-92.5 sm:w-95 mx-auto items-center h-18 border rounded-3xl px-5 sm:px-6 py-4 bg-white/95">
      <div className="flex w-full items-center">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={cn(
              "flex h-11 w-11 items-center justify-center translate-x-0.5 rounded-full transition",
              isActive("/")
                ? "bg-zinc-900 text-white"
                : "text-zinc-700 hover:bg-zinc-100"
            )}
          >
            <House size={20} strokeWidth={2.5} />
          </Link>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div
          className="relative flex flex-1 items-center justify-center font-medium"
          style={
            {
              "--active-index": activeIndex,
            } as React.CSSProperties
          }
        >
          <div className="relative grid w-full max-w-sm grid-cols-3">
            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-1.5 h-0.5 rounded-full bg-zinc-900 transition-[left,opacity] duration-200 ease-out",
                !hasIndicator && "opacity-0 transition-opacity"
              )}
              style={{
                width: "calc((100% / 3) * 0.6)",
                left: `calc((100% / 3) * (${indicatorIndex} + 0.2))`,
              }}
            />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={linkClassName(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
