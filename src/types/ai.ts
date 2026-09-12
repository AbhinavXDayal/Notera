export interface NextTopicItem {
  id?: string;
  title: string;
  tagline?: string;
}

export interface TopicAiExplanation {
  title: string;
  summary: string;
  explanation: string;
  keyPoints: string[];
  whyItMatters: string;
  beginnerPerspective: string;
  nextTopics: NextTopicItem[];
}

export interface AiExplainContext {
  field: string;
  section: string;
  stage: string;
  topic: string;
  topicId?: string;
  customPrompt?: string;
}

export interface AiChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  keyPoints?: string[];
  timestamp: number;
}

export interface AskNoteraResponse {
  reply: string;
  keyPoints?: string[];
}
