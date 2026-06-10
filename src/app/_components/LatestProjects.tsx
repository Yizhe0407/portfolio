"use client";

import ProjectDialog from "@/components/project/ProjectDialog";
import ProjectCard from "@/components/project/ProjectCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useProjectDialog } from "@/hooks/use-project-dialog";
import { latestProjects } from "@/data/projects";

export default function LatestProjectsSection() {
  const { activeProject, open, openProject, closeProject } = useProjectDialog();

  return (
    <>
      <AnimatedSection>
      <section className="mx-auto flex max-w-xl flex-col items-center gap-3 text-center sm:gap-4">
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
      </AnimatedSection>

      <div className="mt-10 flex flex-col gap-8 sm:mt-12">
        {latestProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.08}>
            <ProjectCard project={project} onOpen={openProject} />
          </AnimatedSection>
        ))}
      </div>

      <ProjectDialog
        open={open}
        project={activeProject}
        onClose={closeProject}
      />
    </>
  );
}
