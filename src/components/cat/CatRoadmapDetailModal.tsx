import React from "react";
import { Modal } from "../common/Modal";
import type { RoadmapStage } from "../../types/roadmap";
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  Lightbulb,
  Clock,
  ArrowRight,
} from "lucide-react";

interface CatRoadmapDetailModalProps {
  stage: RoadmapStage | null;
  isOpen: boolean;
  onClose: () => void;
  isStageCompleted: boolean;
  onToggleStage: (stageId: number) => void;
  isActionCompleted: (actionId: string) => boolean;
  onToggleAction: (actionId: string) => void;
  onNavigateNotes: (noteId: string) => void;
}

export const CatRoadmapDetailModal: React.FC<CatRoadmapDetailModalProps> = ({
  stage,
  isOpen,
  onClose,
  isStageCompleted,
  onToggleStage,
  isActionCompleted,
  onToggleAction,
  onNavigateNotes,
}) => {
  if (!stage) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <div className="space-y-6">
        {/* Stage Header */}
        <div className="border-b border-outline-variant pb-4 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-tertiary font-semibold">
              Stage {stage.stageNumber} • {stage.phase}
            </span>
            <div className="flex items-center space-x-2 text-xs text-secondary">
              <Clock className="w-3.5 h-3.5" />
              <span>{stage.timeEstimate}</span>
            </div>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface">
            {stage.title}
          </h2>
          <p className="text-xs sm:text-sm text-secondary italic font-display">
            {stage.subtitle}
          </p>
        </div>

        {/* Overview Description */}
        <p className="text-sm text-secondary leading-relaxed">
          {stage.description}
        </p>

        {/* Detailed Strategic Directives */}
        <div className="space-y-3 bg-surface-container p-5 rounded-[12px] border border-outline-variant">
          <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-tertiary" /> Strategic Doctrine
            &amp; Guidelines
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-on-surface/90">
            {stage.detailedGuidance.map((guide, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>{guide}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Mindsets */}
        {stage.keyMindsets.length > 0 && (
          <div className="p-4 rounded-[12px] border border-outline-variant bg-surface space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-secondary font-semibold">
              Crucial Mindset Invariant
            </span>
            {stage.keyMindsets.map((mindset, idx) => (
              <p
                key={idx}
                className="font-display italic text-sm text-on-surface"
              >
                "{mindset}"
              </p>
            ))}
          </div>
        )}

        {/* Action Checklist */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold">
            Actionable Milestone Checklist
          </span>
          <div className="space-y-2">
            {stage.actionChecklist.map((item) => {
              const done = isActionCompleted(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onToggleAction(item.id)}
                  className={`flex items-center justify-between p-3 rounded-[12px] border cursor-pointer transition-all ${
                    done
                      ? "border-primary/40 bg-surface text-secondary line-through"
                      : "border-outline-variant bg-surface-container hover:border-primary/60 text-on-surface"
                  }`}
                >
                  <span className="text-xs sm:text-sm font-medium">
                    {item.text}
                  </span>
                  {done ? (
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-secondary flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommended Resources */}
        {stage.resources.length > 0 && (
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold">
              Curated Study Resources
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stage.resources.map((res, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[12px] border border-outline-variant bg-surface hover:border-primary transition-all flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-tertiary font-semibold block">
                      {res.type}
                    </span>
                    <span className="text-xs font-medium text-on-surface block">
                      {res.title}
                    </span>
                  </div>
                  {res.actionNoteId && (
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateNotes(res.actionNoteId!);
                      }}
                      className="text-xs font-semibold text-primary hover:text-primary-hover p-1.5 rounded-full hover:bg-surface-container transition-all cursor-pointer"
                      title="Read Note"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pitfalls to Avoid */}
        {stage.pitfallsToAvoid.length > 0 && (
          <div className="p-4 rounded-[12px] border-l-4 border-error/70 bg-surface-container/60 space-y-1.5">
            <span className="text-xs font-semibold text-error flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" /> High-Risk Novice Pitfall
            </span>
            {stage.pitfallsToAvoid.map((pitfall, idx) => (
              <p key={idx} className="text-xs text-secondary leading-relaxed">
                {pitfall}
              </p>
            ))}
          </div>
        )}

        {/* Mark Stage as Complete Footer Button */}
        <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
          <button
            onClick={() => onToggleStage(stage.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center space-x-2 cursor-pointer ${
              isStageCompleted
                ? "bg-primary text-on-primary shadow-terra-card"
                : "border border-outline-variant hover:border-primary text-on-surface bg-surface-container"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>
              {isStageCompleted
                ? "Stage Completed (Click to Uncheck)"
                : "Mark Stage as Completed"}
            </span>
          </button>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-secondary hover:text-on-surface uppercase tracking-wider cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </Modal>
  );
};
