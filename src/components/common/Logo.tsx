import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  showText = true,
  showTagline = false,
  className = "",
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
    xl: "w-14 h-14",
  }[size];

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl",
  }[size];

  return (
    <div
      className={`inline-flex items-center space-x-3 group cursor-pointer select-none ${className}`}
    >
      {/* Aesthetic Notera Codex Seal Emblem in Luminous Beige */}
      <div
        className={`${iconSizes} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-surface-container-high to-surface border border-outline-variant group-hover:border-primary/80 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_22px_rgba(216,195,165,0.25)] shrink-0 overflow-hidden`}
      >
        {/* Ambient Warm Beige Radial Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-tertiary/20 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Vector Codex & Monogram Icon */}
        <svg
          className="w-full h-full p-1.5 transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="noteraBeige"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E6EBE4" />
              <stop offset="50%" stopColor="#5EA876" />
              <stop offset="100%" stopColor="#D6B265" />
            </linearGradient>
            <linearGradient id="noteraGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6EBE4" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#5EA876" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Background delicate concentric ring */}
          <circle
            cx="18"
            cy="18"
            r="15"
            stroke="url(#noteraBeige)"
            strokeWidth="0.75"
            strokeDasharray="2 2"
            strokeOpacity="0.35"
          />

          {/* Open Codex Foliate Leaves / Wings */}
          <path
            d="M18 26C14 24 9 24.5 6.5 26.5V11C9 9 14 8.5 18 10.5M18 26C22 24 27 24.5 29.5 26.5V11C27 9 22 8.5 18 10.5V26Z"
            stroke="url(#noteraBeige)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.75"
            className="group-hover:stroke-opacity-100 transition-all duration-300"
          />

          {/* Central Stem Spine */}
          <line
            x1="18"
            y1="10.5"
            x2="18"
            y2="26"
            stroke="url(#noteraBeige)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Elegant Diagonal Stylized 'N' Crossbeam connecting folios */}
          <path
            d="M12 13.5L24 23.5"
            stroke="url(#noteraGlow)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Top Cardinal Celestial Star */}
          <circle cx="18" cy="6.5" r="1.2" fill="#EFE6DB" />
          <path
            d="M18 4.5V8.5M16 6.5H20"
            stroke="#EFE6DB"
            strokeWidth="0.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center space-x-1.5">
            <span
              className={`font-display ${textSizes} tracking-[-0.015em] font-normal text-on-surface transition-colors duration-300 group-hover:text-primary leading-none`}
            >
              Notera
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 group-hover:bg-primary group-hover:shadow-[0_0_8px_rgba(216,195,165,0.8)] transition-all duration-300" />
          </div>

          {showTagline && (
            <span className="text-[10px] font-mono tracking-widest uppercase text-tertiary mt-0.5 font-light">
              Sanctuary of Learning
            </span>
          )}
        </div>
      )}
    </div>
  );
};
