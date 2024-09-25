Draw Steel Compendium is an independent product published under the DRAW STEEL Creator License and is not affiliated with MCDM Productions, LLC. DRAW STEEL © 2024 MCDM Productions, LLC.

# Director Reference

This document serves as a quick-lookup tool for rules with a primary focus on being the destination of links throughout notes, session prep, Screens, etc.

## Characteristics

| Characteristic | Description                          |
| -------------- | ------------------------------------ |
| Might          | Physical strength                    |
| Agility        | Physical coordination and nimbleness |
| Reason         | Mental acumen and education          |
| Intuition      | Observation and instinct             |
| Presence       | Force of personality                 |

## Skills

### Crafting

- Alchemy
- Architecture
- Blacksmithing
- Fletching
- Forgery
- Jewelry
- Mechanics
- Tailoring

### Exploration

- Climb
- Drive
- Endurance
- Gymnastics
- Heal
- Jump
- Lift
- Navigate

### Interpersonal

- Brag
- Empathize
- Flirt
- Gamble
- Handle Animals
- Interrogate
- Intimidate
- Lead
- Lie
- Music
- Perform
- Persuade
- Read Person

### Intrigue

- Alertness
- Conceal Object
- Disguise
- Eavesdrop
- Escape Artist
- Hide
- Pick Lock
- Pick Pocket
- Sabotage
- Search,
- Sneak
- Track

### Lore

- Culture
- Criminal Underworld
- History
- Magic
- Monsters
- Nature
- Psionics
- Religion
- Rumors
- Society
- Timescape

## Power Roll

`2d10 + Characteristic + 2 (Skill) ± 2 (Edge/Bane) + Bonuses`

- [[#Double Edge]] and [[#Double Bane]] shift tier up or down
- Nat 19-20: Extra Action and Auto tier-3 regardless of modifiers

### Mixed Edges and Banes

- Add all [[#Edge|Edges]] (max 2) as "Effective Edges"
- Add all [[#Bane|Banes]] (max 2) as "Effective Banes"
- Subtract Effective Banes from Effective Edges
- Ex: 3 Edges and 1 Bane results in a single [[#Edge]]

### Edge

- `+2` to [[#Power Roll]]
- Also see [[#Double Edge]] and [[#Mixed Edges and Banes]]

### Double Edge

- Bump up to next tier in [[#Power Roll]]
- Also see [[#Edge]] and [[#Mixed Edges and Banes]]

### Bane

- `-2` to [[#Power Roll]]
- Also see [[#Double Bane]] and [[#Mixed Edges and Banes]]

### Double Bane

- Bump down to previous tier in [[#Power Roll]]
- Also see [[#Bane]] and [[#Mixed Edges and Banes]]

## Tests

### Easy Test

```ds-pr
name: Easy Test
t1: Failure
t2: Success
t3: Success + reward
```

### Medium Test

```ds-pr
name: Medium Test
t1: Failure + consequence
t2: Success + consequence
t3: Success 
Nat 19-20: Success + reward
```

### Hard Test

```ds-pr
name: Medium Test
t1: Failure + consequence
t2: Failure
t3: Success 
Nat 19-20: Success + reward
```

### Consequence

- Default Consequences
	- +2 [[#Villain Power|Villain Power]]
	- Hero takes `1d6 damage`

### Reward

- Default Reward: [[#Hope Token]]

### Assist

```ds-pr
name: Assist on a Test
t1: Make things worse, Test takes a Bane
t2: Grant an Edge on Test
t3: Grant a Double-Edge on Test
```

## Montage Test

- Set the scene, describe the various challenges
- 1/round: Each hero makes [[#Test]], [[#Assist]], use item, use ability, etc or do nothing
- Each Test has its own difficulty
- Tests can auto-succeed, have [[#Edge|Edges]], or take [[#Bane|Banes]]
- [[#Villain Power|Villain Points]] and [[#Hope Token|Hope Tokens]] are granted as normal
- Each character cant use same [[#Skills|Skill]] twice (by default)
- Cant Test against the same challenge twice (by default)
- Ends after 2 rounds or when success/failure limit is reached

| Difficulty | Success Limit | Failure Limit       |
| ---------- | ------------- | ------------------- |
| Easy       | 5 (`pc`)      | 5 (`pc`)            |
| Moderate   | 6 (`pc + 1`)  | 4 (`pc - 1`, min 2) |
| Hard       | 7 (`pc + 2`)  | 3 (`pc - 2`, min 2) |

`pc` = Player Count

| Montage Outcome | Condition                                     | Description                                                                                   |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Total Success   | Achieve Success Limit                         | Achieve goal. 1 [[#Victories]] for easy/moderate Montage Test, 2 [[#Victories]] for hard test |
| Partial Success | Finish with 2 more Successes than Failures    | Achieve goal, but with complication or cost. 1 [[#Victories]] for moderate/hard Montage Test  |
| Total Failure   | Finish with 1 or less Successes than Failures | Don't achieve goal, but story doesn't come to a halt.                                         |

## Resistance Roll

#TODO

## Initiative

- Creatures not ready are [[#Surprised]]
- If all creatures on one side are Surprised, other side goes first
- Otherwise, roll `dice: d10`: Heroes go first on 6+

### Surprised

- Creatures caught off guard at beginning of encounter
- Lasts until end of first round
- No [[#Triggered Action]] nor [[#Free Triggered Action|Free Triggered Actions]]
- Attacks and Damaging AoEs against have [[#Edge]]
- [[#Bane]] on [[#Resistance Roll|Resistance Rolls]]

## Turn

- Player gets 1 [[#Action]], 1 [[#Maneuver]], and 1 [[#Movement]]
	- Unlimited [[#Free Maneuver|Free Maneuvers]]
- [[#Action]] can convert to [[#Maneuver]] or [[#Movement]]
- [[#Movement]] can be split up

## Triggered Action

#TODO

## Free Triggered Action

- Same rules as [[#Triggered Action]], but unlimited

## Opportunity Attack

- Cost: [[#Free Triggered Action]]
- When creature within [[#Melee Free Strike]] [[#Reach]] moves out of it without [[#Shift|Shifting]]
- Make [[#Melee Free Strike]] against creature
- Cannot have [[#Bane]] on the attack

## Flanking

- [[#Edge|Edge]] on melee attacks
- Line from center of space to center of ally
	- Must pass through 2 corners or 2 sides of enemy

## Falling

- Trigger for falls 2 squares or more
- Damage = `2 * (squares - Agility Score)` 
- Land [[#Prone]] if damaged
- Landing on creature
	- They take same damage
	- You land [[#Prone]] in nearest unoccupied space of choice
- Falling into 1+ square of liquid: reduce height by 4 squares
- Downward [[#Forced Movement]] is considered falling
- 100 squares in the first round, 100 squares at end of each subsequent round

## Difficult Terrain

- Costs 1 additional movement to move into a square of Difficult Terrain

## High Ground

- Gain an [[#Edge|Edge]] on Attacks
- Bottom of your space must be above the target's space

## Weakness

- Increase damage by `X` amount
- Applies to each instance of damage of the Weakness type
- `damage weakness X` applies to all damage types
- Applied before [[#Immunity]]

## Immunity

- Reduce damage by `X` amount
- Applies to each instance of damage of the Immunity type
- `all` means they take no damage of that type
- Applied last
- Doesn't stack, use highest Immunity only

## Hide and Sneak

### Cover

- Obstructions grant [[#Bane]] on attacks and AoE effects
- Obstructions block at least 1/2 of their form

### Concealment

- Grant [[#Bane]] on Attacks
- Effects that fully obscure a creature, but offer no protection
- Concealed creatures can be targeted (unless [[#Hidden]])

### Invisibility

- Always have [[#Concealment]]
- Can be targeted (unless also [[#Hidden]])
- [[#Tests]] to find [[#Hidden]] + Invisible creature takes a [[#Bane]]

### Hidden

- See [[#Hide]] to become Hidden with a [[#Maneuver]]
- When Hidden from creature
	- Gain [[#Edge|Edge]] on attacks against them
	- They can't target you with attacks
- No longer Hidden from creature if
	- No longer have [[#Cover]] and [[#Concealment]]
	- Use ability
	- Interact with enemy
	- Move without [[#Sneaking]]
	- Make noise or reveal yourself
- Can be [[#Search for Hidden Creatures|searched for]]

### Sneaking

- Move at half speed
- Must end movement in [[#Cover]] or [[#Concealment]]
- Make an Agility [[#Tests|Test]] to remain [[#Hidden]]

## Action

- Reminder: Can convert [[#Action]] into [[#Movement]] or [[#Maneuver]]

Common Actions:

- [[#Catch Breath]]
- [[#Charge]]
- [[#Defend]]
- [[#Free Strike]]
- [[#Heal]]

### Catch Breath

- Cost: [[#Action]] + 1 [[#Recovery]]
- Gain 1/3 max stamina
- Gain effects of the [[#Defend]] action (Attacks have [[#Double Bane]])
- Cannot use while [[#Dying]]

### Charge

- Cost: [[#Action]]
- Move up to Speed, make Melee [[#Free Strike]]
- Cannot [[#Shift]]

### Defend

- Cost: [[#Action]]
- Attacks against you have [[#Double Bane]]
- No benefit if a creature is [[#Taunted]] by you

### Free Strike

#### Melee Free Strike

```ds-pr
name: Melee Weapon Free Strike
keywords: Attack, Melee, Weapon
type: Action
distance: Reach
target: 1 creature or object
t1: 2 damage
t2: 6 damage
t3: 9 damage
```

- Used in [[#Opportunity Attack]], etc
- Kit can modify these stats
- Made with unarmed strike or improvised weapon
- Damage type can change based on improvised weapon

#### Ranged Free Strike

```ds-pr
name: Ranged Weapon Free Strike
keywords: Attack, Ranged, Weapon
type: Action
distance: Ranged 5
target: 1 creature or object
t1: 2 damage
t2: 5 damage
t3: 8 damage
```

- Kit can modify these stats
- Made with improvised weapon
- Damage type can change based on improvised weapon

### Heal

- Cost: [[#Action]]
- Adjacent ally either
	- Expends their [[#Recovery]] and gains 1/3 stamina
	- Makes [[#Resistance Roll]] against a `(resistance ends)` effect

### Use additional Movement or Maneuver

- Can exchange your [[#Action]] for an additional [[#Movement]] or [[#Maneuver]]

## Free Maneuver

- Same rules as [[#Maneuver|Maneuvers]], but unlimited

## Maneuver

- Reminder: Can convert [[#Action]] into [[#Movement]] or [[#Maneuver]]

Common Maneuvers:

- [[#Aid Attack]]
- [[#Drink Potion]]
- [[#Escape Grab]]
- [[#Grab]]
- [[#Hide]]
- [[#Knockback]]
- [[#Make or Assist on a Test]]
- [[#Standup]]
- [[#Search for Hidden Creatures]]
- [[#Knock off a Creature that Climbed You]]

### Aid Attack

- Cost: [[#Maneuver]]
- Choose an enemy within reach
- Grant [[#Edge|Edge]] to an ally's next attack against that creature before your next turn

### Drink Potion

- Cost: [[#Maneuver]]
- Drink or administer a potion to an adjacent creature.

### Escape Grab

- Cost: [[#Maneuver]]

```ds-pr
name: "Escape Grab: Might or Agility Resistance Roll"
t1: Fail to escape
t2: Escape, but grabber can [[#Free Strike]] against you
t3: Escape
notes: "[[#Bane]] if grabber is larger size"
```

### Grab

- Cost: [[#Maneuver]]
- Target must be same size or smaller and adjacent
- Can only grab one creature at a time
- Also see [[#Grabbed]]

```ds-pr
name: Grab a creature
roll: Power Roll + Might
t1: Fail to grab
t2: "Choose to grab, but target gets [[#Free Strike]] OR don't grab"
t3: Grab the creature
note: "[[#Edge]] if target is smaller"
```

- When you have successfully [[#Grabbed]] a creature
	- When you move, you bring the grabbed creature with you
		- If their [[#Weight]] is greater than yours, your speed is halved
	- You can "place" the [[#Grabbed]] creature in an adjacent square with a [[#Maneuver]]
	- You can end the Grab at any time (no Action)
		- (Speculation) the previously [[#Grabbed]] creature is placed in an adjacent square of their choice

### Hide

- Cost: [[#Maneuver]]
- Become [[#Hidden]]
- Must have [[#Cover]] or [[#Concealment]]
- Foe cannot observe you hiding
- In combat, you automatically hide
- Outside combat, you may need a Hide ([[#Skills|Skill]]) [[#Tests|Test]]
- See [[#Hide and Sneak]] for more details

### Knockback

- Cost: [[#Maneuver]]
- Target must be same size or smaller and adjacent

```ds-pr
name: "Knockback a creature: Might Test"
t1: Push 1
t2: Push 2
t3: Push 3
note: "[[#Edge]] if target is smaller"
```

### Make or Assist on a Test

- Cost: [[#Maneuver]]
- Most [[#Tests]] and [[#Assist|Assists]] on Tests are a Maneuver
- Complex or time-consuming Tests may take an [[#Action]] or more
- Tests that require no time are usually [[#Free Maneuver|Free Maneuvers]]

### Stand up

- Cost: [[#Maneuver]]
- Stand up if you are [[#Prone]] or make adjacent creature stand up

### Search for Hidden Creatures

 - Cost: [[#Maneuver]]
- Must be within 10 squares
- Must have [[#Line of Effect]]

```ds-pr
name: Search for [[#Hidden]] creature
roll: Power Roll + Intuition
t1: Find Hidden **creatures** with Agility 0 or lower without Hide Skill
t2: Find Hidden creature without the Hide Skill
t3: Find all Hidden creatures
```

### Knock off a Creature that Climbed You

- Cost: [[#Maneuver]]
- The climber/rider must make a [[#Tests|test]]:

```ds-pr
name: Avoid being knocked off a creature
roll: Power Roll + Might or Agility
t1: Fall off into adjacent unoccupied space using normal falling rules
t2: Slide down creature in adjacent unoccupied space, no damage, no prone
t3: Continue to hold onto creature
indent: 1
```

## Movement

- Cannot move more than speed, even if an ability allows them to
- Reminder: Can convert [[#Action]] into [[#Movement]] or [[#Maneuver]]

### Shift

- Move up to half max speed
- Cannot be targeted by [[#Opportunity Attack]]
- Whenever allowed to move (not [[#Forced Movement|forced]])

### Burrow

- Can move through dirt horizontally or vertically
- No need to be concerned with breath
- Cant move through solid stone, etc

### Climb

- Climb Speed: Can move vertically and horizontally across surfaces at full speed
- Otherwise: Each square costs 2 movement
- If difficult, a Might [[#Tests|Test]] may be required
	- On failure: unable to move, but movement is not expended

### Climb a Creature

#TODO is this a maneuver?

```ds-pr
name: Climb an unwilling creature
roll: Power Roll + Might or Agility
t1: Fail to climb creature and it may make a Free Strike against you
t2: Fail to climb the creature
t3: Climb the creature
```

- Creature must be larger size than you
- Gain an [[#Edge|Edge]] on melee attacks against a creature you climb/ride
- Once you climb a creature, they can attempt to [[#Knock off a Creature that Climbed You|knock you off]]
- If knocked [[#Prone]] while climbing/riding, [[#Falling|fall]] and land [[#Prone]] in unoccupied adjacent space

### Swim

- Swim Speed: Can move through liquids at full speed
- Otherwise: Each square costs 2 movement
- If difficult, a Might [[#Tests|Test]] may be required
	- On failure: unable to move, but movement is not expended

### Jump

- When allowed to move
- Long jump
	- Up to Might or Agility squares long
	- 1 square high
- Running Long Jump
	- Move 2+ squares in straight line before jump
	- Jump 1 additional square long
	- 2 additional squares high
- Cannot jump longer than movement allows
- Can attempt to jump farther with an [[#Easy Test|Easy Might Test]]:

```ds-pr
name: Jump farther than normal
roll: Power Roll + Might
t1: Jump no additional squares
t2: Jump 1 additional square
t3: Jump 2 additonal squares
indent: 1
```

### Crawl

- If [[#Prone]], movement costs 1 additional movement per square

### Fly

- Can move speed horizontally and vertically
- Can hover midair
- Fall [[#Prone]] if knocked [[#Prone]] or speed reduced to 0

### Teleport

- Doesn't provoke [[#Opportunity Attack|Opportunity Attacks]]
- Bypass obstacles
- Must have [[#Line of Effect]] from source location to destination
- Destination cannot be occupied by object or creature
- Does not use your movement
- If you're [[#Prone]]:
	- If you teleport, can choose to no longer be [[#Prone]]
	- If someone teleports you: remain [[#Pron]]
- Ends [[#Grabbed]] and [[#Restrained]] [[#Conditions]]

## Forced Movement

- Can move fewer squares than indicated.
- Ignores [[#Difficult Terrain]] and doesn't provoke [[#Opportunity Attacks]].
- Target affected by damaging/effect terrain as if they moved willingly.
- Ignores falling rules until forced movement is finished; then apply [[#Falling]] rules

### Push X

- [[#Forced Movement]] X squares in straight line away from you
- Vertical only allowed if `vertical` keyword is included
- Sloped movement allowed if 1 square or less vertically

### Pull X

- [[#Forced Movement]] X squares in straight line towards from you
- Vertical only allowed if `vertical` keyword is included
- Sloped movement allowed if 1 square or less vertically

### Slide X

- [[#Forced Movement]] X squares in any direction, not vertical

### Stability

- Reduce [[#Forced Movement]] squares up to Stability score

### Slamming Into Creatures

- [[#Forced Movement]] into another creature:
	- Both take 1 damage per remaining square
- [[#Forced Movement]] of an object into a creature:
	- Creature takes 1 damage per remaining square
- Take damage once, regardless of size
- Attacks/Effects that also [[#Forced Movement|force movement]]: creatures slammed into by the corpse still take damage (Director's discretion)
- You can [[#Pull X|Pull]] or [[#Slide X|Slide]] a creature into yourself

### Forced Movement of Objects

- If creature is lighter than the object, use [[#Slamming Into Objects]] rules
- Otherwise, use [[#Hurling Through Objects]] rules

#### Slamming Into Objects

- Conditions 
	- [[#Forced Movement]] into a stationary object
	- Creature is lighter than the object
		- (if equal or heavier, use [[#Hurling Through Objects]] rules)
- Movement ends 
- Creature takes 1 damage per remaining square.
- If downward, apply [[#Falling]] rules

#### Hurling Through Objects

- Conditions 
	- [[#Forced Movement]] into a stationary object
	- Creature weight is equal-to or heavier than the object
		- (if lighter, use [[#Slamming Into Objects]] rules)
- Movement can continue if any remains after object destruction

| Material | Squares of [[#Forced Movement]] to destroy 1 square of material | Damage to creature |
| -------- | --------------------------------------------------------------- | ------------------ |
| Glass    | 1                                                               | 1                  |
| Wood     | 3                                                               | 3                  |
| Stone    | 6                                                               | 6                  |
| Metal    | 9                                                               | 9                  |

### Damage to objects during [[#Forced Movement]]

| Material       | Stamina per 1 square of object |
| -------------- | ------------------------------ |
| Wood           | 3                              |
| Stone          | 6                              |
| Metal          | 9                              |
| Other, fragile | (Any damage destroys)          |

## Conditions

Official Conditions

- [[#Bleeding]]
- [[#Dazed]]
- [[#Frightened]]
- [[#Grabbed]]
- [[#Prone]]
- [[#Restrained]]
- [[#Slowed]]
- [[#Weakened]]

Pseudo-Conditions

- [[#Cover|Covered]]
- [[#Concealment|Concealed]]
- [[#Death]]
- [[#Defend|Defending]]
- [[#Dying]]
- [[#Falling]]
- [[#Flanking]]
- [[#Hidden]]
- [[#High Ground]]
- [[#Invisibility|Invisible]]
- [[#Sneaking]]
- [[#Unconscious]]
- [[#Winded]]

### Bleeding

- Can't regain Stamina

### Dazed

- On your turn, can only do one of [[#Action]], [[#Maneuver]], or [[#Movement]]
- Cannot use [[#Triggered Action]], [[#Free Triggered Action]], or [[#Free Maneuver]]

### Frightened

- [[#Attack|Attacks]] against source of fear take a [[#Bane]]
- Creature that Frightened you has [[#Edge]] on their [[#Attack|Attacks]]
- Cant willingly move closer to source of fear if you know location
- When Frightened twice, new source replaces the old

### Grabbed

- Speed is 0
- Can't be [[#Forced Movement|force moved]]
- Your [[#Attack|Attacks]] take a [[#Bane]] when they don't target the Grabber
- If you [[#Teleport]] or the Grabber is [[#Forced Movement|force moved]] to a non-adjacent square, you are no longer Grabbed
- Also see [[#Grab]] and [[#Escape Grab]]

### Prone

- Flat on ground
- Attacks you make have a [[#Bane]]
- Melee Attacks against you have an [[#Edge]]
- Must [[#Crawl]] to move
- Cant [[#Climb]], [[#Swim]], [[#Jump]], or [[#Fly]]
- If climbing, jumping or flying when knocked Prone, you [[#Falling|fall]]
- Can [[#Stand up]] ([[#Maneuver]])
- Can intentionally fall Prone as [[#Free Maneuver]]
	- Get up with [[#Free Maneuver]] (only if voluntarily prone)

### Restrained

- Speed is 0
- Can't be [[#Forced Movement|Force Moved]]
- Your [[#Attack|Attacks]] take a [[#Bane]]
- [[#Attack|Attacks]] and [[#Area of Effect]] abilities against you have an [[#Edge]]
- You have a [[#Bane]] on Might and Agility [[#Resistance Roll|Resistance Rolls]]
- If you [[#Teleport]] you are no longer Restrained

### Slowed

- Speed is reduced to `2`

### Taunted

- [[#Double Bane]] on [[#Attack|Attacks]] that don't include the Taunter
- When Taunted twice, new condition replaces the old

### Weakened

- All ability [[#Power Roll|Power Rolls]] and [[#Tests]] have a [[#Bane]]
	- Not [[#Resistance Roll|Resistance Rolls]]

### Unconscious

- Can't take [[#Action]], [[#Maneuver]], [[#Free Maneuver]], [[#Triggered Action]], or [[#Free Triggered Action]]
- Speed is 0
- Unaware of your surroundings
- You are [[#Prone]]
- [[#Attack|Attacks]] against you have a [[#Double Edge]]
- When you wake up from unconsciousness, can stand up with [[#Free Maneuver]]
	- Otherwise, use [[#Stand up]] rules

## Attack

#TODO - keep this?

- An ability with the `Attack` keyword
- [[#Area of Effect]] are not Attacks

## Knock Unconscious

- Whenever a damaging would kill them, attacker can choose to knock them [[#Unconscience]]
- If knocked [[#Unconscience]] in this way, they die if any damage is taken
- Creatures remain [[#Unconscience]] for 1 hour
	- Then regain 1 Stamina and regain consciousness
- Heroes remain [[#Unconscience]] for 1 hour
	- Then they can spend a [[#Recovery]] to heal and regain consciousness
	- If no [[#Recovery|Recoveries]] are available, they remain [[#Unconscience]] until they complete a [[#Respite]]

## Area of Effect

#TODO
- [[#Area of Effect]] are not [[#Attack|Attacks]]

## Effects

#TODO

## Line of Effect

#TODO

## Mounted Combat

#TODO

## Temporary Stamina

- Temp Stamina is lost first
- No upper limit
- Restoring Stamina does not restore Temporary Stamina
- Does not stack, pick greater value
- Lost when you finish a [[#Respite]]
- Not used when calculating Max Stamina

![[#Stamina Example]]

## Recovery

- [[#Catch Breath]] (Action + your Recovery): gain 1/3 max stamina
- [[#Heal]] (Action + their Recovery): adjacent ally gains 1/3 stamina
- Recovery Value: 1/3 max stamina
- Can be spent freely in non-dangerous situations
- Regain all Recoveries after a [[#Respite]]
- Director-controlled creatures dont have Recoveries
	- But they may still heal 1/3 max Stamina if creature uses an ability that allows then to use a Recovery

## Winded 

- If Stamina is less than or equal to half of max Stamina
- Others know when you are Winded

## Dying

- Considered Dying if Stamina is less than 0
- Can't take the [[#Catch Breath]] Action in combat
- Lose `dice: 1d6` Stamina whenever you
	- Make Might or Agility [[#Tests|Test]]
	- Use an [[#Action]] or [[#Triggered Action]]
- Stamina loss cannot be prevented
- You [[#Death|Die]] if Stamina reaches negative your [[#Winded]] value

![[#Stamina Example]]

## Death

- You die if you Stamina is less than or equal to negative your [[#Winded]] value
	- (Negative 1/2 max Stamina)
- Cannot be brought back to life except through special items
- Director-controlled creatures die when their Stamina reaches 0

![[#Stamina Example]]

## Respite

- 24 hours uninterrupted
- Restore all [[#Recovery|recoveries]]
- [[#Victories]] convert to XP (See [[#Leveling]])

### Leveling

| Level | XP (~Victories) |
| ----- | --------------- |
| 1     | 0-9             |
| 2     | 10-24           |
| 3     | 25-39           |
| 4     | 40-54           |
| 5     | 55-69           |
| 6     | 70-84           |
| 7     | 85-99           |
| 8     | 100-114         |
| 9     | 115-129         |
| 10    | 130+            |

## Victories

- 1 Victory per challenge
	- Tough challenges (bosses) grant 2 Victories
- Converted to XP during [[#Respite]] (See [[#Leveling]])

## Hope Token

#TODO

## Villain Power

#TODO

## Negotiation

#TODO

## Languages

> [!info]- Language Connections and Hierarchy
> ![[Languages.png]]

## Weight

| Weight | Example Creature | Example Object    |
| ------ | ---------------- | ----------------- |
| 1      | Pixie            | Potato            |
| 2      | House cat        | Maul              |
| 3      | Polder           | Heavy Armor       |
| 4      | Human            | Wardrobe          |
| 5      | Ankheg           | Anvil             |
| 6      | Ogre             | Carriage          |
| 7      | Treant           | Sailboat          |
| 8      | Stone Giant      | Siege Tower       |
| 9      | Dragon           | Gallery           |
| 10     | Goxomoc          | Keep              |
| 11+    | None             | Too heavy to lift |

## Classes

- Censor
- Conduit *(in development)*
- Elementalist
- Fury
- Null *(in development)*
- Shadow
- Tactician
- Talent *(in development)*
- Troubadour *(in development)*

## %% Embeds %%

### %%Stamina Example%%

Example for Hero with 24 Max Stamina

```
    -12           0            12           24
     |------------|------------+------------|---------------
Dead      Dying       Winded                   Temp Stamina
```