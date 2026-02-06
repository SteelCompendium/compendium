---
file_basename: Vertical
file_dpath: Movement
item_id: vertical
item_index: 08
item_name: Vertical
scc:
  - mcdm.heroes.v1:movement:vertical
scdc:
  - 1.1.1:10:08
source: mcdm.heroes.v1
type: movement
---

##### Vertical

If a forced movement effect has the word "vertical" in front of it, then the forced movement can move a target up or down in addition to horizontally. For example, if a forced movement effect says "vertical push 5," then a creature targeted by the effect can be pushed up to 5 squares in any direction, as long as the forced movement is a straight line.

If a creature who can't [fly](%7BREL_PATH_PREFIX%7DRules/Movement/Fly%7BREL_PATH_SUFFIX%7D) is left in midair at the end of a vertical forced move, they fall. Forced movement made against a creature who is flying is always a vertical forced move, whether or not the effect specifies it.

Though you can't freely push, pull, or slide a target up and down unless that forced movement specifies "vertical," you can move them along a physical slope such as a hill or staircase. For a target to be force moved along a slope, each square of the slope can be no more than 1 square higher or lower than the previous square.
