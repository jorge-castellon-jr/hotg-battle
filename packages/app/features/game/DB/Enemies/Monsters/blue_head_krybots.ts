import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const headhunter: BaseEnemyCard = {
  name: 'HEADHUNTER',
  type: 'basic',
  text: 'Deal 5 damage to the lead Ranger.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

const under_pressure: BaseEnemyCard = {
  name: 'UNDER PRESSURE',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger uses a once-per-battle ability, they must first spend 1 [ENERGY] as an extra cost.',
  health: 4,
}

const two_pronged_strike: BaseEnemyCard = {
  name: 'TWO-PRONGED STRIKE',
  type: 'basic',
  text: 'Deploy 1 Krybot to the location with the fewest food soldiers. Each Ranger in that location must discard the top card of their deck.',
  health: 4,
}

const blue_burst: BaseEnemyCard = {
  name: 'BLUE BURST',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const troobian_tactics: BaseEnemyCard = {
  name: 'TROOBIAN TACTICS',
  type: 'basic',
  text: 'Reveal the top 2 cards of the Krybots deck and resolve their effects, one at a time, then shuffle the Krybots deck.',
  health: 4,
}

export default createDeck(
  [
    [headhunter, 1],
    [under_pressure, 2],
    [two_pronged_strike, 2],
    [blue_burst, 2],
    [troobian_tactics, 3]
  ],
  {
    enemyType: 'nemesis',
    owner: 'blue_head_krybots',
  }
) as EnemyCard[]