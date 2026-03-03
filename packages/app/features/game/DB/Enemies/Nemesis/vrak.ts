import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const final_form: BaseEnemyCard = {
  name: 'FINAL FORM',
  type: 'passive',
  text: 'While this card is in play, each time Vrak deals damage, it is dealt to each Ranger.',
  health: 6,
}

const dark_powers_unleashed: BaseEnemyCard = {
  name: 'DARK POWERS UNLEASHED',
  type: 'basic',
  text: 'Deal 4 damage.\nDeal 4 damage.',
  health: 5,
  attacks: [{ value: 4, fixed: true }],
}

const comet_fist: BaseEnemyCard = {
  name: 'COMET FIST',
  type: 'basic',
  text: 'Deal 2 damage to a single Ranger three times.',
  health: 4,
  attacks: [{ value: 2, fixed: true }],
}

const gosei_orb: BaseEnemyCard = {
  name: 'GOSEI ORB',
  type: 'basic',
  text: 'Deal 4 damage. Increase this damage by 1 for each other Gosei Orb in play and by 2 if Final Form is in play.',
  health: 3,
  attacks: [{ value: 4, fixed: true }],
}

export default createDeck(
  [
    [final_form, 1],
    [dark_powers_unleashed, 2],
    [comet_fist, 2],
    [gosei_orb, 3]
  ],
  {
    enemyType: 'nemesis',
    owner: 'vrak',
  }
) as EnemyCard[]