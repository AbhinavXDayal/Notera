import { useState, useEffect } from 'react';
import type { VisitorPreferences, PersonalizedRecommendation } from '../types/preferences';
import { RecommendationEngine } from '../services/recommendationEngine';

const STORAGE_KEY = 'notera_visitor_preferences';

export function useVisitorPreferences() {
  const [preferences, setPreferences] = useState<VisitorPreferences | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as VisitorPreferences;
      }
    } catch {
      // Ignore storage read errors
    }
    return null;
  });

  const [recommendation, setRecommendation] = useState<PersonalizedRecommendation>(() =>
    RecommendationEngine.getRecommendation(preferences)
  );

  useEffect(() => {
    setRecommendation(RecommendationEngine.getRecommendation(preferences));
  }, [preferences]);

  const savePreferences = (data: {
    interests: string[];
    level: string;
    goals: string[];
  }) => {
    const newPrefs: VisitorPreferences = {
      hasCompletedOnboarding: true,
      interests: data.interests.length > 0 ? data.interests : ['CAT'],
      level: data.level || 'Complete Beginner',
      goals: data.goals.length > 0 ? data.goals : ['Complete Guidance'],
      completedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch (err) {
      console.warn('LocalStorage write failed:', err);
    }

    setPreferences(newPrefs);
  };

  const updatePreferences = (partial: Partial<VisitorPreferences>) => {
    if (!preferences) return;
    const updated: VisitorPreferences = {
      ...preferences,
      ...partial,
      completedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('LocalStorage update failed:', err);
    }

    setPreferences(updated);
  };

  const resetPreferences = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn('LocalStorage remove failed:', err);
    }

    setPreferences(null);
  };

  return {
    preferences,
    hasCompletedOnboarding: Boolean(preferences?.hasCompletedOnboarding),
    savePreferences,
    updatePreferences,
    resetPreferences,
    recommendation,
  };
}

