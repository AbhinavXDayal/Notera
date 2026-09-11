import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Logo } from "./Logo";
import type { FieldId } from "../../types/field";

interface NavbarProps {
  currentView?: "home" | "cat" | "field";
  activeFieldId?: FieldId;
  onNavigateHome: () => void;
  onNavigateCat?: (
    tab?:
      | "overview"
      | "journey"
      | "subjects"
      | "notes"
      | "practice"
      | "resources",
  ) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateHome,
  onOpenSearch,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the very top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling DOWN -> Hide header smoothly
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> Reveal header
        setIsVisible(true);
      }

      lastScrollY.current = Math.max(0, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-transparent backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onNavigateHome}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Notera Home"
          >
            <Logo size="sm" />
          </button>
        </div>

        {/* Right Action Items & Sleek Search Pill */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            className="relative hidden sm:flex items-center group cursor-pointer text-left focus:outline-none"
            aria-label="Open global search"
          >
            <div className="bg-surface-container-low/60 hover:bg-surface-container/80 backdrop-blur-sm border border-outline-variant/40 group-hover:border-primary/50 rounded-full pl-9 pr-2.5 py-1.5 text-xs text-secondary/80 group-hover:text-on-surface transition-all duration-300 w-52 sm:w-60 hover:w-64 focus-within:w-64 flex items-center justify-between shadow-xs group-hover:shadow-[0_0_16px_rgba(216,195,165,0.14)]">
              <span className="truncate pr-2 font-normal">
                Search notes, PDFs, topics...
              </span>
              <kbd className="text-[10px] font-mono font-medium bg-surface-container-lowest/90 group-hover:bg-surface-container-lowest border border-outline-variant/60 group-hover:border-primary/40 px-1.5 py-0.5 rounded text-primary/80 shadow-xs shrink-0 transition-colors">
                ⌘K
              </kbd>
            </div>
            <Search className="w-3.5 h-3.5 text-secondary absolute left-3.5 pointer-events-none group-hover:text-primary transition-colors duration-200" />
          </button>

          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 rounded-full bg-surface-container/50 hover:bg-surface-container/80 backdrop-blur-sm border border-outline-variant/40 text-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
