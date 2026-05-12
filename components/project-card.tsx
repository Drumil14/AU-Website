import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="h-full rounded-lg border border-steel-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">{project.type}</p>
      <h3 className="mt-3 text-lg font-bold text-steel-900">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel-500">{project.description}</p>
    </article>
  );
}
