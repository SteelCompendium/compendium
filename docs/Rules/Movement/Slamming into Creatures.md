---
file_basename: Slamming into Creatures
file_dpath: Movement
item_id: slamming-into-creatures
item_index: '02'
item_name: Slamming into Creatures
scc:
  - mcdm.heroes.v1:movement:slamming-into-creatures
scdc:
  - 1.1.1:10:02
source: mcdm.heroes.v1
type: movement
---

##### Slamming into Creatures

When you force move a creature into another creature, the movement ends and both creatures take 1 damage for each square remaining in the first creature's forced movement. You can also force move an object into a creature. The object's movement ends, and the creature takes 1 damage for each square remaining in the object's forced movement.

It's possible to move a creature or object of a larger size into several creatures of a smaller size at the same time. When this happens, the larger creature in the collision takes damage only once, not once for each smaller creature they slam into.

If a creature is killed by damage from an ability or effect that also force moves them, a second creature they are slammed into still takes damage unless the Director deems otherwise.

You can force move another creature into yourself with a pull or a slide.
