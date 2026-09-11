# Graph Report - Notera  (2026-09-11)

## Corpus Check
- 82 files · ~42,813 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 320 nodes · 589 edges · 19 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cb7cd53e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Footer.tsx
- useVisitorPreferences.ts
- SearchModal.tsx
- react
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
- `App()` --calls--> `useVisitorPreferences()`  [EXTRACTED]
  src/App.tsx → src/hooks/useVisitorPreferences.ts
- `NavbarProps` --references--> `FieldId`  [EXTRACTED]
  src/components/common/Navbar.tsx → src/types/field.ts
- `RecommendedHeroBannerProps` --references--> `PersonalizedRecommendation`  [EXTRACTED]
  src/components/home/RecommendedHeroBanner.tsx → src/types/preferences.ts
- `CatRoadmapDetailModalProps` --references--> `RoadmapStage`  [EXTRACTED]
  src/components/cat/CatRoadmapDetailModal.tsx → src/types/roadmap.ts
- `GuideCardProps` --references--> `FieldGuideModule`  [EXTRACTED]
  src/components/field-guide/GuideCard.tsx → src/types/fieldGuide.ts

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "Footer.tsx"
Cohesion: 0.40
Nodes (3): FooterProps, Logo(), LogoProps

### Community 1 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 2 - "SearchModal.tsx"
Cohesion: 0.11
Nodes (17): CatHeaderNavProps, CatTabType, CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), SearchModalProps, ResourceCard(), ResourceCardProps (+9 more)

### Community 3 - "react"
Cohesion: 0.13
Nodes (20): react, BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps (+12 more)

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
Cohesion: 0.09
Nodes (26): App(), KnowledgeMapBackground(), CatLearningWorkspace(), CatLearningWorkspaceProps, CatWorkspaceTab, CatOverviewTabProps, CatTabType, CatFundamentalsView() (+18 more)

### Community 8 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "package.json"
Cohesion: 0.06
Nodes (35): dependencies, lucide-react, react, react-dom, devDependencies, autoprefixer, oxlint, postcss (+27 more)

### Community 10 - "CatRoadmapTab.tsx"
Cohesion: 0.11
Nodes (15): CatExamInfoModal(), CatExamInfoModalProps, CatRoadmapDetailModalProps, CatRoadmapTab(), CatRoadmapTabProps, JourneyStageAccordion(), JourneyStageAccordionProps, Stage01Topics() (+7 more)

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
- **120 isolated node(s):** `CatWorkspaceTab`, `CatLearningWorkspaceProps`, `CatOverviewTabProps`, `CatRoadmapTabProps`, `JourneyStageAccordionProps` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 136 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Footer.tsx`, `useVisitorPreferences.ts`, `SearchModal.tsx`, `NotesLayout.tsx`, `lucide-react`, `App.tsx`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.407) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `useVisitorPreferences.ts`, `SearchModal.tsx`, `react`, `NotesLayout.tsx`, `App.tsx`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **What connects `CatWorkspaceTab`, `CatLearningWorkspaceProps`, `CatOverviewTabProps` to the rest of the system?**
  _120 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `SearchModal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.10668563300142248 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.12688172043010754 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `NotesLayout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._