import React from "react";
import { ArrowLeft } from "lucide-react";

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
  onBackToPaths,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 space-y-6 fade-in">
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

      {/* Single Field Guide Blueprint Card */}
      <div className="rounded-[18px] bg-surface-container border border-outline-variant p-8 sm:p-12 shadow-terra-card relative overflow-hidden space-y-10">
        {/* Category Header Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-outline-variant text-[11px] font-mono uppercase tracking-widest text-tertiary">
          <span>Field Guide Framework</span>
          <span>•</span>
          <span>Core Architecture</span>
        </div>

        {/* 1. Any Field Guide Section */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal">
            Any Field Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 text-sm font-medium text-on-surface shadow-sm flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Roadmap</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 text-sm font-medium text-on-surface shadow-sm flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Fundamentals</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 text-sm font-medium text-on-surface shadow-sm flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Theory &amp; Practical</span>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 text-sm font-medium text-on-surface shadow-sm flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Notes / Docs</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outline-variant/60" />

        {/* 2. For Ex Section */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal">
            For Ex
          </h2>
          <div className="space-y-2.5 pt-1">
            <div className="p-3.5 rounded-xl bg-surface border border-outline-variant/80 text-sm text-on-surface font-mono flex items-center space-x-3">
              <span className="text-primary font-bold">1.</span>
              <span>Cs Roadmap</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-outline-variant/80 text-sm text-on-surface font-mono flex items-center space-x-3">
              <span className="text-primary font-bold">1.2</span>
              <span>Computer Fundamentals</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-outline-variant/80 text-sm text-on-surface font-mono flex items-center space-x-3">
              <span className="text-primary font-bold">1.3</span>
              <span>DSA - Programming Language</span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface border border-outline-variant/80 text-sm text-on-surface font-mono flex items-center space-x-3">
              <span className="text-primary font-bold">1.4</span>
              <span>Field - App Development</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-outline-variant/60" />

        {/* 3. For Each Section */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal">
            For Each Section
          </h2>
          <ul className="space-y-3 pt-1 text-sm text-secondary font-medium">
            <li className="flex items-center space-x-3">
              <span className="text-primary font-bold text-lg leading-none">•</span>
              <span className="text-on-surface">Roadmap</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-primary font-bold text-lg leading-none">•</span>
              <span className="text-on-surface">Fundamentals</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-primary font-bold text-lg leading-none">•</span>
              <span className="text-on-surface">Theory &amp; Practicals</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-primary font-bold text-lg leading-none">•</span>
              <span className="text-on-surface">Notes / Docs</span>
            </li>
          </ul>
        </div>

        {/* Subtle Watermark */}
        <div className="absolute -right-6 -bottom-8 opacity-[0.03] pointer-events-none select-none">
          <span className="font-display text-[160px] text-primary">GUIDE</span>
        </div>
      </div>
    </div>
  );
};
