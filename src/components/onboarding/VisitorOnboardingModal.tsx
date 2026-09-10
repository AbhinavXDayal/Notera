import React, { useState, useEffect } from "react";
import { X, Check, Compass, Sparkles, ArrowRight } from "lucide-react";

interface VisitorOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (preferences: {
    interests: string[];
    level: string;
    goals: string[];
  }) => void;
  initialInterests?: string[];
  initialLevel?: string;
  initialGoals?: string[];
}

export const VisitorOnboardingModal: React.FC<VisitorOnboardingModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  initialInterests,
  initialLevel,
  initialGoals,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [selectedInterests, setSelectedInterests] = useState<string[]>(["CAT"]);
  const [selectedLevel, setSelectedLevel] = useState<string>(
    "Complete Beginner",
  );
  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    "Complete Guidance",
  ]);

  // Sync state ONLY when the modal transitions from closed to open
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setIsTransitioning(false);
      setSelectedInterests(
        initialInterests && initialInterests.length > 0
          ? initialInterests
          : ["CAT"],
      );
      setSelectedLevel(initialLevel || "Complete Beginner");
      setSelectedGoals(
        initialGoals && initialGoals.length > 0
          ? initialGoals
          : ["Complete Guidance"],
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    if (interest === "Just Exploring") {
      setSelectedInterests(["Just Exploring"]);
      return;
    }
    const filtered = selectedInterests.filter((i) => i !== "Just Exploring");
    if (filtered.includes(interest)) {
      if (filtered.length > 1) {
        setSelectedInterests(filtered.filter((i) => i !== interest));
      }
    } else {
      setSelectedInterests([...filtered, interest]);
    }
  };

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      if (selectedGoals.length > 1) {
        setSelectedGoals(selectedGoals.filter((g) => g !== goal));
      }
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  // Dynamic Level Options based on Interest
  const getLevelOptions = () => {
    const isSchool = selectedInterests.some(
      (i) => i === "Class 12" || i === "Class 10",
    );
    const isCompSci = selectedInterests.includes("Computer Science");

    if (isSchool) {
      return [
        {
          title: "Starting",
          desc: "Beginning of the academic school session",
        },
        {
          title: "Currently Learning",
          desc: "Actively studying curriculum chapters",
        },
        {
          title: "Preparing for Exams",
          desc: "Board prep, sample papers & step marking",
        },
        {
          title: "Revision",
          desc: "Rapid formula reviews and canonical notes",
        },
      ];
    }

    if (isCompSci) {
      return [
        {
          title: "Beginner",
          desc: "Learning fundamental algorithms & logic",
        },
        {
          title: "Currently Learning",
          desc: "Studying data structures and architecture",
        },
        {
          title: "Building Projects",
          desc: "Practical software engineering and systems",
        },
        {
          title: "Advanced Preparation",
          desc: "Competitive programming and systems design",
        },
      ];
    }

    // Default / CAT / Competitive Exams
    const examName = selectedInterests.includes("CAT")
      ? "CAT"
      : selectedInterests[0] || "Exam";
    return [
      {
        title: "Complete Beginner",
        desc: "New to the syllabus; need foundational orientation",
      },
      {
        title: `Exploring ${examName}`,
        desc: "Understanding format, weightage & career opportunities",
      },
      {
        title: "Already Preparing",
        desc: "Building chapter mastery or addressing score plateaus",
      },
      {
        title: "Preparing for the Exam",
        desc: "Final sprint, mock forensics & triage strategy",
      },
    ];
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsTransitioning(true);
      setTimeout(() => {
        onComplete({
          interests: selectedInterests,
          level: selectedLevel,
          goals: selectedGoals,
        });
      }, 1000);
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

      <div className="bg-surface border border-outline-variant rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative transition-all duration-300 z-10 fade-in">
        {/* Close Button */}
        {!isTransitioning && (
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 text-secondary hover:text-on-surface p-1.5 rounded-full hover:bg-surface-container transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* TRANSITION SCREEN */}
        {isTransitioning ? (
          <div className="py-12 text-center space-y-4 fade-in">
            <div className="w-16 h-16 rounded-full bg-surface-container border border-primary/40 flex items-center justify-center mx-auto text-primary animate-pulse">
              <Compass className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono tracking-widest text-tertiary">
                Calibration Complete
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
                Your path is ready.
              </h2>
            </div>

            <p className="text-secondary text-xs sm:text-sm max-w-sm mx-auto">
              Personalizing your Notera digital library and recommended starting
              points...
            </p>
          </div>
        ) : (
          <>
            {/* Step Counter & Progress Bar */}
            <div className="flex items-center justify-between mb-5 pr-8">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tertiary">
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

              <span className="hidden sm:inline-flex items-center space-x-1 text-[11px] font-mono text-secondary bg-surface-container px-2 py-0.5 rounded border border-outline-variant">
                <Sparkles className="w-3 h-3 text-tertiary" />
                <span>Scholar Calibration</span>
              </span>
            </div>

            {/* QUESTION 1: INTEREST */}
            {currentStep === 1 && (
              <div className="space-y-5 fade-in">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal">
                    What brings you here?
                  </h2>
                  <p className="text-xs text-secondary mt-1">
                    Select your primary areas of study or competitive exams.
                    (Multiple selections allowed)
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {[
                    "CAT",
                    "JEE",
                    "NEET",
                    "UPSC",
                    "CUET",
                    "Class 12",
                    "Class 10",
                    "Computer Science",
                    "Just Exploring",
                  ].map((field) => {
                    const isSelected = selectedInterests.includes(field);
                    return (
                      <button
                        key={field}
                        type="button"
                        onClick={() => toggleInterest(field)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-surface shadow-sm text-on-surface"
                            : "border-outline-variant bg-surface-container hover:border-primary/50 text-secondary hover:text-on-surface"
                        }`}
                      >
                        <span className="text-xs font-medium">{field}</span>
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] transition-colors ${
                            isSelected
                              ? "border-primary bg-primary text-on-primary"
                              : "border-outline-variant"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* QUESTION 2: CURRENT POSITION */}
            {currentStep === 2 && (
              <div className="space-y-5 fade-in">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal">
                    Where are you in your journey?
                  </h2>
                  <p className="text-xs text-secondary mt-1">
                    Select where you are starting from to help us tailor
                    foundational vs. advanced directives.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  {getLevelOptions().map((opt) => {
                    const isSelected = selectedLevel === opt.title;
                    return (
                      <div
                        key={opt.title}
                        onClick={() => setSelectedLevel(opt.title)}
                        className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                          isSelected
                            ? "border-primary bg-surface shadow-sm"
                            : "border-outline-variant bg-surface-container hover:border-primary/50"
                        }`}
                      >
                        <div>
                          <span className="text-xs font-semibold text-on-surface block">
                            {opt.title}
                          </span>
                          <span className="text-[11px] text-secondary">
                            {opt.desc}
                          </span>
                        </div>
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? "border-primary bg-primary text-on-primary"
                              : "border-secondary/50"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* QUESTION 3: PRIMARY FOCUS */}
            {currentStep === 3 && (
              <div className="space-y-5 fade-in">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-on-surface font-normal">
                    What would help you most?
                  </h2>
                  <p className="text-xs text-secondary mt-1">
                    Choose what you want to focus on. (Multiple selections
                    allowed)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {[
                    "Roadmap",
                    "Fundamentals",
                    "Notes",
                    "Theory",
                    "Practice",
                    "Complete Guidance",
                  ].map((focus) => {
                    const isSelected = selectedGoals.includes(focus);
                    return (
                      <button
                        key={focus}
                        type="button"
                        onClick={() => toggleGoal(focus)}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? "border-primary bg-surface shadow-sm text-on-surface"
                            : "border-outline-variant bg-surface-container hover:border-primary/50 text-secondary hover:text-on-surface"
                        }`}
                      >
                        <span className="text-xs font-medium">{focus}</span>
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] transition-colors ${
                            isSelected
                              ? "border-primary bg-primary text-on-primary"
                              : "border-outline-variant"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Wizard Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-outline-variant mt-6">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="text-xs font-semibold text-secondary hover:text-on-surface uppercase tracking-wider disabled:opacity-25 cursor-pointer disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  Skip for now
                </button>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all shadow-terra-card flex items-center space-x-1.5 cursor-pointer"
              >
                <span>
                  {currentStep === totalSteps
                    ? "Generate My Path"
                    : "Continue"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
