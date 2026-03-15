import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import { Skeleton } from "@/components/ui/skeleton";

const cardBase = "rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5";

function InfoCardSkeleton() {
  return (
    <section className={cardBase}>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-sm" />
        <Skeleton className="h-5 w-20" />
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-4 w-28" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-4 w-36" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4 rounded-sm" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-9 w-9 rounded-xl" />
        ))}
      </div>
    </section>
  );
}

function SkillCardSkeleton() {
  return (
    <section className={cardBase}>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-sm" />
        <Skeleton className="h-5 w-16" />
      </div>

      <div className="mt-3 space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, chipIndex) => (
                <Skeleton
                  key={chipIndex}
                  className="h-7 w-16 rounded-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationCardSkeleton() {
  return (
    <section className={cardBase}>
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-4 rounded-sm" />
        <Skeleton className="h-5 w-24" />
      </div>

      <div className="mt-3 space-y-4">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-[84%]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceItemSkeleton() {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-3 sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-28" />
        </div>
        <Skeleton className="h-7 w-24 rounded-full" />
      </div>
      <div className="mt-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[92%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </article>
  );
}

function ContestItemSkeleton() {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-3 sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Skeleton className="h-7 w-16 rounded-full" />
          <Skeleton className="h-5 w-44" />
        </div>
        <Skeleton className="h-8 w-28 rounded-2xl" />
      </div>
      <div className="mt-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[86%]" />
      </div>
    </article>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28" aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading about page</span>
        <PageDivider />

        <SectionContainer className="flex flex-col gap-6 sm:gap-8">
          <section className="space-y-5">
            <div className="space-y-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-5 w-48" />
            </div>

            <div className="max-w-3xl space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[96%]" />
              <Skeleton className="h-4 w-[92%]" />
              <Skeleton className="h-4 w-[84%]" />
              <Skeleton className="h-4 w-[88%]" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Skeleton className="h-10 w-40 rounded-lg" />
              <Skeleton className="h-10 w-28 rounded-lg" />
              <Skeleton className="h-10 w-36 rounded-lg" />
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCardSkeleton />
            <SkillCardSkeleton />
            <EducationCardSkeleton />
          </div>

          <section className={cardBase}>
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-2xl" />
              <Skeleton className="h-7 w-36" />
            </div>

            <div className="mt-3 space-y-3">
              <ExperienceItemSkeleton />
              <ExperienceItemSkeleton />
            </div>
          </section>

          <section className={cardBase}>
            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-9 rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-7 w-44" />
                <Skeleton className="h-4 w-full max-w-xl" />
                <Skeleton className="h-4 w-[78%] max-w-lg" />
              </div>
            </div>

            <div className="mt-3 grid gap-3">
              <ContestItemSkeleton />
              <ContestItemSkeleton />
            </div>
          </section>
        </SectionContainer>
      </main>
    </div>
  );
}
