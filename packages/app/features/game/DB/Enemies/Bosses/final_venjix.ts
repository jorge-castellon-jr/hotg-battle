import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const deletion_beam: BaseEnemyCard = {
  name: 'DELETION BEAM',
  type: 'basic',
  text: 'Deal an amount of damage equal to the number of combat cards that have been removed from the game so far.',
  health: 7,
}

const data_absorption: BaseEnemyCard = {
  name: 'DATA ABSORPTION',
  type: 'passive',
  text: 'While this card is in play, after a Ranger in this location resolves a combat card, remove that card from the game.',
  health: 5,
}

const viral_code: BaseEnemyCard = {
  name: 'VIRAL CODE',
  type: 'basic',
  text: 'Deal 2 damage to each Ranger. Remove the bottom card of each Ranger’s deck from the game.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const cataclysmic_burst: BaseEnemyCard = {
  name: 'CATACLYSMIC BURST',
  type: 'basic',
  text: 'Deal 3 damage to each Ranger. If any cards are discarded for defense as a result of this damage, remove them from the game.',
  health: 5,
  attacks: [{ value: 3, fixed: true }],
}

const dark_download: BaseEnemyCard = {
  name: 'DARK DOWNLOAD',
  type: 'basic',
  text: 'Drain 3 [ENERGY]. One Ranger must choose 2 cards from their hand and remove them from the game.',
  health: 6,
}

export default createDeck(
  [
    [deletion_beam, 1],
    [data_absorption, 1],
    [viral_code, 2],
    [cataclysmic_burst, 2],
    [dark_download, 2]
  ],
  {
    enemyType: 'boss',
    owner: 'final_venjix',
  }
) as EnemyCard[]