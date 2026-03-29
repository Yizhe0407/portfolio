const fallbackUrl = "https://yizhe.dev";

export const siteConfig = {
  name: "Yizhe",
  title: "Yizhe | Portfolio",
  description:
    "Full-stack developer focused on building end-to-end products with modern web technologies, from system design to polished interfaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl,
  ogImage: "/opengraph-image",
  locale: "zh_TW",
  keywords: [
    "Yizhe",
    "Yizhe Liao",
    "Full-stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
};
