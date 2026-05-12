import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { capabilities, geotechnicalServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Geotechnical Engineering",
  description:
    "Geotechnical investigation, soil testing, site classification, pavement design, working platform design, piling support, and Level 1 supervision."
};

export default function GeotechnicalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Geotechnical engineering"
        description="Investigation, testing, analysis, and field support for residential, commercial, civil, pavement, and construction projects."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-steel-900">We provide the following geotechnical services.</h2>
              <p className="mt-5 text-base leading-8 text-steel-600">
                This page preserves the original service coverage while organising it into a cleaner, easier-to-scan
                format for clients and builders.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact">Discuss a geotechnical enquiry</ButtonLink>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {geotechnicalServices.map((service) => (
                <li key={service} className="flex rounded-lg border border-steel-200 bg-steel-50 p-4 text-sm leading-6 text-steel-700">
                  <CheckCircle2 className="mr-3 mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-steel-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-5">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="rounded-lg border border-steel-200 bg-white p-5 shadow-card">
                  <Icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
                  <h2 className="mt-4 font-bold text-steel-900">{capability.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-steel-500">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
