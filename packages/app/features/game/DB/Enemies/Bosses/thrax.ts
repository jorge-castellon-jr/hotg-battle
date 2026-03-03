import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const curse_of_doom: BaseEnemyCard = {
  name: 'CURSE OF DOOM',
  type: 'passive',
  text: 'While this card is in play, after each Ranger combat card resolves, deal 3 damage to that Ranger. That Ranger may spend 1 [ENERGY] to prevent the damage.',
  health: 6,
  attacks: [{ value: 3, fixed: true }],
}

const hideous_blow: BaseEnemyCard = {
  name: 'HIDEOUS BLOW',
  type: 'basic',
  text: 'Deal 4 damage to the Ranger with the most cards in their hand. Increase this damage by 1 for each card in that Ranger’s hand.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

const lightning_beam: BaseEnemyCard = {
  name: 'LIGHTNING BEAM',
  type: 'basic',
  text: 'Deal 10 damage, divided among the Rangers as they choose.',
  health: 6,
  attacks: [{ value: 10, fixed: true }],
}

const void_burst: BaseEnemyCard = {
  name: 'VOID BURST',
  type: 'basic',
  text: 'Deal 6 damage to each Ranger. Reduce the damage that each Ranger suffers by 1 for each card in their discard pile.',
  health: 4,
  attacks: [{ value: 6, fixed: true }],
}

const implosion_wave: BaseEnemyCard = {
  name: 'IMPLOSION WAVE',
  type: 'basic',
  text: 'Drain 3 [ENERGY]. Each Ranger must either discard 1 random card from their hand or discard the top 2 cards of their deck.',
  health: 5,
}

export default createDeck(
  [
    [curse_of_doom, 1],
    [hideous_blow, 1],
    [lightning_beam, 2],
    [void_burst, 2],
    [implosion_wave, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'thrax',
  }
) as EnemyCard[]