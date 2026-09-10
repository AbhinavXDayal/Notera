import React, { useState, useMemo } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { ALL_RESOURCES } from "../../data/resources";
import { ResourceCard } from "./ResourceCard";

interface ResourceLibraryViewProps {
  initialField?: string;
}

export const ResourceLibraryView: React.FC<ResourceLibraryViewProps> = ({
  initialField = "CAT",
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>("ALL");
  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const subjects = ["ALL", "QA", "VARC", "DILR", "Strategy"];
  const resourceTypes = ["ALL", "Formula Sheet", "Notes", "Guide", "Document", "PDF"];

  const filteredResources = useMemo(() => {
    return ALL_RESOURCES.filter((res) => {
      if (initialField && res.field.toUpperCase() !== initialField.toUpperCase()) {
        return false;
      }
      if (selectedSubject !== "ALL" && res.subject?.toUpperCase() !== selectedSubject.toUpperCase()) {
        return false;
      }
      if (selectedType !== "ALL" && res.type !== selectedType) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesDesc = res.description.toLowerCase().includes(q);
        const matchesTopic = res.topic?.toLowerCase().includes(q);
        const matchesTags = res.tags?.some((t) => t.toLowerCase().includes(q));
        return matchesTitle || matchesDesc || matchesTopic || matchesTags;
      }
      return true;
    });
  }, [initialField, selectedSubject, selectedType, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 fade-in">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-outline-variant gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-xs uppercase tracking-widest text-tertiary font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Public Digital Library &amp; PDF Codices</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-normal tracking-tight">
            Canonical Notes, Formula Sheets &amp; Study PDFs
          </h2>

          <p className="text-secondary text-sm max-w-2xl mt-2 leading-relaxed">
            All educational resources are publicly accessible. Open directly in
            your browser or download for offline study without an account.
          </p>
        </div>

        <div className="text-xs font-mono text-tertiary bg-surface-container border border-outline-variant px-3 py-1.5 rounded-lg self-start md:self-auto">
          {filteredResources.length} Reference Documents Available
        </div>
      </div>

      {/* Filter & Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Subject Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-xs font-mono text-secondary flex items-center space-x-1 mr-1">
            <Filter className="w-3 h-3" />
            <span>Subject:</span>
          </span>
          {subjects.map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedSubject === sub
                  ? "bg-primary text-on-primary font-semibold shadow-sm"
                  : "bg-surface-container border border-outline-variant text-secondary hover:text-on-surface hover:border-primary/40"
              }`}
            >
              {sub === "ALL" ? "All Subjects" : sub}
            </button>
          ))}
        </div>

        {/* Search input & Type Filter */}
        <div className="flex items-center gap-3">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-surface-container border border-outline-variant rounded-lg px-3 py-2 text-xs text-on-surface focus:outline-none focus:border-primary cursor-pointer font-mono"
          >
            {resourceTypes.map((t) => (
              <option key={t} value={t}>
                {t === "ALL" ? "All Formats" : t}
              </option>
            ))}
          </select>

          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search PDF or topic..."
              className="w-full bg-surface-container border border-outline-variant rounded-lg pl-8 pr-3 py-2 text-xs text-on-surface placeholder-secondary/60 focus:outline-none focus:border-primary"
            />
            <Search className="w-3.5 h-3.5 text-secondary absolute left-2.5 top-2.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 bg-surface-container/40 rounded-2xl border border-dashed border-outline-variant p-8">
          <p className="text-secondary text-sm">
            No resources match your current filter.
          </p>
          <button
            onClick={() => {
              setSelectedSubject("ALL");
              setSelectedType("ALL");
              setSearchQuery("");
            }}
            className="mt-3 text-xs text-primary font-semibold underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
};
