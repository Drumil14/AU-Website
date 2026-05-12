import { Container } from "@/components/container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-steel-200 bg-steel-50">
      <Container className="py-16 sm:py-20">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-steel-900 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-steel-500">{description}</p>
      </Container>
    </section>
  );
}
