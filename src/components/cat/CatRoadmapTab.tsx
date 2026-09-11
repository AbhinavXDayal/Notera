import React, { useState } from "react";
import { CAT_ROADMAP_STAGES } from "../../data/catRoadmap";
import type { RoadmapStage } from "../../types/roadmap";
import { CatRoadmapDetailModal } from "./CatRoadmapDetailModal";
import { Stage01UnderstandJourney } from "./journey/Stage01UnderstandJourney";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  BookOpen,
  ListTree,
} from "lucide-react";

interface CatRoadmapTabProps {
  completedStages: number[];
  completedActions: string[];
  onToggleStage: (stageId: number) => void;
  onToggleAction: (actionId: string) => void;
  onNavigateNotes: (noteId: string) => void;
  initialStageId?: number;
}

export const CatRoadmapTab: React.FC<CatRoadmapTabProps> = ({
  completedStages,
  completedActions,
  onToggleStage,
  onToggleAction,
  onNavigateNotes,
  initialStageId,
}) => {
  // If user opens stage 1 explicitly, or defaults to stage-01 for guided journey orientation
  const [activeView, setActiveView] = useState<"stage-01" | "timeline">(
    initialStageId === 1 ? "stage-01" : "stage-01",
  );
  const [selectedStage, setSelectedStage] = useState<RoadmapStage | null>(null);

  const completedCount = completedStages.length;
  const progressPercent = Math.round(
    (completedCount / CAT_ROADMAP_STAGES.length) * 100,
  );

  const handleStageCardClick = (stage: RoadmapStage) => {
    if (stage.id === 1) {
      setActiveView("stage-01");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedStage(stage);
    }
  };

  const handleAdvanceToStage02 = () => {
    setActiveView("timeline");
    // Open Stage 02 modal
    const stage02 = CAT_ROADMAP_STAGES.find((s) => s.id === 2);
    if (stage02) {
      setSelectedStage(stage02);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If in Stage 01 deep-dive view, render the comprehensive Stage 01 page
  if (activeView === "stage-01") {
    return (
      <div className="space-y-6 fade-in">
        {/* Stage 01 Full Component */}
        <Stage01UnderstandJourney
          onNavigateNextStage={handleAdvanceToStage02}
          onBackToTimeline={() => {
            setActiveView("timeline");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    );
  }

  // Full 14-Stage Roadmap Timeline View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-8 fade-in">
      {/* Roadmap Header & View Mode Switcher */}
      <div className="border-b border-outline-variant pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
              Chronological Curriculum
            </span>
            <span className="text-xs text-secondary">•</span>
            {/* View Switcher Pills */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-surface-container border border-outline-variant font-mono text-xs">
              <button
                type="button"
                onClick={() => {
                  setActiveView("stage-01");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>01 — Understand the Journey</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-surface text-primary font-semibold shadow-xs"
              >
                <ListTree className="w-3.5 h-3.5" />
                <span>All 14 Stages</span>
              </button>
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
            The 14-Stage Mastery Architecture
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-2xl leading-relaxed">
            Every stage builds directly on the prior. A student never wonders
            whether to take a mock or read theory first.
          </p>
        </div>

        {/* Journey Progress Pill */}
        <div className="bg-surface-container border border-outline-variant rounded-xl p-4 min-w-[240px] space-y-2 shadow-terra-card">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-tertiary uppercase font-semibold">
              Roadmap Progress
            </span>
            <span className="font-mono font-bold text-primary">
              {progressPercent}%
            </span>
          </div>
          <div className="w-full bg-outline-variant h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-[11px] text-secondary flex justify-between font-mono">
            <span>
              {completedCount} of {CAT_ROADMAP_STAGES.length} Certified
            </span>
            <span>
              {completedStages.length === 0
                ? "Starting Stage 01"
                : `${14 - completedCount} Left`}
            </span>
          </div>
        </div>
      </div>

      {/* Roadmap Timeline Stack */}
      <div className="relative border-l border-outline-variant ml-4 md:ml-8 pl-8 md:pl-12 space-y-8 py-4">
        {CAT_ROADMAP_STAGES.map((stage, idx) => {
          const isDone = completedStages.includes(stage.id);
          const isCurrentActive = idx === 0 && !isDone;

          return (
            <div key={stage.id} className="relative group">
              {/* Timeline Connector Node */}
              <div
                onClick={() => onToggleStage(stage.id)}
                className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full border-4 border-surface flex items-center justify-center cursor-pointer transition-all ${
                  isDone
                    ? "bg-primary text-on-primary"
                    : isCurrentActive
                      ? "bg-primary ring-4 ring-primary/20"
                      : "bg-outline-variant group-hover:bg-secondary"
                }`}
                title="Toggle stage completion"
              >
                {isDone && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-on-primary" />
                )}
              </div>

              {/* Card Container */}
              <div
                onClick={() => handleStageCardClick(stage)}
                className={`p-6 rounded-xl transition-all space-y-3 shadow-terra-card cursor-pointer transform hover:-translate-y-0.5 ${
                  isDone
                    ? "border border-primary/40 bg-surface opacity-90"
                    : isCurrentActive
                      ? "border-2 border-primary/60 bg-surface-container"
                      : "border border-outline-variant bg-surface hover:border-secondary"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`font-mono text-xs font-semibold uppercase tracking-widest ${
                      isDone
                        ? "text-primary"
                        : isCurrentActive
                          ? "text-tertiary"
                          : "text-secondary"
                    }`}
                  >
                    {isDone
                      ? `Stage ${stage.stageNumber} • Certified Completed`
                      : stage.badge || `Stage ${stage.stageNumber}`}
                  </span>

                  <div className="flex items-center space-x-3 text-xs">
                    <span className="flex items-center space-x-1 text-secondary font-mono">
                      <Clock className="w-3 h-3 text-tertiary" />
                      <span>{stage.timeEstimate}</span>
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant font-mono text-secondary">
                      {stage.phase}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-on-surface font-medium group-hover:text-primary transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-secondary italic font-display mt-0.5">
                      {stage.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed mt-2 line-clamp-2">
                      {stage.description}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform flex-shrink-0 pt-2">
                    <span>
                      {stage.id === 1 ? "Open Guide" : "Explore Stage"}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Sub-action checklist preview */}
                <div className="pt-3 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-2 text-xs text-secondary font-mono">
                  <span>
                    {stage.actionChecklist.length} Actionable Milestones
                  </span>
                  <span className="text-primary font-medium">
                    {stage.id === 1
                      ? "Read 7-Section Orientation Guide →"
                      : "View doctrine & checklist →"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Deep Dive Modal for Stages 02-14 */}
      <CatRoadmapDetailModal
        stage={selectedStage}
        isOpen={!!selectedStage}
        onClose={() => setSelectedStage(null)}
        isStageCompleted={
          selectedStage ? completedStages.includes(selectedStage.id) : false
        }
        onToggleStage={onToggleStage}
        isActionCompleted={(id) => completedActions.includes(id)}
        onToggleAction={onToggleAction}
        onNavigateNotes={onNavigateNotes}
      />
    </div>
  );
};
