import React, { useState } from "react";
import { Modal } from "../common/Modal";
import {
  Play,
  Clock,
  FileText,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

export const CatPracticeTab: React.FC = () => {
  const [activeDrillModal, setActiveDrillModal] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const sampleDrills = [
    {
      question:
        "A trader marks his goods 33.33% above cost price and then offers a discount of 25%. What is his net profit or loss percentage?",
      options: ["0% (Break-even)", "5% Profit", "6.25% Loss", "8.33% Profit"],
      correct: 0,
      explanation:
        "Mark-up +33.33% (+1/3) = Multiplier 4/3. Discount -25% (-1/4) = Multiplier 3/4. Net Multiplier = (4/3) × (3/4) = 1.00 (Identical to Cost Price => 0% Break-even).",
      topic: "Percentages & Multipliers",
    },
    {
      question:
        "Find the minimum possible value of the function f(x) = 3x² - 18x + 35 for all real values of x.",
      options: ["8", "11", "14", "17"],
      correct: 0,
      explanation:
        "Complete the square: f(x) = 3(x² - 6x + 9) + 35 - 27 = 3(x - 3)² + 8. Since 3(x - 3)² ≥ 0, minimum occurs at x = 3, yielding minimum value 8.",
      topic: "Algebra Optimization",
    },
    {
      question:
        "If the price of sugar increases by 20%, by what fraction must consumption be reduced so that overall expenditure does not change?",
      options: ["1/5 (20%)", "1/6 (16.66%)", "1/4 (25%)", "1/7 (14.28%)"],
      correct: 1,
      explanation:
        "Rule of Product Invariance: If Price increases by +1/5 (+20%), Consumption must drop by 1/(5+1) = 1/6 (-16.66%) to maintain constant expenditure.",
      topic: "Product Invariance",
    },
  ];

  const handleSelectOption = (idx: number) => {
    if (!showExplanation) {
      setSelectedOption(idx);
      setShowExplanation(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < sampleDrills.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setActiveDrillModal(false);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const currentQ = sampleDrills[currentQuestionIndex];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-10 fade-in">
      {/* Header */}
      <div className="border-b border-outline-variant pb-6">
        <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
          Deliberate Practice
        </span>
        <h2 className="font-display text-4xl text-on-surface font-normal mt-1">
          The Practice &amp; Sectional Laboratory
        </h2>
        <p className="text-secondary text-sm max-w-xl mt-1">
          Practice is categorized by cognitive challenge rather than blind
          volume. Move from untimed fundamental workouts to full past papers.
        </p>
      </div>

      {/* 3 Tier Practice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tier I */}
        <div className="p-7 rounded-[12px] border border-outline-variant bg-surface space-y-4 shadow-terra-card flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-tertiary font-semibold">
              Tier I • Conceptual Drills
            </span>
            <h3 className="font-display text-2xl text-on-surface">
              Foundational Workouts
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Untimed 10-problem clusters testing pure clarity of Multiplying
              Factors, Parabola vertices, and Arithmetic definitions.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedOption(null);
              setShowExplanation(false);
              setActiveDrillModal(true);
            }}
            className="w-full py-2.5 rounded-full bg-surface-container border border-outline-variant text-xs font-semibold text-on-surface hover:border-primary hover:bg-surface transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-primary" />
            <span>Start Interactive Untimed Drill</span>
          </button>
        </div>

        {/* Tier II */}
        <div className="p-7 rounded-[12px] border-2 border-primary/40 bg-surface-container space-y-4 shadow-terra-card flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-tertiary font-semibold">
              Tier II • Timed Sectionals
            </span>
            <h3 className="font-display text-2xl text-on-surface">
              40-Minute Sectional Simulators
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Exact replica of CAT on-screen calculator, question navigation
              palette, and negative marking constraints.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedOption(null);
              setShowExplanation(false);
              setActiveDrillModal(true);
            }}
            className="w-full py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover shadow-terra-card transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Launch 40-Min Sectional</span>
          </button>
        </div>

        {/* Tier III */}
        <div className="p-7 rounded-[12px] border border-outline-variant bg-surface space-y-4 shadow-terra-card flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-secondary font-semibold">
              Tier III • Full Benchmarks
            </span>
            <h3 className="font-display text-2xl text-on-surface">
              Past 7 Years Official CAT Papers
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              IIM official papers (2018–2024) with video solutions, difficulty
              percentiles, and set selection audits.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedOption(null);
              setShowExplanation(false);
              setActiveDrillModal(true);
            }}
            className="w-full py-2.5 rounded-full bg-surface-container border border-outline-variant text-xs font-semibold text-on-surface hover:border-primary hover:bg-surface transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-secondary" />
            <span>View Official Archive</span>
          </button>
        </div>
      </div>

      {/* Interactive Drill Runner Modal */}
      <Modal
        isOpen={activeDrillModal}
        onClose={() => setActiveDrillModal(false)}
        maxWidth="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant pb-4">
            <div className="space-y-0.5">
              <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold">
                Deliberate Practice Drill • Question {currentQuestionIndex + 1}{" "}
                of {sampleDrills.length}
              </span>
              <div className="text-xs text-secondary font-mono">
                Topic: {currentQ.topic}
              </div>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded bg-surface-container border border-outline-variant font-mono text-secondary">
              Untimed Mode
            </span>
          </div>

          <div className="space-y-4">
            <p className="text-base font-display text-on-surface leading-relaxed">
              {currentQ.question}
            </p>

            <div className="space-y-2.5 pt-2">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correct;

                let btnStyle =
                  "border-outline-variant bg-surface-container hover:border-primary text-on-surface";
                if (showExplanation) {
                  if (isCorrect) {
                    btnStyle =
                      "border-primary bg-primary/10 text-primary font-semibold";
                  } else if (isSelected && !isCorrect) {
                    btnStyle = "border-error bg-error/10 text-error";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={showExplanation}
                    className={`w-full p-3.5 rounded-[12px] border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {showExplanation && (
                      <span>
                        {isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        )}
                        {isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-error" />
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Explanation Box */}
          {showExplanation && (
            <div className="p-4 rounded-[12px] bg-surface-container border border-primary/40 space-y-2 fade-in">
              <span className="text-xs font-mono uppercase text-tertiary font-semibold block">
                {selectedOption === currentQ.correct
                  ? "✓ Correct! Intuitive Explanation:"
                  : "✗ Solution & Core Concept:"}
              </span>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedOption(null);
                setShowExplanation(false);
              }}
              disabled={!showExplanation}
              className="text-xs text-secondary hover:text-on-surface flex items-center space-x-1 disabled:opacity-30 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Question</span>
            </button>

            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all flex items-center space-x-1.5 cursor-pointer"
              >
                <span>
                  {currentQuestionIndex < sampleDrills.length - 1
                    ? "Next Drill Question"
                    : "Complete Drill"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};
