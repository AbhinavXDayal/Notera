export interface JourneyPillar {
  id: "varc" | "dilr" | "qa";
  code: string;
  name: string;
  subtitle: string;
  questionCountEstimate: string;
  timeLimit: string;
  focusPoints: string[];
  keyMindset: string;
}

export interface CollegeTier {
  id: string;
  category: string;
  tagline: string;
  examples: string[];
  percentileRange: string;
  profileFocus: string;
}

export interface PrepApproach {
  id: "self-study" | "coaching" | "hybrid";
  title: string;
  badge: string;
  tagline: string;
  idealFor: string[];
  keyComponents: string[];
  proTip: string;
}

export const STAGE_01_DATA = {
  stageNumber: "01",
  badge: "BEFORE STUDYING",
  title: "Understand the Journey",
  tagline:
    "Before opening books, solving questions or buying courses, understand what CAT actually is, how the exam works and where you want the journey to take you.",

  whatIsCat: {
    heading: "What is CAT?",
    summary:
      "The Common Admission Test (CAT) is India's premier computer-based entrance examination used for admission to postgraduate management programmes across the Indian Institutes of Management (IIMs) and top-tier business schools including FMS Delhi, SPJIMR Mumbai, and MDI Gurgaon.",
    corePhilosophy:
      "CAT is not a test of rote memorization or complex university calculus. It is an analytical decision-making simulation designed to evaluate how efficiently you process ambiguous information, identify patterns, and allocate scarce time.",
    skills: [
      {
        title: "Reading & Comprehension",
        desc: "Synthesizing dense, unfamiliar academic essays (Philosophy, Sociology, Economics, Biology) and grasping underlying arguments.",
      },
      {
        title: "Problem Solving",
        desc: "Deconstructing numerical situations into simple ratios, arithmetic multipliers, and visual equations without brute-force algebra.",
      },
      {
        title: "Logical Reasoning",
        desc: "Translating unstructured constraints into structured tables, tournament brackets, Venn matrices, and network routes.",
      },
      {
        title: "Pattern Recognition",
        desc: "Spotting recurring question archetypes and underlying structures beneath novel phrasing.",
      },
      {
        title: "Decision Making Under Pressure",
        desc: "Deciding within 45 seconds whether to invest 3 minutes or immediately abandon a deceptive trap problem.",
      },
      {
        title: "Question Selection",
        desc: "Targeting the 10–14 most accessible questions in each 40-minute window rather than attempting to solve the entire paper.",
      },
    ],
    highlightInsight:
      "CAT is not only about solving more questions. It is also about selecting the right questions and making good decisions under time pressure.",
  },

  pillars: [
    {
      id: "varc",
      code: "VARC",
      name: "Verbal Ability & Reading Comprehension",
      subtitle:
        "The cognitive discipline of argument analysis and editorial synthesis",
      questionCountEstimate: "24 Questions",
      timeLimit: "40 Minutes",
      focusPoints: [
        "Reading comprehension across diverse unfamiliar genres",
        "Understanding author arguments, thesis & subtle nuances",
        "Logical interpretation & eliminating cognitive traps",
        "Verbal reasoning (Para Summaries, Parajumbles, Out of Context)",
      ],
      keyMindset:
        "Focus on why an option is strictly wrong based on author logic, not what feels subjectively profound.",
    },
    {
      id: "dilr",
      code: "DILR",
      name: "Data Interpretation & Logical Reasoning",
      subtitle:
        "The art of systematic puzzle modeling and decisive set selection",
      questionCountEstimate: "20–22 Questions (4–5 Sets)",
      timeLimit: "40 Minutes",
      focusPoints: [
        "Multi-dimensional data analysis (Tables, Bubble Charts, Radar Grids)",
        "Logical reasoning (Arrangements, Seating, Seeding Brackets)",
        "Pattern recognition & constraint boundary deduction",
        "4-Minute Set Selection heuristics to avoid trap sets",
      ],
      keyMindset:
        "Cracking 2 complete sets with 100% accuracy (~8–10 questions) reliably yields a 97–99%ile in DILR.",
    },
    {
      id: "qa",
      code: "QA",
      name: "Quantitative Ability",
      subtitle:
        "Intuitive mathematics, proportional modeling & speed optimization",
      questionCountEstimate: "22 Questions",
      timeLimit: "40 Minutes",
      focusPoints: [
        "Arithmetic (Percentages, Ratios, Profit/Loss, TSD, Time & Work)",
        "Algebra (Linear/Quadratic equations, Modulus, Maxima/Minima)",
        "Geometry & Mensuration (Triangles, Circles, Coordinate geometry)",
        "Number Systems (Remainders, Factorization, Base conversions)",
        "Modern Mathematics (Permutations, Combinations, Probability)",
      ],
      keyMindset:
        "Arithmetic and Algebra constitute ~70% of QA. Master these before touching niche advanced topics.",
    },
  ] as JourneyPillar[],

  examPattern: {
    heading: "Exam Pattern & Structure",
    notice:
      "Exam patterns and section distributions can change. Always verify the current year's official CAT notification at iimcat.ac.in.",
    attributes: [
      {
        label: "Total Duration",
        value: "120 Minutes",
        detail:
          "Strict 40 minutes per section. Zero section switching allowed.",
      },
      {
        label: "Total Questions",
        value: "66 Questions",
        detail: "Sectional distribution: VARC (24), DILR (20–22), QA (22).",
      },
      {
        label: "Question Formats",
        value: "MCQs & Non-MCQs (TITA)",
        detail:
          "TITA (Type In The Answer) requires direct onscreen numerical input.",
      },
      {
        label: "Marking Scheme",
        value: "+3 for Correct • -1 for Wrong MCQ",
        detail:
          "Zero negative marking penalty for incorrect TITA questions.",
      },
      {
        label: "Sectional Discipline",
        value: "Fixed Sequence: VARC → DILR → QA",
        detail:
          "The timer locks after 40 minutes and advances to the next section.",
      },
      {
        label: "Double Hurdle",
        value: "Sectional + Overall Cutoffs",
        detail:
          "Top IIMs require minimum ~80–85%ile in each individual section.",
      },
    ],
  },

  scoreVsPercentile: {
    heading: "Score vs Percentile",
    conceptText:
      "Understanding the fundamental distinction between raw score and normalized percentile is the most liberating insight for a CAT aspirant. You do NOT need 90% marks to score a 99th percentile.",
    visualComparison: {
      scoreLabel: "YOUR RAW SCORE",
      scoreDesc:
        "The aggregate marks you obtain based on correct (+3) and incorrect (-1) answers across the 3 sections.",
      percentileLabel: "YOUR PERCENTILE",
      percentileDesc:
        "A relative ranking index that indicates the percentage of all test takers who scored equal to or less than you.",
    },
    normalizationNote:
      "Because CAT is administered across multiple distinct slots (Slot 1, Slot 2, Slot 3), raw scores are scaled using a normalization algorithm to adjust for subtle variations in slot difficulty.",
  },

  scoreEstimator: {
    disclaimer:
      "This estimator uses verified historical multi-year trends across CAT administrations. Actual CAT percentiles vary with exam difficulty, normalization scales, and candidate performance distributions.",
    bands: [
      {
        min: 100,
        max: 198,
        percentileRange: "99.85 – 99.99 %ile",
        label: "Top 0.1% National Tier",
        insight:
          "Eligible for interview calls from all IIMs (A/B/C/L/K/I/M) and FMS.",
      },
      {
        min: 85,
        max: 99,
        percentileRange: "99.20 – 99.80 %ile",
        label: "Elite 99+ Tier",
        insight:
          "Strong interview calls across BLACKI IIMs, FMS, SPJIMR, and MDI.",
      },
      {
        min: 72,
        max: 84,
        percentileRange: "98.00 – 99.10 %ile",
        label: "98th Percentile Range",
        insight:
          "High probability for IIM Kozhikode, Indore, Mumbai, SPJIMR, and IIT B/D.",
      },
      {
        min: 60,
        max: 71,
        percentileRange: "95.00 – 97.90 %ile",
        label: "95th Percentile Range",
        insight:
          "Competitive for New IIMs (Udaipur, Trichy, Ranchi, Raipur), MDI, and IIFT.",
      },
      {
        min: 48,
        max: 59,
        percentileRange: "90.00 – 94.90 %ile",
        label: "90th Percentile Range",
        insight:
          "Solid standing for Baby IIMs, IMT Ghaziabad, IMI Delhi, and TAPMI.",
      },
      {
        min: 36,
        max: 47,
        percentileRange: "80.00 – 89.90 %ile",
        label: "80th Percentile Range",
        insight:
          "Meets qualifying criteria for specialized MBA programmes and non-IIM institutes.",
      },
      {
        min: 24,
        max: 35,
        percentileRange: "70.00 – 79.90 %ile",
        label: "70th Percentile Range",
        insight:
          "Good baseline for sectional improvement and university management faculties.",
      },
      {
        min: 0,
        max: 23,
        percentileRange: "Below 70.00 %ile",
        label: "Foundational Baseline",
        insight:
          "Focus on foundational accuracy and high-weightage arithmetic/RC concepts.",
      },
    ],
  },

  targetColleges: {
    heading: "Target Colleges & Institutional Tiers",
    summary:
      "Aspirants often prepare blindly without understanding institutional admission profiles. Categorizing colleges into clear strategic bands ensures focus and realistic goal setting.",
    disclaimer:
      "Institutional cutoffs, academic weightages, and admission criteria vary yearly. No percentile guarantees an admission call without fulfilling sectional cutoffs and composite score criteria.",
    tiers: [
      {
        id: "dream",
        category: "DREAM TARGETS",
        tagline: "The premier global business schools in India",
        examples: [
          "IIM Ahmedabad",
          "IIM Bangalore",
          "IIM Calcutta",
          "FMS Delhi",
          "IIM Lucknow",
          "IIM Kozhikode",
        ],
        percentileRange: "99.0+ %ile",
        profileFocus:
          "Balanced 10th/12th/Grad academics, high sectional consistency, strong interview performance.",
      },
      {
        id: "high-target",
        category: "HIGH TARGETS",
        tagline: "Elite leadership and specialized management institutions",
        examples: [
          "IIM Indore",
          "IIM Mumbai (NITIE)",
          "SPJIMR Mumbai",
          "MDI Gurgaon",
          "IIT Bombay (SJMSoM)",
          "IIT Delhi (DMS)",
        ],
        percentileRange: "97.0 – 99.0 %ile",
        profileFocus:
          "Strong profile evaluation, relevant work experience, and domain leadership qualities.",
      },
      {
        id: "realistic",
        category: "REALISTIC & NEW IIMs",
        tagline: "High-growth institutes with proven career trajectories",
        examples: [
          "IIM Udaipur",
          "IIM Ranchi",
          "IIM Trichy",
          "IIM Raipur",
          "IIM Rohtak",
          "IMT Ghaziabad",
          "Baby IIMs (CAP)",
        ],
        percentileRange: "92.0 – 97.0 %ile",
        profileFocus:
          "Common Admission Process (CAP), academic diversity, and solid sectional percentiles.",
      },
      {
        id: "additional",
        category: "ADDITIONAL OPTIONS & ALLIED EXAMS",
        tagline:
          "Specialized programmes, private universities & alternative entrance paths",
        examples: [
          "GIM Goa",
          "FORE School of Management",
          "TAPMI Manipal",
          "XAT (XLRI)",
          "SNAP (SIBM/SCMHRD)",
          "NMAT (NMIMS)",
        ],
        percentileRange: "80.0 – 92.0 %ile / Allied Exams",
        profileFocus:
          "Holistic student profile, domain specializations (Fintech, HR, Analytics), and GD/PI agility.",
      },
    ] as CollegeTier[],
    callPredictor: {
      badge: "KNOW YOUR PROFILE",
      title: "MBA / IIM Call Predictor & Composite Score Guide",
      desc: "Your CAT percentile alone does not tell the complete story. Academic profile and institute-specific admission criteria (10th, 12th, Graduation, Work Experience, Academic Diversity, Gender Diversity) heavily determine final interview shortlisting.",
      factors: [
        "Category (General / EWS / NC-OBC / SC / ST / PwD)",
        "Class 10 Academic Score Band",
        "Class 12 Academic Stream & Marks",
        "Undergraduate Discipline & Degree Percentage",
        "Full-Time Post-Graduation Work Experience",
        "Academic Diversity (Non-Engineering Multipliers)",
        "Gender Diversity Index Points",
      ],
      ctaText: "Explore Official IIM Selection Criteria ↗",
      url: "https://iimcat.ac.in",
      disclaimer:
        "External reference resource. Composite score calculations and shortlisting weights are determined solely by individual IIM admission committees and change annually.",
    },
  },

  goalsAndReflections: {
    heading: "Understanding Your Goals",
    promptQuestion: "Why am I preparing for CAT?",
    promptDesc:
      "Clear intrinsic motivation is the single biggest predictor of consistency over an 8–10 month preparation journey. Reflect on what milestone you want this journey to unlock.",
    reasons: [
      {
        title: "Career Acceleration & Mobility",
        desc: "Transition from individual contributor to strategic business decision-maker with accelerated leadership trajectories.",
      },
      {
        title: "Domain Shift & Specialization",
        desc: "Pivot from software or core engineering into Investment Banking, Management Consulting, Brand Management, or Product.",
      },
      {
        title: "High-Impact Peer Network",
        desc: "Build lifelong alumni connections, collaborate with brilliant multi-disciplinary peers, and access top-tier recruitment pipelines.",
      },
      {
        title: "Entrepreneurial Foundations",
        desc: "Acquire financial modeling, operational scaling, and venture strategy acumen to launch or lead scalable enterprises.",
      },
    ],
    journeyFlow: [
      {
        step: "01",
        label: "CAT ATTEMPT YEAR",
        subtext: "Establish target exam timeline & dedicated monthly bandwidth",
      },
      {
        step: "02",
        label: "TARGET PERFORMANCE",
        subtext: "Set realistic raw score & sectional accuracy milestones",
      },
      {
        step: "03",
        label: "TARGET COLLEGES",
        subtext:
          "Curate balanced Dream, High Target & Realistic institutional bands",
      },
      {
        step: "04",
        label: "PREPARATION TIMELINE",
        subtext:
          "Phase-wise transition: Foundations → Syllabus → Mock Forensics",
      },
    ],
  },

  preparationApproach: {
    heading: "Choosing Your Preparation Approach",
    summary:
      "There is no single 'correct' way to prepare for CAT. The ideal approach depends on your self-discipline, diagnostic baseline, and requirement for external accountability.",
    approaches: [
      {
        id: "self-study",
        title: "Self Study",
        badge: "AUTONOMOUS PATH",
        tagline:
          "High discipline, self-paced mastery through canonical textbooks & open resources",
        idealFor: [
          "Learners with strong baseline self-discipline",
          "Working professionals needing flexible study schedules",
          "Aspirants comfortable curating and structuring their own study plan",
        ],
        keyComponents: [
          "Standard reference books (Arun Sharma / Sarvesh Verma / Nishit Sinha)",
          "Dedicated study journal & error tracker",
          "High-quality national test series with video solutions",
        ],
        proTip:
          "Self-study succeeds when paired with an uncompromising weekly mock schedule starting early.",
      },
      {
        id: "coaching",
        title: "Coaching Program",
        badge: "STRUCTURED COHORT",
        tagline:
          "Curated curriculum, faculty mentorship, and live peer accountability",
        idealFor: [
          "Aspirants who thrive under external structure and deadlines",
          "Students needing guided conceptual handholding in QA or VARC",
          "Learners who benefit from peer competition and doubt-clearing sessions",
        ],
        keyComponents: [
          "Live or classroom lectures with structured syllabus timelines",
          "Curated topic-wise homework sheets and weekly tests",
          "Batch faculty mentorship and strategy seminars",
        ],
        proTip:
          "Do not passively attend classes. Actively solve problems before the instructor explains them.",
      },
      {
        id: "hybrid",
        title: "Hybrid Approach",
        badge: "RECOMMENDED BALANCED",
        tagline:
          "Self-driven foundation + selective topic modules + elite mock test series",
        idealFor: [
          "Learners strong in 1–2 sections who only need targeted help in their weakest area",
          "Repeat takers optimizing speed, test strategy, and set selection",
          "Aspirants balancing university exams or full-time jobs",
        ],
        keyComponents: [
          "Independent reading & self-study for core syllabus",
          "Targeted online micro-courses for specific weak modules (e.g. DILR sets or Algebra)",
          "2 distinct national test series (e.g. AIMCAT / SIMCAT / CL) for diverse difficulty calibration",
        ],
        proTip:
          "This is the most cost-effective and flexible model for self-motivated candidates.",
      },
    ] as PrepApproach[],
  },

  finalTransition: {
    heading: "Ready to Start Preparing?",
    desc: "Now that you understand what CAT demands, how the scoring economics work, and where you want to go, it is time to build the non-negotiable mental calculation and reading foundations.",
    ctaText: "Continue to 02 — Build Your Foundation →",
    nextStageId: 2,
  },
};

