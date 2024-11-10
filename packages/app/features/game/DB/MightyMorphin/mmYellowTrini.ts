import { RangerCard, CardEffect } from '../../Card/CardTypes'

const tenacity: RangerCard = {
  name: 'Tenacity',
  type: 'maneuver',
  text: 'Gain 1 energy. Choose 2 cards from your discard pile and return them to the top of your deck, in any order.',
  team: 'Mighty Morphin',
  owner: 'mm4',
  color: 'yellow',
  energy: 0,
  shields: 2,
}

const twinFangTeamwork: RangerCard = {
  name: 'Twin-Fang Teamwork',
  type: 'reaction',
  text: 'Play this card after another Ranger resolves an attack to deal 1 damage to the target of that attack.',
  team: 'Mighty Morphin',
  owner: 'mm4',
  color: 'yellow',
  energy: 0,
  shields: 2,
}

const preciseStrike: RangerCard = {
  name: 'Precise Strike',
  type: 'attack',
  text: 'After you play this card, you may spend 1 energy to shuffle it back into your deck instead of discarding it.',
  team: 'Mighty Morphin',
  owner: 'mm4',
  color: 'yellow',
  energy: 0,
  shields: 2,
  attack: { value: 2, fixed: true },
}

const sabertoothStrike: RangerCard = {
  name: 'Sabertooth Strike',
  type: 'attack',
  text: 'If this attack defeats the target, you may immediately perform a second attack with 2 dice.',
  team: 'Mighty Morphin',
  owner: 'mm4',
  color: 'yellow',
  energy: 1,
  shields: 2,
  attack: {
    value: 2,
  },
}

const energyToDamgeEffect: CardEffect = {
  type: 'addDamge',
  value: -1,
  target: -1,
  description:
    'This attack deals an amount of damage equal to the amount of energy spent to play this card. You May divide this damage among any number of targets.',
}
const bladeBlaster: RangerCard = {
  name: 'Blade Blaster',
  type: 'attack',
  shields: 1,
  text: energyToDamgeEffect.description!,
  team: 'Mighty Morphin',
  owner: 'mm4',
  color: 'yellow',
  energy: -1,
  attack: { value: -1 },
  effects: [energyToDamgeEffect],
}

const powerDaggers: RangerCard = {
  name: 'Power Daggers',
  type: 'attack',
  shields: 3,
  text: 'After you resolve this attack, a Ranger of your choice may immediately play 1 card.',
  team: 'Mighty Morphin',
  owner: 'mm4',
  color: 'yellow',
  energy: 3,
  attack: {
    value: 4,
  },
}

const deck: RangerCard[] = [
  tenacity,
  tenacity,
  twinFangTeamwork,
  twinFangTeamwork,
  preciseStrike,
  preciseStrike,
  sabertoothStrike,
  sabertoothStrike,
  bladeBlaster,
  powerDaggers,
]

export default deck
