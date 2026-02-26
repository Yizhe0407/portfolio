import { socialLinks } from "@/lib/social-links";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-center w-full">
        <nav aria-label="Social links" className="flex items-center justify-center gap-6 py-6">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="transition hover:opacity-70"
            >
              <Icon size={24} strokeWidth={2.25} />
            </a>
          ))}
        </nav>
        <p className="text-base p-3 text-neutral-400">
          Copyright © {new Date().getFullYear()} Liao Yizhe - All rights reserved
        </p>
    </footer>
  );
}
