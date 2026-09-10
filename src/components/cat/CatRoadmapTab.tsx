import React, { useState } from "react";
import { CAT_ROADMAP_STAGES } from "../../data/catRoadmap";
import type { RoadmapStage } from "../../types/roadmap";
import { CatRoadmapDetailModal } from "./CatRoadmapDetailModal";
import { CheckCircle2, ChevronRight, Clock } from "lucide-react";

interface CatRoadmapTabProps {
  completedStages: number[];
  completedActions: string[];
  onToggleStage: (stageId: number) => void;
  onToggleAction: (actionId: string) => void;
  onNavigateNotes: (noteId: string) => void;
}

export const CatRoadmapTab: React.FC<CatRoadmapTabProps> = ({
  completedStages,
  completedActions,
  onToggleStage,
  onToggleAction,
  onNavigateNotes,
}) => {
  const [selectedStage, setSelectedStage] = useState<RoadmapStage | null>(null);

  const completedCount = completedStages.length;
  const progressPercent = Math.round(
    (completedCount / CAT_ROADMAP_STAGES.length) * 100,
  );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-8 fade-in">
      {/* Roadmap Header */}
      <div className="border-b border-outline-variant pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
            Chronological Curriculum
          </span>
          <h2 className="font-display text-4xl text-on-surface font-normal mt-1">
            The 14-Stage Mastery Architecture
          </h2>
          <p className="text-secondary text-sm max-w-2xl mt-1">
            Every stage builds directly on the prior. A student never wonders
            whether to take a mock or read theory first.
          </p>
        </div>

        {/* Journey Progress Pill */}
        <div className="bg-surface-container border border-outline-variant rounded-[12px] p-3.5 min-w-[220px] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-tertiary uppercase font-semibold">
              Your Roadmap Progress
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
          <div className="text-[11px] text-secondary flex justify-between">
            <span>
              {completedCount} of {CAT_ROADMAP_STAGES.length} Stages Certified
            </span>
            <span>
              {completedStages.length === 0
                ? "Just Started"
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
                onClick={() => setSelectedStage(stage)}
                className={`p-6 rounded-[12px] transition-all space-y-2.5 shadow-terra-card cursor-pointer transform hover:-translate-y-0.5 ${
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
                      <Clock className="w-3 h-3" />
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
                    <span>Explore Stage</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Sub-action checklist preview */}
                <div className="pt-3 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-2 text-xs text-secondary">
                  <span>
                    {stage.actionChecklist.length} Actionable Milestones
                  </span>
                  <span className="text-primary font-medium underline">
                    Click to view doctrine &amp; checklist →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Deep Dive Modal */}
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
