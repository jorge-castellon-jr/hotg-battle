import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const punk_potion: BaseEnemyCard = {
  name: 'PUNK POTION',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot use abilities or card effects to affect Rangers other than themselves.',
  health: 6,
}

const pick_your_poison: BaseEnemyCard = {
  name: 'PICK YOUR POISON',
  type: 'basic',
  text: 'Drain 2 [ENERGY]. The Ranger who most recently drank something must discard either 2 cards from their hand or 2 cards from the top of their deck.',
  health: 4,
}

const scapegoat: BaseEnemyCard = {
  name: 'SCAPEGOAT',
  type: 'basic',
  text: 'When this card is defeated, instead of discarding it, place it on the bottom of Baboo’s deck. Then draw another card from Baboo’s deck to replace it in the combat sequence.',
  health: 2,
}

const awful_alchemy: BaseEnemyCard = {
  name: 'AWFUL ALCHEMY',
  type: 'basic',
  text: 'The Ranger with the most cards in their deck must guess the [SHIELD] value of the top card, then discard it.\nIf they guessed wrong, repeat this effect until they guess right or are defeated.',
  health: 4,
}

export default createDeck(
  [
    [punk_potion, 1],
    [pick_your_poison, 2],
    [scapegoat, 2],
    [awful_alchemy, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'baboo',
  }
) as EnemyCard[]