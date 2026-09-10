import React, { useState, useEffect } from "react";
import { Search, BookOpen, Map, GraduationCap, ArrowRight, FileText } from "lucide-react";
import { Modal } from "./Modal";
import { FIELDS_DATA } from "../../data/fields";
import { CAT_ROADMAP_STAGES } from "../../data/catRoadmap";
import { CAT_NOTES } from "../../data/catNotes";
import { ALL_RESOURCES } from "../../data/resources";
import { StorageService } from "../../services/storageService";
import type { FieldId } from "../../types/field";
import type { CatTabType } from "../cat/CatHeaderNav";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectField: (fieldId: FieldId) => void;
  onSelectCatTab: (tab: CatTabType, chapterId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectField,
  onSelectCatTab,
}) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const trimmed = query.trim().toLowerCase();

  const matchingResources = trimmed
    ? ALL_RESOURCES.filter(
        (r) =>
          r.title.toLowerCase().includes(trimmed) ||
          r.description.toLowerCase().includes(trimmed) ||
          r.topic?.toLowerCase().includes(trimmed) ||
          r.subject?.toLowerCase().includes(trimmed) ||
          r.tags?.some((t) => t.toLowerCase().includes(trimmed))
      )
    : [];

  const matchingFields = trimmed
    ? FIELDS_DATA.filter(
        (f) =>
          f.title.toLowerCase().includes(trimmed) ||
          f.subtitle.toLowerCase().includes(trimmed) ||
          f.description.toLowerCase().includes(trimmed),
      )
    : [];

  const matchingRoadmap = trimmed
    ? CAT_ROADMAP_STAGES.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.description.toLowerCase().includes(trimmed) ||
          s.phase.toLowerCase().includes(trimmed),
      )
    : [];

  const matchingNotes = trimmed
    ? Object.values(CAT_NOTES).filter(
        (n) =>
          n.title.toLowerCase().includes(trimmed) ||
          n.subjectTitle.toLowerCase().includes(trimmed) ||
          n.overview.content.some((c) => c.toLowerCase().includes(trimmed)),
      )
    : [];

  const hasResults =
    matchingResources.length > 0 ||
    matchingFields.length > 0 ||
    matchingRoadmap.length > 0 ||
    matchingNotes.length > 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="space-y-4">
        {/* Search Header Input */}
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search notes, PDFs, formulas, roadmap stages..."
            className="w-full bg-surface-container border border-outline-variant rounded-[12px] pl-11 pr-4 py-3 text-sm text-on-surface placeholder-secondary/70 focus:outline-none focus:border-primary focus:bg-surface transition-all"
          />
          <Search className="w-5 h-5 text-secondary absolute left-3.5 top-3.5" />
        </div>

        {/* Quick Suggestion Chips */}
        {!trimmed && (
          <div className="pt-2">
            <span className="text-xs uppercase font-mono tracking-wider text-secondary block mb-2">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Percentages PDF",
                "Algebra Codex",
                "Geometry Theorems",
                "CAT Roadmap",
                "DILR Matrix",
                "RC Deconstruction",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-xs text-secondary hover:text-primary hover:border-primary transition-all cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {trimmed && (
          <div className="space-y-6 pt-2 max-h-[60vh] overflow-y-auto pr-1">
            {!hasResults && (
              <div className="text-center py-8 text-secondary text-sm">
                No entries found for "{query}". Try searching for{" "}
                <span className="text-primary font-medium">Percentages</span>,{" "}
                <span className="text-primary font-medium">Algebra</span>, or{" "}
                <span className="text-primary font-medium">PDF</span>.
              </div>
            )}

            {/* Matching Public PDF Resources */}
            {matchingResources.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1.5 mb-2">
                  <FileText className="w-3.5 h-3.5" /> PDF Library &amp; Codices (
                  {matchingResources.length})
                </span>
                <div className="space-y-2">
                  {matchingResources.map((res) => (
                    <div
                      key={res.id}
                      className="w-full p-3 rounded-[12px] bg-surface-container border border-outline-variant hover:border-primary transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs text-secondary font-mono flex items-center gap-2">
                          <span className="text-primary font-semibold">{res.type}</span>
                          <span>•</span>
                          <span>{res.subject} ({res.topic})</span>
                          <span>•</span>
                          <span>{res.fileSize}</span>
                        </div>
                        <div className="text-sm font-display font-medium text-on-surface">
                          {res.title}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            onClose();
                            StorageService.openResource(res);
                          }}
                          className="px-2.5 py-1 text-xs bg-primary text-on-primary rounded font-medium hover:bg-primary-hover transition-colors cursor-pointer"
                        >
                          Read PDF
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onSelectCatTab("resources");
                          }}
                          className="p-1 text-secondary hover:text-primary transition-colors cursor-pointer"
                          title="View in Library"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Notes */}
            {matchingNotes.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5 mb-2">
                  <BookOpen className="w-3.5 h-3.5" /> Digital Notes (
                  {matchingNotes.length})
                </span>
                <div className="space-y-2">
                  {matchingNotes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        onClose();
                        onSelectCatTab("notes", note.id);
                      }}
                      className="w-full text-left p-3 rounded-[12px] bg-surface-container hover:bg-surface border border-outline-variant hover:border-primary transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs text-secondary font-mono">
                          {note.chapterNumber} • {note.subjectTitle}
                        </div>
                        <div className="text-sm font-display font-medium text-on-surface group-hover:text-primary transition-colors">
                          {note.title}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Roadmap */}
            {matchingRoadmap.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5 mb-2">
                  <Map className="w-3.5 h-3.5" /> Roadmap Stages (
                  {matchingRoadmap.length})
                </span>
                <div className="space-y-2">
                  {matchingRoadmap.map((stage) => (
                    <button
                      key={stage.id}
                      onClick={() => {
                        onClose();
                        onSelectCatTab("journey");
                      }}
                      className="w-full text-left p-3 rounded-[12px] bg-surface-container hover:bg-surface border border-outline-variant hover:border-primary transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-xs text-secondary font-mono">
                          Stage {stage.stageNumber} • {stage.phase}
                        </div>
                        <div className="text-sm font-display font-medium text-on-surface group-hover:text-primary transition-colors">
                          {stage.title}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Academic Fields */}
            {matchingFields.length > 0 && (
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-tertiary font-semibold flex items-center gap-1.5 mb-2">
                  <GraduationCap className="w-3.5 h-3.5" /> Academic Fields (
                  {matchingFields.length})
                </span>
                <div className="space-y-2">
                  {matchingFields.map((field) => (
                    <button
                      key={field.id}
                      onClick={() => {
                        onClose();
                        onSelectField(field.id);
                      }}
                      className="w-full text-left p-3 rounded-[12px] bg-surface-container hover:bg-surface border border-outline-variant hover:border-primary transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="text-sm font-display font-medium text-on-surface group-hover:text-primary transition-colors">
                          {field.title} — {field.subtitle}
                        </div>
                        <div className="text-xs text-secondary line-clamp-1">
                          {field.description}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
