"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/lib/glossary";

const categories = ["All", ...Array.from(new Set(glossary.map((term) => term.category)))];

export function GlossaryBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary
      .filter((term) => category === "All" || term.category === category)
      .filter((term) => !q || `${term.term} ${term.definition}`.toLowerCase().includes(q))
      .slice()
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [query, category]);

  const letters = Array.from(new Set(terms.map((term) => term.term[0].toUpperCase())));

  return (
    <div>
      <div className="glossary-tools">
        <input
          type="search"
          placeholder="Search terms"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search glossary"
        />
      </div>
      <div className="part-list">
        {categories.map((item) => (
          <button key={item} type="button" className="chip" aria-pressed={item === category} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="alpha">
        {letters.map((letter) => (
          <a key={letter} href={`#letter-${letter}`}>
            {letter}
          </a>
        ))}
      </div>
      <p>{terms.length} terms</p>
      <div className="term-list">
        {terms.map((term, index) => {
          const letter = term.term[0].toUpperCase();
          const show = index === 0 || terms[index - 1].term[0].toUpperCase() !== letter;
          return (
            <article key={term.term} className="term" id={show ? `letter-${letter}` : undefined}>
              <h3>
                {term.term}
                <span>{term.category}</span>
              </h3>
              <p>{term.definition}</p>
              {term.photo ? (
                <img src={`/images/${term.photo}`} alt={term.term} style={{ width: "100%", maxHeight: 220, objectFit: "cover", borderRadius: 12 }} />
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
