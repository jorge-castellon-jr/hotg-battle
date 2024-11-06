import { RangerCard, CardEffect } from '../../CardTypes'

const leadTheChargeEffect: CardEffect = {
  type: 'addDice',
  value: 1,
  target: 3,
  condition: 'nextAttack',
  description:
    'The next time any Ranger performs an attack during this battle, add 1 die to that attack.',
}
const leadTheCharge: RangerCard = {
  name: 'Lead the Charge',
  type: 'attack',
  shields: 2,
  text: leadTheChargeEffect.description!,
  team: 'Mighty Morphin',
  owner: 'Red',
  color: 'red',
  energy: 0,
  attack: { value: 2 },
  effects: [leadTheChargeEffect],
}

const gainEnergyEffect: CardEffect = {
  type: 'addEnergy',
  target: 0,
  value: 1,
  description: 'Gain 1 energy.',
}
const allowPlayEffect: CardEffect = {
  type: 'allowCardPlay',
  value: 1,
  target: 1,
  description: 'Another Ranger of your choice may immediately play 1 card.',
}
const teamTactics: RangerCard = {
  name: 'Team Tactics',
  type: 'maneuver',
  shields: 1,
  text: gainEnergyEffect.description + ' ' + allowPlayEffect.description,
  team: 'Mighty Morphin',
  owner: 'Red',
  color: 'red',
  energy: 0,
  effects: [gainEnergyEffect, allowPlayEffect],
}

const blockEffect: CardEffect = {
  type: 'blockDamage',
  value: 3,
  target: 1,
  description: 'Play this card when any Ranger suffers damage to reduce that damage by 3.',
}
const block: RangerCard = {
  name: 'Block',
  type: 'reaction',
  shields: 3,
  text: blockEffect.description!,
  team: 'Mighty Morphin',
  owner: 'Red',
  color: 'red',
  energy: 0,
  effects: [blockEffect],
}

const rerollEffect: CardEffect = {
  type: 'rerollDice',
  value: 0,
  target: 1,
  description: 'You may reroll any number of dice during this attack',
}
const tyrannoSlash: RangerCard = {
  name: 'Tyranno Slash',
  type: 'attack',
  shields: 2,
  text: rerollEffect.description,
  team: 'Mighty Morphin',
  owner: 'Red',
  color: 'red',
  energy: 1,
  attack: {
    value: 5,
  },
  effects: [rerollEffect],
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
  team: 'Mighty Morphin',
  text: energyToDamgeEffect.description,
  owner: 'Red',
  color: 'red',
  energy: -1,
  attack: { value: -1 },
  effects: [energyToDamgeEffect],
}

const powerSwordEffect: CardEffect = {
  type: 'addDice',
  value: 2,
  target: 3,
  condition: 'nextAttack',
  description:
    'The next time any Ranger performs an attack during this battle, add 2 die to that attack.',
}
const powerSword: RangerCard = {
  name: 'Power Sword',
  type: 'attack',
  shields: 3,
  text: powerSwordEffect.description,
  team: 'Mighty Morphin',
  owner: 'Red',
  color: 'red',
  energy: 3,
  attack: { value: 5 },
  effects: [powerSwordEffect],
}

const deck: RangerCard[] = [
  leadTheCharge,
  leadTheCharge,
  teamTactics,
  teamTactics,
  block,
  block,
  tyrannoSlash,
  tyrannoSlash,
  bladeBlaster,
  powerSword,
]

export default deck
