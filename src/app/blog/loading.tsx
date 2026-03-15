import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import { Skeleton } from "@/components/ui/skeleton";

function BlogCardSkeleton() {
  return (
    <article className="rounded-[28px] border border-zinc-200 bg-white p-4 sm:p-5">
      <div className="space-y-3">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-7 w-full max-w-[320px]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Skeleton className="h-7 w-16 rounded-full" />
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-14 rounded-full" />
      </div>
    </article>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28" aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading blog page</span>
        <PageDivider />

        <SectionContainer className="flex flex-col gap-8">
          <section className="space-y-4 py-8 sm:py-12">
            <Skeleton className="h-10 w-28" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full max-w-2xl" />
              <Skeleton className="h-4 w-[82%] max-w-xl" />
            </div>
          </section>

          <div className="grid gap-4">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
          </div>
        </SectionContainer>
      </main>
    </div>
  );
}
