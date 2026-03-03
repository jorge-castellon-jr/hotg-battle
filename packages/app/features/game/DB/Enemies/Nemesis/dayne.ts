import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const just_as_planned: BaseEnemyCard = {
  name: 'JUST AS PLANNED',
  type: 'passive',
  text: 'While this card is in play, Rangers cannot place hit tokens on Dayne cards that have not yet resolved.',
  health: 5,
}

const isolate_prey: BaseEnemyCard = {
  name: 'ISOLATE PREY',
  type: 'passive',
  text: 'While this card is in play, Dayne’s current nemesis is the only Ranger who can play combat cards. When this card resolves, deal 3 damage to each Ranger.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const plasma_whip: BaseEnemyCard = {
  name: 'PLASMA WHIP',
  type: 'passive',
  text: 'While this card is in play, each time the ability of Dayne’s deployment card resolves, increase that damage by 1.',
  health: 4,
}

const blinding_shot: BaseEnemyCard = {
  name: 'BLINDING SHOT',
  type: 'passive',
  text: 'While this card is in play, each time a Ranger rolls a [HIT][HIT] result during an attack, change it to a [MISS] result.',
  health: 4,
}

const bounty_breaker: BaseEnemyCard = {
  name: 'BOUNTY BREAKER',
  type: 'basic',
  text: 'Deal 5 damage. Attach Dayne’s deployment card to the Ranger who suffers this damage.',
  health: 5,
  attacks: [{ value: 5, fixed: true }],
}

export default createDeck(
  [
    [just_as_planned, 1],
    [isolate_prey, 1],
    [plasma_whip, 2],
    [blinding_shot, 2],
    [bounty_breaker, 2]
  ],
  {
    enemyType: 'nemesis',
    owner: 'dayne',
  }
) as EnemyCard[]