export type StageStatus = 'completed' | 'active' | 'locked' | 'available';

export interface ActionItem {
  id: string;
  text: string;
  completed?: boolean;
}

export interface RoadmapResource {
  title: string;
  type: 'Note' | 'Strategy Guide' | 'Diagnostic' | 'Mock Test' | 'Analysis Sheet';
  actionNoteId?: string;
  url?: string;
}

export interface RoadmapStage {
  id: number;
  stageNumber: string;
  title: string;
  subtitle: string;
  phase: string;
  timeEstimate: string;
  badge?: string;
  description: string;
  detailedGuidance: string[];
  keyMindsets: string[];
  actionChecklist: ActionItem[];
  resources: RoadmapResource[];
  pitfallsToAvoid: string[];
}

