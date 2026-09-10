# Notera — Modern Educational Notes, Roadmap & Guidance Platform

> **"The Knowledge Sanctuary"** — A distraction-free digital library, personalized roadmap, and beginner guidance platform for competitive exams and academic domains.

![Notera Platform](https://img.shields.io/badge/Design_System-Terra_Rooted_Warmth-4a7c59)
![Tech Stack](https://img.shields.io/badge/Stack-React_18_+_TypeScript_+_Vite_+_Tailwind_CSS-5a685e)
![License](https://img.shields.io/badge/License-MIT-705c30)

---

## 🌿 Overview

**Notera** is an educational platform designed to help students transition from complete beginners to advanced problem solvers without noisy gamification, paywalls, or chaotic catalogs.

### Core Philosophy

- **Clarity of Path:** Answers the fundamental student question — _"What should I do next?"_
- **10-Point Notes Architecture:** Every chapter includes an Overview, Roadmap Position, Fundamentals, Theory, Worked Examples, Practical Application, Practice Drills, Common Examiner Traps, Rapid Revision, and Curated Resources.
- **Terra Design System:** Earthy palette (`#4a7c59`, `#faf6f0`, `#705c30`), **Literata** serif headlines, and **Nunito Sans** body typography for a comfortable, unhurried reading experience.

---

## ✨ Features

### 1. Universal Discovery Homepage

- **Plate No. 01 — The Topology of Mastery:** Academic cartography hero section.
- **Curated Fields of Study:** Interactive universes for:
  - **CAT** (MBA & Leadership Entrance — Flagship experience)
  - **JEE** (Engineering Entrance)
  - **NEET** (Medical Sciences)
  - **UPSC** (Civil Services Examination)
  - **CUET** (Central University Entrance Test)
  - **Class 12 Boards** (Senior Secondary Blueprint)
  - **Class 10 Boards** (Foundational Scholarship)
  - **Computer Science** (Algorithms & Systems Architecture)
- **Curatorial Manifesto:** Distraction-free educational philosophy.

### 2. 4-Step Diagnostic Onboarding

- Diagnostic questionnaire assessing target year, current starting point, primary guidance needed, and daily study bandwidth.
- Local storage persistence (`localStorage`) with immediate adaptive recommendations.

### 3. Dedicated CAT Universe

- **Personalized "What Should I Do Next?" Directive:** Dynamically updates based on diagnostic level.
- **Tri-Partite Pillars:** Deep exploration of **Quantitative Aptitude** (QA), **VARC**, and **DILR**.
- **Score-vs-Percentile Matrix:** Transparent analysis of CAT scoring economics (+3/-1, raw marks vs 99+ percentile).

### 4. Interactive 14-Stage Chronological Roadmap

1. _Understand the CAT Blueprint_
2. _Know Your Starting Point_
3. _Build Your Foundation_
4. _Learn QA: Quantitative Aptitude_
5. _Learn VARC: Verbal Ability & RC_
6. _Learn DILR: Data & Logical Reasoning_
7. _Practice Strategically (Topic Drills)_
8. _Take Sectional Tests (40-Min)_
9. _Take Full Mock Tests (120-Min)_
10. _Analyse & Improve (Mock Forensics)_
11. _Final Revision & Mental Priming_
12. _The CAT Exam Day_
13. _College Selection & Application Strategy_
14. _Interviews, WAT & MBA Journey_

- Stage detail modals with actionable checklists, key mindsets, time estimates, and completion trackers.

### 5. Digital Textbook Notes System

- Sticky Table of Contents with live scroll position tracking.
- Dynamic reading progress percentage.
- Side-by-side comparison of standard school formulas vs. intuitive CAT shortcuts.
- Formula codices and Examiner Trap callouts.

### 6. Deliberate Practice & Sectional Lab

- Interactive untimed conceptual drill simulator with step-by-step solutions.
- 40-minute sectional preview and official past year benchmarks.

### 7. Universal Search (`⌘K` / `Ctrl+K`)

- Instant global search across exams, subjects, notes chapters, and roadmap stages.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Custom Terra Design Tokens)
- **Icons:** Lucide React
- **State & Persistence:** React Hooks, LocalStorage (Local-First, No Auth Required)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone repository
git clone https://github.com/AbhinavXDayal/Notera.git

# Navigate to directory
cd Notera

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Production Build

```bash
# Type check and build bundle
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── cat/               # CAT Universe tabs, header nav & modals
│   ├── common/            # Navbar, Footer, Modal, SearchModal, SignInModal
│   ├── field/             # Generic FieldGuideView for JEE, NEET, UPSC, etc.
│   ├── home/              # Hero, CategoryCard, Manifesto
│   ├── notes/             # NotesLayout, TableOfContents, NoteContent, TopicSelector
│   └── onboarding/        # 4-step diagnostic wizard
├── data/
│   ├── catNotes.ts        # 10-point structured note chapters
│   ├── catRoadmap.ts      # 14-stage chronological roadmap data
│   ├── catSubjects.ts     # QA, VARC, DILR module breakdowns
│   ├── fieldGuides.ts     # Field guide data for other exams/classes
│   └── fields.ts          # Curated learning paths metadata
├── hooks/
│   ├── useOnboarding.ts   # Onboarding state & recommendation engine
│   ├── useReadingProgress.ts # Scroll & TOC tracking
│   └── useRoadmapProgress.ts # Milestone & stage completion tracking
├── types/                 # TypeScript interfaces (field, notes, roadmap, onboarding)
├── App.tsx                # Main view router & state coordinator
├── index.css              # Paper texture overlay & custom scrollbars
└── main.tsx               # React entry point
```

---

## 📜 License

This project is licensed under the MIT License.
