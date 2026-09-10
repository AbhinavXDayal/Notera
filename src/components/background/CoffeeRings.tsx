import React from "react";
import type { BackgroundVariant } from "./DotMatrixCanvas";

interface CoffeeRingsProps {
  variant?: BackgroundVariant;
  parallaxOffset?: { x: number; y: number };
}

export const CoffeeRings: React.FC<CoffeeRingsProps> = ({
  variant = "hero",
  parallaxOffset = { x: 0, y: 0 },
}) => {
  if (variant === "reading") return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        transform: `translate3d(${parallaxOffset.x * 0.5}px, ${parallaxOffset.y * 0.5}px, 0)`,
      }}
    >
      {/* Top Right Study Desk Coffee Ring */}
      <svg
        className="absolute top-[-40px] right-[-50px] w-72 h-72 sm:w-96 sm:h-96 opacity-30 select-none"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="ringGrain" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Outer Ring */}
        <circle
          cx="100"
          cy="100"
          r="82"
          stroke="#8C5E3C"
          strokeWidth="3.5"
          strokeDasharray="40 12 80 8 30 15"
          strokeOpacity="0.25"
          filter="url(#ringGrain)"
        />

        {/* Inner Bleed Ring */}
        <circle
          cx="100"
          cy="100"
          r="76"
          stroke="#70472B"
          strokeWidth="1.5"
          strokeDasharray="60 20 50 15"
          strokeOpacity="0.18"
        />

        {/* Delicate cup edge highlight */}
        <circle
          cx="99"
          cy="99"
          r="84"
          stroke="#B8835A"
          strokeWidth="0.75"
          strokeDasharray="25 70 30 50"
          strokeOpacity="0.2"
        />
      </svg>

      {/* Bottom Left Desk Coffee Ring */}
      {variant === "hero" && (
        <svg
          className="absolute bottom-[-60px] left-[-40px] w-64 h-64 sm:w-80 sm:h-80 opacity-25 select-none"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="100"
            r="78"
            stroke="#8C5E3C"
            strokeWidth="3"
            strokeDasharray="50 15 70 10 20 20"
            strokeOpacity="0.22"
          />
          <circle
            cx="100"
            cy="100"
            r="73"
            stroke="#70472B"
            strokeWidth="1.2"
            strokeDasharray="40 30 60 10"
            strokeOpacity="0.15"
          />
          <circle
            cx="101"
            cy="101"
            r="80"
            stroke="#B8835A"
            strokeWidth="0.5"
            strokeDasharray="20 80 40 40"
            strokeOpacity="0.18"
          />
        </svg>
      )}
    </div>
  );
};
