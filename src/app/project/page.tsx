import PageDivider from "@/components/layout/PageDivider";
import SectionContainer from "@/components/layout/SectionContainer";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Project() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28">
        <PageDivider />

        <SectionContainer className="flex flex-col gap-10 sm:gap-12">
          <section className="space-y-4 sm:space-y-5">
            <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
              Project
            </h1>
            <div className="space-y-4 text-sm leading-7 text-zinc-500 sm:text-base">
              <p>
                A collection of my technical explorations and projects. I enjoy
                transforming ideas into products—from UI design to development—and
                I’m always learning to solve life’s problems with code.
              </p>
            </div>
          </section>

          <ProjectsSection />
        </SectionContainer>
      </main>
    </div>
  );
}
