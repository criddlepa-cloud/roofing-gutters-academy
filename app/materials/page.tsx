import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { Figure } from "@/components/Figure";
import { materials } from "@/lib/materials";

export const metadata: Metadata = { title: "Materials" };

export default function MaterialsPage() {
  return (
    <>
      <PageHeader
        kicker="Section 2"
        title="What the roof is made of."
        lede="Cost tiers are relative installed cost in the Denver metro, not a quote. A steep charge, a second story, a full tear-off, and rotten decking move the price more than the shingle color does. Lifespans are typical published ranges. Hail along I-25 usually arrives first."
      />

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Cost</th>
              <th>Typical life</th>
              <th>Hail</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((item) => (
              <tr key={item.id}>
                <td>
                  <a href={`#${item.id}`}>{item.name}</a>
                </td>
                <td>{item.tier}</td>
                <td>{item.life}</td>
                <td>{item.hail}</td>
                <td>{item.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="section callout">
        <strong>UL 2218, the impact classes.</strong>
        <p>
          A steel ball is dropped twice on the same spot. Class 1 is 1.25 inches from 12 feet. Class 2 is 1.5 inches from 15 feet. Class 3 is 1.75 inches from 17 feet. Class 4 is 2 inches from 20 feet. The shingle passes if it does not crack through. Granules can still come off. When a homeowner asks for “Class 4,” they usually want the insurance discount. The discount is whatever that carrier filed. Ask the agent. Do not quote a percent.
        </p>
      </section>

      <div className="section stack">
        {materials.map((item) => (
          <article key={item.id} id={item.id} className="panel">
            <p className="kicker">{item.family}</p>
            <h2>{item.name}</h2>
            <p>
              <span className="tag">{item.tier}</span> {item.life}
            </p>
            <p>{item.summary}</p>
            <div className="two">
              <div>
                <h3>Why people buy it</h3>
                <ul>
                  {item.pros.map((pro) => (
                    <li key={pro}>{pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>What to say out loud</h3>
                <ul>
                  {item.cons.map((con) => (
                    <li key={con}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
            {item.photo ? (
              <Figure file={item.photo} alt={item.photoAlt || item.name} caption={item.photoCaption || item.name} />
            ) : (
              <p className="look">No freely licensed field photo of this exact membrane is in the library. The low-slope photos on the EPDM cards show the kind of roof these products cover.</p>
            )}
          </article>
        ))}
      </div>

      <section className="section photo-grid">
        <Figure
          file="slate-tiles.jpg"
          alt="Natural slate roof tiles on a warehouse roof"
          caption="Slate up close: individual stones, not a printed pattern. Heavy, long-lived, and brittle in hail."
        />
        <Figure
          file="synthetic-installed.jpg"
          alt="Snow guards on a synthetic slate roof"
          caption="Synthetic slate with snow guards. The shape copies stone. The weight does not."
        />
        <Figure
          file="epdm-finished.jpg"
          alt="Low-slope roof during membrane installation"
          caption="A low-slope roof mid-install. Shingles are the wrong product once the slope drops below 2:12."
        />
        <Figure
          file="shingle-failure.jpg"
          alt="Badly weathered and shrunken asphalt shingles"
          caption="Asphalt at the end of its life: shrinkage, curl, and washed-out granules. This is age, photographed as weathering, not a fresh hail map."
        />
      </section>
    </>
  );
}
