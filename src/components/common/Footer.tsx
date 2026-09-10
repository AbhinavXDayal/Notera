import React from "react";
import { Logo } from "./Logo";

interface FooterProps {
  onNavigateHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateHome }) => {
  return (
    <footer className="border-t border-outline-variant bg-surface-container/50 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-secondary">
        <div className="flex items-center space-x-3">
          <button
            onClick={onNavigateHome}
            className="cursor-pointer focus:outline-none"
            aria-label="Notera Home"
          >
            <Logo size="sm" showText={true} />
          </button>
          <span className="text-outline-variant">•</span>
          <span className="font-light">An Intellectual Sanctuary for Students</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hover:text-primary transition-colors cursor-pointer">
            Curriculum Ethics
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer">
            Institutional Affiliations
          </button>
          <button className="hover:text-primary transition-colors cursor-pointer">
            Distraction-Free Privacy
          </button>
        </div>
      </div>
    </footer>
  );
};
