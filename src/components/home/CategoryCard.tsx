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
      className={`border rounded-[12px] p-7 flex flex-col justify-between transition-all duration-300 relative shadow-terra-card ${
        isAvailable
          ? "cursor-pointer bg-surface-container hover:bg-surface border-outline-variant hover:border-primary hover:shadow-terra-hover transform hover:-translate-y-1 group"
          : "opacity-60 bg-surface-container/40 border-outline-variant cursor-not-allowed select-none"
      }`}
    >
      {/* Unavailable Badge */}
      {!isAvailable && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-surface border border-outline-variant text-secondary/70 uppercase font-medium">
            Unavailable
          </span>
        </div>
      )}

      <div>
        {/* Symbol Circle Icon */}
        <div
          className={`w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center mb-6 transition-transform ${
            isAvailable
              ? "text-primary group-hover:scale-110"
              : "text-secondary/60"
          }`}
        >
          <span className="font-display italic text-lg font-medium">
            {field.symbol}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display text-3xl transition-colors font-medium ${
            isAvailable
              ? "text-on-surface group-hover:text-primary"
              : "text-on-surface/70"
          }`}
        >
          {field.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-wider text-secondary/80 mt-1 font-mono">
          {field.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-secondary mt-4 leading-relaxed line-clamp-3">
          {field.description}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div
        className={`pt-8 border-t border-outline-variant mt-6 flex items-center justify-between text-xs ${
          isAvailable
            ? "font-semibold text-primary"
            : "text-secondary/60 font-mono text-[11px]"
        }`}
      >
        <span>{field.actionText}</span>
        {isAvailable ? (
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        ) : (
          <span className="text-secondary/40 font-mono">—</span>
        )}
      </div>
    </div>
  );
};
