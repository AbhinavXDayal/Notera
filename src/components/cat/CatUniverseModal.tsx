import React, { useEffect } from "react";
import { X } from "lucide-react";
import { CatOverviewTab } from "./CatOverviewTab";
import type { CatTabType } from "./CatOverviewTab";

interface CatUniverseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab?: (tab: CatTabType, chapterId?: string) => void;
  onOpenFundamentals?: () => void;
}

export const CatUniverseModal: React.FC<CatUniverseModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenFundamentals,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-1 sm:p-2 md:p-3 transition-opacity duration-300">
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Full-width Modal Card */}
      <div className="relative z-10 w-full h-[98vh] sm:h-[97vh] bg-surface border border-outline-variant rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300 fade-in">
        {/* Sticky Top Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-8 py-3.5 bg-surface/95 backdrop-blur-md border-b border-outline-variant/60 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
              CAT Universe
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-secondary hover:text-on-surface p-1.5 rounded-full hover:bg-surface-container transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto px-2 sm:px-5 md:px-8 py-4">
          <CatOverviewTab
            onNavigateTab={onNavigateTab}
            onBackToPaths={onClose}
            onOpenFundamentals={onOpenFundamentals}
          />
        </div>
      </div>
    </div>
  );
};
