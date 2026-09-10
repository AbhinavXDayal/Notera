import React from "react";
import { CAT_NOTES } from "../../data/catNotes";
import { BookOpen } from "lucide-react";

interface TopicSelectorProps {
  currentChapterId: string;
  onSelectChapter: (chapterId: string) => void;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  currentChapterId,
  onSelectChapter,
}) => {
  const chapters = Object.values(CAT_NOTES);

  return (
    <div className="bg-surface-container border border-outline-variant rounded-[12px] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center space-x-2 text-xs font-mono text-tertiary">
        <BookOpen className="w-4 h-4 text-tertiary" />
        <span className="uppercase font-semibold tracking-wider">
          Library Chapter Selector:
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {chapters.map((ch) => {
          const isCurrent = ch.id === currentChapterId;
          return (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isCurrent
                  ? "bg-primary text-on-primary shadow-terra-card"
                  : "bg-surface border border-outline-variant text-secondary hover:text-on-surface hover:border-primary"
              }`}
            >
              {ch.subjectTitle}: {ch.title.split(":")[0]}
            </button>
          );
        })}
      </div>
    </div>
  );
};
