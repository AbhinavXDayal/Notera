import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronDown,
  Sparkles,
  BookOpen,
  GripVertical,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  LayoutGrid,
  Move,
} from "lucide-react";

interface NodePosition {
  x: number;
  y: number;
}

interface CatRoadmapCanvasProps {
  activeStageId: string | null;
  onSelectStage: (stageId: string) => void;
  openSections: Record<string, boolean>;
  onToggleSection: (stageId: string) => void;
  onExpandAll: () => void;
  onCollapseAll: () => void;
  isAllExpanded: boolean;
}

interface StageData {
  id: string;
  num: string;
  title: string;
  subtitle?: string;
  goal?: string;
  details: React.ReactNode;
}

const STAGE_CONNECTIONS: [string, string][] = [
  ["01", "02"],
  ["02", "03"],
  ["03", "04"],
  ["04", "05"],
  ["05", "06"],
  ["06", "07"],
  ["07", "08"],
  ["08", "09"],
  ["09", "10"],
  ["10", "11"],
  ["11", "12"],
  ["12", "13"],
  ["13", "14"],
  ["14", "summary"],
];

const DEFAULT_POSITIONS: Record<string, NodePosition> = {
  // Row 1 (Left to Right)
  "01": { x: 40, y: 50 },
  "02": { x: 440, y: 50 },
  "03": { x: 840, y: 50 },
  "04": { x: 1240, y: 50 },

  // Row 2 (Right to Left snake)
  "05": { x: 1240, y: 460 },
  "06": { x: 840, y: 460 },
  "07": { x: 440, y: 460 },
  "08": { x: 40, y: 460 },

  // Row 3 (Left to Right)
  "09": { x: 40, y: 880 },
  "10": { x: 440, y: 880 },
  "11": { x: 840, y: 880 },
  "12": { x: 1240, y: 880 },

  // Row 4 (Bottom)
  "13": { x: 1240, y: 1280 },
  "14": { x: 840, y: 1280 },
  summary: { x: 440, y: 1280 },
};

export const CatRoadmapCanvas: React.FC<CatRoadmapCanvasProps> = ({
  activeStageId,
  onSelectStage,
  openSections,
  onToggleSection,
  onExpandAll,
  onCollapseAll,
  isAllExpanded,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [positions, setPositions] =
    useState<Record<string, NodePosition>>(DEFAULT_POSITIONS);
  const [zoom, setZoom] = useState<number>(0.85);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 20, y: 20 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [draggingNode, setDraggingNode] = useState<string | null>(null);
  const [nodeDimensions, setNodeDimensions] = useState<
    Record<string, { width: number; height: number }>
  >({});

  // Measure card sizes for accurate dynamic connection ports
  const measureNodes = useCallback(() => {
    const dims: Record<string, { width: number; height: number }> = {};
    Object.entries(nodeRefs.current).forEach(([id, el]) => {
      if (el) {
        dims[id] = {
          width: el.offsetWidth || 340,
          height: el.offsetHeight || 180,
        };
      }
    });
    setNodeDimensions((prev) => ({ ...prev, ...dims }));
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      measureNodes();
    });
    const timer = setTimeout(measureNodes, 120);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [openSections, measureNodes]);

  // Handle Dragging of a Stage Card
  const handleNodePointerDown = (e: React.PointerEvent, stageId: string) => {
    e.stopPropagation();
    onSelectStage(stageId);
    setDraggingNode(stageId);

    const startPointer = { x: e.clientX, y: e.clientY };
    const startPos = positions[stageId] || { x: 0, y: 0 };

    const onPointerMove = (moveEvent: PointerEvent) => {
      const deltaX = (moveEvent.clientX - startPointer.x) / zoom;
      const deltaY = (moveEvent.clientY - startPointer.y) / zoom;
      setPositions((prev) => ({
        ...prev,
        [stageId]: {
          x: Math.max(10, Math.round(startPos.x + deltaX)),
          y: Math.max(10, Math.round(startPos.y + deltaY)),
        },
      }));
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      setDraggingNode(null);
      measureNodes();
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  // Handle Canvas Background Panning
  const handleCanvasPointerDown = (e: React.PointerEvent) => {
    if (e.target !== e.currentTarget && !(e.target as HTMLElement).classList.contains("canvas-bg")) {
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

  // Reset to tidy layout
  const handleAutoArrange = () => {
    setPositions(DEFAULT_POSITIONS);
    setZoom(0.85);
    setPan({ x: 20, y: 20 });
    setTimeout(measureNodes, 50);
  };

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.min(1.4, Math.max(0.45, Number((prev + delta).toFixed(2)))));
  };

  const handleResetZoom = () => {
    setZoom(0.85);
    setPan({ x: 20, y: 20 });
  };

  // Render Bezier Curve Path between two nodes
  const renderConnectionLine = (fromId: string, toId: string) => {
    const fromPos = positions[fromId] || { x: 0, y: 0 };
    const toPos = positions[toId] || { x: 0, y: 0 };

    const fromDim = nodeDimensions[fromId] || { width: 340, height: 180 };
    const toDim = nodeDimensions[toId] || { width: 340, height: 180 };

    // Calculate smart center anchor ports
    const fromCenter = {
      x: fromPos.x + fromDim.width / 2,
      y: fromPos.y + fromDim.height / 2,
    };
    const toCenter = {
      x: toPos.x + toDim.width / 2,
      y: toPos.y + toDim.height / 2,
    };

    // Determine exit/entry sides based on relative coordinates
    let startX = fromPos.x + fromDim.width;
    let startY = fromCenter.y;
    let endX = toPos.x;
    let endY = toCenter.y;

    const dx = toCenter.x - fromCenter.x;
    const dy = toCenter.y - fromCenter.y;

    if (Math.abs(dx) < 160) {
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

    // Bezier control points
    const controlDist = Math.max(40, Math.min(180, Math.hypot(dx, dy) * 0.4));
    let cx1 = startX + (dx >= 0 ? controlDist : -controlDist);
    let cy1 = startY;
    let cx2 = endX - (dx >= 0 ? controlDist : -controlDist);
    let cy2 = endY;

    if (Math.abs(dx) < 160) {
      cx1 = startX;
      cy1 = startY + (dy >= 0 ? controlDist : -controlDist);
      cx2 = endX;
      cy2 = endY - (dy >= 0 ? controlDist : -controlDist);
    }

    const pathData = `M ${startX} ${startY} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${endX} ${endY}`;
    const isActive = activeStageId === fromId || activeStageId === toId;

    return (
      <g key={`conn-${fromId}-${toId}`}>
        {/* Glow backdrop for active line */}
        {isActive && (
          <path
            d={pathData}
            fill="none"
            stroke="#D8C3A5"
            strokeWidth="7"
            strokeOpacity="0.25"
            className="transition-all duration-300"
          />
        )}
        {/* Main curved connection line */}
        <path
          d={pathData}
          fill="none"
          stroke={isActive ? "#D8C3A5" : "rgba(216, 195, 165, 0.45)"}
          strokeWidth={isActive ? "2.5" : "2"}
          strokeDasharray={isActive ? "6,4" : "none"}
          className={isActive ? "animate-pulse transition-all" : "transition-all"}
          markerEnd="url(#roadmap-arrowhead)"
        />
        {/* Step indicator node on line midpoint */}
        <circle
          cx={(startX + endX) / 2}
          cy={(startY + endY) / 2}
          r={isActive ? "4.5" : "3.5"}
          fill={isActive ? "#D8C3A5" : "#322720"}
          stroke="#D8C3A5"
          strokeWidth="1.5"
        />
      </g>
    );
  };

  const STAGES_DATA: StageData[] = [
    {
      id: "01",
      num: "01",
      title: "Understand the Journey",
      subtitle: "Before studying",
      goal: "Know what you're preparing for before collecting resources",
      details: (
        <div className="space-y-2 text-xs text-secondary">
          <p>• What is CAT?</p>
          <p>• QA, VARC &amp; DILR breakdown</p>
          <p>• Exam pattern &amp; percentile dynamics</p>
          <p>• Target colleges &amp; preparation approach</p>
        </div>
      ),
    },
    {
      id: "02",
      num: "02",
      title: "Build Your Foundation",
      subtitle: "Speed Math & Reading",
      goal: "Start DILR & VARC immediately with core Quant foundations",
      details: (
        <div className="space-y-2 text-xs text-secondary">
          <p>
            <strong className="text-primary">QA:</strong> Arithmetic, Algebra &amp; Geometry basics
          </p>
          <p>
            <strong className="text-primary">VARC:</strong> Daily editorial reading &amp; RC structure
          </p>
          <p>
            <strong className="text-primary">DILR:</strong> Matrix grids &amp; set selection
          </p>
        </div>
      ),
    },
    {
      id: "03",
      num: "03",
      title: "Complete Core Syllabus",
      subtitle: "Topic by topic coverage",
      goal: "Master every core topic before intensive mocks",
      details: (
        <pre className="text-[11px] font-mono text-secondary bg-surface/70 border border-outline-variant p-2 rounded overflow-x-auto select-text">
          {`QA: Arith, Alg, Geo, Num, Modern\nVARC: RC, Summary, PJ, Odd-Out\nDILR: DI, LR, Venn, Tournaments`}
        </pre>
      ),
    },
    {
      id: "04",
      num: "04",
      title: "Practice & Application",
      subtitle: "Knowledge into Ability",
      goal: "Move from single-topic theory to timed application",
      details: (
        <div className="space-y-1 text-xs text-secondary font-mono bg-surface/50 p-2 rounded border border-outline-variant/60">
          <p>QA: Concept → Basic → CAT-Level</p>
          <p>VARC: Daily RC → Accuracy Drills</p>
          <p>DILR: Varied Sets → Timed Sets</p>
        </div>
      ),
    },
    {
      id: "05",
      num: "05",
      title: "Sectional Strategy",
      subtitle: "Speed vs Accuracy",
      goal: "Attempt strategically rather than just solving questions",
      details: (
        <div className="space-y-1 text-xs text-secondary">
          <p>• Mixed-topic selection</p>
          <p>• Eliminating wrong options in RC</p>
          <p>• Leaving bad DILR sets within 4 minutes</p>
        </div>
      ),
    },
    {
      id: "06",
      num: "06",
      title: "Enter the Mock Phase",
      subtitle: "Sectionals & Full Tests",
      goal: "Start mocks before feeling 'perfectly ready'",
      details: (
        <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2 rounded">
          LEARN ↓ PRACTICE ↓ SECTIONALS ↓ FULL MOCKS
        </div>
      ),
    },
    {
      id: "07",
      num: "07",
      title: "Mock Analysis",
      subtitle: "Deep Error Diagnostic",
      goal: "A mock without analysis is incomplete preparation",
      details: (
        <div className="space-y-1 text-xs text-secondary">
          <p>• Track wrong vs skipped questions</p>
          <p>• Identify time wasted on trap sets</p>
          <p>• Build actionable plan for next mock</p>
        </div>
      ),
    },
    {
      id: "08",
      num: "08",
      title: "Previous Year Questions",
      subtitle: "Real CAT Standards",
      goal: "Calibrate examiner mindset and real difficulty",
      details: (
        <div className="space-y-1 text-xs text-secondary">
          <p>• Solve past 5-year actual CAT slots</p>
          <p>• Diagnose recurring question patterns</p>
        </div>
      ),
    },
    {
      id: "09",
      num: "09",
      title: "Personal CAT Strategy",
      subtitle: "Tailored to You",
      goal: "Personalize order of attempts and skipping heuristics",
      details: (
        <pre className="text-[11px] font-mono text-secondary bg-surface/70 border border-outline-variant p-2 rounded overflow-x-auto select-text">
          {`QA: Which questions to attempt?\nVARC: Reading cadence & passage order\nDILR: 4-min set filtering heuristic`}
        </pre>
      ),
    },
    {
      id: "10",
      num: "10",
      title: "Revision & Error Correction",
      subtitle: "Master Revision Codices",
      goal: "Formula Sheet • Mistake Book • DILR Archive",
      details: (
        <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2 rounded">
          WEAKNESS ↓ IDENTIFY ↓ PRACTICE ↓ REVISIT
        </div>
      ),
    },
    {
      id: "11",
      num: "11",
      title: "Intensive Mock Phase",
      subtitle: "Peak Stamina & Speed",
      goal: "Focus entirely on temperament and error reduction",
      details: (
        <div className="space-y-1 text-xs text-secondary">
          <p>• 2 to 3 full mocks per week</p>
          <p>• Strict 2-hour exam conditioning</p>
        </div>
      ),
    },
    {
      id: "12",
      num: "12",
      title: "Final Month",
      subtitle: "Less Chaos • More Revision",
      goal: "Do not hoard new PDFs or random strategies",
      details: (
        <div className="space-y-1 text-xs text-secondary">
          <p>• Review strongest high-yield areas</p>
          <p>• Re-read Mistake Book &amp; Formula Sheet</p>
        </div>
      ),
    },
    {
      id: "13",
      num: "13",
      title: "CAT Exam Strategy",
      subtitle: "D-Day Execution",
      goal: "Calm ↓ Select ↓ Solve ↓ Skip ↓ Move On",
      details: (
        <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2 rounded">
          CALM ↓ SELECT ↓ SOLVE ↓ SKIP ↓ MOVE ON
        </div>
      ),
    },
    {
      id: "14",
      num: "14",
      title: "Beyond CAT",
      subtitle: "Interviews & Admissions",
      goal: "WAT / GD / PI Preparation & College Selection",
      details: (
        <div className="text-xs font-mono text-primary bg-surface/60 border border-outline-variant p-2 rounded">
          RESULTS → SHORTLISTS → WAT / GD / PI → MBA JOURNEY
        </div>
      ),
    },
    {
      id: "summary",
      num: "★",
      title: "The Notera CAT Journey",
      subtitle: "14 Preparation Milestones",
      goal: "End-to-End Preparation Mastery",
      details: (
        <div className="grid grid-cols-2 gap-1 text-[11px] font-mono text-secondary">
          <p>01. Understand CAT</p>
          <p>02. Foundations</p>
          <p>03. Core Syllabus</p>
          <p>04. Practice &amp; Apply</p>
          <p>05. Sectionals</p>
          <p>06. Mock Phase</p>
          <p>07. Mock Analysis</p>
          <p>08. PYQ Mastery</p>
          <p>09. Strategy</p>
          <p>10. Revision</p>
          <p>11. Intensive Mocks</p>
          <p>12. Final Month</p>
          <p>13. Exam Day</p>
          <p>14. Interviews</p>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      {/* Canvas Top Controls Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-surface-container border border-outline-variant shadow-sm text-xs">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center space-x-1 font-mono text-primary font-bold">
            <Move className="w-3.5 h-3.5" />
            <span>Excalidraw Canvas</span>
          </span>
          <span className="text-secondary/70 hidden sm:inline">•</span>
          <span className="text-secondary hidden sm:inline font-light">
            Drag any stage to reposition • Lines update live
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
            title="Auto Arrange / Tidy Layout"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">Tidy Flow</span>
          </button>

          <button
            type="button"
            onClick={isAllExpanded ? onCollapseAll : onExpandAll}
            className="px-2.5 py-1 font-mono text-[11px] text-primary bg-primary/10 border border-primary/30 hover:bg-primary/20 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            {isAllExpanded ? "Collapse All" : "Expand All"}
          </button>
        </div>
      </div>

      {/* Infinite/Spacious Canvas Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handleCanvasPointerDown}
        className={`relative w-full h-[620px] rounded-2xl bg-[#261E19] border border-outline-variant overflow-hidden select-none canvas-bg shadow-inner ${
          isPanning ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, rgba(216, 195, 165, 0.18) 1.2px, transparent 1.2px)`,
          backgroundSize: `${24 * zoom}px ${24 * zoom}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      >
        {/* Canvas Transformation Matrix */}
        <div
          className="absolute inset-0 origin-top-left transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            width: "2200px",
            height: "1700px",
          }}
        >
          {/* SVG Connection Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ width: "2200px", height: "1700px" }}
          >
            <defs>
              <marker
                id="roadmap-arrowhead"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#D8C3A5" />
              </marker>
            </defs>

            {STAGE_CONNECTIONS.map(([fromId, toId]) =>
              renderConnectionLine(fromId, toId)
            )}
          </svg>

          {/* Draggable Stage Cards */}
          {STAGES_DATA.map((stage) => {
            const pos = positions[stage.id] || { x: 50, y: 50 };
            const isOpen = openSections[stage.id] ?? true;
            const isConnected = activeStageId === stage.id;
            const isDraggingThis = draggingNode === stage.id;

            return (
              <div
                key={stage.id}
                ref={(el) => {
                  nodeRefs.current[stage.id] = el;
                }}
                style={{
                  transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
                  width: "350px",
                  zIndex: isDraggingThis ? 50 : isConnected ? 30 : 10,
                }}
                className={`absolute rounded-2xl border transition-shadow duration-200 ${
                  isConnected
                    ? "bg-[#322720] border-primary ring-2 ring-primary/40 shadow-xl"
                    : "bg-[#2D231D] border-outline-variant hover:border-primary/60 shadow-terra-card"
                } ${isDraggingThis ? "shadow-2xl scale-[1.02] opacity-95" : ""}`}
              >
                {/* Drag Handle & Card Header */}
                <div
                  onPointerDown={(e) => handleNodePointerDown(e, stage.id)}
                  className={`p-3.5 flex items-center justify-between rounded-t-2xl cursor-grab active:cursor-grabbing border-b ${
                    isConnected
                      ? "border-primary/30 bg-primary/10"
                      : "border-outline-variant/50 bg-surface/30"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-secondary/60 hover:text-primary transition-colors p-0.5">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary px-1.5 py-0.5 rounded bg-surface border border-outline-variant">
                      {stage.num}
                    </span>
                    <h4 className="font-display text-sm font-semibold text-on-surface truncate max-w-[170px]">
                      {stage.title}
                    </h4>
                  </div>

                  <div className="flex items-center space-x-1.5">
                    {isConnected && (
                      <span className="inline-flex items-center space-x-1 text-[9px] font-mono font-semibold text-primary bg-primary/15 border border-primary/30 px-1.5 py-0.5 rounded">
                        <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                        <span>SYNC</span>
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSection(stage.id);
                        onSelectStage(stage.id);
                      }}
                      className="p-1 rounded-md text-secondary hover:text-primary hover:bg-surface transition-colors cursor-pointer"
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 space-y-3">
                  {stage.subtitle && (
                    <p className="text-[11px] text-secondary font-mono uppercase tracking-wider">
                      {stage.subtitle}
                    </p>
                  )}

                  {/* Collapsible Content */}
                  {isOpen ? (
                    <div className="space-y-3 pt-1 fade-in">
                      {stage.details}
                      {stage.goal && (
                        <p className="text-xs text-primary font-medium border-t border-outline-variant/40 pt-2">
                          {stage.goal}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-[11px] text-secondary line-clamp-1 italic">
                      {stage.goal || "Click to expand details..."}
                    </div>
                  )}

                  {/* Footer Action to sync with Notes */}
                  <div className="pt-2 flex items-center justify-between border-t border-outline-variant/40">
                    <span className="text-[10px] font-mono text-secondary">
                      {stage.id === "summary" ? "All Stages" : `Stage ${stage.id}`}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStage(stage.id);
                      }}
                      className="inline-flex items-center space-x-1 text-[11px] font-mono text-primary hover:text-on-surface bg-surface border border-outline-variant hover:border-primary px-2 py-0.5 rounded transition-all cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>View Notes →</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Viewport Floating Mini-Help Banner */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-surface/80 backdrop-blur border border-outline-variant text-[11px] font-mono text-secondary pointer-events-none">
          💡 Drag cards freely • Drag canvas to pan • Scroll to navigate
        </div>
      </div>
    </div>
  );
};
