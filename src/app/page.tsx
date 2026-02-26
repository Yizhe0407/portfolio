import Image from "next/image";
import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import Container from "@/components/layout/Container";
import HeroCarousel from "./_components/HeroCarousel";
import LatestProjects from "./_components/LatestProjects";
import HeroSocialLinks from "./_components/HeroSocialLinks";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { socialLinks } from "@/lib/social-links";
import { pacifico } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { resumeProfile } from "@/data/resume";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resumeProfile.name,
  url: siteConfig.url,
  jobTitle: resumeProfile.title,
  description: siteConfig.description,
  email: resumeProfile.email,
  image: new URL(siteConfig.ogImage, siteConfig.url).toString(),
  sameAs: socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("http")),
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="relative pt-28">
        <PageDivider />

        <SectionContainer className="flex flex-col">
          {/* Hero Content */}
          <AnimatedSection>
            <section className="relative z-10 flex flex-col items-start gap-7">
              <div className="relative h-33 w-33 overflow-hidden rounded-full border border-zinc-200 bg-white">
                <Image
                  src="/avatar.png"
                  alt="Liao Yizhe avatar"
                  fill
                  priority
                  sizes="132px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <h1
                  className={`text-[34px] font-semibold tracking-tight text-zinc-900 sm:text-[40px] ${pacifico.className}`}
                >
                  Hey, I&apos;m Liao Yizhe.
                  <br />
                  Full-Stack Developer
                </h1>
                <p className="max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">
                  Building end-to-end solutions with modern tech stacks. From
                  database architecture to seamless user interfaces.
                </p>
              </div>

              <HeroSocialLinks />
            </section>
          </AnimatedSection>
        </SectionContainer>

        <AnimatedSection delay={0.1}>
          <Container noPadding>
            {/* Hero Slider */}
            <section className="relative">
              <HeroCarousel />
            </section>
          </Container>
        </AnimatedSection>

        <PageDivider />

        <AnimatedSection>
          <SectionContainer className="flex flex-col gap-10 sm:gap-12">
            <LatestProjects />
          </SectionContainer>
        </AnimatedSection>
      </main>
    </div>
  );
}
