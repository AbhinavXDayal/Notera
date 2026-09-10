import React from "react";
import { Modal } from "../common/Modal";
import { Award, FileCheck } from "lucide-react";

interface CatExamInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatExamInfoModal: React.FC<CatExamInfoModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-3xl">
      <div className="space-y-6">
        <div className="border-b border-outline-variant pb-4 space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-tertiary font-semibold">
            Official Exam Blueprint
          </span>
          <h2 className="font-display text-3xl text-on-surface">
            Common Admission Test (CAT)
          </h2>
          <p className="text-xs sm:text-sm text-secondary">
            Conducted by the Indian Institutes of Management (IIMs) on the last
            Sunday of November.
          </p>
        </div>

        {/* 4 Pillars Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 bg-surface-container rounded-[12px] border border-outline-variant">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Total Duration
            </span>
            <span className="font-display text-lg text-on-surface font-semibold mt-0.5 block">
              120 Minutes
            </span>
            <span className="text-[10px] text-secondary">
              40 mins / section
            </span>
          </div>
          <div className="p-3 bg-surface-container rounded-[12px] border border-outline-variant">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Total Questions
            </span>
            <span className="font-display text-lg text-on-surface font-semibold mt-0.5 block">
              66 Questions
            </span>
            <span className="text-[10px] text-secondary">
              ~48 MCQ + 18 TITA
            </span>
          </div>
          <div className="p-3 bg-surface-container rounded-[12px] border border-outline-variant">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Maximum Score
            </span>
            <span className="font-display text-lg text-on-surface font-semibold mt-0.5 block">
              198 Marks
            </span>
            <span className="text-[10px] text-secondary">+3 for correct</span>
          </div>
          <div className="p-3 bg-surface-container rounded-[12px] border border-outline-variant">
            <span className="text-[10px] uppercase font-mono text-secondary block">
              Negative Marking
            </span>
            <span className="font-display text-lg text-error font-semibold mt-0.5 block">
              -1 Mark
            </span>
            <span className="text-[10px] text-secondary">
              No penalty on TITA
            </span>
          </div>
        </div>

        {/* Sectional Breakdown Table */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold block">
            Section-Wise Allocation &amp; Format
          </span>
          <div className="border border-outline-variant rounded-[12px] overflow-hidden bg-surface-container text-xs">
            <div className="grid grid-cols-4 p-3 font-mono font-semibold text-secondary border-b border-outline-variant bg-surface">
              <span>Section</span>
              <span>Questions</span>
              <span>Time</span>
              <span>Key Topics</span>
            </div>
            <div className="grid grid-cols-4 p-3 border-b border-outline-variant">
              <span className="font-semibold text-on-surface">VARC</span>
              <span>24 (16 RC + 8 VA)</span>
              <span>40 mins</span>
              <span className="text-secondary">
                4 Passages, Parajumbles, Summary
              </span>
            </div>
            <div className="grid grid-cols-4 p-3 border-b border-outline-variant">
              <span className="font-semibold text-on-surface">DILR</span>
              <span>20 (4 Sets of 5)</span>
              <span>40 mins</span>
              <span className="text-secondary">
                Matrix, Tournaments, Venn sets
              </span>
            </div>
            <div className="grid grid-cols-4 p-3">
              <span className="font-semibold text-on-surface">QA</span>
              <span>22 Questions</span>
              <span>40 mins</span>
              <span className="text-secondary">
                Arithmetic (45%), Algebra (30%)
              </span>
            </div>
          </div>
        </div>

        {/* Eligibility & Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-[12px] border border-outline-variant bg-surface space-y-2">
            <span className="font-mono uppercase text-tertiary font-semibold flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-primary" /> Eligibility
              Criteria
            </span>
            <p className="text-secondary leading-relaxed">
              Bachelor's Degree with minimum 50% marks (45% for SC/ST/PwD) or
              final year undergraduate students awaiting results.
            </p>
          </div>

          <div className="p-4 rounded-[12px] border border-outline-variant bg-surface space-y-2">
            <span className="font-mono uppercase text-tertiary font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-tertiary" /> IIM Composite Scoring
            </span>
            <p className="text-secondary leading-relaxed">
              Selection depends on: CAT Score (40–60%), Class 10/12/Graduation
              marks (20–30%), Work Experience (10–15%), and Gender/Academic
              Diversity (5–10%).
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-outline-variant flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </Modal>
  );
};
