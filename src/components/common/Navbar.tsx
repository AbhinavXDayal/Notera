import React from "react";
import { Search } from "lucide-react";
import { Logo } from "./Logo";
import type { FieldId } from "../../types/field";

interface NavbarProps {
  currentView: "home" | "cat" | "field";
  activeFieldId?: FieldId;
  onNavigateHome: () => void;
  onNavigateCat: (
    tab?: "overview" | "journey" | "subjects" | "notes" | "practice",
  ) => void;
  onOpenSearch: () => void;
  onOpenSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onNavigateCat,
  onOpenSearch,
  onOpenSignIn,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-outline-variant transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center">
          {/* Aesthetic Logo */}
          <button
            onClick={onNavigateHome}
            className="text-left focus:outline-none cursor-pointer"
            aria-label="Notera Home"
          >
            <Logo />
          </button>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary tracking-wide">
          <button
            onClick={onNavigateHome}
            className={`py-1 transition-colors relative cursor-pointer ${
              currentView === "home"
                ? 'text-primary font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
                : "hover:text-primary"
            }`}
          >
            Explore
          </button>
          <button
            onClick={() => onNavigateCat("journey")}
            className="hover:text-primary transition-colors py-1 text-left cursor-pointer"
          >
            Roadmaps
          </button>
          <button
            onClick={() => onNavigateCat("notes")}
            className="hover:text-primary transition-colors py-1 text-left cursor-pointer"
          >
            Notes
          </button>
        </nav>

        {/* Right Action Items & Search */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenSearch}
            className="relative hidden sm:flex items-center group cursor-pointer text-left"
          >
            <div className="bg-surface-container border border-outline-variant rounded-full pl-9 pr-4 py-1.5 text-xs text-secondary/80 group-hover:border-primary group-hover:bg-surface transition-all w-52 focus:w-64 flex items-center justify-between">
              <span>Search exam, topic...</span>
              <span className="text-[10px] font-mono bg-outline-variant/60 px-1.5 py-0.5 rounded text-secondary">
                ⌘K
              </span>
            </div>
            <Search className="w-3.5 h-3.5 text-secondary absolute left-3 pointer-events-none group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 text-secondary hover:text-primary cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenSignIn}
            className="text-xs tracking-wider uppercase font-semibold px-4 py-2 border border-outline-variant rounded-full text-on-surface hover:border-primary hover:bg-primary hover:text-on-primary transition-all duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};
