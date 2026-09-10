import React from "react";
import type { TocItem } from "../../types/notes";

interface TableOfContentsProps {
  items: TocItem[];
  activeId: string;
  onSelect: (id: string) => void;
  scrollProgress: number;
  currentPage: number;
  totalPages: number;
  chapterTitle: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeId,
  onSelect,
  scrollProgress,
  currentPage,
  totalPages,
  chapterTitle,
}) => {
  return (
    <aside className="sticky top-36 space-y-6 hidden lg:block pr-4 border-r border-outline-variant text-xs">
      <div className="space-y-1">
        <span className="font-mono uppercase tracking-widest text-tertiary font-semibold text-[10px]">
          Textbook Codex
        </span>
        <h4 className="font-display text-lg text-on-surface line-clamp-2">
          {chapterTitle}
        </h4>
      </div>

      <nav className="space-y-2 text-secondary">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`block w-full text-left pl-2.5 py-0.5 border-l-2 transition-all cursor-pointer ${
                isActive
                  ? "font-medium text-primary border-primary bg-primary/5"
                  : "hover:text-primary border-transparent"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-outline-variant space-y-2">
        <span className="text-[10px] uppercase font-mono text-secondary">
          Document Progress
        </span>
        <div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="text-[11px] text-secondary flex justify-between font-mono">
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <span>{scrollProgress}% Completed</span>
        </div>
      </div>
    </aside>
  );
};
