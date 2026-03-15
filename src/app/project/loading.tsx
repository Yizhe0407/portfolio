import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import ProjectCardSkeleton from "@/components/project/ProjectCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28" aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading project page</span>
        <PageDivider />

        <SectionContainer className="flex flex-col gap-10 sm:gap-12">
          <section className="space-y-4 sm:space-y-5">
            <Skeleton className="h-10 w-36" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[92%]" />
              <Skeleton className="h-4 w-[76%]" />
            </div>
          </section>

          <div className="flex flex-wrap gap-2 pb-2">
            {["w-14", "w-20", "w-24", "w-[4.5rem]", "w-[5.5rem]"].map((width) => (
              <Skeleton key={width} className={`h-8 rounded-full ${width}`} />
            ))}
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <ProjectCardSkeleton />
            <ProjectCardSkeleton reversed />
            <ProjectCardSkeleton />
          </div>
        </SectionContainer>
      </main>
    </div>
  );
}
