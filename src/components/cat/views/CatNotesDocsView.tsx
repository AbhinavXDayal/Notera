import React, { useState } from "react";
import {
  BookOpen,
  Search,
  FileText,
  Sparkles,
  ArrowRight,
  Filter,
} from "lucide-react";
import { NotesLayout } from "../../notes/NotesLayout";

export interface NoteItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  category: "qa" | "varc" | "dilr" | "codex";
  badge?: string;
  stageId?: number;
  readTime?: string;
}

const ALL_NOTES_DATA: NoteItem[] = [
  // QA
  {
    id: "percentages-multipliers",
    num: "01",
    title: "Percentages & Multiplying Factors",
    desc: "Fraction-to-percentage conversions, compounding multipliers, and calculation-free base changes.",
    category: "qa",
    badge: "Core Arithmetic",
    stageId: 3,
    readTime: "12 min",
  },
  {
    id: "ratios-proportions",
    num: "02",
    title: "Ratios, Proportions & Variations",
    desc: "Direct and inverse variations, constant of proportionality, and k-method component split.",
    category: "qa",
    badge: "Core Arithmetic",
    stageId: 3,
    readTime: "10 min",
  },
  {
    id: "averages-mixtures",
    num: "03",
    title: "Averages, Mixtures & Alligations",
    desc: "Weighted averages line diagrams, see-saw alligation balance, and replacement formula cycles.",
    category: "qa",
    badge: "Core Arithmetic",
    stageId: 3,
    readTime: "14 min",
  },
  {
    id: "profit-loss",
    num: "04",
    title: "Profit, Loss, Discount & Faulty Weights",
    desc: "Markup multipliers, cost vs selling base, dishonest dealer trick formulas.",
    category: "qa",
    badge: "Core Arithmetic",
    stageId: 3,
    readTime: "11 min",
  },
  {
    id: "time-speed-distance",
    num: "05",
    title: "Time, Speed & Distance",
    desc: "Proportionality ratios, relative speed, circular tracks, escalators, and head-start races.",
    category: "qa",
    badge: "High Yield",
    stageId: 3,
    readTime: "16 min",
  },
  {
    id: "time-and-work",
    num: "06",
    title: "Time & Work, Pipes & Cisterns",
    desc: "Efficiency LCM method, negative work (leakage), and man-day equivalence equations.",
    category: "qa",
    badge: "High Yield",
    stageId: 3,
    readTime: "12 min",
  },
  {
    id: "algebra-foundations",
    num: "07",
    title: "Algebraic Models: Linear & Quadratic",
    desc: "Parabola vertex geometry, discriminant analysis, root symmetries, and modulus bounds.",
    category: "qa",
    badge: "Core Algebra",
    stageId: 4,
    readTime: "18 min",
  },
  {
    id: "functions-graphs",
    num: "08",
    title: "Functions, Graphs, Maxima & Minima",
    desc: "Transformation shifting f(x ± a), composite functions, AM-GM inequality optimizations.",
    category: "qa",
    badge: "Core Algebra",
    stageId: 4,
    readTime: "15 min",
  },
  {
    id: "sequences-series",
    num: "09",
    title: "Sequences, Series & Progressions",
    desc: "AP, GP, HP harmonic means, AGP summation, and telescoping series cancellations.",
    category: "qa",
    badge: "Core Algebra",
    stageId: 4,
    readTime: "13 min",
  },
  {
    id: "geometry-mensuration",
    num: "10",
    title: "Geometry & Mensuration",
    desc: "Triangle ceviana theorems, circle chords & tangents, coordinate bounding, 3D solids.",
    category: "qa",
    badge: "Geometry",
    stageId: 4,
    readTime: "20 min",
  },
  {
    id: "number-systems",
    num: "11",
    title: "Number Systems & Divisibility",
    desc: "Euler totient, Fermat's Little Theorem, remainder cycles, trailing zeros, base conversions.",
    category: "qa",
    badge: "Number Theory",
    stageId: 4,
    readTime: "17 min",
  },
  {
    id: "modern-math",
    num: "12",
    title: "Permutations, Combinations & Probability",
    desc: "Grid paths, circular arrangements, de-arrangement formulas, conditional Bayes theorem.",
    category: "qa",
    badge: "Modern Math",
    stageId: 4,
    readTime: "19 min",
  },

  // VARC
  {
    id: "varc-rc-deconstruction",
    num: "01",
    title: "RC Structural Deconstruction & Tone Mapping",
    desc: "Identifying pivot transitions (however, nonetheless), author attitudes, and structural scaffolding.",
    category: "varc",
    badge: "Reading Comprehension",
    stageId: 3,
    readTime: "15 min",
  },
  {
    id: "varc-central-theme",
    num: "02",
    title: "Central Idea & Main Theme Extraction",
    desc: "Distinguishing primary thesis from supporting evidentiary examples and tangent elaborations.",
    category: "varc",
    badge: "Reading Comprehension",
    stageId: 3,
    readTime: "12 min",
  },
  {
    id: "varc-inference",
    num: "03",
    title: "Inference vs Stated Fact Identification",
    desc: "Evaluating unstated assumptions, logically entailed claims, and avoiding extreme quantifier traps.",
    category: "varc",
    badge: "Critical Reasoning",
    stageId: 4,
    readTime: "14 min",
  },
  {
    id: "varc-summary",
    num: "04",
    title: "Paragraph Summary Compression",
    desc: "3-step compression rules: capture essence, maintain scope, eliminate distorted options.",
    category: "varc",
    badge: "Verbal Ability",
    stageId: 4,
    readTime: "10 min",
  },
  {
    id: "varc-parajumbles",
    num: "05",
    title: "Para Jumbles & Mandatory Pairs",
    desc: "Pronoun-antecedent tracing, chronological timelines, generic to specific structural order.",
    category: "varc",
    badge: "Verbal Ability",
    stageId: 4,
    readTime: "11 min",
  },
  {
    id: "varc-odd-one-out",
    num: "06",
    title: "Odd One Out & Contextual Disconnect",
    desc: "Finding the subtle semantic misfit that discusses related terminology but deviates in scope.",
    category: "varc",
    badge: "Verbal Ability",
    stageId: 4,
    readTime: "9 min",
  },

  // DILR
  {
    id: "dilr-linear-circular",
    num: "01",
    title: "Linear & Circular Arrangements with Constraints",
    desc: "Definite vs conditional clues, anchor points, facing inward/outward variable tracking.",
    category: "dilr",
    badge: "Arrangements",
    stageId: 3,
    readTime: "16 min",
  },
  {
    id: "dilr-matrix-matching",
    num: "02",
    title: "Matrix Grid Matching & Multi-Attribute Tables",
    desc: "Cross-elimination grids, binary logic tables, matching professions, cities, and attributes.",
    category: "dilr",
    badge: "Puzzles",
    stageId: 3,
    readTime: "15 min",
  },
  {
    id: "dilr-games-tournaments",
    num: "03",
    title: "Games, Tournaments & Round-Robin Logic",
    desc: "Knockout match count formulas, points tables, goal difference equations, seeding rules.",
    category: "dilr",
    badge: "Advanced LR",
    stageId: 4,
    readTime: "18 min",
  },
  {
    id: "dilr-set-theory-venn",
    num: "04",
    title: "Set Theory & 3/4-Variable Venn Diagrams",
    desc: "Maxima-minima overlaps, exactly-1/exactly-2 boundary regions, algebraic set balancing.",
    category: "dilr",
    badge: "Set Theory",
    stageId: 4,
    readTime: "14 min",
  },
  {
    id: "dilr-tables-charts",
    num: "05",
    title: "Complex Tabular DI, Radar & Scatter Plots",
    desc: "Rapid percentage growth calculations, index base shifts, trend interpolation tricks.",
    category: "dilr",
    badge: "Data Interpretation",
    stageId: 3,
    readTime: "13 min",
  },

  // CODEX
  {
    id: "percentages-multipliers",
    num: "01",
    title: "Speed Math & Calculation Elimination Codex",
    desc: "Vedic arithmetic cross-products, 1/x reciprocal tables, mental percentage splits.",
    category: "codex",
    badge: "Strategy Codex",
    stageId: 1,
    readTime: "8 min",
  },
  {
    id: "cat-blueprint",
    num: "02",
    title: "The CAT Exam Architecture Blueprint",
    desc: "Section cutoff formulas, normalization scaling factors, composite score weights.",
    category: "codex",
    badge: "Strategy Codex",
    stageId: 1,
    readTime: "10 min",
  },
  {
    id: "percentages-multipliers",
    num: "03",
    title: "Negative Marking Economics & TITA Tactics",
    desc: "Mathematical risk-reward models, why random guessing destroys percentile standing.",
    category: "codex",
    badge: "Strategy Codex",
    stageId: 1,
    readTime: "9 min",
  },
];

interface CatNotesDocsViewProps {
  initialChapterId?: string;
  onNavigatePractice?: () => void;
}

export const CatNotesDocsView: React.FC<CatNotesDocsViewProps> = ({
  initialChapterId,
  onNavigatePractice,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "qa" | "varc" | "dilr" | "codex"
  >("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeReadingNoteId, setActiveReadingNoteId] = useState<string | null>(
    initialChapterId || null,
  );

  // If user selected a specific note, show full-width reader with back button
  if (activeReadingNoteId) {
    return (
      <div className="w-full space-y-6 fade-in">
        {/* Top Back to Notes Index Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-6 flex items-center justify-between border-b border-outline-variant/60 pb-4">
          <button
            type="button"
            onClick={() => setActiveReadingNoteId(null)}
            className="inline-flex items-center space-x-2 text-xs font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant px-3 py-1.5 rounded-lg transition-all cursor-pointer"
          >
            <span>← Back to All Notes &amp; Docs</span>
          </button>
          <span className="text-xs font-mono text-secondary">
            Reading Mode • Full Width
          </span>
        </div>

        <NotesLayout
          initialChapterId={activeReadingNoteId}
          onNavigatePractice={onNavigatePractice}
        />
      </div>
    );
  }

  // Filter notes
  const filteredNotes = ALL_NOTES_DATA.filter((note) => {
    const matchesCategory =
      selectedCategory === "all" || note.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.badge?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-10 fade-in">
      {/* ── HEADER ── */}
      <div className="border-b border-outline-variant pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-tertiary font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Library &amp; Codex</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
            CAT Notes, Formulas &amp; Documentation
          </h2>
          <p className="text-secondary text-xs sm:text-sm max-w-2xl leading-relaxed">
            Curated chapter notes, formula sheets, structural deconstructions, and exam strategy codices across Quantitative Aptitude, VARC, and DILR.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notes, formulas..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container border border-outline-variant text-xs text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary/60 transition-colors"
          />
        </div>
      </div>

      {/* ── CATEGORY FILTER BUTTONS ── */}
      <div className="flex flex-wrap items-center gap-2 border-b border-outline-variant/60 pb-4 font-mono text-xs">
        <span className="text-secondary text-[11px] uppercase mr-2 flex items-center gap-1">
          <Filter className="w-3 h-3" /> Filter:
        </span>
        {[
          { id: "all", label: "All Notes & Docs" },
          { id: "qa", label: "Quantitative Aptitude (QA)" },
          { id: "varc", label: "Verbal Ability (VARC)" },
          { id: "dilr", label: "DILR Modules" },
          { id: "codex", label: "Strategy Codex" },
        ].map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() =>
                setSelectedCategory(
                  cat.id as "all" | "qa" | "varc" | "dilr" | "codex",
                )
              }
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-on-primary font-semibold shadow-xs"
                  : "bg-surface-container border border-outline-variant text-secondary hover:text-on-surface hover:bg-surface-container-high"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ── FULL-WIDTH NOTES CARD GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredNotes.map((note) => (
          <div
            key={note.id + note.num}
            onClick={() => setActiveReadingNoteId(note.id)}
            className="p-5 sm:p-6 rounded-2xl bg-surface-container border border-outline-variant hover:border-primary/50 transition-all duration-300 shadow-terra-card hover:shadow-terra-hover cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  {note.category.toUpperCase()} • Chapter {note.num}
                </span>

                <div className="flex items-center space-x-2 text-[11px] font-mono text-secondary">
                  {note.stageId && (
                    <span className="text-tertiary font-semibold">
                      Stage 0{note.stageId}
                    </span>
                  )}
                  {note.readTime && <span>• {note.readTime}</span>}
                </div>
              </div>

              <div>
                <h4 className="font-display text-lg text-on-surface font-medium group-hover:text-primary transition-colors">
                  {note.title}
                </h4>
                <p className="text-xs text-secondary leading-relaxed mt-1 line-clamp-2">
                  {note.desc}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-outline-variant/60 flex items-center justify-between text-xs">
              <span className="text-[11px] font-mono text-secondary">
                {note.badge}
              </span>
              <span className="text-primary font-mono font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                <span>Read Notes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── PDF LIBRARY & RESOURCE DIRECTORY CALLOUT ── */}
      <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-terra-card">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-tertiary" /> Downloadable Formula Cheat Sheets &amp; Mock Logs
          </span>
          <h4 className="font-display text-xl text-on-surface font-medium">
            Access The Complete PDF Resource Repository
          </h4>
          <p className="text-xs sm:text-sm text-secondary">
            High-yield formula cheat sheets, past year diagnostic papers, and customizable study trackers.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveReadingNoteId("percentages-multipliers")}
          className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-primary hover:bg-primary-hover text-on-primary text-xs font-semibold transition-all cursor-pointer shrink-0 shadow-xs"
        >
          <BookOpen className="w-4 h-4" />
          <span>Open Interactive Reader</span>
        </button>
      </div>
    </div>
  );
};
