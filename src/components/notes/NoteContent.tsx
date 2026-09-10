import React from "react";
import type { NoteChapter } from "../../types/notes";
import { AlertTriangle, BookMarked, Sparkles, Check } from "lucide-react";

interface NoteContentProps {
  chapter: NoteChapter;
  onNavigateChapter?: (chapterId: string) => void;
  onNavigatePractice?: () => void;
}

export const NoteContent: React.FC<NoteContentProps> = ({
  chapter,
  onNavigateChapter,
  onNavigatePractice,
}) => {
  return (
    <article className="max-w-3xl space-y-12">
      {/* Chapter Title Header */}
      <div className="space-y-3 pb-6 border-b border-outline-variant">
        <div className="flex items-center space-x-2 text-xs font-mono text-secondary">
          <span>{chapter.chapterNumber}</span>
          <span>/</span>
          <span>{chapter.subjectTitle}</span>
          <span>/</span>
          <span>{chapter.volume}</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-on-surface font-normal leading-tight">
          {chapter.title}
        </h1>
        <p className="font-display italic text-base sm:text-lg text-secondary leading-relaxed">
          {chapter.quote}
        </p>
      </div>

      {/* 1. Philosophical Overview */}
      <section className="space-y-4" id={chapter.overview.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.overview.title}
        </h2>
        {chapter.overview.content.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}
      </section>

      {/* 2. Roadmap Position */}
      <section
        className="space-y-4 bg-surface-container/60 p-6 rounded-[12px] border border-outline-variant"
        id={chapter.roadmapPosition.id}
      >
        <h2 className="font-display text-xl text-on-surface flex items-center gap-2">
          <BookMarked className="w-4 h-4 text-tertiary" />
          <span>{chapter.roadmapPosition.title}</span>
        </h2>
        {chapter.roadmapPosition.content.map((p, idx) => (
          <p
            key={idx}
            className="text-xs sm:text-sm text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}
      </section>

      {/* 3. Core Fundamentals & Rules */}
      <section className="space-y-4" id={chapter.fundamentals.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.fundamentals.title}
        </h2>
        {chapter.fundamentals.content.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}

        {chapter.fundamentals.rules && (
          <div className="rounded-[12px] border border-outline-variant bg-surface-container p-6 space-y-3 shadow-terra-card">
            <span className="font-mono text-xs uppercase tracking-widest text-tertiary font-semibold">
              The Fundamental Multiplier Canon
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-on-surface pt-2">
              {chapter.fundamentals.rules.map((r, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-surface border border-outline-variant space-y-0.5"
                >
                  <span className="text-secondary block text-[10px]">
                    {r.label}
                  </span>
                  <span className="font-bold text-sm text-on-surface block">
                    {r.fraction} ({r.multiplier})
                  </span>
                  {r.detail && (
                    <span className="text-[10px] text-tertiary block">
                      {r.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. Theoretical Canon & Math Callout */}
      <section className="space-y-4" id={chapter.theory.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.theory.title}
        </h2>
        {chapter.theory.content.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}

        {chapter.theory.mathCallout && (
          <div className="p-5 bg-surface-container rounded-[12px] border border-outline-variant font-display italic text-center text-on-surface text-base sm:text-lg shadow-terra-card">
            {chapter.theory.mathCallout}
          </div>
        )}
      </section>

      {/* 5. Solved Worked Examples */}
      <section className="space-y-6" id={chapter.workedExamples.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.workedExamples.title}
        </h2>
        {chapter.workedExamples.content.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}

        {chapter.workedExamples.examples && (
          <div className="space-y-6">
            {chapter.workedExamples.examples.map((ex) => (
              <div
                key={ex.problemNumber}
                className="p-6 rounded-[12px] border border-outline-variant bg-surface space-y-4 shadow-terra-card"
              >
                <div className="flex items-center space-x-2 text-xs font-mono text-tertiary font-semibold uppercase">
                  <span>Worked Example {ex.problemNumber}</span>
                </div>

                <p className="font-display text-base text-on-surface font-medium">
                  {ex.question}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded bg-surface-container border border-outline-variant space-y-1">
                    <span className="font-mono font-semibold text-secondary uppercase text-[10px] block">
                      Standard School Method (Slow):
                    </span>
                    <p className="text-secondary leading-relaxed">
                      {ex.traditionalMethod}
                    </p>
                  </div>

                  <div className="p-3.5 rounded bg-primary/10 border border-primary/30 space-y-1">
                    <span className="font-mono font-semibold text-primary uppercase text-[10px] block">
                      Intuitive CAT Method (Fast):
                    </span>
                    <p className="text-on-surface leading-relaxed font-medium">
                      {ex.intuitiveMethod}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded bg-surface-container border border-outline-variant text-xs text-secondary flex items-start space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-tertiary flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-on-surface">Pro Insight:</strong>{" "}
                    {ex.proTip}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 6. Practical Application */}
      <section className="space-y-4" id={chapter.practicalApplication.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.practicalApplication.title}
        </h2>
        {chapter.practicalApplication.content.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}
      </section>

      {/* 7. Practice Drills */}
      <section className="space-y-4" id={chapter.practiceDrills.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.practiceDrills.title}
        </h2>
        <div className="space-y-2.5">
          {chapter.practiceDrills.content.map((drill, idx) => (
            <div
              key={idx}
              className="p-4 rounded-[12px] bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface/90"
            >
              {drill}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Common Mistakes & Examiner Traps */}
      <section className="space-y-4" id={chapter.commonMistakes.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.commonMistakes.title}
        </h2>
        {chapter.commonMistakes.content.map((p, idx) => (
          <p
            key={idx}
            className="text-sm sm:text-base text-secondary leading-relaxed"
          >
            {p}
          </p>
        ))}

        {chapter.commonMistakes.mistake && (
          <div className="p-6 rounded-[12px] border-l-4 border-tertiary bg-surface-container space-y-3 shadow-terra-card">
            <h4 className="font-display font-semibold text-on-surface text-base flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-tertiary" />
              <span>{chapter.commonMistakes.mistake.title}</span>
            </h4>
            <div className="text-xs sm:text-sm text-secondary space-y-2">
              <p>
                <strong className="text-error">Novice Trap:</strong>{" "}
                {chapter.commonMistakes.mistake.trap}
              </p>
              <p>
                <strong className="text-primary">Sanctuary Antidote:</strong>{" "}
                {chapter.commonMistakes.mistake.antidote}
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 9. Rapid Revision Sheet */}
      <section className="space-y-4" id={chapter.rapidRevision.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.rapidRevision.title}
        </h2>
        {chapter.rapidRevision.revisionBullets && (
          <div className="p-6 rounded-[12px] bg-surface border border-outline-variant space-y-2.5 shadow-terra-card">
            {chapter.rapidRevision.revisionBullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-2.5 text-xs sm:text-sm text-on-surface"
              >
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 10. Curated Resources */}
      <section className="space-y-4" id={chapter.curatedResources.id}>
        <h2 className="font-display text-2xl text-on-surface">
          {chapter.curatedResources.title}
        </h2>
        {chapter.curatedResources.resources && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapter.curatedResources.resources.map((res, idx) => (
              <div
                key={idx}
                className="p-4 rounded-[12px] border border-outline-variant bg-surface-container hover:border-primary transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-tertiary font-semibold block">
                    {res.type}
                  </span>
                  <span className="text-xs font-medium text-on-surface block mt-0.5">
                    {res.title}
                  </span>
                </div>
                <span className="text-xs font-semibold text-primary underline">
                  {res.linkText} →
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom Navigation between chapters & Practice link */}
      <div className="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
        {chapter.prevChapterId ? (
          <button
            onClick={() => onNavigateChapter?.(chapter.prevChapterId!)}
            className="text-xs text-secondary hover:text-on-surface font-medium cursor-pointer"
          >
            ← Previous Chapter
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center space-x-3">
          {onNavigatePractice && (
            <button
              onClick={onNavigatePractice}
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all shadow-terra-card cursor-pointer"
            >
              Practice Targeted Drills →
            </button>
          )}

          {chapter.nextChapterId && (
            <button
              onClick={() => onNavigateChapter?.(chapter.nextChapterId!)}
              className="px-5 py-2.5 rounded-full border border-outline-variant hover:border-primary text-xs font-semibold text-on-surface bg-surface-container transition-all cursor-pointer"
            >
              Next Chapter →
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
