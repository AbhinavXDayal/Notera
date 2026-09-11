# Graph Report - Notera  (2026-09-11)

## Corpus Check
- 67 files · ~38,192 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 292 nodes · 484 edges · 20 communities (14 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `58c09a50`
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
- useVisitorPreferences.ts
- FieldGuideSection.tsx
- plugins
- Dedicated CAT Universe
- tsconfig.json
- rules/graphify.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 40 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 15 edges
4. `BackgroundVariant` - 13 edges
5. `EducationalResource` - 12 edges
6. `StorageService` - 11 edges
7. `FieldId` - 8 edges
8. `PersonalizedRecommendation` - 6 edges
9. `FieldCategory` - 5 edges
10. `RoadmapStage` - 5 edges

## Surprising Connections (you probably didn't know these)
- `CategoryCardProps` --references--> `FieldCategory`  [EXTRACTED]
  src/components/home/CategoryCard.tsx → src/types/field.ts
- `CatRoadmapDetailModalProps` --references--> `RoadmapStage`  [EXTRACTED]
  src/components/cat/CatRoadmapDetailModal.tsx → src/types/roadmap.ts
- `RecommendedHeroBannerProps` --references--> `PersonalizedRecommendation`  [EXTRACTED]
  src/components/home/RecommendedHeroBanner.tsx → src/types/preferences.ts
- `GuideCardProps` --references--> `FieldGuideModule`  [EXTRACTED]
  src/components/field-guide/GuideCard.tsx → src/types/fieldGuide.ts
- `ResourceCardProps` --references--> `EducationalResource`  [EXTRACTED]
  src/components/resources/ResourceCard.tsx → src/types/resource.ts

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.08
Nodes (27): react, App(), CatExamInfoModal(), CatExamInfoModalProps, CatOverviewTab(), CatOverviewTabProps, CatTabType, CODEX_NOTES (+19 more)

### Community 1 - "CatRoadmapTab.tsx"
Cohesion: 0.26
Nodes (9): CatRoadmapDetailModal(), CatRoadmapDetailModalProps, CatRoadmapTab(), CatRoadmapTabProps, CAT_ROADMAP_STAGES, ActionItem, RoadmapResource, RoadmapStage (+1 more)

### Community 2 - "EducationalResource"
Cohesion: 0.14
Nodes (14): CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), ResourceCard(), ResourceCardProps, ResourceLibraryView(), ResourceLibraryViewProps, CAT_RESOURCES (+6 more)

### Community 3 - "KnowledgeMapBackground.tsx"
Cohesion: 0.15
Nodes (19): BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps, CoffeeRings() (+11 more)

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
Cohesion: 0.12
Nodes (16): CatHeaderNavProps, CatTabType, FooterProps, Logo(), LogoProps, Navbar(), NavbarProps, SearchModalProps (+8 more)

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 9 - "package.json"
Cohesion: 0.12
Nodes (16): lucide-react, dependencies, lucide-react, react, react-dom, name, private, scripts (+8 more)

### Community 10 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 11 - "FieldGuideSection.tsx"
Cohesion: 0.30
Nodes (7): FieldGuideSectionProps, GuideCard(), GuideCardProps, CAT_FIELD_GUIDE, FIELD_GUIDE_CONFIGS, FieldGuideConfig, FieldGuideModule

### Community 12 - "plugins"
Cohesion: 0.22
Nodes (8): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, typescript, warn

### Community 13 - "Dedicated CAT Universe"
Cohesion: 0.40
Nodes (5): Dedicated CAT Universe, 14-Stage Chronological Roadmap, Notera Educational Platform, Obsidian & Beige Design System, 10-Point Notes Architecture

## Knowledge Gaps
- **106 isolated node(s):** `graphify`, `Workflow: graphify`, `CatOverviewTabProps`, `NoteItem`, `GuideNavigationProps` (+101 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 117 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `App.tsx` to `CatRoadmapTab.tsx`, `EducationalResource`, `KnowledgeMapBackground.tsx`, `NotesLayout.tsx`, `SearchModal.tsx`, `useVisitorPreferences.ts`, `FieldGuideSection.tsx`, `plugins`?**
  _High betweenness centrality (0.266) - this node is a cross-community bridge._
- **Why does `plugins` connect `plugins` to `App.tsx`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `StorageService` connect `EducationalResource` to `SearchModal.tsx`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `graphify`, `Workflow: graphify`, `CatOverviewTabProps` to the rest of the system?**
  _106 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `EducationalResource` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._
- **Should `KnowledgeMapBackground.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.1476923076923077 - nodes in this community are weakly interconnected._