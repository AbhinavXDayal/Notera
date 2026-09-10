import React, { useState, useEffect } from "react";
import { DotMatrixCanvas } from "./DotMatrixCanvas";
import type { BackgroundVariant } from "./DotMatrixCanvas";
import { ConstellationElements } from "./ConstellationElements";

interface KnowledgeMapBackgroundProps {
  variant?: BackgroundVariant;
}

export const KnowledgeMapBackground: React.FC<KnowledgeMapBackgroundProps> = ({
  variant = "hero",
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: -1000,
    y: -1000,
  });

  const [parallaxOffset, setParallaxOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Disable interactive mouse parallax on reading mode to prioritize reading flow
    if (variant === "reading") return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // Gentle 4px max parallax offset
      targetX = ((e.clientX - cx) / cx) * -5;
      targetY = ((e.clientY - cy) / cy) * -5;
    };

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      setParallaxOffset({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* 1. Base Dot Matrix Canvas (High-Performance 60fps) */}
      <DotMatrixCanvas variant={variant} mousePos={mousePos} />

      {/* 2. Floating Academic Constellations, Geometric Nodes & Filaments */}
      <ConstellationElements variant={variant} parallaxOffset={parallaxOffset} />

      {/* 3. Soft Ambient Vignette for Natural Academic Paper Lighting */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 25%, transparent 40%, rgba(250, 246, 240, 0.6) 80%, rgba(250, 246, 240, 0.95) 100%)",
        }}
      />
    </div>
  );
};
