"use client";

import { FileUser } from "lucide-react";

export default function ViewCVButton() {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
    >
      CV
      <FileUser size={16} />
    </a>
  );
}
