import type { TopicAiExplanation, AiExplainContext, AskNoteraResponse } from "../types/ai";

export const CAT_STAGE_01_EXPLANATIONS: Record<string, TopicAiExplanation> = {
  "what-is-cat": {
    title: "What is CAT?",
    summary:
      "The Common Admission Test is a high-stakes, 120-minute elimination exam testing rapid analytical decision-making under strict time pressure.",
    explanation:
      "CAT (Common Admission Test) is a national-level computer-based entrance examination administered annually by the Indian Institutes of Management (IIMs). Unlike traditional academic exams that test formula memorization or exhaustive syllabus regurgitation, CAT functions fundamentally as an aptitude and elimination assessment. It gauges how calmly and efficiently candidates make decisions under severe time constraints, evaluate risk, eliminate unviable choices, and allocate scarce cognitive energy across unfamiliar problem templates.",
    keyPoints: [
      "Tests aptitude, problem selection, and mental stamina — not rote memorization.",
      "Fixed 120-minute exam split into three non-negotiable 40-minute locked sections.",
      "Strict negative marking (+3 for correct, -1 for incorrect MCQ) makes question selection crucial.",
      "Raw scores are normalized across slots and converted into a relative percentile ranking.",
      "Serves as the gateway for 21 IIMs, FMS Delhi, SPJIMR, IIT DMS, MDI, and top B-schools.",
    ],
    whyItMatters:
      "Treating CAT like an undergraduate semester exam is the #1 reason smart students struggle. Success requires building set-filtering instincts, accurate risk calculation, and an unshakeable strategy rather than trying to solve every question.",
    beginnerPerspective:
      "Think of CAT not as a test where you need 100% marks, but like an executive decision simulation. If you accurately solve just 50% of the questions without negative marking penalties, you typically secure a 99+ percentile ranking.",
    nextTopics: [
      {
        id: "pillars",
        title: "QA, VARC & DILR",
        tagline: "Explore the 3 cognitive pillars and their sectional constraints",
      },
      {
        id: "pattern",
        title: "Exam Pattern & Structure",
        tagline: "Understand marking schemes, locked windows, and question types",
      },
    ],
  },
  pillars: {
    title: "QA, VARC & DILR",
    summary:
      "The three core cognitive pillars of CAT, each allocated an unalterable 40-minute testing window in strict sequential order.",
    explanation:
      "The CAT paper consists of three mandatory sections delivered in strict sequential order: VARC (Verbal Ability & Reading Comprehension), DILR (Data Interpretation & Logical Reasoning), and QA (Quantitative Aptitude). Candidates cannot switch between sections, carry over unused minutes, or revisit previous sections once a 40-minute window closes. Each section evaluates distinct cognitive domains: VARC tests dense text analysis and logical coherence; DILR assesses puzzle pattern recognition and dataset synthesis; QA tests foundational mathematical agility across arithmetic, algebra, geometry, and number properties.",
    keyPoints: [
      "Section 1: VARC (24 Questions) — Focuses on dense RC passages, para-summaries, para-jumbles, and odd-one-out.",
      "Section 2: DILR (20-22 Questions) — 4 to 5 multi-question problem sets requiring matrix logic, games, charts, or networks.",
      "Section 3: QA (22 Questions) — High weightage on Arithmetic (~8-9 Qs) and Algebra (~7-8 Qs), followed by Geometry and Numbers.",
      "Sectional balance is essential: Top IIMs mandate sectional cutoffs (typically 80-85+ percentile in every section).",
    ],
    whyItMatters:
      "Having a brilliant overall score is useless for top colleges if you fail a single section's cutoff. Preparation must cultivate balanced competency across all three domains from day one.",
    beginnerPerspective:
      "Don't worry if math or English wasn't your strongest subject in school. CAT math tests concepts up to 10th grade, VARC rewards logical reasoning over fancy vocabulary, and DILR is an entirely fresh puzzle-solving skill you can build from scratch.",
    nextTopics: [
      {
        id: "pattern",
        title: "Exam Pattern & Structure",
        tagline: "Dive into the mechanics of 66 questions and negative marking economics",
      },
      {
        id: "score-percentile",
        title: "Percentile vs Score",
        tagline: "Learn how section marks translate into top percentile tiers",
      },
    ],
  },
  pattern: {
    title: "Exam Pattern & Structure",
    summary:
      "A 66-question, 120-minute digital test featuring both Multiple Choice Questions (with +3/-1 marking) and Non-MCQ TITA questions.",
    explanation:
      "The modern CAT exam comprises 66 questions spread across 120 minutes (2 hours). The paper features two distinct question formats: standard Multiple Choice Questions (MCQs) with four options, and Type-In-The-Answer (TITA) questions where the candidate types a numeric value using an on-screen keypad. MCQs carry +3 marks for correct answers and a -1 penalty for incorrect responses, creating steep economic downside for blind guessing. TITA questions award +3 for correct responses with 0 negative marking for wrong attempts.",
    keyPoints: [
      "Total Marks: 198 (66 questions × 3 marks maximum).",
      "Locked Duration: Exactly 40 minutes per section; automatic transition when time expires.",
      "Marking: +3 correct, -1 incorrect for MCQs; +3 correct, 0 incorrect for TITA questions.",
      "Interface: Basic on-screen on-screen calculator provided (simple operations only).",
      "Conducted across 3 slots on the last Sunday of November with normalization applied.",
    ],
    whyItMatters:
      "Because incorrect MCQs penalize you by a full mark, maintaining high accuracy (>85%) is far more valuable than rushing to attempt high volume with sloppy mistakes.",
    beginnerPerspective:
      "You don't need to answer all 66 questions. In fact, attempting ~35-40 questions with high precision is often enough to reach the top 1% of test-takers across the country.",
    nextTopics: [
      {
        id: "score-percentile",
        title: "Percentile vs Score",
        tagline: "Discover exact raw score targets for 90, 95, and 99 percentile",
      },
      {
        id: "colleges",
        title: "Target Colleges",
        tagline: "See what percentile and profile scores each tier of B-school demands",
      },
    ],
  },
  "score-percentile": {
    title: "Percentile vs Score",
    summary:
      "Understanding the mathematical relationship between raw score marks and competitive percentile rankings.",
    explanation:
      "Percentile indicates the percentage of all test-takers who scored equal to or less than you. In CAT, because the test is designed to be challenging, the raw score needed to achieve a top percentile is surprisingly modest. Historically, scoring ~76-80 raw marks out of 198 (~38-40% total score) is sufficient to achieve a 99th percentile ranking, while ~55-60 marks yields a 95th percentile. Raw scores undergo psychometric normalization across slots to account for slight variances in question difficulty.",
    keyPoints: [
      "99.0 Percentile ≈ 76–82 raw marks (~26 net correct questions).",
      "95.0 Percentile ≈ 55–60 raw marks (~19 net correct questions).",
      "90.0 Percentile ≈ 45–48 raw marks (~15 net correct questions).",
      "80.0 Percentile ≈ 33–36 raw marks (~11 net correct questions).",
      "Sectional 99 percentile is often achieved with just 9-11 net correct questions in QA/DILR.",
    ],
    whyItMatters:
      "Understanding raw score reality prevents test anxiety. You don't need perfection; you only need strategic selection and composure to harvest the moderate and easy questions.",
    beginnerPerspective:
      "If you enter the exam expecting to need 90% of the paper correct, you will panic. Realizing that answering just 2 out of every 5 questions accurately puts you in the top tier transforms your mindset.",
    nextTopics: [
      {
        id: "colleges",
        title: "Target Colleges",
        tagline: "Explore college tiers, percentile cutoffs, and selection criteria",
      },
      {
        id: "goals",
        title: "Understanding Your Goals",
        tagline: "Frame your personal score goals, timeline, and candidate profile",
      },
    ],
  },
  colleges: {
    title: "Target Colleges",
    summary:
      "A structured taxonomy of Indian management institutions, composite score criteria, and percentile expectations.",
    explanation:
      "Management institutes in India are broadly categorized into tiers based on brand pedigree, median placement compensation, alumni network, and faculty quality. Tier 1 includes the prestigious IIM BLACKI (Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore) along with FMS Delhi, XLRI Jamshedpur (via XAT), and SPJIMR Mumbai. Beyond raw CAT percentiles, top institutes compute a 'Composite Score' that factors in 10th/12th/Graduation academic marks, work experience duration, gender diversity, and academic diversity.",
    keyPoints: [
      "Tier 1 (IIM A/B/C/L/K/I, FMS, SPJIMR): Requires 98.5–99.8+ percentile (General) or 95+ with strong diversity profile. Average CTC: ₹30–35+ LPA.",
      "Tier 1.5 (New IIMs, MDI Gurgaon, IIFT, IIT Bombay/Delhi, SIBM): Requires 95–98 percentile. Average CTC: ₹22–28 LPA.",
      "Tier 2 (Baby IIMs, IMT Ghaziabad, IMI Delhi, GIM, TAPMI, GLIM): Requires 85–94 percentile. Average CTC: ₹14–19 LPA.",
      "Selection formula: CAT Score (30-60%) + Academics (15-30%) + Work Experience (5-15%) + Diversity (5-10%) + Interview/WAT (30-50%).",
    ],
    whyItMatters:
      "Knowing whether your target college weighs academics heavily or prioritizes raw CAT percentiles (like FMS Delhi) enables you to tailor your applications and target score realistically.",
    beginnerPerspective:
      "Even if your past school scores were average, institutions like FMS, IIM Calcutta, and IIT DMS place high weight on your entrance exam performance, keeping the top tier wide open.",
    nextTopics: [
      {
        id: "goals",
        title: "Understanding Your Goals",
        tagline: "Define your preparation timeframe, target percentile, and strategy",
      },
      {
        id: "prep-approach",
        title: "Choosing Your Preparation Approach",
        tagline: "Compare self-study, coaching, and hybrid models to execute your plan",
      },
    ],
  },
  goals: {
    title: "Understanding Your Goals",
    summary:
      "Defining your candidate profile, target intake year, study hours commitment, and score objectives.",
    explanation:
      "Effective CAT preparation begins with brutal self-assessment and realistic goal formulation. Before starting your syllabus, clearly identify your target examination year (e.g., CAT 2026/2027), calculate your profile baseline (10th/12th/Graduation percentages and work experience months), determine your weekly available study bandwidth (15-20 hours for working professionals, 25-35 hours for college students/drop), and establish your benchmark percentile target.",
    keyPoints: [
      "Attempt Horizon: Determine if you have 9-12 months (Comprehensive), 6 months (Accelerated), or 3 months (Intensive).",
      "Profile Audit: Identify strengths (e.g., strong quant background) and risks (e.g., past academic gaps) to plan compensations.",
      "Study Bandwidth: Consistent daily habit (2-3 focused hours daily) beats sporadic weekend cramming.",
      "Target Setting: Set baseline goal (e.g., 95+ for Top 20 schools) and stretch goal (e.g., 99.5+ for BLACKI/FMS).",
    ],
    whyItMatters:
      "Vague goals ('I want to do an MBA') lead to inconsistent effort. Concrete milestone goals ('I need 85 marks, requiring 10 Qs in QA, 8 in DILR, 12 in VARC') provide daily clarity.",
    beginnerPerspective:
      "You don't need 8 hours a day. CAT is a skill-building journey; disciplined 2-3 hours daily over 7-9 months is the gold standard for working professionals and students alike.",
    nextTopics: [
      {
        id: "prep-approach",
        title: "Choosing Your Preparation Approach",
        tagline: "Select the execution framework that fits your learning style and budget",
      },
      {
        id: "what-is-cat",
        title: "What is CAT?",
        tagline: "Revisit foundational exam architecture and core skills",
      },
    ],
  },
  "prep-approach": {
    title: "Choosing Your Preparation Approach",
    summary:
      "Evaluating Self-Study, Guided Coaching, and the Modern Hybrid model for optimal preparation efficiency.",
    explanation:
      "Every CAT aspirant must choose an execution methodology suited to their self-discipline, financial budget, and baseline proficiency. The three primary models are: Pure Self-Study (using standard textbooks, YouTube channels, and high-quality mock series), Guided Offline/Online Coaching (structured lectures, scheduled batches, and faculty doubt resolution), and the Hybrid Model (self-paced foundational theory paired with specialized sectional mentorship and elite national test series).",
    keyPoints: [
      "Self-Study: Lowest cost (₹10k–15k for mocks & books), maximum flexibility, requires exceptional self-discipline and self-curation.",
      "Comprehensive Coaching: Structured routine, peer environment, higher cost (₹35k–80k), risk of passive learning if lectures are not actively practiced.",
      "Hybrid Approach (Recommended): Self-study standard fundamentals + target weak-area modules + 2 major national mock test series (e.g., IMS SIMCAT, TIME AIMCAT, CL).",
      "Non-negotiable requirement in all approaches: Quality national-level mock test series with detailed psychometric analysis.",
    ],
    whyItMatters:
      "Buying 5 different coaching packages does not increase your score. Consistent active problem solving and rigorous mock analysis represent 80% of actual score improvement.",
    beginnerPerspective:
      "Start lean. Pick 1 primary theory source per section and focus on completing foundational concepts before investing heavily in multiple coaching bundles.",
    nextTopics: [
      {
        id: "what-is-cat",
        title: "What is CAT?",
        tagline: "Review core philosophy and orientation principles",
      },
      {
        id: "pillars",
        title: "QA, VARC & DILR",
        tagline: "Start planning your section-wise study schedule",
      },
    ],
  },
  "call-predictor": {
    title: "MBA Call Predictor",
    summary:
      "Interactive admissions probability and composite score estimation for IIMs and premier management institutions.",
    explanation:
      "The MBA Call Predictor allows CAT aspirants to simulate their interview call likelihood across 21 IIMs, FMS Delhi, SPJIMR, and other top business schools. It takes into account 10th, 12th, and graduation percentages, work experience duration, academic discipline, category reservations, and CAT sectional and overall percentiles.",
    keyPoints: [
      "Simulate shortlisting probabilities for IIM Ahmedabad, Bangalore, Calcutta, and new/baby IIMs.",
      "Factor in academic diversity, gender diversity, and category multipliers.",
      "Direct integration with live composite score evaluation algorithms.",
    ],
    whyItMatters:
      "Understanding your profile strength early helps you set realistic percentile targets and determine which colleges prioritize CAT scores over past academics.",
    beginnerPerspective:
      "Enter your academic marks and explore what CAT percentile band is required to secure interview calls from your target colleges.",
    nextTopics: [
      {
        id: "what-is-cat",
        title: "What is CAT?",
        tagline: "Review core philosophy and orientation principles",
      },
      {
        id: "pillars",
        title: "QA, VARC & DILR",
        tagline: "Start planning your section-wise study schedule",
      },
    ],
  },
};

/**
 * Fallback Ask Notera answers for predefined chips and custom queries
 */
export const getFallbackAskNoteraReply = (
  topicTitle: string,
  question: string,
  context?: AiExplainContext,
): AskNoteraResponse => {
  const qLower = question.toLowerCase();

  if (
    qLower.includes("simply") ||
    qLower.includes("simple") ||
    qLower.includes("easier")
  ) {
    return {
      reply: `In plain English: **${topicTitle}** is about mastering high-probability decision making rather than memorizing textbooks. Think of it like learning how to budget money under a tight deadline — you pick the best investments (easy questions), ignore trap expenses (time-wasting puzzles), and protect your capital from unnecessary losses (negative marking).`,
      keyPoints: [
        "Focus on accuracy over attempting everything.",
        "Spot and skip complex trap questions immediately.",
        "Aim for consistent daily practice over last-minute cramming.",
      ],
    };
  }

  if (qLower.includes("example") || qLower.includes("scenario")) {
    return {
      reply: `Here is a real-world exam scenario for **${topicTitle}**:
Suppose a section gives you 22 questions in 40 minutes.
- **Candidate A** attempts 20 questions quickly, gets 12 right and 8 wrong. Net Score: (12 × 3) - 8 = **28 marks**.
- **Candidate B** calmly filters the paper, attempts only 12 questions with high certainty, gets 11 right and 1 wrong. Net Score: (11 × 3) - 1 = **32 marks**.

Candidate B spent less energy, made fewer guesses, and achieved a substantially higher percentile simply through disciplined selection.`,
      keyPoints: [
        "Accuracy multiplies your score far faster than reckless speed.",
        "A 3-minute investment in selecting the right set or question pays off 10x.",
      ],
    };
  }

  if (
    qLower.includes("why is this important") ||
    qLower.includes("why important") ||
    qLower.includes("why matters")
  ) {
    return {
      reply: `Understanding **${topicTitle}** is crucial because thousands of hardworking students fail CAT every year not due to lack of intelligence, but due to incorrect strategic framing. Mastering this concept gives you an unfair advantage by aligning your daily study routine with what the exam actually rewards.`,
      keyPoints: [
        "Eliminates wasted preparation time on low-yield material.",
        "Builds psychological composure during high-pressure mock tests.",
        "Helps you set realistic, achievable score benchmarks.",
      ],
    };
  }

  if (
    qLower.includes("what to learn next") ||
    qLower.includes("next step") ||
    qLower.includes("what next")
  ) {
    return {
      reply: `Following your study of **${topicTitle}**, the optimal next step is to explore the immediate downstream section in your Roadmap. Check your understanding of the 3 sections (QA, VARC, DILR) and begin mapping out your foundation building schedule.`,
      keyPoints: [
        "Move to Stage 02: Build Your Foundation (Speed math, RC habit, basic DI).",
        "Take a diagnostic baseline mock test to assess your current readiness.",
        "Maintain a dedicated Notera error log notebook for all practice sets.",
      ],
    };
  }

  // General contextual response for user-typed custom question
  return {
    reply: `Great question regarding **${topicTitle}** (${context?.stage || "Understand the Journey"}).
In the context of CAT preparation:
1. **Strategic Core**: Always connect this topic back to accuracy and time efficiency.
2. **Actionable Rule**: Keep your practice grounded in official previous year questions (PYQs) and timed sectionals.
3. **Common Pitfall**: Avoid getting bogged down in overly complex non-standard formulas; CAT rewards clean conceptual clarity and fast elimination.`,
    keyPoints: [
      "Tie every concept to timed sectional practice.",
      "Review mistakes systematically in your error log.",
      "Prioritize fundamental clarity over esoteric shortcuts.",
    ],
  };
};

/**
 * Fallback generator for any arbitrary stage or topic in Notera
 */
export const generateFallbackTopicExplanation = (
  context: AiExplainContext,
): TopicAiExplanation => {
  const { topic, stage, section, field } = context;

  return {
    title: topic,
    summary: `Structured educational masterclass and strategic directives for "${topic}" in ${field} (${stage}).`,
    explanation: `This module covers the core principles, analytical models, and problem-solving heuristics for ${topic}. In the ${field} curriculum under ${section} — ${stage}, mastering this subject requires synthesizing conceptual fundamentals, recognizing recurring problem archetypes, and applying swift elimination strategies under timed constraints.`,
    keyPoints: [
      `Deconstruct the fundamental definitions and axiomatic rules of ${topic}.`,
      `Identify the standard question patterns and trap variations recurring in recent exams.`,
      `Apply step-by-step algorithmic decomposition rather than relying on intuition.`,
      `Maintain tight accuracy benchmarks (>85%) before attempting speed optimization.`,
    ],
    whyItMatters: `Mastery of ${topic} directly impacts your sectional performance and forms an essential prerequisite for advanced mock test analysis and overall percentile scaling.`,
    beginnerPerspective: `Break down ${topic} into bite-sized mental models. Focus first on grasping the basic 'Why' behind every formula or logic structure before moving to advanced timed sets.`,
    nextTopics: [
      {
        title: `Applied Practice: ${topic}`,
        tagline: "Solve benchmark problems and timed sectional sets",
      },
      {
        title: `Codex & Formulas: ${topic}`,
        tagline: "Review summary sheets, edge cases, and shortcut theorems",
      },
    ],
  };
};
