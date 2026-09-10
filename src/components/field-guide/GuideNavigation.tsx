import React from "react";
import { ArrowLeft } from "lucide-react";

interface GuideNavigationProps {
  fieldTitle?: string;
  currentSectionTitle?: string;
  onBackToOverview: () => void;
  onBackToAllPaths?: () => void;
}

export const GuideNavigation: React.FC<GuideNavigationProps> = ({
  fieldTitle = "CAT",
  currentSectionTitle,
  onBackToOverview,
  onBackToAllPaths,
}) => {
  return (
    <div className="bg-surface-container border-b border-outline-variant py-3 px-6 lg:px-12 sticky top-0 z-30 flex items-center justify-between text-xs overflow-x-auto">
      <div className="flex items-center space-x-4 min-w-max">
        {onBackToAllPaths && (
          <button
            onClick={onBackToAllPaths}
            className="text-secondary hover:text-primary flex items-center space-x-1.5 pr-4 border-r border-outline-variant font-medium cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Paths</span>
          </button>
        )}

        <button
          onClick={onBackToOverview}
          className="text-secondary hover:text-primary flex items-center space-x-1.5 font-medium cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{fieldTitle} Field Guide</span>
        </button>

        {currentSectionTitle && (
          <>
            <span className="text-outline-variant">•</span>
            <span className="font-display italic text-on-surface font-semibold">
              {currentSectionTitle}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
