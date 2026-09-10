import React, { useState } from "react";
import { CAT_NOTES } from "../../data/catNotes";
import { TableOfContents } from "./TableOfContents";
import { NoteContent } from "./NoteContent";
import { TopicSelector } from "./TopicSelector";
import { useReadingProgress } from "../../hooks/useReadingProgress";

interface NotesLayoutProps {
  initialChapterId?: string;
  onNavigatePractice?: () => void;
}

export const NotesLayout: React.FC<NotesLayoutProps> = ({
  initialChapterId = "percentages-multipliers",
  onNavigatePractice,
}) => {
  const [currentChapterId, setCurrentChapterId] =
    useState<string>(initialChapterId);

  const currentChapter =
    CAT_NOTES[currentChapterId] || CAT_NOTES["percentages-multipliers"];

  const tocIds = currentChapter.toc.map((t) => t.id);
  const { activeId, scrollProgress, scrollToSection } =
    useReadingProgress(tocIds);

  const handleChapterChange = (chapterId: string) => {
    setCurrentChapterId(chapterId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 space-y-10 fade-in">
      {/* Chapter & Subject Selector Bar */}
      <TopicSelector
        currentChapterId={currentChapterId}
        onSelectChapter={handleChapterChange}
      />

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sticky Table of Contents Sidebar */}
        <div className="lg:col-span-3">
          <TableOfContents
            items={currentChapter.toc}
            activeId={activeId}
            onSelect={scrollToSection}
            scrollProgress={scrollProgress}
            currentPage={currentChapter.currentPage}
            totalPages={currentChapter.totalPages}
            chapterTitle={currentChapter.title}
          />
        </div>

        {/* Reading Pane */}
        <div className="lg:col-span-9">
          <NoteContent
            chapter={currentChapter}
            onNavigateChapter={handleChapterChange}
            onNavigatePractice={onNavigatePractice}
          />
        </div>
      </div>
    </div>
  );
};
