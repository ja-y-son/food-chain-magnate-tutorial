# Implementation Guide — Food Chain Magnate Tutorial Website

> **Author:** Senior Architect
> **Date:** 2026-05-07
> **Source:** UX Researcher's tutorial-website-plan.md

---

## 1. Scaffold Overview

The scaffold lives at `Q:\fcm-tutorial\website\` with **48 files** across **26 directories**. It is a static HTML/CSS/JS site — no build tools, no frameworks, no dependencies.

### Directory Map

```
website/
├── index.html                          ← Home page (hero + CTAs)
├── css/styles.css                      ← All styles (design tokens → components)
├── js/main.js                          ← All interactions (accordion, tooltips, etc.)
├── images/                             ← 21 WebP illustrations (copied from /illustrations)
├── what-is-fcm/index.html              ← 60-second pitch
├── learn/
│   ├── index.html                      ← Redirect → goal/
│   ├── goal/index.html                 ← Step 1: The Goal
│   ├── setup/index.html                ← Step 2: Setting Up
│   ├── company/index.html              ← Step 3: Your Company
│   ├── round/index.html                ← Step 4: The Round
│   ├── working/index.html              ← Step 5: Working 9-5
│   ├── dinnertime/index.html           ← Step 6: Dinnertime
│   ├── marketing/index.html            ← Step 7: Marketing
│   └── cleanup/index.html              ← Step 8: Cleanup & Next Round
├── first-game/index.html               ← Rounds 1-3 walkthrough
├── reference/
│   ├── index.html                      ← Reference landing (5 link cards)
│   ├── round/index.html                ← Round summary
│   ├── employees/index.html            ← Employee table
│   ├── campaigns/index.html            ← 4 campaign type cards
│   ├── distance/index.html             ← Distance vs Range vs Routes
│   └── dinnertime/index.html           ← Sales resolution flowchart
├── mistakes/index.html                 ← Common mistakes (mistake cards)
├── full-game/
│   ├── index.html                      ← Full game landing
│   ├── milestones/index.html           ← Milestones
│   ├── salaries/index.html             ← Salaries & Payday
│   ├── bank-reserve/index.html         ← Bank Reserve Cards
│   └── strategy/index.html             ← Strategy Tips
└── glossary/index.html                 ← Searchable glossary (23 terms)
```

---

## 2. File Responsibilities

### `css/styles.css` (~900 lines)

Contains everything in a single file for simplicity (no bundler needed):

| Section | Lines | What |
|---------|-------|------|
| 1. Design Tokens | CSS custom properties: colors, typography scale, spacing, layout constants |
| 2. Reset & Base | Box-sizing, body defaults, link/button resets |
| 3. Typography | h1–h3, p, lists — all using token variables |
| 4. Page Shell | Flex column layout, content max-width (680px) |
| 5. Step Header | Fixed top bar with progress bar (tutorial pages) |
| 6. Step Footer | Fixed bottom bar with prev/next (tutorial pages) |
| 7. Site Header | Standard page header with hamburger menu |
| 8. Callout Boxes | 4 types: warning (amber), tip (blue), keyrule (green), example (gray) |
| 9. Accordion | Expandable panels with aria support |
| 10. Expander | Inline "More details" toggle |
| 11. Image/Figure | Responsive images with caption, zoom-on-click, annotation pins |
| 12. Glossary Tooltips | Dotted underline terms with popover definitions |
| 13–14. Tables, Buttons | Styled data tables, primary/secondary button variants |
| 15. Cards | Generic card, mistake card, reference card |
| 16. Hero | Home page hero section |
| 17. Ref Grid | Quick reference landing page link grid |
| 18. Tabs | Horizontal swipeable tab interface |
| 19. Phase Timeline | Vertical timeline for round phases |
| 20. Quiz | Interactive exercise container with option states |
| 21. Utilities | visually-hidden, text-center, margin helpers |
| 22. Bottom Nav | Mobile-only 3-tab bottom navigation |
| 23–26. Misc | Checklist, flowchart, search, print styles |

### `js/main.js` (~260 lines)

11 components, all initialized via a single `init()` on DOMContentLoaded:

| Component | What It Does |
|-----------|-------------|
| `initAccordions()` | Toggle `aria-expanded` and `.is-open` class. Mobile: only one panel open at a time. |
| `initExpanders()` | "More details" inline toggle with aria support. |
| `initGlossaryTooltips()` | Click-to-show tooltip. Auto-repositions if off-screen. Closes on outside click. |
| `initStepDropdown()` | Toggle step jump dropdown from step label click. |
| `initMobileMenu()` | Hamburger menu toggle for site header nav. |
| `initImageZoom()` | Click-to-zoom on `.figure__img-wrapper`. Creates overlay dynamically. |
| `initTabs()` | Horizontal tabs with `aria-selected` switching. |
| `initQuizzes()` | Option click → mark correct/incorrect → show feedback. One-shot (no retry). |
| `initLazyLoading()` | Fallback for browsers without native `loading="lazy"`. |
| `initSmoothScroll()` | Anchor link smooth scroll with header offset. |
| `initKeyboardNav()` | Left/Right arrow keys for step navigation. |

---

## 3. Content to Fill In

Every HTML page has **placeholder text** and `<!-- TODO -->` comments marking what needs content. Here's the full content backlog:

### Tutorial Steps (Primary Content)

| Page | Content Source | Key Content Needed |
|------|---------------|-------------------|
| Step 1: Goal | Rulebook 01, 04, Intro Guide | Core loop explanation, bank-as-clock, intro game table |
| Step 2: Setup | Rulebook 03, Intro Guide | Player count table, numbered setup steps, placement rules |
| Step 3: Company | Rulebook 05, 09 | CEO explanation, slot mechanics, overflow rule |
| Step 4: Round | Rulebook 08 | Phase descriptions, marketing-after-dinner emphasis |
| Step 5: Working | Rulebook 11–17 | Hiring, training, food/drink production, campaigns, routes |
| Step 6: Dinnertime | Rulebook 18 | All-or-nothing, payment calc, competition rules |
| Step 7: Marketing | Rulebook 20 | 4 campaign types, demand cap, duration mechanics |
| Step 8: Cleanup | Rulebook 21 | Stock discard, game end condition |

### Reference Pages

| Page | Content Source |
|------|---------------|
| Round Summary | Rulebook 08 — condense to scannable format |
| Employee Guide | Rulebook 05, 11–17 — complete employee table |
| Campaign Types | Rulebook 14, 20 — placement + reach rules |
| Distance & Routes | Rulebook 06, confusion points #3, #4, #10 |
| Dinnertime Checklist | Rulebook 18 — flowchart + payment examples |

### Other Pages

| Page | Content Source |
|------|---------------|
| Common Mistakes | `common-confusion-points.md` — 20 items, filter to introductory-relevant |
| First Game | Write original narrative walkthrough (rounds 1-3) |
| Glossary | Already filled in from UX plan Appendix B (23 terms) |
| Full Game (4 pages) | Rulebook 19, 22, 23 |

---

## 4. Interactive Features to Build

Marked with TODO comments in the HTML. Prioritized per UX plan:

### P0 — Non-negotiable (Phase 2)

| Feature | Location | Description |
|---------|----------|-------------|
| Slot-planning exercise | Step 3: Company | Drag-drop employees into 3 CEO slots. Exceeding slots triggers "everyone goes to the beach" animation. |
| "Who gets the sale?" quiz | Step 6: Dinnertime | 2-3 scenarios with houses, restaurants, stock. Multiple-choice with instant feedback. |

### P1 — High value (Phase 3)

| Feature | Location | Description |
|---------|----------|-------------|
| Route-tracing exercise | Step 5: Working | Draw a path on simplified map, count tile border crossings. |
| Legal placement quiz | Step 2: Setup | 3 restaurant placements — tap to reveal which are legal. |
| Campaign reach overlay | Step 7: Marketing | Toggle between 4 campaign types to see reach on same map. |

### P2–P3 — Polish

| Feature | Location | Description |
|---------|----------|-------------|
| Round timeline animation | Step 4: Round | Phases light up in sequence. |
| Demand flow animation | Step 6: Dinnertime | Animated: demand → food flows → cash flows. |

### Not Yet Built (Phase 3)

| Feature | Notes |
|---------|-------|
| Client-side search | Add Fuse.js or Pagefind. Index glossary terms, headings, callout content. |
| Offline support | Service worker caching Reference section pages. |
| Analytics | Track tutorial completion, step drop-off, quiz engagement. |

---

## 5. Implementation Priority

### Phase 1: MVP (Do First)

1. **Fill in tutorial step content** (Steps 1–8) — this is ~80% of the value
2. **Fill in Common Mistakes** from confusion points document
3. **Fill in Round Summary** reference page
4. **Review and adjust responsive layout** — test on iPhone SE, Pixel 5, iPad
5. **Test all JS interactions** — accordions, expanders, tabs, image zoom
6. **Verify all internal links** are correct
7. **Add alt text** to all images (currently placeholder)

### Phase 2: Interactive

1. **Build P0 interactive exercises** (slot planning + who-gets-the-sale)
2. **Fill in remaining reference pages** (employees, campaigns, distance, dinnertime)
3. **Implement glossary search** (filter `<dl>` entries by search input)
4. **Add glossary term tooltips** throughout tutorial pages (dotted underlines)

### Phase 3: Polish

1. **Build P1 exercises** (route tracing, legal placement)
2. **Fill in First Game walkthrough**
3. **Fill in Full Game section** (milestones, salaries, bank reserve, strategy)
4. **Add service worker** for offline Reference pages
5. **Add client-side search** across all content
6. **Create custom illustrations** (core loop diagram, round timeline, dinnertime flowchart)

---

## 6. Technical Decisions & Rationale

| Decision | Rationale |
|----------|-----------|
| **Single CSS file** | No build tools. ~35KB is fine for a static site. Variables make it easy to find/change anything. |
| **Single JS file** | ~13KB, no dependencies. All components are independent functions initialized on DOMContentLoaded. |
| **Directory-based routing** (`dir/index.html`) | Clean URLs work with any static server. `/learn/goal/` instead of `/learn/goal.html`. |
| **No framework** | Per UX plan requirement. Site is content-heavy, interaction-light. Vanilla JS handles all needed interactions. |
| **Mobile-first CSS** | Base styles target mobile (320px+). Desktop overrides via `@media (min-width: 768px)`. Matches UX plan's "phone at the table" primary use case. |
| **CSS custom properties for design tokens** | Single source of truth for colors, spacing, typography. Easy to theme or adjust. |
| **`aria-expanded` / `aria-controls` patterns** | Accessibility requirement from UX plan §9. All interactive components use proper ARIA attributes. |
| **`loading="lazy"` on images** | Native lazy loading with IntersectionObserver fallback in JS. Meets <3s load time target. |
| **Step dropdown instead of sidebar** | Mobile-first: sidebar wastes space on phone. Dropdown from step label is compact and accessible. |
| **Two page shells** | `.page-shell--tutorial` (fixed header+footer) vs `.page-shell--standard` (scrolling header, bottom nav). Tutorial pages need dedicated step navigation; other pages use standard site nav. |

---

## 7. Design Token Reference

Quick reference for the most-used tokens:

```
Colors:
  --color-bg:           #F5F0E6  (warm off-white background)
  --color-primary:      #2A7B7F  (deep teal — links, buttons, accents)
  --color-accent:       #C4463A  (warm red — warnings, emphasis)

Callout backgrounds:
  --color-warning-bg:   #FFF8E1  (⚠️ Watch Out — amber)
  --color-tip-bg:       #E3F2FD  (💡 Tip — blue)
  --color-keyrule-bg:   #E8F5E9  (📌 Key Rule — green)
  --color-example-bg:   #F5F5F5  (🔍 Example — gray)

Layout:
  --content-max-width:  680px
  --header-height:      48px
  --footer-height:      56px
  --tap-target-min:     44px

Type scale (mobile → desktop):
  H1: 24px → 36px
  H2: 20px → 28px
  Body: 16px → 18px
```

---

## 8. Deviations from UX Plan

| UX Plan Says | What I Did | Why |
|-------------|-----------|-----|
| "Mobile-first bottom nav: Learn \| Reference \| Menu" | Implemented on standard pages only; tutorial pages use step footer instead | Tutorial pages already have fixed prev/next footer — adding a bottom nav creates a double-bar. The step header hamburger provides full nav access. |
| "Service worker for offline" | Not implemented in scaffold | Offline support is Phase 3. Service worker needs actual content to cache. |
| "Fuse.js or Pagefind for search" | Search input placeholder only | Client-side search needs content corpus first. Marked as Phase 2 task. |
| "Pinch-to-zoom on images" | Click-to-zoom overlay instead | Pinch-to-zoom requires a touch gesture library or complex JS. Click-to-zoom with fullscreen overlay achieves the same goal with simpler code. Native browser zoom also works. |

---

## 9. How to Preview

Serve the site from `Q:\fcm-tutorial\website\` with any static server:

```bash
# Python
cd Q:\fcm-tutorial\website
python -m http.server 8000

# Node.js (install serve first: npm i -g serve)
serve Q:\fcm-tutorial\website

# VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

Then visit `http://localhost:8000` in a browser.

---

## 10. Content Production Checklist (Per Page)

For each page, the engineer should:

- [ ] Replace placeholder text with real content (use rulebook .md files as source)
- [ ] Write descriptive `alt` text for every `<img>`
- [ ] Add `.glossary-term` spans with `.glossary-tooltip` on first occurrence of each game term
- [ ] Populate all callout boxes (Watch Out, Tip, Key Rule, Example) per UX plan §5.3
- [ ] Add "More details" `.expander` sections for edge cases/advanced rules
- [ ] Test accordion/tab/expander interactions
- [ ] Verify Previous/Next links work correctly
- [ ] Test responsive layout at 320px, 375px, 768px, 1024px widths
- [ ] Run through page with screen reader (VoiceOver / NVDA)
