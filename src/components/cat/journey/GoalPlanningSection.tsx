import React from "react";
import { STAGE_01_DATA } from "../../../data/catJourneyData";
import { Compass, ArrowRight, Lightbulb } from "lucide-react";

export const GoalPlanningSection: React.FC = () => {
  const { promptQuestion, promptDesc, reasons, journeyFlow } =
    STAGE_01_DATA.goalsAndReflections;

  return (
    <div className="space-y-8">
      {/* Reflective Prompt Card */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-6 sm:p-8 space-y-6 shadow-terra-card">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-primary">
            <Compass className="w-4 h-4" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              Strategic Self-Reflection
            </span>
          </div>
          <h4 className="font-display text-2xl sm:text-3xl text-on-surface font-medium">
            "{promptQuestion}"
          </h4>
          <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-3xl">
            {promptDesc}
          </p>
        </div>

        {/* Motivating Strategic Vectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-surface border border-outline-variant/70 hover:border-primary/40 rounded-xl p-4 space-y-1.5 transition-colors"
            >
              <h5 className="font-display text-base text-on-surface font-medium flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{reason.title}</span>
              </h5>
              <p className="text-xs text-secondary leading-relaxed pl-3.5">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual 4-Step Strategic Alignment Flow */}
      <div className="bg-surface border border-outline-variant rounded-xl p-6 space-y-5 shadow-terra-card">
        <div className="flex items-center justify-between pb-2 border-b border-outline-variant/60">
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5" /> Conceptual Alignment Flow
          </span>
          <span className="text-[11px] font-mono text-secondary">
            4-Stage Clarity Framework
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {journeyFlow.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container border border-outline-variant rounded-xl p-4 space-y-2 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary bg-surface px-2 py-0.5 rounded border border-outline-variant">
                    {item.step}
                  </span>
                  {idx < journeyFlow.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-tertiary absolute -right-2 top-6 z-10" />
                  )}
                </div>
                <h5 className="font-display text-sm font-semibold text-on-surface mt-2">
                  {item.label}
                </h5>
              </div>
              <p className="text-[11px] text-secondary leading-relaxed mt-2">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

