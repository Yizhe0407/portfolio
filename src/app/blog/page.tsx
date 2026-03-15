import type { Metadata } from "next";

import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site";

const description =
  "A writing space for development notes, project breakdowns, and build logs. Content is currently under construction.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description,
    url: "/blog",
  },
  twitter: {
    title: `Blog | ${siteConfig.name}`,
    description,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteConfig.url}/blog`,
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="relative pt-28">
        <PageDivider />

        <SectionContainer className="flex flex-col">
          <AnimatedSection>
            <section className="space-y-4 py-8 sm:py-12">
              <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
                Blog
              </h1>
              <p className="text-sm leading-7 text-zinc-500 sm:text-base">
                施工中，之後會在這裡更新技術筆記與專案文章。
              </p>
            </section>
          </AnimatedSection>
        </SectionContainer>
      </main>
    </div>
  );
}
