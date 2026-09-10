import React from "react";
import type { FieldId, FieldGuideData } from "../../types/field";
import { FIELD_GUIDES } from "../../data/fieldGuides";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FieldGuideViewProps {
  fieldId: FieldId;
  onBackToPaths: () => void;
  onSelectCatPortal: () => void;
}

export const FieldGuideView: React.FC<FieldGuideViewProps> = ({
  fieldId,
  onBackToPaths,
  onSelectCatPortal,
}) => {
  const guideData: FieldGuideData =
    FIELD_GUIDES[fieldId] || FIELD_GUIDES["JEE"];

  return (
    <div className="min-h-screen fade-in">
      {/* Sub-nav Bar */}
      <div className="bg-surface-container border-b border-outline-variant py-3 px-6 lg:px-12 sticky top-20 z-30 flex items-center justify-between overflow-x-auto text-xs">
        <div className="flex items-center space-x-6 min-w-max">
          <button
            onClick={onBackToPaths}
            className="text-secondary hover:text-primary flex items-center space-x-1.5 pr-4 border-r border-outline-variant font-medium cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Paths</span>
          </button>
          <span className="font-display italic text-on-surface font-semibold text-sm">
            {guideData.title} Sanctuary
          </span>
          <span className="text-secondary font-mono text-[11px]">
            {guideData.subtitle}
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-3 text-secondary">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="font-mono text-[11px]">Curriculum Active</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-outline-variant pb-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-xs uppercase tracking-widest text-tertiary font-mono">
              <span>{guideData.plateNumber}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-on-surface font-normal">
              {guideData.title}{" "}
              <span className="italic font-light text-primary">Mastery</span>
            </h1>

            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
              {guideData.overview}
            </p>

            <div className="p-4 rounded-[12px] bg-surface-container border border-outline-variant italic font-display text-sm text-on-surface">
              "{guideData.tagline}"
            </div>
          </div>

          {/* Exam Pattern Specs Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[12px] bg-surface-container border border-outline-variant p-6 space-y-4 shadow-terra-card">
              <span className="text-xs font-mono uppercase tracking-widest text-tertiary font-semibold block">
                Exam Topology &amp; Parameters
              </span>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-outline-variant">
                  <span className="text-secondary">Duration</span>
                  <span className="font-mono font-bold text-on-surface">
                    {guideData.examPattern.duration}
                  </span>
                </div>
                {guideData.examPattern.totalMarks && (
                  <div className="flex justify-between pb-2 border-b border-outline-variant">
                    <span className="text-secondary">Total Marks</span>
                    <span className="font-mono font-bold text-on-surface">
                      {guideData.examPattern.totalMarks}
                    </span>
                  </div>
                )}
                <div className="flex justify-between pb-2 border-b border-outline-variant">
                  <span className="text-secondary">Frequency</span>
                  <span className="font-mono text-on-surface">
                    {guideData.examPattern.frequency}
                  </span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-secondary block">
                    Sectional Structure:
                  </span>
                  <span className="font-mono text-on-surface block text-[11px] bg-surface p-2 rounded border border-outline-variant">
                    {guideData.examPattern.sections}
                  </span>
                </div>
                <div className="space-y-1 pt-1">
                  <span className="text-secondary block">Eligibility:</span>
                  <span className="text-on-surface block text-[11px]">
                    {guideData.examPattern.eligibility}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Section */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
              Core Curriculum Architecture
            </span>
            <h2 className="font-display text-3xl text-on-surface font-normal mt-1">
              Foundational Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guideData.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[12px] border border-outline-variant bg-surface hover:border-primary transition-all space-y-3 shadow-terra-card"
              >
                <span className="font-mono text-xs text-tertiary uppercase tracking-wider font-semibold">
                  Pillar 0{idx + 1} • {pillar.weight}
                </span>
                <h3 className="font-display text-2xl text-on-surface">
                  {pillar.name}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Starter Roadmap */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
              Chronological Initiation
            </span>
            <h2 className="font-display text-3xl text-on-surface font-normal mt-1">
              Beginner Starter Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guideData.starterSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-[12px] bg-surface-container border border-outline-variant space-y-2 shadow-terra-card"
              >
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center font-mono">
                  {step.step}
                </span>
                <h4 className="font-display text-lg text-on-surface font-medium pt-1">
                  {step.title}
                </h4>
                <p className="text-xs text-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explore CAT or other paths banner */}
        <div className="p-8 rounded-[12px] bg-surface border-2 border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-6 shadow-terra-card">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-display text-2xl text-on-surface">
              Explore Our Flagship Interactive Portal: CAT Universe
            </h3>
            <p className="text-xs sm:text-sm text-secondary max-w-xl">
              Experience the full 14-stage interactive roadmap, complete digital
              textbook chapters, and deliberate diagnostic question
              laboratories.
            </p>
          </div>
          <button
            onClick={onSelectCatPortal}
            className="px-6 py-3 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover shadow-terra-card transition-all flex items-center space-x-2 flex-shrink-0 cursor-pointer"
          >
            <span>Open CAT Experience</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  );
};
