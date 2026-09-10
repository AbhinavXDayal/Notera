import React from "react";
import { ArrowLeft } from "lucide-react";
import { CAT_ROADMAP_STAGES } from "../../data/catRoadmap";

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
  onOpenFundamentals?: () => void;
}

export const CatOverviewTab: React.FC<CatOverviewTabProps> = ({
  onNavigateTab,
  onBackToPaths,
}) => {
  return (
    <div className="max-w-lg mx-auto px-4 py-8 space-y-6 fade-in">
      {/* Back Navigation */}
      {onBackToPaths && (
        <div>
          <button
            onClick={onBackToPaths}
            className="inline-flex items-center space-x-2 text-xs font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Paths</span>
          </button>
        </div>
      )}

      {/* 1. Field Guide Framework Card */}
      <div className="rounded-2xl bg-surface-container border border-outline-variant p-6 sm:p-7 shadow-terra-card space-y-6">
        {/* Section 1 */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-on-surface font-semibold">
            Any Field Guide
          </h3>
          <div className="text-secondary text-sm leading-relaxed space-y-1">
            <p>Roadmap</p>
            <p>Fundamentals</p>
            <p>Theory &amp; Practical</p>
            <p>Notes / Docs</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-on-surface font-semibold">
            For Ex
          </h3>
          <div className="text-secondary text-sm leading-relaxed space-y-1">
            <p>1. Cs Roadmap</p>
            <p>1.2 Computer Fundamentals</p>
            <p>1.3 DSA - Programming Language</p>
            <p>1.4 Field - App Development</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-on-surface font-semibold">
            For Each Section
          </h3>
          <div className="text-secondary text-sm leading-relaxed space-y-1">
            <p>• Roadmap</p>
            <p>• Fundamentals</p>
            <p>• Theory &amp; Practicals</p>
            <p>• Notes / Docs</p>
          </div>
        </div>
      </div>

      {/* 2. Long Vertical Roadmap Card */}
      <div className="rounded-2xl bg-surface-container border border-outline-variant p-6 sm:p-7 shadow-terra-card space-y-6">
        <div className="space-y-1">
          <h3 className="font-display text-2xl text-on-surface font-semibold">
            Roadmap
          </h3>
          <p className="text-xs text-secondary font-mono uppercase tracking-wider">
            CAT Preparation Journey
          </p>
        </div>

        {/* Vertical Chronological Stages */}
        <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1.5px] before:bg-outline-variant">
          {CAT_ROADMAP_STAGES.map((stage) => (
            <div key={stage.id} className="relative group">
              {/* Step indicator dot on timeline */}
              <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors" />

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-primary font-mono text-xs font-semibold">
                    Stage {stage.stageNumber}
                  </span>
                  <span className="text-outline-variant text-[10px]">•</span>
                  <span className="text-[11px] font-mono text-secondary">
                    {stage.phase}
                  </span>
                  {stage.timeEstimate && (
                    <>
                      <span className="text-outline-variant text-[10px]">•</span>
                      <span className="text-[10px] text-secondary/70">
                        {stage.timeEstimate}
                      </span>
                    </>
                  )}
                </div>

                <h4 className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
                  {stage.title}
                </h4>

                <p className="text-xs text-secondary leading-relaxed font-light">
                  {stage.subtitle || stage.description}
                </p>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab("journey")}
                    className="inline-flex items-center space-x-1 text-[11px] text-primary hover:underline pt-0.5 cursor-pointer"
                  >
                    <span>Explore Stage</span>
                    <span className="text-xs">→</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
