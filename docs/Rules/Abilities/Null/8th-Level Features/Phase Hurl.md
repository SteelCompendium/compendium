---
action_type: Main action
class: 'null'
cost: 11 Discipline
cost_amount: 11
cost_resource: Discipline
distance: Melee 1
feature_type: ability
file_basename: Phase Hurl
file_dpath: Abilities/Null/8th-Level Features
flavor: You throw your foe out of phase with this manifold, causing them to harm other enemies as they return.
item_id: phase-hurl-11-discipline
item_index: '03'
item_name: Phase Hurl (11 Discipline)
keywords:
  - Melee
  - Psionic
  - Strike
  - Weapon
level: 8
scc:
  - mcdm.heroes.v1:feature.ability.null.8th-level-feature:phase-hurl-11-discipline
scdc:
  - 1.1.1:11.2.6.2:03
source: mcdm.heroes.v1
target: One creature
type: feature/ability/null/8th-level-feature
---

###### Phase Hurl (11 Discipline)

*You throw your foe out of phase with this manifold, causing them to harm other enemies as they return.*

| **Melee, Psionic, Strike, Weapon** |     **Main action** |
| ---------------------------------- | ------------------: |
| **📏 Melee 1**                     | **🎯 One creature** |

**Power Roll + Agility:**

- **≤11:** 9 + A damage; push 5; I < WEAK, [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) (save ends)
- **12-16:** 13 + A damage; push 7; I < AVERAGE, [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) (save ends)
- **17+:** 18 + A damage; push 10; I < STRONG, [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) (save ends)

**Effect:** The target and each creature or object they collide with from this forced movement takes psychic damage equal to the total number of squares the target was force moved. While the target is [dazed](%7BREL_PATH_PREFIX%7DRules/Conditions/Dazed%7BREL_PATH_SUFFIX%7D) this way, they see glimpses of creatures from other parts of the timescape.
