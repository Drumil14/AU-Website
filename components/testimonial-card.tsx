type TestimonialCardProps = {
  quote: string;
  name: string;
  location: string;
};

export function TestimonialCard({ quote, name, location }: TestimonialCardProps) {
  return (
    <figure className="rounded-lg border border-steel-200 bg-white p-6 shadow-card">
      <blockquote className="text-sm leading-7 text-steel-600">{quote}</blockquote>
      <figcaption className="mt-6 border-t border-steel-100 pt-4">
        <p className="font-semibold text-steel-900">{name}</p>
        <p className="text-sm text-steel-500">{location}</p>
      </figcaption>
    </figure>
  );
}
