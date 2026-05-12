import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-steel-50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted for timely, professional support"
          description="The original site placed client feedback prominently. This rebuild keeps that trust signal while giving it more breathing room."
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
