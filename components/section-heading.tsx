type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-steel-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-steel-500 sm:text-lg">{description}</p> : null}
    </div>
  );
}
