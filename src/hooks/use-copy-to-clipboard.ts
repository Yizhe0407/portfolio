"use client";

import { useState } from "react";

export function useCopyToClipboard(resetDelay = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
    } catch {
      // Copy failed (e.g. permissions denied or insecure context)
    }
  };

  return { copied, copy };
}
