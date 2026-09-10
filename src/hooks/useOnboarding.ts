import { useState } from 'react';
import type { OnboardingAnswers, PersonalizedRecommendation } from '../types/onboarding';

const STORAGE_KEY = 'notera_cat_onboarding';

export function useOnboarding() {
  const [answers, setAnswers] = useState<OnboardingAnswers | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const saveAnswers = (newAnswers: OnboardingAnswers) => {
    const dataWithTimestamp = {
      ...newAnswers,
      completedAt: new Date().toISOString()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataWithTimestamp));
      setAnswers(dataWithTimestamp);
    } catch (err) {
      console.error('Failed to save onboarding data to localStorage', err);
      setAnswers(dataWithTimestamp);
    }
  };

  const clearAnswers = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      setAnswers(null);
    } catch (err) {
      console.error('Failed to clear onboarding data', err);
    }
  };

  // Compute dynamic personalized recommendation based on answers
  const getRecommendation = (): PersonalizedRecommendation => {
    if (!answers) {
      return {
        statusBadge: 'Track: Complete Beginner Path',
        stepDirective: 'Immediate Directive • Step 01',
        actionTitle: 'Understand the Architecture of CAT',
        actionDescription: 'Before memorizing equations or solving high-pressure drills, understand what the Indian Institutes of Management actually evaluate: decision making under time scarcity, reading endurance, and mathematical literacy.',
        buttonText: 'Read Chapter 01: The CAT Blueprint',
        targetTab: 'notes',
        targetChapterId: 'percentages-multipliers',
        readTime: 'Estimated reading time: 14 minutes',
        studyPaceAdvice: 'Recommended study commitment: 1–2 hours daily focused on mental multipliers & daily Aeon essays.',
        focusSubject: 'Foundational Arithmetic & Active Reading',
        recommendedRoadmapStageId: 1
      };
    }

    const { startingPoint, primaryHelp, dailyStudyTime } = answers;

    if (startingPoint.includes('beginner') || primaryHelp.includes('Understanding') || primaryHelp.includes('Where to Start')) {
      return {
        statusBadge: 'Track: Complete Beginner Primer',
        stepDirective: 'Immediate Directive • Step 01',
        actionTitle: 'Master the CAT Blueprint & Speed Foundations',
        actionDescription: `As a beginner dedicating ${dailyStudyTime.toLowerCase()}, your priority is eliminating calculation anxiety and understanding the score-vs-percentile economics before touching advance mocks.`,
        buttonText: 'Read Chapter 03: Percentages & Multipliers',
        targetTab: 'notes',
        targetChapterId: 'percentages-multipliers',
        readTime: 'Estimated reading time: 14 minutes',
        studyPaceAdvice: `Cadence: ${dailyStudyTime} per day — 40 mins speed math + 40 mins editorial reading.`,
        focusSubject: 'Arithmetic Multiplying Factors & Editorial Reading',
        recommendedRoadmapStageId: 1
      };
    }

    if (startingPoint.includes('basics') || primaryHelp.includes('Building') || primaryHelp.includes('Study Plan')) {
      return {
        statusBadge: 'Track: Core Subject Acceleration',
        stepDirective: 'Immediate Directive • Step 04',
        actionTitle: 'Dive into Core QA Arithmetic & Algebra Doctrine',
        actionDescription: 'You already possess school fundamentals. Now transition to CAT-specific ratio mechanics and parabola root symmetries to cut solving time in half.',
        buttonText: 'Explore QA Modules & Chapters',
        targetTab: 'subjects',
        targetChapterId: 'algebra-foundations',
        readTime: 'Estimated module time: 45 minutes',
        studyPaceAdvice: `Cadence: ${dailyStudyTime} per day — Focus on high-weightage Arithmetic (45%) & Algebra (30%).`,
        focusSubject: 'Quantitative Aptitude Modules',
        recommendedRoadmapStageId: 4
      };
    }

    // Already preparing
    return {
      statusBadge: 'Track: Advanced Strategy & Mock Forensics',
      stepDirective: 'Immediate Directive • Stage 08',
      actionTitle: 'Calibrate Pacing with 40-Minute Sectional Simulators',
      actionDescription: 'Overcome your plateau through disciplined set selection in DILR and the ABC question triage framework in Quantitative Aptitude.',
      buttonText: 'Launch Practice & Sectional Lab',
      targetTab: 'practice',
      readTime: '40-Minute Sectional Sprint',
      studyPaceAdvice: `Cadence: ${dailyStudyTime} per day — 1 sectional test daily followed by 2 hours of forensic error logging.`,
      focusSubject: 'Strategic Question Selection & Mock Forensics',
      recommendedRoadmapStageId: 8
    };
  };

  return {
    answers,
    isOnboarded: !!answers,
    saveAnswers,
    clearAnswers,
    recommendation: getRecommendation()
  };
}

