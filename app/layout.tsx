import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Roofing & Gutters Academy",
    template: "%s · Roofing & Gutters Academy",
  },
  description:
    "A picture-heavy field guide to roof anatomy, materials, gutters, storm damage, Colorado codes, and insurance claims for the Brighton and Denver market.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="wrap">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
