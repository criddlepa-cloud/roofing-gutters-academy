import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { GutterExplorer } from "@/components/GutterExplorer";
import { Figure } from "@/components/Figure";

export const metadata: Metadata = { title: "Gutters" };

const problems = [
  ["Overflow at a valley", "A valley dumps a whole roof plane into a few feet of gutter. Five-inch trough with one 2x3 downspout loses that fight in a July storm."],
  ["Water behind the gutter", "The gutter is hung too high, or there is no gutter apron, so water hits the fascia instead of the trough. The fascia goes soft. The shingles may still look fine."],
  ["No pitch", "Standing water, mosquito rings, and a heavy gutter that pulls off the fascia. The outlet has to be the low point."],
  ["Spike and ferrule pulling out", "The old nails work loose. The gutter sags between them. Hidden hangers are the replacement, into solid fascia, not into the rot."],
  ["Downspout at the footing", "A splash block kicked aside, or no extension at all. This is a basement and a foundation crack, not a gutter fashion problem."],
  ["Seams on sectional gutter", "Every 10-foot joint is a leak waiting on a freeze. Seamless aluminum removes the field joints. Corners and outlets are still joints."],
  ["Guards that overshoot", "A hood or a screen that sits proud of the lip throws water onto the ground. The gutter looks clean and the bed stays wet."],
  ["Hail and ladders", "Dents in aluminum are collateral for a hail story. They also come from ladders. Look for a direction, and look at the vents and the AC fins on the same faces."],
];

export default function GuttersPage() {
  return (
    <>
      <PageHeader
        kicker="Section 3"
        title="Gutters are a drainage system."
        lede="The shingles get water to the eave. The gutter has to take it from there to daylight, away from the wall. Click a part. The profiles and the run are original drawings. The photos are real hardware."
      />
      <GutterExplorer />

      <section className="section">
        <h2>Material, in one pass</h2>
        <div className="material-grid">
          <article className="panel">
            <h3>Seamless aluminum</h3>
            <p>Roll-formed on the truck, usually 0.027 or 0.032 inch. The default replacement gutter in the metro. It does not rust. It dents. It is the right recommendation unless the house is asking for something else.</p>
          </article>
          <article className="panel">
            <h3>Steel</h3>
            <p>Stronger against snow load and ladders, and it rusts where the coating is cut. You see it on some older homes and on commercial. Do not sell it as “maintenance free.”</p>
          </article>
          <article className="panel">
            <h3>Copper</h3>
            <p>The long-life, high-cost metal. It starts bright and goes brown, then green. Half-round copper is a design choice on the right house. It is not a hail upgrade for a production ranch.</p>
          </article>
          <article className="panel">
            <h3>Vinyl sectional</h3>
            <p>Cheap, and it gets brittle in a Front Range winter. Joints open. It is rarely what you want to leave behind on a roof you just replaced.</p>
          </article>
        </div>
      </section>

      <section className="section photo-grid">
        <Figure
          file="k-style-face.jpg"
          alt="White K-style gutter profile showing the ogee face"
          caption="K-style profile: a flat back against the fascia, a flat bottom, and the curved ogee face. The commons file is titled as a gutter guard; the object in the photo is the gutter itself."
          contain
        />
        <Figure
          file="k-style-profile.jpg"
          alt="White aluminum end cap for a K-style gutter"
          caption="An end cap. It is a left or a right, and it has to be sealed. A drip at the end of a run is often this piece."
          contain
        />
        <Figure
          file="k-style.jpg"
          alt="Aluminum gutter outlet that drops into a downspout"
          caption="An outlet, the drop that leaves the trough. Put it at the low end of the pitch."
          contain
        />
        <Figure
          file="seamless-gutter.jpg"
          alt="Installed white K-style gutter with elbow and vented soffit"
          caption="A finished eave: vented soffit, fascia, K-style gutter, and a corrugated downspout with an elbow. This is the assembly you are describing from the driveway."
        />
        <Figure
          file="copper-system.png"
          alt="Half-round copper gutter and downspout on a stone house"
          caption="Half-round copper, with a round downspout. The trough is cradled rather than hidden inside an ogee face."
        />
        <Figure
          file="copper-gutter.jpg"
          alt="Architectural copper roof and gutter work"
          caption="Copper used as architecture, not just as a trough. It costs accordingly, and it patinas."
        />
        <Figure
          file="downspout.jpg"
          alt="A round downspout discharging water"
          caption="The downspout only works if the water can leave. A buried drain or a solid extension beats a splash block that has drifted into the flower bed."
        />
      </section>

      <section className="section">
        <h2>Problems you can see from the ground</h2>
        <div className="stack">
          {problems.map(([title, text]) => (
            <article key={title} className="panel">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
