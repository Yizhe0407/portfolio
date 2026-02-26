import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import { Award } from "lucide-react";
import { contests } from "@/data/contests";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import AnimatedSection from "@/components/ui/AnimatedSection";

const description =
  "Learn more about Liao Yizhe, a full-stack developer focused on building thoughtful web experiences and solving real-world problems.";

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
      name: "About",
      item: `${siteConfig.url}/about`,
    },
  ],
};

export default function About() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="relative pt-28">
        <PageDivider />

        <AnimatedSection>
        <SectionContainer className="flex flex-col">
          <section className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              About
            </h1>
            <div className="space-y-4 text-sm leading-7 text-zinc-500 sm:text-base">
              <p>
                Hi there! I’m Yizhe, a Computer Science student at National
                Yunlin University of Science and Technology. Driven by curiosity
                and a passion for technology, I am currently focusing on
                mastering frontend and backend development. I enjoy the process
                of exploring how different technologies work together and using
                code to bring creative ideas to life.
              </p>
              <p>
                I believe that development is more than just writing code; it’s
                about solving real-world problems and creating better digital
                experiences. Whether I’m working on a web application or
                experimenting with new tools, I’m always eager to learn and take
                on new challenges. I thrive in environments where I can grow my
                skills and collaborate with others to build functional and
                meaningful projects.
              </p>
            </div>
          </section>
        </SectionContainer>
        </AnimatedSection>

        <PageDivider />

        <AnimatedSection delay={0.05}>
        <SectionContainer className="flex flex-col">
          <section className="space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                Contests
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                For me, participating in competitions is the best way to turn
                theoretical knowledge into practical experience. I enjoy
                collaborating with teams to explore how technology can solve
                specific problems within limited timeframes. These experiences
                have not only sharpened my development skills but also taught me
                how to refine my work under pressure.
              </p>
            </div>

            <div className="space-y-0">
              {contests.map((contest) => (
                <div
                  key={`${contest.year}-${contest.title}`}
                  className="border-b border-dashed border-zinc-200 py-4"
                >
                  <div className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-2 sm:grid-cols-[90px_minmax(0,1fr)_auto] sm:items-center sm:gap-6">
                    <span className="order-1 text-base font-semibold text-zinc-500 sm:text-xl">
                      {contest.year}
                    </span>
                    <span className="order-3 col-span-2 text-sm font-semibold text-zinc-800 sm:order-2 sm:col-span-1 sm:text-base">
                      {contest.title}
                    </span>
                    <span className="order-2 inline-flex w-fit items-center gap-2 justify-self-end rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700 sm:order-3 sm:px-5 sm:py-3 sm:text-sm">
                      <Award size={18} />
                      {contest.result}
                    </span>
                  </div>
                  {contest.highlights?.length ? (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-500">
                      {contest.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        </SectionContainer>
        </AnimatedSection>
      </main>
    </div>
  );
}
