import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { Figure } from "@/components/Figure";
import { HailShingleArt, IceDamArt, SoftMetalArt, WearArt, WindArt } from "@/components/DamageArt";

export const metadata: Metadata = { title: "Damage identification" };

export default function DamagePage() {
  return (
    <>
      <PageHeader
        kicker="Section 4"
        title="What you are looking at, and what you are not."
        lede="Hail, wind, and ice leave patterns. Age, algae, and bad installation leave different ones. The drawings mark the pattern. The photos are real roofs, captioned as what the photographer actually documented. Do not call a cause you cannot see."
      />

      <section className="section">
        <h2>Hail on asphalt</h2>
        <p>
          A hail hit is a bruise from above. On a shingle it shows up in three related ways. Random spots across the field, on more than one slope that faced the storm, matter more than one tired tab at the eave.
        </p>
        <div className="diagram-card plain">
          <HailShingleArt />
        </div>
        <div className="three" style={{ marginTop: "0.8rem" }}>
          <article className="panel">
            <h3>Bruise</h3>
            <p>The mat is fractured in a circle. Granules may still be sitting on it. It feels soft. Move the granules with a thumb and the circle shows. This is the hit people miss from the yard.</p>
          </article>
          <article className="panel">
            <h3>Granule loss</h3>
            <p>The grit is gone and the asphalt looks dark and shiny. Fresh loss from hail is spattered. Loss from age follows the water: eaves, valleys, and the paths off a dormer.</p>
          </article>
          <article className="panel">
            <h3>Exposed mat</h3>
            <p>The asphalt is gone too and the fiberglass shows, usually pale or gray. That shingle is done. Size of the hail, not just the count of spots, is what the carrier will ask about.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Soft metal, the supporting evidence</h2>
        <div className="diagram-card plain">
          <SoftMetalArt />
        </div>
        <p>
          Aluminum gutters, downspouts, box vents, turbine vents, flue caps, and air-conditioner fins dent at smaller hail than it takes to bruise a laminated shingle. Dents on the same elevations as the bruised shingles support a hail date. Dents only on the gutter under a ladder do not. Spatter — a burnished circle where the granule coating was knocked off a vent — is the same idea.
        </p>
      </section>

      <section className="section">
        <h2>Wind</h2>
        <div className="diagram-card plain">
          <WindArt />
        </div>
        <div className="photo-grid" style={{ marginTop: "0.8rem" }}>
          <Figure
            file="wind-damage.jpg"
            alt="House roof with several missing shingle tabs"
            caption="Missing tabs, described by the photographer as moderate wind damage. Wind lifts at the seal strip. It starts at rakes, ridges, and any course that never sealed."
          />
          <Figure
            file="missing-shingles.jpg"
            alt="Large areas of roof covering missing after a hurricane"
            caption="Covering gone and underlayment open. This is a U.S. Fish and Wildlife Service photo after Hurricane Irma. The principle is the same on a Front Range wind claim: what is missing, and what is now exposed."
          />
        </div>
      </section>

      <section className="section">
        <h2>Ice dams</h2>
        <div className="diagram-card plain">
          <IceDamArt />
        </div>
        <div className="photo-grid" style={{ marginTop: "0.8rem" }}>
          <Figure
            file="ice-dam.jpg"
            alt="Long icicles hanging from an eave under a snow-covered roof"
            caption="Icicles are the symptom. The dam is the ice at the eave that stopped the meltwater. The leak is often inside, upslope of the gutter."
          />
          <Figure
            file="ice-dam-slate.jpg"
            alt="Ice forming along the eave of a slate roof"
            caption="An ice dam on slate near Cleveland. Same physics on an asphalt roof in Brighton: warm attic, cold eave, no ice barrier where the water backs up."
          />
        </div>
      </section>

      <section className="section">
        <h2>Wear, stains, and blisters</h2>
        <div className="diagram-card plain">
          <WearArt />
        </div>
        <div className="photo-grid" style={{ marginTop: "0.8rem" }}>
          <Figure
            file="algae-shingles.jpg"
            alt="Black biological streaks on asphalt shingles"
            caption="Algae streaks. Cosmetic. A homeowner will call this hail because it is dark. It is not. It grows. Hail does not make long vertical stains."
          />
          <Figure
            file="eave-wear.jpg"
            alt="Shingles deteriorated along the eave while the field is more intact"
            caption="Wear that follows the water, worst at the eave. Age and runoff. A hail storm does not politely stop at the second course."
          />
          <Figure
            file="shingle-failure.jpg"
            alt="Curled, shrunken, heavily weathered asphalt shingles"
            caption="Advanced age: shrinkage and curl. Blisters, when you see them, are bubbles from inside the asphalt. They are round and raised. A bruise is a dent."
          />
          <Figure
            file="damaged-shingles.jpg"
            alt="Worn shingles the photographer attributes to poor installation and age"
            caption="The photographer calls this poor installation and time. Uneven exposure, lifted corners, and general wear belong in that bucket until a storm pattern says otherwise."
          />
          <Figure
            file="shingle-damage.jpg"
            alt="Cracked and cupped 3-tab shingles"
            caption="Cracked 3-tab after a thunderstorm that also dropped branches. Cracked tabs can be impact, age, or both. The close-up test is the bruise and the mat, not the fact that a tab looks tired."
          />
        </div>
      </section>

      <section className="callout warn">
        <strong>What you say at the door.</strong>
        <p>
          “I can see missing tabs on the west rake, dents in the gutter on that same side, and dark streaks on the north that look like algae. I can’t call the field bruised from the driveway.” That sentence is more useful than a verdict. The adjuster, and a roof walk, decide the cause.
        </p>
      </section>
    </>
  );
}
