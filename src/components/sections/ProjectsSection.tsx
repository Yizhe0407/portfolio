"use client";

import { useState } from "react";
import ProjectDialog from "@/components/project/ProjectDialog";
import ProjectCard from "@/components/project/ProjectCard";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const sortedProjects = [...projects].sort((a, b) =>
    b.yearMonth.localeCompare(a.yearMonth)
  );

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-6 sm:gap-8">
        {sortedProjects.map((project, index) => {
          const isReversed = index % 2 === 1;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={isReversed}
              onOpen={handleOpen}
              titleAs="h2"
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
