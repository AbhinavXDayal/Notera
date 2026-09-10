import React, { useState, useEffect } from "react";
import { DotMatrixCanvas } from "./DotMatrixCanvas";
import type { BackgroundVariant } from "./DotMatrixCanvas";
import { ConstellationElements } from "./ConstellationElements";
import { CoffeeBeans } from "./CoffeeBeans";
import { CoffeeSteam } from "./CoffeeSteam";
import { CoffeeRings } from "./CoffeeRings";
import { CoffeeParticles } from "./CoffeeParticles";

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

  const [parallaxOffset, setParallaxOffset] = useState<{
    x: number;
    y: number;
  }>({
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
      // Gentle restrained parallax offset (4px max)
      targetX = ((e.clientX - cx) / cx) * -4;
      targetY = ((e.clientY - cy) / cy) * -4;
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
      {/* 1. Deep Dot Matrix Canvas (High-Performance 60fps) */}
      <DotMatrixCanvas variant={variant} mousePos={mousePos} />

      {/* 2. Deep Study Desk Coffee Rings */}
      <CoffeeRings variant={variant} parallaxOffset={parallaxOffset} />

      {/* 3. Rising Warm Steam Filaments */}
      <CoffeeSteam variant={variant} parallaxOffset={parallaxOffset} />

      {/* 4. Floating Stylized Abstract Coffee Beans */}
      <CoffeeBeans variant={variant} parallaxOffset={parallaxOffset} />

      {/* 5. Floating Geometric Constellations & Knowledge Filaments */}
      <ConstellationElements
        variant={variant}
        parallaxOffset={parallaxOffset}
      />

      {/* 6. Foreground Warm Aroma Particles */}
      <CoffeeParticles variant={variant} parallaxOffset={parallaxOffset} />

      {/* 7. Soft Ambient Dark Mocha Vignette for Library Atmosphere */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 25%, transparent 35%, rgba(24, 19, 16, 0.55) 75%, rgba(16, 12, 10, 0.92) 100%)",
        }}
      />
    </div>
  );
};
