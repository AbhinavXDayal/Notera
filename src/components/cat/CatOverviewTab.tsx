import React from "react";
import { ArrowLeft } from "lucide-react";

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
  onNavigateTab,
  onBackToPaths,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 fade-in">
      {/* Back Navigation */}
      {onBackToPaths && (
        <div>
          <button
            onClick={onBackToPaths}
            className="inline-flex items-center space-x-2 text-xs font-medium text-secondary hover:text-primary transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Paths</span>
          </button>
        </div>
      )}

      {/* 1. Field Guide Framework Card */}
      <div className="max-w-lg mx-auto rounded-2xl bg-surface-container border border-outline-variant p-6 sm:p-7 shadow-terra-card space-y-6">
        {/* Section 1 */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-on-surface font-semibold">
            Any Field Guide
          </h3>
          <div className="text-secondary text-sm leading-relaxed space-y-1">
            <p>Roadmap</p>
            <p>Fundamentals</p>
            <p>Theory &amp; Practical</p>
            <p>Notes / Docs</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-on-surface font-semibold">
            For Ex
          </h3>
          <div className="text-secondary text-sm leading-relaxed space-y-1">
            <p>1. Cs Roadmap</p>
            <p>1.2 Computer Fundamentals</p>
            <p>1.3 DSA - Programming Language</p>
            <p>1.4 Field - App Development</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-2">
          <h3 className="font-display text-xl text-on-surface font-semibold">
            For Each Section
          </h3>
          <div className="text-secondary text-sm leading-relaxed space-y-1">
            <p>• Roadmap</p>
            <p>• Fundamentals</p>
            <p>• Theory &amp; Practicals</p>
            <p>• Notes / Docs</p>
          </div>
        </div>
      </div>

      {/* 2 & 3. Side-by-Side Dual Column: Roadmap (Left) & Notes (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* LEFT COLUMN: Long Vertical Roadmap Card */}
        <div className="rounded-2xl bg-surface-container border border-outline-variant p-6 sm:p-7 shadow-terra-card space-y-8">
          {/* Header */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-semibold">
              Roadmap
            </h3>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 01 — Understand the Journey */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              01 — Understand the Journey
            </h4>
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
            <p className="text-xs text-primary font-medium pt-1">
              Goal: Know what you're preparing for before collecting resources
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 02 — Build Your Foundation */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              02 — Build Your Foundation
            </h4>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">QA</p>
              <p className="text-xs text-secondary font-light">Start rebuilding mathematical fundamentals:</p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Arithmetic basics</p>
                <p>• Algebra basics</p>
                <p>• Geometry basics</p>
                <p>• Numbers</p>
                <p>• Modern Math</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">VARC</p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Build a daily reading habit</p>
                <p>• Learn how Reading Comprehension works</p>
                <p>• Understand summaries &amp; paragraph logic</p>
                <p>• Develop comprehension before obsessing over vocabulary</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">DILR</p>
              <p className="text-xs text-secondary font-light">Start immediately — don't postpone it</p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Basic DI</p>
                <p>• Basic logical reasoning</p>
                <p>• Tables &amp; charts</p>
                <p>• Set selection</p>
                <p>• Structured thinking</p>
              </div>
            </div>

            <p className="text-[11px] text-secondary/80 italic pt-1">
              Reddit preparation plans repeatedly emphasize starting DILR early rather than leaving it until after completing Quant.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 03 — Complete the Core Syllabus */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              03 — Complete the Core Syllabus
            </h4>
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
            <p className="text-xs text-primary font-medium pt-1">
              Goal: Understand every major area before entering intensive mock preparation
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 04 — Practice & Application */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="font-display text-lg text-on-surface font-semibold">
                04 — Practice &amp; Application
              </h4>
              <p className="text-xs text-secondary font-light">
                This is where knowledge becomes CAT ability.
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">QA</p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Concept ↓ Basic Questions ↓ Intermediate Questions ↓ CAT-Level Questions ↓ Mixed Practice
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">VARC</p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Daily Reading ↓ RC Practice ↓ Question Analysis ↓ Accuracy Improvement
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono text-primary font-semibold uppercase">DILR</p>
              <p className="text-xs text-secondary font-mono leading-relaxed bg-surface/50 p-2 rounded border border-outline-variant/60">
                Basic Sets ↓ Different Set Types ↓ Mixed Sets ↓ Timed Sets ↓ Set Selection Strategy
              </p>
            </div>

            <p className="text-[11px] text-secondary/80 italic pt-1">
              One detailed Reddit roadmap recommends consistent DILR volume and repeated practice rather than treating it as a theory-heavy subject.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 05 — Sectional Strategy */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="font-display text-lg text-on-surface font-semibold">
                05 — Sectional Strategy
              </h4>
              <p className="text-xs text-secondary font-light">
                Once fundamentals are reasonably established:
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono text-primary font-semibold uppercase">QA</p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Mixed-topic practice</p>
                <p>• Speed vs accuracy</p>
                <p>• Question selection</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono text-primary font-semibold uppercase">VARC</p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• RC accuracy</p>
                <p>• Reading strategy</p>
                <p>• Eliminating wrong options</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-mono text-primary font-semibold uppercase">DILR</p>
              <div className="text-secondary text-sm space-y-0.5 pl-2">
                <p>• Choosing the right sets</p>
                <p>• Leaving bad sets early</p>
                <p>• Solving selected sets efficiently</p>
              </div>
            </div>

            <p className="text-xs text-primary font-medium pt-1">
              Goal: Stop thinking only about solving questions and start thinking about attempting CAT strategically
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 06 — Enter the Mock Phase */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              06 — Enter the Mock Phase
            </h4>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              LEARN ↓ PRACTICE ↓ SECTIONALS ↓ FULL MOCKS
            </div>
            <p className="text-sm text-on-surface font-medium">
              Start mocks before you feel “perfectly ready.”
            </p>
            <p className="text-xs text-secondary leading-relaxed font-light">
              The preparation discussions consistently emphasize that the mock phase is where aspirants learn their actual strengths, weaknesses, speed, stamina and exam strategy.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 07 — Mock Analysis */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              07 — Mock Analysis
            </h4>
            <p className="text-xs text-secondary leading-relaxed font-light">
              This should be one of the biggest parts of your roadmap.
            </p>
            <p className="text-xs font-mono text-secondary">After every mock:</p>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-3 rounded-lg leading-relaxed">
              MOCK ↓ Analyse Every Section ↓ Why was this wrong? ↓ Why did I skip this? ↓ Was my selection correct? ↓ Concept / Speed / Accuracy issue? ↓ Create Action Plan ↓ Next Mock
            </div>
            <p className="text-xs font-mono text-secondary pt-1">Track:</p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Wrong questions</p>
              <p>• Skipped easy questions</p>
              <p>• Time wasted</p>
              <p>• Weak topics</p>
              <p>• Bad question selection</p>
              <p>• Repeated mistakes</p>
            </div>
            <p className="text-xs text-primary font-medium pt-1">
              A mock without analysis is incomplete preparation
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 08 — Previous Year Questions */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              08 — Previous Year Questions
            </h4>
            <p className="text-xs text-secondary leading-relaxed font-light">
              Move increasingly toward actual CAT-level material.
            </p>
            <p className="text-xs font-mono text-secondary">Use PYQs to understand:</p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Real CAT difficulty</p>
              <p>• Question patterns</p>
              <p>• Examiner thinking</p>
              <p>• Section behaviour</p>
              <p>• Question selection</p>
            </div>
            <p className="text-[11px] text-secondary/80 italic pt-1">
              Reddit roadmaps particularly stress solving and revisiting previous CAT papers during the later preparation stages.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 09 — Build Your Personal CAT Strategy */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              09 — Build Your Personal CAT Strategy
            </h4>
            <p className="text-xs text-secondary leading-relaxed font-light">
              By now, every aspirant should have their own strategy.
            </p>
            <pre className="text-xs font-mono text-secondary bg-surface/70 border border-outline-variant p-3.5 rounded-lg overflow-x-auto leading-relaxed select-text">
{`YOUR CAT STRATEGY
QA       → Which questions do I attempt?
VARC     → What is my reading approach?
DILR     → How do I select sets?
TIME     → Where do I stop wasting time?
ACCURACY → What causes my mistakes?`}
            </pre>
            <p className="text-xs text-primary font-medium pt-1">
              This is where preparation becomes personalized.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 10 — Revision & Error Correction */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              10 — Revision &amp; Error Correction
            </h4>
            <p className="text-xs font-mono text-secondary">Create:</p>
            <div className="text-secondary text-sm space-y-1.5 pl-2">
              <p><span className="text-primary font-medium">Formula Sheet:</span> QA formulas &amp; shortcuts</p>
              <p><span className="text-primary font-medium">Mistake Book:</span> Repeated mistakes</p>
              <p><span className="text-primary font-medium">DILR Archive:</span> Important sets to revisit</p>
              <p><span className="text-primary font-medium">VARC Learning Notes:</span> Patterns in your errors</p>
            </div>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              WEAKNESS ↓ IDENTIFY ↓ PRACTICE ↓ REVISIT ↓ MEASURE
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 11 — Intensive Mock Phase */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              11 — Intensive Mock Phase
            </h4>
            <p className="text-xs font-mono text-secondary">Now focus shifts from learning new things to:</p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Speed</p>
              <p>• Accuracy</p>
              <p>• Stamina</p>
              <p>• Selection</p>
              <p>• Strategy</p>
              <p>• Consistency</p>
            </div>
            <p className="text-[11px] text-secondary/80 italic pt-1">
              The later-stage Reddit guidance strongly focuses on flexibility, mock temperament, reducing errors and learning how to approach the paper rather than endlessly adding new material.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 12 — Final Month */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              12 — Final Month
            </h4>
            <div className="text-xs font-mono text-primary font-semibold">
              LESS CHAOS • MORE REVISION
            </div>
            <p className="text-xs font-mono text-secondary">Focus on:</p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Your strongest areas</p>
              <p>• High-value weak areas</p>
              <p>• Previous mistakes</p>
              <p>• Mock analysis</p>
              <p>• PYQs</p>
              <p>• Formula revision</p>
            </div>
            <p className="text-xs font-mono text-secondary pt-1">Avoid suddenly collecting:</p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• New courses</p>
              <p>• 50 PDFs</p>
              <p>• Random YouTube strategies</p>
              <p>• Too many new resources</p>
            </div>
            <p className="text-[11px] text-secondary/80 italic pt-1">
              A recurring community theme is to avoid resource hoarding and instead use a focused system consistently.
            </p>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 13 — CAT Exam Strategy */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              13 — CAT Exam Strategy
            </h4>
            <p className="text-xs font-mono text-secondary">Before exam day, know:</p>
            <div className="text-secondary text-sm space-y-0.5 pl-2">
              <p>• Your section strategy</p>
              <p>• How long you give a difficult question</p>
              <p>• When to skip</p>
              <p>• How you recover from a bad section</p>
              <p>• How you handle panic</p>
              <p>• Your pacing strategy</p>
            </div>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              CALM ↓ SELECT ↓ SOLVE ↓ SKIP ↓ MOVE ON
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* 14 — Beyond CAT */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              14 — Beyond CAT
            </h4>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2.5 rounded-lg">
              CAT RESULT ↓ Shortlists ↓ WAT / GD / PI Preparation ↓ College Selection ↓ MBA Journey
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* The Notera CAT Journey Summary */}
          <div className="space-y-3 pt-1">
            <h4 className="font-display text-xl text-on-surface font-semibold">
              The Notera CAT Journey
            </h4>
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
                <div key={item.num} className="flex items-center space-x-2 py-1.5 px-2.5 rounded-lg bg-surface/60 border border-outline-variant/60">
                  <span className="text-primary font-bold">{item.num}</span>
                  <span className="text-on-surface font-sans text-xs">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Long Vertical Notes Card */}
        <div className="rounded-2xl bg-surface-container border border-outline-variant p-6 sm:p-7 shadow-terra-card space-y-8">
          {/* Header & Intro */}
          <div className="space-y-3">
            <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-semibold">
              Notes
            </h3>
            <p className="text-secondary text-xs sm:text-sm leading-relaxed font-light">
              Core first-principles theory, analytical frameworks, and rapid revision sheets for every CAT topic.
            </p>
            <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-3 rounded-lg leading-relaxed">
              First Principles → Mental Models → Worked Benchmarks → Traps &amp; Pitfalls → Rapid Sheets
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* Section 1: Quantitative Aptitude */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg text-on-surface font-semibold">
                Quantitative Aptitude (QA)
              </h4>
              <span className="text-[11px] font-mono text-primary bg-surface border border-outline-variant px-2 py-0.5 rounded">
                14 Chapters
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: "speed-math",
                  num: "01",
                  title: "Speed Math & Mental Calculation Codex",
                  desc: "Reciprocals 1/1 to 1/25, squares up to 35, Vedic shortcuts, and decimal split operations.",
                },
                {
                  id: "percentages-multipliers",
                  num: "02",
                  title: "Percentages & Multiplying Factors",
                  desc: "Operator scaling, successive percentage change, fraction chaining, and base shift rules.",
                },
                {
                  id: "ratios-proportions",
                  num: "03",
                  title: "Ratios, Proportions & Alligations",
                  desc: "Linear mixture balances, weighted averages, cross-multiplication, and replacement formulas.",
                },
                {
                  id: "profit-loss",
                  num: "04",
                  title: "Profit, Loss, Discount & Faulty Weights",
                  desc: "Markup multipliers, cost vs selling base, dishonest dealer trick formulas.",
                },
                {
                  id: "time-speed-distance",
                  num: "05",
                  title: "Time, Speed & Distance",
                  desc: "Proportionality ratios, relative speed, circular tracks, escalators, and head-start races.",
                },
                {
                  id: "time-and-work",
                  num: "06",
                  title: "Time & Work, Pipes & Cisterns",
                  desc: "Efficiency LCM method, negative work (leakage), and man-day equivalence equations.",
                },
                {
                  id: "algebra-foundations",
                  num: "07",
                  title: "Algebraic Models: Linear & Quadratic",
                  desc: "Parabola vertex geometry, discriminant analysis, root symmetries, and modulus bounds.",
                },
                {
                  id: "functions-graphs",
                  num: "08",
                  title: "Functions, Graphs, Maxima & Minima",
                  desc: "Transformation shifting f(x ± a), composite functions, AM-GM inequality optimizations.",
                },
                {
                  id: "sequences-series",
                  num: "09",
                  title: "Sequences, Series & Progressions",
                  desc: "AP, GP, HP harmonic means, AGP summation, and telescoping series cancellations.",
                },
                {
                  id: "geometry-mensuration",
                  num: "10",
                  title: "Geometry & Mensuration",
                  desc: "Triangle ceviana theorems, circle chords & tangents, coordinate bounding, 3D solids.",
                },
                {
                  id: "coordinate-trig",
                  num: "11",
                  title: "Coordinate Geometry & Trigonometry",
                  desc: "Straight line distances, locus equations, circle intersections, and trigonometric heights.",
                },
                {
                  id: "number-systems",
                  num: "12",
                  title: "Number Systems & Divisibility",
                  desc: "Euler totient, Fermat's Little Theorem, remainder cycles, trailing zeros, base conversions.",
                },
                {
                  id: "modern-math",
                  num: "13",
                  title: "Permutations, Combinations & Probability",
                  desc: "Grid paths, circular arrangements, de-arrangement formulas, conditional Bayes theorem.",
                },
                {
                  id: "logarithms-indices",
                  num: "14",
                  title: "Logarithms, Surds & Indices",
                  desc: "Logarithmic domain restrictions, change of base theorems, and exponential inequalities.",
                },
              ].map((note) => (
                <div
                  key={note.num}
                  onClick={() => onNavigateTab?.("notes", note.id)}
                  className="p-3 rounded-xl bg-surface border border-outline-variant/80 hover:border-primary transition-all group cursor-pointer space-y-1"
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
                    <span className="text-xs text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </div>
                  <p className="text-[11px] text-secondary leading-relaxed font-light pl-6">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* Section 2: Verbal Ability & Reading Comprehension */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg text-on-surface font-semibold">
                Verbal Ability &amp; RC (VARC)
              </h4>
              <span className="text-[11px] font-mono text-primary bg-surface border border-outline-variant px-2 py-0.5 rounded">
                7 Chapters
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: "varc-rc-deconstruction",
                  num: "01",
                  title: "RC Structural Deconstruction & Tone Mapping",
                  desc: "Identifying pivot transitions (however, nonetheless), author attitudes, and structural scaffolding.",
                },
                {
                  id: "varc-central-theme",
                  num: "02",
                  title: "Central Idea & Main Theme Extraction",
                  desc: "Distinguishing primary thesis from supporting evidentiary examples and tangent elaborations.",
                },
                {
                  id: "varc-inference",
                  num: "03",
                  title: "Inference vs Stated Fact Identification",
                  desc: "Evaluating unstated assumptions, logically entailed claims, and avoiding extreme quantifier traps.",
                },
                {
                  id: "varc-summary",
                  num: "04",
                  title: "Paragraph Summary Compression",
                  desc: "3-step compression rules: capture essence, maintain scope, eliminate distorted options.",
                },
                {
                  id: "varc-parajumbles",
                  num: "05",
                  title: "Para Jumbles & Mandatory Pairs",
                  desc: "Pronoun-antecedent tracing, chronological timelines, generic to specific structural order.",
                },
                {
                  id: "varc-odd-one-out",
                  num: "06",
                  title: "Odd One Out & Contextual Disconnect",
                  desc: "Finding the subtle semantic misfit that discusses related terminology but deviates in scope.",
                },
                {
                  id: "varc-completion",
                  num: "07",
                  title: "Paragraph Completion & Logical Culminations",
                  desc: "Predicting conclusion trajectory and tonal coherence for paragraph enders.",
                },
              ].map((note) => (
                <div
                  key={note.num}
                  onClick={() => onNavigateTab?.("notes", note.id)}
                  className="p-3 rounded-xl bg-surface border border-outline-variant/80 hover:border-primary transition-all group cursor-pointer space-y-1"
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
                    <span className="text-xs text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </div>
                  <p className="text-[11px] text-secondary leading-relaxed font-light pl-6">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* Section 3: Data Interpretation & Logical Reasoning */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg text-on-surface font-semibold">
                Data Interpretation &amp; LR (DILR)
              </h4>
              <span className="text-[11px] font-mono text-primary bg-surface border border-outline-variant px-2 py-0.5 rounded">
                7 Chapters
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: "dilr-matrix-arrangements",
                  num: "01",
                  title: "Grid Matrices & Binary Logic Assignments",
                  desc: "Constructing 2D/3D matrix tables, cross-matching constraints, and resolving false assumptions.",
                },
                {
                  id: "dilr-arrangements",
                  num: "02",
                  title: "Linear & Circular Arrangements with Blood Relations",
                  desc: "Facing inside/outside reference frames, relative positioning offsets, and family trees.",
                },
                {
                  id: "dilr-tournaments",
                  num: "03",
                  title: "Games, Tournaments & Round-Robin Brackets",
                  desc: "Knockouts, seeding rankings, point tables, tie-breaking heuristics, and match score constraints.",
                },
                {
                  id: "dilr-venn",
                  num: "04",
                  title: "Venn Diagrams & 4-Set Maxima/Minima",
                  desc: "Overlapping region equations, boundary conditions, and optimizing non-overlapping subsets.",
                },
                {
                  id: "dilr-networks",
                  num: "05",
                  title: "Networks, Routes & Flow Optimization",
                  desc: "Bottleneck capacities, maximum flow min-cut theorem, directional pipeline matrices.",
                },
                {
                  id: "dilr-charts",
                  num: "06",
                  title: "Complex Tables, Radar & Bubble Charts",
                  desc: "Rapid indexing, percentage growth approximations, and multi-axis graph synthesis.",
                },
                {
                  id: "dilr-selection",
                  num: "07",
                  title: "The Art of 4-Minute Set Selection",
                  desc: "Heuristics to diagnose trap sets, question independence, and decisive skip protocols.",
                },
              ].map((note) => (
                <div
                  key={note.num}
                  onClick={() => onNavigateTab?.("notes", note.id)}
                  className="p-3 rounded-xl bg-surface border border-outline-variant/80 hover:border-primary transition-all group cursor-pointer space-y-1"
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
                    <span className="text-xs text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </div>
                  <p className="text-[11px] text-secondary leading-relaxed font-light pl-6">
                    {note.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-outline-variant/60" />

          {/* Section 4: Master Revision Codices */}
          <div className="space-y-3">
            <h4 className="font-display text-lg text-on-surface font-semibold">
              Master Revision Codices
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-surface/60 border border-outline-variant/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-on-surface">QA Formula Sheet &amp; Shortcut Handbook</p>
                  <p className="text-[11px] text-secondary font-light">All core arithmetic, algebra, geometry &amp; number formulas in one sheet.</p>
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded font-semibold">CODEX</span>
              </div>
              <div className="p-3 rounded-xl bg-surface/60 border border-outline-variant/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-on-surface">DILR Puzzle Archetype Archive</p>
                  <p className="text-[11px] text-secondary font-light">50 benchmark puzzle templates covering every recurring CAT format.</p>
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded font-semibold">ARCHIVE</span>
              </div>
              <div className="p-3 rounded-xl bg-surface/60 border border-outline-variant/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-on-surface">VARC Cognitive Traps &amp; Error Taxonomy</p>
                  <p className="text-[11px] text-secondary font-light">Systematic guide to avoiding extreme options, out-of-scope traps &amp; distortion.</p>
                </div>
                <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded font-semibold">GUIDE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
