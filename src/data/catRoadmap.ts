import type { RoadmapStage } from '../types/roadmap';

export const CAT_ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 1,
    stageNumber: '01',
    title: 'Understand the Journey',
    subtitle: 'Exam pattern, negative marking economics, score vs percentile, and strategic orientation',
    phase: 'Before Studying',
    timeEstimate: '1–2 Days',
    badge: 'BEFORE STUDYING',
    description: 'Before opening books, solving questions or buying courses, understand what CAT actually is, how the exam works and where you want the journey to take you.',
    detailedGuidance: [
      'CAT is not a knowledge test; it is an elimination and decision-making test under strict time scarcity.',
      'Understand section order: VARC (40m) → DILR (40m) → QA (40m). Section switching is strictly barred.',
      'Study score vs. percentile dynamics: scoring ~50% raw marks consistently yields 99+ percentile.',
      'Familiarize yourself with MCQ marking (+3/-1) and TITA questions carrying zero negative penalty.'
    ],
    keyMindsets: [
      'CAT is not only about solving more questions. It is also about selecting the right questions and making good decisions under time pressure.',
      'Leaving a dangerous question in under 30 seconds is a net gain of 3+ marks.'
    ],
    actionChecklist: [
      { id: 'c1-1', text: 'Read the complete 7-Section Journey Orientation Guide' },
      { id: 'c1-2', text: 'Run score simulations using the Notera CAT Score Estimator' },
      { id: 'c1-3', text: 'Review Target College Tiers (Dream, High Target, Realistic)' },
      { id: 'c1-4', text: 'Select preparation approach: Self-Study, Coaching, or Hybrid' }
    ],
    resources: [
      { title: 'The CAT Architecture Blueprint', type: 'Note', actionNoteId: 'cat-blueprint' },
      { title: 'Official Past Year Paper Breakdown (2020–2024)', type: 'Diagnostic' }
    ],
    pitfallsToAvoid: [
      'Believing you need to solve all 66 questions (Solving 32–36 questions with 90% accuracy gets you 99.5%ile).',
      'Ignoring section-wise cutoff requirements of top IIMs.'
    ]
  },
  {
    id: 2,
    stageNumber: '02',
    title: 'Know Your Starting Point',
    subtitle: 'Untimed diagnostic audit to uncover baseline analytical strengths',
    phase: 'Diagnostic',
    timeEstimate: '2–3 Days',
    badge: 'Stage 02 • Diagnostic',
    description: 'Take a diagnostic paper without timer anxiety to gauge your natural reading comprehension speed, arithmetic comfort, and logical puzzle intuition.',
    detailedGuidance: [
      'Do not take a timed mock initially; the clock induces artificial anxiety that masks fundamental ability.',
      'Solve 10 QA arithmetic questions, 2 RC passages, and 2 DILR sets without any time limit.',
      'Audit your instinctual behavior: Do you re-read paragraphs 4 times? Do you use lengthy algebra for simple arithmetic?'
    ],
    keyMindsets: [
      'Your baseline is not a verdict; it is merely coordinates on the preparation map.'
    ],
    actionChecklist: [
      { id: 'c2-1', text: 'Complete untimed Diagnostic Set A (QA, VARC, DILR)' },
      { id: 'c2-2', text: 'Audit calculation comfort (multiplication tables, fractions)' },
      { id: 'c2-3', text: 'Calculate base Reading Speed (Words Per Minute)' }
    ],
    resources: [
      { title: 'Untimed Diagnostic Assessment', type: 'Diagnostic' },
      { title: 'Self-Audit Scorecard Template', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Getting demotivated by low diagnostic scores before learning speed methods.'
    ]
  },
  {
    id: 3,
    stageNumber: '03',
    title: 'Build Your Foundation',
    subtitle: 'Speed math tables, fractional multipliers, and editorial grammar',
    phase: 'Foundation',
    timeEstimate: '2–3 Weeks',
    badge: 'Stage 03 • Foundations',
    description: 'Master the non-negotiable mental math pillars: multiplication tables up to 30, reciprocals 1/1 to 1/25, percentage multiplier factors, Pythagorean triplets, and daily long-form reading habits.',
    detailedGuidance: [
      'Memorize fraction-to-percentage conversions: 1/7 = 14.28%, 1/8 = 12.5%, 1/12 = 8.33%.',
      'Learn Multiplying Factors (MF): A 25% increase is multiplying by 5/4; a 16.66% decrease is multiplying by 5/6.',
      'Begin reading 2 long-form editorial essays every single day from Aeon, The Guardian, or The Hindu.'
    ],
    keyMindsets: [
      'Speed in CAT does not come from fast writing; it comes from eliminating intermediate calculation steps.'
    ],
    actionChecklist: [
      { id: 'c3-1', text: 'Memorize squares up to 35 and cubes up to 20' },
      { id: 'c3-2', text: 'Drill fraction-to-percentage flashcards daily for 15 mins' },
      { id: 'c3-3', text: 'Set up daily reading ritual: 2 Aeon essays per morning' }
    ],
    resources: [
      { title: 'The Architecture of Percentages & Multipliers', type: 'Note', actionNoteId: 'percentages-multipliers' },
      { title: 'Speed Math & Mental Calculation Codex', type: 'Note', actionNoteId: 'speed-math' }
    ],
    pitfallsToAvoid: [
      'Relying on the slow CAT onscreen calculator for simple 2-digit arithmetic.'
    ]
  },
  {
    id: 4,
    stageNumber: '04',
    title: 'Learn QA: Quantitative Aptitude',
    subtitle: 'Master Arithmetic (45%) and Algebra (30%) with visual problem models',
    phase: 'Core Subject',
    timeEstimate: '6–8 Weeks',
    badge: 'Stage 04 • QA Immersion',
    description: 'Quantitative Aptitude is dominated by Arithmetic and Algebra. Focus intensely on Ratios, Percentages, Profit & Loss, TSD, Linear & Quadratic Equations, Modulus, and Sequences.',
    detailedGuidance: [
      'Arithmetic is the backbone: 8–9 questions out of 22 come directly from Arithmetic.',
      'Do not solve using standard school textbook formulas with 8 variables. Use ratio scaling and conceptual balance lines.',
      'Algebra is second: 5–6 questions. Master graphs, quadratic equations, and modulus ranges.'
    ],
    keyMindsets: [
      'If an arithmetic problem takes more than 6 lines of algebraic equations, there is a cleaner ratio method you missed.'
    ],
    actionChecklist: [
      { id: 'c4-1', text: 'Complete Module 01: Arithmetic (All 6 core chapters)' },
      { id: 'c4-2', text: 'Complete Module 02: Algebra & Functions' },
      { id: 'c4-3', text: 'Solve 100 level-1 and 100 level-2 problems per chapter' }
    ],
    resources: [
      { title: 'Arithmetic Complete Doctrine', type: 'Note', actionNoteId: 'percentages-multipliers' },
      { title: 'Algebra Functions & Modulus Codex', type: 'Note', actionNoteId: 'algebra-foundations' }
    ],
    pitfallsToAvoid: [
      'Spending weeks on obscure Modern Math (P&C/Probability) before mastering high-weightage Arithmetic.'
    ]
  },
  {
    id: 5,
    stageNumber: '05',
    title: 'Learn VARC: Verbal Ability & RC',
    subtitle: 'Deconstruct central arguments, tone analysis, and parajumble logic',
    phase: 'Core Subject',
    timeEstimate: '6–8 Weeks',
    badge: 'Stage 05 • VARC Immersion',
    description: 'VARC accounts for 24 questions (16 RC questions + 8 Verbal Ability). Master paragraph dissection, identifying author tone, recognizing option traps (distortion, scope shift, extreme words), and solving Parajumbles through mandatory pairs.',
    detailedGuidance: [
      'RC is not about memorizing facts; it is about tracking the author’s primary thesis and transition words (However, Consequently, Yet).',
      'Learn the 4 Cardinal RC Question Traps: Out of Scope, Direct Opposite, Too Extreme, and True but Irrelevant.',
      'Verbal Ability (Para Summary, Parajumbles, Odd One Out) has zero negative marking for TITA.'
    ],
    keyMindsets: [
      'Do not choose an answer because it sounds profound. Choose an answer because the author directly argued it.'
    ],
    actionChecklist: [
      { id: 'c5-1', text: 'Read and dissect 60 diverse RC passages (Philosophy, Economics, Art, Biology)' },
      { id: 'c5-2', text: 'Master Mandatory Pair identification in Parajumbles' },
      { id: 'c5-3', text: 'Practice summary elimination using main idea mapping' }
    ],
    resources: [
      { title: 'The Anatomy of Complex RC Passages', type: 'Note', actionNoteId: 'varc-rc-deconstruction' },
      { title: 'Parajumble & Verbal Ability Playbook', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Translating passages word-for-word in your head instead of absorbing structural flow.'
    ]
  },
  {
    id: 6,
    stageNumber: '06',
    title: 'Learn DILR: Data & Logical Reasoning',
    subtitle: 'Grid elimination, tournament logic, and matrix representations',
    phase: 'Core Subject',
    timeEstimate: '6–8 Weeks',
    badge: 'Stage 06 • DILR Immersion',
    description: 'DILR features 4 sets of 5 questions each (20 questions). Solving just 2 complete sets (10 questions) with high accuracy routinely lands you at 98–99+ percentile.',
    detailedGuidance: [
      'Master the 6 Classic DILR Archetypes: Matrix Arrangements, Distribution, Venn Diagrams, Games & Tournaments, Routes & Networks, and Calculation DI.',
      'Develop clean visual scratchpad notation: table grids, constraint trees, and conditional branches.',
      'Learn the "4-Minute Set Audit": Read all 4 sets in the first 4 minutes and rank them by solvability.'
    ],
    keyMindsets: [
      'DILR is won or lost in the first 4 minutes of set selection. Never start solving the first set blindly.'
    ],
    actionChecklist: [
      { id: 'c6-1', text: 'Solve 150 benchmark DILR sets across all 6 archetypes' },
      { id: 'c6-2', text: 'Standardize personal shorthand notation for positive/negative clues' },
      { id: 'c6-3', text: 'Practice 4-Minute Set Scanning drill on past papers' }
    ],
    resources: [
      { title: 'Matrix Arrangement & Grid Logic', type: 'Note', actionNoteId: 'dilr-matrix-logic' },
      { title: 'Games & Tournaments Masterclass', type: 'Note', actionNoteId: 'dilr-tournaments' }
    ],
    pitfallsToAvoid: [
      'Falling in love with a difficult set and wasting 20 minutes without getting any answers.'
    ]
  },
  {
    id: 7,
    stageNumber: '07',
    title: 'Practice Strategically (Topic Drills)',
    subtitle: 'Shift from untimed learning to deliberate 15-minute speed bursts',
    phase: 'Deliberate Practice',
    timeEstimate: '3–4 Weeks',
    badge: 'Stage 07 • Strategic Drills',
    description: 'Transition from passive conceptual understanding into timed micro-drills. Solve 5-question clusters in 10–12 minutes to train real-time pattern recognition.',
    detailedGuidance: [
      'Cluster practice into single-theme blocks to build muscle memory.',
      'Log every mistake into three distinct categories: (A) Conceptual Gap, (B) Reading/Calculation Error, (C) Bad Question Selection.',
      'Re-solve every missed question within 48 hours without looking at the answer key.'
    ],
    keyMindsets: [
      'Practice without a systematic error log is just testing yourself, not improving.'
    ],
    actionChecklist: [
      { id: 'c7-1', text: 'Complete 30 timed topic-wise sprint drills' },
      { id: 'c7-2', text: 'Maintain a categorized error log with at least 50 entries' },
      { id: 'c7-3', text: 'Re-test flagged questions from week 1–4' }
    ],
    resources: [
      { title: 'Deliberate Practice & Error Log Codex', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Looking at solutions immediately after getting stuck instead of fighting for 5 minutes.'
    ]
  },
  {
    id: 8,
    stageNumber: '08',
    title: 'Take Sectional Tests (40-Min)',
    subtitle: 'Simulate individual section time limits and build stamina',
    phase: 'Sectional Mastery',
    timeEstimate: '3–4 Weeks',
    badge: 'Stage 08 • Sectionals',
    description: 'Take isolated 40-minute sectional tests to calibrate your section-specific pace: QA ABC strategy, VARC 4-passage management, and DILR set selection.',
    detailedGuidance: [
      'QA "ABC" Strategy: Round 1 (A: Abhi Karo - do now), Round 2 (B: Baad mein - do later), Round 3 (C: Chhod do - leave completely).',
      'VARC Strategy: Allocate 28 minutes to 4 RCs (7 mins each) and 12 minutes to 8 VA questions.',
      'DILR Strategy: 4 minutes selection, 16 minutes set 1, 16 minutes set 2, 4 minutes TITA sweeps.'
    ],
    keyMindsets: [
      'The purpose of a sectional test is to discover your pacing rhythm under clock pressure.'
    ],
    actionChecklist: [
      { id: 'c8-1', text: 'Complete 10 QA Sectionals (Target: 10+ questions attempted)' },
      { id: 'c8-2', text: 'Complete 10 VARC Sectionals (Target: 80%+ accuracy)' },
      { id: 'c8-3', text: 'Complete 10 DILR Sectionals (Target: 2 full sets cracked)' }
    ],
    resources: [
      { title: '40-Minute Sectional Simulator', type: 'Mock Test' }
    ],
    pitfallsToAvoid: [
      'Panicking when the timer hits 10 minutes and making blind guesses on negative marking questions.'
    ]
  },
  {
    id: 9,
    stageNumber: '09',
    title: 'Take Full Mock Tests (120-Min)',
    subtitle: 'Simulate exact exam day conditions: slots, ergonomics, and fatigue',
    phase: 'Full Simulation',
    timeEstimate: '6–8 Weeks',
    badge: 'Stage 09 • Full Mocks',
    description: 'Take full 2-hour mocks at official exam slot times (8:30 AM, 12:30 PM, or 4:30 PM). Train your brain to stay sharp through the third hour when QA begins.',
    detailedGuidance: [
      'Take 20–30 high-quality full mocks across recognized test series.',
      'Never take a mock on a phone or with background music; use a desktop with mouse and white notepad.',
      'Treat mock scores as feedback data points, never as self-worth metrics.'
    ],
    keyMindsets: [
      'A mock score drop is a gift—it revealed a blind spot before the real CAT exam.'
    ],
    actionChecklist: [
      { id: 'c9-1', text: 'Take Mock #1 to #10 in standard 2-hour exam slots' },
      { id: 'c9-2', text: 'Record Sectional Breakdown: Attempts vs Accuracy vs Net Score' },
      { id: 'c9-3', text: 'Identify the exact minute mental fatigue sets in' }
    ],
    resources: [
      { title: 'Mock Test Scorecard & Analytics Template', type: 'Analysis Sheet' }
    ],
    pitfallsToAvoid: [
      'Taking mocks every day without analyzing them. 2 hours of mock requires 3 hours of analysis.'
    ]
  },
  {
    id: 10,
    stageNumber: '10',
    title: 'Analyse & Improve (Mock Forensics)',
    subtitle: 'The 3-hour post-mock forensic audit to eliminate recurring leaks',
    phase: 'Optimization',
    timeEstimate: 'Ongoing with Mocks',
    badge: 'Stage 10 • Forensic Audit',
    description: 'Post-mock analysis is where the real percentile jump happens. Categorize all 66 questions: Correct & Fast, Correct & Slow, Wrong due to Silly Mistake, Wrong due to Concept, and Unattempted Gems.',
    detailedGuidance: [
      'Unattempted Gems: Easy questions you never even saw because you were stuck on hard questions.',
      'Solve the entire paper again un-timed before opening the official video explanations.',
      'Write 3 concrete rules in your journal before taking the next mock.'
    ],
    keyMindsets: [
      'He who analyses 15 mocks deeply outperforms him who takes 40 mocks shallowly.'
    ],
    actionChecklist: [
      { id: 'c10-1', text: 'Perform forensic analysis for every mock taken' },
      { id: 'c10-2', text: 'Identify 3 easiest questions missed per section' },
      { id: 'c10-3', text: 'Update the Golden Mistake Notebook' }
    ],
    resources: [
      { title: 'The 5-Bucket Mock Analysis Framework', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Only checking your percentile and moving on to the next mock.'
    ]
  },
  {
    id: 11,
    stageNumber: '11',
    title: 'Final Revision & Mental Priming',
    subtitle: 'Review formula codex, reread mistake notebook, and taper mocks',
    phase: 'Final Polish',
    timeEstimate: '2 Weeks Prior',
    badge: 'Stage 11 • Taper & Prime',
    description: 'Stop taking fresh mocks 10 days before CAT. Review your personal mistake notebook, memorize geometry theorems and algebra formulas, and adjust sleep schedules to match your exam slot.',
    detailedGuidance: [
      'Do not learn new complex topics in the final 14 days.',
      'Review your 100 best solved RC passages and their logical structures.',
      'Synchronize circadian rhythm: wake up at 6:00 AM regardless of slot.'
    ],
    keyMindsets: [
      'Trust your preparation. Confidence adds 10 percentile points on exam morning.'
    ],
    actionChecklist: [
      { id: 'c11-1', text: 'Review complete QA Formula Codex' },
      { id: 'c11-2', text: 'Re-read the entire Golden Mistake Notebook' },
      { id: 'c11-3', text: 'Organize admit card, ID proofs, and travel logistics' }
    ],
    resources: [
      { title: 'CAT Rapid Formula Sheet & Geometry Theorems', type: 'Note', actionNoteId: 'percentages-multipliers' }
    ],
    pitfallsToAvoid: [
      'Burning out with late-night mock marathons in the last week.'
    ]
  },
  {
    id: 12,
    stageNumber: '12',
    title: 'The CAT Exam Day',
    subtitle: 'Execution under composure: slot management, hydration, and poise',
    phase: 'Execution',
    timeEstimate: 'Exam Day',
    badge: 'Stage 12 • D-Day',
    description: 'Execute your battle-tested strategy without emotion. Treat each 40-minute block as an independent island—never let a difficult VARC section influence your DILR or QA mindset.',
    detailedGuidance: [
      'Arrive 90 minutes before your slot with 2 copies of admit card and valid photo ID.',
      'Section Isolation: If VARC feels tough, remember it is tough for all 300,000 candidates.',
      'Focus strictly on the screen in front of you; the timer is just a pacing guide.'
    ],
    keyMindsets: [
      'Every section is a blank slate. Finish one, forget it, and attack the next.'
    ],
    actionChecklist: [
      { id: 'c12-1', text: 'Execute Round 1 easy picks in first 15 mins of each section' },
      { id: 'c12-2', text: 'Maintain strict accuracy over random guesses' },
      { id: 'c12-3', text: 'Celebrate finishing the 120-minute marathon' }
    ],
    resources: [
      { title: 'D-Day Checklist & Mental Protocol', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Discussing answers with peers between slots or stressing over memory recall.'
    ]
  },
  {
    id: 13,
    stageNumber: '13',
    title: 'College Selection & Application Strategy',
    subtitle: 'Shortlist IIMs, FMS, XLRI, SPJIMR, and non-IIM premier schools',
    phase: 'Post-Exam',
    timeEstimate: 'December – January',
    badge: 'Stage 13 • Admissions',
    description: 'Evaluate your percentile estimates and profile (academic records, gender/academic diversity points, work experience) to apply for premier non-IIM institutions (FMS Delhi, SPJIMR, MDI, IIT DoMS, TISS).',
    detailedGuidance: [
      'Calculate composite scores for individual IIM criteria (IIM Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore).',
      'Track deadlines for standalone forms (SPJIMR, FMS, XAT for XLRI, SNAP for SIBM).',
      'Understand profile evaluation: Engineer vs Non-Engineer cutoff differentials.'
    ],
    keyMindsets: [
      'Great MBA careers are built at FMS, SPJIMR, and XLRI just as much as old IIMs.'
    ],
    actionChecklist: [
      { id: 'c13-1', text: 'Calculate composite score matrix across IIM A/B/C/L/K/I' },
      { id: 'c13-2', text: 'Submit separate application forms before deadline' },
      { id: 'c13-3', text: 'Consolidate graduation marksheets and work experience letters' }
    ],
    resources: [
      { title: 'IIM Composite Score & Cutoff Matrix', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Missing deadlines for separate forms like FMS or SPJIMR.'
    ]
  },
  {
    id: 14,
    stageNumber: '14',
    title: 'Interviews, WAT & MBA Journey',
    subtitle: 'Written Ability Test, Personal Interview storytelling, and current affairs',
    phase: 'Admissions & Beyond',
    timeEstimate: 'January – April',
    badge: 'Stage 14 • WAT-PI',
    description: 'Convert your calls into final admissions. Master Written Ability Test (WAT) essay structure, craft compelling answers for "Why MBA?" and "Tell me about yourself", and understand macroeconomic trends.',
    detailedGuidance: [
      'WAT Essay Structure: Hook → Context → Thesis → Arguments with Data → Counter-argument → Synthesized Conclusion.',
      'Personal Interview: Articulate your life story, undergraduate project depth, and career alignment.',
      'Daily current affairs: Budget, monetary policy, geopolitical trade corridors, and AI disruptions.'
    ],
    keyMindsets: [
      'The interview is not an interrogation; it is a conversation to see if you would enrich the classroom.'
    ],
    actionChecklist: [
      { id: 'c14-1', text: 'Draft and refine your 3 core stories (Leadership, Failure, Resilience)' },
      { id: 'c14-2', text: 'Practice 15 timed WAT essays with feedback' },
      { id: 'c14-3', text: 'Participate in 5 mock personal interviews with alumni' }
    ],
    resources: [
      { title: 'The WAT-PI Master Doctrine', type: 'Strategy Guide' }
    ],
    pitfallsToAvoid: [
      'Memorizing robotic answers that lack genuine personality and intellectual curiosity.'
    ]
  }
];

