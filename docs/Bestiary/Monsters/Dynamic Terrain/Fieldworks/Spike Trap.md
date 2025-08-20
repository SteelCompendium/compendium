---
file_basename: Spike Trap
file_dpath: Dynamic Terrain/Fieldworks
item_id: spike-trap-level-2-trap-ambusher
item_index: '06'
item_name: Spike Trap (Level 2 Trap Ambusher)
scc:
  - mcdm.monsters.v1:dynamic-terrain.fieldwork:spike-trap-level-2-trap-ambusher
scdc:
  - 1.1.1:4.3:06
source: mcdm.monsters.v1
type: dynamic-terrain/fieldwork
---

###### Spike Trap (Level 2 Trap Ambusher)

A pit dug into the ground is filled with spikes, and camouflaged to avoid detection.

- **EV:** 3
- **Stamina:** 6
- **Size:** One or more squares
- **Typical Space:** 2 x 2-square area

<!-- -->
> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a spike trap can make an **Agility test**.
>
> - **≤11:** The creature triggers the trap and is affected as if in its area.
> - **12-16:** The trap is deactivated but the creature is slowed (EoT).
> - **17+:** The trap is deactivated and doesn't trigger.

<!-- -->
> ❕ **Activate**
>
> The spike trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its area.
>
> **Effect:** The **Spike Trap** ability.

<!-- -->
> ❗️ **Spike Trap**
>
> | **Area, Weapon** |                **Free triggered action** |
> | ---------------- | ---------------------------------------: |
> | **📏 Melee 0**   | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object of the appropriate size enters the trap's area.
>
> **Power Roll + 2:**
>
> - **≤11:** 3 damage; the target shifts 1 square away from the trap
> - **12-16:** 4 damage; the target falls into the pit; A < 0 prone
> - **17+:** 6 damage; the target falls into the pit; A < 1 prone; restrained (save ends)
>
> **Effect:** The target ends their movement when they enter the trap's area. The pit is typically 2 squares deep. The trap must be manually reset.

<!-- -->
> ⭐️ **Hidden**
>
> The spike trap is hidden until triggered or detected.
