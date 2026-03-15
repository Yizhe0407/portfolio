"use client";

import { useState, type MouseEvent } from "react";
import { Check, Download } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type State = "idle" | "loading" | "done";

export default function DownloadButton() {
  const [state, setState] = useState<State>("idle");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (state !== "idle") {
      event.preventDefault();
      return;
    }

    setState("loading");
    setTimeout(() => {
      setState("done");
      setTimeout(() => setState("idle"), 2000);
    }, 900);
  };

  return (
    <a
      href="/resume.pdf"
      download
      onClick={handleClick}
      aria-busy={state === "loading"}
      aria-disabled={state !== "idle"}
      className={cn(
        "inline-flex min-w-[156px] items-center justify-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900",
        state !== "idle" ? "cursor-default pointer-events-none" : ""
      )}
    >
      {state === "idle" && (
        <>
          Download PDF
          <Download size={16} />
        </>
      )}
      {state === "loading" && (
        <>
          <span className="sr-only">Preparing PDF</span>
          <Skeleton className="h-4 w-20 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-sm" />
        </>
      )}
      {state === "done" && (
        <>
          Downloaded!
          <Check size={16} />
        </>
      )}
    </a>
  );
}
