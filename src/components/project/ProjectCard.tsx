import Image from "next/image";
import type { ElementType } from "react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
  reversed?: boolean;
  titleAs?: "h2" | "h3";
  className?: string;
};

export default function ProjectCard({
  project,
  onOpen,
  reversed = false,
  titleAs = "h3",
  className,
}: ProjectCardProps) {
  const TitleTag: ElementType = titleAs;
  const mediaClassName = cn(
    "relative aspect-3/2 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100",
    reversed ? "lg:order-2" : ""
  );

  return (
    <article
      className={cn("rounded-[28px] border border-zinc-200 bg-white p-3", className)}
    >
      <div
        className={cn(
          "grid gap-6 lg:gap-8",
          reversed
            ? "lg:grid-cols-[minmax(0,1fr)_330px]"
            : "lg:grid-cols-[330px_minmax(0,1fr)]"
        )}
      >
        {project.imageSrc ? (
          <div className={mediaClassName}>
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 1024px) 330px, 100vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={cn(
              "flex aspect-3/2 w-full items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-xs font-semibold text-zinc-400",
              reversed ? "lg:order-2" : ""
            )}
          >
            Project Image
          </div>
        )}

        <div className={cn("flex flex-col gap-3", reversed ? "lg:order-1" : "")}
        >
          <TitleTag className="text-lg font-semibold text-zinc-900 sm:text-xl">
            {project.title}
          </TitleTag>
          <p className="clamp-4 text-sm leading-7 text-zinc-500 sm:text-base">
            {project.summary}
          </p>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
          >
            View Project
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
