import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { companyFacts, values } from "@/data/site";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Learn about DTM Geocivil Consulting, a professional geotechnical and civil engineering consultancy based in Clayton, Victoria."
};

export default function WhoWeArePage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Practical engineering expertise built on relationships"
        description="DTM Geocivil Consulting delivers a diverse range of geotechnical and civil engineering expertise for local and international clients."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                title="We help clients make informed engineering decisions"
                description="The company specialises in geotechnical investigation, rigid and flexible pavement design, construction working platforms, hardstands, testing, reporting, project management, civil engineering, and construction services."
              />
              <p className="mt-6 text-base leading-8 text-steel-600">
                DTM Geocivil thinks through each site-specific constraint and works with clients to deliver successful project
                outcomes. The majority of the business is built on referrals and long-term relationships.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <article key={value.title} className="rounded-lg border border-steel-200 bg-steel-50 p-6">
                    <Icon className="h-7 w-7 text-brand-700" aria-hidden="true" />
                    <h2 className="mt-5 text-lg font-bold text-steel-900">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-steel-600">{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-14 rounded-lg border border-steel-200 bg-steel-50 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-steel-900">Company commitments</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {companyFacts.map((fact) => (
                <li key={fact} className="flex gap-3 text-sm leading-6 text-steel-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
