import type { Metadata } from "next";

import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionDivider from "@/components/layout/SectionDivider";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProfileHero from "./_components/ProfileHero";
import InfoCards from "./_components/InfoCards";
import ExperienceSection from "./_components/ExperienceSection";
import AwardsSection from "./_components/AwardsSection";
import { buildBreadcrumbJsonLd } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const description =
  "Learn more about Liao Yizhe, including profile, experience, skills, education, and awards in one place.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description,
    url: "/about",
  },
  twitter: {
    title: `About | ${siteConfig.name}`,
    description,
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd("About", "/about");

export default function About() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="relative pt-28">
        <PageDivider />

        <SectionContainer className="flex flex-col gap-6 sm:gap-8">
          <AnimatedSection>
            <ProfileHero />
          </AnimatedSection>

          <SectionDivider />

          <AnimatedSection delay={0.08}>
            <InfoCards />
          </AnimatedSection>

          <SectionDivider />

          <AnimatedSection delay={0.14}>
            <ExperienceSection />
          </AnimatedSection>

          <SectionDivider />

          <AnimatedSection delay={0.18}>
            <AwardsSection />
          </AnimatedSection>
        </SectionContainer>
      </main>
    </div>
  );
}
