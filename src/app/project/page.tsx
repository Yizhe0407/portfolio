import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import ProjectsSection from "./_components/ProjectsSection";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const description =
  "Browse selected projects by Liao Yizhe, featuring full-stack builds, UI experiments, and end-to-end product work.";

export const metadata: Metadata = {
  title: "Project",
  description,
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: `Project | ${siteConfig.name}`,
    description,
    url: "/project",
  },
  twitter: {
    title: `Project | ${siteConfig.name}`,
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
      name: "Projects",
      item: `${siteConfig.url}/project`,
    },
  ],
};

export default function Project() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="relative pt-28">
        <PageDivider />

        <SectionContainer className="flex flex-col gap-10 sm:gap-12">
          <section className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Project
            </h1>
            <div className="space-y-4 text-sm leading-7 text-zinc-500 sm:text-base">
              <p>
                A collection of my technical explorations and projects. I enjoy
                transforming ideas into products—from UI design to development—and
                I’m always learning to solve life’s problems with code.
              </p>
            </div>
          </section>

          <ProjectsSection />
        </SectionContainer>
      </main>
    </div>
  );
}
