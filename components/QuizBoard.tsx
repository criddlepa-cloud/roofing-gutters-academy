"use client";

import { useMemo, useState } from "react";
import { HouseSvg } from "@/components/HouseSvg";
import { LayerSvg } from "@/components/LayerSvg";
import { GutterSvg } from "@/components/GutterSvg";
import { FlashingSvg, ValleySvg } from "@/components/ValleySvg";
import { HailShingleArt, IceDamArt } from "@/components/DamageArt";
import { quizDeck, type QuizCard } from "@/lib/quiz";

function norm(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9& ]/g, " ").replace(/\s+/g, " ").trim();
}

function isRight(guess: string, card: QuizCard) {
  const g = norm(guess);
  if (g.length < 3) return false;
  return card.accept.some((alias) => {
    const n = norm(alias);
    return g === n || (n.length >= 4 && (g.includes(n) || n.includes(g)));
  });
}

function Visual({ card }: { card: QuizCard }) {
  if (card.visual === "house") return <HouseSvg active={card.highlight ?? null} onSelect={() => undefined} />;
  if (card.visual === "layer") return <LayerSvg active={card.highlight ?? null} onSelect={() => undefined} />;
  if (card.visual === "gutter") return <GutterSvg active={card.highlight ?? null} onSelect={() => undefined} />;
  if (card.visual === "valley-open") return <ValleySvg kind="open" />;
  if (card.visual === "valley-closed") return <ValleySvg kind="closed" />;
  if (card.visual === "valley-woven") return <ValleySvg kind="woven" />;
  if (card.visual === "step") return <FlashingSvg kind="step" />;
  if (card.visual === "boot") return <FlashingSvg kind="boot" />;
  if (card.visual === "chimney") return <FlashingSvg kind="chimney" />;
  if (card.visual === "hail") return <HailShingleArt />;
  if (card.visual === "ice") return <IceDamArt />;
  if (card.visual === "photo" && card.photo) {
    return <img src={`/images/${card.photo}`} alt={card.photoAlt || ""} />;
  }
  return null;
}

export function QuizBoard() {
  const deck = useMemo(() => quizDeck, []);
  const [mode, setMode] = useState<"cards" | "choice">("cards");
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [marks, setMarks] = useState<Array<"ok" | "no" | null>>(Array(deck.length).fill(null));
  const [picked, setPicked] = useState<number | null>(null);

  const card = deck[index];
  const done = index >= deck.length;
  const score = marks.filter((mark) => mark === "ok").length;

  function restart() {
    setIndex(0);
    setGuess("");
    setRevealed(false);
    setMarks(Array(deck.length).fill(null));
    setPicked(null);
  }

  function mark(ok: boolean) {
    setMarks((current) => {
      const next = [...current];
      next[index] = ok ? "ok" : "no";
      return next;
    });
  }

  function next() {
    setIndex((value) => value + 1);
    setGuess("");
    setRevealed(false);
    setPicked(null);
  }

  function reveal() {
    setRevealed(true);
    if (guess.trim()) mark(isRight(guess, card));
  }

  if (done) {
    return (
      <div className="quiz-card">
        <h2>Score: {score} of {deck.length}</h2>
        <p>
          {score === deck.length
            ? "You named the whole deck."
            : score >= deck.length * 0.7
              ? "Solid. Review the ones you missed in the glossary, then run it again."
              : "Walk the anatomy page with the diagram, then try the deck again."}
        </p>
        <div className="progress" aria-hidden="true">
          {marks.map((mark, i) => (
            <i key={deck[i].id} className={mark === "ok" ? "ok" : "no"} />
          ))}
        </div>
        <div className="btn-row">
          <button className="btn" type="button" onClick={restart}>
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="stack">
      <div className="btn-row">
        <button className={mode === "cards" ? "btn" : "btn ghost"} type="button" onClick={() => { setMode("cards"); restart(); }}>
          Flashcards
        </button>
        <button className={mode === "choice" ? "btn" : "btn ghost"} type="button" onClick={() => { setMode("choice"); restart(); }}>
          Multiple choice
        </button>
      </div>
      <div className="score-bar">
        <span>
          Card {index + 1} of {deck.length}
        </span>
        <span>
          Score {score}
        </span>
      </div>
      <div className="progress" aria-hidden="true">
        {marks.map((mark, i) => (
          <i key={deck[i].id} className={`${i === index ? "now " : ""}${mark === "ok" ? "ok" : mark === "no" ? "no" : ""}`} />
        ))}
      </div>
      <div className="quiz-layout">
        <div className="diagram-card plain">
          <Visual card={card} />
        </div>
        <div className="quiz-card">
          <h2>{card.prompt}</h2>
          {mode === "cards" ? (
            <>
              <label htmlFor="guess">Your guess</label>
              <input
                id="guess"
                className="guess"
                value={guess}
                disabled={revealed}
                onChange={(event) => setGuess(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !revealed) reveal();
                }}
              />
              {!revealed ? (
                <button className="btn" type="button" onClick={reveal}>
                  Reveal answer
                </button>
              ) : (
                <div>
                  <p>
                    <strong>{card.answer}.</strong> {card.explain}
                  </p>
                  {guess.trim() ? (
                    <p>{isRight(guess, card) ? "Your guess matched." : `You wrote “${guess.trim()}.”`}</p>
                  ) : (
                    <div className="btn-row">
                      <button className="btn good" type="button" onClick={() => mark(true)}>
                        I knew it
                      </button>
                      <button className="btn bad" type="button" onClick={() => mark(false)}>
                        I missed it
                      </button>
                    </div>
                  )}
                  <div className="btn-row">
                    <button className="btn secondary" type="button" onClick={next} disabled={!guess.trim() && marks[index] === null}>
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="choices">
                {card.choices.map((choice, choiceIndex) => {
                  const correct = choice === card.answer;
                  const show = picked !== null;
                  const className = `choice${show && correct ? " correct" : ""}${show && picked === choiceIndex && !correct ? " wrong" : ""}`;
                  return (
                    <button
                      key={choice}
                      type="button"
                      className={className}
                      disabled={picked !== null}
                      onClick={() => {
                        setPicked(choiceIndex);
                        mark(correct);
                      }}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
              {picked !== null ? (
                <>
                  <p>{card.explain}</p>
                  <button className="btn" type="button" onClick={next}>
                    Next
                  </button>
                </>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
