import React, { useEffect, useState } from "react";
import {
  BookOpen,
  ArrowRight,
  Compass,
  Sparkles,
  Loader2,
} from "lucide-react";
import type { TopicAiExplanation, AiExplainContext } from "../../types/ai";
import { aiService } from "../../services/aiService";
import { AskNoteraWidget } from "./AskNoteraWidget";

interface TopicAiExplanationCardProps {
  context: AiExplainContext;
  initialData?: TopicAiExplanation;
  children?: React.ReactNode;
  onNavigateTopic?: (topicId: string) => void;
  className?: string;
}

export const TopicAiExplanationCard: React.FC<TopicAiExplanationCardProps> = ({
  context,
  initialData,
  children,
  onNavigateTopic,
  className = "",
}) => {
  const [data, setData] = useState<TopicAiExplanation | null>(
    initialData || null,
  );
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    let isMounted = true;

    if (!initialData) {
      setLoading(true);
      aiService
        .getTopicExplanation(context)
        .then((res) => {
          if (isMounted) {
            setData(res);
            setLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) {
            setLoading(false);
          }
        });
    } else {
      setData(initialData);
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [context, initialData]);

  if (loading) {
    return (
      <div className="p-8 rounded-xl bg-surface border border-outline-variant/60 flex flex-col items-center justify-center space-y-3 text-secondary font-mono text-xs">
        <Loader2 className="w-5 h-5 text-primary animate-spin" />
        <span>Synthesizing structured curriculum explanation...</span>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className={`space-y-6 pt-1 ${className}`}>
      {/* ─────────────────────────────────────────────────────────────
          1. CORE EXPLANATION & SUMMARY
      ───────────────────────────────────────────────────────────── */}
      <div className="bg-surface border border-outline-variant rounded-xl p-5 sm:p-6 space-y-4 shadow-sm">
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-outline-variant/50">
          <div className="flex items-center space-x-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Core Curriculum Breakdown</span>
          </div>
          <span className="text-[10px] font-mono text-tertiary bg-surface-container px-2 py-0.5 rounded border border-outline-variant/60">
            {context.stage}
          </span>
        </div>

        {/* Clear Explanation */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm text-secondary font-mono italic">
            "{data.summary}"
          </p>
          <p className="text-sm text-on-surface leading-relaxed pt-1">
            {data.explanation}
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. WHAT YOU NEED TO UNDERSTAND (Key Points)
        ───────────────────────────────────────────────────────────── */}
        <div className="pt-3 border-t border-outline-variant/50 space-y-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <h5 className="text-xs font-mono uppercase tracking-wider text-on-surface font-semibold">
              What You Need to Understand
            </h5>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {data.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-surface-container/60 border border-outline-variant/60 rounded-xl p-3.5 flex items-start space-x-3 hover:border-primary/40 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary mt-0.5 font-mono text-[10px] font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-on-surface/90 leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. WHY THIS MATTERS
        ───────────────────────────────────────────────────────────── */}
        <div className="bg-surface-container border-2 border-primary/30 rounded-xl p-4 sm:p-5 flex items-start space-x-4">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold block">
              Why This Matters
            </span>
            <p className="text-xs sm:text-sm text-on-surface font-display italic font-medium leading-relaxed">
              {data.whyItMatters}
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. BEGINNER PERSPECTIVE
        ───────────────────────────────────────────────────────────── */}
        <div className="bg-surface-container-low border border-outline-variant/70 rounded-xl p-4 sm:p-5 flex items-start space-x-4">
          <div className="w-9 h-9 rounded-lg bg-tertiary/10 border border-tertiary/20 flex items-center justify-center shrink-0 text-tertiary mt-0.5">
            <Compass className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-tertiary font-semibold block">
              Beginner Perspective
            </span>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              {data.beginnerPerspective}
            </p>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. WHAT TO LEARN NEXT
        ───────────────────────────────────────────────────────────── */}
        {data.nextTopics && data.nextTopics.length > 0 && (
          <div className="pt-2 border-t border-outline-variant/50 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-secondary font-semibold block">
              What to Learn Next:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {data.nextTopics.map((nextTopic, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (nextTopic.id && onNavigateTopic) {
                      onNavigateTopic(nextTopic.id);
                    }
                  }}
                  className="text-left bg-surface-container border border-outline-variant hover:border-primary/50 p-3 rounded-xl transition-all cursor-pointer group flex items-center justify-between gap-3"
                >
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-xs font-display font-medium text-on-surface group-hover:text-primary transition-colors block truncate">
                      → {nextTopic.title}
                    </span>
                    {nextTopic.tagline && (
                      <p className="text-[11px] text-secondary truncate">
                        {nextTopic.tagline}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────────────
          6. EMBEDDED CUSTOM INTERACTIVE TOOL (IF ANY)
      ───────────────────────────────────────────────────────────── */}
      {children && <div className="pt-1">{children}</div>}

      {/* ─────────────────────────────────────────────────────────────
          7. ✦ ASK NOTERA IN-PLACE TUTOR
      ───────────────────────────────────────────────────────────── */}
      <AskNoteraWidget context={context} onNavigateTopic={onNavigateTopic} />
    </div>
  );
};
