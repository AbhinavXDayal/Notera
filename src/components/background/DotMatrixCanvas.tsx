import React, { useEffect, useRef } from "react";

export type BackgroundVariant =
  | "hero"
  | "reading"
  | "roadmap"
  | "subtle"
  | "minimal";

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

    // Warm Café Theme Dot Configuration
    const dotSpacing = variant === "hero" ? 28 : variant === "reading" ? 34 : 30;
    const isReading = variant === "reading";
    const isRoadmap = variant === "roadmap";

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;

      // Glow radius around cursor
      const glowRadius = isReading ? 0 : 160;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * dotSpacing;
          const y = r * dotSpacing;

          // Distance to mouse for subtle interactive highlight
          const dx = mousePos.x - x;
          const dy = mousePos.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle organic pulsing wave
          const wave = Math.sin(time + (x * 0.005) + (y * 0.004));
          const baseAlpha = isReading ? 0.07 : variant === "minimal" ? 0.09 : 0.14;
          let alpha = baseAlpha + wave * 0.03;

          // Mouse proximity boost
          if (dist < glowRadius && glowRadius > 0) {
            const proximity = 1 - dist / glowRadius;
            alpha += proximity * 0.28;
          }

          // Dynamic warm coffee accent colors on constellation patterns
          const isCaramel = (c * 3 + r * 5) % 19 === 0;
          const isGold = (c * 7 + r * 2) % 23 === 0;
          const isCreamHighlight = (c + r) % 29 === 0;

          if (isCreamHighlight && !isReading) {
            ctx.fillStyle = `rgba(250, 243, 236, ${Math.min(alpha * 1.5, 0.45)})`;
          } else if (isGold && !isReading) {
            ctx.fillStyle = `rgba(229, 173, 122, ${Math.min(alpha * 1.4, 0.45)})`;
          } else if (isCaramel && !isReading) {
            ctx.fillStyle = `rgba(222, 147, 90, ${Math.min(alpha * 1.5, 0.5)})`;
          } else {
            // Soft warm mocha base dot
            ctx.fillStyle = `rgba(180, 148, 126, ${Math.min(alpha * 1.2, 0.32)})`;
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
            ctx.strokeStyle = `rgba(222, 147, 90, ${Math.min(crossAlpha, 0.35)})`;
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
  }, [variant, mousePos.x, mousePos.y]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none z-0 opacity-90 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
