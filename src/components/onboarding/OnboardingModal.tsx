import React, { useState } from "react";
import { X, Check } from "lucide-react";
import type { OnboardingAnswers } from "../../types/onboarding";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (answers: OnboardingAnswers) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [answers, setAnswers] = useState<OnboardingAnswers>({
    targetYear: "This year (CAT 2024/2025)",
    startingPoint: "Complete beginner",
    primaryHelp: "Building Core Fundamentals",
    dailyStudyTime: "1 – 2 hours (Working professional pace)",
  });

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-on-surface/60 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />
      <div className="bg-surface border border-outline-variant rounded-[12px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative transition-all transform duration-300 z-10 fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-secondary hover:text-on-surface p-1 rounded-full hover:bg-surface-container transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Counter & Progress Bar */}
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tertiary mb-4">
          <span>
            Question 0{currentStep} of 0{totalSteps}
          </span>
          <span className="w-16 h-1 bg-outline-variant rounded-full overflow-hidden inline-block">
            <span
              className="block h-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </span>
        </div>

        {/* QUESTION 1 */}
        {currentStep === 1 && (
          <div className="space-y-6 fade-in">
            <div>
              <h2 className="font-display text-3xl text-on-surface">
                When are you planning to take the CAT?
              </h2>
              <p className="text-xs text-secondary mt-1">
                Your target timeline defines the cadence of conceptual vs.
                sectional revision.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "This year (CAT 2024/2025)",
                  desc: "Immediate target for this academic session",
                },
                {
                  title: "Next year (Long-term foundation)",
                  desc: "12-18 month comprehensive mastery journey",
                },
                {
                  title: "Just exploring & surveying syllabus",
                  desc: "Understanding structure and career opportunities",
                },
              ].map((opt) => {
                const selected = answers.targetYear === opt.title;
                return (
                  <div
                    key={opt.title}
                    onClick={() =>
                      setAnswers({ ...answers, targetYear: opt.title })
                    }
                    className={`flex items-center justify-between p-4 rounded-[12px] border cursor-pointer transition-all ${
                      selected
                        ? "border-primary bg-surface shadow-sm"
                        : "border-outline-variant bg-surface-container hover:border-primary/60"
                    }`}
                  >
                    <div>
                      <span className="font-medium text-sm text-on-surface block">
                        {opt.title}
                      </span>
                      <span className="text-[11px] text-secondary">
                        {opt.desc}
                      </span>
                    </div>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selected
                          ? "border-primary bg-primary text-on-primary"
                          : "border-secondary"
                      }`}
                    >
                      {selected && (
                        <Check className="w-3 h-3 text-on-primary" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* QUESTION 2 */}
        {currentStep === 2 && (
          <div className="space-y-6 fade-in">
            <div>
              <h2 className="font-display text-3xl text-on-surface">
                Where are you starting from?
              </h2>
              <p className="text-xs text-secondary mt-1">
                Be candid. Starting from scratch is celebrated with tailored
                fundamental primers.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Complete beginner",
                  desc: "Haven't touched math or analytical reading recently",
                },
                {
                  title: "Know the basic school fundamentals",
                  desc: "Need CAT-specific question orientation, speed multipliers, and triage",
                },
                {
                  title: "Already preparing",
                  desc: "Stuck at mock plateau or seeking structured revision & forensic audit",
                },
              ].map((opt) => {
                const selected = answers.startingPoint === opt.title;
                return (
                  <div
                    key={opt.title}
                    onClick={() =>
                      setAnswers({ ...answers, startingPoint: opt.title })
                    }
                    className={`flex items-center justify-between p-4 rounded-[12px] border cursor-pointer transition-all ${
                      selected
                        ? "border-primary bg-surface shadow-sm"
                        : "border-outline-variant bg-surface-container hover:border-primary/60"
                    }`}
                  >
                    <div>
                      <span className="font-medium text-sm text-on-surface block">
                        {opt.title}
                      </span>
                      <span className="text-[11px] text-secondary">
                        {opt.desc}
                      </span>
                    </div>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selected
                          ? "border-primary bg-primary text-on-primary"
                          : "border-secondary"
                      }`}
                    >
                      {selected && (
                        <Check className="w-3 h-3 text-on-primary" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* QUESTION 3 */}
        {currentStep === 3 && (
          <div className="space-y-6 fade-in">
            <div>
              <h2 className="font-display text-3xl text-on-surface">
                What do you need primary guidance with?
              </h2>
              <p className="text-xs text-secondary mt-1">
                We prioritize your initial dashboard directive and roadmap focus
                around this immediate necessity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Understanding CAT Exam Format",
                "Knowing Where to Start",
                "Building Core Fundamentals",
                "Crafting a Daily Study Plan",
                "DILR Problem Selection Strategy",
                "IIM Selection Criteria & Profile",
              ].map((topic) => {
                const selected = answers.primaryHelp === topic;
                return (
                  <div
                    key={topic}
                    onClick={() =>
                      setAnswers({ ...answers, primaryHelp: topic })
                    }
                    className={`p-3.5 rounded-[12px] border cursor-pointer text-xs font-medium transition-all ${
                      selected
                        ? "border-primary bg-surface text-primary shadow-sm"
                        : "border-outline-variant bg-surface-container hover:border-primary/60 text-on-surface"
                    }`}
                  >
                    {topic}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* QUESTION 4 */}
        {currentStep === 4 && (
          <div className="space-y-6 fade-in">
            <div>
              <h2 className="font-display text-3xl text-on-surface">
                How much dedicated time can you allocate daily?
              </h2>
              <p className="text-xs text-secondary mt-1">
                Consistency beats intensity. We'll tailor your daily reading
                chunks accordingly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Less than 1 hour",
                  detail: "Micro-reading & 1 RC daily",
                },
                { title: "1 – 2 hours", detail: "Working professional pace" },
                {
                  title: "2 – 4 hours",
                  detail: "Balanced college student cadence",
                },
                {
                  title: "More than 4 hours",
                  detail: "Dedicated full-time preparation year",
                },
              ].map((time) => {
                const val = `${time.title} (${time.detail})`;
                const selected = answers.dailyStudyTime.startsWith(time.title);
                return (
                  <div
                    key={time.title}
                    onClick={() =>
                      setAnswers({ ...answers, dailyStudyTime: val })
                    }
                    className={`flex items-center justify-between p-4 rounded-[12px] border cursor-pointer transition-all ${
                      selected
                        ? "border-primary bg-surface shadow-sm"
                        : "border-outline-variant bg-surface-container hover:border-primary/60"
                    }`}
                  >
                    <div>
                      <span className="font-medium text-sm text-on-surface block">
                        {time.title}
                      </span>
                      <span className="text-[11px] text-secondary">
                        {time.detail}
                      </span>
                    </div>
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selected
                          ? "border-primary bg-primary text-on-primary"
                          : "border-secondary"
                      }`}
                    >
                      {selected && (
                        <Check className="w-3 h-3 text-on-primary" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Wizard Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-outline-variant mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="text-xs font-semibold text-secondary hover:text-on-surface uppercase tracking-wider disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
          >
            ← Back
          </button>

          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all shadow-terra-card cursor-pointer"
          >
            {currentStep === totalSteps
              ? "Generate My Personalized CAT Journey →"
              : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
};
