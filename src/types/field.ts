export type FieldId = 
  | 'CAT'
  | 'JEE'
  | 'NEET'
  | 'UPSC'
  | 'CUET'
  | 'CLASS_12'
  | 'CLASS_10'
  | 'COMPSCI';

export interface FieldCategory {
  id: FieldId;
  title: string;
  subtitle: string;
  symbol: string;
  description: string;
  featured?: boolean;
  tag?: string;
  actionText: string;
  targetPath: string;
}

export interface SubjectModule {
  id: string;
  title: string;
  subtitle?: string;
  moduleNumber: string;
  chapterCount: number;
  weightageText: string;
  weightagePercentage?: number;
  weightageType: 'high' | 'medium' | 'low';
  description: string;
  chapters: string[];
  recommendedNoteId?: string;
}

export interface SubjectSection {
  id: string;
  name: string;
  shortName: string;
  questionCount: number;
  timeAllocation: string;
  weightageDescription: string;
  summary: string;
  modules: SubjectModule[];
}

export interface FieldGuideData {
  id: FieldId;
  title: string;
  subtitle: string;
  symbol: string;
  plateNumber: string;
  tagline: string;
  overview: string;
  examPattern: {
    duration: string;
    totalMarks?: string;
    sections: string;
    frequency: string;
    eligibility: string;
  };
  pillars: {
    name: string;
    description: string;
    weight: string;
  }[];
  starterSteps: {
    step: number;
    title: string;
    desc: string;
  }[];
}

