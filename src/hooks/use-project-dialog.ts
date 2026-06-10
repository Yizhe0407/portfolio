"use client";

import { useState } from "react";

import type { Project } from "@/data/projects";

export function useProjectDialog() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const closeProject = () => setOpen(false);

  return { activeProject, open, openProject, closeProject };
}
