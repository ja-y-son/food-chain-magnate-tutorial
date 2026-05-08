# Food Chain Magnate — Tutorial Website Plan

> **Author:** Senior UX Researcher
> **Date:** 2026-05-07
> **Goal:** Teach complete beginners the Introductory Game variant of Food Chain Magnate with minimal friction, maximum retention, and enough confidence to sit down and play.

---

## 1. Design Philosophy

### 1.1 Core Principles

1. **Teach to PLAY, not to KNOW.** The goal is not to make someone a rules encyclopedia. It's to make them feel ready to sit down at a table, set up the game, and survive their first round without embarrassment. Everything else is reference material.

2. **Progressive disclosure is king.** FCM has ~35 pages of rules. A beginner needs maybe 5 pages to play their first Introductory Game. The website should make those 5 pages impossible to miss and the other 30 easy to find *when needed*.

3. **Confusion is the enemy, not complexity.** FCM isn't hard because it has many rules — it's hard because it has many *counterintuitive* rules. The website must identify and proactively defuse every confusion point BEFORE the reader hits it.

4. **Show, don't tell.** Every spatial concept (distance, routes, campaign reach, entrance corners) must have an interactive or annotated visual. Text alone cannot teach spatial reasoning.

5. **Mobile-first, table-adjacent.** The primary use case is someone reading this on their phone while sitting at a table with the game in front of them. Design for one-handed scrolling, large tap targets, and quick lookups.

### 1.2 Target User Profile

- Has never played FCM (and possibly never played a heavy strategy game)
- Has the physical game in front of them or is about to buy it
- Is reading on their phone, possibly at a game night
- Wants to understand enough to play, not to win
- Attention span: 10–15 minutes for the tutorial, then reference lookups during play

### 1.3 The Introductory Game Focus

The entire primary tutorial flow teaches **only** the Introductory Game:
- No bank reserve cards
- No milestones
- No salaries / no Payday phase
- $75/player bank
- Game ends at first bank break

The full game rules are available but explicitly gated behind a "Ready for the Full Game?" section that the beginner never needs to see.

---

## 2. Information Architecture

### 2.1 Site Map

```
HOME (/)
├── THE IDEA (/what-is-fcm)                    ← 60-second pitch
├── LEARN TO PLAY (/learn)                      ← Main tutorial flow (linear)
│   ├── Step 1: The Goal (/learn/goal)
│   ├── Step 2: Setting Up (/learn/setup)
│   ├── Step 3: Your Company (/learn/company)
│   ├── Step 4: The Round (/learn/round)
│   ├── Step 5: Working 9-5 (/learn/working)
│   ├── Step 6: Dinnertime (/learn/dinnertime)
│   ├── Step 7: Marketing (/learn/marketing)
│   └── Step 8: Cleanup & Next Round (/learn/cleanup)
├── YOUR FIRST GAME (/first-game)               ← Walkthrough of rounds 1-3
├── QUICK REFERENCE (/reference)                ← During-play lookups
│   ├── Round Summary (/reference/round)
│   ├── Employee Guide (/reference/employees)
│   ├── Campaign Types (/reference/campaigns)
│   ├── Distance & Routes (/reference/distance)
│   └── Dinnertime Checklist (/reference/dinnertime)
├── COMMON MISTAKES (/mistakes)                 ← Proactive confusion prevention
├── FULL GAME RULES (/full-game)                ← Upgrade path
│   ├── Milestones (/full-game/milestones)
│   ├── Salaries & Payday (/full-game/salaries)
│   ├── Bank Reserve Cards (/full-game/bank-reserve)
│   └── Strategy Tips (/full-game/strategy)
└── GLOSSARY (/glossary)                        ← Searchable term definitions
```

### 2.2 Navigation Model

**Primary nav (always visible, collapsed on mobile):**
- Learn to Play (→ current step or step 1)
- Quick Reference
- Full Game Rules

**Tutorial flow nav (within /learn/*):**
- Step indicator (1 of 8, 2 of 8, etc.) — sticky at top of viewport
- Previous / Next buttons — sticky at bottom of viewport
- Progress bar — thin colored bar under step indicator
- "Jump to step" dropdown — accessible from step indicator

**Mobile-first bottom nav bar:**
- Three tabs: Learn | Reference | Menu
- The "Reference" tab opens the quick-reference section directly
- The "Menu" tab reveals the full nav tree

### 2.3 Design Decision: Linear Tutorial vs. Free-Roam

**Strong recommendation: The tutorial flow (/learn/*) MUST be linear.** Steps are numbered 1–8 and the default navigation is Previous/Next. The user CAN jump around, but the default path is sequential. This is because FCM's concepts build on each other — you can't understand Dinnertime without understanding demand, and you can't understand demand without understanding marketing.

The Quick Reference section, by contrast, is designed for random-access lookup during play.

---

## 3. Content Strategy

### 3.1 Content Layering Model

Every concept in the tutorial uses a **three-layer disclosure model:**

| Layer | What | When shown |
|-------|------|-----------|
| **Headline** | One-sentence summary of the concept | Always visible |
| **Core explanation** | 2–3 paragraphs + visual explaining the mechanic | Always visible |
| **Deep dive** | Edge cases, exceptions, advanced details | Behind an expandable "More details" accordion |

This lets beginners skim at headline level, read at core level, and only expand for details when needed.

### 3.2 Confusion Point Integration

The 20 confusion points from the expert analysis are integrated throughout the tutorial as **⚠️ Watch Out** callout boxes. These are visually distinct (amber/yellow background, warning icon) and appear inline at the exact moment the reader would first encounter the confusion.

**Mapping of confusion points to tutorial steps:**

| Confusion Point | Tutorial Step | How Addressed |
|----------------|--------------|---------------|
| #1 Structure overflow | Step 3: Your Company | Warning callout + interactive slot-counting exercise |
| #2 All-or-nothing demand | Step 6: Dinnertime | Warning callout with visual example |
| #3 Road route tracing | Step 5: Working (drinks section) | Interactive route-tracing demo |
| #4 Distance vs Range vs Roads | Step 5: Working + Reference/Distance | Comparison table + visual |
| #5 Marketing timing (after dinner) | Step 4: The Round | Phase order diagram with highlighted arrow |
| #6 Turn order (empty slots) | Step 4: The Round | Reframed as "lean company picks first" |
| #7 Mandatory actions | Step 5: Working | Callout on each mandatory action, but DEFERRED for introductory game (less relevant without salaries) |
| #8 Salary trap | DEFERRED to Full Game | Not applicable in introductory game |
| #9 Effective price vs item price | Step 6: Dinnertime | Worked example with numbers |
| #10 Bridges | Reference/Distance | Annotated map image |
| #11 Entrance corner importance | Step 2: Setup | Hero concept — entrance corner gets its own mini-section |
| #14 Shared stock | Step 5: Working | Explicit callout: "All restaurants share one stock" |
| #20 Unsold food discarded | Step 8: Cleanup | Warning callout with emphasis |

Points #8, #12, #13, #15, #16, #17, #18, #19 are deferred to the Full Game section or the Common Mistakes page, as they relate to mechanics not present in the Introductory Game or are too advanced for a first read.

### 3.3 Tone & Voice

- **Warm, conversational, slightly irreverent.** Match the game's 1950s Americana diner aesthetic but don't overdo it.
- **Use "you" constantly.** "Your CEO gives you 1 hire per round." Not "Each player's CEO provides 1 hire action."
- **Analogies over abstractions.** "Think of your entrance corner as your restaurant's front door — everything starts there."
- **Bold the key rule, then explain why.** Example: "**You must be able to fill EVERY demand counter on a house. No partial orders.** Yes, this is unusual. Most games let you sell what you have. In FCM, customers are picky — it's all or nothing."

### 3.4 Word Count Targets

| Section | Target | Rationale |
|---------|--------|-----------|
| Home page | 150 words | Just a hook and CTA |
| Each tutorial step | 400–600 words | ~2 min read per step; 16 min total |
| First Game walkthrough | 800–1000 words | Narrative flow needs room |
| Each reference page | 300–500 words | Scannable, not narrative |
| Common Mistakes | 600 words | 20 bullet points, ~30 words each |

**Total reading time for the tutorial: ~15 minutes.** This is critical. Exceeding 20 minutes loses beginners.

---

## 4. Page-by-Page Content Outlines

### 4.1 HOME PAGE (/)

**Purpose:** Convince someone to start the tutorial.

**Content:**
- Hero: Retro-styled header with game title and tagline: *"Learn Food Chain Magnate in 15 minutes."*
- Subhead: "A step-by-step tutorial for the Introductory Game — no experience required."
- Three value props in icon+text format:
  1. "📖 8 short lessons, 2 minutes each"
  2. "🎯 Focused on the Introductory Game"
  3. "📱 Works on your phone at the table"
- Primary CTA button: **"Start Learning →"** (links to /learn/goal)
- Secondary links: "Just need a quick reference?" → /reference | "Already played once? Try the full rules →" → /full-game

**Visual:** Use the game's retro 1950s art style as the design language. The `10_setup_overview.webp` illustration is a good candidate for the hero background or a supporting image.

### 4.2 STEP 1: THE GOAL (/learn/goal)

**Purpose:** Orient the player in 90 seconds. What is this game ABOUT?

**Content structure:**
1. **One-sentence hook:** "You're building a fast food empire. The player with the most cash when the bank runs dry wins."
2. **The bank = the clock:** Explain that all players draw from a shared bank. Once it hits $0, game over. $75/player in Introductory Game.
3. **The core loop** — a simple diagram:
   ```
   HIRE people → PRODUCE food & drinks → ADVERTISE to create demand → SELL to earn cash
   ```
   Emphasize: you need BOTH production AND marketing. One without the other does nothing.
4. **What the Introductory Game removes:** Quick table showing what's simplified. Frame it positively: "You don't need to worry about salaries, milestones, or bank reserve cards. Just focus on building your engine."

**Visual:** A simple flow diagram of the core loop. Create a custom illustration — the existing assets don't have this.

**⚠️ Watch Out box:** "Marketing creates demand AFTER Dinnertime. A campaign you launch this round won't generate sales until next round. Plan ahead!"

### 4.3 STEP 2: SETTING UP (/learn/setup)

**Purpose:** Walk through physical setup of the Introductory Game.

**Content structure:**
1. **Player count table:** Map size and starting bank for 2–5 players (using introductory $75/player amounts)
2. **Map setup:** Numbered steps with photos
   - Lay out tiles randomly
   - Verify all 3 drink suppliers are present (swap if needed)
   - Place supply tokens near the map
3. **What each player gets:** Checklist with the `10_setup_player.webp` image
   - CEO card, menu, 3 restaurants, 3 drive-ins, turn order marker
   - Explicitly: "No bank reserve cards. No starting cash. You begin broke."
4. **Placing your first restaurant:**
   - Reverse turn order
   - Must cover 4 empty squares, no roads
   - **Entrance corner must touch a road**

**Visual assets:**
- `10_setup_overview.webp` — annotated with introductory game callouts
- `10_setup_player.webp` — player components
- `00b_introductory_game_rules.webp` — the introductory game rules summary
- `00_restaurant_placement_rules.webp` — legal vs. illegal placement
- `03_entrance_and_connections_p1.webp` — entrance corner rules

**⚠️ Watch Out box:** "Your entrance corner is your restaurant's front door. ALL distances, ALL routes, ALL connections start from this one corner. Choose its position wisely — it determines your entire spatial game."

**Interactive element (recommended):** A mini map exercise: "Which of these restaurant placements is legal?" with 3 placement options (2 legal, 1 illegal). Simple tap-to-reveal correct answer.

### 4.4 STEP 3: YOUR COMPANY (/learn/company)

**Purpose:** Explain the CEO, Work slots, and company structure.

**Content structure:**
1. **Your CEO:** You always have your CEO in play. They give you:
   - 3 Work slots (space for 3 employees under them)
   - 1 Hire action per round
2. **Work slots explained:** Visual of the pyramid structure. CEO on top, 3 slots below.
   - Managers provide extra slots (but occupy a slot themselves)
   - An employee in a slot = they work this round
3. **On the Beach:** Employees not in slots sit "On the Beach" — they do nothing this round but you still own them.
4. **The overflow catastrophe:** If you try to play more employees than you have slots for, ALL employees (except CEO) go On the Beach.

**Visual assets:**
- `05_company_structure.webp` — the company tree structure diagram
- `01_employee_card_anatomy.webp` — annotated card explaining each element

**Interactive element (strongly recommended):** A drag-and-drop slot-planning exercise. Show a CEO with 3 slots and 5 employee cards. Let the user try to place them. When they exceed slots, show the "everyone goes to the beach" consequence. This is confusion point #1 and it's devastating — interactive learning is the best way to prevent it.

**⚠️ Watch Out box:** "If you play more employees than you have Work slots, ALL your employees (except CEO) go On the Beach. You play the entire round with just your CEO. Use the Work Planning Variant: lay cards face-down in their slots before revealing."

### 4.5 STEP 4: THE ROUND (/learn/round)

**Purpose:** Teach the round structure as a mental model.

**Content structure:**
1. **Overview:** Each round has 6 phases (7 minus Payday in Introductory Game). Present as a vertical numbered list with icons:

   | # | Phase | What happens | Decisions? |
   |---|-------|-------------|-----------|
   | 1 | Restructuring | Choose who works today | ✅ You decide |
   | 2 | Order of Business | Determine turn order | ✅ You pick position |
   | 3 | Working 9-5 | Hire, train, produce, market | ✅ Main action phase |
   | 4 | Dinnertime | Houses eat, you get paid | ❌ Automatic |
   | 5 | ~~Payday~~ | ~~Pay salaries~~ | ~~SKIPPED~~ |
   | 6 | Marketing | Campaigns generate demand | ❌ Automatic |
   | 7 | Cleanup | Discard unsold food, reset | ❌ Automatic |

2. **The counterintuitive order:** Specifically highlight that Marketing (Phase 6) comes AFTER Dinnertime (Phase 4). "You advertise tonight so people are hungry tomorrow."
3. **Turn order:** More empty Work slots = you pick your position first. Frame as: "A lean company is an agile company."

**Visual:** A vertical timeline/flowchart of the round phases. Use color coding: green for player decisions, gray for automatic phases, red strikethrough for skipped Payday. This needs to be a custom illustration — clear, vertical, and scannable on mobile.

**⚠️ Watch Out box:** "Marketing happens AFTER Dinnertime. A campaign you launch this round won't create demand until after this round's sales. The earliest you can sell anything is Round 3."

### 4.6 STEP 5: WORKING 9-5 (/learn/working)

**Purpose:** This is the meatiest step. Teach all the sub-phases of Phase 3.

**Content structure:** Use tabbed or accordion sections for each sub-phase. The user can focus on one at a time.

**Sub-sections:**

#### 5a. Hiring
- CEO gives 1 hire per round
- Take any entry-level employee (star icon) from supply
- Hired employee goes On the Beach (can't use until next round)
- Quick table of key entry-level employees:
  - Management Trainee (most flexible)
  - Burger Cook / Pizza Cook (food production)
  - Errand Boy (easiest drinks)
  - Marketing Trainee (advertising)
  - Recruiting Girl (more hires next round)

#### 5b. Training
- Need a Trainer/Coach/Guru in your structure
- Target employee must be On the Beach
- Swap old card for upgraded card (check your menu)
- Can hire AND train same employee in same turn

#### 5c. Food & Drinks
- **Kitchen employees** produce food (Burger Cook = 1 burger, Pizza Cook = 3 pizzas)
- **Drink collection:**
  - Errand Boy: 1 drink of any type, no route needed (easiest!)
  - Cart Operator: traces road route, collects 2 drinks per supplier
  - Truck Driver: same but 3 drinks per supplier
- **All stock is shared** across all your restaurants
- **Road routes explained** (use expandable section for details):
  - Start from entrance corner
  - Trace along connected road squares
  - Range = max tile border crossings
  - Can backtrack but no immediate reversal

#### 5d. Marketing Campaigns
- Marketeers place campaign tokens on the map
- Choose item type and duration
- Marketeer becomes BUSY and is locked in until campaign ends
- Campaign doesn't create demand until Phase 6 (after Dinnertime!)

#### 5e. Other Actions (accordion, collapsed by default)
- Houses & Gardens (New Business Developer)
- Restaurants (Local/Regional Manager)
- Drive-Ins (mandatory with managers)

**Visual assets:**
- `01b_employee_card_progression.webp` — training paths
- `06_drink_routes_p1.webp` / `06_drink_routes_p2.webp` — road route tracing
- `08_campaign_placement.webp` — campaign placement
- `04_distance_counting.webp` — distance/range explanation

**Interactive element (recommended):** A simplified route-tracing exercise. Show a small map with an entrance corner and a drink supplier. Let the user trace a path and count tile border crossings. Reveal whether they counted correctly. This addresses confusion point #3 and #4 together.

**⚠️ Watch Out boxes:**
1. "A busy Marketeer is LOCKED IN. They can't be used, trained, or reassigned until their campaign ends."
2. "All your restaurants share one stock. If you produce 2 burgers, any of your restaurants can sell them."

### 4.7 STEP 6: DINNERTIME (/learn/dinnertime)

**Purpose:** Teach how sales work — the payoff moment.

**Content structure:**
1. **It's automatic:** No decisions. Houses are checked in numerical order (lowest first).
2. **The checklist** for each house (present as a flowchart):
   - Does the house have demand? → No → stays home
   - Is it connected by road to any open restaurant? → No → stays home
   - Does any restaurant have ALL items matching demand? → No → stays home
   - Exactly one qualifies → house eats there
   - Multiple qualify → **competition**
3. **All-or-nothing rule:** Bold, large, repeated. "If a house wants 1 burger + 1 beer, and you only have the burger, the house STAYS HOME."
4. **Payment:** $10 per item sold from the bank. Houses with gardens pay double ($20/item).
5. **Competition:** When multiple restaurants can serve the same house:
   - Effective price = item price ($10) + distance (tile borders from entrance)
   - Lowest effective price wins
   - Tie: more Waitresses → earlier turn order

**Visual assets:**
- `07_dinnertime_competition.webp` — competition example
- `07_dinnertime_selling.webp` — selling example with numbers

**Interactive element (recommended):** A "Who gets the sale?" quiz. Show a house with demand counters and two restaurants at different distances with different stock. Ask the user which restaurant wins. Include an example where neither qualifies (all-or-nothing).

**⚠️ Watch Out boxes:**
1. "All-or-nothing: you must fulfill EVERY demand counter on a house. Having 90% of what they want is the same as having 0%."
2. "Effective price determines WHO gets the sale. But the winner is paid their item price, not the effective price. Distance hurts your competitiveness but doesn't affect your revenue."

### 4.8 STEP 7: MARKETING (/learn/marketing)

**Purpose:** Explain Phase 6 — how campaigns generate demand.

**Content structure:**
1. **Campaigns run automatically** in numerical order (lower numbers first).
2. **Each campaign** places 1 demand counter of its type on every house within reach.
3. **Campaign reach by type:**
   - Billboard: houses orthogonally adjacent to the token
   - Mailbox: line-of-sight from token (blocked by roads)
   - Airplane: houses in flyover zone (1, 3, or 5 rows wide)
   - Radio: houses on same tile + all 8 surrounding tiles
4. **House demand cap:** Max 3 counters (5 with garden). Extra marketing on a full house does nothing.
5. **Campaign duration:** Remove 1 duration counter each round. When last one removed, campaign ends and Marketeer goes On the Beach.

**Visual assets:**
- `09_campaign_reach_billboard.webp`
- `09_campaign_reach_mailbox.webp`
- `09_campaign_reach_airplane.webp`
- `09_campaign_reach_radio.webp`

**Visual recommendation:** Create a unified comparison graphic showing all 4 campaign types side by side on the same map segment. Use color-coded overlays to show reach areas. The existing illustrations show each type individually — a composite comparison would be far more useful for beginners.

**⚠️ Watch Out box:** "Houses cap at 3 demand counters (5 with garden). Extra marketing on a maxed-out house is wasted."

### 4.9 STEP 8: CLEANUP & NEXT ROUND (/learn/cleanup)

**Purpose:** Teach the reset phase and the game end condition.

**Content structure:**
1. **Throw away unsold stock.** ALL of it. Gone. Back to supply.
2. **Return employees** to your hand (busy Marketeers stay out).
3. **Remove Drive-In and Coming Soon signs** — restaurants become open.
4. **Start next round** from Phase 1 again.
5. **Game end:** When the bank hits $0 during Dinnertime, finish that Dinnertime phase, then the game is over. Most cash wins.

**⚠️ Watch Out box:** "You lose ALL unsold food at end of round. There is no carryover. Only produce what you can sell."

**End-of-tutorial CTA:** "You're ready! 🎉 Want to see what a real game looks like?" → Link to First Game walkthrough. Also: "Need a cheat sheet at the table?" → Link to Quick Reference.

### 4.10 YOUR FIRST GAME (/first-game)

**Purpose:** A narrative walkthrough of rounds 1–3 to build confidence.

**Content structure:**
A storytelling-style walkthrough with a fictional 2-player game:

**Round 1:**
- Both players have only their CEO
- Player A hires a Marketing Trainee
- Player B hires a Burger Cook
- Dinnertime: nothing happens (no demand anywhere)
- Marketing: no campaigns yet
- Cleanup: nothing to discard

**Round 2:**
- Player A plays Marketing Trainee → launches a billboard advertising burgers near house #3
- Player B plays Burger Cook → produces 1 burger
- Dinnertime: still no demand! (Marketing hasn't run yet)
- Marketing: Player A's billboard adds 1 burger demand to house #3
- Cleanup: Player B's unsold burger is discarded 😱

**Round 3:**
- Player A hires a Burger Cook, plays Marketing Trainee (campaign still running)
- Player B plays Burger Cook → produces 1 burger
- Dinnertime: House #3 wants 1 burger. Player B's restaurant is connected and has stock → SALE! Player B earns $10.
- Player A has demand near their houses but no food to sell. Lesson learned.

**Key takeaways section:**
1. Nobody can sell until Round 3 at the earliest
2. You need BOTH production and marketing
3. Don't produce food before there's demand (it gets thrown away)
4. The early rounds are about building your engine — don't panic

### 4.11 QUICK REFERENCE PAGES (/reference/*)

These are designed for **in-game lookup** — scannable, no narrative, maximum information density.

#### Round Summary (/reference/round)
- The ASCII round summary from the beginner's guide, styled as a visual card
- Each phase is a collapsible row with a 1-line summary

#### Employee Guide (/reference/employees)
- Filterable table/grid of all employees
- Columns: Name, Type, Entry-Level?, Action, Range, Work Slots, Training Path
- Filter by: type (kitchen/marketing/management/drinks/planning)
- Tap any employee to expand details

#### Campaign Types (/reference/campaigns)
- Side-by-side comparison cards for Billboard, Mailbox, Airplane, Radio
- Each card: reach diagram, placement rules, key notes

#### Distance & Routes (/reference/distance)
- The "3 different things" table from confusion point #4
- Annotated map examples from `04_distance_counting.webp`
- Step-by-step route tracing guide

#### Dinnertime Checklist (/reference/dinnertime)
- Flowchart: demand? → connected? → full stock? → one or multiple restaurants? → competition or sale
- Payment calculation with examples

### 4.12 COMMON MISTAKES (/mistakes)

Derived directly from the confusion points document. Presented as a numbered list of cards, each with:
- ❌ **The mistake** (1 sentence)
- ✅ **The correct rule** (1–2 sentences)
- 💡 **Memory trick** (1 sentence)

Focus only on mistakes relevant to the Introductory Game. Full-game mistakes go in the Full Game section.

### 4.13 FULL GAME RULES (/full-game/*)

Gated behind a clear "Level Up" framing. Each sub-page:

**Milestones:** Complete milestone list with benefits and warnings about double-edged swords. Use the confusion points about permanent/harmful milestones.

**Salaries & Payday:** The salary trap, mandatory payment, firing rules. Heavy emphasis on confusion point #8.

**Bank Reserve Cards:** How they work, how they affect CEO slots, the bank-break mechanic.

**Strategy Tips:** From the rulebook + beginner's guide strategy sections.

---

## 5. UX Patterns & Interactions

### 5.1 Progressive Disclosure Patterns

| Pattern | Where Used | Implementation |
|---------|-----------|----------------|
| **Accordion** | Sub-phases within Step 5, employee details | Collapsed by default, tap to expand. Only one open at a time on mobile to prevent scroll overwhelm. |
| **Tooltip/popover** | Game terms (On the Beach, Work slot, etc.) | First occurrence of each term is a dotted-underline link. Tap to reveal a 1-sentence definition. |
| **"More details" expander** | Edge cases and advanced rules | A subtle link at the end of a core explanation. Opens an indented block below. |
| **Tab interface** | Campaign type comparison, employee categories | Horizontal tabs on desktop, horizontal swipeable tabs on mobile. |
| **Stepper/wizard** | The 8-step tutorial flow | Step indicator at top, prev/next at bottom, progress bar. |

### 5.2 Interactive Elements

Priority-ranked by learning impact:

| Priority | Element | Location | Description |
|----------|---------|----------|-------------|
| **P0** | Slot-planning exercise | Step 3: Company | Drag-drop employees into slots. Trigger overflow consequence. |
| **P0** | "Who gets the sale?" quiz | Step 6: Dinnertime | Multiple-choice with 2–3 scenarios. Instant feedback. |
| **P1** | Route-tracing exercise | Step 5: Working | Draw a path on a simplified map. Count tile borders. |
| **P1** | Legal placement quiz | Step 2: Setup | 3 restaurant placements — which are legal? |
| **P2** | Campaign reach overlay | Step 7: Marketing | Toggle between campaign types to see reach on same map. |
| **P2** | Round timeline animation | Step 4: Round | Animated walk-through of a round with phases lighting up in sequence. |
| **P3** | Demand flow animation | Step 6: Dinnertime | Animated: demand counters appear → food flows from stock → cash flows from bank |

**P0 items are non-negotiable.** These address the #1 and #2 most common confusion points and will save hours of frustration at the table.

### 5.3 Visual Callout System

Four callout types, used consistently throughout:

| Type | Icon | Background | Purpose |
|------|------|-----------|---------|
| **⚠️ Watch Out** | Warning triangle | Amber/yellow | Counterintuitive rules and common mistakes |
| **💡 Tip** | Lightbulb | Light blue | Strategy advice and helpful suggestions |
| **📌 Key Rule** | Pin | Light green | Critical rules that must be memorized |
| **🔍 Example** | Magnifying glass | Light gray | Worked examples with specific numbers |

### 5.4 Glossary Term Linking

Every game-specific term (On the Beach, Work slot, Entrance Corner, Range, Distance, Stock, Demand Counter, etc.) should be:
1. Defined in the glossary (/glossary)
2. Linked on first occurrence per page with a dotted underline
3. Tappable to show a tooltip with the 1-sentence definition
4. NOT linked on subsequent occurrences (to avoid visual clutter)

Estimated glossary size: ~30 terms.

---

## 6. Visual Design Direction

### 6.1 Art Style

The game has a distinctive **1950s American diner / Mad Men-era** aesthetic with warm paper textures, retro typography, and illustrated characters. The website should:

- Use a **warm off-white (#F5F0E6)** background reminiscent of aged paper
- Primary accent color: **deep teal (#2A7B7F)** — matches the game's phase headers
- Secondary accent: **warm red (#C4463A)** — for warnings and emphasis
- Typography: A clean sans-serif for body text (e.g., Inter, Source Sans Pro), paired with a retro-styled display font for headers that echoes the game's script titles without being illegible
- Subtle paper texture overlay at low opacity on section backgrounds

### 6.2 Illustration Strategy

**Existing assets to use directly (with annotation overlays):**

| Asset | Usage |
|-------|-------|
| `00b_introductory_game_rules.webp` | Step 1 or Step 2 — shows what's removed |
| `01_employee_card_anatomy.webp` | Step 3 — annotated card anatomy |
| `02_map_overview_locations.webp` | Step 2 — map elements |
| `03_entrance_and_connections_p1/p2.webp` | Step 2 — entrance corner rules |
| `04_distance_counting.webp` | Reference/Distance — annotated distance example |
| `05_company_structure.webp` | Step 3 — company tree |
| `06_drink_routes_p1/p2.webp` | Step 5 / Reference/Distance — route tracing |
| `07_dinnertime_competition.webp` | Step 6 — competition example |
| `07_dinnertime_selling.webp` | Step 6 — selling with gardens/milestones |
| `08_campaign_placement.webp` | Step 5/7 — campaign placement |
| `09_campaign_reach_*.webp` (4 files) | Step 7 / Reference/Campaigns |
| `10_setup_overview.webp` | Step 2 — setup overview |
| `10_setup_player.webp` | Step 2 — player components |
| `11_drive_in_example.webp` | Step 5 (advanced) |
| `12_houses_and_gardens.webp` | Step 5 / Reference |

**New visuals to create:**

| Visual | Priority | Description |
|--------|----------|-------------|
| Core loop diagram | P0 | Circular flow: Hire → Produce → Advertise → Sell → (repeat) |
| Round phase timeline | P0 | Vertical numbered timeline of 7 phases with color coding |
| Simplified company structure | P0 | Clean diagram showing CEO → 3 slots → manager adds slots |
| Dinnertime flowchart | P0 | Decision tree: demand? → connected? → stock? → competition? |
| Campaign reach comparison | P1 | All 4 campaign types on the same map segment |
| "First 3 rounds" timeline | P1 | Visual summary of the First Game walkthrough |
| Employee training tree (simplified) | P1 | Simplified version of menu card for introductory game |
| Map element legend | P2 | Icon key: road, house, drink supplier, restaurant, bridge |

### 6.3 Image Treatment

All rulebook illustrations should receive:
1. **Responsive sizing** — max-width container, scales down on mobile
2. **Pinch-to-zoom** — critical for dense map illustrations on phone screens
3. **Annotation overlays** — numbered callouts that link to adjacent explanatory text
4. **Lazy loading** — images below the fold should lazy-load

For the 4 campaign reach images, consider compositing them into a **swipeable carousel** rather than showing all 4 vertically (saves vertical space on mobile).

---

## 7. Mobile-First Design Specifications

### 7.1 Layout

- **Single column** on mobile (no side-by-side layouts below 768px)
- **Max content width:** 680px on desktop (readable line length)
- **Generous padding:** 16px horizontal padding on mobile
- **Large tap targets:** All interactive elements minimum 44×44px
- **Sticky header:** Step indicator + progress bar (max 48px height)
- **Sticky footer:** Previous/Next buttons (max 56px height)
- **Content area:** Scrollable between sticky header and footer

### 7.2 Typography Scale

| Element | Mobile | Desktop |
|---------|--------|---------|
| H1 (page title) | 24px / 1.2 | 36px / 1.2 |
| H2 (section) | 20px / 1.3 | 28px / 1.3 |
| H3 (sub-section) | 17px / 1.3 | 22px / 1.3 |
| Body | 16px / 1.6 | 18px / 1.6 |
| Callout text | 15px / 1.5 | 16px / 1.5 |
| Caption | 13px / 1.4 | 14px / 1.4 |

### 7.3 Performance

- Target: **< 3 second** initial load on 4G
- Images: WebP format (already provided), with srcset for responsive sizing
- Lazy load all images except the first one on screen
- No JavaScript framework heavier than Preact/Svelte — consider static HTML + vanilla JS for interactions
- The Quick Reference section should work **offline** (service worker cache)

### 7.4 Offline Support

The Quick Reference section should be cacheable via service worker for offline use. Players often play in locations with poor connectivity (game cafes, basements). The tutorial flow is less critical for offline, but Reference pages are high-value offline content.

---

## 8. Navigation & Wayfinding

### 8.1 Breadcrumbs

Not needed. The site is flat enough that breadcrumbs add clutter without value. The step indicator serves the same purpose within the tutorial flow.

### 8.2 Step Indicator Design

```
┌─────────────────────────────────────────┐
│  ← STEP 3 of 8: Your Company     ☰    │
│  ████████████░░░░░░░░░░░░░░░░░░░░░░░   │
└─────────────────────────────────────────┘
```

- Left arrow = go back one step
- Step label is tappable → opens dropdown to jump to any step
- Hamburger menu → full site navigation
- Progress bar: filled portion proportional to steps completed

### 8.3 Bottom Navigation (Tutorial Pages)

```
┌─────────────────────────────────────────┐
│  ← Previous: Setting Up    Next: The Round →  │
└─────────────────────────────────────────┘
```

- Named links (not just "Previous" / "Next") so user knows where they're going
- Buttons span full width on mobile, side by side

### 8.4 Cross-Linking Strategy

Within tutorial text, link to:
- **Glossary terms** (tooltip popup, not navigation)
- **Reference pages** (open in same tab — these are quick lookups)
- **Specific rulebook details** (via "More details" expanders inline, not external links)

Never link out of the tutorial flow to external pages during the 8-step sequence. Keep the user in the linear path. Reference links appear as secondary options, not inline disruptions.

### 8.5 Search

Add a search bar (accessible from the hamburger menu and the Reference landing page). Index:
- All glossary terms
- All page headings
- All callout box content
- All employee names

Use a client-side search library (e.g., Fuse.js or Pagefind). The content corpus is small enough for full client-side search.

---

## 9. Accessibility

- All images have descriptive alt text (especially map diagrams — describe the spatial relationship being shown)
- Interactive exercises have keyboard-accessible alternatives
- Color is never the only indicator — always pair with icons or text
- Callout boxes use semantic HTML (not just color) to convey type
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Focus indicators on all interactive elements
- Screen reader testing for the tutorial flow

---

## 10. Analytics & Success Metrics

Track:
- **Tutorial completion rate:** What % of users who start Step 1 reach Step 8?
- **Drop-off by step:** Which step loses the most users?
- **Interactive element engagement:** Do users attempt the quizzes/exercises?
- **Reference page visits during tutorial:** Users jumping to reference = they're confused by tutorial content
- **Time per step:** Steps taking > 3 minutes need content trimming
- **Return visits to Reference:** High = users are playing and coming back for lookups = success

---

## 11. Content Production Checklist

For each tutorial step, the engineering team needs to produce:

- [ ] Page content (markdown → HTML)
- [ ] Responsive images (srcset with 3 sizes: 400w, 800w, 1200w)
- [ ] Annotation overlays for rulebook illustrations
- [ ] Callout boxes (Watch Out, Tip, Key Rule, Example)
- [ ] Glossary term tooltips (dotted underlines with popover definitions)
- [ ] Accordion/expander sections for "More details"
- [ ] Interactive element (where specified as P0 or P1)
- [ ] Previous/Next navigation links
- [ ] Step indicator metadata
- [ ] Alt text for all images

---

## 12. Implementation Priority

### Phase 1: MVP (Launch-ready)
- Home page
- All 8 tutorial steps (text + static images + callouts)
- Round Summary reference page
- Common Mistakes page
- Responsive layout, sticky nav, progress bar
- Glossary page

### Phase 2: Interactive
- P0 interactive elements (slot planning, who-gets-the-sale quiz)
- Employee Guide reference page
- Campaign Types reference page
- Distance & Routes reference page
- Dinnertime Checklist reference page
- Client-side search

### Phase 3: Polish
- P1 interactive elements (route tracing, legal placement quiz)
- First Game walkthrough page
- Full Game Rules section
- Offline support (service worker)
- P2/P3 interactive elements
- Analytics integration

---

## Appendix A: Illustration Asset Mapping

| Illustration File | Used On | Annotation Needed |
|---|---|---|
| `00_restaurant_placement_rules.webp` | Step 2: Setup | Callout arrows for entrance corner |
| `00b_introductory_game_rules.webp` | Step 1 or Step 2 | None (use as-is) |
| `01_employee_card_anatomy.webp` | Step 3: Company | Already annotated — use as-is |
| `01b_employee_card_progression.webp` | Step 5: Working (training) | Callout for "On the Beach" requirement |
| `02_map_overview_locations.webp` | Step 2: Setup | Legend overlay identifying each element |
| `03_entrance_and_connections_p1.webp` | Step 2: Setup | Highlight entrance corner in green |
| `03_entrance_and_connections_p2.webp` | Reference: Distance | Road connection labels |
| `04_distance_counting.webp` | Reference: Distance | Already annotated — crop for mobile |
| `05_company_structure.webp` | Step 3: Company | Simplify — highlight CEO + 3 slots only |
| `06_drink_routes_p1.webp` | Step 5: Working / Reference | Numbered step overlay for route |
| `06_drink_routes_p2.webp` | Reference: Distance | Already annotated |
| `07_dinnertime_competition.webp` | Step 6: Dinnertime | Effective price callouts |
| `07_dinnertime_selling.webp` | Step 6: Dinnertime | Payment calculation overlay |
| `08_campaign_placement.webp` | Step 5/7: Marketing | Range indicator overlay |
| `09_campaign_reach_airplane.webp` | Step 7 / Reference | Reach zone highlight |
| `09_campaign_reach_billboard.webp` | Step 7 / Reference | Reach zone highlight |
| `09_campaign_reach_mailbox.webp` | Step 7 / Reference | Reach zone highlight |
| `09_campaign_reach_radio.webp` | Step 7 / Reference | Reach zone highlight |
| `10_setup_overview.webp` | Step 2: Setup | Player count table overlay |
| `10_setup_player.webp` | Step 2: Setup | Checklist callouts |
| `11_drive_in_example.webp` | Step 5 (advanced) | 4-corner entrance highlight |
| `12_houses_and_gardens.webp` | Step 5 / Reference | Garden demand cap callout |

## Appendix B: Glossary Terms (Draft)

| Term | Definition |
|------|-----------|
| CEO | Your starting employee card. Always in play. Provides 3 Work slots and 1 Hire action. |
| Work Slot | A space in your company structure where an employee can be placed to work this round. |
| On the Beach | An employee you own but chose not to (or couldn't) play this round. They do nothing. |
| Entrance Corner | The marked corner of your restaurant token — all distances, routes, and connections start here. |
| Distance | The number of tile borders crossed between your entrance corner and a location. Used for pricing competition. |
| Range | The maximum number of tile borders an employee can cross when performing their action. |
| Road Route | A path traced square-by-square along connected road sections, starting from your entrance corner. |
| Stock | Your supply of food and drink items, shared across all your restaurants. Discarded at end of round. |
| Demand Counter | A token on a house showing what food/drink that house wants to buy. |
| Effective Price | Item price + distance in tiles. Used only to determine who wins a competitive sale. |
| Item Price | The base price of each item ($10 default). Modified by pricing employees. |
| Entry-Level Employee | An employee with the star icon — can be hired directly from the supply. |
| Busy Marketeer | A Marketeer currently running a campaign. Cannot be used, trained, or (in full game) fired. |
| Connected by Road | Two locations that both touch the same continuous road network. |
| Campaign | A marketing token on the map that generates demand on nearby houses each round. |
| Drive-In | A temporary state where your restaurant has entrances at all 4 corners (until end of round). |
| Coming Soon | A newly placed restaurant that isn't yet open. Opens at end of round during Cleanup. |
| Garden | A token adjacent to a house. Houses with gardens hold 5 demand (not 3) and pay double. |
| Bridge | A map feature where two roads cross without connecting. |
| Tile Border | The edge between two map tiles. Crossing one = 1 distance/range. |
| Bank Break | When the bank runs out of money. In the Introductory Game, this ends the game. |
| Restructuring | Phase 1: secretly choose which employees to play vs. bench. |
| Dinnertime | Phase 4: houses eat and you get paid. Automatic, no decisions. |
| Cleanup | Phase 7: discard unsold stock, return employees, remove signs. |
