import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const warlocks_curse: BaseEnemyCard = {
  name: 'WARLOCK’S CURSE',
  type: 'passive',
  text: 'While this card is in play, the energy cost of all combat cards is increased by 1.',
  health: 6,
}

const hideous_power: BaseEnemyCard = {
  name: 'HIDEOUS POWER',
  type: 'passive',
  text: 'While this card is in play, each time a Master vile card deals damage, increase that damage by 2.',
  health: 6,
}

const gravity_well: BaseEnemyCard = {
  name: 'GRAVITY WELL',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger twice.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const negation_wave: BaseEnemyCard = {
  name: 'NEGATION WAVE',
  type: 'basic',
  text: 'Drain 6 [ENERGY].',
  health: 5,
}

const hex_blast: BaseEnemyCard = {
  name: 'HEX BLAST',
  type: 'basic',
  text: 'Deal 6 damage.\nDeal 6 damage.',
  health: 5,
  attacks: [{ value: 6, fixed: true }],
}

export default createDeck(
  [
    [warlocks_curse, 1],
    [hideous_power, 1],
    [gravity_well, 2],
    [negation_wave, 2],
    [hex_blast, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'master_vile',
  }
) as EnemyCard[]