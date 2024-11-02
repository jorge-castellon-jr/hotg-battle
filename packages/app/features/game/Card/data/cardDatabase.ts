import { RangerCard, CardEffect } from '../CardTypes'

const leadTheChargeEffect: CardEffect = {
  type: 'addDice',
  value: 1,
  target: 3,
  condition: 'nextAttack',
  description:
    'The next time any Ranger performs an attack during this battle, add 1 die to that attack.',
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

const cardDatabase: RangerCard[] = [
  {
    id: '1',
    name: 'Lead the Charge',
    type: 'attack',
    shields: 1,
    text: 'Attack with 2 dice. ' + leadTheChargeEffect.description,
    owner: 'Red Ranger',
    color: 'red',
    attack: { value: 2 },
    effects: [leadTheChargeEffect],
  },
  {
    id: '1',
    name: 'Lead the Charge',
    type: 'attack',
    shields: 1,
    text: 'Attack with 2 dice. ' + leadTheChargeEffect.description,
    owner: 'Red Ranger',
    color: 'red',
    attack: { value: 2 },
    effects: [leadTheChargeEffect],
  },
  {
    id: '2',
    name: 'Power Slash',
    type: 'attack',
    shields: 1,
    text: 'Deal 3 damage.',
    owner: 'Green Ranger',
    color: 'green',
    attack: { value: 3, fixed: true },
    effects: [],
  },
  {
    id: '2',
    name: 'Power Slash',
    type: 'attack',
    shields: 1,
    text: 'Deal 3 damage.',
    owner: 'Green Ranger',
    color: 'green',
    attack: { value: 3, fixed: true },
    effects: [],
  },
  {
    id: '3',
    name: 'Team Tactics',
    type: 'maneuver',
    shields: 1,
    text: gainEnergyEffect.description + ' ' + allowPlayEffect.description,
    owner: 'Red Ranger',
    color: 'red',
    effects: [gainEnergyEffect, allowPlayEffect],
  },
  {
    id: '3',
    name: 'Team Tactics',
    type: 'maneuver',
    shields: 1,
    text: gainEnergyEffect.description + ' ' + allowPlayEffect.description,
    owner: 'Red Ranger',
    color: 'red',
    effects: [gainEnergyEffect, allowPlayEffect],
  },
]

export default cardDatabase
