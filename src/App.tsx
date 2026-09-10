import { useState, useEffect } from "react";
import { Navbar } from "./components/common/Navbar";
import { SearchModal } from "./components/common/SearchModal";
import { SignInModal } from "./components/common/SignInModal";
import { HeroSection } from "./components/home/HeroSection";
import { CategoryCard } from "./components/home/CategoryCard";
import { OnboardingModal } from "./components/onboarding/OnboardingModal";
import { CatHeaderNav } from "./components/cat/CatHeaderNav";
import type { CatTabType } from "./components/cat/CatHeaderNav";
import { CatOverviewTab } from "./components/cat/CatOverviewTab";
import { CatRoadmapTab } from "./components/cat/CatRoadmapTab";
import { CatSubjectsTab } from "./components/cat/CatSubjectsTab";
import { CatPracticeTab } from "./components/cat/CatPracticeTab";
import { CatExamInfoModal } from "./components/cat/CatExamInfoModal";
import { NotesLayout } from "./components/notes/NotesLayout";
import { FieldGuideView } from "./components/field/FieldGuideView";

import { FIELDS_DATA } from "./data/fields";
import type { FieldCategory, FieldId } from "./types/field";
import { useOnboarding } from "./hooks/useOnboarding";
import { useRoadmapProgress } from "./hooks/useRoadmapProgress";
import { ArrowRight } from "lucide-react";

export function App() {
  const [currentView, setCurrentView] = useState<"home" | "cat" | "field">(
    "home",
  );
  const [catTab, setCatTab] = useState<CatTabType>("overview");
  const [selectedFieldId, setSelectedFieldId] = useState<FieldId>("JEE");
  const [activeNoteChapterId, setActiveNoteChapterId] = useState<string>(
    "percentages-multipliers",
  );

  // Modals
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isCatExamModalOpen, setIsCatExamModalOpen] = useState(false);

  // Custom Hooks
  const { isOnboarded, saveAnswers, recommendation } = useOnboarding();
  const { completedStages, completedActions, toggleStage, toggleAction } =
    useRoadmapProgress();

  // AUTOMATIC ONBOARDING PROMPT FOR NEW USERS
  useEffect(() => {
    try {
      const hasDismissed = sessionStorage.getItem("notera_dismissed_welcome_onboarding");
      if (!isOnboarded && !hasDismissed) {
        const timer = setTimeout(() => {
          setIsOnboardingOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [isOnboarded]);

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
    setIsOnboardingOpen(false);
    try {
      sessionStorage.setItem("notera_dismissed_welcome_onboarding", "true");
    } catch {
      // Ignore
    }
  };

  const handleSelectField = (field: FieldCategory) => {
    if (field.available === false && field.id !== "CAT") {
      return;
    }
    if (field.id === "CAT") {
      if (!isOnboarded) {
        setIsOnboardingOpen(true);
      } else {
        setCurrentView("cat");
        setCatTab("overview");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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
      const found = FIELDS_DATA.find((f) => f.id === fieldId);
      if (found && found.available !== false) {
        setSelectedFieldId(fieldId);
        setCurrentView("field");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleOnboardingComplete = (answers: any) => {
    saveAnswers(answers);
    setIsOnboardingOpen(false);
    setCurrentView("cat");
    setCatTab("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/20 selection:text-on-surface pb-16">
      {/* Persistent Editorial Navigation */}
      <Navbar
        currentView={currentView}
        activeFieldId={selectedFieldId}
        onNavigateHome={handleNavigateHome}
        onNavigateCat={handleNavigateCat}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
      />

      {/* NEW SCHOLAR WELCOME BANNER (If not yet onboarded) */}
      {!isOnboarded && currentView === "home" && (
        <div className="bg-surface-container border-b border-outline-variant py-2.5 px-6 lg:px-12 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 fade-in">
          <div className="flex items-center space-x-2 text-secondary text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse flex-shrink-0" />
            <span>
              <strong className="text-on-surface">New to Notera?</strong>{" "}
              Complete our 4-question diagnostic interview to calibrate your
              personalized roadmap &amp; notes.
            </span>
          </div>
          <button
            onClick={() => setIsOnboardingOpen(true)}
            className="font-semibold text-primary hover:text-primary-hover flex items-center space-x-1 underline cursor-pointer"
          >
            <span>Start 60-Sec Diagnostic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* VIEW 1: UNIVERSAL DISCOVERY HOMEPAGE */}
      {currentView === "home" && (
        <main className="fade-in">
          {/* Hero */}
          <HeroSection />

          {/* Path Exploration Section */}
          <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20" id="paths">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-outline-variant">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-tertiary block mb-2 font-medium">
                  Curated Fields of Study
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal">
                  Choose your path
                </h2>
              </div>
              <p className="text-secondary text-xs sm:text-sm mt-3 sm:mt-0 max-w-xs font-normal">
                Each domain opens a dedicated learning universe with syllabus
                maps, foundational doctrine, and guided progression.
              </p>
            </div>

            {/* Editorial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FIELDS_DATA.map((field) => (
                <CategoryCard
                  key={field.id}
                  field={field}
                  onSelect={handleSelectField}
                />
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW 2: DEDICATED CAT UNIVERSE */}
      {currentView === "cat" && (
        <section className="min-h-screen fade-in">
          <CatHeaderNav
            activeTab={catTab}
            onTabChange={setCatTab}
            onBackToPaths={handleNavigateHome}
            recommendation={recommendation}
            onRetakeOnboarding={() => setIsOnboardingOpen(true)}
          />

          {catTab === "overview" && (
            <CatOverviewTab
              onNavigateTab={(tab, chapterId) =>
                handleNavigateCat(tab, chapterId)
              }
              recommendation={recommendation}
              onOpenExamModal={() => setIsCatExamModalOpen(true)}
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
            />
          )}

          {catTab === "notes" && (
            <NotesLayout
              initialChapterId={activeNoteChapterId}
              onNavigatePractice={() => setCatTab("practice")}
            />
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
            if (!isOnboarded) {
              setIsOnboardingOpen(true);
            } else {
              handleNavigateCat("overview");
            }
          }}
        />
      )}

      {/* Onboarding Questionnaire Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={handleCloseOnboarding}
        onComplete={handleOnboardingComplete}
      />

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectField={handleSelectFieldById}
        onSelectCatTab={handleNavigateCat}
      />

      {/* Sign In & Sanctuary Pass Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
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
