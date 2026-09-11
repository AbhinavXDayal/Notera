import React from "react";
import { STAGE_01_DATA } from "../../../data/catJourneyData";
import {
  UserCheck,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";

export const CallPredictorCard: React.FC = () => {
  const { callPredictor } = STAGE_01_DATA.targetColleges;

  return (
    <div className="bg-surface-container border-2 border-outline-variant hover:border-primary/50 transition-all rounded-xl p-6 sm:p-8 space-y-6 shadow-terra-card">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-outline-variant">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center text-primary">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-tertiary font-semibold block">
              {callPredictor.badge}
            </span>
            <h4 className="font-display text-xl sm:text-2xl text-on-surface font-medium">
              {callPredictor.title}
            </h4>
          </div>
        </div>

        <a
          href={callPredictor.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-on-primary font-medium text-xs transition-colors shadow-xs cursor-pointer self-start sm:self-auto shrink-0"
        >
          <span>{callPredictor.ctaText}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
        {callPredictor.desc}
      </p>

      {/* Profile Evaluation Factors */}
      <div className="space-y-3 pt-1">
        <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold block">
          Key Composite Score &amp; Profile Evaluation Factors
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {callPredictor.factors.map((factor, idx) => (
            <div
              key={idx}
              className="bg-surface border border-outline-variant/60 rounded-lg p-2.5 flex items-center space-x-2 text-xs text-on-surface/90"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="font-normal">{factor}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-surface/50 border border-outline-variant/50 rounded-lg p-3 flex items-start space-x-2.5 text-[11px] text-secondary leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
        <span>
          <strong className="text-on-surface">
            External Planning Tool Disclaimer:{" "}
          </strong>
          {callPredictor.disclaimer}
        </span>
      </div>
    </div>
  );
};
