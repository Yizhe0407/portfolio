"use client";

import { Check, Copy } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface CopyFieldProps {
  value: string;
}

export default function CopyField({ value }: CopyFieldProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <span className="group flex items-center gap-1.5">
      <span>{value}</span>
      <button
        type="button"
        onClick={() => copy(value)}
        title={copied ? "Copied!" : "Copy"}
        className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100"
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
    </span>
  );
}
