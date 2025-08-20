---
file_basename: Portcullis
file_dpath: Dynamic Terrain/Mechanisms
item_id: portcullis-level-3-trap-ambusher
item_index: '06'
item_name: Portcullis (Level 3 Trap Ambusher)
scc:
  - mcdm.monsters.v1:dynamic-terrain.mechanism:portcullis-level-3-trap-ambusher
scdc:
  - 1.1.1:4.1:06
source: mcdm.monsters.v1
type: dynamic-terrain/mechanism
---

###### Portcullis (Level 3 Trap Ambusher)

A portcullis is hidden in the ceiling of a passage or choke point, waiting to drop when activated.

- **EV:** 4
- **Stamina:** 9 per square
- **Size:** The area of the corridor to be blocked
- **Typical Space:** 2 x 1-square area, up to a 4 x 2-square area

<!-- -->
> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a portcullis can make an **Agility test**.
>
> - **≤11:** The creature triggers the portcullis and is affected as if in its area.
> - **12-16:** The portcullis is deactivated but the creature is slowed (EoT).
> - **17+:** The portcullis is deactivated and doesn't trigger.

<!-- -->
> ❕ **Activate**
>
> A pressure plate, switch, or other linked trigger is activated.
>
> **Effect:** The **Heavy Gate** ability.

<!-- -->
> ❗️ **Heavy Gate**
>
> | **Area, Weapon** |                   **Free triggered action** |
> | ---------------- | ------------------------------------------: |
> | **📏 Special**   | **🎯 Each creature and object in the area** |
>
> **Trigger:** A pressure plate, switch, or other linked trigger is activated.
>
> **Special:** The area of this ability is the area directly beneath the portcullis when it falls.
>
> **Power Roll + 2:**
>
> - **≤11:** 3 damage; slide 1, ignoring stability
> - **12-16:** 7 damage; A < 2 restrained (save ends)
> - **17+:** 10 damage; A < 3 restrained (save ends)
>
> **Effect:** The portcullis blocks movement from one side of it to the other. A target slid by the portcullis ends up on one side of it or the other (choose randomly). The portcullis must be manually reset.

<!-- -->
> ⭐️ **Hidden**
>
> The portcullis is hidden until triggered or detected.
