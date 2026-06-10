import { socialLinks } from "@/lib/social-links";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center w-full pb-[env(safe-area-inset-bottom)]">
        <nav aria-label="Social links" className="flex items-center justify-center gap-1 py-3.5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center transition hover:opacity-70"
            >
              <Icon size={24} strokeWidth={2.25} />
            </a>
          ))}
        </nav>
        <p className="text-base p-3 text-zinc-400">
          Copyright © {new Date().getFullYear()} Liao Yizhe - All rights reserved
        </p>
    </footer>
  );
}
