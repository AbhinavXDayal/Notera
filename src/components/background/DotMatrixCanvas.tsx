import React, { useEffect, useRef } from "react";

export type BackgroundVariant = "hero" | "subtle" | "roadmap" | "reading";

interface DotMatrixCanvasProps {
  variant?: BackgroundVariant;
  mousePos?: { x: number; y: number };
}

export const DotMatrixCanvas: React.FC<DotMatrixCanvasProps> = ({
  variant = "hero",
  mousePos = { x: -1000, y: -1000 },
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Configuration according to variant
    const isReading = variant === "reading";
    const isSubtle = variant === "subtle";
    const isRoadmap = variant === "roadmap";

    const dotSpacing = isRoadmap ? 36 : isReading ? 32 : isSubtle ? 30 : 28;
    const baseAlpha = isReading
      ? 0.04
      : isSubtle
        ? 0.08
        : isRoadmap
          ? 0.12
          : 0.11;
    const glowRadius = isReading ? 0 : isSubtle ? 150 : 220;
    const glowAlphaBoost = isReading ? 0 : isSubtle ? 0.15 : 0.25;

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.012;

      const cols = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;

      // Draw warm mocha dot matrix
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * dotSpacing;
          const y = r * dotSpacing;

          // Distance from mouse for interactive glow
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle harmonic wave pulse across grid
          const wave =
            isReading || isSubtle
              ? 0
              : Math.sin(x * 0.0035 + y * 0.0035 + time) * 0.025;

          let alpha = baseAlpha + wave;

          // Proximity glow
          if (glowRadius > 0 && dist < glowRadius) {
            const proximityFactor = 1 - dist / glowRadius;
            alpha += proximityFactor * glowAlphaBoost;
          }

          if (alpha <= 0.005) continue;

          // Warm mocha palette: radiant caramel (#D48950), toasted gold (#E0A670), warm cream highlight
          const isCaramel = (c + r * 2) % 7 === 0;
          const isGold = (c * 3 + r) % 11 === 0;
          const isCreamHighlight = (c * 5 + r * 7) % 23 === 0;

          if (isCreamHighlight && !isReading) {
            ctx.fillStyle = `rgba(247, 239, 230, ${Math.min(alpha * 1.5, 0.45)})`;
          } else if (isGold && !isReading) {
            ctx.fillStyle = `rgba(224, 166, 112, ${Math.min(alpha * 1.4, 0.45)})`;
          } else if (isCaramel && !isReading) {
            ctx.fillStyle = `rgba(212, 137, 80, ${Math.min(alpha * 1.5, 0.5)})`;
          } else {
            // Soft warm mocha base dot
            ctx.fillStyle = `rgba(165, 135, 115, ${Math.min(alpha * 1.2, 0.3)})`;
          }

          const dotSize =
            dist < glowRadius && glowRadius > 0
              ? 1.25 + (1 - dist / glowRadius) * 0.75
              : isCaramel || isGold
                ? 1.35
                : 1.05;

          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();

          // Delicate coordinate plus crosses at selected intersections on hero / roadmap
          if ((variant === "hero" || isRoadmap) && c % 6 === 0 && r % 6 === 0) {
            const crossAlpha = alpha * 1.8;
            ctx.strokeStyle = `rgba(212, 137, 80, ${Math.min(crossAlpha, 0.35)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(x - 3.5, y);
            ctx.lineTo(x + 3.5, y);
            ctx.moveTo(x, y - 3.5);
            ctx.lineTo(x, y + 3.5);
            ctx.stroke();
          }
        }
      }

      if (!isReading) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [variant, mousePos?.x, mousePos?.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: 1 }}
    />
  );
};
