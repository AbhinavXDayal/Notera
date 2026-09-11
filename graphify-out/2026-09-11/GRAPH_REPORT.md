# Graph Report - Notera  (2026-09-11)

## Corpus Check
- 76 files · ~43,895 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 317 nodes · 537 edges · 21 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d5785821`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- CatRoadmapTab.tsx
- EducationalResource
- KnowledgeMapBackground.tsx
- compilerOptions
- NotesLayout.tsx
- devDependencies
- SearchModal.tsx
- compilerOptions
- package.json
- react
- FieldGuideSection.tsx
- plugins
- Dedicated CAT Universe
- tsconfig.json
- rules/graphify.md
- workflows/graphify.md
- CatOverviewTab.tsx

## God Nodes (most connected - your core abstractions)
1. `react` - 48 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 15 edges
4. `BackgroundVariant` - 13 edges
5. `EducationalResource` - 12 edges
6. `StorageService` - 11 edges
7. `FieldId` - 8 edges
8. `STAGE_01_DATA` - 6 edges
9. `PersonalizedRecommendation` - 6 edges
10. `FieldCategory` - 5 edges

## Surprising Connections (you probably didn't know these)
- `CoffeeBeansProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeBeans.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeParticlesProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeParticles.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeRingsProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeRings.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeSteamProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeSteam.tsx → src/components/background/DotMatrixCanvas.tsx
- `ConstellationElementsProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/ConstellationElements.tsx → src/components/background/DotMatrixCanvas.tsx

## Import Cycles
- None detected.

## Communities (21 total, 3 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.12
Nodes (17): App(), KnowledgeMapBackground(), GuideNavigation(), GuideNavigationProps, HeroSection(), HeroSectionProps, RecommendedHeroBanner(), RecommendedHeroBannerProps (+9 more)

### Community 1 - "CatRoadmapTab.tsx"
Cohesion: 0.14
Nodes (15): CatExamInfoModal(), CatExamInfoModalProps, CatPracticeTab(), CatRoadmapDetailModal(), CatRoadmapDetailModalProps, CatRoadmapTab(), CatRoadmapTabProps, Stage01UnderstandJourney() (+7 more)

### Community 2 - "EducationalResource"
Cohesion: 0.13
Nodes (15): CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), ResourceCard(), ResourceCardProps, ResourceLibraryView(), ResourceLibraryViewProps, CAT_RESOURCES (+7 more)

### Community 3 - "KnowledgeMapBackground.tsx"
Cohesion: 0.16
Nodes (18): BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps, CoffeeRings() (+10 more)

### Community 4 - "compilerOptions"
Cohesion: 0.08
Nodes (23): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 5 - "NotesLayout.tsx"
Cohesion: 0.15
Nodes (16): NoteContent(), NoteContentProps, NotesLayout(), NotesLayoutProps, TableOfContents(), TableOfContentsProps, TopicSelector(), TopicSelectorProps (+8 more)

### Community 6 - "devDependencies"
Cohesion: 0.10
Nodes (21): autoprefixer, oxlint, devDependencies, autoprefixer, oxlint, postcss, tailwindcss, @types/node (+13 more)

### Community 7 - "SearchModal.tsx"
Cohesion: 0.11
Nodes (18): CatHeaderNavProps, CatTabType, FooterProps, Logo(), LogoProps, Navbar(), NavbarProps, SearchModalProps (+10 more)

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 9 - "package.json"
Cohesion: 0.12
Nodes (16): lucide-react, dependencies, lucide-react, react, react-dom, name, private, scripts (+8 more)

### Community 10 - "react"
Cohesion: 0.15
Nodes (16): react, CallPredictorCard(), GoalPlanningSection(), JourneySection(), JourneySectionProps, JourneyStageLayout(), JourneyStageLayoutProps, PreparationApproach() (+8 more)

### Community 11 - "FieldGuideSection.tsx"
Cohesion: 0.30
Nodes (7): FieldGuideSectionProps, GuideCard(), GuideCardProps, CAT_FIELD_GUIDE, FIELD_GUIDE_CONFIGS, FieldGuideConfig, FieldGuideModule

### Community 12 - "plugins"
Cohesion: 0.22
Nodes (8): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, typescript, warn

### Community 13 - "Dedicated CAT Universe"
Cohesion: 0.40
Nodes (5): Dedicated CAT Universe, 14-Stage Chronological Roadmap, Notera Educational Platform, Obsidian & Beige Design System, 10-Point Notes Architecture

### Community 20 - "CatOverviewTab.tsx"
Cohesion: 0.18
Nodes (10): CatOverviewTab(), CatOverviewTabProps, CatTabType, CODEX_NOTES, DILR_NOTES, NoteItem, QA_NOTES, STAGE_NOTES_MAP (+2 more)

## Knowledge Gaps
- **111 isolated node(s):** `DotMatrixCanvasProps`, `CatOverviewTabProps`, `NoteItem`, `QA_NOTES`, `VARC_NOTES` (+106 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 122 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.tsx`, `CatRoadmapTab.tsx`, `EducationalResource`, `KnowledgeMapBackground.tsx`, `NotesLayout.tsx`, `SearchModal.tsx`, `FieldGuideSection.tsx`, `plugins`, `CatOverviewTab.tsx`?**
  _High betweenness centrality (0.317) - this node is a cross-community bridge._
- **Why does `plugins` connect `plugins` to `react`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `StorageService` connect `EducationalResource` to `SearchModal.tsx`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `DotMatrixCanvasProps`, `CatOverviewTabProps`, `NoteItem` to the rest of the system?**
  _111 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1206896551724138 - nodes in this community are weakly interconnected._
- **Should `CatRoadmapTab.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.13852813852813853 - nodes in this community are weakly interconnected._
- **Should `EducationalResource` be split into smaller, more focused modules?**
  _Cohesion score 0.12701612903225806 - nodes in this community are weakly interconnected._