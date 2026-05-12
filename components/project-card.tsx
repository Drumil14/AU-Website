import Image from "next/image";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card">
      <div className="relative aspect-[4/3] bg-steel-100">
        <Image src={project.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">{project.type}</p>
        <h3 className="mt-3 text-lg font-bold text-steel-900">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-steel-500">{project.description}</p>
      </div>
    </article>
  );
}
