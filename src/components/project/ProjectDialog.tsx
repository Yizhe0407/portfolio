import Image from "next/image";
import { Github, Globe2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { Project } from "@/data/projects";

type ProjectDialogProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectDialog({
  project,
  open,
  onClose,
}: ProjectDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (!project) return null;

  const imageContent = project.imageSrc ? (
    <div className="relative aspect-3/2 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
      <Image
        src={project.imageSrc}
        alt={project.imageAlt ?? project.title}
        fill
        sizes="(min-width: 1024px) 520px, 100vw"
        className="object-cover"
      />
    </div>
  ) : (
    <div className="flex aspect-3/2 w-full items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 text-xs font-semibold text-zinc-400">
      Project Image
    </div>
  );

  const hasGithubLink = Boolean(project.githubUrl);
  const hasLiveLink = Boolean(project.liveUrl);
  const actionButtons =
    hasGithubLink || hasLiveLink ? (
      <div className="flex flex-wrap gap-3">
        {hasGithubLink ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
          >
            <Github size={16} />
            View on GitHub
          </a>
        ) : null}
        {hasLiveLink ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:text-zinc-900"
          >
            <Globe2 size={16} />
            Visit Website
          </a>
        ) : null}
      </div>
    ) : null;

  const aboutText = (
    <p className="text-sm leading-7 text-zinc-500 sm:text-base">
      {project.about}
    </p>
  );

  const desktopDetails = (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-zinc-900 sm:text-base">
          About the Project
        </h4>
        <ScrollArea className="h-[12.25rem] w-full pr-3">
          {aboutText}
        </ScrollArea>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="muted">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );

  const mobileDetails = (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-zinc-900 sm:text-base">
          About the Project
        </h4>
        {aboutText}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="muted">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );

  const desktopBody = (
    <div className="max-h-[75vh] overflow-y-auto px-5 pb-6 pt-5 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          {imageContent}
          {actionButtons}
        </div>
        {desktopDetails}
      </div>
    </div>
  );

  const mobileBody = (
    <div className="max-h-[75vh] overflow-y-auto px-5 pb-6 pt-5 sm:px-6">
      <div className="flex flex-col gap-5">
        {imageContent}
        {actionButtons}
        {mobileDetails}
      </div>
    </div>
  );

  const handleOpenChange = (value: boolean) => {
    if (!value) onClose();
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-3xl rounded-3xl p-0">
          <div className="flex items-start justify-between gap-4 border-b border-zinc-100 px-5 py-4 sm:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Project
              </p>
              <DialogTitle className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                {project.title}
              </DialogTitle>
            </div>
          </div>
          {desktopBody}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent className="p-0">
        <div className="flex items-start justify-between gap-4 border-b border-zinc-100 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Project
            </p>
            <DrawerTitle className="text-xl font-semibold text-zinc-900 sm:text-2xl">
              {project.title}
            </DrawerTitle>
          </div>
        </div>
        {mobileBody}
      </DrawerContent>
    </Drawer>
  );
}
