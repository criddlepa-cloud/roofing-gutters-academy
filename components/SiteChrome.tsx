"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  ["/", "Home"],
  ["/anatomy/", "Anatomy"],
  ["/materials/", "Materials"],
  ["/gutters/", "Gutters"],
  ["/damage/", "Damage"],
  ["/codes/", "Colorado codes"],
  ["/insurance/", "Insurance"],
  ["/glossary/", "Glossary"],
  ["/quiz/", "Quiz"],
];

export function SiteHeader() {
  const path = usePathname() || "/";
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
            <rect width="40" height="40" rx="8" fill="#1b3a34" />
            <path d="M6 20 L20 8 L34 20 V32 H6 Z" fill="#f3eee4" />
            <path d="M6 20 L20 8 L34 20" fill="none" stroke="#b85c32" strokeWidth="2" />
          </svg>
          <span className="brand-name">
            Roofing &amp; Gutters Academy
            <span className="brand-sub">Brighton · Denver field guide</span>
          </span>
        </Link>
        <nav className="tabs" aria-label="Sections">
          {links.map(([href, label]) => {
            const current = href === "/" ? path === "/" : path.startsWith(href);
            return (
              <Link key={href} href={href} aria-current={current ? "page" : undefined}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <strong>A study guide, not a ruling.</strong>
        <small>
          Roofing &amp; Gutters Academy explains how roofs, gutters, local codes, and insurance claims fit together for someone learning the trade on the northern Front Range. It is not a building-department determination, a manufacturer installation manual, legal advice, or an insurance coverage opinion. Codes are adopted city by city. Policies are written policy by policy. Confirm the edition, the amendments, and the declarations page before you tell a homeowner what is required or what will be paid. Diagrams are original. Photos are credited on the{" "}
          <Link href="/attributions/">attributions</Link> page.
        </small>
      </div>
    </footer>
  );
}

export function PageHeader({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="page-head">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
    </header>
  );
}
