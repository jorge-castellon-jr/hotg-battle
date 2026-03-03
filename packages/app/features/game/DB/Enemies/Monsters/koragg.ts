import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const eye_of_the_master: BaseEnemyCard = {
  name: 'EYE OF THE MASTER',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot perform reactions or use ★ abilities. When this card resolves, drain 2 [ENERGY].',
  health: 5,
}

const wolf_attack: BaseEnemyCard = {
  name: 'WOLF ATTACK',
  type: 'basic',
  text: 'Each Ranger must reveal the top card of their deck. Deal damage equal to the total [SHIELD] on the revealed cards, increased by 2 for each revealed ★ ability, divided among the Rangers as they choose.',
  health: 4,
}

const dark_magic_strike_: BaseEnemyCard = {
  name: 'DARK MAGIC STRIKE ',
  type: 'basic',
  text: 'Each Ranger must look at the top 2 cards of their deck and discard the card with the most [SHIELD].',
  health: 4,
}

const shield_of_darkness: BaseEnemyCard = {
  name: 'SHIELD OF DARKNESS',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger deals [HIT] to this card, deal the same amount of damage to that Ranger.',
  health: 5,
}

export default createDeck(
  [
    [eye_of_the_master, 1],
    [wolf_attack, 2],
    [dark_magic_strike_, 2],
    [shield_of_darkness, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'koragg',
  }
) as EnemyCard[]