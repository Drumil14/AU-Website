import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DTM Geocivil Consulting in Clayton, Victoria for geotechnical and civil engineering enquiries."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a project enquiry"
        description="Send through your site, testing, supervision, or design requirements and the team can respond with the next step."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr]">
            <aside className="rounded-lg border border-steel-200 bg-steel-50 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-steel-900">Contact details</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-none text-brand-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-steel-900">Office</p>
                    <p className="mt-1 text-sm leading-6 text-steel-600">{company.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-none text-brand-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-steel-900">Phone</p>
                    <p className="mt-1 text-sm leading-6 text-steel-600">
                      {company.phone}
                      <br />
                      {company.mobile}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-none text-brand-700" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-steel-900">Email</p>
                    <a href={`mailto:${company.email}`} className="mt-1 block break-words text-sm text-steel-600 hover:text-brand-800">
                      {company.email}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-8 aspect-[4/3] rounded-lg border border-steel-200 bg-white p-4">
                <div className="flex h-full items-center justify-center rounded-md bg-steel-100 text-center text-sm font-semibold text-steel-500">
                  Map placeholder
                  <br />
                  Oakleigh East VIC 3166
                </div>
              </div>
            </aside>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
