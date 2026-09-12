import type {
  TopicAiExplanation,
  AiExplainContext,
  AskNoteraResponse,
} from "../types/ai";
import {
  CAT_STAGE_01_EXPLANATIONS,
  generateFallbackTopicExplanation,
  getFallbackAskNoteraReply,
} from "../data/catContent";

class AiService {
  private endpoint = "/api/explain";
  private requestTimeoutMs = 5000;

  /**
   * Fetches a structured educational topic explanation.
   * Attempts serverless backend call first, then falls back seamlessly to curated local content.
   */
  public async getTopicExplanation(
    context: AiExplainContext,
  ): Promise<TopicAiExplanation> {
    const topicKey = context.topicId || this.normalizeKey(context.topic);

    // 1. Check if backend endpoint is reachable
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.requestTimeoutMs,
      );

      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "explain-topic",
          context,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && data.explanation && data.keyPoints) {
          return data as TopicAiExplanation;
        }
      }
    } catch {
      // Backend not running or offline; gracefully proceed to curated fallback
    }

    // 2. Curated Local High-Fidelity Fallback
    if (CAT_STAGE_01_EXPLANATIONS[topicKey]) {
      return CAT_STAGE_01_EXPLANATIONS[topicKey];
    }

    // 3. Dynamic Knowledge Fallback for other topics
    return generateFallbackTopicExplanation(context);
  }

  /**
   * Answers a contextual question for "✦ Ask Notera" in-place tutor.
   */
  public async askNotera(
    context: AiExplainContext,
    question: string,
    _chatHistory: { role: "user" | "assistant"; text: string }[] = [],
  ): Promise<AskNoteraResponse> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        this.requestTimeoutMs,
      );

      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "ask-tutor",
          context,
          question,
          chatHistory: _chatHistory,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && data.reply) {
          return data as AskNoteraResponse;
        }
      }
    } catch {
      // Graceful fallback to curated knowledge
    }

    // Local smart simulation
    // Add realistic tutor latency (300-600ms) for pleasant tactile feel
    await new Promise((resolve) => setTimeout(resolve, 450));
    return getFallbackAskNoteraReply(context.topic, question, context);
  }

  private normalizeKey(topicName: string): string {
    return topicName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
}

export const aiService = new AiService();
