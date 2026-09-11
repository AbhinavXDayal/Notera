import React, { useState } from "react";
import { ArrowLeft, Map, BookOpen, Compass, Layers } from "lucide-react";
import { CatRoadmapTab } from "./CatRoadmapTab";
import { CatFundamentalsView } from "./views/CatFundamentalsView";
import { CatSubjectsTab } from "./CatSubjectsTab";
import { CatNotesDocsView } from "./views/CatNotesDocsView";

export type CatWorkspaceTab =
  | "roadmap"
  | "fundamentals"
  | "theory-practical"
  | "notes-docs";

interface CatLearningWorkspaceProps {
  initialTab?: CatWorkspaceTab;
  initialChapterId?: string;
  initialStageId?: number;
  completedStages: number[];
  completedActions: string[];
  onToggleStage: (stageId: number) => void;
  onToggleAction: (actionId: string) => void;
  onBackToPaths?: () => void;
  onNavigatePractice?: () => void;
}

export const CatLearningWorkspace: React.FC<CatLearningWorkspaceProps> = ({
  initialTab = "roadmap",
  initialChapterId,
  initialStageId = 1,
  completedStages,
  completedActions,
  onToggleStage,
  onToggleAction,
  onBackToPaths,
  onNavigatePractice,
}) => {
  const [activeTab, setActiveTab] = useState<CatWorkspaceTab>(initialTab);
  const [selectedNoteChapterId, setSelectedNoteChapterId] = useState<
    string | undefined
  >(initialChapterId);

  const tabs: {
    id: CatWorkspaceTab;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "roadmap",
      label: "Roadmap",
      icon: <Map className="w-4 h-4" />,
    },
    {
      id: "fundamentals",
      label: "Fundamentals",
      icon: <Compass className="w-4 h-4" />,
    },
    {
      id: "theory-practical",
      label: "Theory & Practical",
      icon: <Layers className="w-4 h-4" />,
    },
    {
      id: "notes-docs",
      label: "Notes / Docs",
      icon: <BookOpen className="w-4 h-4" />,
    },
  ];

  const handleTabSelect = (tabId: CatWorkspaceTab) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToNotes = (chapterId?: string) => {
    setSelectedNoteChapterId(chapterId);
    setActiveTab("notes-docs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen space-y-6 fade-in pb-16">
      {/* ── TOP UNIFIED NAVIGATION BAR & TABS ── */}
      <div className="sticky top-14 sm:top-16 z-30 bg-background/85 backdrop-blur-md border-b border-outline-variant/60 py-3.5 px-4 sm:px-6 lg:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Left: Back Link & Portal Title */}
          <div className="flex items-center space-x-4 shrink-0">
            {onBackToPaths && (
              <button
                type="button"
                onClick={onBackToPaths}
                className="inline-flex items-center space-x-1.5 text-xs font-mono text-secondary hover:text-primary transition-colors cursor-pointer pr-3 border-r border-outline-variant/60"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Paths</span>
              </button>
            )}

            <div className="flex items-center space-x-2">
              <span className="font-display text-base sm:text-lg font-semibold text-on-surface">
                CAT Universe
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                Workspace
              </span>
            </div>
          </div>

          {/* Right / Center: Segmented Navigation Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar p-1 rounded-xl bg-surface-container border border-outline-variant/80 max-w-full">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabSelect(tab.id)}
                  className={`inline-flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                    isActive
                      ? "bg-surface-container-high text-primary font-semibold border border-primary/40 shadow-xs"
                      : "text-secondary hover:text-on-surface hover:bg-surface-container-low border border-transparent"
                  }`}
                >
                  <span className={isActive ? "text-primary" : "text-secondary"}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── ACTIVE FULL-WIDTH CONTENT AREA ── */}
      <main className="w-full">
        {/* 1. ROADMAP (FULL WIDTH) */}
        {activeTab === "roadmap" && (
          <div className="w-full fade-in">
            <CatRoadmapTab
              completedStages={completedStages}
              completedActions={completedActions}
              onToggleStage={onToggleStage}
              onToggleAction={onToggleAction}
              onNavigateNotes={(noteId) => handleNavigateToNotes(noteId)}
              initialStageId={initialStageId}
            />
          </div>
        )}

        {/* 2. FUNDAMENTALS (FULL WIDTH) */}
        {activeTab === "fundamentals" && (
          <div className="w-full fade-in">
            <CatFundamentalsView
              onNavigateTab={(tab) => {
                if (tab === "roadmap") handleTabSelect("roadmap");
                if (tab === "theory-practical")
                  handleTabSelect("theory-practical");
                if (tab === "notes-docs") handleTabSelect("notes-docs");
              }}
            />
          </div>
        )}

        {/* 3. THEORY & PRACTICAL (FULL WIDTH) */}
        {activeTab === "theory-practical" && (
          <div className="w-full fade-in">
            <CatSubjectsTab
              onNavigateNotes={(chapterId) => handleNavigateToNotes(chapterId)}
              onNavigateLibrary={() => handleTabSelect("notes-docs")}
            />
          </div>
        )}

        {/* 4. NOTES / DOCS (FULL WIDTH) */}
        {activeTab === "notes-docs" && (
          <div className="w-full fade-in">
            <CatNotesDocsView
              initialChapterId={selectedNoteChapterId}
              onNavigatePractice={onNavigatePractice}
            />
          </div>
        )}
      </main>
    </div>
  );
};
