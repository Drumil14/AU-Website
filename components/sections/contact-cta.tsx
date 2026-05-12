import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { company } from "@/data/site";

export function ContactCta() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="rounded-lg border border-steel-200 bg-steel-50 p-8 shadow-card sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">Contact us</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-steel-900 sm:text-4xl">
                Need a site investigation, testing, or engineering advice?
              </h2>
              <p className="mt-4 text-base leading-8 text-steel-600">
                Share your project details and the DTM Geocivil team can respond with the next practical step.
              </p>
              <div className="mt-7">
                <ButtonLink href="/contact">Start an enquiry</ButtonLink>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="rounded-lg border border-steel-200 bg-white p-5">
                <Phone className="h-5 w-5 text-brand-700" aria-hidden="true" />
                <span className="mt-4 block text-sm font-semibold text-steel-900">{company.phone}</span>
                <span className="mt-1 block text-xs text-steel-500">{company.mobile}</span>
              </a>
              <a href={`mailto:${company.email}`} className="rounded-lg border border-steel-200 bg-white p-5">
                <Mail className="h-5 w-5 text-brand-700" aria-hidden="true" />
                <span className="mt-4 block break-words text-sm font-semibold text-steel-900">{company.email}</span>
              </a>
              <div className="rounded-lg border border-steel-200 bg-white p-5">
                <MapPin className="h-5 w-5 text-brand-700" aria-hidden="true" />
                <span className="mt-4 block text-sm font-semibold text-steel-900">{company.address}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
