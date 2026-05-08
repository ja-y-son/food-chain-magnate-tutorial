# Engineer Work Log — FCM Tutorial Website

## Summary

Implemented the full FCM tutorial website from the architect's scaffold. Filled in all 25 HTML pages with accurate content from the beginner's guide, rulebook, and confusion-points document. Fixed numerous content inaccuracies in the scaffold, built interactive features, and ensured all internal links work.

## What Was Implemented

### Phase 1: Core Tutorial Flow (Complete)

| Page | Status | Key Changes |
|------|--------|-------------|
| `index.html` | ✅ | Added figure wrapper to hero image, improved alt text |
| `what-is-fcm/` | ✅ | Fixed intro game description (removed false "simplified milestone track" claim) |
| `learn/goal/` | ✅ | Added figure `__img-wrapper` for click-to-zoom |
| `learn/setup/` | ✅ | **Fixed map tile counts** (was 2×2/3×2/3×3/4×3 → corrected to 3×3/3×4/4×4/4×5), expanded components list, enhanced placement section |
| `learn/company/` | ✅ | **Fixed overflow rule** (scaffold said "fire excess" — actually ALL employees go On the Beach), added quiz exercise |
| `learn/round/` | ✅ | Already decent from architect, no changes needed |
| `learn/working/` | ✅ | **Major rewrite** — fixed phase labels (5a→3a), expanded all 5 accordion sections with hiring table, training paths, food/drink production, Drive-In, houses & gardens |
| `learn/dinnertime/` | ✅ | Added competition tiebreakers, 2 working quiz exercises, demand removal warning |
| `learn/marketing/` | ✅ | Added mailbox road-blocking, campaign resolution steps, numbering strategy, demand cap rules |
| `learn/cleanup/` | ✅ | Restructured as numbered steps, added bank-as-clock tip |

### Phase 2: Reference & Support Pages (Complete)

| Page | Status | Key Changes |
|------|--------|-------------|
| `reference/round/` | ✅ | Major rewrite with detailed phase bullets, decision/auto tags |
| `reference/employees/` | ✅ | **Complete rewrite** — 5 categorized tables (Kitchen, Drinks, Marketing, Management, Specialists) |
| `reference/campaigns/` | ✅ | Enhanced with placement rules, reach descriptions, images, demand cap table, campaign numbering |
| `reference/distance/` | ✅ | Fixed table, added route tracing steps, 3 images, 3 Watch Out callouts |
| `reference/dinnertime/` | ✅ | **Fixed payment section** (removed false "waitress discounts" and "distance surcharges"), added competition tiebreakers |
| `mistakes/` | ✅ | **Complete rewrite** — 14 accurate mistake cards in 3 severity tiers from confusion-points.md |
| `glossary/` | ✅ | Fixed ~10 incorrect definitions (Bridge, Busy Marketeer, CEO, Drive-In, Garden, etc.) |
| `first-game/` | ✅ | **Rewrote walkthrough** — removed milestone references (not in intro game), detailed rounds 1-3 with specific actions and tips |

### Phase 3: Full Game Pages (Complete)

| Page | Status | Key Changes |
|------|--------|-------------|
| `full-game/milestones/` | ✅ | **Filled in all 18 milestones** from rulebook ch.22 in 5 categorized tables |
| `full-game/salaries/` | ✅ | Added $5 per employee, salary discounts table, busy Marketeer rules, firing rules |
| `full-game/bank-reserve/` | ✅ | Added two-break mechanic, reserve card choices ($100/$200/$300), CEO slot changes |
| `full-game/strategy/` | ✅ | Expanded to 18 tips organized by early/mid/late game + advanced concepts |

### Interactive Features

| Feature | Status |
|---------|--------|
| Accordion (working/round pages) | ✅ Already functional from architect |
| Quiz exercises | ✅ 3 quizzes: company overflow, dinnertime sales, garden payment |
| Tabs (marketing page) | ✅ Already functional from architect |
| Image zoom (click-to-expand) | ✅ All images wrapped in `figure__img-wrapper` |
| Glossary search | ✅ **Added** filter-as-you-type in `main.js` |
| Expanders | ✅ Already functional from architect |
| Mobile menu | ✅ Already functional from architect |

## Content Accuracy Fixes

Major inaccuracies found and corrected in the architect's scaffold:

1. **Setup map sizes**: 2×2/3×2/3×3/4×3 → 3×3/3×4/4×4/4×5
2. **Overflow rule**: "fire excess employees" → ALL employees go On the Beach
3. **Working sub-phases**: labeled "5a-5e" → should be "3a-3g" (Phase 3)
4. **Employee guide**: wrong actions (Errand Boy "place garden/house", Pizza Cook "1 pizza")
5. **Glossary**: Bridge ("connects" → doesn't connect), Busy Marketeer (completely wrong), CEO (1 slot → 3 slots), Drive-In, Garden, Effective Price, Entrance Corner, Distance, On the Beach
6. **Common Mistakes**: 5 placeholder cards with invented inaccuracies → 14 real mistakes from confusion-points.md
7. **Dinnertime reference**: "waitress discounts" and "distance surcharges" (neither exist in FCM)
8. **What is FCM**: "simplified milestone track" → intro game has NO milestones
9. **First game walkthrough**: referenced milestones → removed (not in intro game)
10. **Salaries page**: said "employees stay and demand payment" → actually you must fire until you can pay

## Deviations from Architect's Plan

- **No deviations from CSS or JS architecture.** Used all existing component classes and patterns.
- **Glossary search**: Added as a new function (`initGlossarySearch`) to `main.js` — the input element already existed in the HTML scaffold but had no JS wiring.
- **Campaign page**: Added more structure (callouts, demand cap table) beyond the architect's ref-card grid. The grid structure is preserved.

## Known Issues / Remaining Polish

1. **Glossary tooltips** (`.glossary-term` spans) are not yet added inline throughout tutorial pages. The JS infrastructure exists but no pages use inline glossary terms yet.
2. **No custom 404 page** — static file server only.
3. **Images are AI-generated WebP illustrations** — some may not perfectly match the actual game components.
4. **Full-game landing page** (`full-game/index.html`) is a simple link hub — could be enhanced.
5. **Learn landing page** (`learn/index.html`) is a simple link hub — could be enhanced.

## How to Preview Locally

```bash
cd Q:\fcm-tutorial\website
python -m http.server 8080
# Open http://localhost:8080 in a browser
```

Or use any static file server (VS Code Live Server, `npx serve`, etc.). No build step required.

## Technical Notes

- All vanilla HTML/CSS/JS — no dependencies, no build tools
- Directory-based routing: `dir/index.html` for clean URLs
- Mobile-first CSS with 768px breakpoint
- Single CSS file (~35KB), single JS file (~14KB)
- 21 WebP illustrations in `images/`
- All images use `loading="lazy"` and descriptive alt text
- All images wrapped in `figure__img-wrapper` for click-to-zoom
