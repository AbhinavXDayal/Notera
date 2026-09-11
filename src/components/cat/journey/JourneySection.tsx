import React from "react";

interface JourneySectionProps {
  number: string;
  title: string;
  tagline?: string;
  badge?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const JourneySection: React.FC<JourneySectionProps> = ({
  number,
  title,
  tagline,
  badge,
  children,
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 space-y-6 pt-8 pb-4 border-b border-outline-variant/60 last:border-b-0 ${className}`}
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-primary">
              Section {number}
            </span>
            {badge && (
              <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary">
                {badge}
              </span>
            )}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-medium tracking-tight pt-1">
            {title}
          </h3>
          {tagline && (
            <p className="text-secondary text-xs sm:text-sm max-w-3xl leading-relaxed">
              {tagline}
            </p>
          )}
        </div>
      </div>

      {/* Section Body */}
      <div>{children}</div>
    </section>
  );
};
