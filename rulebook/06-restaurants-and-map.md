# Restaurants and the Map

## The Map

The map is made up of roads, locations, and empty squares. Some locations start on the map, while others are placed by employees over the course of the game.

- **A. Restaurant:** Customers buy food from your restaurant. You start with 1 restaurant on the map and may place others via Planning employees.
- **B. Drink Supplier:** Collect drinks from Drink Suppliers.
- **C. House:** Customers looking to buy your food live in Houses. Food and drink counters on a house represent what this household will buy.
- **D. Marketing Campaign:** New food and drink counters can be added to nearby houses each round via Marketing Campaigns. Each Campaign is placed by a Marketeer employee and advertises a specific food or drink item.
- **E. Road:** Locations connect together via roads. 2 orthogonally adjacent roads on adjacent map tiles form a single continuous road.
- **F. Bridge:** 2 roads can pass through the same square without being blocked via a Bridge. The roads are kept separate and do not connect together at the bridge.

## Restaurant Entrance Corner

All Restaurants must be placed with their Entrance Corner adjacent to a road (on 1 or both sides).

> **Note:** The rule that two starting restaurant entrances cannot be on the same tile only applies to restaurants placed at setup — once you start the game, anyone can open a new restaurant right next to yours!

> **Note:** You can play a Local or Regional Manager to temporarily give your restaurants entrances at all 4 corners.

## Road Connections

### Connecting to a Road

- **Restaurants** connect to a road only via their orthogonally adjacent Entrance Corner to the road.
  - *Example:* A restaurant connects to road A, but NOT road B. If you play a Local or Regional Manager, because of their abilities described on their card, the restaurant additionally connects to road B.
- **All other (non-restaurant) locations** connect to a road if any square they occupy is orthogonally adjacent to the road (including a house's garden, which is considered part of the house).

### Multiple Connections

If a restaurant's Entrance Corner or another location is orthogonally adjacent to multiple separate roads, it is connected to each of them.

### Connected by Road

If two locations are both connected to the same continuous road (at any distance), they are **connected by road** to each other.

> *Example:* A beer supplier is connected to a restaurant as they each connect to road A. A house does not connect to the restaurant despite being adjacent to it. However, if a drive-in is active, the house connects to the restaurant, as they both connect to road B.

## Distance

Distance is always counted starting from the restaurant's Entrance Corner, and you only count the number of times you cross into a new map tile along the Road or Air route as follows:

### Distance by Road

To count distance by road, trace a path along a road connecting the two locations, and count the number of times you cross into a new map tile. The number of squares on the path does not matter, only the number of tiles entered.

### Distance by Air

To count distance by air, trace the shortest path of orthogonally-adjacent map tiles from one location to the other, ignoring roads and locations in between, and count the number of times you cross into a new map tile.

### Distance Example

| Destination | Road Distance | Air Distance |
|---|---|---|
| To House 16 (A) | 1 | 1 |
| To Lemonade (B) | 1 | 1 |
| To Soda (C) | 0 | 0 |
| To Lemonade (D) | Impossible! | 0 |
| To House 5 (E) | 2 | 2 |

### Backtracking

The route may trace back along a road section (square) that was previously traced along this route (or a map tile can be entered more than once) with the following clarification:

- You **cannot** trace a route path back onto a segment (road square) that you immediately-previously traced from.

### Range

The Range of an employee is shown at the top-right corner of the card. Road range and air range function the same in this regard: this number tells you the maximum number of times your traced route can cross a tile border.
