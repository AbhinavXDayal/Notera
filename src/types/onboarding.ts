export interface OnboardingAnswers {
  targetYear: string;
  startingPoint: string;
  primaryHelp: string;
  dailyStudyTime: string;
  completedAt?: string;
}

export interface PersonalizedRecommendation {
  statusBadge: string;
  stepDirective: string;
  actionTitle: string;
  actionDescription: string;
  buttonText: string;
  targetTab: 'overview' | 'journey' | 'subjects' | 'notes' | 'practice';
  targetChapterId?: string;
  readTime: string;
  studyPaceAdvice: string;
  focusSubject: string;
  recommendedRoadmapStageId: number;
}

