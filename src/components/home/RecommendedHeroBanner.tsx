import React from "react";
import { ArrowRight, Sliders, Sparkles, RefreshCw } from "lucide-react";
import type { PersonalizedRecommendation } from "../../types/preferences";

interface RecommendedHeroBannerProps {
  recommendation: PersonalizedRecommendation;
  onCtaClick: () => void;
  onSecondaryClick?: (link: {
    targetTab?:
      | "overview"
      | "journey"
      | "subjects"
      | "notes"
      | "practice"
      | "resources";
    targetChapterId?: string;
    targetView?: "home" | "cat" | "field";
    targetFieldId?: string;
  }) => void;
  onUpdatePreferences: () => void;
  onResetPreferences?: () => void;
}

export const RecommendedHeroBanner: React.FC<RecommendedHeroBannerProps> = ({
  recommendation,
  onCtaClick,
  onSecondaryClick,
  onUpdatePreferences,
  onResetPreferences,
}) => {
  return (
    <div className="bg-surface-container/90 border-2 border-primary/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-terra-card transition-all mb-6 fade-in">
      <div className="relative z-10">
        {/* Top Tag & Settings trigger */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>{recommendation.badge}</span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono text-secondary">
            <button
              onClick={onUpdatePreferences}
              className="inline-flex items-center space-x-1.5 hover:text-primary transition-colors cursor-pointer"
              title="Update your personalized study preferences"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Update preferences</span>
            </button>

            {onResetPreferences && (
              <button
                onClick={onResetPreferences}
                className="hidden sm:inline-flex items-center space-x-1 text-secondary/60 hover:text-red-700 transition-colors cursor-pointer"
                title="Reset preferences to default"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal tracking-tight">
          {recommendation.title}
        </h2>

        {/* Description */}
        <p className="text-secondary text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed font-normal">
          {recommendation.description}
        </p>

        {/* CTAs & Secondary Links */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <button
            onClick={onCtaClick}
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all flex items-center space-x-2 shadow-terra-card cursor-pointer"
          >
            <span>{recommendation.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {recommendation.secondaryLinks &&
            recommendation.secondaryLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => onSecondaryClick && onSecondaryClick(link)}
                className="px-3.5 py-2 rounded-full bg-surface border border-outline-variant hover:border-primary text-xs text-secondary hover:text-on-surface transition-all cursor-pointer font-medium"
              >
                {link.label}
              </button>
            ))}
        </div>
      </div>

      {/* Decorative ambient watermark */}
      <div className="absolute -right-6 -bottom-8 opacity-5 pointer-events-none select-none">
        <span className="font-display text-9xl text-primary font-serif italic">
          N
        </span>
      </div>
    </div>
  );
};

