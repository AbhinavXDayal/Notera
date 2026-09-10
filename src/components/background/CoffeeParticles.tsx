import React from "react";
import type { BackgroundVariant } from "./DotMatrixCanvas";

interface CoffeeParticlesProps {
  variant?: BackgroundVariant;
  parallaxOffset?: { x: number; y: number };
}

interface Particle {
  id: string;
  top: string;
  left: string;
  size: number;
  color: string;
  duration: string;
  delay: string;
}

const PARTICLES: Particle[] = [
  {
    id: "p1",
    top: "18%",
    left: "12%",
    size: 3,
    color: "#D48950",
    duration: "7s",
    delay: "0s",
  },
  {
    id: "p2",
    top: "35%",
    left: "86%",
    size: 2.5,
    color: "#E0A670",
    duration: "9s",
    delay: "1.5s",
  },
  {
    id: "p3",
    top: "55%",
    left: "16%",
    size: 2,
    color: "#BFA38E",
    duration: "8s",
    delay: "3s",
  },
  {
    id: "p4",
    top: "75%",
    left: "80%",
    size: 3.5,
    color: "#D48950",
    duration: "6.5s",
    delay: "0.5s",
  },
  {
    id: "p5",
    top: "25%",
    left: "45%",
    size: 2,
    color: "#E0A670",
    duration: "10s",
    delay: "4s",
  },
  {
    id: "p6",
    top: "85%",
    left: "30%",
    size: 2.5,
    color: "#BFA38E",
    duration: "8.5s",
    delay: "2s",
  },
  {
    id: "p7",
    top: "45%",
    left: "92%",
    size: 3,
    color: "#F7EFE6",
    duration: "7.5s",
    delay: "3.5s",
  },
  {
    id: "p8",
    top: "65%",
    left: "60%",
    size: 2,
    color: "#D48950",
    duration: "9.5s",
    delay: "1s",
  },
];

export const CoffeeParticles: React.FC<CoffeeParticlesProps> = ({
  variant = "hero",
  parallaxOffset = { x: 0, y: 0 },
}) => {
  if (variant === "reading") return null;

  const count = variant === "hero" ? PARTICLES.length : 4;
  const activeParticles = PARTICLES.slice(0, count);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        transform: `translate(${parallaxOffset.x * 1.5}px, ${parallaxOffset.y * 1.5}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {activeParticles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animation: `particlePulse ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
