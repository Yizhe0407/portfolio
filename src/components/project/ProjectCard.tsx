import Image from "next/image";
import type { ElementType } from "react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { outlineButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
  titleAs?: "h2" | "h3";
  className?: string;
};

export default function ProjectCard({
  project,
  onOpen,
  titleAs = "h3",
  className,
}: ProjectCardProps) {
  const TitleTag: ElementType = titleAs;

  return (
    <article
      className={cn(
        "group rounded-2xl border border-zinc-200 bg-white p-3.5",
        className
      )}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-4 lg:gap-5">
        <div className="relative aspect-3/2 w-full shrink-0 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 sm:w-[160px] sm:self-start md:w-[210px] lg:w-[260px]">
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={project.imageAlt ?? project.title}
              fill
              sizes="(min-width: 1024px) 260px, (min-width: 768px) 210px, (min-width: 640px) 160px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3">
          <div className="flex flex-col gap-1.5">
            <TitleTag className="text-[15px] font-semibold text-zinc-900 sm:text-[17px] lg:text-lg">
              {project.title}
            </TitleTag>
            <p className="line-clamp-3 text-[13px] leading-6 text-zinc-500 sm:text-sm">
              {project.summary}
            </p>
          </div>

          <div className="mt-auto flex flex-col items-start gap-2.5">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="muted" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onOpen(project)}
              className={outlineButtonVariants({ size: "sm" })}
            >
              View
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
