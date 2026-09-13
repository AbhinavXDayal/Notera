import React, { useState } from "react";
import { ArrowLeft, ChevronDown, BookOpen, Compass } from "lucide-react";

export type CatTabType =
  | "overview"
  | "journey"
  | "subjects"
  | "notes"
  | "practice"
  | "resources";

interface CatOverviewTabProps {
  onNavigateTab?: (tab: CatTabType, chapterId?: string) => void;
  onBackToPaths?: () => void;
  onOpenFundamentals?: () => void;
}

export const CatOverviewTab: React.FC<CatOverviewTabProps> = ({
  onNavigateTab: _onNavigateTab,
  onBackToPaths,
}) => {
  const sectionIds = ["01", "02"];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => ({
      "01": true,
      "02": true,
    }),
  );

  // Active centered view switcher: 'roadmap' or 'notes'
  const [activeViewMode, setActiveViewMode] = useState<"roadmap" | "notes">(
    "roadmap",
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isAllExpanded = sectionIds.every((id) => openSections[id]);

  const toggleAll = () => {
    const nextState = !isAllExpanded;
    const updated: Record<string, boolean> = {};
    sectionIds.forEach((id) => {
      updated[id] = nextState;
    });
    setOpenSections(updated);
  };

  // 1. Generic Field Guide Framework Card (Top Full Width)
  const renderFieldGuideCard = () => (
    <div className="w-full rounded-2xl bg-surface-container border border-outline-variant p-4 sm:p-5 shadow-terra-card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:divide-x md:divide-outline-variant/50">
        {/* Section 1 */}
        <div className="space-y-1.5">
          <h4 className="font-display text-base sm:text-lg text-on-surface font-semibold">
            Any Field Guide
          </h4>
          <div className="text-secondary text-xs sm:text-sm leading-relaxed space-y-0.5">
            <p>• Roadmap</p>
            <p>• Fundamentals</p>
            <p>• Theory &amp; Practical</p>
            <p>• Notes / Docs</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-1.5 md:pl-6 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/40">
          <h4 className="font-display text-base sm:text-lg text-on-surface font-semibold">
            For Ex
          </h4>
          <div className="text-secondary text-xs sm:text-sm leading-relaxed space-y-0.5">
            <p>1. Cs Roadmap</p>
            <p>1.2 Computer Fundamentals</p>
            <p>1.3 DSA - Programming Language</p>
            <p>1.4 Field - App Development</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-1.5 md:pl-6 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/40">
          <h4 className="font-display text-base sm:text-lg text-on-surface font-semibold">
            For Each Section
          </h4>
          <div className="text-secondary text-xs sm:text-sm leading-relaxed space-y-0.5">
            <p>• Roadmap</p>
            <p>• Fundamentals</p>
            <p>• Theory &amp; Practicals</p>
            <p>• Notes / Docs</p>
          </div>
        </div>
      </div>
    </div>
  );

  // 2. Roadmap Content
  const renderRoadmapContent = () => (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-semibold">
            Roadmap
          </h3>
        </div>
        <button
          type="button"
          onClick={toggleAll}
          className="text-xs font-mono text-primary hover:text-on-surface border border-outline-variant/80 hover:border-primary px-3 py-1.5 rounded-lg bg-surface/60 transition-all cursor-pointer whitespace-nowrap ml-2"
        >
          {isAllExpanded ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 01 — What is CAT? */}
      <div className="space-y-3 p-3.5 -mx-3.5 rounded-xl border border-transparent hover:border-outline-variant/40 transition-all">
        <button
          type="button"
          onClick={() => toggleSection("01")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg sm:text-xl text-on-surface group-hover:text-primary transition-colors font-semibold">
              01 — What is CAT?
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["01"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["01"] && (
          <div className="pt-2 pb-1 text-xs sm:text-sm text-secondary leading-relaxed space-y-2.5 fade-in">
            <p>
              The <strong className="text-on-surface">Common Admission Test (CAT)</strong> is India’s premier national-level computer-based entrance examination conducted annually by the Indian Institutes of Management (IIMs) for admission to top-tier postgraduate management programs (MBA/PGP).
            </p>
            <p>
              Rather than testing rote memorization, CAT evaluates speed, comprehension, analytical reasoning, and decisive decision-making under strict time constraints across three locked 40-minute sections: <span className="text-on-surface font-medium">VARC</span>, <span className="text-on-surface font-medium">DILR</span>, and <span className="text-on-surface font-medium">QA</span>.
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 02 — Syllabus */}
      <div className="space-y-3 p-3.5 -mx-3.5 rounded-xl border border-transparent hover:border-outline-variant/40 transition-all">
        <button
          type="button"
          onClick={() => toggleSection("02")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg sm:text-xl text-on-surface group-hover:text-primary transition-colors font-semibold">
              02 — Syllabus
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["02"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["02"] && (
          <div className="space-y-4 pt-2 pb-1 fade-in">
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              The CAT exam syllabus comprises three core sections designed to evaluate quantitative problem solving, verbal reasoning, and multi-dimensional data analysis:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {/* QA Pillar */}
              <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Quantitative Aptitude (QA)
                  </span>
                  <span className="text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/50">
                    22 Qs • 40m
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <p className="font-semibold text-on-surface">Arithmetic (~40–45%)</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Percentages, Profit & Loss, Simple & Compound Interest, Ratio & Proportion, Time Speed Distance (Races, Trains, Escalators), Time & Work, Averages & Mixtures.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Algebra (~30–35%)</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Linear & Quadratic Equations, Polynomials, Inequalities, Modulus, Functions & Graphs, Maxima-Minima, Logarithms, Sequences & Series.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Geometry & Mensuration (~15–20%)</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Triangles, Circles, Quadrilaterals, Coordinate Geometry, Trigonometry, 2D & 3D Mensuration.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Number Systems & Modern Math (~10%)</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Divisibility, Remainders, Factors, Permutations & Combinations, Probability, Set Theory.
                    </p>
                  </div>
                </div>
              </div>

              {/* VARC Pillar */}
              <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Verbal Ability & RC (VARC)
                  </span>
                  <span className="text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/50">
                    24 Qs • 40m
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <p className="font-semibold text-on-surface">Reading Comprehension (~66%)</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      4 Dense Passages (~400–500 words each) covering Philosophy, Sociology, Economics, Psychology, History, Science & Technology.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">RC Core Question Archetypes</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Central Theme & Main Idea, Author Tone & Attitude, Inference & Unstated Premises, Contextual Meaning, Logical Conclusion.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Verbal Ability (~34%)</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Para Jumbles (TITA sequence ordering), Paragraph Summary (thesis compression), Odd Sentence Out, Para Completion & Sentence Insertion.
                    </p>
                  </div>
                </div>
              </div>

              {/* DILR Pillar */}
              <div className="p-4 rounded-xl bg-surface border border-outline-variant/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-outline-variant/60 pb-2.5">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                    Data Interpretation & LR (DILR)
                  </span>
                  <span className="text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/50">
                    20–22 Qs • 40m
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div>
                    <p className="font-semibold text-on-surface">Logical Reasoning</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Linear & Circular Arrangements, Matrix Attribute Grids, Games & Tournaments (Round-Robin, Knockouts), Truth-Teller & Liar Binary Deduction.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Data Interpretation</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Complex Multi-Layer Tables, Bar & Line Charts, Pie Charts, Radar/Spider Charts, Bubble & Scatter Plots, Missing Data Caselets.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">Hybrid Analytical Sets</p>
                    <p className="text-secondary/90 font-light mt-0.5">
                      Network Routes & Max Flow, Venn Diagrams (2, 3, 4 Sets Maxima-Minima), Scheduling & Optimization Constraints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // 3. Notes Content
  const renderNotesContent = () => (
    <div
      id="notes-card"
      className="w-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 space-y-3"
    >
      <div className="w-12 h-12 rounded-2xl bg-surface border border-outline-variant flex items-center justify-center text-secondary">
        <BookOpen className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h3 className="font-display text-xl text-on-surface font-semibold">
          Notes
        </h3>
        <p className="text-secondary text-xs sm:text-sm font-light max-w-sm mx-auto">
          Notes are empty for now.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full px-1 sm:px-2 md:px-4 py-2 space-y-6 fade-in">
      {/* Top Header Row: Back Navigation */}
      {onBackToPaths && (
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToPaths}
            className="inline-flex items-center space-x-2 text-xs font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Paths</span>
          </button>
        </div>
      )}

      {/* 1. Generic Field Guide Framework Card (Top Full Width) */}
      {renderFieldGuideCard()}

      {/* 2. Single Unified Container with Centered Switcher (Roadmap | Notes) */}
      <div className="w-full rounded-2xl bg-surface-container border border-outline-variant p-5 sm:p-7 shadow-terra-card space-y-6">
        {/* Centered Roadmap & Notes Toggle Buttons */}
        <div className="flex items-center justify-center pt-1">
          <div className="inline-flex items-center p-1 rounded-xl bg-surface border border-outline-variant shadow-xs">
            <button
              type="button"
              onClick={() => setActiveViewMode("roadmap")}
              className={`inline-flex items-center space-x-2 px-6 sm:px-8 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeViewMode === "roadmap"
                  ? "bg-primary text-on-primary font-bold shadow-xs"
                  : "text-secondary hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Roadmap</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveViewMode("notes")}
              className={`inline-flex items-center space-x-2 px-6 sm:px-8 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeViewMode === "notes"
                  ? "bg-primary text-on-primary font-bold shadow-xs"
                  : "text-secondary hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Notes</span>
            </button>
          </div>
        </div>

        {/* Display only the active button's section */}
        <div className="pt-2 w-full">
          {activeViewMode === "roadmap" ? (
            <div className="fade-in w-full">{renderRoadmapContent()}</div>
          ) : (
            <div className="fade-in w-full">{renderNotesContent()}</div>
          )}
        </div>
      </div>
    </div>
  );
};
