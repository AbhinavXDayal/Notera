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
    <div className="max-w-lg mx-auto px-4 py-8 space-y-4 fade-in">
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

      {/* Small Plain Text Card */}
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
    </div>
  );
};
