import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const liquid_form: BaseEnemyCard = {
  name: 'LIQUID FORM',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot deal [HIT] to an enemy card if another enemy card has more hit tokens than that card does.',
  health: 6,
}

const metal_hunter: BaseEnemyCard = {
  name: 'METAL HUNTER',
  type: 'basic',
  text: 'Each Ranger must reveal the card from their hand with the most dice in its attack value. Deal damage to each Ranger equal to the number of dice in their card’s attack value.',
  health: 4,
}

const thunderbeam: BaseEnemyCard = {
  name: 'THUNDERBEAM',
  type: 'basic',
  text: 'Deal 8 damage, divided among the Rangers as they choose.',
  health: 4,
  attacks: [{ value: 8, fixed: true }],
}

const empowered_lance: BaseEnemyCard = {
  name: 'EMPOWERED LANCE',
  type: 'basic',
  text: 'Roll 1 die and deal twice that much damage to each Ranger. If the result is O, deal 3 damage to each Ranger instead.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

export default createDeck(
  [
    [liquid_form, 1],
    [metal_hunter, 2],
    [thunderbeam, 2],
    [empowered_lance, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'cursed_tyzon',
  }
) as EnemyCard[]