import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { company, navItems, services } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-steel-200 bg-steel-50">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-7 text-steel-600">
              Practical geotechnical and civil engineering advice for residential, commercial, construction, and
              infrastructure projects.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "Facebook", icon: Facebook },
                { label: "Twitter", icon: Twitter },
                { label: "LinkedIn", icon: Linkedin }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-steel-200 bg-white text-steel-600 transition hover:text-brand-800"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-steel-900">Company</h2>
            <ul className="mt-5 space-y-3">
              {navItems.slice(1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-steel-600 transition hover:text-brand-800">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-steel-900">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="text-sm text-steel-600 transition hover:text-brand-800">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-steel-900">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-steel-600">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                <span>
                  {company.phone}
                  <br />
                  {company.mobile}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brand-700" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="transition hover:text-brand-800">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-steel-200 pt-6 text-sm text-steel-500">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
