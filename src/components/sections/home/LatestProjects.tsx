"use client";

import { useState } from "react";
import { BriefcaseBusiness } from "lucide-react";

import ProjectDialog from "@/components/project/ProjectDialog";
import ProjectCard from "@/components/project/ProjectCard";
import type { Project } from "@/data/projects";
import { latestProjects } from "@/data/projects";

export default function LatestProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center sm:gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700">
          <BriefcaseBusiness size={20} />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Check out my latest project
          </h2>
          <p className="text-sm leading-6 text-zinc-500 sm:text-base">
            Explore my recent development projects and technical experiments. I
            focus on combining core functionality with intuitive design, using
            each project as an opportunity to build practical and effective
            digital solutions.
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-8 sm:mt-12">
        {latestProjects.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={isReversed}
              onOpen={handleOpen}
            />
          );
        })}
      </div>

      <ProjectDialog
        open={open}
        project={activeProject}
        onClose={handleClose}
      />
    </>
  );
}
