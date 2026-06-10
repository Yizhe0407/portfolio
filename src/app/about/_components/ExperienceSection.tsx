import { Badge } from "@/components/ui/badge";
import { resumeExperience } from "@/data/resume";

export default function ExperienceSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
        Experience
      </h2>

      <div className="mt-5 flex flex-col gap-5">
        {resumeExperience.map((experience) => (
          <article key={experience.role}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-zinc-900">
                  {experience.role}
                </p>
                <p className="text-sm text-zinc-500">{experience.org}</p>
              </div>
              <Badge variant="muted">{experience.period}</Badge>
            </div>
            <div className="mt-3 flex flex-col gap-2.5 text-sm leading-6 text-zinc-600">
              {experience.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span className="mt-2 h-[7px] w-[7px] shrink-0 rounded-[2px] border-[1.5px] border-zinc-400 bg-white" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
