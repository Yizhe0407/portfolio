"use client";

import { FileUser } from "lucide-react";

import { outlineButtonVariants } from "@/components/ui/button";

export default function ViewCVButton() {
  return (
    <a
      href="/cv.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={outlineButtonVariants()}
    >
      CV
      <FileUser size={16} />
    </a>
  );
}
