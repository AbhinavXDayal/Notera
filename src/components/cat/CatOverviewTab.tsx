import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";
import type { PersonalizedRecommendation } from "../../types/onboarding";
import type { CatTabType } from "./CatHeaderNav";

interface CatOverviewTabProps {
  onNavigateTab: (tab: CatTabType, chapterId?: string) => void;
  recommendation: PersonalizedRecommendation;
  onOpenExamModal: () => void;
}

export const CatOverviewTab: React.FC<CatOverviewTabProps> = ({
  onNavigateTab,
  recommendation,
  onOpenExamModal,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-12 fade-in">
      {/* Welcome Header */}
      <div className="border-b border-outline-variant pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-widest text-tertiary mb-2">
            <span>Sanctuary Portal 04</span>
            <span>•</span>
            <span>Personalized Roadmap</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl text-on-surface font-normal">
            Your CAT Journey
          </h1>
          <p className="text-secondary text-sm sm:text-base mt-2 font-light max-w-2xl">
            Here is where you currently stand and what precisely comes next. No
            ambiguity, no chaotic question lists.
          </p>
        </div>

        <button
          onClick={onOpenExamModal}
          className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-outline-variant hover:border-primary text-xs text-secondary hover:text-primary bg-surface transition-all cursor-pointer self-start sm:self-auto"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>View Exam Pattern &amp; Scoring Mechanics</span>
        </button>
      </div>

      {/* KEY PRINCIPLE: "WHAT SHOULD I DO NEXT?" HERO DIRECTIVE CARD */}
      <div className="rounded-[12px] bg-surface-container border-2 border-outline-variant p-8 sm:p-10 relative overflow-hidden shadow-terra-card">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-tertiary/15 text-tertiary font-mono text-[11px] font-semibold uppercase tracking-wider">
            <span>{recommendation.stepDirective}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
            {recommendation.actionTitle}
          </h2>

          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            {recommendation.actionDescription}
          </p>

          <div className="pt-2 pb-1 text-xs font-mono text-tertiary">
            {recommendation.studyPaceAdvice}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() =>
                onNavigateTab(
                  recommendation.targetTab,
                  recommendation.targetChapterId,
                )
              }
              className="px-7 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary-hover transition-all flex items-center space-x-2 shadow-terra-card cursor-pointer"
            >
              <span>{recommendation.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-secondary font-display italic">
              {recommendation.readTime}
            </span>
          </div>
        </div>

        {/* Subtle decorative watermarked stamp in corner */}
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none select-none">
          <span className="font-display text-[160px] text-primary">CAT</span>
        </div>
      </div>

      {/* THREE CORE PILLARS AT A GLANCE */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h3 className="font-display text-2xl text-on-surface">
            The Tri-Partite Pillars
          </h3>
          <span className="text-xs font-mono uppercase text-secondary tracking-wider">
            40 Minutes Each • Equal Weightage • No Section Switching
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* QA CARD */}
          <div className="p-6 rounded-[12px] border border-outline-variant bg-surface hover:border-primary transition-all space-y-4 shadow-terra-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-semibold">
                  Section I
                </span>
                <span className="text-xs font-mono bg-surface-container px-2 py-0.5 rounded border border-outline-variant text-secondary">
                  22 Questions
                </span>
              </div>
              <h4 className="font-display text-2xl text-on-surface group-hover:text-primary transition-colors">
                Quantitative Aptitude
              </h4>
              <p className="text-xs text-secondary leading-relaxed">
                Arithmetic mastery, Algebra functions, Modern Math, and Geometry
                fundamentals.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-xs">
              <span className="text-secondary">
                Next: Arithmetic Foundations
              </span>
              <button
                onClick={() => onNavigateTab("subjects")}
                className="font-semibold text-primary hover:text-primary-hover flex items-center space-x-1 cursor-pointer"
              >
                <span>Open QA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* VARC CARD */}
          <div className="p-6 rounded-[12px] border border-outline-variant bg-surface hover:border-primary transition-all space-y-4 shadow-terra-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-semibold">
                  Section II
                </span>
                <span className="text-xs font-mono bg-surface-container px-2 py-0.5 rounded border border-outline-variant text-secondary">
                  24 Questions
                </span>
              </div>
              <h4 className="font-display text-2xl text-on-surface group-hover:text-primary transition-colors">
                VARC
              </h4>
              <p className="text-xs text-secondary leading-relaxed">
                Long-form dense reading comprehension, philosophy passages,
                parajumbles, and argument deconstruction.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-xs">
              <span className="text-secondary">Next: Aeon Essay Analysis</span>
              <button
                onClick={() => onNavigateTab("subjects")}
                className="font-semibold text-primary hover:text-primary-hover flex items-center space-x-1 cursor-pointer"
              >
                <span>Open VARC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* DILR CARD */}
          <div className="p-6 rounded-[12px] border border-outline-variant bg-surface hover:border-primary transition-all space-y-4 shadow-terra-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-semibold">
                  Section III
                </span>
                <span className="text-xs font-mono bg-surface-container px-2 py-0.5 rounded border border-outline-variant text-secondary">
                  20 Questions
                </span>
              </div>
              <h4 className="font-display text-2xl text-on-surface group-hover:text-primary transition-colors">
                DILR
              </h4>
              <p className="text-xs text-secondary leading-relaxed">
                Matrix puzzles, games &amp; tournaments, Venn arrangements, and
                combinatorial reasoning under pressure.
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-xs">
              <span className="text-secondary">Next: Set Selection Rules</span>
              <button
                onClick={() => onNavigateTab("subjects")}
                className="font-semibold text-primary hover:text-primary-hover flex items-center space-x-1 cursor-pointer"
              >
                <span>Open DILR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK SCORE VS PERCENTILE BENCHMARK */}
      <div className="bg-surface-container rounded-[12px] border border-outline-variant p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant pb-4">
          <div>
            <h4 className="font-display text-xl text-on-surface">
              The Score-vs-Percentile Reality
            </h4>
            <p className="text-xs text-secondary mt-0.5">
              CAT is scored out of 198 marks (66 Qs × 3 marks). You do not need
              90% marks for 99+ percentile.
            </p>
          </div>
          <span className="text-[11px] font-mono uppercase text-tertiary font-semibold">
            Based on Official Past 5 Years
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-surface rounded-[12px] border border-outline-variant">
            <span className="text-xs text-secondary font-mono block">
              99.5+ Percentile
            </span>
            <span className="font-display text-2xl text-primary font-semibold mt-1 block">
              82–88 Marks
            </span>
            <span className="text-[10px] text-secondary mt-1 block">
              ~28–30 Net Correct Qs
            </span>
          </div>
          <div className="p-4 bg-surface rounded-[12px] border border-outline-variant">
            <span className="text-xs text-secondary font-mono block">
              99.0 Percentile
            </span>
            <span className="font-display text-2xl text-on-surface font-semibold mt-1 block">
              72–76 Marks
            </span>
            <span className="text-[10px] text-secondary mt-1 block">
              ~24–26 Net Correct Qs
            </span>
          </div>
          <div className="p-4 bg-surface rounded-[12px] border border-outline-variant">
            <span className="text-xs text-secondary font-mono block">
              95.0 Percentile
            </span>
            <span className="font-display text-2xl text-on-surface font-semibold mt-1 block">
              52–56 Marks
            </span>
            <span className="text-[10px] text-secondary mt-1 block">
              ~18–20 Net Correct Qs
            </span>
          </div>
          <div className="p-4 bg-surface rounded-[12px] border border-outline-variant">
            <span className="text-xs text-secondary font-mono block">
              90.0 Percentile
            </span>
            <span className="font-display text-2xl text-on-surface font-semibold mt-1 block">
              42–46 Marks
            </span>
            <span className="text-[10px] text-secondary mt-1 block">
              ~14–16 Net Correct Qs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
