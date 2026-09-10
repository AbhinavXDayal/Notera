import React from "react";

export const Manifesto: React.FC = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-outline-variant"
      id="manifesto"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-tertiary font-mono font-medium">
          Curatorial Manifesto
        </span>
        <blockquote className="font-display text-3xl sm:text-4xl text-on-surface leading-snug font-normal">
          "Education does not require hyperactive bells, spinning coins, or
          flashing banners. It requires clarity of mind, an honest roadmap, and
          texts written with intellectual devotion."
        </blockquote>
        <div className="pt-4 flex items-center justify-center space-x-3 text-xs text-secondary">
          <span className="w-8 h-px bg-outline-variant"></span>
          <span>The Guide Academic Trust, New Delhi</span>
          <span className="w-8 h-px bg-outline-variant"></span>
        </div>
      </div>
    </section>
  );
};
