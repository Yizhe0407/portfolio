"use client";

import { Check } from "lucide-react";
import { socialIconButtonVariants } from "@/components/ui/SocialIconButton";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { socialLinks } from "@/lib/social-links";

export default function HeroSocialLinks() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map(({ label, href, icon: Icon }) => {
        if (href.startsWith("mailto:")) {
          const email = href.replace("mailto:", "");
          return (
            <button
              key={label}
              type="button"
              onClick={() => copy(email)}
              aria-label={copied ? "Email copied!" : `Copy ${label}`}
              title={copied ? "Copied!" : label}
              className={socialIconButtonVariants({ className: "relative" })}
            >
              {copied ? (
                <Check size={18} strokeWidth={1.75} />
              ) : (
                <Icon size={18} strokeWidth={1.75} />
              )}
              {copied && (
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
            className={socialIconButtonVariants()}
          >
            <Icon size={18} strokeWidth={1.75} />
          </a>
        );
      })}
    </div>
  );
}
