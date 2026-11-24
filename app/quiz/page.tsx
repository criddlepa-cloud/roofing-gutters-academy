import type { Metadata } from "next";
import { PageHeader } from "@/components/SiteChrome";
import { QuizBoard } from "@/components/QuizBoard";

export const metadata: Metadata = { title: "Quiz" };

export default function QuizPage() {
  return (
    <>
      <PageHeader
        kicker="Section 7"
        title="Name it, then check."
        lede="Each card shows a diagram or a photo. On a flashcard, guess the term and reveal the answer. If you did not type a guess, mark whether you knew it. Multiple choice scores the first tap. Sixteen cards."
      />
      <QuizBoard />
    </>
  );
}
