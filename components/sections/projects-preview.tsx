import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/site";

export function ProjectsPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Representative work areas"
            description="Project image placeholders are ready for real gallery photography, case studies, or completed site work when available."
          />
          <ButtonLink href="/projects" variant="secondary">
            View projects
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
