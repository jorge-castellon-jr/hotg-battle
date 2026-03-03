import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const chaos_wave: BaseEnemyCard = {
  name: 'CHAOS WAVE',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger plays a card, drain 1 ⚡ after that card resolves.',
  health: 5,
}

const nega_beam: BaseEnemyCard = {
  name: 'NEGA-BEAM',
  type: 'basic',
  text: 'Each Ranger must shuffle 1 random card from their hand back into their deck, then discard the top 2 cards of their deck.',
  health: 5,
}

const dragon_crusher: BaseEnemyCard = {
  name: 'DRAGON CRUSHER',
  type: 'basic',
  text: 'Deal 3 damage. The Ranger who suffers this damage must discard from their hand the card with the most [SHIELD].',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const black_claw: BaseEnemyCard = {
  name: 'BLACK CLAW',
  type: 'basic',
  text: 'Deal 5 damage.',
  health: 4,
  attacks: [{ value: 5, fixed: true }],
}

export default createDeck(
  [
    [chaos_wave, 1],
    [nega_beam, 2],
    [dragon_crusher, 2],
    [black_claw, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'black_dragon',
  }
) as EnemyCard[]