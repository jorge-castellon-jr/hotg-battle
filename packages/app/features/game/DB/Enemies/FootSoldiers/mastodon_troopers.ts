import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const alpha_strike: BaseEnemyCard = {
  name: 'ALPHA STRIKE',
  type: 'basic',
  text: 'Deal 4 total damage, divided among the Rangers as they choose.',
  health: 2,
}

const dragon_cannon: BaseEnemyCard = {
  name: 'DRAGON CANNON',
  type: 'basic',
  text: 'Drain 1 [ENERGY]. Each Ranger must discard 1 card from their hand.',
  health: 3,
}

const armored_assault: BaseEnemyCard = {
  name: 'ARMORED ASSAULT',
  type: 'basic',
  text: 'Roll 2 dice and deal that much damage to a single Ranger.',
  health: 3,
}

const blaster_rifle: BaseEnemyCard = {
  name: 'BLASTER RIFLE',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger.',
  health: 3,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [alpha_strike, 2],
    [dragon_cannon, 2],
    [armored_assault, 3],
    [blaster_rifle, 3]
  ],
  {
    enemyType: 'foot',
    owner: 'mastodon_troopers',
  }
) as EnemyCard[]