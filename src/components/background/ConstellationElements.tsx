import React, { useMemo } from "react";
import type { BackgroundVariant } from "./DotMatrixCanvas";

interface ConstellationElementsProps {
  variant?: BackgroundVariant;
  parallaxOffset?: { x: number; y: number };
}

interface NodeElement {
  id: string;
  type: "diamond" | "square" | "plus" | "circle" | "dot" | "glyph";
  x: number; // percentage
  y: number; // percentage
  size: number;
  color: string;
  opacity: number;
  duration: number; // seconds
  delay: number;
  symbol?: string;
  label?: string;
}

export const ConstellationElements: React.FC<ConstellationElementsProps> = ({
  variant = "hero",
  parallaxOffset = { x: 0, y: 0 },
}) => {
  const isHero = variant === "hero";
  const isRoadmap = variant === "roadmap";

  // Deterministic set of elegant academic nodes in soft dark theme palette
  const nodes: NodeElement[] = useMemo(() => {
    if (variant === "reading") {
      return [];
    }
    if (variant === "subtle") {
      return [
        {
          id: "sub-1",
          type: "diamond",
          x: 15,
          y: 25,
          size: 10,
          color: "#385A42",
          opacity: 0.25,
          duration: 22,
          delay: 0,
        },
        {
          id: "sub-2",
          type: "plus",
          x: 82,
          y: 40,
          size: 12,
          color: "#A89F91",
          opacity: 0.2,
          duration: 28,
          delay: 3,
        },
        {
          id: "sub-3",
          type: "square",
          x: 25,
          y: 75,
          size: 9,
          color: "#D6B265",
          opacity: 0.22,
          duration: 26,
          delay: 1,
        },
        {
          id: "sub-4",
          type: "dot",
          x: 70,
          y: 80,
          size: 4,
          color: "#385A42",
          opacity: 0.28,
          duration: 20,
          delay: 5,
        },
      ];
    }

    if (isRoadmap) {
      return [
        {
          id: "road-1",
          type: "diamond",
          x: 10,
          y: 18,
          size: 11,
          color: "#385A42",
          opacity: 0.32,
          duration: 24,
          delay: 0,
          label: "01",
        },
        {
          id: "road-2",
          type: "circle",
          x: 26,
          y: 28,
          size: 12,
          color: "#A89F91",
          opacity: 0.28,
          duration: 20,
          delay: 1.5,
          label: "02",
        },
        {
          id: "road-3",
          type: "diamond",
          x: 48,
          y: 20,
          size: 11,
          color: "#D6B265",
          opacity: 0.3,
          duration: 26,
          delay: 3,
          label: "03",
        },
        {
          id: "road-4",
          type: "plus",
          x: 68,
          y: 32,
          size: 12,
          color: "#385A42",
          opacity: 0.28,
          duration: 22,
          delay: 2,
          label: "04",
        },
        {
          id: "road-5",
          type: "diamond",
          x: 88,
          y: 22,
          size: 13,
          color: "#D6B265",
          opacity: 0.34,
          duration: 28,
          delay: 4,
          label: "05",
        },
        {
          id: "road-6",
          type: "glyph",
          symbol: "∫",
          x: 18,
          y: 65,
          size: 14,
          color: "#A89F91",
          opacity: 0.24,
          duration: 25,
          delay: 1,
        },
        {
          id: "road-7",
          type: "glyph",
          symbol: "✦",
          x: 82,
          y: 60,
          size: 12,
          color: "#385A42",
          opacity: 0.26,
          duration: 23,
          delay: 3.5,
        },
      ];
    }

    // Default Hero constellation in soft dark theme palette
    return [
      {
        id: "hero-1",
        type: "glyph",
        symbol: "✦",
        x: 8,
        y: 16,
        size: 14,
        color: "#385A42",
        opacity: 0.38,
        duration: 20,
        delay: 0,
      },
      {
        id: "hero-2",
        type: "diamond",
        x: 90,
        y: 20,
        size: 10,
        color: "#D6B265",
        opacity: 0.3,
        duration: 24,
        delay: 2,
      },
      {
        id: "hero-3",
        type: "plus",
        x: 4,
        y: 48,
        size: 12,
        color: "#A89F91",
        opacity: 0.25,
        duration: 26,
        delay: 4,
      },
      {
        id: "hero-4",
        type: "circle",
        x: 94,
        y: 52,
        size: 11,
        color: "#385A42",
        opacity: 0.28,
        duration: 22,
        delay: 1,
      },
      {
        id: "hero-5",
        type: "glyph",
        symbol: "∫",
        x: 12,
        y: 82,
        size: 16,
        color: "#D6B265",
        opacity: 0.28,
        duration: 28,
        delay: 3,
      },
      {
        id: "hero-6",
        type: "square",
        x: 86,
        y: 78,
        size: 9,
        color: "#A89F91",
        opacity: 0.26,
        duration: 25,
        delay: 5,
      },
      {
        id: "hero-7",
        type: "glyph",
        symbol: "✦",
        x: 52,
        y: 12,
        size: 11,
        color: "#385A42",
        opacity: 0.28,
        duration: 21,
        delay: 2.5,
      },
      {
        id: "hero-8",
        type: "dot",
        x: 45,
        y: 88,
        size: 4.5,
        color: "#D6B265",
        opacity: 0.38,
        duration: 19,
        delay: 1.2,
      },
    ];
  }, [variant, isRoadmap]);

  const renderShape = (node: NodeElement) => {
    switch (node.type) {
      case "diamond":
        return (
          <div
            className="border transform rotate-45 transition-transform"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              borderColor: node.color,
              opacity: node.opacity,
            }}
          />
        );
      case "square":
        return (
          <div
            className="border"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              borderColor: node.color,
              opacity: node.opacity,
            }}
          />
        );
      case "circle":
        return (
          <div
            className="border rounded-full"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              borderColor: node.color,
              opacity: node.opacity,
            }}
          />
        );
      case "plus":
        return (
          <div
            className="relative flex items-center justify-center font-mono font-light select-none"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              color: node.color,
              opacity: node.opacity,
              fontSize: `${node.size * 1.3}px`,
              lineHeight: 1,
            }}
          >
            +
          </div>
        );
      case "glyph":
        return (
          <div
            className="select-none font-serif flex items-center justify-center"
            style={{
              width: `${node.size * 1.2}px`,
              height: `${node.size * 1.2}px`,
              color: node.color,
              opacity: node.opacity,
              fontSize: `${node.size}px`,
            }}
          >
            {node.symbol || "✦"}
          </div>
        );
      case "dot":
      default:
        return (
          <div
            className="rounded-full"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              backgroundColor: node.color,
              opacity: node.opacity,
              boxShadow: `0 0 6px ${node.color}`,
            }}
          />
        );
    }
  };

  if (variant === "reading") return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-transform duration-700 ease-out"
      style={{
        transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
      }}
    >
      {/* Delicate Curved Bezier Filaments (Knowledge Path Lines) in warm beige */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="pathGradientBeige"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#385A42" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#385A42" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D6B265" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient
            id="pathGradientCream"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#A89F91" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#A89F91" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#385A42" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {isHero && (
          <>
            {/* Upper left to center delicate curve */}
            <path
              d="M 50 180 C 180 120, 320 220, 500 160 S 750 140, 950 200"
              fill="none"
              stroke="url(#pathGradientBeige)"
              strokeWidth="0.85"
              strokeDasharray="4 6"
              className="animate-[dash_60s_linear_infinite]"
            />

            {/* Center to lower right connecting filament */}
            <path
              d="M 200 650 C 450 580, 680 720, 950 620 S 1200 590, 1400 680"
              fill="none"
              stroke="url(#pathGradientCream)"
              strokeWidth="0.8"
              strokeDasharray="3 5"
            />
          </>
        )}

        {isRoadmap && (
          <>
            {/* Constellation roadmap curve */}
            <path
              d="M 120 180 Q 400 280, 700 200 T 1300 320"
              fill="none"
              stroke="url(#pathGradientBeige)"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            <path
              d="M 250 620 C 500 500, 850 680, 1200 580"
              fill="none"
              stroke="url(#pathGradientCream)"
              strokeWidth="0.9"
            />
          </>
        )}
      </svg>

      {/* Floating Geometric Constellation Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animation: `floatingOrganic ${node.duration}s ease-in-out ${node.delay}s infinite alternate`,
          }}
        >
          <div className="relative group">
            {renderShape(node)}

            {/* Optional coordinate or step badge */}
            {node.label && (
              <span
                className="absolute -top-3.5 -right-3 text-[9px] font-mono font-medium px-1 rounded border border-outline-variant/60 bg-surface-container/90"
                style={{ color: node.color, opacity: node.opacity * 1.5 }}
              >
                {node.label}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
