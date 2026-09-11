# Graph Report - Notera  (2026-09-11)

## Corpus Check
- 82 files · ~42,813 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 321 nodes · 591 edges · 19 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4024cb91`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- react
- useVisitorPreferences.ts
- EducationalResource
- KnowledgeMapBackground.tsx
- compilerOptions
- NotesLayout.tsx
- lucide-react
- App.tsx
- compilerOptions
- package.json
- CatRoadmapTab.tsx
- FieldGuideSection.tsx
- .oxlintrc.json
- Dedicated CAT Universe
- tsconfig.json
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 54 edges
2. `lucide-react` - 33 edges
3. `compilerOptions` - 18 edges
4. `compilerOptions` - 15 edges
5. `BackgroundVariant` - 13 edges
6. `EducationalResource` - 12 edges
7. `StorageService` - 11 edges
8. `FieldId` - 8 edges
9. `STAGE_01_DATA` - 7 edges
10. `PersonalizedRecommendation` - 6 edges

## Surprising Connections (you probably didn't know these)
- `NavbarProps` --references--> `FieldId`  [EXTRACTED]
  src/components/common/Navbar.tsx → src/types/field.ts
- `App()` --calls--> `useVisitorPreferences()`  [EXTRACTED]
  src/App.tsx → src/hooks/useVisitorPreferences.ts
- `CoffeeBeansProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeBeans.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeParticlesProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeParticles.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeRingsProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeRings.tsx → src/components/background/DotMatrixCanvas.tsx

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "react"
Cohesion: 0.13
Nodes (10): react, CatExamInfoModalProps, FooterProps, Logo(), LogoProps, Modal(), ModalProps, Navbar() (+2 more)

### Community 1 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 2 - "EducationalResource"
Cohesion: 0.13
Nodes (13): CatSubjectsTab(), CatSubjectsTabProps, ResourceCard(), ResourceCardProps, ResourceLibraryViewProps, CAT_RESOURCES, CAT_SUBJECTS, ALL_RESOURCES (+5 more)

### Community 3 - "KnowledgeMapBackground.tsx"
Cohesion: 0.16
Nodes (18): BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps, CoffeeRings() (+10 more)

### Community 4 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 5 - "NotesLayout.tsx"
Cohesion: 0.11
Nodes (20): ALL_NOTES_DATA, CatNotesDocsView(), CatNotesDocsViewProps, NoteItem, NoteContent(), NoteContentProps, NotesLayout(), NotesLayoutProps (+12 more)

### Community 6 - "lucide-react"
Cohesion: 0.15
Nodes (19): lucide-react, CallPredictorCard(), GoalPlanningSection(), JourneySection(), JourneySectionProps, JourneyStageLayout(), JourneyStageLayoutProps, JourneyTopicAccordion() (+11 more)

### Community 7 - "App.tsx"
Cohesion: 0.08
Nodes (29): App(), KnowledgeMapBackground(), CatExamInfoModal(), CatHeaderNavProps, CatTabType, CatLearningWorkspace(), CatLearningWorkspaceProps, CatWorkspaceTab (+21 more)

### Community 8 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "package.json"
Cohesion: 0.06
Nodes (35): dependencies, lucide-react, react, react-dom, devDependencies, autoprefixer, oxlint, postcss (+27 more)

### Community 10 - "CatRoadmapTab.tsx"
Cohesion: 0.18
Nodes (11): CatRoadmapDetailModalProps, CatRoadmapTab(), CatRoadmapTabProps, JourneyStageAccordion(), JourneyStageAccordionProps, Stage01Topics(), CAT_ROADMAP_STAGES, ActionItem (+3 more)

### Community 11 - "FieldGuideSection.tsx"
Cohesion: 0.30
Nodes (7): FieldGuideSectionProps, GuideCard(), GuideCardProps, CAT_FIELD_GUIDE, FIELD_GUIDE_CONFIGS, FieldGuideConfig, FieldGuideModule

### Community 12 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 13 - "Dedicated CAT Universe"
Cohesion: 0.40
Nodes (5): Dedicated CAT Universe, 14-Stage Chronological Roadmap, Notera Educational Platform, Obsidian & Beige Design System, 10-Point Notes Architecture

## Knowledge Gaps
- **119 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+114 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 136 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `useVisitorPreferences.ts`, `EducationalResource`, `KnowledgeMapBackground.tsx`, `NotesLayout.tsx`, `lucide-react`, `App.tsx`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.404) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `react`, `useVisitorPreferences.ts`, `EducationalResource`, `NotesLayout.tsx`, `App.tsx`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _119 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.12554112554112554 - nodes in this community are weakly interconnected._
- **Should `EducationalResource` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `NotesLayout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._