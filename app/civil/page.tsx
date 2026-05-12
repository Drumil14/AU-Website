import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { civilServices } from "@/data/site";

export const metadata: Metadata = {
  title: "Civil Engineering",
  description:
    "Civil engineering services including project management, construction management, piling supervision, footing supervision, extensions, and concrete works."
};

export default function CivilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Civil engineering"
        description="Construction-aware civil engineering support for project teams, builders, and property owners."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-steel-900">We provide the following civil engineering services.</h2>
              <p className="mt-5 text-base leading-8 text-steel-600">
                DTM Geocivil supports practical civil and construction-stage works where reliable coordination,
                supervision, and reporting are essential.
              </p>
              <div className="mt-8">
                <ButtonLink href="/contact">Discuss a civil enquiry</ButtonLink>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {civilServices.map((service) => (
                <li key={service} className="rounded-lg border border-steel-200 bg-steel-50 p-5">
                  <CheckCircle2 className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  <span className="mt-4 block text-sm font-semibold leading-6 text-steel-800">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-steel-50 py-20 sm:py-24">
        <Container>
          <div className="rounded-lg border border-steel-200 bg-white p-8 shadow-card sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Residential support</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-steel-900">From small extensions to site inspections</h2>
              </div>
              <p className="text-base leading-8 text-steel-600">
                The original website also highlighted residential engineering. This rebuild keeps that pathway connected
                to the civil engineering service area with clearer language and a more direct enquiry path.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
