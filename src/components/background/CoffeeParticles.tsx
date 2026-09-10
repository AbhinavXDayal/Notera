import React, { useMemo } from "react";
import type { BackgroundVariant } from "./DotMatrixCanvas";

interface CoffeeParticlesProps {
  variant?: BackgroundVariant;
  parallaxOffset?: { x: number; y: number };
}

export const CoffeeParticles: React.FC<CoffeeParticlesProps> = ({
  variant = "hero",
  parallaxOffset = { x: 0, y: 0 },
}) => {
  const isReading = variant === "reading";
  const count = isReading ? 0 : variant === "minimal" ? 8 : 16;

  const particles = useMemo(() => {
    const list = [];
    const colors = [
      "#D8C3A5", // Warm Beige
      "#E8DDD0", // Soft Oat Crema
      "#CDBCA8", // Almond Latte
      "#FAF5EE", // Cream Highlight
    ];

    for (let i = 0; i < 20; i++) {
      list.push({
        id: i,
        left: (i * 17 + 7) % 94 + 3,
        top: (i * 23 + 13) % 90 + 5,
        size: (i % 3) + 2,
        color: colors[i % colors.length],
        duration: 4 + (i % 5) * 1.5,
        delay: (i % 7) * 0.8,
        driftX: ((i % 5) - 2) * 8,
      });
    }
    return list;
  }, []);

  if (isReading) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
      style={{
        transform: `translate3d(${parallaxOffset.x * 0.4}px, ${parallaxOffset.y * 0.4}px, 0)`,
        transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      {particles.slice(0, count).map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}80`,
            animation: `particlePulse ${p.duration}s ease-in-out infinite alternate, coffeeBeanDrift ${p.duration * 1.8}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
