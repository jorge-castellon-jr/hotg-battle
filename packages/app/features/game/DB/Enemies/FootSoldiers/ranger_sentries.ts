import { BaseEnemyCard, EnemyCard } from '../../../Card/CardTypes'
import { createDeck } from '../../cardUtils'

const tyrannosaurus_sentry: BaseEnemyCard = {
  name: 'TYRANNOSAURUS SENTRY',
  type: 'passive',
  text: 'While this card is in play, each time an adjacent enemy card deals damage or drains ⚡, increase the effect by 1.',
  health: 3,
}

const pterodactyl_sniper: BaseEnemyCard = {
  name: 'PTERODACTYL SNIPER',
  type: 'basic',
  text: 'Roll 3 dice and deal that much damage to the Ranger with the fewest cards in their deck.',
  health: 2,
}

const sabertooth_commando: BaseEnemyCard = {
  name: 'SABERTOOTH COMMANDO',
  type: 'basic',
  text: 'Deal 2 damage to 2 different Rangers twice.',
  health: 2,
  attacks: [{ value: 2, fixed: true }],
}

const silver_space_scout: BaseEnemyCard = {
  name: 'SILVER SPACE SCOUT',
  type: 'basic',
  text: 'During the next Ranger turn in this battle, increase the energy cost of all cards by 1.',
  health: 3,
}

const dino_charge_gold_vanguard: BaseEnemyCard = {
  name: 'DINO CHARGE GOLD VANGUARD',
  type: 'basic',
  text: 'Deal 1 damage to each Ranger. Increase this damage by 1 for each hit token on this card.',
  health: 4,
  attacks: [{ value: 1, fixed: true }],
}

export default createDeck(
  [
    [tyrannosaurus_sentry, 2],
    [pterodactyl_sniper, 2],
    [sabertooth_commando, 2],
    [silver_space_scout, 2],
    [dino_charge_gold_vanguard, 2]
  ],
  {
    enemyType: 'foot',
    owner: 'ranger_sentries',
  }
) as EnemyCard[]