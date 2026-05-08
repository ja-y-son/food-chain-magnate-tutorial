# Phase 6: Marketing

Marketing campaigns create demand with no player decisions.

## Campaigns Run

Campaigns run one at a time, in numerical order (start with the lowest-numbered campaign). When each campaign runs, do the following:

### A. Place Demand Counters

Place 1 demand counter (taken from the supply) — of a type matching the duration counter — on each house in that campaign's reach.

Note the following limitations:

- A house can only have a **maximum of 3 demand counters** on it; or if it has a garden, the maximum is **5** instead.
- While a house is at its demand counter maximum, marketing campaigns have no effect on it. You cannot swap out an existing counter with a new one!

> **Thematic Note:** This can lead to some campaigns being utterly useless, as is the nature of some marketing campaigns!

### B. Remove Duration Counter

Return 1 of the campaign's duration counters to the supply (even if the campaign did not place any demand counters).

### C. End of Campaign Check

If the last duration counter was removed from the campaign, the campaign immediately ends.

- This is the **only** way a campaign can end!
- When a campaign ends, return the token to the supply, the campaign's Marketeer card goes On the Beach, and the busy marker is returned to the supply.

## Campaign Reach

Campaign reach depends on the type of campaign as follows.

Gardens are considered part of their house — treat the garden as an extension of the house, not as a separate part (i.e., a house with a garden is treated as a single 6-square-sized house).

### Billboards

A billboard campaign reaches each **orthogonally-adjacent** house.

> **Example:** House 13 is orthogonally-adjacent and in reach of the billboard. House 7 is in reach, even with only its garden orthogonally-adjacent. Without this garden, House 7 would only be diagonally adjacent, and therefore not in reach of the billboard. Houses 8 and 14 are not adjacent — therefore they are not affected by the billboard.

### Mailboxes

A mailbox campaign reaches each house you can trace a line to from the Mailbox token — nothing blocks this traced line except **roads** and the **edge of the map**. Two roads touching at a corner block the traced line of a mailbox. A bridge blocks the path of a mailbox the same as a road crossing.

> **Example:** Mailbox 7 can reach Houses 8, 2, 12, and 18. House 16 is blocked by roads too close together (even a letter cannot fit through that gap!). House 5 looks close, but mail cannot go across the road.

### Airplanes

An airplane campaign reaches each house in its **flyover zone**: the 1, 3, or 5 rows or columns the airplane token aligns with. Only part of a house and/or its garden needs to be in the flyover zone to be in reach. Nothing blocks the flyover zone. Overlapping airplanes are possible, and each airplane can create demand to the house in their flyover zone (unless the maximum demand has already been reached).

> **Example:** Airplane 4 and 5 overlap, and both of them fly over and reach house 2. Airplane 4 markets first, so house 2 gains a beer demand counter and is now at their 3 maximum demand! When airplane 5 markets, house 18 gains 1 lemonade demand; however, they can no longer place demand on house 2.

### Radio Towers

A radio campaign reaches **every house on its own tile and on all 8 surrounding tiles**. Only part of a house and/or its garden needs to be on one of these tiles.

> **Example:** All houses in these 9 tiles are in reach of the radio campaign. Even the house in the top-left corner can hear the radio, because part of their house is part of the 8 surrounding tiles of the radio (and the people spend most of their day in that half of the house anyways).
