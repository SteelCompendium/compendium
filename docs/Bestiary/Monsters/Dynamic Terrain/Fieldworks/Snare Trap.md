---
file_basename: Snare Trap
file_dpath: Dynamic Terrain/Fieldworks
item_id: snare-trap-level-1-trap-ambusher
item_index: '01'
item_name: Snare Trap (Level 1 Trap Ambusher)
scc:
  - mcdm.monsters.v1:dynamic-terrain.fieldwork:snare-trap-level-1-trap-ambusher
scdc:
  - 1.1.1:4.3:01
source: mcdm.monsters.v1
type: dynamic-terrain/fieldwork
---

###### Snare Trap (Level 1 Trap Ambusher)

A rope snare is set to grab a target, leaving them hanging upside down.

- **EV:** 1
- **Stamina:** 1
- **Size:** 1S

<!-- -->
> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a snare trap can make an **Agility test**.
>
> - **≤11:** The creature triggers the trap and is affected as if in its space.
> - **12-16:** The trap is deactivated but the creature is slowed (EoT).
> - **17+:** The trap is deactivated and doesn't trigger.

<!-- -->
> ❕ **Activate**
>
> The snare trap is calibrated to be triggered by creatures or objects of a particular size or larger. The trap triggers when a creature or object of the appropriate size enters its space.
>
> **Effect:** A triggering creature or object ends their movement and is targeted by the **Snare** ability.

<!-- -->
> ❗️ **Snare**
>
> | **Melee, Strike, Weapon** |                **Free triggered action** |
> | ------------------------- | ---------------------------------------: |
> | **📏 Melee 0**            | **🎯 The triggering creature or object** |
>
> **Trigger:** A creature or object of the appropriate size enters the trap's space.
>
> **Power Roll + 2:**
>
> - **≤11:** The target shifts 1 square away from the snare.
> - **12-16:** 1 damage; A < 1 restrained (save ends)
> - **17+:** 3 damage; A < 2 restrained (save ends)
>
> **Effect:** A creature restrained this way is vertical pulled 2 squares and suspended in the air by the snare line. On a successful save, the snare is cut or breaks and the creature falls to the ground. The snare must be manually reset.

<!-- -->
> ⭐️ **Upgrade**
>
> **Net Trap (+1 EV)** The snare becomes a net that can wrap up multiple targets. The net has 3 Stamina and fills an area of 3 squares by 3 squares. The Snare ability loses its existing keywords, gains the Area keyword, and targets each creature or object in the area. The trap can be triggered by a target moving through one specific square, or by requiring multiple squares to be moved through. Any creature who makes their save to end the restrained effect ends that effect for all targets, who all fall to the ground.

<!-- -->
> ⭐️ **Hidden**
>
> The snare trap is hidden until triggered or detected.
