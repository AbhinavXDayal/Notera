import React from "react";
import { ChevronDown } from "lucide-react";

export interface JourneyTopicAccordionProps {
  id: string;
  number: string;
  title: string;
  tagline?: string;
  badge?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const JourneyTopicAccordion: React.FC<JourneyTopicAccordionProps> = ({
  number,
  title,
  tagline,
  badge,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-primary/50 bg-surface-container shadow-terra-card"
          : "border-outline-variant bg-surface hover:border-outline hover:bg-surface-container-low"
      }`}
    >
      {/* Clickable Topic Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl"
      >
        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
          {/* Index Pill & Rotating Arrow Indicator */}
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all shrink-0 ${
              isOpen
                ? "bg-primary text-on-primary shadow-xs"
                : "bg-surface-container-high border border-outline-variant text-secondary group-hover:text-primary group-hover:border-primary/40"
            }`}
          >
            {number}
          </div>

          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <h4
                className={`font-display text-base sm:text-lg font-medium transition-colors truncate ${
                  isOpen
                    ? "text-primary"
                    : "text-on-surface group-hover:text-primary"
                }`}
              >
                {title}
              </h4>
              {badge && (
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              )}
            </div>
            {tagline && (
              <p className="text-xs text-secondary truncate mt-0.5 font-normal">
                {tagline}
              </p>
            )}
          </div>
        </div>

        {/* Right Toggle Pill with Smooth Chevron Rotation */}
        <div className="flex items-center space-x-2 shrink-0">
          <span className="hidden md:inline-block text-[11px] font-mono text-secondary group-hover:text-primary transition-colors">
            {isOpen ? "Collapse" : "Explore"}
          </span>
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
              isOpen
                ? "bg-primary/15 border-primary/40 text-primary rotate-180"
                : "bg-surface-container border-outline-variant text-secondary group-hover:text-primary group-hover:border-primary/40 rotate-0"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </button>

      {/* Expandable Topic Content Area */}
      {isOpen && (
        <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-outline-variant/60 fade-in">
          {children}
        </div>
      )}
    </div>
  );
};
