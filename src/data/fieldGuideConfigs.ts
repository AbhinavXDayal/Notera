import type { FieldGuideConfig } from "../types/fieldGuide";

export const CAT_FIELD_GUIDE: FieldGuideConfig = {
  fieldId: "CAT",
  fieldTitle: "Common Admission Test",
  plateNumber: "UNIVERSAL FRAMEWORK",
  heading: "The CAT Field Guide",
  subtitle:
    "Everything you need to understand, learn and navigate CAT — from your first step to your final preparation.",
  modules: [
    {
      id: "roadmap",
      number: "01",
      title: "CAT Roadmap",
      description:
        "Understand the complete CAT journey and know exactly what to do at every stage.",
      purpose: [
        "Beginner to advanced path",
        "Preparation stages",
        "Study progression",
        "Exam journey",
      ],
      ctaText: "Explore Roadmap",
      targetTab: "journey",
      badge: "Stage by Stage",
    },
    {
      id: "fundamentals",
      number: "02",
      title: "CAT Fundamentals",
      description:
        "Build the foundation by understanding CAT, its structure, sections and core learning principles.",
      purpose: [
        "What is CAT?",
        "Exam structure",
        "QA, VARC & DILR introduction",
        "Preparation fundamentals",
      ],
      ctaText: "Learn Fundamentals",
      targetTab: "fundamentals",
      badge: "Core Architecture",
    },
    {
      id: "theory-practical",
      number: "03",
      title: "Theory & Practical",
      description:
        "Learn concepts deeply, then understand how to apply them to real CAT questions.",
      purpose: [
        "Theory",
        "Concepts",
        "Examples",
        "Practical application",
        "Question solving",
      ],
      ctaText: "Start Learning",
      targetTab: "subjects",
      badge: "Deep Practice",
    },
    {
      id: "notes-docs",
      number: "04",
      title: "Notes / Docs",
      description:
        "Access structured notes, PDFs, formula sheets, guides and learning resources.",
      purpose: [
        "Notes",
        "PDFs",
        "Documents",
        "Formula sheets",
        "Resources",
      ],
      ctaText: "Browse Library",
      targetTab: "resources",
      badge: "Codex & Library",
    },
  ],
};

export const FIELD_GUIDE_CONFIGS: Record<string, FieldGuideConfig> = {
  CAT: CAT_FIELD_GUIDE,
};

