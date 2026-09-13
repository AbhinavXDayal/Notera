# Graph Report - Notera  (2026-09-12)

## Corpus Check
- 85 files · ~50,993 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 343 nodes · 646 edges · 20 communities (15 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 1.0)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `80caa8ae`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- App.tsx
- useVisitorPreferences.ts
- SearchModal.tsx
- react
- compilerOptions
- NotesLayout.tsx
- lucide-react
- TopicAiExplanationCard.tsx
- compilerOptions
- package.json
- CatOverviewTab.tsx
- FieldGuideSection.tsx
- .oxlintrc.json
- Dedicated CAT Universe
- tsconfig.json
- rules/graphify.md
- explain.ts
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `react` - 53 edges
2. `lucide-react` - 33 edges
3. `compilerOptions` - 18 edges
4. `compilerOptions` - 15 edges
5. `BackgroundVariant` - 13 edges
6. `EducationalResource` - 12 edges
7. `StorageService` - 11 edges
8. `AiExplainContext` - 9 edges
9. `FieldId` - 8 edges
10. `STAGE_01_DATA` - 7 edges

## Surprising Connections (you probably didn't know these)
- `AskNoteraWidgetProps` --references--> `AiExplainContext`  [EXTRACTED]
  src/components/ai/AskNoteraWidget.tsx → src/types/ai.ts
- `NavbarProps` --references--> `FieldId`  [EXTRACTED]
  src/components/common/Navbar.tsx → src/types/field.ts
- `FieldGuideViewProps` --references--> `FieldId`  [EXTRACTED]
  src/components/field/FieldGuideView.tsx → src/types/field.ts
- `CategoryCardProps` --references--> `FieldCategory`  [EXTRACTED]
  src/components/home/CategoryCard.tsx → src/types/field.ts
- `SearchModalProps` --references--> `FieldId`  [EXTRACTED]
  src/components/common/SearchModal.tsx → src/types/field.ts

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "App.tsx"
Cohesion: 0.10
Nodes (24): App(), KnowledgeMapBackground(), Navbar(), NavbarProps, FieldGuideView(), FieldGuideViewProps, GuideNavigation(), GuideNavigationProps (+16 more)

### Community 1 - "useVisitorPreferences.ts"
Cohesion: 0.26
Nodes (8): RecommendedHeroBanner(), RecommendedHeroBannerProps, useVisitorPreferences(), RecommendationEngine, OnboardingAnswers, PersonalizedRecommendation, PersonalizedRecommendation, VisitorPreferences

### Community 2 - "SearchModal.tsx"
Cohesion: 0.12
Nodes (15): CatHeaderNavProps, CatTabType, CatSubjectsTab(), CatSubjectsTabProps, SearchModal(), SearchModalProps, ResourceCard(), ResourceCardProps (+7 more)

### Community 3 - "react"
Cohesion: 0.11
Nodes (22): react, BeanData, CoffeeBeans(), CoffeeBeansProps, HERO_BEANS, SUBTLE_BEANS, CoffeeParticles(), CoffeeParticlesProps (+14 more)

### Community 4 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 5 - "NotesLayout.tsx"
Cohesion: 0.15
Nodes (16): NoteContent(), NoteContentProps, NotesLayout(), NotesLayoutProps, TableOfContents(), TableOfContentsProps, TopicSelector(), TopicSelectorProps (+8 more)

### Community 6 - "lucide-react"
Cohesion: 0.14
Nodes (20): lucide-react, CallPredictorCard(), GoalPlanningSection(), JourneySection(), JourneySectionProps, JourneyStageLayout(), JourneyStageLayoutProps, JourneyTopicAccordion() (+12 more)

### Community 7 - "TopicAiExplanationCard.tsx"
Cohesion: 0.22
Nodes (14): AskNoteraWidget(), AskNoteraWidgetProps, PRESET_QUESTIONS, TopicAiExplanationCard(), TopicAiExplanationCardProps, CAT_STAGE_01_EXPLANATIONS, generateFallbackTopicExplanation(), getFallbackAskNoteraReply() (+6 more)

### Community 8 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 9 - "package.json"
Cohesion: 0.06
Nodes (35): dependencies, lucide-react, react, react-dom, devDependencies, autoprefixer, oxlint, postcss (+27 more)

### Community 10 - "CatOverviewTab.tsx"
Cohesion: 0.07
Nodes (26): CatExamInfoModal(), CatExamInfoModalProps, CatOverviewTab(), CatOverviewTabProps, CatTabType, CODEX_NOTES, DILR_NOTES, NoteItem (+18 more)

### Community 11 - "FieldGuideSection.tsx"
Cohesion: 0.30
Nodes (7): FieldGuideSectionProps, GuideCard(), GuideCardProps, CAT_FIELD_GUIDE, FIELD_GUIDE_CONFIGS, FieldGuideConfig, FieldGuideModule

### Community 12 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 13 - "Dedicated CAT Universe"
Cohesion: 0.40
Nodes (5): Dedicated CAT Universe, 14-Stage Chronological Roadmap, Notera Educational Platform, Obsidian & Beige Design System, 10-Point Notes Architecture

### Community 18 - "explain.ts"
Cohesion: 0.40
Nodes (3): IMPORTANT: Secrets like OPENAI_API_KEY are accessed only here on the server side, ServerlessRequest, ServerlessResponse

## Knowledge Gaps
- **125 isolated node(s):** `ServerlessRequest`, `ServerlessResponse`, `PRESET_QUESTIONS`, `ALL_TOPIC_IDS`, `Stage01TopicsProps` (+120 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 139 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `App.tsx`, `useVisitorPreferences.ts`, `SearchModal.tsx`, `NotesLayout.tsx`, `lucide-react`, `TopicAiExplanationCard.tsx`, `package.json`, `CatOverviewTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.377) - this node is a cross-community bridge._
- **Why does `lucide-react` connect `lucide-react` to `App.tsx`, `useVisitorPreferences.ts`, `SearchModal.tsx`, `NotesLayout.tsx`, `TopicAiExplanationCard.tsx`, `package.json`, `CatOverviewTab.tsx`, `FieldGuideSection.tsx`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **What connects `ServerlessRequest`, `ServerlessResponse`, `PRESET_QUESTIONS` to the rest of the system?**
  _125 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `App.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0960960960960961 - nodes in this community are weakly interconnected._
- **Should `SearchModal.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.12477718360071301 - nodes in this community are weakly interconnected._
- **Should `react` be split into smaller, more focused modules?**
  _Cohesion score 0.1140819964349376 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._