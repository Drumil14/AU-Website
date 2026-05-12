import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="DTM Geocivil home">
      <span className="flex h-11 w-11 items-center justify-center rounded-md border border-brand-100 bg-brand-800 text-sm font-bold tracking-wide text-white shadow-sm">
        DTM
      </span>
      <span className="leading-tight">
        <span className="block text-base font-bold text-steel-900">DTM Geocivil</span>
        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-steel-500">Consulting</span>
      </span>
    </Link>
  );
}
