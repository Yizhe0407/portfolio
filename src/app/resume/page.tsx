import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";
import type { Metadata } from "next";

import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import { contests } from "@/data/contests";
import { featuredProjects, projects } from "@/data/projects";
import {
  resumeEducation,
  resumeExperience,
  resumeProfile,
  resumeSkills,
} from "@/data/resume";
import { socialLinks } from "@/lib/social-links";
import { siteConfig } from "@/lib/site";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DownloadButton from "./_components/DownloadButton";
import CopyField from "./_components/CopyField";

const description =
  "View the resume of Liao Yizhe, a full-stack developer with experience in modern web development, systems, and collaboration.";

export const metadata: Metadata = {
  title: "Resume",
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${siteConfig.name}`,
    description,
    url: "/resume",
  },
  twitter: {
    title: `Resume | ${siteConfig.name}`,
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
      name: "Resume",
      item: `${siteConfig.url}/resume`,
    },
  ],
};

const selectedProjects =
  featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 2);
const cardBase =
  "rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5";

export default function Resume() {
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
          <section className="space-y-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                {resumeProfile.name}
              </p>
              <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
                Resume
              </h1>
              <p className="text-sm font-semibold text-zinc-700 sm:text-base">
                {resumeProfile.title}
              </p>
              <p className="text-sm leading-7 text-zinc-500 sm:text-base">
                {resumeProfile.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <DownloadButton />
              <a
                href={`mailto:${resumeProfile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
              >
                Contact
                <Mail size={16} />
              </a>
            </div>
          </section>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <section className={cardBase}>
              <div className="flex items-center gap-2 text-base font-semibold text-zinc-900">
                <MapPin size={16} className="text-zinc-700" />
                Profile
              </div>
              <div className="mt-3 space-y-2 text-sm text-zinc-500">
                {resumeProfile.location ? (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-zinc-400" />
                    <span>{resumeProfile.location}</span>
                  </div>
                ) : null}
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-zinc-400" />
                  <CopyField value={resumeProfile.email} />
                </div>
                {resumeProfile.phone ? (
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-zinc-400" />
                    <CopyField value={resumeProfile.phone} />
                  </div>
                ) : null}
                {resumeProfile.handle ? (
                  <div className="flex items-center gap-2">
                    <Github size={16} className="text-zinc-400" />
                    <a
                      href={`https://github.com/${resumeProfile.handle}`}
                      className="hover:text-zinc-700"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {resumeProfile.handle}
                    </a>
                  </div>
                ) : null}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 transition hover:-translate-y-0.5 hover:text-zinc-900"
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </section>

            <section className={cardBase}>
              <div className="flex items-center gap-2 text-base font-semibold text-zinc-900">
                <Sparkles size={16} className="text-zinc-700" />
                Skills
              </div>
              <div className="mt-3 space-y-3">
                {resumeSkills.map((group) => (
                  <div key={group.title} className="space-y-2">
                    <p className="text-sm font-semibold text-zinc-700">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-500"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={cardBase}>
              <div className="flex items-center gap-2 text-base font-semibold text-zinc-900">
                <GraduationCap size={16} className="text-zinc-700" />
                Education
              </div>
              <div className="mt-3 space-y-3">
                {resumeEducation.map((education) => (
                  <div key={education.school} className="space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-800">
                        {education.school}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {education.degree}
                      </p>
                      <p className="text-xs text-zinc-400">
                        {education.period}
                      </p>
                    </div>
                    {education.highlights.length > 0 ? (
                      <ul className="list-disc space-y-2 pl-5 text-xs leading-6 text-zinc-500">
                        {education.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
          <div className="space-y-5">
            <section className={cardBase}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700">
                  <BriefcaseBusiness size={18} />
                </div>
                <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                  Experience
                </h2>
              </div>

              <div className="mt-3 space-y-3">
                {resumeExperience.map((experience) => (
                  <article
                    key={experience.role}
                    className="rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-base font-semibold text-zinc-900">
                          {experience.role}
                        </p>
                        <p className="text-sm text-zinc-500">
                          {experience.org}
                        </p>
                      </div>
                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-500">
                        {experience.period}
                      </span>
                    </div>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600">
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className={cardBase}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700">
                  <Target size={18} />
                </div>
                <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                  Projects
                </h2>
              </div>

              <div className="mt-3 space-y-3">
                {selectedProjects.map((project) => (
                  <article
                    key={project.id}
                    className="rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-base font-semibold text-zinc-900">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-6 text-zinc-500">
                          {project.summary ||
                            "More details are available on the project page."}
                        </p>
                      </div>
                      <Link
                        href="/project"
                        className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
                      >
                        View
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={cardBase}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700">
                  <Award size={18} />
                </div>
                <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                  Awards & Contests
                </h2>
              </div>

              <div className="mt-3 grid gap-3">
                {contests.map((contest) => (
                  <article
                    key={`${contest.year}-${contest.title}`}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-3 sm:p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-500">
                          {contest.year}
                        </span>
                        <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
                          {contest.title}
                        </h3>
                      </div>
                      <span className="inline-flex w-fit items-center justify-self-end rounded-2xl border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 sm:px-4 sm:py-2">
                        {contest.result}
                      </span>
                    </div>
                    {contest.highlights?.length ? (
                      <div className="mt-2 grid gap-2 text-sm leading-6 text-zinc-600">
                        {contest.highlights.map((highlight) => (
                          <div key={highlight} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          </div>
          </AnimatedSection>
        </SectionContainer>
      </main>
    </div>
  );
}
