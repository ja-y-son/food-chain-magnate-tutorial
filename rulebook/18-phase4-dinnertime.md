# Phase 4: Dinnertime

In the evening, it's time for the city's inhabitants to go out for dinner — and for you to reap the rewards of all the hard work you and your employees (but mostly you) have done.

Players make no decisions during this phase. Instead, the customers living in each house decide whether to go out for dinner. If a house decides to eat at a player's restaurant, that player must serve the house dinner, by selling the items the house wants from their stock and collecting cash for each item sold.

All houses are checked to determine if they eat or stay at home — one at a time, in numerical order — starting with the lowest-numbered house.

- A house with **no demand counters** always stays at home.
- If a house has any demand counters, check if there are any open restaurants it can eat at.

In order for a house to eat at an open restaurant, it must meet **both** of these requirements:

1. The restaurant must be **connected by road** to the house (at any distance).
2. The restaurant chain must have a **full set of food and drink items in stock** that exactly matches (or exceeds) the demand counters on the house.

If the house is not connected to any open restaurants, or if none of the open restaurants it is connected to are able to completely fulfill its demand, it decides to **stay home**.

> **Note:** To win a house's business, a restaurant must be able to fulfill *every* demand counter on it. All demand counters remain on the house for this turn. If a player is short by just 1 item, the house will not eat at their restaurant. Customers are so picky!

If exactly one open restaurant fulfills both requirements, the house decides to eat at that restaurant (regardless of how far away it is or what prices it charges). If multiple open restaurants fulfill both requirements, **competition ensues** (see below).

## Competition

Whenever 2 or more restaurants compete for a house's business, the house makes a final decision based on each restaurant's item price and distance. Follow these steps:

### A. Item Price

Determine the item price for each competing restaurant (see "Item Price" below for full details).

### B. Distance

Determine the distance between the house and each competing restaurant. For each restaurant, start at the entrance and trace the least-distance path (i.e., fewest tile border crossings) by road to the house, then count how many times this path crosses over onto a new tile.

### C. Decision

Determine each competing restaurant's **effective price** by adding together its item price and distance (each distance unit counts as $1). The customers choose the restaurant with the **lowest effective price**.

> **Note:** This represents that customers are willing to walk 1 tile further to save $1 per item, 2 tiles to save $2, etc.

### D. Ties

If there is a tie for the lowest effective price, the customers choose the restaurant owned by the player with more **Waitresses** played this turn (ignore those On the Beach). If there is also a tie for most Waitresses, the customers choose the restaurant owned by the tied player who is **earliest in turn order**.

## Stock

All food and drink items you gain are kept in your **stock**, which is a shared supply for all of your restaurants. Your stock is always public information.

## Demand

The demand counters on a house show which items the customers who live there want for dinner. Each house is limited to **3 total demand counters** at a time. If a house has a garden, this limit is increased to **5 demand counters**. Houses never start with any demand counters; players must place demand counters on houses by running marketing campaigns.

If no houses have any demand counters, the entire Dinnertime phase can be skipped (except for Waitress and CFO cash bonuses; see below).

Dinnertime will always be skipped during the first 2 rounds of the game, because the earliest any house can receive demand counters is after Dinnertime in the second round. This preparatory stage can last for additional rounds if no one plays any early Marketeers.

## Serving Customers and Getting Paid

If a house eats at your restaurant, you must immediately discard (to the supply) all demand counters on the house and an exact matching set of item counters from your stock. For each item sold, collect cash from the bank equal to your **item price** (including modifiers) plus any applicable **cash bonuses** (gardens, "First Marketed" milestones).

## Item Price

Your item price is how much you are paid for each item you sell. You have **one item price** — all of your items are always the same price. For example, if your item price is $10, selling 1 burger and 1 beer gets you $20, regardless of which restaurant they were bought from. Ignore all calculations made regarding effective price (you are not paid more or less based on distance).

To calculate your item price, start with a **base price of $10** and apply the following item price modifiers:

- **−$1** per Pricing Manager you played (ignore those On the Beach)
- **−$3** per Discount Manager you played (ignore those On the Beach)
- **+$10** if you have a Luxuries Manager played (ignore those On the Beach)
- **−$1** if you have the "First to Lower Prices" milestone (once gained, this is permanent and must always apply)

All item price modifiers are **mandatory**, meaning you must apply each modifier showing on all of your played employees. Employees On the Beach do not apply a modifier.

> **Note:** Item price is not affected by the number of items sold, nor any cash bonuses that are earned from milestones or other sources.

## Cash Bonuses

Cash bonuses provided by employees and milestones increase how much money you take home at Dinnertime. They are **not** included when calculating your effective price, so they have no effect on whether customers decide to eat at your restaurant.

- **Houses with Gardens:** After calculating your item price as detailed above, **double the total** if the house making the purchase has a garden!
- **"First Marketed" Milestones:** When you sell items, if you have a "First Burger/Pizza/Drink Marketed" milestone, take **$5** from the bank for each item of the corresponding type you sell. In the case of the "First Drink Marketed" milestone, this applies to every drink you sell (of all types). A garden does **not** double this bonus.

This is the total cash gained from this sale to this single house. Repeat the process above if you make another sale to another house.

> **CFO Note:** If you have a CFO, keep all money collected in a separate pile to keep track of how much you've gained this entire Dinnertime phase (see CFO Bonus below).

## End of Dinnertime Cash Bonuses

There are two more possible bonuses — Waitresses and CFO. Resolve Waitress first.

### Waitresses

At the end of Dinnertime, take **$3** from the bank for each Waitress played in your company structure (or **$5** if you have the "First Waitress Played" milestone). You earn this bonus even if you did not sell any items at Dinnertime.

> **CFO Note:** If you have a CFO, add this Waitress money to the money you've already collected this Dinnertime phase (if any).

### CFO

At the end of Dinnertime, if you have a CFO in your company structure, collect a bonus equal to **50%** of the total cash you earned this Dinnertime phase (rounded up). This includes cash earned from Waitresses and other cash bonuses.

## Dinnertime Milestones

- At the start of Dinnertime, if there is a Pricing or Discount Manager in your company structure, and the "First to Lower Prices" milestone is still available, immediately claim it and receive its benefit. Because all pricing employee actions are mandatory, you must claim this milestone even if you do not sell any items this phase.
- At any point during Dinnertime, if you have enough total cash to claim an available "First to Have $X" milestone, immediately claim it.

> **Note:** Regardless of when you claim "First to Have $100", your CEO may not use their new CFO ability until the following Dinnertime phase.

## Breaking the Bank

At any point during the Dinnertime phase, if the bank has $0 remaining, the bank breaks. The **first time** the bank breaks, immediately take the following steps:

1. **Reveal Reserve:** Reveal the bank reserve cards that players selected at setup.
2. **Refill Bank:** Sum together the cash amounts shown on the revealed cards. Refill the bank with that much cash from the game box.
3. **CEO Slots:** Determine which number of CEO slots appears most often on the revealed cards. This is the number of slots each CEO has for the rest of the game. If two types of reserve cards occur equally often, the highest number determines the slots. For example, two "2 slots" cards and two "4 slots" cards will lead to all CEOs having 4 slots. If the number is 2 or 4, each player tucks their bank reserve card with the matching number of slots under their CEO to indicate their new number of slots. If the number is 3, CEOs continue to have 3 slots, so players don't need to tuck cards.
4. **Finish Paying:** If the bank broke while a player was still owed cash, they continue taking what they were owed. Then continue the Dinnertime phase.

### Breaking the Bank Again

The **second time** the bank breaks, do not refill the bank. For the rest of the Dinnertime phase, players continue to earn cash normally, but they must either take the cash they earn from the game box or write it as an "IOU" on a sheet of paper. At the end of Dinnertime, the game ends, and whoever has the most cash wins.
