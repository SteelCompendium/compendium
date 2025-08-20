---
file_basename: Lava
file_dpath: Dynamic Terrain/Environmental Hazards
item_id: lava-level-3-hazard-hexer
item_index: '07'
item_name: Lava (Level 3 Hazard Hexer)
scc:
  - mcdm.monsters.v1:dynamic-terrain.environmental-hazard:lava-level-3-hazard-hexer
scdc:
  - 1.1.1:4.5:07
source: mcdm.monsters.v1
type: dynamic-terrain/environmental-hazard
---

###### Lava (Level 3 Hazard Hexer)

A patch of blisteringly hot molten rock wells up from the ground, threatening anyone who gets close to it.

- **EV:** 4 per 10 x 10 patch
- **Stamina:** 12 per square
- **Size:** One or more squares of difficult terrain
- **Immunity:** 20 to all damage except cold damage

<!-- -->
> 🌀 **Deactivate**
>
> Each square of lava must be individually destroyed.

<!-- -->
> ❕ **Activate**
>
> A creature or object enters the lava or starts their turn there, or starts their turn adjacent to the lava.
>
> **Effect:** The **Liquid Hot Magma** ability.

<!-- -->
> ❗️ **Liquid Hot Magma**
>
> | **Melee, Strike** |                **Free triggered action** |
> | ----------------- | ---------------------------------------: |
> | **📏 Melee 1**    | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object enters the lava or starts their turn there, or starts their turn adjacent to the lava.
>
> **Power Roll + 2:**
>
> - **≤11:** 5 fire damage; M < 1 the target is burning (save ends)
> - **12-16:** 9 fire damage; M < 2 the target is burning (save ends)
> - **17+:** 12 fire damage; M < 3 the target is burning (save ends)
>
> **Effect:** If the target is adjacent to lava but not in it, this ability takes a bane. A burning creature takes 1d6 fire damage at the start of each of their turns. A burning object takes 1d6 fire damage at the end of each round.

<!-- -->
> ⭐️ **Upgrade**
>
> **Magma Flow (+4 EV)** The lava is flowing! At the start of each round, add one square of lava adjacent to an existing square of lava.
