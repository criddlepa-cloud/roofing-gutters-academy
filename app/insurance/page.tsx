import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";

export const metadata: Metadata = { title: "Insurance claims" };

const steps = [
  ["The storm", "Hail or wind happens. Write down the date. A claim needs a date of loss. The homeowner’s policy, not the contractor, is the contract with the insurer."],
  ["Look, and say only what you can see", "Missing shingles, creased tabs, soft spots in the field, dents in gutters and vents, a leak stain. Separate that from algae, curl, and a 20-year-old eave. Photos before anyone tears anything off."],
  ["The homeowner files", "They call their carrier or agent and open a claim. You can help them find the declarations page: dwelling limit, wind/hail deductible, replacement cost or ACV, ordinance or law, cosmetic exclusion. You do not adjust the claim."],
  ["The adjuster meeting", "Walk the roof with the adjuster if the homeowner wants you there and you have a contract that allows you to discuss scope. Agree on what is visible. Do not argue a price list in the driveway if you have not measured."],
  ["Scope and estimate", "The carrier’s estimate is usually built in Xactimate from a zip-code price list. Each line is a quantity and a unit price: tear-off, laminated shingles, ridge, drip edge, ice barrier, steep charge, a story charge. It prices what was scoped. It does not know the deck is soft."],
  ["ACV, RCV, and depreciation", "Replacement cost is the cost of like kind and quality. Actual cash value is that number minus depreciation. On many RCV policies the first check is ACV. The depreciation is recoverable after the work is finished and invoiced. If the roof endorsement is ACV, that second check does not exist. Read the form."],
  ["The deductible", "The homeowner pays it. In Colorado it is often a percentage of Coverage A for wind and hail, which on a $600,000 dwelling is several thousand dollars. It is their money. It is not a coupon."],
  ["Supplements", "Tear-off finds a second layer, rotten decking, a chimney that needs a cricket, fascia you could not see. Document it with photos and measurements and ask for those lines to be added. A supplement is not a new claim, and a denial of a supplement is treated differently under the 72-hour statute than a denial of the original claim."],
  ["Overhead and profit", "O&P, commonly figured at 10 percent overhead and 10 percent profit, is for jobs that need coordination across trades. A straight shingle replacement often does not get it. A roof plus gutters, fascia, siding, and interior drywall sometimes does. Ask. Do not bury it."],
  ["Code upgrade", "Ordinance or law coverage pays the extra cost to meet today’s code on a covered loss: drip edge, a second layer that must come off, deck that is no longer legal to shingle over, ice barrier if that city requires it. It has its own limit. If the policy does not have it, the code work is still required and the homeowner pays the difference."],
  ["Invoice and close", "Finish the work, pull the final, invoice for the approved scope, and the homeowner or the mortgage company collects recoverable depreciation if the policy pays it. The mortgagee is often on the check. Nobody gets paid twice, and nobody waives the deductible to make the numbers match."],
];

const terms = [
  ["Xactimate", "Verisk’s estimating program. The price list is local. The line items are a shared language with the adjuster. Your company’s bid can differ. The homeowner should see both and understand why."],
  ["RCV", "Replacement cost value. What it costs to put back like kind and quality, before depreciation is subtracted as the final word."],
  ["ACV", "Actual cash value. RCV minus depreciation. Some carriers put older roofs on ACV by endorsement. That is a coverage fact, not an insult."],
  ["Recoverable depreciation", "The holdback on an RCV claim, released after the work is done. Non-recoverable depreciation is the part an ACV settlement never pays."],
  ["Deductible", "The homeowner’s share of a covered loss. Percentage deductibles surprise people. Do the math with them from the declarations page."],
  ["Supplement", "Added scope after the first estimate, with proof."],
  ["O&P", "Overhead and profit. Not automatic."],
  ["Ordinance or law", "Code-upgrade coverage. A limit, not a blank check, and not on every policy."],
  ["Matching", "Whether the carrier owes for undamaged slopes so the roof looks like one roof. Policy language and Colorado case law both matter. Do not promise a full replacement because one slope is bruised."],
  ["Cosmetic exclusion", "Common on metal. Dents that do not open the roof may not be paid. Functional damage is a different question."],
  ["Like kind and quality", "The replacement standard. Class 4 instead of the original 3-tab is an upgrade unless the policy or a code item gets you there."],
  ["Date of loss", "The storm date on the claim. Damage from a different storm, or from age, is not that claim."],
];

export default function InsurancePage() {
  return (
    <>
      <PageHeader
        kicker="Section 6"
        title="A claim is a process with rules."
        lede="You will stand next to homeowners while an insurer decides what to pay. Know the steps, the words, and the Colorado statutes that limit what a roofing contractor may promise. This is education for that conversation. It is not legal advice, and it is not a license to adjust a claim."
      />

      <ol className="steps">
        {steps.map(([title, text], index) => (
          <li key={title}>
            <span className="step-num">{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <section className="section">
        <h2>The words on the estimate</h2>
        <div className="stack">
          {terms.map(([title, text]) => (
            <article key={title} className="panel">
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Colorado, specifically: C.R.S. 6-22-101 and the sections after it</h2>
        <p>
          Article 22 of Title 6 is the residential roofing statute. The legislature said it was writing it to require a written contract, to let owners cancel and recover a deposit, and to stop contractors from paying or rebating a deductible. The official compilation is the{" "}
          <a href="https://leg.colorado.gov/sites/default/files/images/olls/crs2024-title-06.pdf">Colorado Revised Statutes, Title 6 (PDF)</a>. Readable section pages:
        </p>
        <ul>
          <li>
            <a href="https://colorado.public.law/statutes/crs_6-22-101">6-22-101</a> legislative declaration
          </li>
          <li>
            <a href="https://colorado.public.law/statutes/crs_6-22-103">6-22-103</a> the written contract
          </li>
          <li>
            <a href="https://colorado.public.law/statutes/crs_6-22-104">6-22-104</a> insurance proceeds and the right to rescind
          </li>
          <li>
            <a href="https://colorado.public.law/statutes/crs_6-22-105">6-22-105</a> deductible waiver, and public adjusters
          </li>
        </ul>

        <div className="stack">
          <article className="panel">
            <h3>The contract, before the work · 6-22-103</h3>
            <p>Before roofing work starts, the contractor gives the owner a written contract signed by both. It has to state, at least:</p>
            <ul>
              <li>Scope of services and materials.</li>
              <li>Approximate dates.</li>
              <li>Approximate cost based on damage known when the contract is signed.</li>
              <li>The contractor’s physical address, email, phone, and any other contact.</li>
              <li>Surety and liability insurer, and how to reach them, if applicable.</li>
              <li>The cancellation and deposit-refund policy, including a right to rescind and get the deposit back within 72 hours after entering the contract.</li>
              <li>A statement that the owner may also rescind under 6-22-104.</li>
              <li>If insurance proceeds will pay for the work, a statement that the contractor cannot pay, waive, rebate, or promise to pay, waive, or rebate any part of the deductible.</li>
            </ul>
            <p>
              On the face of the contract, in bold, a statement that any payment from the owner is held in trust until materials are delivered to the property or a majority of the roofing work is done.
            </p>
          </article>
          <article className="panel">
            <h3>72 hours after a denial · 6-22-104</h3>
            <p>
              There are two different 72-hour clocks. The contract itself gives 72 hours after signing to rescind and recover the deposit. Separately, if the job will be paid by a property and casualty policy, the owner may rescind within 72 hours after they receive written notice that the insurer denied the claim in whole or in part. Notice to the contractor can be electronic, mailed, or handed over, at the address in the contract.
            </p>
            <p>
              That denial right does not apply to a supplement denial when the extra damage could not reasonably have been foreseen at the initial inspection or when the first contract was signed. Within 10 days of a proper rescission the contractor returns payments or deposit, except the reasonable value of work already performed in a workmanlike way, and materials already installed.
            </p>
          </article>
          <article className="callout warn">
            <h3>The deductible and the adjuster line · 6-22-105</h3>
            <p>
              If the roof will be paid by a property and casualty policy, the contractor shall not advertise or promise to pay, waive, or rebate all or part of the deductible. If they do, the insurer does not have to consider that contractor’s estimate, and the owner or the insurer can sue for the damage caused.
            </p>
            <p>
              A roofing contractor soliciting work in Colorado shall not claim to be, or act as, a public adjuster. Public adjusters are licensed under section 10-2-417. The same statute says a contractor with a valid contract may still discuss the scope of repairs with the insurer on the owner’s behalf. Discussing scope is not the same thing as adjusting the claim, and it is not the same thing as telling the homeowner to skip the deductible.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
