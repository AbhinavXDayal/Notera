import React from "react";
import { ArrowLeft } from "lucide-react";
import type { PersonalizedRecommendation } from "../../types/preferences";

export type CatTabType =
  | "overview"
  | "journey"
  | "subjects"
  | "notes"
  | "practice"
  | "resources";

interface CatHeaderNavProps {
  activeTab: CatTabType;
  onTabChange: (tab: CatTabType) => void;
  onBackToPaths: () => void;
  recommendation: PersonalizedRecommendation;
  onRetakeOnboarding: () => void;
}

export const CatHeaderNav: React.FC<CatHeaderNavProps> = ({
  activeTab,
  onTabChange,
  onBackToPaths,
  recommendation,
  onRetakeOnboarding,
}) => {
  const tabs: { id: CatTabType; label: string }[] = [
    { id: "overview", label: "Home" },
    { id: "journey", label: "14-Step Journey" },
    { id: "subjects", label: "Subjects (QA, VARC, DILR)" },
    { id: "notes", label: "Digital Textbook Notes" },
    { id: "resources", label: "PDF Library & Codices" },
    { id: "practice", label: "Practice & Mocks" },
  ];

  return (
    <div className="bg-surface-container border-b border-outline-variant py-3 px-6 lg:px-12 sticky top-16 z-30 flex items-center justify-between overflow-x-auto text-xs">
      <div className="flex items-center space-x-6 min-w-max">
        <button
          onClick={onBackToPaths}
          className="text-secondary hover:text-primary flex items-center space-x-1.5 pr-4 border-r border-outline-variant font-medium cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Paths</span>
        </button>

        <span className="font-display italic text-on-surface font-semibold text-sm">
          CAT Universe
        </span>

        <div className="flex items-center space-x-1 text-secondary">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "bg-surface text-primary font-semibold border border-outline-variant shadow-sm"
                    : "hover:bg-surface/60 font-medium"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-3 text-secondary">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[11px]">
          {recommendation.statusBadge}
        </span>
        <button
          onClick={onRetakeOnboarding}
          className="underline text-[10px] text-tertiary hover:text-primary transition-colors cursor-pointer"
        >
          Adjust diagnostic
        </button>
      </div>
    </div>
  );
};
