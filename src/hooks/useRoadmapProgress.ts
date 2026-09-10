import { useState } from 'react';

const ROADMAP_PROGRESS_KEY = 'notera_cat_completed_stages';
const CHECKLIST_PROGRESS_KEY = 'notera_cat_completed_actions';

export function useRoadmapProgress() {
  const [completedStages, setCompletedStages] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(ROADMAP_PROGRESS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [completedActions, setCompletedActions] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(CHECKLIST_PROGRESS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleStage = (stageId: number) => {
    setCompletedStages((prev) => {
      const updated = prev.includes(stageId)
        ? prev.filter((id) => id !== stageId)
        : [...prev, stageId];
      try {
        localStorage.setItem(ROADMAP_PROGRESS_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save completed stages', err);
      }
      return updated;
    });
  };

  const toggleAction = (actionId: string) => {
    setCompletedActions((prev) => {
      const updated = prev.includes(actionId)
        ? prev.filter((id) => id !== actionId)
        : [...prev, actionId];
      try {
        localStorage.setItem(CHECKLIST_PROGRESS_KEY, JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save completed actions', err);
      }
      return updated;
    });
  };

  const isStageComplete = (stageId: number) => completedStages.includes(stageId);
  const isActionComplete = (actionId: string) => completedActions.includes(actionId);

  return {
    completedStages,
    completedActions,
    toggleStage,
    toggleAction,
    isStageComplete,
    isActionComplete,
    completionPercentage: Math.round((completedStages.length / 14) * 100)
  };
}

