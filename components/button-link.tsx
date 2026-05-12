import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-brand-700 text-white shadow-sm hover:bg-brand-800 focus-visible:ring-brand-200",
  secondary: "border border-steel-200 bg-white text-steel-900 hover:border-brand-200 hover:text-brand-800 focus-visible:ring-brand-100",
  ghost: "text-brand-800 hover:text-brand-900 focus-visible:ring-brand-100"
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 ${variants[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
