import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-outline-variant bg-surface-container/50 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-secondary">
        <div className="flex items-center space-x-3">
          <span className="w-6 h-6 rounded-full border border-primary/60 flex items-center justify-center font-display italic text-primary text-xs">
            G
          </span>
          <span className="font-display text-base text-on-surface">Guide</span>
          <span>• An Intellectual Sanctuary for Indian Students</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hover:text-primary transition-colors">
            Curriculum Ethics
          </button>
          <button className="hover:text-primary transition-colors">
            Institutional Affiliations
          </button>
          <button className="hover:text-primary transition-colors">
            Distraction-Free Privacy
          </button>
        </div>
      </div>
    </footer>
  );
};
