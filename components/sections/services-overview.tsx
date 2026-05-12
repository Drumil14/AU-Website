import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export function ServicesOverview() {
  return (
    <section className="bg-steel-50 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Engineering services for real site conditions"
            description="Focused consulting across the same geotechnical, civil, and residential services offered by the original company website, presented with clearer pathways for clients."
          />
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
