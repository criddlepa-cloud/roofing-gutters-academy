"use client";

import { useState } from "react";
import { GutterSvg, gutterParts } from "@/components/GutterSvg";

export function GutterExplorer() {
  const [active, setActive] = useState("k-style");
  const part = gutterParts.find((item) => item.id === active) ?? gutterParts[0];
  return (
    <div className="explorer">
      <div>
        <div className="diagram-card plain">
          <GutterSvg active={active} onSelect={setActive} />
        </div>
        <div className="part-list">
          {gutterParts.map((item) => (
            <button key={item.id} type="button" aria-pressed={item.id === active} onClick={() => setActive(item.id)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <article className="panel detail" aria-live="polite">
        <p className="kicker">Gutter part</p>
        <h3>{part.name}</h3>
        <p>{part.text}</p>
      </article>
    </div>
  );
}
