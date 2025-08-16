---
file_basename: Pressure Plate
file_dpath: Dynamic Terrain/Mechanisms
item_id: pressure-plate-level-1-trigger-support
item_index: '03'
item_name: Pressure Plate (Level 1 Trigger Support)
scc:
  - mcdm.monsters.v1:dynamic-terrain.mechanism:pressure-plate-level-1-trigger-support
scdc:
  - 1.1.1:4.1:03
source: mcdm.monsters.v1
type: dynamic-terrain/mechanism
---

###### Pressure Plate (Level 1 Trigger Support)

This mechanism acts as a trigger for another linked mechanism, and is skillfully hidden from view in the floor.

- **EV:** 2
- **Stamina:** -
- **Size:** Any area
- **Typical Space:** One square, up to a 4 x 4-square area
- **Link:** A pressure plate is linked to another mechanism that it activates when triggered.

<!-- -->
> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a pressure plate can make an **Agility test**.
>
> - **≤11:** The creature triggers the pressure plate.
> - **12-16:** The pressure plate is deactivated but the creature is slowed (EoT).
> - **17+:** The pressure plate is deactivated and doesn't trigger.

<!-- -->
> ❕ **Activate**
>
> The pressure plate is calibrated to be triggered by creatures or objects of a particular size. The pressure plate triggers when a creature or object of the appropriate size enters its area.
>
> **Effect:** The linked mechanism is activated. A pressure plate automatically resets and can be triggered repeatedly.

<!-- -->
> ⭐️ **Upgrade**
>
> **Tripwire (−1 EV)** The pressure plate is a tripwire, which can trigger once and must be manually reset. A concealed tripwire can be discovered with an **easy Intuition test**.

<!-- -->
> ⭐️ **Hidden**
>
> The pressure plate is hidden until triggered or detected.
