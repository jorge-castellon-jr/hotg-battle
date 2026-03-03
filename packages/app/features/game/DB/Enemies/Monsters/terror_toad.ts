import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const horn_of_hunger: BaseEnemyCard = {
  name: 'HORN OF HUNGER',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger attacks Terror Toad, steal the top 2 cards of their deck. Shuggle those cards back to their decks when this card is defeated or when the battle ends.',
  health: 6,
}

const swallow_whole: BaseEnemyCard = {
  name: 'SWALLOW WHOLE',
  type: 'basic',
  text: 'Steal 4 cards from the Rangers with the most cards in their hand. Return those cards to that Ranger’s hand when this card is defeated or when the battle ends.',
  health: 5,
}

const time_to_croak: BaseEnemyCard = {
  name: 'TIME TO CROAK',
  type: 'basic',
  text: 'Deal 1 damage to each Ranger. Increase this damage by 1 for each combat card currently stolen by Terror Toad.',
  health: 3,
  attacks: [{ value: 1, fixed: true }],
}

const tongue_lash: BaseEnemyCard = {
  name: 'TONGUE LASH',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Deal 5 damage. Any cards discarded for defense are stolen instead. Return those cards to their discard piles when this card is defeated or when the battle ends.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

export default createDeck(
  [
    [horn_of_hunger, 1],
    [swallow_whole, 2],
    [time_to_croak, 2],
    [tongue_lash, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'terror_toad',
  }
) as EnemyCard[]