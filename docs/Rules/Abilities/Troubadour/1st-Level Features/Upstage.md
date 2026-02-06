---
action_type: Maneuver
class: troubadour
cost: 3 Drama
cost_amount: 3
cost_resource: Drama
distance: Self; see below
feature_type: ability
file_basename: Upstage
file_dpath: Abilities/Troubadour/1st-Level Features
flavor: As you bob and weave through the crowd, you can't help but leave the audience wanting more.
item_id: upstage-3-drama
item_index: '04'
item_name: Upstage (3 Drama)
keywords:
  - Melee
  - Strike
  - Weapon
level: 1
scc:
  - mcdm.heroes.v1:feature.ability.troubadour.1st-level-feature:upstage-3-drama
scdc:
  - 1.1.1:11.2.3.1:04
source: mcdm.heroes.v1
target: Self
type: feature/ability/troubadour/1st-level-feature
---

###### Upstage (3 Drama)

*As you bob and weave through the crowd, you can't help but leave the audience wanting more.*

| **Melee, Strike, Weapon** | **Maneuver** |
| ------------------------- | -----------: |
| **📏 Self; see below**    |  **🎯 Self** |

**Effect:** You shift up to your speed. You make one power roll that targets each enemy you move adjacent to during this shift.

**Power Roll + Agility or Presence:**

- **≤11:** [Taunted](%7BREL_PATH_PREFIX%7DRules/Conditions/Taunted%7BREL_PATH_SUFFIX%7D) (EoT); A < WEAK, [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D)
- **12-16:** [Taunted](%7BREL_PATH_PREFIX%7DRules/Conditions/Taunted%7BREL_PATH_SUFFIX%7D) (EoT); A < AVERAGE, [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D)
- **17+:** [Taunted](%7BREL_PATH_PREFIX%7DRules/Conditions/Taunted%7BREL_PATH_SUFFIX%7D) (EoT); A < STRONG, [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D) and can't stand (EoT)
