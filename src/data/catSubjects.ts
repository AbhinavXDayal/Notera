import type { SubjectSection } from '../types/field';

export const CAT_SUBJECTS: SubjectSection[] = [
  {
    id: 'qa',
    name: 'Quantitative Aptitude',
    shortName: 'QA',
    questionCount: 22,
    timeAllocation: '40 Minutes',
    weightageDescription: 'Calculations, algebraic abstractions, and spatial geometry.',
    summary: 'Master arithmetic foundations, linear/quadratic equations, function mappings, coordinate geometry, number theory, and combinatorics.',
    modules: [
      {
        id: 'qa-arithmetic',
        title: 'Arithmetic',
        moduleNumber: 'Module 01',
        chapterCount: 6,
        weightageText: 'Highest Weightage (~45%)',
        weightagePercentage: 45,
        weightageType: 'high',
        description: 'Percentages, Multiplying Factors, Profit & Loss, Simple & Compound Interest, Ratio & Proportion, Averages & Mixtures, Time Speed & Distance, and Time & Work.',
        chapters: [
          'Percentages & Multiplying Factors',
          'Profit, Loss, Discount & Mark-up',
          'Simple & Compound Interest Compounding',
          'Ratios, Proportions & Variations',
          'Averages, Weighted Means & Alligations',
          'Time, Speed, Distance, Trains & Races',
          'Time & Work, Pipes & Cisterns'
        ],
        recommendedNoteId: 'percentages-multipliers'
      },
      {
        id: 'qa-algebra',
        title: 'Algebra',
        moduleNumber: 'Module 02',
        chapterCount: 5,
        weightageText: 'High Weightage (~30%)',
        weightagePercentage: 30,
        weightageType: 'high',
        description: 'Linear & Quadratic Equations, Polynomial Roots, Modulus & Absolute Values, Inequalities, Logarithms, Maxima & Minima, and Sequences & Series.',
        chapters: [
          'Linear & Simultaneous Equations',
          'Quadratic Equations & Roots Nature',
          'Inequalities & Modulus Functions',
          'Logarithms & Exponents Properties',
          'Functions, Graphs & Maxima-Minima',
          'Arithmetic, Geometric & Harmonic Progressions'
        ],
        recommendedNoteId: 'algebra-foundations'
      },
      {
        id: 'qa-geometry',
        title: 'Geometry & Mensuration',
        moduleNumber: 'Module 03',
        chapterCount: 4,
        weightageText: 'Medium Weightage (~15%)',
        weightagePercentage: 15,
        weightageType: 'medium',
        description: 'Triangles, Polygons, Circles, Tangents, Coordinate Geometry, Trigonometry basics, and 3D Solid Mensuration.',
        chapters: [
          'Triangles: Similarity, Congruence & Centers',
          'Circles: Chords, Secants & Tangents',
          'Polygons & Quadrilaterals',
          'Coordinate Geometry & Straight Lines',
          'Mensuration: 3D Solids & Volume Invariance'
        ],
        recommendedNoteId: 'percentages-multipliers'
      },
      {
        id: 'qa-numbers',
        title: 'Number Systems',
        moduleNumber: 'Module 04',
        chapterCount: 4,
        weightageText: 'Moderate Weightage (~8%)',
        weightagePercentage: 8,
        weightageType: 'low',
        description: 'Divisibility rules, Prime factorization, Remainder theorems (Euler, Wilson), Highest power of prime, and Base systems.',
        chapters: [
          'Divisibility Rules & Factors Breakdown',
          'LCM, HCF & Product Properties',
          'Remainder Theorems & Unit Digits',
          'Base System Conversions'
        ]
      },
      {
        id: 'qa-modern-math',
        title: 'Modern Mathematics',
        moduleNumber: 'Module 05',
        chapterCount: 3,
        weightageText: 'Low to Moderate (~7%)',
        weightagePercentage: 7,
        weightageType: 'low',
        description: 'Permutations & Combinations, Probability theory, Set theory, and Binomial theorem applications.',
        chapters: [
          'Permutations & Combinations Principles',
          'Classical & Conditional Probability',
          'Set Theory & Venn Overlaps'
        ]
      }
    ]
  },
  {
    id: 'varc',
    name: 'Verbal Ability & Reading Comprehension',
    shortName: 'VARC',
    questionCount: 24,
    timeAllocation: '40 Minutes',
    weightageDescription: 'Analytical reading, philosophical essays, and textual coherence.',
    summary: 'Master 4 diverse long-form RC passages (16 questions) alongside high-yield Verbal Ability (8 questions: Parajumbles, Para Summary, Odd One Out).',
    modules: [
      {
        id: 'varc-rc',
        title: 'Reading Comprehension',
        moduleNumber: 'Module 01',
        chapterCount: 5,
        weightageText: 'Dominant Weightage (67%)',
        weightagePercentage: 67,
        weightageType: 'high',
        description: '4 passages of 450–550 words each across Philosophy, Psychology, Sociology, History, Art, Economics, and Environmental Science.',
        chapters: [
          'Deconstructing Editorial & Academic Text',
          'Primary Purpose & Authorial Tone',
          'Inference vs Direct Statement Analysis',
          'Option Traps: Out of Scope & Extreme Distortion',
          'Speed Reading & Active Structural Annotation'
        ],
        recommendedNoteId: 'varc-rc-deconstruction'
      },
      {
        id: 'varc-parajumbles',
        title: 'Para Jumbles',
        moduleNumber: 'Module 02',
        chapterCount: 3,
        weightageText: 'High Yield (TITA)',
        weightagePercentage: 12,
        weightageType: 'medium',
        description: 'Arranging 4–5 sentences into a logically coherent paragraph using mandatory pairs, noun-pronoun antecedents, and chrono-markers.',
        chapters: [
          'Mandatory Pair Identification Rules',
          'Noun-Pronoun & Acronym Bridges',
          'Chronological & Logical Connectors'
        ]
      },
      {
        id: 'varc-summary',
        title: 'Para Summary & Completion',
        moduleNumber: 'Module 03',
        chapterCount: 3,
        weightageText: 'High Yield (MCQ)',
        weightagePercentage: 12,
        weightageType: 'medium',
        description: 'Distilling complex arguments into a 1-sentence synthesis while rejecting options that capture only sub-points or introduce new assumptions.',
        chapters: [
          'Thesis Identification & Distillation',
          'Eliminating Partial Scope & Minor Detail Options',
          'Sentence Completion & Coherence Transitions'
        ]
      },
      {
        id: 'varc-oddoneout',
        title: 'Odd One Out (Para Oddity)',
        moduleNumber: 'Module 04',
        chapterCount: 2,
        weightageText: 'High Yield (TITA)',
        weightagePercentage: 9,
        weightageType: 'medium',
        description: 'Detecting the intruder sentence that deviates from the common overarching thematic thread.',
        chapters: [
          'Theme Mapping & Subject Invariance',
          'Tone Shift & Temporal Mismatch Detection'
        ]
      }
    ]
  },
  {
    id: 'dilr',
    name: 'Data Interpretation & Logical Reasoning',
    shortName: 'DILR',
    questionCount: 20,
    timeAllocation: '40 Minutes',
    weightageDescription: 'Combinatorial reasoning, puzzle grids, and data reduction.',
    summary: '4 multi-question problem sets (5 questions each). The challenge is disciplined set selection and error-free logical grid construction.',
    modules: [
      {
        id: 'dilr-arrangements',
        title: 'Arrangements & Matrix Logic',
        moduleNumber: 'Module 01',
        chapterCount: 4,
        weightageText: 'Core Archetype (~30%)',
        weightagePercentage: 30,
        weightageType: 'high',
        description: 'Linear, Circular, and Multi-variable Matrix grids with positive/negative constraint mapping.',
        chapters: [
          'Linear & Circular Ordering Constraints',
          'Multi-Attribute Matrix Matching',
          'Grid Elimination & Shorthand Notation',
          'Conditional Branching & Case Splits'
        ],
        recommendedNoteId: 'dilr-matrix-logic'
      },
      {
        id: 'dilr-games',
        title: 'Games & Tournaments',
        moduleNumber: 'Module 02',
        chapterCount: 3,
        weightageText: 'High-Value Archetype (~25%)',
        weightagePercentage: 25,
        weightageType: 'high',
        description: 'Round-robin tables, Knockout seeding tournaments, Points table forensics, and Max-Min outcome bounds.',
        chapters: [
          'Round-Robin League Points Tables',
          'Knockout Tournaments & Upset Seedings',
          'Score Deductions & Margin Constraints'
        ]
      },
      {
        id: 'dilr-sets',
        title: 'Set Theory & Venn Overlaps',
        moduleNumber: 'Module 03',
        chapterCount: 3,
        weightageText: 'Frequent Archetype (~20%)',
        weightagePercentage: 20,
        weightageType: 'medium',
        description: '3-set and 4-set Venn diagram regions, Maxima-Minima intersection bounds, and partial overlap constraints.',
        chapters: [
          '3-Variable Venn Exact Formulations',
          '4-Variable Venn Grid Alternatives',
          'Intersection Maxima & Minima Bounds'
        ]
      },
      {
        id: 'dilr-charts',
        title: 'Tables & Complex Charts',
        moduleNumber: 'Module 04',
        chapterCount: 3,
        weightageText: 'Analytical Archetype (~15%)',
        weightagePercentage: 15,
        weightageType: 'medium',
        description: 'Multi-layer bar charts, Spider/Radar graphs, Bubble scatters, and Missing Data tables.',
        chapters: [
          'Missing Value Table Reconstruction',
          'Radar, Bubble & Stacked Visuals',
          'Fast Approximation & Ratio Audits'
        ]
      },
      {
        id: 'dilr-reasoning',
        title: 'Logical Deduction & Truth-Liar',
        moduleNumber: 'Module 05',
        chapterCount: 2,
        weightageText: 'Puzzle Archetype (~10%)',
        weightagePercentage: 10,
        weightageType: 'low',
        description: 'Binary logic (Truth-tellers, Alternators, Liars), Order & Ranking, and Cryptarithmetic arithmetic puzzles.',
        chapters: [
          'Binary Logic Truth-Liar Matrix',
          'Routes, Networks & Flow Invariants'
        ]
      }
    ]
  }
];

