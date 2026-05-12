import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { ContactCta } from "@/components/sections/contact-cta";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected DTM Geocivil Consulting project experience across hospitals, infrastructure, pavements, and data centres."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected project experience"
        description="A clean text-only project section for now, ready for photography and case studies when available."
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
