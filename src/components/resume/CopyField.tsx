"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyFieldProps {
  value: string;
}

export default function CopyField({ value }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="group flex items-center gap-1.5">
      <span>{value}</span>
      <button
        type="button"
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy"}
        className="text-zinc-400 opacity-0 transition-opacity group-hover:opacity-100"
      >
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </button>
    </span>
  );
}
