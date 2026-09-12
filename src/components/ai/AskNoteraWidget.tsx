import React, { useState } from "react";
import { Sparkles, Send, Bot, User, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import type { AiExplainContext, AiChatMessage } from "../../types/ai";
import { aiService } from "../../services/aiService";

interface AskNoteraWidgetProps {
  context: AiExplainContext;
  className?: string;
  onNavigateTopic?: (topicId: string) => void;
}

const PRESET_QUESTIONS = [
  "Explain this more simply",
  "Give me an example",
  "Why is this important?",
  "What should I learn next?",
];

export const AskNoteraWidget: React.FC<AskNoteraWidgetProps> = ({
  context,
  className = "",
  onNavigateTopic: _onNavigateTopic,
}) => {
  const [messages, setMessages] = useState<AiChatMessage[]>([]);
  const [inputQuery, setInputQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendQuestion = async (queryText: string) => {
    const trimmed = queryText.trim();
    if (!trimmed || isLoading) return;

    const userMessage: AiChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmed,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery("");
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await aiService.askNotera(context, trimmed, historyPayload);

      const assistantMessage: AiChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        text: response.reply,
        keyPoints: response.keyPoints,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const fallbackMessage: AiChatMessage = {
        id: `assistant-err-${Date.now()}`,
        role: "assistant",
        text: `Regarding **${context.topic}**: Maintain a steady focus on accuracy, regular timed practice sets, and diligent mock analysis to continuously scale your performance.`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendQuestion(inputQuery);
    }
  };

  return (
    <div
      className={`rounded-xl bg-surface-container/70 border border-outline-variant/80 p-4 sm:p-5 space-y-4 shadow-sm ${className}`}
    >
      {/* Tutor Header */}
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
        <div className="flex items-center space-x-2 text-primary font-display font-medium text-sm sm:text-base">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="tracking-wide">✦ Ask Notera</span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-tertiary bg-surface px-2 py-0.5 rounded border border-outline-variant/60">
          In-Place Academic Tutor
        </span>
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-secondary">
          Suggested Inquiries:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              type="button"
              disabled={isLoading}
              onClick={() => handleSendQuestion(q)}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-surface border border-outline-variant/80 hover:border-primary text-secondary hover:text-primary transition-all cursor-pointer disabled:opacity-50 text-left flex items-center space-x-1 group"
            >
              <span>{q}</span>
              <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
            </button>
          ))}
        </div>
      </div>

      {/* Message Thread History */}
      {messages.length > 0 && (
        <div className="space-y-3 pt-2 max-h-96 overflow-y-auto pr-1">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-2.5 text-xs sm:text-sm ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 text-primary mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`p-3 rounded-xl max-w-[88%] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-on-primary font-medium"
                    : "bg-surface border border-outline-variant text-on-surface space-y-2"
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Optional Key Takeaway Bullets */}
                {msg.keyPoints && msg.keyPoints.length > 0 && (
                  <div className="pt-2 mt-2 border-t border-outline-variant/50 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-tertiary font-semibold block">
                      Core Takeaways:
                    </span>
                    {msg.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start space-x-1.5 text-xs text-secondary">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {msg.role === "user" && (
                <div className="w-6 h-6 rounded-md bg-surface-container-high border border-outline-variant flex items-center justify-center shrink-0 text-secondary mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator in Thread */}
          {isLoading && (
            <div className="flex items-center space-x-2 text-xs text-secondary font-mono bg-surface p-2.5 rounded-lg border border-outline-variant w-fit">
              <Loader2 className="w-3.5 h-3.5 text-primary animate-spin" />
              <span>Notera Tutor is synthesizing explanation...</span>
            </div>
          )}
        </div>
      )}

      {/* Input Box for Custom User Question */}
      <div className="pt-1 flex items-center space-x-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Ask anything about ${context.topic}...`}
            disabled={isLoading}
            className="w-full bg-surface border border-outline-variant focus:border-primary focus:outline-none rounded-xl px-3.5 py-2 text-xs sm:text-sm text-on-surface placeholder:text-secondary/60 transition-colors"
          />
        </div>
        <button
          type="button"
          disabled={!inputQuery.trim() || isLoading}
          onClick={() => handleSendQuestion(inputQuery)}
          className="px-3.5 py-2 rounded-xl bg-primary hover:bg-primary-hover disabled:opacity-40 text-on-primary text-xs font-mono font-semibold transition-all cursor-pointer flex items-center space-x-1 shrink-0 shadow-xs"
        >
          {isLoading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Send className="w-3.5 h-3.5" />
          )}
          <span className="hidden sm:inline">Ask</span>
        </button>
      </div>
    </div>
  );
};
