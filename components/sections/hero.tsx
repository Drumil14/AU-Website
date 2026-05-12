import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { company } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-steel-200 bg-white">
      <Container className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-md border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-800">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Melbourne based engineering consultancy
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-bold tracking-tight text-steel-900 sm:text-5xl lg:text-6xl">
            Geotechnical and civil engineering advice for buildable project outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-steel-600">
            {company.legalName} provides site investigation, testing, pavement design, reporting, project management,
            and construction support for residential, commercial, and civil works.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Request a quote</ButtonLink>
            <ButtonLink href="/geotechnical" variant="secondary">
              Explore services
            </ButtonLink>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["2014", "Serving clients since"],
              ["VIC", "Clayton office"],
              ["AU Standards", "Compliant delivery"]
            ].map(([value, label]) => (
              <div key={value} className="rounded-lg border border-steel-200 bg-steel-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-steel-500">{label}</dt>
                <dd className="mt-2 text-2xl font-bold text-steel-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up lg:pl-4" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-steel-200 bg-steel-100 shadow-soft">
            <Image
              src="/images/engineering-site-hero.png"
              alt="Civil and geotechnical engineers reviewing a project site"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-lg border border-steel-200 bg-white p-5 shadow-soft sm:left-auto sm:w-80">
            <p className="text-sm font-bold text-steel-900">Practical engineering support</p>
            <ul className="mt-4 space-y-3">
              {["Geotechnical investigation", "Pavement and platform design", "Construction supervision"].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-steel-600">
                  <CheckCircle2 className="h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
