import { useState, useEffect, useMemo } from "react";
import { Navbar } from "./components/common/Navbar";
import { SearchModal } from "./components/common/SearchModal";
import { HeroSection } from "./components/home/HeroSection";
import { RecommendedHeroBanner } from "./components/home/RecommendedHeroBanner";
import { CategoryCard } from "./components/home/CategoryCard";
import { VisitorOnboardingModal } from "./components/onboarding/VisitorOnboardingModal";
import { CatOverviewTab } from "./components/cat/CatOverviewTab";
import type { CatTabType } from "./components/cat/CatOverviewTab";
import { CatRoadmapTab } from "./components/cat/CatRoadmapTab";
import { CatSubjectsTab } from "./components/cat/CatSubjectsTab";
import { CatPracticeTab } from "./components/cat/CatPracticeTab";
import { CatExamInfoModal } from "./components/cat/CatExamInfoModal";
import { NotesLayout } from "./components/notes/NotesLayout";
import { ResourceLibraryView } from "./components/resources/ResourceLibraryView";
import { FieldGuideView } from "./components/field/FieldGuideView";
import { KnowledgeMapBackground } from "./components/background/KnowledgeMapBackground";

import { FIELDS_DATA } from "./data/fields";
import type { FieldCategory, FieldId } from "./types/field";
import { useVisitorPreferences } from "./hooks/useVisitorPreferences";
import { useRoadmapProgress } from "./hooks/useRoadmapProgress";

export function App() {
  const [currentView, setCurrentView] = useState<"home" | "cat" | "field">(
    "home",
  );
  const [catTab, setCatTab] = useState<CatTabType>("overview");
  const [selectedFieldId, setSelectedFieldId] = useState<FieldId>("JEE");
  const [activeNoteChapterId, setActiveNoteChapterId] = useState<string>(
    "percentages-multipliers",
  );

  // Modals (all closed by default - zero automatic popups)
  const [isVisitorOnboardingOpen, setIsVisitorOnboardingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCatExamModalOpen, setIsCatExamModalOpen] = useState(false);

  // Visitor Preferences & Recommendations
  const {
    preferences,
    hasCompletedOnboarding,
    savePreferences,
    resetPreferences,
    recommendation,
  } = useVisitorPreferences();

  // Interactive CAT Roadmap check state
  const { completedStages, completedActions, toggleStage, toggleAction } =
    useRoadmapProgress();

  // Dynamic Background Variant per section
  const backgroundVariant = useMemo(() => {
    if (currentView === "home") return "hero";
    if (currentView === "cat") {
      if (catTab === "journey") return "roadmap";
      if (catTab === "notes") return "reading";
      if (catTab === "resources") return "subtle";
      return "subtle";
    }
    return "subtle";
  }, [currentView, catTab]);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCloseOnboarding = () => {
    setIsVisitorOnboardingOpen(false);
    try {
      sessionStorage.setItem("notera_dismissed_visitor_onboarding", "true");
    } catch {
      // Ignore
    }
  };

  const handleOnboardingComplete = (data: {
    interests: string[];
    level: string;
    goals: string[];
  }) => {
    savePreferences(data);
    setIsVisitorOnboardingOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectField = (field: FieldCategory) => {
    if (field.available === false) {
      return;
    }
    if (field.id === "CAT") {
      setCurrentView("cat");
      setCatTab("overview");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedFieldId(field.id);
      setCurrentView("field");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectFieldById = (fieldId: FieldId) => {
    if (fieldId === "CAT") {
      handleSelectField(FIELDS_DATA[0]);
    } else {
      setSelectedFieldId(fieldId);
      setCurrentView("field");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigateCat = (
    tab: CatTabType = "overview",
    chapterId?: string,
  ) => {
    setCurrentView("cat");
    setCatTab(tab);
    if (chapterId) {
      setActiveNoteChapterId(chapterId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateHome = () => {
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRecommendationCta = () => {
    if (recommendation.targetView === "cat") {
      setCurrentView("cat");
      setCatTab(recommendation.targetTab || "overview");
      if (recommendation.targetChapterId) {
        setActiveNoteChapterId(recommendation.targetChapterId);
      }
    } else if (recommendation.targetView === "field") {
      setSelectedFieldId((recommendation.targetFieldId || "JEE") as FieldId);
      setCurrentView("field");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSecondaryLinkClick = (link: {
    targetTab?: CatTabType;
    targetChapterId?: string;
    targetView?: "home" | "cat" | "field";
    targetFieldId?: string;
  }) => {
    if (link.targetView === "cat" || !link.targetView) {
      setCurrentView("cat");
      if (link.targetTab) {
        setCatTab(link.targetTab);
      }
      if (link.targetChapterId) {
        setActiveNoteChapterId(link.targetChapterId);
      }
    } else if (link.targetView === "field") {
      setSelectedFieldId((link.targetFieldId || "JEE") as FieldId);
      setCurrentView("field");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sort fields so visitor's selected interests appear first and are highlighted
  const sortedFields = useMemo(() => {
    if (!preferences || preferences.interests.length === 0) {
      return FIELDS_DATA;
    }

    const interestKeys = preferences.interests.map((i) => {
      if (i === "Computer Science") return "COMPSCI";
      if (i === "Class 12") return "CLASS_12";
      if (i === "Class 10") return "CLASS_10";
      return i.toUpperCase();
    });

    return [...FIELDS_DATA].sort((a, b) => {
      const aMatch = interestKeys.includes(a.id);
      const bMatch = interestKeys.includes(b.id);
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  }, [preferences]);

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-on-surface relative">
      {/* Dynamic Knowledge Map Background Layer (Dot Matrix, Floating Nodes & Constellations) */}
      <KnowledgeMapBackground variant={backgroundVariant} />

      {/* Main Interactive Website Layer */}
      <div className="relative z-10">
        {/* Persistent Editorial Navigation */}
        <Navbar
          currentView={currentView}
          activeFieldId={selectedFieldId}
          onNavigateHome={handleNavigateHome}
          onNavigateCat={handleNavigateCat}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* VIEW 1: UNIVERSAL DISCOVERY HOMEPAGE */}
        {currentView === "home" && (
          <main className="max-w-7xl mx-auto px-6 lg:px-12 py-6 fade-in">
            {/* Personalized Recommendation Hero Banner for Returning/Calibrated Visitors */}
            {hasCompletedOnboarding && (
              <RecommendedHeroBanner
                recommendation={recommendation}
                onCtaClick={handleRecommendationCta}
                onSecondaryClick={handleSecondaryLinkClick}
                onUpdatePreferences={() => setIsVisitorOnboardingOpen(true)}
                onResetPreferences={resetPreferences}
              />
            )}

            {/* Streamlined Header */}
            <HeroSection />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sortedFields.map((field) => {
                const isRecommended = Boolean(
                  preferences?.interests.some((i) => {
                    if (i === "Computer Science" && field.id === "COMPSCI")
                      return true;
                    if (i === "Class 12" && field.id === "CLASS_12")
                      return true;
                    if (i === "Class 10" && field.id === "CLASS_10")
                      return true;
                    return i.toUpperCase() === field.id;
                  }),
                );

                return (
                  <CategoryCard
                    key={field.id}
                    field={field}
                    onSelect={handleSelectField}
                    isRecommended={isRecommended}
                  />
                );
              })}
            </div>
          </main>
        )}

        {/* VIEW 2: DEDICATED CAT UNIVERSE */}
        {currentView === "cat" && (
          <section className="min-h-screen fade-in pb-16">
            {catTab === "overview" && (
              <CatOverviewTab
                onNavigateTab={(tab, chapterId) =>
                  handleNavigateCat(tab, chapterId)
                }
                onBackToPaths={handleNavigateHome}
              />
            )}

            {catTab === "journey" && (
              <CatRoadmapTab
                completedStages={completedStages}
                completedActions={completedActions}
                onToggleStage={toggleStage}
                onToggleAction={toggleAction}
                onNavigateNotes={(noteId) => handleNavigateCat("notes", noteId)}
              />
            )}

            {catTab === "subjects" && (
              <CatSubjectsTab
                onNavigateNotes={(chapterId) =>
                  handleNavigateCat("notes", chapterId)
                }
                onNavigateLibrary={() => setCatTab("resources")}
              />
            )}

            {catTab === "notes" && (
              <NotesLayout
                initialChapterId={activeNoteChapterId}
                onNavigatePractice={() => setCatTab("practice")}
              />
            )}

            {catTab === "resources" && (
              <ResourceLibraryView initialField="CAT" />
            )}

            {catTab === "practice" && <CatPracticeTab />}
          </section>
        )}

        {/* VIEW 3: FIELD GUIDE FOR OTHER FIELDS (JEE, NEET, UPSC, etc.) */}
        {currentView === "field" && (
          <FieldGuideView
            fieldId={selectedFieldId}
            onBackToPaths={handleNavigateHome}
            onSelectCatPortal={() => {
              setCurrentView("cat");
              setCatTab("overview");
            }}
          />
        )}
      </div>

      {/* 3-Question Visitor Onboarding & Preference Modal */}
      <VisitorOnboardingModal
        isOpen={isVisitorOnboardingOpen}
        onClose={handleCloseOnboarding}
        onComplete={handleOnboardingComplete}
        initialInterests={preferences?.interests}
        initialLevel={preferences?.level}
        initialGoals={preferences?.goals}
      />

      {/* Universal Search Modal (⌘K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectField={handleSelectFieldById}
        onSelectCatTab={handleNavigateCat}
      />

      {/* Official CAT Blueprint & Scoring Modal */}
      <CatExamInfoModal
        isOpen={isCatExamModalOpen}
        onClose={() => setIsCatExamModalOpen(false)}
      />
    </div>
  );
}

export default App;
