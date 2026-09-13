import React, { useState } from "react";
import { ArrowLeft, ChevronDown, BookOpen, Compass } from "lucide-react";
import { Stage01Topics } from "./journey/Stage01Topics";

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
  const sectionIds = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      sectionIds.forEach((id) => {
        initial[id] = true;
      });
      return initial;
    },
  );

  // Active centered view switcher: 'roadmap' or 'notes'
  const [activeViewMode, setActiveViewMode] = useState<"roadmap" | "notes">(
    "roadmap",
  );

  // Track active connected roadmap stage
  const [activeStageId, setActiveStageId] = useState<string | null>("01");

  const handleStageSelect = (id: string) => {
    setActiveStageId(id);
    setActiveViewMode("notes");
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const willBeOpen = !prev[id];
      if (willBeOpen) {
        setActiveStageId(id);
      }
      return {
        ...prev,
        [id]: willBeOpen,
      };
    });
  };

  const isAllExpanded = sectionIds.every((id) => openSections[id]);

  const toggleAll = () => {
    const nextState = !isAllExpanded;
    const updated: Record<string, boolean> = {};
    sectionIds.forEach((id) => {
      updated[id] = nextState;
    });
    setOpenSections(updated);
    if (!nextState) {
      setActiveStageId(null);
    } else {
      setActiveStageId("01");
    }
  };

  // 1. Field Guide Card Content
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

      {/* 01 — Understand the Journey */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "01"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("01")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              01 — Understand the Journey
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
          <div className="space-y-4 pt-1 fade-in">
            {/* 7 Interactive Stage 01 Topic Accordions */}
            <Stage01Topics />
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 02 — Build Your Foundation */}
      <div
        className={`space-y-4 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "02"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("02")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              02 — Build Your Foundation
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
          <div className="space-y-4 pt-1 fade-in">
            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                QA
              </p>
              <p className="text-xs text-secondary font-light">
                Start rebuilding mathematical fundamentals:
              </p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Arithmetic basics</p>
                <p>• Algebra basics</p>
                <p>• Geometry basics</p>
                <p>• Numbers</p>
                <p>• Modern Math</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                VARC
              </p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Build a daily reading habit</p>
                <p>• Learn how Reading Comprehension works</p>
                <p>• Understand summaries &amp; paragraph logic</p>
                <p>• Develop comprehension before obsessing over vocabulary</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                DILR
              </p>
              <p className="text-xs text-secondary font-light">
                Start immediately — don't postpone it
              </p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Basic DI</p>
                <p>• Basic logical reasoning</p>
                <p>• Tables &amp; charts</p>
                <p>• Set selection</p>
                <p>• Structured thinking</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-secondary/80 italic">
                Reddit preparation plans repeatedly emphasize starting DILR
                early.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("02");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 03 — Complete the Core Syllabus */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "03"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("03")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              03 — Complete the Core Syllabus
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["03"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["03"] && (
          <div className="space-y-3 pt-1 fade-in">
            <pre className="text-xs font-mono text-secondary bg-surface/70 border border-outline-variant p-3.5 rounded-lg overflow-x-auto leading-relaxed select-text">
              {`CAT CORE
├── QA
│   ├── Arithmetic
│   ├── Algebra
│   ├── Geometry
│   ├── Number System
│   └── Modern Math
├── VARC
│   ├── Reading Comprehension
│   ├── Para Summary
│   ├── Para Jumbles
│   ├── Odd One Out
│   └── Para Completion
└── DILR
    ├── Data Interpretation
    ├── Logical Reasoning
    ├── Mixed Sets
    └── Set Selection`}
            </pre>
            <div className="flex items-center justify-between pt-1">
              <p className="text-xs text-primary font-medium">
                Goal: Understand every major area before entering intensive mock
                preparation
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("03");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 04 — Practice & Application */}
      <div
        className={`space-y-4 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "04"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("04")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2 text-left">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              04 — Practice &amp; Application
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["04"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["04"] && (
          <div className="space-y-3 pt-1 fade-in">
            <p className="text-xs text-secondary font-light">
              This is where knowledge becomes CAT ability.
            </p>
            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                QA
              </p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Concept ↓ Basic Questions ↓ Intermediate Questions ↓ CAT-Level
                Questions ↓ Mixed Practice
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                VARC
              </p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Daily Reading ↓ RC Practice ↓ Question Analysis ↓ Accuracy
                Improvement
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                DILR
              </p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Basic Sets ↓ Different Set Types ↓ Mixed Sets ↓ Timed Sets ↓ Set
                Selection Strategy
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-secondary/80 italic">
                Consistent DILR volume and repeated practice builds instinct.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("04");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 05 — Sectional Strategy */}
      <div
        className={`space-y-4 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "05"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("05")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2 text-left">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              05 — Sectional Strategy
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["05"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["05"] && (
          <div className="space-y-3 pt-1 fade-in">
            <p className="text-xs text-secondary font-light">
              Once fundamentals are reasonably established:
            </p>

            <div className="space-y-1">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                QA
              </p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Mixed-topic practice</p>
                <p>• Speed vs accuracy</p>
                <p>• Question selection</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                VARC
              </p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• RC accuracy</p>
                <p>• Reading strategy</p>
                <p>• Eliminating wrong options</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                DILR
              </p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Choosing the right sets</p>
                <p>• Leaving bad sets early</p>
                <p>• Solving selected sets efficiently</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <p className="text-xs text-primary font-medium">
                Goal: Attempt CAT strategically rather than just solving
                questions
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("05");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 06 — Enter the Mock Phase */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "06"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("06")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              06 — Enter the Mock Phase
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["06"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["06"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              LEARN ↓ PRACTICE ↓ SECTIONALS ↓ FULL MOCKS
            </div>
            <p className="text-sm text-on-surface font-medium">
              Start mocks before you feel “perfectly ready.”
            </p>
            <p className="text-xs text-secondary leading-relaxed font-light">
              The mock phase is where aspirants learn their actual strengths,
              weaknesses, speed, stamina and exam strategy.
            </p>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("06");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 07 — Mock Analysis */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "07"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("07")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              07 — Mock Analysis
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["07"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["07"] && (
          <div className="space-y-3 pt-1 fade-in">
            <p className="text-xs text-secondary leading-relaxed font-light">
              This should be one of the biggest parts of your roadmap.
            </p>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-3 rounded-lg leading-relaxed">
              MOCK ↓ Analyse Every Section ↓ Why was this wrong? ↓ Why did I
              skip this? ↓ Was my selection correct? ↓ Create Action Plan ↓ Next
              Mock
            </div>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Wrong questions &amp; Skipped easy questions</p>
              <p>• Time wasted &amp; Bad selection</p>
              <p>• Repeated mistakes &amp; Weak topics</p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-xs text-primary font-medium">
                A mock without analysis is incomplete preparation
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("07");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 08 — Previous Year Questions */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "08"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("08")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              08 — Previous Year Questions
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["08"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["08"] && (
          <div className="space-y-3 pt-1 fade-in">
            <p className="text-xs text-secondary leading-relaxed font-light">
              Move increasingly toward actual CAT-level material.
            </p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Real CAT difficulty &amp; question patterns</p>
              <p>• Examiner thinking &amp; section behaviour</p>
              <p>• Optimal question selection</p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-secondary/80 italic">
                Revisiting previous CAT papers crystallizes exam temperament.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("08");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 09 — Build Your Personal CAT Strategy */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "09"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("09")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              09 — Build Your Personal CAT Strategy
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["09"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["09"] && (
          <div className="space-y-3 pt-1 fade-in">
            <pre className="text-xs font-mono text-secondary bg-surface/70 border border-outline-variant p-3.5 rounded-lg overflow-x-auto leading-relaxed select-text">
              {`YOUR CAT STRATEGY
QA       → Which questions do I attempt?
VARC     → What is my reading approach?
DILR     → How do I select sets?
TIME     → Where do I stop wasting time?
ACCURACY → What causes my mistakes?`}
            </pre>
            <div className="flex items-center justify-between pt-1">
              <p className="text-xs text-primary font-medium">
                This is where preparation becomes personalized.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("09");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 10 — Revision & Error Correction */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "10"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("10")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              10 — Revision &amp; Error Correction
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["10"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["10"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="text-secondary text-sm space-y-1.5 pl-2">
              <p>
                <span className="text-primary font-medium">Formula Sheet:</span>{" "}
                QA formulas &amp; shortcuts
              </p>
              <p>
                <span className="text-primary font-medium">Mistake Book:</span>{" "}
                Repeated mistakes
              </p>
              <p>
                <span className="text-primary font-medium">DILR Archive:</span>{" "}
                Important sets to revisit
              </p>
              <p>
                <span className="text-primary font-medium">VARC Notes:</span>{" "}
                Patterns in errors
              </p>
            </div>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              WEAKNESS ↓ IDENTIFY ↓ PRACTICE ↓ REVISIT ↓ MEASURE
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("10");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 11 — Intensive Mock Phase */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "11"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("11")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              11 — Intensive Mock Phase
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["11"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["11"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Speed &amp; Accuracy</p>
              <p>• Stamina &amp; Temperament</p>
              <p>• Selection &amp; Consistency</p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-secondary/80 italic">
                Focus shifts to reducing errors and peak performance execution.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("11");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 12 — Final Month */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "12"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("12")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              12 — Final Month
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["12"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["12"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="text-xs font-mono text-primary font-semibold">
              LESS CHAOS • MORE REVISION
            </div>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Strongest areas &amp; high-value weak spots</p>
              <p>• Previous mistakes &amp; Mock analysis</p>
              <p>• PYQs &amp; Formula revision</p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-[11px] text-secondary/80 italic">
                Avoid hoarding new resources; trust your established system.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("12");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer ml-2 whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 13 — CAT Exam Strategy */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "13"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("13")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              13 — CAT Exam Strategy
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["13"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["13"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Section timing &amp; skip rules</p>
              <p>• Pacing &amp; panic recovery protocols</p>
            </div>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              CALM ↓ SELECT ↓ SOLVE ↓ SKIP ↓ MOVE ON
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("13");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* 14 — Beyond CAT */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "14"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("14")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              14 — Beyond CAT
            </h4>
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["14"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["14"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              CAT RESULT ↓ Shortlists ↓ WAT / GD / PI Preparation ↓ College
              Selection ↓ MBA Journey
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("14");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View Notes →</span>
              </button>
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
    <div className="w-full px-3 sm:px-6 lg:px-8 py-6 space-y-6 fade-in">
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

      {/* 1. Field Guide Framework Card (Top Full Width) */}
      {renderFieldGuideCard()}

      {/* 2 & 3. Single Unified Container with Centered Switcher (Roadmap | Notes) */}
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
        <div className="pt-2">
          {activeViewMode === "roadmap" ? (
            <div className="fade-in max-w-4xl mx-auto">
              {renderRoadmapContent()}
            </div>
          ) : (
            <div className="fade-in max-w-4xl mx-auto">
              {renderNotesContent()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
