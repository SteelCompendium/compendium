---
file_basename: Pillar
file_dpath: Dynamic Terrain/Mechanisms
item_id: pillar-level-2-hazard-hexer
item_index: '05'
item_name: Pillar (Level 2 Hazard Hexer)
scc:
  - mcdm.monsters.v1:dynamic-terrain.mechanism:pillar-level-2-hazard-hexer
scdc:
  - 1.1.1:4.1:05
source: mcdm.monsters.v1
type: dynamic-terrain/mechanism
---

###### Pillar (Level 2 Hazard Hexer)

This stone pillar can be toppled onto unsuspecting foes with the right amount of damage or a well-engineered trigger mechanism.

- **EV:** 3
- **Stamina:** 6
- **Size:** One square that can't be moved through
- **Direction:** The pillar topples in a preset direction.

<!-- -->
> 🌀 **Deactivate**
>
> The pillar's linked trigger must be deactivated.

<!-- -->
> ❕ **Activate**
>
> The pillar is destroyed, or a pressure plate, switch, or other linked trigger is activated.
>
> **Effect:** The **Toppling Pillar** ability.

<!-- -->
> ❗️ **Toppling Pillar**
>
> | **Area**                   |                   **Free triggered action** |
> | -------------------------- | ------------------------------------------: |
> | **📏 4 x 1 line within 1** | **🎯 Each creature and object in the area** |
>
> **Trigger:** The pillar is destroyed, or a pressure plate, switch, or other linked trigger is activated.
>
> **Power Roll + 2:**
>
> - **≤11:** 4 damage
> - **12-16:** 6 damage; M < 1 restrained (save ends)
> - **17+:** 9 damage; M < 2 restrained (save ends)
>
> **Effect:** The area is difficult terrain.

<!-- -->
> ⭐️ **Upgrades**
>
> **Metal Pillar (+1 EV)** The pillar is made of metal, has 9 Stamina, and deals 1d6 extra damage.
>
> **Multiple Pillars (+3 EV per additional pillar)** Multiple pillars can be used to represent a larger toppling object such as a wall. If triggered by destruction, all individual pillars need to be destroyed before the object falls.
