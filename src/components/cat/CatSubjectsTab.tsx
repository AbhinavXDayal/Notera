import React, { useState } from "react";
import { CAT_SUBJECTS } from "../../data/catSubjects";
import { CAT_RESOURCES } from "../../data/catResources";
import { StorageService } from "../../services/storageService";
import { ArrowRight, FileText, Download, ExternalLink } from "lucide-react";

interface CatSubjectsTabProps {
  onNavigateNotes: (chapterId?: string) => void;
  onNavigateLibrary?: () => void;
}

export const CatSubjectsTab: React.FC<CatSubjectsTabProps> = ({
  onNavigateNotes,
  onNavigateLibrary,
}) => {
  const [activeSubjectId, setActiveSubjectId] = useState<string>("qa");

  const currentSubject =
    CAT_SUBJECTS.find((s) => s.id === activeSubjectId) || CAT_SUBJECTS[0];

  const subjectResources = CAT_RESOURCES.filter(
    (res) =>
      res.subject?.toUpperCase() === currentSubject.shortName.toUpperCase(),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-12 fade-in">
      {/* Header and Subject Filter Tabs */}
      <div className="border-b border-outline-variant pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
            Canonical Subjects
          </span>
          <h2 className="font-display text-4xl text-on-surface font-normal mt-1">
            Deep Subject Directory
          </h2>
          <p className="text-secondary text-sm max-w-xl mt-1">
            Structured modules across all 3 sections. Built for conceptual depth
            and systematic chapter coverage.
          </p>
        </div>

        {/* Section Switcher Buttons */}
        <div className="flex flex-wrap gap-2">
          {CAT_SUBJECTS.map((sub) => {
            const isSelected = sub.id === activeSubjectId;
            return (
              <button
                key={sub.id}
                onClick={() => setActiveSubjectId(sub.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-on-primary shadow-terra-card"
                    : "bg-surface-container border border-outline-variant text-secondary hover:bg-surface hover:text-on-surface"
                }`}
              >
                {sub.name} ({sub.shortName})
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Subject Summary Banner */}
      <div className="p-6 sm:p-8 rounded-[12px] bg-surface-container border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-terra-card">
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-xs font-mono text-tertiary">
            <span className="uppercase font-semibold tracking-wider">
              {currentSubject.questionCount} Total Questions
            </span>
            <span>•</span>
            <span>{currentSubject.timeAllocation}</span>
          </div>
          <h3 className="font-display text-3xl text-on-surface">
            {currentSubject.name}
          </h3>
          <p className="text-secondary text-sm max-w-2xl leading-relaxed">
            {currentSubject.summary}
          </p>
        </div>

        <div className="bg-surface p-4 rounded-[12px] border border-outline-variant text-xs text-secondary font-mono space-y-1 min-w-[200px]">
          <div className="flex justify-between">
            <span>Modules:</span>
            <span className="font-bold text-on-surface">
              {currentSubject.modules.length} Modules
            </span>
          </div>
          <div className="flex justify-between">
            <span>Target Accuracy:</span>
            <span className="font-bold text-primary">85%+</span>
          </div>
          <div className="flex justify-between">
            <span>Format:</span>
            <span className="font-bold text-on-surface">MCQ + TITA</span>
          </div>
        </div>
      </div>

      {/* Subject Public PDF Downloads Strip */}
      {subjectResources.length > 0 && (
        <div className="p-5 rounded-[12px] bg-surface border border-outline-variant space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>
                {currentSubject.shortName} Reference PDFs &amp; Formula Sheets
              </span>
            </span>
            {onNavigateLibrary && (
              <button
                onClick={onNavigateLibrary}
                className="text-xs text-primary hover:underline font-medium cursor-pointer"
              >
                View Full Library →
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {subjectResources.map((res) => (
              <div
                key={res.id}
                className="p-3 rounded-lg bg-surface-container border border-outline-variant hover:border-primary/60 flex items-center justify-between transition-all"
              >
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-display font-medium text-on-surface truncate">
                    {res.title}
                  </div>
                  <div className="text-[10px] font-mono text-secondary/70">
                    {res.type} • {res.fileSize}
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 flex-shrink-0">
                  <button
                    onClick={() => StorageService.openResource(res)}
                    className="p-1.5 rounded bg-surface hover:bg-primary hover:text-on-primary text-secondary transition-colors cursor-pointer"
                    title="Read PDF"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => StorageService.downloadResource(res)}
                    className="p-1.5 rounded bg-surface hover:bg-primary hover:text-on-primary text-secondary transition-colors cursor-pointer"
                    title="Download File"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modules Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-display text-2xl text-on-surface">
            {currentSubject.shortName} • Module Codex
          </h4>
          <span className="text-xs text-secondary font-mono">
            {currentSubject.weightageDescription}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSubject.modules.map((module) => {
            const isHigh = module.weightageType === "high";

            return (
              <div
                key={module.id}
                className="p-6 rounded-[12px] border border-outline-variant bg-surface hover:border-primary transition-all space-y-4 shadow-terra-card flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-tertiary uppercase tracking-widest font-semibold">
                      {module.moduleNumber}
                    </span>
                    <span className="text-secondary font-mono">
                      {module.chapters.length} Chapters
                    </span>
                  </div>

                  <h5 className="font-display text-2xl text-on-surface group-hover:text-primary transition-colors">
                    {module.title}
                  </h5>

                  <p className="text-xs text-secondary leading-relaxed">
                    {module.description}
                  </p>

                  {/* Chapter List */}
                  <div className="pt-2 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-secondary tracking-wider block">
                      Curriculum Chapters:
                    </span>
                    <div className="space-y-1">
                      {module.chapters.slice(0, 4).map((ch, i) => (
                        <div
                          key={i}
                          className="text-xs text-on-surface/80 flex items-center space-x-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                          <span className="truncate">{ch}</span>
                        </div>
                      ))}
                      {module.chapters.length > 4 && (
                        <span className="text-[11px] text-secondary font-mono pl-3">
                          + {module.chapters.length - 4} additional sub-topics
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-xs">
                  <span
                    className={`font-semibold font-mono text-[11px] ${
                      isHigh ? "text-primary" : "text-tertiary"
                    }`}
                  >
                    {module.weightageText}
                  </span>
                  <button
                    onClick={() =>
                      onNavigateNotes(
                        module.recommendedNoteId || "percentages-multipliers",
                      )
                    }
                    className="font-semibold underline text-primary hover:text-primary-hover flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Read Notes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
