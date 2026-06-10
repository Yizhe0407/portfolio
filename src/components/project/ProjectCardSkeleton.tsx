import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-3.5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4 lg:gap-5">
        <Skeleton className="aspect-3/2 w-full shrink-0 rounded-lg sm:w-[160px] sm:self-start md:w-[210px] lg:w-[260px]" />

        <div className="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3">
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-5 w-2/3 max-w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
          </div>
          <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <Skeleton className="h-[22px] w-16 rounded-full" />
              <Skeleton className="h-[22px] w-14 rounded-full" />
            </div>
            <Skeleton className="h-8 w-16 rounded-lg" />
          </div>
        </div>
      </div>
    </article>
  );
}
