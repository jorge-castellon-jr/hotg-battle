import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const machine_king: BaseEnemyCard = {
  name: 'MACHINE KING',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger rolls dice for an attack, remove 1 die from that attack before rolling and place 1 hit token on this card.',
  health: 6,
}

const sword_of_damocles: BaseEnemyCard = {
  name: 'SWORD OF DAMOCLES',
  type: 'basic',
  text: 'Deal 10 damage to each Ranger. Reduce this damage by 1 for each hit token on this card.',
  health: 10,
  attacks: [{ value: 10, fixed: true }],
}

const imperial_fist: BaseEnemyCard = {
  name: 'IMPERIAL FIST',
  type: 'basic',
  text: 'Deal 4 damage. The Ranger who suffers this damage must discard 1 random card from their hand.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const tyrant_barrage: BaseEnemyCard = {
  name: 'TYRANT BARRAGE',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger twice.',
  health: 5,
  attacks: [{ value: 2, fixed: true }],
}

const thunder_wave: BaseEnemyCard = {
  name: 'THUNDER WAVE',
  type: 'basic',
  text: 'Deal 4 damage to each Ranger.',
  health: 6,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [machine_king, 1],
    [sword_of_damocles, 1],
    [imperial_fist, 2],
    [tyrant_barrage, 2],
    [thunder_wave, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'king_mondo_errata',
  }
) as EnemyCard[]