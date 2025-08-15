---
file_basename: Frost Giant Storm Hurler
file_dpath: Monsters/Giants/Statblocks
item_id: frost-giant-storm-hurler
item_index: '200'
item_name: Frost Giant Storm Hurler
scc:
  - mcdm.monsters.v1:monster:frost-giant-storm-hurler
scdc:
  - 1.1.1:2:200
source: mcdm.monsters.v1
type: monster
---

###### Frost Giant Storm Hurler

|    Frost Giant, Giant    |          -          |       Level 8        |     Elite Artillery     |         EV 40          |
| :----------------------: | :-----------------: | :------------------: | :---------------------: | :--------------------: |
|     **4**<br/> Size      |  **7**<br/> Speed   | **180**<br/> Stamina |  **5**<br/> Stability   | **9**<br/> Free Strike |
| **Cold 8**<br/> Immunity | **-**<br/> Movement |          -           | **-**<br/> With Captain | **-**<br/> Weaknesses  |
|    **+4**<br/> Might     | **-1**<br/> Agility |  **0**<br/> Reason   |  **0**<br/> Intuition   |  **0**<br/> Presence   |

<!-- -->
> 🏹 **Ice Javelins (Signature Ability)**
>
> | **Magic, Ranged, Strike** |                 **Main action** |
> | ------------------------- | ------------------------------: |
> | **📏 Ranged 15**          | **🎯 Two creatures or objects** |
>
> **Power Roll + 4:**
>
> - **≤11:** 13 cold damage
> - **12-16:** 18 cold damage; M < 3 bleeding (save ends)
> - **17+:** 22 cold damage; M < 4 bleeding (save ends)
>
> **Effect:** Whenever a creature bleeding this way takes damage from that condition, their speed decreases by 1 (to a minimum of 0) until that condition ends.

<!-- -->
> 🏹 **Flower of Frost (3 Malice)**
>
> | **Magic, Ranged** | **Main action** |
> | ----------------- | --------------: |
> | **📏 Ranged 15**  |  **🎯 Special** |
>
> **Effect:** The storm hurler throws three size 1L ice javelins into unoccupied squares within distance. Each javelin has 30 Stamina and fire weakness 5. At the start of the storm hurler's next turn, all javelins not destroyed explode in a shower of icicles. Each enemy and object within 3 squares of an exploding javelin makes an **Agility test**.
>
> - **≤11:** 14 cold damage; push 4; bleeding (save ends)
> - **12-16:** 11 cold damage; push 2; slowed (save ends)
> - **17+:** 7 cold damage

<!-- -->
> 🗡 **Ice Dance**
>
> | **Melee**      |          **Maneuver** |
> | -------------- | --------------------: |
> | **📏 Melee 1** | **🎯 One giant ally** |
>
> **Effect:** The storm hurler and the target each shift up to 6 squares while staying adjacent to each other. The target can then jump up to 5 squares and make a free strike.

<!-- -->
> ❗️ **Frozen Retribution**
>
> | **-**       | **Triggered action** |
> | ----------- | -------------------: |
> | **📏 Self** |          **🎯 Self** |
>
> **Trigger:** The storm hurler is targeted by a ranged strike.
>
> **Effect:** The triggering strike has a double bane. If the strike obtains a tier 1 outcome, the storm hurler uses Ice Javelins against the creature who made it.

<!-- -->
> ⭐️ **Kingdom of Isolation**
>
> The storm hurler is surrounded by a snowstorm. Any enemy who starts their turn within 2 squares of the storm hurler can't shift.
