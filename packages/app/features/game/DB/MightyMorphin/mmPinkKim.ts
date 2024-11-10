import { RangerCard, CardEffect } from '../../Card/CardTypes'

const takeAim: RangerCard = {
  name: 'Take Aim',
  type: 'maneuver',
  text: 'Gain 1 energy. You may immediately play another card. If it is an attack, you may reroll any number of dice during that attack.',
  team: 'Mighty Morphin',
  owner: 'mm5',
  color: 'pink',
  energy: 0,
  shields: 1,
}

const arrowShot: RangerCard = {
  name: 'Arrow Shot',
  type: 'attack',
  text: 'Ignore the GUARD keyword when choosing a target for this attack.',
  team: 'Mighty Morphin',
  owner: 'mm5',
  color: 'pink',
  energy: 1,
  shields: 2,
  attack: {
    value: 3,
  },
}

const flyingKick: RangerCard = {
  name: 'Flying Kick',
  type: 'attack',
  text: 'Gain 1 energy.',
  team: 'Mighty Morphin',
  owner: 'mm5',
  color: 'pink',
  energy: 0,
  shields: 2,
  attack: { value: 2 },
}

const acrobatics: RangerCard = {
  name: 'Acrobatics',
  type: 'reaction',
  text: 'Play this card when you reveal a card for defense to add the revealed card to your hand instead of discarding it or placing it on the bottom of your deck.',
  team: 'Mighty Morphin',
  owner: 'mm5',
  color: 'pink',
  energy: 0,
  shields: 3,
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
  text: energyToDamgeEffect.description!,
  team: 'Mighty Morphin',
  owner: 'mm5',
  color: 'pink',
  energy: -1,
  shields: 1,
  attack: { value: -1 },
  effects: [energyToDamgeEffect],
}

const powerBows: RangerCard = {
  name: 'Power Bows',
  type: 'attack',
  text: 'Ignore the GUARD keyword when choosing a target for this attack.',
  team: 'Mighty Morphin',
  owner: 'mm5',
  color: 'pink',
  energy: 3,
  shields: 3,
  attack: {
    value: 6,
  },
}

const deck: RangerCard[] = [
  takeAim,
  takeAim,
  arrowShot,
  arrowShot,
  flyingKick,
  flyingKick,
  acrobatics,
  acrobatics,
  bladeBlaster,
  powerBows,
]

export default deck
