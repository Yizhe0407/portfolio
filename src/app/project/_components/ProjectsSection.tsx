"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectDialog from "@/components/project/ProjectDialog";
import ProjectCard from "@/components/project/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

const ALL = "All";

const allTags = [
  ALL,
  ...Array.from(
    new Set(
      [...projects]
        .sort((a, b) => b.yearMonth.localeCompare(a.yearMonth))
        .flatMap((p) => p.tech)
    )
  ),
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);
  const [activeTag, setActiveTag] = useState(ALL);

  const sortedProjects = [...projects].sort((a, b) =>
    b.yearMonth.localeCompare(a.yearMonth)
  );

  const filtered =
    activeTag === ALL
      ? sortedProjects
      : sortedProjects.filter((p) => p.tech.includes(activeTag));

  const handleOpen = (project: Project) => {
    setActiveProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AnimatedSection>
        <div className="flex flex-wrap gap-2 pb-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                activeTag === tag
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-400 hover:text-zinc-700"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </AnimatedSection>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 text-center text-sm text-zinc-400"
          >
            No projects found for &ldquo;{activeTag}&rdquo;
          </motion.p>
        ) : (
          <motion.div layout className="flex flex-col gap-6 sm:gap-8">
            {filtered.map((project, index) => {
              const isReversed = index % 2 === 1;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard
                    project={project}
                    reversed={isReversed}
                    onOpen={handleOpen}
                    titleAs="h2"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectDialog
        open={open}
        project={activeProject}
        onClose={handleClose}
      />
    </>
  );
}
