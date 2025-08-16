---
file_basename: Switch
file_dpath: Dynamic Terrain/Mechanisms
item_id: switch-level-1-trigger-support
item_index: '07'
item_name: Switch (Level 1 Trigger Support)
scc:
  - mcdm.monsters.v1:dynamic-terrain.mechanism:switch-level-1-trigger-support
scdc:
  - 1.1.1:4.1:07
source: mcdm.monsters.v1
type: dynamic-terrain/mechanism
---

###### Switch (Level 1 Trigger Support)

Set into any surface, this mechanism acts as a trigger for another linked mechanism.

- **EV:** 1
- **Stamina:** 3
- **Size:** 1T
- **Link:** A switch is linked to another mechanism that it activates when triggered.

<!-- -->
> 🌀 **Deactivate**
>
> As a maneuver, a creature adjacent to a switch can make an **Agility test**.
>
> - **≤11:** The creature triggers the switch.
> - **12-16:** The switch is deactivated but the creature is slowed (EoT).
> - **17+:** The switch is deactivated and doesn't trigger.

<!-- -->
> ❕ **Activate**
>
> A creature adjacent to the switch uses a maneuver to trigger it.
>
> **Effect:** The linked mechanism is activated. A switch automatically resets and can be triggered repeatedly.

<!-- -->
> ⭐️ **Upgrade**
>
> **Concealed (+1 EV)** The switch is hidden.
