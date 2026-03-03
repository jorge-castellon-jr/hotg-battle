import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const uramasa: BaseEnemyCard = {
  name: 'URAMASA',
  type: 'passive',
  text: 'While this card is in play, after a Ranger draws 1 or more cards, they must discard 1 card from their hand.',
  health: 5,
}

const a_worthy_foe: BaseEnemyCard = {
  name: 'A WORTHY FOE',
  type: 'basic',
  text: 'Deal 6 damage. Then Deker’s nemesis must perform an attack with a number of dice equal to the number of cards in their hand. Skip the next Ranger turn in this battle.',
  health: 5,
  attacks: [{ value: 6, fixed: true }],
}

const a_proper_duel: BaseEnemyCard = {
  name: 'A PROPER DUEL',
  type: 'basic',
  text: 'Defeat and remove all foot soldier cards in the combat sequence. Deal 4 damage to each Ranger other than Deker’s nemesis.',
  health: 4,
  attacks: [{ value: 4, fixed: true }],
}

const peerless_slash: BaseEnemyCard = {
  name: 'PEERLESS SLASH',
  type: 'basic',
  text: 'Deal 2 damage to Deker’s nemesis. Increase this damage by 1 for each card in their hand.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

export default createDeck(
  [
    [uramasa, 1],
    [a_worthy_foe, 2],
    [a_proper_duel, 2],
    [peerless_slash, 3]
  ],
  {
    enemyType: 'nemesis',
    owner: 'deker',
  }
) as EnemyCard[]