import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Sparkles,
  BookOpen,
  X,
} from "lucide-react";

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

interface NoteItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  category: "qa" | "varc" | "dilr" | "codex";
  badge?: string;
}

const QA_NOTES: NoteItem[] = [
  {
    id: "speed-math",
    num: "01",
    title: "Speed Math & Mental Calculation Codex",
    desc: "Reciprocals 1/1 to 1/25, squares up to 35, Vedic shortcuts, and decimal split operations.",
    category: "qa",
  },
  {
    id: "percentages-multipliers",
    num: "02",
    title: "Percentages & Multiplying Factors",
    desc: "Operator scaling, successive percentage change, fraction chaining, and base shift rules.",
    category: "qa",
  },
  {
    id: "ratios-proportions",
    num: "03",
    title: "Ratios, Proportions & Alligations",
    desc: "Linear mixture balances, weighted averages, cross-multiplication, and replacement formulas.",
    category: "qa",
  },
  {
    id: "profit-loss",
    num: "04",
    title: "Profit, Loss, Discount & Faulty Weights",
    desc: "Markup multipliers, cost vs selling base, dishonest dealer trick formulas.",
    category: "qa",
  },
  {
    id: "time-speed-distance",
    num: "05",
    title: "Time, Speed & Distance",
    desc: "Proportionality ratios, relative speed, circular tracks, escalators, and head-start races.",
    category: "qa",
  },
  {
    id: "time-and-work",
    num: "06",
    title: "Time & Work, Pipes & Cisterns",
    desc: "Efficiency LCM method, negative work (leakage), and man-day equivalence equations.",
    category: "qa",
  },
  {
    id: "algebra-foundations",
    num: "07",
    title: "Algebraic Models: Linear & Quadratic",
    desc: "Parabola vertex geometry, discriminant analysis, root symmetries, and modulus bounds.",
    category: "qa",
  },
  {
    id: "functions-graphs",
    num: "08",
    title: "Functions, Graphs, Maxima & Minima",
    desc: "Transformation shifting f(x ± a), composite functions, AM-GM inequality optimizations.",
    category: "qa",
  },
  {
    id: "sequences-series",
    num: "09",
    title: "Sequences, Series & Progressions",
    desc: "AP, GP, HP harmonic means, AGP summation, and telescoping series cancellations.",
    category: "qa",
  },
  {
    id: "geometry-mensuration",
    num: "10",
    title: "Geometry & Mensuration",
    desc: "Triangle ceviana theorems, circle chords & tangents, coordinate bounding, 3D solids.",
    category: "qa",
  },
  {
    id: "coordinate-trig",
    num: "11",
    title: "Coordinate Geometry & Trigonometry",
    desc: "Straight line distances, locus equations, circle intersections, and trigonometric heights.",
    category: "qa",
  },
  {
    id: "number-systems",
    num: "12",
    title: "Number Systems & Divisibility",
    desc: "Euler totient, Fermat's Little Theorem, remainder cycles, trailing zeros, base conversions.",
    category: "qa",
  },
  {
    id: "modern-math",
    num: "13",
    title: "Permutations, Combinations & Probability",
    desc: "Grid paths, circular arrangements, de-arrangement formulas, conditional Bayes theorem.",
    category: "qa",
  },
  {
    id: "logarithms-indices",
    num: "14",
    title: "Logarithms, Surds & Indices",
    desc: "Logarithmic domain restrictions, change of base theorems, and exponential inequalities.",
    category: "qa",
  },
];

const VARC_NOTES: NoteItem[] = [
  {
    id: "varc-rc-deconstruction",
    num: "01",
    title: "RC Structural Deconstruction & Tone Mapping",
    desc: "Identifying pivot transitions (however, nonetheless), author attitudes, and structural scaffolding.",
    category: "varc",
  },
  {
    id: "varc-central-theme",
    num: "02",
    title: "Central Idea & Main Theme Extraction",
    desc: "Distinguishing primary thesis from supporting evidentiary examples and tangent elaborations.",
    category: "varc",
  },
  {
    id: "varc-inference",
    num: "03",
    title: "Inference vs Stated Fact Identification",
    desc: "Evaluating unstated assumptions, logically entailed claims, and avoiding extreme quantifier traps.",
    category: "varc",
  },
  {
    id: "varc-summary",
    num: "04",
    title: "Paragraph Summary Compression",
    desc: "3-step compression rules: capture essence, maintain scope, eliminate distorted options.",
    category: "varc",
  },
  {
    id: "varc-parajumbles",
    num: "05",
    title: "Para Jumbles & Mandatory Pairs",
    desc: "Pronoun-antecedent tracing, chronological timelines, generic to specific structural order.",
    category: "varc",
  },
  {
    id: "varc-odd-one-out",
    num: "06",
    title: "Odd One Out & Contextual Disconnect",
    desc: "Finding the subtle semantic misfit that discusses related terminology but deviates in scope.",
    category: "varc",
  },
  {
    id: "varc-completion",
    num: "07",
    title: "Paragraph Completion & Logical Culminations",
    desc: "Predicting conclusion trajectory and tonal coherence for paragraph enders.",
    category: "varc",
  },
];

const DILR_NOTES: NoteItem[] = [
  {
    id: "dilr-matrix-arrangements",
    num: "01",
    title: "Grid Matrices & Binary Logic Assignments",
    desc: "Constructing 2D/3D matrix tables, cross-matching constraints, and resolving false assumptions.",
    category: "dilr",
  },
  {
    id: "dilr-arrangements",
    num: "02",
    title: "Linear & Circular Arrangements with Blood Relations",
    desc: "Facing inside/outside reference frames, relative positioning offsets, and family trees.",
    category: "dilr",
  },
  {
    id: "dilr-tournaments",
    num: "03",
    title: "Games, Tournaments & Round-Robin Brackets",
    desc: "Knockouts, seeding rankings, point tables, tie-breaking heuristics, and match score constraints.",
    category: "dilr",
  },
  {
    id: "dilr-venn",
    num: "04",
    title: "Venn Diagrams & 4-Set Maxima/Minima",
    desc: "Overlapping region equations, boundary conditions, and optimizing non-overlapping subsets.",
    category: "dilr",
  },
  {
    id: "dilr-networks",
    num: "05",
    title: "Networks, Routes & Flow Optimization",
    desc: "Bottleneck capacities, maximum flow min-cut theorem, directional pipeline matrices.",
    category: "dilr",
  },
  {
    id: "dilr-charts",
    num: "06",
    title: "Complex Tables, Radar & Bubble Charts",
    desc: "Rapid indexing, percentage growth approximations, and multi-axis graph synthesis.",
    category: "dilr",
  },
  {
    id: "dilr-selection",
    num: "07",
    title: "The Art of 4-Minute Set Selection",
    desc: "Heuristics to diagnose trap sets, question independence, and decisive skip protocols.",
    category: "dilr",
  },
];

const CODEX_NOTES: NoteItem[] = [
  {
    id: "codex-qa",
    num: "01",
    title: "QA Formula Sheet & Shortcut Handbook",
    desc: "All core arithmetic, algebra, geometry & number formulas in one sheet.",
    category: "codex",
    badge: "CODEX",
  },
  {
    id: "codex-dilr",
    num: "02",
    title: "DILR Puzzle Archetype Archive",
    desc: "50 benchmark puzzle templates covering every recurring CAT format.",
    category: "codex",
    badge: "ARCHIVE",
  },
  {
    id: "codex-varc",
    num: "03",
    title: "VARC Cognitive Traps & Error Taxonomy",
    desc: "Systematic guide to avoiding extreme options, out-of-scope traps & distortion.",
    category: "codex",
    badge: "GUIDE",
  },
];

const STAGE_TITLES: Record<string, string> = {
  "01": "Understand the Journey",
  "02": "Build Your Foundation",
  "03": "Complete the Core Syllabus",
  "04": "Practice & Application",
  "05": "Sectional Strategy",
  "06": "Enter the Mock Phase",
  "07": "Mock Analysis",
  "08": "Previous Year Questions",
  "09": "Build Your Personal CAT Strategy",
  "10": "Revision & Error Correction",
  "11": "Intensive Mock Phase",
  "12": "Final Month",
  "13": "CAT Exam Strategy",
  "14": "Beyond CAT",
  summary: "The Notera CAT Journey",
};

const STAGE_NOTES_MAP: Record<string, string[]> = {
  "01": [
    "varc-rc-deconstruction",
    "dilr-selection",
    "codex-varc",
    "codex-qa",
    "codex-dilr",
  ],
  "02": [
    "speed-math",
    "percentages-multipliers",
    "algebra-foundations",
    "varc-rc-deconstruction",
    "varc-central-theme",
    "dilr-matrix-arrangements",
    "dilr-arrangements",
  ],
  "03": [
    "ratios-proportions",
    "profit-loss",
    "geometry-mensuration",
    "number-systems",
    "varc-inference",
    "varc-summary",
    "varc-parajumbles",
    "dilr-tournaments",
    "dilr-venn",
    "dilr-charts",
  ],
  "04": [
    "time-speed-distance",
    "time-and-work",
    "functions-graphs",
    "modern-math",
    "varc-odd-one-out",
    "varc-completion",
    "dilr-networks",
    "dilr-venn",
    "dilr-selection",
  ],
  "05": [
    "sequences-series",
    "coordinate-trig",
    "logarithms-indices",
    "varc-summary",
    "varc-inference",
    "dilr-selection",
    "dilr-tournaments",
  ],
  "06": [
    "speed-math",
    "percentages-multipliers",
    "varc-rc-deconstruction",
    "varc-summary",
    "dilr-selection",
    "codex-qa",
  ],
  "07": ["codex-varc", "codex-dilr", "codex-qa", "dilr-selection"],
  "08": [
    "algebra-foundations",
    "modern-math",
    "geometry-mensuration",
    "varc-inference",
    "varc-rc-deconstruction",
    "dilr-tournaments",
    "dilr-networks",
  ],
  "09": [
    "dilr-selection",
    "varc-rc-deconstruction",
    "varc-summary",
    "speed-math",
    "codex-varc",
  ],
  "10": ["codex-qa", "codex-dilr", "codex-varc"],
  "11": [
    "speed-math",
    "percentages-multipliers",
    "algebra-foundations",
    "dilr-selection",
    "codex-qa",
    "codex-dilr",
  ],
  "12": ["codex-qa", "codex-dilr", "codex-varc"],
  "13": ["dilr-selection", "speed-math", "codex-varc", "codex-qa"],
  "14": ["codex-varc", "varc-central-theme", "varc-summary"],
  summary: [
    "speed-math",
    "percentages-multipliers",
    "varc-rc-deconstruction",
    "dilr-selection",
    "codex-qa",
    "codex-dilr",
    "codex-varc",
  ],
};

export const CatOverviewTab: React.FC<CatOverviewTabProps> = ({
  onNavigateTab,
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
    "summary",
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    sectionIds.forEach((id) => {
      initial[id] = true;
    });
    return initial;
  });

  // Track active connected roadmap stage for Notes synchronization
  const [activeStageId, setActiveStageId] = useState<string | null>("02");

  // Track accordion state in the Notes card
  const [openNoteCategories, setOpenNoteCategories] = useState<Record<string, boolean>>({
    qa: true,
    varc: true,
    dilr: true,
    codex: true,
  });

  // Refs for calculating connecting lines between the 3 sections
  const containerRef = useRef<HTMLDivElement>(null);
  const anchorFieldGuideLeftRef = useRef<HTMLDivElement>(null);
  const anchorFieldGuideRightRef = useRef<HTMLDivElement>(null);
  const anchorRoadmapTopRef = useRef<HTMLDivElement>(null);
  const anchorRoadmapRightRef = useRef<HTMLDivElement>(null);
  const anchorNotesTopRef = useRef<HTMLDivElement>(null);
  const anchorNotesLeftRef = useRef<HTMLDivElement>(null);

  const [lineCoords, setLineCoords] = useState<{
    fgToRoadmap?: { x1: number; y1: number; x2: number; y2: number };
    fgToNotes?: { x1: number; y1: number; x2: number; y2: number };
    roadmapToNotes?: { x1: number; y1: number; x2: number; y2: number };
  }>({});

  const updateCoordinates = useCallback(() => {
    if (!containerRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();

    const getCenter = (el: HTMLElement | null) => {
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - cRect.left,
        y: rect.top + rect.height / 2 - cRect.top,
      };
    };

    const fgLeft = getCenter(anchorFieldGuideLeftRef.current);
    const fgRight = getCenter(anchorFieldGuideRightRef.current);
    const rmTop = getCenter(anchorRoadmapTopRef.current);
    const rmRight = getCenter(anchorRoadmapRightRef.current);
    const ntTop = getCenter(anchorNotesTopRef.current);
    const ntLeft = getCenter(anchorNotesLeftRef.current);

    if (fgLeft && rmTop && fgRight && ntTop && rmRight && ntLeft) {
      setLineCoords({
        fgToRoadmap: { x1: fgLeft.x, y1: fgLeft.y, x2: rmTop.x, y2: rmTop.y },
        fgToNotes: { x1: fgRight.x, y1: fgRight.y, x2: ntTop.x, y2: ntTop.y },
        roadmapToNotes: { x1: rmRight.x, y1: rmRight.y, x2: ntLeft.x, y2: ntLeft.y },
      });
    }
  }, []);

  useEffect(() => {
    updateCoordinates();
    const handleResize = () => updateCoordinates();
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      updateCoordinates();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const timer = setTimeout(updateCoordinates, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [updateCoordinates, openSections, openNoteCategories, activeStageId]);

  const toggleNoteCategory = (category: string) => {
    setOpenNoteCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleStageSelect = (id: string) => {
    setActiveStageId(id);
    const linkedIds = STAGE_NOTES_MAP[id] || [];
    const hasQA = QA_NOTES.some((n) => linkedIds.includes(n.id));
    const hasVARC = VARC_NOTES.some((n) => linkedIds.includes(n.id));
    const hasDILR = DILR_NOTES.some((n) => linkedIds.includes(n.id));
    const hasCodex = CODEX_NOTES.some((n) => linkedIds.includes(n.id));

    setOpenNoteCategories((prev) => ({
      ...prev,
      qa: hasQA ? true : prev.qa,
      varc: hasVARC ? true : prev.varc,
      dilr: hasDILR ? true : prev.dilr,
      codex: hasCodex ? true : prev.codex,
    }));
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const willBeOpen = !prev[id];
      if (willBeOpen) {
        handleStageSelect(id);
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

  const activeLinkedNoteIds = activeStageId
    ? STAGE_NOTES_MAP[activeStageId] || []
    : [];

  const handleNoteClick = (note: NoteItem) => {
    if (note.category === "codex") {
      onNavigateTab?.("notes", "percentages-multipliers");
    } else {
      onNavigateTab?.("notes", note.id);
    }
  };

  // 1. Field Guide Card Content
  const renderFieldGuideCard = () => (
    <div className="relative w-full rounded-2xl bg-surface-container border border-outline-variant p-4 sm:p-5 shadow-terra-card">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:divide-x md:divide-outline-variant/50">
        {/* Section 1 */}
        <div className="relative space-y-1.5">
          <h4 className="font-display text-base sm:text-lg text-on-surface font-semibold">
            Any Field Guide
          </h4>
          <div className="text-secondary text-xs sm:text-sm leading-relaxed space-y-0.5">
            <p>• Roadmap</p>
            <p>• Fundamentals</p>
            <p>• Theory &amp; Practical</p>
            <p>• Notes / Docs</p>
          </div>
          {/* Left Connection Pin to Roadmap */}
          <div
            ref={anchorFieldGuideLeftRef}
            className="hidden lg:block absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_rgba(216,195,165,0.7)] z-20"
          />
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
        <div className="relative space-y-1.5 md:pl-6 pt-3 md:pt-0 border-t md:border-t-0 border-outline-variant/40">
          <h4 className="font-display text-base sm:text-lg text-on-surface font-semibold">
            For Each Section
          </h4>
          <div className="text-secondary text-xs sm:text-sm leading-relaxed space-y-0.5">
            <p>• Roadmap</p>
            <p>• Fundamentals</p>
            <p>• Theory &amp; Practicals</p>
            <p>• Notes / Docs</p>
          </div>
          {/* Right Connection Pin to Notes */}
          <div
            ref={anchorFieldGuideRightRef}
            className="hidden lg:block absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_rgba(216,195,165,0.7)] z-20"
          />
        </div>
      </div>
    </div>
  );

  // 2. Roadmap Card Content
  const renderRoadmapCard = () => (
    <div className="relative w-full rounded-2xl bg-surface-container border border-outline-variant p-5 sm:p-6 shadow-terra-card space-y-6">
      {/* Top Connection Pin from Field Guide */}
      <div
        ref={anchorRoadmapTopRef}
        className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_rgba(216,195,165,0.7)] z-20"
      />
      {/* Right Connector Pin to Notes Card */}
      <div
        ref={anchorRoadmapRightRef}
        className="hidden lg:block absolute top-28 -right-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_rgba(216,195,165,0.7)] z-20"
      />

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
            {activeStageId === "01" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
          <div className="space-y-3 pt-1 fade-in">
            <p className="text-xs text-secondary font-mono uppercase tracking-wider">
              Before studying
            </p>
            <div className="text-secondary text-sm space-y-1">
              <p>• What is CAT?</p>
              <p>• QA, VARC &amp; DILR</p>
              <p>• Exam pattern &amp; structure</p>
              <p>• Percentile vs score</p>
              <p>• Target colleges</p>
              <p>• Understanding your goals</p>
              <p>• Choosing your preparation approach</p>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-xs text-primary font-medium">
                Goal: Know what you're preparing for before collecting resources
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("01");
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
            {activeStageId === "02" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
                Reddit preparation plans repeatedly emphasize starting DILR early.
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
            {activeStageId === "03" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
                Goal: Understand every major area before entering intensive mock preparation
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
            {activeStageId === "04" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
                Concept ↓ Basic Questions ↓ Intermediate Questions ↓ CAT-Level Questions ↓ Mixed Practice
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                VARC
              </p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Daily Reading ↓ RC Practice ↓ Question Analysis ↓ Accuracy Improvement
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">
                DILR
              </p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Basic Sets ↓ Different Set Types ↓ Mixed Sets ↓ Timed Sets ↓ Set Selection Strategy
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
            {activeStageId === "05" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
                Goal: Attempt CAT strategically rather than just solving questions
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
            {activeStageId === "06" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
              The mock phase is where aspirants learn their actual strengths, weaknesses, speed, stamina and exam strategy.
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
            {activeStageId === "07" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
              MOCK ↓ Analyse Every Section ↓ Why was this wrong? ↓ Why did I skip this? ↓ Was my selection correct? ↓ Create Action Plan ↓ Next Mock
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
            {activeStageId === "08" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
            {activeStageId === "09" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
            {activeStageId === "10" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
                <span className="text-primary font-medium">Formula Sheet:</span> QA formulas &amp; shortcuts
              </p>
              <p>
                <span className="text-primary font-medium">Mistake Book:</span> Repeated mistakes
              </p>
              <p>
                <span className="text-primary font-medium">DILR Archive:</span> Important sets to revisit
              </p>
              <p>
                <span className="text-primary font-medium">VARC Notes:</span> Patterns in errors
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
            {activeStageId === "11" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
            {activeStageId === "12" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
            {activeStageId === "13" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
            {activeStageId === "14" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
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
              CAT RESULT ↓ Shortlists ↓ WAT / GD / PI Preparation ↓ College Selection ↓ MBA Journey
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

      <div className="border-t border-outline-variant/60" />

      {/* The Notera CAT Journey Summary */}
      <div
        className={`space-y-3 p-3.5 -mx-3.5 rounded-xl transition-all ${
          activeStageId === "summary"
            ? "bg-primary/5 border border-primary/40 shadow-sm"
            : "border border-transparent hover:border-outline-variant/40"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleSection("summary")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-xl text-on-surface group-hover:text-primary transition-colors font-semibold">
              The Notera CAT Journey
            </h4>
            {activeStageId === "summary" && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" />
                <span>CONNECTED</span>
              </span>
            )}
          </div>
          <div className="p-1 rounded-md text-secondary group-hover:text-primary transition-colors">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                openSections["summary"] ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openSections["summary"] && (
          <div className="space-y-3 pt-1 fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-secondary">
              {[
                { num: "01", text: "Understand CAT" },
                { num: "02", text: "Build Your Foundation" },
                { num: "03", text: "Complete the Core Syllabus" },
                { num: "04", text: "Practice & Apply" },
                { num: "05", text: "Master Sectional Strategy" },
                { num: "06", text: "Enter the Mock Phase" },
                { num: "07", text: "Analyse & Learn" },
                { num: "08", text: "Solve Previous Year Questions" },
                { num: "09", text: "Build Your Personal Strategy" },
                { num: "10", text: "Revise & Fix Weaknesses" },
                { num: "11", text: "Intensive Mock Training" },
                { num: "12", text: "Final Revision" },
                { num: "13", text: "CAT Exam Day" },
                { num: "14", text: "Interviews & MBA Journey" },
              ].map((item) => (
                <div
                  key={item.num}
                  onClick={() => handleStageSelect(item.num)}
                  className={`flex items-center space-x-2 py-1.5 px-2.5 rounded-lg border transition-all cursor-pointer ${
                    activeStageId === item.num
                      ? "bg-primary/15 border-primary text-on-surface"
                      : "bg-surface/60 border-outline-variant/60 hover:border-primary/50"
                  }`}
                >
                  <span className="text-primary font-bold">{item.num}</span>
                  <span className="text-on-surface font-sans text-xs">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end pt-1">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStageSelect("summary");
                }}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3" />
                <span>View All Notes →</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // 3. Notes Card Content
  const renderNotesCard = () => (
    <div
      id="notes-card"
      className="relative w-full rounded-2xl bg-surface-container border border-outline-variant p-5 sm:p-6 shadow-terra-card space-y-6 scroll-mt-20"
    >
      {/* Top Connection Pin from Field Guide */}
      <div
        ref={anchorNotesTopRef}
        className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_rgba(216,195,165,0.7)] z-20"
      />
      {/* Left Connector Pin from Roadmap */}
      <div
        ref={anchorNotesLeftRef}
        className="hidden lg:block absolute top-28 -left-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-surface shadow-[0_0_8px_rgba(216,195,165,0.7)] z-20"
      />

      {/* Header & Connection Ribbon */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-semibold">
            Notes
          </h3>
          <span className="text-xs font-mono text-secondary bg-surface border border-outline-variant px-2.5 py-1 rounded-lg">
            31 Total Chapters
          </span>
        </div>
        <p className="text-secondary text-xs sm:text-sm leading-relaxed font-light">
          Core first-principles theory, analytical frameworks, and rapid revision sheets for every CAT topic.
        </p>

        {/* Active Connected Stage Sync Banner */}
        {activeStageId ? (
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-primary/10 border border-primary/30 text-xs text-on-surface animate-fade-in">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-primary font-bold">
                Stage {activeStageId}:
              </span>
              <span className="font-medium text-on-surface">
                {STAGE_TITLES[activeStageId] || "Active Stage"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-mono text-primary bg-surface/80 border border-primary/20 px-2 py-0.5 rounded font-semibold">
                {activeLinkedNoteIds.length} Linked Notes
              </span>
              <button
                type="button"
                onClick={() => setActiveStageId(null)}
                className="inline-flex items-center space-x-1 text-[11px] text-secondary hover:text-on-surface hover:bg-surface border border-outline-variant/60 px-2 py-0.5 rounded transition-all cursor-pointer"
              >
                <X className="w-3 h-3" />
                <span>Show All</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-xs font-mono text-secondary bg-surface/60 border border-outline-variant p-2.5 rounded-lg flex items-center justify-between">
            <span>Click any Roadmap stage on left to filter connected notes</span>
            <span className="text-primary font-medium">Showing All</span>
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* Section 1: Quantitative Aptitude */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => toggleNoteCategory("qa")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              Quantitative Aptitude (QA)
            </h4>
            {activeStageId && QA_NOTES.some((n) => activeLinkedNoteIds.includes(n.id)) && (
              <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded font-bold">
                {QA_NOTES.filter((n) => activeLinkedNoteIds.includes(n.id)).length} LINKED
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono text-secondary bg-surface border border-outline-variant px-2 py-0.5 rounded">
              14 Chapters
            </span>
            <ChevronDown
              className={`w-4 h-4 text-secondary group-hover:text-primary transition-transform duration-200 ${
                openNoteCategories.qa ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openNoteCategories.qa && (
          <div className="space-y-2.5 pt-1 fade-in">
            {QA_NOTES.map((note) => {
              const isLinked = activeLinkedNoteIds.includes(note.id);
              return (
                <div
                  key={note.num}
                  onClick={() => handleNoteClick(note)}
                  className={`p-3 rounded-xl border transition-all group cursor-pointer space-y-1 ${
                    isLinked
                      ? "bg-surface border-primary ring-1 ring-primary/40 shadow-sm"
                      : activeStageId
                        ? "bg-surface/50 border-outline-variant/50 opacity-75 hover:opacity-100 hover:border-primary/60"
                        : "bg-surface border-outline-variant/80 hover:border-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary font-mono text-xs font-bold">
                        {note.num}
                      </span>
                      <span className="text-xs font-medium text-on-surface group-hover:text-primary transition-colors">
                        {note.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {isLinked && (
                        <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.2 rounded whitespace-nowrap">
                          ★ Stage {activeStageId}
                        </span>
                      )}
                      <span className="text-xs text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-secondary leading-relaxed font-light pl-6">
                    {note.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* Section 2: Verbal Ability & Reading Comprehension */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => toggleNoteCategory("varc")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              Verbal Ability &amp; RC (VARC)
            </h4>
            {activeStageId && VARC_NOTES.some((n) => activeLinkedNoteIds.includes(n.id)) && (
              <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded font-bold">
                {VARC_NOTES.filter((n) => activeLinkedNoteIds.includes(n.id)).length} LINKED
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono text-secondary bg-surface border border-outline-variant px-2 py-0.5 rounded">
              7 Chapters
            </span>
            <ChevronDown
              className={`w-4 h-4 text-secondary group-hover:text-primary transition-transform duration-200 ${
                openNoteCategories.varc ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openNoteCategories.varc && (
          <div className="space-y-2.5 pt-1 fade-in">
            {VARC_NOTES.map((note) => {
              const isLinked = activeLinkedNoteIds.includes(note.id);
              return (
                <div
                  key={note.num}
                  onClick={() => handleNoteClick(note)}
                  className={`p-3 rounded-xl border transition-all group cursor-pointer space-y-1 ${
                    isLinked
                      ? "bg-surface border-primary ring-1 ring-primary/40 shadow-sm"
                      : activeStageId
                        ? "bg-surface/50 border-outline-variant/50 opacity-75 hover:opacity-100 hover:border-primary/60"
                        : "bg-surface border-outline-variant/80 hover:border-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary font-mono text-xs font-bold">
                        {note.num}
                      </span>
                      <span className="text-xs font-medium text-on-surface group-hover:text-primary transition-colors">
                        {note.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {isLinked && (
                        <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.2 rounded whitespace-nowrap">
                          ★ Stage {activeStageId}
                        </span>
                      )}
                      <span className="text-xs text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-secondary leading-relaxed font-light pl-6">
                    {note.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* Section 3: Data Interpretation & Logical Reasoning */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => toggleNoteCategory("dilr")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              Data Interpretation &amp; LR (DILR)
            </h4>
            {activeStageId && DILR_NOTES.some((n) => activeLinkedNoteIds.includes(n.id)) && (
              <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded font-bold">
                {DILR_NOTES.filter((n) => activeLinkedNoteIds.includes(n.id)).length} LINKED
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono text-secondary bg-surface border border-outline-variant px-2 py-0.5 rounded">
              7 Chapters
            </span>
            <ChevronDown
              className={`w-4 h-4 text-secondary group-hover:text-primary transition-transform duration-200 ${
                openNoteCategories.dilr ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openNoteCategories.dilr && (
          <div className="space-y-2.5 pt-1 fade-in">
            {DILR_NOTES.map((note) => {
              const isLinked = activeLinkedNoteIds.includes(note.id);
              return (
                <div
                  key={note.num}
                  onClick={() => handleNoteClick(note)}
                  className={`p-3 rounded-xl border transition-all group cursor-pointer space-y-1 ${
                    isLinked
                      ? "bg-surface border-primary ring-1 ring-primary/40 shadow-sm"
                      : activeStageId
                        ? "bg-surface/50 border-outline-variant/50 opacity-75 hover:opacity-100 hover:border-primary/60"
                        : "bg-surface border-outline-variant/80 hover:border-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-primary font-mono text-xs font-bold">
                        {note.num}
                      </span>
                      <span className="text-xs font-medium text-on-surface group-hover:text-primary transition-colors">
                        {note.title}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      {isLinked && (
                        <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.2 rounded whitespace-nowrap">
                          ★ Stage {activeStageId}
                        </span>
                      )}
                      <span className="text-xs text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-secondary leading-relaxed font-light pl-6">
                    {note.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-outline-variant/60" />

      {/* Section 4: Master Revision Codices */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={() => toggleNoteCategory("codex")}
          className="w-full flex items-center justify-between text-left group cursor-pointer"
        >
          <div className="flex items-center space-x-2">
            <h4 className="font-display text-lg text-on-surface group-hover:text-primary transition-colors font-semibold">
              Master Revision Codices
            </h4>
            {activeStageId && CODEX_NOTES.some((n) => activeLinkedNoteIds.includes(n.id)) && (
              <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-1.5 py-0.5 rounded font-bold">
                {CODEX_NOTES.filter((n) => activeLinkedNoteIds.includes(n.id)).length} LINKED
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-mono text-secondary bg-surface border border-outline-variant px-2 py-0.5 rounded">
              3 Handbooks
            </span>
            <ChevronDown
              className={`w-4 h-4 text-secondary group-hover:text-primary transition-transform duration-200 ${
                openNoteCategories.codex ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {openNoteCategories.codex && (
          <div className="space-y-2 pt-1 fade-in">
            {CODEX_NOTES.map((codex) => {
              const isLinked = activeLinkedNoteIds.includes(codex.id);
              return (
                <div
                  key={codex.id}
                  onClick={() => handleNoteClick(codex)}
                  className={`p-3 rounded-xl border flex items-center justify-between transition-all group cursor-pointer ${
                    isLinked
                      ? "bg-surface border-primary ring-1 ring-primary/40 shadow-sm"
                      : activeStageId
                        ? "bg-surface/50 border-outline-variant/50 opacity-75 hover:opacity-100 hover:border-primary/60"
                        : "bg-surface/60 border-outline-variant/80 hover:border-primary"
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center space-x-2">
                      <p className="text-xs font-medium text-on-surface group-hover:text-primary transition-colors">
                        {codex.title}
                      </p>
                      {isLinked && (
                        <span className="text-[10px] font-mono font-semibold text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.2 rounded">
                          ★ Stage {activeStageId}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-secondary font-light">
                      {codex.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded font-semibold whitespace-nowrap">
                    {codex.badge}
                  </span>
                </div>
              );
            })}
          </div>
        )}
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

      {/* Unified 3-Section Knowledge Flow Container with Interactive Connecting Lines */}
      <div ref={containerRef} className="relative space-y-8">
        {/* Dynamic SVG Connecting Lines Layer */}
        {lineCoords.fgToRoadmap && lineCoords.fgToNotes && lineCoords.roadmapToNotes && (
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="conn-arrow"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D8C3A5" />
              </marker>
              <linearGradient id="connGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EFE6DB" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D8C3A5" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#B5A28E" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* 1. Field Guide Left -> Roadmap Top Curve */}
            {(() => {
              const { x1, y1, x2, y2 } = lineCoords.fgToRoadmap!;
              const midY = (y1 + y2) / 2;
              const pathD = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
              return (
                <g>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#D8C3A5"
                    strokeWidth="6"
                    strokeOpacity="0.12"
                  />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#connGrad)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    markerEnd="url(#conn-arrow)"
                  />
                  <circle r="3" fill="#FAF5EE">
                    <animateMotion path={pathD} dur="3.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })()}

            {/* 2. Field Guide Right -> Notes Top Curve */}
            {(() => {
              const { x1, y1, x2, y2 } = lineCoords.fgToNotes!;
              const midY = (y1 + y2) / 2;
              const pathD = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
              return (
                <g>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#D8C3A5"
                    strokeWidth="6"
                    strokeOpacity="0.12"
                  />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#connGrad)"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    markerEnd="url(#conn-arrow)"
                  />
                  <circle r="3" fill="#FAF5EE">
                    <animateMotion path={pathD} dur="3.5s" repeatCount="indefinite" />
                  </circle>
                </g>
              );
            })()}

            {/* 3. Roadmap Right -> Notes Left Horizontal Connector */}
            {(() => {
              const { x1, y1, x2, y2 } = lineCoords.roadmapToNotes!;
              const midX = (x1 + x2) / 2;
              const pathD = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
              return (
                <g>
                  <path
                    d={pathD}
                    fill="none"
                    stroke="#D8C3A5"
                    strokeWidth="6"
                    strokeOpacity="0.15"
                  />
                  <path
                    d={pathD}
                    fill="none"
                    stroke="url(#connGrad)"
                    strokeWidth="2"
                    strokeDasharray="5 3"
                    className="animate-pulse"
                  />
                  <circle r="3.5" fill="#FAF5EE">
                    <animateMotion path={pathD} dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  {/* Central Sync Badge */}
                  <g transform={`translate(${midX}, ${(y1 + y2) / 2})`}>
                    <rect
                      x="-32"
                      y="-9"
                      width="64"
                      height="18"
                      rx="9"
                      fill="#2A201A"
                      stroke="#6B5647"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fill="#D8C3A5"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      SYNCED
                    </text>
                  </g>
                </g>
              );
            })()}
          </svg>
        )}

        {/* 1. Field Guide Framework Card (Top Full Width) */}
        {renderFieldGuideCard()}

        {/* 2 & 3. Dual Columns: Roadmap (Left) & Notes (Right) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {renderRoadmapCard()}
          {renderNotesCard()}
        </div>
      </div>
    </div>
  );
};
