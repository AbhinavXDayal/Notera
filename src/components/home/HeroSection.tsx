import React from "react";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onDirectCatPortal: () => void;
  onExploreArchiveIndex?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onDirectCatPortal,
  onExploreArchiveIndex,
}) => {
  const scrollToPaths = () => {
    const el = document.getElementById("paths");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-20 border-b border-outline-variant">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant text-xs uppercase tracking-widest text-tertiary font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
            <span>Digital Library &amp; Academic Cartography</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-on-surface font-normal tracking-tight">
            Where do you want <br />
            <span className="italic font-display font-light text-primary">
              to begin?
            </span>
          </h1>

          <p className="text-secondary text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Choose your exam, subject or learning path. Start from wherever you
            are — without clutter, noisy gamification, or overwhelming catalogs.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={scrollToPaths}
              className="px-6 py-3 rounded-full bg-primary text-on-primary text-sm font-semibold hover:bg-primary-hover transition-all shadow-terra-card flex items-center space-x-2 cursor-pointer"
            >
              <span>Select a Learning Path</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onDirectCatPortal}
              className="px-5 py-3 rounded-full border border-outline-variant hover:border-primary text-sm text-on-surface hover:bg-surface-container transition-all cursor-pointer"
            >
              Direct CAT Portal
            </button>
          </div>
        </div>

        {/* Abstract Knowledge & Map Illustration Composition */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/3] rounded-[12px] bg-surface-container border border-outline-variant p-8 flex flex-col justify-between relative overflow-hidden shadow-terra-card group">
            {/* Background Subtle Geometric lines */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#4a7c59 1px, transparent 1px), linear-gradient(to right, #4a7c59 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex justify-between items-start">
              <span className="font-display italic text-xs text-secondary uppercase tracking-widest">
                Plate No. 01 — The Topology of Mastery
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded border border-outline-variant font-mono text-secondary">
                28° N, 77° E
              </span>
            </div>

            {/* Central Intellectual Cartographic Visual */}
            <div className="relative z-10 py-6 text-center">
              <div className="inline-block relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-tertiary/40 flex items-center justify-center mx-auto mb-3 bg-surface/40">
                  <div className="w-16 h-16 rounded-full border border-dashed border-primary/50 flex items-center justify-center">
                    <span className="font-display text-3xl italic text-on-surface">
                      ∫
                    </span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-2 text-[10px] uppercase font-mono tracking-widest text-tertiary bg-surface px-2 py-0.5 rounded border border-outline-variant font-semibold">
                  Foundations
                </div>
              </div>
              <p className="font-display italic text-sm text-on-surface/90 mt-1">
                "From fundamental principles to intuitive problem solving."
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-outline-variant flex items-center justify-between text-xs text-secondary">
              <span>8 Comprehensive Spheres</span>
              <button
                onClick={onExploreArchiveIndex || scrollToPaths}
                className="underline decoration-outline-variant hover:text-primary transition-colors text-left"
              >
                Explore Archive Index →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
