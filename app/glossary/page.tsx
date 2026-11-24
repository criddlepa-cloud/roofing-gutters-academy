import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { GlossaryBrowser } from "@/components/GlossaryBrowser";

export const metadata: Metadata = { title: "Glossary" };

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        kicker="Section 7"
        title="The words, in one list."
        lede="Search or filter. Where a photo helps, it is under the definition. Diagrams for the parts live on the anatomy and gutter pages. The quiz uses both."
      />
      <GlossaryBrowser />
    </>
  );
}
