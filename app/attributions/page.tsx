import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { attributions } from "@/lib/attributions";

export const metadata: Metadata = { title: "Attributions" };

export default function AttributionsPage() {
  return (
    <>
      <PageHeader
        kicker="Credits"
        title="Photographs and drawings."
        lede="Every photograph is stored in this project. Nothing is hotlinked. Diagrams of the roof, the layers, the valleys, the flashing, the gutters, and the damage patterns were drawn for Roofing & Gutters Academy. Photographs are from Wikimedia Commons under the licenses below. Links go to the file page."
      />
      <div className="photo-grid">
        {attributions.map((item) => (
          <figure key={item.file} className="figure">
            <img src={`/images/${item.file}`} alt={item.description || item.title} />
            <figcaption>
              <strong>{item.file}</strong>
              <span className="credit">
                {item.title}. Photo: {item.artist}. {item.license}.{" "}
                {item.licenseUrl ? <a href={item.licenseUrl}>License</a> : null}{" "}
                <a href={item.page}>File page</a>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
