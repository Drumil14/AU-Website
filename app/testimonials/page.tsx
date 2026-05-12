import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ContactCta } from "@/components/sections/contact-cta";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials for DTM Geocivil Consulting geotechnical and civil engineering services."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Client feedback"
        description="Professional, timely, and practical engineering support for pavement, geotechnical, and construction-related work."
      />
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCta />
    </>
  );
}
