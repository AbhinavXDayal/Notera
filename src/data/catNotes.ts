import type { NoteChapter } from '../types/notes';

export const CAT_NOTES: Record<string, NoteChapter> = {
  'percentages-multipliers': {
    id: 'percentages-multipliers',
    subjectId: 'qa',
    moduleId: 'qa-arithmetic',
    chapterNumber: 'Chapter 03',
    subjectTitle: 'Arithmetic Foundations',
    volume: 'Vol. I',
    title: 'The Architecture of Percentages & Multiplying Factors',
    quote: '"A percentage is not merely a fraction of a hundred; it is an operator of linear scaling."',
    estimatedReadTime: '14 minutes',
    totalPages: 38,
    currentPage: 14,
    nextChapterId: 'algebra-foundations',
    prevChapterId: undefined,
    toc: [
      { id: 'toc-overview', title: '1. Philosophical Overview' },
      { id: 'toc-roadmap', title: '2. Roadmap & Exam Topology' },
      { id: 'toc-fundamentals', title: '3. Core Fundamentals & Speed Math' },
      { id: 'toc-theory', title: '4. Theoretical Canon: Multiplying Factors' },
      { id: 'toc-examples', title: '5. Solved Benchmark Examples' },
      { id: 'toc-application', title: '6. Practical Application in DILR' },
      { id: 'toc-practice', title: '7. Deliberate Drill Exercises' },
      { id: 'toc-mistakes', title: '8. Classic Examiner Traps' },
      { id: 'toc-revision', title: '9. Rapid Revision Formula Sheet' },
      { id: 'toc-resources', title: '10. Recommended Deep Dives' }
    ],
    overview: {
      id: 'toc-overview',
      title: '1. Philosophical Overview',
      content: [
        'In secondary school, students are conditioned to calculate an increase of 20% on a base value X by writing X + (20/100)X. In the CAT exam, this two-step arithmetic introduces cognitive drag and computational vulnerability.',
        'Elite problem solvers view every percentage shift as a single direct multiplication. An increase of 20% is identically equivalent to scaling by 1.20, or more elegantly, by the rational fraction 6/5.',
        'Mastery of Multiplying Factors (MF) is the foundational cornerstone upon which all of Profit & Loss, Simple & Compound Interest, Ratio Mixtures, and Data Interpretation calculation speed is erected.'
      ]
    },
    roadmapPosition: {
      id: 'toc-roadmap',
      title: '2. Roadmap & Exam Topology',
      content: [
        'Arithmetic forms 40% to 45% of the total Quantitative Aptitude section (approx. 9–10 questions out of 22). Out of these, 3 to 4 questions hinge directly upon percentage ratio transformations.',
        'Stage in Preparation: Foundation Stage (Week 1–2). Do not advance to Time-Speed-Distance or Algebra until your conversion speed between fractions and decimals is subconscious.'
      ]
    },
    fundamentals: {
      id: 'toc-fundamentals',
      title: '3. Core Fundamentals & Speed Math',
      content: [
        'Memorizing key unit fractions is mandatory. Every CAT aspirant must convert the following reciprocals instantaneously without scratchpad work:'
      ],
      rules: [
        { label: '+12.5% (1/8)', fraction: '× 9/8', multiplier: '1.125', detail: 'Key for DI tables & interest' },
        { label: '+14.28% (1/7)', fraction: '× 8/7', multiplier: '1.1428', detail: 'Standard recurring decimal' },
        { label: '-16.66% (1/6)', fraction: '× 5/6', multiplier: '0.8333', detail: 'Rapid reduction operator' },
        { label: '+37.5% (3/8)', fraction: '× 11/8', multiplier: '1.375', detail: 'Commonly tested benchmark' }
      ]
    },
    theory: {
      id: 'toc-theory',
      title: '4. Theoretical Canon: Multiplying Factors',
      content: [
        'Let a quantity Q change by x%. The new value Q\' is given by: Q\' = Q × (1 ± x/100). The factor (1 ± x/100) is defined as the Multiplying Factor (MF).',
        'Successive Percentage Change: If a value undergoes consecutive shifts of +a% and +b%, the final multiplier is MF_final = MF_a × MF_b.',
        'Never use the traditional algebraic formula a + b + (ab/100) when fractions or multiple 3+ sequential changes are involved. Fraction chaining is impervious to rounding errors and takes 5 seconds.'
      ],
      mathCallout: 'Final Value = Initial Value × (MF₁) × (MF₂) × (MF₃)'
    },
    workedExamples: {
      id: 'toc-examples',
      title: '5. Solved Benchmark Examples',
      content: [
        'Study how shifting from algebra to multiplier arithmetic halves the solving time in genuine CAT questions.'
      ],
      examples: [
        {
          problemNumber: 1,
          question: 'The price of coffee beans increases by 25%. By what percentage must a household reduce its consumption so that total expenditure increases by only 10%?',
          traditionalMethod: 'Let Price = P, Quantity = Q. Expenditure E = P × Q. New P\' = 1.25P. New E\' = 1.10E. New Q\' = 1.10E / 1.25P = 1.10(PQ) / 1.25P = (1.10/1.25)Q = 0.88Q. Reduction = (1 - 0.88) × 100 = 12%.',
          intuitiveMethod: 'Expenditure = Price × Quantity => MF(Expenditure) = MF(Price) × MF(Quantity). Thus, 1.10 = 1.25 × MF(Quantity) => MF(Quantity) = 1.10 / 1.25 = 110 / 125 = 22 / 25. A fraction of 22/25 represents a drop of 3/25 = 12%.',
          proTip: 'Whenever Product = A × B, use MF(Product) = MF(A) × MF(B). Never assume dummy variables like 100 or x.'
        },
        {
          problemNumber: 2,
          question: 'A shopkeeper marks up an article by 40% above cost price and allows a discount of 14.28%. Find the net profit percentage.',
          traditionalMethod: 'Let CP = 100. MP = 140. Discount = 14.28% of 140 = 20. SP = 120. Profit = 20%.',
          intuitiveMethod: 'Mark-up +40% = × 7/5. Discount -14.28% (-1/7) = × 6/7. Net MF = (7/5) × (6/7) = 6/5 = +20% Profit directly!',
          proTip: 'The 7 cancels cleanly in the numerator and denominator in less than 2 seconds.'
        }
      ]
    },
    practicalApplication: {
      id: 'toc-application',
      title: '6. Practical Application in DILR Contexts',
      content: [
        'In complex Data Interpretation tables showing GDP growth or market share trends over 5 consecutive years, multiplying factors enable instant relative ranking.',
        'Example: If Company A grew by 15%, 20%, and -10% across 3 years, its 3-year multiplier is (1.15) × (1.20) × (0.90) = 1.15 × 1.08 = 1.242 (+24.2% total growth).'
      ]
    },
    practiceDrills: {
      id: 'toc-practice',
      title: '7. Deliberate Drill Exercises',
      content: [
        'Drill 1: Convert a 16.66% decrease followed by a 20% increase into a single fraction multiplier (Answer: 5/6 × 6/5 = 1 => 0% net change).',
        'Drill 2: If petrol price drops by 9.09% (1/11), by what percentage can travel distance be increased with same budget? (Answer: 10% or +1/10).',
        'Drill 3: The volume of a cylinder whose radius increases by 20% and height decreases by 25% changes by what factor? (Volume ∝ r²h => 1.2 × 1.2 × 0.75 = 1.44 × 0.75 = 1.08 => +8%).'
      ]
    },
    commonMistakes: {
      id: 'toc-mistakes',
      title: '8. Classic Examiner Traps',
      content: [
        'The most frequent point-leak in arithmetic is the Base-Shift misconception.'
      ],
      mistake: {
        title: 'The Base-Shift Trap',
        trap: 'Assuming that if A is 25% greater than B, then B must be 25% lesser than A.',
        antidote: 'The base changes from B (1.00) to A (1.25). A 1/4 increase (+25%) requires a 1/(4+1) = 1/5 decrease (-20%) to return to base. Rule: A +x/(y) increase requires a -x/(x+y) decrease to break even.'
      }
    },
    rapidRevision: {
      id: 'toc-revision',
      title: '9. Rapid Revision Formula Sheet',
      content: [
        'Core axioms to review before mock exams:'
      ],
      revisionBullets: [
        'Percentage = (Part / Base) × 100',
        'Multiplier MF = (1 ± Percentage / 100)',
        'Fraction Reciprocals: 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%, 1/12 = 8.33%',
        'Product Invariance: If A × B = Constant, and A increases by a/b, B must decrease by a/(a+b)',
        'Net MF for successive changes = MF₁ × MF₂ × MF₃ ...'
      ]
    },
    curatedResources: {
      id: 'toc-resources',
      title: '10. Recommended Deep Dives',
      content: [
        'Supplementary notes and worksheets to reinforce this topic:'
      ],
      resources: [
        { title: 'Speed Math & Fraction-to-Percentage Flashcards', type: 'Worksheet', linkText: 'Launch Practice Flashcards' },
        { title: 'Profit, Loss & Commercial Arithmetic Notes (Vol. II)', type: 'Note', linkText: 'Read Chapter 04' },
        { title: 'Official CAT Arithmetic Past 10-Year Compilation', type: 'Archive', linkText: 'View 60 Solved Problems' }
      ]
    }
  },
  'algebra-foundations': {
    id: 'algebra-foundations',
    subjectId: 'qa',
    moduleId: 'qa-algebra',
    chapterNumber: 'Chapter 07',
    subjectTitle: 'Algebra & Functions',
    volume: 'Vol. II',
    title: 'Algebraic Foundations: Linear & Quadratic Models',
    quote: '"Algebra is the art of giving the same name to different things and discovering their invariant truths."',
    estimatedReadTime: '18 minutes',
    totalPages: 42,
    currentPage: 1,
    nextChapterId: 'varc-rc-deconstruction',
    prevChapterId: 'percentages-multipliers',
    toc: [
      { id: 'toc-overview', title: '1. Philosophical Overview' },
      { id: 'toc-roadmap', title: '2. Roadmap & Exam Topology' },
      { id: 'toc-fundamentals', title: '3. Core Fundamentals: Roots & Coefficients' },
      { id: 'toc-theory', title: '4. Theoretical Canon: The Parabola Graph' },
      { id: 'toc-examples', title: '5. Solved Benchmark Examples' },
      { id: 'toc-application', title: '6. Practical Modulus & Inequality Bounds' },
      { id: 'toc-practice', title: '7. Deliberate Drill Exercises' },
      { id: 'toc-mistakes', title: '8. Classic Examiner Traps' },
      { id: 'toc-revision', title: '9. Rapid Revision Formula Sheet' },
      { id: 'toc-resources', title: '10. Recommended Deep Dives' }
    ],
    overview: {
      id: 'toc-overview',
      title: '1. Philosophical Overview',
      content: [
        'CAT Algebra does not test tedious algebraic manipulation. It tests geometric intuition of functions, root symmetries, and bound conditions.',
        'A quadratic equation ax² + bx + c = 0 should be visualized as a parabola. Its vertex, axis of symmetry, and discriminant reveal everything without brute-force expansion.'
      ]
    },
    roadmapPosition: {
      id: 'toc-roadmap',
      title: '2. Roadmap & Exam Topology',
      content: [
        'Algebra contributes 5 to 6 questions (approx. 25–30% of QA). Linear equations, quadratic equations, and modulus inequalities appear in every single CAT slot.'
      ]
    },
    fundamentals: {
      id: 'toc-fundamentals',
      title: '3. Core Fundamentals: Roots & Coefficients',
      content: [
        'For any quadratic equation ax² + bx + c = 0 with roots α and β:',
        'Sum of roots: α + β = -b/a',
        'Product of roots: α · β = c/a',
        'Discriminant Δ = b² - 4ac determines root nature: Δ > 0 (two distinct real roots), Δ = 0 (repeated real root), Δ < 0 (complex conjugate roots).'
      ],
      rules: [
        { label: 'Discriminant Δ > 0', fraction: 'Real & Distinct', multiplier: '2 X-intercepts', detail: 'Parabola crosses X-axis twice' },
        { label: 'Discriminant Δ = 0', fraction: 'Real & Equal', multiplier: 'Tangent to Axis', detail: 'Vertex touches X-axis at x = -b/(2a)' },
        { label: 'Discriminant Δ < 0', fraction: 'No Real Roots', multiplier: 'Floating Curve', detail: 'Always positive (a>0) or negative (a<0)' }
      ]
    },
    theory: {
      id: 'toc-theory',
      title: '4. Theoretical Canon: The Parabola Graph',
      content: [
        'For f(x) = ax² + bx + c:',
        'If a > 0, the parabola opens upward, achieving its global minimum at x = -b / (2a) with minimum value = -Δ / (4a).',
        'If a < 0, the parabola opens downward, achieving its global maximum at x = -b / (2a) with maximum value = -Δ / (4a).'
      ],
      mathCallout: 'Vertex Coordinates = (-b / 2a, -Δ / 4a)'
    },
    workedExamples: {
      id: 'toc-examples',
      title: '5. Solved Benchmark Examples',
      content: [
        'How to avoid equation expansions using vertex analysis.'
      ],
      examples: [
        {
          problemNumber: 1,
          question: 'Find the minimum value of f(x) = 2x² - 12x + 23 for all real x.',
          traditionalMethod: 'Take derivative f\'(x) = 4x - 12 = 0 => x = 3. Second derivative f\'\'(x) = 4 > 0 (minimum). f(3) = 2(9) - 12(3) + 23 = 18 - 36 + 23 = 5.',
          intuitiveMethod: 'Standard form: f(x) = 2(x² - 6x + 9) + 23 - 18 = 2(x - 3)² + 5. Since (x - 3)² ≥ 0, minimum occurs at x = 3, yielding minimum value 5.',
          proTip: 'Completing the square takes 3 seconds and prevents calculus differentiation errors.'
        }
      ]
    },
    practicalApplication: {
      id: 'toc-application',
      title: '6. Practical Modulus & Inequality Bounds',
      content: [
        'Solving |x - a| + |x - b| = k: Geometrically, this represents the sum of distances from point x to points a and b on the real number line.',
        'The minimum value of |x - a| + |x - b| is always the straight distance |b - a| for any x between a and b.'
      ]
    },
    practiceDrills: {
      id: 'toc-practice',
      title: '7. Deliberate Drill Exercises',
      content: [
        'Drill 1: For what range of k does x² - kx + 9 = 0 have real roots? (Answer: k ≤ -6 or k ≥ 6).',
        'Drill 2: Solve |2x - 7| ≤ 5. (Answer: 1 ≤ x ≤ 6).'
      ]
    },
    commonMistakes: {
      id: 'toc-mistakes',
      title: '8. Classic Examiner Traps',
      content: [
        'Beware of squaring both sides of inequalities containing variables without verifying signs.'
      ],
      mistake: {
        title: 'The False Root Trap from Blind Squaring',
        trap: 'Squaring an inequality like x - 3 > √(x + 7) without enforcing x - 3 > 0.',
        antidote: 'Always establish the domain constraints first: both LHS and RHS must be positive before squaring.'
      }
    },
    rapidRevision: {
      id: 'toc-revision',
      title: '9. Rapid Revision Formula Sheet',
      content: [
        'Quick summary checklist:'
      ],
      revisionBullets: [
        'Quadratic roots: x = (-b ± √(b² - 4ac)) / 2a',
        'Vertex: x = -b / (2a)',
        'Roots reciprocal condition: c = a',
        'Roots equal in magnitude, opposite in sign: b = 0',
        'AM ≥ GM ≥ HM for positive real numbers'
      ]
    },
    curatedResources: {
      id: 'toc-resources',
      title: '10. Recommended Deep Dives',
      content: [
        'Supplementary notes for advanced algebra:'
      ],
      resources: [
        { title: 'Logarithms & Exponents Master Handbook', type: 'Note', linkText: 'Open Handbook' },
        { title: 'Maxima & Minima Geometric Optimization', type: 'Note', linkText: 'View Guide' }
      ]
    }
  },
  'varc-rc-deconstruction': {
    id: 'varc-rc-deconstruction',
    subjectId: 'varc',
    moduleId: 'varc-rc',
    chapterNumber: 'Chapter 01',
    subjectTitle: 'Verbal Ability & RC',
    volume: 'Vol. I',
    title: 'The Anatomy of Dense Editorial Reading Comprehension',
    quote: '"Do not read to remember words; read to track the progression of the author\'s intellectual commitment."',
    estimatedReadTime: '16 minutes',
    totalPages: 32,
    currentPage: 1,
    nextChapterId: 'dilr-matrix-logic',
    prevChapterId: 'algebra-foundations',
    toc: [
      { id: 'toc-overview', title: '1. Philosophical Overview' },
      { id: 'toc-roadmap', title: '2. Roadmap & Exam Topology' },
      { id: 'toc-fundamentals', title: '3. The 3 Macro Structures of RC' },
      { id: 'toc-theory', title: '4. The 4 Fatal Option Traps' },
      { id: 'toc-examples', title: '5. Solved Passage Deconstruction' },
      { id: 'toc-application', title: '6. Active Annotation & Structural Mapping' },
      { id: 'toc-practice', title: '7. Deliberate Drill Exercises' },
      { id: 'toc-mistakes', title: '8. Classic Examiner Traps' },
      { id: 'toc-revision', title: '9. Rapid Revision Strategy Sheet' },
      { id: 'toc-resources', title: '10. Recommended Reading Sources' }
    ],
    overview: {
      id: 'toc-overview',
      title: '1. Philosophical Overview',
      content: [
        'CAT RC passages are drawn directly from rigorous scholarly journals, Aeon essays, and academic treatises on philosophy, sociology, anthropology, and cognitive science.',
        'The candidate is tested on structural mapping: identifying why the author wrote a paragraph, how the thesis evolves, and where the counter-argument is dismantled.'
      ]
    },
    roadmapPosition: {
      id: 'toc-roadmap',
      title: '2. Roadmap & Exam Topology',
      content: [
        'RC accounts for 16 out of 24 questions in VARC (67%). Scoring 30+ marks in VARC almost guarantees a 95+ percentile in the section.'
      ]
    },
    fundamentals: {
      id: 'toc-fundamentals',
      title: '3. The 3 Macro Structures of RC',
      content: [
        '1. Hypothesis-Evidence-Refutation: Author introduces an accepted belief, provides empirical anomalies, and proposes a revised model.',
        '2. Dialectical Synthesis: Author pits School of Thought A against School of Thought B, then shows both are incomplete without a unifying third perspective.',
        '3. Expository Historical Shift: Author traces the evolution of a cultural, ecological, or economic institution across centuries.'
      ]
    },
    theory: {
      id: 'toc-theory',
      title: '4. The 4 Fatal Option Traps',
      content: [
        'CAT options are designed by psychometricians to exploit hasty readers. The 4 cardinal traps are:'
      ],
      rules: [
        { label: 'Trap A: Out of Scope', fraction: 'Plausible Falsehood', multiplier: 'External Claim', detail: 'Mentions true real-world facts never stated by the author' },
        { label: 'Trap B: Extreme Distortion', fraction: 'Always / Never', multiplier: 'Overreach', detail: 'Turns the author\'s cautious claim ("some", "tends to") into an absolute rule ("all", "must")' },
        { label: 'Trap C: Scope Narrowing', fraction: 'Sub-point as Main', multiplier: 'Partial Truth', detail: 'Accurate summary of paragraph 2 alone, but misses the passage thesis' },
        { label: 'Trap D: Direct Inversion', fraction: 'Subtle Negation', multiplier: 'Opposite Tone', detail: 'Inverts author tone by swapping causality or subject/object' }
      ]
    },
    workedExamples: {
      id: 'toc-examples',
      title: '5. Solved Passage Deconstruction',
      content: [
        'Deconstruction of an essay on algorithmic determinism and human agency.'
      ],
      examples: [
        {
          problemNumber: 1,
          question: 'Which of the following, if true, would most weaken the author\'s argument regarding machine cognition?',
          traditionalMethod: 'Reread the entire passage to find keyword "machine cognition" and match sentences.',
          intuitiveMethod: 'Isolate the author\'s core vulnerability: The author claims machine cognition lacks intentionality because computers operate solely on syntactical manipulation without semantic grounding. To weaken this, show a machine generating novel semantic understanding independent of its programmer.',
          proTip: 'To weaken an argument, always attack the unstated assumption bridging the evidence to the conclusion.'
        }
      ]
    },
    practicalApplication: {
      id: 'toc-application',
      title: '6. Active Annotation & Structural Mapping',
      content: [
        'Never read passively. On your scratchpad, write a 4-word summary for each paragraph:',
        'P1: Intro to Cartesian dualism.',
        'P2: Damasio\'s critique (somatic markers).',
        'P3: Author\'s synthesis: emotion is cognition.',
        'This 15-second scratchpad map prevents having to re-read the entire passage for every question.'
      ]
    },
    practiceDrills: {
      id: 'toc-practice',
      title: '7. Deliberate Drill Exercises',
      content: [
        'Practice daily with 2 passages from Aeon Essays or Project Syndicate with a 7-minute timer per passage.'
      ]
    },
    commonMistakes: {
      id: 'toc-mistakes',
      title: '8. Classic Examiner Traps',
      content: [
        'The "Sounds Profound" bias:'
      ],
      mistake: {
        title: 'The Philosophical Echo Trap',
        trap: 'Selecting an option because it contains erudite, sophisticated vocabulary that sounds intellectually impressive.',
        antidote: 'High vocabulary in options is frequently a decoy. The correct option is usually simple, precise, and directly supported by textual evidence.'
      }
    },
    rapidRevision: {
      id: 'toc-revision',
      title: '9. Rapid Revision Strategy Sheet',
      content: [
        'VARC Golden Rules:'
      ],
      revisionBullets: [
        'Allocate 28 minutes to 4 RCs (7 mins each) and 12 minutes to 8 VA questions.',
        'Eliminate 3 wrong options rather than hunting for the "perfect" answer.',
        'Check modifier words: frequently, rarely, always, predominantly.',
        'Never bring personal political or religious beliefs into passage comprehension.'
      ]
    },
    curatedResources: {
      id: 'toc-resources',
      title: '10. Recommended Reading Sources',
      content: [
        'Canonical reading portals to build comprehension endurance:'
      ],
      resources: [
        { title: 'Aeon Essays (Philosophy, Neuroscience, History)', type: 'Publication', linkText: 'Visit Aeon.co' },
        { title: 'Arts & Letters Daily (Intellectual Debate Portal)', type: 'Portal', linkText: 'Visit ALDaily.com' },
        { title: 'The Hindu & Guardian Editorial Archives', type: 'Archive', linkText: 'View Selected Editorials' }
      ]
    }
  },
  'dilr-matrix-logic': {
    id: 'dilr-matrix-logic',
    subjectId: 'dilr',
    moduleId: 'dilr-arrangements',
    chapterNumber: 'Chapter 02',
    subjectTitle: 'Data Interpretation & LR',
    volume: 'Vol. I',
    title: 'Matrix Logic & Constraint Tree Deconstruction',
    quote: '"A logical puzzle is not solved by guessing; it is solved by systematically shrinking the space of permissible realities."',
    estimatedReadTime: '15 minutes',
    totalPages: 34,
    currentPage: 1,
    nextChapterId: undefined,
    prevChapterId: 'varc-rc-deconstruction',
    toc: [
      { id: 'toc-overview', title: '1. Philosophical Overview' },
      { id: 'toc-roadmap', title: '2. Roadmap & Exam Topology' },
      { id: 'toc-fundamentals', title: '3. Matrix Grid Design' },
      { id: 'toc-theory', title: '4. Direct vs Indirect Constraints' },
      { id: 'toc-examples', title: '5. Solved Matrix Benchmark Set' },
      { id: 'toc-application', title: '6. The 4-Minute Set Audit Protocol' },
      { id: 'toc-practice', title: '7. Deliberate Drill Exercises' },
      { id: 'toc-mistakes', title: '8. Classic Examiner Traps' },
      { id: 'toc-revision', title: '9. Rapid Revision Framework' },
      { id: 'toc-resources', title: '10. Recommended Deep Dives' }
    ],
    overview: {
      id: 'toc-overview',
      title: '1. Philosophical Overview',
      content: [
        'DILR matrix arrangements require assigning multiple attributes (e.g. 5 people, 5 professions, 5 cities, 5 vehicle brands) based on clues of varying precision.',
        'The secret to cracking complex sets is not mental gymnastics; it is a standardized, clean visual grid where positive facts (✓) and negative facts (✗) are permanently documented.'
      ]
    },
    roadmapPosition: {
      id: 'toc-roadmap',
      title: '2. Roadmap & Exam Topology',
      content: [
        'DILR contains 4 sets of 5 questions each (20 questions total). Cracking just 2 full sets with 100% accuracy guarantees a 98+ percentile.'
      ]
    },
    fundamentals: {
      id: 'toc-fundamentals',
      title: '3. Matrix Grid Design',
      content: [
        'Choose the Primary Anchor: The attribute with the most fixed sequence or identity (e.g., Days of the week, Floor numbers 1 to 8, or People names) forms the immutable vertical column.',
        'Use secondary columns for dependent attributes (Car, City, Score).'
      ]
    },
    theory: {
      id: 'toc-theory',
      title: '4. Direct vs Indirect Constraints',
      content: [
        'Clue Type 1 (Direct): "Rohit drives a Sedan and lives in Mumbai." -> Fill directly into row Rohit.',
        'Clue Type 2 (Relative): "The person from Delhi is 2 years older than the one driving a Hatchback." -> Write as an external constraint link: Age(Delhi) = Age(Hatchback) + 2.',
        'Clue Type 3 (Negative): "Aman does not visit Chennai or Kolkata." -> Place ✗ Chennai, ✗ Kolkata in Aman\'s cell.'
      ]
    },
    workedExamples: {
      id: 'toc-examples',
      title: '5. Solved Matrix Benchmark Set',
      content: [
        'Walkthrough of a 5-person, 5-city, 5-profession puzzle using case bifurcation.'
      ],
      examples: [
        {
          problemNumber: 1,
          question: 'If only two viable cases remain after Clue 4, what is the fastest strategy?',
          traditionalMethod: 'Try to mentally test both branches simultaneously in your head.',
          intuitiveMethod: 'Immediately draw two parallel grids: Case A and Case B. Proceed with Clue 5 on both grids. One grid will inevitably generate an explicit contradiction within 2 steps and collapse.',
          proTip: 'Branching on paper takes 10 seconds and completely eliminates mental working memory overload.'
        }
      ]
    },
    practicalApplication: {
      id: 'toc-application',
      title: '6. The 4-Minute Set Audit Protocol',
      content: [
        'When the DILR clock starts (00:40:00):',
        'Minute 0–4: Read all 4 sets for 1 minute each without writing anything.',
        'Rank them: Green (Clean constraints, familiar archetype) -> Yellow (Moderate complexity) -> Red (Ambiguous rules or heavy brute-force math).',
        'Solve the Green sets first. Never get stuck on a Red set early.'
      ]
    },
    practiceDrills: {
      id: 'toc-practice',
      title: '7. Deliberate Drill Exercises',
      content: [
        'Solve 2 benchmark DILR sets daily with an unyielding 15-minute stopwatch per set.'
      ]
    },
    commonMistakes: {
      id: 'toc-mistakes',
      title: '8. Classic Examiner Traps',
      content: [
        'The Sunk Cost Trap:'
      ],
      mistake: {
        title: 'The Sunk Cost Trap in DILR',
        trap: 'Spending 12 minutes on a set, realizing you made an early assumption error, and stubbornly spending another 10 minutes trying to patch it up.',
        antidote: 'If a set generates an irreconcilable contradiction after 8 minutes, abandon it cleanly and switch to another set immediately. 12 minutes remaining is enough to crack 1 full set of 5 questions.'
      }
    },
    rapidRevision: {
      id: 'toc-revision',
      title: '9. Rapid Revision Framework',
      content: [
        'DILR Execution Framework:'
      ],
      revisionBullets: [
        'Always establish the anchor column first.',
        'Convert all negative clues into cell-level exclusions (✗).',
        'Do not hesitate to branch into 2 explicit parallel cases.',
        'Solve question 1 only after the matrix grid is completely or sufficiently locked.'
      ]
    },
    curatedResources: {
      id: 'toc-resources',
      title: '10. Recommended Deep Dives',
      content: [
        'Advanced DILR collections:'
      ],
      resources: [
        { title: 'Games & Tournaments Masterclass', type: 'Note', linkText: 'View Note' },
        { title: 'CAT Official Past 7-Year DILR Set Vault', type: 'Archive', linkText: 'Open Vault' }
      ]
    }
  }
};

