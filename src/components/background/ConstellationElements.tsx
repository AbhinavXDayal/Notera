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
  // Disable floating elements on reading mode to maximize study focus
  if (variant === "reading") {
    return null;
  }

  const isHero = variant === "hero";
  const isRoadmap = variant === "roadmap";

  // Deterministic set of elegant academic nodes
  const nodes: NodeElement[] = useMemo(() => {
    if (variant === "subtle") {
      return [
        {
          id: "sub-1",
          type: "diamond",
          x: 15,
          y: 25,
          size: 10,
          color: "#4a7c59",
          opacity: 0.18,
          duration: 22,
          delay: 0,
        },
        {
          id: "sub-2",
          type: "plus",
          x: 82,
          y: 40,
          size: 12,
          color: "#705c30",
          opacity: 0.15,
          duration: 28,
          delay: 3,
        },
        {
          id: "sub-3",
          type: "square",
          x: 25,
          y: 75,
          size: 9,
          color: "#4a7c59",
          opacity: 0.16,
          duration: 26,
          delay: 1,
        },
        {
          id: "sub-4",
          type: "dot",
          x: 70,
          y: 80,
          size: 4,
          color: "#705c30",
          opacity: 0.22,
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
          color: "#4a7c59",
          opacity: 0.25,
          duration: 24,
          delay: 0,
          label: "01",
        },
        {
          id: "road-2",
          type: "circle",
          x: 35,
          y: 28,
          size: 12,
          color: "#705c30",
          opacity: 0.22,
          duration: 30,
          delay: 2,
          label: "04",
        },
        {
          id: "road-3",
          type: "square",
          x: 65,
          y: 20,
          size: 10,
          color: "#4a7c59",
          opacity: 0.24,
          duration: 26,
          delay: 4,
          label: "08",
        },
        {
          id: "road-4",
          type: "diamond",
          x: 88,
          y: 35,
          size: 12,
          color: "#705c30",
          opacity: 0.28,
          duration: 22,
          delay: 1,
          label: "14",
        },
        {
          id: "road-5",
          type: "plus",
          x: 22,
          y: 65,
          size: 14,
          color: "#4a7c59",
          opacity: 0.18,
          duration: 32,
          delay: 3,
        },
        {
          id: "road-6",
          type: "circle",
          x: 78,
          y: 72,
          size: 9,
          color: "#705c30",
          opacity: 0.2,
          duration: 28,
          delay: 6,
        },
      ];
    }

    // Default Hero Variant (Rich, subtle academic constellations)
    return [
      {
        id: "hero-1",
        type: "diamond",
        x: 8,
        y: 22,
        size: 12,
        color: "#4a7c59",
        opacity: 0.28,
        duration: 25,
        delay: 0,
        symbol: "✦",
      },
      {
        id: "hero-2",
        type: "square",
        x: 86,
        y: 18,
        size: 11,
        color: "#705c30",
        opacity: 0.22,
        duration: 30,
        delay: 2,
      },
      {
        id: "hero-3",
        type: "plus",
        x: 20,
        y: 60,
        size: 13,
        color: "#4a7c59",
        opacity: 0.2,
        duration: 28,
        delay: 4,
      },
      {
        id: "hero-4",
        type: "circle",
        x: 80,
        y: 65,
        size: 14,
        color: "#705c30",
        opacity: 0.24,
        duration: 22,
        delay: 1,
      },
      {
        id: "hero-5",
        type: "dot",
        x: 48,
        y: 14,
        size: 5,
        color: "#4a7c59",
        opacity: 0.35,
        duration: 18,
        delay: 3,
      },
      {
        id: "hero-6",
        type: "glyph",
        x: 92,
        y: 82,
        size: 14,
        color: "#705c30",
        opacity: 0.18,
        duration: 35,
        delay: 5,
        symbol: "∫",
      },
      {
        id: "hero-7",
        type: "diamond",
        x: 14,
        y: 85,
        size: 10,
        color: "#4a7c59",
        opacity: 0.22,
        duration: 27,
        delay: 2,
        symbol: "✦",
      },
      {
        id: "hero-8",
        type: "plus",
        x: 62,
        y: 88,
        size: 11,
        color: "#705c30",
        opacity: 0.18,
        duration: 33,
        delay: 6,
      },
    ];
  }, [variant, isRoadmap]);

  const renderShape = (node: NodeElement) => {
    switch (node.type) {
      case "diamond":
        return (
          <div
            className="flex items-center justify-center font-serif"
            style={{
              width: `${node.size * 1.6}px`,
              height: `${node.size * 1.6}px`,
              color: node.color,
              opacity: node.opacity,
            }}
          >
            <span className="text-xs select-none">✦</span>
          </div>
        );

      case "square":
        return (
          <div
            className="border border-current rounded-[2px]"
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
            className="flex items-center justify-center font-mono font-light select-none text-xs"
            style={{
              color: node.color,
              opacity: node.opacity,
            }}
          >
            +
          </div>
        );

      case "circle":
        return (
          <div
            className="rounded-full border border-dashed flex items-center justify-center"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              borderColor: node.color,
              opacity: node.opacity,
            }}
          >
            <div
              className="w-1 h-1 rounded-full bg-current"
              style={{ color: node.color }}
            />
          </div>
        );

      case "glyph":
        return (
          <div
            className="font-display italic text-sm select-none"
            style={{
              color: node.color,
              opacity: node.opacity,
            }}
          >
            {node.symbol || "∫"}
          </div>
        );

      case "dot":
      default:
        return (
          <div
            className="rounded-full animate-pulse"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              backgroundColor: node.color,
              opacity: node.opacity,
            }}
          />
        );
    }
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-transform duration-500 ease-out"
      style={{
        transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
      }}
    >
      {/* Delicate Curved Bezier Filaments (Knowledge Path Lines) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pathGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a7c59" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#4a7c59" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#705c30" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="pathGradientGold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#705c30" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#705c30" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4a7c59" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {isHero && (
          <>
            {/* Upper left to center delicate curve */}
            <path
              d="M 50 180 C 180 120, 320 220, 500 160 S 750 140, 950 200"
              fill="none"
              stroke="url(#pathGradientGreen)"
              strokeWidth="0.85"
              strokeDasharray="4 6"
              className="animate-[dash_60s_linear_infinite]"
            />

            {/* Center to lower right connecting filament */}
            <path
              d="M 200 650 C 450 580, 680 720, 950 620 S 1200 590, 1400 680"
              fill="none"
              stroke="url(#pathGradientGold)"
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
              stroke="url(#pathGradientGreen)"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            <path
              d="M 250 620 C 500 500, 850 680, 1200 580"
              fill="none"
              stroke="url(#pathGradientGold)"
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
                className="absolute -top-3.5 -right-3 text-[9px] font-mono font-medium px-1 rounded border border-outline-variant/60 bg-surface/80"
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
