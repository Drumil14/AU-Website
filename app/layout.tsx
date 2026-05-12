import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dtmgeocivil.com.au"),
  title: {
    default: `${company.name} | Geotechnical & Civil Engineering`,
    template: `%s | ${company.name}`
  },
  description:
    "Professional geotechnical and civil engineering consulting services in Melbourne, including investigation, testing, reporting, pavement design, and construction supervision.",
  openGraph: {
    title: `${company.name} | Geotechnical & Civil Engineering`,
    description:
      "Practical geotechnical and civil engineering advice for residential, commercial, and construction projects.",
    url: "https://www.dtmgeocivil.com.au",
    siteName: company.name,
    images: [
      {
        url: "/images/engineering-site-hero.png",
        width: 1200,
        height: 800,
        alt: "Civil and geotechnical engineers reviewing a project site"
      }
    ],
    locale: "en_AU",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
