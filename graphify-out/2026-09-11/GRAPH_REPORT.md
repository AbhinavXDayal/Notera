# Graph Report - Notera  (2026-09-11)

## Corpus Check
- 76 files · ~43,840 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 306 nodes · 552 edges · 20 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2655e849`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- useVisitorPreferences.ts
- EducationalResource
- react
- compilerOptions
- NotesLayout.tsx
- lucide-react
- Footer.tsx
- compilerOptions
- package.json
- Stage01UnderstandJourney.tsx
- FieldGuideSection.tsx
- .oxlintrc.json
- Dedicated CAT Universe
- tsconfig.json
- rules/graphify.md
- CatOverviewTab.tsx
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 48 edges
2. `lucide-react` - 28 edges
3. `compilerOptions` - 18 edges
4. `compilerOptions` - 15 edges
5. `EducationalResource` - 12 edges
6. `BackgroundVariant` - 12 edges
7. `StorageService` - 11 edges
8. `FieldId` - 7 edges
9. `PersonalizedRecommendation` - 6 edges
10. `STAGE_01_DATA` - 6 edges

## Surprising Connections (you probably didn't know these)
- `CategoryCardProps` --references--> `FieldCategory`  [EXTRACTED]
  src/components/home/CategoryCard.tsx → src/types/field.ts
- `RecommendedHeroBannerProps` --references--> `PersonalizedRecommendation`  [EXTRACTED]
  src/components/home/RecommendedHeroBanner.tsx → src/types/preferences.ts
- `CatRoadmapDetailModalProps` --references--> `RoadmapStage`  [EXTRACTED]
  src/components/cat/CatRoadmapDetailModal.tsx → src/types/roadmap.ts
- `GuideCardProps` --references--> `FieldGuideModule`  [EXTRACTED]
  src/components/field-guide/GuideCard.tsx → src/types/fieldGuide.ts
- `ResourceCardProps` --references--> `EducationalResource`  [EXTRACTED]
  src/components/resources/ResourceCard.tsx → src/types/resource.ts

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.09
Nodes (25): App(), KnowledgeMapBackground(), CatHeaderNavProps, CatTabType, Navbar(), NavbarProps, SearchModal(), SearchModalProps (+17 more)

### Community 1 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 2 - "EducationalResource"
Cohesion: 0.13
Nodes (14): CatSubjectsTab(), CatSubjectsTabProps, ResourceCard(), ResourceCardProps, ResourceLibraryView(), ResourceLibraryViewProps, CAT_RESOURCES, CAT_SUBJECTS (+6 more)

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
Cohesion: 0.15
Nodes (16): lucide-react, CatExamInfoModal(), CatExamInfoModalProps, CatPracticeTab(), CatRoadmapDetailModal(), CatRoadmapDetailModalProps, CatRoadmapTab(), CatRoadmapTabProps (+8 more)

### Community 7 - "Footer.tsx"
Cohesion: 0.40
Nodes (3): FooterProps, Logo(), LogoProps

### Community 8 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "package.json"
Cohesion: 0.06
Nodes (35): dependencies, lucide-react, react, react-dom, devDependencies, autoprefixer, oxlint, postcss (+27 more)

### Community 10 - "Stage01UnderstandJourney.tsx"
Cohesion: 0.15
Nodes (15): CallPredictorCard(), GoalPlanningSection(), JourneySection(), JourneySectionProps, JourneyStageLayout(), JourneyStageLayoutProps, PreparationApproach(), ScorePercentileExplorer() (+7 more)

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
- **121 isolated node(s):** `CoffeeParticlesProps`, `CatRoadmapTabProps`, `JourneySectionProps`, `JourneyStageLayoutProps`, `SectionPillarCardProps` (+116 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 131 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.tsx`, `useVisitorPreferences.ts`, `EducationalResource`, `NotesLayout.tsx`, `lucide-react`, `Footer.tsx`, `package.json`, `Stage01UnderstandJourney.tsx`, `FieldGuideSection.tsx`, `CatOverviewTab.tsx`?**
  _High betweenness centrality (0.367) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `App.tsx`, `useVisitorPreferences.ts`, `EducationalResource`, `NotesLayout.tsx`, `package.json`, `Stage01UnderstandJourney.tsx`, `FieldGuideSection.tsx`, `CatOverviewTab.tsx`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **What connects `CoffeeParticlesProps`, `CatRoadmapTabProps`, `JourneySectionProps` to the rest of the system?**
  _121 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09358974358974359 - nodes in this community are weakly interconnected._
- **Should `EducationalResource` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.1455026455026455 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._