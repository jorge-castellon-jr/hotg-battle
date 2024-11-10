import { RangerCard, CardEffect } from '../../Card/CardTypes'

const knowledgeIsPower: RangerCard = {
  name: 'Knowledge Is Power',
  type: 'maneuver',
  shields: 2,
  text: 'Gain 1 energy. A Ranger of your choice may search their deck for a card and add it to their hand. If they do, they must shuffle their deck.',
  team: 'Mighty Morphin',
  owner: 'Blue',
  color: 'blue',
  energy: 0,
}

const counterJab: RangerCard = {
  name: 'Counter Jab',
  type: 'attack',
  shields: 1,
  text: '+1 Damage. Star: If this card is revealed for defense, deal 1 damage to an enemy card of your choice.',
  team: 'Mighty Morphin',
  owner: 'Blue',
  color: 'blue',
  energy: 0,
  attack: { value: 1 },
}

const tacticalStrike: RangerCard = {
  name: 'Tactical Strike',
  type: 'attack',
  shields: 2,
  text: 'After you play this card, place it on top of your deck instead of discard it.',
  team: 'Mighty Morphin',
  owner: 'Blue',
  color: 'blue',
  energy: 0,
  attack: {
    value: 2,
  },
}

const mightyMaces: RangerCard = {
  name: 'Mighty Maces',
  type: 'attack',
  shields: 3,
  text: 'Star: If this card is revealed for defense, gain 1 energy',
  team: 'Mighty Morphin',
  owner: 'Blue',
  color: 'blue',
  energy: 1,
  attack: {
    value: 3,
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
  owner: 'Blue',
  color: 'blue',
  energy: -1,
  attack: { value: -1 },
  effects: [energyToDamgeEffect],
}

const powerLance: RangerCard = {
  name: 'Power Lance',
  type: 'attack',
  shields: 3,
  text: 'After you play this card, place it on top of your deck instead of discarding it.',
  team: 'Mighty Morphin',
  owner: 'Blue',
  color: 'blue',
  energy: 3,
  attack: {
    value: 4,
  },
}

const deck: RangerCard[] = [
  knowledgeIsPower,
  knowledgeIsPower,
  counterJab,
  counterJab,
  tacticalStrike,
  tacticalStrike,
  mightyMaces,
  mightyMaces,
  bladeBlaster,
  powerLance,
]

export default deck
