import React from "react";
import type { RoadmapStage } from "../../../types/roadmap";
import {
  CheckCircle2,
  ChevronDown,
  Clock,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  Layers,
} from "lucide-react";

interface JourneyStageAccordionProps {
  stage: RoadmapStage;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
  completedActions: string[];
  onToggleAction: (actionId: string) => void;
  onNavigateNotes: (noteId: string) => void;
  isCurrentActive?: boolean;
  topicsContent?: React.ReactNode;
  onAdvanceNext?: () => void;
}

export const JourneyStageAccordion: React.FC<JourneyStageAccordionProps> = ({
  stage,
  isExpanded,
  onToggleExpand,
  isCompleted,
  onToggleComplete,
  completedActions,
  onToggleAction,
  onNavigateNotes,
  isCurrentActive = false,
  topicsContent,
  onAdvanceNext,
}) => {
  // Topics summary list for Stage 01 or future stages
  const stage01TopicsSummary = [
    "What is CAT?",
    "QA, VARC & DILR",
    "Exam Pattern & Structure",
    "Percentile vs Score",
    "Target Colleges",
    "Understanding Your Goals",
    "MBA Call Predictor",
  ];

  return (
    <div className="relative group">
      {/* ── TIMELINE CONNECTOR NODE ── */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleComplete();
        }}
        className={`absolute -left-[41px] md:-left-[57px] top-4 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center cursor-pointer transition-all z-10 ${
          isCompleted
            ? "bg-primary text-on-primary shadow-xs"
            : isCurrentActive
              ? "bg-primary ring-4 ring-primary/20 text-on-primary"
              : "bg-surface-container-high border-outline-variant hover:border-primary text-transparent hover:text-primary/50"
        }`}
        title={
          isCompleted
            ? "Mark stage as incomplete"
            : "Mark stage as certified complete"
        }
      >
        {isCompleted && (
          <CheckCircle2 className="w-3.5 h-3.5 text-on-primary" />
        )}
      </button>

      {/* ── MAIN STAGE ACCORDION CONTAINER ── */}
      <div
        className={`rounded-2xl transition-all duration-300 shadow-terra-card overflow-hidden ${
          isExpanded
            ? "border-2 border-primary/50 bg-surface shadow-terra-hover"
            : isCompleted
              ? "border border-primary/30 bg-surface/90 hover:border-primary/50"
              : isCurrentActive
                ? "border-2 border-primary/60 bg-surface hover:border-primary"
                : "border border-outline-variant bg-surface hover:border-outline hover:bg-surface-container-low"
        }`}
      >
        {/* ── CLICKABLE STAGE HEADER (ALWAYS VISIBLE) ── */}
        <div
          onClick={onToggleExpand}
          className="p-5 sm:p-7 cursor-pointer select-none space-y-4 group/header"
        >
          {/* Top Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span
                className={`font-mono text-xs font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-md ${
                  isCompleted
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : isCurrentActive
                      ? "bg-tertiary/10 text-tertiary border border-tertiary/20"
                      : "bg-surface-container text-secondary border border-outline-variant"
                }`}
              >
                {isCompleted
                  ? `Stage ${stage.stageNumber} • Certified`
                  : stage.badge || `Stage ${stage.stageNumber}`}
              </span>

              {stage.id === 1 && (
                <span className="inline-flex items-center space-x-1 text-[11px] font-mono text-tertiary font-medium bg-tertiary/10 px-2 py-0.5 rounded border border-tertiary/20">
                  <Layers className="w-3 h-3" />
                  <span>7 Interactive Topics</span>
                </span>
              )}
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <span className="flex items-center space-x-1 text-secondary font-mono">
                <Clock className="w-3.5 h-3.5 text-tertiary" />
                <span>{stage.timeEstimate}</span>
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant font-mono text-secondary">
                {stage.phase}
              </span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1 min-w-0">
              <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-medium group-hover/header:text-primary transition-colors">
                {stage.stageNumber} — {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-secondary italic font-display">
                {stage.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-on-surface/80 leading-relaxed pt-1 max-w-3xl">
                {stage.description}
              </p>
            </div>

            {/* Expand / Collapse Button Indicator */}
            <div className="flex items-center space-x-2 shrink-0 pt-1">
              <span className="hidden sm:inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant text-xs font-mono font-medium text-secondary group-hover/header:text-primary group-hover/header:border-primary/40 transition-all">
                <span>{isExpanded ? "Collapse Stage" : "Explore Stage"}</span>
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isExpanded
                    ? "bg-primary text-on-primary border-primary rotate-180 shadow-xs"
                    : "bg-surface-container border-outline-variant text-secondary group-hover/header:text-primary group-hover/header:border-primary/40 rotate-0"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Collapsed Topics Preview (Shows when closed) */}
          {!isExpanded && (
            <div className="pt-3 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              {stage.id === 1 ? (
                <div className="flex flex-wrap items-center gap-1.5 text-secondary">
                  <span className="text-[11px] font-mono uppercase text-tertiary font-semibold mr-1">
                    Includes:
                  </span>
                  {stage01TopicsSummary.map((topic, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-[11px] bg-surface-container px-2 py-0.5 rounded border border-outline-variant text-on-surface/80"
                    >
                      • {topic}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-secondary font-mono text-xs">
                  <span>{stage.actionChecklist.length} Milestones</span>
                  <span className="mx-2">•</span>
                  <span>{stage.detailedGuidance.length} Guidelines</span>
                </div>
              )}

              <span className="text-primary font-mono text-xs font-medium group-hover/header:translate-x-0.5 transition-transform flex items-center space-x-1">
                <span>
                  {isExpanded ? "Close Stage ↑" : "Click to Explore ↓"}
                </span>
              </span>
            </div>
          )}
        </div>

        {/* ── EXPANDED INLINE CONTENT (ACCORDION BODY) ── */}
        {isExpanded && (
          <div className="px-5 sm:px-8 pb-8 pt-2 border-t border-outline-variant/60 space-y-8 fade-in">
            {/* 1. If Stage has custom topics (Stage 01), render nested topic accordions */}
            {topicsContent ? (
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
                  <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      Learning Topics • Click any topic to expand inline
                    </span>
                  </span>
                  <span className="text-[11px] font-mono text-secondary">
                    Accordion View
                  </span>
                </div>
                {topicsContent}
              </div>
            ) : (
              /* 2. Generic Stage Learning Directives (Stages 02-14) */
              <div className="space-y-6 pt-2">
                {/* Strategic Guidelines */}
                <div className="space-y-3 bg-surface-container p-5 rounded-xl border border-outline-variant">
                  <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-tertiary" /> Strategic
                    Doctrine &amp; Directives
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-on-surface/90">
                    {stage.detailedGuidance.map((guide, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary mt-0.5 font-bold">•</span>
                        <span>{guide}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Mindsets */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">
                    Core Analytical Mindset
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {stage.keyMindsets.map((mindset, idx) => (
                      <div
                        key={idx}
                        className="bg-surface-container-low p-3.5 rounded-lg border border-outline-variant text-xs sm:text-sm text-on-surface italic font-display"
                      >
                        "{mindset}"
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pitfalls to Avoid */}
                {stage.pitfallsToAvoid && stage.pitfallsToAvoid.length > 0 && (
                  <div className="space-y-2 bg-error/5 border border-error/20 p-4 rounded-xl">
                    <span className="text-xs font-mono uppercase tracking-wider text-error font-semibold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5" /> Frequent
                      Strategic Traps
                    </span>
                    <ul className="space-y-1 text-xs text-on-surface/90">
                      {stage.pitfallsToAvoid.map((pitfall, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-error font-bold">•</span>
                          <span>{pitfall}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* ── ACTION CHECKLIST MILESTONES ── */}
            <div className="space-y-3 pt-4 border-t border-outline-variant/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Actionable
                  Milestones Checklist
                </span>
                <span className="text-[11px] font-mono text-secondary">
                  Click to mark certified progress
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {stage.actionChecklist.map((action) => {
                  const isChecked = completedActions.includes(action.id);
                  return (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => onToggleAction(action.id)}
                      className={`w-full text-left p-3.5 rounded-xl border flex items-start space-x-3 transition-all cursor-pointer ${
                        isChecked
                          ? "bg-primary/10 border-primary/30 text-on-surface"
                          : "bg-surface-container border-outline-variant hover:border-outline text-secondary hover:text-on-surface"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border transition-colors ${
                          isChecked
                            ? "bg-primary border-primary text-on-primary"
                            : "border-secondary/60 bg-surface"
                        }`}
                      >
                        {isChecked && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-on-primary" />
                        )}
                      </div>
                      <span className="text-xs leading-snug">
                        {action.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── RELEVANT NOTES & ADVANCE STAGE FOOTER ── */}
            <div className="pt-4 border-t border-outline-variant/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Linked Notes Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {stage.resources &&
                  stage.resources
                    .filter((r) => r.actionNoteId)
                    .map((resource, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          if (resource.actionNoteId) {
                            onNavigateNotes(resource.actionNoteId);
                          }
                        }}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant hover:border-primary/50 text-xs text-primary font-mono transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>View Notes: {resource.title} →</span>
                      </button>
                    ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 shrink-0">
                <button
                  type="button"
                  onClick={onToggleComplete}
                  className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                    isCompleted
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "bg-surface-container border border-outline-variant text-secondary hover:text-primary hover:border-primary/40"
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>
                    {isCompleted
                      ? "Certified Completed"
                      : "Mark Stage Complete"}
                  </span>
                </button>

                {onAdvanceNext && (
                  <button
                    type="button"
                    onClick={onAdvanceNext}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold transition-all cursor-pointer shadow-xs"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
