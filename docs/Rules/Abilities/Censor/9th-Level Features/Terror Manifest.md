---
action_type: Main action
class: censor
cost: 11 Wrath
cost_amount: 11
cost_resource: Wrath
distance: Ranged 10
feature_type: ability
file_basename: Terror Manifest
file_dpath: Abilities/Censor/9th-Level Features
flavor: '"I know what you fear."'
item_id: terror-manifest-11-wrath
item_index: '01'
item_name: Terror Manifest (11 Wrath)
keywords:
  - Magic
  - Ranged
  - Strike
level: 9
scc:
  - mcdm.heroes.v1:feature.ability.censor.9th-level-feature:terror-manifest-11-wrath
scdc:
  - 1.1.1:11.2.7.7:01
source: mcdm.heroes.v1
subclass: Exorcist
target: One creature
type: feature/ability/censor/9th-level-feature
---

###### Terror Manifest (11 Wrath)

*"I know what you fear."*

| **Magic, Ranged, Strike** |     **Main action** |
| ------------------------- | ------------------: |
| **📏 Ranged 10**          | **🎯 One creature** |

**Power Roll + Presence:**

- **≤11:** 7 + P psychic damage; P < WEAK, [frightened](%7BREL_PATH_PREFIX%7DRules/Conditions/Frightened%7BREL_PATH_SUFFIX%7D) (save ends)
- **12-16:** 10 + P psychic damage; P < AVERAGE, [frightened](%7BREL_PATH_PREFIX%7DRules/Conditions/Frightened%7BREL_PATH_SUFFIX%7D) (save ends)
- **17+:** 13 + P psychic damage; P < STRONG, [frightened](%7BREL_PATH_PREFIX%7DRules/Conditions/Frightened%7BREL_PATH_SUFFIX%7D) (save ends)

**Effect:** While [frightened](%7BREL_PATH_PREFIX%7DRules/Conditions/Frightened%7BREL_PATH_SUFFIX%7D) this way, if a target who is a leader or solo creature is winded, they take an extra 25 psychic damage. If a target [frightened](%7BREL_PATH_PREFIX%7DRules/Conditions/Frightened%7BREL_PATH_SUFFIX%7D) this way is not a leader or solo creature and is winded, they are reduced to 0 Stamina.
