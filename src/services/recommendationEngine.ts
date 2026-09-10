import type { VisitorPreferences, PersonalizedRecommendation } from '../types/preferences';

/**
 * Reusable Recommendation Engine
 * Computes tailored next steps and homepage hero recommendations based on
 * Field (Interest) + Level (Position) + Goals (Focus).
 */
export class RecommendationEngine {
  static getRecommendation(preferences: VisitorPreferences | null): PersonalizedRecommendation {
    if (!preferences || !preferences.hasCompletedOnboarding || preferences.interests.length === 0) {
      return {
        badge: 'Recommended For You',
        title: 'Start Your Learning Journey',
        description: 'Choose your academic field or competitive exam to explore structured roadmaps, canonical notes, and guided progression.',
        ctaText: 'Explore CAT Universe →',
        targetView: 'cat',
        targetTab: 'overview',
        statusBadge: 'Track: Universal Discovery',
        stepDirective: 'Directive 01 • Explore Sanctuary',
        actionTitle: 'Explore the Architecture of CAT',
        actionDescription: 'Start with fundamental arithmetic multiplying factors and the official CAT syllabus blueprint.',
        buttonText: 'Read Chapter 01 Notes',
        studyPaceAdvice: '1–2 hours daily recommended for working professionals & students.',
        readTime: '12 min reading time',
        secondaryLinks: [
          { label: '14-Stage Roadmap', targetTab: 'journey', targetView: 'cat' },
          { label: 'Digital Textbook Notes', targetTab: 'notes', targetView: 'cat' },
          { label: 'PDF Library', targetTab: 'resources', targetView: 'cat' },
        ],
      };
    }

    const primaryField = preferences.interests[0] || 'CAT';
    const level = preferences.level || 'Complete Beginner';
    const goals = preferences.goals || [];

    const hasGoal = (g: string) => goals.some((goal) => goal.toLowerCase().includes(g.toLowerCase()));

    // 1. CAT LOGIC
    if (primaryField === 'CAT' || preferences.interests.includes('CAT')) {
      const isBeginner = level.includes('Beginner') || level.includes('Exploring');

      if (isBeginner) {
        if (hasGoal('Notes') || hasGoal('Theory') || hasGoal('Fundamentals')) {
          return {
            badge: 'Recommended For You • CAT Foundations',
            title: 'Start with Percentages & Core Multipliers',
            description: "You're starting fresh with a focus on fundamentals. We recommend mastering fractional multipliers and calculation-free arithmetic before advancing to complex algebra.",
            ctaText: 'Read Chapter 01 Notes →',
            targetView: 'cat',
            targetTab: 'notes',
            targetChapterId: 'percentages-multipliers',
            statusBadge: 'Track: Core Foundations',
            stepDirective: 'Directive 01 • Speed Multipliers',
            actionTitle: 'Master Fractional Multipliers & Percentages',
            actionDescription: 'Percentages form the computational backbone of 45% of CAT Quantitative Aptitude and all Data Interpretation sets.',
            buttonText: 'Read Chapter 01 Notes',
            studyPaceAdvice: '30 mins speed math + 30 mins conceptual reading daily.',
            readTime: '14 min reading time',
            focusSubject: 'Quantitative Aptitude Arithmetic',
            recommendedRoadmapStageId: 1,
            secondaryLinks: [
              { label: 'Formula Sheet PDF', targetTab: 'resources', targetView: 'cat' },
              { label: '14-Stage Roadmap', targetTab: 'journey', targetView: 'cat' },
              { label: 'QA Subject Modules', targetTab: 'subjects', targetView: 'cat' },
            ],
          };
        }

        if (hasGoal('Roadmap') || hasGoal('Complete Guidance')) {
          return {
            badge: 'Recommended For You • CAT Roadmap',
            title: 'Start Your CAT Journey',
            description: "You're starting from the beginning. We recommend understanding CAT, its 3-section format, and following the 14-stage journey from foundations to mock mastery.",
            ctaText: 'Start Here →',
            targetView: 'cat',
            targetTab: 'journey',
            statusBadge: 'Track: 14-Stage Master Journey',
            stepDirective: 'Directive 01 • Syllabus Orientation',
            actionTitle: 'Understand the Architecture of CAT',
            actionDescription: 'Learn what the IIMs evaluate: decision-making under time pressure, reading endurance, and mathematical literacy.',
            buttonText: 'View 14-Stage Roadmap',
            studyPaceAdvice: 'Follow Stage 01 through Stage 04 for foundational readiness.',
            readTime: '10 min review',
            focusSubject: 'Syllabus & Progression',
            recommendedRoadmapStageId: 1,
            secondaryLinks: [
              { label: 'Exam Pattern Blueprint', targetTab: 'overview', targetView: 'cat' },
              { label: 'Arithmetic Foundations', targetTab: 'notes', targetChapterId: 'percentages-multipliers', targetView: 'cat' },
              { label: 'PDF Library', targetTab: 'resources', targetView: 'cat' },
            ],
          };
        }

        return {
          badge: 'Recommended For You • CAT',
          title: 'Start Your CAT Journey',
          description: "You're starting from the beginning. We recommend understanding CAT and its complete journey first.",
          ctaText: 'Start Here →',
          targetView: 'cat',
          targetTab: 'overview',
          statusBadge: 'Track: Complete Beginner Primer',
          stepDirective: 'Directive 01 • Orientation',
          actionTitle: 'Begin with CAT Overview & Scoring Reality',
          actionDescription: 'Understand score-vs-percentile economics and how 28-30 net correct questions achieve a 99+ percentile.',
          buttonText: 'Start CAT Overview',
          studyPaceAdvice: '1–2 hours daily pace.',
          readTime: '12 min read',
          secondaryLinks: [
            { label: '14-Stage Roadmap', targetTab: 'journey', targetView: 'cat' },
            { label: 'Foundational Notes', targetTab: 'notes', targetChapterId: 'percentages-multipliers', targetView: 'cat' },
            { label: 'Study PDFs', targetTab: 'resources', targetView: 'cat' },
          ],
        };
      }

      // CAT: Already Preparing / Advanced
      if (hasGoal('Notes') || hasGoal('Theory')) {
        return {
          badge: 'Recommended For You • Advanced CAT',
          title: 'Explore CAT Notes & Mathematical Codices',
          description: "You're already preparing. Advance to quadratic root symmetries, paragraph-by-paragraph RC deconstruction, and matrix constraint logic.",
          ctaText: 'Explore CAT Notes →',
          targetView: 'cat',
          targetTab: 'notes',
          targetChapterId: 'algebra-foundations',
          statusBadge: 'Track: Core Notes Acceleration',
          stepDirective: 'Directive 04 • Advanced Algebra & RC',
          actionTitle: 'Master Algebra Symmetries & RC Deconstruction',
          actionDescription: 'Transition from basic school algebra to CAT-specific parabola vertex extrema and argument nuance mapping.',
          buttonText: 'Explore Algebra Chapter',
          studyPaceAdvice: '2–3 hours daily with focused sectional error logging.',
          readTime: '20 min read',
          focusSubject: 'Algebra & RC Analysis',
          recommendedRoadmapStageId: 4,
          secondaryLinks: [
            { label: 'Algebra Codex PDF', targetTab: 'resources', targetView: 'cat' },
            { label: 'Sectional Practice', targetTab: 'practice', targetView: 'cat' },
            { label: '14-Step Roadmap', targetTab: 'journey', targetView: 'cat' },
          ],
        };
      }

      if (hasGoal('Practice')) {
        return {
          badge: 'Recommended For You • Sectional Drills',
          title: 'Calibrate Pacing & Mock Strategy',
          description: "Fine-tune question triage (ABC Rule) and 40-minute sectional sprint timing across Quantitative Aptitude, VARC, and DILR.",
          ctaText: 'Launch Practice Lab →',
          targetView: 'cat',
          targetTab: 'practice',
          statusBadge: 'Track: Mock Strategy & Triage',
          stepDirective: 'Directive 08 • Sectional Sprint Calibration',
          actionTitle: 'Calibrate Sectional Time Allocations',
          actionDescription: 'Overcome score plateaus with disciplined set selection in DILR and the 3-round triage framework in QA.',
          buttonText: 'Launch Practice Drills',
          studyPaceAdvice: '1 mock or 2 sectional tests every 3 days + in-depth analysis.',
          readTime: '40 min sectional sprint',
          focusSubject: 'Practice Drills & Mock Analysis',
          recommendedRoadmapStageId: 8,
          secondaryLinks: [
            { label: 'Sectional Triage PDF', targetTab: 'resources', targetView: 'cat' },
            { label: 'DILR Matrix Notes', targetTab: 'notes', targetChapterId: 'dilr-matrix-logic', targetView: 'cat' },
            { label: 'Stage 8: Mock Forensics', targetTab: 'journey', targetView: 'cat' },
          ],
        };
      }

      return {
        badge: 'Recommended For You • CAT Acceleration',
        title: 'Continue Your CAT Preparation',
        description: "Access curated notes, formula cheat sheets, and the 14-stage roadmap to push your percentile into the 99th tier.",
        ctaText: 'Enter CAT Universe →',
        targetView: 'cat',
        targetTab: 'overview',
        statusBadge: 'Track: Comprehensive Mastery',
        stepDirective: 'Directive 04 • Syllabus Progress',
        actionTitle: 'Target Weak Sub-Areas & Advance Through Modules',
        actionDescription: 'Systematically check off curriculum modules across QA, VARC, and DILR.',
        buttonText: 'Enter CAT Universe',
        studyPaceAdvice: 'Maintain 2 hours daily study cadence.',
        readTime: '15 min overview',
        secondaryLinks: [
          { label: 'Roadmap Stages', targetTab: 'journey', targetView: 'cat' },
          { label: 'Textbook Notes', targetTab: 'notes', targetView: 'cat' },
          { label: 'PDF Library', targetTab: 'resources', targetView: 'cat' },
        ],
      };
    }

    // 2. SCHOOL FIELDS (Class 12 / Class 10)
    if (primaryField.includes('Class 12') || primaryField.includes('Class 10')) {
      return {
        badge: `Recommended For You • ${primaryField}`,
        title: `${primaryField} Syllabus Blueprint & Foundations`,
        description: `You're currently ${level.toLowerCase()}. Explore foundational board blueprints, NCERT canonical step-marking rubrics, and formula codices.`,
        ctaText: `Explore ${primaryField} Guide →`,
        targetView: 'field',
        targetTab: 'overview',
        targetFieldId: primaryField.replace(' ', '_').toUpperCase(),
        statusBadge: `Track: ${primaryField} Academic`,
        stepDirective: 'Directive 01 • Board Exam Blueprint',
        actionTitle: `Explore ${primaryField} NCERT Foundations`,
        actionDescription: 'Understand step-marking schemas and core formula derivations for high board percentages.',
        buttonText: `Explore ${primaryField}`,
        studyPaceAdvice: '1–2 hours daily NCERT theory & problem practice.',
        readTime: '15 min guide',
        secondaryLinks: [
          { label: 'Explore CAT for College Prep', targetTab: 'overview', targetView: 'cat' },
          { label: 'Download Math Formula Sheets', targetTab: 'resources', targetView: 'cat' },
        ],
      };
    }

    // 3. COMPUTER SCIENCE
    if (primaryField.includes('Computer Science') || primaryField.includes('CompSci')) {
      return {
        badge: 'Recommended For You • Computer Science',
        title: 'Start with Computer Fundamentals & Algorithms',
        description: "Master first-principles computational thinking: discrete logic, memory hierarchies, asymptotic complexity, and systems architecture.",
        ctaText: 'Explore Computer Science Guide →',
        targetView: 'field',
        targetTab: 'overview',
        targetFieldId: 'COMPSCI',
        statusBadge: 'Track: Computer Science & Systems',
        stepDirective: 'Directive 01 • Algorithmic Thinking',
        actionTitle: 'First Principles of Computing',
        actionDescription: 'Build intuitive understanding of data structures, Big-O complexity, and system design.',
        buttonText: 'Explore CompSci Guide',
        studyPaceAdvice: 'Theory + code implementation daily.',
        readTime: '20 min overview',
        secondaryLinks: [
          { label: 'Explore Discrete Logic & DILR', targetTab: 'notes', targetChapterId: 'dilr-matrix-logic', targetView: 'cat' },
          { label: 'View Mathematical Codices', targetTab: 'resources', targetView: 'cat' },
        ],
      };
    }

    // 4. OTHER COMPETITIVE EXAMS (JEE, NEET, UPSC, CUET)
    return {
      badge: `Recommended For You • ${primaryField}`,
      title: `Start Your ${primaryField} Preparation`,
      description: `Tailored for ${level.toLowerCase()} with focus on ${goals.slice(0, 2).join(' & ') || 'foundations'}. Explore syllabus maps, formula sheets, and study doctrines.`,
      ctaText: `Explore ${primaryField} Guide →`,
      targetView: 'field',
      targetTab: 'overview',
      targetFieldId: primaryField.toUpperCase(),
      statusBadge: `Track: ${primaryField} Pathway`,
      stepDirective: `Directive 01 • ${primaryField} Syllabus Mapping`,
      actionTitle: `Explore ${primaryField} Core Modules`,
      actionDescription: `Survey the core subject breakdown and high-weightage topics for ${primaryField}.`,
      buttonText: `Explore ${primaryField}`,
      studyPaceAdvice: 'Consistent daily problem practice & canonical revision.',
      readTime: '15 min read',
      secondaryLinks: [
        { label: 'Explore Active CAT Universe', targetTab: 'overview', targetView: 'cat' },
        { label: 'Browse Public PDF Library', targetTab: 'resources', targetView: 'cat' },
      ],
    };
  }
}
