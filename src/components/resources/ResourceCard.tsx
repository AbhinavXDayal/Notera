import React from "react";
import {
  FileText,
  BookOpen,
  Download,
  ExternalLink,
  Layers,
  Sparkles,
  Calendar,
} from "lucide-react";
import type { EducationalResource } from "../../types/resource";
import { StorageService } from "../../services/storageService";

interface ResourceCardProps {
  resource: EducationalResource;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const handleRead = () => {
    StorageService.openResource(resource);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    StorageService.downloadResource(resource);
  };

  const getTypeIcon = () => {
    switch (resource.type) {
      case "Formula Sheet":
        return <Sparkles className="w-3.5 h-3.5 text-tertiary" />;
      case "Notes":
        return <BookOpen className="w-3.5 h-3.5 text-primary" />;
      case "Guide":
        return <Layers className="w-3.5 h-3.5 text-secondary" />;
      default:
        return <FileText className="w-3.5 h-3.5 text-primary" />;
    }
  };

  return (
    <div className="bg-surface-container border border-outline-variant hover:border-primary/60 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-terra-card hover:bg-surface group">
      <div>
        {/* Header Tag and Subject Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-surface border border-outline-variant text-[11px] font-mono text-secondary">
            {getTypeIcon()}
            <span className="font-medium text-on-surface">{resource.type}</span>
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-mono text-secondary/80">
            {resource.subject && (
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-semibold">
                {resource.subject}
              </span>
            )}
            {resource.topic && (
              <span className="hidden sm:inline-block">{resource.topic}</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-on-surface font-medium leading-snug group-hover:text-primary transition-colors">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-secondary mt-2 leading-relaxed line-clamp-3">
          {resource.description}
        </p>

        {/* Tag pills */}
        {resource.tags && resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {resource.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono bg-surface border border-outline-variant/60 text-secondary/80 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer & Actions */}
      <div className="mt-5 pt-3.5 border-t border-outline-variant">
        {/* Metadata info */}
        <div className="flex items-center justify-between text-[11px] font-mono text-secondary/70 mb-3">
          <span className="flex items-center space-x-1">
            <span>{resource.fileSize}</span>
            {resource.pages && (
              <>
                <span>•</span>
                <span>{resource.pages} pages</span>
              </>
            )}
          </span>

          <span className="flex items-center space-x-1">
            <Calendar className="w-3 h-3 text-secondary/50" />
            <span>{resource.createdAt}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleRead}
            className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-primary text-on-primary text-xs font-semibold hover:bg-primary-hover transition-all cursor-pointer shadow-sm"
          >
            <span>Read PDF</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-surface border border-outline-variant text-on-surface hover:border-primary hover:bg-surface-container text-xs font-medium transition-all cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-secondary" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};
