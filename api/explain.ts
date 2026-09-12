/**
 * Serverless Backend Endpoint for Notera AI Explanation System
 * 
 * IMPORTANT: Secrets like OPENAI_API_KEY are accessed only here on the server side
 * via process.env. The frontend never receives or contains the secret API key.
 */

interface ServerlessRequest {
  method?: string;
  body?: {
    action?: "explain-topic" | "ask-tutor";
    context?: {
      field: string;
      section: string;
      stage: string;
      topic: string;
      topicId?: string;
    };
    question?: string;
    chatHistory?: { role: "user" | "assistant"; text: string }[];
  };
}

interface ServerlessResponse {
  status: (code: number) => ServerlessResponse;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

export default async function handler(req: ServerlessRequest, res: ServerlessResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).json({ ok: true });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  // If no API key configured on server, return 503 so frontend smoothly uses local curated fallback
  if (!apiKey) {
    return res.status(503).json({
      error: "OPENAI_API_KEY is not configured on the backend. Client will use local fallback.",
      fallback: true,
    });
  }

  const { action = "explain-topic", context, question, chatHistory = [] } = req.body || {};

  if (!context) {
    return res.status(400).json({ error: "Missing context object" });
  }

  try {
    if (action === "explain-topic") {
      const prompt = `You are the lead academic tutor at Notera, a premier structured learning platform.
Generate a structured, educational explanation for the following topic:
Field: ${context.field}
Section: ${context.section}
Stage: ${context.stage}
Topic: ${context.topic}

Respond with pure JSON matching this exact structure:
{
  "title": "${context.topic}",
  "summary": "1-2 sentence core summary",
  "explanation": "Clear, comprehensive paragraph explaining the concept and its mechanics without generic fluff",
  "keyPoints": [
    "Key point 1",
    "Key point 2",
    "Key point 3",
    "Key point 4"
  ],
  "whyItMatters": "Why this specific concept is vital for high competitive exam scores",
  "beginnerPerspective": "A simple, reassuring analogy or explanation for someone completely new",
  "nextTopics": [
    { "title": "Next Topic 1", "tagline": "Brief description" },
    { "title": "Next Topic 2", "tagline": "Brief description" }
  ]
}`;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are an expert curriculum designer and competitive exam master tutor. You produce structured, highly authoritative, concise educational content in JSON.",
            },
            { role: "user", content: prompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.3,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const raw = await response.json();
      const content = JSON.parse(raw.choices[0].message.content);
      return res.status(200).json(content);
    }

    if (action === "ask-tutor") {
      if (!question) {
        return res.status(400).json({ error: "Missing question" });
      }

      const tutorPrompt = `You are Notera's in-place academic tutor.
Context:
Field: ${context.field}
Section: ${context.section}
Stage: ${context.stage}
Topic: ${context.topic}

User Question: "${question}"

Provide a concise, direct, helpful educational answer in pure JSON:
{
  "reply": "Direct, insightful answer with clear reasoning",
  "keyPoints": ["Optional actionable tip 1", "Optional actionable tip 2"]
}`;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are Notera's expert academic tutor. You answer student questions with extreme pedagogical clarity, practical exam advice, and structured bullet takeaways.",
            },
            ...chatHistory.map((m) => ({
              role: m.role as "user" | "assistant",
              content: m.text,
            })),
            { role: "user", content: tutorPrompt },
          ],
          response_format: { type: "json_object" },
          temperature: 0.4,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
      }

      const raw = await response.json();
      const content = JSON.parse(raw.choices[0].message.content);
      return res.status(200).json(content);
    }

    return res.status(400).json({ error: "Invalid action" });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: errorMsg, fallback: true });
  }
}
