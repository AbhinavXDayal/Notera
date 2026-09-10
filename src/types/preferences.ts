export interface VisitorPreferences {
  hasCompletedOnboarding: boolean;
  interests: string[];
  level: string;
  goals: string[];
  completedAt: string;
}

export interface PersonalizedRecommendation {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  targetView: 'home' | 'cat' | 'field';
  targetTab?: 'overview' | 'journey' | 'subjects' | 'notes' | 'practice' | 'resources';
  targetChapterId?: string;
  targetFieldId?: string;

  // Compatibility fields for CAT Overview and Header Nav
  statusBadge: string;
  stepDirective: string;
  actionTitle: string;
  actionDescription: string;
  buttonText: string;
  studyPaceAdvice: string;
  readTime: string;
  focusSubject?: string;
  recommendedRoadmapStageId?: number;

  secondaryLinks?: {
    label: string;
    targetTab?: 'overview' | 'journey' | 'subjects' | 'notes' | 'practice' | 'resources';
    targetChapterId?: string;
    targetView?: 'home' | 'cat' | 'field';
    targetFieldId?: string;
  }[];
}
