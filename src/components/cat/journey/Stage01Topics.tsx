import React, { useState } from "react";
import { STAGE_01_DATA } from "../../../data/catJourneyData";
import { JourneyTopicAccordion } from "./JourneyTopicAccordion";
import { SectionPillarCard } from "./SectionPillarCard";
import { ScorePercentileExplorer } from "./ScorePercentileExplorer";
import { CallPredictorCard } from "./CallPredictorCard";
import { GoalPlanningSection } from "./GoalPlanningSection";
import { PreparationApproach } from "./PreparationApproach";
import { Building2, Info } from "lucide-react";

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

  const { pillars, examPattern, targetColleges } = STAGE_01_DATA;

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
          TOPIC 2: QA, VARC & DILR (The 3 Pillars)
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="pillars"
        number="02"
        title="QA, VARC & DILR"
        isOpen={Boolean(openTopicIds["pillars"])}
        onToggle={() => toggleTopic("pillars")}
      >
        <div className="pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <SectionPillarCard key={pillar.id} pillar={pillar} />
            ))}
          </div>
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
        <div className="space-y-5 pt-2">
          {/* Attributes Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {examPattern.attributes.map((attr, idx) => (
              <div
                key={idx}
                className="bg-surface border border-outline-variant rounded-xl p-4 sm:p-5 space-y-1.5"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                  {attr.label}
                </span>
                <h5 className="font-display text-lg text-primary font-semibold">
                  {attr.value}
                </h5>
                <p className="text-xs text-secondary leading-relaxed">
                  {attr.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Variable Year Notice */}
          <div className="bg-surface border border-outline-variant/60 rounded-xl p-4 flex items-start space-x-3 text-xs text-secondary leading-relaxed">
            <Info className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
            <span>
              <strong className="text-on-surface">
                Annual Pattern Notice:{" "}
              </strong>
              {examPattern.notice}
            </span>
          </div>
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 4: PERCENTILE VS SCORE & ESTIMATOR
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="score-percentile"
        number="04"
        title="Percentile vs Score"
        isOpen={Boolean(openTopicIds["score-percentile"])}
        onToggle={() => toggleTopic("score-percentile")}
      >
        <div className="pt-2">
          <ScorePercentileExplorer />
        </div>
      </JourneyTopicAccordion>

      {/* ─────────────────────────────────────────────────────────────
          TOPIC 5: TARGET COLLEGES & CALL PREDICTOR
      ───────────────────────────────────────────────────────────── */}
      <JourneyTopicAccordion
        id="colleges"
        number="05"
        title="Target Colleges"
        isOpen={Boolean(openTopicIds["colleges"])}
        onToggle={() => toggleTopic("colleges")}
      >
        <div className="space-y-6 pt-2">
          {/* 4 College Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {targetColleges.tiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-surface border border-outline-variant hover:border-primary/40 rounded-xl p-5 sm:p-6 space-y-3.5 transition-all"
              >
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs font-semibold text-primary">
                      {tier.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-secondary">
                    {tier.percentileRange}
                  </span>
                </div>

                <p className="text-xs text-secondary italic font-display">
                  {tier.tagline}
                </p>

                {/* Example Institutions */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-tertiary font-semibold block">
                    Benchmark Institutes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tier.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="text-xs bg-surface-container px-2.5 py-1 rounded-md border border-outline-variant/60 text-on-surface font-medium"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Profile Focus */}
                <div className="pt-2 text-xs text-secondary leading-relaxed border-t border-outline-variant/60">
                  <strong className="text-on-surface">
                    Profile Criteria:{" "}
                  </strong>
                  {tier.profileFocus}
                </div>
              </div>
            ))}
          </div>

          {/* Profile & Call Predictor Resource Card */}
          <CallPredictorCard />
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
        <div className="pt-2">
          <GoalPlanningSection />
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
        <div className="pt-2">
          <PreparationApproach />
        </div>
      </JourneyTopicAccordion>
    </div>
  );
};
