import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const shadow_axe: BaseEnemyCard = {
  name: 'SHADOW AXE',
  type: 'basic',
  text: 'Deal an amount of damage to the lead Ranger equal to the total number of cards in their hand and deck. If this effect defeats that Ranger, repeat it with the new lead Ranger.',
  health: 7,
}

const dark_tithe: BaseEnemyCard = {
  name: 'DARK TITHE',
  type: 'passive',
  text: 'While this card is in play, deal an amount of damage at the end of each turn equal to the total amount of [ENERGY] spent and drained during that turn. When this card resolves, drain 3 [ENERGY].',
  health: 6,
}

const conquerers_aura: BaseEnemyCard = {
  name: 'CONQUERER’S AURA',
  type: 'basic',
  text: 'Deal an amount of damage equal to the total health value of all enemy cards in play, divided among the Rangers as they choose.',
  health: 5,
}

const emperors_ride: BaseEnemyCard = {
  name: 'EMPEROR’S RIDE',
  type: 'basic',
  text: 'Each Ranger must discard the top card of their deck. Deal an amount of damage to each Ranger equal to their card’s shield value.',
  health: 4,
}

const fragmentation_blast: BaseEnemyCard = {
  name: 'FRAGMENTATION BLAST',
  type: 'basic',
  text: 'Deal 6 damage to each Ranger. Each Ranger may spend 1 [ENERGY] to reduce the damage they suffer by 3.',
  health: 4,
  attacks: [{ value: 6, fixed: true }],
}

export default createDeck(
  [
    [shadow_axe, 1],
    [dark_tithe, 1],
    [conquerers_aura, 2],
    [emperors_ride, 2],
    [fragmentation_blast, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'emperor_gruumm',
  }
) as EnemyCard[]