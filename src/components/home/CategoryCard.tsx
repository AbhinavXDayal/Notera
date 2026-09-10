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
  const isFeatured = field.featured;

  return (
    <div
      onClick={() => onSelect(field)}
      className={`group cursor-pointer border rounded-[12px] p-7 flex flex-col justify-between transition-all duration-300 relative shadow-terra-card hover:shadow-terra-hover transform hover:-translate-y-1 ${
        isFeatured
          ? "bg-surface-container hover:bg-surface border-outline-variant hover:border-primary"
          : "bg-surface-container hover:bg-surface border-outline-variant hover:border-secondary"
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-tertiary/15 text-tertiary border border-tertiary/30 uppercase font-semibold">
            {field.tag || "Featured"}
          </span>
        </div>
      )}

      <div>
        {/* Symbol Circle Icon */}
        <div
          className={`w-10 h-10 rounded-lg bg-surface border border-outline-variant flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
            isFeatured ? "text-primary" : "text-on-surface"
          }`}
        >
          <span className="font-display italic text-lg font-medium">
            {field.symbol}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl text-on-surface group-hover:text-primary transition-colors font-medium">
          {field.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-wider text-secondary mt-1 font-mono">
          {field.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-secondary mt-4 leading-relaxed line-clamp-3">
          {field.description}
        </p>
      </div>

      {/* Bottom Action Footer */}
      <div
        className={`pt-8 border-t border-outline-variant mt-6 flex items-center justify-between text-xs font-semibold ${
          isFeatured
            ? "text-primary"
            : "text-secondary group-hover:text-primary"
        }`}
      >
        <span>{field.actionText}</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  );
};
