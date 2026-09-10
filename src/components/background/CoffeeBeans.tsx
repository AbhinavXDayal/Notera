import React from "react";
import type { BackgroundVariant } from "./DotMatrixCanvas";

interface CoffeeBeansProps {
  variant?: BackgroundVariant;
  parallaxOffset?: { x: number; y: number };
}

interface BeanData {
  id: string;
  top: string;
  left: string;
  size: number;
  rotation: number;
  opacity: number;
  delay: string;
  duration: string;
}

const HERO_BEANS: BeanData[] = [
  {
    id: "b1",
    top: "12%",
    left: "8%",
    size: 18,
    rotation: 25,
    opacity: 0.28,
    delay: "0s",
    duration: "14s",
  },
  {
    id: "b2",
    top: "28%",
    left: "92%",
    size: 14,
    rotation: -40,
    opacity: 0.22,
    delay: "2.5s",
    duration: "16s",
  },
  {
    id: "b3",
    top: "68%",
    left: "6%",
    size: 20,
    rotation: 65,
    opacity: 0.25,
    delay: "1.2s",
    duration: "18s",
  },
  {
    id: "b4",
    top: "78%",
    left: "88%",
    size: 16,
    rotation: -15,
    opacity: 0.3,
    delay: "3.7s",
    duration: "15s",
  },
  {
    id: "b5",
    top: "42%",
    left: "4%",
    size: 12,
    rotation: 80,
    opacity: 0.18,
    delay: "4.1s",
    duration: "20s",
  },
  {
    id: "b6",
    top: "88%",
    left: "48%",
    size: 15,
    rotation: -60,
    opacity: 0.2,
    delay: "1.8s",
    duration: "17s",
  },
  {
    id: "b7",
    top: "18%",
    left: "82%",
    size: 13,
    rotation: 35,
    opacity: 0.22,
    delay: "5.0s",
    duration: "19s",
  },
];

const SUBTLE_BEANS: BeanData[] = [
  {
    id: "sb1",
    top: "15%",
    left: "6%",
    size: 14,
    rotation: 20,
    opacity: 0.18,
    delay: "0s",
    duration: "16s",
  },
  {
    id: "sb2",
    top: "70%",
    left: "92%",
    size: 16,
    rotation: -30,
    opacity: 0.18,
    delay: "2s",
    duration: "18s",
  },
  {
    id: "sb3",
    top: "85%",
    left: "8%",
    size: 12,
    rotation: 45,
    opacity: 0.15,
    delay: "4s",
    duration: "20s",
  },
];

export const CoffeeBeans: React.FC<CoffeeBeansProps> = ({
  variant = "hero",
  parallaxOffset = { x: 0, y: 0 },
}) => {
  if (variant === "reading") return null;

  const beans =
    variant === "hero" || variant === "roadmap" ? HERO_BEANS : SUBTLE_BEANS;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-transform duration-500 ease-out"
      style={{
        transform: `translate3d(${parallaxOffset.x * 1.6}px, ${parallaxOffset.y * 1.6}px, 0)`,
      }}
    >
      {beans.map((bean) => (
        <div
          key={bean.id}
          className="absolute"
          style={{
            top: bean.top,
            left: bean.left,
            animation: `coffeeBeanDrift ${bean.duration} ease-in-out infinite alternate`,
            animationDelay: bean.delay,
            opacity: bean.opacity,
          }}
        >
          {/* Abstract stylized coffee bean SVG */}
          <svg
            width={bean.size}
            height={bean.size * 1.35}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `rotate(${bean.rotation}deg)`,
              filter: "drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))",
            }}
          >
            <defs>
              <linearGradient
                id={`beanGrad-${bean.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8C5E3C" />
                <stop offset="50%" stopColor="#70472B" />
                <stop offset="100%" stopColor="#5C3820" />
              </linearGradient>
              <linearGradient
                id={`beanCrease-${bean.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#B8835A" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3B2A22" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#B8835A" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Coffee Bean Outer Body */}
            <ellipse
              cx="12"
              cy="16"
              rx="10"
              ry="14"
              fill={`url(#beanGrad-${bean.id})`}
              stroke="#8C5E3C"
              strokeWidth="0.75"
            />

            {/* Coffee Bean Characteristic S-curve Crease */}
            <path
              d="M12 4C13.5 9 9.5 13 12 16C14.5 19 10.5 23 12 28"
              stroke={`url(#beanCrease-${bean.id})`}
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
