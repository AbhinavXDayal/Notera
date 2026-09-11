import React, { useState } from "react";
import { CAT_ROADMAP_STAGES } from "../../data/catRoadmap";
import { JourneyStageAccordion } from "./journey/JourneyStageAccordion";
import { Stage01Topics } from "./journey/Stage01Topics";
import {
  Sparkles,
  ChevronDown,
  ChevronUp,
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
  initialStageId = 1,
}) => {
  // Currently expanded stage ID (defaults to Stage 01 or specified initialStageId)
  const [expandedStageId, setExpandedStageId] = useState<number | null>(
    initialStageId || 1,
  );

  const completedCount = completedStages.length;
  const progressPercent = Math.round(
    (completedCount / CAT_ROADMAP_STAGES.length) * 100,
  );

  const handleToggleStageAccordion = (stageId: number) => {
    setExpandedStageId((prev) => (prev === stageId ? null : stageId));
  };

  const handleAdvanceToNextStage = (nextStageId: number) => {
    setExpandedStageId(nextStageId);
    const element = document.getElementById(`stage-card-${nextStageId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-8 fade-in">
      {/* ── ROADMAP HEADER ── */}
      <div className="border-b border-outline-variant pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-mono tracking-widest text-tertiary font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chronological Curriculum</span>
            </span>
            <span className="text-xs text-secondary">•</span>
            <span className="text-xs font-mono text-secondary">
              14 Sequential Mastery Stages
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
            The 14-Stage Mastery Architecture
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-2xl leading-relaxed">
            Every stage builds directly on the prior. Click any stage to expand
            its doctrine, interactive modules, and milestone checklist inline
            without leaving the roadmap.
          </p>
        </div>

        {/* ── ROADMAP PROGRESS & CONTROLS ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
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
                  : `${14 - completedCount} Remaining`}
              </span>
            </div>
          </div>

          {/* Quick Collapse / Expand Toggle Button */}
          <div className="flex sm:flex-col gap-2 justify-end">
            <button
              type="button"
              onClick={() =>
                setExpandedStageId((prev) => (prev === null ? 1 : null))
              }
              className="inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-surface border border-outline-variant hover:border-primary/50 text-xs font-mono text-secondary hover:text-primary transition-all cursor-pointer shadow-xs"
            >
              {expandedStageId === null ? (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  <span>Expand Stage 01</span>
                </>
              ) : (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Collapse Active</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── 14-STAGE TIMELINE ACCORDION STACK ── */}
      <div className="relative border-l border-outline-variant ml-4 md:ml-8 pl-8 md:pl-12 space-y-6 py-4">
        {CAT_ROADMAP_STAGES.map((stage, idx) => {
          const isExpanded = expandedStageId === stage.id;
          const isDone = completedStages.includes(stage.id);
          const isCurrentActive = idx === 0 && !isDone;
          const hasNextStage = idx < CAT_ROADMAP_STAGES.length - 1;

          return (
            <div
              key={stage.id}
              id={`stage-card-${stage.id}`}
              className="scroll-mt-24"
            >
              <JourneyStageAccordion
                stage={stage}
                isExpanded={isExpanded}
                onToggleExpand={() => handleToggleStageAccordion(stage.id)}
                isCompleted={isDone}
                onToggleComplete={() => onToggleStage(stage.id)}
                completedActions={completedActions}
                onToggleAction={onToggleAction}
                onNavigateNotes={onNavigateNotes}
                isCurrentActive={isCurrentActive}
                topicsContent={
                  stage.id === 1 ? (
                    <Stage01Topics
                      onAdvanceNextStage={() => handleAdvanceToNextStage(2)}
                    />
                  ) : undefined
                }
                onAdvanceNext={
                  hasNextStage
                    ? () => handleAdvanceToNextStage(stage.id + 1)
                    : undefined
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
