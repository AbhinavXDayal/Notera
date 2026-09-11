import React from "react";
import type { BackgroundVariant } from "./DotMatrixCanvas";

interface CoffeeSteamProps {
  variant?: BackgroundVariant;
  parallaxOffset?: { x: number; y: number };
}

export const CoffeeSteam: React.FC<CoffeeSteamProps> = ({
  variant = "hero",
  parallaxOffset = { x: 0, y: 0 },
}) => {
  if (variant === "reading") return null;

  const isHero = variant === "hero";
  const isRoadmap = variant === "roadmap";

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        transform: `translate3d(${parallaxOffset.x * 0.8}px, ${parallaxOffset.y * 0.8}px, 0)`,
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="steamGradient1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4A7C59" stopOpacity="0" />
            <stop offset="30%" stopColor="#4A7C59" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#8FA89B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#E5EAE3" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="steamGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#6B6358" stopOpacity="0" />
            <stop offset="40%" stopColor="#C4A66A" stopOpacity="0.16" />
            <stop offset="80%" stopColor="#8FA89B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#E5EAE3" stopOpacity="0" />
          </linearGradient>

          <filter id="steamBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Steam Cluster 1 - Top Right (Hero background area) */}
        <g
          filter="url(#steamBlur)"
          style={{
            transformOrigin: "1150px 380px",
            animation: "coffeeSteamRising 16s ease-in-out infinite",
          }}
        >
          <path
            d="M 1150,420 C 1140,360 1170,300 1145,220 C 1125,150 1160,90 1135,20"
            stroke="url(#steamGradient1)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 1175,440 C 1195,380 1165,310 1185,230 C 1205,160 1170,100 1190,30"
            stroke="url(#steamGradient2)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{ animationDelay: "4s" }}
          />
        </g>

        {/* Steam Cluster 2 - Bottom Left margin */}
        {(isHero || isRoadmap) && (
          <g
            filter="url(#steamBlur)"
            style={{
              transformOrigin: "180px 720px",
              animation: "coffeeSteamRising 18s ease-in-out infinite",
              animationDelay: "3s",
            }}
          >
            <path
              d="M 180,780 C 165,710 200,640 175,560 C 155,490 190,420 170,340"
              stroke="url(#steamGradient2)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 210,800 C 230,730 195,660 220,580 C 240,510 210,440 230,360"
              stroke="url(#steamGradient1)"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              style={{ animationDelay: "7s" }}
            />
          </g>
        )}

        {/* Steam Cluster 3 - Mid Right margin */}
        {isRoadmap && (
          <g
            filter="url(#steamBlur)"
            style={{
              transformOrigin: "1280px 650px",
              animation: "coffeeSteamRising 20s ease-in-out infinite",
              animationDelay: "8s",
            }}
          >
            <path
              d="M 1280,720 C 1260,650 1295,580 1270,500 C 1250,430 1285,360 1265,280"
              stroke="url(#steamGradient1)"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
