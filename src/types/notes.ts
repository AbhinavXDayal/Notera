export interface TocItem {
  id: string;
  title: string;
  level?: number;
}

export interface FormulaRule {
  label: string;
  multiplier: string;
  fraction: string;
  detail?: string;
}

export interface NoteExample {
  problemNumber: number;
  question: string;
  traditionalMethod: string;
  intuitiveMethod: string;
  proTip: string;
}

export interface NoteCommonMistake {
  title: string;
  trap: string;
  antidote: string;
}

export interface NoteSection {
  id: string;
  title: string;
  content: string[];
  rules?: FormulaRule[];
  mathCallout?: string;
  examples?: NoteExample[];
  mistake?: NoteCommonMistake;
  revisionBullets?: string[];
  resources?: { title: string; type: string; linkText: string }[];
}

export interface NoteChapter {
  id: string;
  subjectId: string;
  moduleId: string;
  chapterNumber: string;
  subjectTitle: string;
  volume: string;
  title: string;
  quote: string;
  estimatedReadTime: string;
  totalPages: number;
  currentPage: number;
  toc: TocItem[];
  // 10-point architectural sections:
  overview: NoteSection;
  roadmapPosition: NoteSection;
  fundamentals: NoteSection;
  theory: NoteSection;
  workedExamples: NoteSection;
  practicalApplication: NoteSection;
  practiceDrills: NoteSection;
  commonMistakes: NoteSection;
  rapidRevision: NoteSection;
  curatedResources: NoteSection;
  nextChapterId?: string;
  prevChapterId?: string;
}

