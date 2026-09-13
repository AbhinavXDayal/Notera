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
          TOPIC 2: QA, VARC & DILR
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="pillars"
        number="02"
        title="QA, VARC & DILR"
        isOpen={Boolean(openTopicIds["pillars"])}
        onToggle={() => toggleTopic("pillars")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            The CAT exam consists of three distinct sections, each allocated a
            strict, non-switchable 40-minute window:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-secondary">
            <li>
              <strong className="text-on-surface">
                VARC (Verbal Ability & Reading Comprehension):
              </strong>{" "}
              Focuses on argument analysis, inference, dense academic passages,
              and verbal logic (24 questions).
            </li>
            <li>
              <strong className="text-on-surface">
                DILR (Data Interpretation & Logical Reasoning):
              </strong>{" "}
              Tests multi-dimensional puzzle modeling, data analysis, and
              selective set cracking (20–22 questions across 4–5 sets).
            </li>
            <li>
              <strong className="text-on-surface">
                QA (Quantitative Ability):
              </strong>{" "}
              Tests mathematical problem solving with ~70% weightage on
              Arithmetic and Algebra, followed by Geometry and Modern Math (22
              questions).
            </li>
          </ul>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 3: EXAM PATTERN & STRUCTURE
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="pattern"
        number="03"
        title="Exam Pattern & Structure"
        isOpen={Boolean(openTopicIds["pattern"])}
        onToggle={() => toggleTopic("pattern")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            CAT is a 120-minute computer-based exam consisting of 66 total
            questions with a fixed sectional sequence (
            <span className="text-on-surface font-medium">
              VARC → DILR → QA
            </span>
            ):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-secondary">
            <li>
              <strong className="text-on-surface">Marking Scheme:</strong> +3
              marks for every correct answer, -1 mark penalty for incorrect
              MCQs. Non-MCQs (TITA — Type In The Answer) carry zero negative
              marking penalty.
            </li>
            <li>
              <strong className="text-on-surface">Sectional Lock:</strong> 40
              minutes per section with an automatic timer transition. You
              cannot return to previous sections or jump ahead.
            </li>
            <li>
              <strong className="text-on-surface">Double Hurdle:</strong> Top
              IIMs require candidates to clear both overall and individual
              sectional percentile cutoffs (typically 80–85+ percentile per
              section).
            </li>
          </ul>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 4: PERCENTILE VS SCORE
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="score-percentile"
        number="04"
        title="Percentile vs Score"
        isOpen={Boolean(openTopicIds["score-percentile"])}
        onToggle={() => toggleTopic("score-percentile")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            Your <strong className="text-on-surface">Raw Score</strong> is the
            total marks earned (+3 / -1), while your{" "}
            <strong className="text-on-surface">Percentile</strong> represents
            your relative rank among all test-takers nationwide.
          </p>
          <p>
            Because CAT is an exam of relative accuracy and selection, you do
            not need 90%+ raw marks. Historically:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-secondary">
            <li>
              <strong className="text-on-surface">
                ~45–50% Raw Score (~85–95 marks / 198):
              </strong>{" "}
              Typically yields a{" "}
              <strong className="text-on-surface">99+ percentile</strong>.
            </li>
            <li>
              <strong className="text-on-surface">
                ~35–40% Raw Score (~70–80 marks / 198):
              </strong>{" "}
              Typically yields a{" "}
              <strong className="text-on-surface">95–98 percentile</strong>.
            </li>
            <li>
              <strong className="text-on-surface">
                ~25–30% Raw Score (~50–60 marks / 198):
              </strong>{" "}
              Typically yields a{" "}
              <strong className="text-on-surface">90 percentile</strong>.
            </li>
          </ul>
          <p>
            Scores are normalized across test slots to account for slight
            variations in difficulty.
          </p>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 5: TARGET COLLEGES
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="colleges"
        number="05"
        title="Target Colleges"
        isOpen={Boolean(openTopicIds["colleges"])}
        onToggle={() => toggleTopic("colleges")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            Setting clear institutional bands helps you anchor your percentile
            targets and preparation strategy:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-secondary">
            <li>
              <strong className="text-on-surface">
                Dream Targets (99+ %ile):
              </strong>{" "}
              IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, and FMS
              Delhi.
            </li>
            <li>
              <strong className="text-on-surface">
                High Targets (97–99 %ile):
              </strong>{" "}
              IIM Indore, IIM Mumbai, SPJIMR Mumbai, MDI Gurgaon, and IIT
              Bombay/Delhi.
            </li>
            <li>
              <strong className="text-on-surface">
                New & Baby IIMs (92–97 %ile):
              </strong>{" "}
              IIM Udaipur, Ranchi, Trichy, Raipur, Rohtak, and CAP institutes.
            </li>
            <li>
              <strong className="text-on-surface">
                Allied Top Institutes (80–92 %ile):
              </strong>{" "}
              IMT Ghaziabad, GIM Goa, TAPMI, FORE, plus other exams like XAT
              (XLRI) and SNAP (SIBM).
            </li>
          </ul>
          <p>
            Final interview calls depend on a Composite Score combining CAT
            percentile with 10th/12th/Graduation marks, work experience, and
            academic/gender diversity.
          </p>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 6: UNDERSTANDING YOUR GOALS
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="goals"
        number="06"
        title="Understanding Your Goals"
        isOpen={Boolean(openTopicIds["goals"])}
        onToggle={() => toggleTopic("goals")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            A high CAT score requires 8–10 months of consistent effort.
            Defining your intrinsic reasons early sustains discipline through
            mock score plateaus:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-secondary">
            <li>
              <strong className="text-on-surface">
                Career Acceleration:
              </strong>{" "}
              Transitioning from individual execution to strategic leadership
              and general management roles.
            </li>
            <li>
              <strong className="text-on-surface">Domain Pivot:</strong> Moving
              into Management Consulting, Investment Banking, Private Equity,
              Product Management, or Brand Strategy.
            </li>
            <li>
              <strong className="text-on-surface">Network & Pedigree:</strong>{" "}
              Gaining access to lifelong alumni networks, top recruiters, and
              high-caliber peer groups.
            </li>
            <li>
              <strong className="text-on-surface">Target Milestones:</strong>{" "}
              Establish your attempt year, daily study hours, target percentile
              band, and diagnostic baseline.
            </li>
          </ul>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 7: CHOOSING YOUR PREPARATION APPROACH
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="prep-approach"
        number="07"
        title="Choosing Your Preparation Approach"
        isOpen={Boolean(openTopicIds["prep-approach"])}
        onToggle={() => toggleTopic("prep-approach")}
      >
        <div className="py-2 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5">
          <p>
            Choose the preparation method that fits your baseline, routine, and
            discipline level:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-secondary">
            <li>
              <strong className="text-on-surface">Self-Study:</strong> Ideal
              for self-disciplined students and working professionals using
              standard books, online resources, and mock test series.
            </li>
            <li>
              <strong className="text-on-surface">Guided Coaching:</strong>{" "}
              Best for aspirants who benefit from fixed lecture schedules,
              structured batch deadlines, and direct faculty doubt-clearing.
            </li>
            <li>
              <strong className="text-on-surface">
                Hybrid Model (Recommended):
              </strong>{" "}
              Self-driven foundational study combined with targeted micro-courses
              for weak topics and enrollment in 2 national test series (e.g.
              TIME / IMS / CL).
            </li>
          </ul>
        </div>
      </JourneyTopicAccordion>
    </div>
  );
};
