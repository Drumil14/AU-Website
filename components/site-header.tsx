"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { company, navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/95 backdrop-blur">
      <div className="hidden border-b border-steel-100 bg-steel-50 md:block">
        <Container className="flex h-10 items-center justify-between text-sm text-steel-600">
          <p>Professional geotechnical and civil engineering consulting</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-brand-800">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 hover:text-brand-800">
              <Mail className="h-4 w-4" aria-hidden="true" />
              {company.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-brand-50 text-brand-800" : "text-steel-700 hover:bg-steel-50 hover:text-steel-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-md bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-steel-200 text-steel-900 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-steel-200 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-steel-700 hover:bg-steel-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-700 px-4 py-3 text-sm font-semibold text-white"
            >
              Request a quote
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
