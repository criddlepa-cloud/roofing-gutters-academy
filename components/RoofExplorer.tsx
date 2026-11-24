"use client";

import { useState } from "react";
import { Figure } from "@/components/Figure";
import { HouseSvg } from "@/components/HouseSvg";
import { FlashingSvg, ValleySvg } from "@/components/ValleySvg";
import { LayerSvg, RakeLapSvg } from "@/components/LayerSvg";
import { roofParts } from "@/lib/parts";

const hidden = new Set(["starter", "underlayment", "ice-water", "decking"]);

export function RoofExplorer() {
  const [active, setActive] = useState<string>("ridge");
  const part = roofParts.find((item) => item.id === active) ?? roofParts[0];
  function select(id: string) {
    if (roofParts.some((item) => item.id === id)) setActive(id);
  }

  return (
    <div>
      <div className="explorer">
        <div>
          <div className="diagram-card">
            <HouseSvg active={active} onSelect={select} />
          </div>
          <div className="part-list" role="listbox" aria-label="Roof parts">
            {roofParts.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={item.id === active}
                onClick={() => setActive(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <article className="panel detail" aria-live="polite">
          <p className="kicker">Selected part</p>
          <h3>{part.name}</h3>
          <p>{part.summary}</p>
          <p className="field-label">What to look at</p>
          <p className="look">{part.look}</p>
          <p className="field-label">On a sales call</p>
          <p>{part.field}</p>
          {hidden.has(part.id) ? (
            <p className="look">This part is covered once the shingles are on. The cross-section below is where it lives.</p>
          ) : null}
        </article>
      </div>

      {part.photo ? (
        <div className="section">
          <Figure file={part.photo} alt={part.photoAlt || part.name} caption={part.photoCaption || part.name} />
        </div>
      ) : null}

      <div className="section" id="layers">
        <h2>The layers, cut through at the eave</h2>
        <p className="section-intro">
          From the attic up: rafters, then decking, then the ice-barrier zone at the eave, then underlayment, starter, and shingles. The drip edge is the metal kick at the outside corner. Select a layer.
        </p>
        <div className="diagram-card plain">
          <LayerSvg active={active} onSelect={select} />
        </div>
      </div>

      <div className="section">
        <h2>Eave lap versus rake lap</h2>
        <div className="diagram-card plain">
          <RakeLapSvg />
        </div>
      </div>

      <div className="section">
        <h2>Three ways to shingle a valley</h2>
        <p>Water from two planes meets here. The lining matters more than the pattern. Open metal is the easiest to inspect and the easiest to clear.</p>
        <div className="three">
          <div className="diagram-card plain">
            <ValleySvg kind="open" />
            <p>Open. A W-metal valley stays visible. Shingles are trimmed back on both sides so water stays in the metal.</p>
          </div>
          <div className="diagram-card plain">
            <ValleySvg kind="closed" />
            <p>Closed-cut. Shingles from one side run through. The other side is cut a couple of inches off the centerline.</p>
          </div>
          <div className="diagram-card plain">
            <ValleySvg kind="woven" />
            <p>Woven. Courses lace across the valley. It looks continuous and it is the hardest of the three to read for hail.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Flashing, up close</h2>
        <div className="three">
          <div className="diagram-card plain">
            <FlashingSvg kind="step" />
          </div>
          <div className="diagram-card plain">
            <FlashingSvg kind="chimney" />
          </div>
          <div className="diagram-card plain">
            <FlashingSvg kind="boot" />
          </div>
        </div>
      </div>
    </div>
  );
}
