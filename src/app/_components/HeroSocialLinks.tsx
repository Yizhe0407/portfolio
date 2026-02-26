"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { socialLinks } from "@/lib/social-links";

export default function HeroSocialLinks() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleEmailCopy = async () => {
    const emailLink = socialLinks.find((l) => l.href.startsWith("mailto:"));
    if (!emailLink) return;
    const email = emailLink.href.replace("mailto:", "");
    await navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map(({ label, href, icon: Icon }) => {
        if (href.startsWith("mailto:")) {
          return (
            <button
              key={label}
              type="button"
              onClick={handleEmailCopy}
              aria-label={copiedEmail ? "Email copied!" : `Copy ${label}`}
              title={copiedEmail ? "Copied!" : label}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-400 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:text-zinc-900"
            >
              {copiedEmail ? (
                <Check size={18} strokeWidth={1.75} />
              ) : (
                <Icon size={18} strokeWidth={1.75} />
              )}
              {copiedEmail && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white">
                  Copied!
                </span>
              )}
            </button>
          );
        }
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-400 bg-white text-zinc-700 transition hover:-translate-y-0.5 hover:text-zinc-900"
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
