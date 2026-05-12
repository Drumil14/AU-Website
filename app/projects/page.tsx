import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Representative DTM Geocivil Consulting project placeholders for geotechnical, pavement, residential, and construction support work."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Project and gallery placeholders"
        description="A clean project section ready for real project photography, case studies, and completed site examples."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
