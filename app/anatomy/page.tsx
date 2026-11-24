import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { RoofExplorer } from "@/components/RoofExplorer";
import { Figure } from "@/components/Figure";

export const metadata: Metadata = { title: "Roof anatomy" };

export default function AnatomyPage() {
  return (
    <>
      <PageHeader
        kicker="Section 1"
        title="The parts of a roof, named."
        lede="Select any label on the house, or any name in the list. The drawing is an original diagram of a roof that is hipped on the left, gabled on the right, and interrupted by a dormer, a valley, a chimney cricket, and a pipe boot. Photos sit next to the parts we can show with a real picture."
      />
      <RoofExplorer />
      <section className="section">
        <h2>The same parts, in photographs</h2>
        <div className="photo-grid">
          <Figure
            file="hip-roof.jpg"
            alt="Hipped tile roof on a brick cottage"
            caption="A hipped roof has no triangular gable wall. The hips run from the ridge down to the corners."
          />
          <Figure
            file="dormer.jpg"
            alt="Gable-front dormer with a small pediment above a tiled roof"
            caption="A gable dormer breaks the main roof. Its cheeks are walls, and walls against shingles need step flashing."
          />
          <Figure
            file="underlayment.jpg"
            alt="Workers removing shingles and exposing roofing felt and wood deck"
            caption="Tear-off is when the hidden layers show up: felt or synthetic, then the deck, then whatever the deck has been hiding."
          />
          <Figure
            file="chimney-flashing.jpg"
            alt="Poorly patched metal flashing at a brick chimney"
            caption="Chimney metal has a job for each piece: apron downhill, steps on the sides, counter flashing in the joints, cricket uphill. This one is a patch."
          />
        </div>
      </section>
      <section className="callout">
        <strong>Order of work on a steep roof.</strong>
        <p>
          Deck, then drip edge at the eaves, then ice barrier where it belongs, then underlayment (over the eave metal, under the rake metal), then valley metal, then flashing at walls and pipes, then starter, then field shingles, then hip and ridge. Gutters usually come after the roof, hung on fascia that is still solid.
        </p>
      </section>
    </>
  );
}
