import Image from "next/image";
import { Github, Globe2, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { outlineButtonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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
import SectionDivider from "@/components/layout/SectionDivider";
import type { Project } from "@/data/projects";

const closeButtonClassName =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900";

type ProjectDialogProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

function ProjectEyebrowTitle({
  title,
  as: TitleComponent,
}: {
  title: string;
  as: typeof DialogTitle | typeof DrawerTitle;
}) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        Project
      </p>
      <TitleComponent className="text-xl font-semibold text-zinc-900 sm:text-2xl">
        {title}
      </TitleComponent>
    </>
  );
}

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
            className={outlineButtonVariants()}
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
            className={outlineButtonVariants()}
          >
            <Globe2 size={16} />
            Visit Website
          </a>
        ) : null}
      </div>
    ) : null;

  const projectDetails = (
    <div className="flex flex-col gap-5">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-zinc-900 sm:text-base">
          About the Project
        </h4>
        <ScrollArea className="w-full sm:h-[12.25rem] sm:pr-3">
          <p className="text-sm leading-7 text-zinc-500 sm:text-base">
            {project.about}
          </p>
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

  const projectBody = (
    <div className="max-h-[75vh] overflow-y-auto px-5 pb-6 pt-5 sm:px-6">
      <div className="flex flex-col gap-5 sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] sm:gap-6">
        <div className="flex flex-col gap-4">
          {imageContent}
          {actionButtons}
        </div>
        {projectDetails}
      </div>
    </div>
  );

  const handleOpenChange = (value: boolean) => {
    if (!value) onClose();
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className="sm:max-w-3xl rounded-3xl p-0"
          showCloseButton={false}
        >
          <div className="flex items-start justify-between gap-4 px-5 pb-3 pt-[18px] sm:px-6 sm:pb-3.5 sm:pt-5">
            <div className="min-w-0 flex-1">
              <ProjectEyebrowTitle title={project.title} as={DialogTitle} />
            </div>
            <DialogClose className={closeButtonClassName}>
              <X size={18} />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          <SectionDivider className="mx-5 h-3 sm:mx-6" nodeSize={11} />
          {projectBody}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleOpenChange}>
      <DrawerContent className="p-0">
        <div className="px-5 pb-1.5 pt-2">
          <ProjectEyebrowTitle title={project.title} as={DrawerTitle} />
        </div>
        {projectBody}
      </DrawerContent>
    </Drawer>
  );
}
