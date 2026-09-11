import React from "react";
import { ArrowLeft, Clock } from "lucide-react";

interface JourneyStageLayoutProps {
  stageNumber: string;
  badge: string;
  title: string;
  tagline: string;
  timeEstimate?: string;
  onBackToTimeline?: () => void;
  children: React.ReactNode;
}

export const JourneyStageLayout: React.FC<JourneyStageLayoutProps> = ({
  stageNumber,
  badge,
  title,
  tagline,
  timeEstimate = "1–2 Days",
  onBackToTimeline,
  children,
}) => {
  const sections = [
    { id: "what-is-cat", label: "1. What is CAT?" },
    { id: "pillars", label: "2. QA, VARC & DILR" },
    { id: "pattern", label: "3. Exam Pattern" },
    { id: "score-percentile", label: "4. Score vs Percentile" },
    { id: "colleges", label: "5. Target Colleges" },
    { id: "goals", label: "6. Your Goals" },
    { id: "prep-approach", label: "7. Prep Approach" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 fade-in">
      {/* Top Header Bar & Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-outline-variant">
        <div className="flex items-center space-x-3">
          {onBackToTimeline && (
            <button
              onClick={onBackToTimeline}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface border border-outline-variant hover:border-primary text-xs font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full 14-Stage Roadmap</span>
            </button>
          )}

          <div className="flex items-center space-x-2 font-mono text-xs text-secondary">
            <span className="hidden sm:inline">14-Step Journey</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-primary font-semibold">
              Stage {stageNumber}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono text-secondary">
          <span className="flex items-center space-x-1 bg-surface-container px-2.5 py-1 rounded border border-outline-variant">
            <Clock className="w-3.5 h-3.5 text-tertiary" />
            <span>{timeEstimate}</span>
          </span>
          <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/30 text-primary font-semibold">
            {badge}
          </span>
        </div>
      </div>

      {/* Main Stage Banner */}
      <div className="space-y-3">
        <div className="inline-block font-mono text-xs uppercase tracking-widest text-tertiary font-semibold">
          Stage {stageNumber}
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal tracking-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-secondary max-w-3xl leading-relaxed font-normal">
          {tagline}
        </p>
      </div>

      {/* Quick Section Anchor Navigation Strip */}
      <div className="bg-surface-container/80 backdrop-blur-sm border border-outline-variant rounded-xl p-2.5 sticky top-16 z-20 overflow-x-auto shadow-xs">
        <div className="flex items-center space-x-2 min-w-max text-xs font-mono">
          <span className="text-secondary text-[10px] uppercase font-semibold px-2">
            Jump to:
          </span>
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-3 py-1 rounded-lg bg-surface hover:bg-surface-container-high border border-outline-variant/60 hover:border-primary/50 text-secondary hover:text-primary transition-colors whitespace-nowrap"
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Stage Content Sections */}
      <div className="space-y-6">{children}</div>
    </div>
  );
};
