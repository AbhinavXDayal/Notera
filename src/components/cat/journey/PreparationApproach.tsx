import React from "react";
import { STAGE_01_DATA } from "../../../data/catJourneyData";
import { BookOpen, Users, Layers, CheckCircle2 } from "lucide-react";

export const PreparationApproach: React.FC = () => {
  const { approaches } = STAGE_01_DATA.preparationApproach;

  const getIcon = (id: string) => {
    switch (id) {
      case "self-study":
        return <BookOpen className="w-5 h-5 text-primary" />;
      case "coaching":
        return <Users className="w-5 h-5 text-primary" />;
      case "hybrid":
        return <Layers className="w-5 h-5 text-primary" />;
      default:
        return <BookOpen className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {approaches.map((approach) => (
        <div
          key={approach.id}
          className={`rounded-xl p-6 border transition-all flex flex-col justify-between space-y-5 shadow-terra-card ${
            approach.id === "hybrid"
              ? "bg-surface-container border-primary/50 ring-1 ring-primary/20"
              : "bg-surface-container border-outline-variant hover:border-secondary"
          }`}
        >
          {/* Top Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center">
                {getIcon(approach.id)}
              </div>
              <span className="font-mono text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded bg-surface border border-outline-variant text-primary">
                {approach.badge}
              </span>
            </div>

            <div>
              <h4 className="font-display text-xl sm:text-2xl text-on-surface font-medium">
                {approach.title}
              </h4>
              <p className="text-xs text-secondary mt-1 leading-relaxed">
                {approach.tagline}
              </p>
            </div>

            {/* Ideal Candidate Profile */}
            <div className="space-y-2 pt-2 border-t border-outline-variant/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-tertiary font-semibold block">
                Best Suited For:
              </span>
              <ul className="space-y-1.5 text-xs text-on-surface/90">
                {approach.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Components */}
            <div className="space-y-2 pt-2 border-t border-outline-variant/60">
              <span className="text-[10px] font-mono uppercase tracking-wider text-secondary font-semibold block">
                Essential Stack:
              </span>
              <ul className="space-y-1 text-xs text-secondary">
                {approach.keyComponents.map((comp, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <span className="text-primary font-bold">•</span>
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Tip Footer */}
          <div className="pt-3 border-t border-outline-variant/60 bg-surface/50 -mx-6 -mb-6 p-4 rounded-b-xl text-xs">
            <span className="text-[10px] font-mono uppercase tracking-wider text-tertiary font-semibold block mb-0.5">
              Strategic Pro-Tip
            </span>
            <p className="text-on-surface/90 leading-relaxed italic">
              "{approach.proTip}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
