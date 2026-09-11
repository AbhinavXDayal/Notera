import React from "react";
import { CatLearningWorkspace } from "./CatLearningWorkspace";

export type CatTabType =
  | "overview"
  | "journey"
  | "roadmap"
  | "fundamentals"
  | "subjects"
  | "theory-practical"
  | "notes"
  | "notes-docs"
  | "practice"
  | "resources";

interface CatOverviewTabProps {
  onNavigateTab?: (tab: CatTabType, chapterId?: string) => void;
  onBackToPaths?: () => void;
  onOpenFundamentals?: () => void;
  completedStages?: number[];
  completedActions?: string[];
  onToggleStage?: (stageId: number) => void;
  onToggleAction?: (actionId: string) => void;
}

export const CatOverviewTab: React.FC<CatOverviewTabProps> = ({
  onNavigateTab,
  onBackToPaths,
  completedStages = [],
  completedActions = [],
  onToggleStage = () => {},
  onToggleAction = () => {},
}) => {
  return (
    <CatLearningWorkspace
      completedStages={completedStages}
      completedActions={completedActions}
      onToggleStage={onToggleStage}
      onToggleAction={onToggleAction}
      onBackToPaths={onBackToPaths}
      onNavigatePractice={() => onNavigateTab?.("practice")}
    />
  );
};
