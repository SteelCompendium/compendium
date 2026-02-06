---
action_type: Main action
class: elementalist
cost: 11 Essence
cost_amount: 11
cost_resource: Essence
distance: Ranged 10
feature_type: ability
file_basename: Unquenchable Fire
file_dpath: Abilities/Elementalist/8th-Level Features
flavor: You let fly a fiery missile braided with pure primal energy.
item_id: unquenchable-fire-11-essence
item_index: 09
item_name: Unquenchable Fire (11 Essence)
keywords:
  - Fire
  - Magic
  - Ranged
  - Strike
level: 8
scc:
  - mcdm.heroes.v1:feature.ability.elementalist.8th-level-feature:unquenchable-fire-11-essence
scdc:
  - 1.1.1:11.2.9.2:09
source: mcdm.heroes.v1
target: One enemy or object
type: feature/ability/elementalist/8th-level-feature
---

###### Unquenchable Fire (11 Essence)

*You let fly a fiery missile braided with pure primal energy.*

| **Fire, Magic, Ranged, Strike** |            **Main action** |
| ------------------------------- | -------------------------: |
| **📏 Ranged 10**                | **🎯 One enemy or object** |

**Power Roll + Reason:**

- **≤11:** 13 + R fire damage; I < WEAK, [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) (save ends)
- **12-16:** 18 + R fire damage; I < AVERAGE, [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) (save ends)
- **17+:** 25 + R fire damage; I < STRONG, [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) (save ends)

**Effect:** This damage ignores immunity.
