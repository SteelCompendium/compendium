---
file_basename: Bleeding
file_dpath: Conditions
item_id: bleeding
item_index: '01'
item_name: Bleeding
scc:
  - mcdm.heroes.v1:condition:bleeding
scdc:
  - 1.1.1:4:01
source: mcdm.heroes.v1
type: condition
---

##### Bleeding

While a creature is [bleeding](%7BREL_PATH_PREFIX%7DRules/Conditions/Bleeding%7BREL_PATH_SUFFIX%7D), whenever they use a main action, use a triggered action, or make a test or ability roll using Might or Agility, they lose Stamina equal to 1d6 + their level after the main action, triggered action, or power roll is resolved. This Stamina loss can't be prevented in any way, and only happens once per action.

You take damage from this condition when you use a main action off your turn. For example, a signature ability used as a free triggered action with the assistance of the [tactician](%7BREL_PATH_PREFIX%7DRules/Classes/Tactician%7BREL_PATH_SUFFIX%7D)'s Strike Now ability triggers the damage from the [bleeding](%7BREL_PATH_PREFIX%7DRules/Conditions/Bleeding%7BREL_PATH_SUFFIX%7D) condition.
