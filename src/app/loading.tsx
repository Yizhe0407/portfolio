import Container from "@/components/layout/Container";
import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import ProjectCardSkeleton from "@/components/project/ProjectCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28" aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading page content</span>
        <PageDivider />

        <SectionContainer className="flex flex-col">
          <section className="relative z-10 flex flex-col items-start gap-7">
            <Skeleton className="h-[132px] w-[132px] rounded-full" />

            <div className="w-full max-w-xl space-y-3">
              <Skeleton className="h-10 w-full max-w-[340px] sm:max-w-[420px]" />
              <Skeleton className="h-10 w-[72%] max-w-[360px]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[84%]" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-10 w-28 rounded-xl sm:w-32"
                />
              ))}
            </div>
          </section>
        </SectionContainer>

        <Container noPadding>
          <section className="flex flex-col gap-4 py-10 sm:gap-6">
            {[0, 1].map((row) => (
              <div
                key={row}
                className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6"
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={`${row}-${index}`}
                    className="flex min-h-[108px] flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-zinc-200 bg-white p-4 md:min-h-[140px] lg:min-h-[160px]"
                  >
                    <Skeleton className="h-10 w-10 rounded-2xl md:h-12 md:w-12" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                ))}
              </div>
            ))}
          </section>
        </Container>

        <PageDivider />

        <SectionContainer className="flex flex-col gap-10 sm:gap-12">
          <section className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center sm:gap-4">
            <Skeleton className="h-12 w-12 rounded-2xl" />
            <div className="w-full space-y-3">
              <Skeleton className="mx-auto h-8 w-64 sm:w-80" />
              <Skeleton className="mx-auto h-4 w-full max-w-xl" />
              <Skeleton className="mx-auto h-4 w-[84%] max-w-lg" />
            </div>
          </section>

          <div className="flex flex-col gap-8">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton reversed />
          </div>
        </SectionContainer>
      </main>
    </div>
  );
}
