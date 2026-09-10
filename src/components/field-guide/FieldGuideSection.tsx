import React from "react";
import type { FieldGuideConfig, FieldGuideModule } from "../../types/fieldGuide";
import { GuideCard } from "./GuideCard";

interface FieldGuideSectionProps {
  config: FieldGuideConfig;
  onSelectModule: (module: FieldGuideModule) => void;
}

export const FieldGuideSection: React.FC<FieldGuideSectionProps> = ({
  config,
  onSelectModule,
}) => {
  return (
    <section className="space-y-8 pt-8 border-t border-outline-variant/60">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-[11px] font-mono uppercase tracking-widest text-tertiary">
          <span>{config.plateNumber || "UNIVERSAL LEARNING FRAMEWORK"}</span>
          <span>•</span>
          <span>{config.modules.length} Pillars</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal">
          {config.heading}
        </h2>

        <p className="text-secondary text-base sm:text-lg leading-relaxed font-light max-w-3xl">
          {config.subtitle}
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.modules.map((module) => (
          <GuideCard
            key={module.id}
            module={module}
            onSelect={onSelectModule}
          />
        ))}
      </div>
    </section>
  );
};
