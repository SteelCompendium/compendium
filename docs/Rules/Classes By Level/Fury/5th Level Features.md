---
file_basename: 5th Level Features
file_dpath: Classes By Level/Fury
item_id: 5th-level-features
item_index: '12'
item_name: 5th-Level Features
scc:
  - mcdm.heroes.v1:class.fury.level:5th-level-features
scdc:
  - 1.1.1:2.5.1:12
source: mcdm.heroes.v1
type: class/fury/level
---

### 5th-Level Features

As a 5th-level [fury](%7BREL_PATH_PREFIX%7DRules/Classes/Fury%7BREL_PATH_SUFFIX%7D), you gain the following features.

#### 5th-Level Aspect Feature

Your primordial aspect grants you a feature, as shown on the 5th-Level Aspect Features table.

###### 5th-Level Aspect Features Table

| Aspect     | Feature    |
| ---------- | ---------- |
| Berserker  | Bounder    |
| Reaver     | Unfettered |
| Stormwight | Stormborn  |

##### Bounder

Your [jump](%7BREL_PATH_PREFIX%7DRules/Movement/Jump%7BREL_PATH_SUFFIX%7D) distance and height double (see Movement Types in Chapter 10: Combat). Additionally, when you fall, you reduce the effective height of your fall by a number of squares equal to your [jump](%7BREL_PATH_PREFIX%7DRules/Movement/Jump%7BREL_PATH_SUFFIX%7D) distance for the purpose of determining damage and whether you land [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D) (see Falling in Chapter 10). You are not [prone](%7BREL_PATH_PREFIX%7DRules/Conditions/Prone%7BREL_PATH_SUFFIX%7D) after falling and landing on another creature.

##### Stormborn

You and each ally within 5 squares of you ignore negative effects from inclement weather, such as banes or environmental damage. Additionally, you can use the Blessing of Fortunate Weather feature as if you were a 1st-level [conduit](%7BREL_PATH_PREFIX%7DRules/Classes/Conduit%7BREL_PATH_SUFFIX%7D) (see 1st-Level Domain Feature in the [Conduit](%7BREL_PATH_PREFIX%7DRules/Classes/Conduit%7BREL_PATH_SUFFIX%7D) section).

##### Unfettered

At the start of your turn, you can end any [restrained](%7BREL_PATH_PREFIX%7DRules/Conditions/Restrained%7BREL_PATH_SUFFIX%7D) condition on you. Additionally, you have a double edge on tests made to escape being confined or imprisoned.

#### 9-Ferocity Ability

Choose one heroic ability from the following options, each of which costs 9 ferocity to use.

<!-- -->
> ###### Debilitating Strike (9 Ferocity)
>
> *You need just one blow to sabotage your target.*
>
> | **Melee, Strike, Weapon** |     **Main action** |
> | ------------------------- | ------------------: |
> | **📏 Melee 1**            | **🎯 One creature** |
>
> **Power Roll + Might:**
>
> - **≤11:** 10 + M damage; M < WEAK, [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) (save ends)
> - **12-16:** 14 + M damage; M < AVERAGE, [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) (save ends)
> - **17+:** 20 + M damage; M < STRONG, [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) (save ends)
>
> **Effect:** While [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) this way, the target takes 1 damage for every square they move, including from forced movement.

<!-- -->
> ###### My Turn! (9 Ferocity)
>
> *You quickly strike back at a foe.*
>
> | **Melee, Strike, Weapon** |             **Free triggered** |
> | ------------------------- | -----------------------------: |
> | **📏 Melee 1**            | **🎯 The triggering creature** |
>
> **Trigger:** A creature causes you to be winded or dying, or damages you while you are winded or dying.
>
> **Power Roll + Might:**
>
> - **≤11:** 6 + M damage
> - **12-16:** 9 + M damage
> - **17+:** 13 + M damage
>
> **Effect:** You can spend a Recovery.

<!-- -->
> ###### Rebounding Storm (9 Ferocity)
>
> *You knock around enemies like playthings.*
>
> | **Melee, Strike, Weapon** |                 **Main action** |
> | ------------------------- | ------------------------------: |
> | **📏 Melee 1**            | **🎯 Two creatures or objects** |
>
> **Power Roll + Might:**
>
> - **≤11:** 9 damage; push 3
> - **12-16:** 14 damage; push 5
> - **17+:** 19 damage; push 7
>
> **Effect:** When a target would end this forced movement by colliding with a creature or object, they take damage as usual, then are pushed the remaining distance away from the creature or object in the direction they came from. As long as forced movement remains, this effect continues if the target collides with another creature or object.

<!-- -->
> ###### To Stone! (9 Ferocity)
>
> *You channel the Primordial Chaos into blows that petrify your foe... literally.*
>
> | **Magic, Melee, Strike, Weapon** |     **Main action** |
> | -------------------------------- | ------------------: |
> | **📏 Melee 1**                   | **🎯 One creature** |
>
> **Power Roll + Might:**
>
> - **≤11:** 9 + M damage; M < WEAK, [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) (save ends)
> - **12-16:** 13 + M damage; M < AVERAGE, [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) (save ends)
> - **17+:** 18 + M damage; M < STRONG, [restrained](%7BREL_PATH_PREFIX%7DRules/Conditions/Restrained%7BREL_PATH_SUFFIX%7D) (save ends)
>
> **Effect:** While the target is [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) this way, any other effect that would make the target [slowed](%7BREL_PATH_PREFIX%7DRules/Conditions/Slowed%7BREL_PATH_SUFFIX%7D) instead makes them [restrained](%7BREL_PATH_PREFIX%7DRules/Conditions/Restrained%7BREL_PATH_SUFFIX%7D) by this ability. Additionally, a creature who fails the saving throw while [restrained](%7BREL_PATH_PREFIX%7DRules/Conditions/Restrained%7BREL_PATH_SUFFIX%7D) this way is petrified until they are given a supernatural cure or you choose to reverse the effect (no action required).
