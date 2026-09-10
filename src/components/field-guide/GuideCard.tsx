import React from "react";
import { ArrowRight } from "lucide-react";
import type { FieldGuideModule } from "../../types/fieldGuide";

interface GuideCardProps {
  module: FieldGuideModule;
  onSelect: (module: FieldGuideModule) => void;
}

export const GuideCard: React.FC<GuideCardProps> = ({ module, onSelect }) => {
  return (
    <div className="rounded-[16px] bg-surface-container border border-outline-variant hover:border-primary/50 transition-all p-6 sm:p-8 shadow-terra-card hover:shadow-terra-hover flex flex-col justify-between group relative overflow-hidden">
      <div className="space-y-4">
        {/* Top Number & Badge Header */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-2xl sm:text-3xl font-bold text-primary/70 group-hover:text-primary transition-colors tracking-tight">
            {module.number}
          </span>
          {module.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-surface border border-outline-variant text-[11px] font-mono text-secondary uppercase tracking-wider">
              {module.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-normal group-hover:text-primary transition-colors">
          {module.title}
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm sm:text-base leading-relaxed font-light">
          {module.description}
        </p>

        {/* Purpose Bullet Points */}
        {module.purpose && module.purpose.length > 0 && (
          <div className="pt-3 border-t border-outline-variant/60 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {module.purpose.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 text-xs text-secondary font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="pt-6 mt-4">
        <button
          onClick={() => onSelect(module)}
          className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-surface border border-outline-variant group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary text-xs font-semibold text-primary transition-all flex items-center justify-between sm:justify-start space-x-2 cursor-pointer shadow-sm"
        >
          <span>{module.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Subtle Background Watermark Number */}
      <div className="absolute -right-3 -bottom-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none select-none">
        <span className="font-mono text-8xl font-black text-on-surface">
          {module.number}
        </span>
      </div>
    </div>
  );
};
