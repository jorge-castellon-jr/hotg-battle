import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const bow_of_darkness: BaseEnemyCard = {
  name: 'BOW OF DARKNESS',
  type: 'basic',
  text: 'Deal 6 damage to the lead Ranger.',
  health: 6,
  attacks: [{ value: 6, fixed: true }],
}

const suppressing_shots: BaseEnemyCard = {
  name: 'SUPPRESSING SHOTS',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. Skip the next Ranger turn.',
  health: 4,
  attacks: [{ value: 3, fixed: true }],
}

const thunder_kick: BaseEnemyCard = {
  name: 'THUNDER KICK',
  type: 'basic',
  text: 'The Ranger with the most cards in their hand must discard cards from their hand until they have discarded at least 4 [SHIELD] or until they have no cards remaining in their hand.',
  health: 4,
}

const slaying_shot: BaseEnemyCard = {
  name: 'SLAYING SHOT',
  type: 'basic',
  text: 'Roll 4 dice and deal that much damage to the Ranger with the fewest cards in their deck.',
  health: 4,
}

export default createDeck(
  [
    [bow_of_darkness, 1],
    [suppressing_shots, 2],
    [thunder_kick, 2],
    [slaying_shot, 3]
  ],
  {
    enemyType: 'monster',
    owner: 'ranger_slayer',
  }
) as EnemyCard[]