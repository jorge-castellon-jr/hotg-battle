import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const cursed_coal: BaseEnemyCard = {
  name: 'CURSED COAL',
  type: 'passive',
  text: 'While this card is in play, each time a card is placed in a Ranger discard pile, that Ranger must remove 1 hit token from an enemy card of their choice.',
  health: 6,
}

const seasons_beatings: BaseEnemyCard = {
  name: 'SEASON’S BEATINGS',
  type: 'basic',
  text: 'Deal an amount of damage equal to the total number of figures in this location (including Ranger and enemy figures).',
  health: 4,
}

const rocket_sleigh: BaseEnemyCard = {
  name: 'ROCKET SLEIGH',
  type: 'basic',
  text: 'Each Ranger must draw 1 card. Deal an amount of damage to each Ranger equal to the shield value of their drawn card.',
  health: 4,
}

const tannenboom_: BaseEnemyCard = {
  name: 'TANNENBOOM ',
  type: 'basic',
  text: 'Half of the Rangers in this battle (rounded up) must each discard 1 card from their hand. Each other Ranger must discard the top card of their deck.',
  health: 4,
}

export default createDeck(
  [
    [cursed_coal, 1],
    [seasons_beatings, 2],
    [rocket_sleigh, 2],
    [tannenboom_, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'heximas',
  }
) as EnemyCard[]