# Graph Report - Notera  (2026-09-11)

## Corpus Check
- 79 files · ~45,855 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 315 nodes · 582 edges · 19 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `581cbd74`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- SearchModal.tsx
- useVisitorPreferences.ts
- EducationalResource
- KnowledgeMapBackground.tsx
- compilerOptions
- NotesLayout.tsx
- lucide-react
- react
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
- `RecommendedHeroBannerProps` --references--> `PersonalizedRecommendation`  [EXTRACTED]
  src/components/home/RecommendedHeroBanner.tsx → src/types/preferences.ts
- `CatRoadmapDetailModalProps` --references--> `RoadmapStage`  [EXTRACTED]
  src/components/cat/CatRoadmapDetailModal.tsx → src/types/roadmap.ts
- `JourneyStageAccordionProps` --references--> `RoadmapStage`  [EXTRACTED]
  src/components/cat/journey/JourneyStageAccordion.tsx → src/types/roadmap.ts
- `GuideCardProps` --references--> `FieldGuideModule`  [EXTRACTED]
  src/components/field-guide/GuideCard.tsx → src/types/fieldGuide.ts
- `ResourceCardProps` --references--> `EducationalResource`  [EXTRACTED]
  src/components/resources/ResourceCard.tsx → src/types/resource.ts

## Import Cycles
- None detected.

## Communities (19 total, 3 thin omitted)

### Community 0 - "SearchModal.tsx"
Cohesion: 0.13
Nodes (16): CatHeaderNavProps, CatTabType, NavbarProps, SearchModalProps, FieldGuideView(), FieldGuideViewProps, CategoryCard(), CategoryCardProps (+8 more)

### Community 1 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 2 - "EducationalResource"
Cohesion: 0.15
Nodes (12): CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), ResourceCard(), ResourceCardProps, ResourceLibraryViewProps, CAT_RESOURCES, ALL_RESOURCES (+4 more)

### Community 3 - "KnowledgeMapBackground.tsx"
Cohesion: 0.16
Nodes (18): BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps, CoffeeRings() (+10 more)

### Community 4 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 5 - "NotesLayout.tsx"
Cohesion: 0.15
Nodes (16): NoteContent(), NoteContentProps, NotesLayout(), NotesLayoutProps, TableOfContents(), TableOfContentsProps, TopicSelector(), TopicSelectorProps (+8 more)

### Community 6 - "lucide-react"
Cohesion: 0.15
Nodes (19): lucide-react, CallPredictorCard(), GoalPlanningSection(), JourneySection(), JourneySectionProps, JourneyStageLayout(), JourneyStageLayoutProps, JourneyTopicAccordion() (+11 more)

### Community 7 - "react"
Cohesion: 0.07
Nodes (30): react, App(), KnowledgeMapBackground(), CatExamInfoModal(), CatExamInfoModalProps, CatOverviewTab(), CatOverviewTabProps, CatTabType (+22 more)

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
- **120 isolated node(s):** `CatOverviewTabProps`, `NoteItem`, `QA_NOTES`, `VARC_NOTES`, `DILR_NOTES` (+115 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 132 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `SearchModal.tsx`, `useVisitorPreferences.ts`, `EducationalResource`, `KnowledgeMapBackground.tsx`, `NotesLayout.tsx`, `lucide-react`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.377) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `SearchModal.tsx`, `useVisitorPreferences.ts`, `EducationalResource`, `NotesLayout.tsx`, `react`, `package.json`, `CatRoadmapTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **What connects `CatOverviewTabProps`, `NoteItem`, `QA_NOTES` to the rest of the system?**
  _120 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `SearchModal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `NotesLayout.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14624505928853754 - nodes in this community are weakly interconnected._
- **Should `lucide-react` be split into smaller, more focused modules?**
  _Cohesion score 0.14838709677419354 - nodes in this community are weakly interconnected._