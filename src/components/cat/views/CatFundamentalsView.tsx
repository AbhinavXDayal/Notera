import React from "react";
import {
  HelpCircle,
  TrendingUp,
  Lightbulb,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface CatFundamentalsViewProps {
  onNavigateTab: (tab: "roadmap" | "fundamentals" | "theory-practical" | "notes-docs") => void;
}

export const CatFundamentalsView: React.FC<CatFundamentalsViewProps> = ({
  onNavigateTab,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-12 fade-in">
      {/* ── HEADER ── */}
      <div className="border-b border-outline-variant pb-6 space-y-2">
        <div className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-tertiary font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Foundational Doctrine</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
          CAT Fundamentals &amp; Strategic Orientation
        </h2>
        <p className="text-secondary text-xs sm:text-sm max-w-3xl leading-relaxed">
          The foundational mental models, exam architecture, and scoring invariants every aspirant must internalize before deep syllabus preparation.
        </p>
      </div>

      {/* ── 1. CORE EXAM BLUEPRINT ── */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>01 • The Structural Architecture of CAT</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-surface-container border border-outline-variant space-y-1 shadow-terra-card">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Total Duration
            </span>
            <span className="font-display text-2xl text-on-surface font-semibold block">
              120 Minutes
            </span>
            <span className="text-xs text-secondary">
              Strict 40 mins / section lock-in
            </span>
          </div>

          <div className="p-5 rounded-xl bg-surface-container border border-outline-variant space-y-1 shadow-terra-card">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Total Questions
            </span>
            <span className="font-display text-2xl text-on-surface font-semibold block">
              66 Questions
            </span>
            <span className="text-xs text-secondary">
              ~48 MCQs + 18 TITA (Non-MCQ)
            </span>
          </div>

          <div className="p-5 rounded-xl bg-surface-container border border-outline-variant space-y-1 shadow-terra-card">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Maximum Marks
            </span>
            <span className="font-display text-2xl text-on-surface font-semibold block">
              198 Marks
            </span>
            <span className="text-xs text-secondary">
              +3 correct, -1 wrong (MCQ)
            </span>
          </div>

          <div className="p-5 rounded-xl bg-surface-container border border-outline-variant space-y-1 shadow-terra-card">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Section Sequence
            </span>
            <span className="font-display text-2xl text-primary font-semibold block">
              Fixed Order
            </span>
            <span className="text-xs text-secondary">
              VARC → DILR → QA (No hopping)
            </span>
          </div>
        </div>
      </div>

      {/* ── 2. THE THREE COGNITIVE PILLARS ── */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>02 • The Three Cognitive Sections</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* VARC */}
          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant space-y-4 shadow-terra-card">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/60">
              <span className="font-mono text-xs font-bold text-primary">
                SECTION I • VARC
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-outline-variant text-secondary">
                24 Questions (72 Marks)
              </span>
            </div>
            <h4 className="font-display text-xl text-on-surface font-medium">
              Verbal Ability &amp; Reading Comprehension
            </h4>
            <p className="text-xs text-secondary leading-relaxed">
              Tests dense academic comprehension, argument mapping, tone deconstruction, and logical paragraph sequencing.
            </p>
            <ul className="space-y-1.5 text-xs text-on-surface/90 pt-2 border-t border-outline-variant/40">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>4 RC Passages (16 Questions)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>8 VA: Para Jumbles, Summary, Odd One Out</span>
              </li>
            </ul>
          </div>

          {/* DILR */}
          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant space-y-4 shadow-terra-card">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/60">
              <span className="font-mono text-xs font-bold text-primary">
                SECTION II • DILR
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-outline-variant text-secondary">
                20 Questions (60 Marks)
              </span>
            </div>
            <h4 className="font-display text-xl text-on-surface font-medium">
              Data Interpretation &amp; Logical Reasoning
            </h4>
            <p className="text-xs text-secondary leading-relaxed">
              Tests pattern deduction, constraint optimization, matrix puzzles, games, tournaments, and tabular data synthesis.
            </p>
            <ul className="space-y-1.5 text-xs text-on-surface/90 pt-2 border-t border-outline-variant/40">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>4 Caselet Sets (5 Questions each)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Cracking 2 full sets with 100% accuracy yields ~98 %ile</span>
              </li>
            </ul>
          </div>

          {/* QA */}
          <div className="p-6 rounded-xl bg-surface-container border border-outline-variant space-y-4 shadow-terra-card">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/60">
              <span className="font-mono text-xs font-bold text-primary">
                SECTION III • QA
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-outline-variant text-secondary">
                22 Questions (66 Marks)
              </span>
            </div>
            <h4 className="font-display text-xl text-on-surface font-medium">
              Quantitative Aptitude
            </h4>
            <p className="text-xs text-secondary leading-relaxed">
              Tests mathematical modeling, algebraic symmetries, geometry bounds, and numerical problem-solving.
            </p>
            <ul className="space-y-1.5 text-xs text-on-surface/90 pt-2 border-t border-outline-variant/40">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Arithmetic (~45%) &amp; Algebra (~30%) dominate</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Geometry, Number Systems &amp; Modern Math</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 3. SCORE VS PERCENTILE INVARIANT ── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border-2 border-primary/40 space-y-6 shadow-terra-card">
        <div className="flex items-center space-x-2 text-xs font-mono font-semibold text-primary uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          <span>03 • The Golden Invariant: Score ≠ Percentile</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-medium">
              Scoring ~50% Marks Consistently Yields 99+ Percentile
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Unlike school or university board exams where 95% score is standard, CAT is a severe percentile-based filtering exam. You do not need to attempt all 66 questions. Selecting 30–35 high-confidence questions and executing with 90%+ accuracy consistently secures top IIM calls.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 font-mono text-center">
            <div className="p-4 rounded-xl bg-surface border border-outline-variant space-y-1">
              <span className="text-[10px] text-secondary uppercase">99.5+ %ile Target</span>
              <span className="font-display text-2xl text-primary font-bold block">80–85 Marks</span>
              <span className="text-[11px] text-secondary">~27–29 Net Correct</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-outline-variant space-y-1">
              <span className="text-[10px] text-secondary uppercase">99.0 %ile Target</span>
              <span className="font-display text-2xl text-primary font-bold block">75–78 Marks</span>
              <span className="text-[11px] text-secondary">~25–26 Net Correct</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-outline-variant space-y-1">
              <span className="text-[10px] text-secondary uppercase">95.0 %ile Target</span>
              <span className="font-display text-2xl text-on-surface font-bold block">56–60 Marks</span>
              <span className="text-[11px] text-secondary">~19–20 Net Correct</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-outline-variant space-y-1">
              <span className="text-[10px] text-secondary uppercase">90.0 %ile Target</span>
              <span className="font-display text-2xl text-on-surface font-bold block">45–48 Marks</span>
              <span className="text-[11px] text-secondary">~15–16 Net Correct</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. STRATEGIC MINDSET & TRAPS ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-surface-container border border-outline-variant space-y-3 shadow-terra-card">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-primary" /> Core Analytical Mindset
          </span>
          <p className="text-xs sm:text-sm text-on-surface/90 leading-relaxed font-display italic">
            "Question selection is more critical than question solving. Leaving a dangerous or overly tedious question in under 30 seconds is a net gain of 3+ marks."
          </p>
          <ul className="space-y-1.5 text-xs text-secondary pt-2">
            <li>• Treat every mock as a resource allocation exercise.</li>
            <li>• Build speed through conceptual clarity, not rushed arithmetic.</li>
            <li>• Maintain an error log from Day 1 of preparation.</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-surface-container border border-outline-variant space-y-3 shadow-terra-card">
          <span className="text-xs font-mono uppercase tracking-wider text-error font-semibold flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-error" /> Common Beginner Pitfalls
          </span>
          <ul className="space-y-2 text-xs text-on-surface/90">
            <li className="flex items-start space-x-2">
              <span className="text-error font-bold">•</span>
              <span>Attempting all questions and suffering devastating negative marking penalties (-1 per wrong MCQ).</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-error font-bold">•</span>
              <span>Ignoring sectional cutoff thresholds (top IIMs require 80–85+ %ile in all 3 individual sections).</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-error font-bold">•</span>
              <span>Delaying mock exams until 100% syllabus completion.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── 5. DIRECT NAVIGATION CALLOUTS ── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-terra-card">
        <div className="space-y-1">
          <h4 className="font-display text-xl text-on-surface font-medium">
            Ready to Begin Your Preparation Journey?
          </h4>
          <p className="text-xs sm:text-sm text-secondary">
            Navigate to the 14-Stage Roadmap or dive directly into chapter theory and practicals.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigateTab("roadmap")}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold transition-all cursor-pointer shadow-xs"
          >
            <span>Open Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab("theory-practical")}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-surface border border-outline-variant hover:border-primary/50 text-xs font-mono text-secondary hover:text-primary transition-all cursor-pointer"
          >
            <span>Explore Theory &amp; Practicals</span>
          </button>
        </div>
      </div>
    </div>
  );
};
