import { RangerCard, CardEffect } from '../../Card/CardTypes'

const smoothMoves: RangerCard = {
  name: 'Smooth Moves',
  type: 'reaction',
  text: 'Play this card when any Ranger suffers damage to reduce that damage by 2 and gain 1 energy.',
  team: 'Mighty Morphin',
  owner: 'mm3',
  color: 'black',
  energy: 0,
  shields: 2,
}

const mammothSlam: RangerCard = {
  name: 'Mammoth Slam',
  type: 'attack',
  text: 'If there are 4 or more cards in your discard pile, add 1 die to this attack.',
  team: 'Mighty Morphin',
  owner: 'mm3',
  color: 'black',
  energy: 0,
  shields: 2,
  attack: {
    value: 2,
  },
}

const sweepingStrike: RangerCard = {
  name: 'Sweeping Strike',
  type: 'attack',
  text: 'Deal 1 damage to an enemy card adjacent to the target.',
  team: 'Mighty Morphin',
  owner: 'mm3',
  color: 'black',
  energy: 1,
  shields: 3,
  attack: {
    value: 2,
  },
}

const recklessBlow: RangerCard = {
  name: 'Reckless Blow',
  type: 'attack',
  shields: 1,
  text: 'Before rolling, you may discard the top card of your deck to add 2 dice to this attack.',
  team: 'Mighty Morphin',
  owner: 'mm3',
  color: 'black',
  energy: 1,
  attack: {
    value: 1,
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
  owner: 'mm3',
  color: 'black',
  energy: -1,
  attack: { value: -1 },
  effects: [energyToDamgeEffect],
}

const powerAxe: RangerCard = {
  name: 'Power Axe',
  type: 'attack',
  text: 'After rolling, choose 2 dice from this attack and deal that much damage to each enemy card adjacent to the target.',
  team: 'Mighty Morphin',
  owner: 'mm3',
  color: 'black',
  energy: 3,
  shields: 3,
  attack: {
    value: 3,
  },
}

const deck: RangerCard[] = [
  smoothMoves,
  smoothMoves,
  mammothSlam,
  mammothSlam,
  sweepingStrike,
  sweepingStrike,
  recklessBlow,
  recklessBlow,
  bladeBlaster,
  powerAxe,
]

export default deck
