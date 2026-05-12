import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-steel-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-800">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-steel-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-steel-500">{service.summary}</p>
      <ul className="mt-6 space-y-3">
        {service.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-steel-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        href={service.href}
        className="mt-7 inline-flex text-sm font-semibold text-brand-800 transition group-hover:text-brand-900"
      >
        View service details
      </Link>
    </article>
  );
}
