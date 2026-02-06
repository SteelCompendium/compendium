---
file_basename: Teleport
file_dpath: Movement
item_id: teleport
item_index: '05'
item_name: Teleport
scc:
  - mcdm.heroes.v1:movement:teleport
scdc:
  - 1.1.1:10:05
source: mcdm.heroes.v1
type: movement
---

##### Teleport

When a creature teleports, they move from one space to another space instantaneously. The following rules apply to teleporting:

- Teleporting doesn't provoke opportunity attacks or other effects that are triggered by a creature moving.
- When a creature teleports, they bypass any obstacles between the space they leave and their destination space.
- A creature teleporting themself must have line of effect to their destination space. A creature teleporting another creature must have line of effect from the space the [teleported](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) creature leaves and to their destination space.
- A teleporting creature's destination space can't be occupied by another creature or object.
- The effect that lets a creature [teleport](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) indicates how far they can [teleport](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D). That distance can be greater than the creature's speed.
- If a creature can [teleport](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) as part of their usual movement, they can use the Advance move action to [teleport](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) a number of squares up to their usual speed, unmodified by conditions or effects.
- If a creature teleports while [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D), they can be standing when they reach their destination space provided they are able to stand. If a [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D) creature is [teleported](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) by another creature, it is up to that creature whether the [teleported](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) creature remains [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D) or stands if they are able.
- If you [teleport](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) while affected by the [grabbed](%7BREL_PATH_PREFIX%7DRules/Conditions/Grabbed%7BREL_PATH_SUFFIX%7D) or [restrained](%7BREL_PATH_PREFIX%7DRules/Conditions/Restrained%7BREL_PATH_SUFFIX%7D) conditions, those conditions end for you.
- When a creature teleports, they must leave the space where they start and enter a new space. A creature can't [teleport](%7BREL_PATH_PREFIX%7DRules/Movement/Teleport%7BREL_PATH_SUFFIX%7D) to and from the same space.
