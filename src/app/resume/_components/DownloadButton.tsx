"use client";

import { useState } from "react";
import { Check, Download, Loader2 } from "lucide-react";

type State = "idle" | "loading" | "done";

export default function DownloadButton() {
  const [state, setState] = useState<State>("idle");

  const handleClick = () => {
    if (state !== "idle") return;
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
      className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
    >
      {state === "idle" && (
        <>
          Download PDF
          <Download size={16} />
        </>
      )}
      {state === "loading" && (
        <>
          Downloading…
          <Loader2 size={16} className="animate-spin" />
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
