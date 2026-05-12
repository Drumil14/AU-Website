import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { companyFacts, values } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Qualified engineers with a practical, client-first approach"
              description="DTM Geocivil Consulting delivers a diverse range of geotechnical and civil engineering expertise for local and international clients."
            />
            <p className="mt-6 text-base leading-8 text-steel-600">
              The business is built on referrals, relationships, and direct support for project teams who need clear
              technical advice and reliable turnaround times.
            </p>
            <div className="mt-8">
              <ButtonLink href="/who-we-are" variant="secondary">
                Learn more
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="rounded-lg border border-steel-200 bg-white p-5 shadow-card">
                    <Icon className="h-6 w-6 text-brand-700" aria-hidden="true" />
                    <h3 className="mt-4 font-bold text-steel-900">{value.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel-500">{value.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="rounded-lg border border-steel-200 bg-steel-50 p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {companyFacts.slice(0, 6).map((fact) => (
                  <li key={fact} className="flex gap-3 text-sm leading-6 text-steel-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
