import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { RakeLapSvg } from "@/components/LayerSvg";

export const metadata: Metadata = { title: "Colorado codes" };

export default function CodesPage() {
  return (
    <>
      <PageHeader
        kicker="Section 5"
        title="Colorado does not have one house code."
        lede="Cities, towns, and counties adopt the International Residential Code, pick an edition, and amend it. A Brighton mailing address can still be unincorporated Adams County. The permit follows the jurisdiction the property sits in, not the ZIP code. Verify the current edition with that building department before you tell a homeowner what is required."
      />

      <section className="callout warn">
        <strong>Read this before you quote a code section.</strong>
        <p>
          The notes below describe the model IRC, mostly as it reads in the 2021 and 2024 editions, and the adoption pages those cities had published. Local amendments win. Manufacturer instructions also apply, and where they are stricter they are what the warranty follows. This page is a study guide, not a code determination.
        </p>
      </section>

      <section className="section">
        <h2>Who adopted what, near Brighton and Denver</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Place</th>
                <th>What their own page says</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>City and County of Denver</td>
                <td>2025 Denver Building and Fire Code, effective December 31, 2025, incorporating the 2024 I-codes except the energy code, which stays on the 2021 IECC. A second printing was adopted November 24, 2025.</td>
                <td>
                  <a href="https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Community-Planning-and-Development/Building-Codes-Policies-and-Guides">
                    Denver building codes
                  </a>
                </td>
              </tr>
              <tr>
                <td>City of Brighton</td>
                <td>Ordinance adopting the 2021 IRC, effective January 1, 2023, as the Brighton Residential Code, with local amendments. Confirm it has not been replaced.</td>
                <td>
                  <a href="https://www.brightonco.gov/DocumentCenter/View/28446/oridance-that-adopted-the-2021-I-codes">
                    Brighton 2021 I-code ordinance
                  </a>
                </td>
              </tr>
              <tr>
                <td>City of Aurora</td>
                <td>2021 IRC, adopted with local amendments.</td>
                <td>
                  <a href="https://www.auroragov.org/business_services/building_division/adopted_building_codes">
                    Aurora adopted codes
                  </a>
                </td>
              </tr>
              <tr>
                <td>City of Thornton</td>
                <td>2024 IRC, adopted by ordinance with a stated effective date of July 1, 2025, replacing the 2021 edition.</td>
                <td>
                  <a href="https://www.thorntonco.gov/media/file/2024-code-amendments">
                    Thornton 2024 code ordinance
                  </a>
                </td>
              </tr>
              <tr>
                <td>Unincorporated Adams County</td>
                <td>2024 IRC effective July 1, 2026. Applications accepted before that date were reviewed under the 2018 IRC. The county code does not apply inside city limits.</td>
                <td>
                  <a href="https://adamscountyco.gov/our-county/community-economic-development/building-safety/adopted-building-codes/">
                    Adams County adopted codes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The model code text for Chapter 9 is published by the International Code Council. A readable edition of the 2021 IRC roof chapter, as used by Colorado’s Division of Fire Prevention and Control for the buildings that agency covers, is on{" "}
          <a href="https://up.codes/viewer/colorado/irc-2021/chapter/9/roof-assemblies">UpCodes</a>. Denver’s amended residential roof chapter is mirrored at{" "}
          <a href="https://up.codes/viewer/denver/irc-2024/chapter/9/roof-assemblies">UpCodes, Denver residential</a>. Buy or open the ICC book your city adopted if you are citing it on a permit.
        </p>
      </section>

      <section className="section">
        <h2>Chapter 9, the pieces that show up on every reroof</h2>
        <div className="stack">
          <article className="panel">
            <h3>Underlayment · R905.1.1 and R905.2.2</h3>
            <p>
              Asphalt shingles are allowed only on slopes of 2:12 or steeper. From 2:12 up to 4:12, the underlayment is two layers: a 19-inch starter strip, then 36-inch sheets lapped 19 inches. At 4:12 and steeper, one layer, lapped 2 inches, applied shingle fashion from the eave. End laps are 4 inches and offset. Below 2:12, shingles are the wrong product.
            </p>
          </article>
          <article className="panel">
            <h3>Ice barrier · R905.1.2</h3>
            <p>
              An ice barrier is required where there is a history of ice forming along the eaves and backing up water, as that jurisdiction marks in Table R301.2. It is at least two layers of underlayment cemented together, or a self-adhering polymer-modified bitumen sheet, from the eave edge to at least 24 inches inside the exterior wall line. On slopes of 8:12 and steeper, the same section also calls for the barrier to reach at least 36 inches up the slope from the eave. Detached accessory buildings with no conditioned space are excepted.
            </p>
            <p>
              Denver’s January average is warmer than the old “25°F” rule of thumb, so you cannot assume every Front Range city has marked the ice-barrier box. Some have. Manufacturer instructions often still want the membrane in valleys, at eaves in cold climates, and around penetrations. Follow the stricter of the city’s table and the bundle. Say “I’ll confirm with the building department,” and mean it.
            </p>
          </article>
          <article className="panel">
            <h3>Drip edge · R905.2.8.5</h3>
            <p>
              A drip edge is required at the eaves and rakes of shingle roofs. Pieces lap at least 2 inches. The metal extends at least 1/4 inch below the sheathing and at least 2 inches back onto the deck. Fasten it at no more than 12 inches on center. Underlayment goes over the drip edge along the eaves and under the drip edge along the rakes. The section has been in the IRC since the 2012 edition. Plenty of older metro roofs were installed with none.
            </p>
            <div className="diagram-card plain">
              <RakeLapSvg />
            </div>
          </article>
          <article className="panel">
            <h3>How many layers · R908.3.1.1</h3>
            <p>
              A roof replacement removes the old covering down to the deck. A recover, a new covering over an old one, is not allowed when any of these is true: the existing roof is water-soaked or too deteriorated to be a base; the existing covering is slate, clay, cement, or asbestos-cement tile; or the roof already has two or more applications of any covering. In plain language, a third layer of shingles is out. An existing ice-barrier membrane stuck to the deck may be left and covered with another layer of ice barrier, under the exception in R908.3.
            </p>
          </article>
          <article className="panel">
            <h3>Fastening · R905.2.5 and R905.2.6</h3>
            <p>
              Asphalt-shingle nails are galvanized steel, stainless, aluminum, or copper, minimum 12-gauge shank, minimum 3/8-inch head, long enough to go through the roofing and at least 3/4 inch into the deck. If the deck is thinner than 3/4 inch, the nail goes through it. The number of fasteners is what the manufacturer requires, and not fewer than four per strip shingle or two per individual shingle. Slopes steeper than 21:12 follow the manufacturer’s steep-slope instructions. High-wind instructions on the bundle, often six nails, control when the local design wind speed puts the roof in that category. The design wind speed is a local number. Do not guess it.
            </p>
          </article>
          <article className="panel">
            <h3>Flashing · R903.2 and R905.2.8</h3>
            <p>
              Flashings go at wall and roof intersections, wherever the slope changes direction, and around openings. Where the metal is specified, it is corrosion resistant and generally not thinner than 0.019 inch (26 gauge galvanized) at those locations. A cricket or saddle is required on the ridge side of any chimney or penetration more than 30 inches wide measured across the slope. Valley linings for asphalt shingles are specified in R905.2.8.2: open metal, roll roofing, or the closed-valley options the section lists.
            </p>
          </article>
          <article className="panel">
            <h3>Other slope floors, so you do not put shingles in the wrong place</h3>
            <p>
              Clay and concrete tile: 2½:12 minimum, double underlayment below 4:12 (R905.3). Metal roof shingles: not below 3:12 (R905.4). Slate: 4:12 minimum (R905.6). Wood shingles and wood shakes: 3:12 minimum (R905.7 and R905.8). Built-up roofs: design slope generally ¼:12, except coal-tar at ⅛:12 (R905.9). Single-ply membranes follow their listing and the low-slope sections. These are model-code floors. The product’s own approval can be stricter.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Permits, inspections, hail, and Class 4</h2>
        <div className="two">
          <article className="panel">
            <h3>Permits</h3>
            <p>
              Denver, Brighton, Aurora, Thornton, and Adams County all permit residential reroofs. Expect a licensed contractor in the cities that require it, a mid-roof look at the deck and underlayment on many of them, and a final. The inspection card is part of the job, not paperwork after the fact. A homeowner-pulled permit still has to meet the same code.
            </p>
          </article>
          <article className="panel">
            <h3>Hail, wind, and Class 4 discounts</h3>
            <p>
              The Front Range is a hail region. The building code tells you how to fasten and flash a roof. It does not tell an insurer what to pay, and it does not set the premium discount for a Class 4 shingle. UL 2218 Class 4 is the impact test carriers ask about. Discounts are filed by each insurer and usually require the whole roof, not a repair, plus proof of the rating. Send the homeowner to their agent for the form. Do not promise a percentage.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
