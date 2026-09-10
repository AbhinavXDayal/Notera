import React from "react";
import type { FieldCategory } from "../../types/field";

interface CategoryCardProps {
  field: FieldCategory;
  onSelect: (field: FieldCategory) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  field,
  onSelect,
}) => {
  const isAvailable = field.available !== false;

  return (
    <div
      onClick={() => {
        if (isAvailable) {
          onSelect(field);
        }
      }}
      className={`border rounded-xl p-5 flex flex-col justify-between transition-all duration-200 relative shadow-terra-card ${
        isAvailable
          ? "cursor-pointer bg-surface-container hover:bg-surface border-outline-variant hover:border-primary hover:shadow-terra-hover transform hover:-translate-y-0.5 group"
          : "opacity-60 bg-surface-container/40 border-outline-variant cursor-not-allowed select-none"
      }`}
    >
      {/* Unavailable Badge */}
      {!isAvailable && (
        <div className="absolute top-3.5 right-3.5">
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[9px] font-mono tracking-wider bg-surface border border-outline-variant text-secondary/70 uppercase font-medium">
            Unavailable
          </span>
        </div>
      )}

      <div>
        {/* Symbol Circle Icon */}
        <div
          className={`w-8 h-8 rounded-lg bg-surface border border-outline-variant flex items-center justify-center mb-3.5 transition-transform ${
            isAvailable
              ? "text-primary group-hover:scale-105"
              : "text-secondary/60"
          }`}
        >
          <span className="font-display italic text-base font-medium">
            {field.symbol}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display text-xl sm:text-2xl transition-colors font-medium leading-tight ${
            isAvailable
              ? "text-on-surface group-hover:text-primary"
              : "text-on-surface/70"
          }`}
        >
          {field.title}
        </h3>

        {/* Subtitle */}
        <p className="text-[11px] uppercase tracking-wider text-secondary/80 mt-0.5 font-mono">
          {field.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs text-secondary mt-2.5 leading-relaxed line-clamp-2">
          {field.description}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div
        className={`pt-3.5 border-t border-outline-variant mt-4 flex items-center justify-between text-xs ${
          isAvailable
            ? "font-semibold text-primary"
            : "text-secondary/50 font-mono text-[10px]"
        }`}
      >
        <span>{field.actionText}</span>
        {isAvailable ? (
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        ) : (
          <span className="text-secondary/30 font-mono">—</span>
        )}
      </div>
    </div>
  );
};
