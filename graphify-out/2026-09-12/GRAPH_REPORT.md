# Graph Report - Notera  (2026-09-12)

## Corpus Check
- 79 files · ~46,134 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 316 nodes · 585 edges · 20 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e7849a07`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- field.ts
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
- CatOverviewTab.tsx
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 51 edges
2. `lucide-react` - 31 edges
3. `compilerOptions` - 18 edges
4. `compilerOptions` - 15 edges
5. `BackgroundVariant` - 13 edges
6. `EducationalResource` - 12 edges
7. `StorageService` - 11 edges
8. `FieldId` - 8 edges
9. `STAGE_01_DATA` - 7 edges
10. `PersonalizedRecommendation` - 6 edges

## Surprising Connections (you probably didn't know these)
- `CoffeeParticlesProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeParticles.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeSteamProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeSteam.tsx → src/components/background/DotMatrixCanvas.tsx
- `ConstellationElementsProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/ConstellationElements.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeBeansProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeBeans.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeRingsProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeRings.tsx → src/components/background/DotMatrixCanvas.tsx

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "field.ts"
Cohesion: 0.15
Nodes (13): FooterProps, Logo(), LogoProps, Navbar(), NavbarProps, FieldGuideView(), FieldGuideViewProps, CAT_SUBJECTS (+5 more)

### Community 1 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 2 - "SearchModal.tsx"
Cohesion: 0.12
Nodes (16): CatHeaderNavProps, CatTabType, CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), SearchModalProps, ResourceCard(), ResourceCardProps (+8 more)

### Community 3 - "react"
Cohesion: 0.15
Nodes (19): react, BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps (+11 more)

### Community 4 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 5 - "NotesLayout.tsx"
Cohesion: 0.15
Nodes (16): NoteContent(), NoteContentProps, NotesLayout(), NotesLayoutProps, TableOfContents(), TableOfContentsProps, TopicSelector(), TopicSelectorProps (+8 more)

### Community 6 - "lucide-react"
Cohesion: 0.14
Nodes (20): lucide-react, CallPredictorCard(), GoalPlanningSection(), JourneySection(), JourneySectionProps, JourneyStageLayout(), JourneyStageLayoutProps, JourneyTopicAccordion() (+12 more)

### Community 7 - "App.tsx"
Cohesion: 0.11
Nodes (18): App(), KnowledgeMapBackground(), CatExamInfoModal(), CatExamInfoModalProps, CatPracticeTab(), Modal(), ModalProps, GuideNavigation() (+10 more)

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

### Community 18 - "CatOverviewTab.tsx"
Cohesion: 0.18
Nodes (10): CatOverviewTab(), CatOverviewTabProps, CatTabType, CODEX_NOTES, DILR_NOTES, NoteItem, QA_NOTES, STAGE_NOTES_MAP (+2 more)

## Knowledge Gaps
- **121 isolated node(s):** `NodeElement`, `DotMatrixCanvasProps`, `CatOverviewTabProps`, `NoteItem`, `QA_NOTES` (+116 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 133 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `field.ts`, `useVisitorPreferences.ts`, `SearchModal.tsx`, `NotesLayout.tsx`, `lucide-react`, `App.tsx`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`, `CatOverviewTab.tsx`?**
  _High betweenness centrality (0.375) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `field.ts`, `useVisitorPreferences.ts`, `SearchModal.tsx`, `NotesLayout.tsx`, `App.tsx`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`, `CatOverviewTab.tsx`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **What connects `NodeElement`, `DotMatrixCanvasProps`, `CatOverviewTabProps` to the rest of the system?**
  _121 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `field.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.14761904761904762 - nodes in this community are weakly interconnected._
- **Should `SearchModal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.11932773109243698 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.14814814814814814 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._