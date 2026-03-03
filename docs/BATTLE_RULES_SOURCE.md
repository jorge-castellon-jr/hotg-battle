# Battle Rules Source (HeroesGrid)

## Plan note: Energy on play (item 1)

Use **Option A**: deduct energy when the user commits to Attack (e.g. in `playCardAndEnterBattle`). **UI:** Disable the Attack button when `energy < card.energy` (or effective cost). When disabled, show **"Not enough energy"** on the button or next to it so the user knows why.

---

## Rulebook references

Rules for battle automations are taken from the **sibling repo HeroesGrid**:

- **Official rulebook:** `HeroesGrid/apps/web/content/rulebooks/official-rulebook.md`
- **FAQ:** `HeroesGrid/apps/web/content/rulebooks/faq.md`

## Energy when playing a card

**Rulebook — Ranger Turns:**  
"The active Ranger may play 1 attack or maneuver from their hand, **spending energy tokens from the shared energy pool equal to that card's energy cost**. The effects of the card are then resolved, and the active Ranger places the card in their own discard pile."

So: **spend energy when playing** → then resolve card effects.

## Variable cost (X)

Some cards have energy cost "X"; the player chooses how much to spend.  
**Blade Blaster (FAQ):** Damage = **energy spent** to play it, not the card's printed cost. Cost modifiers (e.g. Dagger Solo, Rita's Witch's Curse) do **not** change Blade Blaster's damage.

## Attacks and targeting

**Rulebook — Attacks / Dealing hits:**  
"When you play an attack, **choose 1 enemy card as the target** of the attack." Roll dice, then deal hits to that enemy card.  
Target must be chosen **when playing** the attack.

## Gaining energy

**Rulebook — Gaining energy:**  
"To gain energy, take the indicated number of energy tokens from the supply and add them to the **shared energy pool**."  
**FAQ:** All energy gained during combat goes into the shared pool.

## Bonus dice

**FAQ — Combat cards:**  
Effects that add dice or rerolls apply only to the **first** attack.  
- "Perform a second attack" = separate attack instance (no bonus).  
- "Perform this attack twice" (e.g. Dragon Dagger) = second attack **does** get the same benefits as the first.

## Spread damage / Blade Blaster

**FAQ:**  
You must **choose all targets for divided damage at the same time**. You cannot apply damage to a GUARD enemy first and then assign the rest; all targets are chosen up front.  
For Blade Blaster: total hits = dice result + energy spent; divide that total among chosen targets.
