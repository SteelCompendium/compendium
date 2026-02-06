---
action_type: Main action
class: censor
cost: 5 Wrath
cost_amount: 5
cost_resource: Wrath
distance: Melee 1
feature_type: ability
file_basename: Arrest
file_dpath: Abilities/Censor/1st-Level Features
flavor: '"I got you, you son of a bitch."'
item_id: arrest-5-wrath
item_index: '06'
item_name: Arrest (5 Wrath)
keywords:
  - Magic
  - Melee
  - Strike
  - Weapon
level: 1
scc:
  - mcdm.heroes.v1:feature.ability.censor.1st-level-feature:arrest-5-wrath
scdc:
  - 1.1.1:11.2.7.1:06
source: mcdm.heroes.v1
target: One creature
type: feature/ability/censor/1st-level-feature
---

###### Arrest (5 Wrath)

*"I got you, you son of a bitch."*

| **Magic, Melee, Strike, Weapon** |     **Main action** |
| -------------------------------- | ------------------: |
| **📏 Melee 1**                   | **🎯 One creature** |

**Power Roll + Might:**

- **≤11:** 6 + M holy damage; [grabbed](%7BREL_PATH_PREFIX%7DRules/Conditions/Grabbed%7BREL_PATH_SUFFIX%7D)
- **12-16:** 9 + M holy damage; [grabbed](%7BREL_PATH_PREFIX%7DRules/Conditions/Grabbed%7BREL_PATH_SUFFIX%7D)
- **17+:** 13 + M holy damage; [grabbed](%7BREL_PATH_PREFIX%7DRules/Conditions/Grabbed%7BREL_PATH_SUFFIX%7D)

**Effect:** If the target makes a strike against a creature while [grabbed](%7BREL_PATH_PREFIX%7DRules/Conditions/Grabbed%7BREL_PATH_SUFFIX%7D) this way, you can spend 3 wrath to deal holy damage to them equal to your Presence score, then change the target of the strike to another target within the strike's distance.
