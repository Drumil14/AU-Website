import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Future career opportunities at DTM Geocivil Consulting."
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join a practical engineering team"
        description="DTM Geocivil is always interested in hearing from talented people for future opportunities."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-lg border border-steel-200 bg-steel-50 p-8 shadow-card sm:p-10">
            <Mail className="h-8 w-8 text-brand-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-steel-900">Current opportunities</h2>
            <p className="mt-4 text-base leading-8 text-steel-600">
              There are no advertised open positions at the moment. If you are interested in possible future
              opportunities, please send your CV to {company.email}.
            </p>
            <div className="mt-8">
              <ButtonLink href={`mailto:${company.email}`} variant="secondary">
                Email your CV
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
