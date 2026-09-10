import React from "react";

interface HeroSectionProps {
  onExploreArchiveIndex?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-outline-variant">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl text-on-surface font-normal tracking-tight">
          Where do you want{" "}
          <span className="italic font-display font-light text-primary">
            to begin?
          </span>
        </h1>
        <p className="text-secondary text-xs sm:text-sm mt-1 max-w-xl font-normal">
          Select a learning path below to explore structured roadmaps, canonical
          notes, and syllabus guides.
        </p>
      </div>
      <div className="mt-2 md:mt-0 text-[11px] font-mono text-tertiary">
        1 Active Field • 7 Upcoming
      </div>
    </div>
  );
};
