import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const regeneration: BaseEnemyCard = {
  name: 'REGENERATION',
  type: 'basic',
  text: 'Flip all defeated Ecliptor cards in this battle face up. They are no longer defeated.',
  health: 7,
}

const mirror_image: BaseEnemyCard = {
  name: 'MIRROR IMAGE',
  type: 'passive',
  text: 'While this card is in play, deal 3 damage at the start of each enemy turn in battle.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const eye_of_exliptor: BaseEnemyCard = {
  name: 'EYE OF EXLIPTOR',
  type: 'basic',
  text: 'Half of the Rangers in this battle (rounded up) must each shuffle their deck, then discard half of their deck (rounded up).',
  health: 4,
}

const eclipse_blade: BaseEnemyCard = {
  name: 'ECLIPSE BLADE',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger, increased by 1 for each [SHIELD] on the top card of their discard pile.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [regeneration, 1],
    [mirror_image, 2],
    [eye_of_exliptor, 2],
    [eclipse_blade, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'ecliptor',
  }
) as EnemyCard[]