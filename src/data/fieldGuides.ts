import type { FieldGuideData } from '../types/field';

export const FIELD_GUIDES: Record<string, FieldGuideData> = {
  JEE: {
    id: 'JEE',
    title: 'JEE',
    subtitle: 'Engineering Entrance',
    symbol: 'J',
    plateNumber: 'Plate No. 02 — The Topology of Physical & Mathematical Mechanics',
    tagline: 'From classical Newtonian mechanics to multidimensional calculus and quantum electron states.',
    overview: 'The Joint Entrance Examination (JEE) tests rigorous analytical reasoning across Physics, Chemistry, and Mathematics for admission into the Indian Institutes of Technology (IITs) and National Institutes of Technology (NITs).',
    examPattern: {
      duration: '180 Minutes (3 Hours)',
      totalMarks: '300 (Main) / ~360 (Advanced)',
      sections: 'Physics (30 Qs), Chemistry (30 Qs), Mathematics (30 Qs)',
      frequency: 'Twice a year (Jan & April for Main)',
      eligibility: '10+2 with Physics, Chemistry & Mathematics'
    },
    pillars: [
      {
        name: 'Physics',
        description: 'Classical Mechanics, Electrodynamics, Optics, Thermodynamics, and Modern Physics.',
        weight: '33.3% of marks'
      },
      {
        name: 'Chemistry',
        description: 'Physical Chemistry numericals, Organic reaction mechanisms, and Inorganic coordination doctrine.',
        weight: '33.3% of marks'
      },
      {
        name: 'Mathematics',
        description: 'Differential & Integral Calculus, Coordinate Geometry, Vectors & 3D, and Algebra.',
        weight: '33.3% of marks'
      }
    ],
    starterSteps: [
      { step: 1, title: 'NCERT Canonical Mastery', desc: 'Read every line of NCERT Chemistry and Physics mechanics fundamentals.' },
      { step: 2, title: 'Calculus & Vector Tools', desc: 'Master differentiation, integration by parts, and 3D vector geometry as mathematical engines.' },
      { step: 3, title: 'Multi-Concept Problem Sets', desc: 'Solve questions that combine laws of motion with work-energy-power invariants.' },
      { step: 4, title: 'Timed 3-Hour Full Simulators', desc: 'Train stamina and question triage for JEE Main and Advanced formats.' }
    ]
  },
  NEET: {
    id: 'NEET',
    title: 'NEET',
    subtitle: 'Medical Sciences',
    symbol: 'N',
    plateNumber: 'Plate No. 03 — The Architecture of Living Systems & Molecular Physics',
    tagline: 'From cellular biology and human physiology to organic synthesis and chemical equilibrium.',
    overview: 'The National Eligibility cum Entrance Test (NEET-UG) is the single entrance examination for admission to MBBS, BDS, and allied undergraduate medical courses across all Indian medical colleges including AIIMS and JIPMER.',
    examPattern: {
      duration: '200 Minutes (3 Hours 20 Mins)',
      totalMarks: '720 Marks (180 Questions to answer out of 200)',
      sections: 'Physics (45 Qs), Chemistry (45 Qs), Biology: Botany (45 Qs) & Zoology (45 Qs)',
      frequency: 'Annually in May',
      eligibility: '10+2 with Physics, Chemistry, Biology & English'
    },
    pillars: [
      {
        name: 'Biology (Botany & Zoology)',
        description: 'Human Physiology, Genetics & Evolution, Cell Biology, Plant Anatomy, and Ecology.',
        weight: '50% (360 / 720 Marks)'
      },
      {
        name: 'Chemistry',
        description: 'Organic reaction charts, Chemical Bonding, Equilibrium, Thermodynamics, and Biomolecules.',
        weight: '25% (180 / 720 Marks)'
      },
      {
        name: 'Physics',
        description: 'Mechanics, Electrostatics, Magnetism, Waves, and Modern Physics numericals.',
        weight: '25% (180 / 720 Marks)'
      }
    ],
    starterSteps: [
      { step: 1, title: 'Line-by-Line NCERT Biology Annotation', desc: 'Every line, diagram label, and scientist biography in NCERT Biology is tested directly.' },
      { step: 2, title: 'Formula & Reaction Codices', desc: 'Create 1-page condensed sheets for named organic reactions and physical chemistry formulas.' },
      { step: 3, title: 'Speed Precision Drills', desc: 'Solve 90 Biology questions in 35 minutes to preserve time for Physics calculations.' },
      { step: 4, title: 'OMR Bubble Practice', desc: 'Simulate physical OMR sheet bubbling to eliminate transfer errors.' }
    ]
  },
  UPSC: {
    id: 'UPSC',
    title: 'UPSC Civil Services',
    subtitle: 'Civil Services Examination',
    symbol: 'U',
    plateNumber: 'Plate No. 04 — The Governance of the Republic & Macro-Societal Doctrine',
    tagline: 'From constitutional jurisprudence and modern history to macroeconomic ethics and diplomatic strategy.',
    overview: 'The Civil Services Examination (CSE) conducted by UPSC is the premier gateway to administrative leadership in India, recruiting for IAS, IPS, IFS, IRS, and central administrative cadres.',
    examPattern: {
      duration: '3 Stages: Prelims (Objective), Mains (9 Written Papers), Interview',
      totalMarks: '2025 Total Marks (1750 Mains + 275 Personality Test)',
      sections: 'GS Papers I–IV, Optional Subject (2 Papers), Essay, Qualifying Languages',
      frequency: 'Annually (May to April cycle)',
      eligibility: 'Graduate in any discipline (21+ years)'
    },
    pillars: [
      {
        name: 'Polity & Governance',
        description: 'Constitution of India, Fundamental Rights, Federalism, Judiciary, and Statutory bodies.',
        weight: 'GS Paper II & Prelims Core'
      },
      {
        name: 'History, Heritage & Geography',
        description: 'Ancient, Medieval, Modern Freedom Struggle, World History, Physical and Human Geography.',
        weight: 'GS Paper I Core'
      },
      {
        name: 'Economy & Ecology',
        description: 'Macroeconomics, Fiscal & Monetary policy, Agriculture, Biodiversity, and Climate treaties.',
        weight: 'GS Paper III Core'
      },
      {
        name: 'Ethics, Integrity & Aptitude',
        description: 'Moral philosophy, Emotional intelligence, Case studies in ethical public decision making.',
        weight: 'GS Paper IV (250 Marks)'
      }
    ],
    starterSteps: [
      { step: 1, title: 'Syllabus & Past 10-Year Deconstruction', desc: 'Memorize the exact UPSC syllabus keywords to filter daily newspaper reading.' },
      { step: 2, title: 'Foundational NCERT & Standard Textbooks', desc: 'Read Laxmikanth (Polity), Spectrum (Modern History), and Ramesh Singh (Economy).' },
      { step: 3, title: 'Daily Editorial Synthesis', desc: 'Extract balanced arguments, constitutional provisions, and committee recommendations daily.' },
      { step: 4, title: 'Answer Writing Architecture', desc: 'Practice 3 structured answers daily: Introduction → Flowchart → Body Points → Constitutional Article → Way Forward.' }
    ]
  },
  CUET: {
    id: 'CUET',
    title: 'CUET (UG)',
    subtitle: 'Common University Entrance Test',
    symbol: 'C₂',
    plateNumber: 'Plate No. 05 — The Standardization of Undergraduate Higher Education',
    tagline: 'Standardized aptitude benchmarks and undergraduate domain subjects across central universities.',
    overview: 'CUET provides a single window opportunity to students seeking admission in any of the Central Universities (such as Delhi University, BHU, JNU, Jamia) and participating state and private universities across India.',
    examPattern: {
      duration: 'Computer Based Test (Variable duration by slot)',
      totalMarks: '200 to 250 Marks per subject paper',
      sections: 'Section IA/IB (Languages), Section II (Domain Subjects), Section III (General Test)',
      frequency: 'Annually in May–June',
      eligibility: '10+2 in relevant stream'
    },
    pillars: [
      {
        name: 'Domain Specific Subjects',
        description: 'Class 12 NCERT curriculum strictly aligned for chosen degrees (Economics, Physics, History, Accounts).',
        weight: 'Primary Admission Criteria'
      },
      {
        name: 'Language Proficiency',
        description: 'Reading comprehension, literary vocabulary, synonyms, and grammatical structure.',
        weight: 'Compulsory Qualifying/Scored'
      },
      {
        name: 'General Aptitude Test',
        description: 'General knowledge, current affairs, numerical ability, and logical reasoning.',
        weight: 'Required for specific programs (e.g. BMS, BBA)'
      }
    ],
    starterSteps: [
      { step: 1, title: 'Class 12 Syllabus Alignment', desc: 'Map your Class 12 board curriculum directly to the CUET domain syllabus.' },
      { step: 2, title: 'NCERT In-Depth Objective Drills', desc: 'Practice fast MCQ solving for every box, table, and footnote in Class 12 NCERT.' },
      { step: 3, title: 'Language & Vocabulary Codices', desc: 'Build daily vocabulary lists and practice 10-minute speed reading comprehensions.' },
      { step: 4, title: 'Mock Computer Simulations', desc: 'Get comfortable with the NTA computer-based testing interface.' }
    ]
  },
  CLASS_12: {
    id: 'CLASS_12',
    title: 'Class 12 Boards',
    subtitle: 'Senior Secondary Board Examinations',
    symbol: 'XII',
    plateNumber: 'Plate No. 06 — The Capstone of Senior Secondary Scholarship',
    tagline: 'NCERT canonical deconstruction, step-marking rubrics, formula codices, and board exam blueprints.',
    overview: 'Class 12 board examinations (CBSE / ISC / State Boards) represent the culmination of school education and establish academic transcripts vital for university admissions and career foundations.',
    examPattern: {
      duration: '3 Hours per paper',
      totalMarks: '100 Marks (70/80 Theory + 20/30 Practical & Internal Assessment)',
      sections: 'MCQs, Short Answer (2–3 marks), Long Answer (5 marks), Case-based questions',
      frequency: 'Annually in February–March',
      eligibility: 'Enrolled in Class 12 recognized school board'
    },
    pillars: [
      {
        name: 'Step-Marking & Derivations',
        description: 'Clean mathematical and theoretical derivations with explicit statements, units, and reasoning.',
        weight: '40% of Theory Marks'
      },
      {
        name: 'NCERT Exemplar & Text',
        description: 'Solving all in-text examples, back exercises, and exemplar analytical problems.',
        weight: '50% Direct Blueprint'
      },
      {
        name: 'Practical & Project Portfolios',
        description: 'Lab experiments, viva voce preparation, and comprehensive investigative project files.',
        weight: '20–30 Marks Guarantee'
      }
    ],
    starterSteps: [
      { step: 1, title: 'Official Board Marking Scheme Audit', desc: 'Understand how marks are awarded step-by-step to write high-scoring answers.' },
      { step: 2, title: 'NCERT Textbook Mastery', desc: 'Ensure 100% completion of NCERT textbook problems and theoretical proofs.' },
      { step: 3, title: 'Past 5-Year Board Papers (PYQs)', desc: 'Write full 3-hour past board papers under real exam timing conditions.' },
      { step: 4, title: 'Presentation & Diagram Polish', desc: 'Practice neat diagrams with sharp pencil labeling and clear box-highlighted final answers.' }
    ]
  },
  CLASS_10: {
    id: 'CLASS_10',
    title: 'Class 10 Boards',
    subtitle: 'Foundational Secondary Board Examinations',
    symbol: 'X',
    plateNumber: 'Plate No. 07 — The Foundational Bridge into Advanced Scholarship',
    tagline: 'Crucial bridge from foundational arithmetic and natural sciences into higher analytical scholarship.',
    overview: 'Class 10 board examinations establish foundational competence across Mathematics, Science, Social Sciences, and Languages, setting the trajectory for stream selection (Science, Commerce, Humanities).',
    examPattern: {
      duration: '3 Hours per paper',
      totalMarks: '100 Marks (80 Theory + 20 Internal Assessment)',
      sections: 'Objective MCQs, Assertion-Reason, Short & Long descriptive, Case studies',
      frequency: 'Annually in February–March',
      eligibility: 'Enrolled in Class 10 recognized school board'
    },
    pillars: [
      {
        name: 'Mathematics (Standard / Basic)',
        description: 'Real numbers, Polynomials, Linear equations, Triangles, Trigonometry, Statistics & Probability.',
        weight: '80 Marks Theory'
      },
      {
        name: 'Science (Physics, Chem, Bio)',
        description: 'Chemical reactions, Acids-Bases, Life Processes, Light reflection/refraction, Electricity & Magnetism.',
        weight: '80 Marks Theory'
      },
      {
        name: 'Social Sciences',
        description: 'Rise of Nationalism, Resources, Democratic Politics, and Understanding Economic Development.',
        weight: '80 Marks Theory'
      }
    ],
    starterSteps: [
      { step: 1, title: 'Clear Foundation Concepts', desc: 'Build rock-solid conceptual clarity without rote memorization.' },
      { step: 2, title: 'NCERT Questions & Case Studies', desc: 'Solve every question, diagram exercise, and case-study prompt in NCERT.' },
      { step: 3, title: 'Timetable & Balanced Revision', desc: 'Alternate between math calculations and descriptive social science reading.' },
      { step: 4, title: 'Sample Paper Drills', desc: 'Write 5 official CBSE sample papers with proper timer and presentation.' }
    ]
  },
  COMPSCI: {
    id: 'COMPSCI',
    title: 'CompSci & Engineering',
    subtitle: 'Algorithms & Systems',
    symbol: '</>',
    plateNumber: 'Plate No. 08 — The Formal Logic of Computation & Distributed Architecture',
    tagline: 'Data structures, computational complexity, distributed systems architecture, and engineering craftsmanship.',
    overview: 'A structured roadmap and digital library for software engineering, computer science fundamentals, algorithm design, system architecture, and modern application development.',
    examPattern: {
      duration: 'Ongoing Professional & Academic Mastery',
      totalMarks: 'Engineering Excellence & Technical Interviews',
      sections: 'Data Structures & Algorithms, System Design, Operating Systems, Networks, Database Internals',
      frequency: 'Continuous Learning Journey',
      eligibility: 'Curious builders, engineering students & software craftsmen'
    },
    pillars: [
      {
        name: 'Data Structures & Algorithms',
        description: 'Arrays, Trees, Graphs, Dynamic Programming, Complexity Analysis (Big-O), and Bit manipulation.',
        weight: 'Core Problem Solving'
      },
      {
        name: 'System Architecture & Design',
        description: 'Distributed systems, Caching (Redis), Load balancers, Database sharding, Microservices, and Consensus.',
        weight: 'Scalable Systems'
      },
      {
        name: 'Core Systems & Runtimes',
        description: 'Operating systems (Processes, Threads, Memory), Networking (TCP/IP, HTTP/3), and Database ACID engines.',
        weight: 'Foundational Depth'
      }
    ],
    starterSteps: [
      { step: 1, title: 'Language & Mental Model Fluency', desc: 'Master one statically typed language (TypeScript, Go, Rust, Java, C++) with deep memory models.' },
      { step: 2, title: 'Data Structures from Scratch', desc: 'Implement dynamic arrays, hash tables, binary search trees, and graphs without library abstractions.' },
      { step: 3, title: 'System Design First Principles', desc: 'Understand latency numbers every programmer should know, CAP theorem, and event-driven pipelines.' },
      { step: 4, title: 'Ship Production Systems', desc: 'Build and deploy real distributed applications with logging, telemetry, and automated tests.' }
    ]
  }
};

