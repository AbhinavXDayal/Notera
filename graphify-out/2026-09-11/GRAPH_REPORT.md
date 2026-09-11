# Graph Report - Notera  (2026-09-11)

## Corpus Check
- Corpus is ~38,028 words - fits in a single context window. You may not need a graph.

## Summary
- 289 nodes · 482 edges · 19 communities (18 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 1,200 input · 450 output

## Community Hubs (Navigation)
- App Root & Navigation Coordinator
- CAT Examination & Header Modals
- Curriculum Subjects & Resource Library
- Knowledge Map Canvas & Background Physics
- TypeScript App Configuration
- Digital Notes Layout & Reading Engine
- Build Tools & Dev Dependencies
- Shared Layout, Logo & Footer
- Vite Node Compiler Configuration
- Core NPM Dependencies & Icons
- Personalized Recommendation Engine
- Field Guide & Exam Blueprint Views
- Linter & Code Quality Rules
- Notera Educational Architecture & Platform Concepts
- TypeScript Workspace Configuration

## God Nodes (most connected - your core abstractions)
1. `react` - 40 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 15 edges
4. `BackgroundVariant` - 13 edges
5. `EducationalResource` - 12 edges
6. `StorageService` - 11 edges
7. `FieldId` - 8 edges
8. `PersonalizedRecommendation` - 6 edges
9. `scripts` - 5 edges
10. `Modal()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `useVisitorPreferences()`  [EXTRACTED]
  src/App.tsx → src/hooks/useVisitorPreferences.ts
- `CoffeeBeansProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeBeans.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeParticlesProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeParticles.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeRingsProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeRings.tsx → src/components/background/DotMatrixCanvas.tsx
- `CoffeeSteamProps` --references--> `BackgroundVariant`  [EXTRACTED]
  src/components/background/CoffeeSteam.tsx → src/components/background/DotMatrixCanvas.tsx

## Import Cycles
- None detected.

## Communities (19 total, 1 thin omitted)

### Community 0 - "App Root & Navigation Coordinator"
Cohesion: 0.08
Nodes (25): App(), KnowledgeMapBackground(), CatExamInfoModal(), CatOverviewTab(), CatOverviewTabProps, CatTabType, CODEX_NOTES, DILR_NOTES (+17 more)

### Community 1 - "CAT Examination & Header Modals"
Cohesion: 0.12
Nodes (17): react, CatExamInfoModalProps, CatHeaderNavProps, CatTabType, CatPracticeTab(), CatRoadmapDetailModal(), CatRoadmapDetailModalProps, CatRoadmapTab() (+9 more)

### Community 2 - "Curriculum Subjects & Resource Library"
Cohesion: 0.15
Nodes (12): CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), ResourceCard(), ResourceCardProps, ResourceLibraryViewProps, CAT_RESOURCES, ALL_RESOURCES (+4 more)

### Community 3 - "Knowledge Map Canvas & Background Physics"
Cohesion: 0.16
Nodes (18): BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps, CoffeeRings() (+10 more)

### Community 4 - "TypeScript App Configuration"
Cohesion: 0.08
Nodes (23): DOM, src, vite/client, compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 5 - "Digital Notes Layout & Reading Engine"
Cohesion: 0.15
Nodes (16): NoteContent(), NoteContentProps, NotesLayout(), NotesLayoutProps, TableOfContents(), TableOfContentsProps, TopicSelector(), TopicSelectorProps (+8 more)

### Community 6 - "Build Tools & Dev Dependencies"
Cohesion: 0.10
Nodes (21): autoprefixer, oxlint, devDependencies, autoprefixer, oxlint, postcss, tailwindcss, @types/node (+13 more)

### Community 7 - "Shared Layout, Logo & Footer"
Cohesion: 0.15
Nodes (13): FooterProps, Logo(), LogoProps, Navbar(), NavbarProps, FieldGuideView(), FieldGuideViewProps, CAT_SUBJECTS (+5 more)

### Community 8 - "Vite Node Compiler Configuration"
Cohesion: 0.10
Nodes (19): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+11 more)

### Community 9 - "Core NPM Dependencies & Icons"
Cohesion: 0.12
Nodes (16): lucide-react, dependencies, lucide-react, react, react-dom, name, private, scripts (+8 more)

### Community 10 - "Personalized Recommendation Engine"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 11 - "Field Guide & Exam Blueprint Views"
Cohesion: 0.30
Nodes (7): FieldGuideSectionProps, GuideCard(), GuideCardProps, CAT_FIELD_GUIDE, FIELD_GUIDE_CONFIGS, FieldGuideConfig, FieldGuideModule

### Community 12 - "Linter & Code Quality Rules"
Cohesion: 0.22
Nodes (8): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, typescript, warn

### Community 13 - "Notera Educational Architecture & Platform Concepts"
Cohesion: 0.40
Nodes (5): Dedicated CAT Universe, 14-Stage Chronological Roadmap, Notera Educational Platform, Obsidian & Beige Design System, 10-Point Notes Architecture

## Knowledge Gaps
- **104 isolated node(s):** `$schema`, `typescript`, `oxc`, `react/rules-of-hooks`, `warn` (+99 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `CAT Examination & Header Modals` to `App Root & Navigation Coordinator`, `Curriculum Subjects & Resource Library`, `Knowledge Map Canvas & Background Physics`, `Digital Notes Layout & Reading Engine`, `Shared Layout, Logo & Footer`, `Personalized Recommendation Engine`, `Field Guide & Exam Blueprint Views`, `Linter & Code Quality Rules`?**
  _High betweenness centrality (0.272) - this node is a cross-community bridge._
- **Why does `plugins` connect `Linter & Code Quality Rules` to `CAT Examination & Header Modals`?**
  _High betweenness centrality (0.036) - this node is a cross-community bridge._
- **Why does `StorageService` connect `Curriculum Subjects & Resource Library` to `CAT Examination & Header Modals`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **What connects `$schema`, `typescript`, `oxc` to the rest of the system?**
  _104 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App Root & Navigation Coordinator` be split into smaller, more focused modules?**
  _Cohesion score 0.08199643493761141 - nodes in this community are weakly interconnected._
- **Should `CAT Examination & Header Modals` be split into smaller, more focused modules?**
  _Cohesion score 0.12315270935960591 - nodes in this community are weakly interconnected._
- **Should `TypeScript App Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._