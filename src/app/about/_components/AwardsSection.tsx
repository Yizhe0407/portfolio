import { Fragment } from "react";

import { Badge } from "@/components/ui/badge";
import { dashedRuleStyle } from "@/components/layout/SectionDivider";
import { contests } from "@/data/contests";

const dashRuleStyle = dashedRuleStyle("rgba(212, 212, 216, 1)", 6, 8);

export default function AwardsSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
        Awards & Contests
      </h2>

      <div className="mt-5 flex flex-col gap-5">
        {contests.map((contest, index) => (
          <Fragment key={`${contest.year}-${contest.title}`}>
            {index > 0 ? <div className="h-px" style={dashRuleStyle} /> : null}
            <article>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="muted">{contest.year}</Badge>
                  <h3 className="text-sm font-semibold text-zinc-900 sm:text-base">
                    {contest.title}
                  </h3>
                </div>
                <Badge variant="emerald">{contest.result}</Badge>
              </div>
              {contest.highlights?.length ? (
                <div className="mt-3 flex flex-col gap-2.5 text-sm leading-6 text-zinc-600">
                  {contest.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <span className="mt-2 h-[7px] w-[7px] shrink-0 rounded-[2px] border-[1.5px] border-emerald-400 bg-emerald-50" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
