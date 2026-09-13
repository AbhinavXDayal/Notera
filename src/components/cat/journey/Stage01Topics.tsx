import React, { useState } from "react";
import { JourneyTopicAccordion } from "./JourneyTopicAccordion";

interface Stage01TopicsProps {
  defaultOpenTopicId?: string | null;
  onAdvanceNextStage?: () => void;
}

export const Stage01Topics: React.FC<Stage01TopicsProps> = ({
  defaultOpenTopicId = "what-is-cat",
}) => {
  const [openTopicIds, setOpenTopicIds] = useState<Record<string, boolean>>(
    () => {
      if (defaultOpenTopicId) {
        return { [defaultOpenTopicId]: true };
      }
      return { "what-is-cat": true };
    },
  );

  const toggleTopic = (topicId: string) => {
    setOpenTopicIds((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  return (
    <div className="space-y-4">
      {/* ─────────────────────────────────────────────────────────────
          TOPIC 1: WHAT IS CAT?
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="what-is-cat"
        number="01"
        title="What is CAT?"
        isOpen={Boolean(openTopicIds["what-is-cat"])}
        onToggle={() => toggleTopic("what-is-cat")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            The{" "}
            <strong className="text-on-surface">
              Common Admission Test (CAT)
            </strong>{" "}
            is India’s premier national-level computer-based entrance
            examination conducted annually by the Indian Institutes of
            Management (IIMs) for admission to top-tier postgraduate management
            programs (MBA/PGP).
          </p>
          <p>
            Rather than testing rote memorization, CAT evaluates speed,
            comprehension, analytical reasoning, and decisive decision-making
            under strict time constraints across three locked 40-minute
            sections: <span className="text-on-surface font-medium">VARC</span>,{" "}
            <span className="text-on-surface font-medium">DILR</span>, and{" "}
            <span className="text-on-surface font-medium">QA</span>.
          </p>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 2: SYLLABUS
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="syllabus"
        number="02"
        title="Syllabus"
        isOpen={Boolean(openTopicIds["syllabus"])}
        onToggle={() => toggleTopic("syllabus")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-4">
          <p>
            The CAT exam syllabus comprises three core sections designed to
            evaluate analytical ability, quantitative reasoning, and verbal
            comprehension:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* QA Pillar */}
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  Quantitative Aptitude (QA)
                </span>
                <span className="text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/50">
                  22 Qs • 40m
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <p className="font-semibold text-on-surface">
                    Arithmetic (~40–45%)
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Percentages, Profit & Loss, Simple & Compound Interest,
                    Ratio & Proportion, Time Speed Distance (Races, Trains,
                    Escalators), Time & Work, Averages & Mixtures.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    Algebra (~30–35%)
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Linear & Quadratic Equations, Polynomials, Inequalities,
                    Modulus, Functions & Graphs, Maxima-Minima, Logarithms,
                    Sequences & Series.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    Geometry & Mensuration (~15–20%)
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Triangles, Circles, Quadrilaterals, Coordinate Geometry,
                    Trigonometry, 2D & 3D Mensuration.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    Number Systems & Modern Math (~10%)
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Divisibility, Remainders, Factors, Permutations &
                    Combinations, Probability, Set Theory.
                  </p>
                </div>
              </div>
            </div>

            {/* VARC Pillar */}
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  Verbal Ability & RC (VARC)
                </span>
                <span className="text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/50">
                  24 Qs • 40m
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <p className="font-semibold text-on-surface">
                    Reading Comprehension (~66%)
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    4 Dense Passages (~400–500 words each) covering Philosophy,
                    Sociology, Economics, Psychology, History, Science &
                    Technology.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    RC Core Question Archetypes
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Central Theme & Main Idea, Author Tone & Attitude, Inference
                    & Unstated Premises, Contextual Meaning, Logical Conclusion.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    Verbal Ability (~34%)
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Para Jumbles (TITA sequence ordering), Paragraph Summary
                    (thesis compression), Odd Sentence Out, Para Completion &
                    Sentence Insertion.
                  </p>
                </div>
              </div>
            </div>

            {/* DILR Pillar */}
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2.5">
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                  Data Interpretation & LR (DILR)
                </span>
                <span className="text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/50">
                  20–22 Qs • 40m
                </span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div>
                  <p className="font-semibold text-on-surface">
                    Logical Reasoning
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Linear & Circular Arrangements, Matrix Attribute Grids,
                    Games & Tournaments (Round-Robin, Knockouts), Truth-Teller &
                    Liar Binary Deduction.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    Data Interpretation
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Complex Multi-Layer Tables, Bar & Line Charts, Pie Charts,
                    Radar/Spider Charts, Bubble & Scatter Plots, Missing Data
                    Caselets.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-on-surface">
                    Hybrid Analytical Sets
                  </p>
                  <p className="text-secondary/90 font-light mt-0.5">
                    Network Routes & Max Flow, Venn Diagrams (2, 3, 4 Sets
                    Maxima-Minima), Scheduling & Optimization Constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </JourneyTopicAccordion>
    </div>
  );
};
