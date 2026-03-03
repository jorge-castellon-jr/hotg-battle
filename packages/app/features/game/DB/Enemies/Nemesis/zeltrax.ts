import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const shield_of_zeltrax: BaseEnemyCard = {
  name: 'SHIELD OF ZELTRAX',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger performs an attack, they must remove all but 2 dice from that attack after rolling.',
  health: 6,
}

const grim_vendetta: BaseEnemyCard = {
  name: 'GRIM VENDETTA',
  type: 'basic',
  text: 'The lead Ranger may discard any number of cards from their hand. Then deal 3 damage to that Ranger for each card left in their hand.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const grip_of_zeltrax: BaseEnemyCard = {
  name: 'GRIP OF ZELTRAX',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Deal 3 damage each to half of the Rangers in this battle (rounded up).',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const thunder_gladius: BaseEnemyCard = {
  name: 'THUNDER GLADIUS',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger.\nDeal 2 damage to the lead Ranger.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [shield_of_zeltrax, 1],
    [grim_vendetta, 2],
    [grip_of_zeltrax, 2],
    [thunder_gladius, 3]
  ],
  {
    enemyType: 'nemesis',
    owner: 'zeltrax',
  }
) as EnemyCard[]