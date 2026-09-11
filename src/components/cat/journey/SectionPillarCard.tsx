import React from "react";
import type { JourneyPillar } from "../../../data/catJourneyData";
import { BookOpen, Brain, Calculator, Clock, HelpCircle } from "lucide-react";

interface SectionPillarCardProps {
  pillar: JourneyPillar;
}

export const SectionPillarCard: React.FC<SectionPillarCardProps> = ({ pillar }) => {
  const getIcon = () => {
    switch (pillar.id) {
      case "varc":
        return <BookOpen className="w-5 h-5 text-primary" />;
      case "dilr":
        return <Brain className="w-5 h-5 text-primary" />;
      case "qa":
        return <Calculator className="w-5 h-5 text-primary" />;
      default:
        return <HelpCircle className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="bg-surface-container border border-outline-variant hover:border-primary/50 transition-all rounded-xl p-5 sm:p-6 space-y-4 shadow-terra-card flex flex-col justify-between group">
      {/* Top Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon()}
          </div>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-surface border border-outline-variant text-primary font-semibold">
            {pillar.code}
          </span>
        </div>

        <div>
          <h4 className="font-display text-xl sm:text-2xl text-on-surface font-medium group-hover:text-primary transition-colors">
            {pillar.name}
          </h4>
          <p className="text-xs text-secondary mt-1 leading-relaxed">
            {pillar.subtitle}
          </p>
        </div>

        {/* Metric Badges */}
        <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[11px] text-secondary">
          <span className="flex items-center space-x-1 bg-surface px-2 py-0.5 rounded border border-outline-variant/60">
            <Clock className="w-3 h-3 text-tertiary" />
            <span>{pillar.timeLimit}</span>
          </span>
          <span className="bg-surface px-2 py-0.5 rounded border border-outline-variant/60">
            {pillar.questionCountEstimate}
          </span>
        </div>

        {/* Focus Bullet Points */}
        <div className="space-y-2 pt-2 border-t border-outline-variant/60">
          <span className="text-[10px] font-mono uppercase tracking-wider text-tertiary font-semibold">
            Core Focus Areas
          </span>
          <ul className="space-y-1.5 text-xs text-on-surface/90">
            {pillar.focusPoints.map((point, idx) => (
              <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategic Mindset Invariant */}
      <div className="pt-3 border-t border-outline-variant/60 bg-surface/40 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-xl">
        <span className="text-[10px] font-mono uppercase tracking-wider text-secondary block mb-1 font-medium">
          Strategic Invariant
        </span>
        <p className="text-xs text-primary font-medium italic leading-relaxed">
          "{pillar.keyMindset}"
        </p>
      </div>
    </div>
  );
};
