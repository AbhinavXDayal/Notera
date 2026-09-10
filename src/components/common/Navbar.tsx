import React, { useState, useEffect, useRef } from "react";
import { Search, Compass, GraduationCap } from "lucide-react";
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
  currentView = "home",
  onNavigateHome,
  onNavigateCat,
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
      className={`sticky top-0 z-40 backdrop-blur-xl bg-[#2b211a]/85 border-b border-outline-variant/40 shadow-[0_4px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Contextual Badge */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onNavigateHome}
            className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Notera Home"
          >
            <Logo size="sm" />
          </button>

          {/* Contextual Active Universe Badge */}
          {currentView === "cat" ? (
            <div className="hidden sm:flex items-center space-x-2 pl-3 border-l border-outline-variant/40">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide bg-surface-container-high/80 border border-primary/20 text-primary shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                CAT Universe
              </span>
            </div>
          ) : currentView === "field" ? (
            <div className="hidden sm:flex items-center space-x-2 pl-3 border-l border-outline-variant/40">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide bg-surface-container-high/80 border border-primary/20 text-primary shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Computer Science
              </span>
            </div>
          ) : null}
        </div>

        {/* Center / Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-1.5 bg-[#342820]/70 p-1 rounded-full border border-outline-variant/30 backdrop-blur-md">
          <button
            onClick={onNavigateHome}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
              currentView === "home"
                ? "bg-surface-container-highest text-primary border border-primary/20 shadow-xs"
                : "text-secondary hover:text-on-surface hover:bg-surface-container/50"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>All Paths</span>
          </button>

          {onNavigateCat && (
            <button
              onClick={() => onNavigateCat("overview")}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                currentView === "cat"
                  ? "bg-surface-container-highest text-primary border border-primary/20 shadow-xs"
                  : "text-secondary hover:text-on-surface hover:bg-surface-container/50"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>CAT</span>
            </button>
          )}
        </nav>

        {/* Right Action Items & Sleek Search Pill */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSearch}
            className="relative hidden sm:flex items-center group cursor-pointer text-left focus:outline-none"
            aria-label="Open global search"
          >
            <div className="bg-[#372b23]/70 hover:bg-[#46382f]/90 border border-outline-variant/50 group-hover:border-primary/50 rounded-full pl-9 pr-2.5 py-1.5 text-xs text-secondary/80 group-hover:text-on-surface transition-all duration-300 w-52 sm:w-60 hover:w-64 focus-within:w-64 flex items-center justify-between shadow-inner group-hover:shadow-[0_0_16px_rgba(216,195,165,0.12)]">
              <span className="truncate pr-2 font-normal">Search notes, PDFs, topics...</span>
              <kbd className="text-[10px] font-mono font-medium bg-[#2a201a]/90 group-hover:bg-[#231a15] border border-outline-variant/60 group-hover:border-primary/40 px-1.5 py-0.5 rounded text-primary/80 shadow-xs shrink-0 transition-colors">
                ⌘K
              </kbd>
            </div>
            <Search className="w-3.5 h-3.5 text-secondary absolute left-3.5 pointer-events-none group-hover:text-primary transition-colors duration-200" />
          </button>

          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            className="sm:hidden p-2 rounded-full bg-surface-container/60 hover:bg-surface-container border border-outline-variant/40 text-secondary hover:text-primary transition-colors cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

