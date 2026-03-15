import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type ProjectCardSkeletonProps = {
  reversed?: boolean;
};

export default function ProjectCardSkeleton({
  reversed = false,
}: ProjectCardSkeletonProps) {
  return (
    <article className="rounded-[28px] border border-zinc-200 bg-white p-3">
      <div
        className={cn(
          "grid gap-6 lg:justify-center lg:gap-8",
          reversed
            ? "lg:grid-cols-[minmax(0,380px)_330px]"
            : "lg:grid-cols-[330px_minmax(0,380px)]"
        )}
      >
        <Skeleton
          className={cn(
            "aspect-3/2 w-full rounded-2xl",
            reversed ? "lg:order-2" : ""
          )}
        />

        <div
          className={cn(
            "flex h-full flex-col justify-between gap-4 py-1",
            reversed ? "lg:order-1" : ""
          )}
        >
          <div className="space-y-3">
            <Skeleton className="h-7 w-40 sm:w-52" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[92%]" />
            <Skeleton className="h-4 w-[78%]" />
          </div>
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>
    </article>
  );
}
