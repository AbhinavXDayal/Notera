import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  LayoutGrid,
  Move,
  GripVertical,
} from "lucide-react";

interface NodePosition {
  x: number;
  y: number;
}

interface CatOverviewCanvasProps {
  fieldGuideCard: React.ReactNode;
  roadmapCard: React.ReactNode;
  notesCard: React.ReactNode;
  activeStageId: string | null;
}

const DEFAULT_CARD_POSITIONS: Record<string, NodePosition> = {
  "field-guide": { x: 40, y: 40 },
  roadmap: { x: 40, y: 320 },
  notes: { x: 680, y: 320 },
};

const CARD_CONNECTIONS: [string, string][] = [
  ["field-guide", "roadmap"],
  ["roadmap", "notes"],
];

export const CatOverviewCanvas: React.FC<CatOverviewCanvasProps> = ({
  fieldGuideCard,
  roadmapCard,
  notesCard,
  activeStageId,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [positions, setPositions] =
    useState<Record<string, NodePosition>>(DEFAULT_CARD_POSITIONS);
  const [zoom, setZoom] = useState<number>(0.85);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 20, y: 20 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [draggingCard, setDraggingCard] = useState<string | null>(null);
  const [cardDimensions, setCardDimensions] = useState<
    Record<string, { width: number; height: number }>
  >({});

  const measureCards = useCallback(() => {
    const dims: Record<string, { width: number; height: number }> = {};
    Object.entries(cardRefs.current).forEach(([id, el]) => {
      if (el) {
        dims[id] = {
          width: el.offsetWidth || 560,
          height: el.offsetHeight || 400,
        };
      }
    });
    setCardDimensions((prev) => ({ ...prev, ...dims }));
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      measureCards();
    });
    const timer = setTimeout(measureCards, 150);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [measureCards, activeStageId]);

  // Handle Dragging of an entire Card
  const handleCardPointerDown = (e: React.PointerEvent, cardId: string) => {
    e.stopPropagation();
    setDraggingCard(cardId);

    const startPointer = { x: e.clientX, y: e.clientY };
    const startPos = positions[cardId] || { x: 0, y: 0 };

    const onPointerMove = (moveEvent: PointerEvent) => {
      const deltaX = (moveEvent.clientX - startPointer.x) / zoom;
      const deltaY = (moveEvent.clientY - startPointer.y) / zoom;
      setPositions((prev) => ({
        ...prev,
        [cardId]: {
          x: Math.max(10, Math.round(startPos.x + deltaX)),
          y: Math.max(10, Math.round(startPos.y + deltaY)),
        },
      }));
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      setDraggingCard(null);
      measureCards();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  // Handle Canvas Background Panning
  const handleCanvasPointerDown = (e: React.PointerEvent) => {
    if (
      e.target !== e.currentTarget &&
      !(e.target as HTMLElement).classList.contains("canvas-bg")
    ) {
      return;
    }
    setIsPanning(true);
    const startPointer = { x: e.clientX, y: e.clientY };
    const startPan = { ...pan };

    const onPointerMove = (moveEvent: PointerEvent) => {
      setPan({
        x: startPan.x + (moveEvent.clientX - startPointer.x),
        y: startPan.y + (moveEvent.clientY - startPointer.y),
      });
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      setIsPanning(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const handleAutoArrange = () => {
    setPositions(DEFAULT_CARD_POSITIONS);
    setZoom(0.85);
    setPan({ x: 20, y: 20 });
    setTimeout(measureCards, 60);
  };

  const handleZoom = (delta: number) => {
    setZoom((prev) =>
      Math.min(1.4, Math.max(0.45, Number((prev + delta).toFixed(2))))
    );
  };

  const handleResetZoom = () => {
    setZoom(0.85);
    setPan({ x: 20, y: 20 });
  };

  // Dynamic Bezier connector between cards
  const renderCardConnectionLine = (fromId: string, toId: string) => {
    const fromPos = positions[fromId] || { x: 0, y: 0 };
    const toPos = positions[toId] || { x: 0, y: 0 };

    const fromDim = cardDimensions[fromId] || { width: 560, height: 400 };
    const toDim = cardDimensions[toId] || { width: 560, height: 400 };

    const fromCenter = {
      x: fromPos.x + fromDim.width / 2,
      y: fromPos.y + fromDim.height / 2,
    };
    const toCenter = {
      x: toPos.x + toDim.width / 2,
      y: toPos.y + toDim.height / 2,
    };

    const dx = toCenter.x - fromCenter.x;
    const dy = toCenter.y - fromCenter.y;

    let startX = fromPos.x + fromDim.width;
    let startY = fromCenter.y;
    let endX = toPos.x;
    let endY = toCenter.y;

    if (Math.abs(dx) < 220) {
      // Stacked vertically
      if (dy > 0) {
        startX = fromCenter.x;
        startY = fromPos.y + fromDim.height;
        endX = toCenter.x;
        endY = toPos.y;
      } else {
        startX = fromCenter.x;
        startY = fromPos.y;
        endX = toCenter.x;
        endY = toPos.y + toDim.height;
      }
    } else if (dx < 0) {
      // Flowing leftwards
      startX = fromPos.x;
      startY = fromCenter.y;
      endX = toPos.x + toDim.width;
      endY = toCenter.y;
    }

    const controlDist = Math.max(60, Math.min(220, Math.hypot(dx, dy) * 0.45));
    let cx1 = startX + (dx >= 0 ? controlDist : -controlDist);
    let cy1 = startY;
    let cx2 = endX - (dx >= 0 ? controlDist : -controlDist);
    let cy2 = endY;

    if (Math.abs(dx) < 220) {
      cx1 = startX;
      cy1 = startY + (dy >= 0 ? controlDist : -controlDist);
      cx2 = endX;
      cy2 = endY - (dy >= 0 ? controlDist : -controlDist);
    }

    const pathData = `M ${startX} ${startY} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${endX} ${endY}`;

    return (
      <g key={`card-conn-${fromId}-${toId}`}>
        {/* Glow halo */}
        <path
          d={pathData}
          fill="none"
          stroke="#D8C3A5"
          strokeWidth="8"
          strokeOpacity="0.22"
          className="transition-all duration-300"
        />
        {/* Main line */}
        <path
          d={pathData}
          fill="none"
          stroke="#D8C3A5"
          strokeWidth="2.5"
          strokeDasharray="8,5"
          className="animate-pulse transition-all"
          markerEnd="url(#card-arrowhead)"
        />
        {/* Midpoint connection node */}
        <circle
          cx={(startX + endX) / 2}
          cy={(startY + endY) / 2}
          r="5"
          fill="#322720"
          stroke="#D8C3A5"
          strokeWidth="2"
        />
      </g>
    );
  };

  const cardsMap: Record<
    string,
    { title: string; width: string; content: React.ReactNode }
  > = {
    "field-guide": {
      title: "Field Guide Framework",
      width: "w-[1220px] max-w-[1220px]",
      content: fieldGuideCard,
    },
    roadmap: {
      title: "Roadmap Card",
      width: "w-[590px] max-w-[590px]",
      content: roadmapCard,
    },
    notes: {
      title: "Notes Card",
      width: "w-[590px] max-w-[590px]",
      content: notesCard,
    },
  };

  return (
    <div className="space-y-4">
      {/* Canvas Top Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-surface-container border border-outline-variant shadow-sm text-xs">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1 font-mono text-primary font-bold">
            <Move className="w-3.5 h-3.5" />
            <span>Excalidraw Card Board</span>
          </span>
          <span className="text-secondary/70 hidden sm:inline">•</span>
          <span className="text-secondary hidden sm:inline font-light">
            Drag entire cards (Roadmap, Notes, Field Guide) to position them anywhere
          </span>
        </div>

        <div className="flex items-center space-x-1.5">
          {/* Zoom Controls */}
          <div className="flex items-center bg-surface border border-outline-variant rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => handleZoom(-0.1)}
              className="p-1 text-secondary hover:text-primary rounded hover:bg-surface-container transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px] text-on-surface select-none">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => handleZoom(0.1)}
              className="p-1 text-secondary hover:text-primary rounded hover:bg-surface-container transition-colors cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleResetZoom}
            className="p-1.5 text-secondary hover:text-primary bg-surface border border-outline-variant rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
            title="Reset View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={handleAutoArrange}
            className="inline-flex items-center space-x-1 px-2.5 py-1 text-secondary hover:text-primary bg-surface border border-outline-variant hover:border-primary rounded-lg transition-colors cursor-pointer"
            title="Auto Arrange Cards"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">Tidy Board</span>
          </button>
        </div>
      </div>

      {/* Infinite/Spacious Canvas Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handleCanvasPointerDown}
        className={`relative w-full h-[780px] rounded-2xl bg-[#261E19] border border-outline-variant overflow-hidden select-none canvas-bg shadow-inner ${
          isPanning ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, rgba(216, 195, 165, 0.18) 1.2px, transparent 1.2px)`,
          backgroundSize: `${24 * zoom}px ${24 * zoom}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      >
        {/* Canvas Transformation Layer */}
        <div
          className="absolute inset-0 origin-top-left transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            width: "3200px",
            height: "2600px",
          }}
        >
          {/* SVG Connection Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ width: "3200px", height: "2600px" }}
          >
            <defs>
              <marker
                id="card-arrowhead"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D8C3A5" />
              </marker>
            </defs>

            {CARD_CONNECTIONS.map(([fromId, toId]) =>
              renderCardConnectionLine(fromId, toId)
            )}
          </svg>

          {/* Draggable Cards on the Board */}
          {Object.entries(cardsMap).map(([id, card]) => {
            const pos = positions[id] || { x: 50, y: 50 };
            const isDraggingThis = draggingCard === id;

            return (
              <div
                key={id}
                ref={(el) => {
                  cardRefs.current[id] = el;
                }}
                style={{
                  transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
                  zIndex: isDraggingThis ? 50 : 20,
                }}
                className={`absolute ${card.width} transition-shadow duration-200 ${
                  isDraggingThis ? "shadow-2xl scale-[1.01] opacity-95" : ""
                }`}
              >
                {/* Drag Grip Handle Bar above the card */}
                <div
                  onPointerDown={(e) => handleCardPointerDown(e, id)}
                  className="mb-2 px-3 py-1.5 rounded-lg bg-surface/80 hover:bg-surface border border-outline-variant hover:border-primary flex items-center justify-between cursor-grab active:cursor-grabbing backdrop-blur transition-all"
                >
                  <div className="flex items-center space-x-2">
                    <GripVertical className="w-3.5 h-3.5 text-primary" />
                    <span className="font-mono text-xs font-semibold text-on-surface">
                      {card.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-secondary">
                    Drag to move
                  </span>
                </div>

                {/* Card Content Component */}
                <div className="w-full">{card.content}</div>
              </div>
            );
          })}
        </div>

        {/* Viewport Floating Mini-Help Banner */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur border border-outline-variant text-[11px] font-mono text-secondary pointer-events-none">
          💡 Drag card headers to reposition • Drag canvas background to pan • Zoom with toolbar
        </div>
      </div>
    </div>
  );
};
