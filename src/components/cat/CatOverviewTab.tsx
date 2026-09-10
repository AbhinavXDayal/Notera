import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  Compass,
  Brain,
  Target,
  BookOpen,
} from "lucide-react";

export type CatTabType =
  | "overview"
  | "journey"
  | "subjects"
  | "notes"
  | "practice"
  | "resources";

interface CatOverviewTabProps {
  onNavigateTab?: (tab: CatTabType, chapterId?: string) => void;
  onBackToPaths?: () => void;
}

export const CatOverviewTab: React.FC<CatOverviewTabProps> = ({
  onNavigateTab,
  onBackToPaths,
}) => {
  const tenets = [
    {
      icon: Brain,
      title: "First-Principles Intuition",
      description:
        "Master foundational mathematical logic and core principles instead of memorizing fragile shortcut formulas that fail under novel question variations.",
    },
    {
      icon: Target,
      title: "Strategic Selection & Time Valuation",
      description:
        "CAT is a test of discipline. Developing the clarity to identify and reject convoluted trap questions within 45 seconds is as decisive as solving what you attempt.",
    },
    {
      icon: BookOpen,
      title: "Deep Cognitive Synthesis",
      description:
        "In VARC and DILR, cultivate sustained endurance for dense, unfamiliar prose and intricate reasoning sets without panic or mental fatigue.",
    },
    {
      icon: Compass,
      title: "Calm, Non-Linear Compounding",
      description:
        "Progress methodically from core mental models to full-length exam diagnostics—free from chaotic question dumps or anxiety-driven score chasing.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-10 fade-in">
      {onBackToPaths && (
        <button
          onClick={onBackToPaths}
          className="mb-6 inline-flex items-center space-x-2 text-xs font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Paths</span>
        </button>
      )}

      {/* Ideology Behind Learning Card */}
      <div className="rounded-[16px] bg-surface-container border-2 border-outline-variant p-8 sm:p-12 relative overflow-hidden shadow-terra-card">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tertiary/15 text-tertiary font-mono text-[11px] font-semibold uppercase tracking-wider">
            <span>Philosophy &amp; Pedagogy</span>
            <span>•</span>
            <span>CAT Universe</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
            Ideology behind learning in cat section
          </h1>

          <p className="text-secondary text-base sm:text-lg leading-relaxed font-light">
            The Common Admission Test does not measure mechanical calculation
            speed or memorized trivia. It evaluates intellectual composure,
            rigorous structural deconstruction, and the ability to make optimal
            decisions under tight constraints.
          </p>

          {/* Core Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            {tenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-[12px] bg-surface border border-outline-variant shadow-sm space-y-2.5 transition-all hover:border-primary/50"
                >
                  <div className="flex items-center space-x-2.5 text-primary">
                    <Icon className="w-4 h-4" />
                    <h2 className="font-display text-lg text-on-surface font-medium">
                      {tenet.title}
                    </h2>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed font-light">
                    {tenet.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action links */}
          {onNavigateTab && (
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigateTab("journey")}
                className="px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary-hover transition-all flex items-center space-x-2 shadow-terra-card cursor-pointer"
              >
                <span>Explore 14-Step Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateTab("subjects")}
                className="px-6 py-3 rounded-full bg-surface border border-outline-variant text-on-surface text-sm font-medium hover:border-primary hover:text-primary transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Browse Subjects (QA, VARC, DILR)</span>
              </button>
            </div>
          )}
        </div>

        {/* Subtle decorative watermark */}
        <div className="absolute -right-8 -bottom-10 opacity-5 pointer-events-none select-none">
          <span className="font-display text-[180px] text-primary">CAT</span>
        </div>
      </div>
    </div>
  );
};
