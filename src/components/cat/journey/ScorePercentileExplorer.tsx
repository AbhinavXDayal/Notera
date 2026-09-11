import React, { useState, useMemo } from "react";
import { STAGE_01_DATA } from "../../../data/catJourneyData";
import { Calculator, Sparkles, TrendingUp, Info, RotateCcw } from "lucide-react";

export const ScorePercentileExplorer: React.FC = () => {
  const [varcScore, setVarcScore] = useState<number>(30);
  const [dilrScore, setDilrScore] = useState<number>(24);
  const [qaScore, setQaScore] = useState<number>(24);

  const totalScore = useMemo(() => {
    return Math.max(0, (varcScore || 0) + (dilrScore || 0) + (qaScore || 0));
  }, [varcScore, dilrScore, qaScore]);

  // Determine estimated percentile range based on total score bands
  const estimateResult = useMemo(() => {
    const { bands } = STAGE_01_DATA.scoreEstimator;
    for (const band of bands) {
      if (totalScore >= band.min && totalScore <= band.max) {
        return band;
      }
    }
    return bands[bands.length - 1];
  }, [totalScore]);

  // Sectional quick estimates
  const sectionalEstimates = useMemo(() => {
    const calcSection = (score: number) => {
      if (score >= 40) return "99.5+ %ile";
      if (score >= 32) return "98.0 – 99.4 %ile";
      if (score >= 25) return "95.0 – 97.9 %ile";
      if (score >= 18) return "88.0 – 94.9 %ile";
      if (score >= 12) return "75.0 – 87.9 %ile";
      return "< 75.0 %ile";
    };

    return {
      varc: calcSection(varcScore),
      dilr: calcSection(dilrScore),
      qa: calcSection(qaScore),
    };
  }, [varcScore, dilrScore, qaScore]);

  const applyPreset = (v: number, d: number, q: number) => {
    setVarcScore(v);
    setDilrScore(d);
    setQaScore(q);
  };

  return (
    <div className="space-y-8">
      {/* 1. Visual Comparison: Score != Percentile */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-6 space-y-6 shadow-terra-card">
        <div className="flex items-center space-x-2 text-primary font-mono text-xs font-semibold">
          <TrendingUp className="w-4 h-4" />
          <span>PARADIGM SHIFT • SCORE ≠ PERCENTILE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Box 1: Raw Score */}
          <div className="bg-surface border border-outline-variant rounded-xl p-5 space-y-2 relative">
            <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
              Raw Performance Metric
            </span>
            <h4 className="font-display text-xl sm:text-2xl text-on-surface font-semibold">
              YOUR RAW SCORE
            </h4>
            <p className="text-xs text-secondary leading-relaxed">
              {STAGE_01_DATA.scoreVsPercentile.visualComparison.scoreDesc}
            </p>
            <div className="pt-2 text-[11px] font-mono text-tertiary">
              Maximum possible marks: 198 (66 questions × 3)
            </div>
          </div>

          {/* Box 2: Relative Percentile */}
          <div className="bg-surface border-2 border-primary/40 rounded-xl p-5 space-y-2 relative shadow-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold">
              National Relative Standing
            </span>
            <h4 className="font-display text-xl sm:text-2xl text-primary font-semibold">
              YOUR PERCENTILE
            </h4>
            <p className="text-xs text-on-surface/90 leading-relaxed">
              {STAGE_01_DATA.scoreVsPercentile.visualComparison.percentileDesc}
            </p>
            <div className="pt-2 text-[11px] font-mono text-primary font-medium">
              ~75–80 Marks (~40% of paper) consistently yields ~99th Percentile!
            </div>
          </div>
        </div>

        {/* Normalization Callout */}
        <div className="bg-surface/50 border border-outline-variant/60 rounded-lg p-3.5 flex items-start space-x-3 text-xs text-secondary leading-relaxed">
          <Info className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
          <div>
            <span className="text-on-surface font-medium">Why normalization matters: </span>
            {STAGE_01_DATA.scoreVsPercentile.normalizationNote}
          </div>
        </div>
      </div>

      {/* 2. Interactive Notera CAT Score Estimator */}
      <div className="bg-surface border-2 border-outline rounded-xl p-6 sm:p-8 space-y-6 shadow-terra-card relative overflow-hidden">
        {/* Estimator Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
          <div>
            <div className="flex items-center space-x-2 text-primary">
              <Calculator className="w-4 h-4" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                Interactive Tool
              </span>
            </div>
            <h4 className="font-display text-2xl text-on-surface font-medium mt-0.5">
              Notera CAT Score Estimator
            </h4>
            <p className="text-xs text-secondary mt-0.5">
              Adjust section scores below to explore how raw marks translate into estimated percentile bands.
            </p>
          </div>

          {/* Benchmark Preset Pills */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
            <span className="text-secondary text-[10px] uppercase mr-1">Presets:</span>
            <button
              type="button"
              onClick={() => applyPreset(36, 27, 27)}
              className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-primary transition-colors cursor-pointer"
            >
              99+ %ile (90m)
            </button>
            <button
              type="button"
              onClick={() => applyPreset(28, 20, 20)}
              className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-secondary hover:text-on-surface transition-colors cursor-pointer"
            >
              97 %ile (68m)
            </button>
            <button
              type="button"
              onClick={() => applyPreset(24, 16, 16)}
              className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-secondary hover:text-on-surface transition-colors cursor-pointer"
            >
              93 %ile (56m)
            </button>
            <button
              type="button"
              onClick={() => applyPreset(0, 0, 0)}
              className="p-1 rounded bg-surface-container hover:bg-surface-container-high border border-outline-variant text-secondary hover:text-primary transition-colors cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Inputs Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* VARC Input */}
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="varc-input" className="font-mono text-xs font-semibold text-primary">
                VARC Score (Max 72)
              </label>
              <span className="text-xs font-mono font-bold text-on-surface bg-surface px-2 py-0.5 rounded border border-outline-variant">
                {varcScore} marks
              </span>
            </div>
            <input
              id="varc-input"
              type="range"
              min={0}
              max={72}
              value={varcScore}
              onChange={(e) => setVarcScore(Number(e.target.value))}
              className="w-full accent-[#D8C3A5] bg-outline-variant h-1.5 rounded-lg cursor-pointer"
            />
            <div className="flex items-center justify-between text-[11px] text-secondary font-mono">
              <span>Sectional Est:</span>
              <span className="text-primary font-medium">{sectionalEstimates.varc}</span>
            </div>
          </div>

          {/* DILR Input */}
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="dilr-input" className="font-mono text-xs font-semibold text-primary">
                DILR Score (Max 60)
              </label>
              <span className="text-xs font-mono font-bold text-on-surface bg-surface px-2 py-0.5 rounded border border-outline-variant">
                {dilrScore} marks
              </span>
            </div>
            <input
              id="dilr-input"
              type="range"
              min={0}
              max={60}
              value={dilrScore}
              onChange={(e) => setDilrScore(Number(e.target.value))}
              className="w-full accent-[#D8C3A5] bg-outline-variant h-1.5 rounded-lg cursor-pointer"
            />
            <div className="flex items-center justify-between text-[11px] text-secondary font-mono">
              <span>Sectional Est:</span>
              <span className="text-primary font-medium">{sectionalEstimates.dilr}</span>
            </div>
          </div>

          {/* QA Input */}
          <div className="bg-surface-container p-4 rounded-xl border border-outline-variant space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="qa-input" className="font-mono text-xs font-semibold text-primary">
                QA Score (Max 66)
              </label>
              <span className="text-xs font-mono font-bold text-on-surface bg-surface px-2 py-0.5 rounded border border-outline-variant">
                {qaScore} marks
              </span>
            </div>
            <input
              id="qa-input"
              type="range"
              min={0}
              max={66}
              value={qaScore}
              onChange={(e) => setQaScore(Number(e.target.value))}
              className="w-full accent-[#D8C3A5] bg-outline-variant h-1.5 rounded-lg cursor-pointer"
            />
            <div className="flex items-center justify-between text-[11px] text-secondary font-mono">
              <span>Sectional Est:</span>
              <span className="text-primary font-medium">{sectionalEstimates.qa}</span>
            </div>
          </div>
        </div>

        {/* Live Calculation Output Card */}
        <div className="bg-surface-container-high border-2 border-primary/60 rounded-xl p-6 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Left: Total Score */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
                Cumulative Raw Aggregate
              </span>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-on-surface">
                  {totalScore}
                </span>
                <span className="text-sm font-mono text-secondary">/ 198 marks</span>
              </div>
              <p className="text-xs text-secondary mt-1">
                Accuracy equivalent to approx. {Math.round((totalScore / 3))} net correct questions.
              </p>
            </div>

            {/* Right: Estimated Percentile Range */}
            <div className="bg-surface/80 border border-outline-variant p-4 rounded-lg space-y-1 sm:text-right">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold flex sm:justify-end items-center gap-1">
                <Sparkles className="w-3 h-3 text-primary" /> Estimated Percentile Range
              </span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-primary">
                ~ {estimateResult.percentileRange}
              </div>
              <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-primary mt-1">
                {estimateResult.label}
              </span>
            </div>
          </div>

          {/* Strategic Admission Insight */}
          <div className="pt-3 border-t border-outline-variant/60 flex items-start space-x-2 text-xs text-secondary">
            <span className="text-primary font-bold">Insight:</span>
            <p className="text-on-surface/90">{estimateResult.insight}</p>
          </div>
        </div>

        {/* Clear Disclaimer */}
        <p className="text-[11px] text-secondary/80 italic leading-relaxed">
          * {STAGE_01_DATA.scoreEstimator.disclaimer}
        </p>
      </div>
    </div>
  );
};
