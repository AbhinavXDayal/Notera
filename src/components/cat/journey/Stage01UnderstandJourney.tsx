import React from "react";
import { STAGE_01_DATA } from "../../../data/catJourneyData";
import { JourneyStageLayout } from "./JourneyStageLayout";
import { JourneySection } from "./JourneySection";
import { SectionPillarCard } from "./SectionPillarCard";
import { ScorePercentileExplorer } from "./ScorePercentileExplorer";
import { CallPredictorCard } from "./CallPredictorCard";
import { GoalPlanningSection } from "./GoalPlanningSection";
import { PreparationApproach } from "./PreparationApproach";
import {
  Building2,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";

interface Stage01UnderstandJourneyProps {
  onNavigateNextStage?: () => void;
  onBackToTimeline?: () => void;
}

export const Stage01UnderstandJourney: React.FC<
  Stage01UnderstandJourneyProps
> = ({ onNavigateNextStage, onBackToTimeline }) => {
  const {
    stageNumber,
    badge,
    title,
    tagline,
    pillars,
    examPattern,
    targetColleges,
    finalTransition,
  } = STAGE_01_DATA;

  return (
    <JourneyStageLayout
      stageNumber={stageNumber}
      badge={badge}
      title={title}
      tagline={tagline}
      onBackToTimeline={onBackToTimeline}
    >
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: WHAT IS CAT?
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="what-is-cat"
        number="01"
        title="What is CAT?"
        tagline="Overview, purpose, and core exam philosophy"
      >
        <div className="bg-surface-container border border-outline-variant rounded-xl p-5 sm:p-6 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5 shadow-terra-card">
          <p>
            The <strong className="text-on-surface">Common Admission Test (CAT)</strong> is India’s premier national-level computer-based entrance examination conducted annually by the Indian Institutes of Management (IIMs) for admission to top-tier postgraduate management programs (MBA/PGP).
          </p>
          <p>
            Rather than testing rote memorization, CAT evaluates speed, comprehension, analytical reasoning, and decisive decision-making under strict time constraints across three locked 40-minute sections: <span className="text-on-surface font-medium">VARC</span>, <span className="text-on-surface font-medium">DILR</span>, and <span className="text-on-surface font-medium">QA</span>.
          </p>
        </div>
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: QA, VARC & DILR (The 3 Pillars)
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="pillars"
        number="02"
        title="QA, VARC & DILR"
        tagline="The three cognitive pillars of the CAT examination. Each section has a dedicated 40-minute lock-in window."
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <SectionPillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: EXAM PATTERN & STRUCTURE
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="pattern"
        number="03"
        title={examPattern.heading}
        tagline="Understanding the structural constraints, negative marking economics, and sectional double-hurdles."
      >
        <div className="space-y-6">
          {/* Attributes Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {examPattern.attributes.map((attr, idx) => (
              <div
                key={idx}
                className="bg-surface-container border border-outline-variant rounded-xl p-5 space-y-2 shadow-terra-card"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                  {attr.label}
                </span>
                <h4 className="font-display text-lg text-primary font-semibold">
                  {attr.value}
                </h4>
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
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: SCORE VS PERCENTILE & NOTERA ESTIMATOR
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="score-percentile"
        number="04"
        title="Percentile vs Score"
        tagline="Why scoring ~40–50% marks in CAT places you among the top 1% of candidates nationwide."
      >
        <ScorePercentileExplorer />
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: TARGET COLLEGES & CALL PREDICTOR
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="colleges"
        number="05"
        title={targetColleges.heading}
        tagline={targetColleges.summary}
      >
        <div className="space-y-8">
          {/* 4 College Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetColleges.tiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-surface-container border border-outline-variant hover:border-primary/40 rounded-xl p-6 space-y-4 shadow-terra-card transition-all"
              >
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="font-mono text-xs font-semibold text-primary">
                      {tier.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-outline-variant text-secondary">
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
                        className="text-xs bg-surface px-2.5 py-1 rounded-md border border-outline-variant/60 text-on-surface"
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
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: UNDERSTANDING YOUR GOALS
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="goals"
        number="06"
        title="Understanding Your Goals"
        tagline="Clarity of purpose powers sustained discipline across an 8–10 month preparation journey."
      >
        <GoalPlanningSection />
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: CHOOSING YOUR PREPARATION APPROACH
      ───────────────────────────────────────────────────────────── */}
      <JourneySection
        id="prep-approach"
        number="07"
        title="Choosing Your Preparation Approach"
        tagline="Compare Self-Study, Guided Coaching, and the Balanced Hybrid model to select the best fit for your schedule."
      >
        <PreparationApproach />
      </JourneySection>

      {/* ─────────────────────────────────────────────────────────────
          FINAL TRANSITION & NAVIGATION TO STAGE 02
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-surface-container border-2 border-primary/40 rounded-2xl p-8 sm:p-10 space-y-6 shadow-terra-card text-center sm:text-left mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ORIENTATION COMPLETE</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-medium">
              {finalTransition.heading}
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              {finalTransition.desc}
            </p>
          </div>

          {onNavigateNextStage && (
            <button
              type="button"
              onClick={onNavigateNextStage}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-on-primary font-semibold text-sm transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 shrink-0"
            >
              <span>{finalTransition.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </JourneyStageLayout>
  );
};
