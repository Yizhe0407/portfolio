import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { outlineButtonVariants } from "@/components/ui/button";
import ViewCVButton from "@/components/resume/ViewCVButton";
import { resumeProfile } from "@/data/resume";

export default function ProfileHero() {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          {resumeProfile.name}
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          About
        </h1>
        <p className="text-sm font-semibold text-zinc-700 sm:text-base">
          {resumeProfile.title}
        </p>
      </div>

      <div className="max-w-3xl space-y-4 text-sm leading-7 text-zinc-500 sm:text-base">
        <p>{resumeProfile.summary}</p>
        <p>
          I believe that development is more than just writing code;
          it&apos;s about solving real-world problems and creating better
          digital experiences. Whether I&apos;m building a web application,
          maintaining campus infrastructure, or experimenting with new tools,
          I care about making the result practical, reliable, and clear.
        </p>
        <p>
          Competitions and hands-on operations work have become the places
          where I learned to collaborate under constraints, refine ideas
          quickly, and turn technical decisions into something usable.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <ViewCVButton />
        <a
          href={`mailto:${resumeProfile.email}`}
          className={outlineButtonVariants()}
        >
          Contact
          <Mail size={16} />
        </a>
        <Link href="/project" className={outlineButtonVariants()}>
          View Projects
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
